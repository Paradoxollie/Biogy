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
      // Function to get demo articles with proper biotechnology color categorization
      const getDemoArticles = () => {
        const articles = [
          // BIOTECHNOLOGIE ROUGE (SANTÉ)
          {
            title: "Nouvelle thérapie génique contre la drépanocytose approuvée en Europe",
            link: "https://example.com/gene-therapy-2024",
            pubDate: "2024-05-15T10:00:00Z",
            description: "L'Agence européenne des médicaments a approuvé une thérapie génique révolutionnaire qui corrige le gène responsable de la drépanocytose.",
            content: "Cette thérapie utilise la technologie CRISPR-Cas9 pour modifier les cellules souches du patient, offrant un espoir de guérison complète pour les patients atteints de cette maladie génétique du sang.",
            imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "Institut Pasteur",
            sourceColorCategory: "red",
            sourceColorTags: ["red"],
            biotechColor: "red"
          },
          {
            title: "Un vaccin à ARNm contre le paludisme montre 87% d'efficacité en phase 3",
            link: "https://example.com/malaria-mrna-2024",
            pubDate: "2024-05-02T09:30:00Z",
            description: "Les essais cliniques de phase 3 d'un vaccin innovant utilisant la technologie ARNm ont montré une efficacité de 87% contre le paludisme.",
            content: "Après le succès des vaccins à ARNm contre la COVID-19, cette technologie est maintenant appliquée avec succès à d'autres maladies infectieuses, comme le paludisme qui tue plus de 600 000 personnes chaque année.",
            imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            source: "OMS",
            sourceColorCategory: "red",
            sourceColorTags: ["red"],
            biotechColor: "red"
          },
          {
            title: "Implants cérébraux : premiers résultats encourageants chez les patients paralysés",
            link: "https://example.com/brain-implant-2024",
            pubDate: "2024-04-18T14:15:00Z",
            description: "Des chercheurs français rapportent que trois patients tétraplégiques ont retrouvé une mobilité partielle grâce à des implants cérébraux connectés.",
            content: "Cette interface cerveau-machine permet de contourner les lésions de la moelle épinière et de rétablir la communication entre le cerveau et les membres, ouvrant de nouvelles perspectives pour les personnes souffrant de paralysie.",
            imageUrl: "https://images.unsplash.com/photo-1583912268183-46a1d8891fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            source: "INSERM",
            sourceColorCategory: "red",
            sourceColorTags: ["red"],
            biotechColor: "red"
          },
          {
            title: "Révolution biopharmaceutique : les anticorps multi-spécifiques entrent en clinique",
            link: "https://example.com/multispecific-antibodies-2024",
            pubDate: "2024-03-25T11:20:00Z",
            description: "Une nouvelle génération d'anticorps capables de cibler simultanément plusieurs cibles thérapeutiques entre en phase clinique pour le traitement du cancer.",
            content: "Ces anticorps multi-spécifiques représentent une avancée majeure en immunothérapie, permettant d'attaquer les tumeurs sur plusieurs fronts et de contourner les mécanismes de résistance.",
            imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            source: "Sanofi",
            sourceColorCategory: "red",
            sourceColorTags: ["red"],
            biotechColor: "red"
          },

          // BIOTECHNOLOGIE VERTE (AGRICULTURE)
          {
            title: "Des cultures résistantes à la sécheresse développées par édition génomique",
            link: "https://example.com/drought-crops-2024",
            pubDate: "2024-05-10T08:45:00Z",
            description: "Des scientifiques ont créé des variétés de maïs et de blé nécessitant 40% moins d'eau grâce à l'édition génomique ciblée.",
            content: "Face au changement climatique, ces nouvelles variétés pourraient révolutionner l'agriculture dans les zones arides et semi-arides, tout en maintenant les rendements nécessaires pour nourrir une population mondiale croissante.",
            imageUrl: "https://images.unsplash.com/photo-1574707100262-7a26b64d3fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "INRAE",
            sourceColorCategory: "green",
            sourceColorTags: ["green"],
            biotechColor: "green"
          },
          {
            title: "Biocarburant de 3ème génération : une usine de production d'algues inaugurée",
            link: "https://example.com/algae-biofuel-2024",
            pubDate: "2024-04-28T13:10:00Z",
            description: "La plus grande usine européenne de production de biocarburants à base de microalgues a été inaugurée en Bretagne, avec une capacité de 10 000 tonnes par an.",
            content: "Ces biocarburants de 3ème génération ne concurrencent pas les cultures alimentaires et absorbent du CO2 pendant leur croissance, offrant un bilan carbone bien plus favorable que les carburants fossiles.",
            imageUrl: "https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "TotalEnergies",
            sourceColorCategory: "green",
            sourceColorTags: ["green"],
            biotechColor: "green"
          },
          {
            title: "Percée dans les bioplastiques compostables à base de déchets agricoles",
            link: "https://example.com/bioplastics-2024",
            pubDate: "2024-04-05T10:40:00Z",
            description: "Une startup française a développé un procédé permettant de transformer des résidus agricoles en bioplastiques entièrement compostables en 3 mois.",
            content: "Ce matériau innovant offre les mêmes propriétés mécaniques que les plastiques conventionnels, tout en étant biodégradable même dans des conditions naturelles, sans nécessiter d'installations industrielles.",
            imageUrl: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            source: "ADEME",
            sourceColorCategory: "green",
            sourceColorTags: ["green"],
            biotechColor: "green"
          },
          {
            title: "Un riz enrichi naturellement en vitamine A approuvé pour la culture",
            link: "https://example.com/golden-rice-2024",
            pubDate: "2024-03-12T09:50:00Z",
            description: "L'Union Européenne a approuvé la culture d'une variété de riz enrichie en provitamine A pour lutter contre les carences nutritionnelles dans les pays en développement.",
            content: "Ce 'riz doré' a été développé pour combattre la carence en vitamine A, qui cause la cécité chez des centaines de milliers d'enfants chaque année et augmente la mortalité infantile.",
            imageUrl: "https://images.unsplash.com/photo-1568324601910-6ea515d5b8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "FAO",
            sourceColorCategory: "green",
            sourceColorTags: ["green"],
            biotechColor: "green"
          },

          // BIOTECHNOLOGIE BLANCHE (INDUSTRIELLE)
          {
            title: "Enzymes ultra-résistantes pour le recyclage des plastiques complexes",
            link: "https://example.com/enzyme-recycling-2024",
            pubDate: "2024-05-08T15:30:00Z",
            description: "Des chercheurs ont mis au point des enzymes modifiées capables de décomposer les plastiques multicouches considérés jusqu'ici comme non recyclables.",
            content: "Cette innovation pourrait transformer l'industrie du recyclage en permettant de traiter des emballages complexes comme les briques alimentaires ou les sachets multicouches, contribuant à réduire significativement les déchets plastiques.",
            imageUrl: "https://images.unsplash.com/photo-1581093450021-a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            source: "Genopole",
            sourceColorCategory: "white",
            sourceColorTags: ["white"],
            biotechColor: "white"
          },
          {
            title: "Révolution dans la production de protéines par fermentation de précision",
            link: "https://example.com/protein-fermentation-2024",
            pubDate: "2024-04-22T11:15:00Z",
            description: "Une nouvelle technique de fermentation de précision permet de produire des protéines alimentaires avec 95% moins de ressources que l'élevage traditionnel.",
            content: "Cette technologie utilise des microorganismes spécialement conçus pour convertir efficacement les sucres en protéines de haute qualité, offrant une alternative durable à la viande avec une empreinte environnementale minimale.",
            imageUrl: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            source: "Université de Wageningen",
            sourceColorCategory: "white",
            sourceColorTags: ["white"],
            biotechColor: "white"
          },
          {
            title: "Bioproduction de fibres textiles : une usine révolutionnaire en France",
            link: "https://example.com/biotextiles-2024",
            pubDate: "2024-04-02T14:40:00Z",
            description: "La première usine européenne de production de fibres textiles par biofabrication vient d'ouvrir ses portes, avec une capacité de 5000 tonnes annuelles.",
            content: "Ces fibres produites par des bactéries modifiées remplacent avantageusement le polyester d'origine pétrolière, tout en étant biodégradables et ne rejetant pas de microplastiques lors du lavage.",
            imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "Ministère de l'Industrie",
            sourceColorCategory: "white",
            sourceColorTags: ["white"],
            biotechColor: "white"
          },
          {
            title: "Des biosolvants remplacent les solvants pétrochimiques toxiques",
            link: "https://example.com/biosolvents-2024",
            pubDate: "2024-03-20T09:30:00Z",
            description: "Une entreprise chimique a développé une gamme de biosolvants dérivés de déchets agricoles qui éliminent l'utilisation de produits toxiques dans l'industrie des peintures.",
            content: "Ces biosolvants offrent les mêmes performances techniques que leurs équivalents pétroliers, tout en réduisant de 90% les émissions de COV (composés organiques volatils) nocifs pour la santé et l'environnement.",
            imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "CNRS",
            sourceColorCategory: "white",
            sourceColorTags: ["white"],
            biotechColor: "white"
          },

          // BIOTECHNOLOGIE JAUNE (ENVIRONNEMENT)
          {
            title: "Bactéries mangeuses de plastique déployées pour nettoyer un fleuve pollué",
            link: "https://example.com/plastic-eating-bacteria-2024",
            pubDate: "2024-05-05T16:20:00Z",
            description: "Un consortium de chercheurs et d'écologistes a lancé le premier projet à grande échelle utilisant des bactéries modifiées pour dépolluer un fleuve contaminé par les microplastiques.",
            content: "Ces bactéries, naturellement présentes dans certains environnements, ont été optimisées pour accélérer la dégradation des particules plastiques et convertir les polymères en composés non toxiques pour l'écosystème aquatique.",
            imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "Greenpeace",
            sourceColorCategory: "yellow",
            sourceColorTags: ["yellow"],
            biotechColor: "yellow"
          },
          {
            title: "Mycorestauration : des champignons pour dépolluer d'anciens sites industriels",
            link: "https://example.com/mycoremediation-2024",
            pubDate: "2024-04-15T10:10:00Z",
            description: "Une technique innovante utilisant des champignons spécialisés permet de neutraliser les métaux lourds et hydrocarbures présents dans les sols d'une ancienne raffinerie.",
            content: "Cette méthode de bioremédiation naturelle s'avère 60% moins coûteuse que les techniques conventionnelles d'excavation et traitement, tout en restaurant la vie microbienne dans les sols traités.",
            imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            source: "ADEME",
            sourceColorCategory: "yellow",
            sourceColorTags: ["yellow"],
            biotechColor: "yellow"
          },
          {
            title: "Biofiltres vivants : des algues pour purifier les eaux usées urbaines",
            link: "https://example.com/algae-biofiltration-2024",
            pubDate: "2024-03-30T13:45:00Z",
            description: "La ville de Bordeaux a inauguré un système innovant de traitement des eaux usées utilisant des algues et microorganismes pour éliminer les polluants et produire de la biomasse.",
            content: "Ce système de biofiltration naturelle élimine efficacement les nitrates, phosphates et certains micropolluants comme les résidus pharmaceutiques, tout en produisant de la biomasse algale valorisable en biogaz.",
            imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            source: "Agence de l'Eau",
            sourceColorCategory: "yellow",
            sourceColorTags: ["yellow"],
            biotechColor: "yellow"
          },
          {
            title: "Des bactéries luminescentes comme biosenseurs de pollution",
            link: "https://example.com/bioluminescent-sensors-2024",
            pubDate: "2024-03-05T11:30:00Z",
            description: "Des chercheurs ont développé un système de détection de la pollution utilisant des bactéries bioluminescentes qui s'illuminent en présence de contaminants spécifiques.",
            content: "Ces biosenseurs vivants permettent une détection rapide et peu coûteuse de multiples polluants dans l'eau et les sols, offrant une alternative aux analyses chimiques complexes pour la surveillance environnementale.",
            imageUrl: "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            source: "CNRS Le Journal",
            sourceColorCategory: "yellow",
            sourceColorTags: ["yellow"],
            biotechColor: "yellow"
          },

          // BIOTECHNOLOGIE BLEUE (MARINE)
          {
            title: "Des éponges marines sources de nouveaux antibiotiques",
            link: "https://example.com/marine-antibiotics-2024",
            pubDate: "2024-05-12T12:10:00Z",
            description: "Des chercheurs ont identifié trois nouvelles molécules antibiotiques dans des éponges marines profondes, actives contre des bactéries multirésistantes.",
            content: "Ces composés, issus d'éponges collectées à plus de 1000 mètres de profondeur, montrent une efficacité remarquable contre des souches bactériennes résistantes aux antibiotiques conventionnels, offrant un espoir dans la lutte contre l'antibiorésistance.",
            imageUrl: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "Ifremer",
            sourceColorCategory: "blue",
            sourceColorTags: ["blue"],
            biotechColor: "blue"
          },
          {
            title: "Bioraffinerie marine : des microalgues pour la cosmétique haut de gamme",
            link: "https://example.com/marine-biorefinery-2024",
            pubDate: "2024-04-25T09:40:00Z",
            description: "Une bioraffinerie marine unique au monde vient d'être inaugurée à Brest, produisant des actifs cosmétiques à partir de microalgues cultivées en photobioréacteurs.",
            content: "Cette installation permet d'extraire des molécules aux propriétés anti-âge exceptionnelles et des pigments naturels, tout en valorisant l'intégralité de la biomasse produite selon les principes de l'économie circulaire.",
            imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            source: "Pôle Mer Bretagne",
            sourceColorCategory: "blue",
            sourceColorTags: ["blue"],
            biotechColor: "blue"
          },
          {
            title: "Aquaculture de précision : des fermes marines intelligentes",
            link: "https://example.com/smart-aquaculture-2024",
            pubDate: "2024-04-10T14:50:00Z",
            description: "Une startup a développé un système d'aquaculture de précision utilisant l'IA et des capteurs biologiques pour optimiser l'élevage de poissons en minimisant l'impact environnemental.",
            content: "Cette technologie permet de réduire de 40% l'utilisation d'antibiotiques et d'améliorer de 25% l'efficacité alimentaire, tout en surveillant en temps réel la santé des poissons et la qualité de l'eau grâce à des biosenseurs avancés.",
            imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            source: "Université de Bretagne Occidentale",
            sourceColorCategory: "blue",
            sourceColorTags: ["blue"],
            biotechColor: "blue"
          },
          {
            title: "Un biomatériau marin révolutionnaire pour la régénération osseuse",
            link: "https://example.com/marine-biomaterial-2024",
            pubDate: "2024-03-15T11:20:00Z",
            description: "Des chercheurs ont développé un substitut osseux à partir de corail et d'algues calcifiées, offrant des propriétés de régénération supérieures aux matériaux synthétiques.",
            content: "Ce biomatériau d'origine marine présente une structure poreuse idéale pour la colonisation cellulaire et la vascularisation, tout en se résorbant progressivement pour laisser place à l'os naturel du patient.",
            imageUrl: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "CHU de Nantes",
            sourceColorCategory: "blue",
            sourceColorTags: ["blue", "red"],
            biotechColor: "blue"
          },

          // BIOTECHNOLOGIE NOIRE (ÉDUCATION)
          {
            title: "Simulateurs biotechnologiques en réalité virtuelle pour les universités",
            link: "https://example.com/biotech-vr-2024",
            pubDate: "2024-05-01T15:45:00Z",
            description: "Un consortium universitaire a développé des simulateurs en réalité virtuelle permettant aux étudiants de s'entraîner à manipuler des équipements biotechnologiques coûteux.",
            content: "Ces environnements virtuels hyperréalistes reproduisent fidèlement les laboratoires de pointe et permettent aux étudiants de réaliser des expériences complexes comme l'édition génomique ou la culture cellulaire avancée, sans risque et à moindre coût.",
            imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
            source: "Ministère de l'Enseignement Supérieur et de la Recherche",
            sourceColorCategory: "black",
            sourceColorTags: ["black"],
            biotechColor: "black"
          },
          {
            title: "Plateforme collaborative de formation à la bioéthique pour chercheurs",
            link: "https://example.com/bioethics-platform-2024",
            pubDate: "2024-04-20T13:30:00Z",
            description: "Une nouvelle plateforme numérique propose des modules interactifs de formation à la bioéthique, obligatoires pour tous les chercheurs travaillant sur des projets sensibles.",
            content: "Cette plateforme développée par le Comité Consultatif National d'Éthique aborde les dilemmes éthiques liés aux nouvelles biotechnologies comme l'édition génomique germinale ou la biologie synthétique avancée.",
            imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
            source: "CCNE",
            sourceColorCategory: "black",
            sourceColorTags: ["black"],
            biotechColor: "black"
          },
          {
            title: "Premier baccalauréat spécialisé en biotechnologies pour les lycéens",
            link: "https://example.com/biotech-bac-2024",
            pubDate: "2024-04-05T09:50:00Z",
            description: "Le ministère de l'Éducation Nationale annonce la création d'un baccalauréat spécialisé en biotechnologies, disponible dès la rentrée 2025 dans 50 lycées pilotes.",
            content: "Cette formation, développée en partenariat avec l'industrie, vise à former les techniciens et chercheurs de demain aux disciplines clés des biotechnologies : génie génétique, bioprocessus, culture cellulaire et analyse de données biologiques.",
            imageUrl: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            source: "Ministère de l'Éducation Nationale",
            sourceColorCategory: "black",
            sourceColorTags: ["black"],
            biotechColor: "black"
          },
          {
            title: "Encyclopédie collaborative des biotechnologies en accès libre",
            link: "https://example.com/biotech-encyclopedia-2024",
            pubDate: "2024-03-10T10:15:00Z",
            description: "Une équipe internationale de chercheurs lance une encyclopédie numérique collaborative des biotechnologies, librement accessible et traduite en 12 langues.",
            content: "Cette ressource pédagogique de référence couvre l'ensemble des domaines des biotechnologies modernes et s'adresse aussi bien aux étudiants qu'aux professionnels ou au grand public souhaitant comprendre ces technologies transformatives.",
            imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            source: "UNESCO",
            sourceColorCategory: "black",
            sourceColorTags: ["black", "multi"],
            biotechColor: "black"
          }
        ];
        
        return articles;
      };

      // Appeler immédiatement les données de démo pour éviter l'écran vide
      const demoArticles = getDemoArticles();
      setArticles(demoArticles);
      
      try {
        // Remplacer le proxy CORS par notre propre API
        const feeds = [
          { url: 'https://lejournal.cnrs.fr/rss', title: 'CNRS Le Journal', colorTags: ['green', 'red', 'white', 'yellow', 'blue'] },
          { url: 'https://www.ird.fr/rss.xml', title: 'IRD', colorTags: ['red', 'green', 'yellow', 'blue'] },
          { url: 'https://www.santepubliquefrance.fr/rss/actualites.xml', title: 'Santé Publique France', colorTags: ['red', 'yellow'] },
          { url: 'https://www.enseignementsup-recherche.gouv.fr/fr/rss.xml', title: 'Ministère de la Recherche', colorTags: ['black', 'multi'] },
          { url: 'https://www.inserm.fr/actualites-et-evenements/actualites/feed/', title: 'INSERM', colorTags: ['red'] },
          { url: 'https://www.inrae.fr/rss.xml', title: 'INRAE', colorTags: ['green', 'yellow'] },
          { url: 'https://www.ifremer.fr/fr/actualites/flux', title: 'Ifremer', colorTags: ['blue'] },
          { url: 'https://www.ademe.fr/actualites/feed/', title: 'ADEME', colorTags: ['yellow', 'green'] }
        ];

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
                    'https://images.unsplash.com/photo-1581093450021-a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
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