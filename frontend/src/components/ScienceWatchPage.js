import React, { useState, useEffect } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [forceRefresh, setForceRefresh] = useState(false);

  // Définition des catégories de biotechnologie par couleur
  const biotechColors = {
    green: {
      name: 'Verte',
      description: 'Agro-alimentaire, production végétale, biomatériaux, énergie',
      color: 'green',
      bgColor: 'bg-green-500',
      textColor: 'text-green-800',
      bgColorLight: 'bg-green-100',
      borderColor: 'border-green-500',
      keywords: ['agro-alimentaire', 'agro alimentaire', 'agriculture biotechnologie', 'plante transgénique', 'amélioration végétale', 'biomatériau', 'biocarburant', 'énergie verte', 'biomasse', 'bioéthanol', 'OGM', 'céréale génétiquement', 'agroalimentaire biotech', 'biotechnologie végétale', 'fermentation']
    },
    red: {
      name: 'Rouge',
      description: 'Santé, pharmaceutique, médecine',
      color: 'red',
      bgColor: 'bg-red-500',
      textColor: 'text-red-800',
      bgColorLight: 'bg-red-100',
      borderColor: 'border-red-500',
      keywords: ['biotechnologie médicale', 'médic', 'pharmac', 'thérapie génique', 'médicament biotechnologique', 'vaccin', 'anticorps', 'anticorps monoclonal', 'biopharmaceutique', 'cellule souche', 'génétique', 'crispr', 'ADN', 'ARN', 'génomique', 'biocapteur', 'glycémie', 'diabète', 'biotechnologie santé']
    },
    white: {
      name: 'Blanche',
      description: 'Applications industrielles, procédés biologiques',
      color: 'gray',
      bgColor: 'bg-gray-500',
      textColor: 'text-gray-800',
      bgColorLight: 'bg-gray-100',
      borderColor: 'border-gray-500',
      keywords: ['biotechnologie industrielle', 'biocatalyse', 'bioproduction', 'biochimie industrielle', 'polymère biosourcé', 'textile biotechnologie', 'procédé biologique', 'fermentation industrielle', 'bioréacteur', 'bioraffinerie', 'solvant biosourcé', 'biosynthèse', 'enzyme industrielle', 'biotech industrielle', 'catalyseur biologique']
    },
    yellow: {
      name: 'Jaune',
      description: 'Protection de l\'environnement, traitement des pollutions',
      color: 'yellow',
      bgColor: 'bg-yellow-500',
      textColor: 'text-yellow-800',
      bgColorLight: 'bg-yellow-100',
      borderColor: 'border-yellow-500',
      keywords: ['bioremédiation', 'biodépollution', 'traitement biologique', 'déchet biologique', 'biodégradation', 'dépollution', 'écologie industrielle', 'biotechnologie environnementale', 'bioréhabilitation', 'sol pollué', 'eau traitement biologique', 'assainissement', 'développement durable biotech', 'impact environnemental', 'microorganisme dépolluant']
    },
    blue: {
      name: 'Bleue',
      description: 'Biodiversité marine, aquaculture, cosmétique marine',
      color: 'blue',
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-800',
      bgColorLight: 'bg-blue-100',
      borderColor: 'border-blue-500',
      keywords: ['biotechnologie marine', 'aquaculture', 'algue', 'microalgue', 'biotechnologie bleue', 'ressource marine', 'cosmétique marine', 'milieu aquatique biotechnologie', 'bio-océanographie', 'spiruline', 'organisme marin', 'biodiversité marine', 'aquatique biotechnologie', 'phytoplancton']
    },
    black: {
      name: 'Noire',
      description: 'Éducation, formations, ressources pédagogiques',
      color: 'black',
      bgColor: 'bg-gray-800',
      textColor: 'text-gray-100',
      bgColorLight: 'bg-gray-200',
      borderColor: 'border-gray-800',
      keywords: ['éducation', 'formation', 'académie', 'pédagogie', 'didactique', 'enseignement', 'apprendre', 'étudiant', 'lycée', 'université', 'cours', 'programme', 'curriculum', 'apprentissage', 'ressource éducative']
    },
    multi: {
      name: 'Multi-couleurs',
      description: 'Sources d\'actualités générales touchant plusieurs domaines biotechnologiques',
      color: 'purple',
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-800',
      bgColorLight: 'bg-purple-100',
      borderColor: 'border-purple-500',
      keywords: []
    }
  };

  // Fonction pour charger les articles
  const fetchArticles = async (colorFilter = null, skipCache = false) => {
    setLoading(true);
    setError(null);
    
    // Maximum number of retries
    const MAX_RETRIES = 3;
    let retries = 0;
    
    const attemptFetch = async () => {
      try {
        // Construire l'URL de l'API avec ou sans filtre de couleur
        let apiUrl = '/.netlify/functions/fetch-biotech-articles';
        const params = [];
        
        if (colorFilter) {
          params.push(`color=${colorFilter}`);
        }
        
        if (skipCache) {
          params.push('skipCache=true');
        }
        
        if (params.length > 0) {
          apiUrl += `?${params.join('&')}`;
        }
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Cache-Control': skipCache ? 'no-cache' : 'default',
          },
          // Augmenter le timeout côté client
          signal: AbortSignal.timeout(30000), // 30 secondes de timeout
        });
        
        if (!response.ok) {
          if (response.status === 502) {
            throw new Error(`La fonction Netlify a pris trop de temps à s'exécuter. Limitez le nombre de sources ou augmentez la capacité de la fonction.`);
          } else {
            throw new Error(`Erreur HTTP: ${response.status}`);
          }
        }
        
        const fetchedArticles = await response.json();
        
        if (!Array.isArray(fetchedArticles)) {
          throw new Error('Format de réponse invalide (pas un tableau)');
        }
        
        if (fetchedArticles.length === 0) {
          console.warn('Aucun article retourné par la fonction Netlify.');
          // If we have no articles and have retries left, try again
          if (retries < MAX_RETRIES) {
            retries++;
            console.log(`Nouvelle tentative (${retries}/${MAX_RETRIES})...`);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
            return attemptFetch();
          } else {
            // Set articles to empty array rather than throwing an error
            setArticles([]);
            setError('Aucun article n\'a pu être récupéré après plusieurs tentatives. Vérifiez la connexion aux flux RSS.');
          }
        } else {
          console.log(`Total articles chargés depuis la fonction Netlify: ${fetchedArticles.length}`);
          setArticles(fetchedArticles);
        }
        
      } catch (err) {
        console.error("Erreur lors du chargement des articles depuis la fonction Netlify:", err);
        
        // Retry logic for certain errors, but not for timeout errors
        if (retries < MAX_RETRIES && !err.message.includes('pris trop de temps') && !err.message.includes('aborted')) {
          retries++;
          console.log(`Nouvelle tentative (${retries}/${MAX_RETRIES}) après erreur...`);
          await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
          return attemptFetch();
        }
        
        // Message d'erreur plus explicite pour les timeouts Netlify
        if (err.message.includes('pris trop de temps') || err.name === 'TimeoutError' || err.message.includes('aborted')) {
          setError(`La fonction de récupération des articles a expiré. La version gratuite de Netlify limite l'exécution des fonctions à 10 secondes, ce qui peut être insuffisant pour interroger tous les flux RSS.`);
        } else {
          setError(`Impossible de charger les articles (${err.message}). Vérifiez la console pour plus de détails.`);
        }
      } finally {
        if (retries >= MAX_RETRIES || !error) {
          setLoading(false);
        }
      }
    };
    
    attemptFetch();
  };

  // Charger les articles au montage du composant, sans filtre
  useEffect(() => {
    // Ne charge pas automatiquement tous les articles au démarrage (trop lourd)
    // Au lieu de cela, on affiche un écran de sélection de couleur
    setLoading(false);
  }, []);

  // Gérer le changement de couleur sélectionnée
  const handleColorSelect = (colorKey) => {
    setSelectedColor(colorKey);
    fetchArticles(colorKey, forceRefresh);
  };

  // Sélecteur de couleur
  const renderColorSelector = () => {
    return (
      <div className="mb-8 p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Sélectionnez une catégorie de biotechnologie</h2>
        <p className="mb-4 text-center text-gray-600">Pour éviter les temps de chargement trop longs, veuillez sélectionner une catégorie spécifique à consulter</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(biotechColors).map(([key, data]) => (
            <button
              key={key}
              onClick={() => handleColorSelect(key)}
              className={`p-4 rounded-lg ${data.bgColorLight} border-l-4 ${data.borderColor} transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${data.color}-500`}
            >
              <h3 className={`font-bold ${data.textColor}`}>{data.name}</h3>
              <p className="text-sm">{data.description}</p>
            </button>
          ))}
        </div>
        
        {/* Option pour afficher tous les articles (avec avertissement) */}
        <div className="mt-6 text-center">
          <button
            onClick={() => handleColorSelect(null)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Afficher toutes les catégories (peut être lent)
          </button>
        </div>
      </div>
    );
  };
  
  // Obtenir la légende des couleurs de biotech
  const renderBiotechLegend = () => {
    return (
      <div className="mb-8 p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Les couleurs des biotechnologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(biotechColors).map(([key, data]) => (
            <div key={key} className={`p-4 rounded-lg ${data.bgColorLight} border-l-4 ${data.borderColor}`}>
              <h3 className={`font-bold ${data.textColor}`}>{data.name}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Organiser les articles par couleur de biotechnologie avec limite et diversité de sources
  const organizeArticlesByColor = (articleList) => {
    // Initialize categories including 'unclassified'
    const organizedByColor = Object.keys(biotechColors).reduce((acc, color) => {
        acc[color] = [];
        return acc;
    }, { unclassified: [] });
    
    // Group articles by their pre-assigned biotechColor from the function
    const articlesByColor = articleList.reduce((acc, article) => {
      const color = article.biotechColor && biotechColors[article.biotechColor] ? article.biotechColor : 'unclassified';
      if (!acc[color]) acc[color] = []; // Should already exist, but safety check
      acc[color].push(article);
      return acc;
    }, {});
    
    // Ensure diversity and limit (max 4 per color)
    Object.entries(articlesByColor).forEach(([color, articles]) => {
      if (!organizedByColor[color]) return; // Skip if color isn't in our main categories
      
      // Group by source within the color category
      const articlesBySource = articles.reduce((acc, article) => {
        const sourceKey = article.source || 'Unknown Source';
        if (!acc[sourceKey]) acc[sourceKey] = [];
        acc[sourceKey].push(article);
        return acc;
      }, {});
      
      // Sort articles within each source by date (most recent first)
      // Note: Articles are already sorted by date globally by the Netlify function,
      // but sorting within source ensures the *latest* from each source is picked first if needed.
      Object.values(articlesBySource).forEach(sourceArticles => {
          sourceArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      });

      // Collect articles alternating sources, up to the limit (e.g., 4)
      const sources = Object.keys(articlesBySource);
      let currentSourceIndex = 0;
      let addedCount = 0;
      const MAX_ARTICLES_PER_COLOR_DISPLAY = 4; // Define the display limit
      const addedArticlesSet = new Set(); // Track added articles to prevent duplicates if logic loops

      while (addedCount < MAX_ARTICLES_PER_COLOR_DISPLAY && sources.length > 0) {
          const source = sources[currentSourceIndex % sources.length];
          const articlesForSource = articlesBySource[source];

          if (articlesForSource && articlesForSource.length > 0) {
              const articleToAdd = articlesForSource.shift(); // Get the most recent available from this source
              
              // Check if article already added (safety for complex scenarios)
              const articleKey = `${articleToAdd.link || articleToAdd.title}-${articleToAdd.pubDate}`;
              if (!addedArticlesSet.has(articleKey)) {
                  organizedByColor[color].push(articleToAdd);
                  addedArticlesSet.add(articleKey);
                  addedCount++;
              }

              // If this source is now empty, remove it from rotation
              if (articlesForSource.length === 0) {
                  sources.splice(sources.indexOf(source), 1);
                  // Adjust index if removing the current or an earlier source
                  if (currentSourceIndex >= sources.length) {
                     currentSourceIndex = 0; // Reset index if it goes out of bounds
                  }
              } else {
                 currentSourceIndex++; // Move to next source only if current wasn't removed
              }
          } else {
              // Source might already be empty, remove it and adjust index
              sources.splice(sources.indexOf(source), 1);
               if (currentSourceIndex >= sources.length) {
                 currentSourceIndex = 0; 
               }
          }

          // Prevent infinite loops if all remaining sources are empty
          if (sources.length > 0 && sources.every(s => !articlesBySource[s] || articlesBySource[s].length === 0)) {
              break;
          }
           // Reset index if it went through all available sources
          if (sources.length > 0 && currentSourceIndex >= sources.length) {
              currentSourceIndex = 0;
          }
      }
    });
    
    return organizedByColor;
  };

  // Get articles organized by biotech color with limit
  const articlesByBiotechColor = organizeArticlesByColor(articles);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Veille Scientifique</h1>
      
      {/* Afficher le sélecteur de couleur si aucun article n'a été chargé et pas de chargement en cours */}
      {!loading && articles.length === 0 && !error && renderColorSelector()}
      
      {/* Afficher la légende des couleurs seulement après avoir chargé des articles */}
      {articles.length > 0 && renderBiotechLegend()}
      
      {/* Bouton de retour à la sélection */}
      {articles.length > 0 && (
        <div className="flex justify-center mb-6">
          <button 
            onClick={() => {
              setArticles([]);
              setSelectedColor(null);
              setError(null);
            }}
            className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            ← Retour à la sélection
          </button>
          
          <div className="flex flex-col items-center">
            <button 
              onClick={() => {
                setLoading(true);
                setError(null);
                fetchArticles(selectedColor, forceRefresh);
              }}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Chargement...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Actualiser les articles
                </>
              )}
            </button>
            
            <div className="mt-2 flex items-center">
              <input 
                type="checkbox" 
                id="forceRefresh" 
                checked={forceRefresh} 
                onChange={() => setForceRefresh(!forceRefresh)} 
                className="mr-2"
              />
              <label htmlFor="forceRefresh" className="text-sm text-gray-600">
                Ignorer le cache (plus fraîche mais plus lent)
              </label>
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {loading ? (
        <div className="text-center py-10">
          <p>Chargement des articles depuis les flux RSS...</p> 
        </div>
      ) : (
        <div>
          {/* Display articles grouped by biotech color */}
          {Object.entries(articlesByBiotechColor).map(([colorKey, colorArticles]) => {
            if (colorArticles.length === 0) return null; 
            
            const colorData = biotechColors[colorKey] || {
              name: 'Non classifié',
              description: 'Articles non classifiés ou sans couleur définie',
              color: 'gray',
              bgColor: 'bg-gray-500',
              textColor: 'text-gray-800',
              bgColorLight: 'bg-gray-100',
              borderColor: 'border-gray-500',
            };
            
            return (
              <div key={colorKey} className="mb-10">
                <div className={`p-3 ${colorData.bgColorLight} border-l-4 ${colorData.borderColor} mb-4`}>
                  <h2 className={`text-xl font-bold ${colorData.textColor}`}>
                    Biotechnologie {colorData.name} 
                    <span className="ml-2 text-sm font-normal">({colorArticles.length} article{colorArticles.length > 1 ? 's' : ''})</span>
                  </h2>
                  <p className="text-sm">{colorData.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {colorArticles.map((article, index) => (
                    <div key={`${colorKey}-${index}-${article.link || index}`} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="h-40 overflow-hidden flex-shrink-0 bg-gray-100">
                        <img
                          src={article.imageUrl || 'https://placehold.co/600x400?text=Biotechnologie+' + colorData.name}
                          alt={article.title || 'Titre non disponible'}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            // First try to fix common URL issues
                            const url = e.target.src;
                            if (url.startsWith('http:') && !url.includes('placehold.co')) {
                              // Try to fix mixed content by using HTTPS
                              e.target.src = url.replace('http:', 'https:');
                            } else if (url.startsWith('//')) {
                              // Fix protocol-relative URLs
                              e.target.src = 'https:' + url;
                            } else if (!url.startsWith('http') && !url.startsWith('https://placehold.co')) {
                              // Try to add missing protocol
                              e.target.src = 'https:' + url;
                            } else {
                              // If all attempts fail, use a placeholder with the biotech color
                              e.target.src = `https://placehold.co/600x400?text=${encodeURIComponent('Biotechnologie ' + colorData.name)}`;
                            }
                          }}
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2 flex-shrink-0">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium truncate flex-shrink" title={article.source || 'Source inconnue'}>
                            {article.source || 'Source inconnue'}
                          </span>
                          <span className={`inline-block ${colorData.bgColorLight} ${colorData.textColor} text-xs px-2 py-1 rounded font-medium flex-shrink-0`}>
                            {colorData.name}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-3 flex-grow" title={article.title || ''}>
                          {article.title || 'Titre non disponible'}
                        </h3>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-shrink-0">
                          {article.description || 'Description non disponible'}
                        </p>
                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-200 flex-shrink-0">
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium ${!article.link ? 'opacity-50 cursor-not-allowed' : ''}`}
                            // Prevent click if no link
                            onClick={(e) => !article.link && e.preventDefault()} 
                          >
                            {article.link ? "Lire l'article" : "Lien indisponible"}
                          </a>
                          <span className="text-xs text-gray-500">
                            {article.pubDate ? new Date(article.pubDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Date inconnue'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
           {/* Display message if no articles loaded at all */} 
          {articles.length === 0 && !loading && error && (
             <p className="text-center text-gray-500 mt-10">Aucun article n'a pu être chargé depuis les flux RSS.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ScienceWatchPage; 