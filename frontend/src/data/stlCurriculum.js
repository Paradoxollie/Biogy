export const COURSE_REFERENCES = [
  {
    id: 'stl-hub',
    title: 'Programmes et ressources en serie STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/cid143748/stl-bac-2021.html',
  },
  {
    id: 'premiere-biobio',
    title: 'Programme de biochimie-biologie de premiere STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/document/23089/download',
  },
  {
    id: 'premiere-biotech',
    title: 'Programme de biotechnologies de premiere STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/document/23092/download',
  },
  {
    id: 'terminale-bbb',
    title: 'Programme de biochimie, biologie et biotechnologies de terminale STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/document/23101/download',
  },
  {
    id: 'discipline',
    title: 'Biotechnologies, sciences et techniques medico-sociales',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/2340/biotechnologies-sciences-et-techniques-medico-sociales',
  },
  {
    id: 'delagrave-biotech-1re',
    title: 'Biotechnologies 1re STL - manuel numerique eleve',
    source: 'Delagrave',
    url: 'https://www.editions-delagrave.fr/site/302881',
  },
  {
    id: 'lyon-programme',
    title: 'Explications pour la lecture du programme de premiere STL biotechnologies',
    source: 'Academie de Lyon',
    url: 'https://pedagogie.ac-lyon.fr/biotechnologies/stl/',
  },
  {
    id: 'grenoble-microscope',
    title: 'Microscopie optique',
    source: 'Academie de Grenoble',
    url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/content/microscopie-optique',
  },
  {
    id: 'dijon-microscope',
    title: 'Le microscope photonique',
    source: 'Academie de Dijon',
    url: 'https://stl-bjb.ac-dijon.fr/spip.php?article185',
  },
  {
    id: 'edubase-techniques',
    title: 'Accompagnement des techniques de biotechnologies',
    source: 'Edubase',
    url: 'https://edubase.eduscol.education.fr/fiche/21971',
  },
];

const PREMIERE_BT1_CONTENT = {
  intro:
    'En premiere STL, on apprend tres vite qu un resultat scientifique ne commence pas par une conclusion, mais par une observation rigoureuse. Ce premier chapitre t apprend a utiliser le microscope optique avec methode, a reconnaitre quelques organisations cellulaires simples et a produire une trace de travail exploitable en classe comme en TP.',
  prerequisites: [
    'Savoir qu une cellule est l unite de base du vivant.',
    'Comprendre qu une observation scientifique doit rester fidele a ce qui est visible.',
    'Connaitre les regles elementaires de soin du materiel de laboratoire.',
  ],
  objectives: [
    'Regler un microscope optique avec methode.',
    'Identifier de grands indices d organisation cellulaire.',
    'Distinguer observation, description et interpretation.',
    'Produire un schema scientifique simple, propre et juste.',
  ],
  vocabulary: [
    {
      term: 'Cellule',
      definition:
        'Plus petite unite structurale du vivant capable de realiser les fonctions essentielles de la vie.',
    },
    {
      term: 'Procaryote',
      definition:
        'Cellule sans noyau individualise. Le materiel genetique n est pas contenu dans un noyau visible.',
    },
    {
      term: 'Eucaryote',
      definition:
        'Cellule possedant un noyau et plusieurs compartiments internes appeles organites.',
    },
    {
      term: 'Grossissement',
      definition:
        'Rapport entre la taille apparente de l image observee et la taille reelle de l objet.',
    },
    {
      term: 'Observation',
      definition:
        'Description de ce qui est reellement visible, sans ajouter d hypothese non verifiee.',
    },
    {
      term: 'Interpretation',
      definition:
        'Explication proposee a partir des observations, des connaissances du cours et du contexte experimental.',
    },
  ],
  diagrams: [
    {
      id: 'microscope',
      title: 'Schema 1 - Les reperes utiles sur le microscope',
      caption:
        'Avant de commencer, il faut savoir nommer les parties principales du microscope et comprendre leur fonction.',
    },
    {
      id: 'cells',
      title: 'Schema 2 - Procaryote et eucaryote',
      caption:
        'Le microscope aide a distinguer de grandes organisations cellulaires, mais il faut rester prudent et s appuyer sur des indices visibles.',
    },
  ],
  sections: [
    {
      title: '1. Pourquoi ce chapitre est important en STL',
      body: [
        'En STL, une grande partie du travail experimental commence par l observation. On ne peut pas analyser correctement un echantillon si l on n a pas d abord pris le temps de le regarder avec rigueur.',
        'Le microscope permet d acceder a un niveau d organisation invisible a l oeil nu. Il sert a observer des cellules, des tissus, des levures, des bacteries ou encore certains details d un echantillon biologique.',
        'Ce chapitre construit donc une methode generale : regarder, decrire avec precision, puis seulement interpreter. Cette logique sera utile toute l annee.',
      ],
    },
    {
      title: '2. Ce que l on cherche quand on observe',
      body: [
        'Observer au microscope ne signifie pas reconnaitre immediatement la nature exacte d un echantillon. La premiere etape consiste a relever des indices fiables : forme generale, taille relative, presence ou absence d un noyau visible, organisation isolee ou en groupe, coloration eventuelle, contours plus ou moins nets.',
        'Ces indices permettent ensuite d orienter une interpretation. Par exemple, la presence d un noyau visible est un argument en faveur d une cellule eucaryote. A l inverse, l absence de noyau visible peut orienter vers une organisation procaryote, mais cela doit rester prudent si les conditions d observation sont mediocres.',
        'Une bonne observation repose donc sur un vocabulaire simple et juste. Il vaut mieux decrire peu, mais correctement, que conclure trop vite.',
      ],
    },
    {
      title: '3. Les regles de base pour utiliser un microscope',
      body: [
        'Le microscope optique doit etre manipule avec soin. On le transporte a deux mains, on place la lame correctement sur la platine et on verifie toujours l objectif engage avant de commencer.',
        'L observation debute au plus faible grossissement. Cette etape est essentielle, car le champ observe est plus large et la mise au point est plus facile. C est a ce moment-la que l on repere l echantillon.',
        'On utilise d abord la vis macrometrique pour approcher la nettete, puis la vis micrometrique pour l affiner. Il faut avancer lentement afin d eviter tout contact entre l objectif et la lame.',
        'La lumiere, le diaphragme et le contraste doivent aussi etre ajustes. Une image mediocre ne signifie pas toujours que l echantillon est mauvais. Tres souvent, le probleme vient d un reglage insuffisant.',
      ],
    },
    {
      title: '4. Grossissement et qualite de l observation',
      body: [
        'Le grossissement total s obtient en multipliant le grossissement de l oculaire par celui de l objectif. Par exemple, avec un oculaire x10 et un objectif x40, le grossissement total est x400.',
        'Augmenter le grossissement ne suffit pas a mieux observer. Plus le grossissement augmente, plus le champ diminue, plus la mise au point devient delicate et plus les reglages doivent etre precis.',
        'En pratique, on ne change d objectif qu apres avoir obtenu une image nette au grossissement inferieur. C est une regle tres importante en TP.',
      ],
    },
    {
      title: '5. Observer, decrire, puis interpreter',
      body: [
        'La difference entre observation et interpretation est fondamentale. Dire "je vois des cellules allongees regroupees en chaines" est une observation. Dire "il s agit d une bacterie precise" est deja une interpretation.',
        'L interpretation peut etre juste, mais elle doit venir apres. Elle repose sur plusieurs indices coherents, et parfois sur d autres techniques que le microscope seul.',
        'Cette distinction est attendue dans les productions ecrites de STL. Elle montre que l eleve sait raisonner de facon scientifique et ne confond pas ce qu il voit avec ce qu il suppose.',
      ],
    },
    {
      title: '6. Faire un schema scientifique utile',
      body: [
        'Le schema d observation n est pas un dessin artistique. Son role est de conserver une trace claire, lisible et exploitable de ce qui a ete vu.',
        'Un bon schema comporte un titre, un grossissement, des traits propres, des proportions globalement respectees et des legendes alignees. Les structures nommees doivent etre celles qui ont reellement ete observees.',
        'Il ne faut pas ajouter un detail invisible pour "faire plus complet". En science, la justesse prime sur l esthetique.',
      ],
    },
    {
      title: '7. Ce que tu dois etre capable de faire a la fin du chapitre',
      body: [
        'A la fin de ce chapitre, tu dois savoir preparer une observation simple, regler correctement le microscope, produire une description precise et transformer cette observation en schema scientifique simple.',
        'Tu dois aussi etre capable d expliquer, a l oral comme a l ecrit, pourquoi une conclusion prudente vaut mieux qu une affirmation trop rapide.',
      ],
    },
  ],
  method: {
    title: 'Methode - Reussir une observation microscopique',
    steps: [
      'Verifier la proprete de la lame, de la lamelle et des lentilles.',
      'Placer correctement la preparation sur la platine et la centrer.',
      'Commencer avec le plus faible objectif.',
      'Faire une mise au point progressive, sans brutalite.',
      'Ajuster la lumiere avant de changer d objectif.',
      'Noter ce qui est visible avant toute interpretation.',
      'Realiser un schema simple avec titre, grossissement et legendes.',
    ],
  },
  commonMistakes: [
    'Passer trop vite a un fort grossissement sans avoir trouve la zone utile.',
    'Confondre ce qui est observe et ce qui est suppose.',
    'Forcer la mise au point et risquer de casser la preparation.',
    'Ajouter sur le schema des structures qui n ont pas ete vues.',
    'Oublier le titre, le grossissement ou les legendes.',
  ],
  keyPoints: [
    'Le microscope se regle toujours avec methode.',
    'On commence au plus faible grossissement.',
    'Observer n est pas interpreter.',
    'Un schema scientifique doit rester fidele a ce qui a ete vu.',
    'La rigueur d observation est une competence de base en STL.',
  ],
  selfCheck: [
    'Pourquoi commence-t-on toujours par le plus faible grossissement ?',
    'Quelle difference fais-tu entre une observation et une interpretation ?',
    'Quels indices peux-tu relever pour decrire une cellule observee ?',
    'Pourquoi un schema d observation doit-il rester simple et exact ?',
  ],
  practice: [
    {
      question:
        'Tu observes des cellules arrondies, parfois groupees, avec un noyau visible. Que peux-tu dire avec prudence ?',
      expected:
        'Tu peux dire que l observation est compatible avec une organisation eucaryote, car un noyau visible est observe. Tu decris d abord les indices avant d aller plus loin.',
    },
    {
      question:
        'Un eleve passe directement a l objectif le plus puissant et ne voit presque rien. Quelle est la principale erreur ?',
      expected:
        'Il a saute l etape de reperage au faible grossissement. Il fallait d abord localiser correctement l echantillon puis affiner la mise au point progressivement.',
    },
    {
      question:
        'Sur son schema, une eleve ajoute une membrane interne non visible pour faire "comme dans le cours". Pourquoi ce choix est-il faux ?',
      expected:
        'Parce qu un schema d observation doit representer uniquement ce qui est reellement observe. Ajouter un detail invisible transforme l observation en schema theorique non annonce.',
    },
  ],
  sources: [
    {
      title: 'Programme de biotechnologies de premiere STL',
      url: 'https://eduscol.education.fr/document/23092/download',
    },
    {
      title: 'Explications pour la lecture du programme de premiere STL biotechnologies',
      url: 'https://pedagogie.ac-lyon.fr/biotechnologies/stl/',
    },
    {
      title: 'Microscopie optique',
      url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/content/microscopie-optique',
    },
    {
      title: 'Le microscope photonique',
      url: 'https://stl-bjb.ac-dijon.fr/spip.php?article185',
    },
    {
      title: 'Accompagnement des techniques de biotechnologies',
      url: 'https://edubase.eduscol.education.fr/fiche/21971',
    },
  ],
};

const TERMINALE_S1_CONTENT = {
  intro:
    'En terminale STL, les enzymes sont au coeur des transformations biochimiques du vivant. Ce chapitre installe un socle indispensable pour comprendre le metabolisme, interpreter une voie metabolique simple et relier un resultat experimental a une activite enzymatique.',
  objectives: [
    'Definir le role d une enzyme.',
    'Expliquer la specificite d une enzyme.',
    'Relier activite enzymatique et conditions du milieu.',
    'Lire une voie metabolique simple.',
  ],
  sections: [
    {
      title: '1. Le role d une enzyme',
      body: [
        'Une enzyme est un catalyseur biologique. Elle accelere une reaction chimique sans etre consommee par cette reaction.',
        'Dans les cellules, les enzymes rendent possibles des transformations chimiques rapides et selectives dans des conditions compatibles avec la vie.',
      ],
    },
    {
      title: '2. Specificite et substrat',
      body: [
        'Chaque enzyme agit sur un ou plusieurs substrats particuliers. Cette specificite est liee a la structure tridimensionnelle de l enzyme et a l organisation de son site actif.',
        'Une reaction enzymatique n est donc pas un phenomene general et indifferent. Elle depend d une reconnaissance moleculaire precise.',
      ],
    },
    {
      title: '3. Conditions d activite',
      body: [
        'L activite d une enzyme depend notamment de la temperature, du pH, de la concentration en substrat et parfois de la presence de cofacteurs ou d inhibiteurs.',
        'Quand une condition s ecarte trop de la valeur favorable, l activite diminue et peut meme devenir nulle.',
      ],
    },
    {
      title: '4. Lire une voie metabolique',
      body: [
        'Une voie metabolique est une succession ordonnee de reactions catalysees par des enzymes. Le produit d une reaction devient souvent le substrat de la reaction suivante.',
        'Comprendre une voie metabolique, c est donc savoir relier molecules, enzymes et regulation.',
      ],
    },
  ],
  keyPoints: [
    'Une enzyme est un catalyseur biologique.',
    'Une enzyme possede une specificite d action.',
    'L activite enzymatique depend des conditions du milieu.',
    'Une voie metabolique organise plusieurs reactions successives.',
  ],
  selfCheck: [
    'Pourquoi dit-on qu une enzyme est un catalyseur ?',
    'Qu appelle-t-on specificite enzymatique ?',
    'Quels facteurs peuvent modifier l activite d une enzyme ?',
    'Comment lire une voie metabolique simple ?',
  ],
  sources: [
    {
      title: 'Programme de biochimie, biologie et biotechnologies de terminale STL',
      url: 'https://eduscol.education.fr/document/23101/download',
    },
    {
      title: 'Programmes et ressources en serie STL',
      url: 'https://eduscol.education.fr/cid143748/stl-bac-2021.html',
    },
  ],
};

const COURSE_LEVELS = [
  {
    id: 'premiere',
    title: 'Premiere STL',
    shortTitle: 'Premiere',
    intro:
      'En premiere STL, tu poses les bases scientifiques et techniques de toute la serie. Les chapitres sont ranges pour te permettre de travailler par themes, avec une progression claire et utile en classe comme en TP.',
    sourceIds: [
      'stl-hub',
      'premiere-biobio',
      'premiere-biotech',
      'delagrave-biotech-1re',
      'lyon-programme',
    ],
    sections: [
      {
        id: 'biotechnologies',
        title: 'Biotechnologies',
        chapters: [
          {
            id: 'bt1-microscopie',
            code: 'BT1',
            title: 'Observer la diversite du vivant a l echelle microscopique',
            summary:
              'Apprendre a observer, regler le microscope et decrire ce que l on voit avec precision.',
            skills: [
              'utiliser le microscope optique',
              'distinguer observation et interpretation',
              'realiser un schema scientifique',
            ],
            content: PREMIERE_BT1_CONTENT,
          },
          {
            id: 'bt2-cultiver-microorganismes',
            code: 'BT2',
            title: 'Cultiver des micro-organismes',
            summary:
              'Comprendre les conditions de culture, la sterilite et la logique des milieux de culture.',
            skills: [
              'respecter l asepsie',
              'choisir un milieu adapte',
              'interpreter une croissance simple',
            ],
          },
          {
            id: 'bt3-identifier-microorganismes',
            code: 'BT3',
            title: 'Identifier des micro-organismes',
            summary:
              'Utiliser des caracteres morphologiques et des tests simples pour orienter une identification.',
            skills: [
              'observer une colonie',
              'relier test et information',
              'construire une conclusion prudente',
            ],
          },
          {
            id: 'bt4-denombrement',
            code: 'BT4',
            title: 'Denombrer une population microbienne',
            summary:
              'Passer d une observation experimentale a une estimation quantitative exploitable.',
            skills: [
              'diluer correctement',
              'compter des colonies',
              'exprimer un resultat numerique',
            ],
          },
          {
            id: 'bt5-solutions',
            code: 'BT5',
            title: 'Preparer des solutions utiles au laboratoire',
            summary:
              'Maitriser concentration, dilution et tracabilite dans un contexte de laboratoire.',
            skills: [
              'calculer une concentration',
              'realiser une dilution',
              'securiser la preparation',
            ],
          },
          {
            id: 'bt6-biomolecules',
            code: 'BT6',
            title: 'Mettre en evidence des biomolecules',
            summary:
              'Identifier quelques grandes familles de biomolecules a l aide de tests simples.',
            skills: [
              'choisir un test pertinent',
              'decrire un resultat',
              'relier test et molecule',
            ],
          },
          {
            id: 'bt7-separation',
            code: 'BT7',
            title: 'Separer des constituants biologiques',
            summary:
              'Comprendre les principes de separation utilises au laboratoire.',
            skills: [
              'choisir une technique de separation',
              'comparer des resultats',
              'justifier une methode',
            ],
          },
          {
            id: 'bt8-concentration',
            code: 'BT8',
            title: 'Concentrer et conserver un echantillon',
            summary:
              'Relier traitement d un echantillon, qualite du resultat et conservation.',
            skills: [
              'preparer un echantillon',
              'choisir un mode de conservation',
              'limiter les pertes',
            ],
          },
          {
            id: 'bta-projet',
            code: 'BTA',
            title: 'Conduire un projet technologique',
            summary:
              'S organiser, produire, rendre compte et argumenter dans une demarche de projet.',
            skills: [
              'planifier le travail',
              'tracer les decisions',
              'presenter une demarche',
            ],
          },
          {
            id: 'btb-risques',
            code: 'BTB',
            title: 'Prevenir les risques au laboratoire',
            summary:
              'Appliquer les regles de securite, d hygiene et de prevention.',
            skills: [
              'identifier un danger',
              'choisir une protection',
              'agir de facon responsable',
            ],
          },
          {
            id: 'btc-mesures',
            code: 'BTC',
            title: 'Mesurer avec fiabilite',
            summary:
              'Comprendre precision, repetition et limites d une mesure en laboratoire.',
            skills: [
              'lire un appareil',
              'estimer une incertitude simple',
              'valider une mesure',
            ],
          },
          {
            id: 'btd-numerique',
            code: 'BTD',
            title: 'Utiliser le numerique en biotechnologies',
            summary:
              'Saisir, traiter et presenter des donnees scientifiques avec rigueur.',
            skills: [
              'organiser des donnees',
              'traiter un tableau',
              'communiquer un resultat',
            ],
          },
        ],
      },
      {
        id: 'biochimie-biologie',
        title: 'Biochimie-biologie',
        chapters: [
          {
            id: 'bb1-nutrition',
            code: 'BB1',
            title: 'Mecanismes moleculaires et physiologiques de la nutrition',
            summary:
              'Comprendre comment l organisme transforme, absorbe et elimine la matiere.',
            skills: [
              'expliquer digestion et absorption',
              'relier organes, tissus et molecules',
              'utiliser un schema fonctionnel',
            ],
          },
          {
            id: 'bb2-reproduction-genetique',
            code: 'BB2',
            title:
              'Mecanismes physiologiques et moleculaires de la reproduction et de la transmission des caracteres hereditaires',
            summary:
              'Relier reproduction, information genetique et transmission des caracteres.',
            skills: [
              'decrire la reproduction',
              'relier gene et caractere',
              'argumenter a partir de documents',
            ],
          },
          {
            id: 'bba-biomolecules',
            code: 'BBA',
            title: 'Relations structures et proprietes des biomolecules',
            summary:
              'Installer les bases de biochimie utiles a toute la suite du programme.',
            skills: [
              'identifier les grandes familles de biomolecules',
              'relier structure et propriete',
              'reutiliser ces notions dans un contexte biologique',
            ],
          },
          {
            id: 'bbb-structures-fonctions',
            code: 'BBB',
            title: 'Relations structures et fonctions physiologiques',
            summary:
              'Mettre en relation organisation du vivant et fonction biologique.',
            skills: [
              'decrire un niveau d organisation',
              'relier structure et fonction',
              'justifier une fonction par une observation',
            ],
          },
          {
            id: 'bbc-homeostasie',
            code: 'BBC',
            title: 'Milieu interieur et homeostasie',
            summary:
              'Comprendre les grandes regulations qui maintiennent l equilibre du milieu interieur.',
            skills: [
              'definir homeostasie',
              'reperer une regulation',
              'analyser une perturbation simple',
            ],
          },
          {
            id: 'bbd-information-communication',
            code: 'BBD',
            title: 'Information et communication',
            summary:
              'Savoir expliquer clairement un resultat, une observation ou un raisonnement scientifique.',
            skills: [
              'lire un document scientifique',
              'faire un schema utile',
              'rediger une explication precise',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'terminale',
    title: 'Terminale STL',
    shortTitle: 'Terminale',
    intro:
      'En terminale STL, les cours approfondissent les notions construites en premiere et les relient davantage au projet technologique, a l interpretation des resultats et a la preparation du baccalaureat.',
    sourceIds: ['stl-hub', 'terminale-bbb', 'discipline'],
    sections: [
      {
        id: 'partie-s',
        title: 'Partie S - Corps humain et sante',
        chapters: [
          {
            id: 's1-enzymes-voies',
            code: 'S1',
            title: 'Enzymes et voies metaboliques',
            summary:
              'Comprendre le role des enzymes et l organisation des grandes voies metaboliques.',
            skills: [
              'definir une enzyme',
              'lire une voie metabolique',
              'relier condition et activite',
            ],
            content: TERMINALE_S1_CONTENT,
          },
          {
            id: 's2-immunite',
            code: 'S2',
            title: 'Immunite et reponse de l organisme',
            summary:
              'Expliquer les grandes lignes de la defense immunitaire et de ses deregulations.',
            skills: [
              'identifier des acteurs de l immunite',
              'lire une reponse immunitaire',
              'argumenter avec des documents',
            ],
          },
          {
            id: 's3-adn-replication',
            code: 'S3',
            title: 'ADN, replication et expression genetique',
            summary:
              'Relier information genetique, duplication et expression des genes.',
            skills: [
              'expliquer la replication',
              'relier gene et proteine',
              'interpreter un schema moleculaire',
            ],
          },
          {
            id: 's4-microorganismes-applications',
            code: 'S4',
            title: 'Micro-organismes et applications en sante',
            summary:
              'Comprendre les usages, les limites et les risques lies aux micro-organismes.',
            skills: [
              'relier micro-organisme et application',
              'analyser un contexte de sante',
              'raisonner avec prudence',
            ],
          },
        ],
      },
      {
        id: 'partie-t',
        title: 'Partie T - Pratiques biotechnologiques',
        chapters: [
          {
            id: 't1-diversite-vivant',
            code: 'T1',
            title: 'Observer et comparer la diversite du vivant',
            summary:
              'Approfondir les comparaisons d organisations biologiques et les outils d observation.',
            skills: [
              'comparer des organisations',
              'justifier une observation',
              'mobiliser les bons outils',
            ],
          },
          {
            id: 't2-culture-croissance',
            code: 'T2',
            title: 'Culture et croissance des micro-organismes',
            summary:
              'Etudier les parametres influencant la croissance et leur exploitation au laboratoire.',
            skills: [
              'suivre une croissance',
              'choisir des conditions de culture',
              'interpreter une courbe',
            ],
          },
          {
            id: 't3-identification',
            code: 'T3',
            title: 'Strategies d identification',
            summary:
              'Comparer plusieurs approches d identification en biotechnologies.',
            skills: [
              'confronter des tests',
              'choisir un critere',
              'construire une conclusion',
            ],
          },
          {
            id: 't4-denombrement',
            code: 'T4',
            title: 'Quantifier une population biologique',
            summary:
              'Passer d une mesure experimentale a une estimation interpretable.',
            skills: [
              'choisir une technique',
              'traiter des donnees',
              'exprimer un resultat final',
            ],
          },
          {
            id: 't5-solutions-biologie-moleculaire',
            code: 'T5',
            title: 'Solutions, tampons et besoins de biologie moleculaire',
            summary:
              'Relier composition d un milieu et objectif experimental.',
            skills: [
              'preparer un tampon',
              'justifier une composition',
              'securiser les manipulations',
            ],
          },
          {
            id: 't6-biomolecules',
            code: 'T6',
            title: 'Biomolecules et caracterisation',
            summary:
              'Utiliser differents indicateurs pour etudier des biomolecules.',
            skills: [
              'choisir un test',
              'analyser un resultat',
              'comparer plusieurs methodes',
            ],
          },
          {
            id: 't7-extraire-separer-purifier',
            code: 'T7',
            title: 'Extraire, separer, purifier',
            summary:
              'Relier une technique de traitement a la nature de l echantillon.',
            skills: [
              'justifier une etape',
              'optimiser un protocole',
              'evaluer un resultat',
            ],
          },
          {
            id: 't8-concentration',
            code: 'T8',
            title: 'Concentration et conservation des echantillons',
            summary:
              'Choisir une methode adaptee pour conserver la qualite d un echantillon.',
            skills: [
              'choisir un mode de conservation',
              'limiter les degradations',
              'tracer les conditions',
            ],
          },
          {
            id: 't9-technologies-adn',
            code: 'T9',
            title: 'Technologies de l ADN',
            summary:
              'Mettre en relation outils moleculaires, objectifs et limites d interpretation.',
            skills: [
              'expliquer un principe moleculaire',
              'lire un resultat',
              'justifier un choix technique',
            ],
          },
          {
            id: 't10-technologies-vegetales',
            code: 'T10',
            title: 'Technologies vegetales',
            summary:
              'Decouvrir les applications biotechnologiques liees au vegetal.',
            skills: [
              'comparer des applications',
              'expliquer une technique',
              'relier science et usage',
            ],
          },
        ],
      },
      {
        id: 'partie-l',
        title: 'Partie L - Laboratoire et projet',
        chapters: [
          {
            id: 'l1-projet',
            code: 'L1',
            title: 'Conduire et presenter un projet technologique',
            summary:
              'Structurer une demarche de projet, justifier ses choix et communiquer ses resultats.',
            skills: [
              'organiser un projet',
              'argumenter une demarche',
              'presenter un resultat',
            ],
          },
          {
            id: 'l2-risques',
            code: 'L2',
            title: 'Maitriser les risques et les responsabilites',
            summary:
              'Ancrer les pratiques de securite dans un contexte professionnel et scolaire.',
            skills: [
              'evaluer un risque',
              'mettre en place une prevention',
              'agir avec responsabilite',
            ],
          },
          {
            id: 'l3-mesures',
            code: 'L3',
            title: 'Valider une mesure et un resultat',
            summary:
              'Travailler la fiabilite, la reproductibilite et la communication d un resultat.',
            skills: [
              'comparer des mesures',
              'discuter une variabilite',
              'valider une conclusion',
            ],
          },
          {
            id: 'l4-numerique',
            code: 'L4',
            title: 'Numerique, donnees et communication scientifique',
            summary:
              'Traiter des donnees et produire des supports clairs pour l oral et l ecrit.',
            skills: [
              'traiter un jeu de donnees',
              'representer une information',
              'communiquer clairement',
            ],
          },
        ],
      },
    ],
  },
];

export const getCourseLevel = (levelId) =>
  COURSE_LEVELS.find((level) => level.id === levelId) || null;

export const getCourseChapter = (levelId, chapterId) => {
  const level = getCourseLevel(levelId);

  if (!level) {
    return null;
  }

  for (const section of level.sections) {
    const chapter = section.chapters.find((item) => item.id === chapterId);

    if (chapter) {
      return {
        level,
        section,
        chapter,
      };
    }
  }

  return null;
};

export const getCourseReferencesForLevel = (level) =>
  (level?.sourceIds || [])
    .map((sourceId) => COURSE_REFERENCES.find((reference) => reference.id === sourceId))
    .filter(Boolean);

export const getCourseLevels = () => COURSE_LEVELS;
