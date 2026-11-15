import { img } from '../media';
import plateauRepas from '../../../assets/courses/premiere/bb1-1-se-nourrir/plateau-repas.webp';
import testsBiomolecules from '../../../assets/courses/premiere/bb1-1-se-nourrir/tests-biomolecules.webp';
import alimentsPlanche from '../../../assets/courses/premiere/bb1-1-se-nourrir/aliments-planche.webp';

const IMG = {
  plateau: img(plateauRepas, 'Plateau de cantine vu de dessus : carottes râpées, filet de poisson avec riz complet et haricots verts, yaourt nature, pomme, pain et carafe d’eau.', 'photo', 1536, 1024),
  tests: img(testsBiomolecules, 'Quatre tubes à essai sur un portoir : solution bleu-noir, précipité rouge brique, solution violette et couche d’huile colorée en rouge orangé au-dessus de l’eau.', 'photo', 1536, 1024),
  aliments: img(alimentsPlanche, 'Planche au crayon d’aliments courants : pain de campagne, verre de lait, huile, brocoli, lentilles, œufs, fromage, pomme, maquereau, noix et carotte.', 'pencil', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'bb1-1-se-nourrir',
  duration: 'Environ 3 séances (cours, activité expérimentale et analyse de documents)',
  hook: {
    image: IMG.plateau,
    question: 'Ce plateau de cantine couvre-t-il vraiment tes besoins ? Et que t’apportent, au juste, le poisson, le riz ou la pomme ?',
    text: 'Chaque jour, ton corps dépense de l’énergie, renouvelle des milliards de cellules et fabrique des molécules : il lui faut donc de la matière et de l’énergie, apportées par les aliments. Dans ce chapitre, tu apprends à identifier au laboratoire les biomolécules d’un aliment, à décrypter une étiquette, à calculer des besoins nutritionnels et à juger si une ration est équilibrée.',
  },
  objectives: [
    'Classer les aliments en groupes et identifier les constituants (eau, glucides, lipides, protides, minéraux, vitamines, fibres) qui les composent.',
    'Mettre en évidence expérimentalement les principales classes de biomolécules d’un aliment et interpréter les résultats grâce aux témoins.',
    'Lire une étiquette nutritionnelle, calculer une valeur énergétique et distinguer une allégation d’une recommandation.',
    'Distinguer besoins quantitatifs et besoins qualitatifs, macronutriments et micronutriments ; expliquer ce qu’est un acide aminé ou un acide gras essentiel.',
    'Analyser une ration ou un plateau-repas au regard des repères du PNNS et relier un déséquilibre alimentaire à des pathologies.',
  ],
  prerequisites: [
    'Collège : les aliments apportent de l’énergie et la matière nécessaire à la croissance.',
    'Seconde : molécule, atome, ion ; l’énergie se mesure en joules (J).',
    'Module transversal A : les grandes familles de biomolécules (oses, acides aminés, acides gras), à revoir en parallèle.',
  ],
  program: [
    'Identifier les biomolécules qui composent les aliments : groupes d’aliments, constituants alimentaires, biomolécules.',
    'Mise en évidence expérimentale de classes de biomolécules dans différents aliments : glucides, lipides, protides, vitamines.',
    'Analyser et comparer des étiquettes de produits alimentaires ; comparer aliments simples et aliments transformés.',
    'Déterminer les besoins nutritionnels quantitatifs et qualitatifs : acides aminés essentiels, acides gras essentiels, allégation / recommandation, macronutriment / micronutriment.',
    'Analyser un plateau-repas au regard des repères du Programme national nutrition santé (PNNS) et les apports d’une ration équilibrée ou déséquilibrée.',
    'Comprendre comment un déséquilibre alimentaire peut entraîner des pathologies.',
  ],

  course: {
    parts: [
      {
        title: 'Des aliments aux constituants alimentaires',
        intro: 'Une pomme, un morceau de pain ou un verre de lait sont des mélanges de molécules. Pour comprendre la nutrition, il faut d’abord savoir de quoi les aliments sont faits.',
        blocks: [
          { type: 'p', text: 'L’organisme doit se nourrir pour trois raisons : produire de l’**énergie** (fonctionnement des organes, maintien de la température à 37 °C, mouvements), obtenir de la **matière** pour construire et renouveler ses cellules (croissance, cicatrisation, renouvellement de la peau ou de l’intestin), et recevoir des substances qui permettent aux réactions chimiques de la cellule de se dérouler correctement.' },
          { type: 'definition', term: 'Aliment', text: 'toute substance, solide ou liquide, consommée par un être vivant et qui lui apporte des constituants utiles. Exemples : pain, lait, lentilles, pomme, eau.' },
          { type: 'definition', term: 'Constituants alimentaires', text: 'substances chimiques qui composent les aliments : **eau**, **glucides**, **lipides**, **protides**, **sels minéraux**, **vitamines** et **fibres**. La plupart des aliments contiennent plusieurs constituants.' },
          { type: 'definition', term: 'Biomolécule', text: 'molécule organique fabriquée par les êtres vivants, construite autour d’un squelette d’atomes de carbone, avec de l’hydrogène et de l’oxygène, souvent de l’azote, parfois du phosphore ou du soufre. Glucides, lipides, protides, vitamines et acides nucléiques sont des biomolécules ; l’eau et les ions minéraux ne le sont pas.' },
          {
            type: 'table',
            caption: 'Les constituants des aliments et leur rôle',
            head: ['Constituant', 'Nature chimique', 'Aliments riches', 'Rôle principal'],
            rows: [
              ['Eau', 'Molécule minérale H~2~O', 'Boissons, fruits et légumes (80 à 95 % d’eau)', 'Solvant des réactions, transport des molécules, régulation de la température ; environ 60 % de la masse du corps adulte.'],
              ['Glucides', 'Oses (glucose, fructose), diholosides (saccharose, lactose, maltose), polyosides (amidon)', 'Pain, pâtes, riz, pommes de terre, fruits, produits sucrés', 'Rôle **énergétique** principal (le glucose est le « carburant » des cellules) ; réserves sous forme de glycogène.'],
              ['Lipides', 'Surtout des triglycérides (glycérol + 3 acides gras) ; phospholipides, cholestérol', 'Huiles, beurre, fromages, poissons gras, fruits à coque', 'Énergie et **réserves** ; constituants des membranes cellulaires ; précurseurs d’hormones.'],
              ['Protides', 'Protéines et peptides : enchaînements d’acides aminés', 'Viandes, poissons, œufs, produits laitiers, légumineuses', 'Rôle **plastique** (construction) : muscles, enzymes, anticorps, hormones, transporteurs.'],
              ['Sels minéraux', 'Ions : Ca^2+^, Na^+^, K^+^, Cl^-^, Fe^2+^…', 'Produits laitiers (calcium), viandes et légumineuses (fer), sel (sodium)', 'Squelette (calcium, phosphore), fonctionnement des nerfs et des muscles, transport du dioxygène (fer).'],
              ['Vitamines', 'Biomolécules variées, actives en très petite quantité', 'Fruits et légumes (vitamine C), huiles et poissons gras (vitamines E et D), céréales (vitamines B)', 'Rôle **fonctionnel** : indispensables à de nombreuses réactions, à la vision, aux défenses de l’organisme.'],
              ['Fibres alimentaires', 'Glucides non digestibles par nos enzymes (cellulose…)', 'Légumes, fruits, céréales complètes, légumineuses', 'Régulent le transit intestinal et nourrissent les bactéries du côlon.'],
            ],
          },
          { type: 'definition', term: 'Groupe d’aliments', text: 'ensemble d’aliments qui apportent principalement les mêmes constituants et jouent un rôle nutritionnel proche. Les repères du PNNS distinguent sept groupes.' },
          {
            type: 'cards',
            items: [
              { title: 'Fruits et légumes', text: 'Eau, fibres, vitamines (C, B9), minéraux (potassium) ; peu énergétiques.', tone: 'green' },
              { title: 'Féculents et légumineuses', text: 'Pain, pâtes, riz, pommes de terre, lentilles : amidon (énergie), fibres ; protéines végétales pour les légumineuses.', tone: 'yellow' },
              { title: 'Produits laitiers', text: 'Lait, yaourts, fromages : calcium, protéines, lipides.', tone: 'blue' },
              { title: 'Viandes, poissons, œufs', text: 'Protéines de bonne qualité, fer, vitamine B12 ; acides gras oméga 3 dans les poissons gras.', tone: 'red' },
              { title: 'Matières grasses ajoutées', text: 'Huiles, beurre : lipides (énergie, acides gras essentiels, vitamines E et A).', tone: 'yellow' },
              { title: 'Produits sucrés', text: 'Sucre, confiseries, sodas : glucides simples, énergie « vide » (peu d’autres nutriments).', tone: 'white' },
              { title: 'Boissons', text: 'Seule l’eau est indispensable ; boire à volonté au cours et en dehors des repas.', tone: 'blue' },
            ],
          },
          { type: 'figure', image: IMG.aliments, caption: 'Aucun aliment ne contient un seul constituant : le pain apporte surtout de l’amidon, les lentilles de l’amidon et des protéines, le maquereau des protéines et des lipides, l’huile presque uniquement des lipides, la pomme de l’eau, des sucres et des fibres.', size: 'wide' },
          {
            type: 'compare',
            title: 'Aliments simples et aliments transformés',
            columns: [
              { title: 'Aliment brut ou peu transformé', subtitle: 'ex. pomme, lentilles sèches, filet de poisson, lait', items: ['Composition proche de l’aliment d’origine.', 'Riche en fibres, vitamines et minéraux.', 'Liste d’ingrédients courte ou absente.'] },
              { title: 'Aliment ultra-transformé', subtitle: 'ex. barres chocolatées, sodas, plats préparés industriels', items: ['Fabriqué à partir d’ingrédients extraits ou modifiés (sirop de glucose, huiles hydrogénées, protéines isolées) et d’additifs (arômes, émulsifiants, colorants).', 'Souvent plus riche en sucres ajoutés, en sel et en graisses, plus pauvre en fibres.', 'Une consommation élevée est associée, dans de nombreuses études, à un risque accru d’obésité et de maladies cardiovasculaires.'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Un aliment est un **mélange** de constituants : eau, glucides, lipides, protides, sels minéraux, vitamines et fibres.',
              'Glucides, lipides, protides et vitamines sont des **biomolécules** (molécules organiques du vivant) ; l’eau et les ions sont minéraux.',
              'Rôle dominant : glucides = énergie ; lipides = énergie et réserves ; protides = construction ; vitamines et minéraux = fonctionnement.',
              'Les aliments sont classés en **sept groupes** selon leurs constituants dominants.',
            ],
          },
        ],
      },

      {
        title: 'Mettre en évidence les biomolécules d’un aliment',
        intro: 'Au laboratoire, des réactions colorées spécifiques permettent de savoir quelles biomolécules contient un aliment.',
        blocks: [
          { type: 'p', text: 'Un **test caractéristique** est une réaction chimique qui donne un résultat visible (changement de couleur, précipité) en présence d’une seule famille de molécules. Pour interpréter un test sans erreur, on réalise toujours deux **témoins** en même temps que l’essai.' },
          { type: 'definition', term: 'Témoin positif', text: 'tube contenant la molécule recherchée (solution d’amidon, de glucose, d’albumine…) : il montre à quoi ressemble un résultat positif et prouve que le réactif fonctionne.' },
          { type: 'definition', term: 'Témoin négatif', text: 'tube contenant seulement de l’eau distillée et le réactif : il montre la couleur du réactif seul, en l’absence de la molécule recherchée.' },
          {
            type: 'steps',
            title: 'Préparer un aliment pour les tests',
            items: [
              'Broyer un petit morceau d’aliment dans un mortier avec quelques millilitres d’eau distillée.',
              'Filtrer le broyat : le **filtrat** contient les molécules solubles dans l’eau (sucres, protéines solubles, ions, vitamine C).',
              'Répartir le filtrat dans plusieurs tubes : un tube par test, toujours accompagné d’un témoin positif et d’un témoin négatif.',
              'Pour les lipides, insolubles dans l’eau, travailler directement sur l’aliment (tache translucide) ou sur un mélange agité avec le colorant Soudan III.',
            ],
          },
          {
            type: 'table',
            caption: 'Les principaux tests d’identification',
            head: ['Test (réactif)', 'Molécules recherchées', 'Résultat positif', 'Témoin négatif'],
            rows: [
              ['Eau iodée (lugol), à froid', 'Amidon', 'Coloration **bleu-violet à noir**', 'Jaune-orangé (couleur du réactif)'],
              ['Liqueur de Fehling, à chaud', 'Sucres **réducteurs** : glucose, fructose, maltose, lactose', '**Précipité rouge brique**', 'Bleu'],
              ['Réaction du biuret (sulfate de cuivre en milieu basique)', 'Protéines et peptides (au moins deux liaisons peptidiques)', 'Coloration **violette**', 'Bleu clair'],
              ['Soudan III (colorant liposoluble)', 'Lipides', 'Phase huileuse colorée en **rouge orangé**', 'Eau non colorée'],
              ['Papier filtre (tache translucide)', 'Lipides', 'Tache **translucide** qui persiste après séchage', 'Tache d’eau qui disparaît en séchant'],
              ['DCPIP (indicateur bleu)', 'Vitamine C (acide ascorbique)', 'Le DCPIP se **décolore**', 'Reste bleu'],
              ['Nitrate d’argent', 'Ions chlorure Cl^-^', 'Précipité blanc qui noircit à la lumière', 'Pas de précipité'],
              ['Oxalate d’ammonium', 'Ions calcium Ca^2+^', 'Précipité blanc', 'Pas de précipité'],
            ],
          },
          { type: 'figure', image: IMG.tests, caption: 'Résultats positifs de gauche à droite : eau iodée avec de l’amidon (bleu-noir), liqueur de Fehling à chaud avec un sucre réducteur (précipité rouge brique), biuret avec une protéine (violet), Soudan III avec de l’huile (phase huileuse rouge orangé).', size: 'wide' },
          { type: 'example', title: 'le lait demi-écrémé', text: 'Fehling positif (lactose, sucre réducteur), biuret positif (protéines : caséines), Soudan III positif (matière grasse), oxalate d’ammonium positif (calcium), eau iodée négative (pas d’amidon). Le lait contient donc des glucides, des protides, des lipides et des ions calcium.' },
          { type: 'warning', title: 'Pièges d’interprétation', text: ['Le **saccharose** (sucre de table) n’est pas réducteur : la liqueur de Fehling reste bleue. Un test de Fehling négatif ne prouve donc pas l’absence de glucides : il faut d’abord hydrolyser le saccharose (chauffage en milieu acide) en glucose et fructose, qui sont réducteurs.', 'L’amidon ne réagit pas avec la liqueur de Fehling : on le recherche avec l’eau iodée.'] },
          { type: 'warning', title: 'Sécurité', text: 'La liqueur de Fehling et le réactif du biuret contiennent de la soude, corrosive : blouse, lunettes et gants. Le chauffage se fait au bain-marie, tube tenu avec une pince et orienté vers le mur, jamais vers un camarade.' },
          {
            type: 'retenir',
            items: [
              'Eau iodée → amidon (bleu-noir) ; Fehling à chaud → sucres réducteurs (rouge brique) ; biuret → protéines (violet) ; Soudan III ou tache translucide → lipides.',
              'Chaque test est interprété en le comparant à un **témoin positif** et à un **témoin négatif**.',
              'Un test négatif signifie seulement que la molécule recherchée est absente ou en quantité trop faible pour être détectée.',
            ],
          },
        ],
      },

      {
        title: 'Lire une étiquette : allégation ou recommandation ?',
        intro: 'L’emballage d’un aliment donne des informations précieuses… à condition de savoir les lire et de faire la différence entre information et publicité.',
        blocks: [
          { type: 'p', text: 'En Europe, le règlement INCO (n° 1169/2011) impose sur les aliments emballés : la **liste des ingrédients** classés par ordre décroissant de masse, les **allergènes** mis en évidence (gras, couleur), et une **déclaration nutritionnelle** pour 100 g ou 100 mL : valeur énergétique (en kJ et en kcal), matières grasses dont acides gras saturés, glucides dont sucres, protéines et sel. Les fibres sont souvent indiquées, mais de façon facultative.' },
          { type: 'p', text: 'La valeur énergétique d’un aliment se calcule à partir de sa composition, car chaque gramme de constituant libère une quantité d’énergie connue lorsqu’il est utilisé par l’organisme.' },
          {
            type: 'formula',
            title: 'Valeur énergétique d’un aliment',
            expression: 'E (kcal) = 4 × m~glucides~ + 9 × m~lipides~ + 4 × m~protéines~',
            legend: [
              { symbol: 'm', meaning: 'masse de chaque constituant, en grammes (lue sur l’étiquette)' },
              { symbol: '4 ; 9 ; 4', meaning: 'kcal libérées par gramme de glucides, de lipides, de protéines (soit 17, 37 et 17 kJ)' },
              { symbol: 'kcal', meaning: '1 kcal = 4,18 kJ ; les fibres apportent environ 2 kcal par gramme' },
            ],
          },
          { type: 'example', title: '100 g de pain', text: 'Glucides 50 g, protéines 9 g, lipides 1,5 g. E = 4 × 50 + 9 × 1,5 + 4 × 9 = 200 + 13,5 + 36 ≈ **250 kcal**, soit environ 1 050 kJ. Un gramme de lipides apporte plus de deux fois plus d’énergie qu’un gramme de glucides.' },
          { type: 'definition', term: 'Allégation nutritionnelle', text: 'message **commercial facultatif**, choisi par le fabricant et inscrit sur l’emballage, qui affirme qu’un aliment possède une propriété nutritionnelle particulière : « source de fibres », « riche en calcium », « allégé en sucres ». Elle est strictement encadrée par le règlement européen n° 1924/2006 : « source de fibres » exige au moins 3 g de fibres pour 100 g, « riche en fibres » au moins 6 g, « allégé » au moins 30 % de moins qu’un produit de référence.' },
          { type: 'definition', term: 'Recommandation nutritionnelle', text: 'conseil établi par les **autorités de santé** (ANSES, Santé publique France, Haut Conseil de la santé publique) à partir de l’ensemble des connaissances scientifiques, pour toute la population ou pour un groupe (adolescents, femmes enceintes…). Exemple : « au moins cinq fruits et légumes par jour ».' },
          {
            type: 'compare',
            title: 'Ne pas confondre',
            columns: [
              { title: 'Allégation', items: ['Émise par le **fabricant**, sur un produit précis.', 'But : informer, mais aussi **vendre**.', 'Porte sur une seule qualité du produit (« riche en fibres ») sans juger l’ensemble.'] },
              { title: 'Recommandation', items: ['Émise par les **autorités de santé**.', 'But : protéger la **santé publique**.', 'Porte sur l’alimentation globale (fréquences, quantités, équilibre).'] },
            ],
          },
          { type: 'warning', text: 'Un produit « allégé en matières grasses » peut être très sucré ; un produit « sans sucres ajoutés » peut contenir beaucoup de sucres naturellement présents (jus de fruits, lait). Lis toujours le tableau nutritionnel en entier.' },
          { type: 'note', title: 'Le Nutri-Score', text: 'Ce logo facultatif classe les produits de A (vert foncé) à E (orange foncé). Il est calculé pour 100 g à partir de points « défavorables » (énergie, sucres, acides gras saturés, sel) et « favorables » (fibres, protéines, fruits, légumes et légumineuses). Il sert surtout à **comparer des produits d’une même catégorie** (deux céréales de petit-déjeuner, par exemple).' },
          {
            type: 'retenir',
            items: [
              'L’étiquette indique les ingrédients (par ordre décroissant), les allergènes et la composition pour 100 g ou 100 mL.',
              'E (kcal) = 4 × glucides + 9 × lipides + 4 × protéines (masses en g).',
              'Une **allégation** est un message commercial encadré par la loi ; une **recommandation** est un conseil de santé publique.',
            ],
          },
        ],
      },

      {
        title: 'Les besoins nutritionnels : combien et quoi ?',
        intro: 'Les besoins nutritionnels se décrivent de deux façons : une quantité (combien d’énergie et de chaque nutriment) et une qualité (quelles molécules indispensables).',
        blocks: [
          { type: 'definition', term: 'Besoins quantitatifs', text: 'quantités d’énergie et de chaque constituant que l’alimentation doit apporter chaque jour pour couvrir les dépenses de l’organisme et permettre sa croissance.' },
          { type: 'p', text: 'La dépense énergétique quotidienne comprend le **métabolisme de base** (60 à 70 % : fonctionnement des organes au repos, maintien de la température), l’**activité physique** (très variable), l’énergie utilisée pour digérer les repas (environ 10 %) et, chez l’adolescent, la **croissance**. Elle dépend donc de l’âge, du sexe, de la masse corporelle, de l’activité et de l’état physiologique (croissance, grossesse).' },
          {
            type: 'table',
            caption: 'Besoins énergétiques : ordres de grandeur pour une activité physique modérée',
            head: ['Personne', 'Besoin énergétique quotidien'],
            rows: [
              ['Adolescente de 16 ans', 'Environ 2 200 kcal (9 200 kJ)'],
              ['Adolescent de 16 ans', 'Environ 2 800 kcal (11 700 kJ)'],
              ['Femme adulte', 'Environ 2 000 kcal'],
              ['Homme adulte', 'Environ 2 500 kcal'],
              ['Sportif d’endurance à l’entraînement', '3 000 à 4 000 kcal, voire plus'],
            ],
          },
          {
            type: 'table',
            caption: 'Répartition conseillée de l’apport énergétique total (ANSES)',
            head: ['Macronutriment', 'Part de l’énergie totale', 'Repère complémentaire'],
            rows: [
              ['Glucides', '40 à 55 %', 'Sucres (hors lactose) : moins de 100 g par jour chez l’adulte'],
              ['Lipides', '35 à 40 %', 'Limiter les acides gras saturés ; assurer les oméga 3'],
              ['Protéines', '10 à 20 %', 'Environ 0,83 g par kg de masse corporelle et par jour chez l’adulte'],
              ['Fibres', '—', 'Environ 30 g par jour'],
            ],
          },
          { type: 'example', title: 'calculer un besoin en protéines', text: 'Un adolescent a besoin de 2 800 kcal par jour. Si 15 % de cette énergie provient des protéines : 0,15 × 2 800 = 420 kcal, soit 420 ÷ 4 = **105 g de protéines** par jour.' },
          { type: 'definition', term: 'Besoins qualitatifs', text: 'nature des constituants que l’alimentation doit obligatoirement apporter, parce que l’organisme ne sait pas les fabriquer ou pas en quantité suffisante : certains acides aminés et acides gras, les vitamines, les minéraux, l’eau.' },
          { type: 'definition', term: 'Acide aminé essentiel (ou indispensable)', text: 'acide aminé que l’organisme humain ne sait pas synthétiser et qui doit donc être apporté par l’alimentation. Sur les 20 acides aminés des protéines, **9** sont essentiels chez l’adulte : histidine, isoleucine, leucine, lysine, méthionine, phénylalanine, thréonine, tryptophane, valine.' },
          { type: 'p', text: 'Les protéines animales (œuf, lait, viande, poisson) contiennent tous les acides aminés essentiels en bonnes proportions. Les protéines végétales sont souvent pauvres en l’un d’eux : les céréales manquent de **lysine**, les légumineuses de **méthionine**. En associant céréales et légumineuses dans un même repas, on obtient un apport complet : semoule et pois chiches (couscous), riz et lentilles, maïs et haricots rouges.' },
          { type: 'definition', term: 'Acide gras essentiel', text: 'acide gras que l’organisme ne sait pas fabriquer. Il y en a deux : l’**acide linoléique** (famille des oméga 6 ; huiles de tournesol, de noix) et l’**acide alpha-linolénique** (famille des oméga 3 ; huiles de colza, de noix, de lin). Ils entrent dans la composition des membranes (cerveau, rétine) et sont les précurseurs d’autres acides gras et de molécules de signalisation. Les poissons gras apportent directement des oméga 3 à longue chaîne (EPA, DHA).' },
          {
            type: 'compare',
            title: 'Macronutriments et micronutriments',
            columns: [
              { title: 'Macronutriments', subtitle: 'glucides, lipides, protéines', items: ['Besoins de l’ordre de **dizaines à centaines de grammes** par jour.', 'Apportent de l’**énergie** (et de la matière).', 'Exemple : environ 250 à 350 g de glucides par jour pour un adolescent.'] },
              { title: 'Micronutriments', subtitle: 'vitamines, minéraux, oligoéléments', items: ['Besoins de l’ordre du **milligramme** (mg) ou du **microgramme** (µg) par jour.', 'N’apportent **pas d’énergie**.', 'Pourtant indispensables : une carence provoque une maladie.'] },
            ],
          },
          {
            type: 'table',
            caption: 'Quelques micronutriments (références ANSES, ordres de grandeur pour un adolescent)',
            head: ['Micronutriment', 'Besoin quotidien', 'Sources', 'Conséquence d’une carence'],
            rows: [
              ['Calcium', 'Environ 1 150 mg', 'Produits laitiers, eaux calciques, amandes', 'Mauvaise minéralisation des os'],
              ['Fer', '11 à 13 mg selon les pertes (règles)', 'Viandes, boudin, légumineuses', 'Anémie (fatigue, pâleur, essoufflement)'],
              ['Vitamine C', 'Environ 100 mg', 'Agrumes, kiwi, poivron, chou', 'Scorbut (gencives qui saignent, mauvaise cicatrisation)'],
              ['Vitamine D', 'Environ 15 µg', 'Poissons gras, œufs ; synthèse dans la peau au soleil', 'Rachitisme chez l’enfant, os fragiles'],
              ['Iode', 'Environ 150 µg', 'Produits de la mer, sel iodé', 'Goitre (augmentation du volume de la thyroïde)'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Besoins **quantitatifs** : énergie (environ 2 200 à 2 800 kcal par jour à 16 ans) et quantités de chaque nutriment.',
              'Besoins **qualitatifs** : molécules indispensables que l’organisme ne fabrique pas.',
              '9 acides aminés essentiels et 2 acides gras essentiels (linoléique, alpha-linolénique) doivent être apportés par l’alimentation.',
              'Macronutriments (g, énergie) ≠ micronutriments (mg ou µg, pas d’énergie, mais indispensables).',
            ],
          },
        ],
      },

      {
        title: 'Équilibre alimentaire et santé',
        intro: 'Manger équilibré, ce n’est pas manger « parfait » à chaque repas : c’est couvrir ses besoins, sans manque ni excès, sur la journée et sur la semaine.',
        blocks: [
          { type: 'definition', term: 'Ration alimentaire', text: 'ensemble des aliments consommés en 24 heures. Elle est **équilibrée** lorsqu’elle couvre les besoins quantitatifs et qualitatifs de la personne, sans excès durable.' },
          { type: 'p', text: 'Le **Programme national nutrition santé** (PNNS), lancé en 2001, diffuse des repères simples, présentés sur le site Manger Bouger de Santé publique France. Les repères pour les enfants et les adolescents ont été actualisés par le Haut Conseil de la santé publique en 2020.' },
          {
            type: 'table',
            caption: 'Les repères du PNNS pour les adolescents',
            head: ['Groupe', 'Repère'],
            rows: [
              ['Fruits et légumes', 'Au moins **5 portions par jour** (une portion ≈ 80 à 100 g)'],
              ['Fruits à coque', 'Une petite poignée par jour (noix, amandes, noisettes non salées)'],
              ['Féculents', 'Tous les jours, en privilégiant les produits **complets**'],
              ['Légumineuses', 'Au moins **2 fois par semaine** (lentilles, pois chiches, haricots)'],
              ['Produits laitiers', '**3 par jour** de 3 à 17 ans (2 par jour chez l’adulte)'],
              ['Viandes, poissons, œufs', 'Poisson 2 fois par semaine, dont un poisson gras ; limiter la viande rouge et la charcuterie'],
              ['Matières grasses', 'Sans excès, en privilégiant les huiles de colza, de noix et d’olive'],
              ['Produits sucrés, sel', 'À limiter ; les boissons sucrées doivent rester exceptionnelles'],
              ['Eau', 'La seule boisson indispensable, à volonté'],
              ['Activité physique', 'Au moins 1 heure par jour d’activité modérée à intense'],
            ],
          },
          { type: 'p', text: 'Sur la journée, l’énergie est classiquement répartie en quatre prises : petit-déjeuner (environ 25 %), déjeuner (environ 35 %), goûter (environ 15 %) et dîner (environ 25 %). Sauter le petit-déjeuner favorise le grignotage dans la matinée.' },
          {
            type: 'compare',
            title: 'Déséquilibres alimentaires et pathologies',
            columns: [
              { title: 'Carences', subtitle: 'apport insuffisant', items: ['Fer → **anémie** ferriprive.', 'Vitamine C → **scorbut** ; vitamine D → **rachitisme**.', 'Iode → **goitre**.', 'Protéines et énergie → **dénutrition**, retard de croissance, défenses affaiblies.'] },
              { title: 'Excès', subtitle: 'apport supérieur aux besoins', items: ['Énergie (sucres, graisses) → stockage sous forme de lipides : **surpoids**, **obésité**.', 'Obésité et sédentarité → **diabète de type 2**.', 'Sel → **hypertension artérielle** ; acides gras saturés → **maladies cardiovasculaires**.', 'Sucres fréquents → **caries** ; charcuteries et alcool → certains **cancers**.'] },
            ],
          },
          { type: 'warning', text: 'Il n’existe ni aliment « miracle » ni aliment « interdit ». Un repas déséquilibré peut être compensé au repas suivant : l’équilibre se juge sur plusieurs jours.' },
          { type: 'note', title: 'Lien avec la suite du thème', text: 'Les excès d’énergie sont stockés sous forme de triglycérides dans les adipocytes (chapitre 1.3) ; la régulation de la glycémie et le diabète sont étudiés au chapitre 1.5.' },
          {
            type: 'retenir',
            items: [
              'Une ration équilibrée couvre les besoins **sans manque ni excès**, sur la journée et sur la semaine.',
              'Repères clés : 5 fruits et légumes, féculents complets, légumineuses 2 fois par semaine, 3 produits laitiers, poisson 2 fois par semaine, eau à volonté.',
              'Les carences (fer, vitamines, protéines) et les excès (énergie, sucres, sel, graisses saturées) favorisent des maladies.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des documents. Réponds d’abord seul(e), en phrases complètes : tu peux écrire ta réponse directement sous la question. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Identifier les biomolécules de quelques aliments',
        duration: '30 min',
        skills: ['Observer', 'Interpréter', 'Raisonner'],
        context: 'Au laboratoire, un groupe d’élèves a broyé et filtré plusieurs aliments, puis réalisé quatre tests sur chaque filtrat. L’huile, non miscible à l’eau, a été testée directement.',
        documents: [
          { label: 'Document 1', title: 'Aspect des tubes positifs', image: IMG.tests, caption: 'De gauche à droite : eau iodée, liqueur de Fehling après chauffage, biuret, Soudan III.' },
          {
            label: 'Document 2',
            title: 'Résultats obtenus en TP',
            blocks: [
              {
                type: 'table',
                head: ['Échantillon', 'Eau iodée', 'Fehling à chaud', 'Biuret', 'Soudan III'],
                rows: [
                  ['Eau distillée', 'Jaune-orangé', 'Bleu', 'Bleu clair', 'Pas de coloration'],
                  ['Farine délayée', 'Bleu-noir', 'Bleu', 'Violet pâle', 'Pas de coloration'],
                  ['Lait demi-écrémé', 'Jaune-orangé', 'Rouge brique', 'Violet', 'Gouttelettes rouges'],
                  ['Jus de pomme', 'Jaune-orangé', 'Rouge brique', 'Bleu clair', 'Pas de coloration'],
                  ['Blanc d’œuf dilué', 'Jaune-orangé', 'Bleu', 'Violet intense', 'Pas de coloration'],
                  ['Huile de colza', 'Non réalisé', 'Non réalisé', 'Non réalisé', 'Phase huileuse rouge'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Quel est le rôle du tube d’eau distillée ?', hint: 'Que montre un tube qui ne contient que le réactif ?', answer: 'C’est le témoin négatif : il montre la couleur de chaque réactif en l’absence de la molécule recherchée. Un résultat n’est positif que s’il est différent de ce témoin.' },
          { text: 'Indique les biomolécules mises en évidence dans le lait, puis dans la farine.', answer: 'Lait : sucres réducteurs (lactose, Fehling rouge brique), protéines (biuret violet) et lipides (Soudan III). Farine : amidon (eau iodée bleu-noir) et un peu de protéines (biuret violet pâle : il s’agit surtout du gluten).' },
          { text: 'Le jus de pomme est sucré, et pourtant le biuret reste bleu clair. Que peux-tu conclure ?', answer: 'Le jus de pomme contient des sucres réducteurs (glucose et fructose) mais pas de protéines en quantité détectable.' },
          { text: 'Un élève teste une solution de sucre de table (saccharose) : la liqueur de Fehling reste bleue. Il conclut que cette solution ne contient pas de glucide. A-t-il raison ? Propose une expérience pour le vérifier.', hint: 'Tous les glucides sont-ils réducteurs ?', answer: 'Non. Le saccharose est un glucide, mais il n’est pas réducteur : il ne réagit pas avec la liqueur de Fehling. On peut d’abord l’hydrolyser (chauffage avec un acide, ou action d’une enzyme, la saccharase) : il libère du glucose et du fructose, réducteurs, et le test de Fehling devient positif (précipité rouge brique).' },
          { text: 'Quel autre test simple permettrait de confirmer la présence de lipides dans le lait ou l’huile ?', answer: 'Le test de la tache translucide : une goutte déposée sur du papier filtre laisse une tache translucide qui persiste après séchage, alors qu’une tache d’eau disparaît.' },
          { text: 'Conclus : pourquoi dit-on qu’un aliment est un « mélange » de constituants ?', answer: 'Un même aliment donne plusieurs tests positifs : le lait contient à la fois des glucides, des protides et des lipides (et des ions calcium). Un aliment n’est donc presque jamais formé d’une seule biomolécule.' },
        ],
      },
      {
        title: 'Décrypter deux étiquettes nutritionnelles',
        duration: '30 min',
        skills: ['Calculer', 'Comparer', 'Argumenter'],
        context: 'Au supermarché, Inès hésite entre deux produits pour son petit-déjeuner. Les valeurs ci-dessous ont été construites pour l’exercice à partir de produits courants.',
        documents: [
          {
            label: 'Document 3',
            title: 'Déclarations nutritionnelles (pour 100 g)',
            blocks: [
              {
                type: 'table',
                head: ['Pour 100 g', 'Céréales fourrées au chocolat', 'Flocons d’avoine'],
                rows: [
                  ['Énergie', '1 883 kJ / 448 kcal', '1 563 kJ / 371 kcal'],
                  ['Matières grasses', '15 g', '7 g'],
                  ['dont acides gras saturés', '4 g', '1,3 g'],
                  ['Glucides', '68 g', '59 g'],
                  ['dont sucres', '30 g', '1 g'],
                  ['Fibres alimentaires', '4,5 g', '10 g'],
                  ['Protéines', '8 g', '13 g'],
                  ['Sel', '0,6 g', '0,02 g'],
                ],
              },
            ],
          },
          { label: 'Document 4', title: 'Mentions relevées sur les emballages', text: ['Céréales fourrées au chocolat : « Source de fibres » ; « Riche en céréales ».', 'Flocons d’avoine : aucune mention particulière.', 'Affiche du PNNS dans le magasin : « Pour votre santé, évitez de manger trop gras, trop sucré, trop salé ».'] },
        ],
        questions: [
          { text: 'Calcule la valeur énergétique de 100 g de céréales au chocolat à partir des glucides, des lipides et des protéines. Compare avec l’étiquette et explique l’écart.', hint: 'E = 4 × glucides + 9 × lipides + 4 × protéines.', answer: 'E = 4 × 68 + 9 × 15 + 4 × 8 = 272 + 135 + 32 = 439 kcal. L’étiquette indique 448 kcal : les 9 kcal d’écart correspondent aux fibres (4,5 g × 2 kcal/g = 9 kcal).' },
          { text: 'Inès mange un bol de 40 g de céréales au chocolat. Calcule la masse de sucres consommée.', answer: '30 g × 40 ÷ 100 = 12 g de sucres, soit l’équivalent de deux à trois morceaux de sucre, avant même d’ajouter du lait.' },
          { text: 'L’allégation « Source de fibres » est-elle autorisée ? Suffit-elle à faire de ce produit un bon choix ?', hint: 'Le règlement exige au moins 3 g de fibres pour 100 g.', answer: 'Oui : 4,5 g de fibres pour 100 g dépasse le seuil de 3 g, l’allégation est légale. Mais elle ne porte que sur les fibres : le produit contient aussi 30 % de sucres et 15 % de matières grasses. Les flocons d’avoine apportent plus de fibres (10 g) sans l’annoncer.' },
          { text: 'Classe chacune des trois mentions du document 4 : allégation ou recommandation ? Justifie.', answer: '« Source de fibres » et « Riche en céréales » sont des allégations : ce sont des messages du fabricant, sur son produit, qui ont aussi un but commercial. « Évitez de manger trop gras, trop sucré, trop salé » est une recommandation des autorités de santé (PNNS), qui concerne l’alimentation en général.' },
          { text: 'Quel produit conseilles-tu à Inès ? Argumente avec au moins trois données chiffrées.', answer: 'Les flocons d’avoine : 30 fois moins de sucres (1 g contre 30 g), plus de fibres (10 g contre 4,5 g), plus de protéines (13 g contre 8 g), moitié moins de lipides et presque pas de sel. Ils sont aussi un aliment peu transformé.' },
        ],
      },
      {
        title: 'Analyser un plateau-repas avec les repères du PNNS',
        duration: '30 min',
        skills: ['Analyser', 'Calculer', 'Proposer'],
        context: 'Voici le plateau de Lucas, 16 ans, au restaurant scolaire. Les valeurs nutritionnelles ont été estimées à partir de la table de composition des aliments Ciqual (ANSES).',
        documents: [
          { label: 'Document 5', title: 'Le plateau de Lucas', image: IMG.plateau, caption: 'Carottes râpées vinaigrette, filet de colin, riz complet, haricots verts, yaourt nature, pomme, pain, eau.' },
          {
            label: 'Document 6',
            title: 'Apports estimés du plateau',
            blocks: [
              {
                type: 'table',
                head: ['Constituant', 'Apport du plateau'],
                rows: [
                  ['Énergie', '730 kcal'],
                  ['Protéines', '38 g'],
                  ['Lipides', '21 g'],
                  ['Glucides', '90 g'],
                  ['Fibres', '12 g'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Classe les aliments du plateau dans les groupes du PNNS. Quels groupes sont représentés ?', answer: 'Fruits et légumes : carottes, haricots verts, pomme (3 portions). Féculents : riz complet, pain. Produits laitiers : yaourt. Viandes, poissons, œufs : colin. Matières grasses : huile de la vinaigrette. Boisson : eau. Seul le groupe des produits sucrés est absent, ce qui n’est pas un problème.' },
          { text: 'Lucas a besoin d’environ 2 800 kcal par jour. Quelle part de ses besoins ce repas couvre-t-il ? Compare au repère de 35 % pour le déjeuner.', answer: '730 ÷ 2 800 ≈ 0,26, soit 26 % : un peu moins que les 35 % conseillés. Lucas pourrait reprendre du pain ou du riz s’il a encore faim, surtout s’il fait du sport.' },
          { text: 'Calcule la part de l’énergie du repas apportée par chaque macronutriment et compare aux repères de l’ANSES.', hint: 'Énergie des protéines = 38 × 4 ; pense à diviser par 730 kcal.', answer: 'Protéines : 38 × 4 = 152 kcal, soit 21 % (repère 10 à 20 %, limite haute). Lipides : 21 × 9 = 189 kcal, soit 26 % (repère 35 à 40 % : un peu faible). Glucides : 90 × 4 = 360 kcal, soit 49 % (repère 40 à 55 % : conforme).' },
          { text: 'Le colin est un poisson maigre. Quel repère du PNNS concernant le poisson Lucas devra-t-il penser à respecter dans la semaine ?', answer: 'Manger du poisson deux fois par semaine, dont un poisson gras (sardine, maquereau, saumon), source d’oméga 3.' },
          { text: 'Propose deux aliments à ajouter au goûter de Lucas pour compléter sa journée de façon équilibrée.', answer: 'Par exemple une poignée de noix ou d’amandes (lipides de bonne qualité, oméga 3 pour les noix) et un produit laitier ou un morceau de pain avec du fromage (calcium, protéines, énergie).' },
        ],
      },
      {
        title: 'Relier un déséquilibre alimentaire à une pathologie',
        duration: '25 min',
        skills: ['Exploiter des documents', 'Calculer', 'Argumenter'],
        context: 'Deux situations sont présentées : elles décrivent des cas typiques rencontrés par les médecins et diététiciens, simplifiés pour l’exercice.',
        documents: [
          { label: 'Document 7', title: 'Situation 1 : Chloé, 16 ans', text: ['Chloé se sent fatiguée, essoufflée à l’effort et elle est pâle. Elle ne mange jamais de viande ni de poisson et rarement des légumineuses. Ses règles sont abondantes.', 'Son analyse de sang indique une concentration d’hémoglobine de 10,2 g pour 100 mL (valeurs de référence chez l’adolescente : 12 à 16 g pour 100 mL). Son apport en fer est estimé à 6 mg par jour.'] },
          { label: 'Document 8', title: 'Situation 2 : Hugo, 16 ans', text: ['Hugo boit chaque jour environ 1 L de soda (10,6 g de sucres pour 100 mL) et grignote des biscuits devant les écrans. Il pratique peu d’activité physique. Sa masse augmente régulièrement depuis deux ans.', 'Repère : les apports en sucres (hors lactose) ne devraient pas dépasser 100 g par jour chez l’adulte, et moins chez l’enfant.'] },
        ],
        questions: [
          { text: 'Situation 1 : quelle anomalie l’analyse de sang révèle-t-elle ? Relie-la à l’alimentation de Chloé.', hint: 'Le fer est un constituant de l’hémoglobine, qui transporte le dioxygène.', answer: 'L’hémoglobine (10,2 g pour 100 mL) est inférieure aux valeurs de référence : Chloé est anémiée. Son apport en fer (6 mg par jour) est environ deux fois trop faible par rapport aux besoins (11 à 13 mg), alors que ses pertes sont élevées. Le fer est indispensable à la fabrication de l’hémoglobine : sans assez d’hémoglobine, le sang transporte moins de dioxygène, d’où la fatigue et l’essoufflement.' },
          { text: 'Propose à Chloé deux changements alimentaires compatibles avec ses choix.', answer: 'Manger plus souvent des légumineuses (lentilles, pois chiches) et des céréales complètes, riches en fer, en les associant à un aliment riche en vitamine C (agrumes, poivron), qui améliore l’absorption du fer végétal. Un avis médical permettra de décider d’une éventuelle supplémentation.' },
          { text: 'Situation 2 : calcule la masse de sucres et l’énergie apportées chaque jour par le soda d’Hugo.', answer: '1 L = 1 000 mL, donc 10,6 × 10 = 106 g de sucres, soit 106 × 4 = 424 kcal. Le soda seul dépasse le repère de 100 g de sucres par jour.' },
          { text: 'Explique pourquoi la masse d’Hugo augmente et cite deux maladies que ce comportement favorise à long terme.', answer: 'Ses apports énergétiques dépassent ses dépenses (peu d’activité physique) : l’excès d’énergie est stocké sous forme de lipides (triglycérides) dans le tissu adipeux, d’où la prise de masse. À long terme, cela favorise l’obésité, le diabète de type 2, les maladies cardiovasculaires et les caries.' },
          { text: 'Ces deux situations montrent deux types de déséquilibres. Nomme-les.', answer: 'Chloé présente une carence (apport insuffisant en un micronutriment, le fer) ; Hugo présente un excès (apport énergétique et en sucres supérieur aux besoins).' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Les aliments sont des mélanges de constituants : eau, glucides, lipides, protides, sels minéraux, vitamines, fibres ; ils sont classés en sept groupes.',
      'Des tests colorés identifient les biomolécules : eau iodée (amidon), Fehling à chaud (sucres réducteurs), biuret (protéines), Soudan III (lipides), toujours avec des témoins.',
      'La valeur énergétique se calcule : E (kcal) = 4 × glucides + 9 × lipides + 4 × protéines.',
      'Une allégation est un message commercial encadré ; une recommandation est un conseil des autorités de santé.',
      'Les besoins quantitatifs concernent l’énergie et les quantités de nutriments ; les besoins qualitatifs concernent les molécules indispensables (9 acides aminés et 2 acides gras essentiels, vitamines, minéraux).',
      'Macronutriments (grammes, énergie) et micronutriments (mg ou µg, sans énergie) sont tous indispensables.',
      'Une ration équilibrée suit les repères du PNNS ; carences et excès favorisent des pathologies (anémie, obésité, diabète de type 2…).',
    ],
    method: {
      title: 'Analyser une ration ou un repas',
      steps: [
        'Classer chaque aliment dans son groupe et repérer les groupes absents ou en excès.',
        'Comparer aux repères du PNNS (fruits et légumes, produits laitiers, légumineuses, poisson…).',
        'Calculer l’énergie totale et la comparer aux besoins de la personne (âge, sexe, activité).',
        'Calculer la part de chaque macronutriment dans l’énergie (× 4, × 9, × 4) et la comparer aux repères de l’ANSES.',
        'Conclure (équilibré ou non) et proposer des modifications concrètes.',
      ],
    },
    vocabulary: [
      { term: 'Aliment', definition: 'Substance consommée qui apporte à l’organisme des constituants utiles.' },
      { term: 'Constituant alimentaire', definition: 'Substance chimique présente dans les aliments : eau, glucides, lipides, protides, minéraux, vitamines, fibres.' },
      { term: 'Biomolécule', definition: 'Molécule organique, à squelette carboné, fabriquée par les êtres vivants.' },
      { term: 'Groupe d’aliments', definition: 'Ensemble d’aliments aux constituants dominants et au rôle nutritionnel proches.' },
      { term: 'Témoin', definition: 'Tube de comparaison (positif : contient la molécule ; négatif : ne la contient pas) qui valide l’interprétation d’un test.' },
      { term: 'Allégation', definition: 'Message commercial facultatif et réglementé qui vante une propriété nutritionnelle d’un produit.' },
      { term: 'Recommandation', definition: 'Conseil nutritionnel établi par les autorités de santé pour protéger la santé publique.' },
      { term: 'Besoins quantitatifs', definition: 'Quantités d’énergie et de nutriments nécessaires chaque jour.' },
      { term: 'Besoins qualitatifs', definition: 'Nature des molécules indispensables que l’organisme ne fabrique pas.' },
      { term: 'Acide aminé essentiel', definition: 'Acide aminé non synthétisé par l’organisme, à apporter par l’alimentation (9 chez l’adulte).' },
      { term: 'Acide gras essentiel', definition: 'Acide gras non synthétisé par l’organisme : acide linoléique (oméga 6) et acide alpha-linolénique (oméga 3).' },
      { term: 'Macronutriment', definition: 'Glucides, lipides, protéines : besoins en grammes, apport d’énergie.' },
      { term: 'Micronutriment', definition: 'Vitamines, minéraux, oligoéléments : besoins en mg ou µg, sans apport d’énergie.' },
      { term: 'Ration alimentaire', definition: 'Ensemble des aliments consommés en 24 heures.' },
      { term: 'Carence', definition: 'Apport insuffisant d’un constituant indispensable, à l’origine d’une maladie.' },
    ],
    mistakes: [
      { wrong: 'Confondre aliment et nutriment : « le pain est un nutriment ».', right: 'Le pain est un aliment ; l’amidon qu’il contient sera transformé en glucose, le nutriment absorbé (chapitre 1.2).' },
      { wrong: 'Conclure qu’il n’y a pas de glucide quand la liqueur de Fehling reste bleue.', right: 'Le saccharose et l’amidon ne sont pas réducteurs : il faut l’eau iodée pour l’amidon et une hydrolyse préalable pour le saccharose.' },
      { wrong: 'Croire qu’un produit portant une allégation (« riche en fibres ») est forcément bon pour la santé.', right: 'L’allégation ne concerne qu’une propriété ; il faut lire le tableau nutritionnel complet (sucres, graisses, sel).' },
      { wrong: 'Penser que les micronutriments sont peu importants parce qu’on en a besoin en très petite quantité.', right: 'Ils n’apportent pas d’énergie mais sont indispensables : leur carence provoque des maladies (anémie, scorbut, rachitisme).' },
      { wrong: 'Dire que les lipides sont à éviter.', right: 'Les lipides représentent 35 à 40 % de l’énergie conseillée et apportent les acides gras essentiels ; c’est leur qualité et leur excès qui comptent.' },
    ],
    quiz: [
      { question: 'Quel réactif met en évidence l’amidon ?', choices: ['La liqueur de Fehling', 'L’eau iodée', 'Le réactif du biuret', 'Le Soudan III'], answer: 1, explanation: 'L’eau iodée donne une coloration bleu-violet à noir en présence d’amidon.' },
      { question: 'Un précipité rouge brique avec la liqueur de Fehling à chaud indique la présence :', choices: ['De protéines', 'De lipides', 'De sucres réducteurs', 'D’amidon'], answer: 2, explanation: 'La liqueur de Fehling réagit avec les sucres réducteurs (glucose, fructose, maltose, lactose).' },
      { question: 'Quelle est la valeur énergétique de 10 g de lipides ?', choices: ['40 kcal', '90 kcal', '17 kcal', '37 kcal'], answer: 1, explanation: '1 g de lipides libère 9 kcal : 10 × 9 = 90 kcal (soit 370 kJ).' },
      { question: '« Riche en calcium », inscrit par le fabricant sur un yaourt, est :', choices: ['Une recommandation', 'Une allégation', 'Un repère du PNNS', 'Une obligation légale'], answer: 1, explanation: 'C’est un message facultatif du fabricant sur son produit : une allégation nutritionnelle, encadrée par la loi.' },
      { question: 'Combien d’acides aminés sont essentiels chez l’adulte ?', choices: ['2', '9', '20', '50'], answer: 1, explanation: '9 des 20 acides aminés des protéines ne sont pas synthétisés par l’organisme.' },
      { question: 'Lequel de ces constituants est un micronutriment ?', choices: ['L’amidon', 'Les protéines', 'La vitamine C', 'Les triglycérides'], answer: 2, explanation: 'La vitamine C est nécessaire en très petite quantité (environ 100 mg par jour) et n’apporte pas d’énergie.' },
      { question: 'L’acide alpha-linolénique est :', choices: ['Un acide gras essentiel de la famille des oméga 3', 'Un acide aminé essentiel', 'Une vitamine liposoluble', 'Un sucre réducteur'], answer: 0, explanation: 'C’est l’un des deux acides gras essentiels, présent dans les huiles de colza, de noix et de lin.' },
      { question: 'Selon les repères du PNNS, un adolescent devrait consommer chaque jour :', choices: ['1 produit laitier', '3 produits laitiers', '5 produits laitiers', 'Aucun produit laitier'], answer: 1, explanation: 'Le repère est de 3 produits laitiers par jour de 3 à 17 ans (2 chez l’adulte).' },
      { question: 'Une alimentation pauvre en fer peut provoquer :', choices: ['Le scorbut', 'Le goitre', 'Une anémie', 'Le rachitisme'], answer: 2, explanation: 'Le fer est indispensable à la synthèse de l’hémoglobine ; sa carence provoque une anémie.' },
    ],
    exercises: [
      {
        title: 'Calcul d’une valeur énergétique',
        statement: ['Un yaourt nature de 125 g contient pour 100 g : protéines 4,0 g ; glucides 5,0 g ; lipides 1,5 g.', 'a) Calcule la valeur énergétique de 100 g de yaourt en kcal puis en kJ. b) Calcule l’énergie apportée par le pot entier.'],
        answer: ['a) E = 4 × 5,0 + 9 × 1,5 + 4 × 4,0 = 20 + 13,5 + 16 = 49,5 kcal pour 100 g, soit 49,5 × 4,18 ≈ 207 kJ.', 'b) Pour 125 g : 49,5 × 1,25 ≈ 62 kcal.'],
      },
      {
        title: 'Besoins en protéines',
        statement: 'Une adolescente de 55 kg a besoin d’environ 2 200 kcal par jour. a) Calcule son besoin en protéines si elles représentent 15 % de l’énergie. b) Compare au repère de 0,83 g par kg et par jour. c) Explique pourquoi un adolescent a besoin de protéines en quantité suffisante.',
        answer: ['a) 0,15 × 2 200 = 330 kcal, soit 330 ÷ 4 ≈ 83 g de protéines par jour.', 'b) 0,83 × 55 ≈ 46 g : 83 g couvre largement ce besoin minimal (on reste dans la fourchette de 10 à 20 % de l’énergie).', 'c) Les protéines ont un rôle plastique : la croissance nécessite la fabrication de nouvelles cellules (muscles, os, sang), donc beaucoup d’acides aminés, dont les 9 essentiels.'],
      },
      {
        title: 'Complémentarité des protéines végétales',
        statement: 'Un plat traditionnel associe du riz et des lentilles. Sachant que les céréales sont pauvres en lysine et les légumineuses pauvres en méthionine, explique l’intérêt nutritionnel de cette association pour une personne végétarienne.',
        answer: 'La lysine et la méthionine sont des acides aminés essentiels : ils doivent être apportés par l’alimentation. Le riz apporte la méthionine qui manque aux lentilles, et les lentilles apportent la lysine qui manque au riz. Associés dans le même repas, ils fournissent tous les acides aminés essentiels, comme une protéine animale.',
      },
    ],
    selfCheck: [
      'Je sais citer les constituants des aliments et le rôle principal de chacun.',
      'Je sais choisir le bon test pour rechercher l’amidon, les sucres réducteurs, les protéines ou les lipides, et j’explique le rôle des témoins.',
      'Je sais lire une étiquette et calculer une valeur énergétique.',
      'Je sais distinguer une allégation d’une recommandation.',
      'Je sais distinguer besoins quantitatifs et qualitatifs, macronutriments et micronutriments.',
      'Je sais expliquer ce qu’est un acide aminé ou un acide gras essentiel et donner des exemples d’aliments qui en contiennent.',
      'Je sais analyser un repas avec les repères du PNNS et relier une carence ou un excès à une maladie.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Manger Bouger — repères du PNNS (Santé publique France)', url: 'https://www.mangerbouger.fr/' },
      { title: 'Table de composition nutritionnelle des aliments Ciqual — ANSES', url: 'https://ciqual.anses.fr/' },
      { title: 'Les références nutritionnelles en vitamines et minéraux — ANSES', url: 'https://www.anses.fr/fr/content/les-r%C3%A9f%C3%A9rences-nutritionnelles-en-vitamines-et-min%C3%A9raux' },
      { title: 'Acide aminé essentiel — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_amin%C3%A9_essentiel' },
      { title: 'Acide gras essentiel — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_gras_essentiel' },
    ],
  },
};

export default lesson;
