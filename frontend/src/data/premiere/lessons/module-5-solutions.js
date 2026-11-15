import { img } from '../media';
import pesee from '../../../assets/courses/premiere/module-5-solutions/pesee.webp';
import verrerie from '../../../assets/courses/premiere/module-5-solutions/verrerie.webp';
import dissolution from '../../../assets/courses/premiere/module-5-solutions/dissolution.webp';
import menisque from '../../../assets/courses/premiere/module-5-solutions/menisque.webp';
import dilution from '../../../assets/courses/premiere/module-5-solutions/dilution.webp';
import gamme from '../../../assets/courses/premiere/module-5-solutions/gamme.webp';

const IMG = {
  pesee: img(pesee, 'Mains gantées déposant à la spatule une poudre blanche dans une coupelle posée sur une balance de précision à portes vitrées ; une fiole jaugée, une pissette et un entonnoir attendent sur la paillasse.', 'photo', 1536, 1024),
  verrerie: img(verrerie, 'Planche de verrerie légendée : fiole jaugée, pipette jaugée, pipette graduée, burette, éprouvette graduée, bécher, erlenmeyer ; la verrerie de précision est surlignée en vert.', 'schema', 1400, 933),
  dissolution: img(dissolution, 'Les six étapes de la préparation d’une solution par pesée : pesée, transfert, rinçage, dissolution, ajustage au trait, homogénéisation.', 'schema', 1400, 933),
  menisque: img(menisque, 'Lecture du ménisque dans le col d’une fiole jaugée : le bas du ménisque est tangent au trait de jauge, l’œil est à hauteur du trait ; les positions trop haute et trop basse donnent une erreur de parallaxe.', 'schema', 933, 1400),
  dilution: img(dilution, 'Préparation d’une solution fille par dilution : prélèvement de la solution mère à la pipette jaugée, transfert dans une fiole jaugée, ajout d’eau distillée jusqu’au trait de jauge.', 'schema', 1400, 933),
  gamme: img(gamme, 'Six tubes à essais contenant une solution bleue de sulfate de cuivre de plus en plus diluée, du bleu foncé au bleu très pâle.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'module-5-solutions',
  duration: 'Environ 4 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.pesee,
    question: 'Sérum physiologique, milieu de culture, réactif de dosage : comment obtenir une solution dont la concentration est exactement celle qui est demandée ?',
    text: 'Au laboratoire, presque toutes les manipulations commencent par une solution. Si sa concentration est fausse, tous les résultats qui suivent le sont aussi. Dans ce chapitre, tu apprends à calculer une concentration, à choisir la bonne verrerie et à préparer une solution par pesée ou par dilution avec des gestes précis, comme un ou une technicienne de laboratoire.',
  },
  objectives: [
    'Calculer une concentration en masse et une concentration en quantité de matière, et passer de l’une à l’autre.',
    'Identifier les grandeurs d’entrée et la grandeur de sortie d’une procédure de préparation.',
    'Choisir la verrerie et la balance adaptées à la précision demandée.',
    'Concevoir et réaliser une préparation par pesée, avec une gestuelle maîtrisée.',
    'Concevoir et réaliser une dilution : facteur de dilution, volume à prélever, matériel.',
    'Repérer les points critiques d’une préparation et étiqueter correctement une solution.',
  ],
  prerequisites: [
    'Les conversions de volume : 1 L = 1 000 mL et 1 mL = 1 000 µL.',
    'La quantité de matière (en mol) et la masse molaire (en g·mol^-1^), vues en physique-chimie.',
    'Les règles de sécurité au laboratoire : blouse, lunettes, lecture des pictogrammes.',
  ],
  program: [
    'Identifier dans une procédure de préparation de solution les grandeurs d’entrée et la grandeur de sortie.',
    'Concevoir une procédure de préparation de solution par pesée, par dilution.',
    'Choisir le matériel de précision adapté pour préparer une solution.',
    'Réaliser une pesée, une mesure de volume avec une gestuelle maîtrisée.',
    'Mettre en œuvre une procédure de préparation de solution.',
    'Notions : masse exacte, concentration en masse, concentration initiale et finale, dilution et facteur de dilution, conservation de la matière, exactitude.',
  ],

  course: {
    parts: [
      {
        title: 'Solutions et concentrations',
        intro: 'Avant de préparer une solution, il faut savoir la décrire : qu’est-ce qu’on dissout, dans quoi, et en quelle quantité ?',
        blocks: [
          { type: 'p', text: 'Au laboratoire de biotechnologies, on utilise sans cesse des **solutions aqueuses** : eau physiologique pour les suspensions de bactéries, tampons, réactifs de détection, solutions étalons pour les dosages. Toutes sont préparées à partir d’eau **distillée** (ou déminéralisée), qui ne contient presque plus d’ions ni d’impuretés.' },
          { type: 'definition', term: 'Solution', text: 'mélange **homogène** (une seule phase, même composition en tout point) obtenu en dissolvant une ou plusieurs espèces chimiques dans un liquide.' },
          { type: 'definition', term: 'Soluté et solvant', text: 'le **soluté** est l’espèce dissoute (solide, liquide ou gaz) ; le **solvant** est le liquide qui dissout, présent en grande quantité. Quand le solvant est l’eau, la solution est dite **aqueuse**.' },
          { type: 'definition', term: 'Concentration en masse', text: 'masse de soluté dissous par litre de **solution**. On la note **ρ** (rho) ou C~m~ ; elle s’exprime en **g·L^-1^** (ou en mg·L^-1^). On l’appelle aussi concentration massique.' },
          {
            type: 'formula',
            title: 'Concentration en masse',
            expression: 'ρ = m ÷ V',
            legend: [
              { symbol: 'ρ', meaning: 'concentration en masse du soluté (g·L^-1^)' },
              { symbol: 'm', meaning: 'masse de soluté dissous (g)' },
              { symbol: 'V', meaning: 'volume total de la solution (L)' },
            ],
          },
          { type: 'example', title: 'le sérum physiologique', text: 'On dissout 0,90 g de chlorure de sodium (NaCl) dans de l’eau distillée et on complète à 100,0 mL de solution. ρ = 0,90 ÷ 0,1000 = **9,0 g·L^-1^**. C’est la composition de l’eau physiologique utilisée en microbiologie et à l’hôpital (« NaCl à 0,9 % »).' },
          { type: 'definition', term: 'Concentration en quantité de matière', text: 'quantité de matière de soluté (en moles) par litre de solution. On la note **C** ; elle s’exprime en **mol·L^-1^**. On l’appelle aussi concentration molaire.' },
          {
            type: 'formula',
            title: 'Concentration en quantité de matière',
            expression: 'C = n ÷ V   avec   n = m ÷ M',
            legend: [
              { symbol: 'C', meaning: 'concentration en quantité de matière (mol·L^-1^)' },
              { symbol: 'n', meaning: 'quantité de matière de soluté (mol)' },
              { symbol: 'M', meaning: 'masse molaire du soluté (g·mol^-1^)' },
              { symbol: 'V', meaning: 'volume de solution (L)' },
            ],
          },
          {
            type: 'formula',
            title: 'Passer d’une concentration à l’autre',
            expression: 'ρ = C × M',
            legend: [
              { symbol: 'ρ', meaning: 'concentration en masse (g·L^-1^)' },
              { symbol: 'C × M', meaning: '(mol·L^-1^) × (g·mol^-1^) = g·L^-1^' },
            ],
          },
          { type: 'example', title: 'le sérum glucosé', text: 'Une perfusion de « glucose à 5 % » contient 50 g de glucose par litre : ρ = 50 g·L^-1^. Avec M(glucose) = 180 g·mol^-1^ : C = ρ ÷ M = 50 ÷ 180 ≈ **0,28 mol·L^-1^**.' },
          {
            type: 'table',
            caption: 'Les grandeurs du chapitre et leurs unités',
            head: ['Grandeur', 'Symbole', 'Unité usuelle'],
            rows: [
              ['Masse de soluté', 'm', 'g (ou mg)'],
              ['Volume de solution', 'V', 'L (ou mL)'],
              ['Quantité de matière', 'n', 'mol (ou mmol)'],
              ['Masse molaire', 'M', 'g·mol^-1^'],
              ['Concentration en masse', 'ρ', 'g·L^-1^'],
              ['Concentration en quantité de matière', 'C', 'mol·L^-1^'],
            ],
          },
          { type: 'warning', title: 'Deux pièges classiques', text: ['V est le volume **de la solution finale**, pas le volume d’eau ajouté : on ne verse pas « 100 mL d’eau sur 0,9 g de sel », on complète **jusqu’à** 100 mL de solution.', 'Dans les formules, le volume doit être en **litres** : 250 mL = 0,250 L. Vérifie toujours l’unité du résultat.'] },
          { type: 'note', title: 'Les pourcentages sur les étiquettes', text: 'Sur les produits de santé, « NaCl 0,9 % » ou « glucose 5 % » désignent des pourcentages masse/volume : 0,9 g pour 100 mL de solution, soit 9 g·L^-1^. Au laboratoire, on préfère écrire la concentration avec son unité, sans ambiguïté.' },
          {
            type: 'retenir',
            items: [
              'Une solution = un ou plusieurs **solutés** dissous dans un **solvant** (l’eau distillée au laboratoire).',
              'Concentration en masse : **ρ = m ÷ V** en g·L^-1^ ; concentration en quantité de matière : **C = n ÷ V** en mol·L^-1^.',
              'On passe de l’une à l’autre avec la masse molaire : **ρ = C × M**.',
              'V est toujours le volume **total** de solution, exprimé en litres dans les calculs.',
            ],
          },
        ],
      },

      {
        title: 'Choisir un matériel de mesure adapté',
        intro: 'Une concentration n’est jamais plus exacte que les mesures de masse et de volume qui ont servi à la préparer.',
        blocks: [
          { type: 'definition', term: 'Exactitude', text: 'qualité d’une mesure (ou d’une préparation) dont la valeur obtenue est **très proche de la valeur vraie** attendue. Une solution est exacte si sa concentration réelle est très proche de la concentration visée.' },
          { type: 'p', text: 'Au laboratoire, on distingue trois familles de matériel pour les volumes : la verrerie **jaugée** (un seul volume, très exact), la verrerie **graduée** (volumes variables, un peu moins exacte) et la verrerie **non graduée ou à graduations indicatives** (bécher, erlenmeyer), qui sert à contenir, mélanger ou chauffer, **jamais à mesurer**.' },
          { type: 'figure', image: IMG.verrerie, caption: 'Les principales pièces de verrerie. En vert : la verrerie de précision utilisée pour préparer les solutions et pour doser (fiole jaugée, pipette jaugée, burette).', size: 'wide' },
          {
            type: 'table',
            caption: 'Rôle et exactitude du matériel courant (valeurs typiques pour une verrerie de classe A)',
            head: ['Matériel', 'Usage', 'Tolérance typique'],
            rows: [
              ['Fiole jaugée 100 mL', 'Contenir un volume précis : préparer une solution par pesée ou par dilution.', '± 0,10 mL'],
              ['Pipette jaugée 10 mL', 'Prélever et délivrer un volume précis (dilution, prise d’essai).', '± 0,02 mL'],
              ['Pipette graduée 10 mL', 'Prélever un volume variable (gamme de dilutions).', '± 0,05 mL'],
              ['Burette 25 mL', 'Verser un volume variable connu (dosage).', '± 0,03 mL'],
              ['Micropipette 100 à 1 000 µL', 'Prélever de petits volumes réglables.', 'Environ ± 1 %'],
              ['Éprouvette graduée 100 mL', 'Mesurer un volume approximatif (solvant d’un milieu de culture).', '± 0,5 mL'],
              ['Bécher, erlenmeyer', 'Contenir, mélanger, chauffer.', 'Graduations indicatives (environ ± 5 %)'],
            ],
          },
          { type: 'definition', term: 'Verrerie « In » et verrerie « Ex »', text: 'la verrerie marquée **In** est étalonnée pour **contenir** exactement le volume indiqué (fiole jaugée) ; la verrerie marquée **Ex** est étalonnée pour **délivrer** ce volume (pipette, burette) : la petite goutte qui reste dans la pointe d’une pipette jaugée est prévue et **ne doit pas être soufflée**.' },
          { type: 'p', text: 'Sur chaque pièce de verrerie de précision sont gravés : le volume nominal, la **tolérance** (par exemple ± 0,10 mL), la **classe** (A, la plus exacte, ou B), la mention In ou Ex, parfois un temps d’attente (« Ex + 5 s ») et la **température d’étalonnage** (20 °C).' },
          { type: 'p', text: 'Pour les masses, on choisit la balance selon la masse à peser et l’exactitude voulue : une **balance de précision** affiche le centième de gramme (0,01 g) ; une **balance analytique**, protégée par des portes vitrées, affiche le dixième de milligramme (0,0001 g).' },
          { type: 'definition', term: 'Masse exacte', text: 'masse **réellement pesée**, lue sur la balance et notée avec tous ses chiffres. On pèse une masse **voisine** de la masse calculée, puis on recalcule la concentration réelle de la solution avec la masse exacte.' },
          { type: 'example', title: 'masse calculée et masse exacte', text: 'Pour une solution de NaCl, le calcul donne m = 0,877 g. Sur la balance analytique, on obtient **m~exacte~ = 0,8812 g** pour une fiole de 100,0 mL. La concentration réelle est ρ = 0,8812 ÷ 0,1000 = **8,812 g·L^-1^** : c’est cette valeur qu’on écrit sur l’étiquette.' },
          { type: 'warning', text: 'Une éprouvette graduée ou un bécher ne permettent pas de préparer une solution de concentration exacte : pour un volume final précis, on utilise **toujours une fiole jaugée** ; pour prélever un volume précis, une **pipette jaugée**.' },
          {
            type: 'retenir',
            items: [
              'Verrerie **jaugée** (fiole, pipette) : un volume unique, très exact. Verrerie **graduée** : volumes variables. Bécher et erlenmeyer : jamais pour mesurer.',
              'La fiole jaugée est **In** (elle contient le volume) ; la pipette et la burette sont **Ex** (elles délivrent le volume).',
              'On note toujours la **masse exacte** pesée et on recalcule la concentration réelle.',
            ],
          },
        ],
      },

      {
        title: 'Préparer une solution par pesée',
        intro: 'Préparer une solution par pesée, c’est dissoudre une masse connue de soluté solide dans un volume final connu de solution.',
        blocks: [
          { type: 'definition', term: 'Grandeurs d’entrée et grandeur de sortie', text: 'dans une procédure, les **grandeurs d’entrée** sont les valeurs mesurées ou connues qui servent au calcul (masse pesée, volume de la fiole, masse molaire) ; la **grandeur de sortie** est la valeur que l’on veut obtenir (la concentration de la solution).' },
          {
            type: 'flow',
            title: 'Le modèle de la préparation par pesée',
            steps: [
              { title: 'Grandeurs d’entrée', text: 'masse exacte m (balance), volume V (fiole jaugée)' },
              { title: 'Calcul', text: 'ρ = m ÷ V ou C = m ÷ (M × V)' },
              { title: 'Grandeur de sortie', text: 'concentration de la solution préparée' },
            ],
          },
          { type: 'p', text: 'Pour **concevoir** la préparation, on fait le calcul dans l’autre sens : on part de la concentration voulue et du volume de la fiole, et on calcule la masse à peser. Au lycée, on présente ce calcul en trois lignes : l’**équation aux grandeurs** (la formule littérale), l’**équation aux unités** (pour vérifier la cohérence) et l’**équation aux valeurs numériques**.' },
          {
            type: 'formula',
            title: 'Masse de soluté à peser',
            expression: 'm = ρ × V   ou   m = C × V × M',
            legend: [
              { symbol: 'm', meaning: 'masse à peser (g)' },
              { symbol: 'ρ ou C', meaning: 'concentration visée (g·L^-1^ ou mol·L^-1^)' },
              { symbol: 'V', meaning: 'volume de la fiole jaugée (L)' },
              { symbol: 'M', meaning: 'masse molaire du soluté (g·mol^-1^)' },
            ],
          },
          { type: 'example', title: 'calcul rédigé', text: ['On veut 100,0 mL de solution de NaCl à C = 0,150 mol·L^-1^ ; M(NaCl) = 58,44 g·mol^-1^.', 'Équation aux grandeurs : m = C × V × M.', 'Équation aux unités : g = mol·L^-1^ × L × g·mol^-1^ (les unités se simplifient : le résultat est bien en grammes).', 'Équation aux valeurs numériques : m = 0,150 × 0,1000 × 58,44 = **0,877 g**.'] },
          { type: 'figure', image: IMG.dissolution, caption: 'Préparer une solution par pesée en six étapes, de la pesée à l’homogénéisation.', size: 'wide' },
          {
            type: 'steps',
            title: 'Protocole et gestuelle de la préparation par pesée',
            items: [
              { title: 'Préparer le matériel', text: 'Vérifier que la balance est **propre et de niveau** (bulle centrée). Rincer la fiole jaugée à l’eau distillée : il n’est pas utile de la sécher, puisqu’on y ajoutera de l’eau.' },
              { title: 'Peser', text: 'Poser la coupelle (ou le verre de montre) sur le plateau, **tarer**, puis ajouter le solide à la spatule jusqu’à une masse voisine de la masse calculée. Fermer les portes de la balance analytique et **noter la masse exacte**.' },
              { title: 'Transférer', text: 'Verser le solide dans la fiole jaugée à l’aide d’un entonnoir sec.' },
              { title: 'Rincer', text: 'Rincer la coupelle et l’entonnoir à la pissette d’eau distillée **au-dessus de la fiole** : tout le solide doit y entrer. C’est le **transfert quantitatif**.' },
              { title: 'Dissoudre', text: 'Remplir la fiole aux deux tiers environ, la boucher et agiter jusqu’à **dissolution complète** (plus aucun cristal visible).' },
              { title: 'Ajuster au trait de jauge', text: 'Compléter à l’eau distillée jusqu’à environ 1 cm sous le trait, puis à la pipette compte-gouttes, **goutte à goutte**, jusqu’à ce que le bas du ménisque soit tangent au trait, l’œil à sa hauteur.' },
              { title: 'Homogénéiser', text: 'Boucher et retourner la fiole une dizaine de fois : sans cette étape, la solution est plus concentrée au fond qu’en haut.' },
              { title: 'Étiqueter', text: 'Transvaser dans un flacon propre et étiqueter immédiatement (voir partie 5).' },
            ],
          },
          { type: 'figure', image: IMG.menisque, caption: 'Lire un volume : l’œil à hauteur du trait de jauge, le bas du ménisque doit être tangent au trait. Un œil trop haut ou trop bas provoque une erreur de parallaxe.', size: 'small' },
          { type: 'note', title: 'Et si le soluté se dissout mal ?', text: 'Pour un solide lent à dissoudre, ou qui chauffe en se dissolvant, on le dissout d’abord dans un **bécher** avec un peu d’eau distillée (agitation magnétique), on laisse revenir à température ambiante, puis on transvase dans la fiole en rinçant **plusieurs fois** le bécher et l’agitateur : le transfert doit rester quantitatif.' },
          { type: 'warning', title: 'Points critiques de la pesée', text: ['Une balance mal tarée ou sale fausse **toutes** les pesées (erreur systématique).', 'Ne jamais peser un objet chaud, ni un produit directement sur le plateau.', 'Un solide qui absorbe l’humidité de l’air (hygroscopique) doit être pesé rapidement, flacon refermé aussitôt.'] },
          {
            type: 'retenir',
            items: [
              'Grandeurs d’entrée : la masse exacte et le volume de la fiole ; grandeur de sortie : la concentration.',
              'Masse à peser : **m = ρ × V** ou **m = C × V × M**, présentée en équations aux grandeurs, aux unités, aux valeurs numériques.',
              'Étapes : pesée → transfert → **rinçage** (transfert quantitatif) → dissolution → ajustage au trait → homogénéisation → étiquetage.',
              'Ajustage : bas du ménisque tangent au trait, œil à hauteur du trait.',
            ],
          },
        ],
      },

      {
        title: 'Préparer une solution par dilution',
        intro: 'Diluer, ce n’est pas enlever du soluté : c’est répartir la même quantité de soluté dans un volume plus grand.',
        blocks: [
          { type: 'definition', term: 'Dilution', text: 'préparation d’une solution **moins concentrée**, la **solution fille**, à partir d’une solution plus concentrée, la **solution mère**, par ajout de solvant.' },
          { type: 'p', text: 'On prélève un volume V~0~ de solution mère, on le place dans une fiole jaugée et on complète avec de l’eau distillée jusqu’au volume V~1~. La quantité de soluté prélevée se retrouve **entièrement** dans la fiole : c’est la **conservation de la matière**.' },
          {
            type: 'formula',
            title: 'Conservation de la matière lors d’une dilution',
            expression: 'C~0~ × V~0~ = C~1~ × V~1~',
            legend: [
              { symbol: 'C~0~, V~0~', meaning: 'concentration initiale (solution mère) et volume prélevé' },
              { symbol: 'C~1~, V~1~', meaning: 'concentration finale (solution fille) et volume de la fiole' },
              { symbol: 'avec ρ', meaning: 'la relation est la même : ρ~0~ × V~0~ = ρ~1~ × V~1~' },
            ],
          },
          { type: 'definition', term: 'Facteur de dilution', text: 'nombre **F**, supérieur à 1, qui indique combien de fois la solution fille est moins concentrée que la solution mère : **F = C~0~ ÷ C~1~ = V~1~ ÷ V~0~**. « Diluer au 1/10 » ou « diluer 10 fois » signifie F = 10.' },
          { type: 'example', title: 'concevoir une dilution', text: ['On veut 50,0 mL de solution fille cinq fois moins concentrée que la solution mère.', 'F = 5, donc V~0~ = V~1~ ÷ F = 50,0 ÷ 5 = **10,0 mL**.', 'Matériel : une **pipette jaugée de 10 mL** pour prélever et une **fiole jaugée de 50 mL** pour le volume final.'] },
          { type: 'figure', image: IMG.dilution, caption: 'Dilution : la solution mère (foncée) est prélevée à la pipette jaugée, transférée dans la fiole jaugée puis complétée à l’eau distillée jusqu’au trait. La solution fille est plus pâle : même quantité de soluté, volume plus grand.', size: 'wide' },
          {
            type: 'steps',
            title: 'Protocole et gestuelle de la dilution',
            items: [
              { title: 'Verser la solution mère dans un bécher', text: 'Verser un peu plus que le volume nécessaire dans un bécher **propre et sec** (ou rincé avec la solution mère). On ne pipette jamais directement dans le flacon de réserve, pour ne pas le contaminer.' },
              { title: 'Rincer la pipette', text: 'Aspirer un peu de solution mère avec la pipette munie d’un **pipeteur** (jamais à la bouche), la faire couler sur toute la paroi interne puis la jeter : les gouttes d’eau restantes ne diluent plus le prélèvement.' },
              { title: 'Prélever et ajuster', text: 'Aspirer au-dessus du trait supérieur, essuyer l’extérieur de la pointe, puis laisser descendre jusqu’à ce que le bas du ménisque soit tangent au trait, l’œil à sa hauteur.' },
              { title: 'Délivrer', text: 'Laisser couler dans la fiole jaugée, pipette **verticale**, pointe appuyée contre la paroi du col. Attendre quelques secondes à la fin ; ne pas souffler la dernière goutte.' },
              { title: 'Compléter et ajuster', text: 'Ajouter de l’eau distillée aux deux tiers, homogénéiser, puis ajuster au trait de jauge goutte à goutte.' },
              { title: 'Homogénéiser et étiqueter', text: 'Boucher, retourner une dizaine de fois, transvaser et étiqueter.' },
            ],
          },
          {
            type: 'table',
            caption: 'Choisir le couple pipette jaugée / fiole jaugée selon le facteur de dilution',
            head: ['Facteur F', 'Volume prélevé V~0~', 'Volume final V~1~'],
            rows: [
              ['2', '25,0 mL', '50,0 mL'],
              ['5', '10,0 mL ou 20,0 mL', '50,0 mL ou 100,0 mL'],
              ['10', '10,0 mL ou 5,0 mL', '100,0 mL ou 50,0 mL'],
              ['20', '5,0 mL', '100,0 mL'],
              ['100', '1,0 mL (ou deux dilutions successives au 1/10)', '100,0 mL'],
            ],
          },
          { type: 'definition', term: 'Dilutions successives (en série)', text: 'dilutions réalisées les unes à partir des autres : la solution fille d’une étape devient la solution mère de la suivante. Les facteurs se **multiplient** : deux dilutions au 1/10 donnent une dilution au 1/100. C’est la méthode des dilutions décimales utilisée pour dénombrer les bactéries.' },
          { type: 'p', text: 'Une **gamme de dilutions** est une série de solutions de concentrations différentes et connues, préparées à partir d’une même solution mère. Les solutions de concentration exactement connue qui servent de référence s’appellent des **solutions étalons** : elles permettent ensuite de doser une biomolécule par comparaison (module 8).' },
          { type: 'figure', image: IMG.gamme, caption: 'Une gamme de dilutions de sulfate de cuivre : plus la solution est diluée, plus sa couleur est pâle. Un soluté coloré permet de visualiser la dilution.', size: 'wide' },
          { type: 'warning', title: 'Erreurs fréquentes', text: ['Rincer la pipette à l’eau distillée juste avant le prélèvement : les gouttes d’eau diluent la solution mère prélevée.', 'Confondre volume prélevé (V~0~) et volume final (V~1~) : pour diluer au 1/10, on ne mélange pas 10 mL de solution mère avec 100 mL d’eau, on complète **jusqu’à** 100 mL.', 'Prélever un volume précis avec une éprouvette : la dilution n’est alors plus exacte.'] },
          {
            type: 'retenir',
            items: [
              'Lors d’une dilution, la quantité de soluté se conserve : **C~0~ × V~0~ = C~1~ × V~1~**.',
              'Facteur de dilution : **F = C~0~ ÷ C~1~ = V~1~ ÷ V~0~** ; volume à prélever : V~0~ = V~1~ ÷ F.',
              'Matériel : **pipette jaugée** pour prélever, **fiole jaugée** pour le volume final.',
              'Pour des dilutions successives, les facteurs de dilution se multiplient.',
            ],
          },
        ],
      },

      {
        title: 'Contrôler, étiqueter et assurer la traçabilité',
        intro: 'Une solution bien préparée mais mal identifiée devient une source d’erreur pour tout le laboratoire.',
        blocks: [
          { type: 'p', text: 'Un **point critique** est une étape de la procédure où une erreur a de fortes conséquences sur le résultat. Repérer les points critiques avant de manipuler permet de les surveiller.' },
          {
            type: 'table',
            caption: 'Les points critiques d’une préparation de solution',
            head: ['Étape', 'Erreur possible', 'Conséquence sur la concentration'],
            rows: [
              ['Pesée', 'Balance non tarée, masse calculée au lieu de la masse exacte', 'Valeur fausse dans un sens ou dans l’autre'],
              ['Transfert', 'Coupelle et entonnoir non rincés, solide renversé', 'Perte de matière : concentration **trop faible**'],
              ['Ajustage', 'Niveau au-dessus du trait de jauge', 'Volume trop grand : concentration **trop faible**'],
              ['Ajustage', 'Niveau au-dessous du trait de jauge', 'Volume trop petit : concentration **trop élevée**'],
              ['Prélèvement', 'Pipette mouillée d’eau, bulle d’air', 'Moins de soluté prélevé : concentration **trop faible**'],
              ['Homogénéisation', 'Fiole non retournée', 'Solution hétérogène : prélèvements non représentatifs'],
            ],
          },
          {
            type: 'cards',
            items: [
              { title: 'Erreur grossière', text: 'Faute de manipulation ou de calcul (mauvaise fiole, oubli d’un rinçage, erreur d’unité) : le résultat est inutilisable, il faut **recommencer**.', tone: 'red' },
              { title: 'Erreur systématique', text: 'Erreur qui se répète **toujours dans le même sens** (balance mal étalonnée, verrerie mal choisie). Elle se corrige en vérifiant le matériel.', tone: 'yellow' },
              { title: 'Erreur aléatoire', text: 'Petites variations **imprévisibles** d’une mesure à l’autre (lecture du ménisque, température). Elle est limitée par une gestuelle rigoureuse.', tone: 'blue' },
            ],
          },
          { type: 'p', text: 'Chaque solution préparée doit être **étiquetée immédiatement**. L’étiquette permet à n’importe quel utilisateur de savoir ce que contient le flacon, de l’utiliser correctement et de remonter jusqu’à sa préparation : c’est la **traçabilité**.' },
          {
            type: 'list',
            title: 'Ce que doit indiquer l’étiquette',
            items: [
              'Le **nom du soluté** (et du solvant s’il ne s’agit pas d’eau).',
              'La **concentration réelle**, avec son unité (calculée avec la masse exacte).',
              'La **date** de préparation et, si besoin, la date limite d’utilisation.',
              'Le **nom du préparateur** ou de la préparatrice.',
              'Les **pictogrammes de danger** du produit et les conditions de conservation (par exemple « à conserver à 4 °C, à l’abri de la lumière »).',
            ],
          },
          { type: 'note', title: 'Exprimer un résultat avec son incertitude', text: 'Aucune préparation n’est parfaite : chaque instrument apporte une petite incertitude. Quand l’incertitude est donnée, on écrit la concentration sous la forme ρ = (8,81 ± 0,03) g·L^-1^ : la valeur vraie se trouve très probablement entre 8,78 et 8,84 g·L^-1^.' },
          {
            type: 'retenir',
            items: [
              'Les points critiques : pesée, **transfert quantitatif**, ajustage au trait, prélèvement, homogénéisation.',
              'Une perte de matière ou un volume trop grand donnent une concentration trop faible.',
              'Toute solution est étiquetée aussitôt : soluté, concentration réelle et unité, date, préparateur, dangers.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur une situation de laboratoire. Réponds d’abord seul(e), en phrases complètes et en posant tes calculs (formule, unités, valeurs). Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Analyser une procédure de préparation par pesée',
        duration: '30 min',
        skills: ['Analyser', 'Calculer', 'Choisir'],
        context: 'Le laboratoire de microbiologie a besoin de 200,0 mL d’eau physiologique, c’est-à-dire de chlorure de sodium à ρ = 9,0 g·L^-1^, pour préparer des suspensions de bactéries.',
        documents: [
          {
            label: 'Document 1',
            title: 'Étapes de la procédure (dans le désordre)',
            text: ['A. Ajuster au trait de jauge à la pipette compte-gouttes.', 'B. Peser la masse de NaCl dans une coupelle tarée.', 'C. Rincer la coupelle et l’entonnoir à l’eau distillée au-dessus de la fiole.', 'D. Boucher et retourner la fiole une dizaine de fois.', 'E. Verser le solide dans la fiole jaugée à l’aide d’un entonnoir.', 'F. Remplir aux deux tiers et agiter jusqu’à dissolution complète.'],
          },
          {
            label: 'Document 2',
            title: 'Matériel disponible',
            blocks: [
              { type: 'list', items: ['Balance de précision (0,01 g) et balance analytique (0,0001 g).', 'Fioles jaugées de 100 mL, 200 mL et 250 mL.', 'Éprouvettes graduées de 100 mL et 250 mL ; béchers de 250 mL.', 'Coupelles de pesée, spatule, entonnoir, pissette d’eau distillée, pipette compte-gouttes.'] },
            ],
          },
        ],
        questions: [
          { text: 'Identifie la grandeur de sortie de cette procédure et ses grandeurs d’entrée.', hint: 'La grandeur de sortie est ce que l’on veut obtenir ; les grandeurs d’entrée sont ce que l’on mesure pour la calculer.', answer: 'Grandeur de sortie : la concentration en masse ρ de la solution de NaCl. Grandeurs d’entrée : la masse m de NaCl pesée (balance) et le volume V de la solution (fiole jaugée).' },
          { text: 'Calcule la masse de NaCl à peser. Présente l’équation aux grandeurs, l’équation aux unités et l’équation aux valeurs numériques.', hint: 'm = ρ × V, avec V en litres.', answer: ['Équation aux grandeurs : m = ρ × V.', 'Équation aux unités : g = g·L^-1^ × L.', 'Équation aux valeurs numériques : m = 9,0 × 0,2000 = 1,80 g.'] },
          { text: 'Choisis, dans le document 2, la balance et le récipient de volume final. Justifie chaque choix.', answer: 'La fiole jaugée de 200 mL : c’est la seule verrerie qui donne un volume final exact de 200,0 mL (une éprouvette ou un bécher ne sont pas assez exacts). Une balance de précision au centième (0,01 g) suffit pour peser 1,80 g avec une erreur relative inférieure à 1 % ; la balance analytique donnerait un résultat encore plus exact.' },
          { text: 'Remets les étapes du document 1 dans l’ordre et explique le rôle de l’étape C.', answer: 'Ordre : B, E, C, F, A, D. L’étape C (rinçage de la coupelle et de l’entonnoir au-dessus de la fiole) assure le transfert quantitatif : tout le solide pesé arrive dans la fiole, sans perte de matière.' },
          { text: 'Pourquoi ne remplit-on pas directement la fiole jusqu’au trait avant d’agiter ?', answer: 'Le volume d’une solution peut légèrement changer pendant la dissolution, et il est difficile d’agiter efficacement une fiole pleine. On dissout donc d’abord dans environ deux tiers du volume, puis on ajuste au trait quand tout le solide est dissous.' },
          { text: 'La masse exacte pesée est 1,83 g. Calcule la concentration réelle. Le laboratoire accepte les solutions entre 8,9 et 9,1 g·L^-1^ : la solution est-elle acceptable ?', hint: 'Recalcule ρ avec la masse exacte, puis compare à l’intervalle.', answer: 'ρ = 1,83 ÷ 0,2000 = 9,15 g·L^-1^. Cette valeur est supérieure à 9,1 g·L^-1^, donc en dehors de l’intervalle [8,9 ; 9,1] : la solution n’est pas acceptable. Il fallait peser une masse comprise entre 1,78 g et 1,82 g (8,9 × 0,2000 et 9,1 × 0,2000).' },
        ],
      },
      {
        title: 'Concevoir une dilution',
        duration: '30 min',
        skills: ['Concevoir', 'Calculer', 'Raisonner'],
        context: 'On dispose d’une solution mère de sulfate de cuivre de concentration C~0~ = 0,500 mol·L^-1^ (bleu intense). On doit préparer 100,0 mL de solution fille à C~1~ = 0,0250 mol·L^-1^.',
        documents: [
          {
            label: 'Document 3',
            title: 'Matériel disponible',
            blocks: [
              { type: 'list', items: ['Pipettes jaugées de 5 mL, 10 mL et 20 mL ; pipettes graduées de 10 mL.', 'Fioles jaugées de 50 mL, 100 mL et 250 mL.', 'Éprouvettes graduées de 10 mL et 100 mL ; béchers.', 'Pipeteur, pissette d’eau distillée, pipette compte-gouttes.'] },
            ],
          },
          { label: 'Document 4', title: 'Une gamme de solutions de sulfate de cuivre', image: IMG.gamme, caption: 'Solutions de sulfate de cuivre de plus en plus diluées.' },
        ],
        questions: [
          { text: 'Calcule le facteur de dilution F.', answer: 'F = C~0~ ÷ C~1~ = 0,500 ÷ 0,0250 = 20.' },
          { text: 'Déduis-en le volume de solution mère à prélever.', hint: 'V~0~ = V~1~ ÷ F.', answer: 'V~0~ = V~1~ ÷ F = 100,0 ÷ 20 = 5,00 mL.' },
          { text: 'Choisis le matériel nécessaire dans le document 3 et rédige la procédure de préparation.', answer: ['Matériel : pipette jaugée de 5 mL avec pipeteur, fiole jaugée de 100 mL, bécher, pissette d’eau distillée, pipette compte-gouttes.', 'Procédure : verser un peu de solution mère dans un bécher propre et sec ; rincer la pipette avec la solution mère ; prélever 5,00 mL et ajuster au trait ; les délivrer dans la fiole jaugée de 100 mL ; compléter à l’eau distillée aux deux tiers et homogénéiser ; ajuster au trait de jauge ; boucher, retourner une dizaine de fois ; étiqueter.'] },
          { text: 'Calcule la quantité de matière de sulfate de cuivre prélevée dans la pipette, puis celle présente dans la fiole à la fin. Quelle notion du cours ce résultat illustre-t-il ?', hint: 'n = C × V, avec V en litres.', answer: 'Dans la pipette : n = C~0~ × V~0~ = 0,500 × 0,00500 = 2,50 × 10^-3^ mol. Dans la fiole : n = C~1~ × V~1~ = 0,0250 × 0,1000 = 2,50 × 10^-3^ mol. Les deux quantités sont égales : c’est la conservation de la matière lors d’une dilution.' },
          { text: 'La solution fille est beaucoup plus pâle que la solution mère alors qu’elle contient la même quantité de sulfate de cuivre que le prélèvement. Explique.', answer: 'La couleur dépend de la concentration, c’est-à-dire de la quantité de soluté par litre. La même quantité de sulfate de cuivre est répartie dans un volume 20 fois plus grand : la concentration est 20 fois plus faible et la couleur est plus pâle.' },
          { text: 'Un élève propose de verser 5 mL de solution mère dans 100 mL d’eau mesurés à l’éprouvette. Relève ses deux erreurs.', answer: 'Première erreur : le volume final serait de 105 mL environ et non de 100,0 mL ; il faut compléter jusqu’au trait d’une fiole jaugée. Deuxième erreur : l’éprouvette n’est pas assez exacte ; il faut une pipette jaugée pour le prélèvement et une fiole jaugée pour le volume final.' },
        ],
      },
      {
        title: 'Préparer une gamme de solutions étalons',
        duration: '25 min',
        skills: ['Organiser', 'Calculer'],
        context: 'Pour doser le glucose d’un jus de fruit au spectrophotomètre (module 8), il faut une gamme de solutions étalons de glucose. On dispose d’une solution mère de glucose à ρ~0~ = 2,00 g·L^-1^. Chaque tube doit contenir 10,0 mL au total.',
        documents: [
          {
            label: 'Document 5',
            title: 'Tableau de préparation de la gamme (à compléter)',
            blocks: [
              {
                type: 'table',
                head: ['Tube', '0', '1', '2', '3', '4', '5'],
                rows: [
                  ['Solution mère (mL)', '0', '2,0', '4,0', '…', '8,0', '10,0'],
                  ['Eau distillée (mL)', '10,0', '8,0', '…', '4,0', '…', '0'],
                  ['ρ du glucose (g·L^-1^)', '…', '0,40', '…', '…', '…', '2,00'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Complète le tableau du document 5.', hint: 'Chaque tube contient 10,0 mL ; utilise ρ~1~ = ρ~0~ × V~0~ ÷ V~1~.', answer: ['Tube 2 : 4,0 mL de solution mère + 6,0 mL d’eau → 0,80 g·L^-1^.', 'Tube 3 : 6,0 mL + 4,0 mL → 1,20 g·L^-1^.', 'Tube 4 : 8,0 mL + 2,0 mL → 1,60 g·L^-1^.', 'Tube 0 : 0 mL + 10,0 mL → 0 g·L^-1^.'] },
          { text: 'Détaille le calcul de la concentration du tube 3.', answer: 'ρ~3~ = ρ~0~ × V~0~ ÷ V~1~ = 2,00 × 6,0 ÷ 10,0 = 1,20 g·L^-1^.' },
          { text: 'Calcule le facteur de dilution du tube 1.', answer: 'F = V~1~ ÷ V~0~ = 10,0 ÷ 2,0 = 5 (ou F = 2,00 ÷ 0,40 = 5).' },
          { text: 'Quel matériel est adapté pour mesurer ces volumes variables avec exactitude ?', answer: 'Des pipettes graduées de 10 mL (ou une burette), car les volumes sont variables et doivent être exacts. Une pipette par solution évite les contaminations : une pour la solution mère, une pour l’eau.' },
          { text: 'À quoi sert le tube 0, qui ne contient pas de glucose ?', answer: 'C’est le « blanc » ou témoin sans glucose : il sert à régler le zéro du spectrophotomètre et permet de vérifier que les réactifs seuls ne donnent pas de coloration.' },
        ],
      },
      {
        title: 'Rechercher l’origine d’une erreur',
        duration: '25 min',
        skills: ['Analyser', 'Argumenter'],
        context: 'Quatre binômes ont préparé 100,0 mL de solution de glucose à 10,0 g·L^-1^ par pesée. Le professeur contrôle la concentration des solutions par un dosage.',
        documents: [
          {
            label: 'Document 6',
            title: 'Résultats du contrôle',
            blocks: [
              {
                type: 'table',
                head: ['Binôme', 'Concentration mesurée (g·L^-1^)'],
                rows: [['1', '10,0'], ['2', '9,3'], ['3', '10,6'], ['4', '9,7']],
              },
              { type: 'p', text: 'Intervalle d’acceptabilité fixé par le laboratoire : de 9,8 à 10,2 g·L^-1^.' },
            ],
          },
          {
            label: 'Document 7',
            title: 'Observations du professeur pendant la séance',
            text: ['Observation a : un binôme a pesé 1,06 g de glucose au lieu de 1,00 g et a écrit 10,0 g·L^-1^ sur l’étiquette.', 'Observation b : un binôme n’a pas rincé la coupelle ni l’entonnoir ; des cristaux sont restés collés.', 'Observation c : un binôme a dépassé le trait de jauge d’environ 3 mL.'],
          },
        ],
        questions: [
          { text: 'Quelles solutions sont acceptables ?', answer: 'Seule la solution du binôme 1 (10,0 g·L^-1^) est dans l’intervalle [9,8 ; 10,2]. Les solutions des binômes 2, 3 et 4 ne sont pas acceptables.' },
          { text: 'Associe chaque observation du document 7 à un binôme. Justifie le sens de l’erreur.', hint: 'Demande-toi si chaque erreur augmente ou diminue la masse dissoute ou le volume final.', answer: ['Observation a → binôme 3 : la masse dissoute est plus grande que prévu, donc la concentration est trop élevée : 1,06 ÷ 0,1000 = 10,6 g·L^-1^.', 'Observation b → binôme 2 : une partie du solide n’a pas été transférée (perte de matière), donc la concentration est trop faible.', 'Observation c → binôme 4 : le volume final est d’environ 103 mL au lieu de 100,0 mL, donc la concentration est trop faible : 1,00 ÷ 0,103 ≈ 9,7 g·L^-1^.'] },
          { text: 'Le binôme 3 aurait pu obtenir une solution utilisable sans recommencer. Comment ?', answer: 'Il suffisait de noter la masse exacte (1,06 g) et de calculer la concentration réelle : 10,6 g·L^-1^. Cette valeur, écrite sur l’étiquette, rend la solution utilisable (sauf si une concentration précise de 10,0 g·L^-1^ est exigée).' },
          { text: 'Quelle erreur, parmi a, b et c, est une erreur grossière qui impose de recommencer ? Justifie.', answer: 'Les erreurs b et c sont des erreurs grossières de manipulation : la quantité de soluté réellement dissoute (b) ou le volume réel (c) sont inconnus, on ne peut pas corriger le calcul. Il faut recommencer la préparation.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Concentration en masse ρ = m ÷ V (g·L^-1^) ; concentration en quantité de matière C = n ÷ V (mol·L^-1^) ; on passe de l’une à l’autre par ρ = C × M.',
      'Une procédure de préparation a des grandeurs d’entrée (masse exacte, volumes) et une grandeur de sortie (la concentration).',
      'Pour un volume exact, on utilise la verrerie jaugée : fiole jaugée (In) pour le volume final, pipette jaugée (Ex) pour prélever.',
      'Préparation par pesée : pesée, transfert quantitatif avec rinçage, dissolution, ajustage au trait, homogénéisation, étiquetage.',
      'Dilution : la quantité de soluté se conserve, C~0~ × V~0~ = C~1~ × V~1~ ; facteur de dilution F = C~0~ ÷ C~1~ = V~1~ ÷ V~0~.',
      'On note la masse exacte et on calcule la concentration réelle ; toute solution est étiquetée et tracée.',
    ],
    method: {
      title: 'Concevoir une procédure de préparation de solution',
      steps: [
        'Relever la concentration visée, son unité et le volume final à préparer.',
        'Choisir la méthode : **pesée** si l’on part d’un solide, **dilution** si l’on part d’une solution plus concentrée.',
        'Poser le calcul en trois lignes : équation aux grandeurs, aux unités, aux valeurs numériques (masse à peser ou volume à prélever).',
        'Choisir le matériel de précision : balance adaptée, fiole jaugée, pipette jaugée.',
        'Rédiger les étapes dans l’ordre en signalant les points critiques (transfert quantitatif, ajustage, homogénéisation).',
        'Prévoir l’étiquette : soluté, concentration réelle, date, préparateur, dangers.',
      ],
    },
    vocabulary: [
      { term: 'Solution', definition: 'Mélange homogène d’un ou plusieurs solutés dissous dans un solvant.' },
      { term: 'Soluté', definition: 'Espèce chimique dissoute dans le solvant.' },
      { term: 'Solvant', definition: 'Liquide majoritaire qui dissout le soluté (l’eau distillée au laboratoire).' },
      { term: 'Concentration en masse', definition: 'Masse de soluté par litre de solution : ρ = m ÷ V, en g·L^-1^.' },
      { term: 'Concentration en quantité de matière', definition: 'Quantité de matière de soluté par litre de solution : C = n ÷ V, en mol·L^-1^.' },
      { term: 'Masse exacte', definition: 'Masse réellement pesée, utilisée pour calculer la concentration réelle.' },
      { term: 'Transfert quantitatif', definition: 'Transfert de la totalité du soluté pesé dans la fiole, grâce au rinçage du matériel.' },
      { term: 'Trait de jauge', definition: 'Trait gravé qui repère le volume exact d’une fiole ou d’une pipette jaugée.' },
      { term: 'Ménisque', definition: 'Surface courbe du liquide dans un tube étroit ; on lit le volume au bas du ménisque.' },
      { term: 'Solution mère, solution fille', definition: 'Solution concentrée de départ et solution diluée obtenue à partir d’elle.' },
      { term: 'Facteur de dilution', definition: 'F = C~0~ ÷ C~1~ = V~1~ ÷ V~0~ : nombre de fois où la solution est diluée.' },
      { term: 'Conservation de la matière', definition: 'Lors d’une dilution, la quantité de soluté prélevée se retrouve entièrement dans la solution fille.' },
      { term: 'Exactitude', definition: 'Proximité entre la valeur obtenue et la valeur vraie attendue.' },
      { term: 'Solution étalon', definition: 'Solution de concentration exactement connue, utilisée comme référence.' },
    ],
    mistakes: [
      { wrong: 'Ajouter 100 mL d’eau au soluté pour obtenir 100 mL de solution.', right: 'On complète **jusqu’au** trait de jauge d’une fiole de 100 mL : le volume final est celui de la solution.' },
      { wrong: 'Laisser le volume en mL dans le calcul de ρ = m ÷ V.', right: 'On convertit en litres (100 mL = 0,100 L) ou on adapte l’unité du résultat.' },
      { wrong: 'Préparer une solution exacte avec une éprouvette ou un bécher.', right: 'On utilise une fiole jaugée pour le volume final et une pipette jaugée pour prélever.' },
      { wrong: 'Souffler la dernière goutte d’une pipette jaugée.', right: 'La pipette jaugée est étalonnée « Ex » : la goutte restante est prévue, on ne la souffle pas.' },
      { wrong: 'Écrire sur l’étiquette la concentration visée alors que la masse pesée est différente.', right: 'On recalcule et on écrit la concentration réelle obtenue avec la masse exacte.' },
    ],
    quiz: [
      { question: 'On dissout 2,5 g de glucose et on complète à 250,0 mL. La concentration en masse est :', choices: ['0,01 g·L^-1^', '10 g·L^-1^', '100 g·L^-1^', '625 g·L^-1^'], answer: 1, explanation: 'ρ = m ÷ V = 2,5 ÷ 0,2500 = 10 g·L^-1^.' },
      { question: 'Une solution de NaCl (M = 58,4 g·mol^-1^) a une concentration C = 0,10 mol·L^-1^. Sa concentration en masse vaut :', choices: ['0,58 g·L^-1^', '5,84 g·L^-1^', '58,4 g·L^-1^', '584 g·L^-1^'], answer: 1, explanation: 'ρ = C × M = 0,10 × 58,4 = 5,84 g·L^-1^.' },
      { question: 'Pour préparer exactement 100,0 mL de solution, on utilise :', choices: ['Une éprouvette graduée de 100 mL', 'Un bécher de 100 mL', 'Une fiole jaugée de 100 mL', 'Un erlenmeyer de 100 mL'], answer: 2, explanation: 'Seule la fiole jaugée donne un volume final exact.' },
      { question: 'Dans une préparation par pesée, le rinçage de la coupelle au-dessus de la fiole sert à :', choices: ['Nettoyer la coupelle pour le binôme suivant', 'Réaliser un transfert quantitatif du soluté', 'Refroidir la solution', 'Ajuster le volume au trait'], answer: 1, explanation: 'Tout le solide pesé doit arriver dans la fiole : c’est le transfert quantitatif.' },
      { question: 'On prélève 10,0 mL de solution mère et on complète à 200,0 mL. Le facteur de dilution est :', choices: ['2', '10', '20', '200'], answer: 2, explanation: 'F = V~1~ ÷ V~0~ = 200,0 ÷ 10,0 = 20.' },
      { question: 'Une solution mère à 5,0 g·L^-1^ est diluée au 1/10. La solution fille a une concentration de :', choices: ['0,50 g·L^-1^', '5,0 g·L^-1^', '50 g·L^-1^', '0,05 g·L^-1^'], answer: 0, explanation: 'ρ~1~ = ρ~0~ ÷ F = 5,0 ÷ 10 = 0,50 g·L^-1^.' },
      { question: 'Lors d’une dilution, ce qui reste constant est :', choices: ['La concentration du soluté', 'Le volume de la solution', 'La quantité de matière de soluté', 'La couleur de la solution'], answer: 2, explanation: 'La quantité de soluté prélevée se retrouve entièrement dans la fiole : conservation de la matière.' },
      { question: 'Le niveau de la solution dépasse le trait de jauge de la fiole. La concentration obtenue sera :', choices: ['Trop élevée', 'Trop faible', 'Exacte', 'Impossible à prévoir'], answer: 1, explanation: 'Le volume est trop grand pour la même quantité de soluté : la concentration est trop faible.' },
      { question: 'Juste avant de prélever la solution mère, la pipette jaugée doit être rincée avec :', choices: ['De l’eau distillée', 'La solution mère', 'De l’éthanol', 'Rien, elle doit être sèche et chaude'], answer: 1, explanation: 'Rincer avec la solution à prélever évite de la diluer avec les gouttes d’eau restées dans la pipette.' },
    ],
    exercises: [
      {
        title: 'Préparer une solution de glucose',
        statement: ['On veut préparer 250,0 mL de solution de glucose (M = 180,2 g·mol^-1^) à C = 0,0500 mol·L^-1^.', 'a) Calcule la masse de glucose à peser (équations aux grandeurs, aux unités, aux valeurs numériques). b) Calcule la concentration en masse de cette solution. c) Cite le matériel indispensable.'],
        answer: ['a) m = C × V × M ; g = mol·L^-1^ × L × g·mol^-1^ ; m = 0,0500 × 0,2500 × 180,2 = 2,25 g.', 'b) ρ = C × M = 0,0500 × 180,2 = 9,01 g·L^-1^ (ou ρ = m ÷ V = 2,25 ÷ 0,2500 = 9,00 g·L^-1^, l’écart venant de l’arrondi de m).', 'c) Balance (de préférence analytique), coupelle de pesée, spatule, entonnoir, fiole jaugée de 250 mL avec bouchon, pissette d’eau distillée, pipette compte-gouttes.'],
      },
      {
        title: 'Dilutions successives',
        statement: 'Une suspension bactérienne est diluée trois fois de suite au 1/10 (1 mL dans 9 mL de diluant à chaque fois). Quel est le facteur de dilution final ? Quelle est la concentration de la dernière dilution si la suspension de départ contient 4,0 × 10^8^ bactéries par mL ?',
        answer: 'Les facteurs se multiplient : F = 10 × 10 × 10 = 1 000 (dilution 10^-3^). Concentration finale : 4,0 × 10^8^ ÷ 1 000 = 4,0 × 10^5^ bactéries par mL.',
      },
      {
        title: 'Choisir une stratégie de dilution',
        statement: 'On dispose d’une solution étalon de protéines à 2,00 g·L^-1^ et on veut 100,0 mL de solution à 0,100 g·L^-1^. Le matériel disponible comprend des pipettes jaugées de 5 mL et 10 mL et des fioles jaugées de 50 mL et 100 mL. a) Calcule le facteur de dilution. b) Propose une procédure avec ce matériel. c) Pourquoi une dilution directe est-elle préférable à plusieurs dilutions successives quand c’est possible ?',
        answer: ['a) F = 2,00 ÷ 0,100 = 20.', 'b) Prélever 5,00 mL de solution étalon à la pipette jaugée de 5 mL et compléter à 100,0 mL en fiole jaugée de 100 mL (100 ÷ 5 = 20), puis homogénéiser.', 'c) Chaque dilution ajoute une petite erreur (prélèvement, ajustage) : moins il y a d’étapes, plus la solution finale est exacte. Les dilutions successives sont réservées aux grands facteurs de dilution (100, 1 000…).'],
      },
    ],
    selfCheck: [
      'Je sais définir soluté, solvant, solution et calculer une concentration en masse et une concentration en quantité de matière.',
      'Je sais passer de C à ρ avec la masse molaire.',
      'Je sais identifier les grandeurs d’entrée et la grandeur de sortie d’une procédure.',
      'Je sais choisir la verrerie et la balance adaptées et expliquer la différence entre In et Ex.',
      'Je sais préparer une solution par pesée en respectant la gestuelle et les points critiques.',
      'Je sais calculer un facteur de dilution et le volume à prélever, et réaliser la dilution.',
      'Je sais rédiger une étiquette complète pour une solution préparée.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Concentration massique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Concentration_massique' },
      { title: 'Concentration molaire — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Concentration_molaire' },
      { title: 'Fiole jaugée — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Fiole_jaug%C3%A9e' },
      { title: 'Pipette — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Pipette' },
    ],
  },
};

export default lesson;
