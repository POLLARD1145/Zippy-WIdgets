import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function relativeToDist(file) {
  return '/' + path.relative(DIST, file).replace(/\\/g, '/');
}

const REDIRECT_RE = /<meta[^>]*http-equiv="refresh"[^>]*>/i;
const NOINDEX_RE = /<meta[^>]*name="robots"[^>]*content="noindex"[^>]*>/i;
const JSONLD_TYPE_RE = (type) => new RegExp(`"@type"\\s*:\\s*"${type}"`, 'i');

function checkFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  const route = relativeToDist(file).replace(/index\.html$/, '');
  const fileName = path.basename(file);
  const issues = [];

  const isRedirect = REDIRECT_RE.test(html) && NOINDEX_RE.test(html);
  const isVerification = /^[a-z]+_[a-f0-9]+\.html$/i.test(fileName);
  const is404 = fileName === '404.html';

  if (isRedirect || isVerification || is404) {
    return { route, issues };
  }

  const h1s = [...html.matchAll(/<h1[\s>]/gi)].length;
  if (h1s === 0) issues.push('missing h1');
  if (h1s > 1) issues.push(`${h1s} h1 tags`);

  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
  if (!canonical) issues.push('missing canonical');
  else if (!canonical[1].endsWith('/')) issues.push(`canonical missing trailing slash: ${canonical[1]}`);

  const hasSchema = html.includes('application/ld+json');
  if (!hasSchema) issues.push('no JSON-LD schema');

  if (route.startsWith('/tool/') && route !== '/tool/') {
    if (!JSONLD_TYPE_RE('WebApplication').test(html)) {
      issues.push('tool page missing WebApplication schema');
    }
    if (!JSONLD_TYPE_RE('BreadcrumbList').test(html)) {
      issues.push('tool page missing BreadcrumbList schema');
    }
  }

  if (route.startsWith('/game/') && route !== '/game/') {
    if (!JSONLD_TYPE_RE('VideoGame').test(html)) {
      issues.push('game page missing VideoGame schema');
    }
    if (!JSONLD_TYPE_RE('BreadcrumbList').test(html)) {
      issues.push('game page missing BreadcrumbList schema');
    }
  }

  if (route.startsWith('/blog/') && route !== '/blog/') {
    if (!JSONLD_TYPE_RE('BlogPosting').test(html) && !JSONLD_TYPE_RE('Article').test(html)) {
      issues.push('blog post missing Article/BlogPosting schema');
    }
  }

  return { route, issues };
}

const files = walk(DIST);
const results = files.map(checkFile).filter(r => r.issues.length > 0);
const checked = files.length;

if (results.length === 0) {
  console.log(`seo-audit: ${checked} pages checked, 0 issues found`);
  process.exit(0);
}

console.log(`seo-audit: ${checked} pages checked, ${results.length} pages with issues`);
for (const { route, issues } of results) {
  console.log(`  ${route}`);
  for (const issue of issues) console.log(`    - ${issue}`);
}
process.exit(1);
