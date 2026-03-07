import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getCourseChapter } from '../data/stlCurriculum';

const LEVEL_STYLES = {
  premiere: {
    badge: 'bg-lab-blue/10 text-lab-blue',
    line: 'bg-lab-blue',
    note: 'border-lab-blue/20 bg-lab-blue/5',
    link: 'text-lab-blue',
  },
  terminale: {
    badge: 'bg-lab-teal/10 text-lab-teal',
    line: 'bg-lab-teal',
    note: 'border-lab-teal/20 bg-lab-teal/5',
    link: 'text-lab-teal',
  },
};

function ChapterOutline({ chapter, style }) {
  return (
    <>
      <section className={`mt-8 rounded-3xl border p-6 shadow-sm ${style.note}`}>
        <h2 className="text-2xl font-bold text-gray-800">Structure du chapitre</h2>
        <p className="mt-3 text-sm leading-7 text-gray-700">{chapter.summary}</p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {chapter.skills.map((skill) => (
            <div key={skill} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm leading-6 text-gray-700">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Cours complet</h2>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          Cette page est creee pour garder une structure claire par chapitre. Le cours detaille sera ajoute ensuite
          dans le meme format que les premiers chapitres deja rediges.
        </p>
      </section>
    </>
  );
}

function ChapterContent({ chapter, style }) {
  const content = chapter.content;

  return (
    <>
      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Objectifs</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {content.objectives.map((objective) => (
            <div key={objective} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
              {objective}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 space-y-5">
        {content.sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
            <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">A retenir</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.keyPoints.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Questions pour verifier</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.selfCheck.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

function CourseChapterPage() {
  const { levelId, chapterId } = useParams();
  const result = getCourseChapter(levelId, chapterId);

  if (!result) {
    return <Navigate to="/apprendre" replace />;
  }

  const { level, section, chapter } = result;
  const style = LEVEL_STYLES[level.id] || LEVEL_STYLES.premiere;

  return (
    <div className="container mx-auto max-w-5xl px-4 pb-16 pt-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/apprendre" className="hover:underline">
          Apprendre
        </Link>
        <span className="px-2">/</span>
        <Link to={`/apprendre/${level.id}`} className="hover:underline">
          {level.title}
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-gray-700">{chapter.code}</span>
      </nav>

      <section className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-xl lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
            {level.title}
          </span>
          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
            {section.title}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
            chapter.content
              ? 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal'
              : 'border border-gray-200 bg-gray-50 text-gray-700'
          }`}>
            {chapter.content ? 'Cours disponible' : 'Structure du chapitre'}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-gray-800 lg:text-4xl">
          {chapter.code} - {chapter.title}
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-600">{chapter.summary}</p>

        <div className="mt-6">
          <Link
            to={`/apprendre/${level.id}`}
            className={`text-sm font-semibold hover:underline ${style.link}`}
          >
            Retour au sommaire de {level.title}
          </Link>
        </div>
      </section>

      {chapter.content ? (
        <ChapterContent chapter={chapter} style={style} />
      ) : (
        <ChapterOutline chapter={chapter} style={style} />
      )}
    </div>
  );
}

export default CourseChapterPage;
