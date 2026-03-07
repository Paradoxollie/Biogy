export const STL_REFERENCE_LINKS = [
  {
    id: 'stl-hub',
    title: 'Programmes et ressources en série STL',
    source: 'Eduscol',
    updatedAt: 'Août 2025',
    url: 'https://eduscol.education.fr/cid143748/stl-bac-2021.html',
  },
  {
    id: 'premiere-biobio',
    title: 'Programme de biochimie-biologie de première STL',
    source: 'Eduscol',
    updatedAt: 'Consulté le 7 mars 2026',
    url: 'https://eduscol.education.fr/document/23089/download',
  },
  {
    id: 'premiere-biotech',
    title: 'Programme de biotechnologies de première STL',
    source: 'Eduscol',
    updatedAt: 'Consulté le 7 mars 2026',
    url: 'https://eduscol.education.fr/document/23092/download',
  },
  {
    id: 'terminale-bbb',
    title: 'Programme de biochimie, biologie et biotechnologies de terminale STL',
    source: 'Eduscol',
    updatedAt: 'Consulté le 7 mars 2026',
    url: 'https://eduscol.education.fr/document/23101/download',
  },
  {
    id: 'discipline',
    title: 'Biotechnologies, sciences et techniques médico-sociales',
    source: 'Eduscol',
    updatedAt: 'Janvier 2026',
    url: 'https://eduscol.education.fr/2340/biotechnologies-sciences-et-techniques-medico-sociales',
  },
];

export const STL_PAGE_METHOD = [
  {
    id: 'lire',
    title: 'Lire le chapitre dans l ordre',
    description: 'Commence par les objectifs, puis lis le cours sans chercher à tout mémoriser d un coup.',
    tone: 'blue',
  },
  {
    id: 'mots-cles',
    title: 'Retenir le vocabulaire',
    description: 'En STL, un mot mal utilisé peut faire perdre le sens d une explication scientifique.',
    tone: 'purple',
  },
  {
    id: 'labo',
    title: 'Relier le cours au laboratoire',
    description: 'Chaque chapitre doit t aider à comprendre ce que tu fais en TP et pourquoi tu le fais.',
    tone: 'teal',
  },
  {
    id: 'tester',
    title: 'Te tester régulièrement',
    description: 'Utilise les questions de fin de chapitre pour vérifier ce que tu sais expliquer seul.',
    tone: 'green',
  },
];

export const STL_BOOKS = [
  {
    id: 'premiere',
    level: 'Première STL',
    tone: 'blue',
    anchor: 'livre-premiere',
    badge: 'Programme de première',
    title: 'Première STL - Construire les bases pour la suite',
    introduction:
      'En première STL, tu avances en parallèle en biochimie-biologie et en biotechnologies. Le but n est pas seulement d apprendre des notions : il faut aussi prendre de bonnes habitudes de laboratoire, savoir observer, mesurer, raisonner et communiquer clairement.',
    studentGuide:
      'Sur Biogy, cette partie doit te servir comme un vrai livre de cours : tu repères le chapitre, tu lis l essentiel, tu relies le cours au TP, puis tu vérifies ce que tu es capable d expliquer seul.',
    teacherNote:
      'Le premier chapitre rédigé ci-dessous a été choisi comme chapitre d entrée pour aider les élèves à prendre leurs repères en début d année, même si les progressions locales peuvent varier selon les classes.',
    chapterCountLabel: '18 chapitres ou modules de travail',
    sourceIds: ['stl-hub', 'premiere-biobio', 'premiere-biotech'],
    tocSections: [
      {
        id: 'premiere-biobio',
        title: 'Biochimie-biologie',
        description: 'Les deux grands thèmes de biochimie-biologie et leurs modules transversaux.',
        chapters: [
          {
            code: 'BB1',
            title: 'Mécanismes moléculaires et physiologiques de la nutrition',
            note: 'Comprendre digestion, absorption et excrétion.',
            status: 'structure',
          },
          {
            code: 'BB2',
            title: 'Mécanismes physiologiques et moléculaires de la reproduction et de la transmission des caractères héréditaires',
            note: 'Relier reproduction, génétique et expression de l information.',
            status: 'structure',
          },
          {
            code: 'BBA',
            title: 'Relations structures et propriétés des biomolécules',
            note: 'Installer les bases de biochimie utiles à toute la suite.',
            status: 'structure',
          },
          {
            code: 'BBB',
            title: 'Relations structures et fonctions physiologiques',
            note: 'Relier tissus, organes et fonctions.',
            status: 'structure',
          },
          {
            code: 'BBC',
            title: 'Milieu intérieur et homéostasie',
            note: 'Comprendre les grandes régulations du vivant.',
            status: 'structure',
          },
          {
            code: 'BBD',
            title: 'Information et communication',
            note: 'S entraîner à expliquer, schématiser et argumenter.',
            status: 'structure',
          },
        ],
      },
      {
        id: 'premiere-biotech',
        title: 'Biotechnologies',
        description: 'Les chapitres de laboratoire et les modules transversaux de première.',
        chapters: [
          {
            code: 'BT1',
            title: 'Observer la diversité du vivant à l échelle microscopique',
            note: 'Le chapitre d entrée déjà rédigé sur Biogy.',
            status: 'ready',
          },
          {
            code: 'BT2',
            title: 'Cultiver des micro-organismes',
            note: 'Asepsie, milieux de culture et croissance.',
            status: 'structure',
          },
          {
            code: 'BT3',
            title: 'Caractériser pour identifier les micro-organismes',
            note: 'Lire et croiser plusieurs résultats pour identifier.',
            status: 'structure',
          },
          {
            code: 'BT4',
            title: 'Réaliser un dénombrement de micro-organismes présents dans un produit biologique',
            note: 'Comparer les méthodes et interpréter les résultats.',
            status: 'structure',
          },
          {
            code: 'BT5',
            title: 'Préparer des solutions utilisables au laboratoire',
            note: 'Calculs, dilutions, traçabilité et rigueur.',
            status: 'structure',
          },
          {
            code: 'BT6',
            title: 'Détecter et caractériser les biomolécules',
            note: 'Réactions de détection, témoins et lecture de résultats.',
            status: 'structure',
          },
          {
            code: 'BT7',
            title: 'Séparer les composants d un mélange',
            note: 'Filtration, centrifugation, chromatographie, électrophorèse.',
            status: 'structure',
          },
          {
            code: 'BT8',
            title: 'Déterminer la concentration d une biomolécule dans un produit biologique',
            note: 'Étalonnage, dosage et expression d un résultat.',
            status: 'structure',
          },
          {
            code: 'BTA',
            title: 'S initier à la recherche expérimentale et à la démarche de projet',
            note: 'Formuler une question, un protocole et une conclusion.',
            status: 'structure',
          },
          {
            code: 'BTB',
            title: 'Prévenir les risques au laboratoire de biotechnologies',
            note: 'Identifier un danger et choisir la bonne prévention.',
            status: 'structure',
          },
          {
            code: 'BTC',
            title: 'Obtenir des résultats de mesure fiables',
            note: 'Précision, justesse et qualité des résultats.',
            status: 'structure',
          },
          {
            code: 'BTD',
            title: 'Utiliser des outils numériques en biotechnologies',
            note: 'Chercher, traiter et communiquer des données scientifiques.',
            status: 'structure',
          },
        ],
      },
    ],
    firstChapter: {
      code: 'BT1',
      title: 'Chapitre 1 - Observer la diversité du vivant à l échelle microscopique',
      subtitle: 'Première STL - Biotechnologies',
      hook:
        'En biotechnologies, on commence souvent par observer avant d interpréter. Ce premier chapitre t apprend à regarder un échantillon avec méthode, à utiliser correctement le microscope et à décrire ce que tu vois avec un vocabulaire scientifique précis.',
      objectives: [
        'Reconnaître quelques grands types d organisation cellulaire observables au microscope.',
        'Utiliser correctement un microscope optique sans perdre l échantillon ni abîmer le matériel.',
        'Distinguer une observation, une interprétation et un schéma scientifique.',
        'Relier une structure visible à une fonction ou à un mode de vie simple.',
      ],
      vocabulary: [
        'cellule',
        'procaryote',
        'eucaryote',
        'membrane plasmique',
        'paroi',
        'noyau',
        'organite',
        'grossissement',
        'champ microscopique',
        'schéma d observation',
      ],
      sections: [
        {
          title: '1. Pourquoi observe-t-on à l échelle microscopique ?',
          paragraphs: [
            'À l échelle de l œil nu, une grande partie du vivant reste invisible. Le microscope permet donc d accéder à un niveau d organisation indispensable en STL : celui de la cellule, des tissus fins et des micro-organismes.',
            'Observer ne consiste pas à regarder rapidement une lame. Il faut repérer une forme, une taille relative, une organisation, puis comparer plusieurs observations pour en tirer une conclusion prudente.',
          ],
        },
        {
          title: '2. Quelles organisations peut-on reconnaître ?',
          paragraphs: [
            'Une cellule procaryote ne possède pas de noyau individualisé. Une cellule eucaryote possède au contraire un noyau et différents compartiments internes. Cette différence simple permet déjà de trier plusieurs observations.',
            'Chez les eucaryotes, certaines structures donnent des indices utiles : une cellule végétale montre souvent une paroi rigide et une grande vacuole ; une levure est un eucaryote unicellulaire entouré d une paroi ; une cellule animale ne possède pas de paroi cellulosique.',
          ],
        },
        {
          title: '3. Bien utiliser un microscope optique',
          paragraphs: [
            'On commence toujours par le plus faible grossissement, car le champ observé est plus large et la mise au point plus facile. Le grossissement total est égal au grossissement de l oculaire multiplié par celui de l objectif.',
            'La vis macrométrique s utilise au départ, avec prudence, puis on affine avec la vis micrométrique. L objectif ne doit jamais venir écraser la lame. Une bonne observation dépend autant du réglage de la lumière que de la mise au point.',
          ],
        },
        {
          title: '4. Décrire correctement ce que l on voit',
          paragraphs: [
            'En STL, une bonne copie ne mélange pas observation et interprétation. Dire “je vois des cellules arrondies regroupées” relève de l observation. Dire “ce sont forcément des bactéries pathogènes” relève déjà d une interprétation non justifiée.',
            'Le schéma d observation doit être propre, fidèle, légendé et proportionné. On ne dessine pas pour faire joli : on dessine pour montrer ce qui est important et pour garder une trace scientifique exploitable.',
          ],
        },
      ],
      method: {
        title: 'Méthode - Réaliser un schéma d observation utile',
        steps: [
          'Indique le titre de l observation et le grossissement utilisé.',
          'Dessine uniquement ce qui est réellement visible, sans inventer de détails.',
          'Utilise des traits fins, continus et des légendes alignées.',
          'Ajoute, si possible, un élément de comparaison ou une barre d échelle.',
        ],
      },
      labReflexes: [
        'Nettoie la lame, la lamelle et les objectifs avant et après utilisation.',
        'Commence par le plus faible objectif.',
        'Ne confonds jamais vitesse et efficacité : une observation réussie prend du temps.',
        'Garde une trace écrite claire pendant le TP.',
      ],
      keyIdeas: [
        'Observer, ce n est pas deviner : il faut décrire avant d interpréter.',
        'Le microscope optique impose une méthode de réglage et de mise au point.',
        'Les structures visibles donnent déjà des indices sur le type cellulaire observé.',
      ],
      selfCheck: [
        'Quelle différence simple peux-tu donner entre une cellule procaryote et une cellule eucaryote ?',
        'Pourquoi commence-t-on toujours avec le plus faible grossissement ?',
        'Quelle différence fais-tu entre observation et interprétation ?',
      ],
      sources: [
        {
          title: 'Programme de biotechnologies de première STL',
          url: 'https://eduscol.education.fr/document/23092/download',
        },
        {
          title: 'App_BioBio_1STLBTK',
          url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/enseigner-en-stl-biotechnologies/appbiobio1stlbtk',
        },
        {
          title: 'Accompagnement des techniques de biotechnologies',
          url: 'https://edubase.eduscol.education.fr/fiche/21971',
        },
      ],
    },
  },
  {
    id: 'terminale',
    level: 'Terminale STL',
    tone: 'teal',
    anchor: 'livre-terminale',
    badge: 'Programme de terminale',
    title: 'Terminale STL - Approfondir, relier, argumenter',
    introduction:
      'En terminale STL, les parties scientifique, technologique et laboratoire avancent ensemble. L enjeu n est plus seulement de connaître un cours, mais de savoir l utiliser pour analyser une situation, comprendre un protocole, justifier un résultat et préparer les épreuves du baccalauréat.',
    studentGuide:
      'Dans cette partie, le sommaire te permet de te repérer rapidement. Le chapitre rédigé te montre aussi le niveau d explication attendu en terminale : vocabulaire exact, raisonnement clair, lien constant avec les applications biotechnologiques.',
    teacherNote:
      'Le chapitre rédigé ci-dessous a été choisi comme porte d entrée en terminale, car l activité enzymatique et les voies métaboliques éclairent ensuite de nombreux thèmes du programme.',
    chapterCountLabel: '18 chapitres ou modules de travail',
    sourceIds: ['stl-hub', 'terminale-bbb', 'discipline'],
    tocSections: [
      {
        id: 'terminale-s',
        title: 'Partie S - Concepts scientifiques',
        description: 'Les grands repères scientifiques de la terminale BBB.',
        chapters: [
          {
            code: 'S1',
            title: 'Enzymes et voies métaboliques',
            note: 'Le chapitre d ouverture déjà rédigé sur Biogy.',
            status: 'ready',
          },
          {
            code: 'S2',
            title: 'Immunité cellulaire et moléculaire',
            note: 'Relier acteurs cellulaires, molécules et enjeux de santé.',
            status: 'structure',
          },
          {
            code: 'S3',
            title: 'Propriétés de l ADN et réplication',
            note: 'Comprendre l ADN, sa duplication et ses usages.',
            status: 'structure',
          },
          {
            code: 'S4',
            title: 'Microorganismes et domaines d application des biotechnologies',
            note: 'Relier microbiologie, société et applications.',
            status: 'structure',
          },
        ],
      },
      {
        id: 'terminale-t',
        title: 'Partie T - Fondamentaux technologiques expérimentaux',
        description: 'Les techniques de laboratoire à maîtriser en terminale.',
        chapters: [
          {
            code: 'T1',
            title: 'Observer la diversité du vivant',
            note: 'Microscopies et observations plus expertes.',
            status: 'structure',
          },
          {
            code: 'T2',
            title: 'Cultiver des micro-organismes, suivre ou limiter leur croissance',
            note: 'Croissance, culture sélective et antimicrobiens.',
            status: 'structure',
          },
          {
            code: 'T3',
            title: 'Caractériser pour identifier des micro-organismes',
            note: 'Construire une identification solide et justifiée.',
            status: 'structure',
          },
          {
            code: 'T4',
            title: 'Réaliser un dénombrement de micro-organismes présents dans un produit biologique',
            note: 'Choisir la bonne méthode et interpréter le résultat.',
            status: 'structure',
          },
          {
            code: 'T5',
            title: 'Préparer des solutions utilisables au laboratoire en biologie moléculaire',
            note: 'Travailler les micro-volumes avec rigueur.',
            status: 'structure',
          },
          {
            code: 'T6',
            title: 'Détecter et caractériser les biomolécules',
            note: 'Réactions immunologiques et témoins.',
            status: 'structure',
          },
          {
            code: 'T7',
            title: 'Extraire, séparer, purifier les composants d un mélange',
            note: 'Passer d une technique à l autre avec logique.',
            status: 'structure',
          },
          {
            code: 'T8',
            title: 'Déterminer la concentration d une biomolécule dans un produit biologique',
            note: 'Dosages, étalonnage et esprit critique.',
            status: 'structure',
          },
          {
            code: 'T9',
            title: 'Utiliser les technologies de l ADN',
            note: 'PCR, digestion, clonage et enjeux éthiques.',
            status: 'structure',
          },
          {
            code: 'T10',
            title: 'Découvrir les technologies cellulaires végétales',
            note: 'Micropropagation et biotechnologies végétales.',
            status: 'structure',
          },
        ],
      },
      {
        id: 'terminale-l',
        title: 'Partie L - Travailler ensemble au laboratoire',
        description: 'Le cadre de projet, de prévention, de mesure et de numérique.',
        chapters: [
          {
            code: 'L1',
            title: 'Pratiquer une démarche de projet pour répondre à un enjeu des biotechnologies',
            note: 'Organiser et valoriser un projet technologique.',
            status: 'structure',
          },
          {
            code: 'L2',
            title: 'Pratiquer une démarche de prévention des risques au laboratoire de biotechnologies',
            note: 'Analyser une situation de travail et prévenir.',
            status: 'structure',
          },
          {
            code: 'L3',
            title: 'Obtenir des résultats de mesure fiables',
            note: 'Justesse, fidélité et acceptabilité des résultats.',
            status: 'structure',
          },
          {
            code: 'L4',
            title: 'Mobiliser les outils numériques en biotechnologies',
            note: 'Traiter des données, utiliser des bases et raisonner proprement.',
            status: 'structure',
          },
        ],
      },
    ],
    firstChapter: {
      code: 'S1',
      title: 'Chapitre 1 - Enzymes et voies métaboliques',
      subtitle: 'Terminale STL - Partie scientifique',
      hook:
        'En terminale, comprendre une enzyme ne sert pas seulement à répondre à une question de cours. Cela permet aussi d expliquer un dosage, une fermentation, une production industrielle ou un résultat expérimental observé en laboratoire.',
      objectives: [
        'Définir une enzyme comme catalyseur biologique et expliquer sa spécificité.',
        'Identifier les facteurs qui modifient l activité enzymatique.',
        'Comprendre ce qu est une voie métabolique et le rôle de l ATP.',
        'Relier respiration, fermentation et activité enzymatique à des situations de biotechnologies.',
      ],
      vocabulary: [
        'enzyme',
        'substrat',
        'site actif',
        'catalyse',
        'complexe enzyme-substrat',
        'spécificité',
        'voie métabolique',
        'ATP',
        'respiration',
        'fermentation',
      ],
      sections: [
        {
          title: '1. Une enzyme est un catalyseur biologique',
          paragraphs: [
            'Une enzyme accélère une réaction chimique sans être consommée au cours de cette réaction. Dans les cellules, cela permet d obtenir rapidement une transformation utile, à température modérée et dans un milieu compatible avec le vivant.',
            'La plupart des enzymes sont des protéines. Elles possèdent une structure précise, indispensable à leur activité. Si cette structure est modifiée, l enzyme peut perdre tout ou partie de son efficacité.',
          ],
        },
        {
          title: '2. Pourquoi parle-t-on de spécificité ?',
          paragraphs: [
            'Une enzyme n agit pas au hasard. Son site actif reconnaît un ou quelques substrats particuliers. Cette spécificité explique pourquoi chaque étape d une voie métabolique dépend d une enzyme donnée.',
            'On peut donc relier la structure de l enzyme à sa fonction : si le substrat ne se fixe pas correctement, la réaction ne se déroule pas comme attendu.',
          ],
        },
        {
          title: '3. Ce qui modifie l activité enzymatique',
          paragraphs: [
            'La température, le pH, la concentration en substrat ou encore la présence de certains inhibiteurs peuvent modifier la vitesse d une réaction enzymatique. Une température trop élevée ou un pH inadapté peuvent déformer le site actif : on parle alors de dénaturation.',
            'En laboratoire, cela signifie qu un protocole enzymatique doit être strictement maîtrisé. Une mauvaise température ou un mauvais pH peuvent suffire à fausser tout un résultat.',
          ],
        },
        {
          title: '4. Des enzymes aux voies métaboliques',
          paragraphs: [
            'Une voie métabolique correspond à une succession ordonnée de réactions chimiques. Chaque étape dépend d une enzyme précise. L ensemble permet à la cellule de transformer de la matière, de produire de l énergie ou de fabriquer des molécules utiles.',
            'L ATP joue ici un rôle central : c est une molécule énergétique utilisée par la cellule. La respiration cellulaire et les fermentations sont deux grands exemples de voies métaboliques à connaître en STL.',
          ],
        },
        {
          title: '5. Pourquoi ce chapitre est-il central en STL ?',
          paragraphs: [
            'Les enzymes sont présentes dans de nombreuses situations étudiées en terminale : dosages, fermentation, diagnostic, industrie agroalimentaire, biotechnologies végétales ou encore contrôle qualité.',
            'Mieux tu comprends l activité enzymatique, plus il devient facile de lire un protocole, de prévoir un résultat et d expliquer ce qui a fonctionné ou échoué pendant un TP.',
          ],
        },
      ],
      method: {
        title: 'Méthode - Lire une expérience enzymatique',
        steps: [
          'Repère d abord la variable que le protocole fait varier : température, pH, temps, substrat ou enzyme.',
          'Identifie ensuite ce qui est mesuré : produit formé, disparition du substrat, absorbance, couleur, dégagement gazeux.',
          'Observe enfin si le résultat augmente, se stabilise ou diminue, puis relie cette évolution à l activité enzymatique.',
        ],
      },
      labReflexes: [
        'Toujours vérifier la température et le pH indiqués dans un protocole enzymatique.',
        'Ne pas confondre quantité d enzyme et vitesse de réaction sans regarder le contexte expérimental.',
        'Comparer les témoins et les essais avant de conclure.',
        'Rédiger une conclusion qui relie le résultat à la question posée.',
      ],
      keyIdeas: [
        'Une enzyme est un catalyseur biologique spécifique.',
        'L activité enzymatique dépend fortement des conditions du milieu.',
        'Les voies métaboliques reposent sur un enchaînement d étapes catalysées.',
      ],
      selfCheck: [
        'Pourquoi une enzyme peut-elle perdre son activité si la température devient trop élevée ?',
        'Que signifie la spécificité d une enzyme ?',
        'Quel lien peux-tu faire entre enzymes, ATP et voies métaboliques ?',
      ],
      sources: [
        {
          title: 'Programme de biochimie, biologie et biotechnologies de terminale STL',
          url: 'https://eduscol.education.fr/document/23101/download',
        },
        {
          title: 'Ressources disciplinaires Eduscol - Biotechnologies',
          url: 'https://eduscol.education.fr/2340/biotechnologies-sciences-et-techniques-medico-sociales',
        },
        {
          title: 'Cahier de bord numérique pour le Grand oral en biotechnologies',
          url: 'https://edubase.eduscol.education.fr/fiche/21297',
        },
      ],
    },
  },
];
