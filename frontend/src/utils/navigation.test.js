import { describe, it, expect } from 'vitest';
import { safeRedirect, isDocumentPath } from './navigation';

describe('post-login navigation', () => {
  it('rejects external, protocol-relative and backslash redirects', () => {
    for (const target of ['https://example.org', '//example.org/copy.html', '/\\example.org/copy.html', '/\n/example.org', null, {}]) expect(safeRedirect(target)).toBe('/');
  });
  it('preserves the laboratory destination including query and anchor', () => {
    const target = '/laboratoire/at5-metrologie-pipettes.html?reprise=1#q12';
    expect(safeRedirect(target)).toBe(target);
    expect(isDocumentPath(target)).toBe(true);
    expect(isDocumentPath('/forum/nouveau')).toBe(false);
  });
});
