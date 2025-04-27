import React, { useState, useEffect, useCallback } from 'react';

function ScienceWatchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSource, setSelectedSource] = useState('all');

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Au lieu d'utiliser l'API News qui nécessite une clé, on utilise un service de proxy RSS vers JSON
      let feedUrl = '';
      
      // Sélection des flux RSS selon la source choisie
      if (selectedSource === 'all' || selectedSource === 'science') {
        // Futura Sciences - Santé
        feedUrl = 'https://www.futura-sciences.com/rss/sante/actualites.xml';
      } else if (selectedSource === 'medical') {
        // Sciences et Avenir - Santé
        feedUrl = 'https://www.sciencesetavenir.fr/rss/sante.xml';
      } else if (selectedSource === 'innovation') {
        // La Recherche
        feedUrl = 'https://www.larecherche.fr/feed/rss.xml';
      }
      
      // Utilisation d'un service gratuit de conversion RSS vers JSON
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
      
      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des articles');
      }
      
      const data = await response.json();
      
      // Vérifier si la réponse contient des articles
      if (data.status === 'ok' && data.items && data.items.length > 0) {
        // Filtrer pour ne garder que les articles liés à la biotechnologie
        const filteredArticles = data.items.filter(item => {
          const keywords = ['biotech', 'biotechnologie', 'génétique', 'crispr', 'génomique', 'biologie'];
          const itemText = `${item.title} ${item.description}`.toLowerCase();
          return keywords.some(keyword => itemText.includes(keyword.toLowerCase()));
        });
        
        // Si aucun article n'est trouvé après le filtrage, montrer des données de démonstration
        if (filteredArticles.length > 0) {
          setArticles(filteredArticles);
        } else {
          throw new Error('Aucun article de biotechnologie trouvé dans ce flux');
        }
      } else {
        throw new Error('Le flux RSS ne contient pas d\'articles');
      }
    } catch (err) {
      console.error('Erreur lors de la récupération des articles:', err);
      setError(err.message || 'Une erreur est survenue');
      
      // Utiliser des données de démonstration en cas d'erreur ou pour le développement
      setArticles(getDemoArticles());
    } finally {
      setLoading(false);
    }
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
        link: 'https://www.futura-sciences.com',
        author: 'Équipe Futura',
        enclosure: {
          link: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/d/8/8d8c23421a_50175939_crispr-cas9-adobe-ttsz.jpg'
        },
        pubDate: '2023-05-15T09:30:00Z',
        content: 'La technologie CRISPR franchit une nouvelle étape avec cette technique révolutionnaire...'
      },
      {
        title: 'Biotechnologie : des organoïdes cérébraux pour étudier les maladies neurodégénératives',
        description: 'Une équipe internationale a réussi à développer des organoïdes cérébraux plus complexes pour mieux modéliser les maladies comme Alzheimer ou Parkinson.',
        link: 'https://www.sciencesetavenir.fr',
        author: 'Rédaction Sciences et Avenir',
        enclosure: {
          link: 'https://www.sciencesetavenir.fr/assets/img/2020/01/10/cover-r4x3w1000-5e18a87cc3109-cerveau-humain.jpg'
        },
        pubDate: '2023-06-02T14:15:00Z',
        content: 'Ces mini-cerveaux cultivés en laboratoire permettent de mieux comprendre les mécanismes des maladies neurologiques...'
      },
      {
        title: 'Biocapteurs : des dispositifs implantables pour surveiller la glycémie en continu',
        description: 'De nouveaux biocapteurs utilisant des enzymes modifiées permettent un suivi plus précis et moins invasif de la glycémie chez les patients diabétiques.',
        link: 'https://www.larecherche.fr',
        enclosure: {
          link: 'https://www.larecherche.fr/sites/default/files/styles/large_16_9/public/2021-02/biocapteur%20chimique.jpg'
        },
        pubDate: '2023-04-25T11:00:00Z',
        content: 'Ces dispositifs marquent une avancée significative dans la prise en charge du diabète...'
      },
      {
        title: 'Thérapie génique : un traitement prometteur pour la drépanocytose en phase finale d\'essai',
        description: 'Un essai clinique de phase 3 montre des résultats encourageants pour une thérapie génique ciblant la drépanocytose, une maladie affectant l\'hémoglobine.',
        link: 'https://www.santemagazine.fr',
        author: 'Équipe éditoriale',
        enclosure: {
          link: 'https://www.santemagazine.fr/uploads/images/thumbs/201911/santemagazine-drepanocytose-gettyimages-1127097866-754034-large.jpg'
        },
        pubDate: '2023-05-30T08:45:00Z',
        content: 'Cette approche pourrait transformer le traitement de cette maladie génétique répandue...'
      },
      {
        title: 'Bioproduction : la France inaugure un nouveau site de production de vaccins à ARNm',
        description: 'Un nouveau site industriel dédié à la production de vaccins à ARN messager ouvre ses portes à Lyon, renforçant la souveraineté sanitaire française.',
        link: 'https://www.usinenouvelle.com',
        enclosure: {
          link: 'https://www.usinenouvelle.com/mediatheque/4/0/0/000720004_image_896x598/usine-vaccin.jpg'
        },
        pubDate: '2023-06-10T15:30:00Z',
        content: 'Cette installation de pointe permet de produire jusqu\'à 300 millions de doses par an...'
      }
    ];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-lab-teal mb-8">Veille Scientifique Biotechnologie</h1>
      
      {/* Filtres */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
              selectedSource === 'all' ? 'bg-lab-teal text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedSource('all')}
          >
            Toutes les sources
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
              selectedSource === 'science' ? 'bg-lab-teal text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedSource('science')}
          >
            Sciences
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
              selectedSource === 'medical' ? 'bg-lab-teal text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedSource('medical')}
          >
            Médical
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 rounded-r-md ${
              selectedSource === 'innovation' ? 'bg-lab-teal text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedSource('innovation')}
          >
            Innovation
          </button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {article.enclosure?.link ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.enclosure.link} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                  <span className="text-xs font-semibold bg-lab-teal bg-opacity-20 text-lab-teal px-2 py-1 rounded-full">
                    {article.author || 'Source scientifique'}
                  </span>
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
          ))}
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