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
    'Dans ce premier chapitre, tu decouvres ce que recouvre le mot biotechnologies, les cinq grands domaines officiellement utilises en STL et les questions que ces applications peuvent poser dans la societe. L objectif n est pas de tout memoriser d un coup, mais de comprendre le cadre general de la specialite.',
  objectives: [
    'Definir les biotechnologies avec des mots simples et justes.',
    'Identifier les cinq grands domaines des biotechnologies.',
    'Relier une application a son domaine.',
    'Commencer a reflechir aux enjeux et aux limites de ces techniques.',
  ],
  vocabulary: [
    {
      term: 'Biotechnologies',
      definition:
        'Ensemble de techniques qui utilisent le vivant, ou des elements du vivant, pour produire un bien, un service ou une solution utile a l etre humain.',
    },
    {
      term: 'Application',
      definition:
        'Usage concret d une connaissance ou d une technique dans un domaine donne.',
    },
    {
      term: 'Fermentation',
      definition:
        'Transformation biologique realisee par des micro-organismes, utilisee depuis tres longtemps pour fabriquer certains aliments ou boissons.',
    },
    {
      term: 'Micro-organisme',
      definition:
        'Etre vivant microscopique, par exemple une bacterie ou une levure, souvent utilise en biotechnologies.',
    },
    {
      term: 'Ethique',
      definition:
        'Reflexion sur ce qu il est juste, responsable ou acceptable de faire.',
    },
    {
      term: 'Domaine',
      definition:
        'Grand secteur d application dans lequel on classe les biotechnologies.',
    },
  ],
  diagrams: [
    {
      id: 'domains',
      title: 'Schema 1 - Les cinq domaines des biotechnologies',
      caption:
        'En STL, on distingue cinq grandes familles de biotechnologies. Elles sont souvent reperees par une couleur.',
    },
  ],
  sections: [
    {
      title: '1. Decouvrir ce que sont les biotechnologies',
      body: [
        'Les biotechnologies ne sont pas seulement un ensemble de techniques modernes. Elles existent depuis longtemps, par exemple avec la fabrication du pain, du fromage ou de certaines boissons grace a des fermentations.',
        'Aujourd hui, elles mobilisent des connaissances en biologie, microbiologie, biochimie, genetique et biologie moleculaire pour repondre a des besoins dans la sante, l environnement, l industrie ou l agriculture.',
        'Dans ce chapitre, tu dois d abord comprendre l idee generale avant d entrer plus tard dans les techniques de laboratoire.',
      ],
      questions: [
        'Avec tes mots, propose une premiere definition des biotechnologies.',
        'Pourquoi peut-on dire que les biotechnologies ne sont pas seulement une science recente ?',
        'Quels besoins humains peuvent etre pris en charge par les biotechnologies ?',
      ],
    },
    {
      title: '2. Les disciplines mobilisees en biotechnologies',
      body: [
        'Les biotechnologies ne reposent pas sur une seule discipline. Elles croisent plusieurs champs scientifiques qui se completent.',
        'C est pour cela qu en STL tu travailles a la fois des notions de biologie, de biochimie, de microbiologie, de genetique et d outils numeriques.',
      ],
      cards: [
        {
          title: 'Biologie',
          text: 'Etude du vivant, de son organisation et de son fonctionnement.',
        },
        {
          title: 'Microbiologie',
          text: 'Etude des micro-organismes comme les bacteries, les levures ou certains champignons.',
        },
        {
          title: 'Biochimie',
          text: 'Etude des molecules du vivant et des reactions chimiques qui les concernent.',
        },
        {
          title: 'Genetique',
          text: 'Etude de l heredite, des genes et de la transmission des caracteres.',
        },
        {
          title: 'Biologie moleculaire',
          text: 'Etude de l ADN, de l ARN et des mecanismes moleculaires de la cellule.',
        },
        {
          title: 'Bioinformatique',
          text: 'Utilisation des outils numeriques pour traiter et exploiter des donnees biologiques.',
        },
      ],
      questions: [
        'Pourquoi les biotechnologies font-elles appel a plusieurs disciplines a la fois ?',
        'Quelle difference fais-tu entre genetique et biologie moleculaire ?',
      ],
    },
    {
      title: '3. Les cinq domaines d application',
      body: [
        'Pour mieux les classer, on regroupe souvent les biotechnologies en cinq domaines, chacun associe a une couleur. Cette classification est tres utile en STL parce qu elle permet de relier rapidement une technique a son grand secteur d application.',
        'Il faut connaitre cette classification, mais aussi comprendre que certaines applications peuvent mobiliser plusieurs domaines en meme temps.',
      ],
      cards: [
        {
          title: 'Rouges',
          text: 'Sante humaine et animale, diagnostic, therapie, production de medicaments.',
          tone: 'border-red-200 bg-red-50',
        },
        {
          title: 'Bleues',
          text: 'Milieux marins, ressources aquatiques, aquaculture, molecules d interet issues de la mer.',
          tone: 'border-blue-200 bg-blue-50',
        },
        {
          title: 'Vertes',
          text: 'Agriculture, production vegetale, alimentation humaine et animale, amelioration des cultures.',
          tone: 'border-green-200 bg-green-50',
        },
        {
          title: 'Jaunes',
          text: 'Environnement, traitement des pollutions, valorisation et elimination de dechets.',
          tone: 'border-amber-200 bg-amber-50',
        },
        {
          title: 'Blanches',
          text: 'Industrie, production de molecules ou de materiaux a l aide de systemes biologiques.',
          tone: 'border-slate-300 bg-slate-50',
        },
      ],
      questions: [
        'Associe un exemple de ton choix a chacun des cinq domaines.',
        'Pourquoi une application concrete peut-elle parfois relever de plusieurs domaines ?',
      ],
    },
    {
      title: '4. Les enjeux et les limites',
      body: [
        'Les biotechnologies apportent des solutions reelles: produire des medicaments, mieux detecter certaines maladies, depolluer, fabriquer autrement ou ameliorer des productions agricoles.',
        'Mais elles soulevent aussi des questions. Il faut prendre en compte la securite, l impact sur l environnement, le cout, les usages possibles et les questions ethiques.',
        'En STL, on n attend pas de toi une opinion rapide. On attend un raisonnement argumente, capable de peser des benefices et des limites.',
      ],
      questions: [
        'Quels benefices concrets les biotechnologies peuvent-elles apporter a la societe ?',
        'Quelles precautions faut-il prendre avant de generaliser une application biotech ?',
        'Pourquoi les questions ethiques font-elles partie du chapitre ?',
      ],
    },
    {
      title: '5. Application - Analyser une entreprise ou un projet biotech',
      body: [
        'Pour terminer le chapitre, il faut etre capable de lire un exemple concret et de montrer en quoi il releve des biotechnologies.',
        'La bonne methode consiste a reperer le vivant utilise, l objectif du projet, le domaine concerne et les avantages ou limites possibles.',
      ],
      cards: [
        {
          title: 'Cas 1 - Sante',
          text: 'Une equipe cherche a produire de nouvelles molecules antibiotiques a partir de micro-organismes peu etudies.',
        },
        {
          title: 'Cas 2 - Environnement',
          text: 'Un test biologique permet de detecter plus rapidement des pollutions dans l eau.',
        },
        {
          title: 'Cas 3 - Industrie',
          text: 'Des micro-organismes et des enzymes sont utilises pour transformer une biomasse vegetale en bioethanol.',
        },
      ],
      questions: [
        'Quel est le domaine de chaque cas ?',
        'Quel vivant, ou quelle propriete du vivant, est mobilise ?',
        'Quel service est rendu a l etre humain ?',
      ],
    },
  ],
  method: {
    title: 'Methode - Analyser un document de biotechnologies',
    steps: [
      'Identifier le probleme ou le besoin auquel on cherche a repondre.',
      'Reperer quel etre vivant, ou quelle molecule du vivant, est utilise.',
      'Nommer le domaine des biotechnologies concerne.',
      'Relever le benefice attendu.',
      'Chercher aussi les limites, risques ou questions ethiques possibles.',
      'Conclure avec une phrase simple et argumentee.',
    ],
  },
  commonMistakes: [
    'Donner une couleur sans expliquer le domaine correspondant.',
    'Confondre biotechnologies et simple innovation technique sans vivant.',
    'Ne citer que les avantages sans discuter les limites.',
    'Donner un exemple sans montrer pourquoi il releve des biotechnologies.',
  ],
  keyPoints: [
    'Les biotechnologies utilisent le vivant ou des elements du vivant.',
    'On distingue cinq grands domaines: rouge, bleu, vert, jaune et blanc.',
    'Une application biotech doit etre reliee a un besoin humain concret.',
    'Les biotechnologies ont des avantages, mais aussi des limites et des enjeux ethiques.',
  ],
  selfCheck: [
    'Peux-tu definir les biotechnologies en une phrase claire ?',
    'Peux-tu citer les cinq domaines et donner un exemple pour chacun ?',
    'Sais-tu expliquer pourquoi une fermentation est une biotechnologie ancienne ?',
    'Sais-tu discuter un avantage et une limite d une application biotech ?',
  ],
  practice: [
    {
      question:
        'Une entreprise utilise des levures pour produire une molecule d interet pour la sante. Pourquoi s agit-il d une biotechnologie ?',
      expected:
        'Parce qu elle utilise un etre vivant, ici la levure, pour produire un bien ou un service utile a l etre humain.',
    },
    {
      question:
        'Un procede permet de depolluer de l eau grace a des bacteries. Quelle couleur peux-tu proposer en premier ?',
      expected:
        'On proposera d abord le domaine jaune, car il s agit d une application environnementale.',
    },
    {
      question:
        'Pourquoi ne suffit-il pas de dire qu une biotechnologie est "utile" pour conclure qu elle est acceptable ?',
      expected:
        'Parce qu il faut aussi prendre en compte les risques, les limites, le cout, l impact sur l environnement et les questions ethiques.',
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
      title: 'Biotechnologies 1re STL - manuel numerique eleve',
      url: 'https://www.editions-delagrave.fr/site/302881',
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
            title: 'Decouverte des biotechnologies',
            summary:
              'Comprendre ce que sont les biotechnologies, leurs grands domaines et leurs enjeux.',
            skills: [
              'definir les biotechnologies',
              'reconnaitre les cinq domaines officiels',
              'relier une application a son domaine',
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
