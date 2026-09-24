// Read-only deployment checks. No accounts, copies or messages are created.
import assert from 'node:assert/strict';

const sites = process.argv.slice(2);
if (!sites.length) sites.push('https://biogy.netlify.app', 'https://biogy.vercel.app', 'https://imaginative-empanada-2acc34.netlify.app');
let failures = 0;
const request = async (base, path, status = 200) => {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(70000), redirect: 'follow' });
  assert.equal(response.status, status, `${path}: HTTP ${response.status}, expected ${status}`);
  return response;
};
const json = async (base, path, status = 200) => {
  const response = await request(base, path, status);
  assert.match(response.headers.get('content-type') || '', /application\/json/i, `${path}: expected JSON, received HTML or another format`);
  return response.json();
};
const checks = [
  ['MongoDB connected', async base => assert.equal((await json(base, '/api/health')).database, 'connected')],
  ['SPA and JavaScript assets', async base => {
    const html = await (await request(base, '/apprendre')).text();
    assert.match(html, /id="root"/);
    const asset = html.match(/<script[^>]+src="([^"]+)"/)?.[1];
    assert.ok(asset, 'Missing JavaScript entry point');
    assert.match((await request(base, asset)).headers.get('content-type') || '', /javascript/);
  }],
  ['Forum database query', async base => assert.ok(Array.isArray((await json(base, '/api/forum/topics?limit=1')).topics))],
  ['Published projects', async base => assert.ok(Array.isArray(await json(base, '/api/posts')))],
  ['Private copies protected', async base => { await json(base, '/api/lab/submissions/mine', 401); }],
  ['Teacher corrections protected', async base => { await json(base, '/api/lab/activities/at5-metrologie-pipettes/corrections', 401); }],
  ['Scientific feed is JSON', async base => {
    const data = await json(base, '/.netlify/functions/biotech-veille?max=3');
    assert.ok(Array.isArray(data.articles) && data.articles.length > 0 && data.articles.length <= 3, 'Missing or excessive articles');
    for (const article of data.articles) {
      assert.ok(article.title && /^https?:\/\//.test(article.link), 'Malformed article');
      if (article.fallback) assert.equal(article.pubDate, null, 'Reference resources must not be assigned a recent publication date');
    }
  }],
];

for (const base of sites) {
  console.log(`\n${base}`);
  const results = await Promise.allSettled(checks.map(async ([name, check]) => { await check(base); return name; }));
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') console.log(`  PASS ${result.value}`);
    else { failures++; console.error(`  FAIL ${checks[i][0]}: ${result.reason.message}`); }
  });
}
console.log(`\n${checks.length * sites.length - failures}/${checks.length * sites.length} checks passed`);
process.exitCode = failures ? 1 : 0;
