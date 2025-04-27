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
  // Général / Multi-couleurs
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi' }, // Primarily multi
  { url: 'http://www.cea.fr/rss/actualites.php?format=xml', source: 'CEA', color: 'multi' }, // Mix of Red, Green, White -> Multi
  { url: 'https://www.ird.fr/rss.xml', source: 'IRD', color: 'multi' }, // Mix of Red, Green, Yellow, Blue -> Multi
  // Verte
  { url: 'https://www.inrae.fr/actualites/rss', source: 'INRAE', color: 'green' }, // Primarily Green
  { url: 'https://www.cirad.fr/actualites/toutes-les-actualites/rss', source: 'CIRAD', color: 'green' }, // Primarily Green
  { url: 'https://www.anses.fr/fr/rss/actualites.xml', source: 'ANSES', color: 'green' }, // Mix -> Assign Green first
  { url: 'https://www.usinenouvelle.com/flux/rss/agroalimentaire', source: 'Usine Nouvelle (Agro)', color: 'green' }, // Primarily Green
  // Rouge
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red' },
  { url: 'https://www.pasteur.fr/fr/rss/actualites/actualites-scientifiques.xml', source: 'Institut Pasteur', color: 'red' },
  { url: 'https://ansm.sante.fr/actualites/feed', source: 'ANSM', color: 'red' },
  { url: 'https://curie.fr/actualites.rss.xml', source: 'Institut Curie', color: 'red' },
  { url: 'https://www.santepubliquefrance.fr/rss/actualites.xml', source: 'Santé Publique France', color: 'red' },
  // Blanche
  { url: 'https://www.genopole.fr/feed/', source: 'Genopole', color: 'white' }, // Primarily White
  { url: 'https://www.usinenouvelle.com/flux/rss/chimie-et-materiaux', source: 'Usine Nouvelle (Chimie)', color: 'white' }, // Primarily White
  // Note: TWB has no feed - skip
  // Jaune
  // INRAE already included in Green
  { url: 'https://presse.ademe.fr/feed/', source: 'ADEME', color: 'yellow' },
  // IRD already included in Multi
  // ANSES already included in Green
  // Bleue
  { url: 'https://www.ifremer.fr/fr/actualites/rss', source: 'Ifremer', color: 'blue' },
  // Note: Station Biologique Roscoff has no feed - skip
  // Note: CORDIS requires custom search - skip for now
  // Noir
  { url: 'https://www.enseignementsup-recherche.gouv.fr/fr/rss.xml', source: 'Ministère Enseignement Sup Recherche', color: 'black' },
  { url: 'https://www.onisep.fr/rss/feed/actualites', source: 'Onisep', color: 'black' },
  { url: 'https://eduscol.education.fr/sti/taxonomy/term/15316/all/feed', source: 'Eduscol (Biotech)', color: 'black' },
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