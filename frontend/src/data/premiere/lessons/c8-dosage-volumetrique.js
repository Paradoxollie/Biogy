import { img } from '../media';
import titrage from '../../../assets/courses/premiere/c8-dosage-volumetrique/titrage.webp';
import montage from '../../../assets/courses/premiere/c8-dosage-volumetrique/montage.webp';
import virage from '../../../assets/courses/premiere/c8-dosage-volumetrique/virage.webp';
import burette from '../../../assets/courses/premiere/c8-dosage-volumetrique/lecture-burette.webp';

const IMG = {
  titrage: img(titrage, 'Dosage en cours : une main gantée ouvre le robinet d’une burette au-dessus d’un erlenmeyer posé sur un agitateur magnétique ; une traînée rose apparaît là où tombe la goutte.', 'photo', 1536, 1024),
  montage: img(montage, 'Schéma légendé du montage de dosage : potence, pince, burette graduée contenant la solution titrante, robinet, erlenmeyer contenant la solution à doser, barreau aimanté, agitateur magnétique.', 'schema', 933, 1400),
  virage: img(virage, 'Trois erlenmeyers : solution incolore, solution rose très pâle, solution rose fuchsia intense.', 'photo', 1536, 1024),
  burette: img(burette, 'Lecture d’une burette : graduations 12 et 13 séparées par neuf petites graduations, bas du ménisque sur la cinquième petite graduation sous 12, œil à hauteur du ménisque.', 'schema', 933, 1400),
};

const lesson = {
  version: 2,
  id: 'c8-dosage-volumetrique',
  duration: 'Environ 3 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.titrage,
    question: 'L’étiquette du vinaigre annonce 8 % d’acidité, celle d’un jus de fruit 40 mg de vitamine C pour 100 mL. Comment le vérifier avec une burette et quelques gouttes d’indicateur coloré ?',
    text: 'Le dosage volumétrique est l’une des méthodes les plus anciennes et les plus fiables de la chimie analytique. On fait réagir la molécule à doser avec une solution de concentration connue, versée goutte à goutte, jusqu’au moment précis où la réaction est juste terminée : l’équivalence. Un simple volume lu sur la burette permet alors de calculer une concentration.',
  },
  objectives: [
    'Analyser une procédure de dosage : identifier la solution à doser, la solution titrante (étalon) et la réaction support.',
    'Écrire l’équation d’une réaction acido-basique ou d’oxydoréduction support d’un dosage.',
    'Réaliser le schéma conventionnel d’un dosage et mettre en œuvre un dosage à la burette.',
    'Repérer l’équivalence grâce à un indicateur coloré et déterminer le volume équivalent.',
    'Calculer une concentration à partir du volume équivalent, en équations aux grandeurs, aux unités et aux valeurs numériques.',
    'Expliquer le rôle de l’étalonnage et de l’étalon de contrôle dans la fiabilité d’un dosage.',
  ],
  prerequisites: [
    'Concentration en quantité de matière, concentration en masse et dilution (module 5).',
    'Utiliser une pipette jaugée et lire un volume au bas du ménisque (module 5).',
    'Écrire et équilibrer une équation de réaction chimique (physique-chimie).',
  ],
  program: [
    'Analyser une procédure pour identifier la solution à doser et la solution étalon en lien avec l’équation de la réaction chimique du dosage.',
    'Réaliser un schéma conventionnel du dosage.',
    'Déterminer le volume équivalent à l’aide d’un indicateur coloré.',
    'Notions : solution à doser, solution étalon, équation de la réaction du dosage, équivalence, oxydoréduction, réaction acido-basique.',
    'Activités : étalonnage par pesée d’une poudre étalon ou par prélèvement d’un volume de solution étalon ; dosage direct de l’acide éthanoïque du vinaigre blanc ; dosage direct de la vitamine C par le DCPIP.',
    'En lien avec le module C : équations aux grandeurs, aux unités et aux valeurs numériques ; résultat de mesure et incertitude ; étalon de contrôle.',
  ],

  course: {
    parts: [
      {
        title: 'Le principe du dosage volumétrique',
        intro: 'Doser, c’est compter des molécules… en mesurant un volume.',
        blocks: [
          { type: 'definition', term: 'Doser (ou titrer)', text: 'déterminer la **concentration** d’une espèce chimique dans une solution.' },
          { type: 'definition', term: 'Dosage volumétrique', text: 'dosage dans lequel on fait réagir l’espèce à doser, contenue dans un volume connu, avec une solution de **concentration connue** versée progressivement à la **burette**, et où l’on mesure le **volume** versé lorsque la réaction est juste terminée.' },
          {
            type: 'table',
            caption: 'Le vocabulaire du dosage',
            head: ['Terme', 'Définition', 'Exemple (vinaigre)'],
            rows: [
              ['Solution à doser', 'Solution contenant l’espèce dont on cherche la concentration.', 'Vinaigre dilué (acide éthanoïque)'],
              ['Prise d’essai (E)', 'Volume exact de solution à doser, prélevé à la pipette jaugée et placé dans l’erlenmeyer.', 'E = 10,0 mL'],
              ['Solution titrante', 'Solution de concentration connue versée à la burette. Quand sa concentration est connue avec exactitude, c’est une **solution étalon**.', 'Hydroxyde de sodium à 0,100 mol·L^-1^'],
              ['Réaction support', 'Réaction chimique entre l’espèce à doser et le réactif titrant.', 'Réaction acido-basique'],
              ['Volume équivalent (V~E~)', 'Volume de solution titrante versé à l’équivalence.', 'Lu sur la burette'],
            ],
          },
          { type: 'p', text: 'Pour servir de support à un dosage, une réaction doit être **rapide** (chaque goutte réagit aussitôt), **totale** (le réactif limitant disparaît entièrement) et **unique** (le réactif titrant ne réagit qu’avec l’espèce à doser).' },
          { type: 'definition', term: 'Équivalence', text: 'moment du dosage où les réactifs ont été introduits **dans les proportions de l’équation de la réaction** (proportions stœchiométriques) : l’espèce à doser et le réactif titrant ont été **entièrement consommés** tous les deux.' },
          {
            type: 'flow',
            title: 'Que se passe-t-il dans l’erlenmeyer ?',
            steps: [
              { title: 'Avant l’équivalence', text: 'Le réactif titrant versé est entièrement consommé : c’est lui le réactif limitant. Il reste de l’espèce à doser.' },
              { title: 'À l’équivalence', text: 'Les deux réactifs sont entièrement consommés : ils ont été mélangés dans les proportions de l’équation.' },
              { title: 'Après l’équivalence', text: 'Il n’y a plus d’espèce à doser : le réactif titrant ajouté s’accumule en excès.' },
            ],
          },
          { type: 'p', text: 'Tout l’enjeu est donc de **repérer l’équivalence** : on utilise un **indicateur coloré**, dont la couleur change quand on passe de l’avant à l’après équivalence.' },
          {
            type: 'retenir',
            items: [
              'On dose une **prise d’essai** E de solution à doser avec une **solution titrante** de concentration connue, versée à la burette.',
              'La réaction support doit être **rapide, totale et unique**.',
              'À l’**équivalence**, les réactifs ont été introduits dans les proportions de l’équation : ils sont tous les deux consommés.',
            ],
          },
        ],
      },

      {
        title: 'Les réactions support : acide-base et oxydoréduction',
        intro: 'Au programme, deux familles de réactions servent de support aux dosages : les réactions acido-basiques et les réactions d’oxydoréduction.',
        blocks: [
          { type: 'definition', term: 'Acide et base', text: 'un **acide** est une espèce capable de **céder** un ion hydrogène H^+^ ; une **base** est une espèce capable de **capter** un ion H^+^. Une **réaction acido-basique** est un transfert d’ion H^+^ de l’acide d’un couple vers la base d’un autre couple.' },
          {
            type: 'formula',
            title: 'Dosage de l’acide éthanoïque du vinaigre par la soude',
            expression: 'CH~3~COOH + HO^−^ → CH~3~COO^−^ + H~2~O',
            legend: [
              { symbol: 'CH~3~COOH', meaning: 'acide éthanoïque (acide acétique), espèce à doser' },
              { symbol: 'HO^−^', meaning: 'ion hydroxyde, apporté par la solution d’hydroxyde de sodium (soude)' },
              { symbol: 'CH~3~COO^−^', meaning: 'ion éthanoate (base conjuguée de l’acide)' },
              { symbol: 'H~2~O', meaning: 'eau' },
            ],
          },
          { type: 'definition', term: 'Oxydant et réducteur', text: 'un **oxydant** est une espèce capable de **capter** des électrons ; un **réducteur** est une espèce capable de **céder** des électrons. Une **réaction d’oxydoréduction** est un transfert d’électrons du réducteur d’un couple vers l’oxydant d’un autre couple.' },
          {
            type: 'formula',
            title: 'Dosage de la vitamine C par le DCPIP',
            expression: 'C~6~H~8~O~6~ + DCPIP → C~6~H~6~O~6~ + DCPIPH~2~',
            legend: [
              { symbol: 'C~6~H~8~O~6~', meaning: 'acide ascorbique (vitamine C), réducteur, espèce à doser' },
              { symbol: 'DCPIP', meaning: '2,6-dichlorophénolindophénol, oxydant coloré (bleu en milieu neutre, rose en milieu acide)' },
              { symbol: 'C~6~H~6~O~6~', meaning: 'acide déhydroascorbique (vitamine C oxydée)' },
              { symbol: 'DCPIPH~2~', meaning: 'forme réduite du DCPIP, incolore' },
            ],
          },
          { type: 'p', text: 'Dans ces deux réactions, les réactifs réagissent **mole à mole** : une mole d’acide éthanoïque réagit avec une mole d’ions hydroxyde ; une mole d’acide ascorbique réagit avec une mole de DCPIP.' },
          { type: 'definition', term: 'Indicateur coloré de fin de réaction', text: 'espèce ajoutée en très petite quantité (quelques gouttes), ou réactif lui-même coloré, dont la couleur change **au voisinage de l’équivalence**. Le changement de couleur s’appelle le **virage**.' },
          {
            type: 'table',
            caption: 'Repérer l’équivalence dans les deux dosages du programme',
            head: ['Dosage', 'Type de réaction', 'Repérage de l’équivalence', 'Virage observé'],
            rows: [
              ['Acide éthanoïque du vinaigre par la soude', 'Acido-basique', 'Phénolphtaléine (2 à 3 gouttes)', 'Incolore → **rose pâle persistant**'],
              ['Vitamine C par le DCPIP', 'Oxydoréduction', 'Le DCPIP lui-même : il est décoloré tant qu’il reste de la vitamine C', 'Incolore → **rose pâle persistant** (milieu acide)'],
            ],
          },
          { type: 'figure', image: IMG.virage, caption: 'La phénolphtaléine avant l’équivalence (incolore), à l’équivalence (rose très pâle, la teinte recherchée) et après l’équivalence dépassée (rose intense).', size: 'wide' },
          { type: 'note', title: 'Pourquoi la phénolphtaléine ?', text: 'La phénolphtaléine est incolore en milieu acide et devient rose quand le pH dépasse environ 8,2 (sa zone de virage s’étend de 8,2 à 10 environ). À l’équivalence du dosage de l’acide éthanoïque, la solution ne contient plus que des ions éthanoate : elle est légèrement basique. La phénolphtaléine vire donc exactement au bon moment.' },
          { type: 'warning', title: 'Sécurité : un indicateur classé CMR', text: 'La phénolphtaléine (en poudre ou en solution concentrée) est classée **cancérogène de catégorie 1B**. Au lycée, on l’utilise en solution très diluée, en quantité minimale (2 à 3 gouttes), avec gants et lunettes, et de nombreux laboratoires la remplacent par un indicateur moins dangereux comme le **bleu de thymol**. Suis toujours le protocole et les consignes de ton enseignante.' },
          { type: 'note', title: 'Le DCPIP, réactif et indicateur à la fois', text: 'Versé dans la solution acidifiée de vitamine C, le DCPIP est aussitôt réduit en une forme incolore : chaque goutte se décolore. Dès que toute la vitamine C a réagi, la goutte suivante n’est plus décolorée et la solution prend une teinte **rose pâle persistante**, couleur du DCPIP oxydé en milieu acide.' },
          {
            type: 'retenir',
            items: [
              'Acido-basique : transfert d’ion H^+^ (CH~3~COOH + HO^−^ → CH~3~COO^−^ + H~2~O).',
              'Oxydoréduction : transfert d’électrons (vitamine C, réducteur + DCPIP, oxydant).',
              'L’équivalence est repérée par le **virage** d’un indicateur coloré : on s’arrête à la première teinte **persistante**.',
            ],
          },
        ],
      },

      {
        title: 'Réaliser un dosage : schéma, montage et gestes',
        intro: 'La précision d’un dosage se joue sur quelques gouttes : chaque geste compte.',
        blocks: [
          { type: 'figure', image: IMG.montage, caption: 'Le montage de dosage : la burette contient la solution titrante ; l’erlenmeyer, agité en continu, contient la prise d’essai et l’indicateur coloré.', size: 'small' },
          { type: 'p', text: 'Avant de manipuler, on résume le dosage par un **schéma conventionnel** : un schéma simple de la burette et de l’erlenmeyer, annoté avec toutes les informations nécessaires au calcul. Il permet de vérifier d’un coup d’œil que la procédure est complète.' },
          {
            type: 'table',
            caption: 'Ce que doit indiquer le schéma conventionnel (exemple du vinaigre)',
            head: ['Élément', 'Informations à noter', 'Exemple'],
            rows: [
              ['Burette', 'Nom de la solution titrante et sa concentration', 'Solution d’hydroxyde de sodium, C~B~ = 0,100 mol·L^-1^'],
              ['Erlenmeyer', 'Nature et volume de la prise d’essai, verrerie utilisée, ajouts', 'E = 10,0 mL de vinaigre dilué au 1/10 (pipette jaugée) + environ 20 mL d’eau distillée + 2 gouttes de phénolphtaléine'],
              ['Agitation', 'Mode d’agitation', 'Agitateur magnétique et barreau aimanté'],
              ['Équivalence', 'Virage attendu et volume équivalent', 'Incolore → rose pâle persistant ; V~E~ = … mL'],
            ],
          },
          {
            type: 'steps',
            title: 'Le protocole et ses gestes',
            items: [
              { title: 'Préparer la burette', text: 'La rincer à l’eau distillée, puis **deux fois avec un peu de solution titrante**. La remplir au-dessus du zéro, ouvrir le robinet pour **chasser la bulle d’air** de la pointe, puis ajuster au zéro (bas du ménisque, œil à sa hauteur).' },
              { title: 'Prélever la prise d’essai', text: 'Avec une **pipette jaugée** rincée avec la solution à doser, prélever E et la verser dans un erlenmeyer propre (rincé à l’eau distillée, inutile de le sécher).' },
              { title: 'Compléter l’erlenmeyer', text: 'Ajouter un peu d’eau distillée si besoin (pour immerger le barreau aimanté), puis 2 à 3 gouttes d’indicateur. Mettre en agitation douce.' },
              { title: 'Réaliser un dosage rapide', text: 'Verser la solution titrante mL par mL jusqu’au virage : on obtient un **encadrement** du volume équivalent (par exemple entre 13 et 14 mL).' },
              { title: 'Réaliser un dosage précis', text: 'Sur une nouvelle prise d’essai, verser rapidement jusqu’à 1 mL avant le volume trouvé, puis **goutte à goutte**. S’arrêter à la première goutte qui donne une teinte **persistante** (environ 30 secondes).' },
              { title: 'Lire le volume équivalent', text: 'Lire la burette au bas du ménisque, à 0,05 mL près. Recommencer pour obtenir au moins **deux volumes concordants** (écart de 0,1 mL au plus) et en faire la moyenne.' },
            ],
          },
          { type: 'figure', image: IMG.burette, caption: 'Lire une burette : les graduations augmentent vers le bas. Entre 12 et 13, chaque petite graduation vaut 0,1 mL. Ici, le bas du ménisque est sur la 5^e^ petite graduation sous 12 : V = 12,50 mL.', size: 'small' },
          { type: 'warning', title: 'Points critiques', text: ['Une burette rincée seulement à l’eau dilue la solution titrante : il faut un volume plus grand pour atteindre l’équivalence, et la concentration calculée est **trop élevée**.', 'Une bulle d’air dans la pointe qui s’échappe pendant le dosage fausse le volume lu.', 'Ajouter de l’eau distillée dans l’erlenmeyer **ne change pas** la quantité d’espèce à doser, donc ne change pas V~E~.', 'Dépasser l’équivalence (rose intense) donne un V~E~ trop grand : on recommence.', 'La soude est corrosive pour les yeux : **lunettes** obligatoires.'] },
          {
            type: 'retenir',
            items: [
              'Le **schéma conventionnel** indique : solution titrante et concentration, prise d’essai (nature, volume), ajouts, indicateur, virage, V~E~.',
              'Burette rincée avec la solution titrante, sans bulle, ajustée au zéro ; prise d’essai à la **pipette jaugée**.',
              'Dosage rapide pour encadrer, puis dosages précis goutte à goutte ; au moins deux volumes concordants.',
            ],
          },
        ],
      },

      {
        title: 'Exploiter l’équivalence : calculer une concentration',
        intro: 'À l’équivalence, l’équation de la réaction relie la quantité d’espèce dosée à la quantité de réactif versé.',
        blocks: [
          { type: 'p', text: 'Pour une réaction a A + b B → produits, où A est l’espèce dosée et B le réactif titrant, les réactifs sont dans les proportions de l’équation à l’équivalence : n~A~ ÷ a = n~B~ ÷ b. Dans les dosages du programme, a = b = 1 : **n~A~ = n~B~**.' },
          {
            type: 'formula',
            title: 'Relation à l’équivalence (réaction mole à mole)',
            expression: 'C~A~ × E = C~B~ × V~E~',
            legend: [
              { symbol: 'C~A~', meaning: 'concentration de l’espèce à doser (inconnue)' },
              { symbol: 'E', meaning: 'volume de la prise d’essai' },
              { symbol: 'C~B~', meaning: 'concentration de la solution titrante (connue)' },
              { symbol: 'V~E~', meaning: 'volume de solution titrante versé à l’équivalence' },
            ],
          },
          { type: 'example', title: 'calcul rédigé', text: ['On dose E = 10,0 mL de vinaigre de cidre dilué au 1/10 par de la soude à C~B~ = 0,100 mol·L^-1^. On obtient V~E~ = 8,40 mL.', 'Équation aux grandeurs : C~A~ = C~B~ × V~E~ ÷ E.', 'Équation aux unités : mol·L^-1^ = mol·L^-1^ × mL ÷ mL (les mL se simplifient : inutile de convertir en litres).', 'Équation aux valeurs numériques : C~A~ = 0,100 × 8,40 ÷ 10,0 = **0,0840 mol·L^-1^** (vinaigre dilué).', 'Vinaigre pur, dilué 10 fois : C = 0,0840 × 10 = **0,840 mol·L^-1^**.', 'Concentration en masse, avec M(CH~3~COOH) = 60,0 g·mol^-1^ : ρ = C × M = 0,840 × 60,0 = **50,4 g·L^-1^**.'] },
          { type: 'warning', title: 'Les erreurs à éviter', text: ['Oublier de multiplier par le **facteur de dilution** quand on a dosé une solution diluée.', 'Mélanger les unités : E et V~E~ doivent être exprimés dans la **même unité**.', 'Oublier les coefficients de l’équation quand ils ne valent pas 1.'] },
          { type: 'p', text: 'Le résultat s’écrit avec un nombre de **chiffres significatifs** cohérent avec les données (ici trois : 0,100 ; 8,40 ; 10,0). Quand l’incertitude est donnée, on écrit le **résultat de mesure** sous la forme : valeur ± incertitude, unité. Par exemple : C = (0,840 ± 0,012) mol·L^-1^.' },
          { type: 'note', title: 'Le degré d’acidité d’un vinaigre', text: 'Le « degré » ou pourcentage d’acidité est la masse d’acide éthanoïque, en grammes, contenue dans 100 g de vinaigre. Avec une masse volumique d’environ 1,01 kg·L^-1^, 1 L de vinaigre pèse 1 010 g : un vinaigre à 50,4 g·L^-1^ contient 50,4 ÷ 1 010 × 100 ≈ 5,0 g d’acide pour 100 g, soit environ 5 %, valeur habituelle pour un vinaigre de cidre.' },
          {
            type: 'retenir',
            items: [
              'À l’équivalence (réaction mole à mole) : **n~A~ = n~B~**, soit **C~A~ × E = C~B~ × V~E~**.',
              'Calcul en trois lignes : équation aux grandeurs, aux unités, aux valeurs numériques.',
              'Penser au facteur de dilution, puis à ρ = C × M si l’on veut une concentration en masse.',
            ],
          },
        ],
      },

      {
        title: 'Étalonner et vérifier la fiabilité d’un dosage',
        intro: 'Un dosage n’est exact que si la concentration de la solution titrante est elle-même exacte.',
        blocks: [
          { type: 'definition', term: 'Solution étalon', text: 'solution dont la concentration est connue **avec exactitude**. Elle est préparée par pesée d’une **poudre étalon** (substance très pure, stable, qui n’absorbe pas l’humidité) ou obtenue à partir d’une solution étalon du commerce.' },
          { type: 'p', text: 'Certaines solutions titrantes n’ont pas une concentration fiable : la soude absorbe le dioxyde de carbone de l’air, le DCPIP se dégrade à la lumière. Avant de doser l’échantillon, on détermine donc leur concentration exacte en dosant une quantité **connue** d’étalon : c’est l’**étalonnage** de la solution titrante.' },
          {
            type: 'compare',
            title: 'Deux façons d’étalonner une solution titrante',
            columns: [
              { title: 'Par pesée d’une poudre étalon', subtitle: 'ex. étalonnage de la soude', items: ['On pèse exactement une masse m d’une poudre étalon, par exemple de l’hydrogénophtalate de potassium (un acide qui réagit mole à mole avec HO^−^).', 'On la dissout dans l’erlenmeyer et on la dose par la soude.', 'n~étalon~ = m ÷ M, puis C~soude~ = n~étalon~ ÷ V~E~.'] },
              { title: 'Par prélèvement d’une solution étalon', subtitle: 'ex. étalonnage du DCPIP', items: ['On prélève à la pipette jaugée un volume E d’une solution étalon d’acide ascorbique de concentration connue.', 'On la dose par la solution de DCPIP.', 'C~DCPIP~ = C~étalon~ × E ÷ V~E~.'] },
            ],
          },
          { type: 'example', title: 'étalonnage par pesée', text: ['On pèse m = 0,2042 g d’hydrogénophtalate de potassium (M = 204,2 g·mol^-1^) : n = 0,2042 ÷ 204,2 = 1,000 × 10^-3^ mol.', 'Le dosage par la soude donne V~E~ = 9,95 mL.', 'C~soude~ = n ÷ V~E~ = 1,000 × 10^-3^ ÷ 9,95 × 10^-3^ = **0,1005 mol·L^-1^**. C’est cette valeur qu’on utilise ensuite pour doser le vinaigre.'] },
          { type: 'definition', term: 'Étalon de contrôle', text: 'solution de concentration connue, **indépendante** de l’étalon qui a servi à l’étalonnage, dosée exactement comme un échantillon. Si le résultat trouvé est dans l’**intervalle d’acceptabilité** (valeur cible ± erreur maximale tolérée), la série de dosages est validée ; sinon, on recherche l’erreur.' },
          {
            type: 'cards',
            items: [
              { title: 'Erreur grossière', text: 'Faute ponctuelle : équivalence dépassée, mauvaise pipette, bulle d’air dans la burette, erreur de calcul. Le résultat est rejeté, on recommence.', tone: 'red' },
              { title: 'Erreur systématique', text: 'Erreur toujours dans le même sens : burette non rincée avec la solution titrante, solution titrante mal étalonnée, indicateur mal choisi. L’étalon de contrôle permet de la détecter.', tone: 'yellow' },
              { title: 'Erreur aléatoire', text: 'Petites variations imprévisibles : lecture du ménisque, appréciation de la teinte du virage. On la réduit en répétant les dosages et en faisant la moyenne.', tone: 'blue' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Une **solution étalon** a une concentration connue avec exactitude (poudre étalon pesée ou solution étalon du commerce).',
              'On **étalonne** une solution titrante par pesée d’une poudre étalon ou par prélèvement d’une solution étalon.',
              'L’**étalon de contrôle**, dosé comme un échantillon, valide la série si son résultat est dans l’intervalle d’acceptabilité.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les documents présentent des procédures et des résultats de travaux pratiques. Réponds d’abord seul(e), en phrases complètes ; pour les calculs, rédige l’équation aux grandeurs, l’équation aux unités, puis l’équation aux valeurs numériques. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Analyser la procédure de dosage d’un vinaigre blanc',
        duration: '25 min',
        skills: ['Analyser', 'Schématiser'],
        context: 'Un vinaigre blanc porte la mention « 8 % d’acidité ». On veut vérifier cette indication par un dosage volumétrique.',
        documents: [
          {
            label: 'Document 1',
            title: 'Procédure de dosage',
            text: ['Diluer le vinaigre au 1/10 : 10,0 mL de vinaigre à la pipette jaugée, complétés à 100,0 mL en fiole jaugée.', 'Dans un erlenmeyer, introduire E = 10,0 mL de vinaigre dilué à la pipette jaugée, environ 20 mL d’eau distillée et 2 gouttes de phénolphtaléine.', 'Doser par une solution étalon d’hydroxyde de sodium à C~B~ = 0,100 mol·L^-1^ placée dans une burette de 25 mL, sous agitation magnétique, jusqu’au virage de l’indicateur.'],
          },
          { label: 'Document 2', title: 'Le montage', image: IMG.montage, caption: 'Montage de dosage avec burette, erlenmeyer et agitateur magnétique.', size: 'small' },
        ],
        questions: [
          { text: 'Identifie la solution à doser, la prise d’essai et la solution titrante (étalon).', answer: 'Solution à doser : le vinaigre dilué au 1/10, qui contient l’acide éthanoïque. Prise d’essai : E = 10,0 mL de vinaigre dilué. Solution titrante (étalon) : la solution d’hydroxyde de sodium à 0,100 mol·L^-1^, placée dans la burette.' },
          { text: 'Écris l’équation de la réaction support. De quel type de réaction s’agit-il ?', answer: 'CH~3~COOH + HO^−^ → CH~3~COO^−^ + H~2~O. C’est une réaction acido-basique : l’acide éthanoïque cède un ion H^+^ à l’ion hydroxyde.' },
          { text: 'Réalise le schéma conventionnel de ce dosage.', hint: 'Burette (solution et concentration), erlenmeyer (prise d’essai, ajouts, indicateur), virage attendu.', answer: ['Burette : solution d’hydroxyde de sodium, C~B~ = 0,100 mol·L^-1^.', 'Erlenmeyer : E = 10,0 mL de vinaigre dilué au 1/10 (pipette jaugée) + environ 20 mL d’eau distillée + 2 gouttes de phénolphtaléine ; agitation magnétique.', 'Équivalence : virage de l’incolore au rose pâle persistant ; V~E~ = … mL.'] },
          { text: 'Le vinaigre pur a une concentration d’environ 1,3 mol·L^-1^. Pourquoi le dilue-t-on avant de le doser ?', hint: 'Calcule le volume équivalent attendu sans dilution.', answer: 'Sans dilution, V~E~ = C~A~ × E ÷ C~B~ = 1,3 × 10,0 ÷ 0,100 = 130 mL : bien plus que la capacité de la burette (25 mL). Après dilution au 1/10, V~E~ vaut environ 13 mL, ce qui se mesure avec précision dans une burette de 25 mL.' },
          { text: 'Pourquoi l’eau distillée ajoutée dans l’erlenmeyer ne fausse-t-elle pas le résultat ?', answer: 'L’eau ne change pas la quantité de matière d’acide éthanoïque présente dans la prise d’essai, qui a été mesurée exactement à la pipette jaugée. Le volume équivalent, qui dépend seulement de cette quantité, reste le même.' },
          { text: 'Pourquoi utilise-t-on une pipette jaugée pour la prise d’essai, et pas une éprouvette ?', answer: 'Le volume E intervient directement dans le calcul de C~A~ : il doit être connu avec exactitude. La pipette jaugée est beaucoup plus exacte que l’éprouvette.' },
        ],
      },
      {
        title: 'Exploiter les résultats et vérifier l’étiquette',
        duration: '25 min',
        skills: ['Calculer', 'Conclure'],
        context: 'Les élèves ont réalisé le dosage décrit dans l’activité précédente (vinaigre blanc dilué au 1/10, E = 10,0 mL, soude à C~B~ = 0,100 mol·L^-1^).',
        documents: [
          {
            label: 'Document 3',
            title: 'Résultats de TP',
            blocks: [
              {
                type: 'table',
                head: ['Essai', 'Volume versé au virage'],
                rows: [['Dosage rapide', 'Entre 13 et 14 mL'], ['Dosage précis 1', '13,35 mL'], ['Dosage précis 2', '13,45 mL']],
              },
              { type: 'p', text: 'Données : M(CH~3~COOH) = 60,0 g·mol^-1^ ; masse volumique du vinaigre : 1,01 kg·L^-1^. Les volumes sont concordants si leur écart est inférieur ou égal à 0,1 mL.' },
            ],
          },
          { label: 'Document 4', title: 'Le virage de la phénolphtaléine', image: IMG.virage, caption: 'Avant, à et après l’équivalence.' },
        ],
        questions: [
          { text: 'Les deux dosages précis sont-ils concordants ? Détermine le volume équivalent à retenir.', answer: 'Écart : 13,45 − 13,35 = 0,10 mL, inférieur ou égal à 0,1 mL : les volumes sont concordants. V~E~ = (13,35 + 13,45) ÷ 2 = 13,40 mL.' },
          { text: 'Sur le document 4, quel erlenmeyer correspond au moment où il faut arrêter le dosage ? Que s’est-il passé dans le troisième ?', answer: 'Celui du milieu, rose très pâle : c’est la première teinte persistante, qui marque l’équivalence. Dans le troisième, rose intense, l’équivalence a été largement dépassée : le volume lu serait trop grand.' },
          { text: 'Calcule la concentration en acide éthanoïque du vinaigre dilué.', hint: 'C~A~ = C~B~ × V~E~ ÷ E.', answer: ['Équation aux grandeurs : C~A~ = C~B~ × V~E~ ÷ E.', 'Équation aux unités : mol·L^-1^ = mol·L^-1^ × mL ÷ mL.', 'Équation aux valeurs numériques : C~A~ = 0,100 × 13,40 ÷ 10,0 = 0,134 mol·L^-1^.'] },
          { text: 'Déduis-en la concentration en quantité de matière, puis la concentration en masse d’acide éthanoïque du vinaigre pur.', answer: 'Le vinaigre a été dilué 10 fois : C = 0,134 × 10 = 1,34 mol·L^-1^. ρ = C × M = 1,34 × 60,0 = 80,4 g·L^-1^.' },
          { text: 'Le vinaigre est-il conforme à l’étiquette (8 % d’acidité, soit 8 g d’acide pour 100 g de vinaigre) ?', answer: '1 L de vinaigre pèse 1 010 g et contient 80,4 g d’acide. Pour 100 g : 80,4 × 100 ÷ 1 010 ≈ 7,96 g, soit environ 8,0 %. Le vinaigre est conforme à l’étiquette.' },
          { text: 'L’incertitude sur la concentration du vinaigre pur est de 0,02 mol·L^-1^. Écris le résultat de mesure.', answer: 'C = (1,34 ± 0,02) mol·L^-1^ : la valeur vraie est très probablement comprise entre 1,32 et 1,36 mol·L^-1^.' },
        ],
      },
      {
        title: 'Doser la vitamine C d’un jus de fruit par le DCPIP',
        duration: '35 min',
        skills: ['Analyser', 'Calculer', 'Argumenter'],
        context: 'La vitamine C (acide ascorbique, C~6~H~8~O~6~) est fragile : elle s’oxyde à l’air et à la chaleur. On veut vérifier qu’un jus de fruit clair contient bien les 40 mg de vitamine C pour 100 mL annoncés sur l’étiquette. Comme la solution de DCPIP se dégrade, il faut d’abord l’étalonner.',
        documents: [
          {
            label: 'Document 5',
            title: 'Procédure en deux étapes',
            text: ['Étape 1, étalonnage : on dissout 50,0 mg d’acide ascorbique pur dans une fiole jaugée de 100,0 mL (solution étalon). On dose E = 10,0 mL de cette solution étalon, acidifiée, par la solution de DCPIP placée dans la burette, jusqu’à l’apparition d’une teinte rose pâle persistante.', 'Étape 2, dosage : on dose E = 10,0 mL de jus de fruit filtré et acidifié par la même solution de DCPIP, dans les mêmes conditions.'],
          },
          {
            label: 'Document 6',
            title: 'Résultats de TP et données',
            blocks: [
              {
                type: 'table',
                head: ['Étape', 'Volume équivalent moyen'],
                rows: [['Étalonnage (solution étalon d’acide ascorbique)', '14,2 mL'], ['Dosage du jus de fruit', '11,4 mL']],
              },
              { type: 'p', text: 'Données : M(acide ascorbique) = 176,1 g·mol^-1^. L’acide ascorbique et le DCPIP réagissent mole à mole.' },
            ],
          },
        ],
        questions: [
          { text: 'De quel type de réaction s’agit-il ? Indique l’oxydant et le réducteur.', answer: 'Une réaction d’oxydoréduction : l’acide ascorbique (vitamine C) est le réducteur, il cède des électrons ; le DCPIP est l’oxydant, il les capte.' },
          { text: 'Quelle est la solution étalon ? Par quel type d’étalonnage la concentration du DCPIP est-elle déterminée ?', answer: 'La solution étalon est la solution d’acide ascorbique préparée par pesée (50,0 mg dans 100,0 mL). La concentration du DCPIP est déterminée par prélèvement d’un volume de solution étalon (E = 10,0 mL).' },
          { text: 'Explique le virage observé à l’équivalence.', answer: 'Tant qu’il reste de la vitamine C, chaque goutte de DCPIP est réduite en une forme incolore. À l’équivalence, toute la vitamine C a réagi : la goutte suivante de DCPIP n’est plus réduite et donne sa couleur rose (forme oxydée en milieu acide), qui persiste.' },
          { text: 'Calcule la concentration de la solution étalon d’acide ascorbique, en g·L^-1^ puis en mol·L^-1^.', answer: 'ρ = m ÷ V = 0,0500 ÷ 0,1000 = 0,500 g·L^-1^. C = ρ ÷ M = 0,500 ÷ 176,1 = 2,84 × 10^-3^ mol·L^-1^.' },
          { text: 'Calcule la concentration de la solution de DCPIP.', hint: 'À l’équivalence de l’étalonnage : C~étalon~ × E = C~DCPIP~ × V~E~.', answer: ['Équation aux grandeurs : C~DCPIP~ = C~étalon~ × E ÷ V~E~.', 'Équation aux unités : mol·L^-1^ = mol·L^-1^ × mL ÷ mL.', 'Équation aux valeurs numériques : C~DCPIP~ = 2,84 × 10^-3^ × 10,0 ÷ 14,2 = 2,00 × 10^-3^ mol·L^-1^.'] },
          { text: 'Calcule la concentration en vitamine C du jus, en mol·L^-1^ puis en mg pour 100 mL. Le jus est-il conforme à l’étiquette ?', answer: 'C = C~DCPIP~ × V~E~ ÷ E = 2,00 × 10^-3^ × 11,4 ÷ 10,0 = 2,28 × 10^-3^ mol·L^-1^. ρ = C × M = 2,28 × 10^-3^ × 176,1 = 0,401 g·L^-1^, soit 401 mg par litre ou 40,1 mg pour 100 mL. Le jus est conforme aux 40 mg pour 100 mL annoncés.' },
          { text: 'Montre qu’on pouvait obtenir directement le résultat en comparant les deux volumes équivalents.', answer: 'Avec le même DCPIP et la même prise d’essai, les concentrations sont proportionnelles aux volumes équivalents : ρ~jus~ = ρ~étalon~ × V~E,jus~ ÷ V~E,étalon~ = 0,500 × 11,4 ÷ 14,2 = 0,401 g·L^-1^.' },
          { text: 'Pourquoi faut-il doser le jus rapidement après ouverture, et l’étalonnage le même jour ?', answer: 'La vitamine C s’oxyde à l’air : sa concentration diminue avec le temps, le résultat serait trop faible. Le DCPIP se dégrade aussi : sa concentration doit être déterminée le jour même, dans les mêmes conditions que le dosage.' },
        ],
      },
      {
        title: 'Valider une série de dosages avec un étalon de contrôle',
        duration: '20 min',
        skills: ['Raisonner', 'Rechercher une erreur'],
        context: 'Avant de doser des vinaigres, quatre binômes dosent une solution de contrôle d’acide éthanoïque dont la concentration cible est 0,1000 mol·L^-1^. L’erreur maximale tolérée est de 0,0030 mol·L^-1^.',
        documents: [
          {
            label: 'Document 7',
            title: 'Résultats obtenus pour l’étalon de contrôle',
            blocks: [
              {
                type: 'table',
                head: ['Binôme', 'Concentration trouvée (mol·L^-1^)'],
                rows: [['A', '0,1012'], ['B', '0,0985'], ['C', '0,1068'], ['D', '0,0952']],
              },
            ],
          },
          {
            label: 'Document 8',
            title: 'Observations du professeur',
            text: ['Observation 1 : un binôme a rempli la burette après l’avoir rincée uniquement à l’eau distillée.', 'Observation 2 : un binôme a arrêté le dosage dès la première teinte rose, qui a disparu quelques secondes plus tard sous l’agitation.'],
          },
        ],
        questions: [
          { text: 'Calcule l’intervalle d’acceptabilité.', answer: 'De 0,1000 − 0,0030 = 0,0970 mol·L^-1^ à 0,1000 + 0,0030 = 0,1030 mol·L^-1^.' },
          { text: 'Quels binômes peuvent passer au dosage des vinaigres ?', answer: 'Les binômes A (0,1012) et B (0,0985), dont les résultats sont dans l’intervalle [0,0970 ; 0,1030]. Les résultats de C (trop élevé) et de D (trop faible) sont hors de l’intervalle.' },
          { text: 'Associe chaque observation du document 8 à un binôme. Justifie le sens de l’erreur.', hint: 'L’erreur augmente-t-elle ou diminue-t-elle le volume équivalent ?', answer: ['Observation 1 → binôme C : la soude a été diluée par l’eau restée dans la burette ; il faut en verser plus pour atteindre l’équivalence, V~E~ est trop grand, donc la concentration calculée est trop élevée.', 'Observation 2 → binôme D : le dosage a été arrêté avant l’équivalence (la teinte n’était pas persistante) ; V~E~ est trop petit, donc la concentration calculée est trop faible.'] },
          { text: 'Classe ces deux erreurs (grossière, systématique, aléatoire) et propose une correction.', answer: 'Observation 1 : erreur systématique, qui fausse dans le même sens tous les dosages faits avec cette burette ; il faut vider la burette, la rincer deux fois avec la soude et la remplir à nouveau. Observation 2 : erreur grossière d’appréciation du virage ; il faut verser goutte à goutte jusqu’à une teinte qui persiste environ 30 secondes.' },
          { text: 'Quel est l’intérêt de doser un étalon de contrôle avant les échantillons ?', answer: 'Il permet de vérifier l’exactitude de toute la méthode (solution titrante, verrerie, gestes) sur une solution dont on connaît la réponse. Si le résultat est acceptable, on peut faire confiance aux résultats obtenus ensuite sur les échantillons.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un dosage volumétrique détermine la concentration d’une espèce en la faisant réagir avec une solution titrante de concentration connue, versée à la burette.',
      'La réaction support (acido-basique ou d’oxydoréduction) doit être rapide, totale et unique.',
      'À l’équivalence, les réactifs ont été introduits dans les proportions de l’équation ; elle est repérée par le virage persistant d’un indicateur coloré.',
      'Le schéma conventionnel résume le dosage : solution titrante et concentration, prise d’essai, ajouts, indicateur, virage, V~E~.',
      'Pour une réaction mole à mole : C~A~ × E = C~B~ × V~E~ ; on tient compte du facteur de dilution, puis ρ = C × M.',
      'La solution titrante est étalonnée (poudre étalon pesée ou solution étalon) ; un étalon de contrôle valide la série de dosages.',
    ],
    method: {
      title: 'Résoudre un exercice de dosage volumétrique',
      steps: [
        'Identifier la solution à doser, la prise d’essai E, la solution titrante et sa concentration.',
        'Écrire l’équation de la réaction support et repérer les coefficients.',
        'Écrire la relation à l’équivalence : n~A~ ÷ a = n~B~ ÷ b (ici n~A~ = n~B~, soit C~A~ × E = C~B~ × V~E~).',
        'Rédiger l’équation aux grandeurs, l’équation aux unités, puis l’équation aux valeurs numériques.',
        'Tenir compte d’une éventuelle dilution, convertir si besoin en concentration en masse (ρ = C × M).',
        'Conclure avec le bon nombre de chiffres significatifs, l’unité et, si elle est donnée, l’incertitude.',
      ],
    },
    vocabulary: [
      { term: 'Dosage volumétrique', definition: 'Détermination d’une concentration par mesure du volume de solution titrante nécessaire pour atteindre l’équivalence.' },
      { term: 'Solution à doser', definition: 'Solution contenant l’espèce dont on cherche la concentration.' },
      { term: 'Prise d’essai', definition: 'Volume exact de solution à doser, prélevé à la pipette jaugée.' },
      { term: 'Solution titrante', definition: 'Solution de concentration connue versée à la burette.' },
      { term: 'Solution étalon', definition: 'Solution dont la concentration est connue avec exactitude.' },
      { term: 'Réaction support', definition: 'Réaction rapide, totale et unique entre l’espèce dosée et le réactif titrant.' },
      { term: 'Équivalence', definition: 'Moment où les réactifs ont été introduits dans les proportions de l’équation de la réaction.' },
      { term: 'Volume équivalent', definition: 'Volume de solution titrante versé à l’équivalence, noté V~E~.' },
      { term: 'Indicateur coloré', definition: 'Espèce dont le changement de couleur (virage) signale l’équivalence.' },
      { term: 'Réaction acido-basique', definition: 'Transfert d’un ion H^+^ d’un acide vers une base.' },
      { term: 'Réaction d’oxydoréduction', definition: 'Transfert d’électrons d’un réducteur vers un oxydant.' },
      { term: 'Étalonnage', definition: 'Détermination de la concentration exacte d’une solution titrante à l’aide d’un étalon.' },
      { term: 'Étalon de contrôle', definition: 'Solution de concentration connue, dosée comme un échantillon pour valider la méthode.' },
      { term: 'Schéma conventionnel', definition: 'Schéma annoté du dosage qui rassemble toutes les informations utiles au calcul.' },
    ],
    mistakes: [
      { wrong: 'Confondre la solution à doser (dans l’erlenmeyer) et la solution titrante (dans la burette).', right: 'La solution titrante, de concentration connue, est dans la burette ; la prise d’essai de solution à doser est dans l’erlenmeyer.' },
      { wrong: 'Arrêter le dosage à la première teinte qui disparaît sous l’agitation.', right: 'L’équivalence correspond à la première teinte persistante (environ 30 secondes).' },
      { wrong: 'Rincer la burette à l’eau distillée juste avant de la remplir.', right: 'On la rince deux fois avec la solution titrante pour ne pas la diluer.' },
      { wrong: 'Oublier le facteur de dilution dans le calcul final.', right: 'Si l’on a dosé une solution diluée F fois, on multiplie le résultat par F.' },
      { wrong: 'Penser que l’eau ajoutée dans l’erlenmeyer modifie le volume équivalent.', right: 'L’eau ne change pas la quantité d’espèce à doser : V~E~ ne change pas.' },
    ],
    quiz: [
      { question: 'Dans un dosage volumétrique, la burette contient :', choices: ['La solution à doser', 'La solution titrante, de concentration connue', 'L’indicateur coloré', 'De l’eau distillée'], answer: 1, explanation: 'La solution titrante est versée progressivement à la burette ; la prise d’essai est dans l’erlenmeyer.' },
      { question: 'À l’équivalence :', choices: ['La solution titrante est en excès', 'Les réactifs ont été introduits dans les proportions de l’équation', 'L’espèce à doser est en excès', 'La réaction commence'], answer: 1, explanation: 'Les deux réactifs sont alors entièrement consommés.' },
      { question: 'La réaction CH~3~COOH + HO^−^ → CH~3~COO^−^ + H~2~O est une réaction :', choices: ['D’oxydoréduction', 'Acido-basique', 'Enzymatique', 'De précipitation'], answer: 1, explanation: 'Il y a transfert d’un ion H^+^ de l’acide éthanoïque vers l’ion hydroxyde.' },
      { question: 'Dans le dosage de la vitamine C par le DCPIP, la vitamine C joue le rôle :', choices: ['D’oxydant', 'De réducteur', 'D’acide', 'D’indicateur'], answer: 1, explanation: 'L’acide ascorbique cède des électrons au DCPIP, l’oxydant.' },
      { question: 'On dose E = 20,0 mL d’une solution acide par de la soude à 0,100 mol·L^-1^ ; V~E~ = 15,0 mL (réaction mole à mole). La concentration de l’acide est :', choices: ['0,0750 mol·L^-1^', '0,133 mol·L^-1^', '0,300 mol·L^-1^', '7,50 mol·L^-1^'], answer: 0, explanation: 'C~A~ = C~B~ × V~E~ ÷ E = 0,100 × 15,0 ÷ 20,0 = 0,0750 mol·L^-1^.' },
      { question: 'Le vinaigre dosé avait été dilué au 1/10 ; on trouve 0,130 mol·L^-1^ pour la solution diluée. Le vinaigre pur a une concentration de :', choices: ['0,0130 mol·L^-1^', '0,130 mol·L^-1^', '1,30 mol·L^-1^', '13,0 mol·L^-1^'], answer: 2, explanation: 'On multiplie par le facteur de dilution : 0,130 × 10 = 1,30 mol·L^-1^.' },
      { question: 'La prise d’essai est prélevée avec :', choices: ['Une éprouvette graduée', 'Un bécher', 'Une pipette jaugée', 'La burette'], answer: 2, explanation: 'E intervient dans le calcul : il doit être mesuré avec exactitude.' },
      { question: 'Une burette rincée seulement à l’eau distillée donne une concentration calculée :', choices: ['Trop élevée', 'Trop faible', 'Exacte', 'Nulle'], answer: 0, explanation: 'La solution titrante diluée impose un V~E~ trop grand, donc une concentration calculée trop élevée.' },
      { question: 'L’étalon de contrôle sert à :', choices: ['Régler le zéro de la burette', 'Vérifier l’exactitude de la méthode avant de doser les échantillons', 'Colorer la solution', 'Diluer l’échantillon'], answer: 1, explanation: 'Dosé comme un échantillon, il doit donner un résultat dans l’intervalle d’acceptabilité.' },
    ],
    exercises: [
      {
        title: 'Acidité d’un vinaigre d’alcool',
        statement: ['Un vinaigre est dilué au 1/10. On dose E = 10,0 mL de vinaigre dilué par une solution d’hydroxyde de sodium à 0,100 mol·L^-1^ ; V~E~ = 11,7 mL. Données : M(CH~3~COOH) = 60,0 g·mol^-1^ ; masse volumique du vinaigre : 1,01 kg·L^-1^.', 'a) Calcule la concentration du vinaigre dilué puis du vinaigre pur. b) Calcule sa concentration en masse. c) Ce vinaigre peut-il être vendu comme « vinaigre à 7 % » ?'],
        answer: ['a) C~dilué~ = 0,100 × 11,7 ÷ 10,0 = 0,117 mol·L^-1^ ; C~pur~ = 0,117 × 10 = 1,17 mol·L^-1^.', 'b) ρ = 1,17 × 60,0 = 70,2 g·L^-1^.', 'c) Pour 100 g de vinaigre : 70,2 × 100 ÷ 1 010 ≈ 6,95 g, soit environ 7,0 % : l’indication est correcte.'],
      },
      {
        title: 'Étalonnage d’une solution de soude',
        statement: 'On pèse 0,1838 g d’hydrogénophtalate de potassium (M = 204,2 g·mol^-1^), qui réagit mole à mole avec les ions hydroxyde. On le dissout et on le dose par une solution de soude : V~E~ = 9,20 mL. Calcule la concentration exacte de la soude.',
        answer: ['n = m ÷ M = 0,1838 ÷ 204,2 = 9,001 × 10^-4^ mol.', 'À l’équivalence : n~soude~ = n = 9,001 × 10^-4^ mol.', 'C~soude~ = n ÷ V~E~ = 9,001 × 10^-4^ ÷ 9,20 × 10^-3^ = 0,0978 mol·L^-1^.'],
      },
      {
        title: 'Vitamine C d’un comprimé',
        statement: 'Un comprimé de vitamine C est dissous dans une fiole jaugée de 500,0 mL. On dose E = 10,0 mL de cette solution, acidifiée, par une solution de DCPIP à 2,00 × 10^-3^ mol·L^-1^ ; V~E~ = 11,4 mL. Données : M(acide ascorbique) = 176,1 g·mol^-1^. Calcule la masse de vitamine C du comprimé et compare-la à l’indication « 200 mg ».',
        answer: ['C = 2,00 × 10^-3^ × 11,4 ÷ 10,0 = 2,28 × 10^-3^ mol·L^-1^.', 'n dans la fiole = C × V = 2,28 × 10^-3^ × 0,5000 = 1,14 × 10^-3^ mol.', 'm = n × M = 1,14 × 10^-3^ × 176,1 = 0,201 g, soit environ 201 mg : conforme à l’indication de 200 mg.'],
      },
    ],
    selfCheck: [
      'Je sais identifier, dans une procédure, la solution à doser, la prise d’essai et la solution titrante.',
      'Je sais écrire l’équation de la réaction support et dire s’il s’agit d’une réaction acido-basique ou d’oxydoréduction.',
      'Je sais définir l’équivalence et expliquer comment l’indicateur coloré la repère.',
      'Je sais réaliser le schéma conventionnel d’un dosage.',
      'Je sais préparer une burette, réaliser un dosage rapide puis précis et lire le volume équivalent.',
      'Je sais calculer une concentration en trois lignes (grandeurs, unités, valeurs numériques) en tenant compte d’une dilution.',
      'Je sais expliquer le rôle de l’étalonnage et de l’étalon de contrôle.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Titrage — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Titrage' },
      { title: 'Phénolphtaléine — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Ph%C3%A9nolphtal%C3%A9ine' },
      { title: 'Acide ascorbique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_ascorbique' },
    ],
  },
};

export default lesson;
