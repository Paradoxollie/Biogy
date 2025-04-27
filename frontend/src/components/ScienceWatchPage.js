import React, { useState, useEffect, useCallback } from 'react';

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
    
    // Si l'article a une catégorie explicite, utilisez-la
    if (article.sourceColorCategory) {
      return article.sourceColorCategory;
    }
    
    // Par défaut, on retourne null si aucune correspondance
    return null;
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Flux RSS diversifiés avec catégories spécifiques
      const feeds = [
        // Sources pour biotechnologie rouge (santé)
        { url: 'https://www.inserm.fr/actualites-et-evenements/actualites/feed/', title: 'INSERM', colorTags: ['red'] },
        { url: 'https://www.santepubliquefrance.fr/rss/actualites.xml', title: 'Santé Publique France', colorTags: ['red'] },
        { url: 'https://presse.inserm.fr/feed/', title: 'Presse INSERM', colorTags: ['red'] },
        
        // Sources pour biotechnologie verte (agriculture)
        { url: 'https://www.inrae.fr/rss.xml', title: 'INRAE', colorTags: ['green'] },
        { url: 'https://agriculture.gouv.fr/rss.xml', title: 'Ministère Agriculture', colorTags: ['green'] },
        
        // Sources pour biotechnologie blanche (industrielle)
        { url: 'https://www.genopole.fr/spip.php?page=backend', title: 'Genopole', colorTags: ['white'] },
        
        // Sources pour biotechnologie jaune (environnement)
        { url: 'https://www.ademe.fr/actualites/feed/', title: 'ADEME', colorTags: ['yellow'] },
        { url: 'https://www.ecologie.gouv.fr/rss.xml', title: 'Ministère Écologie', colorTags: ['yellow'] },
        
        // Sources pour biotechnologie bleue (marine)
        { url: 'https://www.ifremer.fr/fr/actualites/flux', title: 'Ifremer', colorTags: ['blue'] },
        
        // Sources pour biotechnologie noire (éducation)
        { url: 'https://www.enseignementsup-recherche.gouv.fr/fr/rss.xml', title: 'Ministère Recherche', colorTags: ['black'] },
        
        // Sources générales (multi-couleurs)
        { url: 'https://lejournal.cnrs.fr/rss', title: 'CNRS Le Journal', colorTags: ['multi', 'red', 'green', 'white', 'yellow', 'blue'] },
        { url: 'https://www.ird.fr/rss.xml', title: 'IRD', colorTags: ['multi', 'red', 'green', 'yellow', 'blue'] }
      ];
      
      // Tableau pour stocker tous les articles
      const allArticles = [];
      
      // Utiliser des proxys alternatifs
      const proxyOptions = [
        (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        (url) => `https://thingproxy.freeboard.io/fetch/${url}`,
        (url) => `https://cors-anywhere.herokuapp.com/${url}`
      ];
      
      try {
        // Requêtes parallèles avec timeout
        const fetchPromises = feeds.map(async (feed) => {
          // Tester chaque proxy
          for (const proxyFn of proxyOptions) {
            try {
              const proxyUrl = proxyFn(feed.url);
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 secondes timeout
              
              const response = await fetch(proxyUrl, {
                signal: controller.signal,
                headers: {
                  'Accept': 'application/rss+xml, application/xml, text/xml',
                  'X-Requested-With': 'XMLHttpRequest'
                }
              });
              
              clearTimeout(timeoutId);
              
              if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
              }
              
              const data = await response.text();
              const cleanedData = cleanXML(data);
              
              // Création d'un parser pour le XML
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(cleanedData, 'text/xml');
              
              // Vérifier les erreurs de parsing
              const parserError = xmlDoc.querySelector('parsererror');
              if (parserError) {
                throw new Error(`XML parsing error: ${parserError.textContent}`);
              }
              
              // Extraction des items
              const items = xmlDoc.querySelectorAll('item, entry');
              
              if (items.length === 0) {
                throw new Error('No items found in feed');
              }
              
              const articleItems = Array.from(items).map(item => {
                // Extraction contenu
                const content = item.querySelector('content\\:encoded, encoded, content')?.textContent || 
                               item.querySelector('description, summary')?.textContent || '';
                
                // Recherche d'images (code existant)
                let imageUrl = null;
                
                const mediaContent = item.querySelector('media\\:content, media\\:thumbnail, enclosure');
                if (mediaContent && mediaContent.getAttribute('url')) {
                  imageUrl = mediaContent.getAttribute('url');
                }
                
                if (!imageUrl) {
                  const imageRegex = /<img[^>]+src="?([^"\s]+)"?\s*[^>]*>/g;
                  const match = imageRegex.exec(content);
                  if (match) imageUrl = match[1];
                }
                
                if (!imageUrl) {
                  const imageElement = item.querySelector('image, thumbnail');
                  if (imageElement && imageElement.textContent) {
                    imageUrl = imageElement.textContent.trim();
                  }
                }
                
                // Images par défaut selon la catégorie si nécessaire
                if (!imageUrl || !imageUrl.startsWith('http')) {
                  const defaultImages = {
                    red: [
                      'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                    ],
                    green: [
                      'https://images.unsplash.com/photo-1574707100262-7a26b64d3fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                      'https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                    ],
                    blue: [
                      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                    ],
                    white: [
                      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                    ],
                    yellow: [
                      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                      'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
                    ],
                    black: [
                      'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
                      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80'
                    ],
                    multi: [
                      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                    ]
                  };
                  
                  // Choisir une image selon la catégorie de flux
                  const categoryImages = feed.colorTags && feed.colorTags.length > 0 
                    ? defaultImages[feed.colorTags[0]] || defaultImages.multi
                    : defaultImages.multi;
                    
                  imageUrl = categoryImages[Math.floor(Math.random() * categoryImages.length)];
                }
                
                // Extraire description et autres données
                let description = item.querySelector('description, summary')?.textContent || '';
                description = description.replace(/<[^>]*>?/gm, '').trim();
                description = description.length > 150 ? description.substring(0, 150) + '...' : description;
                
                let link = '';
                const linkElement = item.querySelector('link');
                if (linkElement) {
                  link = linkElement.textContent || '';
                  if (!link && linkElement.getAttribute) {
                    link = linkElement.getAttribute('href') || '';
                  }
                }
                
                if (!link) link = '#';
                            
                const pubDateElement = item.querySelector('pubDate, published, updated');
                const pubDate = pubDateElement ? pubDateElement.textContent : new Date().toISOString();
                
                const titleElement = item.querySelector('title');
                const title = titleElement ? titleElement.textContent : 'Sans titre';
                
                const authorElement = item.querySelector('author, creator, dc\\:creator');
                const author = authorElement ? authorElement.textContent : '';
                
                const article = {
                  title,
                  link,
                  pubDate,
                  description,
                  content,
                  imageUrl,
                  source: feed.title,
                  author,
                  sourceColorCategory: feed.colorTags[0],
                  sourceColorTags: feed.colorTags
                };
                
                // Déterminer la couleur biotechnologique
                article.biotechColor = determineBiotechColor(article);
                
                return article;
              });
              
              console.log(`Successfully fetched ${articleItems.length} articles from ${feed.title}`);
              return articleItems;
            } catch (error) {
              console.error(`Error with proxy for ${feed.title}:`, error);
              // Continuer avec le prochain proxy
              continue;
            }
          }
          
          console.error(`All proxies failed for ${feed.title}`);
          return []; // Retourne un tableau vide si tous les proxys ont échoué
        });
        
        // Attendre toutes les requêtes
        const articleArrays = await Promise.all(fetchPromises);
        
        // Fusionner tous les articles
        articleArrays.forEach(articles => {
          allArticles.push(...articles);
        });
        
        // Si nous avons des résultats, mettre à jour les articles
        if (allArticles.length > 0) {
          // Trier par date (plus récent d'abord)
          const sortedArticles = allArticles.sort((a, b) => 
            new Date(b.pubDate) - new Date(a.pubDate)
          );
          
          setArticles(sortedArticles);
          console.log(`Total articles fetched: ${sortedArticles.length}`);
        } else {
          setError("Aucun article n'a pu être récupéré des flux RSS. Veuillez réessayer plus tard.");
        }
      } catch (fetchError) {
        console.error("Error fetching articles:", fetchError);
        setError("Erreur lors de la récupération des articles. Veuillez réessayer plus tard.");
      }
    } catch (error) {
      console.error("Critical error:", error);
      setError("Erreur critique lors du chargement des flux RSS. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };
  
  // Fonction pour nettoyer le XML avant de le parser
  const cleanXML = (xml) => {
    if (!xml) return xml;
    
    // Conversion des entités HTML mal formées
    xml = xml.replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/g, '&amp;');
    
    // Ne garder que le contenu XML
    const xmlStartIdx = xml.indexOf('<?xml');
    if (xmlStartIdx > 0) {
      xml = xml.substring(xmlStartIdx);
    }
    
    // Si on trouve un tag RSS ou FEED, ne garder que la partie qui le contient et ce qui suit
    const rssStartIdx = xml.indexOf('<rss');
    if (rssStartIdx > 0) {
      xml = xml.substring(rssStartIdx);
    }
    
    const feedStartIdx = xml.indexOf('<feed');
    if (feedStartIdx > 0) {
      xml = xml.substring(feedStartIdx);
    }
    
    return xml;
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
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
    const organizedByColor = {
      green: [],
      red: [], 
      white: [],
      yellow: [],
      blue: [],
      black: [],
      multi: [],
      unclassified: []
    };
    
    // Première étape: regrouper par couleur
    const articlesByColor = articleList.reduce((acc, article) => {
      const color = article.biotechColor || 'unclassified';
      if (!acc[color]) acc[color] = [];
      acc[color].push(article);
      return acc;
    }, {});
    
    // Deuxième étape: pour chaque couleur, assurer la diversité des sources
    Object.entries(articlesByColor).forEach(([color, articles]) => {
      if (!organizedByColor[color]) return;
      
      // Regrouper par source
      const articlesBySource = articles.reduce((acc, article) => {
        if (!acc[article.source]) acc[article.source] = [];
        acc[article.source].push(article);
        return acc;
      }, {});
      
      // Collecter les articles en alternant les sources
      const sources = Object.keys(articlesBySource);
      let i = 0;
      let addedCount = 0;
      
      // Continue tant qu'on peut ajouter des articles (on veut 4 par couleur au maximum)
      // et qu'il y a encore des sources à parcourir
      while (addedCount < 4 && sources.length > 0) {
        const sourceIndex = i % sources.length;
        const source = sources[sourceIndex];
        const articlesForSource = articlesBySource[source];
        
        if (articlesForSource.length > 0) {
          // Prendre l'article le plus récent de cette source et l'ajouter
          const article = articlesForSource.shift();
          organizedByColor[color].push(article);
          addedCount++;
          
          // Si cette source n'a plus d'articles, la retirer
          if (articlesForSource.length === 0) {
            sources.splice(sourceIndex, 1);
            // Ajuster l'index pour éviter de sauter une source
            if (i >= sourceIndex) i--;
          }
        }
        
        i++;
        
        // Si on a parcouru toutes les sources et qu'on n'a pas encore 4 articles, on recommence
        if (i >= sources.length) i = 0;
        
        // Si plus aucune source n'a d'articles, on sort
        if (sources.length === 0) break;
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
      
      <div className="mb-6">
        <div className="flex justify-center">
          <button
            onClick={() => {
              setLoading(true);
              fetchArticles();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Rafraîchir
          </button>
        </div>
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
        <div>
          {/* Display articles grouped by biotech color (max 4 per color) */}
          {Object.entries(articlesByBiotechColor).map(([colorKey, colorArticles]) => {
            if (colorArticles.length === 0) return null;
            
            const colorData = biotechColors[colorKey] || {
              name: 'Non classifié',
              description: 'Articles non classifiés',
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
                    <span className="ml-2 text-sm font-normal">({colorArticles.length} articles)</span>
                  </h2>
                  <p className="text-sm">{colorData.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {colorArticles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {article.source}
                          </span>
                          <span className={`inline-block ${colorData.bgColorLight} ${colorData.textColor} text-xs px-2 py-1 rounded`}>
                            {colorData.name}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
                        <p className="text-gray-700 mb-4 line-clamp-3">
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ScienceWatchPage; 