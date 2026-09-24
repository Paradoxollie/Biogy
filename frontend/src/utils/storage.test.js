import { afterEach, it, expect, vi } from 'vitest';
import { readStorage, writeStorage } from './storage';
afterEach(() => vi.unstubAllGlobals());
it('keeps reading usable when browser storage is blocked or full', () => {
  vi.stubGlobal('localStorage', { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('quota'); }, removeItem() { throw new Error('blocked'); } });
  expect(readStorage('userInfo')).toBe(null);
  expect(readStorage('study', [])).toEqual([]);
  expect(writeStorage('study', {})).toBe(false);
  expect(writeStorage('userInfo', null)).toBe(false);
});
it('ignores corrupt stored JSON', () => {
  vi.stubGlobal('localStorage', { getItem: () => '{invalid' });
  expect(readStorage('userInfo')).toBe(null);
});
