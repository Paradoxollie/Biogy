import { getCourseLevels } from './stlCurriculum';

export const normalizeSearch = (text) => String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr').replace(/[’']/g, ' ');
export const courseIndex = getCourseLevels().flatMap((level) => level.sections.flatMap((section) => section.chapters.flatMap((chapter) => {
  const base = `/apprendre/${level.id}/${chapter.id}`;
  const items = [{ ...chapter, path: base }, ...(chapter.lessons || []).map((lesson) => ({ ...lesson, path: `${base}/${lesson.id}` }))];
  return items.map((item) => ({
    ...item, levelId: level.id, levelTitle: level.title, sectionTitle: section.title,
    available: Boolean(item.content || item.lessons?.some((lesson) => lesson.content)),
    search: normalizeSearch([item.code, item.title, item.summary, section.title, JSON.stringify(item.content || {}), ...(item.content?.vocabulary || []).map((word) => word.term)].join(' ')),
  }));
})));

export function searchCourses(query, { level = '', available = false, bookmarks } = {}) {
  const words = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  return courseIndex.filter((item) => (!level || item.levelId === level)
    && (!available || item.available)
    && (!bookmarks || bookmarks.includes(item.path))
    && words.every((word) => item.search.includes(word)));
}
