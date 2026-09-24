const sanitizeHtml = require('sanitize-html');

module.exports = function sanitizeLabHtml(value) {
  if (typeof value !== 'string') return '';
  return sanitizeHtml(value, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'html', 'head', 'body', 'title', 'style', 'img', 'input', 'textarea', 'select', 'option', 'svg', 'g', 'path', 'circle', 'ellipse', 'rect', 'line', 'polyline', 'polygon', 'text', 'tspan', 'defs', 'pattern', 'marker', 'linearGradient', 'stop'],
    allowedAttributes: {
      '*': ['class', 'id', 'style', 'title', 'role', 'aria-*', 'data-*', 'width', 'height', 'fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'stroke-linecap', 'stroke-linejoin', 'transform', 'opacity', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'd', 'points', 'viewBox', 'xmlns', 'font-size', 'font-family', 'font-weight', 'text-anchor'],
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'alt', 'loading'],
      input: ['type', 'name', 'value', 'checked', 'disabled', 'readonly', 'placeholder', 'min', 'max', 'step'],
      textarea: ['name', 'readonly', 'disabled', 'rows', 'cols', 'placeholder'],
      select: ['name', 'disabled'],
      option: ['value', 'selected'],
      td: ['colspan', 'rowspan'], th: ['colspan', 'rowspan', 'scope'],
    },
    allowedSchemes: ['https', 'http', 'mailto'],
    allowedSchemesByTag: { img: ['https', 'http', 'data'] },
    allowProtocolRelative: false,
    allowVulnerableTags: true, // Inline styles preserve the printed worksheet; scripts and embeds stay forbidden.
    parser: { lowerCaseTags: false, lowerCaseAttributeNames: false },
    transformTags: { a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }) },
  });
};
