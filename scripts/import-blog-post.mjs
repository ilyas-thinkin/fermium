/**
 * Blog Post Importer
 * ------------------
 * Converts a Word (.docx) file into a clean blog content TSX file.
 *
 * Usage:
 *   node scripts/import-blog-post.mjs <path-to-docx> <slug>
 *
 * Example:
 *   node scripts/import-blog-post.mjs ~/Downloads/my-article.docx my-article-slug
 *
 * After running:
 *   1. Check the generated file in src/app/blog/[slug]/content/<slug>.tsx
 *   2. Add an entry in src/app/blog/blogData.ts with the same slug
 *   3. Run: npm run blog:validate
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const mammoth = require('mammoth');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '../src/app/blog/[slug]/content');

const [,, docxPath, slug] = process.argv;

if (!docxPath || !slug) {
  console.error('Usage: node scripts/import-blog-post.mjs <path-to-docx> <slug>');
  process.exit(1);
}

if (!fs.existsSync(docxPath)) {
  console.error(`File not found: ${docxPath}`);
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error('Slug must be lowercase letters, numbers, and hyphens only. Example: my-blog-post-2026');
  process.exit(1);
}

const outputPath = path.join(CONTENT_DIR, `${slug}.tsx`);
if (fs.existsSync(outputPath)) {
  console.error(`Output file already exists: ${outputPath}\nDelete it first if you want to re-import.`);
  process.exit(1);
}

console.log(`\n📄 Importing: ${docxPath}`);
console.log(`📁 Output:    ${outputPath}\n`);

const result = await mammoth.convertToHtml({ path: docxPath }, {
  styleMap: [
    "p[style-name='Heading 1'] => h2:fresh",
    "p[style-name='Heading 2'] => h2:fresh",
    "p[style-name='Heading 3'] => h3:fresh",
    "p[style-name='Heading 4'] => h3:fresh",
  ],
});

let html = result.value;

if (result.messages.length > 0) {
  console.log('⚠️  Conversion warnings:');
  result.messages.forEach(m => console.log(`   ${m.message}`));
  console.log('');
}

// ── Clean up the HTML ──────────────────────────────────────────────────────

// Fix self-closing br
html = html.replace(/<br>/g, '<br />');

// Remove empty paragraphs and spacer headings
html = html.replace(/<p>(\s|&nbsp;)*<\/p>/g, '');
html = html.replace(/<h[1-6]>(\s|&nbsp;)*<\/h[1-6]>/g, '');

// Flatten nested ul/ol
html = html.replace(/<ul>\s*<ul>/g, '<ul>');
html = html.replace(/<\/ul>\s*<\/ul>/g, '</ul>');
html = html.replace(/<ol>\s*<ol>/g, '<ol>');
html = html.replace(/<\/ol>\s*<\/ol>/g, '</ol>');

// Remove inline styles
html = html.replace(/\s*style="[^"]*"/g, '');

// Replace class= with className=
html = html.replace(/\sclass="/g, ' className="');

// Fix bare & not followed by an entity
html = html.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|nbsp|ldquo|rdquo);)/g, '&amp;');

// Remove empty strong/em
html = html.replace(/<strong>\s*<\/strong>/g, '');
html = html.replace(/<em>\s*<\/em>/g, '');

// Trim whitespace inside tags
html = html.replace(/(<[a-z0-9]+[^>]*>)\s+/g, '$1');
html = html.replace(/\s+(<\/[a-z0-9]+>)/g, '$1');

// Indent the HTML for readability
const lines = html
  .replace(/(<\/?(h[1-6]|p|ul|ol|li|div|blockquote)[^>]*>)/g, '\n$1\n')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.length > 0);

let indented = '';
let depth = 0;
for (const line of lines) {
  if (/^<\/(ul|ol|div|blockquote)>/.test(line)) depth = Math.max(0, depth - 1);
  indented += '      ' + '  '.repeat(depth) + line + '\n';
  if (/^<(ul|ol|div|blockquote)[^/]/.test(line)) depth++;
}

// ── Write output ───────────────────────────────────────────────────────────

const output = `export default function BlogContent() {
  return (
    <div className="blog-content-wrapper">

${indented}
      <div className="cta-box">
        <h3>Ready to Start Your Project?</h3>
        <p>Fermium Designs handles design, approvals, and construction management across Dubai — end to end.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>

    </div>
  );
}
`;

fs.writeFileSync(outputPath, output, 'utf8');

console.log(`✅ Created: ${outputPath}`);
console.log('\nNext steps:');
console.log(`  1. Review the file: ${outputPath}`);
console.log('  2. Add an entry in src/app/blog/blogData.ts with slug: "' + slug + '"');
console.log('  3. Run: npm run blog:validate');
console.log('  4. Run: npm run dev  — and check the post looks correct\n');
