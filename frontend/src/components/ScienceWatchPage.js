import React, { useState, useEffect, useCallback } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    }
  };

  // Détermine la catégorie de couleur d'un article
  const determineBiotechColor = (article) => {
    const searchText = `${article.title} ${article.description || ''} ${article.content || ''}`.toLowerCase();
    
    // Vérifie pour chaque couleur si l'article contient des mots-clés associés
    for (const [colorKey, colorData] of Object.entries(biotechColors)) {
      for (const keyword of colorData.keywords) {
        if (searchText.includes(keyword.toLowerCase())) {
          return colorKey;
        }
      }
    }
    
    // Par défaut, on retourne null si aucune correspondance
    return null;
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async (sourceFilter = 'all') => {
    setLoading(true);
    setError(null);
    
    try {
      const feeds = {
        biotechnology: [
          'https://www.industrie.com/pharma/rss',
          'https://biofutur.info/feed/'
        ],
        business: [
          'https://www.biotech-finances.com/feed/',
          'https://www.industriepharma.fr/rss'
        ],
        research: [
          'https://www.inrae.fr/actualites.xml',
          'https://www.cnrs.fr/fr/rss.xml',
          'https://www.inserm.fr/feed/'
        ]
      };
      
      // Select feeds based on source filter
      let feedsToFetch = [];
      if (sourceFilter === 'all') {
        Object.values(feeds).forEach(sourceFeed => {
          feedsToFetch = [...feedsToFetch, ...sourceFeed];
        });
      } else if (feeds[sourceFilter]) {
        feedsToFetch = feeds[sourceFilter];
      }
      
      // Using a CORS proxy to avoid cross-origin issues
      const corsProxy = 'https://api.allorigins.win/raw?url=';
      
      const fetchPromises = feedsToFetch.map(async feed => {
        const encodedFeedUrl = encodeURIComponent(feed);
        const response = await fetch(`${corsProxy}${encodedFeedUrl}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${feed}`);
        }
        
        const data = await response.text();
        
        // Create a new DOMParser to parse the XML content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        
        // Get category based on feed URL
        let sourceCategory = '';
        Object.entries(feeds).forEach(([category, urls]) => {
          if (urls.includes(feed)) {
            sourceCategory = category;
          }
        });
        
        // Extract source from URL
        const source = new URL(feed).hostname.replace('www.', '');
        
        // Parse the items from the feed
        const items = xmlDoc.querySelectorAll('item');
        
        return Array.from(items).map(item => {
          // Extract image URL from content if it exists
          const content = item.querySelector('content\\:encoded, encoded')?.textContent || 
                          item.querySelector('description')?.textContent || '';
          
          const imageRegex = /<img[^>]+src="?([^"\s]+)"?\s*[^>]*>/g;
          const match = imageRegex.exec(content);
          const imageUrl = match ? match[1] : null;
          
          // Extract description, removing HTML tags
          let description = item.querySelector('description')?.textContent || '';
          description = description.replace(/<[^>]*>?/gm, '').trim();
          description = description.length > 150 ? description.substring(0, 150) + '...' : description;
          
          return {
            title: item.querySelector('title')?.textContent || 'Sans titre',
            link: item.querySelector('link')?.textContent || '#',
            pubDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
            description,
            imageUrl,
            source,
            sourceCategory
          };
        });
      });
      
      try {
        const results = await Promise.allSettled(fetchPromises);
        
        // Filter for fulfilled promises and flatten the array
        const articlesArray = results
          .filter(result => result.status === 'fulfilled')
          .flatMap(result => result.value);
        
        // Sort by publication date (newest first)
        const sortedArticles = articlesArray.sort((a, b) => 
          new Date(b.pubDate) - new Date(a.pubDate)
        );
        
        if (sortedArticles.length === 0) {
          // If no articles were fetched, fallback to demo articles
          setArticles(getDemoArticles());
          setError("Impossible de récupérer les articles. Affichage des données de démonstration.");
        } else {
          setArticles(sortedArticles);
        }
      } catch (error) {
        console.error("Error processing feeds:", error);
        setArticles(getDemoArticles());
        setError("Erreur lors du traitement des flux RSS. Affichage des données de démonstration.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setArticles(getDemoArticles());
      setError("Erreur de connexion. Affichage des données de démonstration.");
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Données de démonstration pour le développement ou en cas d'erreur avec l'API
  const getDemoArticles = () => {
    return [
      {
        title: "De nouvelles avancées dans la thérapie génique pour les maladies rares",
        link: "https://example.com/article1",
        pubDate: "2023-08-15T10:00:00Z",
        description: "Des chercheurs ont développé une nouvelle approche de thérapie génique qui montre des résultats prometteurs pour le traitement de maladies génétiques rares.",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "biofutur.info",
        sourceCategory: "biotechnology"
      },
      {
        title: "Collaboration entre l'INRAE et une biotech pour développer des biofertilisants",
        link: "https://example.com/article2",
        pubDate: "2023-08-10T14:30:00Z",
        description: "L'INRAE et une entreprise de biotechnologie ont signé un accord de collaboration pour développer une nouvelle génération de biofertilisants.",
        imageUrl: "https://images.unsplash.com/photo-1574707100262-7a26b64d3fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "inrae.fr",
        sourceCategory: "research"
      },
      {
        title: "Levée de fonds record pour une startup française de bioimpression 3D",
        link: "https://example.com/article3",
        pubDate: "2023-08-05T09:15:00Z",
        description: "Une startup spécialisée dans la bioimpression 3D annonce une levée de fonds de 40 millions d'euros pour accélérer le développement de ses technologies.",
        imageUrl: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80",
        source: "biotech-finances.com",
        sourceCategory: "business"
      },
      {
        title: "Nouveau procédé industriel pour la production de biocarburants",
        link: "https://example.com/article4",
        pubDate: "2023-08-01T11:45:00Z",
        description: "Une entreprise a mis au point un procédé industriel innovant permettant de produire des biocarburants à partir de déchets agricoles avec un rendement accru.",
        imageUrl: "https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "industrie.com",
        sourceCategory: "biotechnology"
      },
      {
        title: "Découverte d'une enzyme capable de dégrader efficacement le plastique",
        link: "https://example.com/article5",
        pubDate: "2023-07-28T08:20:00Z",
        description: "Des chercheurs du CNRS ont identifié une enzyme capable de dégrader plusieurs types de plastiques, ouvrant la voie à de nouvelles solutions de recyclage biologique.",
        imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "cnrs.fr",
        sourceCategory: "research"
      }
    ];
  };

  // Obtenir la légende des couleurs de biotech
  const renderBiotechLegend = () => {
    return (
      <div className="mb-8 p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Les couleurs des biotechnologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

  // Rendu d'une carte d'article
  const renderArticleCard = (article, index) => {
    return (
      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {article.imageUrl ? (
          <div className="h-48 overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/600x400?text=Image+non+disponible';
              }}
            />
          </div>
        ) : (
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-wrap gap-1">
              {/* Badge de source */}
              <span className="text-xs font-semibold bg-lab-teal bg-opacity-20 text-lab-teal px-2 py-1 rounded-full">
                {article.source || article.author || 'Source scientifique'}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {formatDate(article.pubDate)}
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h2>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.description || article.content?.substring(0, 150) || 'Aucune description disponible'}
          </p>
          
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-lab-teal text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition-colors duration-300"
          >
            Lire l'article
          </a>
        </div>
      </div>
    );
  };

  // Grouper les articles par catégorie de biotechnologie
  const getArticlesByCategory = () => {
    // Créer un objet avec les différentes catégories de couleur
    const categorizedArticles = {
      green: [],
      red: [],
      white: [],
      yellow: [],
      blue: [],
      black: [],
      unclassified: []
    };
    
    // Répartir les articles dans leurs catégories respectives
    articles.forEach(article => {
      if (article.biotechColor && categorizedArticles[article.biotechColor]) {
        categorizedArticles[article.biotechColor].push(article);
      } else {
        categorizedArticles.unclassified.push(article);
      }
    });
    
    return categorizedArticles;
  };

  // Amélioration du filtrage des articles
  const isBiotechArticle = (article) => {
    const searchText = `${article.title || ''} ${article.description || ''} ${article.content || ''}`.toLowerCase();
    
    // Mots-clés généraux de la biotechnologie
    const biotechGeneralKeywords = [
      'biotech', 'biotechnologie', 'biologique', 'génétique', 'génome', 
      'crispr', 'adn', 'arn', 'cellule', 'biologie', 'enzyme', 
      'protéine', 'thérapie génique', 'biopharma', 'biomédical', 
      'biocarburant', 'biosourcé', 'biomatériau', 'bioremédiation',
      'microorganisme', 'fermentation', 'clonage', 'ogm', 'transgénique',
      'in vitro', 'in vivo', 'microbiologie', 'bactérie', 'levure',
      'biochimie', 'bioplastique', 'métabolisme', 'recombinant',
      'biodégradable', 'biomasse', 'procaryote', 'eucaryote'
    ];
    
    // Vérifier si l'article contient au moins un mot-clé général de biotechnologie
    for (const keyword of biotechGeneralKeywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        return true;
      }
    }
    
    return false;
  };

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.sourceCategory === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Veille Scientifique</h1>
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div>
            <label htmlFor="sourceSelect" className="block mb-2 text-sm font-medium">Source:</label>
            <select
              id="sourceSelect"
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="all">Toutes les sources</option>
              <option value="biotechnology">Biotechnologie</option>
              <option value="business">Business</option>
              <option value="research">Recherche</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="categorySelect" className="block mb-2 text-sm font-medium">Catégorie:</label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="all">Toutes les catégories</option>
              <option value="biotechnology">Biotechnologie</option>
              <option value="business">Business</option>
              <option value="research">Recherche</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={() => {
            setLoading(true);
            fetchArticles(selectedSource);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Rafraîchir
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {loading ? (
        <div className="text-center py-10">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Chargement...</span>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {article.imageUrl && (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x200?text=Image+non+disponible';
                    }}
                  />
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {article.source}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {article.sourceCategory === 'biotechnology' && 'Biotechnologie'}
                      {article.sourceCategory === 'business' && 'Business'}
                      {article.sourceCategory === 'research' && 'Recherche'}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-700 mb-4">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Lire l'article
                    </a>
                    <span className="text-sm text-gray-500">
                      {new Date(article.pubDate).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-xl">Aucun article trouvé</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ScienceWatchPage; 