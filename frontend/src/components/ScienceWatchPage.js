import React, { startTransition, useDeferredValue, useEffect, useState } from 'react';

const CATEGORY_STYLES = {
  red: {
    softBadge: 'border border-rose-200 bg-rose-50 text-rose-700',
    solidBadge: 'bg-rose-500 text-white',
    button: 'border border-rose-200 bg-white text-rose-700 hover:bg-rose-50',
    line: 'bg-rose-400',
    placeholder: 'from-rose-50 via-white to-rose-100',
    note: 'border-rose-200 bg-rose-50/70',
  },
  white: {
    softBadge: 'border border-slate-200 bg-slate-50 text-slate-700',
    solidBadge: 'bg-slate-700 text-white',
    button: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
    line: 'bg-slate-400',
    placeholder: 'from-slate-50 via-white to-slate-100',
    note: 'border-slate-200 bg-slate-50/80',
  },
  green: {
    softBadge: 'border border-emerald-200 bg-emerald-50 text-emerald-700',
    solidBadge: 'bg-emerald-500 text-white',
    button: 'border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50',
    line: 'bg-emerald-400',
    placeholder: 'from-emerald-50 via-white to-emerald-100',
    note: 'border-emerald-200 bg-emerald-50/70',
  },
  yellow: {
    softBadge: 'border border-amber-200 bg-amber-50 text-amber-800',
    solidBadge: 'bg-amber-400 text-slate-900',
    button: 'border border-amber-200 bg-white text-amber-800 hover:bg-amber-50',
    line: 'bg-amber-400',
    placeholder: 'from-amber-50 via-white to-amber-100',
    note: 'border-amber-200 bg-amber-50/80',
  },
  blue: {
    softBadge: 'border border-sky-200 bg-sky-50 text-sky-700',
    solidBadge: 'bg-sky-500 text-white',
    button: 'border border-sky-200 bg-white text-sky-700 hover:bg-sky-50',
    line: 'bg-sky-400',
    placeholder: 'from-sky-50 via-white to-sky-100',
    note: 'border-sky-200 bg-sky-50/80',
  },
  multi: {
    softBadge: 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal',
    solidBadge: 'bg-lab-teal text-white',
    button: 'border border-lab-teal/20 bg-white text-lab-teal hover:bg-lab-teal/5',
    line: 'bg-lab-teal',
    placeholder: 'from-lab-blue/10 via-white to-lab-teal/10',
    note: 'border-lab-teal/20 bg-lab-teal/5',
  },
};

const PAGE_PILLARS = [
  {
    title: 'Culture scientifique STL',
    description:
      'Des sujets utilisables pour ouvrir un chapitre, nourrir un questionnement scientifique ou preparer un oral.',
    badge: 'bg-lab-blue/10 text-lab-blue',
    line: 'bg-lab-blue',
  },
  {
    title: 'Projet technologique',
    description:
      'Une veille qui aide a contextualiser une demarche de projet, un besoin, un procede ou une contrainte de production.',
    badge: 'bg-lab-purple/10 text-lab-purple',
    line: 'bg-lab-purple',
  },
  {
    title: 'Laboratoire et techniques',
    description:
      'Les actualites retenues privilegient les analyses, la qualite, les protocoles et les pratiques de laboratoire utiles en STL.',
    badge: 'bg-lab-teal/10 text-lab-teal',
    line: 'bg-lab-teal',
  },
  {
    title: 'One Health et enjeux',
    description:
      'Les liens entre sante, environnement, alimentation et biodiversite sont visibles pour coller aux attendus recents.',
    badge: 'bg-lab-green/10 text-lab-green',
    line: 'bg-lab-green',
  },
];

const formatDate = (value) => {
  if (!value) {
    return 'Date inconnue';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Date inconnue';
  }

  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const formatDateTime = (value) => {
  if (!value) {
    return '';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const matchesSearch = (article, query) => {
  if (!query) {
    return true;
  }

  const haystack = [article.title, article.description, article.source, article.whyItMatters]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(query);
};

const getCategoryLabel = (categoryKey, categories) => {
  const category = (categories || []).find((item) => item.key === categoryKey);
  return category ? category.shortTitle : 'Transversale';
};

const ArticleVisual = ({ article, fallbackLabel, style, featured = false }) => {
  if (article.imageUrl) {
    return (
      <img
        src={article.imageUrl}
        alt={article.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${style.placeholder} px-6 text-center`}>
      <div>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm">
          <span className="text-lg font-bold text-lab-purple">STL</span>
        </div>
        <p className={`text-sm font-semibold ${featured ? 'text-gray-700' : 'text-gray-600'}`}>{fallbackLabel}</p>
      </div>
    </div>
  );
};

function ScienceWatchPage() {
  const [digest, setDigest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase());

  const fetchDigest = async (forceRefresh = false) => {
    if (!digest) {
      setLoading(true);
    } else {
      setRefreshing(true);
    }

    setError('');

    try {
      const params = new URLSearchParams();
      if (forceRefresh) {
        params.set('refresh', 'true');
      }

      const response = await fetch(`/.netlify/functions/biotech-veille${params.toString() ? `?${params.toString()}` : ''}`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Erreur reseau ${response.status}`);
      }

      const payload = await response.json();
      if (!payload || !payload.sections || !payload.categories) {
        throw new Error('Format de veille invalide');
      }

      setDigest(payload);
    } catch (requestError) {
      console.error('ScienceWatchPage fetch error:', requestError);
      setError("La veille STL n'a pas pu etre chargee.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDigest(false);
  }, []);

  const categories = digest?.categories || [];
  const officialCategories = categories.filter((category) => category.key !== 'multi');
  const transversalCategory = categories.find((category) => category.key === 'multi') || null;
  const categoryKeys = selectedCategory === 'all'
    ? categories.map((category) => category.key)
    : [selectedCategory];

  const filteredSections = categoryKeys.reduce((accumulator, categoryKey) => {
    const sectionArticles = (digest?.sections?.[categoryKey] || []).filter((article) =>
      matchesSearch(article, deferredSearchTerm),
    );

    if (sectionArticles.length > 0) {
      accumulator[categoryKey] = sectionArticles;
    }

    return accumulator;
  }, {});

  const filteredHighlights = (digest?.highlights || []).filter((article) => {
    const categoryMatches = selectedCategory === 'all' || article.categoryKey === selectedCategory;
    return categoryMatches && matchesSearch(article, deferredSearchTerm);
  });

  const featuredArticle = filteredHighlights[0] || null;
  const secondaryHighlights = filteredHighlights.slice(1, 4);
  const hasResults = Object.keys(filteredSections).length > 0;
  const sourcesCount = new Set((digest?.articles || []).map((article) => article.source)).size;
  const metricCards = [
    {
      label: 'Domaines officiels',
      value: officialCategories.length || 5,
      tone: 'bg-lab-blue/10 text-lab-blue',
    },
    {
      label: 'Sujets selectionnes',
      value: digest?.articles?.length || 0,
      tone: 'bg-lab-purple/10 text-lab-purple',
    },
    {
      label: 'Sources suivies',
      value: sourcesCount,
      tone: 'bg-lab-teal/10 text-lab-teal',
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-16 pt-8">
      <section className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xl">
        <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-lab-blue/10 blur-3xl" />
        <div className="absolute -right-12 top-0 h-44 w-44 rounded-full bg-lab-purple/10 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-36 w-36 rounded-full bg-lab-teal/10 blur-3xl" />

        <div className="absolute left-6 right-6 top-4 hidden justify-between md:flex">
          <div className="h-1 w-20 rounded-full bg-lab-blue/20" />
          <div className="h-1 w-32 rounded-full bg-lab-purple/20" />
          <div className="h-1 w-20 rounded-full bg-lab-teal/20" />
        </div>

        <div className="relative px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-lab-teal/20 bg-lab-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lab-teal">
                Veille scientifique STL
              </p>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-800 lg:text-4xl">
                Une page d&apos;actualites plus claire, plus utile et plus credible pour la STL
              </h1>
              <p className="mt-3 text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal lg:text-4xl">
                Les categories officielles restent, mais leur usage devient enfin lisible sur Biogy
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
                Cette veille conserve les categories officielles des biotechnologies et les relie aux vrais usages attendus
                en STL : culture scientifique, projet technologique, techniques de laboratoire, oral et ouverture One Health.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {metricCards.map((metric) => (
                  <article key={metric.label} className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm">
                    <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${metric.tone}`}>
                      {metric.label}
                    </div>
                    <p className="mt-4 text-3xl font-bold text-gray-800">{metric.value}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-lab-bg p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lab-purple">Cadre officiel</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">Une veille pensee pour les attendus STL</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                La selection privilegie les situations technologiques, la culture scientifique, le lien au laboratoire,
                les enjeux contemporains et les contextes exploitables en classe ou en projet.
              </p>

              <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-800">Derniere actualisation</p>
                <p className="mt-1 text-sm text-gray-600">{formatDateTime(digest?.generatedAt) || 'En attente'}</p>
              </div>

              <div className="mt-5 space-y-3">
                {(digest?.officialReferences || []).map((reference) => (
                  <a
                    key={reference.url}
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span>{reference.title}</span>
                    <span className="font-semibold text-lab-teal">Ouvrir</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {PAGE_PILLARS.map((pillar) => (
              <article key={pillar.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className={`mb-4 h-1.5 w-14 rounded-full ${pillar.line}`} />
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${pillar.badge}`}>
                  STL
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-800">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-teal">Navigation</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-800">Filtrer la veille STL</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Les couleurs officielles restent visibles, mais la lecture est simplifiee et plus proche du reste de l&apos;identite Biogy.
            </p>
          </div>

          <div className="w-full lg:max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => startTransition(() => setSelectedCategory('all'))}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal text-white shadow-md'
                    : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Toute la veille
              </button>

              {officialCategories.map((category) => {
                const style = CATEGORY_STYLES[category.key];
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => startTransition(() => setSelectedCategory(category.key))}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === category.key
                        ? style.solidBadge
                        : style.button
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-xs">{category.count}</span>
                  </button>
                );
              })}

              {transversalCategory ? (
                <button
                  type="button"
                  onClick={() => startTransition(() => setSelectedCategory(transversalCategory.key))}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === transversalCategory.key
                      ? CATEGORY_STYLES.multi.solidBadge
                      : CATEGORY_STYLES.multi.button
                  }`}
                >
                  {transversalCategory.shortTitle}
                  <span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-xs">{transversalCategory.count}</span>
                </button>
              ) : null}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Rechercher dans la veille STL</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Rechercher un theme, une technique, une source..."
                  className="w-full rounded-xl border border-gray-200 bg-lab-bg px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-lab-teal focus:bg-white focus:ring-2 focus:ring-lab-teal/10"
                />
              </label>

              <button
                type="button"
                onClick={() => fetchDigest(true)}
                disabled={loading || refreshing}
                className="rounded-xl bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {refreshing ? 'Actualisation...' : 'Actualiser la veille'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {error ? (
        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 shadow-sm">
          <p className="font-semibold">Impossible de charger la veille STL.</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      ) : null}

      {loading ? (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center shadow-lg">
          <div className="mx-auto h-14 w-14 rounded-full border-4 border-lab-blue/20 border-t-lab-purple animate-spin" />
          <p className="mt-5 text-lg font-semibold text-gray-800">Chargement de la veille STL...</p>
          <p className="mt-2 text-sm text-gray-500">
            Selection des sujets, classement par categorie et preparation d&apos;un affichage adapte au site.
          </p>
        </div>
      ) : null}

      {!loading && featuredArticle ? (
        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lab-purple">A la une STL</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">Les sujets les plus exploitables dans le cadre STL</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-gray-600">
              Chaque carte met en avant la categorie officielle, l&apos;interet pedagogique du sujet et ses usages possibles en classe.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
            <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="h-1 w-full bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal" />
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="min-h-[22rem] bg-gray-100">
                  <ArticleVisual
                    article={featuredArticle}
                    fallbackLabel="Veille STL"
                    style={CATEGORY_STYLES[featuredArticle.categoryKey || 'multi']}
                    featured
                  />
                </div>

                <div className="flex flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_STYLES[featuredArticle.categoryKey || 'multi'].softBadge}`}>
                      {getCategoryLabel(featuredArticle.categoryKey, categories)}
                    </span>
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                      {featuredArticle.kind === 'background' ? 'Repere de fond' : 'Actualite'}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">{featuredArticle.source}</span>
                  </div>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-gray-800">{featuredArticle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600">{featuredArticle.description}</p>

                  <div className={`mt-5 rounded-xl border p-4 text-sm leading-6 text-gray-700 ${CATEGORY_STYLES[featuredArticle.categoryKey || 'multi'].note}`}>
                    <span className="font-semibold text-gray-800">Pourquoi c&apos;est STL :</span> {featuredArticle.whyItMatters}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(featuredArticle.usages || []).map((usage) => (
                      <span key={usage} className="rounded-full border border-lab-teal/20 bg-lab-teal/10 px-3 py-1 text-xs font-semibold text-lab-teal">
                        {usage}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-sm text-gray-500">{formatDate(featuredArticle.pubDate)}</span>
                    <a
                      href={featuredArticle.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                    >
                      Lire la source
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {secondaryHighlights.map((article) => {
                const style = CATEGORY_STYLES[article.categoryKey || 'multi'];
                return (
                  <article key={`${article.link || article.title}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className={`h-1.5 w-full ${style.line}`} />
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.softBadge}`}>
                          {getCategoryLabel(article.categoryKey, categories)}
                        </span>
                        <span className="text-xs uppercase tracking-[0.16em] text-gray-500">{article.source}</span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold leading-tight text-gray-800">{article.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-gray-600">{article.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {(article.usages || []).map((usage) => (
                          <span key={usage} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                            {usage}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm text-gray-500">{formatDate(article.pubDate)}</span>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-lab-teal hover:underline"
                        >
                          Ouvrir
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {!loading && !hasResults ? (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Aucun resultat pour cette recherche</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Essaie une autre categorie ou retire quelques mots dans le champ de recherche.
          </p>
        </div>
      ) : null}

      {!loading && hasResults ? (
        <section className="mt-10 space-y-10">
          {Object.entries(filteredSections).map(([categoryKey, articles]) => {
            const category = categories.find((item) => item.key === categoryKey);
            const style = CATEGORY_STYLES[categoryKey] || CATEGORY_STYLES.multi;
            const liveCount = articles.filter((article) => article.kind === 'news').length;

            return (
              <section key={categoryKey}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                  <div className={`h-1.5 w-full ${style.line}`} />
                  <div className="p-5 lg:p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.softBadge}`}>
                            {category?.name || 'Transversale'}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                            {articles.length} sujet{articles.length > 1 ? 's' : ''}
                          </span>
                          {category?.usedBackground ? (
                            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                              {liveCount} actualite{liveCount > 1 ? 's' : ''} + repere de fond
                            </span>
                          ) : null}
                        </div>

                        <h2 className="mt-4 text-3xl font-bold text-gray-800">{category?.title || 'Culture scientifique STL'}</h2>
                        <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-600">{category?.description}</p>
                        <p className="mt-2 max-w-4xl text-sm leading-7 text-gray-500">{category?.lens}</p>
                      </div>

                      <div className={`rounded-xl border px-4 py-3 text-sm leading-6 text-gray-600 ${style.note}`}>
                        <p className="font-semibold text-gray-800">Domaine STL</p>
                        <p>{category?.domain || 'Culture scientifique'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {articles.map((article) => {
                    const articleStyle = CATEGORY_STYLES[article.categoryKey || categoryKey] || CATEGORY_STYLES.multi;
                    return (
                      <article key={`${article.link || article.title}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl">
                        <div className="relative h-48 bg-gray-100">
                          <ArticleVisual
                            article={article}
                            fallbackLabel={article.kind === 'background' ? 'Repere de fond STL' : category?.shortTitle || 'Veille STL'}
                            style={articleStyle}
                          />

                          <div className="absolute left-4 top-4 flex gap-2">
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${articleStyle.softBadge}`}>
                              {article.kind === 'background' ? 'Repere de fond' : 'Actualite'}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{article.source}</div>

                          <h3 className="mt-3 text-xl font-bold leading-tight text-gray-800">{article.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-gray-600">{article.description}</p>

                          <div className={`mt-4 rounded-xl border p-4 text-sm leading-6 text-gray-700 ${articleStyle.note}`}>
                            <span className="font-semibold text-gray-800">Interet STL :</span> {article.whyItMatters}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {(article.usages || []).map((usage) => (
                              <span key={usage} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                                {usage}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto flex items-center justify-between pt-6">
                            <span className="text-sm text-gray-500">{formatDate(article.pubDate)}</span>
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-lab-purple hover:underline"
                            >
                              Lire la source
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </section>
      ) : null}
    </div>
  );
}

export default ScienceWatchPage;
