import React, { useState, useEffect, useCallback } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState('all');

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
  }, [selectedColor]);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Flux RSS fiables uniquement - j'ai retiré ceux qui causent des erreurs XML
      const feeds = {
        multi: [
          { url: 'https://lejournal.cnrs.fr/rss', title: 'CNRS Le Journal', colorTags: ['green', 'red', 'white', 'yellow', 'blue'] },
          { url: 'https://www.ird.fr/rss.xml', title: 'IRD', colorTags: ['red', 'green', 'yellow', 'blue'] }
        ],
        red: [
          { url: 'https://presse.inserm.fr/feed/', title: 'INSERM', colorTags: ['red'] },
          { url: 'https://www.santepubliquefrance.fr/rss/actualites.xml', title: 'Santé Publique France', colorTags: ['red'] }
        ]
      };
      
      // Déterminer quels flux fetcher (tout)
      const allFeeds = Object.values(feeds).flat();
      
      // Using multiple CORS proxies to improve reliability
      const corsProxies = [
        (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`
      ];
      
      const results = [];
      
      for (const feed of allFeeds) {
        try {
          let response = null;
          let data = null;
          let proxyUsed = '';
          
          // Try each proxy until one works
          for (const proxyFn of corsProxies) {
            try {
              const proxyUrl = proxyFn(feed.url);
              proxyUsed = proxyUrl;
              
              response = await fetch(proxyUrl, {
                headers: {
                  'Accept': 'application/rss+xml, application/xml, text/xml'
                }
              });
              
              if (response.ok) {
                data = await response.text();
                break; // We found a working proxy, exit the loop
              }
            } catch (proxyError) {
              console.warn(`Proxy failed for ${feed.url}:`, proxyError);
              // Continue to next proxy
            }
          }
          
          // If all proxies failed
          if (!data) {
            console.warn(`All proxies failed for ${feed.url}`);
            continue;
          }
          
          // Prétraitement pour nettoyer des données XML potentiellement malformées
          data = cleanXML(data);
          
          // Create a new DOMParser to parse the XML content
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          
          // Check if parsing error occurred
          const parserError = xmlDoc.querySelector('parsererror');
          if (parserError) {
            console.warn(`XML parsing error for ${feed.url}:`, parserError.textContent);
            continue;
          }
          
          // Déterminer la source principale (titre)
          const source = feed.title;
          
          // Déterminer les couleurs de biotechnologie associées
          const sourceColorTags = feed.colorTags || [];
          // On utilisera la première couleur comme couleur principale
          const sourceColorCategory = sourceColorTags.length > 0 ? sourceColorTags[0] : null;
          
          // Parse the items from the feed - support both RSS and Atom formats
          const items = xmlDoc.querySelectorAll('item, entry');
          
          if (items.length === 0) {
            console.warn(`No items found in feed ${feed.url}`);
            continue;
          }
          
          const articleItems = Array.from(items).map(item => {
            // Extract image URL from content if it exists
            const content = item.querySelector('content\\:encoded, encoded, content')?.textContent || 
                           item.querySelector('description, summary')?.textContent || '';
            
            const imageRegex = /<img[^>]+src="?([^"\s]+)"?\s*[^>]*>/g;
            const match = imageRegex.exec(content);
            const imageUrl = match ? match[1] : null;
            
            // Extract description, removing HTML tags
            let description = item.querySelector('description, summary')?.textContent || '';
            description = description.replace(/<[^>]*>?/gm, '').trim();
            description = description.length > 150 ? description.substring(0, 150) + '...' : description;
            
            // Handle different formats for links and publication dates
            let link = '';
            const linkElement = item.querySelector('link');
            if (linkElement) {
              // RSS: link est un élément avec du texte
              link = linkElement.textContent || '';
              // Atom: link est un élément avec un attribut href
              if (!link && linkElement.getAttribute) {
                link = linkElement.getAttribute('href') || '';
              }
            }
            
            if (!link) link = '#';
                        
            const pubDateElement = item.querySelector('pubDate, published, updated');
            const pubDate = pubDateElement ? pubDateElement.textContent : new Date().toISOString();
            
            // Get title with fallback
            const titleElement = item.querySelector('title');
            const title = titleElement ? titleElement.textContent : 'Sans titre';
            
            // Extraire l'auteur si disponible
            const authorElement = item.querySelector('author, creator, dc\\:creator');
            const author = authorElement ? authorElement.textContent : '';
            
            const article = {
              title,
              link,
              pubDate,
              description,
              content,
              imageUrl,
              source,
              author,
              sourceColorCategory,
              sourceColorTags
            };
            
            // Determine biotechnology color for the article
            article.biotechColor = determineBiotechColor(article);
            
            return article;
          });
          
          results.push(...articleItems);
          console.log(`Successfully fetched ${articleItems.length} articles from ${feed.title}`);
          
        } catch (error) {
          console.error(`Error processing feed ${feed.url}:`, error);
          continue;
        }
      }
      
      if (results.length === 0) {
        console.warn('No articles could be fetched from any source');
        const demoArticles = getDemoArticles();
        setArticles(demoArticles);
        setError("Impossible de récupérer les articles. Affichage des données de démonstration.");
      } else {
        // Sort by publication date (newest first)
        const sortedArticles = results.sort((a, b) => 
          new Date(b.pubDate) - new Date(a.pubDate)
        );
        
        setArticles(sortedArticles);
        console.log(`Total articles fetched: ${sortedArticles.length}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      const demoArticles = getDemoArticles();
      setArticles(demoArticles);
      setError("Erreur de connexion. Affichage des données de démonstration.");
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

  // Function to get demo articles with proper biotechnology color categorization
  const getDemoArticles = () => {
    const articles = [
      {
        title: "De nouvelles avancées dans la thérapie génique pour les maladies rares",
        link: "https://example.com/article1",
        pubDate: "2023-08-15T10:00:00Z",
        description: "Des chercheurs ont développé une nouvelle approche de thérapie génique qui montre des résultats prometteurs pour le traitement de maladies génétiques rares.",
        content: "Des chercheurs ont développé une nouvelle approche de thérapie génique qui montre des résultats prometteurs pour le traitement de maladies génétiques rares.",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "Institut Pasteur",
        sourceColorCategory: "red",
        sourceColorTags: ["red"]
      },
      {
        title: "Collaboration entre l'INRAE et une biotech pour développer des biofertilisants",
        link: "https://example.com/article2",
        pubDate: "2023-08-10T14:30:00Z",
        description: "L'INRAE et une entreprise de biotechnologie ont signé un accord de collaboration pour développer une nouvelle génération de biofertilisants.",
        content: "L'INRAE et une entreprise de biotechnologie ont signé un accord de collaboration pour développer une nouvelle génération de biofertilisants à partir de ressources naturelles.",
        imageUrl: "https://images.unsplash.com/photo-1574707100262-7a26b64d3fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "INRAE",
        sourceColorCategory: "green",
        sourceColorTags: ["green", "yellow", "white"]
      },
      {
        title: "Levée de fonds record pour une startup française de bioimpression 3D",
        link: "https://example.com/article3",
        pubDate: "2023-08-05T09:15:00Z",
        description: "Une startup spécialisée dans la bioimpression 3D annonce une levée de fonds de 40 millions d'euros pour accélérer le développement de ses technologies.",
        content: "Une startup spécialisée dans la bioimpression 3D annonce une levée de fonds de 40 millions d'euros pour accélérer le développement de ses technologies médicales innovantes.",
        imageUrl: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80",
        source: "Genopole",
        sourceColorCategory: "white",
        sourceColorTags: ["white", "red"]
      },
      {
        title: "Nouveau procédé industriel pour la production de biocarburants",
        link: "https://example.com/article4",
        pubDate: "2023-08-01T11:45:00Z",
        description: "Une entreprise a mis au point un procédé industriel innovant permettant de produire des biocarburants à partir de déchets agricoles avec un rendement accru.",
        content: "Une entreprise a mis au point un procédé industriel innovant permettant de produire des biocarburants à partir de déchets agricoles avec un rendement accru et un impact environnemental réduit.",
        imageUrl: "https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "ADEME",
        sourceColorCategory: "yellow",
        sourceColorTags: ["yellow", "green"]
      },
      {
        title: "Découverte d'une enzyme capable de dégrader efficacement le plastique",
        link: "https://example.com/article5",
        pubDate: "2023-07-28T08:20:00Z",
        description: "Des chercheurs du CNRS ont identifié une enzyme capable de dégrader plusieurs types de plastiques, ouvrant la voie à de nouvelles solutions de recyclage biologique.",
        content: "Des chercheurs du CNRS ont identifié une enzyme capable de dégrader plusieurs types de plastiques, ouvrant la voie à de nouvelles solutions de recyclage biologique pour réduire la pollution environnementale.",
        imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "CNRS Le Journal",
        sourceColorCategory: "multi",
        sourceColorTags: ["green", "yellow", "white"]
      },
      {
        title: "Nouvelles méthodes d'aquaculture durable développées par l'Ifremer",
        link: "https://example.com/article6",
        pubDate: "2023-07-23T10:20:00Z",
        description: "L'Ifremer présente de nouvelles approches pour l'aquaculture durable, réduisant l'impact environnemental tout en améliorant la santé des poissons.",
        content: "L'Institut français de recherche pour l'exploitation de la mer (Ifremer) a dévoilé les résultats d'une étude de cinq ans sur des méthodes innovantes d'aquaculture à faible impact environnemental. Ces techniques utilisent des systèmes en circuit fermé et des approches biologiques pour le contrôle des pathogènes.",
        imageUrl: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        source: "Ifremer",
        sourceColorCategory: "blue",
        sourceColorTags: ["blue"]
      },
      {
        title: "Lancement d'un nouveau Master en biotechnologies marines à Brest",
        link: "https://example.com/article7",
        pubDate: "2023-07-20T09:15:00Z",
        description: "L'Université de Bretagne Occidentale annonce l'ouverture d'un nouveau programme de Master spécialisé dans les biotechnologies marines et leurs applications.",
        content: "Ce programme interdisciplinaire formera les étudiants aux dernières avancées en matière de biotechnologie bleue, incluant la valorisation des ressources marines, les bioprocédés marins et la cosmétique bleue. Un partenariat avec plusieurs entreprises du secteur garantira des stages et des débouchés professionnels.",
        imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        source: "Ministère de l'Enseignement Supérieur et de la Recherche",
        sourceColorCategory: "black",
        sourceColorTags: ["black"]
      }
    ];
    
    // Apply biotechnology color to each demo article
    return articles.map(article => {
      // Si l'article n'a pas déjà une couleur assignée, la déterminer
      if (!article.biotechColor) {
        article.biotechColor = determineBiotechColor(article);
      }
      return article;
    });
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

  // Filter articles based on selected color category
  const getFilteredArticlesByBiotechColor = () => {
    // Si aucune couleur n'est sélectionnée, renvoyer tous les articles
    if (selectedColor === 'all') {
      return organizeArticlesByColor(articles);
    }
    
    // Filtrer les articles par couleur sélectionnée
    const colorFiltered = articles.filter(article => {
      // Vérifier la couleur principale de l'article
      if (article.biotechColor === selectedColor) {
        return true;
      }
      
      // Vérifier les tags de couleur source 
      if (article.sourceColorTags && article.sourceColorTags.includes(selectedColor)) {
        return true;
      }
      
      return false;
    });
    
    // Pour le débogage
    console.log(`Filtered articles for color ${selectedColor}:`, colorFiltered.length);
    
    return organizeArticlesByColor(colorFiltered);
  };
  
  // Organiser les articles par couleur de biotechnologie
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
    
    articleList.forEach(article => {
      const color = article.biotechColor || 'unclassified';
      if (organizedByColor.hasOwnProperty(color)) {
        organizedByColor[color].push(article);
      } else {
        organizedByColor.unclassified.push(article);
      }
    });
    
    return organizedByColor;
  };

  // Get articles organized by biotech color
  const articlesByBiotechColor = getFilteredArticlesByBiotechColor();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Veille Scientifique</h1>
      
      {renderBiotechLegend()}
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <div className="w-full sm:w-1/2">
            <label htmlFor="colorSelect" className="block mb-2 text-sm font-medium">Filtrer par couleur biotechnologique:</label>
            <select
              id="colorSelect"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="all">Toutes les couleurs</option>
              <option value="green">Biotechnologie Verte (Agro-alimentaire)</option>
              <option value="red">Biotechnologie Rouge (Santé)</option>
              <option value="white">Biotechnologie Blanche (Industrielle)</option>
              <option value="yellow">Biotechnologie Jaune (Environnement)</option>
              <option value="blue">Biotechnologie Bleue (Marine)</option>
              <option value="black">Biotechnologie Noire (Éducation)</option>
              <option value="multi">Multi-couleurs (Général)</option>
            </select>
          </div>
        </div>
        
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
          {/* Display articles grouped by biotech color */}
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
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colorArticles.map((article, index) => (
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
                          <span className={`inline-block ${colorData.bgColorLight} ${colorData.textColor} text-xs px-2 py-1 rounded`}>
                            {colorData.name}
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