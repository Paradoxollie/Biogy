import React from 'react';
import {
  STL_BOOKS,
  STL_PAGE_METHOD,
  STL_REFERENCE_LINKS,
} from '../data/stlCurriculum';

const TONE_STYLES = {
  blue: {
    badge: 'border border-lab-blue/20 bg-lab-blue/10 text-lab-blue',
    soft: 'bg-lab-blue/10 text-lab-blue',
    line: 'bg-lab-blue',
    glow: 'from-lab-blue/15 via-white to-lab-blue/5',
    note: 'border-lab-blue/20 bg-lab-blue/5',
    button: 'bg-lab-blue text-white hover:bg-lab-blue/90',
  },
  purple: {
    badge: 'border border-lab-purple/20 bg-lab-purple/10 text-lab-purple',
    soft: 'bg-lab-purple/10 text-lab-purple',
    line: 'bg-lab-purple',
    glow: 'from-lab-purple/15 via-white to-lab-purple/5',
    note: 'border-lab-purple/20 bg-lab-purple/5',
    button: 'bg-lab-purple text-white hover:bg-lab-purple/90',
  },
  teal: {
    badge: 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal',
    soft: 'bg-lab-teal/10 text-lab-teal',
    line: 'bg-lab-teal',
    glow: 'from-lab-teal/15 via-white to-lab-teal/5',
    note: 'border-lab-teal/20 bg-lab-teal/5',
    button: 'bg-lab-teal text-white hover:bg-lab-teal/90',
  },
  green: {
    badge: 'border border-lab-green/20 bg-lab-green/10 text-lab-green',
    soft: 'bg-lab-green/10 text-lab-green',
    line: 'bg-lab-green',
    glow: 'from-lab-green/15 via-white to-lab-green/5',
    note: 'border-lab-green/20 bg-lab-green/5',
    button: 'bg-lab-green text-white hover:bg-lab-green/90',
  },
};

const CHAPTER_STATUS = {
  ready: {
    label: 'Cours disponible',
    tone: 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal',
  },
  structure: {
    label: 'Structure prête',
    tone: 'border border-gray-200 bg-gray-50 text-gray-700',
  },
};

const getToneStyle = (tone) => TONE_STYLES[tone] || TONE_STYLES.blue;

function ReferenceCard({ reference }) {
  return (
    <a
      href={reference.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <p className="font-semibold text-gray-800">{reference.title}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500">
          {reference.source} · {reference.updatedAt}
        </p>
      </div>
      <span className="text-sm font-semibold text-lab-teal">Ouvrir</span>
    </a>
  );
}

function MethodCard({ item }) {
  const style = getToneStyle(item.tone);

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.soft}`}>
        Méthode
      </span>
      <h3 className="mt-4 text-lg font-bold text-gray-800">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
    </article>
  );
}

function ChapterListItem({ chapter, anchorId }) {
  const status = CHAPTER_STATUS[chapter.status] || CHAPTER_STATUS.structure;
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
              {chapter.code}
            </span>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.tone}`}>
              {status.label}
            </span>
          </div>
          <h4 className="mt-3 text-base font-semibold leading-6 text-gray-800">{chapter.title}</h4>
          <p className="mt-2 text-sm leading-6 text-gray-600">{chapter.note}</p>
        </div>
      </div>
    </>
  );

  if (chapter.status === 'ready') {
    return (
      <a
        href={`#${anchorId}`}
        className="block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {content}
    </article>
  );
}

function SourceLinkList({ sources }) {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-2">
      {sources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span>{source.title}</span>
          <span className="font-semibold text-lab-teal">Ouvrir</span>
        </a>
      ))}
    </div>
  );
}

function BookSection({ book, sourceMap }) {
  const style = getToneStyle(book.tone);
  const bookSources = book.sourceIds
    .map((sourceId) => sourceMap.get(sourceId))
    .filter(Boolean);
  const chapterAnchor = `${book.id}-chapitre-1`;

  return (
    <section id={book.anchor} className="mt-12 scroll-mt-24">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className={`h-2 w-full ${style.line}`} />

        <div className={`bg-gradient-to-br ${style.glow} px-6 py-8 lg:px-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                {book.badge}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-800 lg:text-4xl">{book.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">{book.introduction}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">{book.studentGuide}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
                  {book.level}
                </span>
                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
                  {book.chapterCountLabel}
                </span>
              </div>
            </div>

            <aside className={`rounded-2xl border bg-white/90 p-5 text-sm leading-7 text-gray-700 shadow-sm ${style.note}`}>
              <p className="font-semibold text-gray-800">Repère professeur / élève</p>
              <p className="mt-3">{book.teacherNote}</p>

              <div className="mt-5 space-y-3">
                {bookSources.map((source) => (
                  <ReferenceCard key={`${book.id}-${source.id}`} reference={source} />
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div>
            <div className="rounded-2xl border border-gray-200 bg-lab-bg p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-purple">Sommaire officiel</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-800">Les chapitres de {book.level}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Le sommaire ci-dessous reprend les grands intitulés officiels. Les chapitres marqués “Cours disponible”
                sont déjà rédigés dans cette première version.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {book.tocSections.map((section) => (
                <section key={section.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
                  <h4 className="text-xl font-bold text-gray-800">{section.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{section.description}</p>

                  <div className="mt-5 space-y-3">
                    {section.chapters.map((chapter) => (
                      <ChapterListItem
                        key={`${section.id}-${chapter.code}`}
                        chapter={chapter}
                        anchorId={chapterAnchor}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <article
            id={chapterAnchor}
            className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50/70 shadow-xl"
          >
            <div className="border-b border-amber-200 bg-white/70 px-6 py-5 backdrop-blur-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                  Chapitre déjà rédigé
                </span>
                <span className="rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  {book.firstChapter.code}
                </span>
              </div>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-gray-800">
                {book.firstChapter.title}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                {book.firstChapter.subtitle}
              </p>
              <p className="mt-4 text-base leading-8 text-gray-700">{book.firstChapter.hook}</p>
            </div>

            <div className="px-6 py-6">
              <section className="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-teal">
                  À la fin de ce chapitre, tu dois savoir
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {book.firstChapter.objectives.map((objective) => (
                    <div key={objective} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
                      {objective}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-purple">Vocabulaire essentiel</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.firstChapter.vocabulary.map((word) => (
                    <span key={word} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700">
                      {word}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-6 space-y-5">
                {book.firstChapter.sections.map((section) => (
                  <article key={section.title} className="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-800">{section.title}</h4>
                    <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </section>

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <section className={`rounded-2xl border p-5 shadow-sm ${style.note}`}>
                  <p className="text-sm font-semibold text-gray-800">{book.firstChapter.method.title}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {book.firstChapter.method.steps.map((step) => (
                      <li key={step} className="rounded-xl border border-white/80 bg-white/80 px-4 py-3">
                        {step}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-800">Réflexes de laboratoire</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {book.firstChapter.labReflexes.map((item) => (
                      <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <section className="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-800">À retenir</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {book.firstChapter.keyIdeas.map((item) => (
                      <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-800">Questions pour te vérifier</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {book.firstChapter.selfCheck.map((item) => (
                      <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="mt-6 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-green">Sources de travail</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Ces liens ont servi à construire la structure du chapitre et à vérifier son alignement avec les textes officiels.
                </p>
                <SourceLinkList sources={book.firstChapter.sources} />
              </section>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ApprendrePage() {
  const sourceMap = new Map(STL_REFERENCE_LINKS.map((reference) => [reference.id, reference]));

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-16 pt-8">
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="absolute -left-16 top-14 h-40 w-40 rounded-full bg-lab-blue/10 blur-3xl" />
        <div className="absolute -right-10 top-2 h-44 w-44 rounded-full bg-lab-purple/10 blur-3xl" />
        <div className="absolute bottom-2 right-24 h-36 w-36 rounded-full bg-lab-teal/10 blur-3xl" />

        <div className="relative px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-lab-blue/20 bg-lab-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lab-blue">
                Cours STL
              </p>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-800 lg:text-4xl">
                Un espace de cours pensé pour t aider à apprendre, comprendre et réussir en STL
              </h1>
              <p className="mt-4 text-xl leading-8 text-gray-700 lg:text-2xl">
                Tu retrouves ici une structure claire pour la première et la terminale, avec les chapitres officiels, des repères de travail et un premier chapitre rédigé pour chaque niveau.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                L objectif n est pas d empiler des informations. Le but est de t aider à avancer comme en classe :
                comprendre un cours, faire le lien avec le laboratoire, apprendre le bon vocabulaire et vérifier ce que tu sais vraiment expliquer.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#livre-premiere"
                  className="rounded-xl bg-gradient-to-r from-lab-blue to-lab-purple px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
                >
                  Ouvrir le livre de première
                </a>
                <a
                  href="#livre-terminale"
                  className="rounded-xl border border-lab-teal/20 bg-white px-5 py-3 text-sm font-semibold text-lab-teal shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Ouvrir le livre de terminale
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-lab-bg p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lab-purple">Base officielle</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">Sources vérifiées au 7 mars 2026</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Les livres de cours Biogy sont construits à partir des programmes Eduscol et de ressources publiques académiques.
              </p>

              <div className="mt-5 space-y-3">
                {STL_REFERENCE_LINKS.map((reference) => (
                  <ReferenceCard key={reference.id} reference={reference} />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-teal">Comment utiliser la page</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">Travaille comme en cours, pas comme sur une fiche isolée</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600">
            Lis le cours avec méthode, prends des notes simples, puis vérifie ce que tu sais expliquer sans regarder l écran.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STL_PAGE_METHOD.map((item) => (
            <MethodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {STL_BOOKS.map((book) => (
        <BookSection key={book.id} book={book} sourceMap={sourceMap} />
      ))}
    </div>
  );
}

export default ApprendrePage;
