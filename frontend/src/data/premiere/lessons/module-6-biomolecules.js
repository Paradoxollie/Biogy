import { img } from '../media';
import tests from '../../../assets/courses/premiere/module-6-biomolecules/tests.webp';
import temoins from '../../../assets/courses/premiere/module-6-biomolecules/temoins.webp';
import spectro from '../../../assets/courses/premiere/module-6-biomolecules/spectrophotometre.webp';
import cuve from '../../../assets/courses/premiere/module-6-biomolecules/cuve.webp';
import pal from '../../../assets/courses/premiere/module-6-biomolecules/pal-lait.webp';

const IMG = {
  tests: img(tests, 'Portoir de tubes à essais montrant des résultats de tests : bleu clair, violet, bleu-noir, jaune pâle et un précipité rouge brique au fond d’un tube.', 'photo', 1536, 1024),
  temoins: img(temoins, 'Trois tubes après ajout du réactif du biuret : témoin négatif bleu pâle, témoin positif violet, échantillon violet.', 'schema', 1400, 933),
  spectro: img(spectro, 'Schéma de principe d’un spectrophotomètre : source de lumière blanche, monochromateur, lumière monochromatique, cuve, détecteur, afficheur.', 'schema', 1400, 933),
  cuve: img(cuve, 'Cuve de spectrophotométrie légendée : faces lisses traversées par le faisceau lumineux, faces dépolies, trajet optique de 1 cm, niveau de remplissage.', 'schema', 1254, 1254),
  pal: img(pal, 'Tubes de lait dans un bain-marie : un tube est devenu jaune vif, les autres sont restés blancs.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'module-6-biomolecules',
  duration: 'Environ 4 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.tests,
    question: 'Ce lait contient-il des protéines ? Cette banane contient-elle encore de l’amidon ? Ce lait a-t-il vraiment été pasteurisé ? Comment répondre en quelques minutes, avec quelques gouttes de réactif ?',
    text: 'Les biomolécules sont invisibles, mais chacune possède des propriétés qui la trahissent : elle réagit avec un réactif en donnant une couleur, elle absorbe certaines couleurs de la lumière, ou, pour une enzyme, elle transforme une autre molécule. Dans ce chapitre, tu apprends à exploiter ces propriétés pour détecter une biomolécule, et surtout à interpréter un résultat avec rigueur grâce aux témoins.',
  },
  objectives: [
    'Identifier le réactif chimique d’une procédure et la biomolécule qu’il met en évidence.',
    'Analyser un résultat qualitatif en le comparant à un témoin positif et à un témoin négatif.',
    'Proposer une procédure opératoire de détection sous forme de tableau de manipulation.',
    'Choisir la cuve adaptée, réaliser un spectre d’absorption et déterminer la longueur d’onde optimale.',
    'Détecter une enzyme par son activité à pH et température fixés, et vérifier sa spécificité de substrat.',
  ],
  prerequisites: [
    'Les grandes familles de biomolécules : glucides, acides aminés et protéines, lipides, acides nucléiques (biochimie-biologie).',
    'La lumière blanche est un mélange de radiations de longueurs d’onde différentes (physique-chimie).',
    'Préparer une solution et une dilution (module 5).',
  ],
  program: [
    'Identifier le réactif chimique dans une procédure ; analyser un résultat qualitatif ; proposer une procédure opératoire de détection.',
    'Choisir le type de cuve adapté à la procédure opératoire ; réaliser un spectre d’absorption ; déterminer la longueur d’onde optimale.',
    'Identifier le ou les substrats spécifiques de l’enzyme recherchée ; mettre en œuvre la détection de l’enzyme à pH et température fixés ; analyser un résultat qualitatif.',
    'Notions : spécificité du réactif, témoin positif, témoin négatif, spectre d’absorption, absorbance maximale, longueur d’onde optimale, zéro de l’appareil, test qualitatif, réaction enzymatique, pH optimal, température optimale.',
  ],

  course: {
    parts: [
      {
        title: 'Détecter une biomolécule : une approche qualitative',
        intro: 'Détecter, c’est répondre à la question « est-elle présente ? », pas à la question « combien y en a-t-il ? ».',
        blocks: [
          { type: 'definition', term: 'Biomolécule', text: 'molécule fabriquée par les êtres vivants, construite principalement à partir de carbone, d’hydrogène, d’oxygène et d’azote : glucides, lipides, acides aminés et protéines, acides nucléiques.' },
          {
            type: 'table',
            caption: 'Les biomolécules recherchées en première',
            head: ['Famille', 'Exemples', 'Où les trouver ?'],
            rows: [
              ['Glucides simples (oses et diholosides)', 'Glucose, fructose, lactose, saccharose, maltose', 'Fruits, miel, lait, sucre de table'],
              ['Glucides complexes (polyosides)', 'Amidon (végétaux), glycogène (animaux)', 'Pomme de terre, céréales, banane verte, foie'],
              ['Acides aminés', 'Glycine, lysine, acide aspartique…', 'Libres en petite quantité ; produits de la digestion des protéines'],
              ['Protéines', 'Albumine, caséine, enzymes', 'Blanc d’œuf, lait, viande, légumineuses'],
            ],
          },
          { type: 'definition', term: 'Test qualitatif', text: 'test qui indique la **présence ou l’absence** d’une biomolécule (ou d’une activité) dans un échantillon, **sans mesurer sa quantité** ni sa concentration. Le dosage, qui mesure une concentration, est étudié au module 8.' },
          {
            type: 'cards',
            items: [
              { title: 'Un réactif chimique', text: 'Le réactif réagit avec un groupement chimique de la biomolécule et donne une **couleur** ou un **précipité** (biuret, lugol, liqueur de Fehling, ninhydrine).', tone: 'blue' },
              { title: 'Une propriété physique', text: 'Une biomolécule **chromophore** absorbe certaines radiations lumineuses : son **spectre d’absorption** la caractérise.', tone: 'green' },
              { title: 'Une activité biologique', text: 'Une **enzyme** se repère à ce qu’elle fait : elle transforme son **substrat** en un produit détectable.', tone: 'yellow' },
            ],
          },
          { type: 'p', text: 'Ces tests servent tous les jours en biotechnologies : contrôle de la composition d’un aliment, vérification d’un traitement thermique, suivi d’une purification, recherche de glucose dans les urines avec une bandelette.' },
          {
            type: 'retenir',
            items: [
              'Un test de **détection** est **qualitatif** : il dit si la biomolécule est présente, pas en quelle quantité.',
              'Trois stratégies : un **réactif chimique**, le **spectre d’absorption** d’un chromophore, l’**activité** d’une enzyme.',
            ],
          },
        ],
      },

      {
        title: 'Détecter une biomolécule avec un réactif chimique',
        intro: 'Chaque réactif reconnaît une structure chimique précise : encore faut-il savoir laquelle.',
        blocks: [
          { type: 'p', text: 'Un réactif de détection réagit avec un **groupement chimique caractéristique** de la biomolécule (les liaisons peptidiques des protéines, la fonction amine des acides aminés, le pouvoir réducteur de certains glucides, la structure en hélice de l’amidon). La réaction produit un **changement de couleur** ou un **précipité** visible à l’œil nu.' },
          { type: 'figure', image: IMG.tests, caption: 'Quelques résultats de tests : réactif du biuret négatif (bleu) et positif (violet), eau iodée positive (bleu-noir) et négative (jaune pâle, couleur de l’eau iodée diluée), liqueur de Fehling positive (précipité rouge brique).', size: 'wide' },
          {
            type: 'table',
            caption: 'Les principaux réactifs de détection',
            head: ['Réactif', 'Biomolécule détectée', 'Conditions', 'Résultat positif', 'Résultat négatif'],
            rows: [
              ['Réactif du biuret (sulfate de cuivre en milieu basique)', '**Protéines** et peptides (au moins deux liaisons peptidiques)', 'À froid, 10 à 15 min', 'Coloration **violette**', 'Coloration **bleue** (couleur du réactif)'],
              ['Ninhydrine', '**Acides aminés** (fonction amine libre)', 'Chauffage au bain-marie bouillant, quelques minutes', 'Coloration **violet-pourpre** (jaune avec la proline)', 'Pas de coloration violette'],
              ['Liqueur de Fehling (ions cuivre en milieu basique)', '**Glucides réducteurs** : glucose, fructose, lactose, maltose', 'Chauffage au bain-marie bouillant, 5 min', '**Précipité rouge brique** (oxyde de cuivre)', 'Reste **bleu**, sans précipité'],
              ['Bandelette réactive « glucose » (glucose oxydase)', '**Glucose** uniquement', 'À froid, lecture au temps indiqué', 'Changement de couleur de la zone réactive', 'Pas de changement de couleur'],
              ['Eau iodée (lugol)', '**Amidon**', 'À froid, immédiat', 'Coloration **bleu-noir**', 'Coloration **jaune orangé** (couleur de l’eau iodée)'],
            ],
          },
          { type: 'definition', term: 'Spécificité d’un réactif', text: 'capacité d’un réactif à ne réagir **qu’avec une seule biomolécule** (ou une seule famille). Plus un réactif est spécifique, plus le résultat positif désigne précisément la molécule recherchée.' },
          {
            type: 'compare',
            title: 'Rechercher du glucose : deux réactifs de spécificités différentes',
            columns: [
              { title: 'Liqueur de Fehling', subtitle: 'Peu spécifique', items: ['Réagit avec **tous les glucides réducteurs** : glucose, fructose, lactose, maltose.', 'Un résultat positif signifie « présence d’au moins un glucide réducteur », pas forcément de glucose.', 'Le saccharose (sucre de table) et l’amidon ne sont pas réducteurs : résultat négatif.'] },
              { title: 'Bandelette à glucose oxydase', subtitle: 'Très spécifique', items: ['Contient une **enzyme**, la glucose oxydase, qui n’agit que sur le glucose.', 'Un résultat positif signifie « présence de glucose ».', 'Utilisée pour rechercher le glucose dans les urines (diabète).'] },
            ],
          },
          { type: 'p', text: 'De même, le réactif du biuret ne réagit qu’à partir de **deux liaisons peptidiques** : il détecte les protéines et les peptides, mais **pas les acides aminés libres**. Pour ceux-ci, on utilise la **ninhydrine**, qui réagit avec leur fonction amine.' },
          { type: 'warning', title: 'Sécurité', text: ['Le réactif du biuret et la liqueur de Fehling contiennent de la **soude** (corrosive) et du sulfate de cuivre : blouse, **lunettes** et gants.', 'La ninhydrine est nocive et colore la peau en violet (elle réagit avec les acides aminés de la peau !) : gants obligatoires.', 'Au bain-marie bouillant, les tubes ne sont **jamais bouchés** et leur ouverture est dirigée vers le mur, pas vers un voisin.'] },
          {
            type: 'retenir',
            items: [
              '**Biuret** → protéines (violet) ; **ninhydrine** → acides aminés (violet-pourpre, à chaud) ; **lugol** → amidon (bleu-noir).',
              '**Liqueur de Fehling** → glucides réducteurs (précipité rouge brique, à chaud) ; **glucose oxydase** → glucose seulement.',
              'Un réactif est plus ou moins **spécifique** : il faut savoir exactement ce qu’un résultat positif permet de conclure.',
            ],
          },
        ],
      },

      {
        title: 'Les témoins : interpréter un résultat sans se tromper',
        intro: 'Un tube coloré ne veut rien dire tout seul : on le compare toujours à des témoins traités exactement de la même façon.',
        blocks: [
          { type: 'definition', term: 'Témoin positif', text: 'tube contenant une solution qui **contient la biomolécule recherchée** (par exemple une solution d’albumine pour le biuret), traité exactement comme l’échantillon. Il montre l’aspect d’un résultat positif et **prouve que le réactif et les conditions fonctionnent**.' },
          { type: 'definition', term: 'Témoin négatif', text: 'tube **sans la biomolécule** (eau distillée ou solvant de l’échantillon) traité exactement comme l’échantillon. Il montre la couleur du réactif seul et **vérifie l’absence de contamination**.' },
          { type: 'figure', image: IMG.temoins, caption: 'Test du biuret : l’échantillon a la même couleur violette que le témoin positif et diffère du témoin négatif. Il contient des protéines.', size: 'normal' },
          {
            type: 'table',
            caption: 'Analyser un résultat qualitatif',
            head: ['Témoin positif', 'Témoin négatif', 'Échantillon', 'Conclusion'],
            rows: [
              ['Positif', 'Négatif', 'Positif', 'Le test est **valide** : la biomolécule est **présente**.'],
              ['Positif', 'Négatif', 'Négatif', 'Le test est valide : biomolécule **absente** ou en quantité **inférieure au seuil de détection**.'],
              ['Négatif', 'Négatif', 'Quelconque', 'Test **non valide** : réactif périmé, mauvaises conditions (pH, chauffage, durée). On recommence.'],
              ['Positif', 'Positif', 'Quelconque', 'Test **non valide** : contamination (eau, verrerie, réactif). On recommence.'],
            ],
          },
          { type: 'definition', term: 'Seuil de détection', text: 'plus petite quantité (ou concentration) de biomolécule que le test permet de mettre en évidence. Un résultat négatif ne prouve donc pas une absence totale : il indique que la biomolécule est **absente ou en dessous du seuil**.' },
          { type: 'p', text: 'Sans témoins, on risque deux erreurs : un **faux positif** (on conclut à la présence alors que la couleur vient d’une contamination ou d’une autre molécule) ou un **faux négatif** (on conclut à l’absence alors que le réactif ne fonctionnait pas).' },
          {
            type: 'steps',
            title: 'Proposer une procédure opératoire de détection',
            items: [
              { title: 'Identifier la cible', text: 'Quelle biomolécule rechercher ? Quel réactif est spécifique de cette biomolécule ?' },
              { title: 'Préparer l’échantillon', text: 'L’obtenir sous forme liquide et limpide : broyer un aliment solide dans de l’eau distillée, filtrer si besoin, diluer s’il est très concentré ou très coloré.' },
              { title: 'Prévoir les tubes', text: 'Au minimum : un **témoin négatif**, un **témoin positif** et l’**échantillon**, avec des volumes identiques.' },
              { title: 'Fixer les conditions', text: 'Volume de réactif, température (froid ou bain-marie), durée, ordre des ajouts.' },
              { title: 'Prévoir la lecture', text: 'Résultat attendu pour un test positif et pour un test négatif ; comparer l’échantillon aux deux témoins.' },
            ],
          },
          {
            type: 'table',
            caption: 'Exemple de tableau de manipulation : recherche de protéines dans un lait',
            head: ['Tube', 'Témoin négatif', 'Témoin positif', 'Échantillon'],
            rows: [
              ['Eau distillée', '2 mL', '—', '—'],
              ['Solution d’albumine à 10 g·L^-1^', '—', '2 mL', '—'],
              ['Lait dilué au 1/10', '—', '—', '2 mL'],
              ['Réactif du biuret', '2 mL', '2 mL', '2 mL'],
              ['Conditions', 'Agiter, 15 min à température ambiante', 'Idem', 'Idem'],
              ['Résultat attendu', 'Bleu', 'Violet', 'À comparer aux témoins'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Le **témoin positif** vérifie que le test fonctionne ; le **témoin négatif** montre le réactif seul et détecte une contamination.',
              'On conclut seulement si les deux témoins donnent le résultat attendu.',
              'Un résultat négatif signifie « absent ou sous le **seuil de détection** ».',
              'Une procédure de détection se présente sous forme d’un **tableau de manipulation**.',
            ],
          },
        ],
      },

      {
        title: 'Caractériser une biomolécule chromophore par son spectre',
        intro: 'Certaines molécules colorées absorbent la lumière d’une manière qui leur est propre : leur spectre est comme une signature.',
        blocks: [
          { type: 'definition', term: 'Chromophore', text: 'molécule (ou partie de molécule) qui **absorbe certaines radiations lumineuses**. Exemples : la chlorophylle, le carotène, l’hémoglobine, les colorants alimentaires. L’ADN et les protéines absorbent dans l’ultraviolet, invisible pour l’œil.' },
          { type: 'p', text: 'Une solution colorée absorbe surtout les radiations de la couleur **complémentaire** de celle qu’on voit. Une solution **bleue** absorbe surtout dans l’orangé et le rouge (vers 600 à 650 nm) ; une solution **jaune** absorbe dans le bleu et le violet (vers 420 à 450 nm) ; la chlorophylle absorbe le bleu et le rouge et laisse passer le vert.' },
          { type: 'figure', image: IMG.spectro, caption: 'Principe du spectrophotomètre : le monochromateur sélectionne une seule longueur d’onde, la lumière traverse la cuve, le détecteur mesure la lumière transmise et l’afficheur donne l’absorbance.', size: 'wide' },
          { type: 'definition', term: 'Absorbance', text: 'grandeur **sans unité**, notée **A**, mesurée par le spectrophotomètre à une longueur d’onde donnée. Elle est d’autant plus grande que la solution absorbe la lumière : A = log(I~0~ ÷ I), où I~0~ est l’intensité de la lumière qui entre dans la cuve et I celle qui en sort.' },
          { type: 'definition', term: 'Zéro de l’appareil', text: 'réglage qui consiste à afficher **A = 0** avec une cuve contenant le **blanc** (le solvant, ou les réactifs sans la biomolécule). Ainsi, l’absorbance mesurée ensuite est due uniquement au chromophore, et non au solvant ou à la cuve.' },
          { type: 'definition', term: 'Spectre d’absorption', text: 'courbe représentant l’**absorbance en fonction de la longueur d’onde**, A = f(λ). La position de ses maximums est caractéristique du chromophore.' },
          { type: 'definition', term: 'Longueur d’onde optimale', text: 'longueur d’onde, notée **λ~max~**, pour laquelle l’absorbance est **maximale**. C’est là que la mesure est la plus sensible ; on la choisit pour les dosages au spectrophotomètre (module 8).' },
          {
            type: 'table',
            caption: 'Choisir le type de cuve',
            head: ['Matériau de la cuve', 'Transparente environ à partir de', 'Utilisation'],
            rows: [
              ['Plastique (polystyrène)', '340 nm', 'Visible : colorants, dosages colorimétriques ; jetable'],
              ['Verre optique', '340 nm', 'Visible ; réutilisable'],
              ['Quartz (silice)', '190 nm', '**Ultraviolet** et visible : ADN (260 nm), protéines (280 nm)'],
            ],
          },
          { type: 'figure', image: IMG.cuve, caption: 'Une cuve de spectrophotométrie : le faisceau doit traverser les faces lisses ; on tient la cuve par les faces dépolies. Le trajet optique standard est de 1 cm.', size: 'small' },
          {
            type: 'steps',
            title: 'Réaliser un spectre d’absorption',
            items: [
              { title: 'Préparer', text: 'Allumer le spectrophotomètre quelques minutes avant la mesure. Remplir une cuve de blanc et une cuve de solution, aux trois quarts environ.' },
              { title: 'Régler la première longueur d’onde', text: 'Par exemple 400 nm pour un spectre dans le visible.' },
              { title: 'Faire le zéro', text: 'Placer la cuve de blanc, faces lisses dans l’axe du faisceau, et régler A = 0.' },
              { title: 'Mesurer', text: 'Remplacer le blanc par la solution et noter l’absorbance.' },
              { title: 'Recommencer', text: 'Changer de longueur d’onde (tous les 20 nm, puis tous les 5 ou 10 nm près du maximum) et **refaire le zéro à chaque longueur d’onde** avant de mesurer.' },
              { title: 'Exploiter', text: 'Tracer A = f(λ) et lire λ~max~ au sommet de la courbe.' },
            ],
          },
          { type: 'warning', title: 'Les gestes qui comptent', text: ['Tenir la cuve par les **faces dépolies** : une trace de doigt sur une face lisse absorbe la lumière.', 'Pas de bulles, faces lisses propres et sèches (essuyées avec un papier doux), cuve remplie au-dessus du trajet du faisceau.', 'Refaire le zéro à chaque changement de longueur d’onde : l’absorbance du blanc varie avec λ.'] },
          { type: 'example', title: 'deux colorants alimentaires', text: 'Le bleu brillant (E133) a un maximum d’absorption vers **630 nm** : il absorbe le rouge-orangé et paraît bleu. La tartrazine (E102) a un maximum vers **425 nm** : elle absorbe le bleu-violet et paraît jaune. Une boisson verte qui présente deux maximums, vers 425 nm et 630 nm, contient très probablement ces deux colorants.' },
          {
            type: 'retenir',
            items: [
              'Un chromophore absorbe certaines radiations ; son **spectre** A = f(λ) le caractérise.',
              'On fait le **zéro avec le blanc** à chaque longueur d’onde ; l’absorbance n’a pas d’unité.',
              'La **longueur d’onde optimale** λ~max~ correspond à l’absorbance maximale.',
              'Cuve en plastique ou en verre pour le visible, cuve en **quartz** pour l’ultraviolet ; on la tient par les faces dépolies.',
            ],
          },
        ],
      },

      {
        title: 'Détecter une enzyme par son activité',
        intro: 'Une enzyme est souvent présente en quantité infime : on la repère grâce à ce qu’elle fabrique.',
        blocks: [
          { type: 'definition', term: 'Enzyme', text: 'protéine qui **catalyse** (accélère) une réaction chimique précise, sans être consommée. La molécule transformée est le **substrat** ; la molécule formée est le **produit**.' },
          { type: 'definition', term: 'Spécificité de substrat', text: 'une enzyme n’agit que sur **un substrat** (ou quelques substrats de structure très proche). Par exemple, la glucose oxydase transforme le glucose mais pas le galactose, qui ne diffère du glucose que par l’orientation d’un seul groupement –OH.' },
          { type: 'p', text: 'Pour détecter une enzyme, on met l’échantillon en présence de son **substrat spécifique** et on observe l’apparition du **produit**. On choisit souvent un substrat **chromogène** : incolore au départ, il donne un produit **coloré** quand l’enzyme agit. C’est un **test qualitatif** de l’activité enzymatique.' },
          { type: 'definition', term: 'pH optimal et température optimale', text: 'valeurs de pH et de température pour lesquelles l’activité de l’enzyme est **maximale**. On réalise donc la détection dans un **tampon** au pH optimal et dans un **bain-marie** à la température optimale. Une température trop élevée **dénature** l’enzyme, qui perd définitivement son activité.' },
          {
            type: 'table',
            caption: 'Deux enzymes du lait recherchées en contrôle qualité',
            head: ['Enzyme', 'Substrat(s)', 'Conditions', 'Résultat positif'],
            rows: [
              ['Phosphatase alcaline (**PAL**)', 'Paranitrophénylphosphate (incolore)', 'Tampon basique (pH voisin de 10), 37 °C', 'Coloration **jaune** (paranitrophénol libéré)'],
              ['Peroxydase (**POD**)', 'Peroxyde d’hydrogène (H~2~O~2~) et gaïacol (chromogène)', 'pH proche de la neutralité, température ambiante', 'Coloration **brun orangé**'],
            ],
          },
          { type: 'p', text: 'Ces deux enzymes sont naturellement présentes dans le lait cru, mais elles ne résistent pas à la même température. La PAL est détruite par une **pasteurisation** correcte (environ 72 °C pendant 15 s) ; la peroxydase résiste à ce traitement et n’est détruite qu’au-delà d’environ **80 °C**.' },
          {
            type: 'table',
            caption: 'Interpréter les tests PAL et POD sur un lait',
            head: ['Lait', 'Traitement thermique', 'PAL', 'POD'],
            rows: [
              ['Lait cru', 'Aucun', '+', '+'],
              ['Lait pasteurisé', 'Environ 72 °C, 15 s', '−', '+'],
              ['Lait UHT', '135 à 150 °C, quelques secondes', '−', '−'],
            ],
          },
          { type: 'figure', image: IMG.pal, caption: 'Recherche de la PAL : seul le lait cru donne une coloration jaune ; dans les laits chauffés, l’enzyme a été détruite.', size: 'wide' },
          { type: 'p', text: 'Les **témoins** ont ici aussi un rôle essentiel : le témoin positif est un lait cru (qui contient l’enzyme) ; le témoin négatif peut être le même lait **porté à ébullition** (enzyme dénaturée) ou de l’eau distillée. Il prouve que le substrat ne se colore pas tout seul, sans enzyme active.' },
          { type: 'note', title: 'Vérifier la spécificité de substrat', text: 'Pour montrer qu’une enzyme est spécifique, on remplace son substrat par une molécule **très proche**. Une bandelette à glucose oxydase plongée dans une solution de glucose change de couleur ; plongée dans une solution de galactose ou de fructose à la même concentration, elle ne change pas : l’enzyme ne reconnaît que le glucose.' },
          {
            type: 'retenir',
            items: [
              'Une enzyme se détecte par son **activité** : substrat spécifique + conditions de pH et de température fixées → produit détectable.',
              'PAL : paranitrophénylphosphate → jaune ; POD : H~2~O~2~ + gaïacol → brun orangé.',
              'Lait cru : PAL + et POD + ; pasteurisé : PAL − et POD + ; UHT : PAL − et POD −.',
              'Le témoin négatif (enzyme dénaturée par la chaleur) montre que la coloration est bien due à l’enzyme.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les documents présentent des résultats obtenus en travaux pratiques. Réponds d’abord seul(e), en phrases complètes : compare toujours l’échantillon aux témoins avant de conclure. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Rechercher les biomolécules de quelques aliments',
        duration: '30 min',
        skills: ['Analyser', 'Interpréter', 'Conclure'],
        context: 'Des élèves ont testé cinq échantillons avec trois réactifs. Pour chaque réactif, ils ont préparé un témoin négatif (eau distillée) et un témoin positif adapté.',
        documents: [
          {
            label: 'Document 1',
            title: 'Résultats de TP',
            blocks: [
              {
                type: 'table',
                head: ['Tube', 'Réactif du biuret', 'Eau iodée', 'Liqueur de Fehling (à chaud)'],
                rows: [
                  ['Témoin négatif (eau)', 'Bleu', 'Jaune orangé', 'Bleu, pas de précipité'],
                  ['Témoin positif', 'Violet (albumine)', 'Bleu-noir (amidon)', 'Précipité rouge brique (glucose)'],
                  ['Lait demi-écrémé', 'Violet', 'Jaune orangé', 'Précipité rouge brique'],
                  ['Blanc d’œuf dilué', 'Violet', 'Jaune orangé', 'Bleu, pas de précipité'],
                  ['Jus de raisin', 'Bleu', 'Jaune orangé', 'Précipité rouge brique'],
                  ['Eau de cuisson de pâtes', 'Bleu', 'Bleu-noir', 'Bleu, pas de précipité'],
                  ['Sucre de table dissous (saccharose)', 'Bleu', 'Jaune orangé', 'Bleu, pas de précipité'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Pour chaque réactif, indique la biomolécule (ou la famille) recherchée.', answer: 'Réactif du biuret : protéines. Eau iodée : amidon. Liqueur de Fehling : glucides réducteurs.' },
          { text: 'Les témoins permettent-ils de valider les trois tests ? Justifie.', hint: 'Chaque témoin donne-t-il le résultat attendu ?', answer: 'Oui : pour chaque réactif, le témoin négatif garde la couleur du réactif seul (bleu, jaune orangé, bleu sans précipité) et le témoin positif donne le résultat positif attendu (violet, bleu-noir, précipité rouge brique). Les réactifs fonctionnent et il n’y a pas de contamination : les tests sont valides.' },
          { text: 'Conclus sur la composition de chaque aliment.', answer: ['Lait : contient des protéines et au moins un glucide réducteur (le lactose) ; pas d’amidon détectable.', 'Blanc d’œuf : contient des protéines ; ni amidon ni glucide réducteur détectables.', 'Jus de raisin : contient au moins un glucide réducteur ; ni protéines ni amidon détectables.', 'Eau de cuisson des pâtes : contient de l’amidon ; ni protéines ni glucide réducteur détectables.', 'Saccharose : aucun des trois tests n’est positif.'] },
          { text: 'Le saccharose est un glucide. Pourquoi le test à la liqueur de Fehling est-il négatif ?', answer: 'La liqueur de Fehling ne détecte que les glucides réducteurs. Le saccharose n’est pas un glucide réducteur : il ne réagit pas, le test est négatif.' },
          { text: 'Un élève conclut : « le jus de raisin contient du glucose ». Ce résultat le prouve-t-il ? Propose un test permettant de conclure.', hint: 'Pense à la spécificité de la liqueur de Fehling.', answer: 'Non : la liqueur de Fehling réagit avec tous les glucides réducteurs (glucose, fructose, maltose…). On peut seulement conclure à la présence d’au moins un glucide réducteur. Pour prouver la présence de glucose, il faut un test spécifique : une bandelette à glucose oxydase.' },
          { text: 'Pourquoi peut-on seulement écrire « pas d’amidon détectable » pour le lait, et non « pas d’amidon » ?', answer: 'Un test négatif signifie que l’amidon est absent ou présent en quantité inférieure au seuil de détection du test.' },
        ],
      },
      {
        title: 'Proposer une procédure de détection : la banane mûrit',
        duration: '30 min',
        skills: ['Concevoir', 'Organiser', 'Prévoir'],
        context: 'Une banane verte est très riche en amidon. Pendant le mûrissement, l’amidon est progressivement hydrolysé en glucides plus petits (glucose, fructose, saccharose). On veut le montrer par des tests de détection.',
        documents: [
          {
            label: 'Document 2',
            title: 'Matériel et réactifs disponibles',
            blocks: [
              { type: 'list', items: ['Broyats filtrés de banane verte et de banane mûre (dans l’eau distillée).', 'Eau iodée, liqueur de Fehling, réactif du biuret.', 'Empois d’amidon à 10 g·L^-1^, solution de glucose à 10 g·L^-1^, eau distillée.', 'Tubes à essais, portoir, pipettes graduées, bain-marie bouillant, pinces en bois.'] },
            ],
          },
        ],
        questions: [
          { text: 'Quels réactifs choisis-tu ? Justifie.', answer: 'L’eau iodée pour détecter l’amidon et la liqueur de Fehling pour détecter les glucides réducteurs (glucose, fructose) formés pendant le mûrissement. Le réactif du biuret n’est pas utile : il détecte les protéines.' },
          { text: 'Construis le tableau de manipulation pour la recherche de l’amidon, avec les témoins.', hint: 'Quatre tubes : témoin négatif, témoin positif, banane verte, banane mûre ; mêmes volumes partout.', answer: ['Tube 1 (témoin négatif) : 2 mL d’eau distillée + 3 gouttes d’eau iodée.', 'Tube 2 (témoin positif) : 2 mL d’empois d’amidon + 3 gouttes d’eau iodée.', 'Tube 3 : 2 mL de broyat de banane verte + 3 gouttes d’eau iodée.', 'Tube 4 : 2 mL de broyat de banane mûre + 3 gouttes d’eau iodée.', 'Lecture immédiate, à froid : bleu-noir si positif, jaune orangé si négatif.'] },
          { text: 'Quel témoin positif choisis-tu pour la liqueur de Fehling ? Quelles conditions dois-tu respecter ?', answer: 'La solution de glucose à 10 g·L^-1^. Il faut chauffer les tubes au bain-marie bouillant pendant environ 5 minutes, tubes non bouchés, ouverture dirigée vers le mur, manipulés avec une pince en bois, avec blouse et lunettes.' },
          { text: 'Prévois les résultats attendus pour les deux bananes.', answer: 'Banane verte : eau iodée bleu-noir (beaucoup d’amidon) ; liqueur de Fehling peu ou pas de précipité. Banane mûre : eau iodée jaune orangé ou faiblement colorée (peu d’amidon) ; liqueur de Fehling : précipité rouge brique (glucides réducteurs).' },
          { text: 'Pourquoi faut-il utiliser les mêmes volumes dans tous les tubes ?', answer: 'Pour que la seule différence entre les tubes soit la présence ou l’absence de la biomolécule : on peut alors comparer les couleurs de manière fiable.' },
        ],
      },
      {
        title: 'Spectres d’absorption de colorants alimentaires',
        duration: '35 min',
        skills: ['Exploiter des données', 'Tracer', 'Raisonner'],
        context: 'On a mesuré l’absorbance de trois solutions au spectrophotomètre, en faisant le zéro avec de l’eau distillée à chaque longueur d’onde : une solution de bleu brillant (E133), une solution de tartrazine (E102, jaune) et une boisson verte du commerce, diluée.',
        documents: [
          {
            label: 'Document 3',
            title: 'Absorbances mesurées en TP',
            blocks: [
              {
                type: 'table',
                head: ['λ (nm)', 'E133 (bleu)', 'E102 (jaune)', 'Boisson verte'],
                rows: [
                  ['400', '0,06', '0,48', '0,46'],
                  ['425', '0,04', '0,55', '0,50'],
                  ['450', '0,03', '0,47', '0,43'],
                  ['500', '0,04', '0,10', '0,12'],
                  ['550', '0,14', '0,01', '0,13'],
                  ['600', '0,45', '0,00', '0,40'],
                  ['630', '0,62', '0,00', '0,55'],
                  ['660', '0,30', '0,00', '0,26'],
                  ['700', '0,03', '0,00', '0,03'],
                ],
              },
            ],
          },
          { label: 'Document 4', title: 'Une cuve de spectrophotométrie', image: IMG.cuve, caption: 'Cuve en plastique, trajet optique de 1 cm.', size: 'small' },
        ],
        questions: [
          { text: 'Ces mesures sont faites entre 400 et 700 nm. Une cuve en plastique convient-elle ? Justifie.', answer: 'Oui : les mesures sont dans le visible et une cuve en plastique est transparente à partir d’environ 340 nm. Une cuve en quartz serait nécessaire seulement pour des mesures dans l’ultraviolet.' },
          { text: 'Pourquoi refait-on le zéro avec de l’eau distillée à chaque longueur d’onde ?', answer: 'Pour que l’absorbance mesurée soit due uniquement au colorant : l’absorbance de l’eau et de la cuve varie avec la longueur d’onde, on la soustrait en réglant A = 0 avec le blanc avant chaque mesure.' },
          { text: 'Trace (sur papier ou au tableur) le spectre de E133 et détermine sa longueur d’onde optimale.', hint: 'Place λ en abscisse et A en ordonnée ; cherche le sommet de la courbe.', answer: 'Le spectre présente un maximum net à λ~max~ = 630 nm (A = 0,62). C’est la longueur d’onde optimale de E133.' },
          { text: 'Relie la longueur d’onde optimale de chaque colorant à sa couleur.', answer: 'E133 absorbe surtout vers 630 nm (orangé-rouge) : il paraît bleu, couleur complémentaire. E102 absorbe surtout vers 425 nm (bleu-violet) : il paraît jaune.' },
          { text: 'Quels colorants la boisson verte contient-elle probablement ? Argumente.', answer: 'Son spectre présente deux maximums, vers 425 nm et vers 630 nm, aux mêmes longueurs d’onde que les maximums de E102 et de E133. La boisson contient très probablement de la tartrazine et du bleu brillant : jaune + bleu donnent une couleur verte.' },
          { text: 'Pour mesurer la concentration de E133 dans une boisson bleue, à quelle longueur d’onde faudrait-il régler le spectrophotomètre ? Pourquoi ?', answer: 'À 630 nm, la longueur d’onde optimale : l’absorbance y est maximale, donc la mesure est la plus sensible, et une petite erreur de réglage de λ change peu l’absorbance car le sommet de la courbe est plat.' },
        ],
      },
      {
        title: 'Lait cru ou lait pasteurisé ? Détecter la PAL et la POD',
        duration: '30 min',
        skills: ['Exploiter une fiche technique', 'Interpréter', 'Argumenter'],
        context: 'Un fromager doit utiliser un lait cru pour fabriquer un fromage « au lait cru ». Trois laits X, Y et Z, dont l’origine est inconnue, sont testés au laboratoire.',
        documents: [
          {
            label: 'Document 5',
            title: 'Extraits des fiches techniques',
            text: ['Recherche de la PAL : dans un tube, mélanger 1 mL de lait et 5 mL de tampon pH 10 contenant du paranitrophénylphosphate. Incuber 30 min au bain-marie à 37 °C. Une coloration jaune indique une activité phosphatase alcaline.', 'Recherche de la POD : dans un tube, mélanger 2 mL de lait, 1 mL de solution de gaïacol et 2 gouttes de peroxyde d’hydrogène dilué. Observer après quelques minutes à température ambiante. Une coloration brun orangé indique une activité peroxydase.'],
          },
          {
            label: 'Document 6',
            title: 'Résultats de TP',
            blocks: [
              {
                type: 'table',
                head: ['Tube', 'Recherche de la PAL', 'Recherche de la POD'],
                rows: [
                  ['Témoin positif (lait cru)', 'Jaune', 'Brun orangé'],
                  ['Témoin négatif (lait cru bouilli 5 min)', 'Blanc', 'Blanc'],
                  ['Lait X', 'Blanc', 'Brun orangé'],
                  ['Lait Y', 'Jaune', 'Brun orangé'],
                  ['Lait Z', 'Blanc', 'Blanc'],
                ],
              },
            ],
          },
          { label: 'Document 7', title: 'Recherche de la PAL au bain-marie', image: IMG.pal, caption: 'Tubes de lait après 30 min d’incubation à 37 °C.' },
        ],
        questions: [
          { text: 'Identifie le substrat de chaque enzyme dans les fiches techniques.', answer: 'PAL : le paranitrophénylphosphate. POD : le peroxyde d’hydrogène (H~2~O~2~), avec le gaïacol comme molécule chromogène qui se colore.' },
          { text: 'Pourquoi la recherche de la PAL se fait-elle dans un tampon pH 10 et à 37 °C ?', answer: 'Pour se placer dans des conditions proches du pH optimal (basique, d’où le nom « alcaline ») et d’une température favorable à l’activité de l’enzyme. Dans ces conditions, l’enzyme est la plus active et le test est plus sensible.' },
          { text: 'Explique le rôle du témoin négatif « lait cru bouilli ».', answer: 'L’ébullition dénature les enzymes du lait. Ce tube contient le même lait et le même substrat, mais sans enzyme active : il reste blanc, ce qui prouve que la coloration des autres tubes est due à l’activité enzymatique et non à une réaction spontanée du substrat.' },
          { text: 'Identifie le traitement subi par chaque lait X, Y et Z. Argumente.', hint: 'PAL détruite vers 72 °C, POD détruite au-delà de 80 °C environ.', answer: ['Lait Y : PAL + et POD + ; aucune enzyme n’a été détruite : c’est un lait cru.', 'Lait X : PAL − et POD + ; chauffage suffisant pour détruire la PAL, mais inférieur à 80 °C : lait pasteurisé.', 'Lait Z : PAL − et POD − ; chauffage au-delà de 80 °C : lait UHT (ou stérilisé).'] },
          { text: 'Quel lait le fromager peut-il utiliser ?', answer: 'Seulement le lait Y, le seul qui soit cru.' },
          { text: 'On refait la recherche de la PAL en remplaçant le paranitrophénylphosphate par du paranitrophénylsulfate, une molécule identique sauf que le groupement phosphate est remplacé par un groupement sulfate. Aucun tube ne jaunit, même avec le lait cru. Que montre cette expérience ?', hint: 'L’enzyme reconnaît-elle n’importe quelle molécule qui ressemble à son substrat ?', answer: 'Elle montre la spécificité de substrat de la phosphatase alcaline : l’enzyme hydrolyse les esters de phosphate (elle libère le groupement phosphate), mais elle ne reconnaît pas une molécule très proche portant un groupement sulfate. Le lait cru contient pourtant l’enzyme active, comme le prouve le témoin positif.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Détecter une biomolécule est une démarche qualitative : on conclut à sa présence ou à son absence (ou à une quantité sous le seuil de détection).',
      'Biuret → protéines (violet) ; ninhydrine → acides aminés (violet-pourpre) ; lugol → amidon (bleu-noir) ; liqueur de Fehling → glucides réducteurs (précipité rouge brique) ; glucose oxydase → glucose.',
      'Un réactif plus ou moins spécifique ne permet pas toujours d’identifier précisément la molécule.',
      'On conclut seulement si le témoin positif est positif et le témoin négatif négatif.',
      'Le spectre d’absorption A = f(λ) caractérise un chromophore ; la longueur d’onde optimale correspond à l’absorbance maximale ; on fait le zéro avec le blanc.',
      'Une enzyme se détecte par son activité sur un substrat spécifique, à pH et température fixés ; PAL et POD renseignent sur le traitement thermique d’un lait.',
    ],
    method: {
      title: 'Analyser un résultat qualitatif',
      steps: [
        'Identifier la biomolécule recherchée et le réactif (ou le substrat) utilisé.',
        'Vérifier les témoins : le positif donne-t-il le résultat attendu ? Le négatif reste-t-il de la couleur du réactif ?',
        'Si un témoin est anormal : le test n’est pas valide, on ne conclut pas.',
        'Comparer l’échantillon aux deux témoins.',
        'Conclure en tenant compte de la spécificité du réactif et du seuil de détection : « présence de… » ou « absence (ou quantité inférieure au seuil de détection) de… ».',
      ],
    },
    vocabulary: [
      { term: 'Biomolécule', definition: 'Molécule fabriquée par les êtres vivants (glucides, lipides, protéines, acides nucléiques…).' },
      { term: 'Test qualitatif', definition: 'Test qui indique la présence ou l’absence d’une molécule ou d’une activité, sans mesurer de quantité.' },
      { term: 'Réactif', definition: 'Substance ajoutée qui réagit avec la biomolécule recherchée en donnant un résultat visible.' },
      { term: 'Spécificité', definition: 'Capacité d’un réactif ou d’une enzyme à ne réagir qu’avec une seule molécule ou famille de molécules.' },
      { term: 'Témoin positif', definition: 'Tube contenant la biomolécule recherchée, qui montre l’aspect d’un résultat positif et valide le test.' },
      { term: 'Témoin négatif', definition: 'Tube sans la biomolécule, qui montre l’aspect du réactif seul et détecte une contamination.' },
      { term: 'Seuil de détection', definition: 'Plus petite quantité de biomolécule qu’un test peut mettre en évidence.' },
      { term: 'Glucide réducteur', definition: 'Glucide qui réduit les ions cuivre de la liqueur de Fehling (glucose, fructose, lactose, maltose).' },
      { term: 'Chromophore', definition: 'Molécule qui absorbe certaines radiations lumineuses.' },
      { term: 'Absorbance', definition: 'Grandeur sans unité qui traduit la quantité de lumière absorbée par une solution à une longueur d’onde donnée.' },
      { term: 'Spectre d’absorption', definition: 'Courbe de l’absorbance en fonction de la longueur d’onde.' },
      { term: 'Longueur d’onde optimale', definition: 'Longueur d’onde de l’absorbance maximale, notée λ~max~.' },
      { term: 'Blanc', definition: 'Solution sans la molécule étudiée qui sert à faire le zéro du spectrophotomètre.' },
      { term: 'Enzyme', definition: 'Protéine qui catalyse une réaction chimique spécifique.' },
      { term: 'Substrat', definition: 'Molécule transformée par une enzyme.' },
    ],
    mistakes: [
      { wrong: 'Conclure à partir de la couleur de l’échantillon seul.', right: 'On compare toujours l’échantillon au témoin positif et au témoin négatif.' },
      { wrong: 'Dire qu’un test négatif prouve que la molécule est absente.', right: 'Elle est absente ou en quantité inférieure au seuil de détection.' },
      { wrong: 'Utiliser le réactif du biuret pour détecter des acides aminés.', right: 'Le biuret détecte les protéines et peptides ; les acides aminés se détectent à la ninhydrine.' },
      { wrong: 'Affirmer qu’un test de Fehling positif prouve la présence de glucose.', right: 'Il prouve la présence d’au moins un glucide réducteur ; la glucose oxydase est spécifique du glucose.' },
      { wrong: 'Faire le zéro une seule fois au début d’un spectre.', right: 'Avec un spectrophotomètre simple faisceau, on refait le zéro avec le blanc à chaque longueur d’onde.' },
      { wrong: 'Tenir la cuve par les faces lisses.', right: 'On tient la cuve par les faces dépolies ; le faisceau traverse les faces lisses.' },
    ],
    quiz: [
      { question: 'Le réactif du biuret permet de détecter :', choices: ['L’amidon', 'Les protéines', 'Les glucides réducteurs', 'Les acides aminés libres'], answer: 1, explanation: 'Le biuret réagit avec les liaisons peptidiques (au moins deux) : il détecte protéines et peptides.' },
      { question: 'Après ajout d’eau iodée, un échantillon devient bleu-noir. Il contient :', choices: ['Du glucose', 'Des protéines', 'De l’amidon', 'Des lipides'], answer: 2, explanation: 'L’eau iodée (lugol) colore l’amidon en bleu-noir.' },
      { question: 'Un test à la liqueur de Fehling positif se traduit par :', choices: ['Une coloration violette', 'Un précipité rouge brique après chauffage', 'Une coloration bleu-noir', 'Une coloration jaune'], answer: 1, explanation: 'Les glucides réducteurs réduisent les ions cuivre en oxyde de cuivre, rouge brique, à chaud.' },
      { question: 'Le témoin négatif d’un test de détection :', choices: ['Contient la biomolécule recherchée', 'Ne contient pas la biomolécule et montre la couleur du réactif seul', 'Est toujours de l’échantillon dilué', 'Sert à régler la température'], answer: 1, explanation: 'Il montre l’aspect du réactif seul et permet de repérer une contamination.' },
      { question: 'Le témoin positif et le témoin négatif sont tous les deux colorés comme un résultat positif. On conclut :', choices: ['L’échantillon contient la biomolécule', 'Le test n’est pas valide (contamination probable)', 'Le réactif est très spécifique', 'L’échantillon ne contient pas la biomolécule'], answer: 1, explanation: 'Un témoin négatif positif signale une contamination : on ne peut pas conclure, il faut recommencer.' },
      { question: 'La longueur d’onde optimale d’un chromophore est celle pour laquelle :', choices: ['L’absorbance est nulle', 'L’absorbance est maximale', 'La lumière est blanche', 'La cuve est transparente'], answer: 1, explanation: 'λ~max~ correspond au sommet du spectre d’absorption.' },
      { question: 'Pour mesurer l’absorbance de l’ADN à 260 nm, on utilise une cuve en :', choices: ['Polystyrène', 'Verre optique', 'Quartz', 'Papier'], answer: 2, explanation: 'Seul le quartz est transparent dans l’ultraviolet, en dessous de 340 nm.' },
      { question: 'Un lait donne : PAL négative, POD positive. Il s’agit d’un lait :', choices: ['Cru', 'Pasteurisé', 'UHT', 'Contaminé'], answer: 1, explanation: 'La pasteurisation détruit la PAL mais pas la peroxydase, qui résiste jusqu’à environ 80 °C.' },
      { question: 'Pour détecter une enzyme, on observe :', choices: ['La disparition du tampon', 'L’apparition du produit de la réaction qu’elle catalyse', 'La couleur de l’enzyme elle-même', 'La température du bain-marie'], answer: 1, explanation: 'On détecte l’enzyme par son activité : son substrat est transformé en un produit détectable.' },
    ],
    exercises: [
      {
        title: 'Un résultat à interpréter',
        statement: 'Pour rechercher des protéines dans une boisson, on obtient : témoin négatif bleu, témoin positif bleu, boisson bleue. Un élève conclut que la boisson ne contient pas de protéines. Discute cette conclusion.',
        answer: 'La conclusion n’est pas valable : le témoin positif aurait dû être violet. Le réactif ne fonctionne pas (réactif périmé, mauvaise préparation, temps de contact trop court). Le test n’est pas valide ; il faut le recommencer avec un réactif vérifié avant de conclure.',
      },
      {
        title: 'Choisir une cuve et une longueur d’onde',
        statement: 'Un technicien veut caractériser une solution de chlorophylle extraite d’épinards. Son spectre présente deux maximums, vers 430 nm et vers 660 nm, et un minimum vers 550 nm. a) Quelle cuve peut-il utiliser ? b) Explique la couleur verte de la solution. c) Quelle longueur d’onde choisir pour une mesure sensible ?',
        answer: ['a) Une cuve en plastique ou en verre convient : toutes les mesures sont dans le visible (au-dessus de 340 nm). Si l’extrait est préparé dans un solvant organique (acétone, éthanol), on choisit une cuve en verre ou en quartz, qui résistent aux solvants.', 'b) La chlorophylle absorbe le bleu-violet (430 nm) et le rouge (660 nm) ; elle absorbe peu vers 550 nm (vert) : la lumière verte est transmise, la solution paraît verte.', 'c) Une des longueurs d’onde des maximums, par exemple 660 nm (ou 430 nm) : l’absorbance y est maximale.'],
      },
      {
        title: 'Spécificité de la glucose oxydase',
        statement: 'On plonge une bandelette à glucose oxydase dans quatre solutions à 5 g·L^-1^ : glucose, galactose, fructose, saccharose. Seule la bandelette plongée dans le glucose change de couleur. Quelle propriété de l’enzyme cette expérience met-elle en évidence ? Pourquoi a-t-on choisi des molécules proches du glucose ?',
        answer: 'Elle montre la spécificité de substrat de la glucose oxydase : l’enzyme ne transforme que le glucose. On choisit des molécules de structure très proche (même formule brute pour le galactose et le fructose) pour montrer que l’enzyme les distingue malgré leur ressemblance.',
      },
    ],
    selfCheck: [
      'Je sais associer chaque réactif (biuret, ninhydrine, lugol, Fehling, glucose oxydase) à la biomolécule détectée et au résultat positif.',
      'Je sais expliquer le rôle du témoin positif et du témoin négatif, et valider un test.',
      'Je sais rédiger une conclusion qualitative qui tient compte de la spécificité et du seuil de détection.',
      'Je sais construire un tableau de manipulation pour une détection.',
      'Je sais choisir une cuve, faire le zéro et réaliser un spectre d’absorption.',
      'Je sais déterminer la longueur d’onde optimale et la relier à la couleur de la solution.',
      'Je sais détecter une enzyme par son activité et interpréter les tests PAL et POD.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Réaction de Fehling — Wikipédia', url: 'https://fr.wikipedia.org/wiki/R%C3%A9action_de_Fehling' },
      { title: 'Ninhydrine — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Ninhydrine' },
      { title: 'Spectrophotométrie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Spectrophotom%C3%A9trie' },
      { title: 'Phosphatase alcaline — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Phosphatase_alcaline' },
    ],
  },
};

export default lesson;
