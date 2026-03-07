import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  getCourseChapter,
  getCourseLesson,
  resolveCourseSelection,
} from '../data/stlCurriculum';

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

function MicroscopeDiagram() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Schema simplifie du microscope">
      <rect x="120" y="190" width="120" height="18" rx="8" fill="#dbeafe" />
      <rect x="168" y="110" width="24" height="82" rx="8" fill="#93c5fd" />
      <path d="M190 70 C220 70 238 95 238 125 L238 150" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinecap="round" />
      <rect x="206" y="50" width="70" height="18" rx="8" fill="#60a5fa" />
      <rect x="224" y="66" width="16" height="26" rx="6" fill="#1d4ed8" />
      <rect x="156" y="104" width="72" height="12" rx="6" fill="#475569" />
      <rect x="134" y="146" width="104" height="8" rx="4" fill="#94a3b8" />
      <circle cx="120" cy="124" r="14" fill="#38bdf8" />
      <circle cx="104" cy="150" r="10" fill="#7dd3fc" />
      <line x1="278" y1="58" x2="326" y2="34" stroke="#94a3b8" strokeWidth="2" />
      <line x1="228" y1="156" x2="326" y2="156" stroke="#94a3b8" strokeWidth="2" />
      <line x1="120" y1="124" x2="44" y2="94" stroke="#94a3b8" strokeWidth="2" />
      <line x1="104" y1="150" x2="44" y2="172" stroke="#94a3b8" strokeWidth="2" />
      <text x="330" y="36" fontSize="12" fill="#334155">Oculaire</text>
      <text x="330" y="160" fontSize="12" fill="#334155">Platine</text>
      <text x="8" y="96" fontSize="12" fill="#334155">Vis macro</text>
      <text x="8" y="176" fontSize="12" fill="#334155">Vis micro</text>
      <text x="130" y="226" fontSize="12" fill="#475569">Commencer toujours au faible grossissement</text>
    </svg>
  );
}

function CellComparisonDiagram() {
  return (
    <svg viewBox="0 0 420 220" className="w-full" role="img" aria-label="Comparaison simple entre cellule procaryote et eucaryote">
      <rect x="28" y="38" width="150" height="120" rx="56" fill="#ecfeff" stroke="#14b8a6" strokeWidth="3" />
      <circle cx="88" cy="98" r="16" fill="#99f6e4" />
      <path d="M106 98 C126 74 150 76 158 98 C146 120 122 118 106 98Z" fill="#5eead4" />
      <line x1="88" y1="98" x2="88" y2="22" stroke="#94a3b8" strokeWidth="2" />
      <text x="58" y="18" fontSize="12" fill="#334155">ADN libre</text>
      <text x="62" y="182" fontSize="14" fontWeight="bold" fill="#0f766e">Procaryote</text>

      <rect x="240" y="26" width="150" height="150" rx="20" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <circle cx="316" cy="102" r="28" fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
      <circle cx="280" cy="72" r="10" fill="#93c5fd" />
      <circle cx="350" cy="74" r="10" fill="#93c5fd" />
      <rect x="270" y="126" width="84" height="18" rx="8" fill="#93c5fd" />
      <line x1="316" y1="74" x2="316" y2="12" stroke="#94a3b8" strokeWidth="2" />
      <text x="300" y="12" fontSize="12" fill="#334155">Noyau</text>
      <text x="286" y="198" fontSize="14" fontWeight="bold" fill="#1d4ed8">Eucaryote</text>
    </svg>
  );
}

function BiotechDomainsDiagram() {
  return (
    <svg viewBox="0 0 480 300" className="w-full" role="img" aria-label="Les cinq domaines des biotechnologies">
      <ellipse cx="240" cy="150" rx="90" ry="52" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="3" />
      <text x="188" y="140" fontSize="20" fontWeight="bold" fill="#0f172a">Biotechnologies</text>
      <text x="176" y="166" fontSize="12" fill="#334155">utiliser le vivant pour</text>
      <text x="184" y="184" fontSize="12" fill="#334155">produire un bien ou un service</text>

      <ellipse cx="108" cy="76" rx="74" ry="42" fill="#fff1f2" stroke="#ef4444" strokeWidth="3" />
      <text x="78" y="72" fontSize="15" fontWeight="bold" fill="#991b1b">Rouges</text>
      <text x="52" y="94" fontSize="12" fill="#7f1d1d">sante et diagnostic</text>

      <ellipse cx="370" cy="68" rx="74" ry="42" fill="#fefce8" stroke="#eab308" strokeWidth="3" />
      <text x="340" y="64" fontSize="15" fontWeight="bold" fill="#854d0e">Jaunes</text>
      <text x="316" y="86" fontSize="12" fill="#713f12">environnement</text>

      <ellipse cx="402" cy="210" rx="74" ry="42" fill="#f0fdf4" stroke="#65a30d" strokeWidth="3" />
      <text x="372" y="206" fontSize="15" fontWeight="bold" fill="#3f6212">Vertes</text>
      <text x="346" y="228" fontSize="12" fill="#365314">agriculture</text>

      <ellipse cx="114" cy="220" rx="74" ry="42" fill="#eff6ff" stroke="#2563eb" strokeWidth="3" />
      <text x="84" y="216" fontSize="15" fontWeight="bold" fill="#1d4ed8">Bleues</text>
      <text x="64" y="238" fontSize="12" fill="#1e3a8a">milieux marins</text>

      <ellipse cx="246" cy="258" rx="74" ry="32" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
      <text x="212" y="255" fontSize="15" fontWeight="bold" fill="#111827">Blanches</text>
      <text x="206" y="274" fontSize="12" fill="#374151">industrie</text>

      <line x1="172" y1="124" x2="144" y2="102" stroke="#94a3b8" strokeWidth="2" />
      <line x1="304" y1="120" x2="332" y2="96" stroke="#94a3b8" strokeWidth="2" />
      <line x1="320" y1="186" x2="348" y2="198" stroke="#94a3b8" strokeWidth="2" />
      <line x1="160" y1="190" x2="144" y2="200" stroke="#94a3b8" strokeWidth="2" />
      <line x1="240" y1="202" x2="240" y2="226" stroke="#94a3b8" strokeWidth="2" />
    </svg>
  );
}

function DiagramCard({ diagram }) {
  const diagrams = {
    microscope: <MicroscopeDiagram />,
    cells: <CellComparisonDiagram />,
    domains: <BiotechDomainsDiagram />,
  };

  if (!diagrams[diagram.id]) {
    return null;
  }

  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
      <h3 className="text-lg font-bold text-gray-800">{diagram.title}</h3>
      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-lab-bg p-4">
        {diagrams[diagram.id]}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600">{diagram.caption}</p>
    </article>
  );
}

function DocumentCard({ document, onOpenImage }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {document.label ? (
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700">
            {document.label}
          </span>
        ) : null}
        {document.source ? (
          <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-600">
            {document.source}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-base font-semibold leading-6 text-gray-800">{document.title}</h3>

      {document.imageSrc ? (
        <div className="mt-4">
          <button
            type="button"
            onClick={() =>
              onOpenImage?.({
                src: document.imageSrc,
                alt: document.imageAlt || document.title,
                title: document.title,
              })
            }
            className="group block w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition hover:shadow-md"
          >
            <img
              src={document.imageSrc}
              alt={document.imageAlt || document.title}
              className="h-auto w-full object-contain"
            />
          </button>
          <button
            type="button"
            onClick={() =>
              onOpenImage?.({
                src: document.imageSrc,
                alt: document.imageAlt || document.title,
                title: document.title,
              })
            }
            className="mt-2 text-sm font-semibold text-lab-blue hover:underline"
          >
            Agrandir l image
          </button>
        </div>
      ) : null}

      {document.body?.length ? (
        <div className="mt-3 space-y-3 text-sm leading-6 text-gray-700">
          {document.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {document.footer ? (
        <p className="mt-4 rounded-xl border border-white/80 bg-white px-3 py-3 text-sm leading-6 text-gray-600">
          {document.footer}
        </p>
      ) : null}

      {document.sourceUrl ? (
        <a
          href={document.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-lab-blue hover:underline"
        >
          {document.sourceLabel || 'Ouvrir la source'}
        </a>
      ) : null}
    </article>
  );
}

function SupportList({ supports, onOpenImage }) {
  if (!supports?.length) {
    return null;
  }

  return (
    <div className="mt-4 space-y-3">
      {supports.map((support) => (
        <div key={`${support.label}-${support.detail || ''}`} className="rounded-2xl border border-gray-200 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Support</p>
          {support.url ? (
            <a
              href={support.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm font-semibold text-lab-blue hover:underline"
            >
              {support.label}
            </a>
          ) : (
            <p className="mt-2 text-sm font-semibold text-gray-800">{support.label}</p>
          )}
          {support.detail ? (
            <p className="mt-2 text-sm leading-6 text-gray-600">{support.detail}</p>
          ) : null}
          {support.imageSrc ? (
            <div className="mt-3">
              <button
                type="button"
                onClick={() =>
                  onOpenImage?.({
                    src: support.imageSrc,
                    alt: support.imageAlt || support.label,
                    title: support.label,
                  })
                }
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition hover:shadow-md"
              >
                <img
                  src={support.imageSrc}
                  alt={support.imageAlt || support.label}
                  className="h-auto max-w-[220px] object-contain"
                />
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenImage?.({
                    src: support.imageSrc,
                    alt: support.imageAlt || support.label,
                    title: support.label,
                  })
                }
                className="mt-2 text-sm font-semibold text-lab-blue hover:underline"
              >
                Agrandir le support
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function QuestionSetCard({ item, style, onOpenImage }) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
      {item.tag ? (
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
          {item.tag}
        </span>
      ) : null}
      <h3 className="mt-3 text-2xl font-bold text-gray-800">{item.title}</h3>
      {item.intro ? (
        <p className="mt-4 text-[15px] leading-8 text-gray-700">{item.intro}</p>
      ) : null}

      <SupportList supports={item.supports} onOpenImage={onOpenImage} />

      {item.documents?.length ? (
        <div
          className={`mt-5 grid gap-4 ${
            item.documents.length > 2
              ? 'md:grid-cols-2 xl:grid-cols-3'
              : item.documents.length > 1
                ? 'xl:grid-cols-2'
                : ''
          }`}
        >
          {item.documents.map((document) => (
            <DocumentCard
              key={`${item.title}-${document.title}`}
              document={document}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      ) : null}

      {item.instruction ? (
        <div className={`mt-5 rounded-2xl border p-4 ${style.note}`}>
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">Consigne</h4>
          <p className="mt-2 text-sm leading-6 text-gray-700">{item.instruction}</p>
        </div>
      ) : null}

      {item.questions?.length ? (
        <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
            {item.questionsTitle || 'Questions'}
          </h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
            {item.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

function CourseSectionCard({ item, style, onOpenImage }) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
      <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>

      {item.body?.length ? (
        <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {item.documents?.length ? (
        <div
          className={`mt-5 grid gap-4 ${
            item.documents.length > 2
              ? 'md:grid-cols-2 xl:grid-cols-3'
              : item.documents.length > 1
                ? 'xl:grid-cols-2'
                : ''
          }`}
        >
          {item.documents.map((document) => (
            <DocumentCard
              key={`${item.title}-${document.title}`}
              document={document}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      ) : null}

      {item.cards?.length ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {item.cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border px-4 py-4 shadow-sm ${
                card.tone || 'border-gray-200 bg-gray-50'
              }`}
            >
              <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">{card.title}</h4>
              <p className="mt-2 text-sm leading-6 text-gray-700">{card.text}</p>
            </article>
          ))}
        </div>
      ) : null}

      {item.takeaway ? (
        <div className={`mt-5 rounded-2xl border p-4 ${style.note}`}>
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
            {item.takeawayTitle || 'A retenir'}
          </h4>
          <p className="mt-2 text-sm leading-6 text-gray-700">{item.takeaway}</p>
        </div>
      ) : null}
    </article>
  );
}

function ChapterLessons({ level, chapter, activeLessonId, style }) {
  if (!chapter.lessons?.length) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Cours du chapitre</h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Ce chapitre officiel contient plusieurs cours. Ouvre celui que tu veux travailler.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {chapter.lessons.map((lesson) => {
          const isActive = lesson.id === activeLessonId;

          return (
            <Link
              key={lesson.id}
              to={`/apprendre/${level.id}/${chapter.id}/${lesson.id}`}
              className={`rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                isActive
                  ? `${style.note} border-transparent`
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700">
                  {lesson.code}
                </span>
                {lesson.content ? (
                  <span className="rounded-full border border-lab-teal/20 bg-lab-teal/10 px-2.5 py-1 text-xs font-semibold text-lab-teal">
                    Disponible
                  </span>
                ) : (
                  <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-600">
                    A venir
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-base font-semibold leading-6 text-gray-800">{lesson.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{lesson.summary}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function ChapterOutline({ chapter, style }) {
  const hasLessons = Boolean(chapter.lessons?.length);

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
        <h2 className="text-2xl font-bold text-gray-800">
          {hasLessons ? 'Organisation du chapitre' : 'Cours complet'}
        </h2>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          {hasLessons
            ? 'Ce chapitre officiel regroupe plusieurs cours. Ouvre un cours dans la liste ci-dessus pour travailler le contenu detaille.'
            : 'Cette page est creee pour garder une structure claire par chapitre. Le cours detaille sera ajoute ensuite dans le meme format que les premiers chapitres deja rediges.'}
        </p>
      </section>
    </>
  );
}

function ImageLightbox({ image, onClose }) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title || image.alt || 'Image agrandie'}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-6xl rounded-3xl bg-white p-4 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Fermer
        </button>
        {image.title ? (
          <h3 className="pr-20 text-lg font-bold text-gray-800">{image.title}</h3>
        ) : null}
        <div className="mt-4 max-h-[82vh] overflow-auto rounded-2xl border border-gray-200 bg-gray-50 p-3">
          <img src={image.src} alt={image.alt || image.title || 'Image'} className="mx-auto h-auto w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

function ChapterContent({ chapter, style, onOpenImage }) {
  const content = chapter.content;

  return (
    <>
      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
        <p className="mt-4 text-[15px] leading-8 text-gray-700">{content.intro}</p>
      </section>

      {content.prerequisites?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">A connaitre avant de commencer</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {content.prerequisites.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </section>
      ) : null}

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

      {content.chapterQuestions?.length ? (
        <section className={`mt-8 rounded-3xl border p-6 shadow-lg ${style.note}`}>
          <h2 className="text-2xl font-bold text-gray-800">
            {content.chapterQuestionsTitle || 'Questions du chapitre'}
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.chapterQuestions.map((item) => (
              <li key={item} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {content.questionSets?.length ? (
        <section className="mt-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              {content.questionSetsTitle || 'Questions et supports'}
            </h2>
            {content.questionSetsIntro ? (
              <p className="mt-3 text-sm leading-7 text-gray-600">{content.questionSetsIntro}</p>
            ) : null}
          </div>

          <div className="mt-5 space-y-5">
            {content.questionSets.map((item) => (
              <QuestionSetCard
                key={item.title}
                item={item}
                style={style}
                onOpenImage={onOpenImage}
              />
            ))}
          </div>
        </section>
      ) : null}

      {content.courseSections?.length ? (
        <section className="mt-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              {content.courseSectionsTitle || 'Cours'}
            </h2>
            {content.courseSectionsIntro ? (
              <p className="mt-3 text-sm leading-7 text-gray-600">{content.courseSectionsIntro}</p>
            ) : null}
          </div>

          <div className="mt-5 space-y-5">
            {content.courseSections.map((item) => (
              <CourseSectionCard
                key={item.title}
                item={item}
                style={style}
                onOpenImage={onOpenImage}
              />
            ))}
          </div>
        </section>
      ) : null}

      {content.vocabulary?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Vocabulaire essentiel</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {content.vocabulary.map((item) => (
              <article key={item.term} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.definition}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {content.diagrams?.length ? (
        <section className="mt-8 grid gap-6 xl:grid-cols-2">
          {content.diagrams.map((diagram) => (
            <DiagramCard key={diagram.id} diagram={diagram} />
          ))}
        </section>
      ) : null}

      {content.sections?.length ? (
        <section className="mt-8 space-y-5">
          {content.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
              {section.tag ? (
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                  {section.tag}
                </span>
              ) : null}
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>

              {section.supports?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.supports.map((support) =>
                    support.url ? (
                      <a
                        key={support.label}
                        href={support.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600 transition hover:bg-white"
                      >
                        {support.label}
                      </a>
                    ) : (
                      <span
                        key={support.label}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                      >
                        {support.label}
                      </span>
                    ),
                  )}
                </div>
              ) : null}

              <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.documents?.length ? (
                <div
                  className={`mt-5 grid gap-4 ${
                    section.documents.length > 2
                      ? 'md:grid-cols-2 xl:grid-cols-3'
                      : section.documents.length > 1
                        ? 'xl:grid-cols-2'
                        : ''
                  }`}
                >
                  {section.documents.map((document) => (
                    <DocumentCard key={`${section.title}-${document.title}`} document={document} />
                  ))}
                </div>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {section.cards.map((card) => (
                    <article
                      key={card.title}
                      className={`rounded-2xl border px-4 py-4 shadow-sm ${
                        card.tone || 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-700">{card.text}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {section.questions?.length ? (
                <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
                    {section.questionsTitle || 'Questions'}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    {section.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {section.takeaway ? (
                <div className={`mt-5 rounded-2xl border p-4 ${style.note}`}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
                    {section.takeawayTitle || 'Ce qu il faut retenir'}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{section.takeaway}</p>
                </div>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}

      {content.method?.steps?.length ? (
        <section className={`mt-8 rounded-3xl border p-6 shadow-lg ${style.note}`}>
          <h2 className="text-2xl font-bold text-gray-800">{content.method.title}</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.method.steps.map((step) => (
              <li key={step} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {content.commonMistakes?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Erreurs a eviter</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.commonMistakes.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">{content.keyPointsTitle || 'A retenir'}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.keyPoints.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            {content.selfCheckTitle || 'Questions pour verifier'}
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.selfCheck.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {content.practice?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            {content.practiceTitle || 'Petit entrainement'}
          </h2>
          {content.practiceIntro ? (
            <p className="mt-3 text-sm leading-7 text-gray-600">{content.practiceIntro}</p>
          ) : null}
          <div className="mt-5 space-y-4">
            {content.practice.map((item) => (
              <article key={item.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm font-semibold text-gray-800">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.expected}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {content.sources?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Pour aller plus loin</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {content.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>{source.title}</span>
                <span className={`font-semibold ${style.link}`}>Ouvrir</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function CourseChapterPage() {
  const { levelId, chapterId, lessonId } = useParams();
  const [activeImage, setActiveImage] = useState(null);
  const resolved = resolveCourseSelection(levelId, chapterId, lessonId);

  if (resolved.redirected) {
    const target = resolved.lessonId
      ? `/apprendre/${resolved.levelId}/${resolved.chapterId}/${resolved.lessonId}`
      : `/apprendre/${resolved.levelId}/${resolved.chapterId}`;

    return <Navigate to={target} replace />;
  }

  const result = getCourseChapter(resolved.levelId, resolved.chapterId);

  if (!result) {
    return <Navigate to="/apprendre" replace />;
  }

  const { level, section, chapter } = result;
  const style = LEVEL_STYLES[level.id] || LEVEL_STYLES.premiere;
  const lesson =
    getCourseLesson(level.id, chapter.id, resolved.lessonId) ||
    (!resolved.lessonId && chapter.lessons?.length === 1 ? chapter.lessons[0] : null);
  const contentItem = lesson || (chapter.content ? chapter : null);

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
        {lesson ? (
          <>
            <span className="px-2">/</span>
            <span className="font-semibold text-gray-700">{lesson.code}</span>
          </>
        ) : null}
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
            contentItem?.content
              ? 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal'
              : 'border border-gray-200 bg-gray-50 text-gray-700'
          }`}>
            {contentItem?.content ? 'Cours disponible' : 'Structure du chapitre'}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-gray-800 lg:text-4xl">
          {chapter.code} - {chapter.title}
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-600">{chapter.summary}</p>

        {lesson ? (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Cours selectionne</p>
            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {lesson.code} - {lesson.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{lesson.summary}</p>
          </div>
        ) : null}

        <div className="mt-6">
          <Link
            to={`/apprendre/${level.id}`}
            className={`text-sm font-semibold hover:underline ${style.link}`}
          >
            Retour au sommaire de {level.title}
          </Link>
        </div>
      </section>

      <ChapterLessons level={level} chapter={chapter} activeLessonId={lesson?.id || null} style={style} />

      {contentItem?.content ? (
        <ChapterContent chapter={contentItem} style={style} onOpenImage={setActiveImage} />
      ) : (
        <ChapterOutline chapter={chapter} style={style} />
      )}

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}

export default CourseChapterPage;
