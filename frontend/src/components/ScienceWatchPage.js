import React, { useState, useEffect } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    // Fetch articles from the Netlify function
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/.netlify/functions/fetch-biotech-articles');
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const fetchedArticles = await response.json();
        
        // Optional: Add further client-side processing/validation if needed
        
        setArticles(fetchedArticles); 
        console.log(`Total articles chargés depuis la fonction Netlify: ${fetchedArticles.length}`);

      } catch (err) {
        console.error("Erreur lors du chargement des articles depuis la fonction Netlify:", err);
        setError(`Impossible de charger les articles (${err.message}). Vérifiez la console pour plus de détails.`);
      } finally { 
        setLoading(false);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array ensures this runs only once on mount

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
      
      {renderBiotechLegend()}
      
      {/* Optional: Add a manual refresh button if desired */}
      {/* <button onClick={fetchArticles} disabled={loading}>Refresh</button> */}

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
                      <div className="h-40 overflow-hidden flex-shrink-0">
                        <img
                          src={article.imageUrl || 'https://via.placeholder.com/300x200?text=Image+Non+Disponible'} // Note: imageUrl isn't typically in RSS, might need logic to find one
                          alt={article.title || 'Titre non disponible'}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Erreur'; 
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
             <p className="text-center text-gray-500 mt-10">Aucun article n'a pu être chargé depuis les flux RSS.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ScienceWatchPage; 