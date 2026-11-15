// Fabrique d'objets image pour les leçons (format 2).
// kind : 'photo' | 'micro' (plein cadre) ou 'schema' | 'pencil' (posés sur une feuille).
export const img = (src, alt, kind = 'photo', width, height) => ({ src, alt, kind, width, height });
