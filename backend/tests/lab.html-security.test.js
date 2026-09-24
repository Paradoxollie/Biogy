const test = require('node:test');
const assert = require('node:assert/strict');
const sanitize = require('../utils/sanitizeLabHtml');

test('student copies strip scripts, event handlers, active embeds and executable URLs', () => {
  const html = sanitize(`<html><body onload='alert(1)'><script>alert(1)</script><img src=x onerror=alert(2)><svg onload="alert(3)"><circle cx="5" r="4" /></svg><iframe srcdoc="<script>alert(4)</script>"></iframe><object data=x></object><a href="javascript:alert(5)">Lien</a><input value="Réponse élève" onfocus='alert(6)'></body></html>`);
  assert.doesNotMatch(html, /<script|onload|onerror|onfocus|<iframe|<object|javascript:/i);
  assert.match(html, /Réponse élève/);
  assert.match(html, /<circle/);
});

test('student copies preserve text, tables, drawings and selected answers', () => {
  const html = sanitize('<html><head><style>p { color: #123; }</style></head><body><textarea>0,998 g</textarea><select><option selected value="good">Bonne</option></select><svg viewBox="0 0 10 10"><path d="M0 0L10 10" /></svg></body></html>');
  assert.match(html, /0,998 g/);
  assert.match(html, /selected/);
  assert.match(html, /viewBox="0 0 10 10"/);
});
