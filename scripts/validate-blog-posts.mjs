/**
 * Blog Post Validator
 * Run: node scripts/validate-blog-posts.mjs
 *
 * Catches common issues in blog content files before they go live.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '../src/app/blog/[slug]/content');
const BLOG_DATA = path.join(__dirname, '../src/app/blog/blogData.ts');

const CHECKS = [
  {
    name: 'Raw markdown headings (## or ###)',
    regex: /^\s*#{1,6}\s/m,
    severity: 'error',
  },
  {
    name: 'Raw markdown bold (**text**)',
    regex: /\*\*[^*]+\*\*/,
    severity: 'error',
  },
  {
    name: 'Raw markdown italic (*text* or _text_)',
    regex: /(?<!\*)\*[^*\n]+\*(?!\*)|\b_[^_\n]+_\b/,
    severity: 'error',
  },
  {
    name: 'Raw markdown list items (lines starting with " - " or "* ")',
    regex: /^\s+[-*]\s/m,
    severity: 'error',
  },
  {
    name: 'Unclosed <br> tag (should be <br />)',
    regex: /<br(?!\s*\/)>/,
    severity: 'error',
  },
  {
    name: 'Nested <ul> inside <ul>',
    // Matches <ul> followed by content that contains another <ul> before any </ul>
    regex: /<ul[^>]*>(?:(?!<\/ul>)[\s\S])*<ul/,
    severity: 'error',
  },
  {
    name: 'Inline style={{ }} objects (use CSS classes instead)',
    regex: /style=\{\{/,
    severity: 'warning',
  },
  {
    name: 'Bare & ampersand in JSX text (use &amp; or "and")',
    regex: />[^<]*&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|ldquo;|rdquo;|nbsp;)[^<]*</,
    severity: 'warning',
  },
  {
    name: 'class= attribute (should be className=)',
    regex: /\sclass=/,
    severity: 'error',
  },
  {
    name: 'Empty heading tags used as spacers',
    regex: /<h[1-6]>\s*(&nbsp;)?\s*<\/h[1-6]>/,
    severity: 'warning',
  },
  {
    name: 'Leftover ** markdown remnant in paragraph',
    regex: /<p>\s*\*\*\s*<\/p>/,
    severity: 'error',
  },
  {
    name: 'href containing encoded HTML (&lt;a href)',
    regex: /href="&lt;/,
    severity: 'error',
  },
  {
    name: '<h1> inside content (title is already in page header)',
    regex: /<h1[\s>]/,
    severity: 'warning',
  },
];

let totalErrors = 0;
let totalWarnings = 0;

const files = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.tsx') && !f.startsWith('_'));

if (files.length === 0) {
  console.log('No blog content files found.');
  process.exit(0);
}

console.log(`\n📋 Validating ${files.length} blog post(s)...\n`);

for (const file of files) {
  const filePath = path.join(CONTENT_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  for (const check of CHECKS) {
    if (check.regex.test(content)) {
      issues.push({ ...check });
      if (check.severity === 'error') totalErrors++;
      else totalWarnings++;
    }
  }

  if (issues.length > 0) {
    console.log(`❌ ${file}`);
    for (const issue of issues) {
      const icon = issue.severity === 'error' ? '  🔴' : '  🟡';
      console.log(`${icon} [${issue.severity.toUpperCase()}] ${issue.name}`);
    }
    console.log('');
  } else {
    console.log(`✅ ${file}`);
  }
}

// Cross-check: every file in content/ has an entry in blogData.ts
console.log('\n📋 Cross-checking content files against blogData.ts...\n');
const blogDataContent = fs.readFileSync(BLOG_DATA, 'utf8');

for (const file of files) {
  const slug = file.replace('.tsx', '');
  if (!blogDataContent.includes(`'${slug}'`) && !blogDataContent.includes(`"${slug}"`)) {
    console.log(`  🟡 [WARNING] ${file} has no matching entry in blogData.ts (slug: ${slug})`);
    totalWarnings++;
  }
}

// Cross-check: every slug in blogData.ts has a content file
const slugMatches = [...blogDataContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
for (const match of slugMatches) {
  const slug = match[1];
  const expectedFile = path.join(CONTENT_DIR, `${slug}.tsx`);
  if (!fs.existsSync(expectedFile)) {
    console.log(`  🔴 [ERROR] blogData.ts has slug "${slug}" but no file content/${slug}.tsx exists`);
    totalErrors++;
  }
}

console.log(`\n${'─'.repeat(50)}`);
if (totalErrors === 0 && totalWarnings === 0) {
  console.log('✅ All blog posts passed validation.\n');
} else {
  console.log(`Result: ${totalErrors} error(s), ${totalWarnings} warning(s)\n`);
  if (totalErrors > 0) process.exit(1);
}
