const Parser = require('rss-parser');
const parser = new Parser({
  timeout: 5000, // Augmenter le timeout global
  customFields: {
    item: [
      ['description', 'description'],
      ['content:encoded', 'contentEncoded'],
      ['pubDate', 'pubDate']
    ]
  }
});

// Mots-clés généraux de biotechnologie pour filtrer les articles
const BIOTECH_KEYWORDS = [
  'biotechnologie', 'biotech', 'biologie', 'génétique', 'génome', 
  'ADN', 'ARN', 'CRISPR', 'enzyme', 'protéine', 'bactérie', 
  'microbiologie', 'fermentation', 'biocarburant', 'biomatériau',
  'biomolécule', 'bioréacteur', 'thérapie génique', 'OGM', 'transgénique',
  'biosynthèse', 'bioingénierie', 'biocapteur', 'biocatalyseur', 'biomédical',
  'culture cellulaire', 'clonage', 'séquençage', 'micro-organisme', 'levure',
  'immunologie', 'anticorps', 'bioprocédé', 'biotransformation'
];

// Sources françaises de biotechnologie par catégorie - sources améliorées
const SOURCES_BIOTECH = [
  // Rouge - Santé/Médecine
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red', langue: 'fr' },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red', langue: 'fr' },
  { url: 'https://www.futura-sciences.com/rss/sante/actualites.xml', source: 'Futura Sciences (Santé)', color: 'red', langue: 'fr' },
  
  // Verte - Agronomie
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green', langue: 'fr' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green', langue: 'fr' },
  { url: 'https://www.agro-media.fr/feed/', source: 'Agro Media', color: 'green', langue: 'fr' },
  { url: 'https://www.bayer-agri.fr/feed/', source: 'Bayer Agri', color: 'green', langue: 'fr' },
  
  // Bleue - Marine
  { url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue', langue: 'fr' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/mer-littoral.xml', source: 'Actu-Environnement (Mer)', color: 'blue', langue: 'fr' },
  { url: 'https://wwz.ifremer.fr/layout/set/rss/Actualites-et-Agenda/Toutes-les-actualites', source: 'IFREMER', color: 'blue', langue: 'fr' },
  
  // Jaune - Environnement
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow', langue: 'fr' },
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow', langue: 'fr' },
  { url: 'https://www.ademe.fr/actualites/feed', source: 'ADEME', color: 'yellow', langue: 'fr' },
  
  // Blanche - Industrielle
  { url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white', langue: 'fr' },
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle', color: 'white', langue: 'fr' },
  { url: 'https://www.techniques-ingenieur.fr/actualite/articles/feed/', source: 'Techniques de l\'Ingénieur', color: 'white', langue: 'fr' },
  { url: 'https://www.industrie-mag.com/article/feed/news', source: 'Industrie Mag', color: 'white', langue: 'fr' },
  
  // Multidisciplinaire
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi', langue: 'fr' },
  { url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi', langue: 'fr' }
];

const MAX_ARTICLES_PER_SOURCE = 5;
const FETCH_TIMEOUT = 6000; // Augmenter le timeout

// Fonctions utilitaires
const getDescription = (item) => {
  let desc = item.description || item.contentEncoded || item.content || '';
  desc = desc.replace(/<[^>]*>/g, '').trim();
  // Limiter la longueur
  return desc.length > 500 ? desc.substring(0, 500) + '...' : desc;
};

const getPubDate = (item) => {
  return item.pubDate || item.dcDate || item.isoDate || new Date().toISOString();
};

const getImageUrl = (item) => {
  // Essayer d'extraire de contentEncoded ou description
  const content = item.contentEncoded || item.description || item.content || '';
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  // Essayer enclosure (souvent pour images)
  if (item.enclosure && item.enclosure.url) {
    return item.enclosure.url;
  }
  
  return null;
};

// Nouvelle fonction pour vérifier si un texte contient des mots-clés liés à la biotechnologie
const isBiotechArticle = (item) => {
  const textToSearch = [
    item.title || '',
    item.description || '',
    item.content || '',
    item.contentEncoded || ''
  ].join(' ').toLowerCase();
  
  // Chercher les mots-clés de biotechnologie
  return BIOTECH_KEYWORDS.some(keyword => textToSearch.includes(keyword.toLowerCase()));
};

exports.handler = async (event, context) => {
  try {
    // Récupérer les paramètres de requête
    const params = event.queryStringParameters || {};
    const colorFilter = params.color || null;
    const refresh = params.refresh === 'true';
    const biotechOnly = params.biotechOnly !== 'false'; // Par défaut, filtrer pour biotech uniquement
    
    console.log(`Requête veille biotech. Filtre: ${colorFilter || 'aucun'}, Refresh: ${refresh}, Biotech Only: ${biotechOnly}`);
    
    const allArticles = [];
    
    // Filtrer les sources si une couleur est spécifiée
    const sourcesToFetch = colorFilter 
      ? SOURCES_BIOTECH.filter(source => source.color === colorFilter)
      : SOURCES_BIOTECH;
      
    if (sourcesToFetch.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Aucune source trouvée pour la couleur: ${colorFilter}` })
      };
    }
    
    // Traiter chaque source de façon séquentielle
    for (const source of sourcesToFetch) {
      try {
        console.log(`Récupération des articles de ${source.source} (${source.url})`);
        
        // Définir un timeout pour éviter les blocages
        const fetchPromise = parser.parseURL(source.url);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), FETCH_TIMEOUT)
        );
        
        // Utiliser Promise.race pour implémenter le timeout
        const result = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (result && result.items) {
          let validItems = result.items;
          
          // Filtrer pour les articles de biotechnologie si demandé
          if (biotechOnly) {
            validItems = validItems.filter(isBiotechArticle);
            console.log(`Après filtrage biotech: ${validItems.length}/${result.items.length} articles retenus pour ${source.source}`);
          }
          
          // Limiter le nombre d'articles par source
          validItems = validItems.slice(0, MAX_ARTICLES_PER_SOURCE);
          
          validItems.forEach(item => {
            allArticles.push({
              title: item.title || 'Titre inconnu',
              link: item.link || '',
              pubDate: getPubDate(item),
              description: getDescription(item),
              source: source.source,
              biotechColor: source.color,
              imageUrl: getImageUrl(item),
              langue: source.langue
            });
          });
          
          console.log(`✅ ${validItems.length} articles biotech récupérés de ${source.source}`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors de la récupération depuis ${source.source}: ${error.message}`);
        // Continuer avec la source suivante
      }
    }
    
    // Trier par date (plus récent d'abord)
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    console.log(`Total: ${allArticles.length} articles biotech récupérés pour ${colorFilter || 'toutes les catégories'}`);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': refresh ? 'no-cache' : 'public, max-age=900' // 15 minutes de cache par défaut
      },
      body: JSON.stringify(allArticles),
    };
  } catch (error) {
    console.error('Erreur générale:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur est survenue lors de la récupération des articles' }),
    };
  }
}; 