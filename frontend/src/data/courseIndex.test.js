import { describe, it, expect } from 'vitest';
import { courseIndex, searchCourses } from './courseIndex';
import { getCourseChapter, getCourseLesson } from './stlCurriculum';

describe('course catalogue', () => {
  it('links every indexed resource to a real chapter or lesson', () => {
    expect(courseIndex.length).toBeGreaterThan(36);
    expect(new Set(courseIndex.map((item) => item.path)).size).toBe(courseIndex.length);
    for (const item of courseIndex) {
      const [, , level, chapter, lesson] = item.path.split('/');
      expect(getCourseChapter(level, chapter)).toBeTruthy();
      if (lesson) expect(getCourseLesson(level, chapter, lesson)).toBeTruthy();
    }
  });
  it('finds notions inside the course and ignores accents and case', () => {
    expect(searchCourses('microscope').length).toBeGreaterThan(0);
    expect(searchCourses('DENOMBREMENT')).toEqual(searchCourses('dénombrement'));
    expect(searchCourses('DENOMBREMENT').length).toBeGreaterThan(0);
  });
  it('combines level, content availability and personal bookmarks', () => {
    const item = courseIndex.find((entry) => entry.content);
    const results = searchCourses('', { level: item.levelId, available: true, bookmarks: [item.path] });
    expect(results.map((entry) => entry.path)).toEqual([item.path]);
    expect(searchCourses('', { bookmarks: [] })).toEqual([]);
    expect(searchCourses('absolutely-no-course-matches-this')).toEqual([]);
  });
});
