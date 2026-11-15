import { img } from '../media';
import photoCourbe from '../../../assets/courses/premiere/bbd-3-analyser-courbe/photo-courbe.webp';
import vocabulaire from '../../../assets/courses/premiere/bbd-3-analyser-courbe/courbe-vocabulaire.webp';
import hgpo from '../../../assets/courses/premiere/bbd-3-analyser-courbe/courbe-hgpo.webp';
import amylase from '../../../assets/courses/premiere/bbd-3-analyser-courbe/courbe-amylase.webp';
import adn from '../../../assets/courses/premiere/bbd-3-analyser-courbe/courbe-adn.webp';
import lhFsh from '../../../assets/courses/premiere/bbd-3-analyser-courbe/courbe-lh-fsh.webp';
import etalonnage from '../../../assets/courses/premiere/bbd-3-analyser-courbe/courbe-etalonnage.webp';

const IMG = {
  photo: img(photoCourbe, 'Main d’élève traçant au crayon une courbe sur du papier millimétré, avec une règle transparente ; un portoir de tubes à essai en arrière-plan.', 'photo', 1536, 1024),
  vocabulaire: img(vocabulaire, 'Schéma d’une courbe annotée : axe des abscisses, axe des ordonnées, phase d’augmentation, maximum, phase de diminution, plateau.', 'schema', 1400, 933),
  hgpo: img(hgpo, 'Graphique de la glycémie (g/L) en fonction du temps après l’ingestion de 75 g de glucose (0 à 180 min) pour deux sujets. Sujet A : 0,85 ; 1,40 ; 1,20 ; 1,00 ; 0,90 ; 0,85 ; 0,85. Sujet B : 1,35 ; 1,95 ; 2,40 ; 2,45 ; 2,30 ; 2,05 ; 1,85.', 'schema', 1400, 934),
  amylase: img(amylase, 'Graphique de l’activité de l’amylase salivaire (% de l’activité maximale) en fonction de la température de 0 à 80 °C : 5 % à 0 °C, 18 % à 10 °C, 40 % à 20 °C, 72 % à 30 °C, 100 % à 37 °C, 80 % à 45 °C, 55 % à 50 °C, 15 % à 60 °C, 2 % à 70 °C, 0 % à 80 °C.', 'schema', 1400, 934),
  adn: img(adn, 'Graphique de la quantité d’ADN par cellule (unités arbitraires) en fonction du temps (0 à 32 h) : 10 en phase G1 (0 à 11 h), augmentation linéaire jusqu’à 20 pendant la phase S (11 à 19 h), 20 en phase G2 et pendant la mitose (19 à 24 h), chute brutale à 10 à la fin de la mitose, puis 10 en G1.', 'schema', 1400, 934),
  lhFsh: img(lhFsh, 'Graphique des concentrations plasmatiques de LH et de FSH (UI/L) au cours d’un cycle de 28 jours : LH proche de 5 à 9 UI/L, avec un pic de 45 UI/L le jour 13 ; FSH entre 3,5 et 7,5 UI/L, avec un petit pic de 12 UI/L le jour 14.', 'schema', 1400, 934),
  etalonnage: img(etalonnage, 'Gamme d’étalonnage du dosage colorimétrique du glucose : absorbance à 505 nm en fonction de la concentration en glucose (0 à 2,00 g/L) ; points alignés sur une droite passant par l’origine, absorbance de 0,842 pour 2,00 g/L.', 'schema', 1400, 934),
};

const lesson = {
  version: 2,
  id: 'bbd-3-analyser-courbe',
  duration: 'Environ 2 séances, puis réinvesti dans tous les chapitres',
  hook: {
    image: IMG.photo,
    question: 'Une glycémie mesurée toutes les 30 minutes, l’activité d’une enzyme à dix températures : comment transformer une série de nombres en une courbe qui « raconte » un phénomène, puis la lire sans se tromper ?',
    text: 'La courbe est le document le plus fréquent en biochimie-biologie : glycémie après un repas, activité d’une enzyme, hormones du cycle ovarien, quantité d’ADN pendant la division cellulaire. Bien lue, elle révèle un mécanisme en un coup d’œil ; mal lue, elle conduit à des contresens. Dans cette leçon, tu apprends à lire, décrire, comparer, interpréter… et tracer une courbe comme un professionnel de laboratoire.',
  },
  objectives: [
    'Identifier les éléments d’un graphique : titre, grandeurs portées sur les axes, unités, échelles, légende.',
    'Lire une valeur sur une courbe et déterminer une valeur inconnue par lecture graphique.',
    'Décrire une courbe en la découpant en phases, avec des valeurs chiffrées.',
    'Comparer deux courbes et interpréter leurs différences à l’aide de mes connaissances.',
    'Tracer une courbe à partir d’un tableau de mesures, par exemple la quantité d’ADN au cours du cycle cellulaire.',
    'Exploiter une courbe d’étalonnage pour déterminer une concentration.',
  ],
  prerequisites: [
    'Savoir placer un point de coordonnées (x ; y) dans un repère (mathématiques).',
    'Distinguer observation et interprétation (leçon D.1).',
  ],
  program: [
    'Tracer une courbe représentant la quantité d’ADN génomique en fonction de la phase du cycle cellulaire, lors de la mitose et de la méiose (module D, items 4 et 5).',
    'Analyser des courbes présentant la variation de la quantité d’ADN au cours du cycle cellulaire et au cours de la méiose (module D).',
    'Analyser des courbes montrant l’activité cyclique des sécrétions hormonales hypophysaires ; seuil de concentration (module 02).',
    'Suivre une perturbation du milieu intérieur : exemple de l’hyperglycémie provoquée (module C, item 5).',
    'Mettre en évidence l’influence des paramètres physico-chimiques sur l’activité enzymatique : température optimale, pH optimal (module 01).',
    'Exploiter des résultats expérimentaux avec un tableur-grapheur : courbe d’étalonnage, courbe de tendance (programme de biotechnologies).',
  ],

  course: {
    parts: [
      {
        title: 'Lire un graphique : les éléments à identifier',
        intro: 'Avant de regarder la forme d’une courbe, on lit ce qu’elle représente : sans cela, toute interprétation est risquée.',
        blocks: [
          { type: 'definition', term: 'Graphique', text: 'représentation de la variation d’une grandeur en fonction d’une autre. On dit que l’on trace « **y en fonction de x** » : la grandeur mesurée (y) en fonction de la grandeur que l’on fait varier (x).' },
          {
            type: 'compare',
            title: 'Les deux axes n’ont pas le même rôle',
            columns: [
              { title: 'Axe des abscisses (horizontal)', subtitle: 'la variable choisie', items: ['Grandeur que l’expérimentateur fait varier ou qui s’écoule : temps, température, pH, concentration, jour du cycle.', 'Elle est connue avant la mesure.'] },
              { title: 'Axe des ordonnées (vertical)', subtitle: 'la grandeur mesurée', items: ['Résultat obtenu pour chaque valeur de x : glycémie, activité enzymatique, absorbance, quantité d’ADN.', 'C’est la « réponse » du système étudié.'] },
            ],
          },
          { type: 'figure', image: IMG.vocabulaire, caption: 'Les axes d’un graphique et le vocabulaire de base pour décrire une courbe.', size: 'normal' },
          {
            type: 'list',
            title: 'Les six éléments à lire en premier',
            ordered: true,
            items: [
              'Le **titre** : « Évolution de… en fonction de… ».',
              'La **grandeur** portée sur chaque axe et son **unité** (g/L, °C, min, UI/L, %).',
              'L’**échelle** de chaque axe : valeur d’une graduation, valeur de départ (l’axe ne commence pas toujours à zéro).',
              'La **légende** quand plusieurs courbes sont tracées (couleur, type de trait, symbole).',
              'Les **points de mesure** (croix, ronds) : la courbe ne fait que les relier.',
              'Les **conditions** de l’expérience : sujet, température, durée, témoin.',
            ],
          },
          {
            type: 'example',
            title: 'lire une valeur sur une courbe',
            text: 'Sur la courbe d’activité de l’amylase (activité 1), pour connaître l’activité à 30 °C : pars de 30 sur l’axe des abscisses, monte verticalement jusqu’à la courbe, puis va horizontalement jusqu’à l’axe des ordonnées : on lit **72 %** de l’activité maximale. À l’inverse, pour savoir à quelles températures l’activité vaut 50 %, on part de 50 sur l’axe des ordonnées : on lit environ **23 °C** et **51 °C**.',
          },
          {
            type: 'table',
            caption: 'Choisir le bon type de graphique',
            head: ['Type de graphique', 'Quand l’utiliser ?', 'Exemple'],
            rows: [
              ['Courbe', 'La variable en abscisse est continue (temps, température, pH) et l’on suit une évolution.', 'Glycémie en fonction du temps'],
              ['Histogramme (diagramme en barres)', 'On compare des catégories distinctes, sans ordre continu.', 'Masse des vésicules séminales dans trois lots de rats'],
              ['Nuage de points et droite', 'On étudie une relation entre deux grandeurs mesurées, souvent proportionnelle.', 'Absorbance en fonction de la concentration (étalonnage)'],
              ['Diagramme circulaire', 'On représente les proportions d’un tout.', 'Composition d’un aliment en glucides, lipides, protides'],
            ],
          },
          { type: 'warning', title: 'Attention aux échelles', text: 'Un axe des ordonnées qui ne commence pas à zéro amplifie visuellement les variations. Et deux courbes ne se comparent « à l’œil » que si elles sont tracées avec les mêmes axes et les mêmes unités : 1 g/L de glucose correspond à environ 5,5 mmol/L.' },
          {
            type: 'retenir',
            items: [
              'On trace la grandeur mesurée (ordonnées) en fonction de la variable choisie (abscisses).',
              'Titre, grandeurs, unités, échelles et légende se lisent avant la forme de la courbe.',
              'Une valeur se lit en traçant un trait vertical puis horizontal (ou l’inverse) jusqu’aux axes.',
            ],
          },
        ],
      },

      {
        title: 'Décrire une courbe : découper en phases',
        intro: 'Décrire, c’est dire ce que fait la grandeur mesurée quand la variable augmente, phase par phase, avec des valeurs.',
        blocks: [
          {
            type: 'table',
            caption: 'Le vocabulaire de la description',
            head: ['Terme', 'Signification'],
            rows: [
              ['Augmentation (croissance)', 'La grandeur mesurée augmente quand x augmente. Elle peut être rapide (forte pente) ou lente.'],
              ['Diminution (décroissance)', 'La grandeur mesurée diminue quand x augmente.'],
              ['Plateau (stabilité)', 'La grandeur reste constante sur un intervalle.'],
              ['Maximum (pic) / minimum', 'Valeur la plus haute / la plus basse atteinte, avec la valeur de x correspondante.'],
              ['Optimum', 'Valeur de x pour laquelle la grandeur mesurée est maximale (température optimale, pH optimal).'],
              ['Seuil', 'Valeur à partir de laquelle un phénomène se déclenche ou change.'],
              ['Pente', 'Vitesse de variation : plus la courbe est raide, plus la variation est rapide.'],
            ],
          },
          { type: 'figure', image: IMG.hgpo, caption: 'Évolution de la glycémie de deux sujets à jeun après l’ingestion de 75 g de glucose (hyperglycémie provoquée par voie orale).', size: 'wide' },
          {
            type: 'steps',
            title: 'Décrire une courbe',
            items: [
              { title: 'Donner l’allure générale', text: 'En une phrase : « La glycémie augmente puis diminue jusqu’à revenir à sa valeur initiale. »' },
              { title: 'Découper en phases', text: 'Une nouvelle phase commence à chaque changement de sens ou de pente.' },
              { title: 'Chiffrer chaque phase', text: 'Bornes de la phase sur l’axe des x, valeurs de y au début et à la fin, avec les unités.' },
              { title: 'Repérer les points remarquables', text: 'Maximum, minimum, plateau, seuil : leurs coordonnées (x ; y).' },
              { title: 'Quantifier', text: 'Variation (différence), rapport (« 2 fois plus »), ou vitesse moyenne de variation.' },
            ],
          },
          {
            type: 'example',
            title: 'description de la courbe du sujet A',
            text: 'La glycémie à jeun du sujet A est de 0,85 g/L. **Entre 0 et 30 min**, elle augmente rapidement jusqu’à un **maximum de 1,40 g/L, atteint à 30 min**. **De 30 à 150 min**, elle diminue progressivement, jusqu’à 0,85 g/L. **De 150 à 180 min**, elle reste stable à 0,85 g/L : elle est revenue à sa valeur initiale.',
          },
          {
            type: 'formula',
            title: 'Vitesse moyenne de variation sur une phase',
            expression: 'v = Δy ÷ Δx = (y~fin~ − y~début~) ÷ (x~fin~ − x~début~)',
            legend: [
              { symbol: 'Δy', meaning: 'variation de la grandeur mesurée (avec son unité)' },
              { symbol: 'Δx', meaning: 'durée ou écart de la variable sur la phase' },
            ],
          },
          { type: 'example', title: 'calcul', text: 'Sujet A, de 0 à 30 min : v = (1,40 − 0,85) ÷ (30 − 0) ≈ **0,018 g/L par minute**. De 30 à 150 min : v = (0,85 − 1,40) ÷ (150 − 30) ≈ −0,005 g/L par minute : la diminution est environ quatre fois plus lente que l’augmentation.' },
          { type: 'warning', title: 'Deux défauts fréquents', text: ['**Décrire point par point** (« à 30 min… à 60 min… à 90 min… ») : on regroupe les points en phases.', '**Interpréter dans la description** (« la glycémie diminue grâce à l’insuline ») : la description dit ce que fait la courbe ; l’explication vient ensuite, si elle est demandée.'] },
          {
            type: 'retenir',
            items: [
              'Une description découpe la courbe en phases, délimitées par les changements de sens ou de pente.',
              'Chaque phase est chiffrée : bornes en x, valeurs de y, unités.',
              'Les points remarquables (maximum, plateau, optimum) sont donnés avec leurs coordonnées.',
            ],
          },
        ],
      },

      {
        title: 'Comparer des courbes et interpréter',
        intro: 'Une courbe isolée dit peu de chose : c’est la comparaison avec une référence qui fait apparaître le phénomène.',
        blocks: [
          { type: 'definition', term: 'Hyperglycémie provoquée par voie orale (HGPO)', text: 'test au cours duquel une personne à jeun boit une solution contenant 75 g de glucose ; on mesure sa glycémie à intervalles réguliers pendant 2 à 3 h. Il permet d’évaluer la capacité de l’organisme à ramener la glycémie à sa valeur de consigne.' },
          {
            type: 'table',
            caption: 'Comparer les deux courbes critère par critère',
            head: ['Critère', 'Sujet A', 'Sujet B'],
            rows: [
              ['Glycémie à jeun (t = 0)', '0,85 g/L', '1,35 g/L'],
              ['Maximum (valeur et instant)', '1,40 g/L (t = 30 min)', '2,45 g/L (t = 90 min)'],
              ['Glycémie à 120 min', '0,90 g/L', '2,30 g/L'],
              ['Retour à la valeur initiale', 'Oui, dès 150 min', 'Non : encore 1,85 g/L (t = 180 min)'],
            ],
          },
          {
            type: 'example',
            title: 'interprétation en trois temps',
            text: [
              '**Je constate que** la glycémie du sujet B est plus élevée que celle du sujet A à tous les instants : à jeun, 1,35 g/L contre 0,85 g/L ; un maximum de 2,45 g/L contre 1,40 g/L, plus tardif (90 min contre 30 min) ; à 120 min, 2,30 g/L contre 0,90 g/L.',
              '**Or je sais que** l’insuline, hormone hypoglycémiante sécrétée par le pancréas, fait baisser la glycémie en favorisant l’entrée et le stockage du glucose dans les cellules, et qu’une glycémie supérieure ou égale à 2,00 g/L deux heures après l’ingestion de glucose caractérise un diabète.',
              '**Donc** le sujet A régule normalement sa glycémie, alors que le sujet B ne parvient pas à la ramener à sa valeur de consigne : ses résultats sont compatibles avec un diabète, par défaut de sécrétion ou d’action de l’insuline.',
            ],
          },
          { type: 'p', text: 'Pour comparer deux courbes, on examine toujours les mêmes critères : **valeurs initiales**, **valeurs et instants des extremums**, **vitesses** de variation, **valeurs finales** et retour (ou non) à la valeur de départ. Chaque différence est quantifiée.' },
          { type: 'warning', title: 'Prudence', text: 'Deux courbes qui évoluent en même temps ne prouvent pas qu’une grandeur cause l’autre. Par exemple, le pic de LH précède l’ovulation : seule une expérience (bloquer le pic de LH et observer l’absence d’ovulation) démontre la relation de cause à effet.' },
          {
            type: 'retenir',
            items: [
              'On compare les courbes critère par critère : valeurs initiales, extremums, vitesses, valeurs finales.',
              'Chaque différence est chiffrée, puis expliquée avec le raisonnement « Je constate que… Or je sais que… Donc… ».',
              'Une évolution simultanée de deux grandeurs n’est pas une preuve de causalité.',
            ],
          },
        ],
      },

      {
        title: 'Tracer une courbe à partir d’un tableau de mesures',
        intro: 'Le programme demande de savoir tracer l’évolution de la quantité d’ADN au cours du cycle cellulaire : c’est l’occasion d’apprendre les règles du tracé.',
        blocks: [
          {
            type: 'table',
            caption: 'Quantité d’ADN mesurée dans des cellules en culture au cours d’un cycle cellulaire',
            head: ['Temps (h)', 'Phase du cycle', 'Quantité d’ADN par cellule (unités arbitraires)'],
            rows: [
              ['0 à 11', 'G1', '10'],
              ['13', 'S', '12,5'],
              ['15', 'S', '15'],
              ['17', 'S', '17,5'],
              ['19 à 23', 'G2', '20'],
              ['24 (fin de la mitose, avant la division)', 'Mitose', '20'],
              ['24 (juste après la division)', 'G1', '10'],
              ['24 à 32', 'G1', '10'],
            ],
          },
          {
            type: 'steps',
            title: 'Les règles du tracé',
            items: [
              { title: 'Identifier les grandeurs', text: 'x = temps (variable qui s’écoule), y = quantité d’ADN par cellule (grandeur mesurée).' },
              { title: 'Choisir les échelles', text: 'Repère les valeurs maximales (32 h ; 20 u.a.) et choisis une échelle **simple et régulière** qui utilise bien la feuille : par exemple 1 cm pour 2 h et 1 cm pour 2 u.a.' },
              { title: 'Tracer les axes à la règle', text: 'Une flèche au bout de chaque axe, le **nom de la grandeur** et son **unité** à côté de chaque axe, des graduations régulières.' },
              { title: 'Placer les points', text: 'Chaque mesure est marquée par une petite croix (×), précise et fine.' },
              { title: 'Relier les points', text: 'Par des segments à la règle ou une courbe régulière, **sans dépasser** le premier et le dernier point (pas d’extrapolation).' },
              { title: 'Titrer et légender', text: 'Titre « Évolution de… en fonction de… » ; légende s’il y a plusieurs courbes ; repères des phases si utile.' },
            ],
          },
          { type: 'figure', image: IMG.adn, caption: 'Le tracé attendu : évolution de la quantité d’ADN par cellule au cours d’un cycle cellulaire (phases G1, S, G2 et mitose M).', size: 'wide' },
          {
            type: 'list',
            title: 'Lire la courbe obtenue',
            items: [
              '**Phase G1** : la quantité d’ADN est constante (10 u.a.) ; chaque chromosome est formé d’**une** chromatide.',
              '**Phase S** : la quantité d’ADN double progressivement (de 10 à 20 u.a.) : c’est la **réplication** de l’ADN ; chaque chromosome est alors formé de **deux** chromatides identiques.',
              '**Phase G2 et mitose** : la quantité reste à 20 u.a.',
              '**Fin de la mitose** : les chromatides de chaque chromosome se sont séparées et la cellule se divise ; chaque cellule fille reçoit 10 u.a., la même quantité que la cellule mère en G1.',
            ],
          },
          { type: 'warning', title: 'Les erreurs de tracé les plus fréquentes', text: ['Graduer l’axe avec les valeurs du tableau (0, 11, 13, 15…) au lieu d’une graduation régulière.', 'Inverser les axes, ou oublier le nom et l’unité des grandeurs.', 'Relier le dernier point de la mitose au premier point de G1 par un trait oblique : la division est quasi instantanée à l’échelle du graphique, on trace un **segment vertical**.', 'Prolonger la courbe au-delà des mesures.'] },
          { type: 'note', title: 'Avec un tableur-grapheur', text: 'Saisis x dans la première colonne et y dans la deuxième, puis choisis un graphique « nuage de points » (et non « courbe », qui place les valeurs de x à intervalles égaux). Ajoute un titre et le nom des axes avec leurs unités. N’utilise une courbe de tendance que si le phénomène la justifie (par exemple une droite d’étalonnage).' },
          {
            type: 'retenir',
            items: [
              'Axes tracés à la règle, fléchés, avec grandeur et unité ; graduations régulières ; échelle simple.',
              'Points marqués par des croix, reliés sans extrapolation ; titre « Évolution de… en fonction de… ».',
              'Au cours du cycle cellulaire, la quantité d’ADN double en phase S (réplication) et revient à sa valeur initiale à la fin de la mitose.',
            ],
          },
        ],
      },

      {
        title: 'Courbe d’étalonnage et graphiques à plusieurs courbes',
        intro: 'Au laboratoire, une courbe sert aussi d’outil de mesure : c’est le cas de la courbe d’étalonnage.',
        blocks: [
          { type: 'definition', term: 'Courbe d’étalonnage', text: 'graphique obtenu à partir de solutions **étalons** de concentrations connues : on mesure une grandeur (souvent l’**absorbance**) pour chacune, puis on trace cette grandeur en fonction de la concentration. Elle permet ensuite de déterminer la concentration d’un échantillon inconnu à partir de sa mesure.' },
          { type: 'figure', image: IMG.etalonnage, caption: 'Gamme d’étalonnage d’un dosage colorimétrique du glucose : l’absorbance est proportionnelle à la concentration.', size: 'wide' },
          {
            type: 'steps',
            title: 'Déterminer une concentration inconnue',
            items: [
              { title: 'Mesurer l’échantillon', text: 'Par exemple, un sérum donne une absorbance A = 0,540.' },
              { title: 'Lecture graphique', text: 'Pars de 0,540 sur l’axe des ordonnées, va horizontalement jusqu’à la droite, puis descends verticalement : on lit environ **1,28 g/L**.' },
              { title: 'Vérification par le calcul', text: 'Coefficient directeur de la droite : k = 0,842 ÷ 2,00 ≈ 0,421 L/g. Donc C = A ÷ k = 0,540 ÷ 0,421 ≈ **1,28 g/L**.' },
              { title: 'Vérifier le domaine de validité', text: 'L’absorbance de l’échantillon doit être comprise entre celles des étalons extrêmes ; sinon, on dilue l’échantillon et on recommence (pas d’extrapolation).' },
            ],
          },
          { type: 'p', text: 'Certains graphiques présentent **plusieurs courbes** : on lit alors chaque courbe grâce à la légende (couleur, type de trait, symbole). Si les grandeurs n’ont pas la même unité, le graphique peut comporter **deux axes des ordonnées**, un à gauche et un à droite : chaque courbe se lit sur son propre axe.' },
          {
            type: 'retenir',
            items: [
              'Une courbe d’étalonnage se construit avec des étalons de concentrations connues.',
              'On en déduit une concentration inconnue par lecture graphique ou par le calcul, uniquement dans le domaine des étalons.',
              'Avec plusieurs courbes, on utilise la légende et, le cas échéant, l’axe propre à chaque courbe.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les quatre activités reprennent les courbes du programme. Pour chacune, commence toujours par lire le titre, les axes et les unités. Réponds en phrases complètes, puis compare avec la correction.',
    activities: [
      {
        title: 'L’activité de l’amylase selon la température',
        duration: '25 min',
        skills: ['Lire', 'Décrire', 'Interpréter'],
        context: 'Au laboratoire, des élèves ont mesuré l’activité de l’amylase salivaire à différentes températures, à pH 7 et pendant une durée fixe. Les résultats sont exprimés en pourcentage de l’activité maximale.',
        documents: [
          { label: 'Document 1', title: 'Activité de l’amylase salivaire en fonction de la température', image: IMG.amylase, caption: 'Résultats de travaux pratiques.', size: 'wide' },
        ],
        questions: [
          { text: 'Nomme la variable choisie et la grandeur mesurée, avec leurs unités.', answer: 'La variable choisie (abscisses) est la température, en °C ; la grandeur mesurée (ordonnées) est l’activité enzymatique, en % de l’activité maximale.' },
          { text: 'Lis l’activité de l’amylase à 20 °C et à 60 °C.', hint: 'Trait vertical depuis l’axe des abscisses, puis horizontal vers l’axe des ordonnées.', answer: 'À 20 °C, l’activité est de 40 % ; à 60 °C, elle est de 15 % de l’activité maximale.' },
          { text: 'Détermine la température optimale de l’amylase.', answer: 'L’activité est maximale (100 %) à 37 °C : c’est la température optimale.' },
          { text: 'Décris la courbe en la découpant en phases.', answer: 'De 0 à 37 °C, l’activité augmente, de 5 % à 100 %. Elle atteint son maximum à 37 °C. De 37 à 70 °C, elle diminue rapidement, de 100 % à 2 %, et elle est nulle à 80 °C.' },
          { text: 'Interprète les deux parties de la courbe. Pour l’activité à basse température, appuie-toi sur le résultat du tube 4 de la leçon D.2 (amylase replacée à 37 °C après un séjour à 0 °C).', hint: 'Que se passe-t-il pour une protéine chauffée trop fortement ?', answer: 'Aux basses températures, les molécules sont peu agitées : les rencontres entre l’enzyme et l’amidon sont rares, l’activité est faible ; cet effet est réversible (l’amylase redevient active à 37 °C). Au-delà de l’optimum, la chaleur modifie la structure tridimensionnelle de l’enzyme (dénaturation) : son site actif ne peut plus fixer l’amidon et l’activité chute, de façon irréversible.' },
          { text: 'Pourquoi la température optimale de l’amylase salivaire est-elle cohérente avec son lieu d’action ?', answer: 'L’amylase salivaire agit dans la bouche, à la température du corps humain (environ 37 °C), qui correspond à sa température optimale.' },
        ],
      },
      {
        title: 'Les hormones hypophysaires du cycle ovarien',
        duration: '30 min',
        skills: ['Lire', 'Comparer', 'Raisonner'],
        context: 'Chez la femme, le fonctionnement de l’ovaire est cyclique (environ 28 jours) et contrôlé par deux hormones de l’hypophyse : la FSH et la LH. Après l’ovulation, le follicule rompu se transforme en corps jaune, qui sécrète de la progestérone.',
        documents: [
          { label: 'Document 2', title: 'Concentrations plasmatiques de LH et de FSH', image: IMG.lhFsh, caption: 'Valeurs moyennes typiques d’un cycle de 28 jours (données simplifiées) ; le jour 1 est le premier jour des règles.', size: 'wide' },
          {
            label: 'Document 3',
            title: 'Concentration plasmatique de progestérone au cours du même cycle',
            source: 'Valeurs moyennes typiques, simplifiées',
            blocks: [
              {
                type: 'table',
                head: ['Jour du cycle', 'J1', 'J7', 'J12', 'J14', 'J17', 'J21', 'J25', 'J28'],
                rows: [
                  ['Progestérone (ng/mL)', '0,4', '0,5', '0,8', '2', '7', '14', '6', '0,8'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Relève la valeur et le jour du pic de LH, et compare-la à la concentration de LH au jour 7.', answer: 'Le pic de LH atteint 45 UI/L le jour 13. Au jour 7, la LH vaut 6 UI/L : au moment du pic, elle est environ 7,5 fois plus concentrée.' },
          { text: 'Décris l’évolution de la FSH au cours du cycle.', answer: 'La FSH est comprise entre 5 et 7,5 UI/L pendant la première partie du cycle (jours 1 à 12), présente un petit pic de 12 UI/L le jour 14, puis diminue à environ 3,5 à 4,5 UI/L de J17 à J25 avant de remonter à 7 UI/L le jour 28.' },
          { text: 'L’ovulation a lieu environ 24 à 36 h après le début du pic de LH. À quel jour se produit-elle dans ce cycle ?', answer: 'Le pic de LH commence au jour 12 et culmine au jour 13 : l’ovulation a lieu vers le jour 14.' },
          { text: 'Décris l’évolution de la progestérone (document 3) et mets-la en relation avec l’ovulation.', hint: 'Avant ou après l’ovulation ? Quelle structure ovarienne se forme après l’ovulation ?', answer: 'La progestérone reste très faible (moins de 1 ng/mL) jusqu’au jour 12, puis augmente après l’ovulation jusqu’à un maximum de 14 ng/mL au jour 21, avant de diminuer jusqu’à 0,8 ng/mL au jour 28. Elle est donc sécrétée après l’ovulation, par le corps jaune ; sa chute en fin de cycle correspond à la régression du corps jaune en l’absence de fécondation.' },
          { text: 'Peut-on affirmer, avec ces seules courbes, que le pic de LH déclenche l’ovulation ? Justifie.', answer: 'Non : les courbes montrent seulement que le pic de LH précède l’ovulation (relation chronologique). Pour prouver qu’il la déclenche, il faut une expérience, par exemple montrer que l’ovulation n’a pas lieu si le pic de LH est empêché, et qu’une injection de LH la provoque.' },
        ],
      },
      {
        title: 'Tracer la quantité d’ADN au cours de la méiose',
        duration: '30 min',
        skills: ['Tracer', 'Interpréter'],
        context: 'La méiose produit les gamètes. Une cellule diploïde réplique son ADN, puis subit deux divisions successives sans nouvelle réplication entre les deux. On a mesuré la quantité d’ADN par cellule au cours de ce processus (durées simplifiées).',
        documents: [
          {
            label: 'Document 4',
            title: 'Quantité d’ADN par cellule au cours de la méiose',
            source: 'Valeurs simplifiées, construites pour l’exercice',
            blocks: [
              {
                type: 'table',
                head: ['Temps (unités arbitraires)', 'Étape', 'Quantité d’ADN par cellule (u.a.)'],
                rows: [
                  ['0 à 10', 'Interphase : G1', '10'],
                  ['10 à 18', 'Interphase : réplication', 'de 10 à 20 (augmentation régulière)'],
                  ['18 à 26', 'Fin d’interphase et première division (méiose I)', '20'],
                  ['26 (après la première division)', 'Deux cellules', '10'],
                  ['26 à 32', 'Deuxième division (méiose II)', '10'],
                  ['32 (après la deuxième division)', 'Quatre cellules (gamètes)', '5'],
                  ['32 à 36', 'Gamètes', '5'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Propose des échelles adaptées pour tracer cette courbe sur une demi-page de papier millimétré (environ 18 cm × 12 cm).', hint: 'Valeurs maximales : 36 en abscisses et 20 en ordonnées.', answer: 'Par exemple 1 cm pour 2 unités de temps (36 unités → 18 cm) et 1 cm pour 2 u.a. d’ADN (20 u.a. → 10 cm). Les graduations sont régulières.' },
          { text: 'Trace la courbe en respectant toutes les règles, puis décris sa forme générale.', answer: ['Axes à la règle et fléchés : « Temps (unités arbitraires) » en abscisses, « Quantité d’ADN par cellule (u.a.) » en ordonnées ; titre : « Évolution de la quantité d’ADN par cellule au cours de la méiose ».', 'Forme attendue : un palier à 10 de 0 à 10, une montée régulière jusqu’à 20 entre 10 et 18, un palier à 20 jusqu’à 26, une chute verticale à 10 à 26, un palier à 10 jusqu’à 32, une chute verticale à 5 à 32, puis un palier à 5.'] },
          { text: 'À quoi correspond chaque chute brutale de la courbe ? Explique la différence entre les deux divisions.', answer: 'Chaque chute correspond à une division cellulaire. Lors de la première division (méiose I, division réductionnelle), les chromosomes homologues se séparent : chaque cellule reçoit la moitié des chromosomes, chacun encore formé de deux chromatides (20 → 10 u.a.). Lors de la seconde division (méiose II, division équationnelle), les chromatides de chaque chromosome se séparent (10 → 5 u.a.).' },
          { text: 'Compare la quantité d’ADN d’un gamète à celle d’une cellule en G1 et à celle d’une cellule fille issue d’une mitose.', answer: 'Un gamète contient 5 u.a., soit deux fois moins qu’une cellule en G1 (10 u.a.) et qu’une cellule fille de mitose (10 u.a.). La méiose divise par deux la quantité d’ADN et le nombre de chromosomes, alors que la mitose les conserve.' },
          { text: 'Pourquoi cette réduction de moitié est-elle indispensable à la reproduction sexuée ?', answer: 'À la fécondation, deux gamètes s’unissent : grâce à la méiose, la cellule-œuf retrouve la quantité d’ADN et le nombre de chromosomes de l’espèce (2n). Sans réduction, la quantité d’ADN doublerait à chaque génération.' },
        ],
      },
      {
        title: 'Doser le glucose avec une courbe d’étalonnage',
        duration: '25 min',
        skills: ['Lire', 'Calculer', 'Critiquer'],
        context: 'Dans un laboratoire d’analyses, la glycémie de trois patients est dosée par une méthode colorimétrique : le glucose forme un composé coloré dont l’absorbance, mesurée à 505 nm, est proportionnelle à sa concentration.',
        documents: [
          { label: 'Document 5', title: 'Gamme d’étalonnage', image: IMG.etalonnage, caption: 'Absorbance des solutions étalons de glucose (0 à 2,00 g/L).', size: 'wide' },
          {
            label: 'Document 6',
            title: 'Absorbances mesurées pour les sérums des patients',
            blocks: [
              { type: 'table', head: ['Sérum', 'Absorbance à 505 nm'], rows: [['Patient X', '0,370'], ['Patient Y', '0,540'], ['Patient Z', '1,100']] },
            ],
          },
        ],
        questions: [
          { text: 'Pourquoi la droite d’étalonnage passe-t-elle par l’origine ?', answer: 'Une solution sans glucose (concentration nulle, le « blanc ») ne forme pas de composé coloré : son absorbance est nulle. Le blanc sert d’ailleurs à régler le zéro du spectrophotomètre.' },
          { text: 'Détermine graphiquement, puis par le calcul, la glycémie du patient X.', hint: 'k = 0,842 ÷ 2,00 ≈ 0,421 L/g ; C = A ÷ k.', answer: 'Graphiquement, A = 0,370 correspond à environ 0,88 g/L. Par le calcul : C = 0,370 ÷ 0,421 ≈ 0,88 g/L.' },
          { text: 'Le patient Y est à jeun. Sa glycémie est-elle normale ?', answer: 'C = 0,540 ÷ 0,421 ≈ 1,28 g/L. Elle dépasse l’intervalle de référence à jeun (0,70 à 1,10 g/L) et même le seuil de 1,26 g/L : il faudra un second dosage pour savoir s’il s’agit d’un diabète.' },
          { text: 'Pourquoi ne peut-on pas déterminer directement la glycémie du patient Z ? Propose une solution.', answer: 'Son absorbance (1,100) est supérieure à celle de l’étalon le plus concentré (0,842 pour 2,00 g/L) : elle est hors de la gamme, et rien ne garantit que la proportionnalité reste vraie au-delà. On dilue le sérum (par exemple au demi), on mesure à nouveau son absorbance, puis on multiplie la concentration lue par le facteur de dilution (ici 2).' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'On trace la grandeur mesurée (ordonnées) en fonction de la variable choisie (abscisses) ; titre, grandeurs, unités, échelles et légende se lisent en premier.',
      'Décrire une courbe, c’est la découper en phases et chiffrer chacune : bornes, valeurs, unités, points remarquables.',
      'Comparer deux courbes, c’est confronter, critère par critère et en chiffres, valeurs initiales, extremums, vitesses et valeurs finales.',
      'L’interprétation vient après la description et mobilise les connaissances ; une simultanéité n’est pas une preuve de causalité.',
      'Un tracé correct : axes à la règle fléchés et nommés avec unités, graduations régulières, croix, pas d’extrapolation, titre.',
      'Au cours du cycle cellulaire, la quantité d’ADN double en phase S puis revient à sa valeur initiale après la mitose ; la méiose la divise par deux.',
      'Une courbe d’étalonnage permet de déterminer une concentration inconnue, uniquement dans le domaine des étalons.',
    ],
    method: {
      title: 'Analyser une courbe',
      steps: [
        'Lire le titre, les **grandeurs**, les **unités** et l’**échelle** de chaque axe, et la légende.',
        'Donner l’**allure générale** en une phrase.',
        'Découper la courbe en **phases** et chiffrer chacune (bornes en x, valeurs de y).',
        'Relever les **points remarquables** (maximum, plateau, optimum, seuil) avec leurs coordonnées.',
        'Comparer à une **référence** (témoin, autre courbe, valeur normale) et quantifier les écarts.',
        'Interpréter avec le raisonnement « Je constate que… Or je sais que… Donc… ».',
      ],
    },
    vocabulary: [
      { term: 'Abscisse', definition: 'Axe horizontal, sur lequel on porte la variable choisie (temps, température…).' },
      { term: 'Ordonnée', definition: 'Axe vertical, sur lequel on porte la grandeur mesurée.' },
      { term: 'Échelle', definition: 'Correspondance entre une longueur sur l’axe et une valeur de la grandeur (ex. 1 cm pour 2 h).' },
      { term: 'Phase', definition: 'Partie d’une courbe où la grandeur varie dans le même sens et à une vitesse comparable.' },
      { term: 'Plateau', definition: 'Partie d’une courbe où la grandeur mesurée reste constante.' },
      { term: 'Maximum', definition: 'Valeur la plus élevée atteinte par la grandeur mesurée.' },
      { term: 'Optimum', definition: 'Valeur de la variable pour laquelle la grandeur mesurée est maximale.' },
      { term: 'Pente', definition: 'Inclinaison de la courbe, qui traduit la vitesse de variation.' },
      { term: 'Extrapolation', definition: 'Prolongement d’une courbe au-delà des mesures réalisées, à éviter.' },
      { term: 'Interpolation', definition: 'Lecture d’une valeur située entre deux points de mesure.' },
      { term: 'Courbe d’étalonnage', definition: 'Graphique obtenu avec des étalons de concentrations connues, qui sert à doser un échantillon.' },
      { term: 'Réplication', definition: 'Copie de l’ADN pendant la phase S, qui double la quantité d’ADN de la cellule.' },
      { term: 'HGPO', definition: 'Hyperglycémie provoquée par voie orale : suivi de la glycémie après l’ingestion de 75 g de glucose.' },
    ],
    mistakes: [
      { wrong: 'Commenter la forme de la courbe sans avoir lu les axes et les unités.', right: 'Lire d’abord le titre, les grandeurs, les unités et l’échelle.' },
      { wrong: 'Décrire la courbe point par point.', right: 'Regrouper les points en phases et chiffrer chaque phase.' },
      { wrong: 'Écrire « la courbe augmente ».', right: 'Écrire « entre 0 et 30 min, la glycémie augmente de 0,85 à 1,40 g/L » : c’est la grandeur qui varie.' },
      { wrong: 'Graduer les axes avec les valeurs du tableau.', right: 'Choisir une graduation régulière et une échelle simple.' },
      { wrong: 'Prolonger la courbe au-delà du dernier point ou lire une concentration hors de la gamme d’étalonnage.', right: 'Ne jamais extrapoler : diluer l’échantillon si besoin.' },
      { wrong: 'Conclure qu’une grandeur cause l’autre parce qu’elles varient en même temps.', right: 'Parler de relation chronologique ; seule une expérience prouve la causalité.' },
    ],
    quiz: [
      { question: 'Sur un graphique « activité enzymatique en fonction de la température », la température est portée :', choices: ['En ordonnées', 'En abscisses', 'Sur les deux axes', 'Dans la légende'], answer: 1, explanation: 'La variable choisie (température) est en abscisses, la grandeur mesurée (activité) en ordonnées.' },
      { question: 'L’optimum d’une enzyme correspond :', choices: ['À l’activité la plus faible', 'À la valeur de la variable pour laquelle l’activité est maximale', 'À la température de dénaturation', 'Au début de la courbe'], answer: 1, explanation: 'L’optimum est la valeur de x (température, pH) donnant l’activité maximale.' },
      { question: 'En 30 min, la glycémie passe de 0,85 à 1,40 g/L. La vitesse moyenne d’augmentation est d’environ :', choices: ['0,018 g/L par minute', '0,55 g/L par minute', '1,8 g/L par minute', '30 g/L par minute'], answer: 0, explanation: '(1,40 − 0,85) ÷ 30 ≈ 0,018 g/L par minute.' },
      { question: 'Pendant la phase S du cycle cellulaire, la quantité d’ADN par cellule :', choices: ['Diminue de moitié', 'Reste constante', 'Double progressivement', 'Devient nulle'], answer: 2, explanation: 'La réplication de l’ADN double sa quantité pendant la phase S.' },
      { question: 'À la fin d’une méiose, chaque gamète contient, par rapport à une cellule en G1 :', choices: ['Deux fois plus d’ADN', 'La même quantité d’ADN', 'Deux fois moins d’ADN', 'Quatre fois moins d’ADN'], answer: 2, explanation: 'Après réplication (×2) puis deux divisions (÷2 ÷2), un gamète contient la moitié de la quantité d’ADN d’une cellule en G1.' },
      { question: 'Lors du tracé d’une courbe, il faut :', choices: ['Graduer les axes avec les valeurs du tableau', 'Prolonger la courbe au-delà des mesures', 'Indiquer la grandeur et l’unité sur chaque axe', 'Relier les points à main levée sans règle ni soin'], answer: 2, explanation: 'Chaque axe porte le nom de la grandeur et son unité ; les graduations sont régulières.' },
      { question: 'Un sérum a une absorbance supérieure à celle de l’étalon le plus concentré. Que faut-il faire ?', choices: ['Prolonger la droite d’étalonnage', 'Diluer le sérum et refaire la mesure', 'Arrondir à la valeur maximale', 'Ignorer le résultat'], answer: 1, explanation: 'On ne lit une concentration que dans le domaine des étalons : on dilue, on mesure, puis on multiplie par le facteur de dilution.' },
      { question: 'Le pic de LH précède l’ovulation. On peut en conclure, avec ces seules courbes, que :', choices: ['La LH déclenche certainement l’ovulation', 'Le pic de LH et l’ovulation sont liés chronologiquement', 'L’ovulation provoque le pic de LH', 'La LH n’a aucun rôle'], answer: 1, explanation: 'Des courbes montrent une relation chronologique ; une expérience est nécessaire pour prouver la causalité.' },
    ],
    exercises: [
      {
        title: 'Comparer deux enzymes digestives',
        statement: [
          'On mesure l’activité (en % de l’activité maximale) de deux enzymes digestives en fonction du pH, à 37 °C.',
          'Pepsine : pH 1 : 60 % ; pH 2 : 100 % ; pH 3 : 80 % ; pH 4 : 40 % ; pH 5 : 10 % ; pH 6 : 0 %.',
          'Trypsine : pH 5 : 10 % ; pH 6 : 40 % ; pH 7 : 80 % ; pH 8 : 100 % ; pH 9 : 75 % ; pH 10 : 30 %.',
          'a) Indique comment tu tracerais ces deux courbes sur un même graphique. b) Détermine le pH optimal de chaque enzyme. c) Sachant que la pepsine agit dans l’estomac et la trypsine dans l’intestin grêle, interprète ces résultats.',
        ],
        answer: [
          'a) pH en abscisses (0 à 11, 1 cm par unité), activité en ordonnées (0 à 100 %, 1 cm pour 10 %) ; deux courbes avec des symboles ou des traits différents et une légende ; titre « Activité de la pepsine et de la trypsine en fonction du pH ».',
          'b) pH optimal de la pepsine : 2 ; pH optimal de la trypsine : 8.',
          'c) Chaque enzyme est la plus active au pH de son lieu d’action : le contenu de l’estomac est très acide (pH proche de 2), celui de l’intestin grêle est légèrement basique (pH proche de 8). La pepsine, inactive à pH 6, ne digère plus les protéines dans l’intestin ; la trypsine prend le relais.',
        ],
      },
      {
        title: 'Corriger un graphique',
        statement: 'Un élève a tracé la quantité d’ADN au cours d’un cycle cellulaire. Ses axes ne sont pas fléchés, l’axe des ordonnées porte seulement « ADN », l’axe des abscisses est gradué 0, 11, 13, 15, 17, 19, 24, et la fin de la mitose est représentée par un trait oblique de 24 à 32 h. Relève les erreurs et corrige-les.',
        answer: [
          'Axes non fléchés : ajouter une flèche au bout de chaque axe.',
          'Grandeur incomplète : écrire « Quantité d’ADN par cellule (unités arbitraires) » et « Temps (h) ».',
          'Graduation irrégulière reprenant les valeurs du tableau : graduer régulièrement (par exemple tous les 2 h).',
          'Trait oblique : la quantité d’ADN chute brutalement à la division ; tracer un segment vertical à 24 h, puis un palier à 10 u.a.',
          'Il manque aussi le titre « Évolution de la quantité d’ADN par cellule au cours du cycle cellulaire ».',
        ],
      },
      {
        title: 'Lire et calculer',
        statement: 'Sur la courbe de l’HGPO, détermine pour le sujet B la vitesse moyenne de diminution de la glycémie entre 90 et 180 min, puis compare-la à celle du sujet A entre 30 et 150 min (environ −0,005 g/L par minute).',
        answer: 'Sujet B : v = (1,85 − 2,45) ÷ (180 − 90) = −0,60 ÷ 90 ≈ −0,007 g/L par minute. La vitesse de diminution est du même ordre que chez le sujet A, mais elle part d’une valeur beaucoup plus haute et commence plus tard (à 90 min au lieu de 30 min) : à 180 min, la glycémie du sujet B reste très supérieure à sa valeur de consigne.',
      },
    ],
    selfCheck: [
      'Je sais identifier la variable choisie, la grandeur mesurée, les unités et l’échelle d’un graphique.',
      'Je sais lire une valeur sur une courbe et déterminer une valeur par lecture graphique.',
      'Je sais décrire une courbe en phases chiffrées.',
      'Je sais comparer deux courbes critère par critère et interpréter les différences.',
      'Je sais tracer une courbe en respectant toutes les règles.',
      'Je sais tracer et expliquer l’évolution de la quantité d’ADN au cours de la mitose et de la méiose.',
      'Je sais utiliser une courbe d’étalonnage sans extrapoler.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Cycle cellulaire — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cycle_cellulaire' },
      { title: 'Cycle menstruel — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cycle_menstruel' },
      { title: 'Diabète de type 2 — Inserm', url: 'https://www.inserm.fr/dossier/diabete-type-2/' },
    ],
  },
};

export default lesson;
