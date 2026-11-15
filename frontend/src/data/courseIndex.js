import { getCourseLevels } from './stlCurriculum';
import { loadAllPremiereLessons } from './premiere';

export const normalizeSearch = (text) => String(text || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLocaleLowerCase('fr').replace(/[’']/g, ' ');

// Texte d'une leçon utile à la recherche (sans les chemins d'images ni les liens).
const searchableText = (content) => (content ? JSON.stringify(content, (key, value) => (key === 'src' || key === 'url' ? undefined : value)) : '');

export const courseIndex = getCourseLevels().flatMap((level) => level.sections.flatMap((section) => section.chapters.flatMap((chapter) => {
  const base = `/apprendre/${level.id}/${chapter.id}`;
  const items = [{ ...chapter, path: base }, ...(chapter.lessons || []).map((lesson) => ({ ...lesson, path: `${base}/${lesson.id}` }))];
  return items.map((item) => ({
    ...item, levelId: level.id, levelTitle: level.title, sectionTitle: section.title,
    available: Boolean(item.content || item.lessons?.some((lesson) => lesson.content)),
    search: normalizeSearch([item.code, item.title, item.summary, section.title, item.content?.lazy ? '' : searchableText(item.content), ...(item.content?.vocabulary || []).map((word) => word.term)].join(' ')),
  }));
})));

// Les leçons au format 2 sont chargées à la demande : la première recherche
// télécharge leur texte pour chercher aussi à l'intérieur des cours.
let fullText = null;
export function loadFullTextIndex() {
  if (!fullText) {
    fullText = loadAllPremiereLessons().then((lessons) => {
      courseIndex.forEach((item) => {
        const lesson = item.content?.lazy ? lessons[item.content.id] : null;
        if (lesson) item.search = normalizeSearch([item.code, item.title, item.summary, item.sectionTitle, searchableText(lesson)].join(' '));
      });
      return true;
    }).catch(() => { fullText = null; return false; });
  }
  return fullText;
}

export function searchCourses(query, { level = '', available = false, bookmarks } = {}) {
  const words = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  return courseIndex.filter((item) => (!level || item.levelId === level)
    && (!available || item.available)
    && (!bookmarks || bookmarks.includes(item.path))
    && words.every((word) => item.search.includes(word)));
}
