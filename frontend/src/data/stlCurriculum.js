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
  {
    id: 'edubase-decouverte',
    title: 'A la decouverte des biotechnologies - Elea',
    source: 'Edubase',
    url: 'https://edubase.eduscol.education.fr/fiche/22146',
  },
  {
    id: 'normandie-decouverte',
    title: 'Dossier : decouverte des biotechnologies',
    source: 'Academie de Normandie',
    url: 'https://sms-bse-bgb.ac-normandie.fr/Dossier-decouverte-des-biotechnologies',
  },
];

const PREMIERE_BT1_CONTENT = {
  intro:
    'Dans ce chapitre, tu vas decouvrir ce que sont les biotechnologies. Tu verras qu elles existent depuis longtemps, qu elles utilisent le vivant pour rendre un service a l etre humain, et qu elles se retrouvent dans cinq grands domaines qu il faut savoir reconnaitre en STL.',
  objectives: [
    'Definir les biotechnologies.',
    'Identifier et definir les cinq domaines officiels des biotechnologies.',
    'Relier une application concrete au bon domaine.',
    'Reflechir aux enjeux et aux limites de ces techniques.',
  ],
  chapterQuestionsTitle: 'Questions du chapitre',
  chapterQuestions: [
    'Que sont exactement les biotechnologies ?',
    'Dans quels grands domaines les retrouve-t-on ?',
    'Pourquoi parle-t-on aussi d enjeux, de limites et d ethique ?',
  ],
  vocabulary: [
    {
      term: 'Biotechnologies',
      definition:
        'Utilisation du vivant, ou de ses proprietes, avec des connaissances scientifiques et techniques pour produire un bien ou un service utile.',
    },
    {
      term: 'Fermentation',
      definition:
        'Transformation realisee par des micro-organismes. Elle est utilisee depuis longtemps pour fabriquer des aliments ou des boissons.',
    },
    {
      term: 'Domaine d application',
      definition:
        'Grand secteur dans lequel on classe une biotechnologie, par exemple la sante ou l environnement.',
    },
    {
      term: 'Micro-organisme',
      definition:
        'Etre vivant microscopique, comme une bacterie ou une levure, souvent utilise en biotechnologies.',
    },
    {
      term: 'Ethique',
      definition:
        'Reflexion sur ce qu il est juste, responsable ou acceptable de faire avec une technique.',
    },
    {
      term: 'Application',
      definition:
        'Exemple concret d utilisation d une biotechnologie dans la vie reelle.',
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
      tag: 'Activite 1',
      title: 'Presentation des biotechnologies',
      supports: [
        { label: 'Support : video ou document de decouverte' },
        { label: 'Trace eleve : questions guidees' },
      ],
      body: [
        'Les biotechnologies ne sont pas seulement des techniques recentes. Des procedes anciens, comme la fabrication du pain, de la biere, du vin ou du yaourt, reposent deja sur l utilisation du vivant.',
        'Aujourd hui, les biotechnologies vont beaucoup plus loin. Elles s appuient sur la biologie, la microbiologie, la genetique, la biochimie et la biologie moleculaire pour repondre a des besoins en sante, en alimentation, en industrie et en environnement.',
        'L idee essentielle a retenir est simple : une biotechnologie mobilise le vivant ou les proprietes du vivant pour produire quelque chose d utile.',
      ],
      questionsTitle: 'Questions de travail',
      questions: [
        'Quelles grandes questions de societe les biotechnologies cherchent-elles a resoudre ?',
        'Pourquoi peut-on dire que les biotechnologies sont a la fois anciennes et modernes ?',
        'Quels exemples de produits ou de services issus des biotechnologies peux-tu citer ?',
        'Pourquoi la connaissance de l ADN a-t-elle fait progresser les biotechnologies ?',
        'Quel interet y a-t-il a modifier genetiquement un micro-organisme ?',
        'Propose une definition simple des biotechnologies.',
      ],
      takeaway:
        'Les biotechnologies utilisent le vivant, ou ses proprietes, pour produire des biens ou des services utiles a l etre humain. Elles sont anciennes par leurs usages, mais modernes par les connaissances scientifiques qu elles mobilisent.',
    },
    {
      tag: 'Activite 2',
      title: 'Les disciplines mobilisees en biotechnologies',
      supports: [{ label: 'Support : vocabulaire scientifique' }],
      body: [
        'Les biotechnologies ne forment pas une discipline isolee. Elles croisent plusieurs sciences qui se completent au laboratoire.',
        'En premiere STL, il faut savoir reconnaitre ces disciplines et comprendre ce qu elles apportent dans l etude ou l utilisation du vivant.',
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
      questionsTitle: 'Questions de travail',
      questions: [
        'Associe chaque discipline a sa definition.',
        'Pourquoi les biotechnologies mobilisent-elles plusieurs disciplines en meme temps ?',
        'Quelle difference peux-tu faire entre genetique, biologie moleculaire et microbiologie ?',
      ],
      takeaway:
        'Les biotechnologies sont une demarche interdisciplinaire. Pour comprendre un meme probleme, il faut souvent mobiliser plusieurs regards scientifiques.',
    },
    {
      tag: 'Activite 3',
      title: 'Les cinq domaines d application des biotechnologies',
      supports: [
        { label: 'Document : exemple medical de fabrication in vitro' },
        { label: 'Repere : classification par couleurs' },
      ],
      body: [
        'Pour mieux se reperer, on classe les biotechnologies en cinq grands domaines. Chacun est associe a une couleur. Cette classification est tres importante en STL.',
        'Par exemple, la production de globules rouges in vitro releve du domaine de la sante : on utilise des connaissances sur les cellules pour produire un element utile a la medecine.',
        'Une meme application peut parfois faire intervenir plusieurs domaines, mais il faut savoir identifier le domaine principal.',
      ],
      cards: [
        {
          title: 'Rouges',
          text: 'Sante humaine et animale. Exemples : diagnostic, production de medicaments, fabrication de globules rouges, insuline.',
          tone: 'border-red-200 bg-red-50',
        },
        {
          title: 'Bleues',
          text: 'Milieux marins. Exemples : aquaculture, ressources marines, molecules d interet issues de la mer.',
          tone: 'border-blue-200 bg-blue-50',
        },
        {
          title: 'Vertes',
          text: 'Agriculture et agroalimentaire. Exemples : cultures, alimentation, OGM, aliments fermentes.',
          tone: 'border-green-200 bg-green-50',
        },
        {
          title: 'Jaunes',
          text: 'Environnement. Exemples : depollution de l eau, traitement des dechets, surveillance des pollutions.',
          tone: 'border-amber-200 bg-amber-50',
        },
        {
          title: 'Blanches',
          text: 'Industrie. Exemples : enzymes industrielles, biocarburants, lait sans lactose, pigments, bioethanol.',
          tone: 'border-slate-300 bg-slate-50',
        },
      ],
      questionsTitle: 'Questions de travail',
      questions: [
        'Explique pourquoi la fabrication de globules rouges in vitro est bien une biotechnologie.',
        'Quels avantages peut-on attendre d une production de globules rouges hors de l organisme ?',
        'Relie chaque couleur a son domaine principal.',
        'Donne au moins un exemple d application pour chacun des cinq domaines.',
      ],
      takeaway:
        'Les cinq domaines a connaitre sont : rouge pour la sante, bleu pour le milieu marin, vert pour l agriculture et l agroalimentaire, jaune pour l environnement, blanc pour l industrie.',
    },
    {
      tag: 'Activite 4',
      title: 'Les enjeux, les limites et les questions ethiques',
      supports: [{ label: 'Debat : usages et limites des biotechnologies' }],
      body: [
        'Les biotechnologies peuvent apporter des solutions reelles : mieux soigner, produire autrement, depolluer ou limiter certaines penuries.',
        'Mais elles posent aussi des questions. Il faut toujours se demander quels sont les risques, qui beneficie de la technique, quelles limites il faut poser et quels effets peuvent apparaitre sur l environnement ou la societe.',
        'En STL, on attend de toi un raisonnement argumente. Il faut savoir citer des avantages, mais aussi des risques et des limites.',
      ],
      questionsTitle: 'Questions de travail',
      questions: [
        'Quels benefices les biotechnologies peuvent-elles apporter a la societe ?',
        'Quelles derives ou quels risques peuvent accompagner certaines applications ?',
        'Pourquoi ne peut-on pas juger une biotechnologie uniquement parce qu elle est efficace ?',
        'Pourquoi les questions ethiques ont-elles toute leur place dans ce chapitre ?',
      ],
      takeaway:
        'Une biotechnologie ne se juge pas seulement sur son efficacite. Il faut aussi prendre en compte la securite, l environnement, la societe et les questions ethiques.',
    },
    {
      tag: 'Application',
      title: 'Etudier des exemples d entreprises ou de projets biotechnologiques',
      supports: [{ label: 'Travail guide : documents a analyser' }],
      body: [
        'Pour verifier que tu as compris le chapitre, il faut etre capable d analyser un exemple concret.',
        'La bonne methode consiste a reperer le vivant utilise, le service rendu a l etre humain, puis le domaine de biotechnologies correspondant.',
      ],
      cards: [
        {
          title: 'DEINOVE',
          text: 'Des bacteries sont etudiees pour produire de nouveaux antibiotiques et lutter contre les resistances.',
        },
        {
          title: 'Watchfrog',
          text: 'Des tetards et des biomarqueurs servent a detecter rapidement certaines pollutions de l eau.',
        },
        {
          title: 'Futurol',
          text: 'Des enzymes, des levures et une biomasse vegetale sont utilises pour produire du bioethanol.',
        },
      ],
      questionsTitle: 'Questions de travail',
      questions: [
        'Retrouve dans chaque exemple l organisme vivant utilise ou la propriete du vivant mobilisee.',
        'Indique pour chaque exemple le benefice attendu pour l etre humain.',
        'Associe chaque exemple a un domaine de biotechnologies et a sa couleur.',
        'Justifie ton choix avec une phrase precise.',
      ],
      takeaway:
        'Pour reconnaitre une biotechnologie dans un document, il faut toujours chercher trois choses : le vivant mobilise, l utilite du projet et le domaine auquel il appartient.',
    },
  ],
  method: {
    title: 'Methode - Analyser un document de biotechnologies',
    steps: [
      'Repere le probleme ou le besoin auquel le document cherche a repondre.',
      'Identifie le vivant utilise ou la propriete du vivant mobilisee.',
      'Cherche le benefice attendu pour l etre humain, la sante, l environnement ou l industrie.',
      'Associe ensuite le bon domaine de biotechnologies et la bonne couleur.',
      'Ajoute, si besoin, une limite, un risque ou une question ethique.',
      'Conclue par une phrase claire : vivant utilise + service rendu + domaine.',
    ],
  },
  commonMistakes: [
    'Donner une couleur sans expliquer le domaine.',
    'Confondre biotechnologies et simple innovation technique sans vivant.',
    'Apprendre la liste des couleurs sans savoir donner d exemples.',
    'Citer seulement les avantages sans parler des limites ou des risques.',
  ],
  keyPointsTitle: 'Conclusion',
  keyPoints: [
    'Les biotechnologies utilisent le vivant ou les proprietes du vivant pour produire des biens ou des services utiles.',
    'Elles mobilisent plusieurs disciplines scientifiques : biologie, microbiologie, biochimie, genetique, biologie moleculaire et bioinformatique.',
    'On distingue cinq grands domaines : rouge, bleu, vert, jaune et blanc.',
    'Leur utilisation apporte des benefices reels, mais elle doit aussi etre pensee avec prudence et responsabilite.',
  ],
  selfCheckTitle: 'Je verifie que j ai compris',
  selfCheck: [
    'Je sais definir les biotechnologies avec une phrase simple et correcte.',
    'Je sais citer les cinq domaines et donner un exemple pour chacun.',
    'Je sais expliquer pourquoi certaines biotechnologies sont anciennes et d autres tres recentes.',
    'Je sais montrer qu une application biotech a des avantages, mais aussi des limites.',
  ],
  practiceTitle: 'Petit entrainement',
  practiceIntro:
    'Pour chacun des cas suivants, indique le vivant mobilise, le domaine principal et une phrase de justification.',
  practice: [
    {
      question:
        'Une levure est utilisee pour fabriquer une molecule medicamenteuse.',
      expected:
        'C est une biotechnologie rouge, car un organisme vivant est utilise pour un objectif de sante.',
    },
    {
      question:
        'Des bacteries sont utilisees pour depolluer un milieu aquatique.',
      expected:
        'C est une biotechnologie jaune, car il s agit d une application environnementale.',
    },
    {
      question:
        'Une biomasse vegetale est transformee en bioethanol grace a des levures et des enzymes.',
      expected:
        'C est une biotechnologie blanche, car le vivant est mobilise pour une production industrielle.',
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
      title: 'A la decouverte des biotechnologies - Elea',
      url: 'https://edubase.eduscol.education.fr/fiche/22146',
    },
    {
      title: 'Dossier : decouverte des biotechnologies',
      url: 'https://sms-bse-bgb.ac-normandie.fr/Dossier-decouverte-des-biotechnologies',
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
            code: 'C1',
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
