import React, { startTransition, useDeferredValue, useEffect, useState } from 'react';

const CATEGORY_STYLES = {
  red: {
    card: 'border-rose-200 bg-rose-50',
    badge: 'bg-rose-600 text-white',
    softBadge: 'bg-rose-100 text-rose-700',
    title: 'text-rose-900',
    border: 'border-rose-400',
    button: 'border-rose-200 bg-white text-rose-800 hover:bg-rose-100',
  },
  white: {
    card: 'border-slate-200 bg-slate-50',
    badge: 'bg-slate-700 text-white',
    softBadge: 'bg-slate-200 text-slate-700',
    title: 'text-slate-900',
    border: 'border-slate-400',
    button: 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100',
  },
  green: {
    card: 'border-emerald-200 bg-emerald-50',
    badge: 'bg-emerald-600 text-white',
    softBadge: 'bg-emerald-100 text-emerald-700',
    title: 'text-emerald-900',
    border: 'border-emerald-400',
    button: 'border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-100',
  },
  yellow: {
    card: 'border-amber-200 bg-amber-50',
    badge: 'bg-amber-500 text-slate-900',
    softBadge: 'bg-amber-100 text-amber-800',
    title: 'text-amber-950',
    border: 'border-amber-400',
    button: 'border-amber-200 bg-white text-amber-900 hover:bg-amber-100',
  },
  blue: {
    card: 'border-sky-200 bg-sky-50',
    badge: 'bg-sky-600 text-white',
    softBadge: 'bg-sky-100 text-sky-700',
    title: 'text-sky-900',
    border: 'border-sky-400',
    button: 'border-sky-200 bg-white text-sky-800 hover:bg-sky-100',
  },
  multi: {
    card: 'border-teal-200 bg-teal-50',
    badge: 'bg-teal-600 text-white',
    softBadge: 'bg-teal-100 text-teal-700',
    title: 'text-teal-900',
    border: 'border-teal-400',
    button: 'border-teal-200 bg-white text-teal-800 hover:bg-teal-100',
  },
};

const PAGE_PILLARS = [
  {
    title: 'Culture scientifique STL',
    description:
      'Une veille exploitable pour ouvrir une sequence, nourrir un oral ou relier une notion a une actualite.',
  },
  {
    title: 'Projet technologique',
    description:
      'Des sujets utiles pour faire emerger un probleme, contextualiser un protocole ou identifier un enjeu de production.',
  },
  {
    title: 'Laboratoire et techniques',
    description:
      'La page met en avant les actualites qui font sens avec les analyses, les procedes et la qualite en STL.',
  },
  {
    title: 'One Health et enjeux',
    description:
      'Les liens sante-environnement-biodiversite sont rendus visibles pour rester au plus pres des attendus recents.',
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
  const visibleCategories = categories.filter((category) => category.key !== 'multi');
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

  return (
    <div className="container mx-auto px-4 pb-14 pt-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-sm">
        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr_0.9fr] lg:px-10 lg:py-10">
          <div>
            <p className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
              Veille scientifique STL
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
              Une vraie page d'actualite pour la STL, pensee pour les usages attendus en France
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 lg:text-lg">
              Cette veille garde les categories officielles des biotechnologies, mais les traduit enfin en usages STL clairs :
              culture scientifique, projet technologique, techniques de laboratoire, oral et enjeux One Health.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {PAGE_PILLARS.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">Cadre officiel</p>
                <h2 className="mt-2 text-2xl font-black">Ce que la veille privilegie</h2>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                Mise a jour {formatDateTime(digest?.generatedAt) || 'en attente'}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Serie STL : biotechnologies, sante, environnement, bio-industries</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  La page met l'accent sur les situations technologiques, les applications du vivant et les enjeux contemporains
                  utilises pour donner du sens aux enseignements.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Dynamique recente : oral, projet, culture scientifique et One Health</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  La selection cherche des sujets mobilisables en cours, en projet, en questionnement technologique et en ouverture scientifique.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {(digest?.officialReferences || []).map((reference) => (
                <a
                  key={reference.url}
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  <span>{reference.title}</span>
                  <span className="text-emerald-200">Ouvrir</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white px-5 py-5 shadow-sm lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Navigation editoriale</p>
            <h2 className="mt-1 text-2xl font-black text-slate-900">Filtrer la veille STL</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Les cinq categories officielles sont conservees. La rubrique transversale reste disponible pour la culture scientifique.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:min-w-[28rem]">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => startTransition(() => setSelectedCategory('all'))}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === 'all'
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Toute la veille
              </button>
              {visibleCategories.map((category) => {
                const style = CATEGORY_STYLES[category.key];
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => startTransition(() => setSelectedCategory(category.key))}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === category.key
                        ? style.badge
                        : style.button
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-xs">{category.count}</span>
                  </button>
                );
              })}
              {categories
                .filter((category) => category.key === 'multi')
                .map((category) => {
                  const style = CATEGORY_STYLES.multi;
                  return (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() => startTransition(() => setSelectedCategory(category.key))}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        selectedCategory === category.key
                          ? style.badge
                          : style.button
                      }`}
                    >
                      {category.shortTitle}
                      <span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-xs">{category.count}</span>
                    </button>
                  );
                })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Rechercher dans la veille STL</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Rechercher un theme, une technique, une source..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </label>

              <button
                type="button"
                onClick={() => fetchDigest(true)}
                disabled={loading || refreshing}
                className="rounded-2xl bg-lab-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {refreshing ? 'Actualisation...' : 'Actualiser la veille'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {error ? (
        <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 shadow-sm">
          <p className="font-semibold">Impossible de charger la veille STL.</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      ) : null}

      {loading ? (
        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-lab-teal" />
          <p className="mt-4 text-lg font-semibold text-slate-800">Chargement de la veille STL...</p>
          <p className="mt-2 text-sm text-slate-500">Selection des sujets, classement par categories et mise en forme editoriale.</p>
        </div>
      ) : null}

      {!loading && featuredArticle ? (
        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">A la une STL</p>
              <h2 className="mt-1 text-3xl font-black text-slate-900">Les sujets les plus exploitables en classe</h2>
            </div>
            <p className="max-w-xl text-right text-sm leading-6 text-slate-600">
              Les cartes mettent en avant les usages STL, la categorie officielle et l'interet pedagogique du sujet.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
            <article className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="min-h-[18rem] bg-slate-100">
                  {featuredArticle.imageUrl ? (
                    <img
                      src={featuredArticle.imageUrl}
                      alt={featuredArticle.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-6 text-center text-lg font-semibold text-slate-500">
                      Veille STL
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_STYLES[featuredArticle.categoryKey || 'multi'].badge}`}>
                      {STL_CATEGORIES_LABEL(featuredArticle.categoryKey, digest)}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {featuredArticle.kind === 'background' ? 'Repere de fond' : 'Actualite'}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{featuredArticle.source}</span>
                  </div>

                  <h3 className="mt-4 text-3xl font-black leading-tight text-slate-900">{featuredArticle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{featuredArticle.description}</p>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <span className="font-semibold text-slate-900">Pourquoi c'est STL :</span> {featuredArticle.whyItMatters}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(featuredArticle.usages || []).map((usage) => (
                      <span key={usage} className="rounded-full bg-lab-teal/10 px-3 py-1 text-xs font-semibold text-lab-teal">
                        {usage}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-sm text-slate-500">{formatDate(featuredArticle.pubDate)}</span>
                    <a
                      href={featuredArticle.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      Lire l'article
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {secondaryHighlights.map((article) => {
                const style = CATEGORY_STYLES[article.categoryKey || 'multi'];
                return (
                  <article key={`${article.link || article.title}`} className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.softBadge}`}>
                        {STL_CATEGORIES_LABEL(article.categoryKey, digest)}
                      </span>
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{article.source}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-black leading-tight text-slate-900">{article.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(article.usages || []).map((usage) => (
                        <span key={usage} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {usage}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-slate-500">{formatDate(article.pubDate)}</span>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-lab-teal hover:underline"
                      >
                        Ouvrir
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {!loading && !hasResults ? (
        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Aucun resultat pour cette recherche</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
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
                <div className={`rounded-[1.6rem] border ${style.card} p-5 shadow-sm`}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                          {category?.name || 'Transversale'}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {articles.length} sujet{articles.length > 1 ? 's' : ''}
                        </span>
                        {category?.usedBackground ? (
                          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
                            {liveCount} actualite{liveCount > 1 ? 's' : ''} + repere de fond
                          </span>
                        ) : null}
                      </div>
                      <h2 className={`mt-3 text-3xl font-black ${style.title}`}>{category?.title || 'Culture scientifique STL'}</h2>
                      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">{category?.description}</p>
                      <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">{category?.lens}</p>
                    </div>
                    <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700">
                      <p className="font-semibold text-slate-900">Domaine STL</p>
                      <p>{category?.domain || 'Culture scientifique'}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {articles.map((article) => {
                    const cardStyle = CATEGORY_STYLES[article.categoryKey || categoryKey] || CATEGORY_STYLES.multi;
                    return (
                      <article key={`${article.link || article.title}`} className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                        <div className="h-44 bg-slate-100">
                          {article.imageUrl ? (
                            <img
                              src={article.imageUrl}
                              alt={article.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              onError={(event) => {
                                event.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className={`flex h-full items-center justify-center bg-gradient-to-br px-6 text-center text-base font-semibold ${cardStyle.softBadge}`}>
                              {article.kind === 'background' ? 'Repere de fond STL' : category?.shortTitle || 'Veille STL'}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cardStyle.softBadge}`}>
                              {article.kind === 'background' ? 'Repere de fond' : 'Actualite'}
                            </span>
                            <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{article.source}</span>
                          </div>

                          <h3 className="mt-4 text-xl font-black leading-tight text-slate-900">{article.title}</h3>
                          <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">{article.description}</p>

                          <div className={`mt-4 rounded-2xl border ${cardStyle.card} p-4 text-sm leading-6 text-slate-700`}>
                            <span className="font-semibold text-slate-900">Interet STL :</span> {article.whyItMatters}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {(article.usages || []).map((usage) => (
                              <span key={usage} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                {usage}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto flex items-center justify-between pt-6">
                            <span className="text-sm text-slate-500">{formatDate(article.pubDate)}</span>
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                            >
                              Lire
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

const STL_CATEGORIES_LABEL = (categoryKey, digest) => {
  const category = (digest?.categories || []).find((item) => item.key === categoryKey);
  return category ? category.shortTitle : 'Transversale';
};

export default ScienceWatchPage;
