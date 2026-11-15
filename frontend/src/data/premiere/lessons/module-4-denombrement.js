import { img } from '../media';
import serieBoites from '../../../assets/courses/premiere/module-4-denombrement/serie-boites.webp';
import dilutionsSerie from '../../../assets/courses/premiere/module-4-denombrement/dilutions-serie.webp';
import surfaceMasse from '../../../assets/courses/premiere/module-4-denombrement/surface-masse.webp';
import malassezLevures from '../../../assets/courses/premiere/module-4-denombrement/malassez-levures.webp';
import comptageColonies from '../../../assets/courses/premiere/module-4-denombrement/comptage-colonies.webp';
import peseePhoto from '../../../assets/visuals/photo-metrologie-lg.webp';

const IMG = {
  serie: img(serieBoites, 'Quatre boîtes de gélose alignées, ensemencées avec des dilutions croissantes : la première couverte d’un tapis de colonies, la deuxième de plusieurs centaines de colonies serrées, la troisième d’environ quatre-vingts colonies bien séparées, la dernière de six colonies ; derrière, un portoir de tubes de diluant et une pipette graduée.', 'photo', 1536, 1024),
  dilutions: img(dilutionsSerie, 'Schéma d’une série de dilutions décimales : à partir de la suspension mère, 1 mL est transféré successivement dans des tubes contenant 9 mL de diluant, notés 10⁻¹, 10⁻², 10⁻³ et 10⁻⁴.', 'schema', 1400, 933),
  surfaceMasse: img(surfaceMasse, 'Schéma comparant l’ensemencement en surface (0,1 mL étalé au râteau sur une gélose coulée et solidifiée) et l’ensemencement dans la masse (1 mL déposé dans une boîte vide stérile puis recouvert de gélose fondue à 45 °C), avec les colonies obtenues après incubation.', 'schema', 1400, 933),
  malassez: img(malassezLevures, 'Levures observées à ×400 dans un hématimètre de Malassez : quadrillage de rectangles séparés par des doubles lignes, rectangle central divisé en 20 petits carrés ; quelques levures bourgeonnent, deux sont colorées en bleu.', 'micro', 1536, 1024),
  comptage: img(comptageColonies, 'Main gantée comptant les colonies d’une boîte de Pétri posée sur un compteur de colonies quadrillé : chaque colonie comptée est marquée d’un point au feutre.', 'photo', 1536, 1024),
  pesee: img(peseePhoto, 'Prélèvement précis à la micropipette dans un bécher posé sur une balance de précision, près d’une boîte de cônes.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'module-4-denombrement',
  duration: 'Environ 5 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.serie,
    question: 'Un yaourt doit contenir au moins 10 millions de bactéries vivantes par gramme. Comment compter des êtres vivants mille fois plus petits qu’un grain de sable ?',
    text: 'Impossible de compter des milliards de bactéries une par une. Les microbiologistes ont deux astuces : compter les cellules dans un tout petit volume connu, sous le microscope, ou diluer l’échantillon jusqu’à ce que chaque cellule donne une colonie isolée, que l’on compte à l’œil nu. Dans ce chapitre, tu apprends ces deux méthodes, les calculs qui vont avec et la façon d’interpréter un résultat face à une norme.',
  },
  objectives: [
    'Réaliser une numération directe de levures ou de micro-algues à l’hématimètre et calculer une concentration cellulaire.',
    'Préparer une suspension mère à partir d’un produit et déterminer par le calcul les dilutions décimales à réaliser.',
    'Ensemencer un volume exact en surface ou dans la masse.',
    'Choisir les boîtes dénombrables, calculer une concentration en UFC et exprimer correctement le résultat.',
    'Interpréter un résultat de dénombrement par rapport à un critère microbiologique ou à une valeur de référence règlementaire.',
    'Comparer numération directe et dénombrement après culture d’une même suspension.',
  ],
  prerequisites: [
    'Utiliser le microscope et connaître le quadrillage d’un hématimètre (chapitre « Observer la diversité du vivant à l’échelle microscopique »).',
    'Travailler en conditions d’asepsie, connaître les milieux de culture et la notion de colonie (chapitre « Cultiver des micro-organismes »).',
    'Les puissances de 10, l’écriture scientifique et les conversions : 1 mL = 1 cm³ = 1 000 mm³.',
  ],
  program: [
    'Réaliser une numération directe au microscope en cytomètre manuel (hématimètre).',
    'Préparer une suspension à partir d’un produit ou d’un échantillon.',
    'Déterminer par le calcul les dilutions à réaliser ; effectuer les dilutions décimales à ensemencer.',
    'Ensemencer un volume exact de l’échantillon préparé.',
    'Exploiter un résultat de dénombrement après culture en milieu solide.',
    'Interpréter le résultat d’un dénombrement en lien avec le contexte.',
    'Mettre en œuvre des méthodes de dénombrement en milieu solide et par numération directe.',
  ],

  course: {
    parts: [
      {
        title: 'Dénombrer : pourquoi et comment ?',
        intro: 'Dénombrer, c’est déterminer la concentration en micro-organismes d’un produit : combien de cellules dans un millilitre ou dans un gramme.',
        blocks: [
          { type: 'p', text: 'Le dénombrement est partout en biotechnologies : vérifier qu’un aliment ne contient pas trop de bactéries indésirables, qu’un yaourt contient assez de ferments vivants, qu’une eau est potable, qu’un cosmétique est bien protégé par son conservateur, ou encore suivre la croissance d’une levure dans un fermenteur.' },
          { type: 'definition', term: 'Concentration en micro-organismes', text: 'nombre de micro-organismes par unité de volume ou de masse de produit. Elle s’exprime en **cellules·mL^-1^** pour une numération directe, et en **UFC·mL^-1^** ou **UFC·g^-1^** pour un dénombrement après culture.' },
          { type: 'p', text: 'En classe de Première, tu mets en œuvre **deux méthodes** : la **numération directe** au microscope dans une cellule de comptage, et le **dénombrement après culture** en milieu solide.' },
          {
            type: 'compare',
            title: 'Deux méthodes complémentaires',
            columns: [
              { title: 'Numération directe', subtitle: 'à l’hématimètre, au microscope', items: ['On **compte les cellules** dans un volume connu, très petit.', 'Compte toutes les cellules, **vivantes et mortes** (sauf si on utilise un colorant de viabilité).', 'Résultat **immédiat** (quelques minutes).', 'Adaptée aux grosses cellules : **levures, micro-algues**.', 'Peu sensible : il faut au moins environ 10^5^ à 10^6^ cellules par mL.'] },
              { title: 'Dénombrement après culture', subtitle: 'en milieu solide', items: ['On **compte les colonies** obtenues à partir d’un volume connu de produit dilué.', 'Ne compte que les **cellules revivifiables**, capables de se multiplier dans les conditions de culture.', 'Résultat après **incubation** (1 à 5 jours).', 'Adapté aux bactéries, levures et moisissures, même peu nombreuses.', 'Peut être rendu sélectif (on ne compte qu’un groupe de micro-organismes).'] },
            ],
          },
          { type: 'definition', term: 'Cellules revivifiables', text: 'cellules capables de se multiplier et de former une colonie dans les conditions de culture utilisées (milieu, température, durée). Les cellules mortes, ou trop abîmées pour se diviser, ne donnent pas de colonie.' },
          {
            type: 'retenir',
            items: [
              'Dénombrer = déterminer une concentration en micro-organismes (par mL ou par g).',
              'Numération directe : comptage au microscope de toutes les cellules dans un volume connu ; résultat immédiat.',
              'Dénombrement après culture : comptage des colonies issues des cellules revivifiables ; résultat après incubation.',
            ],
          },
        ],
      },

      {
        title: 'Numération directe à l’hématimètre',
        intro: 'L’hématimètre (ou cytomètre manuel) a été inventé pour compter les cellules du sang. Au laboratoire de biotechnologies, il sert à compter des levures et des micro-algues.',
        blocks: [
          { type: 'definition', term: 'Hématimètre (cellule de comptage)', text: 'lame épaisse en verre portant un quadrillage gravé de dimensions connues. Recouverte d’une lamelle, elle délimite au-dessus du quadrillage un volume de liquide **connu avec précision**.' },
          { type: 'p', text: 'La **cellule de Malassez**, la plus utilisée au lycée, comporte un quadrillage de **100 rectangles** (10 rangées de 10). Chaque rectangle mesure **0,25 mm × 0,20 mm** ; la profondeur sous la lamelle est de **0,20 mm**. 25 de ces rectangles sont subdivisés en 20 petits carrés pour faciliter le comptage.' },
          {
            type: 'formula',
            title: 'Volume d’un rectangle de la cellule de Malassez',
            expression: 'V~rectangle~ = 0,25 × 0,20 × 0,20 = 0,01 mm³ = 1 × 10^-5^ mL',
            legend: [
              { symbol: '0,25 mm × 0,20 mm', meaning: 'surface d’un rectangle' },
              { symbol: '0,20 mm', meaning: 'profondeur de la chambre sous la lamelle' },
            ],
          },
          { type: 'note', title: 'Conversion à connaître', text: '1 mL = 1 cm³ = 1 000 mm³, donc 0,01 mm³ = 0,01 ÷ 1 000 mL = 10^-5^ mL. Le quadrillage entier (100 rectangles) correspond à 1 mm³.' },
          { type: 'figure', image: IMG.malassez, caption: 'Levures dans une cellule de Malassez (×400). Le rectangle central est divisé en 20 petits carrés ; les doubles lignes séparent les rectangles. Les deux cellules bleues sont des levures mortes, colorées par le bleu de méthylène.', size: 'wide' },
          {
            type: 'steps',
            title: 'Réaliser une numération à l’hématimètre',
            items: [
              { title: 'Préparer la cellule', text: 'Nettoyer la cellule et la lamelle. Humidifier légèrement les plateaux latéraux, puis faire glisser la lamelle en appuyant jusqu’à voir apparaître des **irisations** (reflets colorés) : la lamelle adhère et la profondeur de 0,20 mm est garantie.' },
              { title: 'Homogénéiser et diluer si besoin', text: 'Agiter la suspension juste avant le prélèvement : les cellules sédimentent vite. Si la suspension est trop concentrée, la diluer de façon connue.' },
              { title: 'Remplir par capillarité', text: 'Déposer une goutte au bord de la lamelle avec une pipette Pasteur : le liquide est aspiré sous la lamelle. Il ne doit ni déborder dans les rigoles, ni contenir de bulles.' },
              { title: 'Laisser sédimenter', text: 'Attendre quelques minutes que les cellules se déposent sur le quadrillage.' },
              { title: 'Repérer puis compter', text: 'Repérer le quadrillage à l’objectif ×10, puis compter à l’objectif ×40 (×400) les cellules de plusieurs rectangles répartis sur le quadrillage (par exemple 10 rectangles).' },
              { title: 'Nettoyer et désinfecter', text: 'Rincer et désinfecter la cellule et la lamelle après usage.' },
            ],
          },
          {
            type: 'list',
            title: 'Les règles de comptage',
            items: [
              'Une cellule à cheval sur une ligne n’est comptée que si elle touche **deux côtés convenus** du rectangle (par exemple le côté supérieur et le côté gauche) ; on ignore celles qui touchent les deux autres côtés. Ainsi, aucune cellule n’est comptée deux fois.',
              'Pour une levure qui bourgeonne, la convention la plus fréquente est de compter le bourgeon comme une cellule s’il atteint au moins la moitié de la taille de la cellule mère.',
              'Pour un résultat fiable, on compte au total **au moins une centaine de cellules** ; s’il y a plus de quelques dizaines de cellules par rectangle, on dilue la suspension.',
            ],
          },
          {
            type: 'formula',
            title: 'Concentration cellulaire à partir d’un comptage',
            expression: 'C = n × F ÷ (N × V~rectangle~)',
            legend: [
              { symbol: 'C', meaning: 'concentration de la suspension de départ, en cellules·mL^-1^' },
              { symbol: 'n', meaning: 'nombre total de cellules comptées' },
              { symbol: 'N', meaning: 'nombre de rectangles comptés' },
              { symbol: 'V~rectangle~', meaning: 'volume d’un rectangle : 10^-5^ mL' },
              { symbol: 'F', meaning: 'facteur de dilution de la suspension observée (F = 1 si elle n’est pas diluée)' },
            ],
          },
          { type: 'example', title: 'calcul', text: ['On compte 148 levures dans 10 rectangles, dans une suspension diluée au 1/10 (F = 10).', 'C = 148 × 10 ÷ (10 × 10^-5^) = 1 480 ÷ 10^-4^ = 1,48 × 10^7^, soit **C ≈ 1,5 × 10^7^ cellules·mL^-1^**.'] },
          { type: 'definition', term: 'Test de viabilité au bleu de méthylène', text: 'les levures vivantes réduisent le bleu de méthylène en une forme incolore : elles restent **incolores** ; les levures mortes restent **bleues**. On peut ainsi calculer le pourcentage de cellules vivantes.' },
          { type: 'warning', text: 'Si l’on mélange la suspension avec un volume égal de bleu de méthylène, on la dilue deux fois : il faut multiplier le facteur de dilution par 2.' },
          { type: 'note', title: 'D’autres cellules de comptage', text: 'Les cellules de Thoma ou de Neubauer ont des quadrillages et des volumes différents. Avant tout calcul, il faut lire la notice de la cellule utilisée.' },
          {
            type: 'retenir',
            items: [
              'Malassez : 100 rectangles de 0,25 mm × 0,20 mm, profondeur 0,20 mm ; un rectangle = 0,01 mm³ = 10^-5^ mL.',
              'On compte plusieurs rectangles en appliquant la règle des deux côtés, puis C = n × F ÷ (N × V~rectangle~).',
              'Le bleu de méthylène colore les cellules mortes : on peut calculer le pourcentage de cellules vivantes.',
            ],
          },
        ],
      },

      {
        title: 'Préparer la suspension mère et les dilutions décimales',
        intro: 'Un produit contient souvent des millions de micro-organismes par gramme. Pour obtenir des colonies que l’on peut compter, il faut d’abord le diluer, et le diluer de façon parfaitement connue.',
        blocks: [
          {
            type: 'compare',
            title: 'Échantillon ou inoculum ?',
            columns: [
              { title: 'Échantillon', items: ['Portion **représentative** du produit à analyser (lait, yaourt, terre, eau…).', 'On en prélève une quantité exacte : la **prise d’essai** (par exemple 10 g).', 'C’est sur lui que porte le résultat final (UFC par g ou par mL de produit).'] },
              { title: 'Inoculum', items: ['Volume **exact** de suspension (diluée ou non) déposé sur ou dans le milieu de culture.', 'Par exemple 0,1 mL en surface ou 1 mL dans la masse.', 'Son volume intervient dans le calcul du résultat.'] },
            ],
          },
          { type: 'definition', term: 'Suspension mère', text: 'première suspension préparée à partir de l’échantillon. Pour un produit solide, on pèse une prise d’essai (par exemple **10 g**) que l’on mélange à un volume de diluant stérile égal à 9 fois sa masse (**90 mL**) : on considère que la suspension mère correspond à la dilution **10^-1^** du produit. Un produit liquide peut être dilué directement.' },
          { type: 'figure', image: IMG.pesee, caption: 'La préparation quantitative d’une suspension commence par une pesée ou une mesure de volume précise.', size: 'normal' },
          { type: 'definition', term: 'Dilution (ou taux de dilution)', text: 'rapport entre le volume (ou la masse) de produit prélevé et le volume total de la solution obtenue. Exemple : 1 mL de suspension + 9 mL de diluant donne une dilution d = 1 ÷ 10 = **10^-1^**. Le **facteur de dilution** F est l’inverse : F = 10.' },
          {
            type: 'formula',
            title: 'Dilution et facteur de dilution',
            expression: 'd = V~prélevé~ ÷ V~total~   et   F = 1 ÷ d',
            legend: [
              { symbol: 'V~prélevé~', meaning: 'volume de suspension prélevé' },
              { symbol: 'V~total~', meaning: 'volume total après ajout du diluant' },
            ],
          },
          { type: 'definition', term: 'Dilutions décimales en série', text: 'série de dilutions successives au dixième : chaque tube contient 9 mL de diluant et reçoit 1 mL du tube précédent. Chaque tube est 10 fois plus dilué que le précédent : 10^-1^, 10^-2^, 10^-3^… Les dilutions se **multiplient** : deux dilutions au 1/10 successives donnent 10^-1^ × 10^-1^ = 10^-2^.' },
          { type: 'figure', image: IMG.dilutions, caption: 'Dilutions décimales en série : 1 mL est transféré à chaque étape dans 9 mL de diluant, avec une pipette stérile neuve.', size: 'wide' },
          {
            type: 'list',
            title: 'Les gestes qui font la qualité des dilutions',
            items: [
              'Travailler en conditions d’asepsie, avec un diluant stérile (eau physiologique, tryptone-sel…).',
              '**Homogénéiser** soigneusement chaque tube avant d’en prélever (agitateur de type vortex).',
              'Utiliser une **pipette (ou un cône) stérile neuve** à chaque transfert : des cellules restées dans la pipette fausseraient les dilutions suivantes.',
              'Identifier chaque tube avec sa dilution avant de commencer.',
            ],
          },
          { type: 'p', text: 'Pour **déterminer par le calcul les dilutions à ensemencer**, on part de la concentration attendue (ordre de grandeur connu par l’expérience ou une fiche technique) et on cherche les dilutions qui donneront un nombre de colonies dénombrable, de l’ordre de quelques dizaines à 300.' },
          {
            type: 'formula',
            title: 'Nombre de colonies attendu sur une boîte',
            expression: 'nombre attendu = C~attendue~ × d × V',
            legend: [
              { symbol: 'C~attendue~', meaning: 'concentration estimée du produit (UFC·g^-1^ ou UFC·mL^-1^)' },
              { symbol: 'd', meaning: 'dilution ensemencée, par rapport au produit' },
              { symbol: 'V', meaning: 'volume ensemencé (mL)' },
            ],
          },
          { type: 'example', title: 'choisir les dilutions', text: ['Un yaourt contient environ 10^8^ UFC·g^-1^ et on ensemence 1 mL dans la masse.', 'Dilution 10^-6^ : 10^8^ × 10^-6^ × 1 = 100 colonies attendues : c’est dénombrable. On ensemence aussi les dilutions voisines 10^-5^ (1 000 colonies attendues) et 10^-7^ (10 colonies attendues) pour encadrer le résultat si l’estimation est imprécise.'] },
          {
            type: 'retenir',
            items: [
              'Suspension mère d’un solide : 10 g + 90 mL de diluant = dilution 10^-1^.',
              'Dilution d = V~prélevé~ ÷ V~total~ ; facteur F = 1 ÷ d ; 1 mL + 9 mL = 10^-1^.',
              'En série, les dilutions se multiplient ; on change de pipette et on homogénéise à chaque étape.',
              'On choisit les dilutions à ensemencer avec : nombre attendu = C~attendue~ × d × V.',
            ],
          },
        ],
      },

      {
        title: 'Ensemencer un volume exact : en surface ou dans la masse',
        intro: 'Le résultat d’un dénombrement dépend directement du volume ensemencé : il doit être prélevé avec précision.',
        blocks: [
          { type: 'p', text: 'Le volume est prélevé avec une **micropipette** réglée ou une **pipette graduée** stérile, après avoir homogénéisé le tube. Si l’on utilise la même pipette pour ensemencer plusieurs dilutions, on commence par la **plus diluée** (la moins concentrée) : les rares cellules restées dans la pipette sont alors négligeables devant celles de la suspension suivante, plus concentrée.' },
          { type: 'figure', image: IMG.surfaceMasse, caption: 'Les deux techniques d’ensemencement pour un dénombrement : en surface (0,1 mL étalé au râteau) et dans la masse (1 mL recouvert de gélose fondue).', size: 'wide' },
          {
            type: 'compare',
            title: 'Comparer les deux techniques',
            columns: [
              { title: 'Ensemencement en surface', items: ['On dépose **0,1 mL** sur une gélose coulée à l’avance et bien sèche.', 'On l’étale avec un **râteau** stérile en tournant la boîte, jusqu’à absorption.', 'Toutes les colonies sont en surface : on peut bien les décrire.', 'Convient aux micro-organismes aérobies stricts.', 'Petit volume : moins sensible.'] },
              { title: 'Ensemencement dans la masse', items: ['On dépose **1 mL** au fond d’une **boîte vide stérile**.', 'On coule environ 15 mL de gélose fondue maintenue à **45 °C environ**, puis on mélange doucement (mouvements en « 8 »).', 'Les colonies se forment dans la gélose (petites lentilles) et en surface.', 'Volume 10 fois plus grand : méthode plus sensible.', 'La gélose trop chaude (au-delà d’environ 48 °C) tuerait des cellules.'] },
            ],
          },
          { type: 'p', text: 'On ensemence en général **deux boîtes par dilution** pour améliorer la fiabilité, et une boîte **témoin** avec le diluant seul pour vérifier sa stérilité. Les conditions d’incubation dépendent des micro-organismes recherchés et sont fixées par la méthode.' },
          {
            type: 'table',
            caption: 'Exemples de conditions de dénombrement',
            head: ['Micro-organismes dénombrés', 'Milieu', 'Incubation'],
            rows: [
              ['Flore aérobie mésophile totale (aliments)', 'Gélose pour dénombrement (PCA), dans la masse', '30 °C, 72 h'],
              ['Levures et moisissures', 'Gélose glucosée au chloramphénicol, en surface', '25 °C, 5 jours'],
              ['Bactéries lactiques (yaourt)', 'Milieu adapté aux bactéries lactiques (MRS, M17)', '30 à 42 °C selon les bactéries, 48 à 72 h'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'En surface : 0,1 mL étalé au râteau sur gélose solidifiée.',
              'Dans la masse : 1 mL dans une boîte vide + gélose fondue à 45 °C environ, mélangée puis solidifiée.',
              'Volume exact, matériel stérile, deux boîtes par dilution, un témoin du diluant.',
            ],
          },
        ],
      },

      {
        title: 'Compter les colonies et calculer la concentration',
        intro: 'Après incubation, chaque colonie représente au départ une cellule… ou un petit groupe de cellules. C’est pourquoi on parle d’UFC.',
        blocks: [
          { type: 'definition', term: 'Unité formant colonie (UFC)', text: 'cellule isolée **ou groupe de cellules** (amas, chaînette, levure et son bourgeon) qui a donné naissance à **une** colonie. Le résultat d’un dénombrement après culture s’exprime en UFC, et non en cellules.' },
          { type: 'warning', title: 'Colonie ou levure ?', text: 'Une colonie n’est pas une levure : une seule colonie de levures contient des millions de cellules. Et une colonie peut provenir de plusieurs cellules restées accolées : le nombre d’UFC est donc souvent **inférieur** au nombre de cellules.' },
          { type: 'p', text: 'Toutes les boîtes ne sont pas utilisables. Une boîte trop chargée donne des colonies qui se touchent, se gênent et sont mal comptées ; une boîte trop pauvre donne un résultat peu précis, car le hasard du prélèvement pèse beaucoup sur un petit nombre.' },
          { type: 'definition', term: 'Boîte dénombrable', text: 'boîte retenue pour le calcul. Selon la norme NF EN ISO 7218, on retient les boîtes contenant **au plus 300 colonies**, et au moins une des boîtes retenues doit contenir **au moins 10 colonies**. Certaines fiches techniques retiennent l’intervalle **30 à 300 colonies** : suis toujours la fiche technique de ton laboratoire.' },
          { type: 'figure', image: IMG.serie, caption: 'Quatre dilutions successives d’un même produit. De gauche à droite : indénombrable (tapis), trop chargée (plusieurs centaines), dénombrable (environ 80 colonies), trop pauvre pour un calcul précis.', size: 'wide' },
          { type: 'p', text: 'Pour compter, on retourne la boîte et on marque chaque colonie d’un point au feutre sur le fond, éventuellement sur un **compteur de colonies** (fond éclairé quadrillé, loupe).' },
          { type: 'figure', image: IMG.comptage, caption: 'Comptage des colonies : chaque colonie comptée est marquée d’un point au feutre, ce qui évite les oublis et les doubles comptages.', size: 'normal' },
          {
            type: 'formula',
            title: 'Calcul à partir d’une seule boîte',
            expression: 'N = n ÷ (V × d)   (ou N = n × F ÷ V)',
            legend: [
              { symbol: 'N', meaning: 'concentration du produit, en UFC·mL^-1^ ou UFC·g^-1^' },
              { symbol: 'n', meaning: 'nombre de colonies comptées sur la boîte' },
              { symbol: 'V', meaning: 'volume ensemencé, en mL' },
              { symbol: 'd', meaning: 'dilution ensemencée, par rapport au produit (F = 1 ÷ d)' },
            ],
          },
          {
            type: 'formula',
            title: 'Méthode normalisée : deux dilutions successives (NF EN ISO 7218)',
            expression: 'N = ΣC ÷ (V × 1,1 × d)',
            legend: [
              { symbol: 'ΣC', meaning: 'somme des colonies des boîtes retenues, issues de deux dilutions successives' },
              { symbol: 'V', meaning: 'volume ensemencé par boîte, en mL' },
              { symbol: '1,1', meaning: 'une boîte à la première dilution (1) + une boîte dix fois plus diluée (0,1)' },
              { symbol: 'd', meaning: 'dilution de la **première** boîte retenue (la moins diluée)' },
            ],
          },
          { type: 'note', title: 'Avec deux boîtes par dilution', text: 'Le coefficient 1,1 devient (n~1~ + 0,1 n~2~), où n~1~ et n~2~ sont les nombres de boîtes retenues à la première et à la seconde dilution. Avec deux boîtes à chaque dilution : 2 + 0,2 = 2,2.' },
          {
            type: 'list',
            title: 'Exprimer le résultat',
            ordered: true,
            items: [
              'Arrondir à **deux chiffres significatifs**.',
              'Écrire le résultat en **écriture scientifique** : un nombre entre 1,0 et 9,9 multiplié par une puissance de 10.',
              'Donner l’**unité** : UFC·mL^-1^ ou UFC·g^-1^ **de produit**.',
              'Vérifier la **cohérence** : d’une dilution à la suivante, le nombre de colonies doit être environ divisé par 10.',
            ],
          },
          { type: 'example', title: 'dénombrement de la flore lactique d’un yaourt', text: ['Suspension mère : 10 g de yaourt + 90 mL de diluant (10^-1^), puis dilutions décimales ; 1 mL ensemencé dans la masse.', 'Résultats : dilution 10^-5^ : plus de 300 colonies ; 10^-6^ : 168 colonies ; 10^-7^ : 15 colonies.', 'On retient 10^-6^ et 10^-7^ (au plus 300, et une boîte d’au moins 10 colonies). Cohérence : 168 ÷ 15 ≈ 11, proche de 10.', 'N = (168 + 15) ÷ (1 × 1,1 × 10^-6^) = 183 ÷ (1,1 × 10^-6^) ≈ 166 000 000, soit **N = 1,7 × 10^8^ UFC·g^-1^ de yaourt**.'] },
          {
            type: 'retenir',
            items: [
              'Une colonie provient d’une UFC : une cellule ou un petit groupe de cellules.',
              'Boîtes retenues : au plus 300 colonies, dont au moins une avec 10 colonies ou plus (NF EN ISO 7218), sauf autre consigne de la fiche technique.',
              'N = n ÷ (V × d) pour une boîte ; N = ΣC ÷ (V × 1,1 × d) pour deux dilutions successives.',
              'Résultat : deux chiffres significatifs, écriture scientifique, unité par mL ou par g de produit.',
            ],
          },
        ],
      },

      {
        title: 'Interpréter un résultat dans son contexte',
        intro: 'Un résultat de dénombrement n’a de sens que comparé à une référence : une norme, une valeur règlementaire, une autre méthode.',
        blocks: [
          { type: 'definition', term: 'Critère microbiologique', text: 'critère qui fixe, pour un produit et un micro-organisme donnés, la quantité acceptable de ce micro-organisme, la méthode d’analyse de référence et le nombre d’échantillons à analyser. Dans l’Union européenne, les critères applicables aux denrées alimentaires sont fixés par le **règlement (CE) n° 2073/2005**.' },
          { type: 'p', text: 'Beaucoup de critères utilisent deux valeurs limites, notées **m** et **M** : un résultat inférieur ou égal à **m** est satisfaisant ; un résultat compris entre **m** et **M** est acceptable dans une certaine limite (un petit nombre d’échantillons seulement peut s’y trouver) ; un résultat supérieur à **M** est non satisfaisant.' },
          {
            type: 'table',
            caption: 'Exemples de valeurs de référence règlementaires',
            head: ['Produit', 'Micro-organismes', 'Valeur de référence', 'Texte'],
            rows: [
              ['Yaourt', 'Bactéries lactiques spécifiques vivantes', 'Au moins 10^7^ bactéries par gramme (valeur **minimale**)', 'Décret n° 88-1203 du 30 décembre 1988'],
              ['Viande hachée', '_Escherichia coli_ (hygiène du procédé)', '**m** = 50 UFC·g^-1^ ; **M** = 500 UFC·g^-1^ (5 échantillons analysés)', 'Règlement (CE) n° 2073/2005'],
            ],
          },
          { type: 'definition', term: 'Méthode normalisée', text: 'méthode décrite par une norme (ISO, AFNOR) qui fixe le milieu, la technique d’ensemencement, la température et la durée d’incubation, les boîtes à retenir et le calcul. Tous les laboratoires obtiennent ainsi des résultats **comparables** ; c’est indispensable pour vérifier un critère règlementaire.' },
          { type: 'p', text: 'Comparer les deux méthodes appliquées à une **même suspension** est instructif : la numération directe donne en général une concentration **plus élevée** que le dénombrement après culture.' },
          {
            type: 'list',
            title: 'Pourquoi le dénombrement après culture donne-t-il souvent moins ?',
            items: [
              'La numération directe compte aussi les cellules **mortes** (sans colorant de viabilité).',
              'Certaines cellules vivantes ne sont **pas revivifiables** dans les conditions de culture choisies (milieu, température).',
              'Des cellules accolées (amas, bourgeons) ne donnent qu’**une seule colonie** : une UFC.',
            ],
          },
          {
            type: 'table',
            caption: 'Bilan : choisir sa méthode',
            head: ['Critère', 'Numération directe', 'Dénombrement après culture'],
            rows: [
              ['Ce qui est compté', 'Toutes les cellules (vivantes et mortes)', 'Les UFC (cellules revivifiables)'],
              ['Durée', 'Quelques minutes', '1 à 5 jours'],
              ['Matériel', 'Microscope, hématimètre', 'Milieux stériles, diluant, pipettes, étuve'],
              ['Sensibilité', 'Faible (au moins 10^5^ à 10^6^ cellules par mL)', 'Élevée (jusqu’à quelques UFC par mL)'],
              ['Usage typique', 'Suivi rapide d’une culture de levures ou de micro-algues', 'Contrôle qualité des aliments, de l’eau, des cosmétiques'],
            ],
          },
          { type: 'note', title: 'Incertitude', text: 'Un dénombrement est une mesure : il comporte une incertitude, d’autant plus grande que le nombre de colonies comptées est faible. C’est pourquoi on exige un nombre minimal de colonies et on ensemence plusieurs boîtes.' },
          {
            type: 'retenir',
            items: [
              'On interprète un résultat en le comparant à un critère microbiologique ou à une valeur de référence règlementaire (valeur maximale ou minimale).',
              'Les méthodes normalisées rendent les résultats comparables d’un laboratoire à l’autre.',
              'La numération directe donne souvent plus que la culture : cellules mortes, cellules non revivifiables, amas comptés comme une UFC.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des résultats de TP présentés comme dans un compte rendu. Réponds d’abord seul(e) : tu peux écrire ta réponse directement sous la question. Pose chaque calcul avec ses unités, utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Compter des levures à l’hématimètre',
        duration: '30 min',
        skills: ['Observer', 'Calculer', 'Exprimer un résultat'],
        context: 'Une boulangerie artisanale veut vérifier la qualité de sa levure fraîche. Au laboratoire, on prépare une suspension S de levure, que l’on dilue au 1/10. On mélange ensuite cette dilution volume à volume avec du bleu de méthylène, puis on remplit une cellule de Malassez.',
        documents: [
          { label: 'Document 1', title: 'Observation à ×400', image: IMG.malassez, caption: 'Levures dans la cellule de Malassez après ajout de bleu de méthylène.' },
          {
            label: 'Document 2',
            title: 'Comptage dans 10 rectangles',
            blocks: [
              {
                type: 'table',
                head: ['Rectangle', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                rows: [
                  ['Levures incolores', '12', '15', '9', '14', '11', '13', '10', '16', '12', '13'],
                  ['Levures bleues', '1', '0', '2', '1', '0', '1', '1', '0', '2', '1'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Sur le document 1, comment reconnais-tu les levures vivantes et les levures mortes ? Explique le principe du test.', answer: 'Les levures vivantes sont incolores : elles réduisent le bleu de méthylène en une forme incolore. Les levures mortes ne le réduisent plus et restent bleues.' },
          { text: 'Certaines levures sont posées sur les lignes du quadrillage. Comment les compte-t-on ?', answer: 'On ne compte que celles qui touchent deux côtés convenus du rectangle (par exemple le haut et la gauche) et on ignore celles qui touchent les deux autres côtés, pour ne compter aucune cellule deux fois.' },
          { text: 'Calcule le facteur de dilution total de la suspension observée par rapport à la suspension S.', hint: 'Deux dilutions successives se multiplient : une au 1/10, puis un mélange volume à volume.', answer: 'Dilution au 1/10 (F = 10), puis mélange volume à volume avec le colorant (F = 2) : F total = 10 × 2 = 20.' },
          { text: 'Calcule la concentration en levures vivantes de la suspension S, puis la concentration totale (vivantes et mortes).', hint: 'C = n × F ÷ (N × V rectangle), avec V rectangle = 10^-5^ mL.', answer: ['Levures vivantes : n = 12 + 15 + 9 + 14 + 11 + 13 + 10 + 16 + 12 + 13 = 125.', 'C~vivantes~ = 125 × 20 ÷ (10 × 10^-5^) = 2 500 ÷ 10^-4^ = **2,5 × 10^7^ levures vivantes·mL^-1^**.', 'Levures mortes : 9 ; total = 134. C~totale~ = 134 × 20 ÷ 10^-4^ = 2,68 × 10^7^, soit **2,7 × 10^7^ cellules·mL^-1^**.'] },
          { text: 'Calcule le pourcentage de levures vivantes. La levure est-elle de bonne qualité ?', answer: 'Viabilité = 125 ÷ 134 × 100 ≈ 93 %. La très grande majorité des cellules sont vivantes : la levure est de bonne qualité.' },
          { text: 'Pourquoi compte-t-on 10 rectangles plutôt qu’un seul ?', answer: 'Les cellules ne sont pas réparties de façon parfaitement régulière. Compter plusieurs rectangles répartis sur le quadrillage, et au total plus d’une centaine de cellules, donne un résultat plus représentatif et plus précis.' },
        ],
      },
      {
        title: 'Préparer une suspension et calculer les dilutions',
        duration: '25 min',
        skills: ['Calculer', 'Organiser une procédure'],
        context: 'On veut dénombrer les levures revivifiables d’un sachet de levure sèche de boulanger. D’après la fiche technique, sa concentration est de l’ordre de 2 × 10^10^ UFC·g^-1^. On ensemence 0,1 mL en surface et on souhaite obtenir entre 30 et 300 colonies par boîte.',
        documents: [
          { label: 'Document 3', title: 'Préparation quantitative de la suspension', image: IMG.pesee, caption: 'Pesée de précision au laboratoire.', size: 'normal' },
          { label: 'Document 4', title: 'Protocole de la suspension mère', text: ['Peser 1,0 g de levure sèche dans un flacon stérile taré.', 'Ajouter 99 mL d’eau physiologique stérile et laisser réhydrater 15 min en agitant régulièrement.', 'Réaliser ensuite des dilutions décimales en série (1 mL dans 9 mL de diluant stérile).'] },
        ],
        questions: [
          { text: 'À quelle dilution du produit correspond la suspension mère ? Calcule sa concentration attendue en UFC·mL^-1^.', hint: '1 g de levure dans un volume total de 100 mL.', answer: 'La suspension mère contient 1 g de produit dans 100 mL : elle correspond à la dilution 10^-2^ (en g de produit par mL). Concentration attendue : 2 × 10^10^ × 10^-2^ = 2 × 10^8^ UFC·mL^-1^.' },
          { text: 'Calcule le nombre de colonies attendu sur une boîte ensemencée avec 0,1 mL des dilutions 10^-6^, 10^-7^ et 10^-8^ du produit.', hint: 'Nombre attendu = C attendue × d × V.', answer: ['10^-6^ : 2 × 10^10^ × 10^-6^ × 0,1 = 2 000 colonies (indénombrable).', '10^-7^ : 2 × 10^10^ × 10^-7^ × 0,1 = 200 colonies (dénombrable).', '10^-8^ : 2 × 10^10^ × 10^-8^ × 0,1 = 20 colonies.'] },
          { text: 'Quelles dilutions faut-il ensemencer ? Combien de dilutions décimales faut-il réaliser à partir de la suspension mère ?', answer: 'On ensemence 10^-7^ et 10^-8^ (au moins deux dilutions successives pour encadrer le résultat ; on peut ajouter 10^-6^ par sécurité). Pour passer de 10^-2^ (suspension mère) à 10^-8^, il faut 6 dilutions décimales successives.' },
          { text: 'Pourquoi faut-il changer de pipette à chaque transfert et homogénéiser chaque tube ?', answer: 'Une pipette réutilisée garde des cellules de la suspension plus concentrée : elle en apporterait trop dans le tube suivant et fausserait toutes les dilutions (surestimation). L’homogénéisation est nécessaire car les cellules sédimentent : sans elle, le prélèvement ne serait pas représentatif.' },
        ],
      },
      {
        title: 'Exploiter un dénombrement en milieu solide',
        duration: '30 min',
        skills: ['Sélectionner des résultats', 'Calculer', 'Interpréter'],
        context: 'Un laboratoire contrôle un yaourt nature vendu avec la mention « yaourt » : il doit contenir au moins 10^7^ bactéries lactiques spécifiques vivantes par gramme. On a préparé une suspension mère (10 g de yaourt + 90 mL de diluant), réalisé des dilutions décimales, puis ensemencé 1 mL de chaque dilution dans la masse d’un milieu adapté aux bactéries lactiques (une boîte par dilution).',
        documents: [
          {
            label: 'Document 5',
            title: 'Résultats après incubation',
            blocks: [
              {
                type: 'table',
                head: ['Dilution du produit', '10^-5^', '10^-6^', '10^-7^', '10^-8^'],
                rows: [
                  ['Nombre de colonies', 'Plus de 300 (indénombrable)', '212', '24', '2'],
                ],
              },
            ],
          },
          { label: 'Document 6', title: 'Règle de sélection des boîtes (NF EN ISO 7218)', text: ['On retient les boîtes de deux dilutions successives contenant au plus 300 colonies, dont au moins une contient au moins 10 colonies.', 'N = ΣC ÷ (V × 1,1 × d), avec d : dilution de la première boîte retenue (la moins diluée).'] },
        ],
        questions: [
          { text: 'Quelles boîtes retiens-tu pour le calcul ? Justifie le rejet des autres.', answer: 'On retient 10^-6^ (212 colonies) et 10^-7^ (24 colonies) : deux dilutions successives, au plus 300 colonies, et au moins une boîte avec 10 colonies ou plus. La boîte 10^-5^ est indénombrable (plus de 300) ; la boîte 10^-8^ (2 colonies) est trop pauvre et ne fait pas partie des deux dilutions successives retenues.' },
          { text: 'Vérifie la cohérence des deux boîtes retenues.', answer: '212 ÷ 24 ≈ 8,8 : le nombre de colonies est divisé par environ 10 quand la dilution est 10 fois plus forte. Les résultats sont cohérents.' },
          { text: 'Calcule la concentration en bactéries lactiques du yaourt et exprime correctement le résultat.', hint: 'Attention : _d_ correspond à la boîte retenue la moins diluée, et V = 1 mL.', answer: 'N = (212 + 24) ÷ (1 × 1,1 × 10^-6^) = 236 ÷ (1,1 × 10^-6^) ≈ 214 545 455, soit **N = 2,1 × 10^8^ UFC·g^-1^ de yaourt**.' },
          { text: 'Le produit respecte-t-il la règlementation ? Rédige une conclusion.', answer: 'Oui : 2,1 × 10^8^ UFC·g^-1^ est supérieur à 10^7^ bactéries par gramme, valeur minimale exigée pour la dénomination « yaourt ». Le produit contient bien suffisamment de bactéries lactiques vivantes.' },
          { text: 'Les streptocoques du yaourt forment des chaînettes. Quelle conséquence cela a-t-il sur le résultat ?', answer: 'Une chaînette de plusieurs cellules ne donne qu’une seule colonie : elle compte pour une seule UFC. Le résultat en UFC sous-estime donc le nombre réel de cellules ; la conclusion de conformité reste valable puisque le nombre réel est encore plus élevé.' },
        ],
      },
      {
        title: 'Comparer numération directe et dénombrement après culture',
        duration: '20 min',
        skills: ['Comparer', 'Argumenter'],
        context: 'La suspension S de levure fraîche de l’activité 1 a aussi été dénombrée après culture : dilutions décimales de S, puis 0,1 mL ensemencé en surface sur une gélose pour levures, incubée 5 jours à 25 °C.',
        documents: [
          {
            label: 'Document 7',
            title: 'Résultats des deux méthodes pour la suspension S',
            blocks: [
              {
                type: 'table',
                head: ['Méthode', 'Résultat'],
                rows: [
                  ['Numération directe, toutes cellules (activité 1)', '2,7 × 10^7^ cellules·mL^-1^'],
                  ['Numération directe, cellules vivantes (activité 1)', '2,5 × 10^7^ cellules·mL^-1^'],
                  ['Culture : dilution 10^-4^ de S', '198 colonies'],
                  ['Culture : dilution 10^-5^ de S', '18 colonies'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Calcule la concentration de la suspension S, en UFC·mL^-1^, à partir des résultats de culture.', answer: 'N = (198 + 18) ÷ (0,1 × 1,1 × 10^-4^) = 216 ÷ (1,1 × 10^-5^) ≈ 19 636 364, soit **N = 2,0 × 10^7^ UFC·mL^-1^**.' },
          { text: 'Compare les trois résultats et propose trois explications aux différences observées.', answer: 'Toutes cellules (2,7 × 10^7^) > cellules vivantes (2,5 × 10^7^) > UFC (2,0 × 10^7^). Explications : la numération totale compte les cellules mortes ; certaines cellules vivantes ne sont pas revivifiables dans les conditions de culture ; des levures accolées ou bourgeonnantes ne donnent qu’une colonie (une UFC). Il faut aussi tenir compte de l’incertitude de chaque méthode.' },
          { text: 'Compare les contraintes matérielles et la durée des deux méthodes. Laquelle choisirais-tu pour suivre heure par heure une culture de levures dans un fermenteur ? Et pour contrôler une eau de boisson ?', answer: 'La numération directe ne demande qu’un microscope et un hématimètre, et donne un résultat en quelques minutes : elle convient au suivi d’une culture de levures, très concentrée. Le dénombrement après culture demande des milieux stériles, des dilutions, une étuve et plusieurs jours, mais il est très sensible et ne compte que les cellules capables de se multiplier : il convient au contrôle d’une eau, où les micro-organismes recherchés sont rares.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Dénombrer, c’est déterminer une concentration en micro-organismes : en cellules·mL^-1^ (numération directe) ou en UFC·mL^-1^ ou UFC·g^-1^ (culture).',
      'Cellule de Malassez : un rectangle = 0,01 mm³ = 10^-5^ mL ; C = n × F ÷ (N × V~rectangle~), en appliquant la règle des deux côtés.',
      'Suspension mère d’un solide : 10 g + 90 mL = 10^-1^ ; dilutions décimales en série (1 mL + 9 mL), pipette neuve et homogénéisation à chaque étape.',
      'On choisit les dilutions à ensemencer avec : nombre de colonies attendu = C~attendue~ × d × V.',
      'Ensemencement en surface (0,1 mL, râteau) ou dans la masse (1 mL + gélose fondue à 45 °C environ).',
      'Boîtes retenues : au plus 300 colonies et au moins une boîte d’au moins 10 colonies (NF EN ISO 7218) ; N = ΣC ÷ (V × 1,1 × d) ; résultat à deux chiffres significatifs.',
      'Le résultat est interprété par rapport à un critère microbiologique ou à une valeur règlementaire ; la culture compte les cellules revivifiables, souvent moins nombreuses que les cellules comptées au microscope.',
    ],
    method: {
      title: 'Calculer et exprimer le résultat d’un dénombrement après culture',
      steps: [
        'Noter pour chaque boîte la dilution par rapport au **produit** et le volume ensemencé.',
        'Sélectionner les boîtes dénombrables selon la règle de la fiche technique ou de la norme, et vérifier leur cohérence (division par environ 10).',
        'Appliquer la formule : N = n ÷ (V × d) pour une boîte, ou N = ΣC ÷ (V × 1,1 × d) pour deux dilutions successives.',
        'Arrondir à deux chiffres significatifs, écrire en écriture scientifique, indiquer l’unité (UFC par mL ou par g de produit).',
        'Conclure en comparant le résultat à la valeur de référence du contexte.',
      ],
    },
    vocabulary: [
      { term: 'Dénombrement', definition: 'Détermination de la concentration en micro-organismes d’un produit.' },
      { term: 'Numération directe', definition: 'Comptage des cellules au microscope dans un volume connu d’une cellule de comptage.' },
      { term: 'Hématimètre', definition: 'Lame à quadrillage gravé délimitant un volume connu sous la lamelle (ex. cellule de Malassez).' },
      { term: 'Échantillon', definition: 'Portion représentative du produit analysé, sur laquelle porte le résultat.' },
      { term: 'Inoculum', definition: 'Volume exact de suspension déposé sur ou dans le milieu de culture.' },
      { term: 'Suspension mère', definition: 'Première suspension préparée à partir de l’échantillon (ex. 10 g + 90 mL = 10^-1^).' },
      { term: 'Dilution', definition: 'Rapport du volume prélevé au volume total ; 1 mL + 9 mL donne 10^-1^.' },
      { term: 'Facteur de dilution', definition: 'Inverse de la dilution : F = 1 ÷ d.' },
      { term: 'Dilutions décimales en série', definition: 'Dilutions successives au dixième, chaque tube étant 10 fois plus dilué que le précédent.' },
      { term: 'UFC', definition: 'Unité formant colonie : cellule ou groupe de cellules à l’origine d’une colonie.' },
      { term: 'Cellules revivifiables', definition: 'Cellules capables de se multiplier et de former une colonie dans les conditions de culture.' },
      { term: 'Boîte dénombrable', definition: 'Boîte retenue pour le calcul : au plus 300 colonies, selon la règle de la norme ou de la fiche technique.' },
      { term: 'Critère microbiologique', definition: 'Règle fixant la quantité acceptable d’un micro-organisme dans un produit, avec sa méthode de référence.' },
      { term: 'Méthode normalisée', definition: 'Méthode décrite par une norme (ISO, AFNOR), qui rend les résultats comparables entre laboratoires.' },
    ],
    mistakes: [
      { wrong: 'Confondre la dilution 10^-3^ et le facteur de dilution 1 000.', right: 'La dilution _d_ est inférieure à 1 (10^-3^) ; le facteur F = 1 ÷ d vaut 1 000. N = n ÷ (V × d) = n × F ÷ V.' },
      { wrong: 'Oublier le volume ensemencé dans le calcul.', right: 'Avec 0,1 mL ensemencé, le résultat par mL est 10 fois plus grand que le nombre de colonies corrigé de la dilution.' },
      { wrong: 'Oublier la dilution due au bleu de méthylène.', right: 'Un mélange volume à volume dilue au 1/2 : le facteur de dilution est multiplié par 2.' },
      { wrong: 'Calculer avec une boîte de plus de 300 colonies.', right: 'Une boîte trop chargée est indénombrable : on ne la retient pas.' },
      { wrong: 'Écrire « 166 363 636 bactéries par gramme ».', right: 'On écrit 1,7 × 10^8^ UFC·g^-1^ : deux chiffres significatifs, écriture scientifique, UFC et non bactéries.' },
      { wrong: 'Penser qu’une colonie de levures correspond à une levure.', right: 'Une colonie contient des millions de cellules ; c’est son origine (une UFC) qui est comptée.' },
    ],
    quiz: [
      { question: 'Le volume d’un rectangle de la cellule de Malassez est :', choices: ['0,01 mm³, soit 10^-5^ mL', '1 mm³, soit 10^-3^ mL', '0,1 mm³, soit 10^-4^ mL', '0,05 mm³, soit 5 × 10^-5^ mL'], answer: 0, explanation: '0,25 × 0,20 × 0,20 = 0,01 mm³ ; 1 mL = 1 000 mm³, donc 0,01 mm³ = 10^-5^ mL.' },
      { question: 'Après une dilution de 1 mL dans 9 mL, puis une seconde dilution identique, la dilution obtenue est :', choices: ['2 × 10^-1^', '10^-2^', '10^-1^', '10^-9^'], answer: 1, explanation: 'Les dilutions se multiplient : 10^-1^ × 10^-1^ = 10^-2^.' },
      { question: '10 g d’aliment mélangés à 90 mL de diluant donnent une suspension mère correspondant à la dilution :', choices: ['10^-2^', '1/9', '10^-1^', '10^-90^'], answer: 2, explanation: '10 g de produit dans un total d’environ 100 mL : dilution au 1/10, soit 10^-1^.' },
      { question: 'L’ensemencement dans la masse consiste à :', choices: ['Étaler 0,1 mL au râteau sur une gélose solidifiée', 'Faire un isolement en quadrants', 'Déposer 1 mL dans une boîte vide puis couler la gélose fondue', 'Remplir une cellule de Malassez'], answer: 2, explanation: 'L’inoculum (1 mL) est mélangé à la gélose fondue à environ 45 °C : les colonies se forment dans la gélose.' },
      { question: 'Une UFC correspond à :', choices: ['Une cellule ou un groupe de cellules à l’origine d’une colonie', 'Une colonie de plus de 1 mm', 'Une cellule morte', 'Un millilitre de suspension'], answer: 0, explanation: 'Une colonie peut provenir d’une cellule isolée ou d’un amas : on parle d’unité formant colonie.' },
      { question: 'Pour le calcul, on ne retient pas une boîte qui contient :', choices: ['150 colonies', '45 colonies', '250 colonies', '480 colonies'], answer: 3, explanation: 'Au-delà de 300 colonies, la boîte est trop chargée : les colonies se touchent et le comptage est faux.' },
      { question: '84 colonies ont été comptées sur une boîte ensemencée avec 0,1 mL de la dilution 10^-4^. La concentration du produit est :', choices: ['8,4 × 10^5^ UFC·mL^-1^', '8,4 × 10^6^ UFC·mL^-1^', '8,4 × 10^3^ UFC·mL^-1^', '8,4 × 10^4^ UFC·mL^-1^'], answer: 1, explanation: 'N = 84 ÷ (0,1 × 10^-4^) = 84 ÷ 10^-5^ = 8,4 × 10^6^ UFC·mL^-1^.' },
      { question: 'La numération directe donne souvent un résultat plus élevé que le dénombrement après culture car :', choices: ['Le microscope grossit les cellules', 'Elle compte aussi les cellules mortes et non revivifiables', 'Les colonies se multiplient pendant le comptage', 'Le bleu de méthylène tue les cellules'], answer: 1, explanation: 'Seules les cellules revivifiables forment une colonie ; de plus, un amas ne donne qu’une seule UFC.' },
      { question: 'Un résultat de 800 UFC·g^-1^ d’_E. coli_ dans une viande hachée (m = 50, M = 500 UFC·g^-1^) est :', choices: ['Satisfaisant', 'Acceptable', 'Non satisfaisant', 'Impossible à interpréter'], answer: 2, explanation: '800 UFC·g^-1^ est supérieur à M = 500 UFC·g^-1^ : le résultat est non satisfaisant.' },
    ],
    exercises: [
      {
        title: 'Numération de micro-algues',
        statement: ['On compte des micro-algues _Chlorella_ dans une cellule de Malassez, sans dilution préalable. On trouve 96 cellules dans 4 rectangles.', 'a) Calcule la concentration de la suspension. b) Ce comptage est-il suffisant ? Que proposes-tu ?'],
        answer: ['a) C = 96 × 1 ÷ (4 × 10^-5^) = 96 ÷ (4 × 10^-5^) = 2,4 × 10^6^ cellules·mL^-1^.', 'b) 96 cellules, c’est un peu moins que la centaine conseillée et 4 rectangles seulement : il vaut mieux compter davantage de rectangles (par exemple 10) répartis sur le quadrillage pour un résultat plus représentatif.'],
      },
      {
        title: 'Contrôle d’une viande hachée',
        statement: ['On recherche _Escherichia coli_ dans une viande hachée. Suspension mère : 10 g + 90 mL de diluant (10^-1^). On ensemence 1 mL de la suspension mère et 1 mL de la dilution 10^-2^ dans la masse d’un milieu sélectif. Résultats : 10^-1^ : 32 colonies caractéristiques ; 10^-2^ : 3 colonies.', 'a) Calcule la concentration en _E. coli_ (N = ΣC ÷ (V × 1,1 × d)). b) Interprète le résultat sachant que m = 50 UFC·g^-1^ et M = 500 UFC·g^-1^.'],
        answer: ['a) N = (32 + 3) ÷ (1 × 1,1 × 10^-1^) = 35 ÷ 0,11 ≈ 318, soit N = 3,2 × 10^2^ UFC·g^-1^.', 'b) 50 < 320 ≤ 500 : le résultat est compris entre **m** et **M** : il est « acceptable ». Le lot n’est conforme que si au plus 2 des 5 échantillons analysés se situent entre **m** et **M** et qu’aucun ne dépasse **M**.'],
      },
      {
        title: 'Choisir les dilutions',
        statement: 'Un lait cru contient environ 5 × 10^4^ UFC·mL^-1^ de flore aérobie mésophile. On ensemence 1 mL dans la masse. Quelles dilutions décimales du lait faut-il ensemencer pour obtenir des boîtes dénombrables ? Justifie par le calcul.',
        answer: ['Nombre attendu = 5 × 10^4^ × d × 1.', 'd = 10^-2^ : 500 colonies (trop) ; d = 10^-3^ : 50 colonies (dénombrable) ; d = 10^-4^ : 5 colonies.', 'On ensemence 10^-2^, 10^-3^ et 10^-4^ : la dilution 10^-3^ devrait être dénombrable, et les deux autres encadrent le résultat si l’estimation est imprécise.'],
      },
    ],
    selfCheck: [
      'Je sais calculer le volume d’un rectangle de Malassez et la concentration d’une suspension à partir d’un comptage.',
      'Je sais appliquer la règle de comptage des cellules sur les lignes et utiliser le bleu de méthylène.',
      'Je sais préparer une suspension mère et réaliser des dilutions décimales en série.',
      'Je sais calculer les dilutions à ensemencer pour obtenir des boîtes dénombrables.',
      'Je sais ensemencer un volume exact en surface et dans la masse.',
      'Je sais sélectionner les boîtes, calculer un résultat en UFC et l’exprimer avec deux chiffres significatifs.',
      'Je sais interpréter un résultat face à un critère microbiologique et comparer les deux méthodes de dénombrement.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Règlement (CE) n° 2073/2005 concernant les critères microbiologiques applicables aux denrées alimentaires — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32005R2073' },
      { title: 'Cellule de Malassez — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cellule_de_Malassez' },
    ],
  },
};

export default lesson;
