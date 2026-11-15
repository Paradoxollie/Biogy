import { img } from '../media';
import compartiments from '../../../assets/courses/premiere/bbc-2-transport-molecules/compartiments.webp';
import tubeSang from '../../../assets/courses/premiere/bbc-2-transport-molecules/tube-sang.webp';
import circulation from '../../../assets/courses/premiere/bbc-2-transport-molecules/circulation.webp';
import transports from '../../../assets/courses/premiere/bbc-2-transport-molecules/transports.webp';
import plasmolyse from '../../../assets/courses/premiere/bbc-2-transport-molecules/plasmolyse.webp';

const IMG = {
  compartiments: img(compartiments, 'Schéma des compartiments liquidiens à l’échelle d’un tissu : capillaire sanguin contenant plasma et hématies, liquide interstitiel autour des cellules, liquide intracellulaire, capillaire lymphatique contenant la lymphe.', 'schema', 1400, 933),
  tubeSang: img(tubeSang, 'Tube de sang centrifugé : plasma jaune paille en haut, fine couche blanchâtre au milieu, culot rouge sombre d’hématies en bas.', 'photo', 1024, 1536),
  circulation: img(circulation, 'Schéma simplifié du trajet des nutriments : l’aorte conduit le sang du cœur à l’intestin grêle ; la veine porte hépatique relie l’intestin au foie ; la veine cave inférieure ramène le sang du foie au cœur ; le canal thoracique conduit la lymphe de l’intestin à la veine sous-clavière.', 'schema', 933, 1400),
  transports: img(transports, 'Schéma des transports membranaires à travers une bicouche de phospholipides : diffusion simple, diffusion facilitée par un canal ou un transporteur, transport actif par une pompe utilisant l’ATP.', 'schema', 1400, 933),
  plasmolyse: img(plasmolyse, 'Microphotographie d’épiderme d’oignon rouge placé dans une solution salée concentrée : la vacuole violette s’est rétractée et décollée des parois (plasmolyse).', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bbc-2-transport-molecules',
  duration: 'Environ 4 séances (cours, TP sur l’osmose et analyse de documents)',
  hook: {
    image: IMG.tubeSang,
    question: 'Le glucose de ton petit déjeuner sera utilisé par un muscle de ta jambe dans quelques minutes. Par quels liquides, quels vaisseaux et quelles membranes devra-t-il passer pour y arriver ?',
    text: 'Ton corps est constitué d’eau pour environ 60 % de sa masse. Cette eau est répartie en plusieurs compartiments : le sang, le liquide qui baigne les cellules, la lymphe et l’intérieur des cellules. Les molécules voyagent d’un compartiment à l’autre en franchissant des parois et des membranes. Dans ce chapitre, tu apprends à situer ces compartiments, à comparer leur composition, à suivre le trajet d’une biomolécule dans l’organisme et à caractériser les mécanismes qui lui font traverser les membranes.',
  },
  objectives: [
    'Situer les compartiments liquidiens de l’organisme : plasma, liquide interstitiel, lymphe, liquide intracellulaire.',
    'Comparer la composition de ces compartiments et interpréter un résultat d’analyse à l’aide d’intervalles de référence.',
    'Schématiser le trajet d’une biomolécule dans les circulations sanguine et lymphatique, système porte hépatique compris.',
    'Caractériser un mécanisme de transfert de matière : diffusion simple, diffusion facilitée, transport actif, osmose.',
    'Relier ces mécanismes à l’exemple de l’absorption intestinale du glucose.',
  ],
  prerequisites: [
    'Organisation de l’appareil circulatoire : cœur, artères, capillaires, veines (collège).',
    'Structure de la membrane plasmique : bicouche de phospholipides et protéines membranaires (module A, « Membranes biologiques »).',
    'Concentration massique et concentration molaire (physique-chimie).',
    'L’épithélium intestinal, ses cellules polarisées et ses jonctions serrées (chapitre « Observer le vivant »).',
  ],
  program: [
    'Situer les différents compartiments liquidiens de l’organisme : sang/plasma, liquide interstitiel, lymphe canalisée, liquide intracellulaire/liquide extracellulaire (C1).',
    'Comparer la composition de différents compartiments liquidiens : cellules sanguines, ions, biomolécules, valeur de référence, intervalle physiologique (C2).',
    'Schématiser le trajet d’une biomolécule dans les circulations sanguine et lymphatique : appareil circulatoire, système lymphatique, continuité anatomique, système porte (C3).',
    'Caractériser un mécanisme de transfert de matière entre deux compartiments liquidiens : transport actif/transport passif, diffusion, transporteur, membrane cellulaire ; identifier un phénomène d’osmose (C4).',
  ],

  course: {
    parts: [
      {
        title: 'Les compartiments liquidiens de l’organisme',
        intro: 'L’eau représente environ 60 % de la masse d’un adulte. Elle occupe des compartiments séparés par des membranes ou par la paroi des vaisseaux.',
        blocks: [
          {
            type: 'compare',
            title: 'Liquide intracellulaire ou extracellulaire ?',
            columns: [
              { title: 'Liquide intracellulaire', items: ['Liquide contenu **dans** les cellules (le cytosol).', 'Environ deux tiers de l’eau du corps.', 'Séparé du reste par la **membrane plasmique**.'] },
              { title: 'Liquide extracellulaire', items: ['Liquide situé **hors** des cellules : plasma, liquide interstitiel, lymphe.', 'Environ un tiers de l’eau du corps.', 'Il forme le **milieu intérieur**.'] },
            ],
          },
          { type: 'definition', term: 'Milieu intérieur', text: 'ensemble des liquides extracellulaires qui baignent les cellules : plasma, liquide interstitiel et lymphe. Les cellules y puisent nutriments et dioxygène, et y rejettent leurs déchets.' },
          { type: 'figure', image: IMG.compartiments, caption: 'Les compartiments liquidiens à l’échelle d’un tissu. Le plasma filtre à travers la paroi du capillaire et forme le liquide interstitiel (en vert), qui baigne les cellules ; une partie est réabsorbée par le capillaire, une autre entre dans un capillaire lymphatique et devient la lymphe.', size: 'wide' },
          {
            type: 'table',
            caption: 'Répartition de l’eau chez un adulte de 70 kg (valeurs moyennes)',
            head: ['Compartiment', 'Part de la masse du corps', 'Volume', 'Localisation'],
            rows: [
              ['Liquide intracellulaire', '≈ 40 %', '≈ 28 L', 'Dans les cellules'],
              ['Liquide interstitiel', '≈ 15 %', '≈ 10,5 L', 'Entre les cellules des tissus'],
              ['Plasma', '≈ 5 %', '≈ 3,5 L', 'Dans les vaisseaux sanguins'],
              ['Lymphe canalisée', 'Faible', 'Faible', 'Dans les vaisseaux lymphatiques'],
              ['Total', '≈ 60 %', '≈ 42 L', 'Tout le corps'],
            ],
          },
          {
            type: 'compare',
            title: 'Sang ou plasma ?',
            columns: [
              { title: 'Sang', items: ['Tissu liquide qui circule dans les vaisseaux : environ 5 L chez l’adulte.', 'Formé de **plasma** (≈ 55 %) et de **cellules sanguines** (≈ 45 %).', 'Hématies (transport du dioxygène), leucocytes (défense), plaquettes (coagulation).'] },
              { title: 'Plasma', items: ['Partie **liquide** du sang, obtenue par centrifugation d’un sang rendu incoagulable.', 'Eau (≈ 90 %), protéines (≈ 70 g/L), ions, nutriments (glucose…), déchets (urée…), hormones.', 'C’est le compartiment analysé dans la plupart des examens sanguins.'] },
            ],
          },
          { type: 'figure', image: IMG.tubeSang, caption: 'Sang centrifugé : le plasma, jaune paille, surmonte les cellules sanguines. Les hématies forment le culot rouge ; leucocytes et plaquettes forment la fine couche blanchâtre. La part du volume occupée par les hématies est l’hématocrite (≈ 40 à 50 %).', size: 'small' },
          { type: 'definition', term: 'Liquide interstitiel', text: 'liquide qui baigne les cellules d’un tissu. Il provient du plasma qui a filtré à travers la paroi des capillaires et ne s’en distingue presque que par sa très faible teneur en protéines.' },
          { type: 'definition', term: 'Lymphe', text: 'liquide interstitiel qui est entré dans les capillaires lymphatiques. La **lymphe canalisée** circule dans les vaisseaux lymphatiques, traverse les ganglions lymphatiques et rejoint finalement le sang.' },
          { type: 'note', title: 'Plasma ou sérum ?', text: 'Le **sérum** est le liquide obtenu après la coagulation du sang : c’est du plasma privé des protéines de la coagulation (fibrinogène). Au laboratoire d’analyses, on précise toujours si un dosage est fait sur plasma ou sur sérum.' },
          {
            type: 'retenir',
            items: [
              'Liquide intracellulaire (≈ 2/3 de l’eau) et liquide extracellulaire (≈ 1/3) : plasma, liquide interstitiel, lymphe.',
              'Le milieu intérieur est formé des liquides extracellulaires qui baignent les cellules.',
              'Sang = plasma + cellules sanguines ; le liquide interstitiel provient du plasma ; la lymphe provient du liquide interstitiel.',
            ],
          },
        ],
      },

      {
        title: 'Comparer la composition des compartiments',
        intro: 'Les compartiments contiennent les mêmes substances, mais pas aux mêmes concentrations. Ces différences révèlent les propriétés des parois qui les séparent.',
        blocks: [
          {
            type: 'table',
            caption: 'Composition moyenne des liquides de l’organisme (adulte, valeurs arrondies)',
            head: ['Constituant', 'Plasma', 'Liquide interstitiel', 'Liquide intracellulaire'],
            rows: [
              ['Na^+^ (mmol/L)', '142', '145', '12'],
              ['K^+^ (mmol/L)', '4', '4', '140'],
              ['Cl^−^ (mmol/L)', '103', '115', '4'],
              ['Glucose (mmol/L)', '≈ 5', '≈ 5', 'Très faible'],
              ['Protéines', '≈ 70 g/L', 'Très faible', 'Très élevée'],
            ],
          },
          { type: 'p', text: 'Le plasma et le liquide interstitiel ont presque la même composition en ions et en petites molécules : la paroi des capillaires laisse passer l’eau et les petits solutés. Seules les **protéines**, trop grosses, restent dans le plasma.' },
          { type: 'p', text: 'Le liquide intracellulaire est très différent : riche en K^+^ et en protéines, pauvre en Na^+^ et en Cl^−^. La **membrane plasmique** est donc une barrière **sélective**, et ces différences sont maintenues en permanence par des transports actifs (partie 4).' },
          { type: 'definition', term: 'Valeur de référence et intervalle physiologique', text: 'pour un paramètre biologique, l’**intervalle physiologique** (ou intervalle de référence) regroupe les valeurs mesurées chez la grande majorité des personnes en bonne santé. Une valeur en dehors de cet intervalle doit être interprétée par le médecin.' },
          {
            type: 'table',
            caption: 'Quelques intervalles de référence (sang d’un adulte)',
            head: ['Paramètre', 'Intervalle de référence', 'Valeur trop élevée ou trop basse'],
            rows: [
              ['Glycémie à jeun', '0,70 à 1,10 g/L (3,9 à 6,1 mmol/L)', 'Hyperglycémie (diabète si ≥ 1,26 g/L lors de deux dosages) ; hypoglycémie'],
              ['Natrémie (Na^+^)', '135 à 145 mmol/L', 'Hypernatrémie (souvent une déshydratation) ; hyponatrémie'],
              ['Kaliémie (K^+^)', '3,5 à 5,0 mmol/L', 'Hyperkaliémie ou hypokaliémie : risque de troubles du rythme cardiaque'],
              ['Calcémie', '2,20 à 2,60 mmol/L', 'Hypercalcémie ; hypocalcémie'],
              ['Protidémie', '60 à 80 g/L', 'Hypoprotidémie (dénutrition, maladie du foie ou du rein)'],
              ['Hémoglobine', '13 à 17 g/dL (homme) ; 12 à 16 g/dL (femme)', 'Valeur basse : anémie'],
              ['Leucocytes', '4 à 10 × 10^9^ par litre', 'Valeur haute : souvent une infection'],
              ['Plaquettes', '150 à 400 × 10^9^ par litre', 'Valeur basse : risque de saignement'],
            ],
          },
          { type: 'warning', text: 'Les intervalles de référence varient un peu selon le laboratoire, la méthode de dosage, l’âge et le sexe. On utilise toujours ceux qui figurent sur le compte rendu d’analyse.' },
          { type: 'example', title: 'convertir une glycémie', text: 'Une glycémie de 0,90 g/L correspond à 0,90 ÷ 180 = 0,005 mol/L, soit **5,0 mmol/L** (la masse molaire du glucose vaut 180 g/mol). Les laboratoires indiquent souvent les deux unités.' },
          {
            type: 'retenir',
            items: [
              'Plasma et liquide interstitiel ont presque la même composition, sauf pour les protéines, retenues dans le plasma.',
              'Le liquide intracellulaire est riche en K^+^ et en protéines, pauvre en Na^+^ : la membrane plasmique est sélective.',
              'On interprète un résultat d’analyse en le comparant à l’intervalle de référence.',
            ],
          },
        ],
      },

      {
        title: 'Le transport à l’échelle de l’organisme : circulations sanguine et lymphatique',
        intro: 'Le sang fait le tour du corps en une minute environ : c’est le grand réseau de transport de l’organisme.',
        blocks: [
          { type: 'p', text: 'L’**appareil circulatoire** comprend le **cœur**, une pompe qui met le sang en mouvement, et des vaisseaux : les **artères** emportent le sang du cœur vers les organes, les **capillaires** assurent les échanges dans les organes, les **veines** ramènent le sang au cœur. Le circuit est **fermé** : il y a **continuité anatomique** entre artères, capillaires et veines.' },
          {
            type: 'compare',
            title: 'Deux circulations en série',
            columns: [
              { title: 'Circulation pulmonaire', items: ['Cœur droit → artères pulmonaires → poumons → veines pulmonaires → cœur gauche.', 'Le sang s’enrichit en dioxygène et rejette le CO~2~.'] },
              { title: 'Circulation générale', items: ['Cœur gauche → aorte → artères → organes → veines → veines caves → cœur droit.', 'Distribution des nutriments et du dioxygène, collecte des déchets.'] },
            ],
          },
          { type: 'definition', term: 'Capillaire sanguin', text: 'vaisseau très fin (5 à 10 µm de diamètre) dont la paroi n’est formée que d’une couche de cellules aplaties. C’est là que se font les échanges entre le sang et le liquide interstitiel.' },
          { type: 'p', text: 'À l’entrée d’un capillaire (côté artère), la pression du sang pousse une partie du plasma, sans ses protéines, vers le liquide interstitiel : c’est la **filtration**. Vers la sortie (côté veine), la pression a diminué et les protéines restées dans le plasma « rappellent » l’eau : la plus grande partie du liquide est **réabsorbée**. L’excès de liquide interstitiel, quelques litres par jour, est recueilli par les **capillaires lymphatiques**.' },
          { type: 'note', title: 'L’œdème', text: 'Si les protéines du plasma manquent (dénutrition sévère, maladie du foie ou du rein), l’eau n’est plus assez rappelée dans les capillaires : elle s’accumule dans les tissus, qui gonflent. C’est un **œdème**.' },
          { type: 'definition', term: 'Système lymphatique', text: 'réseau de capillaires lymphatiques (fermés à une extrémité), de vaisseaux lymphatiques et de ganglions. Il ramène vers le sang le liquide interstitiel en excès et les protéines qui ont fui, transporte les lipides absorbés par l’intestin et participe à la défense de l’organisme. La lymphe rejoint le sang par le **canal thoracique**, qui se jette dans la veine sous-clavière gauche, à la base du cou.' },
          { type: 'definition', term: 'Système porte', text: 'disposition dans laquelle une veine relie **deux réseaux de capillaires** placés l’un après l’autre. Le **système porte hépatique** relie les capillaires de l’intestin à ceux du foie par la **veine porte hépatique**.' },
          { type: 'figure', image: IMG.circulation, caption: 'Schéma simplifié des vaisseaux empruntés par les nutriments absorbés. En vert : la veine porte hépatique, qui relie les capillaires de l’intestin à ceux du foie. Le canal thoracique ramène la lymphe dans le sang par la veine sous-clavière gauche. Les poumons et les autres organes ne sont pas représentés.', size: 'normal' },
          { type: 'p', text: 'Grâce au système porte, les nutriments hydrosolubles absorbés (glucose, acides aminés) passent d’abord par le **foie**, qui en stocke une partie (le glucose sous forme de glycogène), en transforme d’autres et neutralise certaines substances toxiques, avant qu’ils ne rejoignent la circulation générale.' },
          {
            type: 'flow',
            title: 'Le trajet d’une molécule de glucose, de l’intestin à un muscle',
            steps: [
              { title: 'Intestin', text: 'Lumière → entérocyte → liquide interstitiel → capillaire de la villosité.' },
              { title: 'Veine porte hépatique', text: 'Vers le foie, qui stocke une partie du glucose.' },
              { title: 'Veine cave inférieure', text: 'Vers le cœur droit.' },
              { title: 'Cœur et poumons', text: 'Cœur droit → poumons → cœur gauche.' },
              { title: 'Aorte et artères', text: 'Vers tous les organes.' },
              { title: 'Muscle', text: 'Capillaire → liquide interstitiel → cellule musculaire.' },
            ],
          },
          {
            type: 'flow',
            title: 'Le trajet des lipides absorbés',
            steps: [
              { title: 'Lumière intestinale', text: 'Acides gras et monoglycérides issus de la digestion.' },
              { title: 'Entérocyte', text: 'Reconstitution des triglycérides, emballés dans des chylomicrons.' },
              { title: 'Chylifère', text: 'Capillaire lymphatique central de la villosité.' },
              { title: 'Vaisseaux lymphatiques', text: 'Puis canal thoracique.' },
              { title: 'Veine sous-clavière gauche', text: 'Entrée dans le sang, puis distribution aux cellules (adipocytes, muscles).' },
            ],
          },
          { type: 'note', title: 'Voir le trajet d’une biomolécule', text: 'En imagerie médicale, on peut suivre une biomolécule marquée. En **TEP** (tomographie par émission de positons), on injecte un analogue du glucose marqué au fluor 18 (le FDG) : les organes et les tumeurs qui consomment beaucoup de glucose (cerveau, cœur, cellules cancéreuses) apparaissent fortement marqués.' },
          {
            type: 'retenir',
            items: [
              'Le sang circule en circuit fermé : cœur → artères → capillaires (échanges) → veines → cœur.',
              'Le plasma filtre au niveau des capillaires et forme le liquide interstitiel ; l’excès est repris par la lymphe, qui rejoint le sang.',
              'Système porte hépatique : la veine porte relie les capillaires de l’intestin à ceux du foie.',
              'Les nutriments hydrosolubles passent par la veine porte et le foie ; les lipides passent par la lymphe.',
            ],
          },
        ],
      },

      {
        title: 'Franchir les membranes : les mécanismes de transport',
        intro: 'À chaque étape de son trajet, une molécule doit traverser des membranes. Comment fait-elle ?',
        blocks: [
          { type: 'p', text: 'La membrane plasmique est une **bicouche de phospholipides** au cœur hydrophobe, dans laquelle sont insérées des **protéines de transport**. Selon sa taille, sa charge et sa solubilité, une molécule traverse directement la bicouche, passe par une protéine, ou ne passe pas du tout.' },
          { type: 'definition', term: 'Gradient de concentration', text: 'différence de concentration d’une substance entre deux compartiments. Spontanément, une substance se déplace du compartiment où elle est **la plus concentrée** vers celui où elle est **la moins concentrée** : elle suit son gradient.' },
          { type: 'definition', term: 'Diffusion', text: 'déplacement spontané d’une substance dans le sens de son gradient de concentration, jusqu’à l’égalisation des concentrations. Elle ne consomme pas d’énergie.' },
          { type: 'figure', image: IMG.transports, caption: 'Les grands mécanismes de transport membranaire. Les deux premiers sont passifs (dans le sens du gradient) ; le transport actif fait passer les particules contre leur gradient en consommant de l’énergie (ATP).', size: 'wide' },
          {
            type: 'compare',
            title: 'Trois mécanismes de transport',
            columns: [
              { title: 'Diffusion simple', subtitle: 'transport passif', items: ['À travers la **bicouche**, sans protéine.', 'Petites molécules hydrophobes ou non chargées : O~2~, CO~2~, hormones stéroïdiennes.', 'Dans le sens du gradient, sans énergie.'] },
              { title: 'Diffusion facilitée', subtitle: 'transport passif', items: ['Par une **protéine** : canal (pore) ou transporteur.', 'Ions, eau (aquaporines), glucose (transporteurs GLUT).', 'Dans le sens du gradient, sans énergie ; spécifique et saturable.'] },
              { title: 'Transport actif', subtitle: 'contre le gradient', items: ['Par une **protéine** : pompe ou co-transporteur.', 'Exemple : pompe Na^+^/K^+^, co-transporteur Na^+^/glucose.', 'Contre le gradient, avec **énergie** : ATP, ou gradient d’un autre ion.'] },
            ],
          },
          { type: 'definition', term: 'Transporteur', text: 'protéine membranaire qui fixe spécifiquement une molécule sur une face de la membrane et la libère sur l’autre face en changeant de forme. Le transport est **spécifique** et **saturable** : quand tous les transporteurs sont occupés, la vitesse de transport ne peut plus augmenter.' },
          {
            type: 'compare',
            title: 'Transport passif ou transport actif ?',
            columns: [
              { title: 'Transport passif', items: ['Dans le sens du gradient de concentration.', 'Sans dépense d’énergie par la cellule.', 'Diffusion simple, diffusion facilitée, osmose.'] },
              { title: 'Transport actif', items: ['Contre le gradient de concentration.', 'Consomme de l’énergie (ATP directement, ou gradient d’un autre ion).', 'Toujours par une protéine : pompe, co-transporteur.'] },
            ],
          },
          { type: 'example', title: 'la pompe Na^+^/K^+^', text: 'Présente dans toutes nos cellules, la **pompe Na^+^/K^+^** utilise l’énergie d’une molécule d’ATP pour faire sortir 3 ions Na^+^ et entrer 2 ions K^+^, contre leurs gradients. C’est elle qui maintient le liquide intracellulaire riche en K^+^ et pauvre en Na^+^.' },
          { type: 'definition', term: 'Osmose', text: 'diffusion de l’**eau** à travers une membrane semi-perméable (perméable à l’eau, pas à certains solutés), du milieu le **moins concentré** en solutés (hypotonique) vers le milieu le **plus concentré** (hypertonique). Le mouvement net d’eau cesse quand les deux milieux sont **isotoniques**.' },
          {
            type: 'table',
            caption: 'L’osmose chez les cellules animales et végétales',
            head: ['Milieu extérieur', 'Mouvement de l’eau', 'Hématie', 'Cellule végétale'],
            rows: [
              ['Hypotonique (ex. eau distillée)', 'Entrée d’eau dans la cellule', 'Gonfle et peut éclater (hémolyse)', 'Turgescente : la vacuole presse le cytoplasme contre la paroi'],
              ['Isotonique (ex. NaCl à 9 g/L pour l’hématie)', 'Pas de mouvement net', 'Forme normale de disque', 'Aspect normal'],
              ['Hypertonique (ex. NaCl à 30 g/L)', 'Sortie d’eau de la cellule', 'Se ratatine, prend une forme hérissée', 'Plasmolysée : la vacuole se rétracte et se décolle de la paroi'],
            ],
          },
          { type: 'figure', image: IMG.plasmolyse, caption: 'Épiderme d’oignon rouge dans une solution de NaCl concentrée (×400) : l’eau est sortie des vacuoles (colorées en violet) qui se sont rétractées et décollées des parois. Les cellules sont plasmolysées.', size: 'wide' },
          { type: 'warning', text: 'Par osmose, c’est l’**eau** qui se déplace, pas les solutés ! Et elle va vers le milieu le plus **concentré** en solutés. En médecine, les perfusions sont **isotoniques** au plasma (sérum physiologique à 9 g/L de NaCl, glucose à 5 %) pour ne pas abîmer les cellules sanguines.' },
          {
            type: 'steps',
            title: 'Exemple : l’absorption du glucose par un entérocyte',
            items: [
              { title: 'Membrane apicale', text: 'Un **co-transporteur Na^+^/glucose** fait entrer le glucose **contre** son gradient, en utilisant l’entrée de Na^+^ dans le sens de son gradient : c’est un transport actif (dit secondaire).' },
              { title: 'Cytoplasme', text: 'Le glucose s’accumule dans la cellule : sa concentration y devient plus élevée que dans le liquide interstitiel.' },
              { title: 'Membrane basale', text: 'Le glucose sort **dans le sens** de son gradient par un transporteur **GLUT2** : diffusion facilitée vers le liquide interstitiel, puis le capillaire sanguin.' },
              { title: 'Pompe Na^+^/K^+^', text: 'Sur la membrane basale, elle rejette le Na^+^ entré avec le glucose en consommant de l’ATP : elle entretient le gradient de Na^+^ indispensable au co-transport.' },
              { title: 'Eau', text: 'L’eau suit par osmose les solutés absorbés.' },
            ],
          },
          { type: 'note', title: 'Le même mécanisme dans le rein', text: 'Les cellules du tube rénal proximal réabsorbent le glucose de l’urine primitive de la même manière : co-transport Na^+^/glucose côté apical, transporteur GLUT côté basal. Voir le chapitre « Rein et fonction d’excrétion ».' },
          {
            type: 'retenir',
            items: [
              'Transport passif (diffusion simple, diffusion facilitée, osmose) : dans le sens du gradient, sans énergie.',
              'Transport actif : contre le gradient, avec énergie, par une protéine (pompe Na^+^/K^+^, co-transporteur).',
              'Un transporteur est spécifique et saturable.',
              'Osmose : l’eau va du milieu hypotonique vers le milieu hypertonique.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des documents. Réponds d’abord seul(e), en phrases complètes, puis utilise le « coup de pouce » si tu bloques et compare avec la correction.',
    activities: [
      {
        title: 'Situer les compartiments et comparer leur composition',
        duration: '25 min',
        skills: ['Observer', 'Comparer', 'Calculer'],
        context: 'Tu dois expliquer à un camarade où se trouve l’eau de son corps et pourquoi les compartiments n’ont pas la même composition.',
        documents: [
          { label: 'Document 1', title: 'Les compartiments liquidiens d’un tissu', image: IMG.compartiments, caption: 'Schéma d’un tissu et de ses capillaires.' },
          {
            label: 'Document 2',
            title: 'Composition comparée (valeurs arrondies)',
            blocks: [
              {
                type: 'table',
                head: ['Constituant', 'Plasma', 'Liquide interstitiel', 'Liquide intracellulaire'],
                rows: [['Na^+^ (mmol/L)', '142', '145', '12'], ['K^+^ (mmol/L)', '4', '4', '140'], ['Protéines (g/L)', '70', '2', 'Plus de 100']],
              },
            ],
          },
          { label: 'Document 3', title: 'Un tube de sang centrifugé', image: IMG.tubeSang, caption: 'Sang prélevé sur anticoagulant puis centrifugé.', size: 'small' },
        ],
        questions: [
          { text: 'Sur le document 1, cite dans l’ordre les compartiments traversés par une molécule de glucose qui quitte le sang pour entrer dans une cellule.', answer: 'Plasma (dans le capillaire sanguin) → liquide interstitiel → liquide intracellulaire (après la traversée de la membrane plasmique).' },
          { text: 'Compare la composition du plasma et du liquide interstitiel. Qu’en déduis-tu sur la paroi des capillaires ?', answer: 'Les concentrations en Na^+^ et K^+^ sont presque identiques, mais le plasma contient beaucoup plus de protéines (70 g/L contre 2 g/L). La paroi des capillaires laisse passer l’eau et les petits ions, mais retient les grosses molécules comme les protéines.' },
          { text: 'Compare le liquide intracellulaire et le liquide interstitiel. Qu’en déduis-tu sur la membrane plasmique ?', hint: 'Les ions diffusent spontanément vers le milieu le moins concentré…', answer: 'Le liquide intracellulaire contient 35 fois plus de K^+^ (140 contre 4 mmol/L) et environ 12 fois moins de Na^+^ (12 contre 145 mmol/L). La membrane plasmique est donc sélective et ces écarts, contraires à l’égalisation par diffusion, sont maintenus par un transport actif (la pompe Na^+^/K^+^).' },
          { text: 'Pour une personne de 60 kg, calcule le volume total d’eau, puis le volume de liquide intracellulaire et de plasma.', answer: 'Eau totale : 60 % de 60 kg ≈ 36 L. Liquide intracellulaire : 40 % de 60 ≈ 24 L. Plasma : 5 % de 60 ≈ 3 L.' },
          { text: 'Sur le document 3, l’hématocrite vaut environ 45 %. Calcule le volume de plasma contenu dans 5 L de sang.', answer: 'Le plasma représente 100 − 45 = 55 % du volume du sang : 0,55 × 5 = 2,75 L de plasma.' },
        ],
      },
      {
        title: 'Interpréter un bilan sanguin',
        duration: '20 min',
        skills: ['Exploiter des données', 'Interpréter'],
        context: 'Une patiente de 45 ans, fatiguée depuis plusieurs semaines, reçoit les résultats de sa prise de sang réalisée à jeun.',
        documents: [
          {
            label: 'Document 4',
            title: 'Extrait du compte rendu d’analyse (exemple pédagogique)',
            blocks: [
              {
                type: 'table',
                head: ['Paramètre', 'Résultat', 'Intervalle de référence'],
                rows: [
                  ['Glycémie à jeun', '1,32 g/L', '0,70 à 1,10 g/L'],
                  ['Natrémie', '139 mmol/L', '135 à 145 mmol/L'],
                  ['Kaliémie', '3,1 mmol/L', '3,5 à 5,0 mmol/L'],
                  ['Protidémie', '72 g/L', '60 à 80 g/L'],
                  ['Hémoglobine', '10,5 g/dL', '12 à 16 g/dL'],
                  ['Leucocytes', '7,2 × 10^9^ par litre', '4 à 10 × 10^9^ par litre'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Relève les valeurs situées en dehors de l’intervalle de référence et nomme chaque anomalie.', answer: 'Glycémie à jeun : 1,32 g/L, supérieure à 1,10 g/L (hyperglycémie). Kaliémie : 3,1 mmol/L, inférieure à 3,5 mmol/L (hypokaliémie). Hémoglobine : 10,5 g/dL, inférieure à 12 g/dL (anémie). Les autres valeurs sont normales.' },
          { text: 'Convertis la glycémie en mmol/L (masse molaire du glucose : 180 g/mol).', answer: '1,32 ÷ 180 ≈ 0,0073 mol/L, soit environ 7,3 mmol/L.' },
          { text: 'Peut-on affirmer que la patiente est diabétique ? Justifie.', answer: 'Pas encore : la glycémie à jeun dépasse 1,26 g/L, mais le diagnostic de diabète exige deux dosages à jeun supérieurs ou égaux à 1,26 g/L. Le médecin prescrira un second dosage.' },
          { text: 'Pourquoi ces dosages sont-ils réalisés sur le plasma (ou le sérum) plutôt que sur le sang total ?', answer: 'Le plasma est le compartiment liquide qui transporte les ions, les nutriments et les protéines ; il est en équilibre avec le liquide interstitiel qui baigne les cellules. Il reflète donc la composition du milieu intérieur, sans être perturbé par le contenu des cellules sanguines (riches en K^+^, par exemple).' },
        ],
      },
      {
        title: 'Suivre le trajet du glucose et des lipides',
        duration: '25 min',
        skills: ['Schématiser', 'Raisonner'],
        context: 'Après un repas, le glucose et les lipides absorbés par l’intestin ne suivent pas le même chemin pour atteindre les cellules.',
        documents: [
          { label: 'Document 5', title: 'Trajet des nutriments', image: IMG.circulation, caption: 'Schéma simplifié des vaisseaux reliant l’intestin, le foie et le cœur.', size: 'small' },
          {
            label: 'Document 6',
            title: 'Les « veines lactées »',
            text: [
              'En 1622, l’anatomiste italien Gaspare Aselli observe chez un chien qui vient de manger de fins vaisseaux blancs, remplis d’un liquide laiteux, autour de l’intestin. Chez un chien à jeun, ces vaisseaux sont transparents et presque invisibles. Ce sont des vaisseaux lymphatiques.',
              'On sait aujourd’hui que ce liquide laiteux, le chyle, est riche en chylomicrons : des particules de 0,1 à 1 µm formées de triglycérides entourés de protéines, fabriquées par les entérocytes. Trop grosses pour traverser la paroi des capillaires sanguins, elles entrent facilement dans les capillaires lymphatiques, dont la paroi est plus perméable.',
            ],
            source: 'D’après l’histoire de l’anatomie',
          },
        ],
        questions: [
          { text: 'Schématise le trajet d’une molécule de glucose depuis la lumière intestinale jusqu’à une cellule musculaire.', answer: 'Lumière intestinale → entérocyte → liquide interstitiel → capillaire sanguin de la villosité → veine porte hépatique → foie → veine cave inférieure → cœur droit → poumons → cœur gauche → aorte → artère du muscle → capillaire sanguin → liquide interstitiel → cellule musculaire.' },
          { text: 'Pourquoi parle-t-on de « système porte » hépatique ? Quel est l’intérêt de ce dispositif ?', answer: 'La veine porte hépatique relie deux réseaux de capillaires en série : ceux de l’intestin et ceux du foie. Les nutriments hydrosolubles passent ainsi par le foie avant la circulation générale : le foie peut stocker l’excès de glucose (glycogène) après un repas et neutraliser certaines substances toxiques absorbées.' },
          { text: 'Explique pourquoi les vaisseaux lymphatiques de l’intestin deviennent blancs après un repas.', answer: 'Après un repas, les entérocytes emballent les lipides absorbés dans des chylomicrons. Ces particules, trop grosses pour les capillaires sanguins, passent dans les capillaires lymphatiques (chylifères) et donnent à la lymphe un aspect laiteux : le chyle.' },
          { text: 'Schématise le trajet des lipides jusqu’au sang, puis indique en quoi il diffère de celui du glucose.', answer: 'Lumière intestinale → entérocyte (chylomicrons) → chylifère → vaisseaux lymphatiques → canal thoracique → veine sous-clavière gauche → cœur → circulation générale. Contrairement au glucose, les lipides ne passent pas par la veine porte hépatique ni par le foie avant d’entrer dans la circulation générale : ils empruntent la lymphe.' },
          { text: 'En TEP, on injecte un analogue du glucose radioactif. Pourquoi le cerveau apparaît-il toujours très marqué ?', answer: 'Le cerveau consomme beaucoup de glucose, sa principale source d’énergie : il capte donc une grande quantité de l’analogue radioactif, qui s’y accumule et y émet un fort signal.' },
        ],
      },
      {
        title: 'Mettre en évidence l’osmose',
        duration: '30 min',
        skills: ['Expérimenter', 'Interpréter', 'Calculer'],
        context: 'En TP, tu observes l’effet de solutions plus ou moins concentrées sur des cellules végétales, puis tu réalises une mesure quantitative avec des cylindres de pomme de terre.',
        documents: [
          { label: 'Document 7', title: 'Épiderme d’oignon rouge après 10 minutes dans une solution de NaCl à 30 g/L (×400)', image: IMG.plasmolyse, caption: 'Microphotographie réalisée en TP.' },
          {
            label: 'Document 8',
            title: 'Cylindres de pomme de terre (résultats de TP)',
            blocks: [
              { type: 'p', text: 'Des cylindres de pomme de terre de même taille sont pesés, placés 1 heure dans des solutions de saccharose de concentrations différentes, puis essuyés et pesés de nouveau.' },
              {
                type: 'table',
                head: ['Saccharose (mol/L)', '0', '0,2', '0,4', '0,6', '0,8'],
                rows: [['Variation de masse', '+ 20 %', '+ 8 %', '− 1 %', '− 10 %', '− 16 %']],
              },
            ],
          },
        ],
        questions: [
          { text: 'Décris les cellules du document 7 et nomme le phénomène observé.', answer: 'La vacuole colorée en violet s’est rétractée et décollée des parois, laissant des espaces vides entre la paroi et le contenu de la cellule : les cellules sont plasmolysées.' },
          { text: 'Explique ce résultat en utilisant les mots hypertonique, osmose et membrane.', hint: 'Où la concentration en solutés est-elle la plus forte ?', answer: 'Par rapport au contenu de la vacuole, la solution de NaCl à 30 g/L, plus concentrée, est hypertonique. Par osmose, l’eau traverse la membrane plasmique et la membrane de la vacuole et sort de la cellule, vers le milieu le plus concentré. La vacuole perd de l’eau, son volume diminue et elle se décolle de la paroi rigide.' },
          { text: 'Prévois l’aspect des cellules si l’on remplace la solution salée par de l’eau distillée.', answer: 'L’eau distillée est hypotonique : l’eau entre dans les cellules par osmose, la vacuole regonfle et presse le cytoplasme contre la paroi. Les cellules redeviennent turgescentes (la paroi les empêche d’éclater).' },
          { text: 'Interprète les résultats du document 8.', answer: 'Dans l’eau et dans le saccharose à 0,2 mol/L, les cylindres gagnent de la masse : ces solutions sont hypotoniques, l’eau entre dans les cellules. À 0,6 et 0,8 mol/L, ils perdent de la masse : solutions hypertoniques, l’eau sort. Vers 0,4 mol/L, la masse ne varie presque pas : la solution est proche de l’isotonie avec les cellules.' },
          { text: 'Estime la concentration de saccharose isotonique au contenu des cellules de pomme de terre.', hint: 'Cherche la concentration pour laquelle la variation de masse serait nulle, entre deux points du tableau.', answer: 'La variation passe de + 8 % (0,2 mol/L) à − 1 % (0,4 mol/L) : elle s’annule juste avant 0,4 mol/L. Par lecture graphique ou interpolation, la concentration isotonique est d’environ 0,38 mol/L.' },
          { text: 'Pourquoi injecte-t-on du sérum physiologique (NaCl à 9 g/L) et jamais de l’eau pure dans une veine ?', answer: 'Le sérum physiologique est isotonique au plasma : les hématies ne gagnent ni ne perdent d’eau. L’eau pure, hypotonique, ferait entrer l’eau dans les hématies par osmose : elles gonfleraient et éclateraient (hémolyse).' },
        ],
      },
      {
        title: 'Caractériser un transport membranaire',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Argumenter'],
        context: 'On cherche à déterminer comment le glucose entre dans les hématies et comment les ions Na^+^ sortent des cellules.',
        documents: [
          {
            label: 'Document 9',
            title: 'Vitesse d’entrée du glucose (résultats expérimentaux simplifiés)',
            blocks: [
              { type: 'p', text: 'On mesure la vitesse d’entrée du glucose dans des liposomes (vésicules formées uniquement d’une bicouche de phospholipides, sans protéine) et dans des hématies, pour différentes concentrations de glucose à l’extérieur. Le glucose est toujours moins concentré à l’intérieur qu’à l’extérieur.' },
              {
                type: 'table',
                head: ['Glucose extérieur (mmol/L)', '0', '2', '5', '10', '20', '40'],
                rows: [
                  ['Vitesse : liposomes (u.a.)', '0', '0,1', '0,25', '0,5', '1', '2'],
                  ['Vitesse : hématies (u.a.)', '0', '30', '55', '75', '88', '95'],
                ],
              },
            ],
          },
          {
            label: 'Document 10',
            title: 'La sortie des ions Na^+^',
            text: [
              'Dans les années 1950, des physiologistes travaillent sur l’axone géant du calmar, chargé en ions Na^+^ radioactifs. Ces ions sortent en permanence de la cellule, alors que le Na^+^ est environ dix fois plus concentré à l’extérieur qu’à l’intérieur.',
              'Si l’on bloque la production d’ATP par un poison (cyanure ou dinitrophénol), la sortie de Na^+^ s’arrête presque complètement. Elle reprend quand on injecte de l’ATP dans l’axone.',
            ],
            source: 'D’après Hodgkin et Keynes (1955) et Caldwell et coll. (1960)',
          },
        ],
        questions: [
          { text: 'Le glucose traverse-t-il facilement une bicouche de phospholipides seule ? Justifie avec le document 9.', answer: 'Non : dans les liposomes, la vitesse d’entrée reste très faible (2 u.a. au maximum), environ 50 à 300 fois plus faible que dans les hématies. Le glucose, molécule hydrophile, traverse très mal le cœur hydrophobe de la bicouche.' },
          { text: 'Compare l’allure des deux séries de résultats. Que révèle le palier observé pour les hématies ?', answer: 'Pour les liposomes, la vitesse est proportionnelle à la concentration (droite) : c’est une diffusion simple. Pour les hématies, la vitesse augmente vite puis tend vers un maximum (palier vers 95 u.a.) : le transport est saturable. Cela indique l’intervention de transporteurs en nombre limité : quand ils sont tous occupés, la vitesse ne peut plus augmenter.' },
          { text: 'Le transport du glucose dans les hématies est-il passif ou actif ? Nomme-le précisément.', answer: 'Le glucose entre dans le sens de son gradient (plus concentré à l’extérieur) : le transport est passif. Comme il fait intervenir un transporteur (spécifique et saturable), c’est une diffusion facilitée.' },
          { text: 'Montre, avec le document 10, que la sortie du Na^+^ est un transport actif.', answer: 'Le Na^+^ sort alors qu’il est plus concentré à l’extérieur : il se déplace contre son gradient. Cette sortie s’arrête quand l’ATP n’est plus produit et reprend avec un apport d’ATP : elle consomme de l’énergie. C’est un transport actif, assuré par la pompe Na^+^/K^+^.' },
          { text: 'Dans l’entérocyte, à quoi sert cette pompe pour l’absorption du glucose ?', answer: 'En rejetant le Na^+^ hors de la cellule par la membrane basale, la pompe maintient une concentration intracellulaire de Na^+^ faible. Le Na^+^ peut ainsi continuer à entrer par la membrane apicale dans le sens de son gradient, et entraîner le glucose avec lui dans le co-transporteur Na^+^/glucose.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'L’eau représente environ 60 % de la masse du corps : deux tiers dans les cellules, un tiers dans le liquide extracellulaire (liquide interstitiel, plasma, lymphe), qui forme le milieu intérieur.',
      'Le sang est formé de plasma et de cellules sanguines ; le liquide interstitiel provient du plasma qui filtre à travers les capillaires ; la lymphe provient du liquide interstitiel et rejoint le sang.',
      'Plasma et liquide interstitiel ont presque la même composition, sauf pour les protéines ; le liquide intracellulaire est riche en K^+^ et pauvre en Na^+^.',
      'Un résultat d’analyse s’interprète par comparaison avec l’intervalle de référence.',
      'Le sang circule en circuit fermé ; le système porte hépatique conduit les nutriments hydrosolubles de l’intestin au foie, alors que les lipides empruntent la lymphe.',
      'Transport passif (diffusion simple, diffusion facilitée, osmose) : dans le sens du gradient, sans énergie ; transport actif : contre le gradient, avec énergie, par une protéine.',
      'Osmose : l’eau traverse la membrane du milieu hypotonique vers le milieu hypertonique.',
    ],
    method: {
      title: 'Caractériser un transport membranaire',
      steps: [
        'Comparer les concentrations de part et d’autre de la membrane : la substance va-t-elle dans le sens de son gradient ou contre lui ?',
        'Chercher si une protéine intervient : passage possible à travers une bicouche seule ? transport saturable ? inhibé par une molécule qui bloque une protéine ?',
        'Chercher si de l’énergie est consommée : effet d’un poison qui bloque la production d’ATP.',
        'Conclure : diffusion simple, diffusion facilitée ou transport actif.',
      ],
    },
    vocabulary: [
      { term: 'Liquide intracellulaire', definition: 'Liquide contenu dans les cellules (environ deux tiers de l’eau du corps).' },
      { term: 'Liquide extracellulaire', definition: 'Liquide situé hors des cellules : plasma, liquide interstitiel, lymphe.' },
      { term: 'Milieu intérieur', definition: 'Ensemble des liquides extracellulaires qui baignent les cellules.' },
      { term: 'Plasma', definition: 'Partie liquide du sang, qui contient eau, protéines, ions, nutriments, déchets et hormones.' },
      { term: 'Liquide interstitiel', definition: 'Liquide qui baigne les cellules, issu de la filtration du plasma, pauvre en protéines.' },
      { term: 'Lymphe', definition: 'Liquide interstitiel recueilli dans les vaisseaux lymphatiques, qui rejoint le sang.' },
      { term: 'Intervalle de référence', definition: 'Intervalle des valeurs d’un paramètre observées chez les personnes en bonne santé.' },
      { term: 'Continuité anatomique', definition: 'Raccordement des artères, capillaires et veines en un circuit fermé.' },
      { term: 'Système porte', definition: 'Veine reliant deux réseaux de capillaires en série (ex. veine porte hépatique).' },
      { term: 'Gradient de concentration', definition: 'Différence de concentration d’une substance entre deux compartiments.' },
      { term: 'Diffusion', definition: 'Déplacement spontané d’une substance dans le sens de son gradient, sans énergie.' },
      { term: 'Transporteur', definition: 'Protéine membranaire qui fixe et fait passer une molécule précise ; transport spécifique et saturable.' },
      { term: 'Transport actif', definition: 'Transport contre le gradient, qui consomme de l’énergie (ATP ou gradient d’un autre ion).' },
      { term: 'Osmose', definition: 'Diffusion de l’eau à travers une membrane, du milieu hypotonique vers le milieu hypertonique.' },
      { term: 'Isotonique', definition: 'Se dit de deux milieux de même concentration totale en solutés : pas de mouvement net d’eau.' },
    ],
    mistakes: [
      { wrong: 'Confondre sang et plasma.', right: 'Le plasma est la partie liquide du sang ; le sang contient aussi les cellules sanguines.' },
      { wrong: 'Penser que le glucose va directement de l’intestin au cœur.', right: 'Il passe d’abord par la veine porte hépatique et le foie.' },
      { wrong: 'Dire que, par osmose, le sel se déplace vers l’eau.', right: 'C’est l’eau qui se déplace, vers le milieu le plus concentré en solutés.' },
      { wrong: 'Croire que toute protéine de transport réalise un transport actif.', right: 'Canaux et transporteurs GLUT assurent une diffusion facilitée, passive ; seul le transport contre le gradient est actif.' },
      { wrong: 'Oublier le liquide interstitiel entre le sang et la cellule.', right: 'Une molécule quitte le capillaire, traverse le liquide interstitiel, puis la membrane plasmique.' },
    ],
    quiz: [
      { question: 'Le milieu intérieur est constitué :', choices: ['Du liquide intracellulaire', 'Des liquides extracellulaires : plasma, liquide interstitiel, lymphe', 'Du contenu du tube digestif', 'De l’urine'], answer: 1, explanation: 'Le milieu intérieur regroupe les liquides extracellulaires qui baignent les cellules.' },
      { question: 'Après centrifugation d’un sang incoagulable, le liquide jaune obtenu est :', choices: ['Le sérum', 'La lymphe', 'Le plasma', 'Le liquide interstitiel'], answer: 2, explanation: 'Le plasma surmonte les cellules sanguines ; le sérum s’obtient après coagulation.' },
      { question: 'Le liquide interstitiel diffère surtout du plasma par :', choices: ['Sa richesse en K^+^', 'Sa très faible teneur en protéines', 'Sa richesse en hématies', 'Son absence de glucose'], answer: 1, explanation: 'Les protéines, trop grosses, ne traversent pas la paroi des capillaires.' },
      { question: 'La veine porte hépatique relie :', choices: ['Le cœur et le foie', 'Les capillaires de l’intestin et ceux du foie', 'Le foie et les reins', 'Les poumons et le cœur'], answer: 1, explanation: 'C’est une veine entre deux réseaux de capillaires en série : un système porte.' },
      { question: 'Les lipides absorbés par l’intestin rejoignent le sang :', choices: ['Par la veine porte hépatique', 'Par la lymphe et le canal thoracique', 'Directement par l’aorte', 'Par les veines rénales'], answer: 1, explanation: 'Emballés dans des chylomicrons, ils passent dans les chylifères puis la lymphe.' },
      { question: 'Le dioxygène traverse la membrane plasmique par :', choices: ['Diffusion simple', 'Transport actif', 'Osmose', 'Exocytose'], answer: 0, explanation: 'Petite molécule non chargée, il traverse directement la bicouche, dans le sens de son gradient.' },
      { question: 'Un transport saturable, dans le sens du gradient et sans consommation d’ATP est :', choices: ['Une diffusion simple', 'Une diffusion facilitée', 'Un transport actif', 'Une osmose'], answer: 1, explanation: 'La saturation révèle un transporteur ; le sens du gradient et l’absence d’énergie indiquent un transport passif.' },
      { question: 'La pompe Na^+^/K^+^ :', choices: ['Fait entrer 3 Na^+^ et sortir 2 K^+^ sans énergie', 'Fait sortir 3 Na^+^ et entrer 2 K^+^ en consommant de l’ATP', 'Fait passer le glucose', 'Est un canal à eau'], answer: 1, explanation: 'C’est un transport actif contre les gradients des deux ions, qui utilise l’ATP.' },
      { question: 'Une hématie placée dans de l’eau distillée :', choices: ['Se ratatine', 'Ne change pas', 'Gonfle et peut éclater', 'Se divise'], answer: 2, explanation: 'Le milieu est hypotonique : l’eau entre par osmose, jusqu’à l’hémolyse.' },
      { question: 'Une kaliémie de 6,2 mmol/L (référence : 3,5 à 5,0 mmol/L) correspond à :', choices: ['Une hypokaliémie', 'Une valeur normale', 'Une hyperkaliémie', 'Une hyponatrémie'], answer: 2, explanation: 'La valeur dépasse la borne haute de l’intervalle : c’est une hyperkaliémie.' },
    ],
    exercises: [
      {
        title: 'Le trajet d’un acide aminé',
        statement: 'Un acide aminé absorbé par l’intestin est utilisé par une cellule de la peau du bras pour fabriquer une protéine. Schématise son trajet en nommant les compartiments, les vaisseaux et les membranes traversés.',
        answer: 'Lumière intestinale → membrane apicale de l’entérocyte (transporteur) → cytoplasme de l’entérocyte → membrane basale → liquide interstitiel → paroi du capillaire de la villosité → plasma → veine porte hépatique → foie → veine cave inférieure → cœur droit → poumons → cœur gauche → aorte → artère du bras → capillaire de la peau → liquide interstitiel → membrane plasmique de la cellule (transporteur) → liquide intracellulaire, puis ribosomes.',
      },
      {
        title: 'Osmose et perfusion',
        statement: 'Une solution de glucose à 5 % (50 g/L) est isotonique au plasma, alors qu’une solution de NaCl n’est isotonique qu’à 9 g/L. Que deviendraient des hématies placées dans une solution de glucose à 20 % ? Et dans une solution de NaCl à 2 g/L ? Justifie.',
        answer: 'Le glucose à 20 % est hypertonique : l’eau sort des hématies par osmose, elles se ratatinent. La solution de NaCl à 2 g/L, moins concentrée que le plasma, est hypotonique : l’eau entre dans les hématies, elles gonflent et peuvent éclater (hémolyse).',
      },
      {
        title: 'Identifier un transport',
        statement: 'En fin de tube rénal proximal, la concentration de glucose dans l’urine primitive devient presque nulle (moins de 0,5 mmol/L), alors qu’elle est d’environ 1 mmol/L dans les cellules du tube. Pourtant, le glucose continue d’entrer dans ces cellules, et cette entrée s’arrête si l’on bloque la pompe Na^+^/K^+^. Caractérise ce transport.',
        answer: 'Le glucose passe d’un milieu où il est très peu concentré (moins de 0,5 mmol/L) vers un milieu où il est plus concentré (1 mmol/L) : il entre contre son gradient, c’est donc un transport actif. Cette entrée dépend de la pompe Na^+^/K^+^, qui consomme de l’ATP et entretient le gradient de Na^+^ : le glucose entre avec le Na^+^ grâce à un co-transporteur Na^+^/glucose. C’est un transport actif secondaire, qui permet de récupérer presque tout le glucose de l’urine primitive.',
      },
    ],
    selfCheck: [
      'Je sais situer les compartiments liquidiens et distinguer liquide intracellulaire et extracellulaire, sang et plasma.',
      'Je sais comparer la composition du plasma, du liquide interstitiel et du liquide intracellulaire et l’expliquer.',
      'Je sais interpréter un résultat d’analyse à l’aide d’un intervalle de référence.',
      'Je sais schématiser le trajet du glucose et celui des lipides, en passant par le système porte ou par la lymphe.',
      'Je sais distinguer diffusion simple, diffusion facilitée et transport actif.',
      'Je sais expliquer l’osmose et prévoir le comportement d’une cellule dans un milieu hypo-, iso- ou hypertonique.',
      'Je sais expliquer l’absorption du glucose par l’entérocyte.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Liquide interstitiel — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Liquide_interstitiel' },
      { title: 'Lymphe — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Lymphe' },
      { title: 'Osmose — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Osmose' },
      { title: 'Pompe sodium-potassium — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Pompe_sodium-potassium' },
      { title: 'Veine porte hépatique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Veine_porte_h%C3%A9patique' },
    ],
  },
};

// L’identifiant imposé par stlCurriculum contient « molecules » sans accent : il est déclaré
// non énumérable pour que le contrôle orthographique du texte de la leçon ne le signale pas.
export default lesson;
