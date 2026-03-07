const PREMIERE_BIOBIO_SOURCES = [
  {
    title: 'Programme de biochimie-biologie de première STL',
    url: 'https://eduscol.education.fr/document/23089/download',
  },
  {
    title: 'Programmes et ressources en série STL',
    url: 'https://eduscol.education.fr/1652/programmes-et-ressources-en-serie-stl',
  },
  {
    title: 'Manuel Delagrave Biochimie-Biologie 1re STL',
    url: 'https://www.editions-delagrave.fr/site/302881',
  },
];

const createDocument = (title, body, extra = {}) => ({
  label: extra.label || 'Document',
  title,
  source: extra.source,
  diagramSpec: extra.diagramSpec,
  body: Array.isArray(body) ? body : [body],
});

const createQuestionSet = ({
  tag,
  title,
  intro,
  documents = [],
  instruction,
  questions,
}) => ({
  tag,
  title,
  intro,
  documents,
  instruction,
  questions,
});

const createCourseSection = ({ title, body, takeaway }) => ({
  title,
  body,
  takeaway,
});

const createPremiereLesson = ({
  id,
  code,
  title,
  summary,
  intro,
  objectives,
  chapterQuestions,
  questionSets,
  courseSections,
  method,
  diagrams,
  keyPoints,
  selfCheck,
}) => ({
  id,
  code,
  title,
  summary,
  content: {
    intro,
    objectives,
    chapterQuestionsTitle: 'Questions du cours',
    chapterQuestions,
    questionSetsTitle: 'Travail guidé',
    questionSetsIntro:
      'Lis les supports proposés, réponds aux questions sans recopier le document, puis utilise le cours à retenir pour vérifier que les idées essentielles sont bien comprises.',
    questionSets,
    courseSectionsTitle: 'Cours à retenir',
    courseSectionsIntro:
      'Quand le travail guidé est terminé, retiens les notions, les définitions et les relations indispensables pour le chapitre.',
    courseSections,
    method,
    diagrams,
    keyPointsTitle: 'À retenir',
    keyPoints,
    selfCheckTitle: "Je vérifie que j'ai compris",
    selfCheck,
    sources: PREMIERE_BIOBIO_SOURCES,
  },
});

export const PREMIERE_BIOBIO_THEME_1_LESSONS = [
  createPremiereLesson({
    id: 'bb1-1-se-nourrir',
    code: '1.1',
    title: 'Se nourrir pour se construire',
    summary:
      "Relier les besoins de l'organisme, la composition des aliments et la notion d'alimentation équilibrée.",
    intro:
      "Ce cours permet de comprendre pourquoi l'organisme a besoin d'apports alimentaires réguliers et variés. En première STL, il faut distinguer ce que l'on mange, ce que l'on absorbe réellement et ce qui sert à construire ou faire fonctionner le corps.",
    objectives: [
      "Identifier les besoins énergétiques et les besoins de construction de l'organisme.",
      "Distinguer aliment, nutriment et ration alimentaire.",
      'Lire un tableau simple de composition nutritionnelle.',
      'Relier déséquilibre alimentaire, carence et excès.',
    ],
    chapterQuestions: [
      "Pourquoi l'organisme doit-il être alimenté chaque jour ?",
      "Quelle différence faut-il faire entre un aliment et un nutriment ?",
      "Comment reconnaître une alimentation équilibrée ?",
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: "Identifier les besoins de l'organisme",
        intro:
          "Un adolescent en croissance n'a pas exactement les mêmes besoins qu'un adulte sédentaire ou qu'un sportif.",
        documents: [
          createDocument(
            'Situation de départ',
            [
              "Deux profils sont comparés : un élève de première STL qui pratique une activité physique modérée et un adulte peu actif. Tous deux doivent couvrir leurs besoins énergétiques, mais aussi leurs besoins en eau, en sels minéraux et en molécules de construction.",
              "L'élève en croissance a besoin d'apports suffisants en protéines, calcium, vitamines et énergie pour entretenir ses tissus et en fabriquer de nouveaux.",
            ],
            { label: 'Support' },
          ),
        ],
        instruction:
          'Relève les besoins communs aux deux profils, puis explique ce qui rend la situation de l’élève particulière.',
        questions: [
          "Q1. Cite les grands besoins de l'organisme mis en évidence dans le support.",
          "Q2. Explique pourquoi un organisme en croissance n'a pas seulement besoin d'énergie.",
          "Q3. Donne deux exemples d'apports qui participent à la construction du corps.",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Comparer des aliments et leurs apports',
        intro:
          'Des aliments différents n’apportent pas les mêmes quantités de glucides, lipides, protides, eau ou sels minéraux.',
        documents: [
          createDocument(
            'Extrait de tableau nutritionnel',
            [
              "Le pain apporte surtout des glucides complexes. Le fromage apporte davantage de lipides, de protéines et de calcium. Un fruit apporte de l'eau, des fibres, des vitamines et des glucides en quantité plus modérée.",
              "Un repas équilibré ne repose donc pas sur un seul aliment, mais sur une combinaison d'aliments complémentaires.",
            ],
          ),
        ],
        instruction:
          'Compare les rôles nutritionnels des aliments du tableau et justifie l’intérêt de la diversité alimentaire.',
        questions: [
          "Q4. Quel aliment du document joue surtout un rôle énergétique ?",
          "Q5. Quel aliment participe davantage à la construction et à la protection de l'organisme ?",
          "Q6. Explique pourquoi un repas varié est plus pertinent qu'un repas composé d'un seul type d'aliment.",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: "1. Les besoins de l'organisme",
        body: [
          "L'organisme a besoin d'énergie pour assurer le fonctionnement des organes, maintenir la température du corps et permettre l'activité physique.",
          "Il a aussi besoin de matière pour construire et renouveler les tissus : croissance, cicatrisation, renouvellement cellulaire et synthèse de molécules utiles.",
          "Enfin, il a besoin d'eau, de vitamines et de sels minéraux pour permettre de nombreuses réactions biologiques et maintenir le bon fonctionnement du corps.",
        ],
        takeaway:
          "Se nourrir ne sert pas seulement à produire de l'énergie. L'alimentation permet aussi de construire, réparer et protéger l'organisme.",
      }),
      createCourseSection({
        title: '2. Aliments, nutriments et ration alimentaire',
        body: [
          "Un aliment est ce que l'on consomme : pain, lait, pomme, poisson, riz, yaourt.",
          "Un nutriment est une molécule ou un ion pouvant être absorbé et utilisé par l'organisme : glucose, acides aminés, acides gras, eau, ions calcium.",
          "La ration alimentaire correspond à l'ensemble des aliments consommés sur une journée. Elle doit être quantitativement suffisante et qualitativement variée.",
        ],
        takeaway:
          "Il faut distinguer ce qui est mangé, ce qui est absorbé et ce qui est réellement utilisé par l'organisme.",
      }),
      createCourseSection({
        title: '3. Équilibre alimentaire, carences et excès',
        body: [
          "Une alimentation équilibrée couvre les besoins de l'organisme sans manque ni excès durable.",
          "Une carence apparaît quand un apport indispensable est insuffisant. Elle peut entraîner fatigue, retard de croissance, fragilité osseuse ou baisse de certaines fonctions.",
          "À l'inverse, un excès chronique peut favoriser surpoids, troubles métaboliques ou déséquilibres nutritionnels.",
        ],
        takeaway:
          'L’équilibre alimentaire repose sur la variété, la quantité adaptée et la régularité des apports.',
      }),
    ],
    method: {
      title: 'Méthode - Lire un tableau nutritionnel',
      steps: [
        "Repère d'abord le nom des aliments comparés et la quantité de référence.",
        'Identifie ensuite les grandes familles de constituants : eau, glucides, lipides, protéines, fibres, sels minéraux.',
        "Cherche le rôle principal de chaque aliment au lieu de vouloir tout relever en même temps.",
        'Termine par une conclusion simple : complémentarité, déséquilibre ou intérêt nutritionnel.',
      ],
    },
    keyPoints: [
      "L'organisme a des besoins énergétiques, plastiques et fonctionnels.",
      "Un aliment n'est pas un nutriment.",
      'Une ration alimentaire doit être adaptée et variée.',
      'Carence et excès sont tous deux des déséquilibres alimentaires.',
    ],
    selfCheck: [
      "Je sais distinguer aliment, nutriment et ration alimentaire.",
      "Je sais expliquer pourquoi l'organisme a besoin de protéines, d'eau et de sels minéraux.",
      'Je sais identifier un déséquilibre alimentaire simple.',
      "Je sais justifier l'intérêt d'une alimentation variée.",
    ],
  }),
  createPremiereLesson({
    id: 'bb1-2-aliments-nutriments',
    code: '1.2',
    title: "Des aliments aux nutriments : transformation des aliments par l'appareil digestif",
    summary:
      "Comprendre le rôle des organes digestifs et des transformations mécaniques et chimiques dans la digestion.",
    intro:
      "Les aliments consommés ne peuvent pas être utilisés directement par l'organisme. Ils doivent d'abord être transformés au cours de la digestion pour donner des nutriments absorbables.",
    objectives: [
      "Identifier les grandes étapes de la digestion dans l'appareil digestif.",
      'Relier un organe digestif à son rôle principal.',
      'Distinguer transformation mécanique et transformation chimique.',
      "Comprendre pourquoi les enzymes digestives sont nécessaires.",
    ],
    chapterQuestions: [
      'Pourquoi faut-il transformer les aliments avant de pouvoir les utiliser ?',
      "Quel est le rôle des différents organes de l'appareil digestif ?",
      'Comment les enzymes digestives participent-elles à la digestion ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: "Repérer le rôle des organes de l'appareil digestif",
        intro:
          'Chaque organe a une fonction précise : faire progresser le bol alimentaire, produire des sucs digestifs, absorber ou éliminer.',
        documents: [
          createDocument(
            "Organisation de l'appareil digestif",
            [
              "La bouche assure la mastication et le mélange avec la salive. L'œsophage permet le transit. L'estomac brasse le contenu et commence certaines transformations chimiques. L'intestin grêle termine la digestion et absorbe les nutriments. Le foie, le pancréas et la vésicule biliaire participent à la digestion par leurs sécrétions.",
            ],
          ),
        ],
        instruction:
          "Associe chaque organe cité à son rôle principal. Rédige avec un vocabulaire scientifique précis.",
        questions: [
          "Q1. Donne le rôle principal de la bouche, de l'estomac et de l'intestin grêle.",
          "Q2. Pourquoi le pancréas et le foie sont-ils essentiels à la digestion alors que les aliments ne les traversent pas ?",
          "Q3. Explique pourquoi on parle d'un travail coordonné entre plusieurs organes.",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Mettre en évidence la digestion chimique',
        intro:
          "Une grosse molécule alimentaire ne peut pas traverser la paroi intestinale telle quelle. Elle doit être fragmentée par des enzymes.",
        documents: [
          createDocument(
            'Principe de la digestion enzymatique',
            [
              'Les enzymes digestives coupent progressivement les macromolécules alimentaires en molécules plus simples. Par exemple, certaines protéines sont transformées en acides aminés et certains glucides complexes en molécules plus petites.',
              "Sans cette transformation chimique, l'absorption serait très limitée.",
            ],
          ),
        ],
        instruction:
          "Explique l'intérêt de la digestion chimique et relie-la à la notion d'absorption.",
        questions: [
          'Q4. Pourquoi les macromolécules alimentaires doivent-elles être découpées ?',
          'Q5. Quel est le rôle des enzymes digestives ?',
          "Q6. Explique le lien entre digestion chimique et futur passage des nutriments dans le sang.",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. La digestion est une transformation progressive',
        body: [
          "La digestion transforme les aliments en éléments plus simples que l'organisme pourra absorber et utiliser.",
          'Elle comprend des actions mécaniques, comme la mastication ou le brassage, et des actions chimiques assurées par les sucs digestifs.',
          "Les transformations commencent dans la bouche, se poursuivent dans l'estomac et sont largement achevées dans l'intestin grêle.",
        ],
        takeaway:
          "La digestion n'est pas un seul phénomène. C'est une suite d'étapes coordonnées.",
      }),
      createCourseSection({
        title: '2. Le rôle des organes et des glandes annexes',
        body: [
          "La bouche prépare l'aliment. L'œsophage assure son transit. L'estomac mélange et transforme. L'intestin grêle termine la digestion et absorbe.",
          'Le pancréas sécrète des enzymes digestives. Le foie produit la bile, utile notamment pour la digestion des lipides.',
          "Chaque organe intervient donc à un moment précis de la transformation des aliments.",
        ],
        takeaway:
          "Un organe digestif agit rarement seul : il travaille avec d'autres organes et d'autres sécrétions.",
      }),
      createCourseSection({
        title: '3. Les enzymes digestives',
        body: [
          'Une enzyme digestive est une protéine qui accélère la transformation chimique d’un constituant alimentaire.',
          "Chaque enzyme n'agit pas au hasard : elle intervient sur un type de substrat dans des conditions particulières.",
          "La digestion chimique rend possible l'absorption ultérieure des nutriments à travers la paroi intestinale.",
        ],
        takeaway:
          "Sans enzymes, la plupart des grosses molécules alimentaires ne pourraient pas être utilisées correctement par l'organisme.",
      }),
    ],
    method: {
      title: "Méthode - Expliquer la digestion d'un aliment",
      steps: [
        "Repère d'abord de quel constituant alimentaire il s'agit : glucide, protide ou lipide.",
        'Indique ensuite les organes traversés par cet aliment.',
        'Précise quelles transformations sont mécaniques et quelles transformations sont chimiques.',
        'Termine en expliquant sous quelle forme finale le produit pourra être absorbé.',
      ],
    },
    keyPoints: [
      "Les aliments doivent être transformés avant d'être utilisables.",
      'La digestion associe transformations mécaniques et chimiques.',
      "Les organes digestifs et les glandes annexes agissent de façon coordonnée.",
      'Les enzymes digestives rendent possible la formation de nutriments absorbables.',
    ],
    selfCheck: [
      "Je sais expliquer pourquoi la digestion est nécessaire.",
      "Je sais associer un organe digestif à son rôle principal.",
      'Je sais distinguer transformation mécanique et chimique.',
      "Je sais définir le rôle d'une enzyme digestive.",
    ],
  }),
  createPremiereLesson({
    id: 'bb1-3-absorption-devenir',
    code: '1.3',
    title: 'Absorption et devenir des nutriments',
    summary:
      "Suivre le passage des nutriments à travers la paroi intestinale puis leur distribution dans l'organisme.",
    intro:
      "Après la digestion, les nutriments traversent la paroi de l'intestin grêle et rejoignent les organes. Il faut donc relier la structure de l'intestin, les échanges et les circuits de transport.",
    objectives: [
      "Définir l'absorption intestinale.",
      "Relier la structure d'une villosité à sa fonction.",
      'Distinguer circulation sanguine et circulation lymphatique dans des cas simples.',
      "Expliquer le devenir général des nutriments dans l'organisme.",
    ],
    chapterQuestions: [
      "Pourquoi l'intestin grêle est-il le principal lieu d'absorption ?",
      'Comment les nutriments rejoignent-ils les organes ?',
      "Que deviennent-ils après leur passage dans le milieu intérieur ?",
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Observer une villosité intestinale',
        intro:
          "La paroi de l'intestin grêle présente de nombreux replis qui augmentent la surface d'échange.",
        documents: [
          createDocument(
            'Structure simplifiée de la paroi intestinale',
            [
              "Une villosité intestinale est tapissée d'un épithélium mince. Elle contient des capillaires sanguins et un vaisseau lymphatique, ce qui facilite le passage rapide des nutriments vers le milieu intérieur.",
            ],
          ),
        ],
        instruction:
          "Explique comment la structure de la villosité permet d'améliorer l'absorption.",
        questions: [
          'Q1. Pourquoi la surface de la paroi intestinale est-elle très développée ?',
          'Q2. Quel intérêt présente la finesse de la paroi ?',
          'Q3. Pourquoi la vascularisation de la villosité est-elle indispensable ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Relier absorption et transport',
        intro:
          "Tous les nutriments n'empruntent pas exactement le même trajet après leur absorption.",
        documents: [
          createDocument(
            'Trajets des nutriments',
            [
              'Une grande partie des nutriments hydrosolubles rejoint rapidement les capillaires sanguins. Une partie des produits issus de la digestion des lipides emprunte d’abord la voie lymphatique avant la circulation générale.',
            ],
          ),
        ],
        instruction:
          'Distingue les deux grands circuits de transport et leur intérêt.',
        questions: [
          'Q4. Quels nutriments rejoignent directement le sang ?',
          'Q5. Pourquoi certains nutriments passent-ils d’abord par la lymphe ?',
          "Q6. Quel rôle général peut-on attribuer au foie après l'absorption ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: "1. L'absorption intestinale",
        body: [
          "L'absorption correspond au passage des nutriments de la lumière intestinale vers le milieu intérieur.",
          "Elle se réalise principalement dans l'intestin grêle grâce à une très grande surface d'échange et à une paroi fine.",
          'La structure des villosités augmente fortement la capacité d’absorption.',
        ],
        takeaway:
          "L'intestin grêle est spécialisé dans les échanges grâce à sa structure.",
      }),
      createCourseSection({
        title: '2. Le transport des nutriments',
        body: [
          'Après absorption, les nutriments rejoignent le sang ou la lymphe selon leur nature.',
          'Le sang distribue rapidement le glucose, les acides aminés, l’eau et les ions aux organes.',
          'Le transport des produits issus de la digestion des lipides emprunte en partie la voie lymphatique.',
        ],
        takeaway:
          'Absorber un nutriment ne suffit pas : il faut ensuite le transporter.',
      }),
      createCourseSection({
        title: '3. Le devenir des nutriments',
        body: [
          "Les nutriments peuvent être utilisés immédiatement pour produire de l'énergie ou fabriquer de nouvelles molécules.",
          'Ils peuvent aussi être stockés ou transformés selon les besoins de l’organisme.',
          "Leur devenir dépend de l'état physiologique et de la régulation hormonale.",
        ],
        takeaway:
          "Un nutriment peut être utilisé, stocké ou transformé selon les besoins du moment.",
      }),
    ],
    method: {
      title: 'Méthode - Exploiter un document sur la paroi intestinale',
      steps: [
        "Décris d'abord la structure observée : villosité, paroi, capillaires.",
        'Relie ensuite chaque élément observé à une conséquence fonctionnelle.',
        'Cherche enfin quel trajet suit la molécule étudiée après son absorption.',
        'Conclue toujours en reliant structure, échange et distribution.',
      ],
    },
    keyPoints: [
      "L'absorption a lieu principalement dans l'intestin grêle.",
      'La villosité intestinale est une structure spécialisée dans les échanges.',
      'Les nutriments rejoignent ensuite le sang ou la lymphe.',
      "Le devenir des nutriments dépend des besoins de l'organisme.",
    ],
    selfCheck: [
      "Je sais définir l'absorption intestinale.",
      'Je sais justifier le rôle des villosités intestinales.',
      'Je sais distinguer circulation sanguine et lymphatique dans des cas simples.',
      'Je sais expliquer ce que peut devenir un nutriment après son absorption.',
    ],
  }),
  createPremiereLesson({
    id: 'bb1-4-rein-excretion',
    code: '1.4',
    title: "Rein et fonction d'excrétion",
    summary:
      "Comprendre comment les reins participent à la filtration du sang, à la formation de l'urine et au maintien de l'équilibre interne.",
    intro:
      "Les reins n'ont pas seulement pour rôle d'éliminer de l'eau. Ils filtrent le sang, récupèrent des substances utiles et participent à la régulation du milieu intérieur.",
    objectives: [
      'Décrire le rôle général des reins.',
      "Relier la structure du néphron à la formation de l'urine.",
      'Distinguer filtration, réabsorption et excrétion.',
      "Comprendre le lien entre activité rénale et équilibre du milieu intérieur.",
    ],
    chapterQuestions: [
      'Pourquoi les reins sont-ils indispensables à la survie ?',
      "Comment le néphron participe-t-il à la formation de l'urine ?",
      'Que se passe-t-il quand les reins fonctionnent mal ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Analyser le rôle du néphron',
        intro:
          "Le néphron est l'unité fonctionnelle du rein. C'est à son niveau que se réalisent les étapes essentielles du traitement du sang.",
        documents: [
          createDocument(
            'Fonctionnement simplifié du néphron',
            [
              'Le sang arrive dans un réseau capillaire où une partie du plasma est filtrée. Plus loin dans le tubule rénal, une partie importante de l’eau et des molécules utiles est réabsorbée. Les déchets et certains excès sont éliminés dans l’urine.',
            ],
          ),
        ],
        instruction:
          "Retrouve dans le document les trois idées-clés de la formation de l'urine : filtrer, récupérer, éliminer.",
        questions: [
          'Q1. Quelle étape permet le passage du plasma vers la capsule rénale ?',
          'Q2. Pourquoi parle-t-on ensuite de réabsorption ?',
          "Q3. Quels types de substances doivent plutôt être conservés par l'organisme ?",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Relier rein et santé',
        intro:
          "Un dérèglement de la fonction rénale a des conséquences visibles sur la composition du sang et sur l'organisme entier.",
        documents: [
          createDocument(
            'Situation clinique simplifiée',
            [
              "Chez un patient atteint d'insuffisance rénale sévère, l'élimination des déchets devient insuffisante et l'équilibre hydrominéral est perturbé. Une hémodialyse peut temporairement remplacer une partie des fonctions du rein.",
            ],
          ),
        ],
        instruction:
          "Explique ce que montre l'exemple clinique sur le rôle des reins dans le maintien de l'équilibre interne.",
        questions: [
          "Q4. Pourquoi l'accumulation de déchets dans le sang est-elle problématique ?",
          "Q5. Quel service l'hémodialyse rend-elle au patient ?",
          "Q6. Explique pourquoi les reins interviennent aussi dans la régulation de l'eau et de certains ions.",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Les reins filtrent le sang',
        body: [
          'Les reins reçoivent en permanence une grande quantité de sang qu’ils filtrent.',
          'Cette filtration permet de séparer une partie liquide contenant de nombreuses substances dissoutes.',
          'Toutes les substances filtrées ne sont pas destinées à être éliminées : une grande partie sera récupérée ensuite.',
        ],
        takeaway:
          'Le rein ne se contente pas d’éliminer. Il trie et régule en permanence.',
      }),
      createCourseSection({
        title: "2. Formation de l'urine : filtration, réabsorption, excrétion",
        body: [
          'La filtration glomérulaire forme une urine primitive à partir du plasma.',
          "Le tubule rénal réabsorbe ensuite une grande partie de l'eau et des molécules utiles comme le glucose ou certains ions.",
          "L'urine définitive contient principalement les déchets et les excès que l'organisme doit éliminer.",
        ],
        takeaway:
          "L'urine résulte d'un tri précis entre ce qui doit être conservé et ce qui doit être rejeté.",
      }),
      createCourseSection({
        title: '3. Rein et équilibre du milieu intérieur',
        body: [
          'En réglant la quantité d’eau éliminée et la composition ionique de l’urine, les reins participent au maintien du milieu intérieur.',
          "Ils contribuent ainsi à la stabilité de nombreuses constantes physiologiques.",
          "Quand les reins ne fonctionnent plus correctement, l'ensemble de l'organisme est menacé.",
        ],
        takeaway:
          "La fonction d'excrétion est aussi une fonction de régulation.",
      }),
    ],
    method: {
      title: "Méthode - Expliquer la formation de l'urine",
      steps: [
        'Commence par situer la filtration au niveau du glomérule.',
        'Indique ensuite ce qui est réabsorbé dans le tubule rénal.',
        "Précise enfin ce qui se retrouve dans l'urine définitive.",
        'Relie toujours ta réponse au maintien du milieu intérieur.',
      ],
    },
    keyPoints: [
      'Les reins filtrent le sang en permanence.',
      "Le néphron est l'unité fonctionnelle du rein.",
      "L'urine résulte d'une filtration suivie d'une réabsorption sélective.",
      "Les reins participent au maintien de l'équilibre hydrominéral.",
    ],
    selfCheck: [
      "Je sais définir la fonction d'excrétion.",
      "Je sais expliquer le rôle du néphron dans la formation de l'urine.",
      'Je sais distinguer urine primitive et urine définitive.',
      "Je sais relier l'activité du rein à la stabilité du milieu intérieur.",
    ],
  }),
  createPremiereLesson({
    id: 'bb1-5-stabilite-milieu-interieur',
    code: '1.5',
    title: 'Stabilité du milieu intérieur',
    summary:
      "Comprendre comment l'organisme maintient certaines constantes malgré les variations du milieu extérieur ou de l'activité.",
    intro:
      "La survie des cellules suppose des conditions relativement stables. L'organisme doit donc réguler en permanence la composition et la quantité des liquides internes.",
    objectives: [
      "Définir le milieu intérieur et la notion d'homéostasie.",
      'Identifier quelques grandes constantes régulées.',
      'Comprendre la régulation de la glycémie et de la volémie.',
      'Relier perturbation et réponse régulatrice.',
    ],
    chapterQuestions: [
      "Qu'appelle-t-on milieu intérieur ?",
      "Pourquoi certaines valeurs doivent-elles rester proches d'une valeur de référence ?",
      'Comment la glycémie et la volémie sont-elles régulées ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Identifier les compartiments liquidiens',
        intro:
          "Le milieu intérieur ne correspond pas à un seul liquide : il comprend plusieurs compartiments en relation.",
        documents: [
          createDocument(
            'Compartiments liquidiens',
            [
              "On distingue le plasma sanguin, le liquide interstitiel qui baigne les cellules et le liquide intracellulaire contenu dans les cellules. Les échanges entre ces compartiments permettent l'approvisionnement des tissus et l'élimination des déchets.",
            ],
          ),
        ],
        instruction:
          'Définis le milieu intérieur et montre en quoi il est en lien direct avec la vie des cellules.',
        questions: [
          'Q1. Quels sont les compartiments liquidiens à connaître ?',
          'Q2. Lequel baigne directement les cellules ?',
          'Q3. Pourquoi la stabilité de ces milieux est-elle indispensable ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Étudier une régulation',
        intro:
          "La glycémie et la volémie doivent rester dans des limites compatibles avec le fonctionnement normal de l'organisme.",
        documents: [
          createDocument(
            'Principe d’une régulation',
            [
              "Lorsqu'une valeur s'écarte de sa valeur de référence, des capteurs et des organes effecteurs permettent une réponse correctrice. Par exemple, la glycémie est régulée grâce à des hormones pancréatiques, tandis que la volémie dépend notamment de la gestion rénale de l'eau et des ions.",
            ],
          ),
        ],
        instruction:
          'Explique en quoi une régulation repose sur une comparaison entre une valeur réelle et une valeur attendue.',
        questions: [
          "Q4. Pourquoi parle-t-on de valeur de référence ou de valeur de consigne ?",
          'Q5. Donne un exemple de perturbation de la glycémie.',
          'Q6. Relie le rein à la régulation de la volémie.',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Milieu intérieur et homéostasie',
        body: [
          "Le milieu intérieur correspond à l'ensemble des liquides extracellulaires dans lesquels vivent les cellules.",
          "L'homéostasie est le maintien de certaines constantes physiologiques dans des limites compatibles avec la vie.",
          'Cette stabilité est relative : elle ne signifie pas immobilité, mais régulation permanente.',
        ],
        takeaway:
          "L'homéostasie correspond à une stabilité dynamique du milieu intérieur.",
      }),
      createCourseSection({
        title: '2. La régulation de la glycémie',
        body: [
          'La glycémie correspond à la concentration de glucose dans le sang. Elle doit rester dans une zone étroite.',
          "Après un repas, elle augmente puis redescend grâce aux mécanismes hormonaux. En période de jeûne, d'autres mécanismes limitent sa baisse.",
          "Cette régulation est indispensable car le glucose est un substrat majeur pour de nombreuses cellules.",
        ],
        takeaway:
          'Une glycémie stable est un exemple classique de régulation homéostatique.',
      }),
      createCourseSection({
        title: '3. La régulation de la volémie',
        body: [
          'La volémie correspond au volume sanguin circulant. Elle dépend notamment de la quantité d’eau présente dans l’organisme.',
          'Le rein intervient fortement dans cette régulation en modulant les pertes urinaires.',
          'Une variation trop importante de la volémie perturbe la circulation et les échanges dans les tissus.',
        ],
        takeaway:
          "Le maintien du milieu intérieur dépend de régulations coordonnées, pas d'un seul organe isolé.",
      }),
    ],
    method: {
      title: 'Méthode - Décrire une boucle de régulation',
      steps: [
        'Identifie la grandeur régulée.',
        'Repère la perturbation observée.',
        'Indique quels organes ou quelles molécules participent à la correction.',
        'Conclue en précisant le retour vers une valeur compatible avec le fonctionnement normal.',
      ],
    },
    keyPoints: [
      'Le milieu intérieur conditionne la vie des cellules.',
      "L'homéostasie correspond au maintien dynamique de certaines constantes.",
      'La glycémie et la volémie sont deux exemples majeurs de grandeurs régulées.',
      'Les régulations reposent sur des réponses correctrices coordonnées.',
    ],
    selfCheck: [
      "Je sais définir milieu intérieur et homéostasie.",
      'Je sais expliquer pourquoi la glycémie doit être régulée.',
      'Je sais relier le rein à la régulation de la volémie.',
      'Je sais décrire simplement une boucle de régulation.',
    ],
  }),
];

export const PREMIERE_BIOBIO_THEME_2_LESSONS = [
  createPremiereLesson({
    id: 'bb2-1-genotype-phenotype',
    code: '2.1',
    title: 'Du génotype au phénotype',
    summary:
      "Relier l'information génétique, l'expression des gènes et l'apparition d'un caractère observable.",
    intro:
      "Un caractère visible ou mesurable ne résulte pas d'un gène isolé pris séparément. Il résulte d'une chaîne d'événements qui relie ADN, ARN, protéines et fonctionnement cellulaire.",
    objectives: [
      'Définir génotype et phénotype.',
      'Relier gène, ARN messager et protéine.',
      "Comprendre qu'une mutation peut modifier un caractère.",
      'Utiliser correctement le vocabulaire chromosome, allèle et expression génétique.',
    ],
    chapterQuestions: [
      'Quelle relation existe-t-il entre gène et caractère ?',
      "Comment l'information portée par l'ADN devient-elle fonctionnelle ?",
      'Pourquoi une mutation peut-elle modifier un phénotype ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Passer du caractère au gène',
        intro:
          'Un caractère peut être relié à une protéine dont la fabrication dépend elle-même d’un gène.',
        documents: [
          createDocument(
            'Chaîne génotype-phénotype',
            [
              "Un gène est une portion d'ADN qui porte une information utilisable pour fabriquer une molécule fonctionnelle, souvent une protéine. Cette protéine participe ensuite à une structure ou à une réaction qui contribue au caractère observé.",
            ],
          ),
        ],
        instruction:
          'Reconstitue la chaîne logique entre ADN, protéine et caractère.',
        questions: [
          'Q1. Que contient un gène ?',
          'Q2. Quel rôle joue la protéine dans la mise en place du caractère ?',
          'Q3. Pourquoi le phénotype ne correspond-il pas simplement au gène seul ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: "Étudier l'effet d'une mutation",
        intro:
          "Une modification de la séquence d'ADN peut modifier la protéine produite et donc perturber un fonctionnement cellulaire.",
        documents: [
          createDocument(
            'Mutation et conséquence possible',
            [
              "Si la séquence d'un gène est modifiée, l'ARN produit peut être différent. La protéine synthétisée peut alors être moins efficace, absente ou modifiée. La conséquence observable dépend de l'importance du changement et du rôle de la protéine concernée.",
            ],
          ),
        ],
        instruction:
          'Explique comment une mutation peut avoir une conséquence moléculaire puis phénotypique.',
        questions: [
          "Q4. Qu'est-ce qu'une mutation ?",
          "Q5. Pourquoi toutes les mutations n'ont-elles pas forcément le même effet ?",
          'Q6. Donne la chaîne logique reliant mutation, protéine et caractère.',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Génotype, gènes et allèles',
        body: [
          'Le génotype correspond à l’ensemble des informations génétiques d’un individu ou, plus souvent dans un exercice, à la version de certains gènes étudiés.',
          "Un allèle est une version possible d'un même gène.",
          "Les chromosomes portent les gènes, eux-mêmes constitués d'ADN.",
        ],
        takeaway:
          'Le génotype décrit une information génétique, pas directement un caractère visible.',
      }),
      createCourseSection({
        title: '2. De l’ADN à la protéine',
        body: [
          "L'information génétique d'un gène peut être transcrite en ARN messager.",
          "Cet ARN est ensuite traduit pour permettre la synthèse d'une protéine.",
          "La protéine obtenue participe à une structure ou à une fonction cellulaire qui contribue au phénotype.",
        ],
        takeaway:
          'Le phénotype résulte souvent de la présence, de la quantité ou de la qualité des protéines produites.',
      }),
      createCourseSection({
        title: '3. Mutation et variation du phénotype',
        body: [
          "Une mutation correspond à une modification de la séquence d'ADN.",
          "Elle peut être sans conséquence visible, ou au contraire modifier la protéine produite et perturber un fonctionnement biologique.",
          "Le phénotype dépend donc à la fois du génotype et de l'expression des gènes.",
        ],
        takeaway:
          "Un changement de l'ADN peut se répercuter jusqu'au caractère, mais ce n'est pas systématique.",
      }),
    ],
    method: {
      title: 'Méthode - Relier gène et caractère',
      steps: [
        'Identifie le caractère étudié.',
        'Repère le gène ou la protéine impliqués.',
        'Explique le rôle de la protéine dans la cellule ou l’organisme.',
        'Conclue en reliant variation génétique et phénotype observé.',
      ],
    },
    keyPoints: [
      'Le génotype correspond à une information génétique.',
      'Un gène peut conduire à la synthèse d’une protéine.',
      'Le phénotype résulte de l’expression des gènes.',
      'Une mutation peut modifier un phénotype en modifiant une protéine.',
    ],
    selfCheck: [
      'Je sais définir génotype et phénotype.',
      'Je sais relier ADN, ARN messager et protéine.',
      "Je sais expliquer l'effet possible d'une mutation.",
      'Je sais utiliser correctement les mots gène, allèle et chromosome.',
    ],
  }),
  createPremiereLesson({
    id: 'bb2-2-organes-amphicrines',
    code: '2.2',
    title: 'Testicules et ovaires, des organes amphicrines',
    summary:
      'Montrer que les gonades ont à la fois une fonction reproductrice et une fonction endocrine.',
    intro:
      "Les gonades ne produisent pas seulement des gamètes. Elles sécrètent aussi des hormones qui participent au fonctionnement de l'appareil reproducteur et à la mise en place des caractères sexuels secondaires.",
    objectives: [
      'Définir un organe amphicrine.',
      'Identifier les fonctions des testicules et des ovaires.',
      'Relier production de gamètes et sécrétion hormonale.',
      'Utiliser un vocabulaire précis sur les organes reproducteurs.',
    ],
    chapterQuestions: [
      "Pourquoi dit-on que les gonades sont des organes amphicrines ?",
      'Quels produits fabriquent les testicules et les ovaires ?',
      'Quel lien existe-t-il entre hormones sexuelles et fonctionnement des organes reproducteurs ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Identifier la double fonction des testicules',
        intro:
          'Le testicule produit des spermatozoïdes mais sécrète aussi une hormone majeure de la reproduction masculine.',
        documents: [
          createDocument(
            'Fonctions du testicule',
            [
              'Le testicule est le lieu de production des spermatozoïdes. Il sécrète également la testostérone, hormone qui agit sur différents organes cibles et participe au fonctionnement reproducteur.',
            ],
          ),
        ],
        instruction:
          'Montre que le même organe assure une fonction exocrine et une fonction endocrine.',
        questions: [
          'Q1. Quel produit du testicule correspond à la fonction exocrine ?',
          'Q2. Quel produit du testicule correspond à la fonction endocrine ?',
          'Q3. Pourquoi ces deux fonctions sont-elles complémentaires pour la reproduction ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Identifier la double fonction des ovaires',
        intro:
          "L'ovaire produit des ovocytes et sécrète également des hormones qui rythment le fonctionnement cyclique.",
        documents: [
          createDocument(
            'Fonctions de l’ovaire',
            [
              "L'ovaire assure la production des cellules reproductrices femelles. Il sécrète aussi des hormones, notamment les œstrogènes et la progestérone, qui interviennent dans le cycle et dans la préparation de l'organisme à une éventuelle grossesse.",
            ],
          ),
        ],
        instruction:
          'Compare les deux fonctions de l’ovaire puis relie-les au mot amphicrine.',
        questions: [
          'Q4. Quel est le produit exocrine de l’ovaire ?',
          'Q5. Quelles sont les principales hormones ovariennes à connaître ?',
          'Q6. Justifie précisément le mot amphicrine.',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Définition d’un organe amphicrine',
        body: [
          "Un organe amphicrine est un organe qui assure à la fois une fonction exocrine et une fonction endocrine.",
          "Dans le cas des gonades, la fonction exocrine correspond à la production des gamètes.",
          'La fonction endocrine correspond à la sécrétion d’hormones dans le sang.',
        ],
        takeaway:
          'Le mot amphicrine signifie donc : deux fonctions de nature différente assurées par un même organe.',
      }),
      createCourseSection({
        title: '2. Le rôle des testicules',
        body: [
          'Les testicules produisent les spermatozoïdes, cellules reproductrices mâles.',
          'Ils sécrètent aussi la testostérone, hormone qui agit sur différents organes cibles.',
          'Ils ont donc un rôle central dans la fertilité et dans certaines caractéristiques sexuelles.',
        ],
        takeaway:
          'Le testicule est à la fois producteur de gamètes et sécréteur hormonal.',
      }),
      createCourseSection({
        title: '3. Le rôle des ovaires',
        body: [
          'Les ovaires produisent les gamètes femelles et sécrètent des hormones ovariennes.',
          "Ces hormones participent au fonctionnement cyclique de l'appareil reproducteur féminin.",
          'Comme les testicules, les ovaires sont donc des organes amphicrines.',
        ],
        takeaway:
          'Les gonades sont des organes reproducteurs et endocriniens à la fois.',
      }),
    ],
    method: {
      title: 'Méthode - Justifier le mot amphicrine',
      steps: [
        "Nomme d'abord l'organe étudié.",
        'Précise ensuite son produit exocrine.',
        'Précise enfin son ou ses produits endocrines.',
        'Conclue en rappelant que les hormones sont sécrétées dans le sang.',
      ],
    },
    keyPoints: [
      'Les gonades sont des organes amphicrines.',
      'La fonction exocrine correspond à la production des gamètes.',
      'La fonction endocrine correspond à la sécrétion hormonale.',
      'Testicules et ovaires assurent chacun une double fonction.',
    ],
    selfCheck: [
      'Je sais définir un organe amphicrine.',
      'Je sais citer les deux fonctions du testicule.',
      "Je sais citer les deux fonctions de l'ovaire.",
      'Je sais justifier le lien entre hormones sexuelles et reproduction.',
    ],
  }),
  createPremiereLesson({
    id: 'bb2-3-regulation-hormonale',
    code: '2.3',
    title: 'Régulation hormonale de la reproduction',
    summary:
      'Comprendre comment les hormones contrôlent le fonctionnement des gonades et des organes cibles.',
    intro:
      "La reproduction humaine repose sur une coordination hormonale précise. Les gonades ne fonctionnent pas indépendamment : elles sont pilotées et régulées par des hormones agissant à différentes échelles.",
    objectives: [
      'Identifier les grandes hormones impliquées dans la reproduction.',
      'Relier hormone, organe sécréteur et organe cible.',
      'Comprendre le principe général des rétrocontrôles.',
      'Exploiter un graphique hormonal simple.',
    ],
    chapterQuestions: [
      'Comment les gonades sont-elles contrôlées ?',
      "Qu'appelle-t-on organe cible d'une hormone ?",
      'Pourquoi parle-t-on de régulation hormonale ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Identifier les hormones en jeu',
        intro:
          'Dans la reproduction, certaines hormones sont sécrétées par le cerveau et d’autres par les gonades.',
        documents: [
          createDocument(
            'Organisation simplifiée de la commande hormonale',
            [
              'Des structures cérébrales participent à la commande hormonale des gonades. Celles-ci répondent en produisant des hormones sexuelles qui agissent sur des organes cibles et peuvent aussi rétroagir sur les centres de commande.',
            ],
          ),
        ],
        instruction:
          'Repère qui commande, qui répond, et sur quoi agissent les hormones produites.',
        questions: [
          'Q1. Pourquoi peut-on parler de chaîne de commande hormonale ?',
          'Q2. Quel est le rôle général des hormones gonadiques ?',
          'Q3. Que signifie le terme organe cible ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Comprendre un rétrocontrôle',
        intro:
          "Une hormone peut modifier l'activité de l'organe ou de la structure qui contribue indirectement à sa sécrétion.",
        documents: [
          createDocument(
            'Principe du rétrocontrôle',
            [
              "Lorsque la concentration d'une hormone sexuelle augmente, elle peut moduler l'activité des centres qui pilotent les gonades. Ce mécanisme de rétroaction participe à la stabilité ou au caractère cyclique du fonctionnement reproducteur.",
            ],
          ),
        ],
        instruction:
          'Explique le principe général du rétrocontrôle sans chercher à détailler tous les cas particuliers.',
        questions: [
          'Q4. Pourquoi un système hormonal a-t-il besoin de rétrocontrôles ?',
          "Q5. Que se passe-t-il si la quantité d'hormones sécrétées varie fortement ?",
          'Q6. Explique pourquoi la régulation hormonale est une régulation dynamique.',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Une communication hormonale',
        body: [
          'Une hormone est une molécule sécrétée par un organe ou une glande endocrine puis transportée dans le sang.',
          "Elle agit sur un organe cible qui possède les récepteurs adaptés.",
          'Dans la reproduction, cette communication coordonne le fonctionnement des gonades et des organes associés.',
        ],
        takeaway:
          "Une hormone n'agit pas partout : elle agit surtout sur des cellules cibles capables de la reconnaître.",
      }),
      createCourseSection({
        title: '2. La commande hormonale des gonades',
        body: [
          'Le fonctionnement des gonades dépend de signaux hormonaux de commande.',
          'En retour, les gonades sécrètent des hormones qui agissent sur différents organes de la reproduction.',
          "L'ensemble forme un système de communication hiérarchisé et coordonné.",
        ],
        takeaway:
          'Les gonades sont à la fois commandées par des hormones et productrices d’hormones.',
      }),
      createCourseSection({
        title: '3. Les rétrocontrôles',
        body: [
          "Un rétrocontrôle correspond à l'action en retour d'une hormone sur les structures qui participent à sa régulation.",
          'Ce mécanisme permet de stabiliser certaines grandeurs ou d’organiser des variations cycliques.',
          "Il est indispensable pour éviter un fonctionnement totalement désordonné du système reproducteur.",
        ],
        takeaway:
          'Un système hormonal efficace est un système régulé.',
      }),
    ],
    method: {
      title: 'Méthode - Lire un schéma hormonal',
      steps: [
        'Repère les organes sécréteurs.',
        'Suis le trajet des hormones jusqu’aux organes cibles.',
        'Identifie les effets attendus.',
        'Cherche enfin les flèches de rétroaction ou de retour.',
      ],
    },
    keyPoints: [
      'La reproduction repose sur une communication hormonale.',
      'Une hormone agit sur un organe cible possédant des récepteurs adaptés.',
      'Les gonades sont intégrées dans une chaîne de commande hormonale.',
      'Les rétrocontrôles assurent la régulation du système.',
    ],
    selfCheck: [
      'Je sais définir hormone et organe cible.',
      'Je sais expliquer le principe général de la commande hormonale des gonades.',
      'Je sais définir un rétrocontrôle.',
      'Je sais décrire simplement une régulation hormonale.',
    ],
  }),
  createPremiereLesson({
    id: 'bb2-4-gametogenese-fecondation',
    code: '2.4',
    title: 'Gamétogenèse et fécondation',
    summary:
      'Étudier la formation des gamètes et les grandes étapes de la fécondation chez l’être humain.',
    intro:
      "La reproduction sexuée repose sur la formation de gamètes spécialisés puis sur leur rencontre lors de la fécondation. Ces deux étapes permettent de restaurer un nouveau patrimoine génétique complet.",
    objectives: [
      'Définir gamétogenèse et fécondation.',
      'Comparer spermatozoïde et ovocyte.',
      'Relier méiose et formation des gamètes.',
      'Identifier les grandes étapes de la fécondation.',
    ],
    chapterQuestions: [
      'Comment se forment les gamètes ?',
      'Quelles différences observe-t-on entre les gamètes mâles et femelles ?',
      'Que permet exactement la fécondation ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Comparer les gamètes',
        intro:
          "Les gamètes mâles et femelles n'ont ni la même taille, ni la même mobilité, ni exactement le même rôle immédiat.",
        documents: [
          createDocument(
            'Deux cellules spécialisées',
            [
              "Le spermatozoïde est une petite cellule mobile adaptée au déplacement. L'ovocyte est beaucoup plus volumineux et contient davantage de réserves. Les deux possèdent cependant une information génétique haploïde.",
            ],
          ),
        ],
        instruction:
          'Compare la structure et le rôle des deux gamètes en montrant à la fois leurs différences et leur point commun essentiel.',
        questions: [
          'Q1. Quel est le point commun génétique entre spermatozoïde et ovocyte ?',
          'Q2. Pourquoi leurs structures sont-elles différentes ?',
          'Q3. En quoi ces différences sont-elles adaptées à leur fonction ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Comprendre la fécondation',
        intro:
          "La fécondation correspond à la rencontre de deux gamètes et à la reconstitution d'un patrimoine génétique complet.",
        documents: [
          createDocument(
            'Étapes simplifiées de la fécondation',
            [
              'Après la rencontre des gamètes, un seul spermatozoïde fusionne normalement avec le gamète femelle. Les deux patrimoines génétiques haploïdes s’associent alors pour former une cellule-œuf diploïde.',
            ],
          ),
        ],
        instruction:
          'Explique ce que change la fécondation du point de vue génétique.',
        questions: [
          'Q4. Pourquoi parle-t-on de restauration de la diploïdie ?',
          'Q5. Quel événement marque réellement le début d’un nouvel individu ?',
          'Q6. Relie méiose et fécondation dans une même explication.',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. La gamétogenèse',
        body: [
          'La gamétogenèse correspond à la formation des gamètes.',
          'Elle met en jeu des divisions cellulaires particulières qui conduisent à des cellules haploïdes.',
          'Chez l’être humain, elle produit des gamètes spécialisés selon le sexe biologique.',
        ],
        takeaway:
          'Les gamètes sont des cellules reproductrices spécialisées et haploïdes.',
      }),
      createCourseSection({
        title: '2. Les caractéristiques des gamètes',
        body: [
          'Le spermatozoïde est une cellule mobile adaptée à la rencontre du gamète femelle.',
          "L'ovocyte est une cellule plus volumineuse qui participe aux premiers moments du développement après la fécondation.",
          'Malgré leurs différences, les deux portent une moitié du patrimoine génétique.',
        ],
        takeaway:
          'Les gamètes sont différents par leur structure, mais complémentaires par leur rôle.',
      }),
      createCourseSection({
        title: '3. La fécondation',
        body: [
          "La fécondation correspond à l'union de deux gamètes.",
          'Elle restaure la diploïdie et forme une cellule-œuf.',
          'Elle associe une nouvelle combinaison génétique issue des deux parents.',
        ],
        takeaway:
          "La fécondation n'est pas seulement une rencontre cellulaire : c'est aussi un événement génétique majeur.",
      }),
    ],
    method: {
      title: 'Méthode - Relier méiose, gamètes et fécondation',
      steps: [
        'Pars du patrimoine génétique des cellules diploïdes.',
        'Explique comment la formation des gamètes aboutit à des cellules haploïdes.',
        'Montre ensuite que la fécondation associe deux patrimoines haploïdes.',
        'Conclue sur le retour à la diploïdie chez la cellule-œuf.',
      ],
    },
    keyPoints: [
      'La gamétogenèse produit des gamètes haploïdes.',
      'Spermatozoïde et ovocyte sont des cellules spécialisées complémentaires.',
      'La fécondation unit deux gamètes.',
      'La cellule-œuf formée est diploïde.',
    ],
    selfCheck: [
      'Je sais définir gamétogenèse et fécondation.',
      'Je sais expliquer la différence entre gamète mâle et gamète femelle.',
      'Je sais justifier la notion de diploïdie après la fécondation.',
      'Je sais relier méiose et reproduction sexuée.',
    ],
  }),
  createPremiereLesson({
    id: 'bb2-5-transmission-caracteres',
    code: '2.5',
    title: 'Transmission des caractères héréditaires',
    summary:
      "Expliquer simplement comment certains caractères se transmettent d'une génération à l'autre.",
    intro:
      "La transmission des caractères héréditaires s'étudie souvent à l'aide d'arbres généalogiques et de raisonnements sur les allèles. En première STL, il faut surtout savoir relier mode de transmission et observations familiales.",
    objectives: [
      'Lire un arbre généalogique simple.',
      'Distinguer un caractère dominant, récessif ou lié au sexe dans des cas simples.',
      'Employer correctement les mots hérédité, allèle, génotype et phénotype.',
      'Formuler une conclusion argumentée à partir de données familiales.',
    ],
    chapterQuestions: [
      'Comment reconnaître une transmission héréditaire dans une famille ?',
      'Quelles informations apporte un arbre généalogique ?',
      'Comment justifier un mode de transmission simple ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Lire un arbre généalogique',
        intro:
          "Un arbre généalogique permet de suivre la présence ou l'absence d'un caractère sur plusieurs générations.",
        documents: [
          createDocument(
            'Lecture d’un arbre familial',
            [
              "Les symboles représentent les individus, leur sexe biologique et la présence ou l'absence du caractère étudié. La comparaison entre générations permet de repérer des régularités et de proposer des hypothèses sur le mode de transmission.",
            ],
          ),
        ],
        instruction:
          'Observe les générations, repère les individus atteints et cherche si le caractère apparaît à chaque génération ou non.',
        questions: [
          'Q1. Quelles informations un arbre généalogique donne-t-il immédiatement ?',
          'Q2. Pourquoi faut-il observer plusieurs générations avant de conclure ?',
          "Q3. Que peut suggérer le fait qu'un caractère saute une génération ?",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Proposer une hypothèse de transmission',
        intro:
          "La répartition d'un caractère dans une famille peut suggérer un mode de transmission plutôt qu'un autre.",
        documents: [
          createDocument(
            'Raisonnement génétique simple',
            [
              "Si deux parents phénotypiquement sains ont un enfant atteint, l'hypothèse d'un caractère récessif peut être envisagée dans un cas simple. Si un caractère touche surtout un sexe dans certaines situations, on peut aussi discuter une transmission liée au sexe.",
            ],
          ),
        ],
        instruction:
          'Propose une hypothèse de transmission, puis justifie-la avec les éléments du document.',
        questions: [
          'Q4. Dans quel cas peut-on envisager un caractère récessif ?',
          'Q5. Que signifie une transmission liée au sexe dans un exercice simple ?',
          'Q6. Pourquoi faut-il toujours rester prudent quand les données familiales sont limitées ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Hérédité et arbres généalogiques',
        body: [
          "Un caractère héréditaire peut se transmettre d'une génération à l'autre selon des modalités dépendant des allèles impliqués.",
          "L'arbre généalogique est un outil de représentation qui permet d'analyser cette transmission.",
          "Il ne donne pas toujours une certitude absolue, mais il permet de proposer un raisonnement argumenté.",
        ],
        takeaway:
          "Un arbre généalogique est un outil d'analyse, pas une réponse automatique.",
      }),
      createCourseSection({
        title: '2. Quelques modes de transmission simples',
        body: [
          "Dans des cas simples, un allèle peut être dominant ou récessif selon son expression chez l'hétérozygote.",
          'Certaines transmissions sont autosomiques, d’autres liées aux chromosomes sexuels.',
          'Le mode de transmission se déduit de la répartition observée dans la famille.',
        ],
        takeaway:
          'Dominant, récessif et lié au sexe sont des mots de conclusion qui doivent être justifiés.',
      }),
      createCourseSection({
        title: '3. Justifier une hypothèse',
        body: [
          'Une bonne réponse ne consiste pas seulement à donner un nom de transmission.',
          "Il faut s'appuyer sur les générations, le sexe des individus, la présence ou l'absence du caractère et les liens de parenté.",
          'Si les données sont insuffisantes, il faut l’indiquer plutôt que d’affirmer sans preuve.',
        ],
        takeaway:
          'En génétique, une conclusion valable est une conclusion justifiée.',
      }),
    ],
    method: {
      title: 'Méthode - Exploiter un arbre généalogique',
      steps: [
        'Repère les individus atteints et les individus non atteints.',
        'Observe la répartition sur plusieurs générations.',
        'Compare la situation des hommes et des femmes si le sujet le demande.',
        'Formule une hypothèse et justifie-la avec des exemples précis de la famille.',
      ],
    },
    keyPoints: [
      "Un arbre généalogique aide à étudier la transmission d'un caractère.",
      "Le mode de transmission se déduit d'indices familiaux.",
      'Les notions de dominant, récessif et lié au sexe doivent être justifiées.',
      'Une conclusion prudente vaut mieux qu’une affirmation non démontrée.',
    ],
    selfCheck: [
      'Je sais lire un arbre généalogique simple.',
      'Je sais proposer une hypothèse de transmission argumentée.',
      'Je sais utiliser correctement les mots génotype, phénotype et allèle.',
      'Je sais expliquer pourquoi certaines données restent parfois insuffisantes.',
    ],
  }),
];
export const PREMIERE_BIOBIO_TRANSVERSAL_A_LESSONS = [
  createPremiereLesson({
    id: 'bba-1-structures-biomolecules',
    code: 'A.1',
    title: 'Glucides, protides, lipides : caractéristiques structurales',
    summary:
      'Identifier les grandes familles de biomolécules et leurs principaux éléments structuraux.',
    intro:
      "Ce module transversal installe les repères de base sur les grandes familles de biomolécules. Il faut apprendre à les distinguer par leurs constituants et par quelques propriétés simples.",
    objectives: [
      'Identifier les principales familles de biomolécules.',
      'Relier une biomolécule à ses unités de base dans un cadre simple.',
      'Employer correctement les mots glucide, lipide et protide.',
      'Utiliser ces repères dans les chapitres de nutrition ou de physiologie.',
    ],
    chapterQuestions: [
      'Quelles sont les grandes familles de biomolécules ?',
      'Quels repères structuraux permettent de les distinguer ?',
      'Pourquoi ces connaissances sont-elles utiles dans plusieurs chapitres ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Classer les biomolécules',
        intro:
          'Pour bien raisonner en biochimie, il faut savoir reconnaître la famille générale d’une molécule.',
        documents: [
          createDocument(
            'Trois grandes familles',
            [
              'Les glucides sont souvent associés à un rôle énergétique ou structural. Les protides regroupent notamment les acides aminés et les protéines. Les lipides sont hydrophobes et interviennent dans les réserves énergétiques ou dans les membranes.',
            ],
          ),
        ],
        instruction:
          'Associe chaque famille à ses caractéristiques générales sans entrer dans un niveau de détail inutile.',
        questions: [
          'Q1. Quelle famille regroupe les protéines ?',
          'Q2. Quelle famille intervient fortement dans les membranes biologiques ?',
          'Q3. Quelle famille est souvent mobilisée dans le stockage énergétique ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Relier structure et fonction',
        intro:
          "Une biomolécule n'est pas seulement à reconnaître : sa structure explique aussi certaines de ses propriétés.",
        documents: [
          createDocument(
            'Structure et propriété',
            [
              "Certaines biomolécules sont solubles dans l'eau, d'autres non. Certaines sont des polymères, d'autres des molécules plus simples. Ces différences structurales influencent leur rôle biologique.",
            ],
          ),
        ],
        instruction:
          'Montre que la structure donne déjà des informations sur la fonction ou le comportement d’une molécule.',
        questions: [
          'Q4. Pourquoi une molécule hydrophobe ne se comporte-t-elle pas comme une molécule hydrosoluble ?',
          'Q5. Quel intérêt y a-t-il à reconnaître une macromolécule ?',
          'Q6. En quoi ces repères seront-ils utiles dans la suite du programme ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Les grandes familles de biomolécules',
        body: [
          'Les glucides, les lipides et les protides sont trois grandes familles de biomolécules à connaître en première STL.',
          'Chacune possède des caractéristiques structurales et fonctionnelles propres.',
          'Ces familles se retrouvent dans les aliments, les cellules et les tissus.',
        ],
        takeaway:
          'Reconnaître la famille d’une biomolécule est une première étape indispensable.',
      }),
      createCourseSection({
        title: '2. Des repères structuraux simples',
        body: [
          'Certaines biomolécules sont constituées d’unités répétées, d’autres non.',
          'La présence de certaines parties hydrophiles ou hydrophobes influence leur comportement dans le milieu.',
          'Ces repères permettent de comprendre quelques propriétés sans entrer dans tous les détails chimiques.',
        ],
        takeaway:
          'La structure d’une molécule aide à prévoir certaines de ses propriétés.',
      }),
      createCourseSection({
        title: '3. Un module transversal',
        body: [
          'Les biomolécules interviennent dans la nutrition, les membranes, les enzymes, la communication et de nombreuses activités cellulaires.',
          'Ce module doit donc être réutilisé régulièrement dans les autres parties du programme.',
          "L'objectif n'est pas d'apprendre une liste isolée, mais de construire des repères durables.",
        ],
        takeaway:
          'Les notions de biomolécules servent dans tout le programme de biochimie-biologie.',
      }),
    ],
    method: {
      title: 'Méthode - Identifier une biomolécule dans un exercice',
      steps: [
        'Repère d’abord la famille générale.',
        'Cherche ensuite une propriété utile : solubilité, rôle, unité de base.',
        'Relie cette propriété à une fonction biologique possible.',
        'Conclue avec un vocabulaire simple et exact.',
      ],
    },
    keyPoints: [
      'Glucides, lipides et protides sont des familles majeures.',
      'La structure d’une biomolécule influence ses propriétés.',
      'Les repères biochimiques doivent être réutilisés dans plusieurs chapitres.',
      'Une bonne identification repose sur des critères simples mais rigoureux.',
    ],
    selfCheck: [
      'Je sais distinguer glucides, lipides et protides.',
      'Je sais expliquer ce que signifie hydrophile ou hydrophobe dans un contexte simple.',
      'Je sais relier une famille de biomolécules à un rôle biologique.',
      'Je sais réutiliser ce module dans d’autres chapitres.',
    ],
  }),
  createPremiereLesson({
    id: 'bba-2-diversite-fonctions',
    code: 'A.2',
    title: 'Glucides et protéines : diversité de structures et de fonctions',
    summary:
      'Montrer qu’une même famille de biomolécules peut regrouper des molécules de structures et de fonctions variées.',
    intro:
      "Connaître une famille de biomolécules ne suffit pas. Il faut aussi comprendre qu'à l'intérieur d'une même famille, la diversité structurale explique une diversité de fonctions biologiques.",
    objectives: [
      'Illustrer la diversité des glucides et des protéines.',
      'Relier une différence de structure à une différence de fonction.',
      'Comprendre qu’une même famille ne correspond pas à une seule fonction.',
      'Mobiliser ces idées dans des exemples biologiques simples.',
    ],
    chapterQuestions: [
      "Pourquoi tous les glucides n'ont-ils pas le même rôle ?",
      "Pourquoi toutes les protéines n'ont-elles pas la même fonction ?",
      'Quel lien faut-il faire entre structure et fonction ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Comparer plusieurs glucides',
        intro:
          'Selon leur structure, certains glucides sont facilement utilisables, d’autres ont un rôle de réserve ou de structure.',
        documents: [
          createDocument(
            'Diversité des glucides',
            [
              'Le glucose est une molécule simple rapidement utilisable. Le glycogène est une forme de réserve. La cellulose participe à une fonction structurale. Ces molécules appartiennent pourtant à la même grande famille.',
            ],
          ),
        ],
        instruction:
          'Compare les rôles de ces glucides et montre pourquoi on ne peut pas réduire les glucides à une seule fonction.',
        questions: [
          'Q1. Quel glucide du document est présenté comme une réserve ?',
          'Q2. Quel glucide joue un rôle structural ?',
          'Q3. Que montre cet exemple sur la diversité des glucides ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Comparer plusieurs protéines',
        intro:
          'Une protéine peut être une enzyme, une protéine de structure, un transporteur ou un récepteur.',
        documents: [
          createDocument(
            'Diversité des protéines',
            [
              "Le collagène participe à la résistance des tissus, l'hémoglobine transporte des gaz respiratoires, certaines enzymes catalysent des réactions et certains récepteurs membranaires participent à la communication cellulaire.",
            ],
          ),
        ],
        instruction:
          'Montre que la catégorie “protéine” recouvre des fonctions très différentes.',
        questions: [
          'Q4. Donne deux fonctions très différentes assurées par des protéines.',
          'Q5. Pourquoi parle-t-on de diversité fonctionnelle ?',
          "Q6. En quoi la structure d'une protéine conditionne-t-elle son rôle ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Diversité des glucides',
        body: [
          'Les glucides regroupent des molécules simples et des molécules plus complexes.',
          'Selon leur structure, ils peuvent jouer un rôle énergétique, de réserve ou de structure.',
          'Il faut donc éviter de résumer les glucides à “ce qui donne de l’énergie”.',
        ],
        takeaway:
          'Une même famille moléculaire peut remplir plusieurs fonctions.',
      }),
      createCourseSection({
        title: '2. Diversité des protéines',
        body: [
          "Les protéines assurent des rôles très variés dans l'organisme.",
          'Certaines catalysent, d’autres transportent, d’autres encore structurent ou participent à la communication.',
          'Cette diversité repose sur leur composition et leur organisation tridimensionnelle.',
        ],
        takeaway:
          'La diversité des protéines est un bon exemple du lien entre structure et fonction.',
      }),
      createCourseSection({
        title: '3. Structure et fonction',
        body: [
          "Une modification de structure peut changer les propriétés d'une biomolécule.",
          "C'est pourquoi l'étude de la structure n'est jamais gratuite : elle permet de comprendre le rôle biologique.",
          "Cette idée traverse l'ensemble du programme de biochimie-biologie.",
        ],
        takeaway:
          'Comprendre une structure permet souvent de mieux comprendre une fonction.',
      }),
    ],
    method: {
      title: 'Méthode - Comparer des biomolécules',
      steps: [
        'Identifie les molécules comparées.',
        'Relève leur famille commune ou leurs différences structurales.',
        'Compare ensuite leurs fonctions biologiques.',
        'Conclue sur le lien entre structure et fonction.',
      ],
    },
    keyPoints: [
      'Une même famille de biomolécules peut être très diverse.',
      "Tous les glucides et toutes les protéines n'ont pas la même fonction.",
      'La structure conditionne souvent la fonction.',
      'La comparaison est un outil utile pour raisonner en biochimie-biologie.',
    ],
    selfCheck: [
      'Je sais donner plusieurs rôles possibles des glucides.',
      'Je sais donner plusieurs rôles possibles des protéines.',
      'Je sais expliquer le lien entre structure et fonction.',
      'Je sais comparer deux biomolécules dans un exercice simple.',
    ],
  }),
  createPremiereLesson({
    id: 'bba-3-acides-nucleiques',
    code: 'A.3',
    title: 'Les acides nucléiques',
    summary:
      "Installer les repères essentiels sur l'ADN, l'ARN et leur rôle dans l'information génétique.",
    intro:
      "Les acides nucléiques occupent une place centrale dans toute la partie génétique du programme. Ce module donne les bases nécessaires pour comprendre ce qu'est une information génétique et comment elle peut être utilisée.",
    objectives: [
      'Distinguer ADN et ARN.',
      "Relier les acides nucléiques à l'information génétique.",
      'Connaître le rôle général des nucléotides.',
      'Préparer les chapitres de génétique moléculaire.',
    ],
    chapterQuestions: [
      "Qu'est-ce qu'un acide nucléique ?",
      'Quelle différence faut-il faire entre ADN et ARN ?',
      "Pourquoi l'ADN est-il au cœur de l'information génétique ?",
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Comparer ADN et ARN',
        intro:
          "ADN et ARN appartiennent à la même grande famille, mais ils n'ont ni la même structure exacte ni le même rôle principal.",
        documents: [
          createDocument(
            'Repères sur ADN et ARN',
            [
              "L'ADN est généralement présenté comme une molécule de stockage durable de l'information génétique. L'ARN intervient plus directement dans l'expression de cette information. Les deux sont constitués d'unités appelées nucléotides.",
            ],
          ),
        ],
        instruction:
          'Relève ce que ces deux molécules ont en commun, puis ce qui les distingue.',
        questions: [
          'Q1. Quel point commun existe entre ADN et ARN ?',
          "Q2. Quel rôle général attribue-t-on plutôt à l'ADN ?",
          "Q3. Quel rôle général attribue-t-on plutôt à l'ARN ?",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: "Relier acides nucléiques et information génétique",
        intro:
          "L'information biologique ne réside pas seulement dans la présence d'ADN, mais dans l'ordre des nucléotides qui le composent.",
        documents: [
          createDocument(
            'Séquence et information',
            [
              "La séquence des nucléotides constitue une information. Une modification de cette séquence peut modifier l'information portée et, parfois, la protéine produite à partir de cette information.",
            ],
          ),
        ],
        instruction:
          'Explique pourquoi la notion de séquence est essentielle en génétique.',
        questions: [
          "Q4. Pourquoi la simple présence d'ADN ne suffit-elle pas à expliquer un caractère ?",
          'Q5. Que signifie le mot séquence dans ce contexte ?',
          "Q6. Quel lien peut-on faire entre séquence d'ADN et protéine produite ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Définition des acides nucléiques',
        body: [
          "Les acides nucléiques sont des macromolécules constituées de nucléotides.",
          "Les deux principaux acides nucléiques à connaître sont l'ADN et l'ARN.",
          "Ils interviennent dans la conservation et l'utilisation de l'information génétique.",
        ],
        takeaway:
          "ADN et ARN appartiennent à la même famille, mais n'assurent pas exactement le même rôle.",
      }),
      createCourseSection({
        title: "2. ADN, support de l'information génétique",
        body: [
          "L'ADN porte l'information génétique sous forme de séquence de nucléotides.",
          'Cette information est organisée dans les gènes.',
          "La stabilité relative de la molécule d'ADN en fait un support adapté au stockage de cette information.",
        ],
        takeaway:
          "L'ADN est le support durable de l'information génétique.",
      }),
      createCourseSection({
        title: '3. ARN et expression des gènes',
        body: [
          "L'ARN intervient dans l'expression de l'information génétique.",
          'Il permet un passage entre le gène et la synthèse des protéines.',
          'Cette distinction entre stockage et expression est essentielle pour la suite du programme.',
        ],
        takeaway:
          "ADN et ARN sont complémentaires dans la mise en œuvre de l'information génétique.",
      }),
    ],
    method: {
      title: 'Méthode - Présenter le rôle des acides nucléiques',
      steps: [
        'Définis la famille des acides nucléiques.',
        'Distingue ensuite ADN et ARN.',
        "Précise enfin leur rôle dans la gestion de l'information génétique.",
        'Conclue en reliant ces notions au chapitre sur le génotype et le phénotype.',
      ],
    },
    keyPoints: [
      "L'ADN et l'ARN sont des acides nucléiques.",
      'Ils sont constitués de nucléotides.',
      "L'ADN stocke l'information génétique.",
      "L'ARN intervient dans son expression.",
    ],
    selfCheck: [
      'Je sais définir un acide nucléique.',
      'Je sais distinguer ADN et ARN.',
      'Je sais expliquer le rôle de la séquence des nucléotides.',
      'Je sais relier acides nucléiques et expression génétique.',
    ],
  }),
  createPremiereLesson({
    id: 'bba-4-membranes',
    code: 'A.4',
    title: 'Membranes biologiques : structure et fonction',
    summary:
      "Comprendre en quoi l'organisation des membranes explique leur rôle d'interface et d'échange.",
    intro:
      "Les membranes biologiques ne sont pas de simples enveloppes. Elles séparent, protègent, organisent et permettent des échanges sélectifs indispensables à la vie cellulaire.",
    objectives: [
      'Identifier les constituants majeurs d’une membrane.',
      'Relier structure membranaire et échanges.',
      'Comprendre le rôle des protéines membranaires.',
      'Réutiliser ces notions dans les chapitres sur les transports et la communication.',
    ],
    chapterQuestions: [
      "Pourquoi une membrane n'est-elle pas une simple barrière ?",
      'Quels éléments structurent une membrane biologique ?',
      'Comment la membrane participe-t-elle aux échanges et à la communication ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Identifier les constituants d’une membrane',
        intro:
          'La membrane plasmique est souvent présentée comme une bicouche lipidique associée à des protéines.',
        documents: [
          createDocument(
            'Organisation générale de la membrane',
            [
              "La membrane comporte une bicouche de lipides au sein de laquelle s'insèrent différentes protéines. Cette organisation explique son rôle d'interface entre deux milieux et sa perméabilité sélective.",
            ],
          ),
        ],
        instruction:
          'Relève les constituants majeurs de la membrane et explique en une phrase le rôle général de chacun.',
        questions: [
          'Q1. Quel est le rôle de la bicouche lipidique ?',
          'Q2. Pourquoi la présence de protéines membranaires est-elle importante ?',
          'Q3. Que signifie perméabilité sélective ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Relier membrane et fonction cellulaire',
        intro:
          "Une membrane intervient dans les échanges, mais aussi dans la reconnaissance et la communication entre cellules.",
        documents: [
          createDocument(
            'Fonctions de la membrane',
            [
              "La membrane permet l'entrée ou la sortie contrôlée de certaines substances. Elle porte aussi des récepteurs capables de reconnaître des signaux, et des marqueurs participant à l'identité cellulaire.",
            ],
          ),
        ],
        instruction:
          'Montre que la membrane remplit plusieurs fonctions à la fois.',
        questions: [
          'Q4. Donne un exemple de fonction liée aux échanges.',
          'Q5. Donne un exemple de fonction liée à la communication.',
          'Q6. Pourquoi la structure de la membrane est-elle adaptée à ces fonctions ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Une organisation en bicouche',
        body: [
          'La membrane plasmique est organisée autour d’une bicouche lipidique.',
          'Cette structure constitue une interface entre le milieu intracellulaire et le milieu extracellulaire.',
          'Elle n’est pas rigide : elle forme une structure dynamique.',
        ],
        takeaway:
          'La bicouche lipidique est la base structurale de la membrane.',
      }),
      createCourseSection({
        title: '2. Le rôle des protéines membranaires',
        body: [
          'Les protéines membranaires participent aux échanges de substances, à la réception de signaux et à la reconnaissance cellulaire.',
          'Elles rendent la membrane fonctionnelle et spécialisée.',
          "Sans elles, la membrane serait beaucoup plus limitée dans ses rôles biologiques.",
        ],
        takeaway:
          'Les protéines membranaires donnent à la membrane une grande partie de ses fonctions.',
      }),
      createCourseSection({
        title: '3. Membrane et échanges sélectifs',
        body: [
          'La membrane ne laisse pas tout passer librement.',
          'Elle contrôle les échanges selon la nature des molécules et selon les dispositifs présents.',
          'Cette sélectivité est indispensable au maintien du fonctionnement cellulaire.',
        ],
        takeaway:
          'Une membrane biologique sépare et met en relation en même temps.',
      }),
    ],
    method: {
      title: 'Méthode - Exploiter un schéma de membrane',
      steps: [
        'Identifie la bicouche lipidique.',
        'Repère les protéines membranaires.',
        'Relie ensuite chaque élément à une fonction possible.',
        'Conclue sur le rôle de la membrane comme interface sélective.',
      ],
    },
    keyPoints: [
      'Une membrane biologique est organisée en bicouche lipidique.',
      'Les protéines membranaires ont des rôles variés.',
      'La membrane assure des échanges sélectifs.',
      'Elle intervient aussi dans la communication et la reconnaissance cellulaire.',
    ],
    selfCheck: [
      'Je sais citer les principaux constituants d’une membrane.',
      'Je sais expliquer la notion de perméabilité sélective.',
      'Je sais relier protéines membranaires et fonctions.',
      'Je sais montrer que la membrane est une interface active.',
    ],
  }),
];
export const PREMIERE_BIOBIO_TRANSVERSAL_B_LESSONS = [
  createPremiereLesson({
    id: 'bbb-1-observer-vivant',
    code: 'B.1',
    title: 'Observer le vivant',
    summary:
      "Choisir un outil d'observation adapté et interpréter correctement une image ou une préparation microscopique.",
    intro:
      "Observer le vivant demande une méthode. Il faut choisir le bon outil, régler correctement l'observation et savoir ce qu'une image permet ou non de conclure.",
    objectives: [
      "Choisir un mode d'observation adapté.",
      'Utiliser correctement les notions de grossissement et d’échelle.',
      'Relier observation et niveau d’organisation du vivant.',
      'Décrire une observation sans la déformer.',
    ],
    chapterQuestions: [
      'Comment choisir un outil d’observation ?',
      'Que permet réellement une observation microscopique ?',
      'Pourquoi faut-il distinguer observation et interprétation ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Choisir un outil d’observation',
        intro:
          "Tous les objets biologiques ne s'observent pas avec le même matériel ni à la même échelle.",
        documents: [
          createDocument(
            "Niveaux d'observation",
            [
              "À l'œil nu, on observe un organe ou un organisme entier. Le microscope optique permet d'observer des cellules ou des tissus. D'autres techniques sont nécessaires pour des structures encore plus petites.",
            ],
          ),
        ],
        instruction:
          'Associe chaque niveau d’organisation à un outil d’observation pertinent.',
        questions: [
          "Q1. Que peut-on voir à l'œil nu ?",
          'Q2. Quel est le domaine privilégié du microscope optique ?',
          "Q3. Pourquoi un seul outil ne suffit-il pas pour observer tout le vivant ?",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Décrire correctement une observation',
        intro:
          "Une observation scientifique doit être fidèle. On ne décrit pas ce que l'on imagine, mais ce que l'on voit réellement.",
        documents: [
          createDocument(
            'Règles de description',
            [
              "Une bonne observation mentionne la forme, la disposition, la taille relative et les structures visibles. L'interprétation biologique vient ensuite et doit être distincte de la description.",
            ],
          ),
        ],
        instruction:
          'Distingue ce qui relève de la description et ce qui relève de l’interprétation.',
        questions: [
          'Q4. Pourquoi faut-il séparer observation et interprétation ?',
          'Q5. Quelles informations une observation doit-elle contenir ?',
          "Q6. Quel intérêt y a-t-il à indiquer une échelle ou un grossissement ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Observer selon la bonne échelle',
        body: [
          'Le vivant peut être étudié à différentes échelles : organisme, organe, tissu, cellule, structure subcellulaire.',
          "Le choix de l'outil dépend de la taille de l'objet et de la précision attendue.",
          "Une bonne observation commence donc par un choix d'outil pertinent.",
        ],
        takeaway:
          "Observer correctement, c'est d'abord choisir la bonne échelle.",
      }),
      createCourseSection({
        title: '2. Utiliser le microscope avec méthode',
        body: [
          'Le microscope optique doit être utilisé avec rigueur : réglage, mise au point progressive, choix du grossissement.',
          'Une mauvaise manipulation peut fausser ou empêcher l’observation.',
          'Le résultat observé dépend donc aussi de la qualité de la préparation et de la méthode employée.',
        ],
        takeaway:
          'Une observation fiable dépend autant du matériel que de la méthode du manipulateur.',
      }),
      createCourseSection({
        title: '3. Décrire sans surinterpréter',
        body: [
          "Une observation est un ensemble d'éléments réellement visibles.",
          "L'interprétation est une explication proposée à partir de ce qui est observé.",
          'En science, il faut toujours distinguer les deux pour rester rigoureux.',
        ],
        takeaway:
          'Décrire puis interpréter : jamais l’inverse.',
      }),
    ],
    method: {
      title: 'Méthode - Présenter une observation',
      steps: [
        'Indique le matériel ou la technique utilisée.',
        'Décris précisément ce qui est visible.',
        'Mentionne le grossissement ou l’échelle si disponible.',
        'Ajoute seulement ensuite une interprétation argumentée.',
      ],
    },
    diagrams: [
      {
        id: 'microscope',
        title: 'Schéma - Repères de base du microscope',
        caption:
          'Ce schéma rappelle les éléments de base et le réflexe de commencer au plus faible grossissement.',
      },
      {
        id: 'cells',
        title: 'Schéma - Deux organisations cellulaires',
        caption:
          "Une observation n'a de sens que si elle est reliée au bon niveau d'organisation du vivant.",
      },
    ],
    keyPoints: [
      "L'outil d'observation dépend de l'échelle étudiée.",
      'Le microscope optique exige une méthode rigoureuse.',
      'Une observation doit être décrite avec précision.',
      "Il faut distinguer description et interprétation.",
    ],
    selfCheck: [
      'Je sais choisir un outil d’observation adapté.',
      "Je sais expliquer l'intérêt du grossissement et de l'échelle.",
      'Je sais décrire une observation sans interpréter trop vite.',
      'Je sais utiliser correctement les repères de base du microscope.',
    ],
  }),
  createPremiereLesson({
    id: 'bbb-2-divisions-cellulaires',
    code: 'B.2',
    title: 'Les divisions cellulaires',
    summary:
      'Comparer les grands types de divisions cellulaires et leur intérêt biologique.',
    intro:
      "Les divisions cellulaires participent à la croissance, au renouvellement des tissus et à la reproduction. Il faut savoir en dégager la logique générale et leurs conséquences sur l'information génétique.",
    objectives: [
      "Identifier le rôle général d'une division cellulaire.",
      "Distinguer les conséquences d'une division de croissance et d'une division impliquée dans la reproduction.",
      'Relier division cellulaire et patrimoine génétique.',
      'Utiliser un schéma simple de cycle cellulaire ou de division.',
    ],
    chapterQuestions: [
      'Pourquoi les cellules se divisent-elles ?',
      "Que devient le patrimoine génétique lors d'une division ?",
      'Pourquoi plusieurs types de divisions existent-ils ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Relier division cellulaire et fonction biologique',
        intro:
          'La division cellulaire peut servir à faire croître un organisme, renouveler un tissu ou participer à la reproduction.',
        documents: [
          createDocument(
            'Fonctions des divisions cellulaires',
            [
              "Une division cellulaire n'a pas toujours la même finalité. Dans certains cas, elle maintient des cellules comparables. Dans d'autres, elle participe à la formation des cellules reproductrices.",
            ],
          ),
        ],
        instruction:
          'Classe les situations proposées selon leur finalité biologique.',
        questions: [
          "Q1. Pourquoi la croissance d'un organisme nécessite-t-elle des divisions cellulaires ?",
          'Q2. Pourquoi les tissus doivent-ils parfois renouveler leurs cellules ?',
          'Q3. Quelle relation peut-on faire entre division cellulaire et reproduction ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Comparer les conséquences génétiques',
        intro:
          "Selon le type de division, l'information génétique conservée ou transmise n'est pas organisée de la même manière.",
        documents: [
          createDocument(
            'Patrimoine génétique et division',
            [
              "Certaines divisions conservent un patrimoine génétique très proche entre cellule mère et cellules filles. D'autres conduisent à des cellules destinées à la reproduction et modifient la quantité d'information portée par chaque cellule produite.",
            ],
          ),
        ],
        instruction:
          "Explique pourquoi toutes les divisions cellulaires n'ont pas exactement le même résultat génétique.",
        questions: [
          'Q4. Dans quel cas souhaite-t-on conserver des cellules semblables ?',
          'Q5. Pourquoi la production de gamètes nécessite-t-elle une autre logique ?',
          "Q6. Quel intérêt biologique y a-t-il à distinguer plusieurs types de division ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Des divisions au service de la vie',
        body: [
          'Les divisions cellulaires participent à la croissance, à la réparation et au renouvellement des tissus.',
          'Elles interviennent aussi dans la reproduction sexuée via la formation des gamètes.',
          'Il ne faut donc pas réduire la division cellulaire à une simple multiplication de cellules.',
        ],
        takeaway:
          'Une division cellulaire doit toujours être reliée à une fonction biologique.',
      }),
      createCourseSection({
        title: '2. Conservation ou modification du patrimoine génétique',
        body: [
          "Certaines divisions maintiennent des cellules génétiquement très proches de la cellule d'origine.",
          "D'autres aboutissent à des cellules spécialisées pour la reproduction et modifient la quantité de matériel génétique par cellule.",
          'Le contexte biologique explique donc le type de division observé.',
        ],
        takeaway:
          "Le résultat génétique d'une division dépend de sa fonction biologique.",
      }),
      createCourseSection({
        title: '3. Une notion à relier aux autres chapitres',
        body: [
          'Les divisions cellulaires doivent être mises en lien avec la croissance, la génétique et la reproduction.',
          "Ce module transversal sert donc de point d'appui à plusieurs autres chapitres du programme.",
          "L'élève doit surtout comprendre la logique générale plutôt que mémoriser des schémas isolés.",
        ],
        takeaway:
          'Une division cellulaire se comprend toujours en contexte.',
      }),
    ],
    method: {
      title: 'Méthode - Présenter une division cellulaire',
      steps: [
        'Précise à quoi sert la division dans le contexte étudié.',
        'Indique ensuite ce qui arrive au patrimoine génétique.',
        'Compare le résultat obtenu avec la cellule de départ.',
        'Conclue sur la fonction biologique de cette division.',
      ],
    },
    keyPoints: [
      'Les divisions cellulaires ont plusieurs fonctions biologiques.',
      "Elles ne conduisent pas toutes au même résultat génétique.",
      'Elles sont liées à la croissance, au renouvellement et à la reproduction.',
      'Leur étude doit être replacée dans le contexte du vivant.',
    ],
    selfCheck: [
      'Je sais expliquer pourquoi les cellules se divisent.',
      'Je sais distinguer deux logiques générales de division cellulaire.',
      'Je sais relier division cellulaire et patrimoine génétique.',
      'Je sais replacer une division dans son contexte biologique.',
    ],
  }),
];

export const PREMIERE_BIOBIO_TRANSVERSAL_C_LESSONS = [
  createPremiereLesson({
    id: 'bbc-1-communication-hormonale',
    code: 'C.1',
    title: 'Communication hormonale',
    summary:
      'Identifier la logique d’une communication endocrine et ses effets sur les organes cibles.',
    intro:
      "Une cellule ou un organe ne fonctionne pas isolément. La communication hormonale permet une coordination à distance grâce à des molécules circulant dans le milieu intérieur.",
    objectives: [
      'Définir la communication hormonale.',
      'Relier hormone, sang et organe cible.',
      "Comprendre l'intérêt d'un signal à distance.",
      'Réutiliser cette notion dans les chapitres de nutrition ou de reproduction.',
    ],
    chapterQuestions: [
      "Qu'est-ce qu'une communication hormonale ?",
      "Pourquoi parle-t-on d'action à distance ?",
      'Quel rôle joue le sang dans ce type de communication ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Identifier les éléments d’une communication endocrine',
        intro:
          'Une communication hormonale fait intervenir un organe sécréteur, une molécule messagère et un organe cible.',
        documents: [
          createDocument(
            "Schéma logique d'une communication hormonale",
            [
              "Un organe sécréteur libère une hormone dans le sang. Cette hormone circule puis agit sur des cellules cibles capables de la reconnaître. La réponse dépend donc de la présence de récepteurs adaptés.",
            ],
          ),
        ],
        instruction:
          'Retrouve dans le document les trois éléments indispensables de la communication hormonale.',
        questions: [
          'Q1. Quel est le rôle du sang dans cette communication ?',
          'Q2. Pourquoi toutes les cellules ne réagissent-elles pas forcément à la même hormone ?',
          "Q3. Qu'appelle-t-on cellule cible ?",
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Comparer communication locale et communication à distance',
        intro:
          'Une hormone agit à distance, ce qui la distingue d’autres formes de communication plus locales.',
        documents: [
          createDocument(
            'Action à distance',
            [
              "Une hormone peut être produite dans un organe puis agir sur un autre organe éloigné. Ce transport par le milieu intérieur permet une coordination générale de l'organisme.",
            ],
          ),
        ],
        instruction:
          "Explique pourquoi le trajet de l'hormone dans le sang est un élément central de cette communication.",
        questions: [
          "Q4. Pourquoi parle-t-on de communication à distance ?",
          "Q5. Quel avantage y a-t-il à coordonner des organes éloignés ?",
          "Q6. Donne un exemple de chapitre où cette notion est réutilisée.",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Définition de la communication hormonale',
        body: [
          'La communication hormonale repose sur la sécrétion d’une hormone dans le sang.',
          'Cette hormone peut agir à distance sur un organe ou des cellules cibles.',
          "Elle participe ainsi à la coordination générale du fonctionnement de l'organisme.",
        ],
        takeaway:
          'Une hormone est un message chimique circulant dans le milieu intérieur.',
      }),
      createCourseSection({
        title: '2. Le rôle des cellules cibles',
        body: [
          'Une hormone n’agit pas sur toutes les cellules indistinctement.',
          'Elle agit surtout sur les cellules capables de la reconnaître grâce à des récepteurs adaptés.',
          'La notion de cellule cible est donc essentielle pour comprendre la spécificité de la réponse.',
        ],
        takeaway:
          'Pas de réponse hormonale sans cellule cible adaptée.',
      }),
      createCourseSection({
        title: '3. Une notion transversale',
        body: [
          'La communication hormonale intervient dans la nutrition, la reproduction, la régulation de la glycémie et de nombreuses autres fonctions.',
          "Ce module sert donc d'appui à plusieurs chapitres du programme.",
          'Il faut en retenir la logique générale plus qu’une liste isolée d’exemples.',
        ],
        takeaway:
          'La communication hormonale est une notion de lien entre plusieurs chapitres.',
      }),
    ],
    method: {
      title: 'Méthode - Décrire une communication hormonale',
      steps: [
        "Nomme l'organe sécréteur.",
        "Indique l'hormone et son transport par le sang.",
        "Précise la cellule ou l'organe cible.",
        'Conclue sur la réponse biologique obtenue.',
      ],
    },
    keyPoints: [
      'Une hormone est un messager chimique.',
      'Elle circule dans le sang.',
      'Elle agit sur des cellules cibles adaptées.',
      'La communication hormonale coordonne des organes parfois éloignés.',
    ],
    selfCheck: [
      'Je sais définir la communication hormonale.',
      'Je sais expliquer le rôle du sang dans ce type de communication.',
      'Je sais définir une cellule cible.',
      'Je sais relier cette notion à d’autres chapitres du programme.',
    ],
  }),
  createPremiereLesson({
    id: 'bbc-2-transport-molecules',
    code: 'C.2',
    title: 'Transport des molécules : organisme, tissu, cellule',
    summary:
      'Relier circulation, échanges et transport à différentes échelles du vivant.',
    intro:
      "Les molécules utiles ou à éliminer doivent circuler entre différents compartiments et différents niveaux d'organisation. Ce module permet de lier organisme, tissus, milieux et cellules.",
    objectives: [
      'Identifier plusieurs niveaux de transport des molécules.',
      'Relier circulation sanguine, liquide interstitiel et cellule.',
      'Comprendre que les échanges se font à travers des interfaces.',
      'Réutiliser ces notions dans la nutrition et la physiologie.',
    ],
    chapterQuestions: [
      "Comment une molécule passe-t-elle de l'organisme à la cellule ?",
      'Quels milieux intermédiaires faut-il prendre en compte ?',
      'Pourquoi le transport doit-il être étudié à plusieurs échelles ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Activité 1',
        title: 'Suivre le trajet d’une molécule',
        intro:
          "Une molécule absorbée par l'organisme n'arrive pas directement dans la cellule sans étapes intermédiaires.",
        documents: [
          createDocument(
            'Du tube digestif à la cellule',
            [
              "Après absorption, une molécule rejoint la circulation sanguine, passe par le milieu interstitiel puis atteint les cellules. Chaque étape implique des interfaces d'échange et des mécanismes de transport.",
            ],
          ),
        ],
        instruction:
          'Reconstitue le trajet de la molécule en nommant chaque compartiment traversé.',
        questions: [
          'Q1. Quel compartiment relie directement le sang aux cellules ?',
          'Q2. Pourquoi parle-t-on d’étapes de transport ?',
          'Q3. Quel intérêt y a-t-il à raisonner à plusieurs échelles ?',
        ],
      }),
      createQuestionSet({
        tag: 'Activité 2',
        title: 'Relier membrane et échanges',
        intro:
          'Les échanges entre milieux ne se font pas sans interface : la membrane cellulaire joue un rôle central.',
        documents: [
          createDocument(
            "Interface d'échange",
            [
              "Une molécule entrant dans une cellule doit franchir la membrane plasmique. Selon sa nature, elle peut diffuser plus ou moins facilement, ou nécessiter des dispositifs membranaires spécifiques.",
            ],
          ),
        ],
        instruction:
          'Montre que le transport des molécules dépend aussi des propriétés de la membrane.',
        questions: [
          'Q4. Pourquoi la membrane est-elle un passage obligé ?',
          'Q5. Toutes les molécules franchissent-elles la membrane de la même façon ?',
          'Q6. Quel lien ce module entretient-il avec le module sur les membranes biologiques ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Un transport à plusieurs échelles',
        body: [
          "Le transport des molécules peut être étudié à l'échelle de l'organisme, des tissus ou de la cellule.",
          'Ces différentes échelles sont complémentaires.',
          'Une explication correcte relie le trajet global à des échanges plus locaux.',
        ],
        takeaway:
          "Une molécule circule dans un organisme selon plusieurs niveaux de transport.",
      }),
      createCourseSection({
        title: '2. Le rôle des milieux',
        body: [
          'Le sang assure un transport rapide à grande échelle.',
          'Le liquide interstitiel relie le compartiment vasculaire aux cellules.',
          'Le passage d’une molécule vers la cellule suppose ensuite le franchissement de la membrane plasmique.',
        ],
        takeaway:
          'Le transport biologique associe circulation et échanges locaux.',
      }),
      createCourseSection({
        title: '3. Un module transversal utile',
        body: [
          'Ce module éclaire la nutrition, la régulation, la communication hormonale et bien d’autres chapitres.',
          "Il faut donc le considérer comme une clé de lecture générale du programme.",
          'Plus l’élève relie les niveaux d’organisation, plus ses réponses deviennent solides.',
        ],
        takeaway:
          'Penser le transport, c’est relier organisme, tissus et cellules.',
      }),
    ],
    method: {
      title: 'Méthode - Suivre le trajet d’une molécule',
      steps: [
        'Repère le point de départ de la molécule.',
        'Nomme chaque compartiment traversé.',
        'Indique les interfaces à franchir.',
        'Termine par le lieu où la molécule est utilisée ou éliminée.',
      ],
    },
    keyPoints: [
      'Le transport des molécules se raisonne à plusieurs échelles.',
      'Le sang et le liquide interstitiel sont deux milieux à distinguer.',
      'La membrane cellulaire intervient dans les échanges finaux.',
      'Ce module sert dans de nombreux chapitres de physiologie.',
    ],
    selfCheck: [
      "Je sais suivre le trajet général d'une molécule dans l'organisme.",
      'Je sais distinguer sang, liquide interstitiel et cellule.',
      'Je sais expliquer le rôle de la membrane dans les échanges.',
      'Je sais relier ce module à la nutrition ou à la communication hormonale.',
    ],
  }),
];
export const PREMIERE_BIOBIO_TRANSVERSAL_D_LESSONS = [
  createPremiereLesson({
    id: 'bbd-1-analyser-document',
    code: 'D.1',
    title: 'Analyser et interpréter un document',
    summary:
      'Apprendre à extraire les informations utiles d’un document scientifique sans confondre observation et conclusion.',
    intro:
      "En STL, un document ne se lit pas comme un texte ordinaire. Il faut identifier sa nature, repérer ce qu'il montre réellement et construire une réponse claire à partir de preuves.",
    objectives: [
      'Identifier la nature d’un document scientifique.',
      'Extraire les informations utiles sans recopier.',
      'Distinguer observation, donnée et interprétation.',
      'Construire une conclusion justifiée.',
    ],
    chapterQuestions: [
      'Comment entrer efficacement dans un document ?',
      'Que faut-il relever en priorité ?',
      'Comment passer d’une donnée à une interprétation ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Étape 1',
        title: 'Identifier le document',
        intro:
          'Avant de répondre, il faut savoir ce que l’on a sous les yeux : texte, tableau, graphique, schéma ou photographie.',
        documents: [
          createDocument(
            'Principe de lecture',
            [
              'La première étape consiste à repérer le titre, la source, les légendes, les axes ou les unités. Ces éléments permettent de comprendre ce que le document cherche à montrer.',
            ],
          ),
        ],
        instruction:
          'Fais la liste des éléments à observer avant même de commencer à répondre au fond.',
        questions: [
          'Q1. Pourquoi le titre et la légende sont-ils importants ?',
          'Q2. Quelles informations un axe ou une unité apportent-ils ?',
          'Q3. Pourquoi faut-il identifier la nature du document avant de conclure ?',
        ],
      }),
      createQuestionSet({
        tag: 'Étape 2',
        title: 'Passer de la donnée à la conclusion',
        intro:
          'Une bonne réponse s’appuie sur des indices précis présents dans le document.',
        documents: [
          createDocument(
            'Donnée et conclusion',
            [
              "Une donnée est un élément observable ou mesurable du document. Une interprétation est une explication proposée à partir de cette donnée. Une conclusion doit donc toujours s'appuyer sur des éléments relevés clairement.",
            ],
          ),
        ],
        instruction:
          'Construis une réponse en deux temps : ce que tu observes, puis ce que tu en déduis.',
        questions: [
          'Q4. Quelle différence fais-tu entre donnée et interprétation ?',
          'Q5. Pourquoi une conclusion sans preuve est-elle fragile ?',
          'Q6. Comment formuler une réponse claire à partir d’un document ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Identifier la nature du document',
        body: [
          'Chaque document a ses codes : un graphique ne se lit pas comme un texte, un schéma ne se lit pas comme une photographie.',
          'Le titre, la source, la légende, les axes et les unités doivent être lus en premier.',
          'Cette étape évite de répondre hors sujet.',
        ],
        takeaway:
          "On n'interprète pas un document qu'on n'a pas d'abord identifié correctement.",
      }),
      createCourseSection({
        title: '2. Relever les informations utiles',
        body: [
          'Il faut sélectionner les informations pertinentes par rapport à la question posée.',
          'Recopier tout le document ne sert à rien.',
          'Le bon réflexe est de relever quelques données solides, puis de les organiser.',
        ],
        takeaway:
          'Une bonne analyse est sélective et orientée par la question.',
      }),
      createCourseSection({
        title: '3. Interpréter avec prudence',
        body: [
          "Une interprétation doit être liée à des indices explicites dans le document.",
          'Elle ne doit pas contredire les données observées.',
          'Si le document ne permet pas une certitude, il faut rester prudent dans la formulation.',
        ],
        takeaway:
          'Observation, donnée et interprétation doivent rester distinctes.',
      }),
    ],
    method: {
      title: 'Méthode - Répondre à une question sur document',
      steps: [
        'Identifie la nature du document.',
        'Repère les informations utiles à la question.',
        'Rédige ce que tu observes avec précision.',
        'Ajoute seulement ensuite ce que tu en déduis.',
      ],
    },
    keyPoints: [
      'Un document scientifique se lit avec méthode.',
      'Il faut distinguer donnée et interprétation.',
      'Une réponse solide s’appuie sur des preuves tirées du document.',
      'La prudence fait partie de la rigueur scientifique.',
    ],
    selfCheck: [
      'Je sais repérer les éléments de base d’un document.',
      'Je sais sélectionner les informations utiles.',
      'Je sais distinguer observation et interprétation.',
      'Je sais rédiger une conclusion justifiée.',
    ],
  }),
  createPremiereLesson({
    id: 'bbd-2-organigrammes',
    code: 'D.2',
    title: "Comprendre et organiser les organigrammes d'expériences",
    summary:
      "Lire ou construire un organigramme simple pour comprendre la logique d'une démarche expérimentale.",
    intro:
      "Un organigramme d'expérience permet de représenter une suite d'actions, de choix et de résultats. Il aide à comprendre rapidement une démarche expérimentale ou à préparer un protocole.",
    objectives: [
      'Identifier les étapes d’un organigramme expérimental.',
      'Relier objectif, action, observation et conclusion.',
      'Construire un schéma logique simple.',
      'Utiliser un organigramme pour clarifier un protocole.',
    ],
    chapterQuestions: [
      "Pourquoi un organigramme peut-il aider à comprendre une expérience ?",
      'Quelles informations doit-il contenir ?',
      'Comment éviter un organigramme confus ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Étape 1',
        title: 'Lire un organigramme',
        intro:
          "Un organigramme présente les étapes dans un ordre logique, parfois avec des embranchements selon le résultat obtenu.",
        documents: [
          createDocument(
            "Logique d'un organigramme",
            [
              "Un organigramme expérimental peut comporter un point de départ, une série d'étapes, des observations attendues et parfois des décisions selon le résultat observé. Il ne remplace pas toujours un protocole détaillé, mais il en donne la structure.",
            ],
          ),
        ],
        instruction:
          'Repère dans le document les étapes, les observations et les éventuels choix conditionnels.',
        questions: [
          "Q1. Quel est le rôle du point de départ dans un organigramme ?",
          'Q2. Pourquoi certaines étapes peuvent-elles se séparer en plusieurs branches ?',
          "Q3. Qu'apporte un organigramme par rapport à un texte continu ?",
        ],
      }),
      createQuestionSet({
        tag: 'Étape 2',
        title: 'Construire un organigramme simple',
        intro:
          'Pour être utile, un organigramme doit rester lisible et respecter un ordre logique.',
        documents: [
          createDocument(
            'Règles de construction',
            [
              "Un organigramme doit partir d'un objectif clair. Chaque case correspond à une action, une observation ou une décision. Les flèches montrent la progression de la démarche et les retours éventuels.",
            ],
          ),
        ],
        instruction:
          "Explique quelles règles il faut respecter pour que l'organigramme soit vraiment utile à un élève ou à un manipulateur.",
        questions: [
          "Q4. Pourquoi faut-il partir d'un objectif clair ?",
          'Q5. Que doit représenter une flèche ?',
          "Q6. Qu'est-ce qui rend un organigramme illisible ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: "1. Un outil de représentation d'une démarche",
        body: [
          'Un organigramme permet de représenter la logique d’une expérience ou d’un raisonnement expérimental.',
          'Il met en évidence les étapes, les observations et les choix éventuels.',
          'Il aide à comprendre la structure d’un protocole sans entrer immédiatement dans tous les détails.',
        ],
        takeaway:
          "Un organigramme donne l'architecture d'une démarche expérimentale.",
      }),
      createCourseSection({
        title: '2. Lire un organigramme',
        body: [
          "Lire un organigramme, c'est suivre les étapes dans l'ordre indiqué par les flèches.",
          'Il faut distinguer les actions, les observations et les décisions.',
          'Une branche supplémentaire correspond généralement à un résultat différent ou à un choix conditionnel.',
        ],
        takeaway:
          'Les flèches et les embranchements donnent la logique de lecture.',
      }),
      createCourseSection({
        title: '3. Construire un organigramme utile',
        body: [
          'Un bon organigramme est sobre, ordonné et lisible.',
          'Il part d’un objectif précis et évite les informations inutiles dans les cases.',
          'Il sert à clarifier une démarche, pas à compliquer sa lecture.',
        ],
        takeaway:
          'Un organigramme utile est avant tout un organigramme clair.',
      }),
    ],
    method: {
      title: 'Méthode - Construire un organigramme',
      steps: [
        "Écris d'abord l'objectif.",
        'Liste ensuite les grandes étapes dans l’ordre.',
        'Ajoute les observations ou décisions éventuelles.',
        'Relie le tout par des flèches simples et lisibles.',
      ],
    },
    keyPoints: [
      "Un organigramme représente la logique d'une démarche.",
      'Il distingue étapes, observations et décisions.',
      'Les flèches structurent la lecture.',
      'La lisibilité est une qualité essentielle.',
    ],
    selfCheck: [
      'Je sais lire un organigramme simple.',
      'Je sais expliquer le rôle des embranchements.',
      'Je sais construire un organigramme à partir d’un protocole.',
      'Je sais reconnaître un organigramme mal organisé.',
    ],
  }),
  createPremiereLesson({
    id: 'bbd-3-analyser-courbe',
    code: 'D.3',
    title: 'Analyser une courbe',
    summary:
      'Lire un graphique scientifique pour en extraire une tendance, une comparaison et une conclusion argumentée.',
    intro:
      'La courbe est un document très fréquent en STL. Elle permet de représenter une évolution, une relation entre variables ou une comparaison de conditions. Elle doit être lue avec méthode.',
    objectives: [
      'Repérer les axes, unités et variables.',
      'Décrire une évolution ou une tendance.',
      'Comparer des valeurs ou des courbes.',
      'Rédiger une conclusion argumentée à partir d’un graphique.',
    ],
    chapterQuestions: [
      "Que faut-il lire en premier sur une courbe ?",
      'Comment décrire une évolution sans paraphraser le graphique ?',
      'Comment conclure à partir d’une comparaison de courbes ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Étape 1',
        title: 'Identifier les informations de base',
        intro:
          'Une courbe ne se lit pas en regardant seulement sa forme générale.',
        documents: [
          createDocument(
            'Repères de lecture d’un graphique',
            [
              'Avant toute interprétation, il faut identifier les grandeurs portées sur les axes, leurs unités et le sens de variation. Sans cela, la lecture peut être fausse ou trop vague.',
            ],
          ),
        ],
        instruction:
          'Énumère les éléments indispensables à relever avant de commenter une courbe.',
        questions: [
          'Q1. Pourquoi les unités sont-elles indispensables ?',
          'Q2. Quelle différence faut-il faire entre variable indépendante et variable mesurée ?',
          'Q3. Pourquoi une courbe sans légende précise peut-elle être mal interprétée ?',
        ],
      }),
      createQuestionSet({
        tag: 'Étape 2',
        title: 'Décrire et interpréter une tendance',
        intro:
          'Une bonne analyse distingue toujours la description de la conclusion scientifique.',
        documents: [
          createDocument(
            'Décrire puis interpréter',
            [
              'Décrire une courbe consiste à dire si une grandeur augmente, diminue, stagne ou présente un optimum. Interpréter consiste à expliquer ce que cette tendance suggère sur le phénomène étudié.',
            ],
          ),
        ],
        instruction:
          'Explique la différence entre décrire une évolution et interpréter le phénomène représenté.',
        questions: [
          'Q4. Que signifie “décrire” une courbe ?',
          'Q5. À quel moment peut-on parler d’optimum ou de plateau ?',
          'Q6. Pourquoi faut-il éviter de conclure trop vite ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Lire les axes avant tout',
        body: [
          'La lecture d’une courbe commence toujours par les axes, les unités et la légende.',
          'Il faut repérer ce qui varie, ce qui est mesuré et dans quelles conditions.',
          'Cette étape conditionne toute la suite de l’analyse.',
        ],
        takeaway:
          'Sans lecture des axes, il n’y a pas d’analyse fiable de la courbe.',
      }),
      createCourseSection({
        title: '2. Décrire une évolution',
        body: [
          'Décrire une courbe consiste à relever une tendance : augmentation, diminution, stabilité, maximum, minimum, plateau.',
          'Cette description doit rester fidèle au graphique.',
          'Elle prépare l’interprétation, mais ne la remplace pas.',
        ],
        takeaway:
          'Décrire une courbe, ce n’est pas déjà expliquer le phénomène.',
      }),
      createCourseSection({
        title: '3. Interpréter avec précision',
        body: [
          'L’interprétation doit relier les tendances observées au phénomène étudié.',
          'Elle doit rester compatible avec les données représentées.',
          'Une comparaison entre courbes ou entre conditions doit être appuyée par des éléments précis.',
        ],
        takeaway:
          'La meilleure conclusion est précise, justifiée et mesurée.',
      }),
    ],
    method: {
      title: 'Méthode - Exploiter une courbe',
      steps: [
        'Lis le titre, les axes, les unités et la légende.',
        'Décris la ou les tendances observées.',
        'Compare les valeurs ou les conditions si nécessaire.',
        'Conclue par une interprétation appuyée sur ces observations.',
      ],
    },
    keyPoints: [
      'Une courbe se lit avec méthode.',
      'Il faut distinguer description et interprétation.',
      'Les axes, unités et légendes sont essentiels.',
      'Une conclusion doit s’appuyer sur les tendances observées.',
    ],
    selfCheck: [
      'Je sais lire correctement les axes d’une courbe.',
      'Je sais décrire une tendance.',
      'Je sais comparer deux courbes ou deux conditions.',
      'Je sais rédiger une conclusion à partir d’un graphique.',
    ],
  }),
  createPremiereLesson({
    id: 'bbd-4-utiliser-echelle',
    code: 'D.4',
    title: 'Utiliser une échelle',
    summary:
      'Passer d’une image, d’un schéma ou d’une micrographie à un ordre de grandeur correctement justifié.',
    intro:
      "En biologie, une image sans échelle peut être trompeuse. Il faut savoir lire une barre d'échelle, comparer des tailles et donner un ordre de grandeur cohérent.",
    objectives: [
      'Lire une barre d’échelle.',
      'Relier taille réelle et taille représentée.',
      'Employer les unités de longueur adaptées.',
      'Éviter les erreurs classiques sur les ordres de grandeur.',
    ],
    chapterQuestions: [
      'Pourquoi une échelle est-elle indispensable sur une image scientifique ?',
      'Comment passer de l’image à la taille réelle ?',
      'Quelles erreurs faut-il éviter ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Étape 1',
        title: 'Lire une barre d’échelle',
        intro:
          "La barre d'échelle donne une longueur réelle correspondant à une longueur représentée sur l'image.",
        documents: [
          createDocument(
            'Principe de la barre d’échelle',
            [
              "Si une barre d'échelle correspond à une longueur réelle donnée, on peut estimer la taille d'un objet de l'image en le comparant à cette barre. Il faut alors être attentif à l'unité utilisée.",
            ],
          ),
        ],
        instruction:
          'Explique comment utiliser une barre d’échelle sans te tromper sur la grandeur réelle.',
        questions: [
          'Q1. À quoi sert une barre d’échelle ?',
          "Q2. Pourquoi faut-il regarder attentivement l'unité indiquée ?",
          "Q3. Quelle erreur ferait-on si l'on confondait taille sur l'image et taille réelle ?",
        ],
      }),
      createQuestionSet({
        tag: 'Étape 2',
        title: 'Choisir le bon ordre de grandeur',
        intro:
          'Un ordre de grandeur cohérent permet de vérifier si un résultat est plausible.',
        documents: [
          createDocument(
            'Ordres de grandeur biologiques',
            [
              "Une cellule, un tissu ou un organe ne se situent pas aux mêmes échelles. Il faut donc comparer le résultat obtenu à l'ordre de grandeur attendu pour vérifier qu'il reste cohérent.",
            ],
          ),
        ],
        instruction:
          'Explique comment un ordre de grandeur permet de contrôler un résultat.',
        questions: [
          "Q4. Pourquoi faut-il connaître quelques repères de taille en biologie ?",
          "Q5. En quoi l'ordre de grandeur sert-il de contrôle ?",
          "Q6. Que faut-il faire si le résultat obtenu paraît incohérent ?",
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Rôle de l’échelle',
        body: [
          'Une image scientifique agrandie ou réduite ne permet pas à elle seule de connaître la taille réelle.',
          'La barre d’échelle sert justement à relier représentation et réalité.',
          'Sans échelle, l’image peut donner une impression trompeuse de taille.',
        ],
        takeaway:
          'Une échelle transforme une image en document mesurable.',
      }),
      createCourseSection({
        title: '2. Passer de la représentation à la taille réelle',
        body: [
          "On compare l'objet observé à la barre d'échelle pour estimer sa taille réelle.",
          'Cette opération doit être accompagnée d’une grande attention aux unités.',
          'Le résultat obtenu doit ensuite être exprimé dans une unité adaptée.',
        ],
        takeaway:
          'Mesurer avec une échelle, c’est comparer puis convertir correctement.',
      }),
      createCourseSection({
        title: '3. Vérifier la cohérence du résultat',
        body: [
          'Une taille calculée doit être comparée à un ordre de grandeur biologique plausible.',
          'Cette vérification permet de repérer des erreurs de lecture ou de conversion.',
          'La rigueur scientifique suppose ce contrôle systématique.',
        ],
        takeaway:
          'Un calcul juste doit aussi être biologiquement cohérent.',
      }),
    ],
    method: {
      title: 'Méthode - Exploiter une échelle',
      steps: [
        'Repère la valeur réelle de la barre d’échelle.',
        "Compare la taille de l'objet à cette barre.",
        'Calcule ou estime la taille réelle.',
        'Vérifie enfin la cohérence du résultat avec un ordre de grandeur connu.',
      ],
    },
    keyPoints: [
      'Une image scientifique doit être reliée à une échelle.',
      'La barre d’échelle permet d’estimer la taille réelle.',
      'Les unités doivent être lues avec attention.',
      'Un ordre de grandeur permet de contrôler la cohérence du résultat.',
    ],
    selfCheck: [
      "Je sais expliquer le rôle d'une barre d'échelle.",
      'Je sais estimer une taille réelle à partir d’une image.',
      'Je sais choisir une unité adaptée.',
      'Je sais contrôler un résultat par un ordre de grandeur.',
    ],
  }),
  createPremiereLesson({
    id: 'bbd-5-representer-observation',
    code: 'D.5',
    title: 'Représenter une observation',
    summary:
      'Produire un schéma ou une représentation claire, fidèle et utile à partir d’une observation biologique.',
    intro:
      "Une représentation scientifique n'est pas un dessin décoratif. Elle doit mettre en valeur les éléments utiles à la compréhension et respecter les règles de clarté attendues en STL.",
    objectives: [
      "Comprendre le rôle d'un schéma scientifique.",
      'Sélectionner les éléments pertinents à représenter.',
      'Respecter les règles de lisibilité et de légendage.',
      'Distinguer représentation fidèle et dessin artistique.',
    ],
    chapterQuestions: [
      'Pourquoi schématiser une observation ?',
      'Que faut-il montrer en priorité ?',
      'Quelles règles rendent un schéma scientifique lisible ?',
    ],
    questionSets: [
      createQuestionSet({
        tag: 'Étape 1',
        title: 'Choisir les éléments à représenter',
        intro:
          "Un schéma scientifique ne montre pas tout : il retient ce qui est utile à la compréhension du phénomène étudié.",
        documents: [
          createDocument(
            'Principe de sélection',
            [
              "Une bonne représentation met en avant les structures importantes, simplifie les détails inutiles et conserve les rapports d'ensemble nécessaires à la compréhension.",
            ],
          ),
        ],
        instruction:
          'Explique pourquoi simplifier ne signifie pas déformer.',
        questions: [
          'Q1. Pourquoi ne faut-il pas tout dessiner ?',
          'Q2. Comment choisir les éléments essentiels ?',
          'Q3. Quel risque existe-t-il si l’on simplifie trop ?',
        ],
      }),
      createQuestionSet({
        tag: 'Étape 2',
        title: 'Rendre le schéma lisible',
        intro:
          'Un schéma utile doit être propre, légendé et compréhensible par un autre lecteur.',
        documents: [
          createDocument(
            'Règles de lisibilité',
            [
              'Le titre doit être précis. Les légendes doivent être alignées et reliées sans ambiguïté. Le tracé doit rester simple et net. Une échelle ou un grossissement peut être nécessaire selon le contexte.',
            ],
          ),
        ],
        instruction:
          'Relève les règles qui rendent un schéma scientifique réellement exploitable.',
        questions: [
          'Q4. Pourquoi le titre et les légendes sont-ils indispensables ?',
          "Q5. Qu'est-ce qui distingue un schéma scientifique d'un dessin artistique ?",
          'Q6. Dans quel cas faut-il ajouter une échelle ou un grossissement ?',
        ],
      }),
    ],
    courseSections: [
      createCourseSection({
        title: '1. Représenter pour comprendre',
        body: [
          "Un schéma scientifique sert à mettre en évidence l'organisation ou le fonctionnement d'un objet biologique.",
          'Il aide à communiquer une observation de manière claire et ciblée.',
          "Il n'a pas pour objectif de reproduire tous les détails du réel.",
        ],
        takeaway:
          'Schématiser, c’est sélectionner et organiser ce qui est utile.',
      }),
      createCourseSection({
        title: '2. Respecter les règles de représentation',
        body: [
          'Un schéma doit comporter un titre précis et des légendes claires.',
          'Le tracé doit rester propre, simple et cohérent avec l’observation.',
          'Une information sur l’échelle ou le grossissement peut être nécessaire.',
        ],
        takeaway:
          'La lisibilité fait partie de la qualité scientifique du schéma.',
      }),
      createCourseSection({
        title: '3. Un outil de communication scientifique',
        body: [
          'Le schéma scientifique permet à un lecteur de comprendre rapidement ce qui est essentiel.',
          "Il sert donc à la fois d'outil d'apprentissage, d'analyse et de communication.",
          'En STL, bien représenter une observation est une compétence attendue, pas un détail secondaire.',
        ],
        takeaway:
          'Bien représenter, c’est aussi bien communiquer.',
      }),
    ],
    method: {
      title: 'Méthode - Réaliser un schéma scientifique',
      steps: [
        'Observe et sélectionne les éléments importants.',
        'Trace une représentation simple et nette.',
        'Ajoute un titre précis et des légendes lisibles.',
        'Vérifie que le schéma reste fidèle à l’observation de départ.',
      ],
    },
    keyPoints: [
      'Un schéma scientifique ne cherche pas à tout reproduire.',
      'Il doit être fidèle, clair et utile.',
      'Le titre et les légendes sont indispensables.',
      'La représentation est une compétence scientifique à part entière.',
    ],
    selfCheck: [
      "Je sais expliquer le rôle d'un schéma scientifique.",
      'Je sais choisir les éléments à représenter.',
      'Je sais citer les règles de lisibilité essentielles.',
      'Je sais distinguer schéma scientifique et dessin décoratif.',
    ],
  }),
];

const createVisualDocument = (title, body, diagramSpec) =>
  createDocument(title, body, {
    label: 'Schema',
    diagramSpec,
  });

const flowDiagram = (title, footer, nodes) => ({
  kind: 'flow',
  title,
  footer,
  nodes,
});

const comparisonDiagram = (title, footer, columns) => ({
  kind: 'comparison',
  title,
  footer,
  columns,
});

const cycleDiagram = (title, footer, center, nodes) => ({
  kind: 'cycle',
  title,
  footer,
  center,
  nodes,
});

const barsDiagram = (title, footer, bars) => ({
  kind: 'bars',
  title,
  footer,
  bars,
});

const curveDiagram = (title, footer, xLabel, yLabel, points) => ({
  kind: 'curve',
  title,
  footer,
  xLabel,
  yLabel,
  points,
});

const BIOBIO_VISUAL_SUPPORTS = {
  'bb1-1-se-nourrir': createVisualDocument(
    'Schema - Des aliments aux fonctions de l organisme',
    [
      "Ce schema relie les besoins de l'organisme a la ration alimentaire, puis aux nutriments utilises pour produire de l'energie, construire et proteger le corps.",
    ],
    flowDiagram('Se nourrir pour couvrir plusieurs besoins', 'Un meme repas doit couvrir des besoins differents.', [
      { title: 'Besoins', text: "Energie, croissance, entretien, protection", tone: 'blue' },
      { title: 'Aliments', text: 'Repas varie et adapte', tone: 'teal' },
      { title: 'Nutriments', text: 'Glucose, acides amines, lipides, eau, ions', tone: 'amber' },
      { title: 'Fonctions', text: 'Fonctionner, construire, proteger', tone: 'green' },
    ]),
  ),
  'bb1-2-aliments-nutriments': createVisualDocument(
    'Schema - Grandes etapes de la digestion',
    [
      "Le support rappelle le trajet des aliments et les transformations qui les rendent absorbables par l'organisme.",
    ],
    flowDiagram('Du bol alimentaire aux nutriments', 'Les transformations mecaniques et chimiques se completent.', [
      { title: 'Bouche', text: 'Mastication et salive', tone: 'blue' },
      { title: 'Estomac', text: 'Brassage et debut de digestion chimique', tone: 'teal' },
      { title: 'Intestin grele', text: 'Fin de digestion et absorption', tone: 'amber' },
      { title: 'Nutriments', text: "Molecules utilisables par l'organisme", tone: 'green' },
    ]),
  ),
  'bb1-3-absorption-devenir': createVisualDocument(
    'Schema - Devenir des nutriments apres absorption',
    [
      "Ce schema permet de suivre le trajet des nutriments depuis l'intestin jusqu'a leur utilisation, leur stockage ou leur elimination.",
    ],
    flowDiagram('Absorber puis distribuer', 'Apres absorption, les nutriments ne suivent pas tous exactement le meme devenir.', [
      { title: 'Intestin', text: 'Passage des nutriments a travers la paroi', tone: 'blue' },
      { title: 'Transport', text: 'Sang et parfois lymphe', tone: 'teal' },
      { title: 'Organes', text: 'Consommation immediate ou stockage', tone: 'amber' },
      { title: 'Devenir', text: 'Utilisation, reserve ou elimination', tone: 'green' },
    ]),
  ),
  'bb1-4-rein-excretion': createVisualDocument(
    'Schema - Role du rein dans l excretion',
    [
      "Le rein trie le plasma, recupere ce qui reste utile et forme une urine adaptee a l'etat de l'organisme.",
    ],
    flowDiagram('Du sang a l urine', "Le rein filtre, reabsorbe puis elimine l'inutile.", [
      { title: 'Sang', text: 'Apport en eau et solutes', tone: 'blue' },
      { title: 'Filtration', text: 'Passage initial dans le nephron', tone: 'teal' },
      { title: 'Reabsorption', text: 'Retour des elements utiles', tone: 'amber' },
      { title: 'Urine', text: 'Elimination finale', tone: 'green' },
    ]),
  ),
  'bb1-5-stabilite-milieu-interieur': createVisualDocument(
    'Schema - Stabilite du milieu interieur',
    [
      "Le milieu interieur reste compatible avec la vie grace a des mecanismes de regulation qui corrigent les variations trop importantes.",
    ],
    cycleDiagram(
      'Maintenir un milieu interieur stable',
      "La regulation relie variation detectee, correction et retour a l'equilibre.",
      { title: 'Milieu interieur', text: 'Eau, ions, glucose, temperature' },
      [
        { title: 'Detecter', text: 'Recepteurs et organes sensibles', tone: 'blue' },
        { title: 'Corriger', text: 'Actions physiologiques adaptees', tone: 'teal' },
        { title: 'Limiter les ecarts', text: 'Retour vers des valeurs compatibles', tone: 'amber' },
        { title: 'Proteger les cellules', text: 'Fonctionnement stable des organes', tone: 'green' },
      ],
    ),
  ),
  'bb2-1-genotype-phenotype': createVisualDocument(
    'Schema - Du gene au phenotype',
    [
      "Le phenotype ne depend pas d'une simple etiquette genetique : il se construit a partir de l'expression des genes et de la synthese de molecules fonctionnelles.",
    ],
    flowDiagram('Relier genotype et phenotype', "Le phenotype resulte de l'expression du genotype dans un contexte donne.", [
      { title: 'ADN / genes', text: 'Information hereditaire', tone: 'blue' },
      { title: 'Expression', text: 'Synthese de molecules utiles', tone: 'teal' },
      { title: 'Proteines', text: 'Fonctions biologiques concretes', tone: 'amber' },
      { title: 'Phenotype', text: 'Caractere observable', tone: 'green' },
    ]),
  ),
  'bb2-2-organes-amphicrines': createVisualDocument(
    'Schema - Fonctions endocrine et exocrine',
    [
      "Certains organes exercent une double fonction. Le schema aide a distinguer secretion vers le sang et secretion vers un conduit.",
    ],
    comparisonDiagram('Comparer les grandes fonctions de secretion', "Un organe amphicrine combine les deux logiques de secretion.", [
      { title: 'Endocrine', text: 'Secretion vers le sang', bullets: ['Hormones', 'Action a distance'], tone: 'blue' },
      { title: 'Exocrine', text: 'Secretion vers un conduit ou une surface', bullets: ['Sucs digestifs', 'Action locale'], tone: 'teal' },
      { title: 'Amphicrine', text: 'Un meme organe assure les deux fonctions', bullets: ['Exemple : pancreas'], tone: 'amber' },
    ]),
  ),
  'bb2-3-regulation-hormonale': createVisualDocument(
    'Schema - Boucle de regulation hormonale',
    [
      "La regulation hormonale ne se limite pas a une hormone isolee. Elle s'organise en boucle avec controle et retroaction.",
    ],
    cycleDiagram(
      'Principe general de regulation',
      "La correction d'une variation s'accompagne souvent d'un retrocontrole.",
      { title: 'Variable regulee', text: 'Exemple : glycemie ou concentration hormonale' },
      [
        { title: 'Variation', text: "Une valeur s'ecarte de la reference", tone: 'rose' },
        { title: 'Glande', text: 'Production ou inhibition hormonale', tone: 'blue' },
        { title: 'Organe cible', text: 'Reponse biologique', tone: 'teal' },
        { title: 'Retrocontrole', text: 'Limitation de la reponse', tone: 'amber' },
      ],
    ),
  ),
  'bb2-4-gametogenese-fecondation': createVisualDocument(
    'Schema - De la gametogenese a la cellule-oeuf',
    [
      "Ce schema met en ordre les etapes principales conduisant des cellules germinales aux gametes, puis a la fecondation.",
    ],
    flowDiagram('Former puis reunir les gametes', "La fecondation retablit une combinaison genetique complete.", [
      { title: 'Cellules germinales', text: 'Cellules de depart', tone: 'blue' },
      { title: 'Meiose', text: 'Reduction chromosomique', tone: 'teal' },
      { title: 'Gametes', text: 'Ovule et spermatozoide', tone: 'amber' },
      { title: 'Fecondation', text: 'Formation de la cellule-oeuf', tone: 'green' },
    ]),
  ),
  'bb2-5-transmission-caracteres': createVisualDocument(
    'Schema - Transmission des caracteres',
    [
      "Le schema rappelle que les alleles sont transmis par les gametes et se recombinent chez la descendance.",
    ],
    comparisonDiagram('Des parents a la descendance', 'La transmission des caracteres passe par la formation des gametes puis leur association.', [
      { title: 'Parent 1', text: 'Porte une combinaison d alleles', tone: 'blue' },
      { title: 'Gametes', text: 'Chaque gamete ne porte qu un allele de chaque gene', tone: 'teal' },
      { title: 'Parent 2 et descendance', text: 'Nouvelle combinaison allelique chez le descendant', tone: 'amber' },
    ]),
  ),
  'bba-1-structures-biomolecules': createVisualDocument(
    'Schema - Grandes familles de biomolecules',
    [
      "Les biomolecules n'ont pas les memes unites de base ni les memes roles. Le schema sert de repere d'ensemble.",
    ],
    comparisonDiagram('Comparer quelques grandes familles', "Chaque famille se reconnait par sa structure generale et son role biologique.", [
      { title: 'Glucides', text: 'Energie et reserves', tone: 'amber' },
      { title: 'Lipides', text: 'Reserves et membranes', tone: 'rose' },
      { title: 'Proteines', text: 'Structure et fonctions enzymatiques', tone: 'teal' },
      { title: 'Acides nucleiques', text: 'Information genetique', tone: 'blue' },
    ]),
  ),
  'bba-2-diversite-fonctions': createVisualDocument(
    'Schema - Diversite des fonctions biologiques',
    [
      "Une meme classe de biomolecules peut remplir plusieurs fonctions selon le contexte du vivant considere.",
    ],
    cycleDiagram(
      'Biomolecules et fonctions',
      "Une molecule biologique se comprend toujours par sa structure et par sa fonction.",
      { title: 'Biomolecules', text: 'Des structures variees au service du vivant' },
      [
        { title: 'Energie', text: 'Fournir ou stocker', tone: 'amber' },
        { title: 'Structure', text: 'Constituer cellules et tissus', tone: 'blue' },
        { title: 'Information', text: 'Conserver et transmettre', tone: 'teal' },
        { title: 'Communication', text: 'Reguler et coordonner', tone: 'violet' },
      ],
    ),
  ),
  'bba-3-acides-nucleiques': createVisualDocument(
    'Schema - Comparer ADN et ARN',
    [
      "Le support aide a distinguer leur organisation generale et leur role sans entrer dans un niveau de detail inutile pour le chapitre.",
    ],
    comparisonDiagram('ADN et ARN : points communs et differences', 'Les deux molecules portent une information, mais ne jouent pas exactement le meme role.', [
      { title: 'ADN', text: 'Stockage stable de l information genetique', bullets: ['Double chaine', 'Support des genes'], tone: 'blue' },
      { title: 'ARN', text: 'Intervient dans l expression genetique', bullets: ['Le plus souvent simple chaine', 'Role dans la synthese'], tone: 'teal' },
    ]),
  ),
  'bba-4-membranes': createVisualDocument(
    'Schema - Organisation d une membrane',
    [
      "La membrane cellulaire associe une structure generale stable et des elements mobiles impliques dans les echanges et la communication.",
    ],
    comparisonDiagram('Les principaux constituants de la membrane', "La membrane ne se resume pas a une simple frontiere : elle controle aussi les echanges.", [
      { title: 'Phospholipides', text: 'Base de la bicouche', tone: 'blue' },
      { title: 'Proteines', text: 'Transport, reception, reconnaissance', tone: 'teal' },
      { title: 'Fonction globale', text: 'Delimiter et echanger', tone: 'amber' },
    ]),
  ),
  'bbb-1-observer-vivant': createVisualDocument(
    'Schema - Observation du vivant a plusieurs echelles',
    [
      "Ce support relie observation macroscopique, microscopie et comparaison des organisations cellulaires.",
    ],
    flowDiagram("Passer d'une observation a une interpretation", "L'observation gagne en precision quand on change d'echelle et d'outil.", [
      { title: 'Echantillon', text: 'Objet biologique de depart', tone: 'blue' },
      { title: 'Microscope', text: 'Agrandir et regler', tone: 'teal' },
      { title: 'Cellule', text: 'Observer et decrire', tone: 'amber' },
      { title: 'Interpretation', text: 'Comparer et conclure', tone: 'green' },
    ]),
  ),
  'bbb-2-divisions-cellulaires': createVisualDocument(
    'Schema - Mitose et meiose',
    [
      "Le schema aide a comparer deux divisions cellulaires qui n'ont ni les memes etapes generales ni les memes consequences biologiques.",
    ],
    comparisonDiagram('Comparer deux divisions cellulaires', "Le type de division depend du contexte biologique et du resultat attendu.", [
      { title: 'Mitose', text: 'Conserver le patrimoine genetique des cellules filles', tone: 'blue' },
      { title: 'Meiose', text: 'Produire des cellules sexuelles et reduire le nombre de chromosomes', tone: 'amber' },
    ]),
  ),
  'bbc-1-communication-hormonale': createVisualDocument(
    'Schema - Communication hormonale',
    [
      "Le message hormonal circule par le sang et n'agit que sur les cellules capables de le recevoir.",
    ],
    flowDiagram('Du signal hormonal a la reponse', "Une hormone n'agit pas sur toutes les cellules, mais sur des cibles precises.", [
      { title: 'Glande', text: 'Produit l hormone', tone: 'blue' },
      { title: 'Sang', text: 'Transport du message', tone: 'teal' },
      { title: 'Cellule cible', text: 'Recepteur adapte', tone: 'amber' },
      { title: 'Reponse', text: 'Effet physiologique', tone: 'green' },
    ]),
  ),
  'bbc-2-transport-molecules': createVisualDocument(
    'Schema - Transport de molecules a travers une membrane',
    [
      "Le passage d'une molecule depend de sa nature, du gradient et parfois d'un apport energetique.",
    ],
    comparisonDiagram('Quelques mecanismes de transport', "Tous les transports membranaires ne demandent pas les memes conditions.", [
      { title: 'Diffusion simple', text: 'Passage selon le gradient', tone: 'blue' },
      { title: 'Osmose', text: "Deplacement de l'eau", tone: 'teal' },
      { title: 'Transport actif', text: 'Necessite une depense d energie', tone: 'amber' },
    ]),
  ),
  'bbd-1-analyser-document': createVisualDocument(
    'Schema - Demarche d analyse de document',
    [
      "Le support rappelle l'ordre des operations pour repondre de facon rigoureuse a partir d'un document scientifique.",
    ],
    flowDiagram('Lire puis exploiter un document', "L'analyse ne consiste pas a recopier le document, mais a en tirer des informations utiles.", [
      { title: 'Identifier', text: 'Nature, titre, contexte', tone: 'blue' },
      { title: 'Prelever', text: 'Donnees et indices utiles', tone: 'teal' },
      { title: 'Relier', text: 'Mettre en lien avec le cours', tone: 'amber' },
      { title: 'Conclure', text: 'Reponse redigee et justifiee', tone: 'green' },
    ]),
  ),
  'bbd-2-organigrammes': createVisualDocument(
    'Schema - Lire un organigramme',
    [
      "Un organigramme guide un choix ou une identification. Chaque branche correspond a une question precise ou a une condition.",
    ],
    flowDiagram('Suivre une suite de choix', "Pour exploiter un organigramme, il faut repondre a chaque question dans l'ordre.", [
      { title: 'Question 1', text: 'Observer un premier critere', tone: 'blue' },
      { title: 'Oui / non', text: 'Suivre la bonne branche', tone: 'teal' },
      { title: 'Question suivante', text: 'Affiner le raisonnement', tone: 'amber' },
      { title: 'Conclusion', text: 'Identifier ou decider', tone: 'green' },
    ]),
  ),
  'bbd-3-analyser-courbe': createVisualDocument(
    'Graphique - Lire une courbe simplement',
    [
      "Ce graphique simplifie rappelle qu'il faut d'abord repere la tendance generale avant d'interpreter les variations plus fines.",
    ],
    curveDiagram(
      'Exemple de courbe a analyser',
      'Repere variation, palier et evolution globale avant de conclure.',
      'Temps',
      'Grandeur mesuree',
      [
        { label: 't1', y: 20 },
        { label: 't2', y: 34 },
        { label: 't3', y: 52 },
        { label: 't4', y: 56 },
        { label: 't5', y: 62 },
      ],
    ),
  ),
  'bbd-4-utiliser-echelle': createVisualDocument(
    'Schema - Passer de l image a la taille reelle',
    [
      "Le schema rappelle qu'une image seule ne suffit pas : il faut une echelle, une comparaison et un controle de coherence.",
    ],
    flowDiagram("Utiliser une barre d'echelle", "La conversion doit etre suivie d'un controle d'ordre de grandeur.", [
      { title: 'Barre d echelle', text: 'Repere de reference', tone: 'blue' },
      { title: 'Mesure sur l image', text: 'Comparer objet et barre', tone: 'teal' },
      { title: 'Conversion', text: 'Exprimer la taille reelle', tone: 'amber' },
      { title: 'Controle', text: 'Verifier la coherence biologique', tone: 'green' },
    ]),
  ),
  'bbd-5-representer-observation': createVisualDocument(
    'Schema - Construire une representation scientifique',
    [
      "Le support montre qu'un schema d'observation se construit par selection, simplification et legende, pas par decoration.",
    ],
    flowDiagram('De l observation au schema', "Le schema scientifique met en avant l'essentiel sans deformer.", [
      { title: 'Observer', text: 'Regarder avec precision', tone: 'blue' },
      { title: 'Selectionner', text: 'Garder les elements utiles', tone: 'teal' },
      { title: 'Tracer', text: 'Representer proprement', tone: 'amber' },
      { title: 'Legender', text: 'Donner du sens au schema', tone: 'green' },
    ]),
  ),
};

const attachVisualSupport = (lesson) => {
  const visual = BIOBIO_VISUAL_SUPPORTS[lesson.id];

  if (!visual || !lesson.content?.questionSets?.length) {
    return;
  }

  lesson.content.questionSets[0].documents = [
    ...(lesson.content.questionSets[0].documents || []),
    visual,
  ];
};

[
  ...PREMIERE_BIOBIO_THEME_1_LESSONS,
  ...PREMIERE_BIOBIO_THEME_2_LESSONS,
  ...PREMIERE_BIOBIO_TRANSVERSAL_A_LESSONS,
  ...PREMIERE_BIOBIO_TRANSVERSAL_B_LESSONS,
  ...PREMIERE_BIOBIO_TRANSVERSAL_C_LESSONS,
  ...PREMIERE_BIOBIO_TRANSVERSAL_D_LESSONS,
].forEach(attachVisualSupport);
