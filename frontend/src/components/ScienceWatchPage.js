import React, { useState, useEffect } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [forceRefresh, setForceRefresh] = useState(false);
  const [biotechOnly, setBiotechOnly] = useState(true);
  const [articleCount, setArticleCount] = useState({});

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

  // NOUVEAU: Utilisation d'un endpoint unique pour tous les articles
  const fetchArticles = async (colorKey) => {
    setLoading(true);
    setError(null);
    
    try {
      // Construire l'URL avec les paramètres appropriés
      let url = '/.netlify/functions/biotech-veille';
      
      // Ajouter les paramètres à l'URL
      const params = new URLSearchParams();
      if (colorKey) {
        params.append('color', colorKey);
      }
      if (forceRefresh) {
        params.append('refresh', 'true');
      }
      // Ajouter le paramètre de filtrage biotech
      params.append('biotechOnly', biotechOnly.toString());
      // Limiter le nombre d'articles pour réduire le risque de timeout
      params.append('max', '20');
      
      const fullUrl = `${url}${params.toString() ? '?' + params.toString() : ''}`;
      console.log(`Chargement des articles depuis: ${fullUrl}`);
      
      // Ajouter un timeout côté client
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      try {
        const response = await fetch(fullUrl, {
          signal: controller.signal,
          // Préciser les options de cache pour éviter les problèmes côté client
          cache: 'no-cache',
          headers: {
            'pragma': 'no-cache',
            'cache-control': 'no-cache'
          }
        });
        
        // Nettoyer le timeout
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          // En cas d'erreur, afficher le code et message d'erreur
          console.error(`Erreur réseau: ${response.status} ${response.statusText}`);
          
          if (response.status === 502 || response.status === 504) {
            // Si on a une erreur de gateway ou de timeout, essayer directement la fonction de debug
            console.log("Tentative de diagnostic du serveur...");
            try {
              const debugResponse = await fetch('/.netlify/functions/debug-status');
              if (debugResponse.ok) {
                const debugData = await debugResponse.json();
                console.log("Diagnostic:", debugData);
                
                // Continuer avec les données de secours simulées
                setArticles([]);
                throw new Error(`La passerelle Netlify a renvoyé une erreur ${response.status}. Veuillez réessayer plus tard.`);
              }
            } catch (debugError) {
              console.error("Échec du diagnostic:", debugError);
            }
          }
          
          throw new Error(`Erreur réseau: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
          
          // Calculer le nombre d'articles par couleur
          const countByColor = data.articles.reduce((acc, article) => {
            const color = article.biotechColor || 'unclassified';
            acc[color] = (acc[color] || 0) + 1;
            return acc;
          }, {});
          
          setArticleCount(countByColor);
        } else {
          console.error("Format de données incorrect:", data);
          throw new Error("Format de données incorrect");
        }
      } catch (fetchError) {
        // Nettoyer le timeout en cas d'erreur
        clearTimeout(timeoutId);
        
        // Si l'erreur est due à un abort, c'est un timeout client
        if (fetchError.name === 'AbortError') {
          throw new Error("La requête a pris trop de temps. Veuillez réessayer plus tard.");
        }
        
        throw fetchError;
      }
    } catch (err) {
      setError(err.message);
      console.error("Erreur lors du chargement des articles:", err);
    } finally {
      setLoading(false);
    }
  };

  // Précalculer le nombre d'articles par couleur au montage initial
  useEffect(() => {
    // Obtenir un aperçu du nombre d'articles disponibles par couleur
    const preloadArticleCounts = async () => {
      try {
        const response = await fetch('/.netlify/functions/biotech-veille?counts=true');
        if (response.ok) {
          const data = await response.json();
          if (data.counts) {
            setArticleCount(data.counts);
          }
        }
      } catch (error) {
        console.error("Erreur lors du préchargement des compteurs:", error);
      }
    };
    
    preloadArticleCounts();
  }, []);

  // Charger les articles au montage du composant, sans filtre
  useEffect(() => {
    // Ne charge pas automatiquement tous les articles au démarrage (trop lourd)
    // Au lieu de cela, on affiche un écran de sélection de couleur
    setLoading(false);
  }, []);

  // Gérer le changement de couleur sélectionnée
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setArticles([]);
    fetchArticles(color);
  };

  // Sélecteur de couleur
  const renderColorSelector = () => {
    return (
      <div className="mb-8 p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Sélectionnez une catégorie de biotechnologie</h2>
        <p className="mb-4 text-center text-gray-600">Choisissez une catégorie spécifique ou affichez toutes les actualités</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(biotechColors)
            .filter(([key]) => key !== 'black') // Exclure la biotechnologie noire qui n'est pas pertinente
            .map(([key, data]) => (
              <button
                key={key}
                onClick={() => handleColorSelect(key)}
                className={`p-4 rounded-lg ${data.bgColorLight} border-l-4 ${data.borderColor} transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${data.color}-500 relative`}
              >
                <h3 className={`font-bold ${data.textColor}`}>{data.name}</h3>
                <p className="text-sm">{data.description}</p>
                
                {/* Badge du nombre d'articles si disponible */}
                {articleCount[key] && (
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {articleCount[key]}
                  </span>
                )}
              </button>
            ))}
        </div>
        
        {/* Option pour afficher tous les articles */}
        <div className="mt-6 text-center">
          <button
            onClick={() => handleColorSelect(null)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Afficher toutes les catégories
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(biotechColors)
            .filter(([key]) => key !== 'black') // Exclure la biotechnologie noire
            .map(([key, data]) => (
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

  // Get articles organized by biotech color with limit
  const articlesByBiotechColor = organizeArticlesByColor(articles);

  // Ajouter cette fonction pour gérer le rafraîchissement des articles:
  const handleRefresh = () => {
    setArticles([]);
    fetchArticles(selectedColor);
  };

  // Ajouter cette fonction pour gérer le changement de l'option de rafraîchissement forcé:
  const handleForceRefreshToggle = () => {
    setForceRefresh(!forceRefresh);
  };

  // Ajouter cette fonction pour gérer le changement du filtrage biotechnologie
  const handleBiotechOnlyToggle = () => {
    setBiotechOnly(!biotechOnly);
    // Si des articles sont déjà chargés, rafraîchir avec le nouveau paramètre
    if (articles.length > 0) {
      setArticles([]);
      setTimeout(() => fetchArticles(selectedColor), 100);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Veille Scientifique Biotechnologie</h1>
      
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
              onClick={handleRefresh}
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
                  Rafraîchir
                </>
              )}
            </button>
            
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="forceRefresh" 
                  checked={forceRefresh} 
                  onChange={handleForceRefreshToggle} 
                  className="mr-2"
                />
                <label htmlFor="forceRefresh" className="text-sm text-gray-600">
                  Ignorer le cache (plus frais mais plus lent)
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="biotechOnly" 
                  checked={biotechOnly} 
                  onChange={handleBiotechOnlyToggle} 
                  className="mr-2"
                />
                <label htmlFor="biotechOnly" className="text-sm text-gray-600">
                  Filtrer strictement les articles de biotechnologie
                </label>
              </div>
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
          <div className="flex justify-center mb-4">
            <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p>Chargement des articles depuis les flux RSS...</p> 
          <p className="text-sm text-gray-500 mt-2">Cette opération peut prendre quelques instants...</p>
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
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colorArticles.map((article, index) => (
                    <div key={`${colorKey}-${index}-${article.link || index}`} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="h-40 overflow-hidden flex-shrink-0 bg-gray-100">
                        <img
                          src={article.imageUrl || `https://placehold.co/600x400?text=Biotechnologie+${colorData.name}`}
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
          {articles.length === 0 && !loading && !error && (
             <p className="text-center text-gray-500 mt-10">Veuillez sélectionner une catégorie de biotechnologie ci-dessus.</p>
          )}
          
          {articles.length === 0 && !loading && error && (
             <p className="text-center text-gray-500 mt-10">Aucun article n'a pu être chargé depuis les flux RSS.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ScienceWatchPage; 