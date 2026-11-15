import { img } from '../media';
import isolementsPhoto from '../../../assets/visuals/photo-premiere-lg.webp';
import autoclave from '../../../assets/courses/premiere/module-2-culture/autoclave.webp';
import quadrants from '../../../assets/courses/premiere/module-2-culture/isolement-quadrants.webp';
import caracteresColonies from '../../../assets/courses/premiere/module-2-culture/caracteres-colonies.webp';
import typesRespiratoires from '../../../assets/courses/premiere/module-2-culture/types-respiratoires.webp';
import chapman from '../../../assets/courses/premiere/module-2-culture/chapman.webp';
import isolementContamine from '../../../assets/courses/premiere/module-2-culture/isolement-contamine.webp';

const IMG = {
  isolements: img(isolementsPhoto, 'Quatre boîtes de Pétri présentant des isolements de bactéries aux colonies orangées, jaunes et crème, posées sur une paillasse près d’un bec Bunsen, avec une anse d’ensemencement.', 'photo', 1536, 1024),
  autoclave: img(autoclave, 'Schéma en coupe d’un autoclave vertical : manomètre, soupape de sécurité, robinet de purge, couvercle verrouillé, vapeur d’eau sous pression, panier contenant les milieux à stériliser, eau et résistance chauffante.', 'schema', 933, 1400),
  quadrants: img(quadrants, 'Schéma d’un isolement par la méthode des quadrants vu de dessus : croissance confluente dans le quadrant 1, stries de moins en moins chargées dans les quadrants 2 et 3, colonies isolées dans le quadrant 4.', 'schema', 1400, 933),
  colonies: img(caracteresColonies, 'Planche des caractères macroscopiques d’une colonie : forme (ronde, irrégulière, filamenteuse), contour (régulier, ondulé, lobé) et relief (plate, bombée, ombiliquée).', 'schema', 1400, 933),
  typesRespiratoires: img(typesRespiratoires, 'Quatre tubes de gélose profonde montrant la répartition des colonies selon le type respiratoire : aérobie strict en surface, microaérophile juste sous la surface, aéro-anaérobie facultatif dans toute la hauteur, anaérobie strict uniquement en profondeur.', 'schema', 1400, 933),
  chapman: img(chapman, 'Deux boîtes ensemencées avec le même prélèvement cutané : à gauche une gélose ordinaire couverte de colonies variées, à droite une gélose de Chapman rouge portant moins de colonies, certaines jaunes entourées d’un halo jaune, d’autres blanches sans changement de couleur du milieu.', 'photo', 1536, 1024),
  contamine: img(isolementContamine, 'Boîte de gélose ordinaire après un isolement en quadrants : colonies crème, rondes et lisses le long des stries, deux grandes colonies jaunes à bord lobé et une colonie de moisissure duveteuse gris-vert près du bord.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'module-2-culture',
  duration: 'Environ 5 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.isolements,
    question: 'Une boîte de gélose ouverte quelques minutes dans la classe se couvre de colonies. Comment cultiver UN micro-organisme sans être envahi par tous les autres ?',
    text: 'Les micro-organismes sont partout : dans l’air, sur la paillasse, sur tes mains. Pour en cultiver un seul au laboratoire, il faut du matériel stérile, des gestes d’asepsie précis, un milieu de culture qui répond à ses besoins et une technique d’isolement efficace. C’est ce que tu vas apprendre dans ce chapitre, la base de tout travail en microbiologie.',
  },
  objectives: [
    'Organiser mon poste de travail et manipuler en conditions d’asepsie, en distinguant stérile, aseptique, stérilisation et désinfection.',
    'Expliquer le fonctionnement d’un autoclave et repérer un barème de stérilisation et un manomètre.',
    'Relier les besoins nutritifs d’un micro-organisme à son type trophique et choisir un milieu de culture adapté.',
    'Exploiter la composition d’un milieu sélectif et d’un milieu d’orientation pour isoler un micro-organisme d’intérêt.',
    'Préparer un milieu, ensemencer un milieu liquide et un milieu solide (isolement en quadrants), puis définir les conditions d’incubation.',
    'Décrire une culture et une colonie avec le vocabulaire exact, et repérer un contaminant.',
  ],
  prerequisites: [
    'Les bactéries, les levures et les micro-algues sont des micro-organismes (chapitre « Observer la diversité du vivant à l’échelle microscopique »).',
    'Les notions de danger et de risque au laboratoire (module transversal de prévention des risques).',
    'Le pH : un milieu acide a un pH inférieur à 7, un milieu basique un pH supérieur à 7.',
  ],
  program: [
    'Appliquer les méthodes de stérilisation du matériel pour protéger l’échantillon.',
    'Organiser le poste de travail ; manipuler en conditions d’asepsie avec des milieux stériles.',
    'Identifier les mesures contribuant à protéger le manipulateur ou l’environnement d’une contamination par une culture.',
    'Faire le lien entre les deux types trophiques des micro-organismes non exigeants et leurs besoins nutritionnels.',
    'Choisir un milieu de culture adapté aux besoins nutritionnels d’un micro-organisme.',
    'Prendre en compte les paramètres physico-chimiques de culture en fonction des micro-organismes.',
    'Choisir un milieu d’orientation par acidification et un milieu sélectif en vue de l’isolement d’un micro-organisme d’intérêt.',
    'Préparer un milieu de culture et le conditionner en suivant une procédure ; repérer un barème de stérilisation et un manomètre sur un autoclave.',
    'Ensemencer un milieu de culture liquide et un milieu de culture solide ; définir température et durée d’incubation.',
    'Identifier un milieu de culture pour garantir sa traçabilité.',
    'Décrire une colonie bactérienne à l’aide des caractères macroscopiques ; observer un isolement pour repérer un contaminant.',
  ],

  course: {
    parts: [
      {
        title: 'Travailler en milieu aseptique',
        intro: 'Au laboratoire de microbiologie, deux dangers sont à éviter en même temps : contaminer la culture, et se contaminer soi-même ou contaminer l’environnement.',
        blocks: [
          { type: 'p', text: 'Les **micro-organismes de l’environnement** sont présents partout : dans l’**air** (poussières, gouttelettes, spores de moisissures), sur les **surfaces** (paillasse, poignées, téléphone), dans l’**eau** et sur la **peau** (les mains portent naturellement des milliers de bactéries, notamment des staphylocoques). Dès qu’on ouvre un tube ou une boîte, ils peuvent tomber dans le milieu de culture et s’y multiplier : c’est une **contamination**.' },
          { type: 'definition', term: 'Contaminant', text: 'micro-organisme indésirable, introduit accidentellement dans une culture ou un échantillon. Il fausse le résultat : on ne sait plus quel micro-organisme on étudie.' },
          { type: 'p', text: 'Le programme attire ton attention sur deux paires de mots à ne pas confondre : **aseptique / stérile** et **désinfection / stérilisation**.' },
          {
            type: 'compare',
            title: 'Aseptique ou stérile ?',
            columns: [
              { title: 'Stérile', subtitle: 'un état', items: ['Se dit d’un **objet** ou d’un **milieu** qui ne contient **aucun micro-organisme vivant**, même sous forme de spore.', 'On l’obtient par une **stérilisation**.', 'Exemples : une boîte de gélose neuve fermée, une pipette dans son emballage, une anse rougie à la flamme.'] },
              { title: 'Aseptique', subtitle: 'une façon de travailler', items: ['Se dit d’une **technique**, d’une **zone** ou de **conditions** qui **empêchent l’apport** de micro-organismes extérieurs.', 'L’**asepsie** est l’ensemble de ces mesures et de ces gestes.', 'Exemples : travailler dans la zone protégée par la flamme, ouvrir la boîte le moins longtemps possible.'] },
            ],
          },
          {
            type: 'compare',
            title: 'Désinfection ou stérilisation ?',
            columns: [
              { title: 'Désinfection', items: ['Opération qui **élimine ou tue les micro-organismes indésirables** présents sur une **surface inerte** (paillasse, matériel).', 'Résultat **momentané** : la surface est vite recontaminée.', 'Tous les micro-organismes ne sont pas forcément détruits (les spores résistent souvent).', 'Exemple : passer un désinfectant sur la paillasse avant et après le TP.'] },
              { title: 'Stérilisation', items: ['Opération qui **détruit ou élimine tous les micro-organismes**, y compris les **spores** bactériennes, très résistantes.', 'Résultat **durable** tant que l’emballage (le **conditionnement**) reste intact.', 'Elle s’applique à du matériel et à des milieux, jamais à la peau.', 'Exemple : passage d’un milieu de culture à l’autoclave.'] },
            ],
          },
          { type: 'definition', term: 'Risque biologique', text: 'possibilité qu’un agent biologique (bactérie, virus, champignon…) provoque un dommage chez une personne exposée : infection, allergie ou intoxication. Les agents biologiques sont classés en **quatre groupes de danger**, du groupe 1 (non pathogène pour l’humain) au groupe 4 (maladie grave sans traitement).' },
          {
            type: 'table',
            caption: 'Groupes de danger et niveaux de confinement',
            head: ['Groupe', 'Danger pour l’humain', 'Exemples', 'Laboratoire'],
            rows: [
              ['Groupe 1', 'Pas susceptible de provoquer une maladie.', '_Saccharomyces cerevisiae_ (levure de boulanger), _Escherichia coli_ K-12 (souche de laboratoire), _Bacillus subtilis_', 'Confinement de niveau 1 (L1)'],
              ['Groupe 2', 'Peut provoquer une maladie ; propagation peu probable ; traitement efficace.', '_Staphylococcus aureus_, la plupart des _Salmonella_', 'L2'],
              ['Groupe 3', 'Maladie grave ; propagation possible ; traitement en général disponible.', '_Mycobacterium tuberculosis_', 'L3'],
              ['Groupe 4', 'Maladie grave ; propagation probable ; pas de traitement efficace.', 'Virus Ebola', 'L4'],
            ],
          },
          { type: 'p', text: 'Au lycée, on cultive en général des souches du **groupe 1**. Mais un prélèvement de l’environnement (air, surface, peau) contient des micro-organismes **inconnus** : on le manipule comme s’il était pathogène et, après incubation, la boîte reste **fermée** (scotchée) puis est détruite à l’autoclave.' },
          {
            type: 'steps',
            title: 'Organiser son poste de travail',
            items: [
              { title: 'Se préparer', text: 'Blouse en coton fermée, cheveux attachés, mains lavées au savon. On ne mange pas, on ne boit pas et on ne porte rien à la bouche.' },
              { title: 'Désinfecter la paillasse', text: 'Passer le désinfectant sur toute la surface de travail et laisser agir le temps indiqué.' },
              { title: 'Disposer le matériel', text: 'Tout est préparé **avant** d’ouvrir un tube : milieux stériles, cultures, instruments, feutre, à portée de main et rangés de façon logique (non ensemencé d’un côté, ensemencé de l’autre). Rien d’inutile sur la paillasse.' },
              { title: 'Allumer le bec Bunsen', text: 'La flamme bleue crée autour d’elle une **zone d’asepsie** d’environ 15 à 20 cm de rayon : l’air chaud qui monte écarte les poussières et les micro-organismes. Toutes les ouvertures se font dans cette zone.' },
              { title: 'Manipuler', text: 'Gestes rapides et précis, récipients ouverts le moins longtemps possible, couvercle de la boîte maintenu au-dessus de la gélose, bouchon tenu dans la main (jamais posé sur la paillasse).' },
              { title: 'Ranger et éliminer', text: 'Matériel contaminé dans les conteneurs prévus (déchets à risques infectieux, DASRI), cultures détruites à l’autoclave, paillasse désinfectée, mains lavées avant de sortir.' },
            ],
          },
          { type: 'note', title: 'Le poste de sécurité microbiologique', text: 'Dans les laboratoires professionnels, on travaille souvent sous un **poste de sécurité microbiologique (PSM)** : une enceinte ventilée qui filtre l’air. Selon son type, il protège la manipulation, le manipulateur et l’environnement.' },
          {
            type: 'table',
            caption: 'Qui est protégé par chaque mesure ?',
            head: ['Mesure', 'Le produit (la culture)', 'Le manipulateur', 'L’environnement'],
            rows: [
              ['Lavage des mains avant la manipulation', 'Oui', '—', '—'],
              ['Lavage des mains après la manipulation', '—', 'Oui', 'Oui'],
              ['Désinfection de la paillasse avant / après', 'Oui (avant)', 'Oui (après)', 'Oui (après)'],
              ['Travail dans la zone d’asepsie de la flamme, matériel stérile', 'Oui', '—', '—'],
              ['Flambage de l’anse après usage', '—', 'Oui', 'Oui'],
              ['Blouse fermée, ne rien porter à la bouche', '—', 'Oui', '—'],
              ['Boîtes d’environnement fermées, cultures autoclavées, DASRI', '—', 'Oui', 'Oui'],
            ],
          },
          {
            type: 'retenir',
            items: [
              '**Stérile** = sans aucun micro-organisme vivant (un état) ; **aseptique** = qui empêche l’apport de micro-organismes (une façon de travailler).',
              '**Désinfection** : élimination momentanée des micro-organismes indésirables d’une surface ; **stérilisation** : destruction de tous les micro-organismes, spores comprises.',
              'On manipule dans la zone d’asepsie de la flamme, avec du matériel stérile, en ouvrant le moins longtemps possible.',
              'Certaines mesures protègent la culture, d’autres le manipulateur et l’environnement : les deux sont indispensables.',
            ],
          },
        ],
      },

      {
        title: 'Stériliser le matériel et les milieux',
        intro: 'Un milieu de culture est un véritable festin pour les micro-organismes : il doit être stérile avant d’être ensemencé, sinon on cultive n’importe quoi.',
        blocks: [
          { type: 'p', text: 'Faire bouillir ne suffit pas : certaines bactéries (comme _Bacillus_ ou _Clostridium_) forment des **spores**, des formes de résistance qui survivent à 100 °C. Il faut donc des méthodes plus puissantes, choisies selon la nature de ce qu’on stérilise.' },
          {
            type: 'table',
            caption: 'Les principales méthodes de stérilisation au laboratoire',
            head: ['Méthode', 'Principe et conditions', 'Utilisation'],
            rows: [
              ['Chaleur humide (autoclave)', 'Vapeur d’eau sous pression : **121 °C pendant 15 à 20 min** (le plus courant).', 'Milieux de culture, eau, verrerie, matériel en plastique résistant ; destruction des cultures avant élimination.'],
              ['Chaleur sèche (four Pasteur)', 'Air chaud : par exemple 180 °C pendant au moins 30 min.', 'Verrerie vide, objets métalliques (pas les liquides ni le plastique).'],
              ['Incinération (flambage)', 'Passage dans la flamme jusqu’au **rouge**.', 'Anse et fil de platine (ou de nichrome), juste avant et juste après usage.'],
              ['Filtration stérilisante', 'Passage à travers une membrane dont les pores (0,22 µm) retiennent les bactéries.', 'Solutions **thermosensibles** (détruites par la chaleur) : vitamines, urée, certains glucides, antibiotiques.'],
              ['Rayonnements (industrie)', 'Rayons gamma.', 'Matériel stérile à usage unique : boîtes de Pétri, anses et pipettes en plastique.'],
            ],
          },
          { type: 'definition', term: 'Autoclave', text: 'appareil de stérilisation par la **chaleur humide** : de la vapeur d’eau, maintenue sous pression dans une cuve fermée, atteint une température supérieure à 100 °C (121 °C sous une pression relative d’environ 1 bar).' },
          { type: 'figure', image: IMG.autoclave, caption: 'Un autoclave vertical en coupe. La vapeur d’eau sous pression traverse le panier et chauffe les milieux à 121 °C.', size: 'small' },
          { type: 'definition', term: 'Barème de stérilisation', text: 'couple **température / durée** à respecter pour stériliser une charge donnée. Exemple : « 121 °C – 20 min ». La durée se compte à partir du moment où la température est atteinte. Le barème est indiqué sur la fiche technique de chaque milieu.' },
          {
            type: 'steps',
            title: 'Un cycle d’autoclave (réalisé par le personnel habilité)',
            items: [
              { title: 'Charger', text: 'Vérifier le niveau d’eau, placer les milieux dans le panier, **bouchons desserrés** (sinon les flacons peuvent éclater).' },
              { title: 'Fermer et purger', text: 'Verrouiller le couvercle, chauffer avec le **robinet de purge ouvert** : la vapeur chasse l’air. Sans purge, l’air restant empêcherait d’atteindre 121 °C.' },
              { title: 'Monter en pression', text: 'Fermer la purge : la pression monte. Le **manomètre** indique la pression ; la **soupape de sécurité** évite toute surpression.' },
              { title: 'Maintenir le palier', text: 'Maintenir 121 °C (environ 1 bar sur le manomètre) pendant la durée du barème.' },
              { title: 'Refroidir avant d’ouvrir', text: 'Attendre que le manomètre revienne à **0** avant d’ouvrir : ouvrir sous pression provoquerait des brûlures et des projections de liquide bouillant.' },
            ],
          },
          { type: 'warning', title: 'Sécurité', text: 'L’autoclave présente des dangers de **brûlure** et de **surpression**. Au lycée, il est utilisé uniquement par le personnel de laboratoire habilité ; l’élève apprend à en repérer les éléments et à lire un barème.' },
          { type: 'definition', term: 'Conditionnement', text: 'emballage ou fermeture qui maintient la stérilité après la stérilisation : bouchon, capuchon, papier aluminium, sachet scellé. Un matériel stérile dont l’emballage est ouvert ou abîmé n’est plus considéré comme stérile.' },
          { type: 'p', text: 'Un **ruban indicateur** collé sur la charge change de couleur au cours du cycle : il prouve que la charge est passée à l’autoclave (c’est un **témoin de passage**), mais il ne garantit pas à lui seul la stérilité.' },
          {
            type: 'retenir',
            items: [
              'Autoclave = chaleur humide sous pression ; barème courant : **121 °C pendant 15 à 20 min**.',
              'Le **manomètre** indique la pression, la **soupape de sécurité** évite la surpression, la **purge** chasse l’air.',
              'Un composé thermosensible se stérilise par **filtration** (0,22 µm) ; une anse se stérilise par flambage jusqu’au rouge.',
              'Le conditionnement maintient la stérilité jusqu’à l’utilisation.',
            ],
          },
        ],
      },

      {
        title: 'Nourrir les micro-organismes : besoins nutritifs et conditions de culture',
        intro: 'Pour se multiplier, un micro-organisme doit trouver dans son milieu de quoi fabriquer ses propres molécules et de quoi produire de l’énergie.',
        blocks: [
          { type: 'definition', term: 'Milieu de culture', text: 'préparation, liquide ou solide, qui apporte à un micro-organisme tout ce dont il a besoin pour se multiplier : eau, source d’énergie, source de carbone, source d’azote, éléments minéraux et, si nécessaire, facteurs de croissance.' },
          {
            type: 'cards',
            items: [
              { title: 'Eau', text: 'Constituant majoritaire de la cellule (environ 70 à 80 % de sa masse) ; tous les échanges se font en milieu aqueux.', tone: 'blue' },
              { title: 'Source d’énergie', text: 'La **lumière** (micro-organismes **phototrophes**) ou l’oxydation de **molécules chimiques** comme le glucose (micro-organismes **chimiotrophes**).', tone: 'yellow' },
              { title: 'Source de carbone', text: 'Le **CO~2~** (micro-organismes **autotrophes**) ou des **molécules organiques** comme le glucose (micro-organismes **hétérotrophes**).', tone: 'green' },
              { title: 'Azote et minéraux', text: 'Azote minéral (NH~4~^+^, NO~3~^-^) ou organique (acides aminés) ; phosphore, soufre, potassium, magnésium, fer et oligoéléments.', tone: 'white' },
              { title: 'Facteurs de croissance', text: 'Molécules organiques que certains micro-organismes ne savent pas fabriquer (vitamines, acides aminés…) : ils sont dits **exigeants**.', tone: 'red' },
            ],
          },
          { type: 'definition', term: 'Type trophique', text: 'manière dont un être vivant se procure son énergie et son carbone. On le nomme en associant la source d’énergie (photo- ou chimio-) et la source de carbone (auto- ou hétéro-).' },
          {
            type: 'compare',
            title: 'Les deux types trophiques des micro-organismes non exigeants',
            columns: [
              { title: 'Photoautotrophes', subtitle: 'ex. micro-algues (Chlorella), cyanobactéries', items: ['Énergie : **lumière** (photosynthèse).', 'Carbone : **CO~2~** (carbone minéral).', 'Besoins : eau, lumière, CO~2~ et **sels minéraux** seulement.', 'Milieu adapté : **milieu minéral**, incubé à la lumière.'] },
              { title: 'Chimiohétérotrophes', subtitle: 'ex. Escherichia coli, levures', items: ['Énergie : oxydation de **molécules organiques**.', 'Carbone : **molécules organiques** ; souvent la même molécule (le glucose) sert de source de carbone et d’énergie.', 'Besoins : eau, une molécule organique simple, sels minéraux (azote minéral).', 'Milieu adapté : milieu minéral + glucose, ou milieu ordinaire.'] },
            ],
          },
          { type: 'definition', term: 'Micro-organisme non exigeant', text: 'micro-organisme capable de fabriquer toutes ses molécules à partir de sources simples (CO~2~ ou glucose, sels minéraux) : il n’a besoin d’**aucun facteur de croissance**. À l’inverse, un micro-organisme **exigeant** (par exemple les bactéries lactiques) ne pousse que si le milieu lui apporte des facteurs de croissance.' },
          {
            type: 'table',
            caption: 'Choisir un milieu selon les besoins nutritifs',
            head: ['Type de milieu', 'Composition', 'Pour quels micro-organismes ?'],
            rows: [
              ['Milieu minéral', 'Eau et sels minéraux uniquement (+ lumière et CO~2~ de l’air).', 'Photoautotrophes : micro-algues, cyanobactéries.'],
              ['Milieu synthétique « minimum » glucosé', 'Sels minéraux + glucose ; composition chimique exactement connue.', 'Chimiohétérotrophes non exigeants (ex. _E. coli_).'],
              ['Milieu ordinaire (gélose ou bouillon nutritif)', 'Milieu complexe : peptones (fragments de protéines), extrait de viande ou de levure, NaCl ; composition exacte non connue.', 'La plupart des bactéries non exigeantes ou peu exigeantes.'],
              ['Milieu enrichi', 'Milieu ordinaire + sang, sérum, vitamines…', 'Micro-organismes exigeants.'],
            ],
          },
          { type: 'p', text: 'Un milieu peut être **liquide** (un **bouillon**) ou **solide** (une **gélose**). Pour le solidifier, on ajoute de l’**agar** (environ 15 g·L^-1^), un polymère extrait d’algues rouges que la plupart des micro-organismes ne dégradent pas. L’agar fond au-delà de 85 °C environ et ne se solidifie qu’en dessous de 40 °C environ : on peut donc couler la gélose liquide vers 45 à 50 °C.' },
          { type: 'p', text: 'Les nutriments ne suffisent pas : chaque micro-organisme ne se multiplie que dans un intervalle de **conditions physico-chimiques** (température, pH, salinité, dioxygène), avec une valeur **optimale** où sa croissance est la plus rapide.' },
          {
            type: 'table',
            caption: 'Les paramètres physico-chimiques de culture',
            head: ['Paramètre', 'Classement des micro-organismes', 'Exemples'],
            rows: [
              ['Température', '**Psychrophiles** (optimum inférieur à 20 °C), **mésophiles** (optimum entre 20 et 45 °C), **thermophiles** (optimum supérieur à 45 °C).', 'La plupart des bactéries étudiées au lycée sont mésophiles : incubation à 30 ou 37 °C.'],
              ['pH', 'La plupart des bactéries préfèrent un pH proche de la neutralité (6,5 à 7,5) ; les levures et moisissures tolèrent ou préfèrent un pH acide.', 'Gélose de Sabouraud pour levures et moisissures : pH 5,6.'],
              ['Concentration en ions Na^+^ (NaCl)', '**Non halophiles** (pas de sel nécessaire, inhibés par beaucoup de sel), **halotolérants** (supportent beaucoup de sel), **halophiles** (ont besoin de sel).', 'Les staphylocoques supportent 7,5 % de NaCl ; beaucoup de bactéries marines sont halophiles.'],
              ['Dioxygène (O~2~)', 'Aérobie strict, microaérophile, aéro-anaérobie facultatif, anaérobie strict (voir ci-dessous).', '_E. coli_ et les levures sont aéro-anaérobies facultatifs.'],
            ],
          },
          { type: 'definition', term: 'Aérobiose / anaérobiose', text: 'l’**aérobiose** désigne des conditions de culture en présence de dioxygène ; l’**anaérobiose**, des conditions sans dioxygène (par exemple dans une jarre spéciale). Le **type respiratoire** d’un micro-organisme décrit son comportement vis-à-vis du dioxygène.' },
          { type: 'figure', image: IMG.typesRespiratoires, caption: 'Types respiratoires révélés en gélose profonde (gélose viande-foie). Le dioxygène diffuse depuis la surface : sa concentration diminue en profondeur.', size: 'wide' },
          {
            type: 'table',
            caption: 'Lire les types respiratoires',
            head: ['Type respiratoire', 'Relation au dioxygène', 'Croissance en gélose profonde'],
            rows: [
              ['Aérobie strict', 'O~2~ indispensable.', 'Uniquement en surface.'],
              ['Microaérophile', 'Besoin d’un peu d’O~2~, mais inhibé par la concentration de l’air.', 'Bande juste sous la surface.'],
              ['Aéro-anaérobie facultatif', 'Pousse avec ou sans O~2~ (mieux avec).', 'Dans toute la hauteur, plus dense en haut.'],
              ['Anaérobie strict', 'O~2~ toxique.', 'Uniquement en profondeur.'],
            ],
          },
          { type: 'note', title: 'Pour aller plus loin', text: 'Les bactéries lactiques (lactobacilles, streptocoques) sont dites **anaérobies aérotolérantes** : elles n’utilisent pas le dioxygène mais le supportent. En gélose profonde, elles poussent dans toute la hauteur.' },
          {
            type: 'retenir',
            items: [
              'Un milieu apporte eau, source d’énergie, source de carbone, azote, minéraux et, pour les exigeants, des facteurs de croissance.',
              'Photoautotrophe : lumière + CO~2~ → milieu minéral. Chimiohétérotrophe : molécules organiques → milieu glucosé ou ordinaire.',
              'Un micro-organisme non exigeant n’a besoin d’aucun facteur de croissance.',
              'Température, pH, NaCl et dioxygène doivent être adaptés au micro-organisme cultivé.',
            ],
          },
        ],
      },

      {
        title: 'Isoler un micro-organisme d’intérêt : milieux sélectifs et d’orientation',
        intro: 'Un produit naturel (lait, fromage, eau, prélèvement de peau) contient presque toujours plusieurs espèces : il est polymicrobien. Pour étudier l’une d’elles, il faut l’isoler.',
        blocks: [
          { type: 'definition', term: 'Milieu d’isolement', text: 'milieu **solide**, coulé en boîte de Pétri, sur lequel on ensemence le produit de façon à obtenir des **colonies isolées**, bien séparées les unes des autres.' },
          { type: 'definition', term: 'Milieu sélectif', text: 'milieu qui contient un ou plusieurs **agents inhibiteurs** (ou agents sélectifs) : ils empêchent la croissance de certains micro-organismes et favorisent celle du micro-organisme recherché.' },
          { type: 'definition', term: 'Milieu d’orientation', text: 'milieu qui fait apparaître un **caractère visible** des colonies, ce qui oriente vers un groupe de micro-organismes. Le plus souvent, il contient un **substrat fermentescible** (un glucide) et un **indicateur de pH**.' },
          {
            type: 'flow',
            title: 'Comment fonctionne un milieu d’orientation par acidification',
            steps: [
              { title: 'Fermentation', text: 'La bactérie fermente le glucide du milieu (lactose, mannitol…).' },
              { title: 'Acidification', text: 'La fermentation produit des acides : le pH autour de la colonie diminue.' },
              { title: 'Virage', text: 'L’indicateur de pH change de couleur autour de la colonie.' },
              { title: 'Orientation', text: 'Les colonies « glucide + » se distinguent des colonies « glucide − ».' },
            ],
          },
          { type: 'p', text: 'Beaucoup de milieux sont à la fois **sélectifs et d’orientation**. Le plus classique au lycée est la **gélose de Chapman**, utilisée pour isoler les staphylocoques.' },
          {
            type: 'table',
            caption: 'Composition de la gélose de Chapman (pour 1 L) et rôle de chaque constituant',
            head: ['Constituant', 'Quantité', 'Rôle'],
            rows: [
              ['Peptone', '10 g', 'Source de carbone, d’azote et d’énergie.'],
              ['Extrait de viande de bœuf', '1 g', 'Source de carbone, d’azote, de vitamines et de minéraux.'],
              ['Chlorure de sodium (NaCl)', '75 g', '**Agent sélectif** : seuls les micro-organismes **halotolérants** (staphylocoques) poussent.'],
              ['Mannitol', '10 g', '**Substrat fermentescible** (critère d’orientation).'],
              ['Rouge de phénol', '0,025 g', '**Indicateur de pH** : rouge à pH neutre ou basique, **jaune** en milieu acide (pH inférieur à 6,8).'],
              ['Agar', '15 g', 'Solidifie le milieu.'],
              ['pH final', '7,4', 'Le milieu est rouge avant culture.'],
            ],
          },
          { type: 'figure', image: IMG.chapman, caption: 'Le même prélèvement cutané sur gélose ordinaire (à gauche) et sur gélose de Chapman (à droite). Sur Chapman, moins de colonies poussent (sélection) ; les colonies jaunes entourées d’un halo jaune fermentent le mannitol (orientation).', size: 'wide' },
          {
            type: 'table',
            caption: 'Quelques milieux sélectifs et d’orientation',
            head: ['Milieu', 'Agents sélectifs', 'Substrat et indicateur', 'Ce qu’on recherche'],
            rows: [
              ['Chapman', 'NaCl 75 g·L^-1^', 'Mannitol ; rouge de phénol', 'Staphylocoques ; mannitol + : colonies jaunes (orientation vers _Staphylococcus aureus_)'],
              ['Drigalski', 'Cristal violet, désoxycholate de sodium (inhibent les Gram positif)', 'Lactose ; bleu de bromothymol', 'Bacilles Gram négatif ; lactose + : colonies jaunes'],
              ['MacConkey', 'Sels biliaires, cristal violet', 'Lactose ; rouge neutre', 'Entérobactéries ; lactose + : colonies roses à rouges'],
              ['Sabouraud au chloramphénicol', 'Chloramphénicol (antibiotique), pH acide', 'Pas d’indicateur', 'Levures et moisissures'],
            ],
          },
          { type: 'warning', title: 'Orienter n’est pas identifier', text: 'Une colonie jaune sur Chapman n’est **pas forcément** _Staphylococcus aureus_ : d’autres staphylocoques fermentent aussi le mannitol. Le milieu oriente ; l’identification demande d’autres caractères (chapitre suivant).' },
          {
            type: 'retenir',
            items: [
              'Un milieu **sélectif** contient des agents inhibiteurs qui ne laissent pousser que certains micro-organismes.',
              'Un milieu **d’orientation** par acidification contient un glucide fermentescible et un indicateur de pH : les colonies qui fermentent changent la couleur du milieu.',
              'Chapman : NaCl 75 g·L^-1^ (sélectif), mannitol + rouge de phénol (orientation) ; mannitol + = colonies jaunes.',
              'Pour isoler un micro-organisme d’intérêt, on choisit le milieu d’après sa **composition**, lue sur la fiche technique.',
            ],
          },
        ],
      },

      {
        title: 'Préparer un milieu, ensemencer, incuber',
        intro: 'Un bon résultat se prépare : un milieu bien stérilisé, un ensemencement propre, des conditions d’incubation adaptées et des boîtes bien identifiées.',
        blocks: [
          {
            type: 'steps',
            title: 'Préparer et conditionner une gélose à partir d’une poudre déshydratée',
            items: [
              { title: 'Lire la fiche technique', text: 'Elle indique la masse de poudre par litre, le pH final et le barème de stérilisation.' },
              { title: 'Peser et dissoudre', text: 'Peser la poudre, la dissoudre dans l’eau distillée, chauffer en agitant jusqu’à ébullition pour dissoudre l’agar.' },
              { title: 'Répartir et conditionner', text: 'Répartir en flacons ou en tubes, boucher sans serrer.' },
              { title: 'Stériliser', text: 'Autoclaver selon le barème de la fiche (souvent 121 °C – 15 min).' },
              { title: 'Compléter si besoin', text: 'Laisser refroidir vers 45 à 50 °C, puis ajouter stérilement un composé **thermosensible** stérilisé par **filtration** (vitamine, antibiotique, urée…).' },
              { title: 'Couler les boîtes', text: 'Dans la zone d’asepsie, couler environ 15 à 20 mL par boîte de Pétri, laisser solidifier couvercle fermé, puis conserver au froid, boîtes retournées.' },
            ],
          },
          { type: 'definition', term: 'Inoculum', text: 'quantité de micro-organismes que l’on introduit dans un milieu lors de l’**ensemencement**. Son abondance influence la croissance : on peut l’**ajuster** pour le standardiser.' },
          { type: 'p', text: 'Pour **ensemencer un milieu liquide**, on prélève stérilement un peu de culture à l’anse (ou à la pipette), on la décharge dans le bouillon près de la flamme en frottant l’anse contre la paroi au niveau du liquide, on flambe le col du tube, on rebouche et on homogénéise.' },
          { type: 'definition', term: 'Turbidimétrie', text: 'mesure du **trouble** (turbidité) d’une suspension : plus il y a de cellules, plus la suspension est trouble. On ajuste un inoculum en comparant sa turbidité à un **étalon de McFarland** ; l’étalon 0,5 correspond à environ 1,5 × 10^8^ bactéries par mL.' },
          { type: 'p', text: 'Pour **ensemencer un milieu solide**, on utilise différents instruments stériles : l’**anse** (métallique flambée ou en plastique à usage unique), la **pipette Pasteur boutonnée** (pointe fermée et arrondie), l’**écouvillon** ou le **râteau** (étaleur). La technique de référence pour obtenir des colonies isolées est l’**isolement par la méthode des quadrants**.' },
          {
            type: 'steps',
            title: 'Réaliser un isolement par la méthode des quadrants',
            items: [
              { title: 'Quadrant 1', text: 'Prélever une petite quantité de culture à l’anse stérile et réaliser des stries serrées sur un quart de la gélose.' },
              { title: 'Flamber et tourner', text: 'Flamber l’anse, la laisser refroidir (contre la gélose stérile ou quelques secondes dans la zone d’asepsie), tourner la boîte d’un quart de tour.' },
              { title: 'Quadrant 2', text: 'Repasser 2 ou 3 fois dans la fin du quadrant 1, puis réaliser des stries serrées sur le deuxième quart.' },
              { title: 'Quadrants 3 et 4', text: 'Recommencer : flamber, tourner, partir de la fin du quadrant précédent. À chaque quadrant, l’anse emporte de moins en moins de cellules.' },
              { title: 'Terminer', text: 'Flamber l’anse, refermer, identifier la boîte et l’incuber retournée.' },
            ],
          },
          { type: 'figure', image: IMG.quadrants, caption: 'Isolement en quadrants : la quantité de cellules diminue d’un quadrant à l’autre ; dans le dernier, chaque cellule isolée donne une colonie isolée.', size: 'wide' },
          { type: 'warning', text: 'Ne pas creuser la gélose et ne pas repasser dans le quadrant 1 depuis les quadrants 3 ou 4 : on y reprendrait trop de cellules et on n’obtiendrait pas de colonies isolées.' },
          {
            type: 'table',
            caption: 'Définir les conditions d’incubation (exemples)',
            head: ['Micro-organismes', 'Température', 'Durée'],
            rows: [
              ['Bactéries d’origine humaine ou animale (ex. _E. coli_, staphylocoques)', '37 °C', '24 à 48 h'],
              ['Bactéries de l’environnement, flore des aliments', '30 °C', '24 à 72 h'],
              ['Levures et moisissures', '25 °C environ', '3 à 5 jours'],
              ['Micro-algues', 'Température ambiante, à la lumière', 'Plusieurs jours à quelques semaines'],
            ],
          },
          { type: 'p', text: 'On incube les boîtes **retournées** (couvercle en bas) dans une **étuve** réglée à la bonne température : la buée qui se forme sur le couvercle ne retombe pas sur la gélose, ce qui évite que les colonies s’étalent et se mélangent.' },
          { type: 'definition', term: 'Traçabilité', text: 'possibilité de retrouver l’origine et l’histoire d’un échantillon. Chaque boîte est identifiée **sur le fond** (jamais sur le couvercle, qu’on peut échanger), sur le bord pour ne pas gêner la lecture : nom ou groupe, date, échantillon ou souche, milieu, température d’incubation. Pour un tube, on écrit sur le verre, pas sur le bouchon.' },
          {
            type: 'retenir',
            items: [
              'Préparer un milieu : peser, dissoudre, répartir, stériliser selon le barème, ajouter les composés thermosensibles filtrés, couler.',
              'L’inoculum peut être ajusté par turbidimétrie avec un étalon de McFarland.',
              'L’isolement en quadrants dilue progressivement les cellules à la surface de la gélose jusqu’à obtenir des colonies isolées.',
              'Incubation : température et durée adaptées au micro-organisme, boîtes retournées, identifiées sur le fond.',
            ],
          },
        ],
      },

      {
        title: 'Lire une culture : colonies, pureté et contaminants',
        intro: 'Après incubation, l’observation à l’œil nu donne déjà beaucoup d’informations, à condition d’utiliser un vocabulaire précis.',
        blocks: [
          { type: 'p', text: 'En **milieu liquide**, on compare toujours le tube ensemencé à un **témoin** non ensemencé, qui doit rester limpide. La croissance se traduit par un **trouble homogène** (dans tout le tube), un **voile** en surface (souvent des aérobies stricts) ou un **dépôt** au fond du tube. Un bouillon resté limpide indique une absence de croissance.' },
          { type: 'definition', term: 'Colonie', text: 'amas de cellules **visible à l’œil nu**, formé à la surface ou dans un milieu solide par la multiplication d’une cellule (ou d’un petit groupe de cellules). Une colonie contient des millions, voire des milliards, de cellules issues de la même cellule de départ : c’est un **clone**.' },
          { type: 'figure', image: IMG.colonies, caption: 'Les caractères macroscopiques d’une colonie : forme et contour (vue de dessus), relief (vue de profil).', size: 'wide' },
          {
            type: 'table',
            caption: 'Décrire une colonie : les caractères macroscopiques',
            head: ['Caractère', 'Vocabulaire'],
            rows: [
              ['Taille', 'Diamètre en mm ; colonie **punctiforme** si moins de 1 mm.'],
              ['Forme', 'Ronde, irrégulière, filamenteuse.'],
              ['Contour (bord)', 'Régulier, ondulé, lobé, dentelé.'],
              ['Relief (élévation)', 'Plate, légèrement bombée, bombée, ombiliquée (creusée au centre).'],
              ['Surface et aspect', 'Lisse ou rugueuse ; brillante ou mate.'],
              ['Opacité', 'Opaque, translucide ou transparente.'],
              ['Couleur', 'Crème, blanche, jaune, orangée… ; un pigment peut diffuser dans la gélose.'],
              ['Consistance', 'Crémeuse, sèche, muqueuse (filante quand on la touche à l’anse).'],
            ],
          },
          { type: 'example', title: 'description complète', text: '« Colonies de 2 mm de diamètre, rondes, à contour régulier, bombées, lisses, brillantes, opaques, de couleur crème et de consistance crémeuse. »' },
          { type: 'warning', text: 'On ne sent jamais une culture : on risquerait d’inhaler des micro-organismes. L’observation se fait boîte fermée autant que possible.' },
          { type: 'definition', term: 'Culture pure', text: 'culture qui ne contient qu’**un seul type** de micro-organisme. Sur un isolement, toutes les colonies ont alors le même aspect. Une culture pure est indispensable pour identifier un micro-organisme.' },
          { type: 'figure', image: IMG.contamine, caption: 'Un isolement contaminé : les colonies crème sont nombreuses et identiques le long des stries, mais deux grandes colonies jaunes et une moisissure gris-vert, d’aspect différent, sont des contaminants.', size: 'wide' },
          {
            type: 'list',
            title: 'Repérer un contaminant',
            items: [
              'Une colonie d’**aspect différent** de la majorité (couleur, taille, forme, relief, surface).',
              'Une colonie située **en dehors des stries** d’ensemencement : elle provient souvent de l’air ou d’une goutte tombée du couvercle.',
              'Une moisissure (colonie duveteuse) sur un isolement de bactéries.',
            ],
          },
          { type: 'p', text: 'Pour obtenir une culture pure, on prélève **une seule colonie bien isolée**, d’aspect caractéristique, et on la **repique** sur un nouveau milieu (nouvel isolement).' },
          {
            type: 'retenir',
            items: [
              'En milieu liquide : trouble homogène, voile ou dépôt, à comparer à un témoin limpide.',
              'Une colonie décrite avec précision : taille, forme, contour, relief, surface, opacité, couleur, consistance.',
              'Une culture pure ne présente qu’un seul type de colonies ; une colonie d’aspect différent ou hors des stries signale un contaminant.',
              'On purifie une souche en repiquant une colonie bien isolée.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des documents et des résultats de TP. Réponds d’abord seul(e), en phrases complètes : tu peux écrire ta réponse directement sous la question. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Mettre en évidence les micro-organismes de l’environnement',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Argumenter'],
        context: 'Pour comprendre l’intérêt de l’asepsie, une classe de Première STL a réalisé des prélèvements dans le laboratoire, sur gélose ordinaire. Les boîtes ont été incubées 48 h à 30 °C, puis observées sans être ouvertes.',
        documents: [
          {
            label: 'Document 1',
            title: 'Résultats obtenus par la classe',
            blocks: [
              {
                type: 'table',
                head: ['Boîte', 'Prélèvement', 'Résultat après 48 h'],
                rows: [
                  ['1', 'Boîte fermée, non ouverte', '0 colonie'],
                  ['2', 'Boîte ouverte 30 min sur la paillasse (air)', '14 colonies de 4 aspects différents, dont une moisissure'],
                  ['3', 'Empreinte de doigts avant lavage des mains', 'Plus de 100 colonies, au moins 5 aspects différents'],
                  ['4', 'Empreinte de doigts après lavage au savon et friction hydroalcoolique', '6 colonies'],
                  ['5', 'Écouvillonnage de la paillasse avant désinfection', '45 colonies'],
                  ['6', 'Écouvillonnage de la paillasse après désinfection', '1 colonie'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Quel est le rôle de la boîte 1 ? Que permet de conclure son résultat ?', hint: 'Une boîte qui n’a reçu aucun prélèvement s’appelle un témoin.', answer: 'La boîte 1 est un **témoin** : elle vérifie que le milieu était stérile au départ. Elle ne présente aucune colonie : les colonies observées dans les autres boîtes proviennent donc bien des prélèvements, et non du milieu lui-même.' },
          { text: 'Que montrent les boîtes 2 et 3 sur la présence des micro-organismes dans l’environnement ?', answer: 'Des micro-organismes sont présents dans l’air (boîte 2) et en très grand nombre sur la peau (boîte 3). Les aspects différents des colonies montrent qu’il s’agit de plusieurs espèces (bactéries et moisissures).' },
          { text: 'Compare les boîtes 3 et 4, puis 5 et 6. Quelles mesures de prévention ces résultats justifient-ils ?', answer: 'Le lavage des mains fait passer de plus de 100 à 6 colonies ; la désinfection de la paillasse, de 45 à 1 colonie. Ces résultats justifient le **lavage des mains** avant et après la manipulation et la **désinfection de la paillasse** avant et après le travail.' },
          { text: 'La boîte 6 contient encore une colonie. Explique pourquoi cela ne remet pas en cause l’efficacité de la désinfection.', hint: 'Relis la différence entre désinfection et stérilisation.', answer: 'La désinfection élimine la grande majorité des micro-organismes indésirables, mais elle n’est pas une stérilisation : quelques micro-organismes (par exemple des spores) peuvent survivre. Le résultat est cohérent avec une désinfection efficace.' },
          { text: 'Pourquoi les boîtes ont-elles été observées sans être ouvertes, puis détruites à l’autoclave ?', answer: 'Les prélèvements de l’environnement contiennent des micro-organismes inconnus, peut-être pathogènes, et des moisissures dont les spores se dispersent dans l’air. Ouvrir les boîtes exposerait le manipulateur (inhalation, contact) et contaminerait le laboratoire. L’autoclave détruit tous les micro-organismes avant l’élimination.' },
        ],
      },
      {
        title: 'Comparer des ensemencements avec et sans asepsie',
        duration: '20 min',
        skills: ['Raisonner', 'Analyser un risque'],
        context: 'Quatre élèves ont isolé la même culture pure d’_Escherichia coli_ K-12 (colonies crème, rondes et lisses) sur gélose ordinaire, dans des conditions différentes.',
        documents: [
          {
            label: 'Document 2',
            title: 'Conditions d’ensemencement et résultats après 24 h à 37 °C',
            blocks: [
              {
                type: 'table',
                head: ['Élève', 'Conditions', 'Résultat'],
                rows: [
                  ['A', 'Près de la flamme, anse flambée, couvercle maintenu au-dessus de la boîte', 'Uniquement des colonies crème identiques'],
                  ['B', 'Loin de la flamme, boîte laissée ouverte pendant toute la préparation', 'Colonies crème + 3 colonies d’aspects différents, dont 2 en dehors des stries'],
                  ['C', 'Près de la flamme, mais anse posée sur la paillasse avant usage, sans flambage', 'Colonies crème + colonies jaunes mélangées le long des stries'],
                  ['D', 'Près de la flamme, couvercle posé à l’envers sur la paillasse pendant l’ensemencement', 'Colonies crème + 2 colonies d’aspects différents'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Quel élève a respecté les règles d’asepsie ? Justifie à partir de son résultat.', answer: 'L’élève A : il n’obtient qu’un seul type de colonies, identiques à celles de la souche de départ. Sa culture est restée pure.' },
          { text: 'Pour chacun des élèves B, C et D, identifie l’erreur commise et l’origine probable des contaminants.', hint: 'Regarde où se trouvent les colonies contaminantes : sur les stries ou en dehors ?', answer: 'B : il a travaillé hors de la zone d’asepsie et laissé la boîte ouverte ; les contaminants viennent de l’**air** (d’où des colonies en dehors des stries). C : l’anse non stérile a été contaminée par la **paillasse** ; les contaminants ont été déposés avec l’inoculum, donc le long des stries. D : le couvercle posé sur la paillasse a été contaminé par la **surface**, puis des micro-organismes sont tombés dans la boîte.' },
          { text: 'Dans cette situation, quel est le risque pour le produit, et quel est le risque pour le manipulateur ?', answer: 'Pour le produit : une contamination qui rend la culture impure et le résultat faux. Pour le manipulateur : une exposition aux micro-organismes de la culture et aux contaminants inconnus (contact avec les mains, projection, inhalation). Ce sont deux risques différents, contre lesquels on prend des mesures différentes.' },
          { text: 'Cite deux mesures qui protègent le manipulateur et l’environnement à la fin de cette séance.', answer: 'Par exemple : flamber l’anse métallique après usage (ou jeter l’anse à usage unique dans un conteneur DASRI), autoclaver les cultures avant élimination, désinfecter la paillasse, se laver les mains avant de sortir.' },
        ],
      },
      {
        title: 'Choisir un milieu adapté aux besoins d’un micro-organisme',
        duration: '30 min',
        skills: ['Exploiter des résultats', 'Déduire', 'Choisir'],
        context: 'Pour déterminer les besoins nutritifs de trois micro-organismes, on les a ensemencés sur trois milieux de composition connue, puis incubés à la lumière ou à l’obscurité.',
        documents: [
          {
            label: 'Document 3',
            title: 'Croissance sur trois milieux (+ : croissance ; − : pas de croissance)',
            blocks: [
              {
                type: 'table',
                head: ['Micro-organisme', 'Milieu minéral, lumière', 'Milieu minéral, obscurité', 'Minéral + glucose, obscurité', 'Milieu complexe (peptones, extrait de levure, glucose), obscurité'],
                rows: [
                  ['Micro-algue _Chlorella_', '+', '−', 'Non testé', 'Non testé'],
                  ['_Escherichia coli_', '−', '−', '+', '+'],
                  ['_Lactobacillus_ (bactérie lactique)', '−', '−', '−', '+'],
                ],
              },
            ],
          },
          {
            label: 'Document 4',
            title: 'Influence de la température et du NaCl (gélose ordinaire, 24 h)',
            blocks: [
              {
                type: 'table',
                head: ['Micro-organisme', '4 °C', '20 °C', '37 °C', '55 °C', 'NaCl 0,5 %', 'NaCl 7,5 %'],
                rows: [
                  ['_Escherichia coli_', '−', '+', '+++', '−', '+++', '−'],
                  ['_Staphylococcus epidermidis_', '−', '+', '+++', '−', '+++', '++'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Déduis du document 3 la source d’énergie et la source de carbone de la micro-algue. Nomme son type trophique.', hint: 'Sur le milieu minéral, il n’y a aucune molécule organique. Qu’est-ce qui change entre la lumière et l’obscurité ?', answer: 'La micro-algue pousse sur un milieu sans molécule organique, uniquement à la lumière : sa source d’énergie est la **lumière** et sa source de carbone le **CO~2~** (carbone minéral). Elle est **photoautotrophe**.' },
          { text: 'Même question pour _Escherichia coli_. Est-ce un micro-organisme exigeant ?', answer: '_E. coli_ ne pousse pas sur milieu minéral mais pousse dès qu’on ajoute du glucose, à l’obscurité : le glucose lui sert de source d’énergie et de carbone. Elle est **chimiohétérotrophe**. Elle n’a besoin d’aucun facteur de croissance : elle est **non exigeante**.' },
          { text: 'Explique pourquoi _Lactobacillus_ ne pousse que sur le milieu complexe.', answer: '_Lactobacillus_ ne pousse pas sur minéral + glucose : le glucose ne suffit pas. Le milieu complexe apporte en plus des **facteurs de croissance** (vitamines, acides aminés de l’extrait de levure et des peptones). _Lactobacillus_ est un micro-organisme **exigeant**.' },
          { text: 'À l’aide du document 4, indique la température d’incubation à choisir pour ces deux bactéries, et leur classement vis-à-vis de la température.', answer: 'Leur croissance est maximale à 37 °C, nulle à 4 °C et à 55 °C : ce sont des bactéries **mésophiles**. On les incube à 37 °C.' },
          { text: 'Quelle bactérie est halotolérante ? Quel milieu sélectif cette propriété permet-elle d’utiliser ?', answer: '_Staphylococcus epidermidis_ pousse encore avec 7,5 % de NaCl, contrairement à _E. coli_ : elle est **halotolérante**. Cette propriété est exploitée par la gélose de **Chapman** (75 g·L^-1^ de NaCl, soit 7,5 %), sélective des staphylocoques.' },
        ],
      },
      {
        title: 'Exploiter un milieu sélectif et d’orientation',
        duration: '25 min',
        skills: ['Analyser une composition', 'Interpréter'],
        context: 'Une entreprise de cosmétiques veut savoir si des staphylocoques sont présents sur la peau de ses manipulateurs. Un prélèvement cutané a été ensemencé sur deux géloses, incubées 24 h à 37 °C.',
        documents: [
          { label: 'Document 5', title: 'Résultats : gélose ordinaire (à gauche) et gélose de Chapman (à droite)', image: IMG.chapman, caption: 'Le même prélèvement ensemencé sur deux milieux.' },
          { label: 'Document 6', title: 'Extrait de la fiche technique de la gélose de Chapman', text: ['Composition pour 1 L : peptone 10 g ; extrait de viande 1 g ; chlorure de sodium 75 g ; mannitol 10 g ; rouge de phénol 0,025 g ; agar 15 g ; pH 7,4.', 'Le rouge de phénol est rouge à pH neutre ou basique et jaune à pH inférieur à 6,8.'] },
        ],
        questions: [
          { text: 'Dans la composition, repère l’agent sélectif, le substrat fermentescible et l’indicateur de pH.', answer: 'Agent sélectif : le chlorure de sodium à 75 g·L^-1^. Substrat fermentescible : le mannitol. Indicateur de pH : le rouge de phénol.' },
          { text: 'Compare les deux boîtes. Quel caractère du milieu de Chapman ce résultat illustre-t-il ?', answer: 'La gélose ordinaire porte de nombreuses colonies d’aspects variés ; la gélose de Chapman en porte beaucoup moins, de deux types seulement. Le NaCl a inhibé la plupart des micro-organismes : c’est le caractère **sélectif** du milieu.' },
          { text: 'Explique l’apparition du halo jaune autour de certaines colonies.', hint: 'Enchaîne : fermentation → acides → pH → indicateur.', answer: 'Ces bactéries fermentent le mannitol ; la fermentation produit des acides qui font baisser le pH autour des colonies. Quand le pH devient inférieur à 6,8, le rouge de phénol vire au jaune : les colonies sont **mannitol +**. Les colonies blanches entourées d’un milieu resté rouge sont **mannitol −**.' },
          { text: 'Le responsable qualité conclut : « Les colonies jaunes sont des _Staphylococcus aureus_. » Cette conclusion est-elle justifiée ? Que faut-il faire ?', answer: 'Non : le milieu de Chapman est un milieu d’**orientation**. Les colonies jaunes sont des micro-organismes halotolérants qui fermentent le mannitol, ce qui oriente vers _S. aureus_, mais d’autres staphylocoques ont le même comportement. Il faut prélever une colonie jaune bien isolée, la purifier, puis réaliser une identification (observation microscopique et autres caractères).' },
        ],
      },
      {
        title: 'Lire une culture et repérer un contaminant',
        duration: '25 min',
        skills: ['Observer', 'Décrire', 'Conclure'],
        context: 'Un élève a réalisé un isolement en quadrants d’une souche de laboratoire, ainsi que des cultures en bouillon et en gélose profonde.',
        documents: [
          { label: 'Document 7', title: 'L’isolement après 24 h d’incubation', image: IMG.contamine, caption: 'Isolement en quadrants sur gélose ordinaire.' },
          {
            label: 'Document 8',
            title: 'Cultures en milieu liquide et en gélose profonde',
            blocks: [
              {
                type: 'table',
                head: ['Tube', 'Observation après incubation'],
                rows: [
                  ['Bouillon témoin (non ensemencé)', 'Limpide'],
                  ['Bouillon ensemencé avec la souche X', 'Trouble homogène dans tout le tube'],
                  ['Bouillon ensemencé avec la souche Y', 'Milieu limpide, voile épais à la surface'],
                  ['Gélose profonde, souche X', 'Colonies sur toute la hauteur, plus nombreuses en haut'],
                  ['Gélose profonde, souche Y', 'Colonies uniquement à la surface'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Décris les colonies majoritaires du document 7 avec le vocabulaire des caractères macroscopiques.', hint: 'Taille, forme, contour, relief, surface, opacité, couleur.', answer: 'Colonies d’environ 2 mm de diamètre, rondes, à contour régulier, bombées, lisses, brillantes, opaques, de couleur crème.' },
          { text: 'Cet isolement est-il pur ? Justifie en repérant précisément les contaminants.', answer: 'Non. Deux grandes colonies jaunes, plates, à contour lobé et d’aspect sec, et une colonie duveteuse gris-vert (une moisissure) ont un aspect différent des colonies crème : ce sont des contaminants. Elles sont situées en dehors des stries, ce qui suggère une contamination par l’air.' },
          { text: 'Que doit faire l’élève pour obtenir une culture pure de sa souche ?', answer: 'Prélever une seule colonie crème bien isolée, loin des contaminants, et la repiquer par un nouvel isolement en quadrants, en respectant rigoureusement l’asepsie.' },
          { text: 'Interprète les résultats du document 8 : quel est le type respiratoire probable des souches X et Y ?', answer: 'La souche X trouble tout le bouillon et pousse sur toute la hauteur de la gélose profonde, mieux en haut : elle est **aéro-anaérobie facultative**. La souche Y ne pousse qu’au contact de l’air (voile en surface, colonies uniquement en surface) : elle est **aérobie stricte**.' },
          { text: 'Pourquoi faut-il toujours un bouillon témoin non ensemencé ?', answer: 'Le témoin vérifie que le milieu était stérile et sert de référence de limpidité : on peut alors attribuer le trouble des autres tubes à la croissance de la souche ensemencée.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Stérile = sans micro-organisme vivant ; aseptique = qui empêche l’apport de micro-organismes. Désinfection = momentanée, sur une surface ; stérilisation = destruction de tous les micro-organismes, spores comprises.',
      'On manipule dans la zone d’asepsie de la flamme, avec du matériel stérile ; certaines mesures protègent la culture, d’autres le manipulateur et l’environnement.',
      'L’autoclave stérilise par la chaleur humide sous pression : barème courant 121 °C pendant 15 à 20 min ; le manomètre indique la pression. Les composés thermosensibles sont stérilisés par filtration.',
      'Un milieu apporte eau, énergie, carbone, azote, minéraux (et facteurs de croissance pour les exigeants). Photoautotrophes : milieu minéral + lumière ; chimiohétérotrophes : milieu glucosé ou ordinaire.',
      'Température, pH, NaCl et dioxygène sont adaptés au micro-organisme ; la gélose profonde révèle le type respiratoire.',
      'Un milieu sélectif contient des agents inhibiteurs ; un milieu d’orientation par acidification contient un glucide fermentescible et un indicateur de pH.',
      'L’isolement en quadrants donne des colonies isolées ; une colonie se décrit par ses caractères macroscopiques ; une colonie d’aspect différent signale un contaminant.',
    ],
    method: {
      title: 'Choisir un milieu à partir de sa composition',
      steps: [
        'Repérer les **sources nutritives** (peptones, extraits, glucose, sels minéraux) et vérifier qu’elles conviennent au type trophique et aux exigences du micro-organisme.',
        'Repérer les **agents sélectifs** (NaCl concentré, sels biliaires, cristal violet, antibiotique, pH acide) : quels micro-organismes sont inhibés ?',
        'Repérer le **substrat fermentescible** et l’**indicateur de pH** : quelle couleur prendront les colonies qui fermentent ?',
        'Vérifier les **conditions physico-chimiques** (pH du milieu, température et durée d’incubation) indiquées par la fiche technique.',
      ],
    },
    vocabulary: [
      { term: 'Asepsie', definition: 'Ensemble des mesures et des gestes qui empêchent l’apport de micro-organismes dans une manipulation.' },
      { term: 'Stérile', definition: 'Qui ne contient aucun micro-organisme vivant, même sous forme de spore.' },
      { term: 'Stérilisation', definition: 'Destruction ou élimination de tous les micro-organismes, spores comprises ; résultat durable si le conditionnement est intact.' },
      { term: 'Désinfection', definition: 'Élimination momentanée des micro-organismes indésirables d’une surface inerte.' },
      { term: 'Barème de stérilisation', definition: 'Couple température / durée d’un cycle de stérilisation (ex. 121 °C – 20 min).' },
      { term: 'Autoclave', definition: 'Appareil de stérilisation par la vapeur d’eau sous pression.' },
      { term: 'Photoautotrophe', definition: 'Qui tire son énergie de la lumière et son carbone du CO~2~.' },
      { term: 'Chimiohétérotrophe', definition: 'Qui tire son énergie et son carbone de molécules organiques.' },
      { term: 'Facteur de croissance', definition: 'Molécule organique indispensable qu’un micro-organisme exigeant ne sait pas fabriquer.' },
      { term: 'Milieu sélectif', definition: 'Milieu contenant des agents inhibiteurs qui ne laissent pousser que certains micro-organismes.' },
      { term: 'Milieu d’orientation', definition: 'Milieu révélant un caractère visible des colonies, par exemple la fermentation d’un glucide grâce à un indicateur de pH.' },
      { term: 'Inoculum', definition: 'Quantité de micro-organismes introduite dans un milieu lors de l’ensemencement.' },
      { term: 'Colonie', definition: 'Amas de cellules visible à l’œil nu, issu de la multiplication d’une cellule (ou d’un petit groupe de cellules) sur un milieu solide.' },
      { term: 'Culture pure', definition: 'Culture ne contenant qu’un seul type de micro-organisme.' },
      { term: 'Contaminant', definition: 'Micro-organisme indésirable introduit accidentellement dans une culture.' },
    ],
    mistakes: [
      { wrong: 'Dire qu’une paillasse désinfectée est stérile.', right: 'La désinfection est momentanée et ne détruit pas tous les micro-organismes : la paillasse est désinfectée, pas stérile.' },
      { wrong: 'Ouvrir l’autoclave dès la fin du palier.', right: 'On attend que le manomètre revienne à 0 : ouvrir sous pression expose à des brûlures et à des projections.' },
      { wrong: 'Stériliser une solution de vitamines à l’autoclave.', right: 'Un composé thermosensible se stérilise par filtration (0,22 µm), puis s’ajoute au milieu refroidi.' },
      { wrong: 'Écrire le nom de l’échantillon sur le couvercle de la boîte.', right: 'On identifie la boîte sur le fond : le couvercle peut être échangé.' },
      { wrong: 'Conclure qu’une colonie jaune sur Chapman est _Staphylococcus aureus_.', right: 'Chapman est un milieu d’orientation : la colonie est mannitol + et halotolérante ; l’identification demande d’autres caractères.' },
      { wrong: 'Incuber les boîtes couvercle vers le haut.', right: 'On les incube retournées pour que la buée ne retombe pas sur la gélose.' },
    ],
    quiz: [
      { question: 'Une boîte de gélose neuve, encore fermée dans son emballage, est :', choices: ['Aseptique', 'Désinfectée', 'Stérile', 'Sélective'], answer: 2, explanation: 'Elle ne contient aucun micro-organisme vivant : elle est stérile. « Aseptique » qualifie une technique ou des conditions de travail.' },
      { question: 'Le barème de stérilisation le plus courant pour un milieu de culture à l’autoclave est :', choices: ['121 °C pendant 15 à 20 min', '100 °C pendant 5 min', '180 °C pendant 30 min', '37 °C pendant 24 h'], answer: 0, explanation: 'La vapeur d’eau sous pression atteint 121 °C ; 15 à 20 minutes suffisent à détruire même les spores. 180 °C correspond à la chaleur sèche (four Pasteur).' },
      { question: 'Sur l’autoclave, l’élément qui indique la pression est :', choices: ['La soupape de sécurité', 'Le robinet de purge', 'Le manomètre', 'La résistance chauffante'], answer: 2, explanation: 'Le manomètre indique la pression ; la soupape évite la surpression ; la purge chasse l’air.' },
      { question: 'Une micro-algue qui pousse sur un milieu minéral uniquement à la lumière est :', choices: ['Chimiohétérotrophe', 'Photoautotrophe', 'Exigeante', 'Anaérobie stricte'], answer: 1, explanation: 'Elle tire son énergie de la lumière et son carbone du CO~2~ : elle est photoautotrophe.' },
      { question: 'Un micro-organisme qui ne pousse que si le milieu contient des vitamines est :', choices: ['Non exigeant', 'Exigeant', 'Halotolérant', 'Thermophile'], answer: 1, explanation: 'Les vitamines sont des facteurs de croissance : un micro-organisme qui en a besoin est exigeant.' },
      { question: 'Dans la gélose de Chapman, le chlorure de sodium (75 g·L^-1^) joue le rôle :', choices: ['De source d’énergie', 'D’indicateur de pH', 'De substrat fermentescible', 'D’agent sélectif'], answer: 3, explanation: 'À cette concentration, le NaCl inhibe la plupart des bactéries et ne laisse pousser que les halotolérantes, comme les staphylocoques.' },
      { question: 'Sur Chapman, une colonie entourée d’un halo jaune :', choices: ['Fermente le mannitol', 'Est forcément Staphylococcus aureus', 'Est un contaminant', 'Est morte'], answer: 0, explanation: 'La fermentation du mannitol acidifie le milieu ; le rouge de phénol vire au jaune. C’est une orientation, pas une identification.' },
      { question: 'En gélose profonde, une bactérie qui pousse uniquement en surface est :', choices: ['Anaérobie stricte', 'Aéro-anaérobie facultative', 'Aérobie stricte', 'Microaérophile'], answer: 2, explanation: 'Elle ne se développe que là où le dioxygène est abondant : elle est aérobie stricte.' },
      { question: 'Pourquoi incube-t-on les boîtes de Pétri retournées ?', choices: ['Pour gagner de la place dans l’étuve', 'Pour que la buée ne tombe pas sur la gélose', 'Pour que les colonies soient plus grosses', 'Pour lire plus facilement l’étiquette'], answer: 1, explanation: 'Des gouttes tombant du couvercle feraient s’étaler les colonies, qui se mélangeraient.' },
      { question: 'Sur un isolement, une colonie de forme et de couleur différentes, située hors des stries, est probablement :', choices: ['Une colonie isolée de la souche', 'Un contaminant', 'Une colonie mutante', 'Un dépôt de milieu'], answer: 1, explanation: 'Son aspect différent et sa position hors des stries indiquent un contaminant, souvent venu de l’air.' },
    ],
    exercises: [
      {
        title: 'Lire un cycle d’autoclave',
        statement: ['La fiche technique d’un bouillon indique : « Stériliser 15 min à 121 °C ». Au cours du cycle, un élève note : purge ouverte jusqu’à l’émission d’un jet de vapeur continu ; purge fermée ; 121 °C atteints à 10 h 05 ; chauffage arrêté à 10 h 20.', 'a) Le barème a-t-il été respecté ? b) À quoi sert la purge ? c) À partir de quand pourra-t-on ouvrir l’autoclave ?'],
        answer: ['a) Oui : la température de 121 °C a été maintenue de 10 h 05 à 10 h 20, soit 15 min.', 'b) La purge chasse l’air de la cuve ; sans elle, l’air restant empêcherait d’atteindre 121 °C pour la pression affichée.', 'c) Quand le manomètre sera revenu à 0, après refroidissement : ouvrir avant exposerait à des brûlures et à des projections.'],
      },
      {
        title: 'Analyser la composition d’un milieu',
        statement: ['La gélose de MacConkey contient (pour 1 L) : peptones 20 g ; lactose 10 g ; sels biliaires 1,5 g ; cristal violet 0,001 g ; rouge neutre 0,03 g ; NaCl 5 g ; agar 13,5 g. Le rouge neutre vire au rouge en milieu acide (pH inférieur à 6,8 environ).', 'a) Repère les agents sélectifs, le substrat fermentescible et l’indicateur de pH. b) Quelle sera la couleur d’une colonie qui fermente le lactose ? Justifie.'],
        answer: ['a) Agents sélectifs : sels biliaires et cristal violet (ils inhibent les bactéries Gram positif). Substrat fermentescible : lactose. Indicateur de pH : rouge neutre.', 'b) Une bactérie lactose + fermente le lactose et produit des acides : le pH baisse, le rouge neutre vire au rouge. Les colonies sont roses à rouges.'],
      },
      {
        title: 'Organiser une recherche',
        statement: 'Un laboratoire veut isoler des staphylocoques à partir d’un fromage. Propose un milieu, les conditions d’incubation et la façon d’identifier la boîte. Indique enfin ce qu’il faudra faire d’une colonie jaune bien isolée.',
        answer: ['Milieu : gélose de Chapman, sélective (NaCl 75 g·L^-1^) et d’orientation (mannitol + rouge de phénol).', 'Incubation : 37 °C, 24 à 48 h, boîte retournée.', 'Identification de la boîte sur le fond : nom, date, échantillon « fromage », milieu, température.', 'Une colonie jaune bien isolée sera repiquée pour obtenir une culture pure, puis caractérisée pour être identifiée.'],
      },
    ],
    selfCheck: [
      'Je sais distinguer stérile et aseptique, désinfection et stérilisation.',
      'Je sais organiser mon poste de travail et justifier chaque geste d’asepsie.',
      'Je sais repérer le manomètre, la soupape, la purge et lire un barème de stérilisation.',
      'Je sais relier le type trophique d’un micro-organisme à ses besoins et choisir un milieu adapté.',
      'Je sais repérer dans une composition un agent sélectif, un substrat fermentescible et un indicateur de pH.',
      'Je sais réaliser un isolement en quadrants et définir les conditions d’incubation.',
      'Je sais décrire une colonie et repérer un contaminant sur un isolement.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Risques biologiques : ce qu’il faut retenir — INRS', url: 'https://www.inrs.fr/risques/biologiques/ce-qu-il-faut-retenir.html' },
      { title: 'Autoclave — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Autoclave' },
      { title: 'Milieu de culture — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Milieu_de_culture' },
    ],
  },
};

export default lesson;
