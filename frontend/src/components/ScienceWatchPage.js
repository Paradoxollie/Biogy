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
      // Flux RSS plus complets et diversifiés
      const feeds = [
        { url: 'https://lejournal.cnrs.fr/rss', title: 'CNRS Le Journal', colorTags: ['green', 'red', 'white', 'yellow', 'blue'] },
        { url: 'https://www.ird.fr/rss.xml', title: 'IRD', colorTags: ['red', 'green', 'yellow', 'blue'] },
        { url: 'https://www.santepubliquefrance.fr/rss/actualites.xml', title: 'Santé Publique France', colorTags: ['red', 'yellow'] },
        { url: 'https://www.enseignementsup-recherche.gouv.fr/fr/rss.xml', title: 'Ministère de la Recherche', colorTags: ['black', 'multi'] }
      ];
      
      // Appeler immédiatement les données de démo pour éviter l'écran vide
      const demoArticles = getDemoArticles();
      setArticles(demoArticles);
      
      try {
        // Essayer de faire les requêtes en parallèle avec un timeout
        const results = [];
        const fetchPromises = feeds.map(async (feed) => {
          try {
            // Utiliser jsonp.afeld.me comme proxy plus fiable
            const proxyUrl = `https://cors-anywhere.herokuapp.com/${feed.url}`;
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 secondes timeout
            
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
              
              // Recherche d'images
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
              
              // Images par défaut selon la catégorie
              if (!imageUrl || !imageUrl.startsWith('http')) {
                const defaultImages = {
                  red: [
                    'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1583912268183-46a1d8891fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
                  ],
                  green: [
                    'https://images.unsplash.com/photo-1574707100262-7a26b64d3fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
                  ],
                  blue: [
                    'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                  ],
                  white: [
                    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                    'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                  ],
                  yellow: [
                    'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
                    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
                  ],
                  black: [
                    'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
                    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80',
                    'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
                  ],
                  multi: [
                    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                    'https://images.unsplash.com/photo-1629781070811-2539fa2f525b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
                  ]
                };
                
                // Choisir une image aléatoire dans la catégorie
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
            console.error(`Error fetching from ${feed.title}:`, error);
            return []; // Retourne un tableau vide en cas d'erreur
          }
        });
        
        // Attendons que toutes les requêtes soient terminées ou en timeout
        const articleArrays = await Promise.all(fetchPromises);
        
        // Fusionnons tous les articles
        articleArrays.forEach(articles => {
          results.push(...articles);
        });
        
        // Si nous avons des résultats, mettre à jour les articles
        if (results.length > 0) {
          // Trier par date (plus récent d'abord)
          const sortedArticles = results.sort((a, b) => 
            new Date(b.pubDate) - new Date(a.pubDate)
          );
          
          // Fusionner avec les articles de démo pour assurer une diversité
          const finalArticles = [...sortedArticles, ...demoArticles];
          
          setArticles(finalArticles);
          console.log(`Total articles fetched: ${finalArticles.length}`);
        }
      } catch (fetchError) {
        console.error("Error fetching articles:", fetchError);
        // Les articles de démo sont déjà affichés, pas besoin de setError
      }
    } catch (error) {
      console.error("Critical error:", error);
      const demoArticles = getDemoArticles();
      setArticles(demoArticles);
      setError("Erreur critique. Affichage des données de démonstration.");
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
        sourceColorTags: ["red"],
        biotechColor: "red"
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
        sourceColorTags: ["green", "yellow", "white"],
        biotechColor: "green"
      },
      {
        title: "Levée de fonds record pour une startup française de bioimpression 3D",
        link: "https://example.com/article3",
        pubDate: "2023-08-05T09:15:00Z",
        description: "Une startup spécialisée dans la bioimpression 3D annonce une levée de fonds de 40 millions d'euros pour accélérer le développement de ses technologies.",
        content: "Une startup spécialisée dans la bioimpression 3D annonce une levée de fonds de 40 millions d'euros pour accélérer le développement de ses technologies médicales innovantes.",
        imageUrl: "https://images.unsplash.com/photo-1581093450021-a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        source: "Genopole",
        sourceColorCategory: "white",
        sourceColorTags: ["white", "red"],
        biotechColor: "white"
      },
      {
        title: "Nouveau procédé industriel pour la production de biocarburants",
        link: "https://example.com/article4",
        pubDate: "2023-08-01T11:45:00Z",
        description: "Une entreprise a mis au point un procédé industriel innovant permettant de produire des biocarburants à partir de déchets agricoles avec un rendement accru.",
        content: "Une entreprise a mis au point un procédé industriel innovant permettant de produire des biocarburants à partir de déchets agricoles avec un rendement accru et un impact environnemental réduit.",
        imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        source: "ADEME",
        sourceColorCategory: "yellow",
        sourceColorTags: ["yellow", "green"],
        biotechColor: "yellow"
      },
      {
        title: "Découverte d'une enzyme capable de dégrader efficacement le plastique",
        link: "https://example.com/article5",
        pubDate: "2023-07-28T08:20:00Z",
        description: "Des chercheurs du CNRS ont identifié une enzyme capable de dégrader plusieurs types de plastiques, ouvrant la voie à de nouvelles solutions de recyclage biologique.",
        content: "Des chercheurs du CNRS ont identifié une enzyme capable de dégrader plusieurs types de plastiques, ouvrant la voie à de nouvelles solutions de recyclage biologique pour réduire la pollution environnementale.",
        imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        source: "CNRS Le Journal",
        sourceColorCategory: "yellow",
        sourceColorTags: ["green", "yellow", "white"],
        biotechColor: "yellow"
      },
      {
        title: "Nouvelles méthodes d'aquaculture durable développées par l'Ifremer",
        link: "https://example.com/article6",
        pubDate: "2023-07-23T10:20:00Z",
        description: "L'Ifremer présente de nouvelles approches pour l'aquaculture durable, réduisant l'impact environnemental tout en améliorant la santé des poissons.",
        content: "L'Institut français de recherche pour l'exploitation de la mer (Ifremer) a dévoilé les résultats d'une étude de cinq ans sur des méthodes innovantes d'aquaculture à faible impact environnemental. Ces techniques utilisent des systèmes en circuit fermé et des approches biologiques pour le contrôle des pathogènes.",
        imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        source: "Ifremer",
        sourceColorCategory: "blue",
        sourceColorTags: ["blue"],
        biotechColor: "blue"
      },
      {
        title: "Lancement d'un nouveau Master en biotechnologies marines à Brest",
        link: "https://example.com/article7",
        pubDate: "2023-07-20T09:15:00Z",
        description: "L'Université de Bretagne Occidentale annonce l'ouverture d'un nouveau programme de Master spécialisé dans les biotechnologies marines et leurs applications.",
        content: "Ce programme interdisciplinaire formera les étudiants aux dernières avancées en matière de biotechnologie bleue, incluant la valorisation des ressources marines, les bioprocédés marins et la cosmétique bleue. Un partenariat avec plusieurs entreprises du secteur garantira des stages et des débouchés professionnels.",
        imageUrl: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        source: "Ministère de l'Enseignement Supérieur et de la Recherche",
        sourceColorCategory: "black",
        sourceColorTags: ["black"],
        biotechColor: "black"
      },
      // Ajout d'articles supplémentaires pour plus de diversité
      {
        title: "Biomatériaux innovants pour la reconstruction osseuse",
        link: "https://example.com/biomateriaux",
        pubDate: "2023-07-18T08:15:00Z",
        description: "Une équipe internationale de chercheurs a développé un nouveau biomatériau mimant la structure osseuse naturelle, offrant de meilleures perspectives pour la chirurgie réparatrice.",
        content: "Ce matériau combine des polymères biodégradables et des composés minéraux similaires à l'os humain, créant une structure poreuse qui favorise la croissance cellulaire et la vascularisation.",
        imageUrl: "https://images.unsplash.com/photo-1583912268183-46a1d8891fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        source: "Institut Pasteur",
        sourceColorCategory: "red",
        sourceColorTags: ["red", "white"],
        biotechColor: "red"
      },
      {
        title: "Production industrielle d'enzymes par fermentation: efficacité énergétique améliorée",
        link: "https://example.com/enzymes-industrielles",
        pubDate: "2023-07-14T10:30:00Z",
        description: "Une biotech française révolutionne la production d'enzymes industrielles avec un procédé de fermentation à faible consommation d'énergie.",
        content: "Le nouveau bioréacteur conçu par l'entreprise permet de réduire de 40% la consommation énergétique tout en augmentant le rendement de production des enzymes utilisées dans l'industrie alimentaire et textile.",
        imageUrl: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        source: "Genopole",
        sourceColorCategory: "white",
        sourceColorTags: ["white"],
        biotechColor: "white"
      },
      {
        title: "Microalgues génétiquement modifiées pour la capture de CO2",
        link: "https://example.com/microalgues-co2",
        pubDate: "2023-07-10T09:45:00Z",
        description: "Des chercheurs ont développé une souche de microalgues capable de capturer 5 fois plus de CO2 que les souches naturelles, offrant une solution innovante pour lutter contre le changement climatique.",
        content: "Ces microalgues modifiées peuvent être cultivées dans des installations industrielles pour capturer directement les émissions de CO2 et les transformer en biomasse valorisable pour la production de biocarburants.",
        imageUrl: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        source: "INRAE",
        sourceColorCategory: "green",
        sourceColorTags: ["green", "yellow"],
        biotechColor: "green"
      },
      {
        title: "Découverte d'une bactérie marine aux propriétés antioxydantes exceptionnelles",
        link: "https://example.com/bacterie-marine",
        pubDate: "2023-07-08T14:20:00Z",
        description: "Une espèce bactérienne découverte dans les profondeurs marines produit des molécules aux propriétés antioxydantes jamais observées jusqu'à présent.",
        content: "Ces composés pourraient révolutionner l'industrie cosmétique et pharmaceutique grâce à leur stabilité exceptionnelle et leur efficacité à neutraliser les radicaux libres responsables du vieillissement cellulaire.",
        imageUrl: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        source: "Ifremer",
        sourceColorCategory: "blue",
        sourceColorTags: ["blue", "red"],
        biotechColor: "blue"
      }
    ];
    
    return articles;
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
      
      // Continue tant qu'on n'a pas atteint 4 articles et qu'il y a encore des sources à parcourir
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