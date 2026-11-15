import React from 'react';

// Mise en forme légère, sans HTML :
//   **gras**   ==surligné==   _italique_   H~2~O (indice)   10^-3^ (exposant)
const TOKEN = /(\*\*[^*]+\*\*|==[^=]+==|(?<![\p{L}\p{N}])_[^_\n]+_(?![\p{L}\p{N}])|~[^~\s]+~|\^[^^\s]+\^)/u;

export default function RichText({ text }) {
  if (text === null || text === undefined || text === '') return null;
  const parts = String(text).split(new RegExp(TOKEN.source, 'gu'));
  return parts.map((part, index) => {
    if (!part) return null;
    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold text-ink-900">{part.slice(2, -2)}</strong>;
    }
    if (part.length > 4 && part.startsWith('==') && part.endsWith('==')) {
      return <mark key={index} className="mark-hl">{part.slice(2, -2)}</mark>;
    }
    if (part.length > 2 && part.startsWith('_') && part.endsWith('_')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.length > 2 && part.startsWith('~') && part.endsWith('~')) {
      return <sub key={index}>{part.slice(1, -1)}</sub>;
    }
    if (part.length > 2 && part.startsWith('^') && part.endsWith('^')) {
      return <sup key={index}>{part.slice(1, -1)}</sup>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function Paragraphs({ text, className = '' }) {
  const items = Array.isArray(text) ? text : [text];
  return items.filter(Boolean).map((item, index) => (
    <p key={index} className={className}><RichText text={item} /></p>
  ));
}
