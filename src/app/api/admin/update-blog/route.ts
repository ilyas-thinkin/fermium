import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';
import { Octokit } from 'octokit';
import sanitizeHtml from 'sanitize-html';
import { htmlToJsx } from 'html-to-jsx-transform';

function getErrMsg(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}

// Pre-process raw HTML: sanitize-html strips dangerous elements,
// html-to-jsx-transform fixes attribute names (class→className, etc.)
function preProcessHtml(html: string): string {
  const clean = sanitizeHtml(html, {
    allowedTags: [
      'h1','h2','h3','h4','h5','h6',
      'p','br','hr',
      'strong','em','b','i','s','del','ins','mark','sub','sup',
      'ul','ol','li',
      'blockquote','pre','code',
      'a','img',
      'figure','figcaption',
      'table','thead','tbody','tfoot','tr','th','td','caption',
      'div','span',
    ],
    allowedAttributes: {
      'a': ['href','target','rel'],
      'img': ['src','alt','width','height'],
      'th': ['colspan','rowspan','scope'],
      'td': ['colspan','rowspan'],
      'table': ['summary'],
      '*': ['class','id'],
    },
    allowedStyles: {},
    textFilter: (text) => text,
  });
  try {
    return htmlToJsx(clean);
  } catch {
    return clean;
  }
}

async function uploadToNetlifyBlob(data: Buffer, key: string, contentType: string): Promise<string> {
  const siteId = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_TOKEN;

  if (!siteId || !token) {
    throw new Error('NETLIFY_SITE_ID and NETLIFY_TOKEN environment variables are required');
  }

  const store = getStore({
    name: 'blog-images',
    siteID: siteId,
    token,
  });

  // Convert Buffer to ArrayBuffer for @netlify/blobs compatibility
  const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
  await store.set(key, arrayBuffer, { metadata: { contentType } });

  // Serve via internal API route (stable URL, works in all environments)
  return `/api/images/${encodeURIComponent(key)}`;
}

// Escape text for safe JSX rendering
function escapeForJSX(text: string): string {
  let escaped = text;

  // Escape curly braces
  escaped = escaped.replace(/\{/g, '&#123;');
  escaped = escaped.replace(/\}/g, '&#125;');

  // Protect valid HTML tags
  const tagPlaceholders: string[] = [];
  escaped = escaped.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:\s+[a-zA-Z][a-zA-Z0-9-]*(?:=(?:"[^"]*"|'[^']*'|[^\s>]*))?)*\s*\/?)>/g,
    (match) => {
      const placeholder = `__TAG_PLACEHOLDER_${tagPlaceholders.length}__`;
      tagPlaceholders.push(match);
      return placeholder;
    }
  );

  // Escape remaining < and >
  escaped = escaped.replace(/</g, '&lt;');
  escaped = escaped.replace(/>/g, '&gt;');

  // Restore valid tags
  tagPlaceholders.forEach((tag, i) => {
    escaped = escaped.replace(`__TAG_PLACEHOLDER_${i}__`, tag);
  });

  // Escape backticks
  escaped = escaped.replace(/`/g, '&#96;');

  // Escape template expressions
  escaped = escaped.replace(/\$\{/g, '&#36;{');
  escaped = escaped.replace(/\$&#123;/g, '&#36;&#123;');

  // Escape backslashes
  escaped = escaped.replace(/\\(?![nrt"'\\])/g, '&#92;');

  return escaped;
}

// Clean inline HTML - preserve inline formatting tags (a, strong, em, b, i) but remove block tags

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const originalSlug = formData.get('originalSlug') as string;

    if (!originalSlug) {
      return NextResponse.json({ error: 'Original slug is required' }, { status: 400 });
    }

    // Extract form data
    const title = (formData.get('title') as string || '').trim();
    const slug = (formData.get('slug') as string || '').trim();
    const category = (formData.get('category') as string || '').trim();
    const author = (formData.get('author') as string || 'Fermium Designs').trim();
    const excerpt = (formData.get('excerpt') as string || '').trim();
    const contentType = (formData.get('contentType') as string || 'manual');
    const manualContent = (formData.get('manualContent') as string || '').trim();
    const imageAlt = (formData.get('imageAlt') as string || `Fermium Designs - ${title}`).trim();

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
    }

    const cardImage = formData.get('cardImage') as File | null;
    const coverImage = formData.get('coverImage') as File | null;
    const existingCardImage = formData.get('existingCardImage') as string;
    const existingCoverImage = formData.get('existingCoverImage') as string;

    // Check for required environment variables
    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;
    const githubBranch = process.env.GITHUB_BRANCH || 'master';

    if (!githubToken || !githubOwner || !githubRepo) {
      return NextResponse.json(
        { error: 'GitHub API not configured' },
        { status: 500 }
      );
    }

    const octokit = new Octokit({ auth: githubToken });
    const owner = githubOwner;
    const repo = githubRepo;
    const branch = githubBranch;

    // Handle images - upload new ones to Netlify Blob if provided
    let cardImagePath = existingCardImage;
    let coverImagePath = existingCoverImage;
    const timestamp = Date.now();

    const createCategorySlug = (text: string): string => {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/s$/, '')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 30);
    };

    const categorySlug = createCategorySlug(category || title.split(' ').slice(0, 3).join(' '));

    if (cardImage && cardImage.size > 0) {
      const cardImageExt = cardImage.name.split('.').pop();
      const cardImageName = `fermium-designs-${categorySlug}-list-${timestamp}.${cardImageExt}`;
      const cardImageBuffer = Buffer.from(await cardImage.arrayBuffer());
      cardImagePath = await uploadToNetlifyBlob(cardImageBuffer, cardImageName, cardImage.type);
    }

    if (coverImage && coverImage.size > 0) {
      const coverImageExt = coverImage.name.split('.').pop();
      const coverImageName = `fermium-designs-${categorySlug}-cover-${timestamp}.${coverImageExt}`;
      const coverImageBuffer = Buffer.from(await coverImage.arrayBuffer());
      coverImagePath = await uploadToNetlifyBlob(coverImageBuffer, coverImageName, coverImage.type);
    }

    // File paths
    const blogDataPath = 'src/app/blog/blogData.ts';
    const contentPath = `src/app/blog/[slug]/content/${slug}.tsx`;
    const oldContentPath = originalSlug !== slug ? `src/app/blog/[slug]/content/${originalSlug}.tsx` : null;

    // Get all required files in parallel
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filePromises: Promise<any>[] = [
      octokit.rest.repos.getContent({ owner, repo, path: blogDataPath, ref: branch }),
    ];

    // If updating content, try to get existing content file
    if (contentType === 'manual' && manualContent) {
      filePromises.push(
        octokit.rest.repos.getContent({ owner, repo, path: contentPath, ref: branch }).catch(() => null)
      );
    }

    // If slug changed, try to get old content file for deletion
    if (oldContentPath) {
      filePromises.push(
        octokit.rest.repos.getContent({ owner, repo, path: oldContentPath, ref: branch }).catch(() => null)
      );
    }

    const fileResults = await Promise.all(filePromises);
    const blogDataResult = fileResults[0];

    if (!('content' in blogDataResult.data)) {
      return NextResponse.json({ error: 'Could not read required files' }, { status: 500 });
    }

    const blogDataContent = Buffer.from(blogDataResult.data.content, 'base64').toString('utf-8');

    // Check if blog exists
    const slugExists = blogDataContent.includes(`slug: '${originalSlug}'`) || blogDataContent.includes(`slug: "${originalSlug}"`);
    if (!slugExists) {
      return NextResponse.json({ error: `Blog not found with slug: ${originalSlug}` }, { status: 404 });
    }

    // Parse blog objects from blogData.ts
    const interfaceMatch = blogDataContent.match(/(export interface BlogPost[\s\S]*?}\n)/);
    const arrayStartIndex = blogDataContent.indexOf('export const blogPosts: BlogPost[] = [') + 'export const blogPosts: BlogPost[] = ['.length;
    const arrayEndIndex = blogDataContent.lastIndexOf('];');
    const arrayContent = blogDataContent.substring(arrayStartIndex, arrayEndIndex);

    const blogObjects: string[] = [];
    let depth = 0;
    let currentObject = '';
    let inObject = false;

    for (let i = 0; i < arrayContent.length; i++) {
      const char = arrayContent[i];
      if (char === '{') {
        if (depth === 0) {
          inObject = true;
          currentObject = '{';
        } else {
          currentObject += char;
        }
        depth++;
      } else if (char === '}') {
        depth--;
        currentObject += char;
        if (depth === 0 && inObject) {
          blogObjects.push(currentObject.trim());
          currentObject = '';
          inObject = false;
        }
      } else if (inObject) {
        currentObject += char;
      }
    }

    // Find the blog to update
    const blogIndex = blogObjects.findIndex(obj =>
      obj.includes(`slug: '${originalSlug}'`) || obj.includes(`slug: "${originalSlug}"`)
    );

    if (blogIndex === -1) {
      return NextResponse.json({ error: `Blog not found with slug: ${originalSlug}` }, { status: 404 });
    }

    const originalBlog = blogObjects[blogIndex];

    // Extract original ID and date
    const idMatch = originalBlog.match(/id:\s*['"](\d+)['"]/);
    const dateMatch = originalBlog.match(/date:\s*['"]([^'"]+)['"]/);
    const id = idMatch ? idMatch[1] : String(Date.now());
    const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];

    // Helper to format string values
    const cleanForString = (text: string): string => {
      let cleaned = text
        .replace(/[\r\n]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (cleaned.includes("'")) {
        cleaned = cleaned.replace(/"/g, '\\"');
        return `"${cleaned}"`;
      }
      return `'${cleaned}'`;
    };

    // Build updated blog entry
    const updatedBlog = `{
    id: '${id}',
    title: ${cleanForString(title)},
    slug: '${slug}',
    category: ${cleanForString(category)},
    author: ${cleanForString(author)},
    date: '${date}',
    dateModified: '${new Date().toISOString().split('T')[0]}',
    excerpt: ${cleanForString(excerpt)},
    image: '${cardImagePath}',
    coverImage: '${coverImagePath}',
    metaTitle: ${cleanForString(`${title} | Fermium Designs`)},
    metaDescription: ${cleanForString(excerpt)},
    keywords: [${title.split(/\s+/).map(w => w.replace(/[^a-zA-Z0-9]/g, '')).filter(w => w.length > 3).map(k => `'${k}'`).join(', ')}],
    ogImage: '${coverImagePath}',
  }`;

    blogObjects[blogIndex] = updatedBlog;

    // Rebuild blogData.ts
    const interfacePart = interfaceMatch ? interfaceMatch[1] : '';
    const newArrayContent = '\n' + blogObjects.map(obj => '  ' + obj).join(',\n\n') + '\n';
    const newBlogDataContent = `${interfacePart}
export const blogPosts: BlogPost[] = [${newArrayContent}];
`;

    // Prepare content file if manual content changed
    let componentContent: string | null = null;
    if (contentType === 'manual' && manualContent) {
      // Map img_xxx id → uploaded URL (same approach as create-blog)
      const imageUrls: { [imgId: string]: string } = {};

      // Find all [IMAGE: img_xxx] placeholders in content (in order of appearance)
      const imgPlaceholderRegex = /\[IMAGE:\s*(img_\d+)\]/g;
      const orderedPlaceholders: string[] = [];
      let pm;
      while ((pm = imgPlaceholderRegex.exec(manualContent)) !== null) {
        if (!orderedPlaceholders.includes(pm[1])) orderedPlaceholders.push(pm[1]);
      }

      // Upload content images in index order and map each to its placeholder id
      const contentImageEntries = Array.from(formData.entries())
        .filter(([key]) => key.startsWith('contentImage_'))
        .sort(([a], [b]) => parseInt(a.replace('contentImage_', ''), 10) - parseInt(b.replace('contentImage_', ''), 10));

      for (let i = 0; i < contentImageEntries.length; i++) {
        const file = contentImageEntries[i][1] as File;
        if (!file || file.size === 0) continue;
        const imageBuffer = Buffer.from(await file.arrayBuffer());
        const imageExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
        const imageName = `fermium-designs-${categorySlug}-content-${i + 1}-${timestamp}.${imageExt}`;
        const imageUrl = await uploadToNetlifyBlob(imageBuffer, imageName, file.type);
        const imgId = orderedPlaceholders[i];
        if (imgId) imageUrls[imgId] = imageUrl;
      }

      let contentToWrap = manualContent;

      // Replace image placeholders with actual uploaded image components
      contentToWrap = contentToWrap.replace(/\[IMAGE:\s*(img_\d+)\]/g, (match, id) => {
        const imageUrl = imageUrls[id];
        if (imageUrl) {
          return `<figure className="blog-image-figure">
        <img src="${imageUrl}" alt="${escapeForJSX(imageAlt)}" />
      </figure>`;
        }
        return match;
      });

      // ── Pre-process: sanitize-html + html-to-jsx-transform ───────────────
      // Runs before regex sanitizer — strips dangerous elements and fixes
      // all attribute names (class→className, tabindex→tabIndex, etc.)
      contentToWrap = preProcessHtml(contentToWrap);

      // ── Sanitize: strip inline styles, fix HTML issues, clean artifacts ──
      // Fix lowercase classname= → className= (copy-paste from HTML editors)
      contentToWrap = contentToWrap.replace(/\bclassname\s*=/gi, 'className=');
      // Fix class= → className=
      contentToWrap = contentToWrap.replace(/\bclass="/gi, 'className="');
      // Strip data-* and aria-* attributes (copy-paste artifacts)
      contentToWrap = contentToWrap.replace(/\s+data-[a-z][a-z0-9-]*="[^"]*"/gi, '');
      contentToWrap = contentToWrap.replace(/\s+aria-[a-z][a-z0-9-]*="[^"]*"/gi, '');
      contentToWrap = contentToWrap.replace(/\s+aria-[a-z][a-z0-9-]*(=[^\s>]+)?/gi, '');
      // Remove SVG elements entirely (always copy-paste junk in blog content)
      contentToWrap = contentToWrap.replace(/<svg[\s\S]*?<\/svg>/gi, '');
      contentToWrap = contentToWrap.replace(/<\/?(use|path|circle|rect|line|polyline|polygon|ellipse|g|defs|symbol|mask|clipPath|linearGradient|radialGradient|stop|tspan|textPath)[^>]*>/gi, '');
      // Fix bare <a> tags with no href — extract text content
      contentToWrap = contentToWrap.replace(/<a(?:\s[^>]*)?>([^<]*)<\/a>/gi, (match, inner) => {
        const text = inner.trim();
        if (/^https?:\/\//.test(text)) return text;
        return text || '';
      });
      // Remove inline style="..." (use CSS classes)
      contentToWrap = contentToWrap.replace(/\s*style="[^"]*"/gi, '');
      // Fix self-closing void elements
      contentToWrap = contentToWrap.replace(/<br(?!\s*\/>)>/gi, '<br />');
      contentToWrap = contentToWrap.replace(/<hr(?!\s*\/>)([^>]*)>/gi, '<hr$1 />');
      contentToWrap = contentToWrap.replace(/<img([^>]*[^/])>/gi, '<img$1 />');
      // Remove unsafe elements
      contentToWrap = contentToWrap.replace(/<\/?font[^>]*>/gi, '');
      contentToWrap = contentToWrap.replace(/<\/?center[^>]*>/gi, '');
      contentToWrap = contentToWrap.replace(/<\/?u[^a-zA-Z][^>]*>/gi, '');
      contentToWrap = contentToWrap.replace(/<\/?u>/gi, '');
      // Strip script/style/iframe (never valid in content)
      contentToWrap = contentToWrap.replace(/<script[\s\S]*?<\/script>/gi, '');
      contentToWrap = contentToWrap.replace(/<style[\s\S]*?<\/style>/gi, '');
      contentToWrap = contentToWrap.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '');
      // Remove p tags containing only whitespace-only <strong> tags
      contentToWrap = contentToWrap.replace(/<p>(\s*<strong[^>]*>\s*)+\s*<\/p>/gi, '');
      // Fix typo/unknown tags (e.g. <strongr>, <stronga>)
      contentToWrap = contentToWrap.replace(/<\/?(?:strong[a-z]+|em[a-z]+|h[1-6][a-z]+|div[a-z]+|span[a-z]+|p[a-z]+)[^>]*>/gi, '');
      // Fix bare & not part of an entity
      contentToWrap = contentToWrap.replace(/&(?!(amp|lt|gt|quot|apos|nbsp|#\d+|#x[\da-f]+|ldquo|rdquo|lsquo|rsquo|mdash|ndash|hellip);)/gi, '&amp;');
      // Escape unescaped apostrophes in JSX text nodes
      contentToWrap = contentToWrap.replace(/>([^<]*)</g, (match, text) => {
        return '>' + text.replace(/'/g, '&apos;') + '<';
      });
      // Convert leftover **bold** markdown
      contentToWrap = contentToWrap.replace(/\*\*([^*<>]+)\*\*/g, '<strong>$1</strong>');
      // Convert leftover ## heading markdown inside <p> tags
      contentToWrap = contentToWrap.replace(/<p>\s*#{1,6}\s+([^<]+)<\/p>/g, (_, text) => `<h2>${text.trim()}</h2>`);
      // Flatten nested lists
      contentToWrap = contentToWrap.replace(/<ul[^>]*>\s*<ul>/gi, '<ul>');
      contentToWrap = contentToWrap.replace(/<\/ul>\s*<\/ul>/gi, '</ul>');
      contentToWrap = contentToWrap.replace(/<ol[^>]*>\s*<ol>/gi, '<ol>');
      contentToWrap = contentToWrap.replace(/<\/ol>\s*<\/ol>/gi, '</ol>');
      // Remove empty tags
      contentToWrap = contentToWrap.replace(/<a[^>]*>\s*<\/a>/gi, '');
      contentToWrap = contentToWrap.replace(/<p>\s*<\/p>/gi, '');
      contentToWrap = contentToWrap.replace(/<h[1-6]>\s*(&nbsp;|\s)*\s*<\/h[1-6]>/gi, '');
      contentToWrap = contentToWrap.replace(/<strong>\s*<\/strong>/gi, '');
      // Strip existing CTA box (will be re-added below)
      contentToWrap = contentToWrap.replace(/<div className="cta-box">[\s\S]*?<\/div>/g, '');
      // Clean whitespace
      contentToWrap = contentToWrap.replace(/\n{3,}/g, '\n\n');
      contentToWrap = contentToWrap.trim();

      // Wrap the content directly in the JSX component structure
      componentContent = `export default function BlogContent() {
  return (
    <div className="blog-content-wrapper">
      ${contentToWrap}

      <div className="cta-box">
        <h3>Ready to Start Your Project?</h3>
        <p>Fermium Designs handles design, approvals, and construction management across Dubai — end to end.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
}
`;
    }

    // Create a single commit with all changes using Git Data API
    const { data: refData } = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${branch}`,
    });
    const currentCommitSha = refData.object.sha;

    const { data: commitData } = await octokit.rest.git.getCommit({
      owner,
      repo,
      commit_sha: currentCommitSha,
    });
    const baseTreeSha = commitData.tree.sha;

    // Create blobs for all files to update
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blobPromises: Promise<any>[] = [
      octokit.rest.git.createBlob({
        owner,
        repo,
        content: Buffer.from(newBlogDataContent).toString('base64'),
        encoding: 'base64',
      }),
    ];

    // Create content blob if we have content
    if (componentContent) {
      blobPromises.push(
        octokit.rest.git.createBlob({
          owner,
          repo,
          content: Buffer.from(componentContent).toString('base64'),
          encoding: 'base64',
        })
      );
    }

    const blobResults = await Promise.all(blobPromises);
    const blogDataBlob = blobResults[0];
    const contentBlob = componentContent ? blobResults[1] : null;

    // Build tree entries
    const treeEntries: Array<{
      path: string;
      mode: '100644';
      type: 'blob';
      sha: string | null;
    }> = [
      {
        path: blogDataPath,
        mode: '100644',
        type: 'blob',
        sha: blogDataBlob.data.sha,
      },
    ];

    if (contentBlob) {
      treeEntries.push({
        path: contentPath,
        mode: '100644',
        type: 'blob',
        sha: contentBlob.data.sha,
      });
    }

    // Delete old content file if slug changed
    // fileResults[0] = blogData, remaining = content file check(s) in the order pushed
    if (oldContentPath) {
      // The old content file fetch was pushed last — check if it resolved (non-null)
      const oldFileResult = fileResults[fileResults.length - 1];
      const oldFileExists = oldFileResult !== null && oldFileResult?.data && 'sha' in oldFileResult.data;
      if (oldFileExists) {
        treeEntries.push({
          path: oldContentPath,
          mode: '100644',
          type: 'blob',
          sha: null, // sha: null tells GitHub to delete the file
        });
      }
    }

    // Create new tree
    const { data: newTree } = await octokit.rest.git.createTree({
      owner,
      repo,
      base_tree: baseTreeSha,
      tree: treeEntries,
    });

    // Create commit
    const { data: newCommit } = await octokit.rest.git.createCommit({
      owner,
      repo,
      message: `Update blog: ${title}`,
      tree: newTree.sha,
      parents: [currentCommitSha],
    });

    // Update branch reference
    await octokit.rest.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha,
    });

    return NextResponse.json({
      success: true,
      message: 'Blog updated successfully. Netlify will redeploy automatically.',
      slug,
      originalSlug: originalSlug !== slug ? originalSlug : undefined,
    });
  } catch (error: unknown) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: getErrMsg(error) || 'Failed to update blog' },
      { status: 500 }
    );
  }
}
