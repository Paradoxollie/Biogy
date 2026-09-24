const test = require('node:test');
const assert = require('node:assert/strict');
const { createHandler } = require('../functions/biotech-veille');

const event = (params = {}) => ({ httpMethod: 'GET', queryStringParameters: params });
const article = (overrides = {}) => ({ title: 'Biologie : une découverte', link: 'https://example.org/science', pubDate: '2026-09-20', ...overrides });
const invoke = async (handler, params) => {
  const response = await handler(event(params));
  return { response, data: JSON.parse(response.body) };
};

test('a stalled feed does not erase successful sources or block the response', async () => {
  const handler = createHandler({ feedTimeoutMs: 20, parseFeed: url => url.includes('inserm')
    ? Promise.resolve({ items: [article()] }) : new Promise(() => {}) });
  const { data } = await invoke(handler, { color: 'red' });
  assert.equal(data.articles[0].link, 'https://example.org/science');
  assert.equal(data.feeds.successful, 1);
  assert.ok(data.articles.some(item => item.fallback));
});

test('the Biotech switch changes server filtering', async () => {
  const handler = createHandler({ parseFeed: async () => ({ items: [article({ title: 'Un match de football' })] }) });
  const filtered = (await invoke(handler, { color: 'red' })).data;
  const unfiltered = (await invoke(handler, { color: 'red', biotechOnly: 'false' })).data;
  assert.ok(filtered.articles.every(item => item.fallback));
  assert.ok(unfiltered.articles.some(item => item.title === 'Un match de football'));
});

test('general technology and word fragments are not classified as biotechnology', async () => {
  const handler = createHandler({ parseFeed: async () => ({ items: [
    article({ title: 'Comment supprimer un SMS frauduleux', description: 'Une innovation dans la technologie mobile.' }),
    article({ title: 'Protéines en poudre whey', description: 'Un complément nutritionnel sportif.', link: 'https://example.org/whey' }),
    article({ title: 'Des bactéries pour la fermentation', link: 'https://example.org/bacteria' }),
  ] }) });
  const { data } = await invoke(handler, { color: 'red' });
  assert.deepEqual(data.articles.filter(item => !item.fallback).map(item => item.link), ['https://example.org/bacteria']);
});

test('unavailable sources provide undated resources with a short cache', async () => {
  const handler = createHandler({ parseFeed: async () => { throw new Error('offline'); } });
  const { response, data } = await invoke(handler, { color: 'blue' });
  assert.equal(data.feeds.successful, 0);
  assert.equal(data.usesFallback, true);
  assert.ok(data.articles.every(item => item.fallback && item.pubDate === null));
  assert.match(response.headers['Cache-Control'], /s-maxage=120/);
  assert.equal((await invoke(handler, { refresh: 'true' })).response.headers['Cache-Control'], 'no-store');
});

test('dates come from the source, and actual news precedes resources', async () => {
  const handler = createHandler({ now: () => new Date('2026-09-24T12:00:00Z'), parseFeed: async () => ({ items: [
    article({ pubDate: 'invalid' }), article({ link: 'https://example.org/dated', pubDate: '2020-01-01' }),
  ] }) });
  const { data } = await invoke(handler, { color: 'red' });
  assert.equal(data.articles[0].link, 'https://example.org/dated');
  assert.equal(data.articles[1].pubDate, null);
  assert.equal(data.articles[2].fallback, true);
  assert.equal(data.fetchedAt, '2026-09-24T12:00:00.000Z');
});

test('duplicate and unsafe article links are excluded, including image links', async () => {
  const handler = createHandler({ parseFeed: async () => ({ items: [
    article({ enclosure: { url: 'javascript:alert(1)' } }), article(), article({ link: 'javascript:alert(1)' }),
  ] }) });
  const { data } = await invoke(handler, { color: 'red' });
  const actual = data.articles.filter(item => !item.fallback);
  assert.equal(actual.length, 1);
  assert.equal(actual[0].imageUrl, null);
});

test('multidisciplinary news survives missing categories', async () => {
  const handler = createHandler({ parseFeed: async url => ({ items: url.includes('cnrs') ? [article()] : [] }) });
  const { data } = await invoke(handler);
  assert.equal(data.articles[0].source, 'CNRS Le Journal');
});

test('invalid categories and methods never fetch external feeds', async () => {
  const handler = createHandler({ parseFeed: () => { assert.fail('unexpected fetch'); } });
  for (const color of ['constructor', '__proto__', 'unknown']) assert.equal((await handler(event({ color }))).statusCode, 400);
  assert.equal((await handler({ httpMethod: 'POST' })).statusCode, 405);
  assert.equal((await handler({ httpMethod: 'OPTIONS' })).statusCode, 204);
});

test('result limits are bounded and the fallback flag describes returned items', async () => {
  const handler = createHandler({ parseFeed: async () => ({ items: [article()] }) });
  const { data } = await invoke(handler, { max: '-2' });
  assert.equal(data.articles.length, 1);
  assert.equal(data.usesFallback, false);
});
