import { img } from '../media';
import tubesSang from '../../../assets/courses/premiere/bbd-1-analyser-document/tubes-sang.webp';
import griffith from '../../../assets/courses/premiere/bbd-1-analyser-document/griffith.webp';
import coloniesSR from '../../../assets/courses/premiere/bbd-1-analyser-document/colonies-s-r.webp';

const IMG = {
  tubesSang: img(tubesSang, 'Tubes de prélèvement sanguin à bouchons de couleurs différentes dans un portoir de laboratoire d’analyses ; une main gantée saisit un tube.', 'photo', 1536, 1024),
  griffith: img(griffith, 'Schéma des quatre lots de l’expérience de Griffith : lot 1, pneumocoques R vivants, souris vivante ; lot 2, pneumocoques S vivants, souris morte ; lot 3, pneumocoques S tués par la chaleur, souris vivante ; lot 4, R vivants et S tués par la chaleur, souris morte.', 'schema', 1400, 933),
  colonies: img(coloniesSR, 'Deux boîtes de Petri de gélose au sang : à gauche, colonies lisses, bombées et brillantes ; à droite, colonies plus petites, mates, à contour irrégulier.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bbd-1-analyser-document',
  duration: 'Environ 2 séances, puis réinvesti dans tous les chapitres',
  hook: {
    image: IMG.tubesSang,
    question: 'Un bilan sanguin, une expérience vieille d’un siècle, une photo de boîtes de Petri : comment faire « parler » un document sans lui faire dire ce qu’il ne dit pas ?',
    text: 'En biochimie-biologie, presque toutes les questions s’appuient sur des documents : tableaux de résultats, textes historiques, graphiques, photographies. Le médecin qui lit un bilan sanguin, la chercheuse qui exploite une expérience ou l’élève de STL face à un sujet de baccalauréat suivent la même démarche : identifier, relever, comparer, interpréter, conclure. Cette leçon te donne cette méthode, pas à pas, avec des exemples tirés du programme.',
  },
  objectives: [
    'Identifier la nature d’un document, sa source et les éléments à lire en premier (titre, légende, unités, conditions).',
    'Comprendre ce qu’attend une consigne grâce à son verbe d’action.',
    'Relever des informations précises et chiffrées, puis les comparer à un témoin ou à une valeur de référence.',
    'Distinguer une observation (ce que le document montre) d’une interprétation (ce que j’en déduis).',
    'Rédiger une réponse argumentée en croisant plusieurs documents et mes connaissances.',
    'Évaluer la fiabilité d’une source d’information.',
  ],
  prerequisites: [
    'Lire un tableau à double entrée et repérer une unité (g/L, mmol/L, %).',
    'Savoir que l’ADN est le support de l’information génétique (collège, seconde).',
  ],
  program: [
    'Interpréter avec rigueur des résultats expérimentaux obtenus en laboratoire (objectif de formation du programme de biochimie-biologie).',
    'Construire des raisonnements scientifiques rigoureux et formuler une argumentation rigoureuse et structurée.',
    '« Expliquer à partir de documents » : savoir-faire mobilisé dans les modules thématiques (nutrition, reproduction).',
    'Exploiter des résultats d’expériences historiques pour déduire l’importance de l’ADN dans l’acquisition de phénotypes (module D, item 1).',
    'Exploiter des résultats d’analyses biologiques : valeur de référence, intervalle physiologique (module C, item 3).',
    'Identifier la source d’une information et évaluer sa fiabilité (programme de biotechnologies, outils numériques).',
  ],

  course: {
    parts: [
      {
        title: 'Identifier le document avant de le lire',
        intro: 'Avant de chercher la réponse, il faut savoir ce que l’on a sous les yeux : on ne lit pas une courbe comme un texte, ni une photographie comme un tableau.',
        blocks: [
          { type: 'definition', term: 'Document scientifique', text: 'support (texte, tableau, graphique, image, schéma, protocole) qui présente des **faits**, des **mesures** ou des **observations** obtenus par une démarche scientifique. Il sert de **preuve** pour répondre à une question.' },
          {
            type: 'table',
            caption: 'Les grands types de documents et ce qu’il faut lire en premier',
            head: ['Nature du document', 'À lire en premier', 'Exemple en biochimie-biologie'],
            rows: [
              ['Texte scientifique ou historique', 'Auteur, date, contexte, mots-clés, ce qui a été fait et observé', 'Récit de l’expérience de Griffith (1928)'],
              ['Tableau de résultats', 'Titre, en-têtes des lignes et des colonnes, unités, lot témoin', 'Résultats de tests au lugol dans des tubes à essai'],
              ['Résultat d’analyse médicale', 'Paramètre, valeur mesurée, unité, valeurs de référence', 'Bilan sanguin : glycémie, créatininémie…'],
              ['Graphique (courbe, histogramme)', 'Titre, grandeurs portées sur les axes, unités, légende des courbes', 'Glycémie en fonction du temps après un repas'],
              ['Photographie, microphotographie', 'Technique d’observation, grossissement ou échelle, coloration', 'Coupe d’intestin observée au microscope optique'],
              ['Schéma (anatomique ou fonctionnel)', 'Titre, légendes, signification des flèches et des couleurs', 'Schéma d’une communication hormonale'],
              ['Protocole ou organigramme d’expérience', 'But, lots comparés, facteur qui varie, conditions', 'Digestion de l’amidon par l’amylase à différentes températures'],
            ],
          },
          {
            type: 'list',
            title: 'Le « paratexte » : six éléments à repérer avant toute analyse',
            ordered: true,
            items: [
              'Le **titre** : il annonce ce que le document montre.',
              'La **source** et la **date** : qui a produit le document, quand, dans quel cadre ?',
              'La **légende** : signification des symboles, des couleurs, des courbes.',
              'Les **unités** : sans elles, un nombre ne veut rien dire (1,2 g/L n’est pas 1,2 mmol/L).',
              'L’**échelle** ou le grossissement, pour une image.',
              'Les **conditions** de l’expérience : température, durée, nombre d’essais, lot **témoin**.',
            ],
          },
          { type: 'example', title: 'présenter un document en une phrase', text: '« Le document 2 est un tableau de résultats d’analyse sanguine d’un patient de 52 ans, prélevé à jeun, qui indique pour chaque paramètre la valeur mesurée et l’intervalle de référence du laboratoire. » Cette phrase d’entrée prouve au correcteur que tu as identifié le document ; elle ne doit pas dépasser deux lignes.' },
          { type: 'definition', term: 'Source', text: 'origine d’une information : auteur, organisme, revue ou site qui l’a produite, avec sa date. Une source **fiable** est identifiable, datée, appuyée sur des références et produite dans le but d’informer, non de vendre.' },
          {
            type: 'compare',
            title: 'Évaluer la fiabilité d’une source',
            columns: [
              { title: 'Plutôt fiable', subtitle: 'à utiliser en priorité', items: ['Article scientifique relu par d’autres chercheurs (revue à comité de lecture).', 'Organisme public de recherche ou de santé (Inserm, Institut Pasteur, Haute Autorité de santé…).', 'Manuel scolaire, encyclopédie dont les articles citent leurs sources.', 'Auteur identifié, date de mise à jour, références vérifiables.'] },
              { title: 'À vérifier', subtitle: 'à croiser avec une autre source', items: ['Forum, réseau social, vidéo sans source.', 'Site commercial qui vend le produit dont il parle.', 'Texte sans auteur ni date.', 'Promesses absolues (« guérit à 100 % »), ton alarmiste ou émotionnel.'] },
            ],
          },
          { type: 'warning', title: 'Documents d’exercice', text: 'Dans un sujet, les données sont souvent **simplifiées** ou **construites** pour l’exercice (on le signale alors). La démarche d’analyse reste exactement la même que pour un document réel.' },
          {
            type: 'retenir',
            items: [
              'On identifie toujours la **nature** et la **source** d’un document avant de l’exploiter.',
              'Titre, légende, unités, échelle et conditions (dont le **témoin**) se lisent en premier.',
              'Une source fiable est identifiable, datée, référencée et cherche à informer.',
            ],
          },
        ],
      },

      {
        title: 'Comprendre ce que demande la consigne',
        intro: 'Le verbe d’action de la consigne est un contrat : il dit exactement quel travail le correcteur attend.',
        blocks: [
          { type: 'p', text: 'Deux consignes portant sur le même document peuvent attendre des réponses très différentes. « Décris » demande de dire **ce que l’on voit** ; « explique » demande de dire **pourquoi**, en mobilisant tes connaissances. Avant d’écrire, souligne le verbe et demande-toi : « Qu’est-ce que je dois produire ? »' },
          {
            type: 'table',
            caption: 'Les verbes de consigne les plus fréquents',
            head: ['Verbe', 'Ce que tu dois faire', 'Ce qu’on attend dans ta réponse'],
            rows: [
              ['Relever, identifier', 'Prélever une information présente dans le document', 'La donnée exacte, avec sa valeur et son unité, sans commentaire'],
              ['Décrire', 'Dire ce que l’on observe, sans expliquer', 'Les éléments visibles ou les variations, avec des valeurs'],
              ['Comparer', 'Mettre en évidence ressemblances et différences', 'Deux éléments mis face à face, l’écart quantifié'],
              ['Calculer', 'Effectuer une opération à partir des données', 'La formule, l’application numérique, le résultat avec son unité'],
              ['Analyser', 'Décomposer le document : décrire et comparer de façon organisée', 'Une description structurée, souvent par étapes ou par lots'],
              ['Interpréter', 'Donner un sens aux observations', 'Ce que les résultats signifient, à l’aide de tes connaissances'],
              ['Expliquer', 'Dire pourquoi ou comment un phénomène se produit', 'Un mécanisme, des liens de cause à effet'],
              ['Justifier, argumenter', 'Prouver une affirmation', 'Des arguments tirés des documents et du cours'],
              ['Déduire, conclure', 'Tirer une conséquence logique', 'Une phrase-bilan qui répond à la question posée'],
              ['Montrer que', 'Démontrer une conclusion déjà donnée', 'Le raisonnement qui y mène, appuyé sur des preuves'],
            ],
          },
          {
            type: 'example',
            title: 'même document, trois consignes',
            text: [
              'Document : dans l’expérience de Griffith, des souris reçoivent des pneumocoques S vivants ; elles meurent.',
              '**Décris** le résultat : « Les souris du lot 2, qui ont reçu des pneumocoques S vivants, sont mortes. »',
              '**Interprète** ce résultat : « Les pneumocoques S vivants sont virulents : ils provoquent une maladie mortelle chez la souris. »',
              '**Explique** ce résultat (avec le cours) : « Les pneumocoques S possèdent une capsule qui les protège des défenses de l’organisme : ils se multiplient et provoquent une pneumonie mortelle. »',
            ],
          },
          { type: 'warning', title: 'Erreur fréquente', text: 'Répondre « la glycémie augmente car l’intestin absorbe le glucose » à une consigne « Décris » : l’explication n’était pas demandée, et la description (avec des valeurs) manque. Inversement, une consigne « Explique » n’est jamais satisfaite par une simple description.' },
          {
            type: 'retenir',
            items: [
              'Le verbe de la consigne indique le travail attendu : on le souligne avant de répondre.',
              'Décrire = dire ce que l’on voit ; interpréter = dire ce que cela signifie ; expliquer = dire pourquoi.',
              'Une réponse hors consigne, même juste, ne rapporte pas les points attendus.',
            ],
          },
        ],
      },

      {
        title: 'Relever et comparer : extraire les informations utiles',
        intro: 'Analyser un document, ce n’est pas le recopier : c’est sélectionner les données utiles à la question, puis les comparer à une référence.',
        blocks: [
          { type: 'p', text: 'Une donnée isolée a peu de sens. « La glycémie est de 1,32 g/L » ne devient une information que si on la **compare** à quelque chose : une valeur de référence, un lot témoin, une autre mesure. Toute analyse repose donc sur une **comparaison**.' },
          { type: 'definition', term: 'Témoin', text: 'lot ou mesure de référence, réalisé dans les mêmes conditions que l’essai sauf pour le facteur étudié. La comparaison avec le témoin permet d’attribuer une différence à ce facteur.' },
          { type: 'definition', term: 'Valeurs de référence', text: 'intervalle de valeurs observé chez la grande majorité des personnes en bonne santé pour un paramètre biologique (on parle aussi d’**intervalle physiologique**). Elles peuvent varier légèrement d’un laboratoire à l’autre selon la technique utilisée.' },
          {
            type: 'steps',
            title: 'Relever une information de façon rigoureuse',
            items: [
              { title: 'Cibler', text: 'Relis la question : quelles données du document y répondent ? Ignore le reste.' },
              { title: 'Citer précisément', text: 'Donne la valeur **avec son unité** et la condition correspondante (« à t = 30 min », « dans le lot 4 »).' },
              { title: 'Comparer', text: 'Compare la donnée à une référence : témoin, valeurs de référence, autre lot, autre instant.' },
              { title: 'Quantifier l’écart', text: 'Exprime la différence par une soustraction, un rapport (« deux fois plus ») ou un pourcentage.' },
            ],
          },
          {
            type: 'formula',
            title: 'Écart relatif par rapport à une référence',
            expression: 'écart (%) = (valeur mesurée − valeur de référence) ÷ valeur de référence × 100',
            legend: [
              { symbol: 'valeur mesurée', meaning: 'donnée relevée dans le document' },
              { symbol: 'valeur de référence', meaning: 'témoin, ou borne de l’intervalle de référence' },
            ],
          },
          { type: 'example', title: 'relevé chiffré', text: 'Glycémie à jeun mesurée : 1,32 g/L ; valeurs de référence : 0,70 à 1,10 g/L. La glycémie dépasse la borne supérieure de 1,32 − 1,10 = **0,22 g/L**, soit (0,22 ÷ 1,10) × 100 = **20 %** de plus.' },
          {
            type: 'compare',
            title: 'Réponse vague ou réponse rigoureuse ?',
            columns: [
              { title: 'À éviter', items: ['« La glycémie est élevée. »', '« Le lot 4 est différent. »', '« On voit que ça augmente. »'] },
              { title: 'À viser', items: ['« La glycémie à jeun (1,32 g/L) est supérieure à la valeur maximale de référence (1,10 g/L). »', '« Contrairement aux souris du lot 3, celles du lot 4 meurent. »', '« Entre 0 et 30 min, la glycémie passe de 0,85 à 1,40 g/L. »'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Une analyse est **sélective** : on ne relève que ce qui répond à la question.',
              'Chaque donnée est citée avec sa **valeur**, son **unité** et sa condition.',
              'On compare toujours à une **référence** (témoin, valeurs de référence) et on **quantifie** l’écart.',
            ],
          },
        ],
      },

      {
        title: 'Interpréter : passer de l’observation à l’idée',
        intro: 'Le cœur du travail scientifique est de séparer ce que l’on voit de ce que l’on en pense.',
        blocks: [
          { type: 'definition', term: 'Observation', text: 'constat objectif, vérifiable par tous dans le document : une valeur, une couleur, une forme, une variation. Deux personnes qui lisent le même document font les mêmes observations.' },
          { type: 'definition', term: 'Interprétation', text: 'explication proposée pour donner un sens à une observation, à l’aide de connaissances. Elle doit être **compatible** avec toutes les observations et rester **prudente** si le document ne permet pas de certitude.' },
          {
            type: 'table',
            caption: 'Observation ou interprétation ?',
            head: ['Observation (je constate)', 'Interprétation (j’en déduis)'],
            rows: [
              ['Dans le tube contenant de l’amidon et de l’amylase, le lugol reste jaune-orangé après 10 min à 37 °C.', 'L’amidon a disparu : l’amylase l’a hydrolysé.'],
              ['Les souris ayant reçu des pneumocoques R vivants et S tués meurent ; on retrouve des pneumocoques S vivants dans leur sang.', 'Au contact des bactéries S mortes, des pneumocoques R ont été transformés en pneumocoques S.'],
              ['La glycémie à jeun du patient est de 1,32 g/L, au-dessus de l’intervalle de référence.', 'Le patient présente une hyperglycémie à jeun, qui peut évoquer un diabète.'],
            ],
          },
          { type: 'p', text: 'Pour interpréter, utilise le **raisonnement en trois temps**, qui relie un fait, une connaissance et une conclusion :' },
          {
            type: 'flow',
            title: 'Le raisonnement en trois temps',
            steps: [
              { title: 'Je constate que…', text: 'une donnée précise du document' },
              { title: 'Or je sais que…', text: 'une connaissance du cours ou d’un autre document' },
              { title: 'Donc j’en déduis que…', text: 'une conclusion qui répond à la question' },
            ],
            caption: 'Chaque étape a besoin des deux autres : une conclusion sans constat n’est pas prouvée ; un constat sans connaissance n’est pas interprété.',
          },
          { type: 'example', title: 'raisonnement complet', text: '**Je constate que** la glycémie à jeun du patient est de 1,32 g/L, alors que l’intervalle de référence est de 0,70 à 1,10 g/L. **Or je sais qu’**un diabète est diagnostiqué lorsque la glycémie à jeun est supérieure ou égale à 1,26 g/L lors de deux dosages différents. **Donc** ce résultat est compatible avec un diabète, mais il doit être **confirmé** par un second dosage avant toute conclusion médicale.' },
          {
            type: 'list',
            title: 'Le vocabulaire de la prudence scientifique',
            items: [
              'Si le document le prouve : « montre que », « prouve que », « confirme que ».',
              'S’il le suggère seulement : « suggère que », « permet de penser que », « est compatible avec », « on peut supposer que ».',
              'S’il ne permet pas de conclure : « ne permet pas de savoir si… », « il faudrait une expérience complémentaire pour… ».',
            ],
          },
          { type: 'warning', title: 'Deux pièges d’interprétation', text: ['**Corrélation n’est pas causalité** : deux grandeurs qui varient ensemble ne sont pas forcément liées par une relation de cause à effet. Seule une expérience avec témoin, où un seul facteur varie, établit une causalité.', '**Généraliser trop vite** : un résultat obtenu sur un seul individu, une seule espèce ou un seul essai ne permet pas une conclusion générale. Vérifie le nombre d’essais et la répétabilité.'] },
          {
            type: 'retenir',
            items: [
              'Observation = ce que le document montre ; interprétation = le sens qu’on lui donne grâce aux connaissances.',
              'Raisonnement en trois temps : « Je constate que… Or je sais que… Donc… ».',
              'On adapte la force de la conclusion à la force des preuves : prudence quand le document ne suffit pas.',
            ],
          },
        ],
      },

      {
        title: 'Croiser plusieurs documents et rédiger une réponse argumentée',
        intro: 'Au baccalauréat, une question de synthèse demande souvent d’exploiter plusieurs documents pour répondre à un problème.',
        blocks: [
          { type: 'p', text: 'Chaque document apporte **une pièce du puzzle**. L’expérience de Griffith (1928) montre qu’un « facteur » des bactéries S mortes transforme les bactéries R ; celle d’Avery et de ses collègues (1944) identifie ce facteur. Seule la mise en relation des deux permet de conclure que l’**ADN** porte l’information génétique.' },
          { type: 'figure', image: IMG.griffith, caption: 'Les quatre lots de l’expérience de Griffith (1928). Dans le sang des souris du lot 4, on retrouve des pneumocoques S vivants.', size: 'wide' },
          {
            type: 'table',
            caption: 'Le brouillon d’analyse : un outil simple pour croiser les documents',
            head: ['Document', 'Ce que je vois (observation)', 'Ce que j’en déduis (interprétation)'],
            rows: [
              ['Doc. 1 : Griffith, lots 1 et 2 (témoins)', 'R vivants : souris vivante ; S vivants : souris morte.', 'Seuls les pneumocoques S sont virulents.'],
              ['Doc. 1 : Griffith, lots 3 et 4', 'S tués seuls : souris vivante ; R vivants + S tués : souris morte, S vivants dans le sang.', 'Au contact des S morts, les R ont acquis le caractère S : c’est la **transformation**.'],
              ['Doc. 2 : Avery, 1944', 'L’extrait de S transforme les R sauf s’il est traité par une enzyme qui détruit l’ADN.', 'Le facteur transformant est l’**ADN**.'],
              ['Connaissances', 'Le phénotype (capsule, virulence) dépend de protéines codées par des gènes.', 'L’ADN transmis porte l’information qui fait apparaître un nouveau phénotype.'],
            ],
          },
          {
            type: 'steps',
            title: 'Rédiger une réponse argumentée',
            items: [
              { title: 'Poser le problème', text: 'Une phrase qui reformule la question : « On cherche à savoir quelle molécule porte l’information génétique. »' },
              { title: 'Exploiter chaque document', text: 'Un paragraphe par idée : constat chiffré ou précis, puis interprétation. Cite tes sources entre parenthèses : « (doc. 1) ».' },
              { title: 'Relier', text: 'Utilise des connecteurs logiques qui montrent ton raisonnement : « or », « donc », « de plus », « cependant », « ainsi ».' },
              { title: 'Conclure', text: 'Une phrase-bilan qui répond **exactement** à la question posée, sans information nouvelle.' },
            ],
          },
          { type: 'note', title: 'Histoire des sciences', text: 'Griffith ignorait la nature du « principe transformant ». Avery, MacLeod et McCarty ont montré en 1944 qu’il s’agissait de l’ADN, mais beaucoup de biologistes pensaient encore que seules les protéines, plus variées, pouvaient porter l’information. Il a fallu d’autres expériences, comme celle de Hershey et Chase en 1952, pour convaincre la communauté scientifique : une conclusion solide repose souvent sur plusieurs expériences concordantes.' },
          {
            type: 'retenir',
            items: [
              'Chaque document est d’abord exploité seul, puis mis en relation avec les autres et avec le cours.',
              'Le tableau « Ce que je vois / Ce que j’en déduis » structure le brouillon.',
              'Une réponse argumentée : problème, arguments appuyés sur les documents, connecteurs logiques, conclusion qui répond à la question.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité applique la méthode sur un vrai type de document du programme. Réponds d’abord seul(e), en phrases complètes ; utilise le coup de pouce si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Lire un bilan sanguin',
        duration: '25 min',
        skills: ['Identifier', 'Relever', 'Interpréter'],
        context: 'M. D., 52 ans, a fait une prise de sang lors d’un bilan de santé. Son médecin lui demande de revenir pour en discuter. Tu vas analyser le compte rendu comme le ferait un professionnel, avec prudence.',
        documents: [
          {
            label: 'Document 1',
            title: 'Extrait du compte rendu d’analyses (prélèvement veineux à jeun)',
            source: 'Document construit pour l’exercice',
            blocks: [
              {
                type: 'table',
                head: ['Paramètre', 'Résultat', 'Valeurs de référence (adulte)'],
                rows: [
                  ['Glycémie à jeun', '1,32 g/L (7,3 mmol/L)', '0,70 à 1,10 g/L'],
                  ['Hémoglobine glyquée (HbA1c)', '7,2 %', '4,0 à 6,0 %'],
                  ['Créatininémie', '9 mg/L', '7 à 13 mg/L (homme)'],
                  ['Natrémie (ions sodium)', '140 mmol/L', '135 à 145 mmol/L'],
                  ['Triglycérides', '1,20 g/L', 'inférieur à 1,50 g/L'],
                ],
              },
            ],
          },
          {
            label: 'Document 2',
            title: 'Repères sur le diagnostic du diabète',
            text: [
              'Le diabète est défini par une glycémie à jeun supérieure ou égale à 1,26 g/L, constatée lors de **deux dosages** réalisés à des jours différents. Entre 1,10 et 1,25 g/L, on parle d’hyperglycémie modérée à jeun.',
              'L’hémoglobine glyquée (HbA1c) correspond à la fraction de l’hémoglobine des hématies qui a fixé du glucose : elle reflète la glycémie moyenne des deux à trois derniers mois.',
            ],
            source: 'D’après les recommandations de la Haute Autorité de santé',
          },
        ],
        questions: [
          { text: 'Présente le document 1 en une phrase (nature, origine, contenu).', hint: 'Utilise le titre et les en-têtes des colonnes.', answer: 'Le document 1 est un extrait de compte rendu d’analyses sanguines d’un homme de 52 ans, réalisé à jeun, qui donne pour cinq paramètres la valeur mesurée et l’intervalle de référence.' },
          { text: 'Relève les paramètres situés en dehors des valeurs de référence.', hint: 'Compare chaque résultat aux deux bornes de l’intervalle.', answer: 'Deux paramètres sont hors des valeurs de référence : la glycémie à jeun (1,32 g/L, supérieure à 1,10 g/L) et l’hémoglobine glyquée (7,2 %, supérieure à 6,0 %). La créatininémie, la natrémie et les triglycérides sont dans les intervalles de référence.' },
          { text: 'Quantifie l’écart entre la glycémie du patient et la borne supérieure de l’intervalle de référence (en g/L puis en %).', hint: 'Écart relatif = (valeur − référence) ÷ référence × 100.', answer: 'Écart = 1,32 − 1,10 = 0,22 g/L, soit (0,22 ÷ 1,10) × 100 = 20 % au-dessus de la borne supérieure.' },
          { text: 'À l’aide du document 2, propose une interprétation de ces résultats en utilisant le raisonnement « Je constate que… Or je sais que… Donc… ».', answer: 'Je constate que la glycémie à jeun du patient (1,32 g/L) est supérieure au seuil de 1,26 g/L, et que son HbA1c (7,2 %) est élevée. Or je sais (doc. 2) qu’une glycémie à jeun d’au moins 1,26 g/L, si elle est confirmée, définit un diabète, et que l’HbA1c reflète la glycémie moyenne des derniers mois. Donc l’hyperglycémie du patient n’est probablement pas ponctuelle : ces résultats sont compatibles avec un diabète.' },
          { text: 'Pourquoi le médecin ne peut-il pas encore affirmer que M. D. est diabétique ? Quelle formulation prudente faut-il employer ?', hint: 'Relis la définition du document 2 : combien de dosages faut-il ?', answer: 'Le diagnostic exige une glycémie à jeun d’au moins 1,26 g/L lors de deux dosages réalisés à des jours différents ; ici, un seul dosage est disponible. On écrit donc : « Ces résultats sont compatibles avec un diabète, qui devra être confirmé par un second dosage. »' },
        ],
      },
      {
        title: 'Exploiter une expérience historique : Griffith (1928)',
        duration: '30 min',
        skills: ['Décrire', 'Comparer', 'Interpréter'],
        context: 'En 1928, le médecin britannique Frederick Griffith cherche un vaccin contre la pneumonie due au pneumocoque (_Streptococcus pneumoniae_). Il travaille sur deux formes de cette bactérie et fait une observation inattendue.',
        documents: [
          {
            label: 'Document 3',
            title: 'Deux formes du pneumocoque cultivées sur gélose au sang',
            image: IMG.colonies,
            caption: 'À gauche, colonies lisses et brillantes (forme S, de l’anglais _smooth_) ; à droite, colonies mates à contour irrégulier (forme R, de l’anglais _rough_). Photographie d’illustration.',
            text: 'Les pneumocoques de forme S sont entourés d’une **capsule** de polysaccharides qui les protège des défenses de l’organisme. Les pneumocoques de forme R n’ont pas de capsule. Ce caractère est héréditaire : les descendants d’un pneumocoque S sont S.',
          },
          {
            label: 'Document 4',
            title: 'Protocole et résultats de Griffith',
            image: IMG.griffith,
            caption: 'Les quatre lots de souris. Dans le sang des souris mortes du lot 4, Griffith retrouve des pneumocoques S vivants.',
          },
        ],
        questions: [
          { text: 'Identifie le facteur étudié par Griffith et les lots qui jouent le rôle de témoins.', hint: 'Quels lots permettent de connaître l’effet de chaque forme de bactérie seule ?', answer: 'Griffith étudie l’effet de bactéries S tuées sur des bactéries R vivantes. Les lots 1, 2 et 3 sont des témoins : ils montrent l’effet des R vivants seuls (lot 1), des S vivants seuls (lot 2) et des S tués seuls (lot 3).' },
          { text: 'Décris les résultats des lots 1, 2 et 3, puis interprète-les.', answer: 'Les souris du lot 1 (R vivants) et du lot 3 (S tués par la chaleur) survivent, celles du lot 2 (S vivants) meurent. Seuls les pneumocoques S vivants sont donc virulents : les R ne sont pas virulents et les S tués par la chaleur ne peuvent plus provoquer la maladie.' },
          { text: 'Compare les lots 3 et 4. Quelle est la seule différence entre eux et quelle conséquence a-t-elle ?', answer: 'Le lot 4 reçoit, en plus des S tués du lot 3, des pneumocoques R vivants. Cette seule différence suffit pour que les souris meurent, alors que celles du lot 3 survivent.' },
          { text: 'Les pneumocoques S retrouvés vivants dans le sang des souris du lot 4 ne peuvent pas provenir des bactéries S que Griffith a injectées. Justifie, puis propose une interprétation.', hint: 'Les bactéries S du lot 4 étaient-elles vivantes au moment de l’injection ? D’où peuvent venir des bactéries S vivantes ?', answer: 'Les pneumocoques S du lot 4 avaient été tués par la chaleur avant l’injection (le lot 3 prouve qu’ils ne provoquent pas la maladie seuls). Les S vivants retrouvés proviennent donc des R vivants, qui ont acquis la capsule et la virulence au contact des S morts. Comme ce caractère se transmet à leurs descendants, un élément des bactéries S mortes a transmis une information héréditaire : c’est la transformation bactérienne.' },
          { text: 'Que ne permet pas de savoir cette expérience ? Formule la question que Griffith laisse ouverte.', answer: 'L’expérience ne permet pas de savoir quelle molécule des bactéries S mortes est responsable de la transformation. Question ouverte : « Quelle est la nature chimique du principe transformant : protéine, polysaccharide, ARN ou ADN ? »' },
        ],
      },
      {
        title: 'Croiser deux documents : la nature du principe transformant',
        duration: '30 min',
        skills: ['Relever', 'Raisonner', 'Argumenter'],
        context: 'En 1944, Oswald Avery, Colin MacLeod et Maclyn McCarty reprennent le travail de Griffith au laboratoire, sans souris : ils préparent un extrait de pneumocoques S tués, le traitent par différentes enzymes, puis le mettent en contact avec des pneumocoques R cultivés en milieu liquide. Ils recherchent ensuite des colonies S sur gélose.',
        documents: [
          {
            label: 'Document 5',
            title: 'Résultats simplifiés des expériences d’Avery, MacLeod et McCarty',
            blocks: [
              {
                type: 'table',
                head: ['Préparation ajoutée aux pneumocoques R', 'Molécules détruites par le traitement', 'Obtention de colonies S ?'],
                rows: [
                  ['Extrait de bactéries S non traité', 'Aucune', 'Oui'],
                  ['Extrait + protéases', 'Protéines', 'Oui'],
                  ['Extrait + ribonucléase', 'ARN', 'Oui'],
                  ['Extrait + désoxyribonucléase', 'ADN', 'Non'],
                  ['Aucun extrait (R seuls)', 'Sans objet', 'Non'],
                ],
              },
            ],
            source: 'D’après Avery, MacLeod et McCarty, 1944',
          },
        ],
        questions: [
          { text: 'Quel est le rôle des deux lignes « Extrait de bactéries S non traité » et « Aucun extrait (R seuls) » ?', hint: 'Ce sont des témoins : l’un positif, l’autre négatif.', answer: 'Ce sont les témoins. « Extrait de bactéries S non traité » (témoin positif) montre que l’extrait de bactéries S peut transformer les R dans ces conditions. « Aucun extrait » (témoin négatif) montre que les R ne deviennent pas S spontanément.' },
          { text: 'Relève les traitements qui empêchent la transformation et ceux qui ne l’empêchent pas.', answer: 'Seul le traitement par la désoxyribonucléase, qui détruit l’ADN, empêche l’apparition de colonies S. Les traitements par les protéases (protéines détruites) et par la ribonucléase (ARN détruit) ne l’empêchent pas.' },
          { text: 'Déduis-en la nature du principe transformant. Utilise le raisonnement en trois temps.', answer: 'Je constate que la transformation n’a plus lieu uniquement quand l’ADN de l’extrait est détruit. Or une molécule indispensable à un phénomène est celle dont la destruction l’empêche. Donc le principe transformant est l’ADN, et non les protéines ou l’ARN.' },
          { text: 'Rédige un court paragraphe argumenté qui répond au problème : « Quelle molécule porte l’information génétique qui détermine le caractère S ? ». Appuie-toi sur les documents 4 et 5 et sur tes connaissances.', hint: 'Problème, arguments du doc. 4, arguments du doc. 5, conclusion ; cite les documents entre parenthèses.', answer: 'On cherche quelle molécule porte l’information génétique responsable du caractère S. Griffith montre que des pneumocoques R non virulents deviennent S, virulents, au contact de pneumocoques S morts, et que ce caractère se transmet (doc. 4) : un élément des bactéries mortes porte donc une information héréditaire. Avery et ses collègues montrent ensuite que cet élément perd son effet uniquement lorsque son ADN est détruit, alors que la destruction des protéines ou de l’ARN est sans effet (doc. 5). Or l’ADN est le constituant des chromosomes et des gènes. On peut donc conclure que l’ADN est le support de l’information génétique qui détermine le caractère S.' },
        ],
      },
      {
        title: 'Observation ou interprétation ? Évaluer une source',
        duration: '20 min',
        skills: ['Distinguer', 'Critiquer'],
        context: 'Après une séance sur ces expériences, des élèves ont noté des phrases dans leur cahier. Par ailleurs, l’un d’eux a cherché sur internet des informations sur le microbiote intestinal pour un exposé.',
        documents: [
          {
            label: 'Document 6',
            title: 'Phrases notées par des élèves',
            blocks: [
              {
                type: 'list',
                ordered: true,
                items: [
                  'Les souris du lot 3 sont vivantes.',
                  'La chaleur a détruit la capsule des pneumocoques S.',
                  'Les colonies de la boîte de gauche sont bombées et brillantes.',
                  'L’ADN des bactéries S pénètre dans les bactéries R.',
                  'Dans le tube traité par la désoxyribonucléase, aucune colonie S n’apparaît.',
                  'Le patient est diabétique.',
                ],
              },
            ],
          },
          {
            label: 'Document 7',
            title: 'Trois sources trouvées sur internet',
            blocks: [
              {
                type: 'cards',
                items: [
                  { title: 'Source A', text: 'Dossier d’un organisme public de recherche médicale, rédigé avec des chercheurs, daté et mis à jour, citant des articles scientifiques.', tone: 'green' },
                  { title: 'Source B', text: 'Page d’un site qui vend des gélules de probiotiques, promettant de « renforcer l’immunité à 100 % », sans auteur ni référence.', tone: 'red' },
                  { title: 'Source C', text: 'Vidéo d’un influenceur qui raconte son expérience personnelle après un régime, sans citer de source.', tone: 'yellow' },
                ],
              },
            ],
            source: 'Situations décrites pour l’exercice',
          },
        ],
        questions: [
          { text: 'Classe chaque phrase du document 6 : observation ou interprétation ?', hint: 'Une observation se vérifie directement dans le document ; une interprétation ajoute une explication ou une conclusion.', answer: 'Observations : 1, 3 et 5 (elles décrivent ce que l’on voit). Interprétations : 2, 4 et 6 (elles proposent une explication ou une conclusion).' },
          { text: 'La phrase 6 est une interprétation trop affirmative. Réécris-la avec une formulation prudente et justifie.', answer: '« Les résultats du patient sont compatibles avec un diabète, qui reste à confirmer par un second dosage. » Un seul dosage de glycémie à jeun ne suffit pas pour poser le diagnostic.' },
          { text: 'Pour son exposé, quelle source l’élève doit-il utiliser en priorité ? Justifie avec au moins trois critères.', answer: 'La source A : elle est produite par un organisme public identifié, elle est datée et mise à jour, elle cite des références scientifiques vérifiables et elle cherche à informer, pas à vendre.' },
          { text: 'Explique pourquoi les sources B et C ne sont pas fiables.', answer: 'La source B a un intérêt commercial (elle vend le produit dont elle parle), ne cite ni auteur ni référence et fait une promesse absolue. La source C repose sur un témoignage personnel, non vérifiable et non généralisable, sans aucune source.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'On commence toujours par identifier la nature, la source et le paratexte du document : titre, légende, unités, échelle, conditions, témoin.',
      'Le verbe de la consigne fixe le travail attendu : relever, décrire, comparer, interpréter, expliquer, argumenter ne demandent pas la même réponse.',
      'Une analyse est sélective : chaque donnée est citée avec sa valeur, son unité, sa condition, puis comparée à une référence et l’écart est quantifié.',
      'Observation (ce que le document montre) et interprétation (le sens qu’on lui donne) doivent rester distinctes.',
      'Le raisonnement en trois temps relie un constat, une connaissance et une conclusion : « Je constate que… Or je sais que… Donc… ».',
      'La force d’une conclusion dépend de la force des preuves : on emploie un vocabulaire prudent quand le document ne suffit pas.',
      'Pour croiser plusieurs documents, on exploite chacun séparément, puis on les relie dans une réponse argumentée qui répond exactement à la question.',
    ],
    method: {
      title: 'Répondre à une question sur document',
      steps: [
        'Lire la consigne et souligner le **verbe d’action** et le sujet de la question.',
        'Identifier le document : nature, source, titre, légende, unités, conditions, témoin.',
        'Relever **uniquement** les données utiles, avec valeurs et unités.',
        'Comparer à une référence (témoin, valeurs de référence) et quantifier l’écart.',
        'Interpréter avec le raisonnement « Je constate que… Or je sais que… Donc… ».',
        'Conclure en répondant exactement à la question, avec une formulation adaptée à la force des preuves.',
      ],
    },
    vocabulary: [
      { term: 'Document scientifique', definition: 'Support présentant des faits, des mesures ou des observations, qui sert de preuve.' },
      { term: 'Paratexte', definition: 'Éléments qui entourent le contenu d’un document : titre, source, légende, unités, échelle.' },
      { term: 'Source', definition: 'Origine d’une information (auteur, organisme, date), qui permet d’en évaluer la fiabilité.' },
      { term: 'Témoin', definition: 'Lot réalisé dans les mêmes conditions que l’essai, sauf pour le facteur étudié, qui sert de référence.' },
      { term: 'Valeurs de référence', definition: 'Intervalle des valeurs d’un paramètre biologique observé chez la plupart des personnes en bonne santé.' },
      { term: 'Observation', definition: 'Constat objectif et vérifiable dans le document.' },
      { term: 'Interprétation', definition: 'Explication donnée à une observation à l’aide de connaissances.' },
      { term: 'Hypothèse', definition: 'Proposition d’explication qui doit être testée par une expérience ou confrontée à des données.' },
      { term: 'Argument', definition: 'Élément de preuve tiré d’un document ou du cours, qui soutient une affirmation.' },
      { term: 'Corrélation', definition: 'Lien statistique entre deux grandeurs qui varient ensemble, sans preuve de cause à effet.' },
      { term: 'Écart relatif', definition: 'Différence entre une valeur et une référence, rapportée à cette référence et exprimée en pourcentage.' },
      { term: 'Transformation bactérienne', definition: 'Acquisition d’un caractère héréditaire par une bactérie qui intègre de l’ADN provenant d’une autre bactérie.' },
    ],
    mistakes: [
      { wrong: 'Commencer à répondre sans avoir lu le titre, les unités et les conditions du document.', right: 'Identifier d’abord la nature du document et son paratexte.' },
      { wrong: 'Recopier tout le tableau dans sa réponse.', right: 'Ne relever que les données utiles à la question, avec leur valeur et leur unité.' },
      { wrong: 'Écrire « c’est plus élevé » sans dire par rapport à quoi ni de combien.', right: 'Comparer à une référence précise et quantifier l’écart (différence, rapport ou pourcentage).' },
      { wrong: 'Expliquer quand on demande de décrire, ou décrire quand on demande d’expliquer.', right: 'Respecter le verbe de la consigne.' },
      { wrong: 'Affirmer une conclusion certaine à partir d’un seul résultat.', right: 'Adapter la formulation à la force des preuves : « est compatible avec », « suggère que ».' },
      { wrong: 'Considérer qu’une source trouvée en premier sur internet est forcément fiable.', right: 'Vérifier l’auteur, la date, les références et l’intention de la source.' },
    ],
    quiz: [
      { question: 'Quel élément faut-il lire en premier sur un tableau de résultats ?', choices: ['La dernière ligne', 'Le titre, les en-têtes et les unités', 'La valeur la plus grande', 'La conclusion du professeur'], answer: 1, explanation: 'Le titre, les en-têtes et les unités indiquent ce qui est mesuré et dans quelles conditions.' },
      { question: 'La consigne « Décris le résultat » demande :', choices: ['D’expliquer pourquoi le résultat est obtenu', 'De dire ce que l’on observe, avec des valeurs', 'De donner son avis', 'De proposer une nouvelle expérience'], answer: 1, explanation: 'Décrire, c’est dire ce que l’on voit, sans expliquer.' },
      { question: 'Laquelle de ces phrases est une observation ?', choices: ['L’amylase a hydrolysé l’amidon.', 'Le lugol reste jaune-orangé dans le tube 3.', 'Le patient est malade.', 'L’ADN est le principe transformant.'], answer: 1, explanation: 'La couleur du lugol est un constat vérifiable ; les autres phrases sont des interprétations.' },
      { question: 'Le rôle d’un lot témoin est :', choices: ['De servir de référence pour attribuer une différence au facteur étudié', 'D’obtenir plus de résultats', 'De vérifier la propreté du matériel', 'De remplacer le lot expérimental'], answer: 0, explanation: 'Le témoin ne diffère de l’essai que par le facteur étudié : il permet d’attribuer la différence observée à ce facteur.' },
      { question: 'Une glycémie à jeun de 1,32 g/L comparée à une borne supérieure de 1,10 g/L représente un écart de :', choices: ['0,22 %', '12 %', '20 %', '32 %'], answer: 2, explanation: '(1,32 − 1,10) ÷ 1,10 × 100 = 20 %.' },
      { question: 'Dans l’expérience de Griffith, le lot 3 (pneumocoques S tués seuls) sert à montrer que :', choices: ['Les S tués ne provoquent pas la maladie à eux seuls', 'Les R sont virulents', 'Les souris sont résistantes', 'La chaleur rend les S plus dangereux'], answer: 0, explanation: 'Le lot 3 est un témoin : les souris survivent, donc les S tués seuls ne sont pas pathogènes.' },
      { question: 'Quelle formulation est la plus adaptée quand un document suggère une conclusion sans la prouver ?', choices: ['« Cela prouve que… »', '« Il est certain que… »', '« Ces résultats sont compatibles avec… »', '« On sait que… »'], answer: 2, explanation: 'On emploie un vocabulaire prudent lorsque les preuves sont insuffisantes.' },
      { question: 'Quelle source est la plus fiable pour un exposé sur le diabète ?', choices: ['Un forum de discussion', 'Le dossier d’un organisme public de recherche médicale', 'La page d’un site qui vend des compléments alimentaires', 'Une vidéo sans source'], answer: 1, explanation: 'Un organisme public identifié, qui date ses contenus et cite des références, est une source fiable.' },
    ],
    exercises: [
      {
        title: 'Digestion des protéines in vitro',
        statement: [
          'Des cubes de blanc d’œuf cuit (riche en protéines) sont placés 2 h à 37 °C dans quatre tubes. Tube 1 : eau acidifiée à pH 2. Tube 2 : pepsine (enzyme de l’estomac) à pH 2. Tube 3 : pepsine à pH 7. Tube 4 : pepsine préalablement bouillie, à pH 2.',
          'Résultats : seul le cube du tube 2 est devenu translucide et a nettement diminué de volume ; les autres cubes sont intacts.',
          'a) Identifie le tube témoin sans enzyme. b) Décris les résultats. c) Interprète-les avec le raisonnement en trois temps.',
        ],
        answer: [
          'a) Le tube 1 (eau acidifiée, sans enzyme) est le témoin : il montre que l’acidité seule ne digère pas les protéines.',
          'b) Seul le cube placé avec de la pepsine à pH 2 (tube 2) a été attaqué ; à pH 7 (tube 3), avec une pepsine bouillie (tube 4) ou sans enzyme (tube 1), les cubes restent intacts.',
          'c) Je constate que les protéines ne sont digérées qu’en présence de pepsine active à pH 2. Or une enzyme est une protéine qui catalyse une réaction dans des conditions précises de pH et qui est dénaturée par la chaleur. Donc la pepsine hydrolyse les protéines, uniquement en milieu acide, comme dans l’estomac, et perd son activité après ébullition.',
        ],
      },
      {
        title: 'Améliorer une réponse',
        statement: 'Un élève répond à la consigne « Compare les glycémies de deux patients à jeun : A = 0,92 g/L ; B = 1,45 g/L » par : « B a plus de sucre, il est diabétique. » Relève les défauts de cette réponse et propose une réponse correcte.',
        answer: [
          'Défauts : pas de valeurs ni d’unités, pas de quantification de l’écart, vocabulaire imprécis (« sucre » au lieu de « glycémie »), interprétation non demandée et trop affirmative.',
          'Réponse correcte : « La glycémie à jeun du patient B (1,45 g/L) dépasse de 0,53 g/L celle du patient A (0,92 g/L), soit environ 1,6 fois plus élevée. La glycémie de A est dans l’intervalle de référence (0,70 à 1,10 g/L), celle de B le dépasse. »',
        ],
      },
      {
        title: 'Présenter un document',
        statement: 'Rédige la phrase de présentation de la figure de l’expérience de Griffith (partie 5 du cours), puis indique quels lots sont des témoins.',
        answer: 'Le document est un schéma qui présente le protocole et les résultats de l’expérience de Griffith (1928) : quatre lots de souris reçoivent différentes préparations de pneumocoques et on observe si elles survivent. Les lots 1, 2 et 3 (R vivants, S vivants, S tués seuls) sont des témoins ; le lot 4 (R vivants + S tués) est le lot expérimental.',
      },
    ],
    selfCheck: [
      'Je sais identifier la nature, la source et le paratexte d’un document.',
      'Je sais ce qu’attend chaque verbe de consigne (décrire, comparer, interpréter, expliquer…).',
      'Je sais relever une donnée avec sa valeur, son unité et sa condition, puis quantifier un écart.',
      'Je sais distinguer une observation d’une interprétation.',
      'Je sais rédiger un raisonnement « Je constate que… Or je sais que… Donc… ».',
      'Je sais croiser plusieurs documents dans une réponse argumentée.',
      'Je sais évaluer la fiabilité d’une source.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Expérience de Griffith — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Exp%C3%A9rience_de_Griffith' },
      { title: 'Avery–MacLeod–McCarty experiment — Wikipédia (en anglais)', url: 'https://en.wikipedia.org/wiki/Avery%E2%80%93MacLeod%E2%80%93McCarty_experiment' },
      { title: 'Diabète de type 2 — Inserm', url: 'https://www.inserm.fr/dossier/diabete-type-2/' },
    ],
  },
};

export default lesson;
