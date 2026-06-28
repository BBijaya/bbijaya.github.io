const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const OUT_DIR = path.join(__dirname, '../public/og');
const POSTS_DIR = path.join(__dirname, '../content/blog');
const SITE = 'bijayabudhathoki.com';
const SUBTITLE = 'SRE & Security Engineer';
const WIDTH = 1200;
const HEIGHT = 630;

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Read published posts directly from frontmatter (mirrors lib/posts.js).
function getPublishedPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8'));
      return { slug, ...data };
    })
    .filter((p) => p.published !== false && p.title);
}

function template({ title, tags = [] }) {
  const tagRow = tags.slice(0, 3)
    .map((t) => `<span class="tag">#${escapeHtml(t)}</span>`)
    .join('');
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${WIDTH}px; height: ${HEIGHT}px; }
  body {
    font-family: 'Inter', sans-serif;
    background: radial-gradient(circle at 80% 0%, #1a1a24 0%, #0a0a0f 55%);
    color: #ffffff;
    padding: 72px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .domain {
    font-family: 'JetBrains Mono', monospace;
    color: #818cf8;
    font-size: 24px;
    letter-spacing: 0.04em;
  }
  .accent { width: 64px; height: 4px; background: #6366f1; margin: 28px 0 24px; border-radius: 2px; }
  .title {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.12;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .tags { display: flex; gap: 16px; margin-top: 28px; }
  .tag { font-family: 'JetBrains Mono', monospace; font-size: 22px; color: #a0a0b2; }
  .byline { font-size: 26px; color: #a0a0b2; }
  .byline b { color: #ffffff; font-weight: 600; }
</style></head>
<body>
  <div>
    <div class="domain">${escapeHtml(SITE)}</div>
    <div class="accent"></div>
    <div class="title">${escapeHtml(title)}</div>
    ${tagRow ? `<div class="tags">${tagRow}</div>` : ''}
  </div>
  <div class="byline"><b>Bijaya Budhathoki</b> · ${escapeHtml(SUBTITLE)}</div>
</body></html>`;
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const targets = [
    { file: 'default.png', title: 'Bijaya Budhathoki', tags: [] },
    ...getPublishedPosts().map((p) => ({
      file: `blog-${p.slug}.png`,
      title: p.title,
      tags: Array.isArray(p.tags) ? p.tags : [],
    })),
  ];

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

    for (const t of targets) {
      // default card uses name as title; the byline already carries name+subtitle,
      // so for the default we show the subtitle as the headline instead.
      const title = t.file === 'default.png' ? SUBTITLE : t.title;
      const tags = t.file === 'default.png' ? [] : t.tags;
      await page.setContent(template({ title, tags }), { waitUntil: 'networkidle0' });
      await new Promise((r) => setTimeout(r, 500)); // let webfonts paint
      const outPath = path.join(OUT_DIR, t.file);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
      console.log(`✅ ${t.file}`);
    }
  } finally {
    await browser.close();
  }
  console.log(`Generated ${targets.length} OG image(s) in public/og/`);
}

run().catch((err) => {
  console.error('❌ OG generation failed:', err);
  process.exit(1);
});
