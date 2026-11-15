import { img } from '../media';
import bioreacteur from '../../../assets/courses/premiere/c1-decouverte-biotechnologies/bioreacteur.webp';
import histoire from '../../../assets/courses/premiere/c1-decouverte-biotechnologies/histoire.webp';
import insuline from '../../../assets/courses/premiere/c1-decouverte-biotechnologies/insuline.webp';
import poissonZebre from '../../../assets/courses/premiere/c1-decouverte-biotechnologies/poisson-zebre.webp';
import biotechDomains from '../../../assets/courses/premiere/c1/biotech-domains.webp';
import globulesRouges from '../../../assets/courses/premiere/c1/globules-rouges.png';
import hcbLogo from '../../../assets/courses/premiere/c1/hcb-logo.png';
import futurolSchema from '../../../assets/courses/premiere/c1/futurol-schema.jpg';
import videoQr from '../../../assets/courses/premiere/c1/video-qr.png';

const IMG = {
  bioreacteur: img(bioreacteur, 'Bioréacteur de laboratoire en verre contenant une culture de levures beige et mousseuse, entouré de deux erlenmeyers de culture bouchés au coton et d’une boîte de Petri de colonies ; une main gantée ajuste un tuyau.', 'photo', 1536, 1024),
  histoire: img(histoire, 'Planche au crayon de six objets alignés : pain et amphore, microscope à une lentille de Leeuwenhoek, ballon à col de cygne de Pasteur, boîte de Petri avec une moisissure, double hélice d’ADN, bioréacteur industriel en acier.', 'pencil', 1400, 933),
  insuline: img(insuline, 'Schéma de la production d’insuline par génie génétique : cellule humaine et gène de l’insuline, plasmide, bactérie génétiquement modifiée, fermenteur, insuline purifiée.', 'schema', 1400, 933),
  zebre: img(poissonZebre, 'Planche au crayon d’un poisson zèbre adulte rayé et d’une larve transparente dont on voit l’œil, le cœur, la réserve vitelline et les muscles.', 'pencil', 1400, 933),
  domaines: img(biotechDomains, 'Schéma des cinq domaines des biotechnologies autour de la définition : rouges (santé), jaunes (environnement), vertes (agriculture et alimentation), blanches (industrie), bleues (milieu marin).', 'schema', 2500, 1487),
  globules: img(globulesRouges, 'Schéma de la fabrication de globules rouges in vitro : prélèvement de cellules souches dans l’os, culture en boîte de Petri avec facteurs de croissance, injection à la souris, puis essai chez un donneur bénévole.', 'schema', 1355, 738),
  hcb: img(hcbLogo, 'Logo du Haut Conseil des biotechnologies.', 'schema', 526, 266),
  futurol: img(futurolSchema, 'Schéma du procédé Futurol : paille prétraitée, hydrolyse enzymatique par des cellulases produites par un champignon, sucres, fermentation par des levures, distillation, éthanol utilisé comme carburant.', 'schema', 751, 489),
  qr: img(videoQr, 'QR code menant à la vidéo « La biotechnologie dans notre vie ».', 'schema', 300, 300),
};

const VIDEO_URL = 'https://www.youtube.com/watch?v=x7O9ErPWTmw';

const lesson = {
  version: 2,
  id: 'c1-decouverte-biotechnologies',
  duration: 'Environ 3 séances (travail sur documents, cours et débat)',
  hook: {
    image: IMG.bioreacteur,
    question: 'Qu’ont en commun une baguette de pain, un médicament contre le diabète, un jean délavé et une station d’épuration ?',
    text: 'Tous font travailler le vivant pour nous. Des levures font lever la pâte, des bactéries modifiées fabriquent l’insuline, des enzymes délavent le jean, des micro-organismes nettoient les eaux usées. Bienvenue en biotechnologies ! Dans ce premier chapitre, tu découvres ce que recouvre ce mot, d’où viennent ces techniques, dans quels domaines elles changent notre vie et quelles questions elles posent à la société.',
  },
  objectives: [
    'Définir les biotechnologies et reconnaître une application biotechnologique dans un document.',
    'Situer les grandes étapes de l’histoire des biotechnologies, des fermentations traditionnelles au génie génétique.',
    'Citer les disciplines scientifiques mobilisées par les biotechnologies et préciser leur apport.',
    'Nommer les cinq domaines des biotechnologies et illustrer chacun par un exemple.',
    'M’interroger sur les enjeux éthiques d’une application et distinguer une opinion d’un point de vue argumenté.',
    'Identifier les étapes d’une démarche de recherche : besoin, question, hypothèse, expérience avec témoin, résultats.',
  ],
  prerequisites: [
    'La cellule est l’unité de base du vivant ; l’ADN porte l’information génétique (collège, seconde).',
    'Les micro-organismes (bactéries, levures, moisissures) sont des êtres vivants microscopiques.',
  ],
  program: [
    'Situer les évolutions majeures des biotechnologies dans une perspective historique.',
    'Illustrer, par un exemple, une application des biotechnologies dans chaque domaine : blanches (procédés industriels), bleues (biodiversité marine), vertes (agriculture), rouges (santé), jaunes (protection de l’environnement).',
    'S’interroger sur les aspects éthiques de l’application des biotechnologies sur les êtres vivants et l’environnement (bioéthique ; opinion et point de vue).',
    'Collaborer au sein du groupe ; formuler un questionnement technologique ou scientifique à partir d’un besoin.',
    'Proposer une expérience, mettre en œuvre une procédure expérimentale (hypothèse, procédure, témoin, conditions expérimentales), exploiter les résultats et rendre compte par un travail écrit ou oral.',
  ],

  course: {
    parts: [
      {
        title: 'Qu’est-ce que les biotechnologies ?',
        intro: 'Le mot vient du grec : _bios_, la vie, et _technologia_, l’étude des techniques. Les biotechnologies, ce sont donc les techniques qui mettent le vivant au service de l’être humain.',
        blocks: [
          { type: 'definition', term: 'Biotechnologies', text: 'ensemble des techniques qui utilisent des **êtres vivants** (micro-organismes, plantes, animaux), des **cellules**, des **molécules issues du vivant** (enzymes, ADN, anticorps) ou les **propriétés du vivant**, pour produire des **biens** ou des **services** utiles à l’être humain.' },
          {
            type: 'flow',
            title: 'Le principe de toute biotechnologie',
            steps: [
              { title: 'Un besoin', text: 'se soigner, se nourrir, produire, dépolluer' },
              { title: 'Un « outil » vivant', text: 'organisme, cellule, molécule du vivant' },
              { title: 'Un procédé maîtrisé', text: 'culture, fermentation, extraction, modification' },
              { title: 'Un bien ou un service', text: 'aliment, médicament, diagnostic, énergie, eau propre' },
            ],
          },
          { type: 'p', text: 'L’« outil » vivant peut se situer à différentes échelles : un **organisme entier** (une levure, une bactérie, une plante), une **cellule** cultivée en laboratoire, ou seulement une **molécule** produite par le vivant, comme une enzyme.' },
          {
            type: 'table',
            caption: 'Le vivant comme outil, à toutes les échelles',
            head: ['Échelle', 'Exemple d’outil vivant', 'Application'],
            rows: [
              ['Organisme', 'Levure _Saccharomyces cerevisiae_', 'Pain, bière, vin, bioéthanol'],
              ['Organisme', 'Bactéries lactiques', 'Yaourts, fromages'],
              ['Cellule', 'Cellules souches du sang cultivées en laboratoire', 'Globules rouges fabriqués in vitro'],
              ['Molécule', 'Enzyme lactase', 'Lait sans lactose'],
              ['Gène', 'Gène de l’insuline humaine introduit dans une bactérie', 'Insuline pour les personnes diabétiques'],
            ],
          },
          { type: 'definition', term: 'Micro-organisme', text: 'être vivant microscopique, le plus souvent formé d’une seule cellule : bactérie, levure, moisissure, micro-algue. Faciles à cultiver et très rapides à se multiplier, les micro-organismes sont les « ouvriers » les plus utilisés en biotechnologies.' },
          {
            type: 'example',
            title: 'le yaourt',
            text: 'Deux bactéries lactiques, _Lactobacillus delbrueckii_ subsp. _bulgaricus_ et _Streptococcus thermophilus_, sont ajoutées au lait. Elles transforment le lactose en acide lactique : le lait s’acidifie et épaissit. L’outil vivant : les bactéries. Le procédé : une fermentation contrôlée (température, durée). Le produit : le yaourt.',
          },
          { type: 'warning', title: 'Biotechnologie ne veut pas dire OGM', text: 'Une biotechnologie n’implique pas forcément de modifier les gènes d’un être vivant. Fabriquer du pain, affiner un fromage ou épurer l’eau grâce à des bactéries sont des biotechnologies, sans aucun organisme génétiquement modifié.' },
          {
            type: 'retenir',
            items: [
              'Les biotechnologies utilisent le vivant (organismes, cellules, molécules) ou ses propriétés pour produire des biens ou des services utiles à l’être humain.',
              'Toute biotechnologie part d’un **besoin** et aboutit à un **produit** ou un **service** grâce à un procédé maîtrisé.',
              'Les micro-organismes sont les outils vivants les plus utilisés.',
            ],
          },
        ],
      },

      {
        title: 'Des pratiques millénaires aux techniques modernes',
        intro: 'Les êtres humains fabriquent du pain, du vin ou du fromage depuis des milliers d’années… sans savoir que des micro-organismes en sont responsables.',
        blocks: [
          { type: 'p', text: 'On distingue trois grandes périodes : les biotechnologies **traditionnelles**, fondées sur un savoir-faire transmis sans explication scientifique ; les biotechnologies **scientifiques**, nées de la microbiologie au XIX^e^ siècle ; les biotechnologies **modernes**, qui modifient le patrimoine génétique des êtres vivants depuis les années 1970.' },
          { type: 'figure', image: IMG.histoire, caption: 'Des fermentations traditionnelles aux bioréacteurs : pain et amphore, microscope de Leeuwenhoek, ballon à col de cygne de Pasteur, moisissure productrice de pénicilline, double hélice de l’ADN, bioréacteur industriel.', size: 'wide' },
          { type: 'definition', term: 'Fermentation', text: 'transformation de substances organiques, le plus souvent des sucres, par des micro-organismes, sans utiliser de dioxygène. La fermentation alcoolique des levures produit de l’éthanol et du dioxyde de carbone ; la fermentation lactique produit de l’acide lactique. Dans l’industrie, on appelle aussi « fermentation » toute culture de micro-organismes en grand volume.' },
          {
            type: 'table',
            caption: 'Les grandes étapes de l’histoire des biotechnologies',
            head: ['Date', 'Événement', 'Ce que cela change'],
            rows: [
              ['Plusieurs millénaires avant notre ère', 'Fabrication de pain, de bière, de vin, de fromage par fermentation', 'On utilise le vivant sans le connaître : c’est un savoir-faire empirique.'],
              ['1676', 'Antoni van Leeuwenhoek observe des « animalcules » (bactéries) avec un microscope de sa fabrication', 'Découverte du monde microbien.'],
              ['1857-1860', 'Louis Pasteur montre que les fermentations sont dues à des micro-organismes vivants', 'Les fermentations deviennent compréhensibles et maîtrisables ; naissance de la microbiologie.'],
              ['1865', 'Gregor Mendel présente les lois de l’hérédité', 'Naissance de la génétique.'],
              ['1919', 'L’ingénieur hongrois Károly Ereky invente le mot « biotechnologie »', 'L’idée d’utiliser le vivant comme outil de production est nommée.'],
              ['1928', 'Alexander Fleming découvre la pénicilline, produite par la moisissure _Penicillium_ ; production industrielle dans les années 1940', 'Premiers antibiotiques fabriqués par des micro-organismes.'],
              ['1953', 'James Watson et Francis Crick proposent la structure en double hélice de l’ADN, grâce notamment aux clichés de Rosalind Franklin', 'On comprend comment l’information génétique est portée par l’ADN.'],
              ['1973', 'Stanley Cohen et Herbert Boyer transfèrent un gène dans une bactérie', 'Naissance du génie génétique.'],
              ['1982', 'Mise sur le marché de la première insuline humaine produite par des bactéries génétiquement modifiées', 'Les micro-organismes deviennent des « usines » à protéines humaines.'],
              ['1996', 'Naissance de la brebis Dolly, premier mammifère cloné à partir d’une cellule adulte', 'Débats éthiques sur le clonage.'],
              ['2003', 'Fin du séquençage du génome humain', 'Développement de la bio-informatique et de la médecine personnalisée.'],
              ['2012', 'Emmanuelle Charpentier et Jennifer Doudna décrivent l’outil CRISPR-Cas9 (prix Nobel de chimie en 2020)', 'Modifier un gène précis devient simple et rapide.'],
              ['2020', 'Premiers vaccins à ARN messager contre la Covid-19', 'Des vaccins conçus et produits en un temps record.'],
            ],
          },
          { type: 'definition', term: 'Génie génétique', text: 'ensemble des techniques qui permettent d’isoler un gène, de le copier, de le modifier et de le transférer d’un être vivant à un autre.' },
          { type: 'definition', term: 'Organisme génétiquement modifié (OGM)', text: 'être vivant dont le matériel génétique a été modifié d’une manière qui ne se produit pas naturellement, par exemple par l’introduction d’un gène d’une autre espèce.' },
          { type: 'figure', image: IMG.insuline, caption: 'Production d’insuline humaine par génie génétique (schéma simplifié) : le gène de l’insuline est inséré dans un plasmide, petit ADN circulaire, puis introduit dans une bactérie qui se multiplie en fermenteur et fabrique l’insuline.', size: 'wide' },
          { type: 'example', title: 'l’insuline', text: ['Les personnes atteintes de diabète de type 1 ne produisent plus d’insuline et doivent s’en injecter. Jusqu’aux années 1980, cette insuline était extraite de pancréas de porc ou de bœuf : la production était limitée et l’insuline animale, légèrement différente de l’insuline humaine.', 'Depuis 1982, des bactéries (_Escherichia coli_) puis des levures génétiquement modifiées produisent de l’**insuline humaine** en grande quantité, en quelques jours, dans des fermenteurs.'] },
          { type: 'note', title: 'Pasteur, père de la microbiologie industrielle', text: 'En étudiant les « maladies » du vin et de la bière, Louis Pasteur montre que chaque fermentation est réalisée par un micro-organisme précis, et que d’autres micro-organismes peuvent la gâcher. Il propose de chauffer le vin pour détruire ces micro-organismes indésirables : c’est la **pasteurisation**, toujours utilisée pour le lait et les jus de fruits.' },
          {
            type: 'retenir',
            items: [
              'Les biotechnologies sont **anciennes** par leurs pratiques (fermentations depuis des millénaires) et **modernes** par leurs outils scientifiques.',
              'Pasteur montre au XIX^e^ siècle que les fermentations sont dues à des micro-organismes.',
              'La découverte de la structure de l’ADN (1953) ouvre la voie au génie génétique (années 1970) : des micro-organismes modifiés produisent des molécules humaines comme l’insuline (1982).',
            ],
          },
        ],
      },

      {
        title: 'Une science au carrefour de plusieurs disciplines',
        intro: 'Aucune discipline ne suffit seule : produire un médicament grâce à une bactérie demande des biologistes, des biochimistes, des informaticiens et des ingénieurs.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Biologie', text: 'Science du vivant : structure, fonctionnement, reproduction et évolution des êtres vivants.' },
              { title: 'Microbiologie', text: 'Étude des micro-organismes : bactéries, levures, moisissures, virus.' },
              { title: 'Biochimie', text: 'Étude des molécules du vivant (glucides, lipides, protéines, acides nucléiques) et des réactions chimiques qui les transforment.' },
              { title: 'Génétique', text: 'Étude de l’hérédité et de la transmission des caractères, portés par les gènes.' },
              { title: 'Biologie moléculaire', text: 'Étude des mécanismes du vivant à l’échelle des molécules, en particulier de l’ADN, de l’ARN et des protéines.' },
              { title: 'Bio-informatique', text: 'Utilisation de l’informatique pour stocker, analyser et comparer les données biologiques (séquences d’ADN, structures des protéines).' },
            ],
          },
          { type: 'p', text: 'S’y ajoutent la **chimie**, la **physique**, les **mathématiques** (traitement des résultats) et le **génie des procédés**, qui permet de passer d’un tube à essai à un fermenteur industriel de plusieurs milliers de litres.' },
          {
            type: 'example',
            title: 'les disciplines derrière l’insuline',
            text: 'La **biologie moléculaire** isole le gène de l’insuline ; la **génétique** et la **microbiologie** permettent de l’introduire dans une bactérie et de cultiver celle-ci ; la **bio-informatique** analyse la séquence du gène ; la **biochimie** purifie l’insuline et contrôle sa qualité ; le **génie des procédés** conçoit le fermenteur.',
          },
          { type: 'note', title: 'Des métiers variés', text: 'Technicien de laboratoire, technicien de bioproduction, technicien de contrôle qualité, assistant ingénieur en recherche… Après le bac STL, des BTS du domaine (analyses de biologie médicale, bioanalyses et contrôles, biotechnologies), le BUT Génie biologique ou une licence de sciences de la vie mènent à ces métiers.' },
          {
            type: 'retenir',
            items: [
              'Les biotechnologies sont **interdisciplinaires**.',
              'Principales disciplines : biologie, microbiologie, biochimie, génétique, biologie moléculaire, bio-informatique.',
              'Le génie des procédés permet de passer du laboratoire à la production industrielle.',
            ],
          },
        ],
      },

      {
        title: 'Les cinq domaines des biotechnologies',
        intro: 'Pour s’y retrouver, on classe les applications par domaine, chacun associé à une couleur. Le programme de STL retient cinq couleurs.',
        blocks: [
          { type: 'figure', image: IMG.domaines, caption: 'Les cinq domaines des biotechnologies et leur couleur. Ce schéma est un repère visuel : il faut aussi connaître un exemple précis pour chaque domaine.', size: 'wide' },
          {
            type: 'cards',
            items: [
              { title: 'Rouge — santé', text: 'Médicaments produits par des micro-organismes ou des cellules (insuline, anticorps, antibiotiques), vaccins, tests de diagnostic, thérapies cellulaires comme la fabrication de globules rouges in vitro.', tone: 'red' },
              { title: 'Bleue — milieu marin', text: 'Molécules issues d’organismes marins pour la santé et la cosmétique, aquaculture. Exemple : la protéine fluorescente verte (GFP) d’une méduse, devenue un marqueur indispensable dans les laboratoires.', tone: 'blue' },
              { title: 'Verte — agriculture et agroalimentaire', text: 'Amélioration et multiplication des plantes, biopesticides comme la bactérie _Bacillus thuringiensis_, plantes génétiquement modifiées, aliments fermentés (pain, yaourt, fromage).', tone: 'green' },
              { title: 'Jaune — environnement', text: 'Épuration des eaux usées par des bactéries, dépollution des sols, compostage et méthanisation des déchets, organismes « sentinelles » qui détectent les pollutions.', tone: 'yellow' },
              { title: 'Blanche — industrie', text: 'Enzymes des lessives, bioéthanol produit à partir de biomasse végétale, bioplastiques, lait sans lactose, enzymes qui délavent les jeans.', tone: 'white' },
            ],
          },
          { type: 'warning', title: 'Classer selon le besoin, pas selon l’organisme', text: ['Une même bactérie peut servir dans plusieurs domaines : _Escherichia coli_ modifiée produit de l’insuline (rouge), mais d’autres bactéries épurent l’eau (jaune) ou fabriquent des enzymes de lessive (blanche).', 'Pour trouver le domaine, demande-toi **à quoi sert** l’application. Certaines sont à la frontière de deux domaines (une micro-algue marine cultivée pour produire un carburant : bleue ou blanche ?) : il faut alors justifier son choix.'] },
          { type: 'note', title: 'Une classification qui varie', text: 'La classification par couleurs n’est pas universelle : selon les pays, l’environnement est parfois appelé biotechnologie « grise », et le jaune désigne parfois l’alimentation. La production d’aliments fermentés est rangée par certains auteurs dans les biotechnologies blanches. En STL, on retient les cinq couleurs du programme.' },
          {
            type: 'retenir',
            items: [
              'Rouge = santé ; bleue = milieu marin ; verte = agriculture et agroalimentaire ; jaune = environnement ; blanche = industrie.',
              'Il faut savoir donner **au moins un exemple précis** pour chaque domaine.',
              'On classe une application selon le **besoin** auquel elle répond, en justifiant.',
            ],
          },
        ],
      },

      {
        title: 'Les enjeux des biotechnologies et la bioéthique',
        intro: 'Ce qui est techniquement possible n’est pas forcément souhaitable. Les biotechnologies obligent la société à faire des choix.',
        blocks: [
          {
            type: 'compare',
            title: 'Des bénéfices… et des questions',
            columns: [
              { title: 'Bénéfices attendus', items: ['**Santé** : nouveaux médicaments, vaccins, diagnostics plus rapides.', '**Alimentation** : plantes plus résistantes, aliments mieux conservés.', '**Environnement** : dépollution, énergies renouvelables, moins de déchets.', '**Économie** : emplois, procédés moins polluants que la chimie classique.'] },
              { title: 'Risques et questions', items: ['**Sanitaires** : effets à long terme, sécurité des produits.', '**Environnementaux** : dissémination de gènes, perte de biodiversité, résistances.', '**Sociétaux et économiques** : brevets sur le vivant, dépendance des agriculteurs, inégalités d’accès aux soins.', '**Éthiques** : modification de l’embryon humain, clonage, utilisation des animaux.'] },
            ],
          },
          { type: 'definition', term: 'Éthique', text: 'réflexion sur ce qu’il est bien ou juste de faire, au-delà de ce qui est techniquement possible ou autorisé par la loi.' },
          { type: 'definition', term: 'Bioéthique', text: 'réflexion sur les questions morales posées par les progrès de la biologie, de la médecine et des biotechnologies, afin de protéger la dignité de la personne humaine, le respect des êtres vivants et de l’environnement.' },
          {
            type: 'compare',
            title: 'Opinion ou point de vue argumenté ?',
            columns: [
              { title: 'Opinion', subtitle: 'un avis personnel', items: ['Souvent spontanée, parfois influencée par l’émotion ou la rumeur.', 'N’a pas besoin d’être justifiée.', 'Exemple : « Les OGM, c’est dangereux. »'] },
              { title: 'Point de vue argumenté', subtitle: 'une position justifiée', items: ['S’appuie sur des faits vérifiés et des sources fiables, identifiées.', 'Tient compte des arguments contraires et du contexte.', 'Exemple : « Ce maïs résistant aux insectes réduit l’usage d’insecticides, mais peut favoriser des insectes résistants : son autorisation devrait dépendre d’un suivi sur le terrain. »'] },
            ],
          },
          { type: 'p', text: 'En France, plusieurs textes et instances encadrent les biotechnologies. Les **lois de bioéthique** (1994, révisées en 2004, 2011 et 2021) fixent des règles sur la recherche sur l’embryon, les tests génétiques ou le don d’organes. Le **Comité consultatif national d’éthique** (CCNE), créé en 1983, rend des avis sur ces questions. Le **Haut Conseil des biotechnologies** (HCB), créé en 2008, a éclairé les pouvoirs publics sur les OGM jusqu’à sa dissolution fin 2021 : depuis le 1^er^ janvier 2022, ses missions sont reprises principalement par l’**ANSES** (évaluation des risques pour la santé et l’environnement) et par le CCNE (questions éthiques).' },
          { type: 'example', title: 'une dérive condamnée', text: 'En 2018, un chercheur chinois annonce la naissance de jumelles dont il a modifié l’ADN à l’état d’embryon avec l’outil CRISPR-Cas9. La communauté scientifique internationale condamne cette expérience : risques inconnus pour les enfants, modifications transmissibles à leur descendance, absence de besoin médical réel. Le chercheur est condamné à trois ans de prison.' },
          { type: 'note', title: 'La règle des 3R', text: 'L’utilisation d’animaux pour la recherche est encadrée en Europe (directive 2010/63/UE) par la règle des **3R** : **Remplacer** les animaux quand c’est possible (cultures de cellules, modèles informatiques), **Réduire** leur nombre, **Raffiner** les méthodes pour limiter leur souffrance.' },
          {
            type: 'retenir',
            items: [
              'Une application biotechnologique s’évalue selon son **utilité**, ses **risques** et ses **conséquences** sanitaires, environnementales, économiques et éthiques.',
              'La bioéthique réfléchit aux limites à fixer à l’utilisation du vivant ; des lois et des instances (CCNE, ANSES) encadrent les biotechnologies.',
              'Un point de vue argumenté s’appuie sur des faits et des sources fiables ; une opinion n’a pas besoin d’être justifiée.',
            ],
          },
        ],
      },

      {
        title: 'S’initier à la démarche de recherche et de projet',
        intro: 'Les biotechnologies avancent grâce à une démarche rigoureuse, celle que tu vas pratiquer au laboratoire tout au long de l’année et dans ton projet de Terminale.',
        blocks: [
          {
            type: 'steps',
            title: 'Les étapes d’une démarche de recherche',
            items: [
              { title: 'Partir d’un besoin', text: 'Exemple : les réserves de sang pour les transfusions sont parfois insuffisantes.' },
              { title: 'Formuler une question', text: 'Peut-on fabriquer hors de l’organisme des globules rouges capables de survivre dans le corps humain ?' },
              { title: 'Émettre une hypothèse', text: 'Des cellules souches du sang, cultivées avec des facteurs de croissance, peuvent se transformer en globules rouges fonctionnels.' },
              { title: 'Proposer et réaliser une expérience', text: 'Rédiger une procédure, fixer les conditions expérimentales, prévoir un témoin, puis manipuler.' },
              { title: 'Exploiter les résultats', text: 'Observer, mesurer, comparer avec le témoin, puis conclure : l’hypothèse est validée ou rejetée.' },
              { title: 'Rendre compte', text: 'Communiquer par un compte rendu écrit, une affiche ou une présentation orale.' },
            ],
          },
          { type: 'definition', term: 'Hypothèse', text: 'réponse provisoire à une question scientifique, que l’on peut tester par une expérience.' },
          { type: 'definition', term: 'Procédure', text: 'description précise et ordonnée des étapes d’une manipulation, qui permet à quelqu’un d’autre de la reproduire.' },
          { type: 'definition', term: 'Conditions expérimentales', text: 'ensemble des paramètres fixés lors d’une expérience (température, durée, volumes, concentrations…). Pour tester l’effet d’un facteur, on ne fait varier **que ce facteur**, tous les autres restant identiques.' },
          { type: 'definition', term: 'Témoin', text: 'essai réalisé dans les mêmes conditions que l’essai étudié, mais sans le facteur testé (ou avec un résultat connu). La comparaison avec le témoin permet de conclure que l’effet observé est bien dû au facteur étudié.' },
          {
            type: 'table',
            caption: 'Exemple : la levure a-t-elle besoin de sucre pour produire du gaz ?',
            head: ['Tube', 'Contenu (même volume, 30 min à 37 °C)', 'Rôle', 'Résultat'],
            rows: [
              ['A', 'Levures + eau sucrée (glucose)', 'Essai', 'Dégagement abondant de gaz'],
              ['B', 'Levures + eau sans sucre', 'Témoin : montre l’effet du sucre', 'Pas de dégagement de gaz'],
              ['C', 'Eau sucrée sans levure', 'Témoin : montre que le sucre seul ne produit pas de gaz', 'Pas de dégagement de gaz'],
            ],
          },
          { type: 'p', text: 'Conclusion : le gaz (du dioxyde de carbone) n’est produit qu’en présence de levures **et** de sucre ; l’hypothèse est validée. C’est cette fermentation qui fait lever la pâte à pain.' },
          {
            type: 'list',
            title: 'Travailler en groupe sur un projet',
            items: [
              '**Écouter** chacun et **argumenter** ses propositions avec des faits, dans le **respect mutuel**.',
              'Se répartir les rôles et planifier le travail (qui fait quoi, pour quand ?).',
              'Noter dans un cahier de laboratoire les manipulations, les observations et les résultats bruts, même inattendus.',
              'Confronter les résultats et les interprétations des différents groupes avant de conclure.',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Démarche : besoin → question → hypothèse → expérience → résultats → conclusion → communication.',
              'Une expérience n’a de valeur que si elle comporte un **témoin** et si un seul facteur varie à la fois.',
              'Un projet se mène en groupe, avec écoute, argumentation et respect mutuel.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Ce travail suit la progression de la classe : on découvre les biotechnologies avec une vidéo, puis on étudie des documents réels. Réponds d’abord seul(e), en phrases courtes et précises ; utilise le « coup de pouce » si tu bloques, puis compare avec la correction. Pour les questions sur la vidéo, la correction donne les éléments attendus : vérifie-les avec tes notes et le passage indiqué.',
    activities: [
      {
        title: 'La biotechnologie dans notre vie (1) : présentation et histoire',
        duration: '30 min',
        skills: ['Observer', 'Relever', 'Argumenter'],
        context: 'Regarde attentivement chaque passage de la vidéo, note les mots importants, puis réponds aux questions. Séquence 1 : de 0 min 00 à 1 min 29. Séquence 2 : de 1 min 29 à 1 min 57.',
        documents: [
          {
            label: 'Document 1',
            title: 'Vidéo : « La biotechnologie dans notre vie » (XploreHealth, 4 min 24)',
            text: 'Scanne le QR code ou utilise le lien ci-dessous. Pour cette activité, regarde la vidéo de 0 min 00 à 1 min 57.',
            image: IMG.qr,
            caption: 'QR code de la vidéo.',
            size: 'small',
            link: { url: VIDEO_URL, label: 'Ouvrir la vidéo sur YouTube' },
          },
        ],
        questions: [
          {
            text: 'Séquence 1. Énonce les deux problématiques soulevées au début de la vidéo.',
            hint: 'Une problématique est une question à laquelle on cherche à répondre. Reformule chacune avec tes mots, sous la forme « Comment… ? ».',
            answer: 'Il faut écrire deux questions précises, chacune liée à un besoin concret de notre vie quotidienne (se soigner, se nourrir, fabriquer un produit…). La formulation exacte reprend celle de la vidéo : vérifie-la avec le passage de 0 min 00 à 1 min 29.',
          },
          {
            text: 'Identifie le point commun entre ces deux problématiques.',
            hint: 'Demande-toi ce que l’on utilise, dans les deux cas, pour répondre au besoin.',
            answer: 'Dans les deux cas, la réponse au besoin passe par l’**utilisation du vivant** : des êtres vivants (souvent des micro-organismes), des cellules ou des molécules qu’ils produisent.',
          },
          {
            text: 'Explique en quoi les biotechnologies permettent de répondre à ces questions.',
            answer: 'Les biotechnologies utilisent des organismes vivants, des cellules ou leurs molécules comme des « outils » ou des « usines » : on les cultive dans des conditions maîtrisées pour qu’ils fabriquent la substance utile ou réalisent la transformation voulue, en grande quantité.',
          },
          {
            text: 'Cite trois exemples de substances ou de produits obtenus grâce aux biotechnologies.',
            answer: 'Exemples possibles : l’insuline, des vaccins, des antibiotiques (pénicilline), des enzymes pour les lessives, du bioéthanol, des aliments fermentés (pain, yaourt, fromage, bière).',
          },
          {
            text: 'Séquence 2. Argumente l’affirmation suivante : « Les biotechnologies sont une science ancienne. » Nuance-la ensuite.',
            hint: 'Pense aux aliments fabriqués depuis l’Antiquité. Puis demande-toi depuis quand on sait expliquer ces fabrications.',
            answer: [
              'Depuis plusieurs milliers d’années, les êtres humains fabriquent du pain, de la bière, du vin ou du fromage grâce à des fermentations réalisées par des micro-organismes : ce sont déjà des biotechnologies.',
              'Nuance : ces pratiques sont anciennes, mais elles étaient empiriques (on ne connaissait pas les micro-organismes). La science qui les explique est plus récente : elle date de Pasteur (XIX^e^ siècle) et s’est développée avec la génétique et la biologie moléculaire au XX^e^ siècle.',
            ],
          },
          {
            text: 'Cite plusieurs produits obtenus depuis longtemps grâce aux biotechnologies.',
            answer: 'Le pain, le vin, la bière, le fromage, le yaourt, le vinaigre, la choucroute : tous sont obtenus par fermentation.',
          },
        ],
      },
      {
        title: 'La biotechnologie dans notre vie (2) : progrès et perspectives',
        duration: '30 min',
        skills: ['Relever', 'Expliquer', 'Définir'],
        context: 'Séquence 3 : de 1 min 57 à 2 min 42. Séquence 4 : de 2 min 42 à la fin (4 min 24). Le dernier passage présente un animal très utilisé dans les laboratoires de recherche, le poisson zèbre.',
        documents: [
          {
            label: 'Document 2',
            title: 'Le poisson zèbre (_Danio rerio_), un organisme modèle',
            image: IMG.zebre,
            caption: 'En haut : poisson zèbre adulte (environ 4 cm). En bas : larve âgée de quelques jours, transparente : on voit son œil, son cœur, sa réserve de vitellus et ses muscles.',
            text: 'Le poisson zèbre est un petit poisson d’eau douce, facile à élever. Une femelle pond des centaines d’œufs, fécondés hors du corps de la mère. L’embryon se développe très vite : son cœur bat dès le premier jour. Les larves sont transparentes. Environ 70 % des gènes humains ont un équivalent chez ce poisson.',
          },
        ],
        questions: [
          {
            text: 'Séquence 3. Cite la découverte qui a permis aux biotechnologies de progresser et explique pourquoi.',
            hint: 'C’est une découverte de 1953 sur la molécule qui porte l’information génétique.',
            answer: 'La découverte de la **structure de l’ADN** (double hélice, 1953). On a compris que l’ADN porte l’information génétique sous forme de gènes ; on a pu ensuite isoler un gène, le copier et le transférer d’un organisme à un autre : c’est le génie génétique.',
          },
          {
            text: 'Rappelle l’intérêt de modifier génétiquement des micro-organismes.',
            hint: 'Pense à l’exemple de l’insuline (partie 2 du cours).',
            answer: 'Un micro-organisme génétiquement modifié peut fabriquer une molécule qu’il ne produit pas naturellement, par exemple une protéine humaine (insuline, hormone de croissance) ou une enzyme. Comme les micro-organismes se multiplient très vite et se cultivent facilement en fermenteur, on obtient cette molécule en grande quantité, rapidement, à moindre coût et sans l’extraire d’animaux.',
          },
          {
            text: 'Séquence 4. Explique en quoi le poisson zèbre peut constituer un outil des biotechnologies.',
            hint: 'Utilise le document 2 : transparence, reproduction, rapidité de développement, gènes communs avec l’être humain.',
            answer: 'Le poisson zèbre est un **organisme modèle** : il se reproduit facilement et en grand nombre, se développe très vite, et ses larves transparentes permettent d’observer ses organes vivants au microscope. Comme beaucoup de ses gènes ont un équivalent chez l’être humain, on l’utilise pour étudier des maladies humaines, tester des médicaments ou mesurer la toxicité de substances, en complément d’autres méthodes.',
          },
          {
            text: 'À l’aide des réponses précédentes, propose ta propre définition des biotechnologies.',
            answer: 'Les biotechnologies sont l’ensemble des techniques qui utilisent des êtres vivants, des cellules, des molécules du vivant ou les propriétés du vivant pour produire des biens ou des services utiles à l’être humain (santé, alimentation, industrie, environnement).',
          },
        ],
      },
      {
        title: 'Disciplines et domaines : l’exemple des globules rouges fabriqués in vitro',
        duration: '35 min',
        skills: ['Associer', 'Justifier', 'Raisonner'],
        context: 'Les biotechnologies mobilisent plusieurs sciences. Tu commences par associer chaque discipline à sa définition, puis tu étudies un exemple médical réel : la fabrication de globules rouges hors de l’organisme, réalisée par l’équipe du professeur Luc Douay (Inserm, hôpital Saint-Antoine, Paris), qui a publié en 2011 la première injection chez un volontaire de globules rouges cultivés à partir de ses propres cellules souches.',
        documents: [
          {
            label: 'Document 3',
            title: 'Six disciplines, six définitions',
            blocks: [
              {
                type: 'table',
                head: ['Discipline', 'Définition (dans le désordre)'],
                rows: [
                  ['A. Biologie', '1. Étude des micro-organismes.'],
                  ['B. Génétique', '2. Utilisation d’outils informatiques pour traiter les données biologiques.'],
                  ['C. Microbiologie', '3. Science des êtres vivants.'],
                  ['D. Biochimie', '4. Étude de l’ADN, de l’ARN et des mécanismes moléculaires du vivant.'],
                  ['E. Biologie moléculaire', '5. Étude des lois de l’hérédité et de la transmission des caractères.'],
                  ['F. Bio-informatique', '6. Étude des molécules du vivant et de leurs transformations.'],
                ],
              },
            ],
          },
          {
            label: 'Document 4',
            title: 'Fabrication de globules rouges in vitro',
            image: IMG.globules,
            caption: 'Les étapes de la fabrication et du test des globules rouges cultivés.',
            text: [
              'Des chercheurs ont validé la possibilité de fabriquer des globules rouges hors de l’organisme, à partir de **cellules souches** du sang, présentes notamment dans la moelle osseuse. Ces globules rouges ont survécu dans l’organisme aussi bien que des globules rouges classiques, dont la durée de vie est d’environ 120 jours.',
              'Cette piste ouvre l’espoir de réserves de sang plus importantes et d’une réduction de certaines complications et infections liées aux transfusions. La production à grande échelle nécessitera toutefois des progrès en ingénierie cellulaire.',
            ],
            source: 'D’après les travaux de l’hôpital Saint-Antoine (Inserm), Paris',
          },
          {
            label: 'Document 5',
            title: 'Couleurs et domaines (dans le désordre)',
            blocks: [
              { type: 'table', head: ['Couleur', 'Domaine'], rows: [['Rouge', 'Environnement'], ['Bleue', 'Industrie'], ['Verte', 'Santé'], ['Jaune', 'Milieu marin'], ['Blanche', 'Agriculture et agroalimentaire']] },
            ],
          },
        ],
        questions: [
          {
            text: 'Associe chaque discipline du document 3 à sa définition, puis explique en une phrase pourquoi les biotechnologies mobilisent plusieurs sciences à la fois.',
            answer: [
              'A-3 (biologie : science des êtres vivants) ; B-5 (génétique : hérédité) ; C-1 (microbiologie : micro-organismes) ; D-6 (biochimie : molécules du vivant) ; E-4 (biologie moléculaire : ADN, ARN) ; F-2 (bio-informatique : données biologiques).',
              'Une application biotechnologique demande à la fois de connaître l’organisme utilisé, ses gènes, ses molécules, de le cultiver et de traiter les données : aucune discipline ne suffit seule.',
            ],
          },
          {
            text: 'Montre que la fabrication de globules rouges in vitro est bien une application des biotechnologies.',
            hint: 'Reprends la définition : quel outil vivant ? quel procédé ? quel bien ou service ? quel besoin ?',
            answer: 'Elle utilise le vivant : des cellules souches du sang, qui se multiplient et se transforment en globules rouges grâce à un procédé maîtrisé (culture in vitro avec des facteurs de croissance). Elle produit un bien utile à l’être humain, des globules rouges pour la transfusion, et répond à un besoin de santé (le manque de sang).',
          },
          {
            text: 'Cite les avantages majeurs de l’utilisation de globules rouges fabriqués in vitro.',
            answer: 'Des réserves de sang plus importantes, moins dépendantes des dons ; une réduction possible des complications et des infections transmises par les transfusions classiques ; à terme, du sang disponible pour des patients aux groupes sanguins rares.',
          },
          {
            text: 'Dans le document 4, quel est le rôle du test chez la souris ? À quelle référence compare-t-on la survie des globules rouges fabriqués, et pourquoi ?',
            hint: 'Repense au rôle du témoin dans une expérience (partie 6 du cours).',
            answer: 'Le test chez la souris vérifie que les globules rouges fabriqués survivent dans un organisme avant de les essayer chez l’être humain. On compare leur taux de survie à celui des globules rouges classiques (durée de vie d’environ 120 jours) : ceux-ci jouent le rôle de **témoin**, qui permet de conclure que les globules rouges fabriqués fonctionnent aussi bien.',
          },
          {
            text: 'À l’aide du cours, corrige le document 5 en reliant chaque couleur à son domaine, puis donne au moins un exemple d’application pour chacune. Dans quel domaine places-tu les globules rouges in vitro ?',
            answer: [
              'Rouge : santé (insuline, vaccins, globules rouges in vitro). Bleue : milieu marin (molécules d’organismes marins, aquaculture). Verte : agriculture et agroalimentaire (biopesticides, yaourt, pain). Jaune : environnement (épuration des eaux, dépollution des sols). Blanche : industrie (bioéthanol, enzymes de lessive).',
              'Les globules rouges in vitro appartiennent aux biotechnologies **rouges**, car ils répondent à un besoin de santé.',
            ],
          },
        ],
      },
      {
        title: 'Réfléchir aux enjeux des biotechnologies',
        duration: '30 min',
        skills: ['Argumenter', 'Distinguer', 'Débattre'],
        context: 'Les biotechnologies ne posent pas seulement des questions scientifiques : elles soulèvent aussi des enjeux sanitaires, environnementaux, économiques et éthiques. Avant de débattre, il faut savoir distinguer une opinion d’un point de vue argumenté.',
        documents: [
          {
            label: 'Document 6',
            title: 'Le Haut Conseil des biotechnologies (2008-2021)',
            image: IMG.hcb,
            caption: 'Logo du Haut Conseil des biotechnologies.',
            size: 'small',
            text: [
              'En France, les biotechnologies soulèvent des questions de santé, d’environnement, d’agriculture, de recherche et de consommation. Le Haut Conseil des biotechnologies (HCB) a été créé en 2008 pour éclairer les pouvoirs publics, notamment sur les OGM. Il réunissait un comité scientifique et un comité représentant la société (associations, agriculteurs, industriels, syndicats).',
              'Ses missions portaient sur l’évaluation des risques pour la santé et l’environnement, l’analyse des impacts économiques et sociaux, et la réflexion éthique. Le HCB a été dissous fin 2021 : depuis le 1^er^ janvier 2022, ses missions sont exercées principalement par l’ANSES (Agence nationale de sécurité sanitaire de l’alimentation, de l’environnement et du travail) et par le Comité consultatif national d’éthique.',
            ],
          },
          {
            label: 'Document 7',
            title: 'Quatre affirmations entendues lors d’un débat sur les plantes génétiquement modifiées',
            text: [
              'a) « De toute façon, toucher à la nature, c’est mal. »',
              'b) « Le maïs génétiquement modifié pour résister à un insecte permet de réduire les épandages d’insecticides, mais des populations d’insectes résistants sont apparues dans certaines régions : il faut donc surveiller les cultures. »',
              'c) « J’ai vu une vidéo qui disait que les OGM rendent malade. »',
              'd) « En France, la culture de maïs génétiquement modifié est interdite depuis 2014, alors que d’autres pays en cultivent : les règles dépendent des choix de chaque société. »',
            ],
          },
        ],
        questions: [
          {
            text: 'Cite une ou plusieurs dérives possibles de l’utilisation des biotechnologies dans nos sociétés, en donnant un exemple précis.',
            hint: 'Pense à la modification de l’embryon humain, à la dissémination de gènes dans l’environnement, aux brevets sur le vivant.',
            answer: 'Exemples : modifier les gènes d’embryons humains sans nécessité médicale (cas des jumelles génétiquement modifiées en Chine en 2018) ; disséminer des gènes de plantes modifiées vers des plantes sauvages ou des cultures voisines ; favoriser l’apparition d’insectes ou de mauvaises herbes résistants ; rendre les agriculteurs dépendants de semences brevetées ; réserver des traitements coûteux aux pays ou aux personnes les plus riches ; utiliser des animaux sans nécessité.',
          },
          {
            text: 'Classe les affirmations du document 7 en opinions et en points de vue argumentés. Justifie.',
            hint: 'Une affirmation argumentée s’appuie sur des faits vérifiables et nuance son propos.',
            answer: 'Opinions : a) et c). L’affirmation a) est un jugement général, sans argument ; c) s’appuie sur une source non identifiée et non vérifiée. Points de vue argumentés : b) et d). Ils s’appuient sur des faits vérifiables (réduction des insecticides, apparition de résistances, interdiction en France depuis 2014) et nuancent leur conclusion.',
          },
          {
            text: 'Pourquoi la France a-t-elle confié l’évaluation des biotechnologies à des instances associant des scientifiques et des représentants de la société ?',
            answer: 'Les biotechnologies posent à la fois des questions scientifiques (risques pour la santé et l’environnement, qu’il faut évaluer avec rigueur) et des questions de société (choix économiques, valeurs éthiques) qui ne relèvent pas seulement des scientifiques. Associer les deux permet aux pouvoirs publics de décider de façon éclairée, en tenant compte des connaissances et des attentes de la population.',
          },
          {
            text: 'Rédige en cinq lignes un point de vue argumenté sur la question : « Faut-il fabriquer des globules rouges in vitro pour les transfusions ? »',
            hint: 'Annonce ta position, donne au moins deux arguments appuyés sur le document 4, envisage une limite, puis conclus.',
            answer: 'Exemple : « Je pense qu’il faut poursuivre cette recherche. Les globules rouges fabriqués in vitro survivent dans l’organisme comme des globules rouges classiques et pourraient compléter les dons de sang, qui manquent parfois. Ils réduiraient aussi certains risques d’infection liés aux transfusions. Cependant, leur production à grande échelle n’est pas encore possible et son coût reste à évaluer. Il faut donc continuer les essais, encadrés par des règles éthiques strictes, avant une utilisation courante. »',
          },
        ],
      },
      {
        title: 'Application : étudier des entreprises de biotechnologies',
        duration: '40 min',
        skills: ['Extraire', 'Classer', 'Justifier'],
        context: 'Chaque document présente l’activité d’une entreprise ou d’un projet français. Par binôme, choisissez un document, surlignez les informations utiles, puis répondez aux questions sans recopier le texte. Mettez ensuite en commun avec les autres binômes.',
        documents: [
          {
            label: 'Document 8',
            title: 'DEINOVE',
            text: [
              'DEINOVE, entreprise fondée en 2006 à Montpellier, a étudié des bactéries peu connues, en particulier les **déinocoques**, célèbres pour leur résistance exceptionnelle aux radiations et à la sécheresse.',
              'L’objectif était d’y découvrir de nouvelles molécules antibiotiques et antifongiques, capables de traiter des infections devenues difficiles à soigner à cause de la résistance aux antibiotiques, un enjeu majeur de santé publique.',
              'L’idée centrale : exploiter la biodiversité bactérienne, encore peu explorée, pour enrichir l’arsenal des médicaments. L’entreprise a cessé son activité en 2023 : la recherche de nouveaux médicaments est longue, coûteuse et incertaine.',
            ],
          },
          {
            label: 'Document 9',
            title: 'WatchFrog',
            text: [
              'WatchFrog, entreprise créée en 2005 par des chercheurs du CNRS et du Muséum national d’histoire naturelle, utilise des **têtards de xénope** (une grenouille) et des larves de poisson rendus **fluorescents** : un gène codant une protéine fluorescente s’exprime lorsque le système hormonal de la larve est perturbé.',
              'Placées dans un échantillon d’eau, ces larves révèlent en quelques jours la présence de **perturbateurs endocriniens**, des polluants qui dérèglent les hormones. Ces tests sont rapides et moins coûteux que certains tests classiques.',
              'Une réflexion éthique accompagne cette application, car elle utilise des organismes vivants pour protéger l’environnement : les tests sont réalisés sur des stades larvaires très précoces.',
            ],
          },
          {
            label: 'Document 10',
            title: 'Futurol',
            image: IMG.futurol,
            caption: 'Le procédé Futurol de production de bioéthanol à partir de paille.',
            text: [
              'Le projet Futurol, lancé en 2008 par un consortium d’organismes de recherche et d’industriels français, a mis au point un procédé de production de **bioéthanol de deuxième génération** à partir de biomasse non alimentaire : paille, bois, résidus forestiers.',
              'Après un prétraitement de la biomasse, des **enzymes** (cellulases), produites par un champignon microscopique, découpent la cellulose en sucres simples ; des **levures** fermentent ces sucres en éthanol, purifié par distillation.',
              'Le procédé, aujourd’hui commercialisé, vise à produire un carburant et des matières premières pour la chimie en valorisant des ressources végétales qui n’entrent pas en concurrence avec l’alimentation.',
            ],
          },
        ],
        instruction: 'Repère l’organisme utilisé et l’utilité pour l’être humain, puis déduis le domaine correspondant.',
        questions: [
          {
            text: 'Pour chaque document, relève les éléments qui permettent d’affirmer qu’il s’agit d’une activité de biotechnologies.',
            hint: 'Cherche dans chaque texte un outil vivant, un procédé et un produit ou un service utile.',
            answer: [
              'DEINOVE : utilisation de bactéries (déinocoques) pour découvrir des molécules utiles (antibiotiques, antifongiques).',
              'WatchFrog : utilisation de têtards et de larves génétiquement modifiés, rendus fluorescents, pour détecter des polluants.',
              'Futurol : utilisation d’un champignon (production d’enzymes), d’enzymes et de levures pour transformer de la paille en bioéthanol.',
            ],
          },
          {
            text: 'Identifie, pour chaque entreprise, l’organisme utilisé ou la propriété du vivant mobilisée, ainsi que le bénéfice pour l’être humain.',
            answer: [
              'DEINOVE : bactéries déinocoques ; propriété : capacité à produire des molécules actives contre d’autres micro-organismes ; bénéfice : de nouveaux médicaments contre les infections résistantes.',
              'WatchFrog : têtards de xénope et larves de poisson transgéniques ; propriété : fluorescence qui révèle une perturbation hormonale ; bénéfice : détecter rapidement et à moindre coût la pollution de l’eau.',
              'Futurol : champignon producteur de cellulases et levures ; propriétés : dégradation de la cellulose en sucres, puis fermentation alcoolique ; bénéfice : un carburant renouvelable produit sans utiliser de ressources alimentaires.',
            ],
          },
          {
            text: 'Déduis le domaine des biotechnologies et la couleur associée pour chaque document. Justifie.',
            answer: 'DEINOVE : biotechnologie **rouge** (santé), car le but est de produire des médicaments. WatchFrog : biotechnologie **jaune** (environnement), car le but est de surveiller la pollution de l’eau. Futurol : biotechnologie **blanche** (industrie), car il s’agit d’un procédé industriel de production d’énergie et de matières premières.',
          },
          {
            text: 'Futurol produit du bioéthanol de « deuxième génération ». En t’aidant du document 10, explique l’intérêt de cette deuxième génération par rapport à un bioéthanol fabriqué à partir de betterave ou de blé.',
            answer: 'Le bioéthanol de première génération est fabriqué à partir de plantes alimentaires (sucre de betterave, amidon de blé ou de maïs) : il entre en concurrence avec l’alimentation pour les terres agricoles. Celui de deuxième génération valorise des résidus non alimentaires (paille, bois), ce qui évite cette concurrence et valorise des déchets agricoles et forestiers.',
          },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Les biotechnologies utilisent des êtres vivants, des cellules, des molécules du vivant ou leurs propriétés pour produire des biens ou des services utiles à l’être humain.',
      'Elles sont anciennes par leurs pratiques (fermentations depuis des millénaires) et modernes par leurs outils : microbiologie de Pasteur, structure de l’ADN (1953), génie génétique (années 1970), CRISPR-Cas9 (2012).',
      'Elles sont interdisciplinaires : biologie, microbiologie, biochimie, génétique, biologie moléculaire, bio-informatique, génie des procédés.',
      'Cinq domaines : rouge (santé), bleue (milieu marin), verte (agriculture et agroalimentaire), jaune (environnement), blanche (industrie). On classe une application selon le besoin auquel elle répond.',
      'Elles soulèvent des enjeux sanitaires, environnementaux, économiques et éthiques ; la bioéthique, des lois et des instances (CCNE, ANSES) les encadrent.',
      'Un point de vue argumenté s’appuie sur des faits et des sources fiables, contrairement à une simple opinion.',
      'Démarche de recherche : besoin → question → hypothèse → expérience avec témoin → résultats → conclusion → communication.',
    ],
    method: {
      title: 'Analyser un document de biotechnologies',
      steps: [
        'Repérer le **besoin** ou le problème auquel le document cherche à répondre.',
        'Identifier l’**outil vivant** utilisé (organisme, cellule, molécule) ou la propriété du vivant mobilisée.',
        'Décrire brièvement le **procédé** (culture, fermentation, extraction, modification génétique…).',
        'Préciser le **bien ou le service** obtenu et le bénéfice pour l’être humain.',
        'En déduire le **domaine** (couleur) en justifiant par la finalité de l’application.',
        'Signaler, si le document le permet, une **limite** ou un **enjeu éthique**.',
      ],
    },
    vocabulary: [
      { term: 'Biotechnologies', definition: 'Techniques qui utilisent le vivant (organismes, cellules, molécules) ou ses propriétés pour produire des biens ou des services utiles à l’être humain.' },
      { term: 'Micro-organisme', definition: 'Être vivant microscopique, souvent unicellulaire : bactérie, levure, moisissure, micro-algue.' },
      { term: 'Fermentation', definition: 'Transformation de substances organiques, souvent des sucres, par des micro-organismes sans dioxygène ; par extension, culture industrielle de micro-organismes.' },
      { term: 'Fermenteur', definition: 'Cuve (ou bioréacteur) où l’on cultive des micro-organismes ou des cellules dans des conditions contrôlées.' },
      { term: 'Gène', definition: 'Portion d’ADN qui porte l’information nécessaire à la fabrication d’une protéine.' },
      { term: 'Génie génétique', definition: 'Techniques permettant d’isoler, de modifier et de transférer des gènes d’un être vivant à un autre.' },
      { term: 'OGM', definition: 'Organisme génétiquement modifié : être vivant dont le matériel génétique a été modifié d’une manière qui ne se produit pas naturellement.' },
      { term: 'Cellule souche', definition: 'Cellule non spécialisée capable de se multiplier et de se transformer en différents types de cellules.' },
      { term: 'Organisme modèle', definition: 'Espèce facile à étudier (comme le poisson zèbre) utilisée pour comprendre des mécanismes valables chez d’autres êtres vivants.' },
      { term: 'Bioéthique', definition: 'Réflexion sur les questions morales posées par les progrès de la biologie, de la médecine et des biotechnologies.' },
      { term: 'Opinion', definition: 'Avis personnel, souvent spontané, qui n’a pas besoin d’être justifié.' },
      { term: 'Point de vue argumenté', definition: 'Position justifiée par des faits vérifiés et des sources fiables, qui tient compte des arguments contraires.' },
      { term: 'Hypothèse', definition: 'Réponse provisoire à une question scientifique, que l’on peut tester par une expérience.' },
      { term: 'Témoin', definition: 'Essai réalisé dans les mêmes conditions, sans le facteur étudié, qui sert de référence pour conclure.' },
    ],
    mistakes: [
      { wrong: 'Les biotechnologies, ce sont les OGM.', right: 'Les OGM ne sont qu’une partie des biotechnologies : le pain, le yaourt ou l’épuration de l’eau sont des biotechnologies sans modification génétique.' },
      { wrong: 'Les biotechnologies sont une invention récente.', right: 'Leurs pratiques sont millénaires ; ce qui est récent, c’est leur explication scientifique et les outils du génie génétique.' },
      { wrong: 'Une application qui utilise une bactérie est forcément une biotechnologie rouge.', right: 'On classe selon le besoin : une bactérie peut servir la santé, l’environnement, l’industrie ou l’agriculture.' },
      { wrong: 'Confondre la couleur jaune (environnement) et la couleur verte (agriculture).', right: 'Verte = agriculture et agroalimentaire ; jaune = protection de l’environnement.' },
      { wrong: 'Donner son opinion en guise d’argument.', right: 'Un point de vue argumenté s’appuie sur des faits vérifiables et des sources identifiées.' },
      { wrong: 'Conclure une expérience sans témoin.', right: 'Sans témoin, on ne peut pas affirmer que l’effet observé est dû au facteur étudié.' },
    ],
    quiz: [
      { question: 'Quelle proposition définit le mieux les biotechnologies ?', choices: ['L’étude des maladies humaines', 'L’utilisation du vivant ou de ses propriétés pour produire des biens ou des services utiles', 'La fabrication de médicaments par synthèse chimique', 'La modification génétique des plantes uniquement'], answer: 1, explanation: 'Les biotechnologies utilisent des organismes, des cellules, des molécules du vivant ou leurs propriétés, dans tous les domaines.' },
      { question: 'Laquelle de ces fabrications est une biotechnologie traditionnelle ?', choices: ['La production d’insuline par des bactéries', 'Le séquençage d’un génome', 'La fabrication du pain grâce aux levures', 'L’outil CRISPR-Cas9'], answer: 2, explanation: 'La fermentation de la pâte à pain par les levures est pratiquée depuis des millénaires.' },
      { question: 'Louis Pasteur a montré que :', choices: ['Les fermentations sont dues à des micro-organismes vivants', 'L’ADN a une structure en double hélice', 'La pénicilline tue les bactéries', 'Les caractères héréditaires sont portés par les gènes'], answer: 0, explanation: 'Entre 1857 et 1860, Pasteur montre que chaque fermentation est réalisée par un micro-organisme précis.' },
      { question: 'En 1953, Watson et Crick proposent :', choices: ['Le premier vaccin', 'Le mot « biotechnologie »', 'Le premier OGM', 'La structure en double hélice de l’ADN'], answer: 3, explanation: 'La compréhension de la structure de l’ADN a ouvert la voie au génie génétique.' },
      { question: 'La couleur jaune correspond aux biotechnologies :', choices: ['De la santé', 'De l’environnement', 'De l’industrie', 'Du milieu marin'], answer: 1, explanation: 'En STL, jaune = protection de l’environnement (épuration, dépollution, détection des pollutions).' },
      { question: 'La production de bioéthanol à partir de paille relève des biotechnologies :', choices: ['Blanches', 'Rouges', 'Bleues', 'Jaunes'], answer: 0, explanation: 'C’est un procédé industriel de production d’énergie et de matières premières : biotechnologie blanche.' },
      { question: 'La discipline qui utilise l’informatique pour analyser des séquences d’ADN est :', choices: ['La microbiologie', 'La biochimie', 'La bio-informatique', 'La génétique'], answer: 2, explanation: 'La bio-informatique traite, stocke et compare les données biologiques.' },
      { question: 'Dans une expérience, le témoin sert à :', choices: ['Répéter l’expérience', 'Servir de référence pour conclure que l’effet est dû au facteur étudié', 'Augmenter la quantité de produit', 'Remplacer l’hypothèse'], answer: 1, explanation: 'Le témoin est réalisé dans les mêmes conditions, sans le facteur testé : la comparaison permet de conclure.' },
      { question: 'Quelle affirmation est un point de vue argumenté ?', choices: ['« Les OGM, c’est forcément dangereux. »', '« J’ai entendu dire que ce vaccin ne marche pas. »', '« La nature, il ne faut pas y toucher. »', '« Ce maïs réduit l’usage d’insecticides mais peut favoriser des insectes résistants : il faut surveiller les cultures. »'], answer: 3, explanation: 'Elle s’appuie sur des faits vérifiables et nuance sa conclusion.' },
    ],
    exercises: [
      {
        title: 'Classer des applications',
        statement: 'Indique le domaine (couleur) de chaque application et justifie en une phrase : a) un test de grossesse utilisant des anticorps ; b) une station d’épuration à boues activées ; c) une lessive contenant des enzymes ; d) des alginates extraits d’algues brunes utilisés comme épaississants alimentaires ; e) un biopesticide à base de _Bacillus thuringiensis_ ; f) la culture de cellules de peau pour soigner des grands brûlés.',
        answer: ['a) Rouge : diagnostic médical (santé).', 'b) Jaune : les bactéries épurent les eaux usées (environnement).', 'c) Blanche : enzymes produites industriellement pour un produit ménager (industrie).', 'd) Bleue : valorisation d’une ressource marine. On peut aussi la classer en verte (agroalimentaire) si on la justifie par son usage alimentaire.', 'e) Verte : protection des cultures (agriculture).', 'f) Rouge : thérapie cellulaire (santé).'],
      },
      {
        title: 'Remettre l’histoire dans l’ordre',
        statement: 'Classe ces événements dans l’ordre chronologique et indique, pour chacun, ce qu’il a apporté : découverte de la pénicilline ; outil CRISPR-Cas9 ; travaux de Pasteur sur les fermentations ; première insuline produite par des bactéries ; structure de l’ADN ; fabrication de la bière en Mésopotamie.',
        answer: ['1. Bière en Mésopotamie (Antiquité) : utilisation empirique des levures.', '2. Pasteur (1857-1860) : les fermentations sont dues à des micro-organismes.', '3. Pénicilline (1928) : premier antibiotique produit par un micro-organisme.', '4. Structure de l’ADN (1953) : compréhension du support de l’information génétique.', '5. Insuline produite par des bactéries (1982) : un micro-organisme modifié fabrique une protéine humaine.', '6. CRISPR-Cas9 (2012) : modification précise et rapide des gènes.'],
      },
      {
        title: 'Concevoir une expérience',
        statement: 'Un élève se demande si la température influence la production de gaz par les levures. a) Formule une hypothèse. b) Propose une expérience en précisant les conditions expérimentales qui restent identiques et celle qui varie. c) Quel tube sert de témoin ?',
        answer: ['a) Hypothèse : à 37 °C, les levures produisent plus de gaz qu’à 20 °C.', 'b) Préparer plusieurs tubes identiques (même volume d’eau sucrée, même quantité de levures, même durée de 30 minutes) placés à des températures différentes, par exemple 4 °C, 20 °C et 37 °C ; mesurer le volume de gaz produit. Seule la température varie.', 'c) Un tube d’eau sucrée sans levure, placé à 37 °C, sert de témoin : il montre que le gaz est bien produit par les levures. On peut aussi considérer le tube à 20 °C (température ambiante) comme référence de comparaison.'],
      },
    ],
    selfCheck: [
      'Je sais proposer une définition correcte des biotechnologies et la justifier sur un exemple.',
      'Je sais expliquer pourquoi les biotechnologies sont à la fois anciennes et modernes, en citant des dates clés.',
      'Je sais citer les disciplines mobilisées par les biotechnologies et leur apport.',
      'Je sais nommer les cinq domaines des biotechnologies et donner un exemple précis pour chacun.',
      'Je sais montrer qu’une application biotechnologique peut soulever des enjeux éthiques.',
      'Je sais distinguer une opinion d’un point de vue argumenté.',
      'Je sais décrire les étapes d’une démarche de recherche et expliquer le rôle d’un témoin.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Vidéo « La biotechnologie dans notre vie » — XploreHealth (YouTube)', url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw' },
      { title: 'Biotechnologie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Biotechnologie' },
      { title: 'Les biotechnologies — ANSES', url: 'https://www.anses.fr/fr/content/les-biotechnologies' },
      { title: 'Haut Conseil des biotechnologies — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Haut_Conseil_des_biotechnologies' },
      { title: 'Comité consultatif national d’éthique (CCNE)', url: 'https://www.ccne-ethique.fr/' },
      { title: 'Biocarburants de deuxième génération : la technologie Futurol — IFP Énergies nouvelles', url: 'https://www.ifpenergiesnouvelles.com/article/2nd-generation-biofuels-industrial-first-french-futuroltm-technology' },
      { title: 'Danio rerio (poisson zèbre) — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Danio_rerio' },
    ],
  },
};

export default lesson;
