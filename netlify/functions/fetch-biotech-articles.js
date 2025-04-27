const Parser = require('rss-parser');
const parser = new Parser({
  customFields: {
    item: [
      ['description', 'description'],
      ['content:encoded', 'contentEncoded'], // Handle potential content field
      ['pubDate', 'pubDate'],
      ['dc:date', 'dcDate'], // Handle alternate date field (Dublin Core)
      ['isoDate', 'isoDate'], // Often added by rss-parser
    ],
  }
});

// --- Configuration ---
const FEEDS = [
  // Général / Multi-couleurs (Bases importantes)
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi' },
  { url: 'https://www.cea.fr/rss/actualites.php?format=xml', source: 'CEA', color: 'multi' }, // Tentative HTTPS
  { url: 'https://www.ird.fr/rss.xml', source: 'IRD', color: 'multi' },
  { url: 'https://www.sorbonne-universite.fr/actualites/recherche/feed', source: 'Sorbonne Université (Recherche)', color: 'multi' }, // Nouvel ajout
  { url: 'https://www.universite-paris-saclay.fr/actualites/feed', source: 'Université Paris-Saclay (Actus)', color: 'multi' }, // Nouvel ajout

  // Verte (Agro-alimentaire, production végétale, biomatériaux, énergie)
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green' }, // URL Corrigée
  { url: 'https://www.cirad.fr/actualites/toutes-les-actualites/feed', source: 'CIRAD', color: 'green' }, // URL Corrigée (/feed)
  { url: 'https://www.anses.fr/fr/flux/actualites/rss.xml', source: 'ANSES', color: 'green' }, // URL Corrigée
  { url: 'https://www.terresinovia.fr/rss', source: 'Terres Inovia', color: 'green' }, // Nouvel ajout

  // Rouge (Santé, pharmaceutique, médecine)
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red' },
  { url: 'https://www.pasteur.fr/fr/rss/press/press-releases.xml', source: 'Institut Pasteur (Presse)', color: 'red' }, // URL Corrigée (spécifique)
  { url: 'https://ansm.sante.fr/feed', source: 'ANSM', color: 'red' }, // URL Corrigée (générale)
  { url: 'https://curie.fr/rss.xml', source: 'Institut Curie', color: 'red' }, // URL Corrigée
  { url: 'https://www.santepubliquefrance.fr/rss/actualites.xml', source: 'Santé Publique France', color: 'red' },
  { url: 'https://france-biotech.fr/feed/', source: 'France Biotech', color: 'red' }, // Nouvel ajout

  // Blanche (Applications industrielles, procédés biologiques)
  { url: 'https://www.genopole.fr/feed/', source: 'Genopole', color: 'white' }, // Fonctionnait mais parfois vide
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle (Général)', color: 'white' }, // Alternative Stable
  { url: 'http://www.biotechinfo.fr/feed/', source: 'BioTech Info', color: 'white' }, // Nouvel ajout (HTTP)
  // Rappel: CNRS, CEA, INRAE pertinents aussi

  // Jaune (Protection de l'environnement, traitement des pollutions)
  // INRAE déjà listé (Vert)
  { url: 'https://presse.ademe.fr/feed/', source: 'ADEME', color: 'yellow' }, // Fonctionnait mais parfois vide
  // IRD déjà listé (Multi)
  // ANSES déjà listé (Vert)
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow' }, // Nouvel ajout
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/dechets.xml', source: 'Actu-Environnement (Déchets)', color: 'yellow' }, // Nouvel ajout

  // Bleue (Biodiversité marine, aquaculture, cosmétique marine)
  { url: 'https://www.ifremer.fr/fr/actualites-ifremer/-/journal_content/56/10192/RSS', source: 'Ifremer', color: 'blue' }, // URL Corrigée (spécifique)
  { url: 'https://www.pole-mer-bretagne-atlantique.com/fr/actualites/feed/', source: 'Pôle Mer Bretagne Atlantique', color: 'blue' }, // Nouvel ajout
  { url: 'https://www.polemermediterranee.com/feed/', source: 'Pôle Mer Méditerranée', color: 'blue' }, // Nouvel ajout
  // Rappel: CNRS, IRD pertinents aussi

  // Noir (Éducation)
  { url: 'https://www.enseignementsup-recherche.gouv.fr/fr/rss/actualites.xml', source: 'Ministère Ens Sup Recherche', color: 'black' }, // URL Corrigée
  { url: 'https://www.onisep.fr/feed/actualites-nationales', source: 'Onisep (Nationales)', color: 'black' }, // URL Corrigée (spécifique)
  { url: 'https://eduscol.education.fr/sti/feed', source: 'Eduscol (STI Général)', color: 'black' }, // Alternative Stable
];

// Max articles per feed to avoid overwhelming results
const MAX_ARTICLES_PER_FEED = 10; 

// Helper to extract description (handles variations)
const getDescription = (item) => {
  let desc = item.description || item.contentEncoded || item.content || '';
  // Basic HTML tag removal (more robust parsing might be needed if complex HTML exists)
  desc = desc.replace(/<[^>]*>/g, '').trim();
  return desc;
};

// Helper to extract publication date (handles variations)
const getPubDate = (item) => {
  return item.pubDate || item.dcDate || item.isoDate || new Date().toISOString(); // Fallback to now if no date
};


// --- Netlify Function Handler ---
exports.handler = async (event, context) => {
  console.log(`Fetching ${FEEDS.length} feeds...`);
  const allArticles = [];
  const fetchPromises = [];

  for (const feedInfo of FEEDS) {
    console.log(`- Fetching ${feedInfo.source} (${feedInfo.url})`);
    const fetchPromise = parser.parseURL(feedInfo.url)
      .then(feed => {
        console.log(`  - Parsed ${feed.items?.length || 0} items from ${feedInfo.source}`);
        if (feed.items) {
          // Limit the number of articles per feed
          const limitedItems = feed.items.slice(0, MAX_ARTICLES_PER_FEED); 
          
          limitedItems.forEach(item => {
            allArticles.push({
              title: item.title || 'Titre inconnu',
              link: item.link || '',
              pubDate: getPubDate(item),
              description: getDescription(item),
              source: feedInfo.source,
              biotechColor: feedInfo.color,
              // Add other fields if available and needed, e.g., author: item.author
            });
          });
        }
      })
      .catch(error => {
        console.error(`  - Error fetching or parsing feed ${feedInfo.source} (${feedInfo.url}):`, error.message);
        // Optionally push an error indicator article? For now, just log.
      });
    fetchPromises.push(fetchPromise);
  }

  // Wait for all feeds to be processed (fetched and parsed)
  await Promise.allSettled(fetchPromises); // Use allSettled to continue even if some feeds fail

  console.log(`Total articles collected: ${allArticles.length}`);

  // Sort articles by date (most recent first) before returning
  allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin (adjust if needed for security)
    },
    body: JSON.stringify(allArticles),
  };
}; 