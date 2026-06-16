#!/usr/bin/env node
/**
 * Postbuild step for the decoupled site.
 *
 * `react-scripts build` runs with BUILD_PATH=build/memo, so the React app
 * (the daily AI memo) lands at build/memo/ and is served at /memo.
 *
 * This script copies the static, hand-authored front page and SEO files from
 * site/ into the build root (build/), so the crawlable home page is served at
 * / with zero JavaScript. The home page can never regress on SEO because it's
 * shipped as flat HTML.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const siteDir = path.join(root, 'site');
const buildDir = path.join(root, 'build');

if (!fs.existsSync(buildDir)) {
  console.error('[assemble-static] build/ does not exist — run react-scripts build first.');
  process.exit(1);
}

// Files copied from site/ into the build root. og.png is optional (see TODO in
// site/index.html) and is copied only if present.
const files = ['index.html', 'robots.txt', 'sitemap.xml', 'og.png'];

let copied = 0;
for (const name of files) {
  const src = path.join(siteDir, name);
  if (!fs.existsSync(src)) {
    if (name === 'og.png') {
      console.log('[assemble-static] note: site/og.png not present yet (TODO) — skipping.');
    } else {
      console.error(`[assemble-static] missing required file: site/${name}`);
      process.exit(1);
    }
    continue;
  }
  fs.copyFileSync(src, path.join(buildDir, name));
  console.log(`[assemble-static] site/${name} -> build/${name}`);
  copied++;
}

console.log(`[assemble-static] done (${copied} file(s)). Home page is build/index.html; memo app is build/memo/.`);
