import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaIndustry, FaGlobe, FaWater, FaExclamationTriangle, FaFilter, FaSync, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [forceRefresh, setForceRefresh] = useState(false);
  const [biotechOnly, setBiotechOnly] = useState(true);
  const [articleCount, setArticleCount] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Editorial color palette with actual topics instead of "color names" as requested
  const biotechColors = {
    red: {
      name: 'Santé & Médecine',
      badgeLabel: 'Santé',
      description: 'Pharmaceutique, thérapie génique, vaccins',
      color: 'rose',
      bgColor: 'bg-rose-600',
      textColor: 'text-rose-700',
      bgColorLight: 'bg-rose-50/50',
      accentColor: 'text-rose-600',
      gradientFallback: 'bg-gradient-to-br from-rose-800 to-rose-600',
      icon: <FaHeartbeat className="text-rose-600 text-2xl" />,
      whiteIcon: <FaHeartbeat className="text-white opacity-20 text-6xl" />
    },
    green: {
      name: 'Agro & Végétal',
      badgeLabel: 'Agro',
      description: 'Production végétale, biomatériaux, énergie verte',
      color: 'emerald',
      bgColor: 'bg-emerald-600',
      textColor: 'text-emerald-700',
      bgColorLight: 'bg-emerald-50/50',
      accentColor: 'text-emerald-600',
      gradientFallback: 'bg-gradient-to-br from-emerald-800 to-emerald-600',
      icon: <FaLeaf className="text-emerald-600 text-2xl" />,
      whiteIcon: <FaLeaf className="text-white opacity-20 text-6xl" />
    },
    white: {
      name: 'Industrie',
      badgeLabel: 'Industrie',
      description: 'Procédés biologiques, biocatalyse',
      color: 'slate',
      bgColor: 'bg-slate-700',
      textColor: 'text-slate-800',
      bgColorLight: 'bg-slate-50/50',
      accentColor: 'text-slate-600',
      gradientFallback: 'bg-gradient-to-br from-slate-800 to-slate-600',
      icon: <FaIndustry className="text-slate-600 text-2xl" />,
      whiteIcon: <FaIndustry className="text-white opacity-20 text-6xl" />
    },
    yellow: {
      name: 'Environnement',
      badgeLabel: 'Environnement',
      description: 'Traitement des pollutions, bioremédiation',
      color: 'amber',
      bgColor: 'bg-amber-500',
      textColor: 'text-amber-800',
      bgColorLight: 'bg-amber-50/50',
      accentColor: 'text-amber-600',
      gradientFallback: 'bg-gradient-to-br from-amber-600 to-yellow-500',
      icon: <FaGlobe className="text-amber-600 text-2xl" />,
      whiteIcon: <FaGlobe className="text-white opacity-20 text-6xl" />
    },
    blue: {
      name: 'Océan',
      badgeLabel: 'Océan',
      description: 'Biodiversité marine, aquaculture',
      color: 'blue',
      bgColor: 'bg-blue-600',
      textColor: 'text-blue-700',
      bgColorLight: 'bg-blue-50/50',
      accentColor: 'text-blue-600',
      gradientFallback: 'bg-gradient-to-br from-blue-800 to-blue-600',
      icon: <FaWater className="text-blue-600 text-2xl" />,
      whiteIcon: <FaWater className="text-white opacity-20 text-6xl" />
    },
    multi: {
      name: 'Actualités Multiples',
      badgeLabel: 'Général',
      description: 'Actualités transversales',
      color: 'indigo',
      bgColor: 'bg-gray-800', 
      textColor: 'text-gray-800',
      bgColorLight: 'bg-gray-50/50',
      accentColor: 'text-gray-600',
      gradientFallback: 'bg-gradient-to-br from-gray-900 to-gray-700',
      icon: <BiCategory className="text-gray-600 text-2xl" />,
      whiteIcon: <BiCategory className="text-white opacity-20 text-6xl" />
    }
  };

  const fetchArticles = async (colorKey) => {
    setLoading(true);
    setError(null);
    setCurrentSlide(0); // Reset carousel on new fetch
    
    try {
      let url = '/.netlify/functions/biotech-veille';
      const params = new URLSearchParams();
      if (colorKey) params.append('color', colorKey);
      // Removed forceRefresh mapping to URL to simplify, the user rarely needs it dynamically
      params.append('biotechOnly', biotechOnly.toString());
      params.append('max', '25'); 
      
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
    // Initial fetch for 'À la une'
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
  }, []);

  const handleColorSelect = (color) => {
    if (selectedColor === color) {
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

  // Carousel Navigation Functions
  const nextSlide = (maxSlides) => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = (maxSlides) => {
      setCurrentSlide((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
  };
  
  // Custom smart image handler for clean fallbacks
  const SmartImage = ({ src, alt, colorData, className }) => {
    const [imgError, setImgError] = useState(false);
    
    // Treat no src exactly like an error immediately
    if (!src || imgError) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${colorData.gradientFallback} ${className}`}>
                 {colorData.whiteIcon}
            </div>
        );
    }
    
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            onError={() => setImgError(true)}
        />
    );
  };

  // The Top Navigation / Category Ribbon
  const renderCategoryRibbon = () => (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 mb-10 overflow-x-auto hide-scrollbar shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 md:space-x-8">
        <button
            onClick={() => handleColorSelect(null)}
            className={`flex-shrink-0 px-5 py-2 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${
                selectedColor === null 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
        >
            À la une
        </button>
        
        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

        {Object.entries(biotechColors).filter(([key]) => key !== 'multi').map(([key, data]) => (
          <button
            key={key}
            onClick={() => handleColorSelect(key)}
            className={`flex-shrink-0 group flex flex-col items-center justify-center relative py-1 px-3 transition-all duration-300 ${
              selectedColor === key 
                ? `${data.textColor} font-black` 
                : 'text-gray-500 hover:text-gray-900 font-medium'
            }`}
          >
            <span className="text-sm tracking-wide">{data.name}</span>
            {/* Animated highlight indicator */}
            <span className={`absolute -bottom-4 h-1 rounded-t-lg transition-all duration-300 ${
                selectedColor === key ? `w-full ${data.bgColor}` : 'w-0 group-hover:w-1/2 bg-gray-300'
            }`}></span>
          </button>
        ))}
      </div>
    </div>
  );

  // Tools Ribbon (Refresh, Filters)
  const renderToolbar = () => (
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 mb-8">
          <div className="text-sm text-gray-400 font-medium mb-4 sm:mb-0">
              Mise à jour : {new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}
          </div>
          <div className="flex items-center gap-6 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
            <button 
                onClick={handleRefresh}
                disabled={loading}
                className="group flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
            >
                <FaSync className={`mr-2 w-3.5 h-3.5 ${loading ? 'animate-spin text-gray-800' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                {loading ? 'Recherche...' : 'Actualiser'}
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
                <span className={`text-sm font-semibold transition-colors mr-3 ${biotechOnly ? 'text-gray-900' : 'text-gray-500'}`}><FaFilter className="inline w-3 h-3 mr-1 -mt-0.5" /> 100% Biotech</span>
                <div className={`relative w-9 h-5 rounded-full transition-colors duration-300 ${biotechOnly ? 'bg-blue-600' : 'bg-gray-300'}`}>
                    <div className={`absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-300 shadow-sm ${biotechOnly ? 'translate-x-4' : ''}`}></div>
                </div>
            </label>
        </div>
      </div>
  );

  // Standard List Article - "Cards" - removed heavy underlines, fixed fallbacks
  const renderListItem = (article, colorData, index) => (
      <motion.article 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        key={index}
        className="group mb-8 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col md:flex-row"
      >
          {/* Thumbnail Image (Left side on desktop, top on mobile) */}
          <div className="md:w-1/3 h-56 md:h-auto overflow-hidden relative bg-gray-100 border-r border-gray-100 flex-shrink-0">
               <a href={article.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-multiply ${colorData.bgColor}`}></div>
                   <SmartImage 
                      src={article.imageUrl} 
                      alt={article.title} 
                      colorData={colorData}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                   />
              </a>
              {/* Floating Badge on Image */}
              <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md rounded-md ${colorData.bgColor}`}>
                     {colorData.badgeLabel}
                  </span>
              </div>
          </div>

          {/* Core Content */}
          <div className="p-6 md:p-8 flex flex-col justify-between w-full">
              <div>
                  <div className="flex items-center space-x-3 mb-3 text-sm">
                      <span className="font-semibold text-gray-500">{formatDate(article.pubDate)}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="font-bold text-gray-800 tracking-wide uppercase">{article.source || 'Source externe'}</span>
                  </div>
                  
                  {/* Clean title without underlines */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors">
                     <a href={article.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none block no-underline">
                         {article.title}
                     </a>
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-serif line-clamp-3 mb-6 relative z-10">
                      {article.description}
                  </p>
              </div>

              <div className="mt-auto">
                 <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest group/btn no-underline">
                     Lire l'article 
                     <FaArrowRight className="ml-2 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                 </a>
              </div>
          </div>
      </motion.article>
  );

  // The Top Carousel for Featured Articles - clean, no underlines
  const renderFeaturedCarousel = (featuredArticles) => {
      if (!featuredArticles || featuredArticles.length === 0) return null;
      
      const maxSlides = featuredArticles.length;
      const currentArticle = featuredArticles[currentSlide];
      const colorData = biotechColors[currentArticle.colorKey] || biotechColors.multi;

      return (
          <div className="relative w-full mb-16 group/carousel bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl h-[65vh] min-h-[500px] max-h-[700px]">
              
              <AnimatePresence mode="wait">
                  <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute inset-0"
                  >
                      <SmartImage 
                          src={currentArticle.imageUrl} 
                          alt={currentArticle.title} 
                          colorData={colorData}
                          className="w-full h-full object-cover opacity-60" 
                      />
                      
                      {/* Dual gradient for maximum text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 md:w-4/5 lg:w-2/3">
                          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                              <div className="flex flex-wrap items-center gap-3 mb-5">
                                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg ${colorData.bgColor}`}>
                                      {colorData.badgeLabel}
                                  </span>
                                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest">
                                      {currentArticle.source}
                                  </span>
                                  <span className="text-gray-300 text-sm font-medium">
                                      {formatDate(currentArticle.pubDate, 'short')}
                                  </span>
                              </div>
                              <a href={currentArticle.link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none no-underline">
                                  {/* Refined title, no underline just color shift */}
                                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-xl hover:text-blue-200 transition-colors">
                                      {currentArticle.title}
                                  </h2>
                              </a>
                              <p className="text-gray-200 text-lg md:text-xl font-serif line-clamp-2 md:line-clamp-3 mb-8 drop-shadow-md">
                                  {currentArticle.description}
                              </p>
                              <a href={currentArticle.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg group/link no-underline">
                                  Lire l'intégralité 
                                  <FaExternalLinkAlt className="ml-3 w-3 h-3 opacity-50 transition-opacity group-hover/link:opacity-100" />
                              </a>
                          </motion.div>
                      </div>
                  </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              {maxSlides > 1 && (
                  <div className="absolute right-6 bottom-8 md:right-12 md:bottom-12 flex space-x-3 z-10">
                      <button 
                          onClick={() => prevSlide(maxSlides)}
                          className="w-12 h-12 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                          <FaChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                          onClick={() => nextSlide(maxSlides)}
                          className="w-12 h-12 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                          <FaChevronRight className="w-4 h-4" />
                      </button>
                  </div>
              )}

              {/* Dots indicator */}
              {maxSlides > 1 && (
                  <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex space-x-2 z-10">
                      {featuredArticles.map((_, idx) => (
                          <button 
                              key={idx}
                              onClick={() => setCurrentSlide(idx)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                          />
                      ))}
                  </div>
              )}
          </div>
      );
  };

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
        // Sort them by date 
        displayArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    }

    if (displayArticles.length === 0) return null;

    // Split into Carousel (Top 4) and List (The rest)
    const featuredArticles = displayArticles.slice(0, Math.min(4, displayArticles.length));
    const restArticles = displayArticles.slice(featuredArticles.length);

    return (
        <div>
            {/* Carousel */}
            {renderFeaturedCarousel(featuredArticles)}
            
            {/* Section Header for the List */}
            {restArticles.length > 0 && (
                <div className="mb-10 flex items-center justify-between border-b 2 border-gray-900 pb-4">
                    <h2 className="text-3xl font-serif font-black text-gray-900">
                        {selectedColor ? `Actualités ${biotechColors[selectedColor].name}` : 'Toute l\'actualité'}
                    </h2>
                    <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {restArticles.length} articles
                    </span>
                </div>
            )}

            {/* Structured Card List */}
            <div className="max-w-5xl mx-auto">
                {restArticles.map((article, idx) => 
                   renderListItem(article, biotechColors[article.colorKey] || biotechColors.multi, idx)
                )}
            </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Editorial Header */}
      <header className="pt-20 pb-12 px-4 text-center bg-white">
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-gray-900 tracking-tighter mb-6 relative inline-block">
             Science Watch
             <span className="absolute -top-6 -right-10 text-xl md:text-2xl text-blue-600 font-sans font-bold select-none rotate-12 bg-blue-50 px-2 rounded">
                Édition Mag'
             </span>
         </h1>
         <p className="text-xl md:text-2xl text-gray-500 font-serif italic max-w-3xl mx-auto leading-relaxed">
             Le pouls des innovations en biotechnologie. Décryptage quotidien par secteurs.
         </p>
      </header>

      {/* The sticky ribbon for navigation directly matching names */}
      {renderCategoryRibbon()}

      <main className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* Tools */}
         {renderToolbar()}

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-50 text-red-800 p-6 shadow-sm mb-10 border-l-4 border-red-600 rounded-r-xl">
            <h3 className="font-bold flex items-center mb-2"><FaExclamationTriangle className="mr-2"/> Erreur de chargement</h3>
            <p className="font-serif">{error}</p>
          </motion.div>
        )}

        {loading ? (
           // Minimalist Skeleton Loader matching new layout
           <div className="animate-pulse">
               {/* Carousel Skeleton */}
               <div className="w-full h-[65vh] bg-gray-200 rounded-[2rem] mb-16 relative overflow-hidden">
                   <div className="absolute bottom-16 left-16 w-2/3">
                      <div className="flex space-x-3 mb-6">
                           <div className="h-8 bg-gray-300 rounded-full w-24"></div>
                           <div className="h-8 bg-gray-300 rounded-full w-32"></div>
                      </div>
                      <div className="h-12 bg-gray-300 rounded-xl w-full mb-3"></div>
                      <div className="h-12 bg-gray-300 rounded-xl w-4/5 mb-6"></div>
                      <div className="h-6 bg-gray-300 w-3/4 mb-10"></div>
                      <div className="h-12 bg-gray-300 rounded-xl w-48"></div>
                   </div>
               </div>
               
               {/* List Skeletons */}
               <div className="max-w-5xl mx-auto space-y-8">
                   <div className="h-8 w-48 bg-gray-200 mb-10 border-b-2 border-gray-300"></div>
                   {[1, 2, 3].map(i => (
                       <div key={i} className="flex flex-col md:flex-row gap-8 bg-white border border-gray-100 rounded-2xl p-6">
                           <div className="md:w-1/3 h-56 bg-gray-200 rounded-xl flex-shrink-0"></div>
                           <div className="w-full flex flex-col justify-center">
                               <div className="h-4 bg-gray-200 w-1/3 mb-4 rounded"></div>
                               <div className="h-8 bg-gray-200 w-full mb-3 rounded"></div>
                               <div className="h-8 bg-gray-200 w-5/6 mb-6 rounded"></div>
                               <div className="h-4 bg-gray-100 w-full mb-2 rounded"></div>
                               <div className="h-4 bg-gray-100 w-2/3 mb-8 rounded"></div>
                               <div className="h-5 bg-gray-200 w-32 mt-auto rounded"></div>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
        ) : (
            <>
                {articles.length === 0 && !error ? (
                    <div className="text-center bg-gray-50 border border-gray-200 rounded-3xl py-32 px-4 shadow-sm">
                        <FaFilter className="mx-auto text-4xl text-gray-300 mb-6" />
                        <h3 className="text-2xl font-serif font-black text-gray-800 mb-2">Aucun article disponible</h3>
                        <p className="text-gray-500 font-serif italic text-lg max-w-md mx-auto">
                            Nous n'avons pas trouvé de nouvelles récentes pour cette catégorie avec les critères actuels.
                        </p>
                        <button 
                            onClick={() => handleColorSelect(null)}
                            className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors no-underline"
                        >
                            Retour à la une
                        </button>
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