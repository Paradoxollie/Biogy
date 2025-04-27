import React, { useState, useEffect, useCallback } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSource, setSelectedSource] = useState('all');

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

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Au lieu d'utiliser l'API News qui nécessite une clé, on utilise un service de proxy RSS vers JSON
      let feedUrls = [];
      
      // Mise à jour des flux RSS avec les sources françaises
      if (selectedSource === 'all') {
        // Tous les flux
        feedUrls = [
          // Biotechnologies vertes
          'https://www.inrae.fr/actualites/biotechnologies-vertes',
          'https://www.techniques-ingenieur.fr/glossaire/biotechnologie-verte',
          
          // Biotechnologies rouges
          'https://www.inserm.fr/flux-rss/',
          'https://www.techniques-ingenieur.fr/actualite/articles/bioethique-et-sante-revue-express-des-biotechnologies-phares-88241/',
          
          // Biotechnologies blanches
          'https://www.techniques-ingenieur.fr/glossaire/biotechnologie-blanche',
          'https://www.bgene.fr/blog/',
          
          // Biotechnologies jaunes
          'https://www.brgm.fr/fr/flux-rss',
          'https://www.techniques-ingenieur.fr/glossaire/biotechnologie-jaune',
          
          // Biotechnologies bleues
          'https://nouvelle-caledonie.ifremer.fr/Biodiversite-et-ressources',
          'https://www.techniques-ingenieur.fr/base-documentaire/procedes-chimie-bio-agro-th2/ressources-marines-et-biotechnologies-bleues-42834210/',
          
          // Biotechnologies noires (éducation)
          'https://eduscol.education.fr/flux-rss',
          'https://pedagogie.ac-reims.fr/index.php/lycee/sciences-et-technologies/biotec-bioch-lycee'
        ];
      } else if (selectedSource === 'green') {
        // Biotechnologies vertes
        feedUrls = [
          'https://www.inrae.fr/actualites/biotechnologies-vertes',
          'https://www.techniques-ingenieur.fr/glossaire/biotechnologie-verte'
        ];
      } else if (selectedSource === 'red') {
        // Biotechnologies rouges
        feedUrls = [
          'https://www.inserm.fr/flux-rss/',
          'https://www.techniques-ingenieur.fr/actualite/articles/bioethique-et-sante-revue-express-des-biotechnologies-phares-88241/'
        ];
      } else if (selectedSource === 'white') {
        // Biotechnologies blanches
        feedUrls = [
          'https://www.techniques-ingenieur.fr/glossaire/biotechnologie-blanche',
          'https://www.bgene.fr/blog/'
        ];
      } else if (selectedSource === 'yellow') {
        // Biotechnologies jaunes
        feedUrls = [
          'https://www.brgm.fr/fr/flux-rss',
          'https://www.techniques-ingenieur.fr/glossaire/biotechnologie-jaune'
        ];
      } else if (selectedSource === 'blue') {
        // Biotechnologies bleues
        feedUrls = [
          'https://nouvelle-caledonie.ifremer.fr/Biodiversite-et-ressources',
          'https://www.techniques-ingenieur.fr/base-documentaire/procedes-chimie-bio-agro-th2/ressources-marines-et-biotechnologies-bleues-42834210/'
        ];
      } else if (selectedSource === 'education') {
        // Biotechnologies noires (éducation)
        feedUrls = [
          'https://eduscol.education.fr/flux-rss',
          'https://pedagogie.ac-reims.fr/index.php/lycee/sciences-et-technologies/biotec-bioch-lycee'
        ];
      }
      
      // Parcourir tous les flux sélectionnés et collecter les articles
      let allArticles = [];
      
      // Pour chaque flux, récupérer les articles
      for (const feedUrl of feedUrls) {
        try {
          // Utilisation d'un service gratuit de conversion RSS vers JSON
          const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
          
          if (!response.ok) {
            console.warn(`Problème avec le flux ${feedUrl}: ${response.status}`);
            continue; // Passer au flux suivant en cas d'erreur
          }
          
          const data = await response.json();
          
          // Vérifier si la réponse contient des articles
          if (data.status === 'ok' && data.items && data.items.length > 0) {
            // Traiter les articles
            const processedArticles = data.items
              .filter(item => {
                // Pré-filtrer les articles pour ne garder que ceux liés à la biotechnologie
                const combinedText = `${item.title} ${item.description || ''} ${item.content || ''}`.toLowerCase();
                return isBiotechArticle({title: item.title, description: item.description, content: item.content});
              })
              .map(item => {
                // Extraire l'image correctement selon plusieurs sources possibles
                let imageUrl = null;
                
                // Vérifier différentes positions où l'image pourrait se trouver
                if (item.enclosure && item.enclosure.link) {
                  imageUrl = item.enclosure.link;
                } else if (item.thumbnail) {
                  imageUrl = item.thumbnail;
                } else if (item.image) {
                  imageUrl = item.image;
                } else {
                  // Essayer d'extraire l'image du contenu HTML
                  const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
                  if (imgMatch && imgMatch[1]) {
                    imageUrl = imgMatch[1];
                  }
                }
                
                const processedItem = {
                  ...item,
                  // S'assurer que le lien est l'URL complète de l'article
                  link: item.link || item.guid || '',
                  // Stocker l'URL de l'image extraite
                  imageUrl: imageUrl,
                  // Ajouter la source pour le filtrage
                  source: data.feed?.title || feedUrl
                };
                
                // Déterminer la catégorie de couleur de l'article
                processedItem.biotechColor = determineBiotechColor(processedItem);
                
                return processedItem;
              });
            
            // Ajouter les articles de ce flux à l'ensemble
            allArticles = [...allArticles, ...processedArticles];
          }
        } catch (feedErr) {
          console.error(`Erreur lors de la récupération du flux ${feedUrl}:`, feedErr);
          // Continuer avec les autres flux en cas d'erreur
        }
      }
      
      // Si aucun article n'a été récupéré, utiliser les données de démonstration
      if (allArticles.length === 0) {
        throw new Error('Aucun article n\'a pu être récupéré');
      }
      
      // Trier les articles par date (du plus récent au plus ancien)
      allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      
      // Limiter le nombre d'articles à afficher (pour éviter une surcharge)
      setArticles(allArticles.slice(0, 40));
      
    } catch (err) {
      console.error('Erreur lors de la récupération des articles:', err);
      setError(err.message || 'Une erreur est survenue');
      
      // Utiliser des données de démonstration en cas d'erreur ou pour le développement
      const demoArticles = getDemoArticles();
      // Ajouter les catégories de couleur aux articles de démonstration
      demoArticles.forEach(article => {
        article.biotechColor = determineBiotechColor(article);
      });
      setArticles(demoArticles);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSource]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Données de démonstration pour le développement ou en cas d'erreur avec l'API
  const getDemoArticles = () => {
    return [
      {
        title: 'CRISPR : une nouvelle technique permet d\'éditer plusieurs gènes simultanément',
        description: 'Des chercheurs ont développé une variante de CRISPR permettant d\'éditer plusieurs gènes à la fois, ouvrant de nouvelles possibilités pour le traitement des maladies génétiques complexes.',
        link: 'https://www.futura-sciences.com/sante/actualites/genetique-crispr-nouvelle-technique-permet-editer-plusieurs-genes-simultanement-12345/',
        author: 'Équipe Futura',
        imageUrl: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/d/8/8d8c23421a_50175939_crispr-cas9-adobe-ttsz.jpg',
        pubDate: '2023-05-15T09:30:00Z',
        content: 'La technologie CRISPR franchit une nouvelle étape avec cette technique révolutionnaire...',
        source: 'Futura Sciences'
      },
      {
        title: 'Biotechnologie : des organoïdes cérébraux pour étudier les maladies neurodégénératives',
        description: 'Une équipe internationale a réussi à développer des organoïdes cérébraux plus complexes pour mieux modéliser les maladies comme Alzheimer ou Parkinson.',
        link: 'https://www.sciencesetavenir.fr/sante/cerveau-et-psy/biotechnologie-des-organoides-cerebraux-pour-etudier-les-maladies-67890',
        author: 'Rédaction Sciences et Avenir',
        imageUrl: 'https://www.sciencesetavenir.fr/assets/img/2020/01/10/cover-r4x3w1000-5e18a87cc3109-cerveau-humain.jpg',
        pubDate: '2023-06-02T14:15:00Z',
        content: 'Ces mini-cerveaux cultivés en laboratoire permettent de mieux comprendre les mécanismes des maladies neurologiques...',
        source: 'Sciences et Avenir'
      },
      {
        title: 'Biocapteurs : des dispositifs implantables pour surveiller la glycémie en continu',
        description: 'De nouveaux biocapteurs utilisant des enzymes modifiées permettent un suivi plus précis et moins invasif de la glycémie chez les patients diabétiques.',
        link: 'https://www.larecherche.fr/biotechnologie/biocapteurs-dispositifs-implantables-surveiller-glycemie-54321',
        author: 'La Recherche',
        imageUrl: 'https://www.larecherche.fr/sites/default/files/styles/large_16_9/public/2021-02/biocapteur%20chimique.jpg',
        pubDate: '2023-04-25T11:00:00Z',
        content: 'Ces dispositifs marquent une avancée significative dans la prise en charge du diabète...',
        source: 'La Recherche'
      },
      {
        title: 'Thérapie génique : un traitement prometteur pour la drépanocytose en phase finale d\'essai',
        description: 'Un essai clinique de phase 3 montre des résultats encourageants pour une thérapie génique ciblant la drépanocytose, une maladie affectant l\'hémoglobine.',
        link: 'https://www.santemagazine.fr/actualites/therapie-genique-traitement-drepanocytose-essai-98765',
        author: 'Équipe éditoriale',
        imageUrl: 'https://www.santemagazine.fr/uploads/images/thumbs/201911/santemagazine-drepanocytose-gettyimages-1127097866-754034-large.jpg',
        pubDate: '2023-05-30T08:45:00Z',
        content: 'Cette approche pourrait transformer le traitement de cette maladie génétique répandue...',
        source: 'Santé Magazine'
      },
      {
        title: 'Bioproduction : la France inaugure un nouveau site de production de vaccins à ARNm',
        description: 'Un nouveau site industriel dédié à la production de vaccins à ARN messager ouvre ses portes à Lyon, renforçant la souveraineté sanitaire française.',
        link: 'https://www.usinenouvelle.com/article/bioproduction-france-inaugure-site-vaccins-arnm-13579',
        author: 'Usine Nouvelle',
        imageUrl: 'https://www.usinenouvelle.com/mediatheque/4/0/0/000720004_image_896x598/usine-vaccin.jpg',
        pubDate: '2023-06-10T15:30:00Z',
        content: 'Cette installation de pointe permet de produire jusqu\'à 300 millions de doses par an...',
        source: 'Usine Nouvelle'
      },
      {
        title: 'Des chercheurs développent une nouvelle méthode pour cultiver des algues à haute valeur ajoutée',
        description: 'Une technique innovante permet de multiplier par cinq la production de microalgues riches en oméga-3, ouvrant des perspectives pour l\'alimentation et la cosmétique.',
        link: 'https://www.example.com/algues-biotechnologie-bleue',
        author: 'Ifremer',
        imageUrl: 'https://via.placeholder.com/600x400?text=Microalgues',
        pubDate: '2023-06-05T10:20:00Z',
        content: 'Cette avancée dans la culture des microalgues en milieu contrôlé pourrait révolutionner l\'aquaculture et la production de compléments alimentaires...',
        source: 'Institut Français de Recherche pour l\'Exploitation de la Mer'
      },
      {
        title: 'Une enzyme issue de bactéries du sol décompose les plastiques en temps record',
        description: 'Des microbiologistes ont identifié et optimisé une enzyme capable de dégrader les plastiques PET en seulement 24 heures, une avancée majeure pour le traitement des déchets.',
        link: 'https://www.example.com/enzyme-degradation-plastique',
        author: 'Revue Nature',
        imageUrl: 'https://via.placeholder.com/600x400?text=Dépollution+Enzymatique',
        pubDate: '2023-05-28T14:10:00Z',
        content: 'Cette découverte pourrait transformer notre approche du recyclage et de la gestion des déchets plastiques qui polluent l\'environnement...',
        source: 'Nature Biotechnology'
      },
      {
        title: 'Nouvelle variété de blé résistant à la sécheresse développée par génie génétique',
        description: 'Des chercheurs ont créé une variété de blé génétiquement modifiée qui nécessite 40% moins d\'eau tout en maintenant des rendements équivalents aux variétés conventionnelles.',
        link: 'https://www.example.com/ble-resistant-secheresse',
        author: 'Agronomie Moderne',
        imageUrl: 'https://via.placeholder.com/600x400?text=Blé+Résistant',
        pubDate: '2023-06-07T09:15:00Z',
        content: 'Cette avancée pourrait révolutionner l\'agriculture dans les régions touchées par le changement climatique...',
        source: 'Journal of Agricultural Biotechnology'
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
    const searchText = `${article.title} ${article.description || ''} ${article.content || ''}`.toLowerCase();
    
    // Mots-clés généraux de la biotechnologie
    const biotechGeneralKeywords = [
      'biotech', 'biotechnologie', 'biologique', 'génétique', 'génome', 
      'crispr', 'adn', 'arn', 'cellule', 'biologie', 'enzyme', 
      'protéine', 'thérapie génique', 'biopharma', 'biomédical', 
      'biocarburant', 'biosourcé', 'biomatériau', 'bioremédiation'
    ];
    
    // Vérifier si l'article contient au moins un mot-clé général de biotechnologie
    let isBiotech = false;
    for (const keyword of biotechGeneralKeywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        isBiotech = true;
        break;
      }
    }
    
    return isBiotech;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-lab-teal mb-8">Veille Scientifique Biotechnologie</h1>
      
      {/* Légende des couleurs des biotechnologies */}
      {renderBiotechLegend()}
      
      {/* Filtres par source */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Filtrer par catégorie</h3>
        <div className="flex flex-wrap justify-center mb-4">
          <div className="inline-flex rounded-md shadow-sm flex-wrap justify-center" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
                selectedSource === 'all' ? 'bg-lab-teal text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('all')}
            >
              Toutes les catégories
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                selectedSource === 'green' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('green')}
            >
              Verte
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                selectedSource === 'red' ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('red')}
            >
              Rouge
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                selectedSource === 'white' ? 'bg-gray-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('white')}
            >
              Blanche
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                selectedSource === 'yellow' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('yellow')}
            >
              Jaune
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                selectedSource === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('blue')}
            >
              Bleue
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 rounded-r-md ${
                selectedSource === 'education' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedSource('education')}
            >
              Éducation
            </button>
          </div>
        </div>
      </div>
      
      {/* Affichage des erreurs */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
          <p className="mt-2 text-sm">Affichage de données de démonstration</p>
        </div>
      )}
      
      {/* Indicateur de chargement */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-lab-teal"></div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Affichage des articles par catégorie */}
          {Object.entries(getArticlesByCategory()).map(([category, categoryArticles]) => {
            // Ne pas afficher les catégories vides
            if (categoryArticles.length === 0) return null;
            
            const colorData = category !== 'unclassified' 
              ? biotechColors[category] 
              : { name: 'Non classé', description: 'Articles ne correspondant pas aux catégories définies', bgColorLight: 'bg-gray-50', borderColor: 'border-gray-300' };
            
            return (
              <div key={category} className={`p-6 rounded-lg ${colorData.bgColorLight} border-l-4 ${colorData.borderColor}`}>
                <h2 className="text-2xl font-bold mb-6">
                  Biotechnologie {colorData.name}
                  <span className="block text-sm font-normal mt-1 text-gray-600">{colorData.description}</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryArticles.slice(0, 6).map((article, index) => renderArticleCard(article, `${category}-${index}`))}
                </div>
                
                {categoryArticles.length > 6 && (
                  <div className="mt-4 text-center">
                    <button
                      className="inline-block bg-white text-lab-teal font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-300 border border-lab-teal"
                    >
                      Voir plus d'articles ({categoryArticles.length - 6} supplémentaires)
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      
      {/* Note d'information */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>Pour rester informé des dernières avancées en biotechnologie</p>
        <p className="mt-1">La veille scientifique est actualisée quotidiennement</p>
      </div>
    </div>
  );
}

export default ScienceWatchPage; 