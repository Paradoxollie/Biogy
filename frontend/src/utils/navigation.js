export function safeRedirect(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || /[\\\s]/.test(value) || [...value].some((char) => char.charCodeAt(0) < 32)) return '/';
  return value;
}

export function isDocumentPath(value) {
  return new URL(safeRedirect(value), 'https://biogy.local').pathname.endsWith('.html');
}
