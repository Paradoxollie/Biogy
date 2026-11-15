import { hasPremiereLesson } from './premiere';
import { BIOBIO_LESSONS } from './premiere/biobioLessons';

export const COURSE_REFERENCES = [
  {
    id: 'stl-hub',
    title: 'Programmes et ressources en série STL',
    source: 'Éduscol',
    url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl',
  },
  {
    id: 'premiere-biobio',
    title: 'Programme de biochimie-biologie de Première STL',
    source: 'Éduscol',
    url: 'https://eduscol.education.fr/document/23089/download',
  },
  {
    id: 'premiere-biotech',
    title: 'Programme de biotechnologies de Première STL',
    source: 'Éduscol',
    url: 'https://eduscol.education.fr/document/23092/download',
  },
  {
    id: 'terminale-bbb',
    title: 'Programme de biochimie, biologie et biotechnologies de Terminale STL',
    source: 'Éduscol',
    url: 'https://eduscol.education.fr/document/23101/download',
  },
  {
    id: 'discipline',
    title: 'Biotechnologies, sciences et techniques médico-sociales',
    source: 'Éduscol',
    url: 'https://eduscol.education.fr/2340/biotechnologies-sciences-et-techniques-medico-sociales',
  },
  {
    id: 'delagrave-biotech-1re',
    title: 'Biotechnologies 1re STL — manuel numérique élève',
    source: 'Delagrave',
    url: 'https://www.editions-delagrave.fr/site/302881',
  },
  {
    id: 'lyon-programme',
    title: 'Explications pour la lecture du programme de Première STL biotechnologies',
    source: 'Académie de Lyon',
    url: 'https://pedagogie.ac-lyon.fr/biotechnologies/stl/',
  },
  {
    id: 'grenoble-microscope',
    title: 'Microscopie optique',
    source: 'Académie de Grenoble',
    url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/content/microscopie-optique',
  },
  {
    id: 'dijon-microscope',
    title: 'Le microscope photonique',
    source: 'Académie de Dijon',
    url: 'https://stl-bjb.ac-dijon.fr/spip.php?article185',
  },
  {
    id: 'edubase-techniques',
    title: 'Accompagnement des techniques de biotechnologies',
    source: 'Edubase',
    url: 'https://edubase.eduscol.education.fr/fiche/21971',
  },
  {
    id: 'edubase-decouverte',
    title: 'À la découverte des biotechnologies — Éléa',
    source: 'Edubase',
    url: 'https://edubase.eduscol.education.fr/fiche/22146',
  },
  {
    id: 'normandie-decouverte',
    title: 'Dossier : découverte des biotechnologies',
    source: 'Académie de Normandie',
    url: 'https://sms-bse-bgb.ac-normandie.fr/Dossier-decouverte-des-biotechnologies',
  },
];

const TERMINALE_S1_CONTENT = {
  intro:
    'En terminale STL, les enzymes sont au coeur des transformations biochimiques du vivant. Ce chapitre installe un socle indispensable pour comprendre le metabolisme, interpreter une voie metabolique simple et relier un resultat experimental a une activite enzymatique.',
  objectives: [
    'Definir le role d une enzyme.',
    'Expliquer la specificite d une enzyme.',
    'Relier activite enzymatique et conditions du milieu.',
    'Lire une voie metabolique simple.',
  ],
  diagrams: [
    {
      title: 'Schema - Enzyme, substrat et produit',
      caption:
        'Ce schema rappelle la logique generale de la reaction enzymatique : reconnaissance du substrat, formation transitoire du complexe puis liberation du produit.',
      diagramSpec: {
        kind: 'flow',
        title: 'Principe d une reaction enzymatique',
        footer: 'La specificite depend de la reconnaissance entre le substrat et le site actif.',
        nodes: [
          { title: 'Substrat', text: 'Molecule de depart', tone: 'blue' },
          { title: 'Enzyme', text: 'Site actif complementaire', tone: 'teal' },
          { title: 'Complexe', text: 'Association transitoire', tone: 'amber' },
          { title: 'Produit', text: 'Molecule transformee', tone: 'green' },
        ],
      },
    },
    {
      title: 'Schema - Lire une voie metabolique simple',
      caption:
        'Une voie metabolique se lit comme une suite de transformations reliees entre elles par des enzymes et par des etapes de regulation.',
      diagramSpec: {
        kind: 'flow',
        title: 'Organisation generale d une voie metabolique',
        footer: 'Le produit d une etape devient souvent le substrat de la suivante.',
        nodes: [
          { title: 'Molecule A', text: 'Substrat initial', tone: 'blue' },
          { title: 'Enzyme 1', text: 'Premiere transformation', tone: 'teal' },
          { title: 'Intermediaire', text: 'Produit de transition', tone: 'amber' },
          { title: 'Enzyme 2', text: 'Nouvelle etape', tone: 'violet' },
          { title: 'Molecule finale', text: 'Produit final', tone: 'green' },
        ],
      },
    },
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
    title: 'Première STL',
    shortTitle: 'Première',
    intro:
      'En Première STL, les cours sont rangés pour retrouver clairement les modules de biotechnologies, les thèmes de biochimie-biologie et les repères transversaux à mobiliser dans les deux spécialités.',
    sourceIds: [
      'stl-hub',
      'premiere-biobio',
      'premiere-biotech',
      'delagrave-biotech-1re',
      'lyon-programme',
    ],
    sections: [
      {
        id: 'biotechnologies-transversal',
        title: 'Travailler ensemble au laboratoire de biotechnologies',
        chapters: [
          {
            id: 'module-a-projet',
            code: 'A',
            title: "S'initier à la recherche expérimentale et à la démarche de projet en biotechnologies",
            summary:
              'Module transversal A : découvrir la spécialité, questionner une situation et s’initier à la démarche de projet.',
            skills: [
              'questionner une situation de biotechnologies',
              'analyser un document scientifique simple',
              'relier un exemple au domaine biotech correspondant',
            ],
            lessons: [
              {
                id: 'c1-decouverte-biotechnologies',
                code: 'C1',
                title: 'Découverte des biotechnologies',
                summary:
                  'Premier cours de la spécialité : définition, domaines d’application, exemples et enjeux des biotechnologies.',
              },
            ],
          },
          {
            id: 'module-b-risques',
            code: 'B',
            title: 'Prévenir les risques au laboratoire de biotechnologies',
            summary:
              'Module transversal B : prévenir les risques, travailler en sécurité et gérer les déchets au laboratoire.',
            skills: [
              'identifier un danger',
              'analyser une situation de travail',
              'choisir une prevention adaptee',
            ],
            lessons: [
              {
                id: 'c4-risques-securite-laboratoire',
                code: 'C4',
                title: 'Risques et sécurité au laboratoire de biotechnologies',
                summary:
                  'Danger, risque et dommage, méthode des 5 M, dangers chimiques et biologiques, prévention.',
              },
              {
                id: 'at7-gestion-risques-laboratoire',
                code: 'AT7',
                title: 'Gestion des risques au laboratoire',
                summary:
                  'Activité technologique : analyse a priori des risques d’une manipulation et choix des mesures de prévention.',
              },
            ],
          },
          {
            id: 'module-c-mesures',
            code: 'C',
            title: 'Obtenir des résultats de mesure fiables',
            summary:
              'Module transversal C : qualité des mesures, erreurs, incertitudes et validation des résultats.',
            skills: [
              'analyser une mesure',
              'repérer une source d’erreur',
              'ameliorer la fiabilite d une procedure',
            ],
          },
          {
            id: 'module-d-numerique',
            code: 'D',
            title: 'Utiliser des outils numériques en biotechnologies',
            summary:
              'Module transversal D : utiliser le numérique pour traiter, organiser et communiquer des données.',
            skills: [
              'organiser des données',
              'traiter une information numérique',
              'presenter un resultat clairement',
            ],
          },
        ],
      },
      {
        id: 'biotechnologies-fondamentaux',
        title: 'Acquérir les fondamentaux technologiques et scientifiques des biotechnologies',
        chapters: [
          {
            id: 'module-1-diversite',
            code: '1',
            title: "Observer la diversité du vivant à l'échelle microscopique",
            summary:
              'Microscope optique, état frais, coloration de Gram, mesure de taille, dessin d’observation et diversité cellulaire.',
            skills: [
              'observer au laboratoire',
              'comparer des organisations biologiques',
              'decrire avec precision',
            ],
          },
          {
            id: 'module-2-culture',
            code: '2',
            title: 'Cultiver des micro-organismes',
            summary:
              'Asepsie, stérilisation, milieux de culture, ensemencement et isolement des micro-organismes.',
            skills: [
              'respecter l’asepsie',
              'cultiver un micro-organisme',
              'choisir des conditions de culture',
            ],
          },
          {
            id: 'module-3-identification',
            code: '3',
            title: 'Caractériser pour identifier les micro-organismes',
            summary:
              'Caractères morphologiques, nomenclature et classification au service de l’identification microbienne.',
            skills: [
              'observer une culture',
              'relier un test à une information',
              'construire une conclusion prudente',
            ],
          },
          {
            id: 'module-4-denombrement',
            code: '4',
            title: 'Réaliser un dénombrement de micro-organismes présents dans un produit biologique',
            summary:
              'Dilutions en série, méthodes de dénombrement et expression d’un résultat en microbiologie.',
            skills: [
              'choisir une méthode de dénombrement',
              'compter et exprimer un résultat',
              'exploiter un critere microbiologique simple',
            ],
          },
          {
            id: 'module-5-solutions',
            code: '5',
            title: 'Préparer des solutions utilisables au laboratoire',
            summary:
              'Concentrations, préparation de solutions par dissolution ou dilution, verrerie et rigueur.',
            skills: [
              'calculer une concentration',
              'réaliser une dilution',
              'tracer une preparation',
            ],
          },
          {
            id: 'module-6-biomolecules',
            code: '6',
            title: 'Détecter et caractériser les biomolécules',
            summary:
              'Tests de détection et caractérisation des biomolécules au laboratoire.',
            skills: [
              'choisir un test',
              'observer un résultat',
              'relier un test a une biomolecule',
            ],
          },
          {
            id: 'module-7-separation',
            code: '7',
            title: "Séparer les composants d'un mélange",
            summary:
              'Principes et mise en œuvre des techniques de séparation, dont la chromatographie.',
            skills: [
              'choisir une technique de séparation',
              'justifier une méthode',
              'interpreter une separation simple',
            ],
          },
          {
            id: 'module-8-concentration',
            code: '8',
            title: "Déterminer la concentration d'une biomolécule dans un produit biologique",
            summary:
              'Stratégies de dosage et exploitation quantitative des résultats.',
            skills: [
              'choisir une méthode de dosage',
              'exploiter une relation quantitative',
              'conclure sur une concentration',
            ],
            lessons: [
              {
                id: 'c8-dosage-volumetrique',
                code: 'C8',
                title: 'Dosage volumétrique',
                summary:
                  'Vocabulaire de la volumétrie, réaction support du dosage, équivalence et calcul de concentration.',
              },
            ],
          },
        ],
      },
      {
        id: 'biochimie-biologie-thematiques',
        title: 'Biochimie-biologie — thèmes',
        chapters: [
          {
            id: 'bb1-nutrition',
            code: '01',
            title: 'Mécanismes moléculaires et physiologiques de la nutrition',
            summary:
              'Thème 1 : des besoins nutritionnels à la digestion, puis à l’absorption, l’excrétion et l’homéostasie.',
            skills: [
              'expliquer digestion et absorption',
              'relier organes, tissus et molécules',
              'mettre en relation nutrition et milieu interieur',
            ],
            lessons: BIOBIO_LESSONS.theme1,
          },
          {
            id: 'bb2-reproduction-genetique',
            code: '02',
            title:
              'Mécanismes physiologiques et moléculaires de la reproduction et de la transmission des caractères héréditaires',
            summary:
              'Thème 2 : du génotype au phénotype, organes reproducteurs, régulation hormonale, gamétogenèse et hérédité.',
            skills: [
              'décrire la reproduction',
              'relier gène et caractère',
              'argumenter a partir de documents',
            ],
            lessons: BIOBIO_LESSONS.theme2,
          },
        ],
      },
      {
        id: 'biochimie-biologie-transversaux',
        title: 'Biochimie-biologie — modules transversaux',
        chapters: [
          {
            id: 'bba-biomolecules',
            code: 'A',
            title: 'Relations structures et propriétés des biomolécules',
            summary:
              'Module transversal A : les bases structurales des biomolécules, utiles dans tous les thèmes.',
            skills: [
              'identifier les grandes familles de biomolécules',
              'relier structure et propriété',
              'reutiliser ces notions dans un contexte biologique',
            ],
            lessons: BIOBIO_LESSONS.transversalA,
          },
          {
            id: 'bbb-structures-fonctions',
            code: 'B',
            title: 'Relations structures et fonctions physiologiques',
            summary:
              'Module transversal B : relier observation, organisation du vivant et fonction biologique.',
            skills: [
              'décrire un niveau d’organisation',
              'relier structure et fonction',
              'justifier une fonction par une observation',
            ],
            lessons: BIOBIO_LESSONS.transversalB,
          },
          {
            id: 'bbc-homeostasie',
            code: 'C',
            title: 'Milieu intérieur et homéostasie',
            summary:
              'Module transversal C : les repères utiles pour comprendre les échanges et les grandes régulations.',
            skills: [
              'définir l’homéostasie',
              'repérer une régulation',
              'analyser une perturbation simple',
            ],
            lessons: BIOBIO_LESSONS.transversalC,
          },
          {
            id: 'bbd-information-communication',
            code: 'D',
            title: 'Information et communication',
            summary:
              'Module transversal D : les méthodes pour lire, traiter et présenter un résultat scientifique.',
            skills: [
              'lire un document scientifique',
              'faire un schéma utile',
              'rediger une explication precise',
            ],
            lessons: BIOBIO_LESSONS.transversalD,
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

// Les leçons réécrites au format 2 remplacent l'ancien contenu (Première).
// Le contenu est un repère léger : la leçon complète est chargée à l'ouverture.
const lessonStub = (id) => ({ version: 2, lazy: true, id });
const applyRewrittenLessons = (levels) => {
  levels.forEach((level) => level.sections.forEach((section) => section.chapters.forEach((chapter) => {
    if (hasPremiereLesson(chapter.id)) chapter.content = lessonStub(chapter.id);
    (chapter.lessons || []).forEach((lesson) => {
      if (hasPremiereLesson(lesson.id)) lesson.content = lessonStub(lesson.id);
    });
  })));
};
applyRewrittenLessons(COURSE_LEVELS);

const LEGACY_SELECTIONS = {
  premiere: {
    'bt1-microscopie': {
      chapterId: 'module-a-projet',
      lessonId: 'c1-decouverte-biotechnologies',
    },
    'bt2-cultiver-microorganismes': {
      chapterId: 'module-2-culture',
    },
    'bt3-identifier-microorganismes': {
      chapterId: 'module-3-identification',
    },
    'bt4-denombrement': {
      chapterId: 'module-4-denombrement',
    },
    'bt5-solutions': {
      chapterId: 'module-5-solutions',
    },
    'bt6-biomolecules': {
      chapterId: 'module-6-biomolecules',
    },
    'bt7-separation': {
      chapterId: 'module-7-separation',
    },
    'bt8-concentration': {
      chapterId: 'module-8-concentration',
    },
    'bta-projet': {
      chapterId: 'module-a-projet',
    },
    'btb-risques': {
      chapterId: 'module-b-risques',
    },
    'btc-mesures': {
      chapterId: 'module-c-mesures',
    },
    'btd-numerique': {
      chapterId: 'module-d-numerique',
    },
  },
};

export const resolveCourseSelection = (levelId, chapterId, lessonId) => {
  const alias = LEGACY_SELECTIONS[levelId]?.[chapterId];

  if (!alias) {
    return {
      levelId,
      chapterId,
      lessonId: lessonId || null,
      redirected: false,
    };
  }

  return {
    levelId,
    chapterId: alias.chapterId,
    lessonId: alias.lessonId || lessonId || null,
    redirected: alias.chapterId !== chapterId || Boolean(alias.lessonId && alias.lessonId !== lessonId),
  };
};

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

export const getCourseLesson = (levelId, chapterId, lessonId) => {
  const result = getCourseChapter(levelId, chapterId);

  if (!result || !result.chapter.lessons?.length || !lessonId) {
    return null;
  }

  return result.chapter.lessons.find((lesson) => lesson.id === lessonId) || null;
};

export const getCourseReferencesForLevel = (level) =>
  (level?.sourceIds || [])
    .map((sourceId) => COURSE_REFERENCES.find((reference) => reference.id === sourceId))
    .filter(Boolean);

export const getCourseLevels = () => COURSE_LEVELS;
