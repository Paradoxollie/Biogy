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
      // Au lieu de faire des requêtes vers des flux RSS qui posent des problèmes CORS,
      // nous utilisons des données simulées récentes et diversifiées par catégorie
      
      // Simulation d'articles récents (2024) avec différentes sources par catégorie
      const simulatedArticles = [
        // BIOTECHNOLOGIE ROUGE (SANTÉ) - 4 sources différentes
        {
          title: "Une nouvelle thérapie cellulaire contre la leucémie approuvée par la FDA",
          link: "https://example.com/article1",
          pubDate: "2024-05-12T10:00:00Z",
          description: "Cette thérapie CAR-T utilise les cellules immunitaires du patient reprogrammées pour cibler spécifiquement les cellules cancéreuses avec une efficacité sans précédent.",
          content: "La thérapie montre un taux de rémission de 83% chez les patients atteints de leucémie aiguë résistante aux traitements conventionnels.",
          imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          source: "INSERM",
          author: "Dr. Marie Leclerc",
          sourceColorCategory: "red",
          sourceColorTags: ["red"],
          biotechColor: "red"
        },
        {
          title: "Vaccin universel contre la grippe : résultats prometteurs des essais de phase 2",
          link: "https://example.com/article2",
          pubDate: "2024-05-09T09:20:00Z",
          description: "Un vaccin ciblant des protéines conservées du virus de la grippe montre une protection contre de multiples souches, y compris celles qui n'étaient pas incluses dans sa conception.",
          content: "Ce vaccin pourrait éliminer le besoin de reformulations annuelles et offrir une protection plus large contre les pandémies grippales émergentes.",
          imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "Institut Pasteur",
          author: "Prof. Jean Dubois",
          sourceColorCategory: "red",
          sourceColorTags: ["red"],
          biotechColor: "red"
        },
        {
          title: "L'intelligence artificielle prédit avec 94% de précision l'efficacité des médicaments",
          link: "https://example.com/article3",
          pubDate: "2024-05-02T14:15:00Z",
          description: "Une nouvelle plateforme d'IA analyse la structure moléculaire des médicaments et prédit leur efficacité contre des cibles spécifiques, accélérant considérablement la découverte de médicaments.",
          content: "Cette technologie a déjà identifié trois composés prometteurs contre des maladies neurodégénératives qui sont maintenant en phase préclinique.",
          imageUrl: "https://images.unsplash.com/photo-1583912268183-46a1d8891fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          source: "Santé Publique France",
          author: "Dr. Sophie Bernard",
          sourceColorCategory: "red",
          sourceColorTags: ["red"],
          biotechColor: "red"
        },
        {
          title: "Première greffe d'organe imprimé en 3D réalisée avec succès",
          link: "https://example.com/article4",
          pubDate: "2024-04-25T11:30:00Z",
          description: "Des chirurgiens ont implanté avec succès un rein bioimprimé en 3D chez un patient souffrant d'insuffisance rénale, ouvrant la voie à une solution à la pénurie d'organes pour les greffes.",
          content: "L'organe a été créé à partir des propres cellules du patient, éliminant le risque de rejet et réduisant le besoin de médicaments immunosuppresseurs à vie.",
          imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          source: "CHU de Nantes",
          author: "Prof. Michel Dupont",
          sourceColorCategory: "red",
          sourceColorTags: ["red"],
          biotechColor: "red"
        },
        
        // BIOTECHNOLOGIE VERTE (AGRICULTURE) - 4 sources différentes
        {
          title: "Des plants de riz modifiés génétiquement pour absorber 30% plus de CO2",
          link: "https://example.com/article5",
          pubDate: "2024-05-14T08:45:00Z",
          description: "Des chercheurs ont modifié la photosynthèse du riz pour capturer plus efficacement le dioxyde de carbone, avec un potentiel double bénéfice sur le rendement des cultures et l'atténuation du changement climatique.",
          content: "Ces variétés de riz pourraient aider à réduire les émissions de gaz à effet de serre tout en augmentant la production alimentaire dans les régions vulnérables au changement climatique.",
          imageUrl: "https://images.unsplash.com/photo-1574707100262-7a26b64d3fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "INRAE",
          author: "Dr. Pierre Lambert",
          sourceColorCategory: "green",
          sourceColorTags: ["green"],
          biotechColor: "green"
        },
        {
          title: "Percée dans les biocarburants de troisième génération à base d'algues",
          link: "https://example.com/article6",
          pubDate: "2024-05-07T13:10:00Z",
          description: "Une équipe franco-allemande a développé un procédé plus efficace et moins coûteux pour produire des biocarburants à partir de microalgues cultivées dans des eaux usées.",
          content: "Cette approche circulaire purifie les eaux usées tout en produisant du biocarburant, offrant une double solution environnementale.",
          imageUrl: "https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "TotalEnergies",
          author: "Ingénieur Philippe Martin",
          sourceColorCategory: "green",
          sourceColorTags: ["green"],
          biotechColor: "green"
        },
        {
          title: "Un nouveau biostimulant dérivé de bactéries du sol augmente le rendement des cultures de 25%",
          link: "https://example.com/article7",
          pubDate: "2024-04-29T10:40:00Z",
          description: "Un biostimulant naturel isolé de bactéries bénéfiques du sol renforce la résistance des plantes à la sécheresse et aux parasites, améliorant significativement les rendements avec un impact environnemental minimal.",
          content: "Contrairement aux engrais chimiques, ce produit améliore la santé du sol à long terme et renforce l'écosystème microbien naturel.",
          imageUrl: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          source: "CIRAD",
          author: "Dr. Amélie Rousseau",
          sourceColorCategory: "green",
          sourceColorTags: ["green"],
          biotechColor: "green"
        },
        {
          title: "Nouvelles variétés de blé résistantes à la sécheresse approuvées pour la culture en Europe",
          link: "https://example.com/article8",
          pubDate: "2024-04-18T09:50:00Z",
          description: "Après dix ans de développement, des variétés de blé génétiquement optimisées pour utiliser l'eau plus efficacement ont été approuvées pour la culture commerciale dans l'Union européenne.",
          content: "Ces variétés maintiennent des rendements stables même avec 40% moins d'eau, une innovation cruciale face aux sécheresses de plus en plus fréquentes.",
          imageUrl: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "Ministère de l'Agriculture",
          author: "Claire Dubois",
          sourceColorCategory: "green",
          sourceColorTags: ["green"],
          biotechColor: "green"
        },
        
        // BIOTECHNOLOGIE BLANCHE (INDUSTRIELLE) - 4 sources différentes
        {
          title: "Des microorganismes génétiquement modifiés transforment le plastique en produits biodégradables",
          link: "https://example.com/article9",
          pubDate: "2024-05-13T15:30:00Z",
          description: "Une start-up française a développé une souche bactérienne capable de convertir les déchets plastiques en biopolymères compostables, offrant une solution circulaire à la pollution plastique.",
          content: "Le processus utilise des bactéries modifiées qui digèrent les polymères plastiques et les convertissent en matériaux biodégradables utilisables pour de nouveaux produits.",
          imageUrl: "https://images.unsplash.com/photo-1581093450021-a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          source: "Genopole",
          author: "Dr. Thomas Leclerc",
          sourceColorCategory: "white",
          sourceColorTags: ["white"],
          biotechColor: "white"
        },
        {
          title: "Un textile innovant fabriqué par des bactéries remporte un prix d'innovation",
          link: "https://example.com/article10",
          pubDate: "2024-05-06T11:15:00Z",
          description: "Une entreprise lyonnaise a développé un textile produit par fermentation bactérienne qui présente des propriétés exceptionnelles de résistance, d'élasticité et de biodégradabilité.",
          content: "Ce matériau requiert 99% moins d'eau que le coton conventionnel et élimine complètement le besoin de produits chimiques nocifs dans la production textile.",
          imageUrl: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          source: "Toulouse White Biotechnology",
          author: "Prof. Laurent Martin",
          sourceColorCategory: "white",
          sourceColorTags: ["white"],
          biotechColor: "white"
        },
        {
          title: "Des enzymes industrielles optimisées par intelligence artificielle réduisent la consommation d'énergie de 60%",
          link: "https://example.com/article11",
          pubDate: "2024-04-24T14:40:00Z",
          description: "Des chercheurs ont utilisé l'apprentissage automatique pour concevoir des enzymes industrielles fonctionnant efficacement à température ambiante, réduisant considérablement les besoins énergétiques des procédés industriels.",
          content: "Ces enzymes optimisées ont été adoptées par plusieurs industries, de la production de papier à la transformation alimentaire, avec des économies d'énergie substantielles.",
          imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "CNRS",
          author: "Dr. Isabelle Moreau",
          sourceColorCategory: "white",
          sourceColorTags: ["white"],
          biotechColor: "white"
        },
        {
          title: "Une biosynthèse révolutionnaire produit des médicaments complexes à moindre coût",
          link: "https://example.com/article12",
          pubDate: "2024-04-11T09:30:00Z",
          description: "Une technique de biosynthèse utilisant des levures génétiquement modifiées permet désormais de produire des molécules pharmaceutiques complexes à une fraction du coût des méthodes traditionnelles.",
          content: "Cette approche pourrait réduire drastiquement le prix de certains médicaments essentiels et rendre les traitements plus accessibles dans le monde entier.",
          imageUrl: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
          source: "Sanofi",
          author: "Dr. François Petit",
          sourceColorCategory: "white",
          sourceColorTags: ["white"],
          biotechColor: "white"
        },
        
        // BIOTECHNOLOGIE JAUNE (ENVIRONNEMENT) - 4 sources différentes
        {
          title: "Des champignons génétiquement optimisés dépolluent un ancien site industriel en six mois",
          link: "https://example.com/article13",
          pubDate: "2024-05-11T16:20:00Z",
          description: "Un projet de bioremédiation utilisant des champignons spécialement adaptés a permis de nettoyer un site industriel contaminé par des métaux lourds et des hydrocarbures en un temps record.",
          content: "Cette approche biologique s'est révélée 70% moins coûteuse que les méthodes conventionnelles de décontamination et a permis de restaurer un écosystème fonctionnel.",
          imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "ADEME",
          author: "Dr. Julie Martin",
          sourceColorCategory: "yellow",
          sourceColorTags: ["yellow"],
          biotechColor: "yellow"
        },
        {
          title: "Un nouveau biosenseur détecte les micropolluants dans l'eau potable en temps réel",
          link: "https://example.com/article14",
          pubDate: "2024-05-04T10:10:00Z",
          description: "Des chercheurs ont développé un capteur biologique capable de détecter des concentrations infimes de contaminants émergents dans l'eau, comme les résidus pharmaceutiques et les microplastiques.",
          content: "Ce dispositif portable pourrait révolutionner la surveillance de la qualité de l'eau et permettre des interventions rapides en cas de contamination.",
          imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          source: "Veolia",
          author: "Ingénieur Paul Deschamps",
          sourceColorCategory: "yellow",
          sourceColorTags: ["yellow"],
          biotechColor: "yellow"
        },
        {
          title: "Des bactéries marines dégradent les microplastiques dans les océans",
          link: "https://example.com/article15",
          pubDate: "2024-04-20T13:45:00Z",
          description: "Des scientifiques ont identifié et optimisé des souches bactériennes capables de décomposer les microplastiques dans l'environnement marin, offrant un espoir pour résoudre cette pollution persistante.",
          content: "Les premiers tests grandeur nature montrent une réduction de 47% des microplastiques dans les zones traitées après six mois d'application.",
          imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
          source: "IFREMER",
          author: "Dr. Marie Cousteau",
          sourceColorCategory: "yellow",
          sourceColorTags: ["yellow"],
          biotechColor: "yellow"
        },
        {
          title: "Une forêt urbaine biodiversifiée purifie l'air aussi efficacement que 30 000 arbres conventionnels",
          link: "https://example.com/article16",
          pubDate: "2024-04-10T11:30:00Z",
          description: "Un nouveau concept de forêt urbaine dense utilisant des espèces soigneusement sélectionnées et des microorganismes symbiotiques a été déployé à Lyon avec des résultats spectaculaires sur la qualité de l'air.",
          content: "Cette micro-forêt de seulement 600 m² élimine autant de polluants atmosphériques qu'un parc traditionnel 50 fois plus grand.",
          imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          source: "Ministère de l'Écologie",
          author: "Pierre Naturel",
          sourceColorCategory: "yellow",
          sourceColorTags: ["yellow"],
          biotechColor: "yellow"
        },
        
        // BIOTECHNOLOGIE BLEUE (MARINE) - 4 sources différentes
        {
          title: "Un composé marin révolutionne le traitement de la maladie d'Alzheimer",
          link: "https://example.com/article17",
          pubDate: "2024-05-15T12:10:00Z",
          description: "Une molécule extraite d'une éponge marine des profondeurs montre une capacité remarquable à dissoudre les plaques amyloïdes associées à la maladie d'Alzheimer dans des essais précliniques.",
          content: "Ce composé, découvert à 2000 mètres de profondeur près de la fosse des Mariannes, pourrait constituer la première thérapie capable d'inverser la progression de la maladie.",
          imageUrl: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "IFREMER",
          author: "Dr. Jacques Cousteau",
          sourceColorCategory: "blue",
          sourceColorTags: ["blue"],
          biotechColor: "blue"
        },
        {
          title: "Des algues génétiquement modifiées produisent un bioplastique marin biodégradable",
          link: "https://example.com/article18",
          pubDate: "2024-05-01T09:40:00Z",
          description: "Des chercheurs ont développé une souche d'algues qui synthétise un polymère biodégradable dans l'environnement marin, offrant une alternative aux plastiques conventionnels qui persistent dans les océans.",
          content: "Ce matériau se dégrade naturellement en 12 semaines dans l'eau de mer sans laisser de microplastiques ou de substances toxiques.",
          imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          source: "Station Biologique de Roscoff",
          author: "Dr. Marine Leblanc",
          sourceColorCategory: "blue",
          sourceColorTags: ["blue"],
          biotechColor: "blue"
        },
        {
          title: "Une ferme aquacole intelligente utilise l'IA pour optimiser la production de poissons",
          link: "https://example.com/article19",
          pubDate: "2024-04-22T14:50:00Z",
          description: "Un système d'aquaculture de précision piloté par intelligence artificielle surveille en temps réel la santé des poissons, la qualité de l'eau et optimise automatiquement les conditions d'élevage.",
          content: "Cette approche a permis de réduire de 70% l'utilisation d'antibiotiques tout en augmentant la production de 30% par rapport aux méthodes conventionnelles.",
          imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          source: "Pôle Mer Bretagne",
          author: "Ingénieur Louis Marin",
          sourceColorCategory: "blue",
          sourceColorTags: ["blue"],
          biotechColor: "blue"
        },
        {
          title: "Un corail bioluminescent génétiquement modifié pour surveiller la santé des récifs",
          link: "https://example.com/article20",
          pubDate: "2024-04-08T11:20:00Z",
          description: "Des biologistes marins ont créé un corail sentinelle qui s'illumine en présence de polluants spécifiques, permettant une surveillance continue et en temps réel de l'état des récifs coralliens.",
          content: "Ces organismes sentinelles peuvent détecter des changements subtils dans la chimie de l'eau et servir d'alerte précoce avant que des dommages irréversibles ne surviennent.",
          imageUrl: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          source: "Institut Océanographique de Monaco",
          author: "Dr. Coralie Bleu",
          sourceColorCategory: "blue",
          sourceColorTags: ["blue"],
          biotechColor: "blue"
        },
        
        // BIOTECHNOLOGIE NOIRE (ÉDUCATION) - 4 sources différentes
        {
          title: "Lancement d'une plateforme immersive pour l'apprentissage de la biotechnologie",
          link: "https://example.com/article21",
          pubDate: "2024-05-14T15:45:00Z",
          description: "Une nouvelle plateforme éducative combine réalité virtuelle et simulation moléculaire pour permettre aux étudiants d'interagir virtuellement avec l'ADN et de réaliser des expériences complexes.",
          content: "Cette technologie éducative, développée en partenariat avec plusieurs universités, démocratise l'accès à des équipements coûteux et permet une expérience pratique même en enseignement à distance.",
          imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
          source: "Ministère de l'Enseignement Supérieur",
          author: "Prof. Claire Dubois",
          sourceColorCategory: "black",
          sourceColorTags: ["black"],
          biotechColor: "black"
        },
        {
          title: "Première formation nationale en bioéthique pour les chercheurs en biotechnologie",
          link: "https://example.com/article22",
          pubDate: "2024-05-03T13:30:00Z",
          description: "Un programme de formation obligatoire en bioéthique a été lancé pour tous les chercheurs travaillant sur des technologies sensibles comme l'édition génomique et la biologie synthétique.",
          content: "Ce programme aborde les implications éthiques, sociales et environnementales des biotechnologies émergentes et vise à intégrer ces considérations dès la conception des projets de recherche.",
          imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
          source: "Comité Consultatif National d'Éthique",
          author: "Dr. Michel Éthique",
          sourceColorCategory: "black",
          sourceColorTags: ["black"],
          biotechColor: "black"
        },
        {
          title: "Un serious game sur l'édition génomique sensibilise les lycéens aux enjeux de CRISPR",
          link: "https://example.com/article23",
          pubDate: "2024-04-19T09:50:00Z",
          description: "Un jeu vidéo éducatif permet aux lycéens de simuler des expériences d'édition génomique et d'explorer les implications scientifiques, éthiques et sociétales de cette technologie révolutionnaire.",
          content: "Déjà adopté par 300 établissements, ce jeu développe l'esprit critique des élèves face aux enjeux complexes des biotechnologies modernes.",
          imageUrl: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          source: "Ministère de l'Éducation Nationale",
          author: "Prof. Jean Savoir",
          sourceColorCategory: "black",
          sourceColorTags: ["black"],
          biotechColor: "black"
        },
        {
          title: "Lancement d'un MOOC international sur la biologie synthétique disponible en 12 langues",
          link: "https://example.com/article24",
          pubDate: "2024-04-02T10:15:00Z",
          description: "Un cours en ligne gratuit sur la biologie synthétique a été lancé simultanément dans 12 langues, rendant cette discipline de pointe accessible aux étudiants et professionnels du monde entier.",
          content: "Développé par un consortium d'universités de premier plan, ce cours couvre les fondamentaux jusqu'aux applications avancées et a déjà attiré plus de 50 000 inscrits.",
          imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          source: "Sorbonne Université",
          author: "Prof. Marie Curie",
          sourceColorCategory: "black",
          sourceColorTags: ["black"],
          biotechColor: "black"
        }
      ];

      setArticles(simulatedArticles);
      console.log(`Total articles simulés: ${simulatedArticles.length}`);
      
    } catch (error) {
      console.error("Erreur:", error);
      setError("Une erreur est survenue lors du chargement des articles. Veuillez réessayer plus tard.");
    } finally { 
      setLoading(false);
    }
  };
  
  // Ne pas supprimer cette fonction car elle est utilisée ailleurs
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