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
    'Ce premier cours de biotechnologies a pour but de te faire decouvrir la specialite. Tu vas d abord travailler a partir de supports et de questions, puis tu construiras le cours a retenir sur la definition des biotechnologies, leurs domaines d application et leurs enjeux.',
  objectives: [
    'Definir les biotechnologies.',
    'Identifier et definir les cinq domaines des biotechnologies.',
    'Associer une application concrete a son domaine.',
    'S interroger sur les enjeux ethiques des biotechnologies.',
  ],
  chapterQuestionsTitle: 'Questions du cours',
  chapterQuestions: [
    'Qu appelle-t-on exactement biotechnologies ?',
    'Pourquoi dit-on que les biotechnologies sont a la fois anciennes et tres actuelles ?',
    'Quels sont les cinq domaines a connaitre en STL ?',
    'Pourquoi l usage du vivant doit-il etre encadre ?',
  ],
  questionSetsTitle: 'Travail guide',
  questionSetsIntro:
    'Commence par les supports et reponds aux questions. Cette partie sert a observer, relever des informations et construire progressivement le cours. Les reponses ne sont pas donnees ici.',
  questionSets: [
    {
      tag: 'Sequence 1',
      title: 'Presentation des biotechnologies',
      intro:
        'Observe le debut de la video pour identifier les problemes poses et le point commun entre les exemples presentes.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 0 min 00 a 1 min 29.',
        },
      ],
      instruction:
        'Regarde attentivement le passage, note les mots importants puis reponds par des phrases courtes et precises.',
      questions: [
        'Q1. Enonce les deux problematiques soulevees au debut du support.',
        'Q2. Identifie le point commun entre ces deux problematiques.',
        'Q3. Explique en quoi les biotechnologies permettent de repondre a ces questions.',
        'Q4. Cite trois exemples de substances ou de produits obtenus grace aux biotechnologies.',
      ],
    },
    {
      tag: 'Sequence 2',
      title: 'Histoire des biotechnologies',
      intro:
        'Le support montre que les biotechnologies ne sont pas seulement des techniques modernes.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 1 min 29 a 1 min 57.',
        },
      ],
      instruction:
        'Repere les exemples historiques cites dans le support et explique ce qu ils montrent.',
      questions: [
        'Q5. Argumente l affirmation suivante : "Les biotechnologies sont une science ancienne."',
        'Q6. Cite plusieurs produits obtenus grace aux biotechnologies.',
      ],
    },
    {
      tag: 'Sequence 3',
      title: 'Les progres des biotechnologies',
      intro:
        'Cette partie du support insiste sur une decouverte scientifique qui a transforme les biotechnologies.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 1 min 57 a 2 min 42.',
        },
      ],
      instruction:
        'Releve la decouverte citee et explique en quoi elle a fait progresser les biotechnologies.',
      questions: [
        'Q7. Cite la decouverte qui a permis aux biotechnologies de progresser et explique pourquoi.',
        'Q8. Rappelle l interet de modifier genetiquement des micro-organismes.',
      ],
    },
    {
      tag: 'Sequence 4',
      title: 'Les perspectives des biotechnologies',
      intro:
        'Le dernier passage de la video ouvre sur des applications de recherche et sur des perspectives medicales.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 2 min 42 a la fin.',
        },
      ],
      instruction:
        'Observe l exemple donne dans le support puis formule une definition personnelle des biotechnologies.',
      questions: [
        'Q9. Explique en quoi le poisson zebre peut constituer un outil de biotechnologies.',
        'Q10. A l aide des reponses precedentes, propose une definition des biotechnologies.',
      ],
    },
    {
      tag: 'Travail 5',
      title: 'Identifier les disciplines impliquees',
      intro:
        'Les biotechnologies mobilisent plusieurs sciences. Il faut connaitre leur nom et savoir ce qu elles apportent.',
      supports: [
        {
          label: 'Support de travail',
          detail:
            'Associer chaque discipline a sa definition : biologie, genetique, microbiologie, biochimie, biologie moleculaire, bioinformatique.',
        },
      ],
      instruction:
        'Commence par faire les associations, puis explique pourquoi une meme situation biotechnologique peut mobiliser plusieurs disciplines.',
      questions: [
        'Q11. Associe chaque discipline a sa definition puis explique, en une phrase, pourquoi les biotechnologies mobilisent plusieurs sciences a la fois.',
      ],
    },
    {
      tag: 'Travail 6',
      title: 'Etudier un exemple medical',
      intro:
        'Lis le document puis utilise la definition des biotechnologies pour justifier ton raisonnement.',
      supports: [
        {
          label: 'Document d etude',
          detail: 'Fabrication de globules rouges in vitro par des chercheurs a l hopital Saint-Antoine de Paris.',
        },
      ],
      documents: [
        {
          label: 'Document',
          title: 'Fabrication de globules rouges in vitro',
          source: 'Hopital Saint-Antoine, Paris',
          body: [
            'Des chercheurs ont montre la faisabilite de la fabrication de globules rouges hors de l organisme.',
            'Cette production pourrait aider a constituer des reserves de sang plus importantes tout en limitant certaines complications liees aux transfusions.',
            'La generalisation de cette technique suppose encore des progres en ingenierie cellulaire.',
          ],
        },
      ],
      instruction:
        'Appuie-toi sur le document et sur ta definition des biotechnologies pour justifier chacune de tes reponses.',
      questions: [
        'Q12. Montre que la fabrication de globules rouges in vitro est bien une application des biotechnologies.',
        'Q13. Cite les avantages majeurs de l utilisation de globules rouges fabriques in vitro.',
        'Q14. Relie chaque couleur a son domaine puis donne au moins un exemple d application.',
      ],
    },
    {
      tag: 'Travail 7',
      title: 'Reflechir aux enjeux des biotechnologies',
      intro:
        'Les biotechnologies ne posent pas seulement des questions scientifiques. Elles soulevent aussi des enjeux sanitaires, environnementaux et societaux.',
      supports: [
        {
          label: 'Support de reflexion',
          detail:
            'Prendre comme exemple les OGM ou toute autre application et reflechir aux risques, aux limites et aux derives possibles.',
        },
      ],
      instruction:
        'Formule une reponse argumentee en donnant au moins un exemple precis.',
      questions: [
        'Q15. Cite une ou plusieurs derives possibles de l utilisation des biotechnologies dans nos societes.',
      ],
    },
    {
      tag: 'Application',
      title: 'Etudier des entreprises de biotechnologies',
      intro:
        'Chaque document presente rapidement l activite d une entreprise. Le but est de reconnaitre une situation de biotechnologies dans un document reel.',
      supports: [
        {
          label: 'Consigne',
          detail:
            'Par binome, choisissez un document, surlignez les informations utiles puis repondez aux questions sans recopier le texte.',
        },
      ],
      documents: [
        {
          label: 'Document 1',
          title: 'DEINOVE',
          body: [
            'Des bacteries appelees deinocoques sont etudiees pour identifier de nouvelles molecules antibiotiques et antifongiques.',
            'L objectif est de proposer de nouvelles classes de medicaments, notamment contre certaines resistances aux antibiotiques.',
          ],
        },
        {
          label: 'Document 2',
          title: 'Watchfrog',
          body: [
            'Des tetards fluorescents et des biomarqueurs sont utilises pour detecter rapidement certaines pollutions de l eau.',
            'L entreprise developpe des outils de surveillance environnementale, notamment pour reperer des perturbateurs endocriniens.',
          ],
        },
        {
          label: 'Document 3',
          title: 'Futurol',
          body: [
            'Des enzymes, des bacteries et des levures sont mobilisees pour transformer une biomasse vegetale en bioethanol.',
            'Le projet vise une production industrielle d energie et de matieres premieres chimiques.',
          ],
        },
      ],
      instruction:
        'Repere l organisme utilise, l utilite pour l etre humain, puis deduis le domaine de biotechnologies correspondant.',
      questions: [
        'A. Retrouve dans le texte les elements permettant d affirmer qu il s agit d une entreprise de biotechnologies.',
        'B. Identifie, pour chaque entreprise, l organisme utilise ou la propriete du vivant mobilisee ainsi que le benefice pour l etre humain.',
        'C. Deduis le domaine des biotechnologies correspondant et la couleur associee.',
      ],
    },
  ],
  courseSectionsTitle: 'Cours a retenir',
  courseSectionsIntro:
    'Cette partie correspond a la trace de cours. Elle rassemble l essentiel a apprendre apres le travail sur les supports.',
  courseSections: [
    {
      title: '1. Definir les biotechnologies',
      body: [
        'Les biotechnologies regroupent des methodes qui utilisent des organismes vivants, des cellules ou des proprietes du vivant pour produire des biens ou des services utiles a l etre humain.',
        'Elles s appuient sur des connaissances scientifiques pour comprendre le vivant, le transformer, l exploiter ou s en inspirer.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Une biotechnologie mobilise le vivant, ou les proprietes du vivant, pour repondre a un besoin utile a l etre humain.',
    },
    {
      title: '2. Des pratiques anciennes et des techniques modernes',
      body: [
        'Les biotechnologies sont anciennes par leurs usages. La fermentation est connue depuis des millenaires pour fabriquer du pain, du vin, de la biere, des yaourts ou des fromages.',
        'Elles sont aussi tres modernes, car elles se sont developpees avec les progres de la genetique, de la biologie moleculaire et de la microbiologie.',
        'La decouverte de la structure de l ADN en 1953 a permis de mieux comprendre l information genetique et a ouvert la voie a de nombreuses applications biotechnologiques.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Les biotechnologies sont a la fois anciennes par certains procedes et modernes par les connaissances scientifiques qu elles mobilisent.',
    },
    {
      title: '3. Les sciences mobilisees',
      body: [
        'Les biotechnologies ne correspondent pas a une science unique. Elles croisent plusieurs disciplines qui se completent au laboratoire et dans l industrie.',
      ],
      cards: [
        {
          title: 'Biologie',
          text: 'Science des etres vivants.',
        },
        {
          title: 'Genetique',
          text: 'Etude des lois de l heredite et de la transmission des caracteres.',
        },
        {
          title: 'Microbiologie',
          text: 'Etude des micro-organismes.',
        },
        {
          title: 'Biochimie',
          text: 'Etude des molecules chimiques du vivant.',
        },
        {
          title: 'Biologie moleculaire',
          text: 'Etude de l ADN, de l ARN et des mecanismes moleculaires du vivant.',
        },
        {
          title: 'Bioinformatique',
          text: 'Utilisation d outils numeriques pour traiter et exploiter des donnees biologiques.',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Les biotechnologies sont interdisciplinaires : elles mobilisent plusieurs sciences pour comprendre et exploiter le vivant.',
    },
    {
      title: '4. Les cinq domaines des biotechnologies',
      body: [
        'En STL, les biotechnologies sont classees en cinq grands domaines. Chacun est associe a une couleur. Il faut connaitre cette classification et savoir donner au moins un exemple pour chaque domaine.',
      ],
      cards: [
        {
          title: 'Rouge',
          text: 'Sante. Exemples : insuline, vaccins, diagnostic, production de globules rouges.',
          tone: 'border-red-200 bg-red-50',
        },
        {
          title: 'Bleue',
          text: 'Milieux marins. Exemples : aquaculture, ressources marines, molecules d interet issues de la mer.',
          tone: 'border-blue-200 bg-blue-50',
        },
        {
          title: 'Verte',
          text: 'Agriculture et agroalimentaire. Exemples : fermentation alimentaire, OGM, amelioration des cultures.',
          tone: 'border-green-200 bg-green-50',
        },
        {
          title: 'Jaune',
          text: 'Environnement. Exemples : depollution, traitement des eaux, surveillance de pollutions.',
          tone: 'border-amber-200 bg-amber-50',
        },
        {
          title: 'Blanche',
          text: 'Industrie. Exemples : bioethanol, enzymes industrielles, pigments, lait sans lactose.',
          tone: 'border-slate-300 bg-slate-50',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Les cinq domaines a connaitre sont : sante, milieux marins, agriculture et agroalimentaire, environnement et industrie.',
    },
    {
      title: '5. Les enjeux des biotechnologies',
      body: [
        'Les biotechnologies peuvent apporter des benefices importants en sante, en environnement, en alimentation ou en industrie.',
        'Cependant, la manipulation du vivant peut soulever des risques, des limites techniques, des questions de securite et des enjeux ethiques ou societaux.',
        'Le developpement des biotechnologies doit donc etre encadre et discute avec rigueur.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Une application biotechnologique doit toujours etre evaluee en tenant compte de son utilite, de ses risques et de ses consequences possibles.',
    },
  ],
  diagrams: [
    {
      id: 'domains',
      title: 'Schema - Les cinq domaines des biotechnologies',
      caption:
        'Les cinq domaines a connaitre sont identifies par une couleur. Tu dois savoir les nommer et donner un exemple pour chacun.',
    },
  ],
  method: {
    title: 'Methode - Analyser un document de biotechnologies',
    steps: [
      'Repere le besoin ou le probleme auquel le document cherche a repondre.',
      'Identifie l organisme vivant utilise ou la propriete du vivant mobilisee.',
      'Cherche le benefice attendu pour l etre humain.',
      'Associe ensuite le document au bon domaine des biotechnologies.',
      'Justifie ta reponse avec une phrase claire et precise.',
    ],
  },
  keyPointsTitle: 'Conclusion',
  keyPoints: [
    'Les biotechnologies sont des methodes qui utilisent des organismes vivants, ou les potentialites du vivant, pour produire des biens ou des services utiles a l etre humain.',
    'Elles s appuient sur plusieurs disciplines scientifiques comme la biologie, la microbiologie, la genetique, la biologie moleculaire, la biochimie et la bioinformatique.',
    'On distingue cinq grands domaines : sante, milieux marins, agroalimentaire et agriculture, environnement et industrie.',
    'Leur utilisation doit etre encadree pour limiter les risques, les derives et les questions ethiques qu elles peuvent soulever.',
  ],
  selfCheckTitle: 'Je verifie que j ai compris',
  selfCheck: [
    'Je sais proposer une definition simple et correcte des biotechnologies.',
    'Je sais expliquer pourquoi les biotechnologies sont a la fois anciennes et modernes.',
    'Je sais nommer les cinq domaines des biotechnologies et donner un exemple pour chacun.',
    'Je sais montrer qu une application biotechnologique peut soulever des enjeux ethiques.',
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
    title: 'Première STL',
    shortTitle: 'Première',
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
        id: 'biotechnologies-transversal',
        title: 'Travailler ensemble au laboratoire de biotechnologies',
        chapters: [
          {
            id: 'module-a-projet',
            code: 'A',
            title: "S'initier à la recherche expérimentale et à la démarche de projet en biotechnologies",
            summary:
              'Chapitre officiel transversal centre sur la decouverte de la specialite, le questionnement scientifique et la demarche de projet.',
            skills: [
              'questionner une situation biotech',
              'analyser un document scientifique simple',
              'relier un exemple au domaine biotech correspondant',
            ],
            lessons: [
              {
                id: 'c1-decouverte-biotechnologies',
                code: 'C1',
                title: 'Découverte des biotechnologies',
                summary:
                  'Premier cours d entree dans la specialite : definition, domaines, exemples et enjeux.',
                content: PREMIERE_BT1_CONTENT,
              },
            ],
          },
          {
            id: 'module-b-risques',
            code: 'B',
            title: 'Prévenir les risques au laboratoire de biotechnologies',
            summary:
              'Chapitre officiel transversal dedie a la prevention des risques, a la securite et a la gestion des dechets.',
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
                  'Cours centre sur le vocabulaire du risque, la demarche des 5M et les dangers chimiques ou biologiques.',
              },
              {
                id: 'at7-gestion-risques-laboratoire',
                code: 'AT7',
                title: 'Gestion des risques au laboratoire',
                summary:
                  'Activite technologique sur l analyse a priori des risques, les pictogrammes et la prevention.',
              },
            ],
          },
          {
            id: 'module-c-mesures',
            code: 'C',
            title: 'Obtenir des résultats de mesure fiables',
            summary:
              'Chapitre officiel transversal sur la qualite des mesures, la rigueur experimentale et la validation des resultats.',
            skills: [
              'analyser une mesure',
              'reperer une source d erreur',
              'ameliorer la fiabilite d une procedure',
            ],
          },
          {
            id: 'module-d-numerique',
            code: 'D',
            title: 'Utiliser des outils numériques en biotechnologies',
            summary:
              'Chapitre officiel transversal sur l usage du numerique pour traiter, organiser et communiquer des donnees.',
            skills: [
              'organiser des donnees',
              'traiter une information numerique',
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
              'Chapitre officiel sur les outils d observation et la comparaison des organisations du vivant.',
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
              'Chapitre officiel sur la culture des micro-organismes et le choix de conditions de croissance adaptees.',
            skills: [
              'respecter l asepsie',
              'cultiver un micro-organisme',
              'choisir des conditions de culture',
            ],
          },
          {
            id: 'module-3-identification',
            code: '3',
            title: 'Caractériser pour identifier les micro-organismes',
            summary:
              'Chapitre officiel sur l observation, les tests et la construction d une identification microbienne.',
            skills: [
              'observer une culture',
              'relier un test a une information',
              'construire une conclusion prudente',
            ],
          },
          {
            id: 'module-4-denombrement',
            code: '4',
            title: 'Réaliser un dénombrement de micro-organismes présents dans un produit biologique',
            summary:
              'Chapitre officiel sur les methodes de denombrement et l exploitation quantitative en microbiologie.',
            skills: [
              'choisir une methode de denombrement',
              'compter et exprimer un resultat',
              'exploiter un critere microbiologique simple',
            ],
          },
          {
            id: 'module-5-solutions',
            code: '5',
            title: 'Préparer des solutions utilisables au laboratoire',
            summary:
              'Chapitre officiel sur les solutions, les dilutions et la rigueur de preparation au laboratoire.',
            skills: [
              'calculer une concentration',
              'realiser une dilution',
              'tracer une preparation',
            ],
          },
          {
            id: 'module-6-biomolecules',
            code: '6',
            title: 'Détecter et caractériser les biomolécules',
            summary:
              'Chapitre officiel sur les tests de reconnaissance et la caracterisation simple des biomolecules.',
            skills: [
              'choisir un test',
              'observer un resultat',
              'relier un test a une biomolecule',
            ],
          },
          {
            id: 'module-7-separation',
            code: '7',
            title: "Séparer les composants d'un mélange",
            summary:
              'Chapitre officiel sur les techniques de separation exploitees en biotechnologies.',
            skills: [
              'choisir une technique de separation',
              'justifier une methode',
              'interpreter une separation simple',
            ],
          },
          {
            id: 'module-8-concentration',
            code: '8',
            title: "Déterminer la concentration d'une biomolécule dans un produit biologique",
            summary:
              'Chapitre officiel sur les strategies de dosage et l exploitation quantitative de resultats.',
            skills: [
              'choisir une methode de dosage',
              'exploiter une relation quantitative',
              'conclure sur une concentration',
            ],
            lessons: [
              {
                id: 'c8-dosage-volumetrique',
                code: 'C8',
                title: 'Dosage volumétrique',
                summary:
                  'Cours sur le vocabulaire de la volumetrie, les reactions support et le calcul a l equivalence.',
              },
            ],
          },
        ],
      },
      {
        id: 'biochimie-biologie',
        title: 'Spécialité biochimie-biologie',
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
