import { img } from '../media';
import photoMetrologie from '../../../assets/visuals/photo-metrologie-lg.webp';
import menisque from '../../../assets/courses/premiere/module-c-mesures/menisque.webp';
import cibles from '../../../assets/courses/premiere/module-c-mesures/cibles.webp';
import verrerie from '../../../assets/courses/premiere/module-c-mesures/verrerie.webp';
import etalonnage from '../../../assets/courses/premiere/module-c-mesures/etalonnage.webp';

const IMG = {
  pesee: img(photoMetrologie, 'Main gantée qui délivre de l’eau avec une micropipette dans un bécher posé sur une balance de précision à volets vitrés.', 'photo', 1536, 1024),
  menisque: img(menisque, 'Schéma de la lecture d’un volume : col d’une fiole jaugée avec le trait de jauge, le bas du ménisque tangent au trait et trois positions de l’œil (trop haut, à hauteur du trait, trop bas).', 'schema', 1400, 933),
  cibles: img(cibles, 'Quatre cibles : points groupés au centre (juste et fidèle), groupés loin du centre (fidèle mais pas juste), dispersés autour du centre (juste mais pas fidèle), dispersés loin du centre (ni juste ni fidèle).', 'schema', 1400, 933),
  verrerie: img(verrerie, 'Schéma de six pièces de verrerie : pipette jaugée, pipette graduée, burette, fiole jaugée, éprouvette graduée et bécher.', 'schema', 1400, 933),
  etalonnage: img(etalonnage, 'Graphique de la gamme d’étalonnage du colorant E131 : absorbance à 638 nm en fonction de la concentration en masse, de 0 à 5 mg par litre, droite passant par l’origine et lecture de l’essai à A = 0,463.', 'schema', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'module-c-mesures',
  duration: 'Environ 4 séances, à remobiliser dans tous les TP',
  hook: {
    image: IMG.pesee,
    question: 'Ta micropipette est réglée sur 1 000 µL. Délivre-t-elle vraiment 1 000 µL ?',
    text: 'Un dosage de glucose, un dénombrement de bactéries, le contrôle d’un médicament : en biotechnologies, des décisions importantes reposent sur des nombres. Mais un nombre seul ne vaut rien si l’on ne sait pas comment il a été obtenu et quelle confiance lui accorder. Dans ce chapitre, tu apprends les bases de la métrologie, la science de la mesure : écrire une grandeur, choisir le bon instrument, étalonner, calculer, exprimer un résultat avec son incertitude et vérifier qu’il est acceptable.',
  },
  objectives: [
    'Écrire correctement une grandeur (symbole, indices, valeur, unité) et relier une grandeur dérivée aux grandeurs de base.',
    'Choisir et utiliser un instrument de mesure à partir de ses caractéristiques métrologiques (classe, tolérance, verrerie « In » ou « Ex »).',
    'Analyser une procédure : étapes de mesure, points critiques, grandeurs d’influence, spécificité, seuil de détectabilité, intervalle de mesure.',
    'Déterminer une valeur mesurée grâce à un étalon unique ou à une gamme d’étalonnage, en posant les équations aux grandeurs, aux unités et aux valeurs numériques.',
    'Exprimer un résultat de mesure avec l’incertitude donnée et un nombre de chiffres cohérent.',
    'Vérifier l’exactitude d’une série de mesures avec un étalon de contrôle et rechercher l’origine d’une erreur.',
  ],
  prerequisites: [
    'Les conversions d’unités et les puissances de 10 (1 mL = 10^-3^ L ; 1 mg = 10^-3^ g).',
    'La proportionnalité, la résolution d’une équation du premier degré et la règle d’arrondi.',
    'La concentration en masse : ρ = m ÷ V (chapitre « Préparer des solutions »).',
  ],
  program: [
    'Utiliser les symboles des grandeurs ; mettre en lien une grandeur dérivée et les grandeurs de base associées ; respecter les conventions d’écriture (indices, unités).',
    'Choisir un instrument en tenant compte de ses caractéristiques métrologiques ; utiliser un appareil de mesure à l’aide d’une fiche technique.',
    'Repérer les étapes de mesure d’une procédure ; identifier les points critiques ; qualifier les caractéristiques métrologiques d’une procédure.',
    'Utiliser la relation d’étalonnage avec un étalon unique ou une courbe d’étalonnage pour déterminer la valeur mesurée.',
    'Établir l’équation aux grandeurs, l’équation aux unités et l’équation aux valeurs numériques ; valider un calcul ; utiliser l’écriture scientifique.',
    'Exprimer le résultat de mesure à l’aide de l’incertitude donnée.',
    'Utiliser un document de métrologie pour vérifier l’exactitude de mesure grâce à un étalon de contrôle et statuer sur l’acceptabilité des valeurs mesurées.',
    'Rechercher l’origine d’un défaut d’exactitude (erreurs systématique, aléatoire, grossière).',
  ],

  course: {
    parts: [
      {
        title: 'Grandeurs, unités et conventions d’écriture',
        intro: 'Avant de mesurer, il faut savoir exactement ce que l’on mesure et comment l’écrire. C’est le vocabulaire commun de tous les laboratoires du monde.',
        blocks: [
          { type: 'p', text: 'Au laboratoire, presque tout se termine par un nombre : une masse, un volume, une absorbance, une concentration. Pour que ce nombre ait un sens, il faut savoir **quelle grandeur** il exprime, **dans quelle unité**, et **avec quelle confiance**. C’est l’objet de la **métrologie**, la science de la mesure. Elle est indispensable à toute démarche **qualité** : un laboratoire d’analyses médicales doit prouver que ses résultats sont fiables.' },
          { type: 'definition', term: 'Grandeur', text: 'propriété d’un objet, d’une substance ou d’un phénomène que l’on peut exprimer par un **nombre** associé à une **unité** : masse, volume, temps, concentration… La **valeur** d’une grandeur s’écrit toujours « nombre + unité », par exemple m = 2,50 g.' },
          { type: 'definition', term: 'Mesurande et mesurage', text: 'le **mesurande** est la grandeur que l’on veut mesurer (par exemple la concentration en masse de glucose d’un sérum). Le **mesurage** est l’ensemble des opérations réalisées pour obtenir sa valeur.' },
          {
            type: 'table',
            caption: 'Les sept grandeurs de base du Système international (SI)',
            head: ['Grandeur de base', 'Symbole de la grandeur', 'Unité SI', 'Symbole de l’unité'],
            rows: [
              ['Longueur', 'l', 'mètre', 'm'],
              ['Masse', 'm', 'kilogramme', 'kg'],
              ['Temps', 't', 'seconde', 's'],
              ['Intensité du courant électrique', 'I', 'ampère', 'A'],
              ['Température thermodynamique', 'T', 'kelvin', 'K'],
              ['Quantité de matière', 'n', 'mole', 'mol'],
              ['Intensité lumineuse', 'I~v~', 'candela', 'cd'],
            ],
          },
          { type: 'p', text: 'Toutes les autres grandeurs sont des **grandeurs dérivées** : elles se définissent à partir des grandeurs de base, et leur unité se déduit de cette définition. Vérifier qu’une unité est cohérente avec la définition de la grandeur permet de repérer beaucoup d’erreurs de calcul.' },
          {
            type: 'table',
            caption: 'Quelques grandeurs dérivées utilisées en biotechnologies',
            head: ['Grandeur dérivée', 'Symbole', 'Définition', 'Unité usuelle au laboratoire'],
            rows: [
              ['Volume', 'V', 'longueur au cube', 'm^3^ dans le SI ; au laboratoire, le litre : 1 L = 1 dm^3^ = 10^-3^ m^3^'],
              ['Concentration en masse', 'ρ', 'masse de soluté ÷ volume de solution', 'g·L^-1^, mg·L^-1^ (SI : kg·m^-3^)'],
              ['Concentration en quantité de matière', 'C', 'quantité de matière de soluté ÷ volume de solution', 'mol·L^-1^ (SI : mol·m^-3^)'],
              ['Masse volumique', 'ρ', 'masse d’un corps ÷ volume de ce corps', 'g·mL^-1^ ou kg·m^-3^ ; eau à 20 °C : 998,2 g·L^-1^'],
              ['Masse molaire', 'M', 'masse d’une mole d’entités', 'g·mol^-1^'],
            ],
          },
          { type: 'definition', term: 'Indices', text: 'précisions ajoutées au symbole pour dire **de quoi** on parle. On indique l’**entité** (la substance mesurée) et la **matrice** (le milieu où elle se trouve) : ρ(glucose ; sérum) se lit « concentration en masse de glucose dans le sérum ».' },
          { type: 'example', title: 'pourquoi les indices comptent', text: 'Écrire « ρ = 1,0 g·L^-1^ » ne suffit pas. ρ(glucose ; sérum) = 1,0 g·L^-1^ est une glycémie normale, alors que ρ(glucose ; urine) = 1,0 g·L^-1^ est anormal : chez une personne en bonne santé, l’urine ne contient pratiquement pas de glucose. Même nombre, même unité, mais pas du tout la même information.' },
          {
            type: 'list',
            title: 'Les conventions d’écriture à respecter',
            items: [
              'Le symbole de la grandeur s’écrit en italique quand on peut (ρ, m, V) ; le symbole de l’unité en caractères droits, sans point final et sans « s » au pluriel : 25 mL, et non « 25 mLs ».',
              'Une **espace** sépare le nombre de l’unité : 37 °C, 2,5 mg.',
              'On respecte les majuscules et minuscules : L pour litre, g pour gramme, mol pour mole, K pour kelvin ; « G » ou « Kg » sont faux.',
              'Les unités composées s’écrivent avec un point médian et des exposants : g·L^-1^, plutôt que g/L.',
              'Les nombres décimaux s’écrivent avec une virgule ; les grands nombres sont groupés par trois : 1 000 µL.',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Une valeur de grandeur = un nombre + une unité ; le mesurande est la grandeur que l’on veut mesurer.',
              'Sept grandeurs de base (SI) ; toutes les autres sont dérivées, et leur unité se déduit de leur définition.',
              'Les indices précisent l’entité et la matrice : ρ(glucose ; sérum).',
            ],
          },
        ],
      },

      {
        title: 'Choisir et utiliser un instrument de mesure',
        intro: 'On ne prélève pas 10 mL de la même façon pour arroser une culture ou pour préparer une solution étalon. Le choix de l’instrument conditionne la qualité du résultat.',
        blocks: [
          { type: 'p', text: 'Chaque instrument a des **caractéristiques métrologiques** indiquées sur l’objet ou dans sa **fiche technique** : le volume ou l’étendue de mesure, la classe de précision, la tolérance, la température de référence. Choisir un instrument, c’est vérifier que ces caractéristiques sont adaptées à l’exactitude demandée.' },
          { type: 'figure', image: IMG.verrerie, caption: 'La verrerie de mesure des volumes. En vert, la verrerie **jaugée** : un seul trait de jauge, donc un seul volume, mais très exact.', size: 'wide' },
          {
            type: 'compare',
            title: 'Verrerie jaugée ou graduée ?',
            columns: [
              { title: 'Verrerie jaugée', subtitle: 'pipette jaugée, fiole jaugée', items: ['Un seul trait de jauge : un seul volume possible.', 'Très exacte (tolérance faible).', 'Pour les volumes qui comptent dans le calcul : solution étalon, dilution, prise d’essai.'] },
              { title: 'Verrerie graduée', subtitle: 'pipette graduée, burette, éprouvette', items: ['Plusieurs graduations : des volumes variables.', 'Exactitude variable : bonne pour la burette, faible pour l’éprouvette.', 'Le bécher et l’erlenmeyer portent des graduations indicatives : ils ne servent jamais à mesurer.'] },
            ],
          },
          { type: 'definition', term: 'Verrerie « In » et « Ex »', text: 'la mention **In** signifie que l’instrument est étalonné pour **contenir** le volume indiqué (fiole jaugée, éprouvette) ; la mention **Ex** signifie qu’il est étalonné pour **délivrer** ce volume (pipette, burette). Une pipette « Ex » tient compte de la petite goutte qui reste dans la pointe : il ne faut **pas souffler** cette dernière goutte.' },
          {
            type: 'table',
            caption: 'Extrait de fiches techniques : tolérances de la verrerie de classe A à 20 °C (valeurs usuelles des normes)',
            head: ['Instrument', 'Mention', 'Tolérance', 'Usage'],
            rows: [
              ['Pipette jaugée 10 mL', 'Ex', '± 0,02 mL', 'Prélever et délivrer un volume précis'],
              ['Pipette graduée 10 mL', 'Ex', '± 0,05 mL', 'Prélever un volume variable, moins exactement'],
              ['Burette 25 mL', 'Ex', '± 0,03 mL', 'Verser un volume variable lu avec précision (dosages)'],
              ['Fiole jaugée 100 mL', 'In', '± 0,10 mL', 'Préparer un volume précis de solution'],
              ['Éprouvette graduée 100 mL', 'In (le plus souvent)', '± 0,5 mL', 'Mesurer un volume approximatif'],
              ['Micropipette P1000', 'Ex', 'environ ± 1 % au volume maximal (selon le fabricant)', 'Prélever de 100 à 1 000 µL'],
            ],
          },
          { type: 'definition', term: 'Tolérance', text: 'écart maximal garanti par le fabricant entre le volume indiqué et le volume réel. Une pipette jaugée de 10 mL « ± 0,02 mL » délivre un volume compris entre 9,98 mL et 10,02 mL : c’est l’**intervalle de confiance des indications** de l’instrument.' },
          { type: 'definition', term: 'Fiabilité', text: 'aptitude d’un instrument à fournir des indications dignes de confiance dans ses conditions d’utilisation. Elle n’est jamais acquise une fois pour toutes : pipettes, balances et spectrophotomètres sont **vérifiés régulièrement** (par exemple le contrôle des micropipettes par pesée de la séance AT5), puis réglés ou réparés si besoin.' },
          { type: 'example', title: 'tolérance relative', text: ['Pour comparer des instruments, on calcule la tolérance relative : tolérance ÷ volume × 100.', 'Pipette jaugée de 10 mL : 0,02 ÷ 10 × 100 = **0,2 %**. Mesurer 10 mL avec une éprouvette de 100 mL (± 0,5 mL) : 0,5 ÷ 10 × 100 = **5 %**, soit 25 fois moins exact. On choisit toujours un instrument dont le volume est proche du volume à mesurer.'] },
          { type: 'figure', image: IMG.menisque, caption: 'Lire un volume : le **bas du ménisque** doit être tangent au trait, l’œil exactement **à hauteur du trait**. Un œil trop haut ou trop bas provoque une erreur de lecture appelée erreur de parallaxe.', size: 'normal' },
          { type: 'note', title: 'Liquides colorés et opaques', text: 'Quand le liquide est trop foncé pour voir le bas du ménisque (permanganate, par exemple), on lit le haut du ménisque, et on le fait de la même façon pour toutes les lectures.' },
          {
            type: 'steps',
            title: 'Utiliser une balance de précision avec sa fiche technique',
            items: [
              'Vérifier sur la fiche technique la **portée** (masse maximale) et l’**échelon** (la plus petite variation affichée, par exemple 0,001 g) : ils doivent convenir à la masse à peser.',
              'Contrôler la mise à niveau grâce à la bulle ; la régler si besoin.',
              'Poser le récipient de pesée au centre du plateau, fermer les volets, faire la **tare** (remise à zéro).',
              'Ajouter le produit hors de la balance si possible, puis fermer les volets avant de lire la valeur stabilisée.',
              'Noter la masse avec tous les chiffres affichés et son unité ; nettoyer le plateau.',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Verrerie jaugée = un seul volume, très exact ; verrerie graduée = volumes variables, exactitude variable.',
              '« In » : étalonné pour contenir (fiole) ; « Ex » : étalonné pour délivrer (pipette, burette), sans souffler la dernière goutte.',
              'La tolérance indique l’écart maximal garanti ; on choisit un instrument de volume proche du volume à mesurer.',
              'On lit le bas du ménisque, l’œil à hauteur du trait.',
            ],
          },
        ],
      },

      {
        title: 'Analyser une procédure de mesure',
        intro: 'Une procédure de dosage contient plusieurs étapes de mesure, et certaines comptent plus que d’autres. Les repérer, c’est savoir où être le plus rigoureux.',
        blocks: [
          { type: 'p', text: 'Dans une procédure, les **étapes de mesure** sont celles où l’on obtient une valeur qui entre dans le calcul final : une pesée, un prélèvement de volume, une lecture d’absorbance, un comptage de colonies.' },
          { type: 'definition', term: 'Indication et mesurande', text: 'l’**indication** est la valeur affichée par l’instrument ; le **mesurande** est la grandeur recherchée. Ce n’est pas la même chose : le spectrophotomètre indique une **absorbance**, mais le mesurande est une **concentration** ; lors du contrôle d’une pipette, la balance indique une **masse**, mais le mesurande est le **volume** délivré.' },
          { type: 'definition', term: 'Point critique', text: 'étape de la procédure dont la mauvaise réalisation modifie fortement le résultat : prise d’essai, dilution, temps de réaction, réglage du zéro du spectrophotomètre, homogénéisation…' },
          { type: 'definition', term: 'Grandeur d’influence', text: 'grandeur qui n’est pas le mesurande mais qui modifie le résultat : la **température** et la **durée** d’une réaction enzymatique, le pH, la longueur d’onde de lecture, la température de l’eau lors d’un contrôle de pipette par pesée.' },
          { type: 'definition', term: 'Spécificité', text: 'aptitude d’une méthode à ne mesurer **que** le mesurande, sans être perturbée par d’autres substances. Le dosage du glucose par la glucose oxydase est spécifique du glucose ; la méthode au DNS (acide dinitrosalicylique) réagit avec tous les sucres réducteurs (glucose, fructose, maltose, lactose…).' },
          { type: 'definition', term: 'Seuil de détectabilité', text: 'plus petite valeur du mesurande que la méthode permet de détecter. En dessous, le résultat est « non détecté », ce qui ne veut pas dire « absent ».' },
          { type: 'definition', term: 'Intervalle de mesure', text: 'domaine de valeurs du mesurande dans lequel la méthode donne des résultats valides, par exemple l’étendue de la gamme d’étalonnage. Si un essai sort de cet intervalle, on le **dilue** et on refait la mesure.' },
          {
            type: 'cards',
            items: [
              { title: 'Étapes de mesure', text: 'Où obtient-on une valeur utilisée dans le calcul ?', tone: 'blue' },
              { title: 'Points critiques', text: 'Quelles étapes, mal faites, fausseraient le résultat ?', tone: 'red' },
              { title: 'Grandeurs d’influence', text: 'Température, durée, pH : qu’est-ce qui doit être maîtrisé ?', tone: 'yellow' },
              { title: 'Domaine de validité', text: 'La méthode est-elle spécifique ? L’essai est-il dans l’intervalle de mesure, au-dessus du seuil de détectabilité ?', tone: 'green' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'L’indication est la valeur affichée ; le mesurande est la grandeur recherchée.',
              'Les points critiques et les grandeurs d’influence doivent être repérés et maîtrisés.',
              'Une méthode se qualifie par sa spécificité, son seuil de détectabilité et son intervalle de mesure.',
            ],
          },
        ],
      },

      {
        title: 'Étalonner : étalon unique et gamme d’étalonnage',
        intro: 'Un spectrophotomètre ne connaît pas la concentration de ton échantillon : il mesure une absorbance. L’étalonnage permet de passer de l’une à l’autre.',
        blocks: [
          { type: 'definition', term: 'Étalonnage', text: 'opération qui établit la relation entre l’**indication** d’un instrument et la **valeur du mesurande**, à l’aide de solutions **étalons** de concentration exactement connue.' },
          { type: 'p', text: 'Pour une substance colorée, l’absorbance A est **proportionnelle** à sa concentration, dans un certain intervalle (loi de Beer-Lambert, vue dans le chapitre sur les dosages) : A = k × ρ. Le coefficient k s’obtient à l’aide d’étalons.' },
          {
            type: 'formula',
            title: 'Étalon unique',
            expression: 'ρ~essai~ = ρ~étalon~ × A~essai~ ÷ A~étalon~',
            legend: [
              { symbol: 'ρ~étalon~', meaning: 'concentration connue de l’étalon' },
              { symbol: 'A~essai~, A~étalon~', meaning: 'absorbances mesurées dans les mêmes conditions' },
            ],
          },
          { type: 'example', title: 'étalon unique', text: 'Un étalon de colorant E131 à 3,0 mg·L^-1^ donne A = 0,551. L’essai donne A = 0,463. ρ~essai~ = 3,0 × 0,463 ÷ 0,551 ≈ **2,5 mg·L^-1^**. Cette méthode suppose que la proportionnalité est vérifiée : elle est rapide mais moins sûre qu’une gamme.' },
          { type: 'definition', term: 'Gamme d’étalonnage', text: 'série d’étalons de concentrations croissantes, traités comme les essais. On trace la **courbe d’étalonnage** A = f(ρ), qui est une droite passant par l’origine dans l’intervalle de mesure, puis on lit ou on calcule la concentration de l’essai.' },
          { type: 'figure', image: IMG.etalonnage, caption: 'Gamme d’étalonnage du bleu patenté V (E131) lue à 638 nm. La droite a pour coefficient directeur k ≈ 0,184 L·mg^-1^. Lecture graphique de l’essai : A = 0,463 correspond à ρ ≈ 2,5 mg·L^-1^.', size: 'wide' },
          {
            type: 'steps',
            title: 'Exploiter une gamme d’étalonnage',
            items: [
              'Faire le zéro du spectrophotomètre avec le **blanc** (tube sans colorant), à la longueur d’onde choisie.',
              'Mesurer l’absorbance de chaque étalon, puis des essais, dans les mêmes conditions.',
              'Tracer A en fonction de ρ et vérifier l’alignement des points (un point isolé signale une erreur de préparation).',
              'Vérifier que l’absorbance de l’essai est **dans la gamme** ; sinon, diluer l’essai.',
              'Lire graphiquement ou calculer ρ = A ÷ k, puis tenir compte de la dilution éventuelle de l’essai.',
            ],
          },
          { type: 'warning', title: 'Jamais d’extrapolation', text: 'Si l’essai a une absorbance plus grande que celle du dernier étalon, on ne prolonge pas la droite : rien ne garantit que la proportionnalité est encore vraie. On dilue l’essai pour le ramener dans l’intervalle de mesure.' },
          {
            type: 'retenir',
            items: [
              'L’étalonnage relie l’indication (absorbance) au mesurande (concentration) grâce à des étalons.',
              'Étalon unique : ρ~essai~ = ρ~étalon~ × A~essai~ ÷ A~étalon~ ; gamme : droite A = k × ρ.',
              'On ne lit une concentration que dans l’intervalle de la gamme ; sinon, on dilue.',
            ],
          },
        ],
      },

      {
        title: 'Du modèle de mesure au résultat de mesure',
        intro: 'Le calcul final n’est pas une formalité : il se construit en trois équations, se vérifie, puis s’écrit avec son incertitude.',
        blocks: [
          { type: 'definition', term: 'Modèle de mesure', text: 'relation mathématique qui relie la **grandeur de sortie** (le mesurande) aux **grandeurs d’entrée** (les valeurs mesurées ou connues utilisées dans le calcul).' },
          {
            type: 'steps',
            title: 'Les trois équations du calcul',
            items: [
              { title: 'Équation aux grandeurs', text: 'On écrit la relation avec les symboles et les indices, sans aucun nombre. Exemple, pour une boisson diluée F fois : ρ(E131 ; boisson) = F × A~essai~ ÷ k.' },
              { title: 'Équation aux unités', text: 'On remplace chaque grandeur par son unité et on vérifie que l’on retrouve l’unité du mesurande : (sans unité) × (sans unité) ÷ (L·mg^-1^) = mg·L^-1^. L’équation est **homogène**.' },
              { title: 'Équation aux valeurs numériques', text: 'On remplace par les valeurs : ρ(E131 ; boisson) = 10 × 0,463 ÷ 0,184 = 25,16… mg·L^-1^.' },
            ],
          },
          { type: 'p', text: '**Valider un calcul**, c’est vérifier que le résultat est vraisemblable : bonne unité, ordre de grandeur cohérent (une boisson diluée au 1/10 doit être environ 10 fois plus concentrée que le tube lu), valeur de l’essai située dans la gamme.' },
          { type: 'definition', term: 'Écriture scientifique', text: 'écriture d’un nombre sous la forme a × 10^n^, avec 1 ≤ a < 10 et un exposant n qui est un nombre entier. Exemples : 0,000 25 g = 2,5 × 10^-4^ g ; 15 000 UFC·mL^-1^ = 1,5 × 10^4^ UFC·mL^-1^.' },
          { type: 'definition', term: 'Chiffres significatifs', text: 'tous les chiffres d’un nombre, à partir du premier chiffre non nul en partant de la gauche. 25,2 en compte trois ; 0,025 en compte deux ; 2,50 × 10^-3^ en compte trois (le zéro final est significatif : il indique la précision).' },
          { type: 'definition', term: 'Valeur mesurée et résultat de mesure', text: 'la **valeur mesurée** est le nombre obtenu (25,16 mg·L^-1^). Le **résultat de mesure** associe cette valeur à son **incertitude** et à son unité : il indique l’intervalle dans lequel se trouve, avec une confiance élevée, la valeur du mesurande.' },
          {
            type: 'formula',
            title: 'Écriture d’un résultat de mesure',
            expression: 'ρ = (valeur ± U) unité',
            legend: [
              { symbol: 'U', meaning: 'incertitude, donnée par le document ou le professeur' },
              { symbol: 'valeur', meaning: 'arrondie à la même décimale que l’incertitude' },
            ],
          },
          {
            type: 'example',
            title: 'écrire le résultat du dosage',
            text: [
              'Valeur mesurée : 25,16 mg·L^-1^ ; incertitude donnée : U = 0,8 mg·L^-1^.',
              'L’incertitude porte sur les dixièmes : on arrondit la valeur au dixième, soit 25,2. Résultat : **ρ(E131 ; boisson) = (25,2 ± 0,8) mg·L^-1^**.',
              'Interprétation : la concentration réelle se situe très probablement entre 24,4 et 26,0 mg·L^-1^. Écrire « 25,163 mg·L^-1^ » serait faux : ces chiffres ne sont pas significatifs.',
            ],
          },
          { type: 'note', title: 'Et en Terminale ?', text: 'En Première, l’incertitude t’est donnée. En Terminale, tu apprendras à l’estimer toi-même à partir de la dispersion de mesures répétées (écart-type, incertitude-type).' },
          {
            type: 'retenir',
            items: [
              'Modèle de mesure : grandeur de sortie = fonction des grandeurs d’entrée.',
              'Trois équations successives : aux grandeurs, aux unités (homogénéité), aux valeurs numériques.',
              'Un résultat de mesure s’écrit (valeur ± U) unité, la valeur étant arrondie à la même décimale que l’incertitude.',
            ],
          },
        ],
      },

      {
        title: 'Vérifier l’exactitude des valeurs mesurées',
        intro: 'Une valeur peut sembler raisonnable et être fausse. Comment le savoir ? En comparant à une valeur de référence, et en analysant les erreurs.',
        blocks: [
          { type: 'definition', term: 'Erreur de mesure', text: 'différence entre la valeur mesurée et une valeur de référence : erreur = valeur mesurée − valeur de référence. Toute mesure comporte une erreur ; le but est qu’elle reste acceptable.' },
          {
            type: 'table',
            caption: 'Les trois types d’erreurs',
            head: ['Type d’erreur', 'Caractéristique', 'Exemples', 'Comment la limiter ?'],
            rows: [
              ['Systématique', 'Toujours dans le **même sens**, de même valeur ou presque, d’une mesure à l’autre', 'Pipette déréglée, balance mal tarée, étalon mal préparé, lecture toujours faite œil trop haut', 'Étalonner, vérifier le matériel, utiliser un étalon de contrôle'],
              ['Aléatoire', 'Varie de façon **imprévisible**, tantôt en plus, tantôt en moins', 'Petites variations du geste de pipetage, de la lecture, de la température', 'Répéter les mesures et calculer une moyenne ; améliorer le geste'],
              ['Grossière', 'Faute ponctuelle, souvent importante', 'Tubes inversés, mauvais volume prélevé, oubli du zéro, erreur de recopie', 'Rigueur, relecture, repérage des valeurs aberrantes ; refaire la mesure'],
            ],
          },
          { type: 'definition', term: 'Justesse et fidélité', text: 'la **justesse** est l’étroitesse de l’accord entre la **moyenne** de mesures répétées et la valeur de référence : elle est dégradée par les erreurs systématiques. La **fidélité** est l’étroitesse de l’accord entre les valeurs mesurées répétées entre elles (faible dispersion) : elle est dégradée par les erreurs aléatoires. Une mesure **exacte** est à la fois juste et fidèle.' },
          { type: 'figure', image: IMG.cibles, caption: 'La cible de la métrologie : le centre représente la valeur de référence, chaque point une valeur mesurée. Des points groupés traduisent une bonne fidélité ; un groupe centré sur la cible, une bonne justesse.', size: 'wide' },
          {
            type: 'example',
            title: 'le contrôle d’une micropipette (séance AT5)',
            text: [
              'On délivre 5 fois 1 000 µL d’eau à 20 °C sur une balance. Valeur de référence : m = ρ(eau ; 20 °C) × V = 998,2 g·L^-1^ × 0,001 000 L ≈ 0,998 g.',
              'Pipette n° 1 : 0,996 ; 1,001 ; 0,994 ; 0,999 ; 0,997 g. Moyenne : 0,9974 g ; écart moyen ≈ −0,0006 g, soit environ −0,06 % : **juste** (tolérance 1 %) ; valeurs proches les unes des autres : **fidèle**.',
              'Pipette n° 2 : 0,962 ; 0,965 ; 0,963 ; 0,961 ; 0,964 g. Moyenne : 0,963 g ; écart ≈ −0,035 g, soit −3,5 % : **fidèle mais pas juste**. L’erreur est systématique : pipette déréglée ou cône mal adapté.',
            ],
          },
          { type: 'definition', term: 'Erreur maximale tolérée (EMT) et intervalle d’acceptabilité', text: 'l’**EMT** est la plus grande erreur admise par un document de référence (fiche technique, norme, procédure du laboratoire). L’**intervalle d’acceptabilité** est [valeur cible − EMT ; valeur cible + EMT] : une valeur mesurée qui s’y trouve est acceptée.' },
          { type: 'definition', term: 'Étalon de contrôle', text: 'échantillon de valeur connue, **indépendant** des étalons de la gamme, traité exactement comme les essais. Si sa valeur mesurée est dans l’intervalle d’acceptabilité, la série de mesures est validée ; sinon, les résultats des essais sont rejetés et on recherche l’erreur.' },
          {
            type: 'compare',
            title: 'Deux étalons, deux rôles',
            columns: [
              { title: 'Étalon de dosage', items: ['Sert à **établir** la relation d’étalonnage (coefficient k).', 'Sa valeur est utilisée dans le calcul.'] },
              { title: 'Étalon de contrôle', items: ['Sert à **vérifier** que toute la procédure fonctionne.', 'Il est traité comme un essai ; sa valeur n’entre pas dans le calcul des essais.'] },
            ],
          },
          { type: 'p', text: 'Pour **rechercher l’origine** d’un défaut d’exactitude, on passe en revue les causes possibles avec la méthode des 5 M : le manipulateur (geste, lecture), le matériel (pipette, balance, cuve), la méthode (temps, ordre des étapes), le milieu (température) et la matière (réactifs, étalons périmés ou mal préparés).' },
          {
            type: 'retenir',
            items: [
              'Erreur systématique → défaut de **justesse** ; erreur aléatoire → défaut de **fidélité** ; erreur grossière → faute à corriger.',
              'Une valeur est acceptable si elle se trouve dans l’intervalle [valeur cible − EMT ; valeur cible + EMT].',
              'L’étalon de contrôle valide une série de mesures ; s’il est hors de l’intervalle, on recherche l’erreur (5 M) et on refait.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des documents et des résultats de TP. Réponds d’abord seul(e), en phrases complètes et avec les unités. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Écrire et relier des grandeurs',
        duration: '20 min',
        skills: ['Communiquer', 'Raisonner'],
        context: 'Voici des extraits de comptes rendus écrits par des élèves. Ton rôle : les corriger comme le ferait un relecteur rigoureux.',
        documents: [
          {
            label: 'Document 1',
            title: 'Extraits de comptes rendus',
            text: [
              'a) « La glycémie du patient est de 1,1. »',
              'b) « On a pesé 2,5 G de glucose. »',
              'c) « La concentration est de 0,15 mol/l. »',
              'd) « ρ = 9 g·L^-1^ » (pour une solution d’eau physiologique de NaCl).',
              'e) « Le volume est de 25mLs. »',
            ],
          },
        ],
        questions: [
          { text: 'Corrige chaque extrait en respectant les conventions d’écriture.', hint: 'Vérifie : unité présente, majuscules et minuscules, espace, indices.', answer: ['a) Il manque l’unité et les indices : ρ(glucose ; sang) = 1,1 g·L^-1^.', 'b) Le gramme s’écrit g minuscule : m(glucose) = 2,5 g.', 'c) Litre : L majuscule ; on préfère C = 0,15 mol·L^-1^.', 'd) Il manque les indices : ρ(NaCl ; eau physiologique) = 9 g·L^-1^.', 'e) Une espace et pas de « s » : V = 25 mL.'] },
          { text: 'Montre, à partir de sa définition, que la concentration en masse s’exprime en kg·m^-3^ dans le Système international.', answer: 'ρ = m ÷ V. La masse s’exprime en kg (grandeur de base) et le volume en m^3^ (longueur au cube). Donc ρ s’exprime en kg ÷ m^3^ = kg·m^-3^. Au laboratoire, on utilise g·L^-1^ ; or 1 g·L^-1^ = 10^-3^ kg ÷ 10^-3^ m^3^ = 1 kg·m^-3^.' },
          { text: 'Pourquoi l’extrait a) est-il dangereux dans un laboratoire d’analyses médicales ?', answer: 'Sans unité, « 1,1 » peut signifier 1,1 g·L^-1^ (glycémie normale à jeun, un peu haute) ou 1,1 mmol·L^-1^ (hypoglycémie sévère). Une erreur d’interprétation pourrait conduire à un mauvais traitement.' },
          { text: 'Quelle est la différence entre ρ(glucose ; sérum) et ρ(glucose ; urine) ?', answer: 'L’entité est la même (le glucose), mais la matrice change : la première est la concentration en masse de glucose dans le sérum sanguin, la seconde dans l’urine. Les valeurs normales sont très différentes (environ 1 g·L^-1^ dans le sérum, presque 0 dans l’urine).' },
        ],
      },
      {
        title: 'Choisir la verrerie et lire un volume',
        duration: '25 min',
        skills: ['Choisir', 'Calculer', 'Justifier'],
        context: 'Tu dois préparer 100,0 mL d’une solution étalon de colorant en diluant 10 fois une solution mère. Sur la paillasse : une pipette jaugée de 10 mL, une pipette graduée de 10 mL, une éprouvette de 100 mL, une fiole jaugée de 100 mL et un bécher de 100 mL.',
        documents: [
          { label: 'Document 2', title: 'La verrerie disponible', image: IMG.verrerie, caption: 'Verrerie de mesure des volumes.' },
          {
            label: 'Document 3',
            title: 'Extrait des fiches techniques (classe A, 20 °C)',
            blocks: [
              { type: 'table', head: ['Instrument', 'Mention', 'Tolérance'], rows: [['Pipette jaugée 10 mL', 'Ex', '± 0,02 mL'], ['Pipette graduée 10 mL', 'Ex', '± 0,05 mL'], ['Fiole jaugée 100 mL', 'In', '± 0,10 mL'], ['Éprouvette graduée 100 mL', 'In', '± 0,5 mL'], ['Bécher 100 mL', '—', 'graduations indicatives']] },
            ],
          },
        ],
        questions: [
          { text: 'Quels instruments choisis-tu pour prélever la solution mère et pour ajuster le volume final ? Justifie avec le document 3.', answer: 'La pipette jaugée de 10 mL pour prélever la solution mère (tolérance ± 0,02 mL, la plus faible) et la fiole jaugée de 100 mL pour le volume final (± 0,10 mL). Ce sont des volumes qui entrent dans le calcul de la concentration : il faut la verrerie la plus exacte.' },
          { text: 'Calcule la tolérance relative de la pipette jaugée et celle de l’éprouvette si on l’utilisait pour mesurer 10 mL. Conclus.', hint: 'Tolérance relative = tolérance ÷ volume mesuré × 100.', answer: 'Pipette jaugée : 0,02 ÷ 10 × 100 = 0,2 %. Éprouvette : 0,5 ÷ 10 × 100 = 5 %. L’éprouvette serait 25 fois moins exacte : elle ne convient pas pour une solution étalon.' },
          { text: 'Explique la différence entre les mentions « Ex » de la pipette et « In » de la fiole.', answer: 'La pipette est étalonnée pour délivrer 10 mL (Ex) : on laisse s’écouler le liquide sans souffler la dernière goutte. La fiole est étalonnée pour contenir 100 mL (In) quand le bas du ménisque est sur le trait de jauge.' },
          { text: 'En ajustant le trait de jauge de la fiole, un élève regarde le col de haut. Le volume réellement contenu sera-t-il trop grand ou trop petit ? Quel type d’erreur commet-il ?', hint: 'Regarde le schéma du ménisque : d’en haut, à quel moment le ménisque semble-t-il toucher le trait ?', answer: 'Vu d’en haut, le trait de jauge paraît plus bas qu’en réalité : l’élève s’arrête avant d’atteindre vraiment le trait, donc le volume est trop petit et la solution trop concentrée. S’il lit toujours ainsi, c’est une erreur systématique (erreur de parallaxe).' },
        ],
      },
      {
        title: 'Analyser une procédure de dosage',
        duration: '25 min',
        skills: ['Analyser', 'Identifier'],
        context: 'Un laboratoire contrôle la teneur en glucose de jus de fruits. Deux méthodes sont disponibles. Tu dois analyser la procédure retenue et comparer les deux méthodes.',
        documents: [
          {
            label: 'Document 4',
            title: 'Procédure : dosage du glucose par la glucose oxydase (GOD)',
            blocks: [
              {
                type: 'steps',
                items: [
                  'Diluer le jus au 1/20 : 5,00 mL de jus à la pipette jaugée, complétés à 100,0 mL en fiole jaugée.',
                  'Dans chaque tube : 20 µL de jus dilué (ou d’étalon) et 2,0 mL de réactif enzymatique, à la micropipette.',
                  'Incuber 10 min exactement à 37 °C (bain thermostaté).',
                  'Faire le zéro du spectrophotomètre avec le blanc réactif, à 505 nm.',
                  'Lire l’absorbance des étalons, du contrôle et des essais.',
                  'Calculer la concentration à l’aide de la gamme (0 à 2,0 g·L^-1^).',
                ],
              },
            ],
          },
          {
            label: 'Document 5',
            title: 'Comparaison des deux méthodes (extraits simplifiés de fiches techniques)',
            blocks: [
              { type: 'table', head: ['Caractéristique', 'Méthode GOD (enzymatique)', 'Méthode DNS (chimique)'], rows: [['Substances dosées', 'Glucose uniquement', 'Tous les sucres réducteurs (glucose, fructose, maltose…)'], ['Seuil de détectabilité', 'Environ 0,02 g·L^-1^', 'Environ 0,1 g·L^-1^'], ['Intervalle de mesure', '0 à 2,0 g·L^-1^', '0,1 à 1,0 g·L^-1^'], ['Conditions', '10 min à 37 °C', '5 min dans un bain-marie bouillant']] },
            ],
          },
        ],
        questions: [
          { text: 'Relève les étapes de mesure de la procédure du document 4.', answer: 'Les prélèvements de volumes (5,00 mL de jus, 100,0 mL de fiole, 20 µL d’échantillon, 2,0 mL de réactif) et la lecture des absorbances. Ce sont les valeurs qui entrent dans le calcul ou qui conditionnent le résultat.' },
          { text: 'Identifie deux points critiques et deux grandeurs d’influence. Justifie.', hint: 'Une grandeur d’influence n’est pas mesurée, mais elle modifie le résultat si elle varie.', answer: 'Points critiques : la dilution au 1/20 (une erreur se répercute sur le résultat final multiplié par 20), le prélèvement de 20 µL (très petit volume), le zéro avec le blanc réactif. Grandeurs d’influence : la température et la durée d’incubation, car la vitesse de la réaction enzymatique en dépend ; la longueur d’onde de lecture.' },
          { text: 'Le jus contient du glucose et du fructose. Quelle méthode faut-il choisir pour doser le glucose seul ? Utilise le bon vocabulaire.', answer: 'La méthode GOD, car elle est spécifique du glucose. La méthode DNS dose tous les sucres réducteurs : elle donnerait un résultat trop élevé, en ajoutant le fructose au glucose.' },
          { text: 'Le jus dilué donne une absorbance supérieure à celle de l’étalon le plus concentré. Que fais-tu ?', answer: 'L’essai est hors de l’intervalle de mesure : on ne prolonge pas la droite. On dilue davantage le jus (par exemple au 1/40) et on refait la mesure, en tenant compte de la nouvelle dilution dans le calcul.' },
          { text: 'Avec la méthode DNS, un jus très dilué donne « non détecté ». Peut-on conclure qu’il ne contient pas de sucres ?', answer: 'Non : la concentration est simplement inférieure au seuil de détectabilité de la méthode (environ 0,1 g·L^-1^). Il faut diluer moins ou utiliser une méthode plus sensible.' },
        ],
      },
      {
        title: 'Déterminer une concentration et écrire le résultat',
        duration: '30 min',
        skills: ['Calculer', 'Exploiter un graphique', 'Communiquer'],
        context: 'Tu dois déterminer la concentration en colorant E131 (bleu patenté V) d’une boisson. La boisson a été diluée au 1/10 avant la lecture au spectrophotomètre à 638 nm.',
        documents: [
          { label: 'Document 6', title: 'Courbe d’étalonnage', image: IMG.etalonnage, caption: 'Absorbance des étalons en fonction de leur concentration ; k ≈ 0,184 L·mg^-1^.' },
          {
            label: 'Document 7',
            title: 'Résultats du TP',
            blocks: [
              { type: 'table', head: ['Tube', 'ρ(E131 ; tube) en mg·L^-1^', 'Absorbance à 638 nm'], rows: [['Blanc', '0', '0,000'], ['Étalon 1', '1,0', '0,183'], ['Étalon 2', '2,0', '0,372'], ['Étalon 3', '3,0', '0,551'], ['Étalon 4', '4,0', '0,740'], ['Étalon 5', '5,0', '0,918'], ['Essai (boisson diluée au 1/10)', '?', '0,463']] },
              { type: 'p', text: 'Incertitude donnée par le professeur pour ce dosage : U = 0,8 mg·L^-1^ sur la concentration de la boisson.' },
            ],
          },
        ],
        questions: [
          { text: 'Lis graphiquement la concentration en E131 dans le tube d’essai.', answer: 'Pour A = 0,463, on lit ρ(E131 ; tube) ≈ 2,5 mg·L^-1^.' },
          { text: 'Retrouve ce résultat par le calcul avec l’étalon unique n° 3, puis avec le coefficient k de la droite.', answer: 'Étalon unique : ρ = 3,0 × 0,463 ÷ 0,551 ≈ 2,52 mg·L^-1^. Avec la droite : ρ = A ÷ k = 0,463 ÷ 0,184 ≈ 2,52 mg·L^-1^. Les deux méthodes concordent.' },
          { text: 'Écris l’équation aux grandeurs donnant ρ(E131 ; boisson), puis l’équation aux unités, puis l’équation aux valeurs numériques.', hint: 'La boisson est 10 fois plus concentrée que le tube lu : F = 10.', answer: ['Équation aux grandeurs : ρ(E131 ; boisson) = F × A~essai~ ÷ k.', 'Équation aux unités : (sans unité) × (sans unité) ÷ (L·mg^-1^) = mg·L^-1^ : l’équation est homogène.', 'Équation aux valeurs numériques : ρ(E131 ; boisson) = 10 × 0,463 ÷ 0,184 ≈ 25,16 mg·L^-1^.'] },
          { text: 'Valide ce calcul, puis écris le résultat de mesure avec l’incertitude donnée.', answer: 'Validation : l’unité est correcte, l’essai (A = 0,463) est dans la gamme, et la boisson est bien environ 10 fois plus concentrée que le tube (2,5 × 10 = 25). Résultat : ρ(E131 ; boisson) = (25,2 ± 0,8) mg·L^-1^, la valeur étant arrondie au dixième comme l’incertitude.' },
          { text: 'Exprime ce résultat en g·L^-1^ en écriture scientifique.', answer: '25,2 mg·L^-1^ = 25,2 × 10^-3^ g·L^-1^ = 2,52 × 10^-2^ g·L^-1^, soit ρ = (2,52 ± 0,08) × 10^-2^ g·L^-1^.' },
        ],
      },
      {
        title: 'Valider une série grâce à un étalon de contrôle',
        duration: '25 min',
        skills: ['Analyser', 'Décider', 'Argumenter'],
        context: 'Avec chaque série d’essais, quatre binômes ont dosé une solution de contrôle de bleu patenté V. Le document de métrologie du laboratoire précise : valeur cible 2,50 mg·L^-1^ ; erreur maximale tolérée (EMT) 0,15 mg·L^-1^.',
        documents: [
          {
            label: 'Document 8',
            title: 'Résultats de la solution de contrôle',
            blocks: [
              { type: 'table', head: ['Binôme', 'Absorbance du contrôle', 'ρ(E131 ; contrôle) en mg·L^-1^', 'Remarque notée dans le cahier'], rows: [['1', '0,459', '2,49', 'RAS'], ['2', '0,470', '2,55', 'RAS'], ['3', '0,512', '2,78', 'Cuve tenue par ses faces lisses'], ['4', '0,420', '2,28', 'Zéro fait avec une cuve rincée à l’eau du robinet, encore mouillée et bleutée']] },
              { type: 'p', text: 'Concentrations calculées avec k = 0,184 L·mg^-1^.' },
            ],
          },
          { label: 'Document 9', title: 'La cible de la métrologie', image: IMG.cibles, caption: 'Justesse et fidélité.' },
        ],
        questions: [
          { text: 'Calcule l’intervalle d’acceptabilité de la solution de contrôle.', answer: '[2,50 − 0,15 ; 2,50 + 0,15] = [2,35 ; 2,65] mg·L^-1^.' },
          { text: 'Pour chaque binôme, statue sur l’acceptabilité de la série. Que deviennent les résultats des essais des binômes concernés ?', answer: 'Binômes 1 (2,49) et 2 (2,55) : dans l’intervalle, séries validées. Binôme 3 (2,78) et binôme 4 (2,28) : hors de l’intervalle, séries rejetées : leurs résultats d’essais ne peuvent pas être rendus, il faut chercher l’erreur et refaire le dosage.' },
          { text: 'Propose une origine possible au défaut d’exactitude des binômes 3 et 4, en t’aidant des remarques.', hint: 'Une trace de doigt absorbe-t-elle de la lumière ? Que se passe-t-il si le « zéro » est fait sur une solution déjà un peu colorée ?', answer: 'Binôme 3 : les traces de doigts sur les faces optiques absorbent ou diffusent la lumière : l’absorbance mesurée est trop forte, donc la concentration aussi. Binôme 4 : le zéro a été fait sur une cuve contenant des traces de colorant : toutes les absorbances suivantes sont diminuées, donc les concentrations sont trop faibles.' },
          { text: 'Ces erreurs sont-elles systématiques, aléatoires ou grossières ? Comment le binôme 4 aurait-il pu s’en apercevoir sans étalon de contrôle ?', answer: 'Elles décalent toutes les mesures concernées dans le même sens : ce sont des erreurs systématiques (défaut de justesse), dues ici à une faute de manipulation qui se répercute sur toute la série. Sans étalon de contrôle, le binôme 4 aurait pu s’en apercevoir en remarquant que son blanc n’était pas incolore, ou que sa gamme ne passait plus par l’origine. C’est tout l’intérêt de l’étalon de contrôle : il détecte ces erreurs avant que des résultats faux ne soient rendus.' },
          { text: 'Sur la cible, comment représenterais-tu cinq mesures répétées du contrôle par le binôme 3 si la cuve est toujours tenue de la même façon ?', answer: 'Par des points assez groupés (la manipulation est répétée de la même façon : bonne fidélité) mais décalés par rapport au centre (valeurs toutes trop fortes : mauvaise justesse) : « fidèle mais pas juste ».' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Une grandeur s’écrit avec son symbole, ses indices (entité ; matrice), sa valeur et son unité ; les grandeurs dérivées s’expriment à partir des sept grandeurs de base du SI.',
      'On choisit un instrument selon ses caractéristiques métrologiques : verrerie jaugée pour les volumes précis, « In » pour contenir, « Ex » pour délivrer, tolérance adaptée.',
      'Analyser une procédure, c’est repérer les étapes de mesure, les points critiques et les grandeurs d’influence, et connaître la spécificité, le seuil de détectabilité et l’intervalle de mesure de la méthode.',
      'L’étalonnage (étalon unique ou gamme) relie l’indication de l’instrument au mesurande ; on ne lit une valeur que dans l’intervalle de la gamme.',
      'Le calcul se construit en trois équations (grandeurs, unités, valeurs numériques), se valide, puis le résultat s’écrit (valeur ± U) unité.',
      'Une mesure exacte est juste (pas d’erreur systématique) et fidèle (faible dispersion, peu d’erreurs aléatoires) ; l’étalon de contrôle et l’EMT permettent de valider une série.',
    ],
    method: {
      title: 'Exprimer un résultat de mesure, étape par étape',
      steps: [
        'Identifier le mesurande et écrire son symbole avec ses indices.',
        'Écrire l’équation aux grandeurs à partir du modèle de mesure.',
        'Vérifier l’homogénéité avec l’équation aux unités.',
        'Calculer avec l’équation aux valeurs numériques, sans arrondir trop tôt.',
        'Valider : unité, ordre de grandeur, essai dans l’intervalle de mesure.',
        'Arrondir la valeur à la même décimale que l’incertitude donnée et écrire (valeur ± U) unité.',
      ],
    },
    vocabulary: [
      { term: 'Mesurande', definition: 'Grandeur que l’on veut mesurer.' },
      { term: 'Mesurage', definition: 'Ensemble des opérations permettant d’obtenir la valeur d’une grandeur.' },
      { term: 'Grandeur dérivée', definition: 'Grandeur définie à partir des grandeurs de base (volume, concentration…).' },
      { term: 'Indication', definition: 'Valeur affichée par un instrument (absorbance, masse…), à distinguer du mesurande.' },
      { term: 'Tolérance', definition: 'Écart maximal garanti entre la valeur indiquée par un instrument et la valeur réelle.' },
      { term: 'Verrerie « Ex »', definition: 'Verrerie étalonnée pour délivrer le volume indiqué (pipette, burette).' },
      { term: 'Verrerie « In »', definition: 'Verrerie étalonnée pour contenir le volume indiqué (fiole jaugée).' },
      { term: 'Point critique', definition: 'Étape de la procédure dont la mauvaise réalisation fausse fortement le résultat.' },
      { term: 'Grandeur d’influence', definition: 'Grandeur qui n’est pas le mesurande mais qui modifie le résultat (température, durée, pH).' },
      { term: 'Spécificité', definition: 'Aptitude d’une méthode à ne mesurer que le mesurande.' },
      { term: 'Seuil de détectabilité', definition: 'Plus petite valeur du mesurande que la méthode permet de détecter.' },
      { term: 'Gamme d’étalonnage', definition: 'Série d’étalons de concentrations connues permettant de tracer la courbe d’étalonnage.' },
      { term: 'Justesse', definition: 'Accord entre la moyenne de mesures répétées et la valeur de référence.' },
      { term: 'Fidélité', definition: 'Accord des valeurs mesurées répétées entre elles (faible dispersion).' },
      { term: 'EMT', definition: 'Erreur maximale tolérée : plus grande erreur admise par le document de référence.' },
      { term: 'Étalon de contrôle', definition: 'Échantillon de valeur connue, traité comme un essai, qui sert à valider une série de mesures.' },
    ],
    mistakes: [
      { wrong: 'Mesurer 10 mL de solution étalon avec une éprouvette de 100 mL.', right: 'On utilise une pipette jaugée de 10 mL : la tolérance relative passe de 5 % à 0,2 %.' },
      { wrong: 'Souffler la dernière goutte d’une pipette jaugée « Ex ».', right: 'La pipette est étalonnée en tenant compte de cette goutte : on ne souffle pas.' },
      { wrong: 'Confondre l’absorbance affichée et la concentration recherchée.', right: 'L’absorbance est l’indication ; la concentration est le mesurande, obtenu grâce à l’étalonnage.' },
      { wrong: 'Prolonger la droite d’étalonnage pour un essai trop concentré.', right: 'On dilue l’essai pour le ramener dans l’intervalle de mesure.' },
      { wrong: 'Écrire ρ = 25,163 mg·L^-1^ avec une incertitude de 0,8 mg·L^-1^.', right: 'On arrondit à la même décimale que l’incertitude : ρ = (25,2 ± 0,8) mg·L^-1^.' },
      { wrong: 'Penser que des valeurs bien groupées sont forcément justes.', right: 'Des valeurs groupées sont fidèles ; elles peuvent être toutes décalées par une erreur systématique.' },
    ],
    quiz: [
      { question: 'Le mesurande est :', choices: ['la valeur affichée par l’appareil', 'la grandeur que l’on veut mesurer', 'l’unité de la grandeur', 'l’erreur de mesure'], answer: 1, explanation: 'L’indication est la valeur affichée ; le mesurande est la grandeur recherchée.' },
      { question: 'Dans le Système international, l’unité de base de la masse est :', choices: ['le gramme', 'le milligramme', 'le kilogramme', 'la tonne'], answer: 2, explanation: 'Le kilogramme (kg) est l’unité de base de la masse.' },
      { question: 'Pour délivrer exactement 10,00 mL, on utilise :', choices: ['une éprouvette de 10 mL', 'un bécher de 50 mL', 'une fiole jaugée de 10 mL', 'une pipette jaugée de 10 mL'], answer: 3, explanation: 'La pipette jaugée « Ex » est étalonnée pour délivrer un volume précis ; la fiole jaugée est étalonnée pour contenir.' },
      { question: 'Une pipette jaugée de 20 mL a une tolérance de ± 0,03 mL. Sa tolérance relative est :', choices: ['0,15 %', '1,5 %', '0,03 %', '6,7 %'], answer: 0, explanation: '0,03 ÷ 20 × 100 = 0,15 %.' },
      { question: 'La température d’incubation d’un dosage enzymatique est :', choices: ['le mesurande', 'une grandeur d’influence', 'une indication', 'un étalon'], answer: 1, explanation: 'Elle n’est pas mesurée pour elle-même, mais elle modifie le résultat.' },
      { question: 'Un étalon à 4,0 g·L^-1^ donne A = 0,400 ; l’essai donne A = 0,300. La concentration de l’essai est :', choices: ['5,3 g·L^-1^', '0,30 g·L^-1^', '3,0 g·L^-1^', '1,2 g·L^-1^'], answer: 2, explanation: 'ρ = 4,0 × 0,300 ÷ 0,400 = 3,0 g·L^-1^.' },
      { question: 'Avec U = 0,05 g·L^-1^, la valeur mesurée 1,2468 g·L^-1^ s’écrit :', choices: ['(1,2468 ± 0,05) g·L^-1^', '(1,2 ± 0,05) g·L^-1^', '(1,247 ± 0,05) g·L^-1^', '(1,25 ± 0,05) g·L^-1^'], answer: 3, explanation: 'L’incertitude porte sur les centièmes : on arrondit la valeur au centième, soit 1,25.' },
      { question: 'Des mesures très groupées mais toutes éloignées de la valeur de référence sont :', choices: ['justes et fidèles', 'fidèles mais pas justes', 'justes mais pas fidèles', 'ni justes ni fidèles'], answer: 1, explanation: 'Le groupement traduit la fidélité ; le décalage, une erreur systématique (défaut de justesse).' },
      { question: 'Valeur cible 5,0 mmol·L^-1^, EMT 0,3 mmol·L^-1^. Le contrôle mesuré à 5,4 mmol·L^-1^ :', choices: ['est acceptable', 'est hors de l’intervalle d’acceptabilité : la série est rejetée', 'permet de valider la série si on refait un seul essai', 'prouve une erreur aléatoire'], answer: 1, explanation: 'Intervalle [4,7 ; 5,3] : 5,4 est en dehors, la série est rejetée et on recherche l’erreur.' },
      { question: 'Répéter une mesure et calculer la moyenne permet surtout de limiter :', choices: ['les erreurs aléatoires', 'les erreurs systématiques', 'les erreurs grossières', 'la tolérance de l’instrument'], answer: 0, explanation: 'Les erreurs aléatoires se compensent en partie dans la moyenne ; une erreur systématique, elle, reste.' },
    ],
    exercises: [
      {
        title: 'Préparer une solution par pesée',
        statement: ['On dissout une masse m(glucose) = 2,503 g de glucose dans une fiole jaugée de 250,0 mL.', 'a) Écris l’équation aux grandeurs, aux unités et aux valeurs numériques donnant la concentration en masse. b) L’incertitude donnée est U = 0,03 g·L^-1^ : écris le résultat de mesure. c) Cite deux points critiques de cette préparation.'],
        answer: ['a) ρ(glucose ; solution) = m(glucose) ÷ V(solution) ; unités : g ÷ L = g·L^-1^ ; valeurs : 2,503 ÷ 0,2500 = 10,012 g·L^-1^.', 'b) ρ(glucose ; solution) = (10,01 ± 0,03) g·L^-1^.', 'c) La pesée (tare, volets fermés, transfert complet du solide avec rinçage du récipient de pesée) et l’ajustage au trait de jauge (bas du ménisque, œil à hauteur du trait), puis l’homogénéisation.'],
      },
      {
        title: 'Contrôler une micropipette',
        statement: ['On contrôle une micropipette P200 réglée sur 200 µL en pesant 5 prises d’eau à 20 °C : 0,2010 ; 0,1985 ; 0,2002 ; 0,1979 ; 0,2014 g. Donnée : ρ(eau ; 20 °C) = 998,2 g·L^-1^ ; tolérance du fabricant : 1 %.', 'a) Calcule la masse de référence. b) Calcule la moyenne et l’écart relatif à la référence. c) La pipette est-elle conforme ? d) Commente sa fidélité.'],
        answer: ['a) m = ρ × V = 998,2 g·L^-1^ × 200 × 10^-6^ L ≈ 0,1996 g.', 'b) Moyenne = (0,2010 + 0,1985 + 0,2002 + 0,1979 + 0,2014) ÷ 5 = 0,1998 g. Écart = 0,1998 − 0,1996 = 0,0002 g, soit 0,0002 ÷ 0,1996 × 100 ≈ 0,1 %.', 'c) 0,1 % < 1 % : la pipette est juste, donc conforme pour la justesse.', 'd) Les valeurs vont de 0,1979 à 0,2014 g, soit un écart de 0,0035 g (environ 1,8 % de la valeur) : la dispersion est assez forte. La fidélité est moyenne ; il faut vérifier le geste de pipetage (vitesse, angle, cône bien fixé).'],
      },
      {
        title: 'Rechercher l’origine d’une erreur',
        statement: 'Lors d’un dosage, la gamme d’étalonnage est bien alignée, mais l’étalon de contrôle donne une valeur trop forte de 15 %. On s’aperçoit que la solution de contrôle avait été laissée ouverte sur la paillasse pendant tout le week-end. Identifie le type d’erreur et explique le résultat. Que faut-il faire ?',
        answer: 'L’eau s’est partiellement évaporée : la solution de contrôle s’est concentrée, d’où une valeur trop forte. C’est une erreur systématique liée à la matière (un des 5 M), due à une faute de conservation. On jette cette solution, on prépare ou on ouvre un nouveau contrôle, on refait le dosage et on ne rend les résultats des essais que si le nouveau contrôle est dans l’intervalle d’acceptabilité.',
      },
    ],
    selfCheck: [
      'Je sais écrire une grandeur avec son symbole, ses indices, sa valeur et son unité.',
      'Je sais relier une grandeur dérivée aux grandeurs de base et vérifier une unité.',
      'Je sais choisir la verrerie adaptée et lire un volume correctement.',
      'Je sais repérer dans une procédure les étapes de mesure, les points critiques et les grandeurs d’influence.',
      'Je sais utiliser un étalon unique ou une gamme d’étalonnage.',
      'Je sais poser les trois équations d’un calcul et écrire un résultat avec son incertitude.',
      'Je sais valider une série avec un étalon de contrôle et distinguer justesse et fidélité.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Le Système international d’unités (SI) — BIPM', url: 'https://www.bipm.org/fr/measurement-units' },
      { title: 'Publications du JCGM, dont le Vocabulaire international de métrologie (VIM) — BIPM', url: 'https://www.bipm.org/fr/committees/jc/jcgm/publications' },
      { title: 'Incertitude de mesure — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Incertitude_de_mesure' },
    ],
  },
};

export default lesson;
