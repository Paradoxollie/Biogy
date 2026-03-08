import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaIndustry, FaGlobe, FaWater, FaSearch, FaExclamationTriangle, FaFilter, FaSync, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [forceRefresh, setForceRefresh] = useState(false);
  const [biotechOnly, setBiotechOnly] = useState(true);
  const [articleCount, setArticleCount] = useState({});

  // Editorial color palette (subtler backgrounds, strong accents)
  const biotechColors = {
    green: {
      name: 'Verte',
      description: 'Agro-alimentaire, production végétale, biomatériaux, énergie',
      color: 'emerald',
      bgColor: 'bg-emerald-600',
      textColor: 'text-emerald-700',
      bgColorLight: 'bg-emerald-50/50',
      accentColor: 'text-emerald-600',
      icon: <FaLeaf className="text-emerald-600 text-2xl" />,
      keywords: ['agro-alimentaire', 'agro alimentaire', 'agriculture biotechnologie', 'plante transgénique', 'amélioration végétale', 'biomatériau', 'biocarburant', 'énergie verte', 'biomasse', 'bioéthanol', 'OGM', 'céréale génétiquement', 'agroalimentaire biotech', 'biotechnologie végétale', 'fermentation']
    },
    red: {
      name: 'Rouge',
      description: 'Santé, pharmaceutique, médecine',
      color: 'rose',
      bgColor: 'bg-rose-600',
      textColor: 'text-rose-700',
      bgColorLight: 'bg-rose-50/50',
      accentColor: 'text-rose-600',
      icon: <FaHeartbeat className="text-rose-600 text-2xl" />,
      keywords: ['biotechnologie médicale', 'médic', 'pharmac', 'thérapie génique', 'médicament biotechnologique', 'vaccin', 'anticorps', 'anticorps monoclonal', 'biopharmaceutique', 'cellule souche', 'génétique', 'crispr', 'ADN', 'ARN', 'génomique', 'biocapteur', 'glycémie', 'diabète', 'biotechnologie santé']
    },
    white: {
      name: 'Blanche',
      description: 'Applications industrielles, procédés biologiques',
      color: 'slate',
      bgColor: 'bg-slate-700',
      textColor: 'text-slate-800',
      bgColorLight: 'bg-slate-50/50',
      accentColor: 'text-slate-600',
      icon: <FaIndustry className="text-slate-600 text-2xl" />,
      keywords: ['biotechnologie industrielle', 'biocatalyse', 'bioproduction', 'biochimie industrielle', 'polymère biosourcé', 'textile biotechnologie', 'procédé biologique', 'fermentation industrielle', 'bioréacteur', 'bioraffinerie', 'solvant biosourcé', 'biosynthèse', 'enzyme industrielle', 'biotech industrielle', 'catalyseur biologique']
    },
    yellow: {
      name: 'Jaune',
      description: 'Protection de l\'environnement, traitement des pollutions',
      color: 'amber',
      bgColor: 'bg-amber-500',
      textColor: 'text-amber-800',
      bgColorLight: 'bg-amber-50/50',
      accentColor: 'text-amber-600',
      icon: <FaGlobe className="text-amber-600 text-2xl" />,
      keywords: ['bioremédiation', 'biodépollution', 'traitement biologique', 'déchet biologique', 'biodégradation', 'dépollution', 'écologie industrielle', 'biotechnologie environnementale', 'bioréhabilitation', 'sol pollué', 'eau traitement biologique', 'assainissement', 'développement durable biotech', 'impact environnemental', 'microorganisme dépolluant']
    },
    blue: {
      name: 'Bleue',
      description: 'Biodiversité marine, aquaculture, cosmétique marine',
      color: 'blue',
      bgColor: 'bg-blue-600',
      textColor: 'text-blue-700',
      bgColorLight: 'bg-blue-50/50',
      accentColor: 'text-blue-600',
      icon: <FaWater className="text-blue-600 text-2xl" />,
      keywords: ['biotechnologie marine', 'aquaculture', 'algue', 'microalgue', 'biotechnologie bleue', 'ressource marine', 'cosmétique marine', 'milieu aquatique biotechnologie', 'bio-océanographie', 'spiruline', 'organisme marin', 'biodiversité marine', 'aquatique biotechnologie', 'phytoplancton']
    },
    multi: {
      name: 'Général',
      description: 'Actualités transversales',
      color: 'indigo',
      bgColor: 'bg-indigo-600',
      textColor: 'text-indigo-700',
      bgColorLight: 'bg-indigo-50/50',
      accentColor: 'text-indigo-600',
      icon: <BiCategory className="text-indigo-600 text-2xl" />,
      keywords: []
    }
  };

  const fetchArticles = async (colorKey) => {
    setLoading(true);
    setError(null);
    
    try {
      let url = '/.netlify/functions/biotech-veille';
      const params = new URLSearchParams();
      if (colorKey) params.append('color', colorKey);
      if (forceRefresh) params.append('refresh', 'true');
      params.append('biotechOnly', biotechOnly.toString());
      params.append('max', '20');
      
      const fullUrl = `${url}${params.toString() ? '?' + params.toString() : ''}`;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      try {
        const response = await fetch(fullUrl, {
          signal: controller.signal,
          cache: 'no-cache',
          headers: {
            'pragma': 'no-cache',
            'cache-control': 'no-cache'
          }
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          if (response.status === 502 || response.status === 504) {
             throw new Error(`La passerelle Netlify a renvoyé une erreur ${response.status}. Veuillez réessayer plus tard.`);
          }
          throw new Error(`Erreur réseau: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) throw new Error(data.error);
        
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
          
          const countByColor = data.articles.reduce((acc, article) => {
            const color = article.biotechColor || 'unclassified';
            acc[color] = (acc[color] || 0) + 1;
            return acc;
          }, {});
          
          setArticleCount(countByColor);
        } else {
          throw new Error("Format de données incorrect");
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        if (fetchError.name === 'AbortError') throw new Error("La requête a pris trop de temps. Veuillez réessayer plus tard.");
        throw fetchError;
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // We fetch everything initially for the magazine front page feel
    fetchArticles(null);

    const preloadArticleCounts = async () => {
      try {
        const response = await fetch('/.netlify/functions/biotech-veille?counts=true');
        if (response.ok) {
          const data = await response.json();
          if (data.counts) setArticleCount(data.counts);
        }
      } catch (error) {
        console.error("Erreur préchargement compteurs:", error);
      }
    };
    preloadArticleCounts();
  }, []); // Empty dependency array means this runs once on mount

  const handleColorSelect = (color) => {
    if (selectedColor === color) {
        // Toggle off if clicking the same color
        setSelectedColor(null);
        fetchArticles(null);
    } else {
        setSelectedColor(color);
        setArticles([]);
        fetchArticles(color);
    }
  };

  const organizeArticlesByColor = (articleList) => {
    const organizedByColor = Object.keys(biotechColors).reduce((acc, color) => {
        acc[color] = [];
        return acc;
    }, { unclassified: [] });
    
    articleList.forEach(article => {
      const color = article.biotechColor && biotechColors[article.biotechColor] ? article.biotechColor : 'unclassified';
      if (organizedByColor[color]) {
        organizedByColor[color].push(article);
      } else {
        organizedByColor.unclassified.push(article);
      }
    });
    return organizedByColor;
  };

  const articlesByBiotechColor = organizeArticlesByColor(articles);

  const handleRefresh = () => {
    setArticles([]);
    fetchArticles(selectedColor);
  };

  // Format date helper
  const formatDate = (dateString, format = 'long') => {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (format === 'short') {
          return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
      }
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // The Top Navigation / Category Ribbon
  const renderCategoryRibbon = () => (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 mb-10 overflow-x-auto hide-scrollbar">
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 md:space-x-6">
        <button
            onClick={() => handleColorSelect(null)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                selectedColor === null 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
        >
            À la une
        </button>
        
        {/* Subtle vertical divider */}
        <div className="w-px h-6 bg-gray-300 hidden md:block"></div>

        {Object.entries(biotechColors).map(([key, data]) => (
          <button
            key={key}
            onClick={() => handleColorSelect(key)}
            className={`flex-shrink-0 group flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
              selectedColor === key 
                ? `${data.bgColor} text-white shadow-sm` 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className={`w-2 h-2 rounded-full mr-3 ${selectedColor === key ? 'bg-white' : data.bgColor}`}></span>
            <span className="text-sm font-medium tracking-wide uppercase">{data.name}</span>
            {articleCount[key] !== undefined && selectedColor !== key && (
                <span className="ml-2 text-xs text-gray-400 font-normal">({articleCount[key]})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  // Tools Ribbon (Refresh, Filters)
  const renderToolbar = () => (
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-200 mb-10">
          <div className="text-sm text-gray-500 font-medium mb-4 sm:mb-0">
              Mise à jour : {new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}
          </div>
          <div className="flex items-center gap-6">
            <button 
                onClick={handleRefresh}
                disabled={loading}
                className="group flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
            >
                <FaSync className={`mr-2 w-3.5 h-3.5 ${loading ? 'animate-spin text-gray-800' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                {loading ? 'Actualisation...' : 'Actualiser'}
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="sr-only" checked={biotechOnly} onChange={() => {
                setBiotechOnly(!biotechOnly);
                if (articles.length > 0) {
                    setArticles([]);
                    setTimeout(() => fetchArticles(selectedColor), 50);
                }
                }} />
                <span className={`text-sm font-semibold transition-colors mr-2 ${biotechOnly ? 'text-gray-900' : 'text-gray-500'}`}>100% Biotech</span>
                <div className={`relative w-8 h-4 rounded-full transition-colors duration-300 ${biotechOnly ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className={`absolute left-0.5 top-0.5 bg-white w-3 h-3 rounded-full transition-transform duration-300 ${biotechOnly ? 'translate-x-4' : ''}`}></div>
                </div>
            </label>
        </div>
      </div>
  );

  // Standard List Article - Minimalist, text heavy
  const renderListItem = (article, colorData, index) => (
      <motion.article 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        key={index}
        className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-gray-100 last:border-0"
      >
          {/* Metadata Sidebar (Source, Date) */}
          <div className="md:col-span-3 flex flex-col justify-start">
              <div className="flex items-center space-x-2 mb-2">
                 <span className={`w-2 h-2 rounded-full ${colorData.bgColor}`}></span>
                 <span className={`text-xs font-bold uppercase tracking-wider ${colorData.accentColor}`}>{colorData.name}</span>
              </div>
              <span className="text-gray-500 text-sm font-medium">{formatDate(article.pubDate)}</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest mt-1 bg-gray-50 self-start px-2 py-1 rounded inline-block">{article.source || 'Source externe'}</span>
          </div>

          {/* Core Content */}
          <div className="md:col-span-6 flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-gray-300">
                 <a href={article.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                     {article.title}
                 </a>
              </h3>
              <p className="text-gray-600 text-base leading-relaxed line-clamp-3 font-serif">
                  {article.description}
              </p>
          </div>

          {/* Thumbnail Image (Right aligned) */}
          <div className="md:col-span-3">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="block w-full aspect-[4/3] md:aspect-square overflow-hidden bg-gray-50">
                   <img
                    src={article.imageUrl || `https://placehold.co/400x400/f8fafc/94a3b8?text=${encodeURIComponent(colorData.name)}`}
                    alt={article.title}
                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x400/f8fafc/94a3b8?text=${encodeURIComponent(colorData.name)}`;
                    }}
                  />
              </a>
          </div>
      </motion.article>
  );

  // Featured Article layout
  const renderFeaturedArticle = (article, colorData) => (
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16 group"
      >
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="block relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-900 mb-6">
              <img
                src={article.imageUrl || `https://placehold.co/1200x800/1e293b/94a3b8?text=${encodeURIComponent(colorData.name)}`}
                alt={article.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/1200x800/1e293b/94a3b8?text=${encodeURIComponent(colorData.name)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-3/4">
                 <div className="flex items-center space-x-3 mb-4">
                     <span className={`px-3 py-1 bg-white text-xs font-bold uppercase tracking-widest ${colorData.textColor}`}>
                         {colorData.name}
                     </span>
                     <span className="text-white/80 text-sm font-medium drop-shadow-md">
                         {article.source}
                     </span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-4 drop-shadow-lg group-hover:underline decoration-white/50 underline-offset-8">
                     {article.title}
                 </h2>
                 <p className="text-white/90 text-lg md:text-xl font-serif line-clamp-2 md:line-clamp-3 drop-shadow-md hidden sm:block">
                     {article.description}
                 </p>
              </div>
          </a>
      </motion.article>
  );

  // The main rendering logic for the articles
  const renderArticlesContent = () => {
    // Collect all articles we want to display into a flat array first for easy indexing
    let displayArticles = [];
    
    if (selectedColor && articlesByBiotechColor[selectedColor]) {
        // Just the selected color
        displayArticles = articlesByBiotechColor[selectedColor].map(a => ({ ...a, colorKey: selectedColor }));
    } else {
        // All articles (À la une), flat map them
        Object.entries(articlesByBiotechColor).forEach(([colorKey, colorArticles]) => {
            colorArticles.forEach(a => {
                displayArticles.push({...a, colorKey: colorKey});
            });
        });
        // Sort them by date to get a true "Une" (assuming pubDate exists and is sortable)
        displayArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    }

    if (displayArticles.length === 0) return null;

    const featuredArticle = displayArticles[0];
    const restArticles = displayArticles.slice(1);

    return (
        <div>
            {/* The single massive featured article at the top */}
            {renderFeaturedArticle(featuredArticle, biotechColors[featuredArticle.colorKey] || biotechColors.multi)}
            
            <div className="max-w-4xl mx-auto">
                {/* The list of remaining articles */}
                {restArticles.map((article, idx) => 
                   renderListItem(article, biotechColors[article.colorKey] || biotechColors.multi, idx)
                )}
            </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Magazine Header */}
      <header className="pt-16 pb-8 px-4 text-center">
         <h1 className="text-5xl md:text-7xl font-serif font-black text-gray-900 tracking-tight mb-4">
             Science Watch
         </h1>
         <p className="text-lg text-gray-500 font-serif italic max-w-2xl mx-auto">
             L'essentiel de l'actualité en Biotechnologies, trié par domaine.
         </p>
      </header>

      {/* The sticky ribbon for navigation */}
      {renderCategoryRibbon()}

      <main className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Tools (Refresh, Biotech Only) */}
         {renderToolbar()}

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-50 text-red-800 p-6 shadow-sm mb-10 border-l-4 border-red-600">
            <h3 className="font-bold flex items-center mb-2"><FaExclamationTriangle className="mr-2"/> Erreur réseau</h3>
            <p className="font-serif">{error}</p>
          </motion.div>
        )}

        {loading ? (
           // Minimalist Skeleton Loader
           <div className="animate-pulse">
               {/* Hero Skeleton */}
               <div className="w-full h-[50vh] bg-gray-100 mb-16 relative">
                   <div className="absolute bottom-10 left-10 w-2/3">
                      <div className="h-4 bg-gray-200 w-24 mb-4"></div>
                      <div className="h-10 bg-gray-200 w-full mb-2"></div>
                      <div className="h-10 bg-gray-200 w-4/5 mb-4"></div>
                   </div>
               </div>
               
               {/* List Skeletons */}
               <div className="max-w-4xl mx-auto space-y-10">
                   {[1, 2, 3, 4].map(i => (
                       <div key={i} className="grid grid-cols-12 gap-6 border-b border-gray-100 pb-10">
                           <div className="col-span-3">
                               <div className="h-3 bg-gray-100 w-16 mb-2"></div>
                               <div className="h-3 bg-gray-100 w-24"></div>
                           </div>
                           <div className="col-span-6">
                               <div className="h-6 bg-gray-200 w-full mb-3"></div>
                               <div className="h-6 bg-gray-200 w-5/6 mb-4"></div>
                               <div className="h-4 bg-gray-100 w-full mb-2"></div>
                               <div className="h-4 bg-gray-100 w-2/3"></div>
                           </div>
                           <div className="col-span-3 h-32 bg-gray-100"></div>
                       </div>
                   ))}
               </div>
           </div>
        ) : (
            <>
                {articles.length === 0 && !error ? (
                    <div className="text-center text-gray-500 font-serif italic py-20">
                        Aucun article trouvé pour cette sélection.
                    </div>
                ) : (
                    renderArticlesContent()
                )}
            </>
        )}
      </main>
    </div>
  );
}

export default ScienceWatchPage;