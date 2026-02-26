import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';
import { Octokit } from 'octokit';

// ─── PDF extraction ──────────────────────────────────────────────────────────

async function extractPdfText(contentBuffer: Buffer): Promise<string> {
  const pdfParseModule: any = await import('pdf-parse');
  const PDFParseClass = pdfParseModule?.PDFParse ?? pdfParseModule?.default?.PDFParse;

  if (typeof PDFParseClass === 'function') {
    const parser = new PDFParseClass({ data: contentBuffer });
    try {
      const textResult = await parser.getText();
      return textResult?.text ?? '';
    } finally {
      if (typeof parser.destroy === 'function') await parser.destroy();
    }
  }

  const pdfParseFn =
    (typeof pdfParseModule === 'function' && pdfParseModule) ||
    (typeof pdfParseModule?.default === 'function' && pdfParseModule.default) ||
    (typeof pdfParseModule?.default?.default === 'function' && pdfParseModule.default.default) ||
    null;

  if (!pdfParseFn) throw new Error('Could not load PDF parser');
  const pdfData = await pdfParseFn(contentBuffer);
  return pdfData?.text ?? '';
}

// ─── DOCX extraction ─────────────────────────────────────────────────────────

interface ExtractedDocxContent {
  text: string;
  images: Array<{ data: string; contentType: string; index: number }>;
}

async function extractDocxText(contentBuffer: Buffer): Promise<ExtractedDocxContent> {
  const mammothModule: any = await import('mammoth');
  const mammoth = mammothModule?.default ?? mammothModule;
  if (typeof mammoth?.convertToHtml !== 'function') throw new Error('Could not load DOCX parser');

  const extractedImages: Array<{ data: string; contentType: string; index: number }> = [];
  let imageCounter = 0;

  const result = await mammoth.convertToHtml(
    { buffer: contentBuffer },
    {
      convertImage: mammoth.images.imgElement((image: any) => {
        const currentIndex = imageCounter++;
        return image.read('base64').then((imageBuffer: string) => {
          extractedImages.push({ data: imageBuffer, contentType: image.contentType || 'image/png', index: currentIndex });
          return { src: `IMAGE_PLACEHOLDER_${currentIndex}` };
        });
      })
    }
  );

  let text = result.value;
  text = text.replace(/<h1[^>]*>(.*?)<\/h1>/g, '\n## $1\n');
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/g, '\n## $1\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/g, '\n### $1\n');
  text = text.replace(/<strong[^>]*>(.*?)<\/strong>/g, '**$1**');
  text = text.replace(/<b[^>]*>(.*?)<\/b>/g, '**$1**');
  text = text.replace(/<em[^>]*>(.*?)<\/em>/g, '*$1*');
  text = text.replace(/<i[^>]*>(.*?)<\/i>/g, '*$1*');
  text = text.replace(/<li[^>]*>(.*?)<\/li>/g, '- $1\n');
  text = text.replace(/<p[^>]*>(.*?)<\/p>/g, '$1\n\n');
  text = text.replace(/<br\s*\/?>/g, '\n');
  text = text.replace(/<img[^>]*src="IMAGE_PLACEHOLDER_(\d+)"[^>]*>/g, '\n[IMAGE_$1]\n');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");

  return { text: text.trim(), images: extractedImages };
}

// ─── JSX sanitisation ────────────────────────────────────────────────────────

function sanitizeFinalComponent(componentCode: string): string {
  let s = componentCode;
  s = s.replace(/\bclassname\s*=/gi, 'className=');
  s = s.replace(/<ul>\s*<ul>/gi, '<ul>');
  s = s.replace(/<\/ul>\s*<\/ul>/gi, '</ul>');
  s = s.replace(/<ol>\s*<ol>/gi, '<ol>');
  s = s.replace(/<\/ol>\s*<\/ol>/gi, '</ol>');
  s = s.replace(/<p>(\s*<(?:div|ul|ol|h[1-6]|blockquote)[^>]*>[\s\S]*?<\/(?:div|ul|ol|h[1-6]|blockquote)>\s*)<\/p>/gi, '$1');
  s = s.replace(/<\/?font[^>]*>/gi, '');
  s = s.replace(/<\/?center[^>]*>/gi, '');
  s = s.replace(/<a[^>]*>\s*<\/a>/gi, '');
  s = s.replace(/<(li|p|div|span|strong|em|a)([^>]*)\s*\/>/gi, '<$1$2></$1>');
  s = s.replace(/(<ul[^>]*>)\s*<br\s*\/?>\s*/gi, '$1');
  s = s.replace(/\s*<br\s*\/?>\s*(<\/ul>)/gi, '$1');
  s = s.replace(/(<ol[^>]*>)\s*<br\s*\/?>\s*/gi, '$1');
  s = s.replace(/\s*<br\s*\/?>\s*(<\/ol>)/gi, '$1');
  return s;
}

function escapeForJSX(text: string): string {
  let e = text;
  e = e.replace(/\{/g, '&#123;');
  e = e.replace(/\}/g, '&#125;');

  const tagPlaceholders: string[] = [];
  e = e.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:\s+[a-zA-Z][a-zA-Z0-9-]*(?:=(?:"[^"]*"|'[^']*'|[^\s>]*))?)*\s*\/?)>/g,
    (match) => {
      const placeholder = `__TAG_PLACEHOLDER_${tagPlaceholders.length}__`;
      tagPlaceholders.push(match);
      return placeholder;
    }
  );
  e = e.replace(/</g, '&lt;');
  e = e.replace(/>/g, '&gt;');
  tagPlaceholders.forEach((tag, i) => { e = e.replace(`__TAG_PLACEHOLDER_${i}__`, tag); });
  e = e.replace(/`/g, '&#96;');
  e = e.replace(/\$\{/g, '&#36;{');
  e = e.replace(/\$&#123;/g, '&#36;&#123;');
  e = e.replace(/\\(?![nrt"'\\])/g, '&#92;');
  return e;
}

function cleanInlineHTML(html: string): string {
  let t = html;
  t = t.replace(/&nbsp;/g, ' ');
  t = t.replace(/&amp;/g, '&');
  t = t.replace(/&lt;/g, '<');
  t = t.replace(/&gt;/g, '>');
  t = t.replace(/&quot;/g, '"');
  t = t.replace(/&#39;/g, "'");
  t = t.replace(/&#x27;/g, "'");
  t = t.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)));

  const inlineTagPlaceholders: string[] = [];
  t = t.replace(/<a\s+[^>]*>[\s\S]*?<\/a>/gi, (match) => {
    const placeholder = `__INLINE_TAG_${inlineTagPlaceholders.length}__`;
    inlineTagPlaceholders.push(match);
    return placeholder;
  });
  t = t.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (match) => {
    const placeholder = `__INLINE_TAG_${inlineTagPlaceholders.length}__`;
    inlineTagPlaceholders.push(match);
    return placeholder;
  });
  t = t.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (match) => {
    const placeholder = `__INLINE_TAG_${inlineTagPlaceholders.length}__`;
    inlineTagPlaceholders.push(match);
    return placeholder;
  });
  t = t.replace(/<[^>]+>/g, '');
  inlineTagPlaceholders.forEach((tag, i) => { t = t.replace(`__INLINE_TAG_${i}__`, tag); });
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

function processInlineFormatting(text: string): string {
  let p = text;
  p = p.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  p = p.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  p = p.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return p;
}

// ─── HTML → JSX component ────────────────────────────────────────────────────

function generateBlogComponentFromHTML(
  htmlContent: string,
  imageUrls: { [key: string]: string },  // key is img_xxx id
  title: string
): string {
  const elements: string[] = [];
  let html = htmlContent;

  // Map [IMAGE: img_xxx] → __IMAGE_PLACEHOLDER_img_xxx__ (keeping the id)
  html = html.replace(/\[IMAGE:\s*(img_\d+)\]/g, '__IMAGE_PLACEHOLDER_$1__');
  // Also handle [IMAGE_N] from docx extraction
  html = html.replace(/\[IMAGE_(\d+)\]/g, '__IMAGE_PLACEHOLDER_docx_$1__');

  const blockRegex = /<(h[1-6]|p|ul|ol|blockquote|div)[^>]*>[\s\S]*?<\/\1>|__IMAGE_PLACEHOLDER_[^_]+__(?:_[^_]+)*__|<br\s*\/?>/gi;
  const blocks: string[] = [];
  const regex = new RegExp(blockRegex.source, 'gi');
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const before = html.slice(lastIndex, match.index).trim();
    if (before) blocks.push(before);
    blocks.push(match[0]);
    lastIndex = regex.lastIndex;
  }
  const remaining = html.slice(lastIndex).trim();
  if (remaining) blocks.push(remaining);

  for (const block of blocks) {
    if (!block.trim()) continue;

    // img_xxx style placeholder (from editor uploads)
    const imgIdMatch = block.match(/__IMAGE_PLACEHOLDER_(img_\d+)__/);
    if (imgIdMatch) {
      const imageUrl = imageUrls[imgIdMatch[1]];
      if (imageUrl) {
        elements.push(`      <div style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="${imageUrl}"
          alt="Fermium Designs - ${escapeForJSX(title)}"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>`);
      }
      continue;
    }

    // docx image placeholder
    const docxImgMatch = block.match(/__IMAGE_PLACEHOLDER_docx_(\d+)__/);
    if (docxImgMatch) {
      const imageUrl = imageUrls[`docx_${docxImgMatch[1]}`];
      if (imageUrl) {
        elements.push(`      <div style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="${imageUrl}"
          alt="Fermium Designs - ${escapeForJSX(title)}"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>`);
      }
      continue;
    }

    const h1Match = block.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) { const c = cleanInlineHTML(h1Match[1]); if (c.trim()) elements.push(`      <h1>${escapeForJSX(c)}</h1>`); continue; }

    const h2Match = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    if (h2Match) { const c = cleanInlineHTML(h2Match[1]); if (c.trim()) elements.push(`      <h2>${escapeForJSX(c)}</h2>`); continue; }

    const h3Match = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    if (h3Match) { const c = cleanInlineHTML(h3Match[1]); if (c.trim()) elements.push(`      <h3>${escapeForJSX(c)}</h3>`); continue; }

    const ulMatch = block.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
    if (ulMatch) {
      const items: string[] = [];
      const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let liMatch;
      while ((liMatch = liRegex.exec(ulMatch[1])) !== null) {
        const c = cleanInlineHTML(liMatch[1]);
        if (c.trim()) items.push(`        <li>${processInlineFormatting(escapeForJSX(c))}</li>`);
      }
      if (items.length > 0) elements.push(`      <ul>\n${items.join('\n')}\n      </ul>`);
      continue;
    }

    const olMatch = block.match(/<ol[^>]*>([\s\S]*?)<\/ol>/i);
    if (olMatch) {
      const items: string[] = [];
      const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let liMatch;
      while ((liMatch = liRegex.exec(olMatch[1])) !== null) {
        const c = cleanInlineHTML(liMatch[1]);
        if (c.trim()) items.push(`        <li>${processInlineFormatting(escapeForJSX(c))}</li>`);
      }
      if (items.length > 0) elements.push(`      <ol>\n${items.join('\n')}\n      </ol>`);
      continue;
    }

    const bqMatch = block.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i);
    if (bqMatch) { const c = cleanInlineHTML(bqMatch[1]); if (c.trim()) elements.push(`      <blockquote>${processInlineFormatting(escapeForJSX(c))}</blockquote>`); continue; }

    const pMatch = block.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    if (pMatch) { const c = cleanInlineHTML(pMatch[1]); if (c.trim()) elements.push(`      <p>${processInlineFormatting(escapeForJSX(c))}</p>`); continue; }

    const divMatch = block.match(/<div[^>]*>([\s\S]*?)<\/div>/i);
    if (divMatch) { const c = cleanInlineHTML(divMatch[1]); if (c.trim()) elements.push(`      <p>${processInlineFormatting(escapeForJSX(c))}</p>`); continue; }

    const plainText = block.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
    if (plainText) elements.push(`      <p>${processInlineFormatting(escapeForJSX(plainText))}</p>`);
  }

  const rawComponent = `export default function BlogContent() {
  return (
    <div className="blog-content-wrapper">
${elements.join('\n\n')}

      <div className="cta-box">
        <h3>Ready to Start Your Project?</h3>
        <p>Fermium Designs handles design, approvals, and construction management across Dubai — end to end.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
}
`;
  return sanitizeFinalComponent(rawComponent);
}

// ─── Markdown → JSX component ────────────────────────────────────────────────

function generateBlogComponentFromMarkdown(
  blogContent: string,
  imageUrls: { [key: string]: string },
  title: string
): string {
  const lines = blogContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  const elements: string[] = [];
  let currentList: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const flushList = () => {
    if (currentList.length > 0 && listType) {
      const listTag = listType === 'ul' ? 'ul' : 'ol';
      const listItems = currentList.map(item => `        <li>${processInlineFormatting(escapeForJSX(item))}</li>`).join('\n');
      elements.push(`      <${listTag}>\n${listItems}\n      </${listTag}>`);
      currentList = [];
      listType = null;
    }
  };

  const isBulletPoint = (line: string): string | null => {
    if (/^\d+\.\s+.+\?$/.test(line)) return null;
    const bulletPatterns = [
      /^[•●○◦▪▫■□✓✔→➔➤➢⇒]\s*(.+)$/,
      /^[-–—]\s+(.+)$/,
      /^\*\s+(.+)$/,
      /^\d+\.\s+(.+)$/,
      /^\d+\)\s+(.+)$/,
    ];
    for (const pattern of bulletPatterns) {
      const match = line.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const isHeading = (line: string): { level: number; text: string } | null => {
    if (/^#{2,6}\s*$/.test(line)) return null;
    if (line.startsWith('### ')) return { level: 3, text: line.substring(4) };
    if (line.startsWith('###') && line.length > 3) return { level: 3, text: line.substring(3).trim() };
    if (line.startsWith('## ')) return { level: 2, text: line.substring(3) };
    if (line.startsWith('##') && line.length > 2 && !line.startsWith('###')) return { level: 2, text: line.substring(2).trim() };
    const faqMatch = line.match(/^\d+\.\s+(.+\?)$/);
    if (faqMatch) return { level: 3, text: faqMatch[1] };
    const boldHeading = line.match(/^\*\*([^*]+)\*\*$/);
    if (boldHeading && boldHeading[1].length < 100 && !boldHeading[1].endsWith('.')) return { level: 2, text: boldHeading[1] };
    if (line.endsWith(':') && line.length < 80 && !line.includes('.')) return { level: 3, text: line };
    return null;
  };

  for (const line of lines) {
    // Docx image: [IMAGE_N]
    const docxImageMatch = line.match(/^\[IMAGE_(\d+)\]$/);
    if (docxImageMatch) {
      const imageUrl = imageUrls[`docx_${docxImageMatch[1]}`];
      if (imageUrl) {
        flushList();
        elements.push(`      <div style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="${imageUrl}"
          alt="Fermium Designs - ${escapeForJSX(title)}"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>`);
      }
      continue;
    }

    // Editor image: [IMAGE: img_xxx]
    const editorImageMatch = line.match(/^\[IMAGE:\s*(img_\d+)\]$/);
    if (editorImageMatch) {
      const imageUrl = imageUrls[editorImageMatch[1]];
      if (imageUrl) {
        flushList();
        elements.push(`      <div style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="${imageUrl}"
          alt="Fermium Designs - ${escapeForJSX(title)}"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>`);
      }
      continue;
    }

    const bulletContent = isBulletPoint(line);
    if (bulletContent) {
      if (listType !== 'ul') { flushList(); listType = 'ul'; }
      currentList.push(bulletContent);
      continue;
    }

    flushList();

    const heading = isHeading(line);
    if (heading) {
      elements.push(`      <h${heading.level}>${processInlineFormatting(escapeForJSX(heading.text))}</h${heading.level}>`);
      continue;
    }

    if (line.length > 0) {
      elements.push(`      <p>${processInlineFormatting(escapeForJSX(line))}</p>`);
    }
  }

  flushList();

  const rawComponent = `export default function BlogContent() {
  return (
    <div className="blog-content-wrapper">
${elements.join('\n\n')}

      <div className="cta-box">
        <h3>Ready to Start Your Project?</h3>
        <p>Fermium Designs handles design, approvals, and construction management across Dubai — end to end.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
}
`;
  return sanitizeFinalComponent(rawComponent);
}

// ─── Slug uniqueness check ───────────────────────────────────────────────────

async function findAvailableSlug(
  octokit: Octokit,
  owner: string,
  repo: string,
  branch: string,
  baseSlug: string
): Promise<string> {
  let slug = baseSlug;
  let version = 0;
  while (true) {
    const componentPath = `src/app/blog/[slug]/content/${slug}.tsx`;
    try {
      await octokit.rest.repos.getContent({ owner, repo, path: componentPath, ref: branch });
      version++;
      slug = `${baseSlug}-${version}`;
    } catch (error: any) {
      if (error.status === 404) return slug;
      return baseSlug; // on unknown error, proceed with original
    }
  }
}

// ─── Netlify Blob upload ─────────────────────────────────────────────────────

async function uploadToNetlifyBlob(data: Buffer, key: string, contentType: string): Promise<string> {
  const siteId = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_TOKEN;

  if (!siteId || !token) {
    throw new Error('NETLIFY_SITE_ID and NETLIFY_TOKEN environment variables are required for image uploads');
  }

  const store = getStore({ name: 'blog-images', siteID: siteId, token });

  // Convert Buffer to ArrayBuffer for @netlify/blobs compatibility
  const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
  await store.set(key, arrayBuffer, { metadata: { contentType } });

  // Serve via internal API route (stable URL, works in all environments)
  return `/api/images/${encodeURIComponent(key)}`;
}

// ─── Allowed image MIME types ─────────────────────────────────────────────────

const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']);
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB

function validateImage(file: File, fieldName: string): string | null {
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
    return `${fieldName} must be a JPEG, PNG, WebP, GIF, or AVIF image`;
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return `${fieldName} must be smaller than 10 MB (uploaded: ${(file.size / 1024 / 1024).toFixed(1)} MB)`;
  }
  return null;
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const title = (formData.get('title') as string || '').trim();
    let slug = (formData.get('slug') as string || '').trim();
    const category = (formData.get('category') as string || '').trim();
    const author = (formData.get('author') as string || 'Fermium Designs').trim();
    const excerpt = (formData.get('excerpt') as string || '').trim();
    const manualSEO = formData.get('manualSEO') === 'true';
    const metaTitle = (formData.get('metaTitle') as string || '').trim();
    const metaDescription = (formData.get('metaDescription') as string || '').trim();
    const focusKeyword = (formData.get('focusKeyword') as string || '').trim();
    const keywords = (formData.get('keywords') as string || '').trim();

    const cardImage = formData.get('cardImage') as File | null;
    const coverImage = formData.get('coverImage') as File | null;
    const contentFile = formData.get('contentFile') as File | null;
    const contentType = formData.get('contentType') as string;
    const manualContent = (formData.get('manualContent') as string || '').trim();

    // ── Validate required fields ──────────────────────────────────────────────
    const missing: string[] = [];
    if (!title) missing.push('title');
    if (!slug) missing.push('URL slug');
    if (!cardImage || cardImage.size === 0) missing.push('card image (for blog list)');
    if (!coverImage || coverImage.size === 0) missing.push('cover image (for article header)');
    if (!excerpt) missing.push('excerpt');
    const hasContent = (contentType === 'manual' && manualContent) || (contentFile && contentFile.size > 0);
    if (!hasContent) missing.push('article content');

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // ── Validate images ────────────────────────────────────────────────────────
    const cardErr = cardImage ? validateImage(cardImage, 'Card image') : null;
    if (cardErr) return NextResponse.json({ error: cardErr }, { status: 400 });

    const coverErr = coverImage ? validateImage(coverImage, 'Cover image') : null;
    if (coverErr) return NextResponse.json({ error: coverErr }, { status: 400 });

    // ── Validate slug ──────────────────────────────────────────────────────────
    slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    if (!slug) {
      return NextResponse.json({ error: 'Slug must contain at least one letter or number' }, { status: 400 });
    }

    // ── Validate content file type ─────────────────────────────────────────────
    if (contentFile && contentFile.size > 0) {
      const fileName = contentFile.name.toLowerCase();
      if (!fileName.endsWith('.pdf') && !fileName.endsWith('.docx')) {
        return NextResponse.json({ error: 'Only PDF and DOCX content files are supported' }, { status: 400 });
      }
      if (contentFile.size > 20 * 1024 * 1024) {
        return NextResponse.json({ error: 'Content file must be smaller than 20 MB' }, { status: 400 });
      }
    }

    // ── Validate GitHub env vars first (before uploading anything) ─────────────
    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;
    const githubBranch = process.env.GITHUB_BRANCH || 'master';

    if (!githubToken || !githubOwner || !githubRepo) {
      return NextResponse.json(
        { error: 'GitHub API not configured. Add GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO to environment variables.' },
        { status: 500 }
      );
    }

    const octokit = new Octokit({ auth: githubToken });
    const owner = githubOwner;
    const repo = githubRepo;
    const branch = githubBranch;

    // Verify repo access before uploading images
    try {
      await octokit.rest.repos.get({ owner, repo });
    } catch (repoError: any) {
      return NextResponse.json(
        { error: `Cannot access GitHub repository "${owner}/${repo}". Check GITHUB_TOKEN and GITHUB_OWNER/REPO.`, details: repoError.message },
        { status: 500 }
      );
    }

    // ── Resolve slug uniqueness ────────────────────────────────────────────────
    const originalSlug = slug;
    slug = await findAvailableSlug(octokit, owner, repo, branch, slug);
    const slugChanged = slug !== originalSlug;

    const createCategorySlug = (text: string): string =>
      text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/s$/, '').replace(/-+/g, '-').replace(/^-+|-+$/g, '').substring(0, 30);

    const categorySlug = createCategorySlug(category || title.split(' ').slice(0, 3).join(' '));
    const timestamp = Date.now();

    // ── Upload card & cover images ─────────────────────────────────────────────
    const cardImageExt = cardImage!.name.split('.').pop()?.toLowerCase() || 'jpg';
    const cardImageKey = `fermium-designs-${categorySlug}-list-${timestamp}.${cardImageExt}`;
    const cardImageBuffer = Buffer.from(await cardImage!.arrayBuffer());
    const cardImageUrl = await uploadToNetlifyBlob(cardImageBuffer, cardImageKey, cardImage!.type);

    const coverImageExt = coverImage!.name.split('.').pop()?.toLowerCase() || 'jpg';
    const coverImageKey = `fermium-designs-${categorySlug}-cover-${timestamp}.${coverImageExt}`;
    const coverImageBuffer = Buffer.from(await coverImage!.arrayBuffer());
    const coverImageUrl = await uploadToNetlifyBlob(coverImageBuffer, coverImageKey, coverImage!.type);

    // ── Parse content ──────────────────────────────────────────────────────────
    let blogContent = '';
    let extractedDocxImages: Array<{ data: string; contentType: string; index: number }> = [];
    let isHTMLContent = false;

    if (contentType === 'manual' && manualContent) {
      blogContent = manualContent;
      isHTMLContent = /<[a-z][\s\S]*>/i.test(manualContent);
    } else if (contentFile && contentFile.size > 0) {
      const contentBuffer = Buffer.from(await contentFile.arrayBuffer());
      const contentFileName = contentFile.name.toLowerCase();
      if (contentFileName.endsWith('.pdf')) {
        blogContent = await extractPdfText(contentBuffer);
      } else if (contentFileName.endsWith('.docx')) {
        const docxResult = await extractDocxText(contentBuffer);
        blogContent = docxResult.text;
        extractedDocxImages = docxResult.images;
      }
    }

    // ── Build imageUrls map: key → URL ────────────────────────────────────────
    // Keys: img_xxx (editor uploads), docx_N (docx extracted images)
    const imageUrls: { [key: string]: string } = {};

    // Handle editor inline content images: contentImage_<index>
    // Each contentImage_<index> corresponds to img_<timestamp> placeholders in content
    // The editor uses [IMAGE: img_xxx] where xxx is the timestamp of addImageToEditor
    const contentImageEntries = Array.from(formData.entries())
      .filter(([key]) => key.startsWith('contentImage_'))
      .sort(([a], [b]) => {
        const ai = parseInt(a.replace('contentImage_', ''), 10);
        const bi = parseInt(b.replace('contentImage_', ''), 10);
        return ai - bi;
      });

    // Find all [IMAGE: img_xxx] placeholders in content (in order of appearance)
    const imgPlaceholderRegex = /\[IMAGE:\s*(img_\d+)\]/g;
    const orderedPlaceholders: string[] = [];
    let pm;
    while ((pm = imgPlaceholderRegex.exec(blogContent)) !== null) {
      if (!orderedPlaceholders.includes(pm[1])) {
        orderedPlaceholders.push(pm[1]);
      }
    }

    // Upload each content image and map it to the correct img_xxx id
    for (let i = 0; i < contentImageEntries.length; i++) {
      const [, file] = contentImageEntries[i];
      const imgFile = file as File;
      if (!imgFile || imgFile.size === 0) continue;

      const imgErr = validateImage(imgFile, `Content image ${i + 1}`);
      if (imgErr) return NextResponse.json({ error: imgErr }, { status: 400 });

      const imageBuffer = Buffer.from(await imgFile.arrayBuffer());
      const imageExt = imgFile.name.split('.').pop()?.toLowerCase() || 'jpg';
      const imageKey = `fermium-designs-${categorySlug}-content-${i + 1}-${timestamp}.${imageExt}`;
      const imageUrl = await uploadToNetlifyBlob(imageBuffer, imageKey, imgFile.type);

      // Map to the placeholder id at the same position
      const imgId = orderedPlaceholders[i];
      if (imgId) {
        imageUrls[imgId] = imageUrl;
      }
    }

    // Upload docx extracted images
    for (const img of extractedDocxImages) {
      const imageExt = img.contentType.split('/')[1]?.toLowerCase() || 'png';
      const imageKey = `fermium-designs-${categorySlug}-content-${img.index + 1}-${timestamp}.${imageExt}`;
      const imageBuffer = Buffer.from(img.data, 'base64');
      imageUrls[`docx_${img.index}`] = await uploadToNetlifyBlob(imageBuffer, imageKey, img.contentType);
    }

    // ── Generate blog component ────────────────────────────────────────────────
    const componentContent = isHTMLContent
      ? generateBlogComponentFromHTML(blogContent, imageUrls, title)
      : generateBlogComponentFromMarkdown(blogContent, imageUrls, title);

    // ── Build SEO metadata ─────────────────────────────────────────────────────
    const seoData = manualSEO
      ? {
          metaTitle: metaTitle || `${title} | Fermium Designs`,
          metaDescription: metaDescription || excerpt,
          keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
        }
      : {
          metaTitle: `${title} | Fermium Designs`,
          metaDescription: excerpt,
          keywords: title.split(' ').filter(word => word.length > 3),
        };

    // ── Read & update blogData.ts ─────────────────────────────────────────────
    const componentPath = `src/app/blog/[slug]/content/${slug}.tsx`;
    const blogDataPath = 'src/app/blog/blogData.ts';

    const blogDataFile = await octokit.rest.repos.getContent({ owner, repo, path: blogDataPath, ref: branch });
    if (!('content' in blogDataFile.data)) throw new Error('Could not read blogData.ts');
    const blogDataContent = Buffer.from(blogDataFile.data.content, 'base64').toString('utf-8');

    const cleanForString = (text: string): string => {
      let cleaned = text.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
      if (cleaned.includes("'")) { cleaned = cleaned.replace(/"/g, '\\"'); return `"${cleaned}"`; }
      return `'${cleaned}'`;
    };

    const escapeForSingleQuote = (text: string): string =>
      text.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').replace(/'/g, "\\'").trim();

    const newBlogEntry = `  {
    id: '${timestamp}',
    title: ${cleanForString(title)},
    slug: '${slug}',
    category: ${cleanForString(category || 'General')},
    author: ${cleanForString(author)},
    date: '${new Date().toISOString().split('T')[0]}',
    excerpt: ${cleanForString(excerpt)},
    image: '${cardImageUrl}',
    coverImage: '${coverImageUrl}',
    metaTitle: ${cleanForString(seoData.metaTitle)},
    metaDescription: ${cleanForString(seoData.metaDescription)},
    keywords: [${seoData.keywords.map(k => `'${escapeForSingleQuote(k)}'`).join(', ')}],
    ogImage: '${coverImageUrl}',
  },`;

    const arrayMatch = blogDataContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
    if (!arrayMatch) throw new Error('Could not find blogPosts array in blogData.ts');

    // Insert new entry at the top of the array (newest first)
    const replacement = `export const blogPosts: BlogPost[] = [\n${newBlogEntry}\n${arrayMatch[1]}];`;
    const updatedBlogDataContent = blogDataContent.replace(
      /export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/,
      replacement
    );

    // ── Commit both files to GitHub ────────────────────────────────────────────
    const { data: refData } = await octokit.rest.git.getRef({ owner, repo, ref: `heads/${branch}` });
    const currentCommitSha = refData.object.sha;
    const { data: commitData } = await octokit.rest.git.getCommit({ owner, repo, commit_sha: currentCommitSha });
    const baseTreeSha = commitData.tree.sha;

    const [componentBlob, blogDataBlob] = await Promise.all([
      octokit.rest.git.createBlob({ owner, repo, content: Buffer.from(componentContent).toString('base64'), encoding: 'base64' }),
      octokit.rest.git.createBlob({ owner, repo, content: Buffer.from(updatedBlogDataContent).toString('base64'), encoding: 'base64' }),
    ]);

    const { data: newTree } = await octokit.rest.git.createTree({
      owner, repo,
      base_tree: baseTreeSha,
      tree: [
        { path: componentPath, mode: '100644', type: 'blob', sha: componentBlob.data.sha },
        { path: blogDataPath, mode: '100644', type: 'blob', sha: blogDataBlob.data.sha },
      ],
    });

    const { data: newCommit } = await octokit.rest.git.createCommit({
      owner, repo,
      message: `Add blog: ${title}`,
      tree: newTree.sha,
      parents: [currentCommitSha],
    });

    await octokit.rest.git.updateRef({ owner, repo, ref: `heads/${branch}`, sha: newCommit.sha });

    return NextResponse.json({
      success: true,
      message: 'Blog published successfully! Netlify will deploy in ~1–2 minutes.',
      slug,
      originalSlug: slugChanged ? originalSlug : undefined,
      slugChanged,
      previewUrl: `https://www.fermiumdesigns.ae/blog/${slug}`,
      note: slugChanged
        ? `Slug "${originalSlug}" already existed — published as "${slug}" instead.`
        : 'Wait ~1–2 minutes for Netlify to deploy the new page.',
    });

  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create blog post. Please try again.' },
      { status: 500 }
    );
  }
}
