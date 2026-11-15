import { img } from '../media';
import posteTravail from '../../../assets/courses/premiere/c4-risques-securite-laboratoire/poste-travail.webp';
import apparitionDommage from '../../../assets/courses/premiere/c4-risques-securite-laboratoire/apparition-dommage.webp';
import voiesExposition from '../../../assets/courses/premiere/c4-risques-securite-laboratoire/voies-exposition.webp';
import pictogrammesSgh from '../../../assets/courses/premiere/c4-risques-securite-laboratoire/pictogrammes-sgh.webp';
import psm from '../../../assets/courses/premiere/c4-risques-securite-laboratoire/psm.webp';
import schema5m from '../../../assets/courses/premiere/c4/schema-5m.png';
import epi from '../../../assets/courses/premiere/c4/epi.jpg';
import dangerBio from '../../../assets/courses/premiere/c4/danger-biologique.webp';
import baobab from '../../../assets/courses/premiere/c4/baobab.png';
import dasri from '../../../assets/courses/premiere/c4/dasri.webp';
import acetone from '../../../assets/courses/premiere/c4/acetone.jpg';
import bioethanol from '../../../assets/courses/premiere/c4/bioethanol.png';

const IMG = {
  poste: img(posteTravail, 'Mains gantées de bleu ouvrant une boîte de Petri près d’un bec Bunsen allumé ; sur la paillasse : flacon pulvérisateur de désinfectant, rouleau de papier absorbant, collecteur jaune pour objets piquants, portoir de tubes et lunettes de protection.', 'photo', 1536, 1024),
  dommage: img(apparitionDommage, 'Schéma d’apparition du dommage : deux cercles « Danger » et « Manipulateur » se chevauchent ; leur zone commune, la situation exposante, mène par une flèche à un « Événement dangereux » puis au « Dommage ». Une barrière « Prévention » est placée avant l’événement dangereux, une barrière « Protection » avant le dommage.', 'schema', 1400, 933),
  voies: img(voiesExposition, 'Schéma d’une manipulatrice en blouse montrant les voies d’exposition : inhalation par le nez, ingestion par la bouche, contact avec les yeux, contact avec la peau de la main, piqûre ou coupure au bout du doigt.', 'schema', 933, 1400),
  pictos: img(pictogrammesSgh, 'Les neuf pictogrammes de danger du SGH, losanges à bordure rouge : explosif, inflammable, comburant, gaz sous pression, corrosif, toxique, nocif ou irritant, danger pour la santé, danger pour l’environnement.', 'schema', 1400, 933),
  psm: img(psm, 'Poste de sécurité microbiologique : enceinte en acier inoxydable à vitre frontale relevée, avec boîtes de Petri, tubes, micropipette et stérilisateur électrique d’anse ; des mains gantées travaillent par l’ouverture.', 'photo', 1536, 1024),
  schema5m: img(schema5m, 'Schéma circulaire des 5 M : qui est le Manipulateur ? Quelle est la Matière utilisée ? Dans quel Milieu ? Quelle est la Méthode de travail ? Avec quel Matériel ?', 'schema', 660, 520),
  epi: img(epi, 'Pictogrammes d’obligation bleus : mettre une blouse, utiliser des lunettes, utiliser des gants, utiliser la hotte aspirante, mettre un masque.', 'schema', 1018, 170),
  dangerBio: img(dangerBio, 'Extrait de manuel sur le danger biologique, accompagné du pictogramme triangulaire jaune du danger biologique.', 'schema', 1794, 590),
  baobab: img(baobab, 'En-tête de la base de données Baobab (Base d’observation des agents biologiques) sur le site de l’INRS.', 'schema', 1978, 544),
  dasri: img(dasri, 'Document sur les DASRI : fût en plastique rigide jaune pour les déchets piquants et coupants, caisse en carton doublée d’un sac plastique jaune pour les déchets solides.', 'schema', 1778, 788),
  acetone: img(acetone, 'Étiquette d’acétone : pictogrammes flamme et point d’exclamation, mention « DANGER », mentions de danger et conseils de prudence.', 'schema', 600, 696),
  bioethanol: img(bioethanol, 'Étiquette simplifiée de bioéthanol à 96 % portant un pictogramme flamme et un pictogramme environnement, avec des températures d’ébullition et de fusion.', 'schema', 1374, 318),
};

const lesson = {
  version: 2,
  id: 'c4-risques-securite-laboratoire',
  duration: 'Environ 4 séances (analyse de documents, cours et application en TP)',
  hook: {
    image: IMG.poste,
    question: 'Une boîte de Petri, un bec Bunsen, un flacon d’acétone… Où sont les dangers, et comment travailler sans prendre de risque ?',
    text: 'Au laboratoire de biotechnologies, tu manipules des micro-organismes, des produits chimiques, des flammes, de l’électricité. Le « danger zéro » n’existe pas, mais le risque, lui, se maîtrise. Dans ce chapitre, tu apprends la démarche des professionnels : identifier les dangers, analyser les risques d’une manipulation avant de la faire, puis appliquer les bons gestes pour te protéger, protéger les autres et protéger ton travail.',
  },
  objectives: [
    'Distinguer danger, risque et dommage, et utiliser le vocabulaire précis de la prévention.',
    'Identifier un danger biologique, chimique ou électrique grâce aux pictogrammes, aux étiquettes et aux fiches de données de sécurité.',
    'Relier un danger aux voies d’exposition et classer un agent biologique dans son groupe de risque.',
    'Décrire une situation de travail avec les 5 M et conduire une analyse a priori des risques.',
    'Évaluer un risque à partir de la probabilité et de la gravité du dommage, puis relier les mesures de prévention et de protection (EPC, EPI) à cette analyse.',
    'Appliquer les gestes de prévention : lavage des mains, désinfection de la paillasse, tri des déchets (DASRI), conduite à tenir en cas d’accident.',
  ],
  prerequisites: [
    'Les micro-organismes : bactéries, levures et moisissures (module 1).',
    'Les règles de base du laboratoire vues en seconde : blouse, cheveux attachés, paillasse rangée.',
  ],
  program: [
    'Identifier un danger biologique, chimique, électrique.',
    'Mettre en relation les dangers et les risques encourus au laboratoire (pictogrammes, mentions de danger, mentions d’avertissement).',
    'Identifier les différentes voies d’exposition relatives à un danger en lien avec la chaîne de transmission.',
    'Distinguer le risque pour le manipulateur et l’environnement, du risque pour le produit.',
    'Identifier au sein d’une situation de travail une situation exposante ; dégager, au sein d’une situation exposante, les événements dangereux les plus probables.',
    'Faire le lien entre le risque, la probabilité d’apparition du dommage et sa gravité.',
    'Mettre en relation les mesures de prévention proposées et l’analyse des risques (poste de travail, équipements de protection collective et individuelle).',
    'Mettre en œuvre une gestuelle adaptée aux risques analysés ; appliquer une procédure de désinfection de la paillasse et de lavage des mains ; choisir le conteneur à déchets adapté.',
  ],

  course: {
    parts: [
      {
        title: 'Le vocabulaire de la prévention : danger, risque, dommage',
        intro: 'Pour parler de sécurité avec précision, il faut d’abord des mots justes. Le plus important : un danger n’est pas un risque.',
        blocks: [
          { type: 'definition', term: 'Danger', text: 'propriété **intrinsèque** d’un produit, d’un agent biologique, d’un équipement ou d’une situation, capable de causer un dommage. Le danger existe en lui-même : un flacon d’acide concentré est dangereux, même fermé dans une armoire.' },
          { type: 'definition', term: 'Situation de travail', text: 'ensemble des éléments réunis lors d’une manipulation : la personne qui travaille (le **manipulateur** ou opérateur), ce qu’elle manipule, avec quel matériel, selon quelle méthode et dans quel lieu.' },
          { type: 'definition', term: 'Situation exposante', text: 'moment de la situation de travail où le manipulateur se trouve **en présence du danger** (on dit qu’il est exposé). Exemple : ouvrir un tube de culture, transvaser un solvant.' },
          { type: 'definition', term: 'Événement dangereux', text: 'événement (on dit aussi **événement déclencheur**) qui provoque la rencontre entre le danger et le corps du manipulateur : projection, renversement, bris de verre, fuite, inflammation…' },
          { type: 'definition', term: 'Dommage', text: 'atteinte à la santé qui en résulte : brûlure, coupure, irritation, infection, allergie, intoxication… Par extension, on parle aussi de dommage matériel (incendie, matériel détruit).' },
          { type: 'definition', term: 'Risque', text: 'possibilité qu’un dommage survienne quand un manipulateur est exposé à un danger. Il dépend de la **probabilité** d’apparition du dommage et de sa **gravité**. ==Sans exposition, il n’y a pas de risque, même si le danger existe.==' },
          { type: 'figure', image: IMG.dommage, caption: 'Le processus d’apparition du dommage. La **prévention** agit en amont pour éviter l’exposition ou l’événement dangereux ; la **protection** agit en aval pour éviter ou limiter le dommage.', size: 'wide' },
          {
            type: 'flow',
            title: 'Du danger au dommage',
            steps: [
              { title: 'Danger', text: 'ce qui peut nuire' },
              { title: 'Situation exposante', text: 'le manipulateur est en présence du danger' },
              { title: 'Événement dangereux', text: 'ce qui déclenche le contact' },
              { title: 'Dommage', text: 'l’atteinte à la santé' },
            ],
            caption: 'Il suffit de « couper » un maillon de cette chaîne pour empêcher le dommage : c’est tout le principe de la prévention.',
          },
          {
            type: 'example',
            title: 'le flacon d’acide',
            text: [
              'Un flacon d’acide chlorhydrique concentré rangé dans l’armoire ventilée : il y a un **danger** (produit corrosif), mais pas de risque, car personne n’est exposé.',
              'Un élève transvase cet acide sans lunettes : c’est une **situation exposante**. Une **projection** (événement dangereux) peut atteindre son œil et provoquer une **brûlure de la cornée** (dommage). Le risque est élevé : la probabilité n’est pas négligeable et le dommage est grave.',
            ],
          },
          {
            type: 'compare',
            title: 'Ne pas confondre danger et risque',
            columns: [
              { title: 'Danger', subtitle: 'ce qui peut nuire', items: ['Propriété du produit, de l’agent ou de la situation.', 'Ne dépend pas du manipulateur.', 'On le **repère** : pictogramme, étiquette, fiche de données de sécurité, groupe de risque.'] },
              { title: 'Risque', subtitle: 'la possibilité que cela nuise', items: ['N’existe que s’il y a **exposition**.', 'Dépend de la probabilité et de la gravité du dommage.', 'On l’**évalue**, puis on le **réduit** par des mesures adaptées.'] },
            ],
          },
          { type: 'definition', term: 'Prévention', text: 'ensemble des dispositions prises **avant** la manipulation pour éviter ou réduire les risques. Au sens strict, une mesure de prévention diminue la **probabilité** que le dommage survienne, alors qu’une mesure de **protection** en diminue la **gravité** (voir partie 5).' },
          {
            type: 'retenir',
            items: [
              'Le **danger** est une propriété ; le **risque** est la possibilité d’un dommage lors d’une exposition au danger.',
              'Danger + manipulateur = situation exposante ; un événement dangereux peut alors provoquer un dommage.',
              'Le risque dépend de la probabilité d’apparition du dommage et de sa gravité.',
              'Prévenir, c’est casser un maillon de la chaîne qui mène au dommage.',
            ],
          },
        ],
      },

      {
        title: 'Identifier les dangers au laboratoire',
        intro: 'Avant toute manipulation, on recense les dangers présents. Au laboratoire de biotechnologies, ils sont de plusieurs natures.',
        blocks: [
          {
            type: 'table',
            caption: 'Les principaux dangers du laboratoire de biotechnologies',
            head: ['Type de danger', 'Exemples au laboratoire', 'Dommages possibles', 'Comment le repérer ?'],
            rows: [
              ['Biologique', 'Cultures de bactéries, levures, moisissures ; échantillons d’eau, de sol, de sang', 'Infection, allergie, intoxication par des toxines', 'Pictogramme triangulaire jaune du danger biologique ; groupe de risque de l’agent'],
              ['Chimique', 'Acides et bases, solvants (éthanol, acétone), réactifs colorés, désinfectants', 'Brûlure chimique, irritation, intoxication, incendie', 'Étiquette : pictogrammes SGH, mention d’avertissement, mentions de danger ; fiche de données de sécurité'],
              ['Électrique', 'Appareils branchés (bain-marie, plaque chauffante, générateur d’électrophorèse), multiprises, câbles', 'Électrisation, électrocution, brûlure, départ de feu', 'Pictogramme triangulaire jaune avec un éclair ; état du matériel'],
              ['Thermique', 'Bec Bunsen, plaque chauffante, autoclave, étuve ; azote liquide (froid)', 'Brûlure par la chaleur ou par le froid, incendie', 'Consignes du poste de travail, notice de l’appareil'],
              ['Mécanique', 'Verrerie cassée, lames, aiguilles, centrifugeuse', 'Coupure, piqûre (porte d’entrée pour les micro-organismes)', 'Consignes, notice de l’appareil'],
              ['Rayonnements', 'Lampe UV d’un transilluminateur ou d’un poste de sécurité microbiologique', 'Brûlure de la peau et des yeux', 'Pictogramme d’avertissement, notice'],
            ],
          },
          { type: 'p', text: 'Les **produits chimiques** sont classés et étiquetés selon le **règlement européen CLP** (_Classification, Labelling, Packaging_, n° 1272/2008), qui applique le **SGH**, le Système général harmonisé de classification et d’étiquetage des produits chimiques défini par l’ONU. Chaque danger appartient à une **classe de danger** : dangers **physiques** (explosif, inflammable…), dangers pour la **santé** (toxicité, corrosion…) et dangers pour l’**environnement**.' },
          { type: 'figure', image: IMG.pictos, caption: 'Les neuf pictogrammes de danger du SGH : un symbole noir dans un losange à bordure rouge, sur fond blanc.', size: 'wide' },
          {
            type: 'table',
            caption: 'Lire les pictogrammes de danger chimique',
            head: ['Code', 'Pictogramme', 'Ce qu’il signale', 'Exemple au laboratoire'],
            rows: [
              ['SGH01', 'Bombe qui explose', 'Produit explosif (peut exploser au contact d’une flamme, d’un choc, d’un frottement)', 'Certains peroxydes organiques'],
              ['SGH02', 'Flamme', 'Produit **inflammable** : s’enflamme facilement près d’une flamme ou d’une étincelle', 'Éthanol, acétone, cyclohexane'],
              ['SGH03', 'Flamme au-dessus d’un cercle', 'Produit **comburant** : favorise ou aggrave un incendie', 'Permanganate de potassium'],
              ['SGH04', 'Bouteille de gaz', 'Gaz sous pression : peut exploser sous l’effet de la chaleur ; gaz liquéfié très froid', 'Bouteille de CO~2~, azote liquide'],
              ['SGH05', 'Corrosion', 'Produit **corrosif** : brûle la peau, les yeux, attaque les métaux', 'Acide chlorhydrique concentré, hydroxyde de sodium (soude)'],
              ['SGH06', 'Tête de mort', '**Toxicité aiguë** : peut tuer ou intoxiquer gravement, même en petite quantité', 'Méthanol'],
              ['SGH07', 'Point d’exclamation', 'Produit nocif, irritant (peau, yeux, voies respiratoires), sensibilisant cutané, ou provoquant somnolence et vertiges', 'Acétone, éthanol, sulfate de cuivre'],
              ['SGH08', 'Danger pour la santé (silhouette)', 'Effets graves à long terme : cancérogène, mutagène, toxique pour la reproduction, allergie respiratoire', 'Formaldéhyde (formol), méthanol'],
              ['SGH09', 'Environnement', 'Toxique pour les organismes aquatiques', 'Sulfate de cuivre, nitrate d’argent'],
            ],
          },
          { type: 'definition', term: 'Mention d’avertissement', text: 'un seul mot, écrit sur l’étiquette, qui indique le niveau de gravité du danger : « **Danger** » pour les dangers les plus graves, « **Attention** » pour les dangers moins graves.' },
          { type: 'definition', term: 'Mention de danger (phrase H)', text: 'phrase standardisée qui décrit la **nature du danger**, avec un code : H2.. pour les dangers physiques, H3.. pour la santé, H4.. pour l’environnement. Exemple : H225 « Liquide et vapeurs très inflammables ».' },
          { type: 'definition', term: 'Conseil de prudence (phrase P)', text: 'phrase standardisée qui indique **comment se protéger** et réagir : P1.. généralités, P2.. prévention, P3.. intervention en cas d’accident, P4.. stockage, P5.. élimination. Exemple : P210 « Tenir à l’écart de la chaleur, des surfaces chaudes, des étincelles, des flammes nues… ».' },
          { type: 'warning', title: 'Ne pas confondre', text: 'La **mention d’avertissement** est un seul mot (« Danger » ou « Attention ») ; la **mention de danger** est une phrase qui décrit le danger (phrase H). Les deux figurent sur l’étiquette, avec les pictogrammes et les conseils de prudence.' },
          { type: 'definition', term: 'Fiche de données de sécurité (FDS)', text: 'document de **16 rubriques** fourni obligatoirement par le fournisseur d’un produit chimique dangereux. Elle complète l’étiquette : dangers, premiers secours, conditions de stockage, équipements de protection, élimination…' },
          {
            type: 'table',
            caption: 'Les rubriques de la FDS les plus utiles au laboratoire',
            head: ['Rubrique', 'Contenu', 'Question à laquelle elle répond'],
            rows: [
              ['2', 'Identification des dangers', 'Quels sont les dangers ? (pictogrammes, mentions H et P)'],
              ['4', 'Premiers secours', 'Que faire en cas de contact, d’inhalation, d’ingestion ?'],
              ['7', 'Manipulation et stockage', 'Comment manipuler et ranger le produit ?'],
              ['8', 'Contrôles de l’exposition / protection individuelle', 'Quels gants, quelles lunettes, faut-il une hotte ?'],
              ['13', 'Considérations relatives à l’élimination', 'Comment jeter le produit et son emballage ?'],
            ],
          },
          { type: 'note', title: 'Les mélanges interdits', text: 'Certains produits, sans grand danger seuls, deviennent dangereux ensemble. Exemple classique : l’**eau de Javel** mélangée à un **acide** libère du **dichlore**, un gaz très toxique. On ne mélange jamais des produits sans protocole, et on lit la rubrique 10 de la FDS (stabilité et réactivité).' },
          { type: 'p', text: 'Le **danger électrique** est signalé par un triangle jaune bordé de noir contenant un éclair. Le passage du courant dans le corps provoque une **électrisation** (brûlures, contractions musculaires, troubles du rythme cardiaque) qui peut être mortelle : on parle alors d’**électrocution**. Au laboratoire, l’eau et l’électricité se côtoient (bains-marie, électrophorèse) : on vérifie l’état des câbles, on ne touche jamais un appareil avec les mains mouillées, on éloigne les liquides des prises et on débranche en tirant sur la fiche, pas sur le câble.' },
          {
            type: 'cards',
            items: [
              { title: 'Losange rouge', text: 'Pictogramme de **danger chimique** (SGH), sur les étiquettes des produits.', tone: 'red' },
              { title: 'Triangle jaune', text: 'Panneau d’**avertissement** : danger biologique, danger électrique, rayonnement…', tone: 'yellow' },
              { title: 'Rond bleu', text: 'Panneau d’**obligation** : porter une blouse, des gants, des lunettes…', tone: 'blue' },
              { title: 'Rond rouge barré', text: 'Panneau d’**interdiction** : défense de fumer, de manger, de boire…', tone: 'white' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Les dangers du laboratoire sont biologiques, chimiques, électriques, mais aussi thermiques, mécaniques et liés aux rayonnements.',
              'Les produits chimiques portent les pictogrammes du SGH (losange rouge), une mention d’avertissement (« Danger » ou « Attention »), des mentions de danger (H) et des conseils de prudence (P).',
              'La fiche de données de sécurité (16 rubriques) complète l’étiquette : on la consulte avant de manipuler un produit inconnu.',
              'La forme d’un panneau a un sens : losange (danger chimique), triangle (avertissement), rond bleu (obligation), rond barré (interdiction).',
            ],
          },
        ],
      },

      {
        title: 'Le danger biologique : agents, groupes de risque et voies d’exposition',
        intro: 'La plupart des micro-organismes sont inoffensifs, voire utiles. Mais certains peuvent rendre malade : il faut savoir lesquels, et par où ils peuvent entrer dans l’organisme.',
        blocks: [
          { type: 'definition', term: 'Agent biologique', text: 'micro-organisme (bactérie, levure, moisissure, virus…), y compris génétiquement modifié, culture de cellules ou parasite humain, susceptible de provoquer une **infection**, une **allergie** ou une **intoxication** (définition du Code du travail).' },
          { type: 'definition', term: 'Agent pathogène', text: 'agent biologique capable de provoquer une maladie. Un agent **opportuniste** ne provoque une maladie que chez des personnes fragilisées (immunité affaiblie, plaie, brûlure). Un agent **non pathogène** ne rend pas malade une personne en bonne santé.' },
          { type: 'p', text: 'Les agents biologiques **infectieux** sont classés en **quatre groupes de risque** croissant (article R. 4421-3 du Code du travail), selon quatre critères : la gravité de la maladie, le danger pour les travailleurs, le risque de propagation dans la population et l’existence d’une prévention (vaccin) ou d’un traitement efficace.' },
          {
            type: 'table',
            caption: 'Les quatre groupes de risque des agents biologiques',
            head: ['Groupe', 'Définition', 'Exemples', 'Confinement'],
            rows: [
              ['1', 'Agent **non susceptible** de provoquer une maladie chez l’être humain.', '_Saccharomyces cerevisiae_ (levure de boulanger), bactéries lactiques du yaourt, _Bacillus subtilis_, _Escherichia coli_ K12 (souche de laboratoire)', 'Niveau 1 : bonnes pratiques de laboratoire'],
              ['2', 'Peut provoquer une maladie et constituer un danger pour les travailleurs ; propagation dans la collectivité **peu probable** ; il existe généralement une prévention ou un traitement efficaces.', '_Staphylococcus aureus_, _Pseudomonas aeruginosa_, souches pathogènes d’_Escherichia coli_, virus de la grippe saisonnière', 'Niveau 2'],
              ['3', 'Peut provoquer une maladie **grave** et constituer un danger sérieux pour les travailleurs ; propagation dans la collectivité **possible** ; il existe généralement une prévention ou un traitement efficaces.', '_Mycobacterium tuberculosis_ (tuberculose), virus de l’immunodéficience humaine (VIH)', 'Niveau 3'],
              ['4', 'Provoque une maladie **grave** et constitue un danger sérieux ; risque de propagation dans la collectivité **élevé** ; il n’existe généralement **ni prévention ni traitement** efficaces.', 'Virus Ebola, virus de Marburg', 'Niveau 4'],
            ],
          },
          { type: 'definition', term: 'Niveau de confinement', text: 'ensemble de mesures (conception des locaux, équipements, pratiques de travail) adapté au groupe de l’agent manipulé, du **niveau 1** (laboratoire d’enseignement classique) au **niveau 4** (laboratoire de haute sécurité, comme le laboratoire P4 Jean Mérieux de l’Inserm à Lyon).' },
          { type: 'warning', title: 'La règle d’or au lycée', text: 'Au lycée, on travaille principalement avec des micro-organismes du **groupe 1**. Mais toute culture issue d’un prélèvement (eau, sol, peau, air) ou dont on ne connaît pas l’identité est manipulée **comme si elle était pathogène**.' },
          { type: 'p', text: 'Pour qu’un agent biologique provoque un dommage, il doit passer de son **réservoir** jusqu’au manipulateur : c’est la **chaîne de transmission**. Chaque maillon est un point où l’on peut agir.' },
          {
            type: 'flow',
            title: 'La chaîne de transmission',
            steps: [
              { title: 'Réservoir', text: 'culture, échantillon, personne porteuse, eau, sol' },
              { title: 'Mode de transmission', text: 'contact (mains, surfaces), aérosols, projections, objets piquants ou coupants' },
              { title: 'Porte d’entrée', text: 'voie respiratoire, digestive, cutanée, oculaire, percutanée' },
              { title: 'Manipulateur exposé', text: 'infection, allergie, intoxication possibles' },
            ],
          },
          {
            type: 'compare',
            title: 'Mode d’exposition ou voie d’exposition ?',
            columns: [
              { title: 'Mode d’exposition', subtitle: 'comment le danger arrive jusqu’au manipulateur', items: ['Contact direct avec une culture ou un produit.', 'Contact indirect : mains, paillasse, matériel contaminés.', 'Aérosols (fines gouttelettes en suspension dans l’air), vapeurs, projections.', 'Blessure par un objet piquant ou coupant.'] },
              { title: 'Voie d’exposition', subtitle: 'par où il entre dans l’organisme', items: ['Voie **respiratoire** : inhalation.', 'Voie **digestive** : ingestion.', 'Voie **cutanée et muqueuse** : contact avec la peau (surtout lésée) et les yeux.', 'Voie **percutanée** : piqûre ou coupure.'] },
            ],
          },
          { type: 'figure', image: IMG.voies, caption: 'Les voies d’exposition d’un manipulateur : inhalation, ingestion, contact avec les yeux, contact avec la peau, piqûre ou coupure.', size: 'small' },
          {
            type: 'table',
            caption: 'Voies d’exposition : situations à risque et prévention',
            head: ['Voie', 'Situations à risque au laboratoire', 'Exemples de mesures'],
            rows: [
              ['Respiratoire (inhalation)', 'Aérosols lors du flambage brutal d’une anse chargée, de l’ouverture d’un tube agité ; vapeurs de solvant', 'Flamber progressivement l’anse ou utiliser une anse à usage unique ; travailler sous poste de sécurité microbiologique ou sous hotte ; reboucher les flacons'],
              ['Digestive (ingestion)', 'Pipetage à la bouche, mains portées à la bouche, aliments au laboratoire', 'Toujours utiliser un pipeteur ; interdiction de manger, boire, mâcher ; lavage des mains'],
              ['Cutanée et oculaire (contact)', 'Projections, contact avec une paillasse contaminée, plaie non protégée', 'Blouse fermée, gants, lunettes de protection ; plaies couvertes par un pansement'],
              ['Percutanée (piqûre, coupure)', 'Verrerie cassée, lames et lamelles, aiguilles', 'Manipuler le verre avec soin ; jeter les objets piquants et coupants dans un collecteur rigide'],
            ],
          },
          { type: 'note', title: 'Une ressource professionnelle : la base Baobab', text: 'L’INRS (Institut national de recherche et de sécurité) met en ligne **Baobab**, une base de données qui donne pour chaque agent biologique son groupe de risque, ses réservoirs, ses voies de transmission et les maladies qu’il peut provoquer. Tu l’utilises dans l’activité 3.' },
          {
            type: 'retenir',
            items: [
              'Un agent biologique peut provoquer une infection, une allergie ou une intoxication.',
              'Les agents infectieux sont classés en 4 groupes de risque croissant ; le groupe impose un niveau de confinement.',
              'Chaîne de transmission : réservoir → mode de transmission → porte d’entrée → manipulateur.',
              'Voies d’exposition : respiratoire, digestive, cutanée et oculaire, percutanée.',
            ],
          },
        ],
      },

      {
        title: 'Analyser les risques a priori : la démarche',
        intro: '« A priori » signifie « avant » : on analyse les risques avant de manipuler, pour prévoir les bonnes mesures. On ne découvre pas les risques au moment de l’accident.',
        blocks: [
          {
            type: 'steps',
            title: 'Les étapes de l’analyse a priori des risques',
            items: [
              { title: 'Décrire la situation de travail', text: 'avec la méthode des **5 M** : Manipulateur, Matière, Matériel, Méthode, Milieu.' },
              { title: 'Identifier les dangers et les situations exposantes', text: 'en suivant la procédure étape par étape (le **logigramme** de la procédure opératoire) : à quel moment le manipulateur est-il en présence du danger ?' },
              { title: 'Dégager les événements dangereux les plus probables', text: 'et les dommages qu’ils peuvent provoquer.' },
              { title: 'Évaluer le risque', text: 'en estimant la **probabilité** du dommage et sa **gravité**, pour traiter en priorité les risques les plus élevés.' },
              { title: 'Mettre en relation les mesures de prévention et de protection', text: 'avec chaque risque identifié.' },
            ],
          },
          { type: 'figure', image: IMG.schema5m, caption: 'La méthode des 5 M : cinq questions pour décrire complètement une situation de travail.', size: 'small' },
          {
            type: 'table',
            caption: 'Décrire une situation de travail avec les 5 M',
            head: ['Les 5 M', 'Question à se poser', 'Exemple : préparer une suspension bactérienne'],
            rows: [
              ['Manipulateur', 'Qui travaille ? Avec quelle formation, quelle tenue ?', 'Un élève de Première STL, en blouse, formé aux gestes d’asepsie'],
              ['Matière', 'Quel produit, quel agent biologique ? En quelle quantité ?', 'Une culture bactérienne sur gélose, de l’eau physiologique stérile'],
              ['Matériel', 'Avec quels instruments et appareils ?', 'Anse de platine, bec Bunsen, tubes, portoir, agitateur'],
              ['Méthode', 'Selon quelle procédure, dans quel ordre ?', 'Prélever une colonie, la mettre en suspension, homogénéiser'],
              ['Milieu', 'Où ? Dans quel environnement ?', 'Paillasse de microbiologie, zone d’asepsie autour de la flamme, salle partagée avec d’autres élèves'],
            ],
          },
          { type: 'p', text: 'On reprend ensuite chaque étape de la procédure et on se demande : **le manipulateur est-il en présence d’un danger ?** Si oui, c’est une situation exposante. Puis : **que peut-il arriver ?** On retient les événements dangereux les plus probables (renversement, projection, aérosol, brûlure…) et le dommage associé.' },
          { type: 'definition', term: 'Évaluation du risque', text: 'estimation du niveau de risque à partir de la **probabilité** d’apparition du dommage (est-ce rare ou fréquent ?) et de sa **gravité** (est-ce léger ou grave ?).' },
          {
            type: 'formula',
            title: 'Estimer le niveau d’un risque',
            expression: 'Niveau de risque = P × G',
            legend: [
              { symbol: 'P', meaning: 'probabilité d’apparition du dommage (1 = rare, 2 = possible, 3 = fréquente)' },
              { symbol: 'G', meaning: 'gravité du dommage (1 = légère, 2 = sérieuse, 3 = grave)' },
            ],
          },
          {
            type: 'table',
            caption: 'Grille d’évaluation des risques (exemple de cotation)',
            head: ['Gravité ↓ / Probabilité →', '1 — Rare', '2 — Possible', '3 — Fréquente'],
            rows: [
              ['3 — Grave (séquelles, hospitalisation)', '3 : moyen', '6 : élevé', '9 : élevé'],
              ['2 — Sérieuse (soins médicaux)', '2 : faible', '4 : moyen', '6 : élevé'],
              ['1 — Légère (sans soins particuliers)', '1 : faible', '2 : faible', '3 : moyen'],
            ],
          },
          { type: 'example', title: 'deux risques comparés', text: ['Se brûler légèrement les doigts en approchant de la flamme : probabilité possible (2), gravité sérieuse (2) → niveau 4, risque **moyen** à réduire.', 'Recevoir une projection d’acide concentré dans l’œil en transvasant sans lunettes : probabilité possible (2), gravité grave (3) → niveau 6, risque **élevé** : on ne manipule pas tant que des mesures ne l’ont pas réduit.'] },
          { type: 'warning', text: 'Le risque n’est jamais nul. L’objectif de l’analyse est de le rendre **acceptable** en agissant d’abord sur les risques les plus élevés.' },
          { type: 'note', title: 'A priori ou a posteriori ?', text: 'L’analyse **a priori** se fait avant de manipuler. L’analyse **a posteriori** se fait après un accident ou un « presque accident » : on en recherche les causes pour éviter qu’il se reproduise. On peut aussi relire une procédure a posteriori pour vérifier que chaque mesure de prévention répond bien à un risque identifié.' },
          {
            type: 'retenir',
            items: [
              'L’analyse a priori des risques se fait **avant** la manipulation.',
              'On décrit la situation de travail avec les 5 M, puis on repère situations exposantes, événements dangereux et dommages.',
              'Le niveau de risque combine la probabilité d’apparition du dommage et sa gravité.',
              'On traite en priorité les risques les plus élevés.',
            ],
          },
        ],
      },

      {
        title: 'Prévenir et se protéger : des mesures adaptées à l’analyse',
        intro: 'Chaque mesure doit répondre à un risque identifié. Il existe un ordre de priorité : on porte des gants, mais seulement après avoir réfléchi à tout le reste.',
        blocks: [
          {
            type: 'list',
            title: 'L’ordre de priorité des mesures (principes généraux de prévention)',
            ordered: true,
            items: [
              '**Supprimer le danger** ou le **remplacer** par ce qui est moins dangereux : utiliser une souche du groupe 1 plutôt que du groupe 2, une anse à usage unique plutôt qu’une anse à flamber, un produit moins toxique.',
              '**Réduire l’exposition** par l’organisation : poste de travail rangé, quantités minimales, procédure claire, formation du manipulateur.',
              'Mettre en place des **équipements de protection collective** (EPC), prioritaires.',
              'Compléter par des **équipements de protection individuelle** (EPI).',
              '**Informer** : signalisation, consignes, étiquetage.',
            ],
          },
          {
            type: 'compare',
            title: 'Mesures de prévention et mesures de protection',
            columns: [
              { title: 'Prévention', subtitle: 'agit sur la probabilité', items: ['Empêche la situation exposante ou l’événement dangereux.', 'Exemples : substitution d’un produit, procédure écrite, rangement de la paillasse, pipeteur, interdiction de manger.', 'Agit **avant** l’événement dangereux.'] },
              { title: 'Protection', subtitle: 'agit sur la gravité', items: ['Interpose une barrière entre le danger et le manipulateur, ou limite les conséquences.', 'Exemples : hotte, poste de sécurité microbiologique, gants, lunettes, lave-œil, douche de sécurité.', 'Agit **pendant ou après** l’événement dangereux.'] },
            ],
          },
          { type: 'note', title: 'Une question de vocabulaire', text: 'Dans le langage courant du laboratoire, on parle souvent de « mesures de prévention » pour désigner l’ensemble des mesures, protections comprises. L’essentiel est de savoir **sur quel maillon** de la chaîne agit chaque mesure.' },
          { type: 'definition', term: 'Équipement de protection collective (EPC)', text: 'dispositif qui protège **toutes les personnes présentes**, sans dépendre du comportement de chacun : hotte chimique (sorbonne), poste de sécurité microbiologique, ventilation de la salle, douche de sécurité, lave-œil, extincteur, couverture anti-feu.' },
          { type: 'definition', term: 'Équipement de protection individuelle (EPI)', text: 'équipement porté par le manipulateur pour **se protéger lui-même** : blouse en coton à manches longues fermée, lunettes de protection, gants adaptés au produit, masque.' },
          { type: 'figure', image: IMG.epi, caption: 'Pictogrammes d’obligation (ronds bleus). Attention : la blouse, les lunettes, les gants et le masque sont des EPI, mais la **hotte aspirante** est un **EPC**.', size: 'wide' },
          {
            type: 'compare',
            title: 'Hotte chimique ou poste de sécurité microbiologique ?',
            columns: [
              { title: 'Hotte chimique (sorbonne)', items: ['Aspire les vapeurs et les gaz et les rejette vers l’extérieur.', 'Protège le **manipulateur**.', 'Ne protège pas le produit d’une contamination microbienne.', 'Pour : solvants, acides concentrés, produits volatils.'] },
              { title: 'Poste de sécurité microbiologique (PSM) de type II', items: ['Flux d’air filtré par des filtres à très haute efficacité (HEPA).', 'Protège le **manipulateur**, l’**environnement** et le **produit**.', 'On y travaille sans flamme, qui perturberait le flux d’air.', 'Pour : cultures de micro-organismes, cultures de cellules.'] },
            ],
          },
          { type: 'figure', image: IMG.psm, caption: 'Travail dans un poste de sécurité microbiologique : vitre abaissée à la bonne hauteur, stérilisateur électrique d’anse à la place du bec Bunsen. On travaille au centre du plan de travail, sans masquer la grille avant qui aspire l’air.', size: 'wide' },
          { type: 'p', text: 'Au laboratoire de microbiologie, deux objectifs se combinent. La **sécurité** protège le manipulateur et l’environnement contre les micro-organismes. L’**asepsie** protège le **produit** (la culture, l’échantillon) contre les micro-organismes apportés par le manipulateur ou par l’air : une culture contaminée donne des résultats faux.' },
          {
            type: 'compare',
            title: 'Risque pour le manipulateur et l’environnement, risque pour le produit',
            columns: [
              { title: 'Protéger le manipulateur et l’environnement', items: ['Éviter infection, allergie, intoxication.', 'Éviter que des micro-organismes sortent du laboratoire.', 'Mesures : blouse, gants, lavage des mains en fin de séance, tri des déchets, PSM.'] },
              { title: 'Protéger le produit', items: ['Éviter que la culture soit contaminée par la flore de la peau, de l’air, de la paillasse.', 'Garantir des résultats fiables.', 'Mesures : matériel stérile, travail dans la zone d’asepsie du bec Bunsen ou sous PSM, gestes rapides, tubes vite refermés.'] },
            ],
          },
          { type: 'p', text: 'Certaines mesures protègent à la fois le manipulateur et le produit : le **lavage des mains** avant et après la manipulation, et la **désinfection de la paillasse**.' },
          { type: 'definition', term: 'Désinfection', text: 'opération qui élimine ou tue les micro-organismes présents sur une surface inerte (paillasse, matériel), au moment où on la pratique. Sur la peau ou une plaie, on parle d’**antisepsie**. À ne pas confondre avec la **stérilisation**, qui détruit tous les micro-organismes d’un objet, y compris les formes les plus résistantes.' },
          {
            type: 'steps',
            title: 'Laver ses mains (lavage simple)',
            items: [
              'Retirer montre et bijoux, remonter les manches.',
              'Mouiller les mains et les poignets, prendre une dose de savon.',
              'Frotter **au moins 30 secondes** : paumes, dos des mains, entre les doigts, pouces, bout des doigts et ongles, poignets.',
              'Rincer abondamment, des doigts vers les poignets.',
              'Sécher par tamponnement avec un essuie-mains à usage unique, puis fermer le robinet avec cet essuie-mains avant de le jeter.',
            ],
          },
          { type: 'p', text: 'On se lave les mains **en arrivant** au laboratoire et avant de manipuler, **après** la manipulation, **après avoir retiré ses gants**, après tout contact avec un produit contaminé et **en quittant** le laboratoire.' },
          {
            type: 'steps',
            title: 'Désinfecter la paillasse',
            items: [
              'Dégager la paillasse : seuls le matériel utile et le cahier restent à proximité (sacs et vestes au vestiaire).',
              'Pulvériser le désinfectant fourni sur toute la surface de travail.',
              'Étaler avec du papier absorbant à usage unique, en allant de la zone la plus propre vers la zone la plus sale.',
              'Respecter le **temps de contact** indiqué pour le désinfectant, puis laisser sécher.',
              'Jeter le papier dans la poubelle adaptée. Recommencer **en fin de séance** et immédiatement en cas de renversement.',
            ],
          },
          {
            type: 'list',
            title: 'Les règles de base, à chaque séance',
            items: [
              'Blouse en coton à manches longues, **fermée** ; cheveux longs attachés ; chaussures fermées.',
              'Ne jamais manger, boire, mâcher un chewing-gum ou se maquiller au laboratoire.',
              'Ne **jamais pipeter à la bouche** : toujours utiliser un pipeteur ou une micropipette.',
              'Paillasse dégagée, téléphone rangé ; lire le protocole et les étiquettes avant de commencer.',
              'Signaler immédiatement au professeur tout incident, même minime (tube renversé, verre cassé, coupure).',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Ordre de priorité : supprimer ou remplacer le danger, réduire l’exposition, protection collective (EPC), puis protection individuelle (EPI).',
              'La prévention réduit la probabilité du dommage ; la protection réduit sa gravité.',
              'Un EPC protège toutes les personnes présentes (hotte, PSM) ; un EPI protège celui qui le porte (blouse, gants, lunettes).',
              'Le PSM de type II protège le manipulateur, l’environnement et le produit ; la hotte chimique protège le manipulateur.',
              'Lavage des mains (au moins 30 s) et désinfection de la paillasse, avant et après chaque manipulation.',
            ],
          },
        ],
      },

      {
        title: 'Éliminer les déchets et réagir en cas d’accident',
        intro: 'La sécurité ne s’arrête pas à la fin de la manipulation : un déchet mal trié peut blesser ou contaminer une autre personne, et un accident se gère avec des gestes précis.',
        blocks: [
          { type: 'definition', term: 'DASRI', text: '**d**échets d’**a**ctivités de **s**oins à **r**isques **i**nfectieux : déchets qui contiennent ou peuvent contenir des micro-organismes viables pathogènes ou leurs toxines. Au laboratoire : cultures, boîtes de Petri, tubes, cônes et pipettes ayant servi, lames et lamelles, gants et papier contaminés. Les **objets piquants ou coupants** sont toujours éliminés dans cette filière.' },
          { type: 'p', text: 'Les DASRI sont placés dans des emballages **jaunes**, à **usage unique**, **résistants** et **imperméables**, munis d’un trait de **limite de remplissage** et d’un dispositif de **fermeture définitive**, et marqués du pictogramme du danger biologique. Une entreprise habilitée les transporte vers une installation qui les **incinère** ou les **désinfecte** avant leur élimination. Selon l’organisation du laboratoire, les cultures peuvent aussi être décontaminées à l’**autoclave** avant d’être éliminées.' },
          { type: 'figure', image: IMG.dasri, caption: 'Deux emballages DASRI : un collecteur rigide pour les déchets piquants et coupants, une caisse en carton doublée d’un sac plastique pour les déchets solides mous.', size: 'wide' },
          {
            type: 'table',
            caption: 'Choisir le conteneur adapté',
            head: ['Déchet', 'Conteneur', 'Pourquoi ?'],
            rows: [
              ['Lames, lamelles, pipettes Pasteur en verre, aiguilles, verre cassé contaminé', 'Collecteur **rigide** en plastique jaune (« fût » pour piquants, coupants, cassants)', 'Résiste à la perforation : personne ne se blesse en le manipulant.'],
              ['Boîtes de Petri en plastique, gants, cônes, papier absorbant contaminé, écouvillons', 'Caisse en **carton doublée d’un sac plastique** jaune', 'Contient des déchets solides mous ; le sac assure l’étanchéité.'],
              ['Cultures liquides', 'Récipient étanche prévu à cet effet ou décontamination selon la procédure du laboratoire', 'Évite fuites et projections.'],
              ['Produits chimiques usagés (solvants, solutions de métaux…)', '**Bidon de récupération** étiqueté selon la catégorie de produit', 'Jamais à l’évier : ils polluent l’eau et peuvent réagir entre eux.'],
              ['Papier et emballages non contaminés', 'Poubelle ordinaire', 'Aucun risque infectieux ou chimique.'],
            ],
          },
          { type: 'warning', title: 'Erreurs dangereuses', text: 'Ne jamais jeter une lame ou une lamelle dans un sac ou un carton (risque de coupure pour la personne qui le manipule) ; ne jamais dépasser le trait de remplissage ; ne jamais vider un solvant dans l’évier.' },
          { type: 'p', text: 'En cas d’accident, on applique la règle **P-A-S** : **Protéger** (éviter un sur-accident : couper le gaz, écarter les autres élèves), **Alerter** (le professeur immédiatement ; si besoin le 15, le 18 ou le 112), **Secourir** (premiers gestes adaptés). Les gestes précis pour un produit chimique figurent dans la rubrique 4 de sa FDS.' },
          {
            type: 'table',
            caption: 'Conduite à tenir : les premiers gestes',
            head: ['Accident', 'Premiers gestes'],
            rows: [
              ['Projection dans l’œil', 'Rincer **immédiatement** à l’eau (lave-œil), paupières bien écartées, pendant au moins 15 minutes ; alerter ; consultation médicale.'],
              ['Projection de produit chimique sur la peau ou les vêtements', 'Retirer les vêtements souillés ; rincer abondamment à l’eau pendant 15 minutes (douche de sécurité si la surface est étendue) ; ne jamais tenter de « neutraliser » un acide par une base.'],
              ['Coupure ou piqûre avec du matériel contaminé', 'Ne pas faire saigner ; nettoyer à l’eau et au savon, rincer, puis désinfecter pendant au moins 5 minutes avec l’antiseptique fourni ; alerter immédiatement le professeur ; l’accident est déclaré.'],
              ['Culture renversée sur la paillasse', 'Prévenir ; recouvrir de papier absorbant ; verser le désinfectant de la périphérie vers le centre ; laisser agir le temps indiqué ; ramasser avec des gants et éliminer en DASRI ; désinfecter de nouveau.'],
              ['Brûlure par la chaleur', 'Refroidir aussitôt sous l’eau tempérée (environ 15 °C) pendant une quinzaine de minutes ; ne rien appliquer sur la brûlure ; alerter.'],
              ['Feu sur les vêtements ou dans un bécher', 'Ne pas courir ; étouffer les flammes (couverture anti-feu, couvercle sur le bécher) ; couper le gaz ; alerter.'],
              ['Ingestion d’un produit', 'Ne pas faire vomir ; rincer la bouche ; alerter ; appeler le centre antipoison, la FDS du produit à la main.'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Les DASRI vont dans des emballages jaunes, rigides pour les objets piquants, coupants ou cassants, en carton doublé d’un sac pour les déchets solides mous.',
              'Les déchets chimiques vont dans des bidons de récupération, jamais à l’évier.',
              'En cas d’accident : Protéger, Alerter, Secourir.',
              'Œil ou peau : rincer à l’eau au moins 15 minutes ; coupure contaminée : ne pas faire saigner, laver, désinfecter, alerter.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les activités suivent la progression du cours : on part d’une situation de la vie quotidienne pour construire la démarche, puis on l’applique au laboratoire. Réponds d’abord seul(e), en phrases complètes ; utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Du danger au dommage : faire cuire des pâtes',
        duration: '35 min',
        skills: ['Définir', 'Analyser', 'Classer'],
        context: 'Avant d’analyser une manipulation de laboratoire, on s’entraîne sur une situation que tout le monde connaît. Le vocabulaire et la démarche seront exactement les mêmes au laboratoire.',
        documents: [
          { label: 'Document 1', title: 'La situation support', text: ['Une personne fait cuire des pâtes dans une casserole d’eau bouillante posée sur une plaque de cuisson. Elle utilise une casserole, un couvercle, une cuillère et une passoire.', 'Elle verse les pâtes dans l’eau qui bout, remue de temps en temps, puis égoutte les pâtes dans l’évier. Le manche de la casserole dépasse du bord de la plaque.'] },
          { label: 'Document 2', title: 'La méthode des 5 M', image: IMG.schema5m, caption: 'Cinq questions pour décrire une situation de travail.', size: 'small' },
        ],
        questions: [
          {
            text: 'À partir de la situation, identifie : le danger, le manipulateur, une situation exposante, un événement dangereux et le dommage possible. Propose ensuite une définition de chacun de ces termes.',
            hint: 'Le danger est ce qui peut faire mal par lui-même ; l’événement dangereux est ce qui « déclenche » le contact ; le dommage est la blessure.',
            answer: [
              'Danger : l’eau bouillante (et la plaque chaude), capables de brûler par eux-mêmes.',
              'Manipulateur : la personne qui cuisine.',
              'Situation exposante : verser les pâtes ou égoutter la casserole, moments où la personne est tout près de l’eau bouillante.',
              'Événement dangereux : une projection d’eau bouillante, ou la casserole renversée après un choc sur le manche.',
              'Dommage : une brûlure de la main, du bras ou du corps.',
              'Définitions : le danger est ce qui peut causer un dommage ; la situation exposante est le moment où le manipulateur est en présence du danger ; l’événement dangereux provoque la rencontre entre le danger et le manipulateur ; le dommage est l’atteinte à la santé ; le risque est la possibilité que ce dommage survienne.',
            ],
          },
          {
            text: 'Décris la situation de travail « faire cuire des pâtes » en respectant la méthode des 5 M.',
            hint: 'Pour chaque M, pose la question du document 2. Le Milieu, c’est le lieu et ce qui l’entoure.',
            answer: [
              'Manipulateur : la personne qui cuisine (son expérience, son attention, sa tenue : manches amples ?).',
              'Matière : l’eau portée à ébullition (100 °C) et sa vapeur, les pâtes.',
              'Matériel : la casserole, le couvercle, la cuillère, la passoire, la plaque de cuisson.',
              'Méthode : faire bouillir l’eau, verser les pâtes, remuer, égoutter dans l’évier.',
              'Milieu : la cuisine (plan de travail encombré ou non, présence d’enfants, sol mouillé…).',
            ],
          },
          {
            text: 'Complète le schéma d’apparition du dommage (danger → situation exposante → événement dangereux → dommage) pour cette situation.',
            answer: 'Danger : eau bouillante → Situation exposante : la personne égoutte les pâtes au-dessus de l’évier → Événement dangereux : l’eau bouillante éclabousse ou la casserole glisse → Dommage : brûlure des mains et des avant-bras.',
          },
          {
            text: 'Propose une mesure de prévention et une mesure de protection pour cette situation, en précisant sur quel maillon de la chaîne chacune agit.',
            hint: 'La prévention empêche l’événement dangereux ; la protection limite la gravité du dommage s’il survient.',
            answer: [
              'Prévention : tourner le manche de la casserole vers l’intérieur de la plaque, verser les pâtes doucement, poser la passoire dans l’évier avant de verser, éloigner les enfants. Ces mesures diminuent la probabilité de l’événement dangereux.',
              'Protection : utiliser des maniques ou des gants de cuisine (équivalent d’un EPI), garder un point d’eau froide à proximité pour refroidir une brûlure. Elles limitent la gravité du dommage.',
            ],
          },
        ],
      },
      {
        title: 'Analyser la préparation d’une suspension bactérienne',
        duration: '40 min',
        skills: ['Analyser', 'Évaluer', 'Justifier'],
        context: 'Un élève de Première STL doit préparer une suspension bactérienne à partir d’une culture d’_Escherichia coli_ K12 (souche de laboratoire du groupe 1) sur gélose. Comme toute culture, elle est manipulée comme si elle était pathogène. Tu réalises l’analyse a priori des risques de cette manipulation.',
        documents: [
          {
            label: 'Document 3',
            title: 'Logigramme de la procédure opératoire',
            blocks: [
              {
                type: 'steps',
                items: [
                  'Se laver les mains, désinfecter la paillasse, allumer le bec Bunsen.',
                  'Flamber l’anse de platine jusqu’au rouge, la laisser refroidir dans la zone d’asepsie.',
                  'Ouvrir la boîte de culture près de la flamme et prélever une colonie avec l’anse.',
                  'Ouvrir le tube d’eau physiologique stérile, y décharger l’anse, refermer le tube.',
                  'Flamber l’anse chargée de bactéries, puis homogénéiser le tube à l’agitateur.',
                  'Ouvrir le tube agité pour utiliser la suspension.',
                  'Éliminer le matériel, désinfecter la paillasse, se laver les mains.',
                ],
              },
            ],
          },
          {
            label: 'Document 4',
            title: 'Grille de cotation des risques',
            blocks: [
              { type: 'table', head: ['Cotation', '1', '2', '3'], rows: [['Probabilité (P)', 'Rare', 'Possible', 'Fréquente'], ['Gravité (G)', 'Légère', 'Sérieuse', 'Grave']] },
              { type: 'p', text: 'Niveau de risque = P × G : 1 ou 2 = faible ; 3 ou 4 = moyen ; 6 ou 9 = élevé.' },
            ],
          },
        ],
        questions: [
          {
            text: 'Décris la situation de travail de préparation de la suspension bactérienne en utilisant la méthode des 5 M.',
            hint: 'Inspire-toi du tableau des 5 M de la partie 4 du cours, et utilise le document 3 pour la Méthode.',
            answer: [
              'Manipulateur : l’élève de Première STL, en blouse fermée, formé aux gestes d’asepsie.',
              'Matière : une culture bactérienne sur gélose (agent biologique) et de l’eau physiologique stérile.',
              'Matériel : anse de platine, bec Bunsen, boîte de culture, tube, portoir, agitateur.',
              'Méthode : la procédure du document 3 (prélèvement d’une colonie, mise en suspension, homogénéisation).',
              'Milieu : la paillasse de microbiologie, la zone d’asepsie autour de la flamme, une salle partagée avec d’autres élèves.',
            ],
          },
          {
            text: 'Repère, dans le logigramme, deux étapes qui constituent des situations exposantes. Précise à chaque fois le danger en cause.',
            hint: 'Cherche les moments où l’élève est en présence des bactéries, ou d’une source de chaleur.',
            answer: [
              'Étape 3 (ouverture de la boîte et prélèvement) et étape 6 (ouverture du tube agité) : l’élève est en présence de la culture bactérienne (danger biologique).',
              'Étapes 2 et 5 (flambage de l’anse) : l’élève est en présence de la flamme (danger thermique) et, à l’étape 5, de bactéries qui peuvent être projetées.',
            ],
          },
          {
            text: 'Pour l’étape 5, complète le schéma d’apparition du dommage, puis indique la voie d’exposition en cause.',
            hint: 'Que se passe-t-il quand on plonge brutalement dans la flamme une anse chargée de liquide ?',
            answer: 'Danger : la culture bactérienne → Situation exposante : flambage de l’anse chargée de bactéries → Événement dangereux : crépitement et projection de fines gouttelettes contaminées (aérosol) → Dommage : infection possible. Voies d’exposition : respiratoire (inhalation de l’aérosol), cutanée ou oculaire (projection).',
          },
          {
            text: 'À l’aide du document 4, évalue le niveau de risque de deux événements : « brûlure légère des doigts avec la flamme » et « inhalation d’un aérosol bactérien lors du flambage ». Lequel faut-il traiter en priorité ?',
            hint: 'Pour une souche du groupe 1, la gravité d’une infection est faible ; mais une culture inconnue serait cotée plus gravement.',
            answer: [
              'Brûlure légère des doigts : probabilité possible (P = 2), gravité sérieuse (G = 2) → niveau 4, risque moyen.',
              'Inhalation d’aérosol avec une souche du groupe 1 : probabilité possible (P = 2), gravité légère (G = 1) → niveau 2, risque faible. Avec une culture inconnue, manipulée comme pathogène, la gravité serait sérieuse (G = 2) → niveau 4.',
              'Ici, on traite d’abord le risque de brûlure, puis celui d’aérosol. D’autres cotations sont acceptables si elles sont justifiées.',
            ],
          },
          {
            text: 'Associe à chaque risque analysé une mesure de prévention ou de protection, et précise s’il s’agit d’un EPC, d’un EPI ou d’une mesure d’organisation.',
            answer: [
              'Brûlure : cheveux attachés, blouse en coton fermée, ne pas passer le bras au-dessus de la flamme, bec Bunsen placé au fond de la paillasse (organisation) ; éteindre ou mettre en veilleuse la flamme dès qu’elle ne sert plus.',
              'Aérosol au flambage : flamber progressivement l’anse en commençant par la tige (méthode) ou utiliser une anse stérile à usage unique (substitution) ; travailler sous poste de sécurité microbiologique (EPC) avec une culture à risque.',
              'Aérosol à l’ouverture du tube agité : laisser reposer le tube quelques instants avant de l’ouvrir (méthode).',
              'Contact avec les bactéries : blouse et, si demandé, gants (EPI) ; lavage des mains et désinfection de la paillasse en fin de manipulation (organisation).',
            ],
          },
        ],
      },
      {
        title: 'Le danger biologique : identifier et classer',
        duration: '35 min',
        skills: ['Extraire', 'Classer', 'Justifier'],
        context: 'Tous les micro-organismes ne présentent pas le même danger. Tu exploites un extrait de manuel, une fiche de la base Baobab de l’INRS et la classification officielle pour classer des agents biologiques.',
        documents: [
          { label: 'Document 5', title: 'Le danger biologique', image: IMG.dangerBio, caption: 'Extrait de manuel : agents biologiques pathogènes et maladies qu’ils provoquent.', source: 'Manuel de biotechnologies, Première STL' },
          {
            label: 'Document 6',
            title: 'Fiche Baobab : _Pseudomonas aeruginosa_',
            image: IMG.baobab,
            caption: 'La base Baobab (Base d’observation des agents biologiques) de l’INRS.',
            text: [
              '**Nom** : _Pseudomonas aeruginosa_ (bacille pyocyanique), bacille Gram négatif.',
              '**Groupe de risque** : 2. Bactérie **opportuniste**.',
              '**Réservoirs** : environnement humide (eau, sol, plantes, éviers et siphons) ; parfois le tube digestif humain.',
              '**Transmission** : contact avec de l’eau, des surfaces ou du matériel contaminés ; projections ; inhalation d’aérosols.',
              '**Maladies possibles** : infections de la peau (plaies, brûlures), des yeux, des poumons, des voies urinaires, surtout chez des personnes fragilisées ; souvent résistante à plusieurs antibiotiques.',
            ],
            source: 'D’après la base Baobab, INRS',
          },
          {
            label: 'Document 7',
            title: 'Quelques micro-organismes du laboratoire',
            blocks: [
              {
                type: 'table',
                head: ['Micro-organisme', 'Informations'],
                rows: [
                  ['_Staphylococcus aureus_ (staphylocoque doré)', 'Présent sur la peau et dans le nez d’environ 30 % des personnes, sans les rendre malades. Peut provoquer des infections de la peau, des intoxications alimentaires (toxines), plus rarement des infections graves du sang. Peu de propagation dans la population générale ; traitement par des antibiotiques, même si certaines souches sont résistantes.'],
                  ['_Saccharomyces cerevisiae_', 'Levure utilisée pour fabriquer le pain, la bière et le vin.'],
                  ['_Mycobacterium tuberculosis_', 'Bacille de la tuberculose, maladie grave transmise par voie aérienne ; il existe un vaccin (BCG) et des traitements antibiotiques.'],
                ],
              },
            ],
          },
        ],
        questions: [
          {
            text: 'Cite des agents biologiques non pathogènes que l’on peut rencontrer ou utiliser au laboratoire. Montre, à l’aide du document 5, que d’autres représentent un danger.',
            hint: 'Pense aux micro-organismes utilisés en alimentation (pain, yaourt, fromages).',
            answer: [
              'Non pathogènes : la levure de boulanger _Saccharomyces cerevisiae_, les bactéries lactiques du yaourt, _Bacillus subtilis_, la souche de laboratoire _Escherichia coli_ K12, la moisissure _Penicillium roqueforti_ du roquefort.',
              'D’autres sont pathogènes : bactéries, virus, champignons microscopiques, protozoaires, prions ou parasites peuvent provoquer des infections (tuberculose, grippe, hépatite), des allergies (asthme, rhinite), des maladies liées à des toxines (gastro-entérites) et même des cancers.',
            ],
          },
          {
            text: 'À partir de la fiche Baobab, présente _Pseudomonas aeruginosa_ : nom, groupe de risque, réservoirs, voies de transmission, maladies possibles. Explique pourquoi on la qualifie d’opportuniste.',
            hint: 'Reformule avec tes mots, sans recopier. « Opportuniste » : elle profite d’une faiblesse de l’hôte.',
            answer: [
              '_Pseudomonas aeruginosa_ est un bacille Gram négatif du groupe de risque 2. Elle vit dans les milieux humides (eau, sol, éviers) et se transmet par contact avec de l’eau, des surfaces ou du matériel contaminés, par projection ou par inhalation d’aérosols.',
              'Elle provoque des infections de la peau, des yeux, des poumons ou des voies urinaires. On la dit opportuniste car elle rend surtout malades des personnes fragilisées (plaie, brûlure, défenses immunitaires affaiblies), rarement des personnes en bonne santé.',
            ],
          },
          {
            text: 'Relie la chaîne de transmission de _Pseudomonas aeruginosa_ au laboratoire : réservoir, mode de transmission, porte d’entrée. Propose une mesure qui coupe un maillon.',
            answer: 'Réservoir : une culture ou un évier contaminé → mode de transmission : contact des mains avec une surface contaminée, ou projection → porte d’entrée : une plaie de la main (voie cutanée) ou l’œil. Mesures : couvrir les plaies par un pansement et porter des gants (porte d’entrée), désinfecter la paillasse (réservoir), se laver les mains (mode de transmission).',
          },
          {
            text: 'Classe _Staphylococcus aureus_ dans l’un des quatre groupes de risque et justifie ton choix à l’aide des critères officiels.',
            hint: 'Examine les quatre critères : maladie et gravité, danger pour le manipulateur, propagation dans la population, existence d’un traitement.',
            answer: '_Staphylococcus aureus_ appartient au **groupe 2** : il peut provoquer une maladie (infections cutanées, intoxications) et constituer un danger pour le manipulateur, mais sa propagation dans la collectivité est peu probable et il existe un traitement efficace (antibiotiques). Il ne relève pas du groupe 3 car les maladies qu’il provoque ne sont généralement pas graves chez une personne en bonne santé.',
          },
          {
            text: 'Classe de même _Saccharomyces cerevisiae_ et _Mycobacterium tuberculosis_ (document 7).',
            answer: '_Saccharomyces cerevisiae_ : groupe 1, elle n’est pas susceptible de provoquer une maladie chez l’être humain (elle est même consommée dans le pain). _Mycobacterium tuberculosis_ : groupe 3, car il provoque une maladie grave, transmissible par voie aérienne (propagation possible), mais il existe un vaccin et des traitements.',
          },
        ],
      },
      {
        title: 'Gestes de prévention : déchets et lavage des mains',
        duration: '30 min',
        skills: ['Choisir', 'Interpréter', 'Argumenter'],
        context: 'À la fin d’un TP de microbiologie, il faut éliminer correctement le matériel utilisé. Un groupe d’élèves a aussi testé l’efficacité de différents lavages des mains.',
        documents: [
          { label: 'Document 8', title: 'Conditionnement des DASRI', image: IMG.dasri, caption: 'Les emballages des déchets d’activités de soins à risques infectieux.', source: 'Manuel de biotechnologies, Première STL' },
          {
            label: 'Document 9',
            title: 'Résultats de TP : efficacité du lavage des mains',
            text: 'Protocole : chaque élève applique le bout de ses doigts sur une gélose nutritive, avant lavage puis après différents lavages. Les boîtes sont incubées 48 h à 30 °C, puis on compte les colonies (moyenne de trois élèves).',
            blocks: [
              {
                type: 'table',
                head: ['Condition', 'Nombre moyen de colonies'],
                rows: [
                  ['Avant tout lavage', '92'],
                  ['Eau seule, 10 s', '64'],
                  ['Savon doux, 10 s', '31'],
                  ['Savon doux, 30 s, technique complète', '9'],
                  ['Friction avec une solution hydroalcoolique, 30 s', '4'],
                ],
              },
            ],
          },
        ],
        questions: [
          {
            text: 'Explique pourquoi les déchets infectieux sont confinés dans des emballages spécifiques.',
            hint: 'Pense à toutes les personnes qui vont manipuler le déchet après toi, et à l’environnement.',
            answer: 'Les emballages DASRI (jaunes, résistants, imperméables, à fermeture définitive) empêchent la dispersion des micro-organismes dans l’environnement et protègent toutes les personnes qui manipulent ces déchets ensuite (agents d’entretien, transporteurs) contre les contaminations et les blessures. Leur couleur et leur pictogramme signalent le danger ; ils rejoignent une filière d’incinération ou de désinfection.',
          },
          {
            text: 'Indique le conteneur DASRI à choisir pour une lame, une lamelle, des pipettes en verre et une boîte de Petri après culture. Justifie.',
            answer: [
              'Lame, lamelle et pipettes en verre : le **collecteur rigide** pour déchets piquants, coupants et cassants, car ils peuvent se briser et blesser ; le plastique rigide résiste à la perforation.',
              'Boîte de Petri en plastique après culture : la **caisse en carton doublée d’un sac plastique**, prévue pour les déchets solides mous contaminés.',
            ],
          },
          {
            text: 'Dans le document 9, quel est le rôle de la mesure « avant tout lavage » ? Compare ensuite l’effet de la durée et celui du mode de lavage.',
            hint: 'Compare des conditions qui ne diffèrent que par un seul paramètre.',
            answer: [
              'La mesure avant lavage est le **témoin** : elle sert de référence pour mesurer l’effet de chaque lavage.',
              'Durée : avec le savon, passer de 10 s à 30 s (avec la technique complète) fait chuter le nombre de colonies de 31 à 9. Mode : à 10 s, le savon (31) est plus efficace que l’eau seule (64) ; la friction hydroalcoolique de 30 s donne le meilleur résultat (4).',
              'Conclusion : un lavage efficace dure au moins 30 s, avec du savon et une technique complète ; la solution hydroalcoolique est très efficace sur des mains visiblement propres.',
            ],
          },
          {
            text: 'Le lavage des mains protège-t-il le manipulateur, le produit, ou les deux ? Argumente en distinguant le lavage avant et le lavage après la manipulation.',
            answer: 'Les deux. **Avant** la manipulation, il élimine une grande partie de la flore de la peau : il protège le **produit** (la culture) contre une contamination qui fausserait les résultats. **Après** la manipulation, il élimine les micro-organismes manipulés : il protège le **manipulateur** (pas d’ingestion par les mains portées à la bouche) et l’**environnement** (on n’emporte pas les micro-organismes hors du laboratoire).',
          },
        ],
      },
      {
        title: 'Lire une étiquette et une fiche de données de sécurité',
        duration: '35 min',
        skills: ['Extraire', 'Associer', 'Exercer son esprit critique'],
        context: 'L’acétone sert à nettoyer de la verrerie ; l’éthanol à 96 % sert de désinfectant et de solvant. Avant de les utiliser, tu dois savoir lire leurs étiquettes et vérifier les informations.',
        documents: [
          { label: 'Document 10', title: 'Étiquette d’acétone', image: IMG.acetone, caption: 'Étiquette réglementaire d’un flacon d’acétone.', size: 'small' },
          { label: 'Document 11', title: 'Étiquette simplifiée de bioéthanol réalisée par un groupe d’élèves', image: IMG.bioethanol, caption: 'Étiquette fabriquée pour un flacon de bioéthanol à 96 %, à vérifier.' },
          {
            label: 'Document 12',
            title: 'Extrait simplifié d’une fiche de données de sécurité d’éthanol à 96 %',
            blocks: [
              {
                type: 'table',
                head: ['Rubrique', 'Informations'],
                rows: [
                  ['2. Identification des dangers', 'Pictogrammes SGH02 et SGH07. Mention d’avertissement : Danger. H225 : Liquide et vapeurs très inflammables. H319 : Provoque une sévère irritation des yeux. P210 : Tenir à l’écart de la chaleur, des surfaces chaudes, des étincelles, des flammes nues et de toute autre source d’inflammation. Ne pas fumer. P280 : Porter des gants de protection et un équipement de protection des yeux.'],
                  ['4. Premiers secours', 'Contact avec les yeux : rincer abondamment à l’eau pendant au moins 15 minutes. Ingestion : rincer la bouche, ne pas faire vomir, consulter un médecin.'],
                  ['7. Manipulation et stockage', 'Conserver le récipient bien fermé, dans un endroit frais et bien ventilé, à l’écart des sources d’inflammation.'],
                  ['8. Protection individuelle', 'Lunettes de protection ; gants en caoutchouc nitrile ; travailler dans un local bien ventilé.'],
                  ['9. Propriétés physiques et chimiques', 'Liquide incolore. Température d’ébullition : environ 78 °C. Température de fusion : −114 °C.'],
                  ['12. Informations écologiques', 'Facilement biodégradable ; non classé dangereux pour le milieu aquatique.'],
                  ['13. Élimination', 'Ne pas jeter à l’évier ; récupérer dans le bidon des solvants organiques.'],
                ],
              },
            ],
            source: 'Adapté d’une FDS de fournisseur de produits de laboratoire',
          },
        ],
        questions: [
          {
            text: 'Relève sur l’étiquette d’acétone : les pictogrammes de danger, la mention d’avertissement, les mentions de danger et les conseils de prudence.',
            hint: 'Les mentions de danger décrivent le danger (« Liquide… », « Provoque… », « Peut provoquer… ») ; les conseils de prudence disent quoi faire (« Tenir… », « Éviter… », « Rincer… »).',
            answer: [
              'Pictogrammes : flamme (SGH02, inflammable) et point d’exclamation (SGH07, irritant, effets narcotiques).',
              'Mention d’avertissement : « Danger ».',
              'Mentions de danger : liquide et vapeurs très inflammables ; provoque une sévère irritation des yeux ; peut provoquer somnolence ou vertiges ; l’exposition répétée peut provoquer dessèchement ou gerçures de la peau.',
              'Conseils de prudence : tenir hors de portée des enfants ; tenir à l’écart de la chaleur, des étincelles et des flammes, ne pas fumer ; éviter de respirer les vapeurs ; en cas de contact avec les yeux, rincer avec précaution à l’eau pendant plusieurs minutes ; stocker dans un endroit bien ventilé, récipient fermé, au frais.',
            ],
          },
          {
            text: 'Cite deux précautions à prendre lors de l’utilisation de l’acétone au laboratoire, en les reliant à un danger.',
            answer: 'Éteindre les becs Bunsen et éloigner toute flamme ou étincelle, car l’acétone est très inflammable. Porter des lunettes de protection, car elle irrite fortement les yeux. On peut aussi travailler sous hotte ou dans une salle ventilée pour ne pas respirer les vapeurs (somnolence, vertiges) et refermer le flacon aussitôt.',
          },
          {
            text: 'À partir des étiquettes observées, associe chaque pictogramme au danger principal qu’il signale.',
            answer: 'Flamme (SGH02) : produit inflammable. Point d’exclamation (SGH07) : produit irritant ou nocif (irritation des yeux, somnolence). Arbre mort et poisson (SGH09) : produit dangereux pour l’environnement aquatique.',
          },
          {
            text: 'Compare l’étiquette de bioéthanol des élèves (document 11) avec la FDS (document 12). Relève les erreurs et les oublis, puis propose une étiquette corrigée.',
            hint: 'Compare les pictogrammes, puis les températures, puis vérifie que tous les éléments obligatoires d’une étiquette sont présents.',
            answer: [
              'Erreurs : le pictogramme environnement (SGH09) ne doit pas figurer, car l’éthanol n’est pas classé dangereux pour le milieu aquatique (rubrique 12) ; il manque le point d’exclamation (SGH07) lié à l’irritation des yeux ; la température d’ébullition est d’environ 78 °C et non 82 °C.',
              'Oublis : la mention d’avertissement « Danger », les mentions de danger (H225, H319) et les conseils de prudence (P210, P280).',
              'Étiquette corrigée : « Éthanol à 96 % » ; pictogrammes flamme et point d’exclamation ; « Danger » ; liquide et vapeurs très inflammables, provoque une sévère irritation des yeux ; tenir à l’écart des flammes et des sources de chaleur, porter des gants et des lunettes de protection.',
            ],
          },
          {
            text: 'Dans quelle rubrique de la FDS cherches-tu : le type de gants à porter ? ce qu’il faut faire après une projection dans l’œil ? comment éliminer le produit ? comment le ranger ?',
            answer: 'Type de gants : rubrique 8 (protection individuelle). Projection dans l’œil : rubrique 4 (premiers secours). Élimination : rubrique 13. Rangement : rubrique 7 (manipulation et stockage).',
          },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Le **danger** est une propriété capable de causer un dommage ; le **risque** est la possibilité que ce dommage survienne lors d’une exposition. Sans exposition, pas de risque.',
      'Danger + manipulateur = situation exposante ; un événement dangereux peut alors provoquer un dommage. Prévenir, c’est casser un maillon de cette chaîne.',
      'Les produits chimiques portent les pictogrammes du SGH, une mention d’avertissement (« Danger » ou « Attention »), des mentions de danger (H) et des conseils de prudence (P) ; la FDS en 16 rubriques complète l’étiquette.',
      'Les agents biologiques infectieux sont classés en 4 groupes de risque ; ils atteignent le manipulateur par les voies respiratoire, digestive, cutanée et oculaire ou percutanée.',
      'L’analyse a priori des risques : 5 M, situations exposantes, événements dangereux, dommages, évaluation (probabilité × gravité), puis mesures adaptées.',
      'Ordre de priorité des mesures : supprimer ou remplacer le danger, réduire l’exposition, EPC, puis EPI. On protège le manipulateur, l’environnement et le produit.',
      'Lavage des mains et désinfection de la paillasse avant et après chaque manipulation ; DASRI dans le bon conteneur jaune ; en cas d’accident : Protéger, Alerter, Secourir.',
    ],
    method: {
      title: 'Conduire une analyse a priori des risques',
      steps: [
        'Décrire la situation de travail avec les **5 M** (Manipulateur, Matière, Matériel, Méthode, Milieu).',
        'Identifier les **dangers** (étiquettes, FDS, groupe de risque, matériel).',
        'Suivre la procédure étape par étape et repérer les **situations exposantes**.',
        'Pour chacune, dégager l’**événement dangereux** le plus probable et le **dommage** possible, avec la voie d’exposition.',
        'Évaluer chaque risque : **probabilité × gravité**, et classer les risques par ordre de priorité.',
        'Associer à chaque risque une **mesure** (suppression, organisation, EPC, EPI) et vérifier qu’aucun risque élevé ne reste sans réponse.',
      ],
    },
    vocabulary: [
      { term: 'Danger', definition: 'Propriété intrinsèque d’un produit, d’un agent, d’un équipement ou d’une situation, capable de causer un dommage.' },
      { term: 'Risque', definition: 'Possibilité qu’un dommage survienne lors d’une exposition au danger ; il dépend de la probabilité et de la gravité.' },
      { term: 'Dommage', definition: 'Atteinte à la santé (brûlure, infection, intoxication…) ou dégât matériel.' },
      { term: 'Situation exposante', definition: 'Moment où le manipulateur se trouve en présence du danger.' },
      { term: 'Événement dangereux', definition: 'Événement déclencheur qui provoque la rencontre entre le danger et le manipulateur.' },
      { term: '5 M', definition: 'Méthode de description d’une situation de travail : Manipulateur, Matière, Matériel, Méthode, Milieu.' },
      { term: 'Mention d’avertissement', definition: 'Mot « Danger » ou « Attention » indiquant le niveau de gravité du danger sur l’étiquette.' },
      { term: 'Mention de danger', definition: 'Phrase standardisée codée H qui décrit la nature du danger d’un produit.' },
      { term: 'Conseil de prudence', definition: 'Phrase standardisée codée P qui indique comment prévenir le danger et réagir.' },
      { term: 'Fiche de données de sécurité', definition: 'Document en 16 rubriques fourni avec un produit chimique dangereux.' },
      { term: 'Groupe de risque', definition: 'Classement des agents biologiques de 1 à 4 selon la gravité, la propagation et l’existence de prévention ou de traitement.' },
      { term: 'Voie d’exposition', definition: 'Porte d’entrée du danger dans l’organisme : respiratoire, digestive, cutanée et oculaire, percutanée.' },
      { term: 'EPC', definition: 'Équipement de protection collective : protège toutes les personnes présentes (hotte, PSM, lave-œil).' },
      { term: 'EPI', definition: 'Équipement de protection individuelle : protège celui qui le porte (blouse, gants, lunettes, masque).' },
      { term: 'DASRI', definition: 'Déchets d’activités de soins à risques infectieux, éliminés dans des emballages jaunes spécifiques.' },
    ],
    mistakes: [
      { wrong: 'Dire qu’un produit rangé dans l’armoire « présente un risque élevé ».', right: 'Il présente un danger ; le risque n’apparaît qu’en cas d’exposition, lors de son utilisation.' },
      { wrong: 'Confondre la mention d’avertissement et la mention de danger.', right: 'La mention d’avertissement est un seul mot (« Danger » ou « Attention ») ; la mention de danger est une phrase H.' },
      { wrong: 'Penser que les gants suffisent à assurer la sécurité.', right: 'Les EPI viennent en dernier : on supprime ou réduit d’abord le danger, on organise le travail et on utilise les EPC.' },
      { wrong: 'Classer la hotte aspirante parmi les EPI.', right: 'La hotte protège toutes les personnes présentes : c’est un EPC.' },
      { wrong: 'Jeter une lamelle dans le carton DASRI ou dans la poubelle ordinaire.', right: 'Les objets piquants, coupants ou cassants vont dans le collecteur rigide.' },
      { wrong: 'Faire saigner une coupure contaminée.', right: 'On ne fait pas saigner : on lave à l’eau et au savon, on rince, on désinfecte et on alerte.' },
    ],
    quiz: [
      { question: 'Un flacon de soude concentrée, bouché, rangé dans l’armoire des produits corrosifs, représente :', choices: ['Un risque élevé', 'Un danger, sans risque tant que personne n’est exposé', 'Un dommage', 'Une situation exposante'], answer: 1, explanation: 'Le danger est une propriété du produit ; il n’y a risque que s’il y a exposition.' },
      { question: 'Le niveau d’un risque dépend :', choices: ['Uniquement de la gravité du dommage', 'Uniquement du pictogramme', 'De la probabilité d’apparition du dommage et de sa gravité', 'Du nombre de manipulateurs'], answer: 2, explanation: 'On évalue le risque en combinant la probabilité (rare, possible, fréquente) et la gravité (légère, sérieuse, grave).' },
      { question: 'Le pictogramme « flamme au-dessus d’un cercle » signale un produit :', choices: ['Comburant', 'Inflammable', 'Explosif', 'Toxique'], answer: 0, explanation: 'SGH03 : le produit comburant favorise ou aggrave un incendie. La flamme seule (SGH02) signale un produit inflammable.' },
      { question: 'Sur une étiquette, le mot « Attention » est :', choices: ['Une mention de danger', 'Un conseil de prudence', 'Un pictogramme', 'Une mention d’avertissement'], answer: 3, explanation: 'La mention d’avertissement est « Danger » (dangers les plus graves) ou « Attention » (moins graves).' },
      { question: 'Quelle rubrique de la FDS indique les gants et les lunettes à porter ?', choices: ['Rubrique 2', 'Rubrique 4', 'Rubrique 8', 'Rubrique 13'], answer: 2, explanation: 'La rubrique 8 traite des contrôles de l’exposition et de la protection individuelle.' },
      { question: 'Un agent biologique pouvant provoquer une maladie grave, à propagation possible, mais pour lequel il existe un traitement, appartient au groupe :', choices: ['1', '2', '3', '4'], answer: 2, explanation: 'C’est la définition du groupe 3 (exemple : le bacille de la tuberculose).' },
      { question: 'Le pipetage à la bouche expose surtout le manipulateur par voie :', choices: ['Digestive', 'Percutanée', 'Oculaire', 'Respiratoire'], answer: 0, explanation: 'Le liquide peut être aspiré dans la bouche et avalé : c’est la voie digestive. On utilise toujours un pipeteur.' },
      { question: 'Lequel de ces équipements est un EPC ?', choices: ['Les gants en nitrile', 'Les lunettes de protection', 'La blouse en coton', 'Le poste de sécurité microbiologique'], answer: 3, explanation: 'Le PSM protège toutes les personnes présentes (et le produit) : c’est un équipement de protection collective.' },
      { question: 'Une lamelle utilisée pour un état frais doit être jetée :', choices: ['Dans la poubelle ordinaire', 'Dans le collecteur rigide pour objets piquants et coupants', 'Dans le carton DASRI avec les boîtes de Petri', 'Dans l’évier'], answer: 1, explanation: 'Le verre peut couper : il va dans le collecteur rigide, résistant à la perforation.' },
      { question: 'Après une projection de produit chimique dans l’œil, il faut d’abord :', choices: ['Frotter l’œil avec un mouchoir', 'Appliquer une pommade', 'Rincer immédiatement à l’eau pendant au moins 15 minutes', 'Attendre de voir si l’œil rougit'], answer: 2, explanation: 'Le rinçage immédiat et prolongé au lave-œil limite la gravité de la brûlure ; on alerte ensuite.' },
    ],
    exercises: [
      {
        title: 'Danger électrique',
        statement: ['Lors d’une électrophorèse, un élève branche le générateur alors que la paillasse est mouillée par une solution tampon renversée.', 'a) Identifie le danger, la situation exposante, l’événement dangereux et le dommage possibles. b) Propose deux mesures pour réduire ce risque.'],
        answer: ['a) Danger : le courant électrique du générateur. Situation exposante : brancher et manipuler l’appareil sur une paillasse mouillée. Événement dangereux : contact entre la main humide, le liquide conducteur et une partie sous tension. Dommage : électrisation (brûlure, contractions, troubles cardiaques), voire électrocution.', 'b) Essuyer et sécher la paillasse avant tout branchement ; vérifier l’état des câbles et de l’appareil ; ne manipuler qu’avec des mains sèches ; brancher le générateur en dernier et le couper avant d’ouvrir la cuve.'],
      },
      {
        title: 'Analyse d’une étiquette',
        statement: 'Une étiquette porte le pictogramme corrosion, la mention « Danger » et la phrase H314 « Provoque de graves brûlures de la peau et de graves lésions des yeux ». a) Nomme chacun de ces trois éléments. b) Indique deux EPI indispensables et la conduite à tenir en cas de projection sur la peau.',
        answer: ['a) Pictogramme de danger SGH05 (corrosif) ; mention d’avertissement « Danger » ; mention de danger H314.', 'b) Lunettes de protection et gants adaptés (avec la blouse fermée). En cas de projection : retirer les vêtements souillés et rincer abondamment à l’eau pendant au moins 15 minutes, puis alerter.'],
      },
      {
        title: 'Analyse a posteriori d’un incident',
        statement: 'Pendant un TP, un élève renverse une boîte de culture ouverte sur la paillasse et ramasse les morceaux de gélose à mains nues, puis se frotte les yeux. a) Identifie les erreurs commises. b) Décris la conduite à tenir correcte.',
        answer: ['a) Il n’a pas prévenu le professeur ; il a ramassé la culture à mains nues (contact cutané) ; il s’est frotté les yeux avec des mains contaminées (voie oculaire). Il aurait fallu aussi travailler avec une boîte fermée dès qu’elle n’était plus utilisée.', 'b) Prévenir le professeur ; recouvrir la culture de papier absorbant ; verser le désinfectant de la périphérie vers le centre et laisser agir ; ramasser avec des gants ; éliminer en DASRI ; désinfecter à nouveau la paillasse ; se laver les mains. Pour les yeux : rincer abondamment à l’eau et signaler l’incident.'],
      },
      {
        title: 'Évaluer et hiérarchiser',
        statement: 'Pour une manipulation, on a coté trois risques : A (P = 1, G = 3), B (P = 3, G = 1), C (P = 2, G = 3). Calcule le niveau de chaque risque et classe-les par ordre de priorité. Le risque A peut-il être négligé ?',
        answer: 'A = 1 × 3 = 3 (moyen) ; B = 3 × 1 = 3 (moyen) ; C = 2 × 3 = 6 (élevé). On traite d’abord C, puis A et B. Le risque A ne doit pas être négligé : rare, son dommage serait grave ; on garde des mesures de protection (EPC, EPI, conduite à tenir connue).',
      },
    ],
    selfCheck: [
      'Je sais distinguer danger, risque, dommage, situation exposante et événement dangereux.',
      'Je sais décrire une situation de travail avec la méthode des 5 M.',
      'Je sais lire une étiquette : pictogrammes SGH, mention d’avertissement, mentions de danger, conseils de prudence, et trouver une information dans une FDS.',
      'Je sais classer un agent biologique dans son groupe de risque en justifiant, et citer les voies d’exposition.',
      'Je sais évaluer un risque à partir de sa probabilité et de sa gravité.',
      'Je sais distinguer EPC et EPI, prévention et protection, risque pour le manipulateur et risque pour le produit.',
      'Je sais me laver les mains, désinfecter ma paillasse et choisir le bon conteneur à déchets.',
      'Je connais les premiers gestes en cas de projection, de coupure ou de culture renversée.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Prévenir les risques biologiques : ce qu’il faut retenir — INRS', url: 'https://www.inrs.fr/risques/biologiques/ce-qu-il-faut-retenir.html' },
      { title: 'Baobab, base d’observation des agents biologiques — INRS', url: 'https://www.inrs.fr/publications/bdd/baobab.html' },
      { title: 'Classification et étiquetage des produits chimiques — INRS', url: 'https://www.inrs.fr/risques/classification-etiquetage-produits-chimiques/ce-qu-il-faut-retenir.html' },
      { title: 'Risques électriques : ce qu’il faut retenir — INRS', url: 'https://www.inrs.fr/risques/electriques/ce-qu-il-faut-retenir.html' },
      { title: 'Déchets d’activités de soins à risques infectieux — INRS', url: 'https://www.inrs.fr/accueil/metiers/environnement/filieres-dechets/dasri.html' },
      { title: 'Système général harmonisé de classification et d’étiquetage des produits chimiques — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Syst%C3%A8me_g%C3%A9n%C3%A9ral_harmonis%C3%A9_de_classification_et_d%27%C3%A9tiquetage_des_produits_chimiques' },
    ],
  },
};

export default lesson;
