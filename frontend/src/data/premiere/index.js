// Leçons de Première au format 2 (cahier de cours, travail guidé, bilan).
// Chaque fichier de ./lessons s'appelle <id>.js, où <id> est l'identifiant du
// chapitre ou de la sous-partie qu'il remplace dans stlCurriculum.js.
//
// Les leçons sont lourdes (texte et images) : elles ne sont téléchargées qu'à
// l'ouverture d'un cours, ou quand la recherche ou les révisions en ont besoin.
const loaders = import.meta.glob('./lessons/*.js');

const idOf = (path) => path.split('/').pop().replace(/\.js$/, '');
const LOADERS_BY_ID = Object.fromEntries(Object.entries(loaders).map(([path, load]) => [idOf(path), load]));
const cache = new Map();

export const PREMIERE_LESSON_IDS = Object.keys(LOADERS_BY_ID);

export const hasPremiereLesson = (id) => Boolean(LOADERS_BY_ID[id]);

export function loadPremiereLesson(id) {
  if (!LOADERS_BY_ID[id]) return Promise.resolve(null);
  if (!cache.has(id)) cache.set(id, LOADERS_BY_ID[id]().then((module) => module.default));
  return cache.get(id);
}

export function loadAllPremiereLessons() {
  return Promise.all(PREMIERE_LESSON_IDS.map(loadPremiereLesson)).then((lessons) => (
    Object.fromEntries(lessons.filter(Boolean).map((lesson) => [lesson.id, lesson]))
  ));
}
