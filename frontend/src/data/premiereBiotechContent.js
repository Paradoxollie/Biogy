const BIOTECH_SOURCES = [
  {
    title: 'Programme de biotechnologies de premiere STL',
    url: 'https://eduscol.education.fr/document/23092/download',
  },
  {
    title: 'Programmes et ressources en serie STL',
    url: 'https://eduscol.education.fr/1652/programmes-et-ressources-en-serie-stl',
  },
  {
    title: 'Accompagnement des techniques de biotechnologies',
    url: 'https://edubase.eduscol.education.fr/fiche/21971',
  },
  {
    title: 'Limites du programme de premiere biotechnologies',
    url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/sites/default/files/Media/document/1btk-2_btk-limites_programme-premiere-biotechnologies.pdf',
  },
  {
    title: 'Explications pour la lecture du programme de premiere STL biotechnologies',
    url: 'https://pedagogie.ac-lyon.fr/biotechnologies/stl/',
  },
  {
    title: 'Microscopie optique',
    url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/content/microscopie-optique',
  },
];

const createDocument = (title, body, extra = {}) => ({
  label: extra.label || 'Document',
  title,
  source: extra.source,
  imageSrc: extra.imageSrc,
  imageAlt: extra.imageAlt,
  footer: extra.footer,
  body: Array.isArray(body) ? body : [body],
});

const createQuestionSet = ({
  tag,
  title,
  intro,
  supports = [],
  documents = [],
  instruction,
  questions,
  questionsTitle,
}) => ({
  tag,
  title,
  intro,
  supports,
  documents,
  instruction,
  questions,
  questionsTitle,
});

const createCourseSection = ({
  title,
  body,
  documents = [],
  cards = [],
  takeaway,
  takeawayTitle,
}) => ({
  title,
  body,
  documents,
  cards,
  takeaway,
  takeawayTitle,
});

const createBiotechContent = ({
  intro,
  prerequisites = [],
  objectives,
  chapterQuestions,
  questionSets,
  courseSections,
  method,
  diagrams = [],
  commonMistakes = [],
  keyPoints,
  selfCheck,
  practice = [],
  practiceIntro,
}) => ({
  intro,
  prerequisites,
  objectives,
  chapterQuestionsTitle: 'Questions du cours',
  chapterQuestions,
  questionSetsTitle: 'Travail guide',
  questionSetsIntro:
    'Lis les supports proposes, reponds d abord aux questions avec soin, puis utilise la partie "Cours a retenir" pour verifier et organiser ce que tu dois memoriser.',
  questionSets,
  courseSectionsTitle: 'Cours a retenir',
  courseSectionsIntro:
    'Le cours a retenir ne remplace pas le travail guide. Il sert a fixer les definitions, les gestes et les methodes indispensables.',
  courseSections,
  method,
  diagrams,
  commonMistakes,
  keyPointsTitle: 'A retenir',
  keyPoints,
  selfCheckTitle: "Je verifie que j'ai compris",
  selfCheck,
  practiceTitle: 'Petit entrainement',
  practiceIntro,
  practice,
  sources: BIOTECH_SOURCES,
});

export const PREMIERE_MODULE_C_CONTENT = createBiotechContent({
  intro:
    'En biotechnologies, un resultat n a de valeur que si la mesure est realisee dans de bonnes conditions et si elle est interpretee avec rigueur. Ce chapitre te fait travailler la lecture d un instrument, le choix des unites, la repetition des mesures et l analyse critique des resultats.',
  prerequisites: [
    'Connaitre les unites de volume, de masse, de temperature et de concentration les plus courantes.',
    'Savoir utiliser la verrerie et le petit materiel de laboratoire de base.',
  ],
  objectives: [
    'Choisir le bon instrument et la bonne unite pour une mesure.',
    'Lire un resultat avec une precision adaptee.',
    'Comparer plusieurs resultats pour juger leur coherence.',
    'Identifier une erreur possible et proposer une amelioration.',
  ],
  chapterQuestions: [
    'Qu est-ce qu une mesure fiable au laboratoire ?',
    'Comment limiter les erreurs de lecture ou de manipulation ?',
    'Pourquoi faut-il repeter et critiquer un resultat experimental ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Lire correctement une mesure',
      intro:
        'Un meme volume peut etre lu differemment selon le materiel utilise et selon la maniere de placer les yeux face a la graduation.',
      documents: [
        createDocument('Lecture d un menisque', [
          'Une eprouvette graduee de 25 mL contient un liquide incolore. Un eleve lit 14 mL en regardant l eprouvette de haut. Un autre lit 13,6 mL en plaçant les yeux a hauteur du menisque.',
          'Le materiel utilise n offre pas la meme precision qu une pipette jaugee ou qu une burette. Le choix de l instrument influence donc la qualite du resultat.',
        ]),
      ],
      instruction:
        'Observe la situation et explique ce qui rend l une des lectures plus fiable que l autre.',
      questions: [
        'Q1. Quelle lecture semble la plus correcte ? Justifie ta reponse.',
        'Q2. Explique pourquoi la position de l oeil peut fausser une mesure.',
        'Q3. Cite un materiel plus adapte si l on cherche une meilleure precision.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Comparer plusieurs mesures',
      intro:
        'Pour un meme dosage, trois groupes d eleves obtiennent les valeurs suivantes : 9,8 g.L-1 ; 10,0 g.L-1 ; 12,4 g.L-1.',
      documents: [
        createDocument('Serie de mesures', [
          'La valeur de reference attendue se situe autour de 10,0 g.L-1.',
          'Deux groupes obtiennent des resultats proches. Le troisieme groupe est nettement plus eloigne et doit verifier son protocole, ses calculs et ses conditions de manipulation.',
        ]),
      ],
      instruction:
        'Compare les resultats entre eux et appuie-toi sur la valeur de reference pour argumenter.',
      questions: [
        'Q4. Quels resultats paraissent coherents entre eux ?',
        'Q5. Quel groupe doit reexaminer son travail en priorite ? Pourquoi ?',
        'Q6. Cite au moins deux causes possibles d ecart important au resultat attendu.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Rechercher les sources d erreur',
      intro:
        'Au laboratoire, une erreur ne vient pas toujours d un calcul. Elle peut etre liee au materiel, a l operateur, a la methode ou au milieu.',
      documents: [
        createDocument('Situation de travail', [
          'Un eleve pese une poudre hygroscopique sans fermer le flacon entre deux prises, utilise une spatule humide et note son resultat sans unite.',
          'Le poste n est pas totalement propre, et la balance n a pas ete remise a zero entre deux pesees.',
        ]),
      ],
      instruction:
        'Repere tout ce qui peut fragiliser le resultat et propose une correction simple pour chaque point.',
      questions: [
        'Q7. Releve les erreurs ou oublis presents dans cette situation.',
        'Q8. Pour chaque erreur reperee, propose une action de correction.',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Une mesure fiable depend du contexte',
      body: [
        'Une mesure fiable est une mesure obtenue avec un materiel adapte, dans des conditions correctes et avec une lecture rigoureuse.',
        'On ne choisit pas le meme instrument pour prelever approximativement 20 mL et pour realiser un dosage necessitant un volume tres precis.',
        'Le resultat doit toujours etre note avec son unite et avec un nombre de chiffres coherent avec la precision du materiel employe.',
      ],
      takeaway:
        'Pour juger une mesure, il faut toujours tenir compte du materiel utilise, de la facon de lire et du contexte experimental.',
    }),
    createCourseSection({
      title: '2. Precision, repetition et comparaison',
      body: [
        'Repeter une mesure permet de verifier que le resultat n est pas du a une erreur ponctuelle.',
        'Des valeurs proches entre elles renforcent la confiance dans le resultat. Une valeur isolee et tres differente doit conduire a verifier le protocole ou le calcul.',
        'La comparaison a une valeur de reference, a un temoin ou a un critere d acceptabilite aide a interpreter le resultat.',
      ],
      takeaway:
        'On ne conclut pas a partir d un chiffre seul. Il faut comparer, repeter et argumenter.',
    }),
    createCourseSection({
      title: '3. Les principales sources d erreur',
      body: [
        'Les erreurs peuvent venir du manipulateur : mauvaise lecture, oubli d unite, pipetage incorrect, pesee mal realisee.',
        'Elles peuvent aussi venir du materiel : verrerie inadaptee, balance mal reglee, appareil non etalonne.',
        'La methode, le temps de manipulation, la contamination ou des conditions de milieu mal controlees peuvent egalement perturber le resultat.',
      ],
      cards: [
        { title: 'Manipulateur', text: 'Lecture, geste technique, rigueur de notation.' },
        { title: 'Materiel', text: 'Precision de la verrerie, balance, sonde, appareil.' },
        { title: 'Methode', text: 'Ordre des operations, temps, rincage, homogenisation.' },
        { title: 'Milieu', text: 'Temperature, proprete du poste, contamination, evaporation.' },
      ],
      takeaway:
        'Identifier l origine probable d une erreur permet d ameliorer la procedure et d obtenir un resultat plus solide.',
    }),
    createCourseSection({
      title: '4. L analyse critique du resultat',
      body: [
        'Analyser un resultat, ce n est pas dire seulement "c est juste" ou "c est faux". Il faut expliquer si la valeur est acceptable, douteuse ou a refaire.',
        'Cette analyse s appuie sur le protocole, les conditions de realisation, la dispersion des mesures et la comparaison a une reference.',
        'Au laboratoire, un resultat critique et bien justifie vaut mieux qu un nombre donne sans explication.',
      ],
      takeaway:
        'Un resultat experimental doit toujours etre accompagne d une interpretation courte, claire et argumentee.',
    }),
  ],
  method: {
    title: 'Methode - Presenter une mesure',
    steps: [
      'Ecris d abord la valeur numerique puis son unite.',
      'Verifie que le nombre de chiffres est coherent avec la precision du materiel.',
      'Si plusieurs mesures existent, compare-les avant de conclure.',
      'Ajoute une phrase courte pour dire si le resultat te parait fiable, discutable ou a refaire.',
    ],
  },
  commonMistakes: [
    'Oublier l unite du resultat.',
    'Donner trop de chiffres apres la virgule alors que le materiel ne le permet pas.',
    'Conclure sans comparer le resultat a une reference ou a d autres mesures.',
  ],
  keyPoints: [
    'Une mesure fiable suppose un materiel adapte, une lecture correcte et une methode rigoureuse.',
    'Un resultat doit toujours etre note avec son unite.',
    'Repeter et comparer des mesures permet de mieux juger leur coherence.',
    'Toute valeur experimentale doit etre analysee de facon critique avant d etre validee.',
  ],
  selfCheck: [
    'Je sais choisir un materiel adapte a la precision recherchee.',
    'Je sais expliquer pourquoi une lecture de menisque peut etre faussee.',
    'Je sais repere une valeur aberrante dans une serie simple.',
    'Je sais proposer une hypothese d erreur et une correction.',
  ],
  practiceIntro:
    'Entraine-toi a presenter un resultat de maniere scientifique et concise.',
  practice: [
    {
      question:
        'Une balance affiche 2,348 g pour un prelevement. Ecris le resultat de maniere correcte si la balance lit au millieme de gramme.',
      expected: 'Le resultat doit etre note 2,348 g. L unite est indispensable.',
    },
    {
      question:
        'Trois groupes trouvent 6,1 ; 6,0 ; 8,4 mL pour un meme volume. Quelle valeur dois-tu verifier ?',
      expected:
        'La valeur 8,4 mL doit etre verifiee en priorite car elle est eloignee des deux autres mesures.',
    },
  ],
});

export const PREMIERE_MODULE_D_CONTENT = createBiotechContent({
  intro:
    'Le laboratoire de biotechnologies produit des donnees, des tableaux, des images et des comptes rendus. Les outils numeriques servent a organiser ces informations, a les traiter et a les communiquer clairement, sans perdre leur sens scientifique.',
  objectives: [
    'Organiser des donnees dans un tableau lisible.',
    'Choisir une representation graphique adaptee.',
    'Nommer et classer correctement des fichiers de travail.',
    'Communiquer un resultat sans deformer l information scientifique.',
  ],
  chapterQuestions: [
    'Comment utiliser un tableur pour exploiter un resultat experimental ?',
    'Quel graphique faut-il choisir selon les donnees disponibles ?',
    'Pourquoi la trace numerique doit-elle rester claire et rigoureuse ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Organiser un tableau de resultats',
      intro:
        'Un tableau est utile seulement si les grandeurs, les unites et les conditions de mesure sont identifiables sans ambiguite.',
      documents: [
        createDocument('Tableau mal organise', [
          'Une feuille de calcul contient les colonnes suivantes : "essai", "10", "11", "12", "moyenne". Aucune unite n est indiquee. Les essais 1 et 2 ne sont pas distingues. Les cellules de commentaire sont melangees aux resultats.',
        ]),
      ],
      instruction:
        'Repere ce qui rend le tableau difficile a lire puis propose une version plus rigoureuse.',
      questions: [
        'Q1. Quelles informations manquent pour comprendre correctement ce tableau ?',
        'Q2. Comment renommer les colonnes pour rendre les donnees exploitables ?',
        'Q3. Explique pourquoi la presence des unites est indispensable.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Choisir le bon graphique',
      intro:
        'Selon le type de donnees, on ne choisit pas le meme graphique. Un mauvais choix peut rendre le resultat incomprehensible.',
      documents: [
        createDocument('Trois situations', [
          'Situation A : comparer le nombre de colonies obtenu sur trois milieux de culture differents.',
          'Situation B : suivre l evolution d une absorbance en fonction du temps.',
          'Situation C : etudier le lien entre concentration et absorbance pour une gamme etalon.',
        ]),
      ],
      instruction:
        'Associe chaque situation a une representation graphique adaptee et justifie ton choix.',
      questions: [
        'Q4. Quel graphique choisis-tu pour la situation A ?',
        'Q5. Quel graphique choisis-tu pour la situation B ?',
        'Q6. Quel graphique choisis-tu pour la situation C ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Nommer, classer et partager un travail numerique',
      intro:
        'Un fichier peut vite devenir inutilisable si son nom est flou, si sa version n est pas identifiable ou si son contenu n est pas range.',
      documents: [
        createDocument('Exemples de noms de fichiers', [
          'fichier1.xlsx ; TP nouveau.xlsx ; dosage_ok.xlsx ; 1STL_Culture_levures_2026-03-07.xlsx',
          'Le dernier nom est plus exploitable parce qu il indique la classe, le sujet et la date.',
        ]),
      ],
      instruction:
        'Compare les exemples et formule des regles simples pour bien nommer et bien ranger les fichiers du laboratoire.',
      questions: [
        'Q7. Quels noms de fichiers sont a eviter ? Pourquoi ?',
        'Q8. Propose une regle simple de nommage pour les travaux de classe.',
        'Q9. Explique pourquoi les versions et la date sont utiles.',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Organiser des donnees pour pouvoir les relire',
      body: [
        'Dans un tableau, chaque colonne doit avoir un titre explicite et une unite si la grandeur est mesurable.',
        'Les conditions de l experience, les repetitions et les commentaires doivent etre ranges de facon logique, sans melanger les informations.',
        'Un tableau bien organise permet au lecteur de comprendre les donnees sans revenir au protocole initial.',
      ],
      takeaway:
        'Un tableau scientifique doit etre lisible, ordonne et complet.',
    }),
    createCourseSection({
      title: '2. Choisir une representation graphique adaptee',
      body: [
        'Le diagramme en barres convient bien a une comparaison entre categories.',
        'Une courbe permet de suivre l evolution d une grandeur en fonction du temps ou d une variable continue.',
        'Un nuage de points ou un graphique de calibration aide a etudier la relation entre deux grandeurs quantitatives.',
      ],
      takeaway:
        'Le bon graphique depend de la question scientifique posee et de la nature des donnees.',
    }),
    createCourseSection({
      title: '3. Utiliser le numerique sans perdre la rigueur scientifique',
      body: [
        'Le numerique sert a calculer, a representer et a communiquer, mais il ne remplace pas le raisonnement scientifique.',
        'Un graphique automatique mal parametre peut induire en erreur. Les axes, les unites et les titres doivent toujours etre verifies.',
        'Il faut aussi conserver la trace du fichier source, de la date, de la version et des choix de traitement realises.',
      ],
      takeaway:
        'Un traitement numerique doit rester transparent et justifiable.',
    }),
    createCourseSection({
      title: '4. Bien communiquer un resultat',
      body: [
        'Communiquer un resultat, c est choisir une forme claire : tableau, graphique, legende, court commentaire.',
        'Le message scientifique doit rester simple : on decrit le resultat, puis on l interprete sans exageration.',
        'Une capture d ecran ou un graphique ne suffit pas. Il faut une phrase de conclusion claire et precise.',
      ],
      takeaway:
        'Une communication reussie associe des donnees bien presentees et une conclusion courte, exacte et utile.',
    }),
  ],
  method: {
    title: 'Methode - Construire un graphique utile',
    steps: [
      'Commence par identifier les deux grandeurs que tu veux comparer.',
      'Choisis le type de graphique adapte a la question posee.',
      'Nomme les axes et ajoute les unites si necessaire.',
      'Verifie ensuite que l echelle choisie rend le graphique lisible.',
      'Ajoute enfin une phrase courte pour dire ce que montre le graphique.',
    ],
  },
  keyPoints: [
    'Le numerique aide a organiser, traiter et communiquer les resultats du laboratoire.',
    'Un tableau ou un graphique doit toujours comporter des titres clairs et des unites.',
    'Le choix de la representation depend de la nature des donnees.',
    'La presentation numerique doit rester au service du raisonnement scientifique.',
  ],
  selfCheck: [
    'Je sais corriger un tableau mal organise.',
    'Je sais choisir entre un diagramme en barres, une courbe et un nuage de points.',
    'Je sais nommer un fichier de travail de facon claire.',
    'Je sais accompagner un graphique d une conclusion courte et exacte.',
  ],
});

export const PREMIERE_MODULE_1_CONTENT = createBiotechContent({
  intro:
    'Observer le vivant a l echelle microscopique est un chapitre central en premiere STL. Tu dois apprendre a utiliser le microscope photonique, a raisonner en grossissement et a comparer les grandes organisations cellulaires observees au laboratoire.',
  objectives: [
    'Identifier les principales parties d un microscope photonique et leur role.',
    'Choisir un grossissement adapte et regler correctement l observation.',
    'Comparer une cellule procaryote et une cellule eucaryote.',
    'Utiliser une observation microscopique pour decrire un echantillon.',
  ],
  chapterQuestions: [
    'Comment obtenir une observation nette et exploitable ?',
    'Quelles differences faut-il connaitre entre procaryote et eucaryote ?',
    'Que peut-on conclure a partir d une observation microscopique ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Prendre en main le microscope photonique',
      intro:
        'Avant d observer un echantillon, il faut savoir comment regler le microscope et dans quel ordre utiliser les objectifs.',
      supports: [
        {
          label: 'Situation de laboratoire',
          detail:
            'Microscope photonique avec oculaire x10 et objectifs x4, x10 et x40. Lame preparee deja placee sur la platine.',
        },
      ],
      instruction:
        'Redige la demarche a suivre pour obtenir une image nette sans abimer la preparation.',
      questions: [
        'Q1. Par quel objectif faut-il commencer ? Pourquoi ?',
        'Q2. Quelles commandes permettent de faire la mise au point au debut puis d affiner l image ?',
        'Q3. Calcule le grossissement total obtenu avec un oculaire x10 et un objectif x40.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Comparer deux organisations cellulaires',
      intro:
        'Le cours de premiere STL demande de savoir distinguer les grandes caracteristiques d une cellule procaryote et d une cellule eucaryote.',
      documents: [
        createDocument('Observation comparee', [
          'L image A montre une petite cellule sans noyau individualise, avec un ADN libre dans le cytoplasme.',
          'L image B montre une cellule plus grande comportant un noyau delimite et plusieurs organites visibles.',
        ]),
      ],
      instruction:
        'Compare les deux observations et releve les criteres qui permettent de les distinguer.',
      questions: [
        'Q4. Quelle image correspond a une cellule procaryote ? Justifie.',
        'Q5. Quelle image correspond a une cellule eucaryote ? Justifie.',
        'Q6. Cite deux elements visibles ou connus qui permettent cette distinction.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Interpreter une observation',
      intro:
        'Une observation microscopique ne sert pas seulement a "voir". Elle doit permettre de decrire et de raisonner.',
      documents: [
        createDocument('Trois preparations possibles', [
          'Preparation 1 : cellules jointives polygonales observees dans un tissu vegetal.',
          'Preparation 2 : cellules ovales isolees ou en petits groupes, parfois en bourgeonnement.',
          'Preparation 3 : tres petites cellules nombreuses, sans details internes visibles au microscope photonique.',
        ]),
      ],
      instruction:
        'Associe chaque preparation a un type d organisation biologique plausible et justifie avec le vocabulaire du cours.',
      questions: [
        'Q7. Quelle preparation peut correspondre a une levure ?',
        'Q8. Quelle preparation peut correspondre a des bacteries ?',
        'Q9. Quelle preparation peut correspondre a un tissu vegetal ?',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Le microscope photonique',
      body: [
        'Le microscope photonique permet d observer des echantillons trop petits pour etre vus a l oeil nu.',
        'Pour commencer une observation, on place la lame sur la platine, on choisit le plus faible grossissement, puis on realise une premiere mise au point avant d affiner si besoin.',
        'Le grossissement total est obtenu en multipliant le grossissement de l oculaire par celui de l objectif.',
      ],
      takeaway:
        'Une observation reussie commence toujours par le faible grossissement et par un reglage progressif du microscope.',
    }),
    createCourseSection({
      title: '2. Procaryotes et eucaryotes',
      body: [
        'Une cellule procaryote est en general plus petite et ne possede pas de noyau individualise. Son ADN est libre dans la cellule.',
        'Une cellule eucaryote possede un noyau et des organites. Elle peut appartenir a un organisme unicellulaire ou pluricellulaire.',
        'Au laboratoire, la comparaison repose sur des criteres simples : presence d un noyau, taille relative, organisation interne et contexte d observation.',
      ],
      takeaway:
        'Le critere majeur a retenir est la presence ou non d un noyau individualise.',
    }),
    createCourseSection({
      title: '3. Decrire une observation de facon scientifique',
      body: [
        'Une description scientifique commence par ce qui est visible : forme, taille relative, disposition, couleur eventuelle, organisation.',
        'On evite les formulations vagues du type "c est bizarre" ou "on dirait". Il faut utiliser un vocabulaire precis.',
        'La conclusion doit rester prudente : on propose une interpretation compatible avec les indices observes.',
      ],
      takeaway:
        'Observer, decrire puis interpreter : cet ordre doit toujours etre respecte.',
    }),
    createCourseSection({
      title: '4. Les limites de l observation',
      body: [
        'Le microscope photonique ne montre pas tous les details d une cellule. Certaines structures ne sont visibles qu avec d autres techniques.',
        'Une observation doit donc etre completee, si besoin, par des documents, des colorations ou d autres methodes de laboratoire.',
      ],
      takeaway:
        'Une image microscopique donne des informations utiles, mais elle ne dit pas tout a elle seule.',
    }),
  ],
  method: {
    title: 'Methode - Reussir une observation microscopique',
    steps: [
      'Place correctement la lame et fixe-la sur la platine.',
      'Commence au plus faible grossissement.',
      'Utilise la vis de mise au point adaptee pour obtenir une image nette.',
      'Centre la zone interessante avant de changer d objectif.',
      'Decris ensuite ce que tu observes avec un vocabulaire scientifique simple.',
    ],
  },
  diagrams: [
    {
      id: 'microscope',
      title: 'Schema simplifie du microscope',
      caption:
        'Ce schema rappelle les principaux elements a reconnaitre avant de manipuler le microscope en autonomie.',
    },
    {
      id: 'cells',
      title: 'Comparer cellule procaryote et cellule eucaryote',
      caption:
        'L essentiel en premiere est de savoir distinguer ces deux organisations et de mobiliser le bon vocabulaire.',
    },
  ],
  commonMistakes: [
    'Commencer directement avec le fort grossissement.',
    'Confondre grossissement de l objectif et grossissement total.',
    'Conclure trop vite sans decrire ce qui est reellement visible.',
  ],
  keyPoints: [
    'Le microscope photonique s utilise de facon progressive, du faible vers le fort grossissement.',
    'Le grossissement total se calcule en multipliant oculaire et objectif.',
    'Une cellule procaryote ne possede pas de noyau individualise ; une cellule eucaryote en possede un.',
    'Une observation doit conduire a une description precise avant toute interpretation.',
  ],
  selfCheck: [
    'Je sais expliquer comment debuter une observation au microscope.',
    'Je sais calculer un grossissement total simple.',
    'Je sais distinguer procaryote et eucaryote.',
    'Je sais decrire une observation avec des mots precis.',
  ],
});

export const PREMIERE_MODULE_2_CONTENT = createBiotechContent({
  intro:
    'Cultiver des micro-organismes, ce n est pas seulement faire pousser une colonie. Il faut choisir un milieu adapte, respecter l asepsie et comprendre les conditions qui favorisent ou limitent la croissance.',
  objectives: [
    'Expliquer a quoi sert un milieu de culture.',
    'Identifier les conditions favorables a la croissance microbienne.',
    'Comprendre l interet des gestes d asepsie.',
    'Interpretrer la presence ou l absence de croissance.',
  ],
  chapterQuestions: [
    'De quoi un micro-organisme a-t-il besoin pour se developper ?',
    'Pourquoi l asepsie est-elle indispensable au laboratoire ?',
    'Comment lire le resultat d une culture ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Comprendre le role du milieu de culture',
      intro:
        'Un milieu de culture apporte aux micro-organismes les elements dont ils ont besoin pour vivre et se multiplier.',
      documents: [
        createDocument('Comparaison de milieux', [
          'Milieu A : milieu nutritif general permettant la croissance de nombreux micro-organismes.',
          'Milieu B : milieu enrichi ou selectif, adapte a un contexte particulier.',
          'Selon le contexte, le biologiste ne choisit pas le meme milieu.',
        ]),
      ],
      instruction:
        'Appuie-toi sur le document pour expliquer pourquoi le choix du milieu depend de l objectif du laboratoire.',
      questions: [
        'Q1. A quoi sert un milieu de culture ?',
        'Q2. Pourquoi deux micro-organismes differents ne se cultivent-ils pas toujours dans les memes conditions ?',
        'Q3. Dans quel cas un milieu selectif peut-il etre utile ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Respecter l asepsie',
      intro:
        'L asepsie vise a eviter l introduction de micro-organismes indesirables dans une culture ou sur un poste de travail.',
      documents: [
        createDocument('Suite de gestes techniques', [
          'Un eleve nettoie le poste, prepare le materiel, ouvre le recipient le moins longtemps possible, flamme ou desinfecte selon le protocole, puis referme rapidement.',
          'Chaque geste limite un risque de contamination du milieu, du prelevement ou de l environnement.',
        ]),
      ],
      instruction:
        'Explique l utilite de chaque geste sans recopier le document.',
      questions: [
        'Q4. Pourquoi faut-il preparer le poste avant d ouvrir le milieu de culture ?',
        'Q5. Pourquoi l ouverture doit-elle etre la plus courte possible ?',
        'Q6. Quelles consequences une contamination peut-elle avoir sur le resultat ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Interpreter une culture',
      intro:
        'La croissance d un micro-organisme depend du milieu, de la temperature, du temps d incubation et parfois de la presence ou non d oxygene.',
      documents: [
        createDocument('Resultats de culture', [
          'Boite 1 : nombreuses colonies apres incubation a 30 degres C.',
          'Boite 2 : aucune colonie apres incubation a 30 degres C, alors que le milieu est identique.',
          'Tube 3 : croissance uniquement en surface du milieu liquide.',
        ]),
      ],
      instruction:
        'Interprete les observations sans oublier que plusieurs hypotheses peuvent exister.',
      questions: [
        'Q7. Que peut signifier l absence de croissance dans la boite 2 ?',
        'Q8. Quelle information la croissance en surface peut-elle suggerer ?',
        'Q9. Pourquoi faut-il toujours tenir compte des conditions d incubation ?',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Le milieu de culture',
      body: [
        'Un milieu de culture apporte de l eau et des substances nutritives au micro-organisme.',
        'Selon le but recherche, on utilise un milieu general, enrichi, selectif ou differentiel.',
        'Le choix du milieu depend toujours du contexte d etude et du type de micro-organisme attendu.',
      ],
      takeaway:
        'Un milieu de culture n est jamais choisi au hasard. Il doit repondre a une question precise.',
    }),
    createCourseSection({
      title: '2. Les conditions de croissance',
      body: [
        'La temperature, la disponibilite en nutriments, le pH, l oxygene et le temps d incubation influencent la croissance.',
        'Tous les micro-organismes n ont pas les memes exigences. C est pourquoi le protocole doit etre adapte au contexte biologique.',
      ],
      takeaway:
        'Pour lire un resultat de culture, il faut toujours connaitre les conditions d incubation.',
    }),
    createCourseSection({
      title: '3. L asepsie',
      body: [
        'L asepsie regroupe les gestes qui evitent l introduction de micro-organismes indesirables dans une manipulation.',
        'Elle protege a la fois la culture, le manipulateur et l environnement de travail.',
        'Une culture contaminee peut conduire a une interpretation fausse ou inutilisable.',
      ],
      takeaway:
        'L asepsie est une condition de fiabilite de la manipulation et pas seulement une formalite technique.',
    }),
    createCourseSection({
      title: '4. Lire le resultat d une culture',
      body: [
        'La presence, l absence ou la localisation de la croissance fournissent des informations utiles.',
        'Cependant, une seule observation ne suffit pas toujours a conclure. Elle doit etre interpretee avec prudence et, si besoin, completee par d autres tests.',
      ],
      takeaway:
        'Une culture renseigne sur un comportement microbien, mais elle doit etre remise dans son contexte experimental.',
    }),
  ],
  method: {
    title: 'Methode - Realiser une culture avec rigueur',
    steps: [
      'Prepare le poste et le materiel avant toute ouverture.',
      'Respecte les gestes d asepsie du debut a la fin de la manipulation.',
      'Note le milieu utilise et les conditions d incubation.',
      'Observe ensuite la culture avec precision avant de conclure.',
    ],
  },
  keyPoints: [
    'Un milieu de culture doit etre adapte au micro-organisme et a l objectif du laboratoire.',
    'La croissance depend de plusieurs facteurs : nutriments, temperature, temps, oxygene, pH.',
    'L asepsie evite les contaminations et fiabilise la culture.',
    'Un resultat de culture doit toujours etre interprete dans son contexte.',
  ],
  selfCheck: [
    'Je sais expliquer le role d un milieu de culture.',
    'Je sais justifier l interet des gestes d asepsie.',
    'Je sais citer des facteurs qui influencent la croissance.',
    'Je sais formuler une conclusion prudente a partir d une culture.',
  ],
});

export const PREMIERE_MODULE_3_CONTENT = createBiotechContent({
  intro:
    'Identifier un micro-organisme demande de croiser plusieurs indices. On observe d abord, puis on utilise des tests choisis en fonction du contexte pour construire une conclusion raisonnable.',
  objectives: [
    'Distinguer observation, caractere d orientation et identification.',
    'Exploiter l aspect d une culture et une observation microscopique.',
    'Comprendre l interet des tests biochimiques ou des galeries miniaturisees.',
    'Formuler une conclusion d identification prudente et argumentee.',
  ],
  chapterQuestions: [
    'Quels indices peut-on utiliser pour identifier un micro-organisme ?',
    'Pourquoi un seul test ne suffit-il pas toujours ?',
    'Comment passer d observations a une conclusion scientifique ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Observer une culture',
      intro:
        'L aspect des colonies donne deja des informations utiles : taille, couleur, relief, contour, transparence, odeur eventuelle.',
      documents: [
        createDocument('Deux descriptions de colonies', [
          'Culture A : colonies lisses, rondes, creme, de petite taille.',
          'Culture B : colonies plus grandes, seches, irregulieres, de couleur mate.',
        ]),
      ],
      instruction:
        'Releve les caracteres observables sans conclure trop vite sur l identite du micro-organisme.',
      questions: [
        'Q1. Quels caracteres de la colonie peuvent etre utilises pour orienter l identification ?',
        'Q2. Pourquoi ces observations ne suffisent-elles pas encore pour identifier avec certitude ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Croiser observation et tests',
      intro:
        'L identification s appuie sur plusieurs informations : observation microscopique, comportement sur certains milieux et tests cibles.',
      documents: [
        createDocument('Dossier simplifie', [
          'Le micro-organisme observe est sous forme de levures bourgeonnantes au microscope.',
          'Il pousse sur un milieu nutritif general et donne une reaction positive dans un test biochimique compatible avec une fermentation de certains sucres.',
        ]),
      ],
      instruction:
        'Explique ce que chaque information apporte a la demarche d identification.',
      questions: [
        'Q3. Quelle information apporte l observation microscopique ?',
        'Q4. Quelle information apporte le test biochimique ?',
        'Q5. Pourquoi faut-il croiser ces deux informations ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Choisir des tests discriminants',
      intro:
        'Tous les tests ne sont pas utiles dans toutes les situations. Un test est discriminant s il aide reellement a departager plusieurs hypotheses.',
      documents: [
        createDocument('Situation de choix', [
          'Deux hypotheses sont envisagees apres observation : bacterie A ou bacterie B. Les deux poussent sur le milieu utilise, mais elles ne repondent pas de la meme facon a certains tests biochimiques.',
        ]),
      ],
      instruction:
        'Cherche quel type de test serait le plus utile pour separer les deux hypotheses et justifie ton choix.',
      questions: [
        'Q6. Qu appelle-t-on un test discriminant ?',
        'Q7. Pourquoi est-il inutile de multiplier des tests non informatifs ?',
        'Q8. En quoi une galerie miniaturisee peut-elle aider l identification ?',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. L observation oriente l identification',
      body: [
        'L aspect des colonies, la forme des cellules et certains caracteres de culture orientent l identification.',
        'Ces premiers indices servent a reduire le nombre d hypotheses, mais ils ne suffisent pas toujours a eux seuls.',
      ],
      takeaway:
        'Observer, c est deja identifier partiellement, mais pas encore conclure.',
    }),
    createCourseSection({
      title: '2. L interet des tests',
      body: [
        'Les tests biochimiques, les milieux d orientation ou les galeries miniaturisees permettent de mettre en evidence des caracteres discriminants.',
        'Un test n a d interet que s il aide a repondre a la question posee dans le contexte d etude.',
      ],
      takeaway:
        'On ne choisit pas un test parce qu il existe, mais parce qu il apporte une information utile.',
    }),
    createCourseSection({
      title: '3. Construire une conclusion prudente',
      body: [
        'Une conclusion d identification doit s appuyer sur des resultats convergents.',
        'Si les informations sont insuffisantes ou contradictoires, il faut l indiquer et proposer un test complementaire plutot que conclure trop vite.',
      ],
      takeaway:
        'Au laboratoire, une conclusion prudente et argumentee vaut mieux qu une affirmation non justifiee.',
    }),
    createCourseSection({
      title: '4. Le role du contexte',
      body: [
        'Le contexte de prelevement, le type de produit biologique et la question initiale orientent les choix de tests et l interpretation des resultats.',
        'La demarche d identification n est donc jamais totalement hors contexte.',
      ],
      takeaway:
        'Identifier un micro-organisme, c est toujours raisonner a partir d un contexte biologique et technique.',
    }),
  ],
  method: {
    title: 'Methode - Mener une identification',
    steps: [
      'Commence par decrire la culture et l observation microscopique.',
      'Formule une ou deux hypotheses plausibles.',
      'Choisis ensuite les tests les plus discriminants.',
      'Croise les resultats obtenus avant de conclure.',
      'Si besoin, signale les limites de l identification.',
    ],
  },
  keyPoints: [
    'L identification d un micro-organisme repose sur plusieurs indices convergents.',
    'Les observations orientent la demarche mais ne suffisent pas toujours.',
    'Les tests doivent etre choisis pour leur pouvoir discriminant.',
    'La conclusion doit rester argumentee et prudente.',
  ],
  selfCheck: [
    'Je sais citer des caracteres observables sur une culture.',
    'Je sais expliquer le role d un test discriminant.',
    'Je sais justifier pourquoi une galerie miniaturisee est utile.',
    'Je sais formuler une conclusion d identification sans aller trop loin.',
  ],
});

export const PREMIERE_MODULE_4_CONTENT = createBiotechContent({
  intro:
    'Le denombrement permet d estimer la quantite de micro-organismes presents dans un produit biologique. Pour obtenir un resultat exploitable, il faut choisir les bonnes dilutions, compter correctement et exprimer le resultat avec rigueur.',
  objectives: [
    'Expliquer le principe d un denombrement sur milieu solide.',
    'Choisir des dilutions compatibles avec un comptage exploitable.',
    'Calculer une concentration microbienne a partir d un comptage.',
    'Interpreter le resultat dans un contexte simple.',
  ],
  chapterQuestions: [
    'Pourquoi faut-il diluer avant de compter ?',
    'Comment choisir une boite exploitable pour le comptage ?',
    'Comment exprimer le resultat d un denombrement ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Choisir les dilutions',
      intro:
        'Un produit tres charge en micro-organismes ne peut pas etre compte directement sur une boite de Petri.',
      documents: [
        createDocument('Situation de depart', [
          'Un echantillon de yaourt doit etre analyse. L experience des annees precedentes indique que la concentration est probablement elevee.',
          'Si on ensemence directement le produit sans dilution, les colonies risquent de se chevaucher et le comptage devient impossible.',
        ]),
      ],
      instruction:
        'Explique pourquoi on realise une gamme de dilutions avant le comptage.',
      questions: [
        'Q1. Pourquoi une dilution est-elle souvent necessaire avant un denombrement ?',
        'Q2. Quel est l avantage de preparer plusieurs dilutions successives ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Choisir une boite exploitable',
      intro:
        'Trois boites issues d une meme serie presentent respectivement 12 colonies, 87 colonies et un tapis de colonies fusionnees.',
      documents: [
        createDocument('Serie de resultats', [
          'Une boite tres peu peuplee peut etre peu representative. Une boite trop chargee n est plus exploitable. Une boite intermediaire permet un comptage plus robuste.',
        ]),
      ],
      instruction:
        'Compare les trois boites et justifie laquelle semble la plus utile pour exprimer le resultat.',
      questions: [
        'Q3. Quelle boite parait la plus exploitable ? Pourquoi ?',
        'Q4. Pourquoi un tapis de colonies ne permet-il pas un resultat fiable ?',
        'Q5. Pourquoi une boite trop pauvre en colonies peut-elle aussi poser probleme ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Exprimer le resultat',
      intro:
        'Une fois le comptage realise, il faut remonter a la concentration du produit de depart en tenant compte de la dilution et du volume ensemence.',
      documents: [
        createDocument('Donnees de calcul', [
          'A partir de la dilution 10^-4, 0,1 mL ont ete ensemences et 86 colonies ont ete comptees.',
          'Le resultat doit etre exprime dans une unite adaptee et accompagne d une phrase de conclusion simple.',
        ]),
      ],
      instruction:
        'Repere les informations utiles puis explique la logique du calcul avant d effectuer l operation.',
      questions: [
        'Q6. Quelles donnees sont necessaires pour calculer la concentration du produit de depart ?',
        'Q7. Explique pourquoi le volume ensemence intervient dans le calcul.',
        'Q8. Redige une phrase de conclusion simple apres le calcul.',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Principe du denombrement',
      body: [
        'Le denombrement sur milieu solide consiste a mettre en culture une quantite connue d echantillon dilue, puis a compter les colonies obtenues.',
        'Chaque colonie est consideree comme issue d une unite capable de se multiplier.',
      ],
      takeaway:
        'Le denombrement transforme une observation de culture en information quantitative.',
    }),
    createCourseSection({
      title: '2. L interet des dilutions',
      body: [
        'Les dilutions permettent d obtenir des boites ni trop chargees ni trop pauvres en colonies.',
        'Elles sont indispensables quand la concentration du produit de depart est inconnue ou elevee.',
      ],
      takeaway:
        'Sans dilution adaptee, le comptage peut devenir faux ou impossible.',
    }),
    createCourseSection({
      title: '3. Le choix d une boite exploitable',
      body: [
        'Une boite exploitable doit permettre un comptage net et separer les colonies les unes des autres.',
        'Le choix se fait avec des criteres simples et avec le contexte du protocole utilise en classe.',
      ],
      takeaway:
        'Compter correctement commence par choisir la bonne boite.',
    }),
    createCourseSection({
      title: '4. Exprimer et interpreter le resultat',
      body: [
        'Le resultat s exprime en unites adaptees, souvent en UFC par millilitre ou par gramme selon le produit.',
        'Le calcul prend en compte le nombre de colonies, la dilution retenue et le volume ensemence.',
        'Une fois la concentration obtenue, il faut dire ce qu elle signifie dans le contexte de l etude.',
      ],
      takeaway:
        'Le calcul ne suffit pas. Le resultat doit etre exprime clairement puis interprete.',
    }),
  ],
  method: {
    title: 'Methode - Exploiter un denombrement',
    steps: [
      'Repere la dilution et la boite retenues pour le comptage.',
      'Verifie que le nombre de colonies est exploitable.',
      'Note le volume ensemence.',
      'Realise ensuite le calcul avec les bonnes unites.',
      'Termine par une phrase de conclusion liee au produit etudie.',
    ],
  },
  keyPoints: [
    'Le denombrement permet d estimer une concentration microbienne.',
    'Les dilutions servent a obtenir un comptage exploitable.',
    'Le calcul depend du nombre de colonies, de la dilution et du volume ensemence.',
    'Le resultat doit etre exprime dans une unite adaptee et interprete.',
  ],
  selfCheck: [
    'Je sais expliquer pourquoi on dilue avant de compter.',
    'Je sais choisir une boite exploitable pour un denombrement simple.',
    'Je sais identifier les donnees utiles au calcul.',
    'Je sais exprimer le resultat dans une unite pertinente.',
  ],
  practiceIntro:
    'Cet entrainement te permet de revoir la logique sans refaire tout le protocole.',
  practice: [
    {
      question:
        'Une boite issue de la dilution 10^-3 contient un tapis de colonies. Peux-tu l utiliser pour conclure ?',
      expected:
        'Non. Une boite avec un tapis de colonies n est pas exploitable pour un comptage fiable.',
    },
    {
      question:
        'Pourquoi le volume ensemence doit-il etre note avec precision lors d un denombrement ?',
      expected:
        'Parce qu il intervient directement dans le calcul de la concentration du produit de depart.',
    },
  ],
});

export const PREMIERE_MODULE_5_CONTENT = createBiotechContent({
  intro:
    'Les solutions sont partout au laboratoire de biotechnologies. Il faut savoir les preparer, les diluer, controler leur concentration et assurer leur tracabilite pour travailler de facon fiable.',
  objectives: [
    'Distinguer solution, solute, solvant et concentration.',
    'Preparer une solution par dissolution ou par dilution.',
    'Choisir le materiel adapte a la preparation.',
    'Verifier et tracer correctement une preparation.',
  ],
  chapterQuestions: [
    'Comment preparer une solution sans fausser sa concentration ?',
    'Quelle difference faut-il faire entre dissolution et dilution ?',
    'Pourquoi l etiquette et la tracabilite sont-elles indispensables ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Preparer une solution par dissolution',
      intro:
        'Un laboratoire doit preparer 100 mL d une solution de chlorure de sodium a concentration fixee a partir du solide.',
      documents: [
        createDocument('Fiche de preparation', [
          'Le protocole mentionne une pesee du solide, une dissolution dans un petit volume d eau, un transfert quantitatif dans une fiole jaugee puis un ajustage au trait de jauge.',
        ]),
      ],
      instruction:
        'Remets les etapes dans l ordre logique et explique a quoi sert chacune.',
      questions: [
        'Q1. Pourquoi ne remplit-on pas la fiole jaugee jusqu au trait avant d avoir dissous le solide ?',
        'Q2. Pourquoi parle-t-on de transfert quantitatif ?',
        'Q3. Quel est le role du trait de jauge ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Preparer une solution par dilution',
      intro:
        'Le laboratoire dispose d une solution mere et doit preparer une solution fille moins concentree.',
      documents: [
        createDocument('Situation de dilution', [
          'Une solution mere est disponible en grande concentration. On souhaite preparer 50 mL d une solution fille cinq fois moins concentree.',
          'Le protocole fait intervenir une pipette jaugee et une fiole jaugee.',
        ]),
      ],
      instruction:
        'Explique la logique de la dilution et justifie le choix de la verrerie.',
      questions: [
        'Q4. Qu appelle-t-on solution mere et solution fille ?',
        'Q5. Pourquoi utilise-t-on une pipette jaugee pour le prelevement ?',
        'Q6. Que devient la quantite de solute lors d une dilution ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Verifier et etiqueter une preparation',
      intro:
        'Une solution non etiquetee ou mal tracee devient rapidement inutilisable au laboratoire.',
      documents: [
        createDocument('Etiquette incomplete', [
          'Une bouteille porte uniquement la mention "solution glucose". Aucune concentration, aucune date, aucun nom du preparateur n apparaissent.',
        ]),
      ],
      instruction:
        'Liste les informations manquantes et explique leur utilite.',
      questions: [
        'Q7. Quelles informations doivent figurer sur une etiquette de laboratoire ?',
        'Q8. Pourquoi la date et le nom du preparateur sont-ils utiles ?',
        'Q9. Cite une consequence possible d une solution mal tracee.',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Les notions de base',
      body: [
        'Une solution est un melange homogene obtenu en dissolvant un solute dans un solvant.',
        'La concentration traduit la quantite de solute presente dans un volume donne de solution.',
      ],
      takeaway:
        'Pour preparer correctement une solution, il faut d abord identifier ce que l on dissout et dans quel volume final.',
    }),
    createCourseSection({
      title: '2. La preparation par dissolution',
      body: [
        'Lors d une dissolution, on pese une quantite de solide, on la dissout puis on ajuste le volume final dans une fiole jaugee.',
        'Le transfert doit etre quantitatif pour ne pas perdre de matiere.',
      ],
      takeaway:
        'La justesse de la concentration depend a la fois de la pesee et du volume final obtenu.',
    }),
    createCourseSection({
      title: '3. La preparation par dilution',
      body: [
        'La dilution consiste a preparer une solution moins concentree a partir d une solution plus concentree.',
        'La quantite de solute prelevee est conservee, mais elle est repartie dans un volume final plus grand.',
      ],
      takeaway:
        'Diluer, ce n est pas enlever du solute : c est augmenter le volume final de solution.',
    }),
    createCourseSection({
      title: '4. La tracabilite',
      body: [
        'Une solution preparee au laboratoire doit etre identifiee par une etiquette claire.',
        'La tracabilite permet de retrouver la concentration, la date de preparation, le preparateur et, si besoin, des informations de securite.',
      ],
      takeaway:
        'Une solution bien preparee mais mal identifiee devient une source d erreur pour tout le laboratoire.',
    }),
  ],
  method: {
    title: 'Methode - Preparer une solution avec rigueur',
    steps: [
      'Lis la concentration attendue et le volume final a obtenir.',
      'Choisis la bonne methode : dissolution ou dilution.',
      'Selectionne la verrerie adaptee et verifie sa proprete.',
      'Realise la preparation dans le bon ordre sans perdre de matiere.',
      'Etiquette enfin la solution de maniere complete et lisible.',
    ],
  },
  commonMistakes: [
    'Confondre volume preleve et volume final.',
    'Oublier de rincer le recipient de transfert lors d une dissolution.',
    'Ne pas etiqueter la solution des sa preparation.',
  ],
  keyPoints: [
    'Une solution peut etre preparee par dissolution ou par dilution.',
    'La verrerie jaugee sert a obtenir un volume precis.',
    'Le transfert quantitatif est essentiel pour conserver la bonne concentration.',
    'L etiquette et la tracabilite font partie du travail de laboratoire.',
  ],
  selfCheck: [
    'Je sais distinguer dissolution et dilution.',
    'Je sais expliquer l utilite d une fiole jaugee et d une pipette jaugee.',
    'Je sais dire ce qui doit apparaitre sur une etiquette.',
    'Je sais expliquer pourquoi un transfert quantitatif est necessaire.',
  ],
  practice: [
    {
      question:
        'Pour obtenir une solution cinq fois moins concentree, faut-il augmenter ou diminuer le volume final ?',
      expected:
        'Il faut augmenter le volume final par ajout de solvant.',
    },
  ],
});

export const PREMIERE_MODULE_6_CONTENT = createBiotechContent({
  intro:
    'Les biomolecules n ont pas toutes les memes proprietes. En premiere STL, tu dois savoir choisir une methode simple pour les detecter, comprendre ce que montre un test positif ou negatif et relier une propriete a une technique de caracterisation.',
  objectives: [
    'Reconnaître les grandes familles de biomolecules et leur role general.',
    'Choisir un test de reconnaissance simple adapte a une biomolecule.',
    'Comprendre l interet d un temoin positif et d un temoin negatif.',
    'Exploiter un resultat simple de caracterisation ou de dosage.',
  ],
  chapterQuestions: [
    'Comment mettre en evidence une biomolecule ?',
    'Pourquoi faut-il utiliser des temoins ?',
    'Que peut-on conclure a partir d un test ou d un spectre simple ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Choisir le bon test',
      intro:
        'Au laboratoire, on ne cherche pas une biomolecule "au hasard". On choisit un reactif ou une methode en fonction de la propriete recherchee.',
      documents: [
        createDocument('Quatre situations', [
          'Situation A : rechercher l amidon dans un extrait alimentaire.',
          'Situation B : rechercher une proteine dans un lait dilue.',
          'Situation C : mettre en evidence un sucre reducteur.',
          'Situation D : rechercher des lipides dans un produit biologique.',
        ]),
      ],
      instruction:
        'Associe a chaque situation un type de test plausible et justifie ton choix avec une phrase simple.',
      questions: [
        'Q1. Pourquoi le choix du test depend-il de la biomolecule recherchee ?',
        'Q2. Que risque-t-on si l on choisit un test inadapte ?',
        'Q3. Donne un exemple de resultat observable attendu pour un test positif.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Comprendre l interet des temoins',
      intro:
        'Un test ne s interprete pas seul. Il faut comparer le resultat obtenu a des temoins adaptes.',
      documents: [
        createDocument('Serie de tubes', [
          'Tube 1 : solution connue contenant la biomolecule recherchee.',
          'Tube 2 : eau distillee.',
          'Tube 3 : echantillon inconnu.',
          'Apres ajout du reactif, seul un tube prend la couleur attendue pour une reaction positive nette.',
        ]),
      ],
      instruction:
        'Explique le role de chacun des tubes dans la lecture du resultat.',
      questions: [
        'Q4. Quel est le role du temoin positif ?',
        'Q5. Quel est le role du temoin negatif ?',
        'Q6. Pourquoi l echantillon inconnu doit-il etre compare aux temoins ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Relier propriete et caracterisation',
      intro:
        'Une biomolecule peut aussi etre caracterisee par son absorption, son activite biologique ou son comportement dans une separation.',
      documents: [
        createDocument('Exemple de caracterisation', [
          'Une solution absorbe fortement a une certaine longueur d onde. Une autre solution presente une activite enzymatique mesurable. Une troisieme migre differemment lors d une separation.',
        ]),
      ],
      instruction:
        'Montre que plusieurs approches sont possibles pour caracteriser une biomolecule.',
      questions: [
        'Q7. Pourquoi un test colorimetrique n est-il pas la seule possibilite ?',
        'Q8. Donne deux autres proprietes qui peuvent aider a caracteriser une biomolecule.',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Les grandes familles de biomolecules',
      body: [
        'En premiere STL, on rencontre notamment des glucides, des lipides, des proteines et, selon le contexte, d autres molecules d interet biologique.',
        'Chaque famille possede des proprietes physicochimiques qui orientent les methodes de detection et de caracterisation.',
      ],
      takeaway:
        'Identifier une biomolecule suppose de connaitre quelques proprietes utiles de sa famille.',
    }),
    createCourseSection({
      title: '2. Les tests de reconnaissance',
      body: [
        'Un test de reconnaissance met en evidence une propriete ou une reaction caracteristique d une biomolecule.',
        'Le resultat peut etre visuel, par exemple un changement de couleur, ou instrumente selon le contexte.',
      ],
      takeaway:
        'Un test positif doit etre interprete a la lumiere du protocole et des temoins.',
    }),
    createCourseSection({
      title: '3. L importance des temoins',
      body: [
        'Le temoin positif montre l aspect attendu quand la biomolecule est presente.',
        'Le temoin negatif montre ce qui se passe en son absence. Les temoins securisent donc l interpretation du resultat.',
      ],
      takeaway:
        'Sans temoins, un resultat de test est beaucoup moins interpretable.',
    }),
    createCourseSection({
      title: '4. Caracteriser et exploiter un resultat',
      body: [
        'La caracterisation d une biomolecule peut s appuyer sur une absorption, une activite biologique, une separation ou un dosage.',
        'L important est de relier la technique choisie a la propriete exploitee.',
      ],
      takeaway:
        'Caracteriser une biomolecule, c est faire le lien entre une propriete et une methode.',
    }),
  ],
  method: {
    title: 'Methode - Interpreter un test de biomolecule',
    steps: [
      'Identifie d abord la biomolecule recherchee et la propriete exploitee.',
      'Observe ensuite le resultat de l echantillon et celui des temoins.',
      'Compare les observations avant de conclure.',
      'Redige une phrase simple : presence, absence ou resultat a confirmer.',
    ],
  },
  keyPoints: [
    'Le choix d un test depend de la biomolecule recherchee.',
    'Les temoins sont indispensables pour interpreter correctement un resultat.',
    'Une biomolecule peut etre caracterisee par plusieurs types de proprietes.',
    'Le resultat doit toujours etre relie au protocole et au contexte.',
  ],
  selfCheck: [
    'Je sais expliquer le role d un temoin positif et d un temoin negatif.',
    'Je sais justifier le choix d un test simple.',
    'Je sais citer plusieurs proprietes utiles pour caracteriser une biomolecule.',
    'Je sais formuler une conclusion claire a partir d un resultat de test.',
  ],
});

export const PREMIERE_MODULE_7_CONTENT = createBiotechContent({
  intro:
    'Separer les composants d un melange permet de purifier un produit, d identifier une substance ou de preparer une etape suivante de dosage. Le choix de la technique depend toujours de la propriete que l on cherche a exploiter.',
  objectives: [
    'Comprendre pourquoi on separe un melange au laboratoire.',
    'Choisir une technique simple de separation selon le contexte.',
    'Exploiter le resultat d une separation.',
    'Relier une technique a la propriete mise a profit.',
  ],
  chapterQuestions: [
    'Pourquoi separe-t-on les constituants d un melange ?',
    'Comment choisir entre filtration, centrifugation et chromatographie simple ?',
    'Que peut-on conclure a partir d une separation ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Choisir une technique de separation',
      intro:
        'Le laboratoire ne choisit pas la meme technique pour clarifier une suspension, recuperer un precipite ou separer des molecules dissoutes.',
      documents: [
        createDocument('Trois situations de laboratoire', [
          'Situation A : separer un precipite solide d un liquide.',
          'Situation B : concentrer des cellules apres culture dans un tube.',
          'Situation C : comparer les constituants colores d un melange.',
        ]),
      ],
      instruction:
        'Associe chaque situation a une technique simple de separation et justifie.',
      questions: [
        'Q1. Quelle technique choisis-tu pour la situation A ?',
        'Q2. Quelle technique choisis-tu pour la situation B ?',
        'Q3. Quelle technique choisis-tu pour la situation C ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Exploiter une separation',
      intro:
        'Une separation n est utile que si elle apporte une information interpretable.',
      documents: [
        createDocument('Exemple de chromatographie simple', [
          'Sur un support, un echantillon inconnu donne deux taches distinctes apres migration. Un temoin A donne une tache haute, un temoin B une tache basse.',
        ]),
      ],
      instruction:
        'Observe le resultat et explique ce qu il peut suggerer sur la composition de l echantillon.',
      questions: [
        'Q4. Que montre la presence de deux taches pour l echantillon ?',
        'Q5. Quel est l interet des temoins dans cette separation ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Relier la technique a la propriete exploitee',
      intro:
        'Une technique de separation fonctionne parce que les constituants du melange n ont pas tous le meme comportement physique ou chimique.',
      documents: [
        createDocument('Rappel de principe', [
          'En filtration, on utilise la difference d etat ou de taille des particules.',
          'En centrifugation, on exploite des differences de masse volumique ou de comportement dans un champ centrifuge.',
          'En chromatographie, on exploite des differences d affinite entre plusieurs phases.',
        ]),
      ],
      instruction:
        'Associe chaque technique a la propriete mise a profit.',
      questions: [
        'Q6. Quelle propriete est exploitee en filtration ?',
        'Q7. Quelle propriete est exploitee en centrifugation ?',
        'Q8. Quelle propriete est exploitee en chromatographie simple ?',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Pourquoi separer un melange ?',
      body: [
        'La separation peut servir a purifier, a preparer une analyse, a identifier un constituant ou a concentrer une fraction interessante.',
        'Le besoin de separation depend donc de la question scientifique ou technique posee.',
      ],
      takeaway:
        'On ne separe pas pour separer : on separe pour repondre a un objectif precis.',
    }),
    createCourseSection({
      title: '2. Quelques techniques simples',
      body: [
        'La filtration retient un solide dans un filtre et laisse passer le liquide.',
        'La centrifugation favorise la sedimentation ou la separation de constituants selon leur comportement dans le tube.',
        'La chromatographie simple permet de comparer des substances selon leur migration differente sur un support.',
      ],
      takeaway:
        'Chaque technique correspond a une propriete particuliere du melange ou de ses constituants.',
    }),
    createCourseSection({
      title: '3. Interpreter le resultat',
      body: [
        'Le resultat d une separation doit etre lu avec rigueur : presence d un depot, clarification d un liquide, nombre de taches, position relative, comparaison a un temoin.',
        'Comme toujours au laboratoire, une conclusion s appuie sur les observations et sur le protocole utilise.',
      ],
      takeaway:
        'Un resultat de separation n a de sens que s il est compare et interprete correctement.',
    }),
    createCourseSection({
      title: '4. Les limites',
      body: [
        'Une separation simple ne suffit pas toujours a identifier totalement un constituant.',
        'Selon le contexte, il peut etre necessaire de poursuivre par un dosage, une nouvelle separation ou un autre test.',
      ],
      takeaway:
        'Une technique de separation fournit une information utile, mais souvent partielle.',
    }),
  ],
  method: {
    title: 'Methode - Choisir une technique de separation',
    steps: [
      'Identifie d abord ce que tu veux obtenir : un liquide clair, un solide, une fraction cellulaire ou une information sur la composition.',
      'Repere ensuite la propriete qui distingue les constituants du melange.',
      'Choisis la technique la plus simple et la plus adaptee.',
      'Interprete enfin le resultat a partir des observations et des temoins disponibles.',
    ],
  },
  keyPoints: [
    'Le choix d une technique de separation depend du but de l etude.',
    'Filtration, centrifugation et chromatographie n exploitent pas les memes proprietes.',
    'Les temoins aident a exploiter un resultat de separation.',
    'Une separation fournit souvent une information partielle qui peut devoir etre completee.',
  ],
  selfCheck: [
    'Je sais associer une situation simple a une technique de separation adaptee.',
    'Je sais expliquer ce que montre une chromatographie simple.',
    'Je sais relier une technique a la propriete exploitee.',
    'Je sais rappeler les limites d une separation simple.',
  ],
});

export const PREMIERE_AT7_CONTENT = createBiotechContent({
  intro:
    'Cette activite technologique prolonge le cours sur la securite. Tu y appliques la demarche de prevention a une situation de laboratoire concrete pour apprendre a anticiper les risques avant de manipuler.',
  objectives: [
    'Analyser une situation de travail avant la manipulation.',
    'Repere les dangers biologiques, chimiques et materiels.',
    'Choisir des moyens de prevention pertinents.',
    'Justifier des decisions de securite dans un cas concret.',
  ],
  chapterQuestions: [
    'Comment mener une analyse a priori des risques ?',
    'Quels documents faut-il consulter avant de manipuler ?',
    'Comment choisir entre prevention collective, organisationnelle et individuelle ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Etape 1',
      title: 'Decrire une situation de travail',
      intro:
        'Une analyse des risques commence toujours par une description factuelle de la manipulation et de son contexte.',
      documents: [
        createDocument('Cas d etude', [
          'Un eleve doit preparer une suspension microbienne, effectuer un transfert en conditions propres, manipuler un produit chimique de nettoyage puis eliminer les dechets generes.',
        ]),
      ],
      instruction:
        'Identifie les 5 M de cette situation avant d aborder les risques eux-memes.',
      questions: [
        'Q1. Decris la situation de travail en utilisant la regle des 5 M.',
        'Q2. Quels elements de contexte doivent etre precises avant toute analyse ?',
      ],
    }),
    createQuestionSet({
      tag: 'Etape 2',
      title: 'Reperer les situations exposantes',
      intro:
        'Il faut ensuite identifier les moments ou le manipulateur peut etre expose a un danger.',
      documents: [
        createDocument('Moments critiques', [
          'Ouverture d un recipient, transfert de culture, utilisation d une verrerie fragile, contact possible avec un produit de nettoyage, elimination des dechets.',
        ]),
      ],
      instruction:
        'Classe les situations exposantes puis relie-les a un danger possible.',
      questions: [
        'Q3. Cite trois situations exposantes possibles dans ce cas.',
        'Q4. Associe chaque situation exposante a un danger principal.',
      ],
    }),
    createQuestionSet({
      tag: 'Etape 3',
      title: 'Proposer la prevention',
      intro:
        'La prevention ne repose pas sur un seul geste. Elle combine organisation, protections collectives, protections individuelles et gestion correcte des dechets.',
      documents: [
        createDocument('Aide a la decision', [
          'Mesures possibles : plan de travail degage, procedure lue avant manipulation, poste desinfecte, materiel prepare a l avance, hotte ou zone adaptee si necessaire, blouse, gants, lunettes, tri correct des dechets.',
        ]),
      ],
      instruction:
        'Choisis les mesures les plus pertinentes pour la situation et justifie leur utilite.',
      questions: [
        'Q5. Quelles mesures de prevention doivent etre mises en place avant la manipulation ?',
        'Q6. Quelles protections sont a mobiliser pendant la manipulation ?',
        'Q7. Que faut-il prevoir pour la fin de manipulation et les dechets ?',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. La demarche a priori des risques',
      body: [
        'L analyse a priori des risques consiste a anticiper les dangers avant de commencer une manipulation.',
        'Elle repose sur la description de la situation de travail, l identification des situations exposantes, des evenements dangereux possibles et des dommages envisageables.',
      ],
      takeaway:
        'Reflechir avant d agir fait partie du travail de laboratoire.',
    }),
    createCourseSection({
      title: '2. Les documents utiles',
      body: [
        'Pour analyser une situation, on s appuie sur le protocole, les fiches techniques, les etiquettes, les pictogrammes, les consignes de securite et les documents de laboratoire disponibles.',
        'Ces documents aident a choisir des mesures adaptees au contexte reel de la manipulation.',
      ],
      takeaway:
        'Une prevention solide s appuie sur des informations precises et pas sur l habitude seule.',
    }),
    createCourseSection({
      title: '3. Choisir la prevention la plus efficace',
      body: [
        'On cherche d abord a supprimer ou reduire le danger, puis a organiser le travail pour limiter l exposition.',
        'Les protections collectives et les EPI viennent ensuite completer cette prevention.',
      ],
      takeaway:
        'Mettre des gants ne suffit pas si l organisation du travail reste mauvaise.',
    }),
    createCourseSection({
      title: '4. Integrer la fin de manipulation',
      body: [
        'La securite ne s arrete pas quand la mesure est faite. Il faut aussi gerer correctement le nettoyage, le rangement et l elimination des dechets.',
        'Cette etape conditionne la securite des manipulateurs suivants et la qualite globale du laboratoire.',
      ],
      takeaway:
        'La prevention concerne toute la manipulation, du debut a la fin.',
    }),
  ],
  method: {
    title: 'Methode - Conduire une analyse a priori des risques',
    steps: [
      'Decris d abord la situation de travail avec les 5 M.',
      'Repere ensuite les situations exposantes les plus importantes.',
      'Associe a chacune un danger et un dommage possible.',
      'Choisis enfin des mesures de prevention realistes et hierarchisees.',
    ],
  },
  keyPoints: [
    'L analyse a priori des risques se fait avant la manipulation.',
    'Elle s appuie sur les 5 M, les situations exposantes et les documents de laboratoire.',
    'La prevention la plus efficace est celle qui reduit le danger a la source.',
    'La gestion des dechets et du poste fait partie de la securite.',
  ],
  selfCheck: [
    'Je sais decrire une situation de travail avec les 5 M.',
    'Je sais identifier une situation exposante.',
    'Je sais proposer une mesure de prevention justifiee.',
    'Je sais integrer la gestion de fin de manipulation a mon analyse.',
  ],
});

export const PREMIERE_C8_CONTENT = createBiotechContent({
  intro:
    'Le dosage volumetrique permet de determiner la concentration d une espece chimique en la faisant reagir avec une solution de concentration connue. Pour l utiliser correctement, il faut maitriser le vocabulaire, le repere de l equivalence et la logique du calcul.',
  objectives: [
    'Definir titrant, titree, reaction support et equivalence.',
    'Lire le montage et decrire les etapes d un dosage volumetrique.',
    'Exploiter l equivalence pour calculer une concentration.',
    'Identifier les conditions qui rendent le dosage exploitable.',
  ],
  chapterQuestions: [
    'Quel est le principe d un dosage volumetrique ?',
    'Comment reconnaitre le moment de l equivalence ?',
    'Comment utiliser l equivalence pour calculer une concentration ?',
  ],
  questionSets: [
    createQuestionSet({
      tag: 'Activite 1',
      title: 'Comprendre le montage de dosage',
      intro:
        'Le montage met en relation une burette contenant la solution titrante et un recipient contenant la solution a doser.',
      documents: [
        createDocument('Montage type', [
          'La burette contient une solution de concentration connue. Dans l erlenmeyer, on place un volume mesure de la solution a doser, parfois avec un indicateur colore ou une sonde de mesure.',
        ]),
      ],
      instruction:
        'Decris le role de chaque element du montage sans oublier le sens d ajout de la solution titrante.',
      questions: [
        'Q1. Quelle est la solution titrante ?',
        'Q2. Quelle est la solution titree ?',
        'Q3. Pourquoi le volume initial de la solution a doser doit-il etre mesure avec precision ?',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 2',
      title: 'Repere l equivalence',
      intro:
        'Au cours du dosage, on cherche le moment ou les reactifs sont introduits dans les proportions imposees par l equation de reaction.',
      documents: [
        createDocument('Observation experimentale', [
          'Lors d un dosage colorimetrique, la teinte change durablement a partir d un certain volume verse. Lors d un dosage suivi par capteur, la courbe presente une variation nette autour d un volume caracteristique.',
        ]),
      ],
      instruction:
        'Explique ce que signifie ce volume caracteristique et pourquoi il est important.',
      questions: [
        'Q4. Que signifie le volume a l equivalence ?',
        'Q5. Pourquoi parle-t-on de changement durable et non de changement passager dans un dosage colorimetrique ?',
        'Q6. Cite deux facons possibles de repere l equivalence.',
      ],
    }),
    createQuestionSet({
      tag: 'Activite 3',
      title: 'Exploiter l equivalence pour calculer',
      intro:
        'Le calcul s appuie sur la reaction support, les coefficients stoechiometriques et le volume equivalent mesure.',
      documents: [
        createDocument('Donnees de calcul', [
          'On dose 10,0 mL d une solution inconnue par une solution titrante a 0,100 mol.L-1. L equivalence est observee pour 12,5 mL de titrant verse. La reaction support met en jeu un rapport stoechiometrique simple de 1 pour 1.',
        ]),
      ],
      instruction:
        'Repere les donnees utiles, rappelle la relation a l equivalence puis realise le calcul de concentration.',
      questions: [
        'Q7. Quelles donnees numeriques faut-il utiliser dans le calcul ?',
        'Q8. Quelle relation peut-on ecrire a l equivalence dans ce cas simple ?',
        'Q9. Redige la conclusion finale avec l unite adaptee.',
      ],
    }),
  ],
  courseSections: [
    createCourseSection({
      title: '1. Le principe du dosage volumetrique',
      body: [
        'Un dosage volumetrique consiste a faire reagir une solution de concentration inconnue avec une solution de concentration connue.',
        'La reaction support doit etre adaptee au dosage et permettre de repere le moment de l equivalence.',
      ],
      takeaway:
        'Le dosage sert a determiner une concentration a partir d un volume mesure experimentalement.',
    }),
    createCourseSection({
      title: '2. Le vocabulaire indispensable',
      body: [
        'La solution titrante est celle dont la concentration est connue et que l on ajoute progressivement.',
        'La solution titree est celle dont on cherche la concentration.',
        'L equivalence correspond au moment ou les reactifs sont en proportions stoechiometriques.',
      ],
      takeaway:
        'Titrant, titree et equivalence sont les trois mots a maitriser absolument.',
    }),
    createCourseSection({
      title: '3. Exploiter l equivalence',
      body: [
        'Le volume verse a l equivalence permet d ecrire une relation entre les quantites de matiere mises en jeu.',
        'Cette relation depend des coefficients de l equation de reaction. Elle permet ensuite de calculer la concentration de la solution titree.',
      ],
      takeaway:
        'Le calcul d un dosage part toujours de la relation a l equivalence.',
    }),
    createCourseSection({
      title: '4. Conditions de validite du dosage',
      body: [
        'Pour qu un dosage soit exploitable, la reaction support doit etre adaptee et l equivalence doit etre reperee correctement.',
        'La lecture des volumes, le choix de la verrerie et la rigueur de la manipulation influencent directement la qualite du resultat.',
      ],
      takeaway:
        'Un dosage ne vaut que si la technique et le raisonnement sont tous les deux maitrises.',
    }),
  ],
  method: {
    title: 'Methode - Resoudre un exercice de dosage volumetrique',
    steps: [
      'Identifie la solution titrante, la solution titree et la reaction support.',
      'Repere le volume verse a l equivalence.',
      'Ecris la relation stoechiometrique a l equivalence.',
      'Calcule la concentration cherchee en gardant les unites coherentes.',
      'Termine par une conclusion redigee avec la valeur et l unite.',
    ],
  },
  commonMistakes: [
    'Confondre solution titrante et solution titree.',
    'Utiliser un volume en mL dans un calcul sans verifier les unites.',
    'Oublier les coefficients de l equation de reaction.',
  ],
  keyPoints: [
    'Le dosage volumetrique determine une concentration inconnue a partir d une solution connue.',
    'L equivalence est le point cle du raisonnement.',
    'Le calcul repose sur la relation stoechiometrique entre les reactifs.',
    'La precision du volume et la rigueur du protocole conditionnent la qualite du resultat.',
  ],
  selfCheck: [
    'Je sais definir titrant, titree et equivalence.',
    'Je sais expliquer comment on repere l equivalence.',
    'Je sais identifier les donnees utiles dans un exercice de dosage.',
    'Je sais rediger une conclusion de calcul avec l unite correcte.',
  ],
  practiceIntro:
    'Revois la logique du dosage avec deux petites questions rapides.',
  practice: [
    {
      question:
        'Dans un dosage, quelle solution doit avoir une concentration connue au depart ?',
      expected:
        'La solution titrante doit avoir une concentration connue.',
    },
    {
      question:
        'Pourquoi la burette doit-elle etre lue avec precision lors d un dosage volumetrique ?',
      expected:
        'Parce que le volume verse a l equivalence sert directement au calcul de concentration.',
    },
  ],
});
