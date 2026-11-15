import { img } from '../media';
import villositesMicro from '../../../assets/courses/open/intestinal-villi-microscope.webp';
import villosite from '../../../assets/courses/premiere/bb1-3-absorption-devenir/villosite.webp';
import enterocyte from '../../../assets/courses/premiere/bb1-3-absorption-devenir/enterocyte.webp';
import trajetNutriments from '../../../assets/courses/premiere/bb1-3-absorption-devenir/trajet-nutriments.webp';
import adipocytes from '../../../assets/courses/premiere/bb1-3-absorption-devenir/adipocytes.webp';
import foieGlycogene from '../../../assets/courses/premiere/bb1-3-absorption-devenir/foie-glycogene.webp';

const IMG = {
  villositesMicro: img(villositesMicro, 'Coupe transversale d’intestin grêle observée au microscope optique : de nombreuses villosités en doigt de gant colorées en rose rayonnent vers la lumière centrale.', 'micro', 1400, 1866),
  villosite: img(villosite, 'Schéma annoté d’une villosité intestinale en coupe longitudinale : lumière intestinale, entérocytes, bordure en brosse, cellules caliciformes, chorion, capillaires sanguins, vaisseau chylifère central, artériole et veinule.', 'schema', 933, 1400),
  enterocyte: img(enterocyte, 'Schéma d’un entérocyte polarisé : microvillosités et co-transporteur dans la membrane apicale, jonctions serrées, noyau, transporteur et pompe dans la membrane basale, capillaire sanguin en dessous.', 'schema', 1400, 933),
  trajet: img(trajetNutriments, 'Schéma du trajet des nutriments : de l’intestin grêle, la veine porte hépatique conduit au foie, puis les veines hépatiques et la veine cave inférieure au cœur ; les vaisseaux lymphatiques et le canal thoracique rejoignent la veine sous-clavière gauche.', 'schema', 933, 1400),
  adipocytes: img(adipocytes, 'Microphotographie de tissu adipeux coloré à l’hématoxyline-éosine : grandes cellules arrondies vides, au fin liseré rose, noyaux aplatis en périphérie, quelques capillaires.', 'micro', 1536, 1024),
  foie: img(foieGlycogene, 'Microphotographie de foie colorée au PAS : travées d’hépatocytes au cytoplasme rempli de granules magenta (glycogène), noyaux bleu-violet, veine centrolobulaire.', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bb1-3-absorption-devenir',
  duration: 'Environ 4 séances (cours, observations microscopiques, analyse de documents)',
  hook: {
    image: IMG.villositesMicro,
    question: 'Ton intestin grêle ne mesure que quelques mètres, mais sa surface intérieure atteint environ 30 m². Comment ses cellules font-elles passer le glucose dans ton sang, et où va-t-il ensuite ?',
    text: 'La digestion a produit des nutriments, mais ils sont encore dans la lumière de l’intestin, c’est-à-dire dans le milieu extérieur. Dans ce chapitre, tu suis leur voyage : la traversée de la paroi intestinale, molécule par molécule, puis la circulation dans le sang ou la lymphe, jusqu’au foie et au tissu adipeux, où ils sont stockés ou libérés selon les besoins.',
  },
  objectives: [
    'Décrire la paroi de l’intestin grêle à toutes les échelles (plis, villosités, entérocytes, microvillosités) et expliquer l’augmentation de la surface d’échange.',
    'Expliquer ce qu’est une cellule polarisée et le rôle des membranes apicale et basale de l’entérocyte.',
    'Distinguer diffusion, transport passif par transporteur et transport actif ; expliquer le co-transport sodium-glucose grâce au gradient électrochimique.',
    'Relier la nature d’un nutriment (hydrosoluble ou liposoluble) à sa voie de circulation : sang et système porte hépatique, ou lymphe.',
    'Schématiser le stockage et la libération des nutriments par les hépatocytes et les adipocytes : glycogénogenèse, glycogénolyse, lipogenèse, lipolyse.',
  ],
  prerequisites: [
    'Chapitre 1.2 : les nutriments issus de la digestion (glucose, acides aminés, acides gras, monoglycérides) ; la lumière appartient au milieu extérieur.',
    'Module transversal A : membrane plasmique (bicouche de phospholipides, protéines membranaires), molécules hydrophiles et hydrophobes.',
    'Cycle 4 : le système cardiovasculaire, le cœur et les vaisseaux sanguins.',
  ],
  program: [
    'Expliquer le lien entre la structure de la paroi intestinale et sa fonction d’absorption, à tous les niveaux d’organisation : villosités / microvillosités, cellule polarisée, membrane apicale / membrane basale.',
    'Perméabilité membranaire, diffusion, transporteur, transport passif / transport actif, gradient électrochimique, co-transport : modalités d’absorption du glucose et des acides gras à chaînes courtes par un entérocyte.',
    'Mettre en relation la nature des nutriments et leur circulation dans le milieu intérieur : circulation lymphatique, circulation sanguine, système porte.',
    'Schématiser le stockage et la libération des nutriments dans le cas des hépatocytes et des adipocytes : anabolisme / catabolisme, glycogénogenèse / glycogénolyse, lipogenèse / lipolyse.',
  ],

  course: {
    parts: [
      {
        title: 'Une surface d’échange immense, à toutes les échelles',
        intro: 'L’intestin grêle est l’organe de l’absorption : sa paroi est organisée pour offrir une très grande surface d’échange, très mince et très irriguée.',
        blocks: [
          { type: 'definition', term: 'Absorption intestinale', text: 'passage des nutriments de la **lumière** de l’intestin (milieu extérieur) vers le **milieu intérieur** (sang et lymphe), à travers les cellules de la paroi de l’intestin grêle.' },
          { type: 'p', text: 'Plus la surface de contact entre le contenu intestinal et la paroi est grande, plus l’absorption est rapide. Or la paroi de l’intestin grêle est repliée à trois échelles emboîtées, comme des replis sur des replis.' },
          {
            type: 'table',
            caption: 'Les niveaux d’amplification de la surface (mesures publiées en 2014)',
            head: ['Niveau', 'Structure', 'Taille', 'Surface multipliée par'],
            rows: [
              ['Organe', 'Tube d’environ 3 m de long chez le vivant et 2,5 cm de diamètre', 'Mètres', '1 (référence : tube lisse)'],
              ['Plis circulaires', 'Replis permanents de la muqueuse et de la sous-muqueuse', 'Environ 1 cm', 'Environ 1,6'],
              ['Villosités', 'Saillies en doigt de gant de la muqueuse', '0,5 à 1 mm', 'Environ 6,5'],
              ['Microvillosités', 'Replis de la membrane plasmique de chaque entérocyte (bordure en brosse)', 'Environ 1 µm', 'Environ 13'],
            ],
          },
          { type: 'example', title: 'calcul de la surface', text: ['Surface d’un tube lisse : π × diamètre × longueur = 3,14 × 0,025 m × 2,9 m ≈ 0,23 m².', 'Avec les replis : 0,23 × 1,6 × 6,5 × 13 ≈ **30 m²**, soit environ la moitié d’un terrain de badminton. Les anciens manuels annonçaient 200 à 300 m², mais des mesures plus précises ont revu ce chiffre à la baisse : il reste énorme pour un organe qui tient dans l’abdomen.'] },
          { type: 'figure', image: IMG.villositesMicro, caption: 'Coupe transversale d’intestin grêle au microscope optique : les villosités rayonnent vers la lumière, au centre.', credit: 'Jamilbaza — CC BY 4.0', size: 'small' },
          { type: 'definition', term: 'Villosité intestinale', text: 'saillie en doigt de gant de la muqueuse de l’intestin grêle, haute de 0,5 à 1 mm. Elle est recouverte d’un épithélium formé d’une **seule couche de cellules** et contient un réseau dense de **capillaires sanguins** et un vaisseau lymphatique central, le **vaisseau chylifère**.' },
          { type: 'definition', term: 'Microvillosités', text: 'minuscules replis (environ 1 µm) de la membrane du pôle apical des entérocytes ; serrées par milliers, elles forment la **bordure en brosse**, qui porte aussi les dernières enzymes de la digestion (maltase, lactase, peptidases).' },
          { type: 'figure', image: IMG.villosite, caption: 'Organisation d’une villosité intestinale. Les nutriments traversent les entérocytes puis gagnent soit les capillaires sanguins, soit le vaisseau chylifère (en vert).', size: 'normal' },
          {
            type: 'cards',
            items: [
              { title: 'Surface immense', text: 'Plis, villosités et microvillosités multiplient la surface par plus de 100.', tone: 'green' },
              { title: 'Paroi très mince', text: 'Une seule couche de cellules sépare la lumière du chorion : les nutriments n’ont que quelques micromètres à parcourir.', tone: 'blue' },
              { title: 'Forte irrigation', text: 'Chaque villosité possède un réseau de capillaires sanguins et un vaisseau chylifère, qui emportent sans cesse les nutriments absorbés.', tone: 'red' },
              { title: 'Renouvellement rapide', text: 'Les entérocytes, produits par les cellules souches des cryptes, sont remplacés en quelques jours.', tone: 'yellow' },
            ],
          },
          { type: 'definition', term: 'Cellule polarisée', text: 'cellule dont les deux pôles ont une structure et une fonction différentes. L’entérocyte possède une **membrane apicale**, tournée vers la lumière intestinale (microvillosités, enzymes digestives, transporteurs d’entrée), et une **membrane basale** (ou basolatérale), tournée vers le chorion et le milieu intérieur (autres transporteurs, pompes). Les nutriments entrent par le pôle apical et sortent par le pôle basal.' },
          { type: 'definition', term: 'Jonctions serrées', text: 'zones où les membranes de deux cellules voisines sont soudées, près du pôle apical. Elles rendent l’épithélium étanche (les molécules doivent **traverser** les cellules au lieu de passer entre elles) et empêchent les protéines de la membrane apicale de migrer vers la membrane basale.' },
          {
            type: 'retenir',
            items: [
              'L’absorption a lieu dans l’**intestin grêle** : plis, **villosités** et **microvillosités** portent la surface à environ 30 m².',
              'La paroi est très mince (une couche de cellules) et très irriguée (capillaires sanguins et vaisseau chylifère).',
              'L’entérocyte est une **cellule polarisée** : membrane apicale (côté lumière) et membrane basale (côté milieu intérieur) ont des protéines différentes ; les jonctions serrées rendent l’épithélium étanche.',
            ],
          },
        ],
      },

      {
        title: 'Traverser une membrane : diffusion, transport passif et transport actif',
        intro: 'Pour entrer dans le milieu intérieur, un nutriment doit franchir deux membranes : la membrane apicale puis la membrane basale de l’entérocyte.',
        blocks: [
          { type: 'definition', term: 'Perméabilité membranaire', text: 'aptitude d’une membrane à se laisser traverser par une substance. La bicouche de phospholipides, au cœur hydrophobe, laisse passer facilement les **petites molécules hydrophobes** (dioxygène, dioxyde de carbone, acides gras à chaîne courte, éthanol) ; elle est presque **imperméable** aux ions et aux molécules polaires de taille moyenne comme le glucose ou les acides aminés, qui ont besoin de **protéines de transport**.' },
          { type: 'definition', term: 'Diffusion simple', text: 'déplacement spontané d’une substance à travers la bicouche lipidique, du milieu où elle est la plus concentrée vers celui où elle l’est le moins (dans le sens de son **gradient de concentration**), sans dépense d’énergie et sans protéine.' },
          { type: 'definition', term: 'Transporteur', text: 'protéine membranaire qui fixe spécifiquement une molécule ou un ion et lui fait traverser la membrane en changeant de forme. Comme une enzyme, il est spécifique et **saturable** : quand tous les transporteurs sont occupés, le débit ne peut plus augmenter.' },
          { type: 'definition', term: 'Gradient électrochimique', text: 'force qui pousse un ion à traverser une membrane ; elle combine le **gradient de concentration** et le **gradient électrique** (l’intérieur des cellules est chargé négativement par rapport à l’extérieur). Pour l’ion sodium, Na^+^, les deux s’additionnent : il est environ 10 fois plus concentré à l’extérieur (environ 140 mmol par litre) qu’à l’intérieur de la cellule (environ 12 mmol par litre), et il est attiré par l’intérieur négatif. Na^+^ a donc une forte tendance à entrer dans la cellule.' },
          {
            type: 'compare',
            title: 'Transport passif ou transport actif ?',
            columns: [
              { title: 'Transport passif', subtitle: 'dans le sens du gradient', items: ['Se fait spontanément, **sans dépense d’énergie** par la cellule.', '**Diffusion simple** à travers la bicouche (petites molécules hydrophobes).', '**Diffusion facilitée** par un canal ou un transporteur (ex. sortie du glucose par le transporteur GLUT2 ; passage de l’eau par les aquaporines).', 'S’arrête quand les concentrations sont égales de part et d’autre.'] },
              { title: 'Transport actif', subtitle: 'contre le gradient', items: ['**Consomme de l’énergie**.', 'Actif primaire : une **pompe** utilise directement l’ATP (ex. la pompe sodium-potassium fait sortir 3 Na^+^ et entrer 2 K^+^ par molécule d’ATP).', 'Actif secondaire : un **co-transporteur** utilise l’énergie du gradient d’un ion, créé par une pompe.', 'Permet d’accumuler une substance d’un côté de la membrane.'] },
            ],
          },
          { type: 'definition', term: 'Co-transport', text: 'transport simultané de deux substances différentes par une même protéine. L’une (Na^+^) descend son gradient électrochimique : l’énergie ainsi libérée permet de faire passer l’autre (le glucose) **contre** son gradient de concentration. C’est un transport actif **secondaire**, car il dépend du gradient de Na^+^ entretenu par la pompe sodium-potassium.' },
          {
            type: 'retenir',
            items: [
              'La bicouche lipidique laisse passer les petites molécules hydrophobes par **diffusion simple** ; les ions et les molécules polaires ont besoin de **transporteurs** ou de canaux.',
              'Transport **passif** : dans le sens du gradient, sans énergie. Transport **actif** : contre le gradient, avec énergie (pompe à ATP ou co-transport).',
              'Le **gradient électrochimique** de Na^+^ (concentration + charge) pousse cet ion à entrer dans la cellule.',
            ],
          },
        ],
      },

      {
        title: 'L’entérocyte en action : absorption du glucose et des acides gras',
        intro: 'Le glucose de l’intestin entre dans l’entérocyte même quand il y est déjà plus concentré : comment est-ce possible ?',
        blocks: [
          { type: 'figure', image: IMG.enterocyte, caption: 'Absorption du glucose par un entérocyte. Hexagones : glucose ; points : ions. En haut, le co-transporteur fait entrer ensemble glucose et ions sodium ; en bas, le transporteur laisse sortir le glucose vers le sang, tandis que la pompe (qui consomme de l’ATP) fait sortir les ions sodium et entrer les ions potassium.', size: 'wide' },
          {
            type: 'steps',
            title: 'Les trois étapes de l’absorption du glucose',
            items: [
              { title: 'La pompe sodium-potassium crée le gradient (membrane basale)', text: 'Elle expulse en permanence 3 Na^+^ vers le milieu intérieur et fait entrer 2 K^+^, en consommant de l’ATP : la concentration de Na^+^ reste **basse** dans l’entérocyte. C’est un transport actif primaire.' },
              { title: 'Le co-transporteur sodium-glucose fait entrer le glucose (membrane apicale)', text: 'Il fait entrer ensemble 2 Na^+^, qui descendent leur gradient électrochimique, et 1 glucose, qui remonte son gradient de concentration : le glucose **s’accumule** dans l’entérocyte. C’est un transport actif secondaire (le galactose emprunte le même co-transporteur).' },
              { title: 'Le transporteur GLUT2 laisse sortir le glucose (membrane basale)', text: 'Plus concentré dans l’entérocyte que dans le milieu intérieur, le glucose sort par **diffusion facilitée**, dans le sens de son gradient, puis gagne les capillaires sanguins de la villosité.' },
            ],
          },
          { type: 'p', text: 'Grâce à ce mécanisme, la quasi-totalité du glucose présent dans la lumière est absorbée, même à la fin de la digestion, quand il y est devenu peu concentré. Le **fructose**, lui, entre par simple diffusion facilitée, grâce à un autre transporteur (GLUT5). La plupart des **acides aminés** sont absorbés par d’autres co-transporteurs couplés au sodium.' },
          { type: 'example', title: 'la solution de réhydratation orale', text: 'Lors d’une diarrhée grave (choléra, gastro-entérite du nourrisson), boire de l’eau pure ne suffit pas à se réhydrater. On donne une solution contenant du sel **et** du glucose : grâce au co-transport, le glucose entraîne l’absorption du sodium, et l’eau suit par osmose. Cette solution très simple sauve chaque année des centaines de milliers de vies.' },
          { type: 'p', text: '**Les acides gras à chaîne courte** (de 2 à 6 atomes de carbone, comme l’acétate ou le butyrate) proviennent surtout de la fermentation des fibres par le microbiote et de certaines matières grasses (beurre, lait). Petits et peu polaires sous leur forme non ionisée, ils traversent la bicouche par **diffusion simple** (des transporteurs y participent aussi). Assez solubles dans l’eau, ils passent ensuite directement dans les **capillaires sanguins**.' },
          { type: 'p', text: '**Les acides gras à longue chaîne et les monoglycérides**, très hydrophobes, sont amenés jusqu’à la membrane apicale par de minuscules agrégats formés avec les sels biliaires (micelles). Ils diffusent à travers la bicouche, puis l’entérocyte les **réassemble en triglycérides** et les emballe avec des protéines dans de grosses particules, les **chylomicrons**. Trop gros pour entrer dans les capillaires sanguins, les chylomicrons passent dans le **vaisseau chylifère** : la lymphe intestinale devient laiteuse, c’est le **chyle**.' },
          {
            type: 'table',
            caption: 'Bilan : comment chaque nutriment est-il absorbé ?',
            head: ['Nutriment', 'Nature', 'Passage de la membrane apicale', 'Voie empruntée'],
            rows: [
              ['Glucose, galactose', 'Hydrosoluble', 'Co-transport avec Na^+^ (actif secondaire)', 'Sang'],
              ['Fructose', 'Hydrosoluble', 'Diffusion facilitée par un transporteur', 'Sang'],
              ['Acides aminés', 'Hydrosolubles', 'Co-transports couplés au Na^+^ pour la plupart', 'Sang'],
              ['Eau', 'Minérale', 'Osmose, en partie par des aquaporines', 'Sang'],
              ['Ions, vitamines hydrosolubles (B, C)', 'Hydrosolubles', 'Canaux et transporteurs spécifiques', 'Sang'],
              ['Acides gras à chaîne courte', 'Petits, peu polaires', 'Diffusion simple (et transporteurs)', 'Sang'],
              ['Acides gras à longue chaîne, monoglycérides, cholestérol, vitamines A, D, E et K', 'Liposolubles', 'Diffusion à travers la bicouche, puis assemblage en chylomicrons', 'Lymphe'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Glucose : entrée par **co-transport avec Na^+^** (membrane apicale), sortie par **diffusion facilitée** (membrane basale) ; la **pompe Na^+^/K^+^** entretient le gradient de sodium.',
              'Les acides gras à chaîne courte traversent la membrane par **diffusion simple** et rejoignent le sang.',
              'Les lipides à longue chaîne sont réassemblés en triglycérides, emballés en **chylomicrons** et rejoignent la **lymphe**.',
            ],
          },
        ],
      },

      {
        title: 'La circulation des nutriments : sang, système porte et lymphe',
        intro: 'Une fois sortis de l’entérocyte, les nutriments empruntent deux routes différentes selon leur nature.',
        blocks: [
          { type: 'figure', image: IMG.trajet, caption: 'Les deux voies des nutriments absorbés. Voie sanguine (en vert) : nutriments hydrosolubles, par la veine porte hépatique vers le foie. Voie lymphatique : lipides en chylomicrons, par le canal thoracique vers la veine sous-clavière gauche.', size: 'normal' },
          { type: 'definition', term: 'Système porte', text: 'dispositif circulatoire dans lequel une veine relie **deux réseaux de capillaires** successifs, sans repasser par le cœur. Le **système porte hépatique** relie les capillaires des villosités intestinales aux capillaires du foie par la **veine porte hépatique**.' },
          {
            type: 'flow',
            title: 'Trajet du glucose absorbé',
            steps: [
              { title: 'Capillaires des villosités', text: 'intestin grêle' },
              { title: 'Veine porte hépatique', text: 'système porte' },
              { title: 'Capillaires du foie', text: 'stockage ou transformation' },
              { title: 'Veines hépatiques', text: 'puis veine cave inférieure' },
              { title: 'Cœur', text: 'puis circulation générale' },
            ],
          },
          { type: 'p', text: 'Conséquence : le **foie** reçoit **en premier** tous les nutriments hydrosolubles absorbés. Après un repas, le sang de la veine porte est beaucoup plus riche en glucose que le reste du sang ; le foie en stocke une partie, ce qui limite l’élévation de la glycémie dans la circulation générale. Il transforme aussi les acides aminés en excès et neutralise de nombreuses substances toxiques (alcool, certains médicaments) avant qu’elles n’atteignent le reste de l’organisme.' },
          { type: 'definition', term: 'Circulation lymphatique', text: 'réseau de vaisseaux à sens unique qui collecte la lymphe dans les tissus et la ramène dans le sang. Dans l’intestin, les vaisseaux chylifères des villosités rejoignent des vaisseaux lymphatiques de plus en plus gros, puis le **canal thoracique**, qui remonte le long de la colonne vertébrale et se jette dans la **veine sous-clavière gauche**, à la base du cou. La lymphe y circule lentement, poussée par les contractions des muscles voisins et guidée par des valvules.' },
          {
            type: 'compare',
            title: 'Deux voies selon la nature des nutriments',
            columns: [
              { title: 'Voie sanguine', subtitle: 'nutriments hydrosolubles', items: ['Glucose, galactose, fructose, acides aminés, eau, ions, vitamines B et C, acides gras à chaîne courte.', 'Capillaires sanguins → veine porte hépatique → **foie** → veine cave inférieure → cœur.', 'Transport rapide ; le foie est le premier organe servi.'] },
              { title: 'Voie lymphatique', subtitle: 'nutriments liposolubles', items: ['Triglycérides réassemblés, cholestérol, vitamines A, D, E et K, dans les chylomicrons.', 'Vaisseau chylifère → vaisseaux lymphatiques → canal thoracique → veine sous-clavière gauche → cœur.', 'Les lipides rejoignent le sang **sans passer d’abord par le foie** ; ils sont distribués aux muscles et au tissu adipeux.'] },
            ],
          },
          { type: 'warning', text: 'Les deux voies finissent dans le **sang** : la lymphe rejoint la circulation sanguine au niveau de la veine sous-clavière gauche. La différence porte sur le chemin suivi et sur le premier organe atteint.' },
          {
            type: 'retenir',
            items: [
              'Les nutriments **hydrosolubles** passent dans les capillaires sanguins puis, par la **veine porte hépatique**, dans le foie : c’est le **système porte hépatique**.',
              'Les lipides, emballés en **chylomicrons**, passent dans la **lymphe** (vaisseau chylifère, canal thoracique) et rejoignent le sang dans la veine sous-clavière gauche.',
              'Un système porte relie deux réseaux de capillaires par une veine.',
            ],
          },
        ],
      },

      {
        title: 'Stocker et libérer : le rôle des hépatocytes et des adipocytes',
        intro: 'Tu manges trois ou quatre fois par jour, mais tes cellules consomment du glucose en permanence : l’organisme stocke donc les nutriments après les repas et les libère entre les repas.',
        blocks: [
          { type: 'definition', term: 'Anabolisme', text: 'ensemble des réactions de **synthèse** de molécules complexes à partir de molécules simples ; elles consomment de l’énergie. Exemples : synthèse du glycogène, des triglycérides, des protéines.' },
          { type: 'definition', term: 'Catabolisme', text: 'ensemble des réactions de **dégradation** de molécules complexes en molécules plus simples ; elles libèrent de l’énergie ou des molécules utilisables. Exemples : dégradation du glycogène, des triglycérides, respiration cellulaire.' },
          { type: 'definition', term: 'Glycogène', text: 'polyoside de réserve des cellules animales, formé de milliers de molécules de glucose en chaînes très ramifiées. Il est stocké sous forme de granules dans le cytoplasme des **hépatocytes** (cellules du foie) et des **myocytes** (cellules musculaires).' },
          { type: 'definition', term: 'Glycogénogenèse', text: 'synthèse de glycogène à partir de glucose (anabolisme). Elle a lieu après un repas, quand le glucose est abondant.' },
          { type: 'definition', term: 'Glycogénolyse', text: 'hydrolyse du glycogène en glucose (catabolisme). Dans les **hépatocytes**, le glucose libéré est **exporté dans le sang** : le foie maintient ainsi la glycémie entre les repas. Les réserves du foie (environ 100 g de glycogène) couvrent les besoins pendant une nuit, et au maximum une journée de jeûne.' },
          { type: 'figure', image: IMG.foie, caption: 'Coupe de foie colorée au PAS, qui colore le glycogène en magenta : les hépatocytes, disposés en travées autour d’une veine (à droite), sont remplis de granules de glycogène, signe d’un prélèvement réalisé après un repas.', size: 'wide' },
          { type: 'definition', term: 'Adipocyte', text: 'cellule du tissu adipeux spécialisée dans le stockage des **triglycérides**, rassemblés dans une énorme gouttelette lipidique qui occupe presque toute la cellule et repousse le noyau contre la membrane. Un adulte de corpulence normale stocke environ 10 à 15 kg de triglycérides, soit plus de 100 000 kcal : c’est de très loin la plus grande réserve d’énergie de l’organisme.' },
          { type: 'definition', term: 'Lipogenèse', text: 'synthèse d’acides gras et de triglycérides (anabolisme). Dans le foie et le tissu adipeux, le glucose en excès est transformé en acides gras, puis en triglycérides ; les adipocytes stockent aussi les acides gras apportés par les chylomicrons.' },
          { type: 'definition', term: 'Lipolyse', text: 'hydrolyse des triglycérides de réserve en **glycérol** et **acides gras** (catabolisme), libérés dans le sang lors d’un jeûne prolongé ou d’un effort d’endurance. Les acides gras sont utilisés comme source d’énergie par les muscles, le cœur et le foie.' },
          { type: 'figure', image: IMG.adipocytes, caption: 'Tissu adipeux (hématoxyline-éosine, ×200). Les adipocytes paraissent vides car leurs lipides ont été dissous pendant la préparation de la coupe ; il ne reste qu’un fin liseré de cytoplasme et un noyau aplati en périphérie. On distingue quelques capillaires remplis d’hématies.', size: 'wide' },
          {
            type: 'table',
            caption: 'Les voies de stockage et de libération',
            head: ['Voie', 'Type', 'Cellules', 'Réaction', 'Quand ?'],
            rows: [
              ['Glycogénogenèse', 'Anabolisme', 'Hépatocytes, myocytes', 'Glucose → glycogène', 'Après un repas (glycémie élevée)'],
              ['Glycogénolyse', 'Catabolisme', 'Hépatocytes (export du glucose) ; myocytes (usage sur place)', 'Glycogène → glucose', 'Entre les repas, effort'],
              ['Lipogenèse', 'Anabolisme', 'Hépatocytes, adipocytes', 'Glucose en excès → acides gras → triglycérides', 'Après un repas riche, excès d’énergie'],
              ['Lipolyse', 'Catabolisme', 'Adipocytes', 'Triglycérides → glycérol + acides gras', 'Jeûne prolongé, effort d’endurance'],
            ],
          },
          {
            type: 'compare',
            title: 'Schéma bilan : après un repas et à jeun',
            columns: [
              { title: 'Après un repas', subtitle: 'nutriments abondants : on stocke', items: ['Foie : glucose → glycogène (**glycogénogenèse**) ; glucose en excès → triglycérides (**lipogenèse**).', 'Muscles : glucose → glycogène.', 'Tissu adipeux : acides gras et glucose → triglycérides (**lipogenèse**).'] },
              { title: 'À jeun, pendant un effort', subtitle: 'nutriments rares : on libère', items: ['Foie : glycogène → glucose exporté dans le sang (**glycogénolyse**).', 'Muscles : glycogène → glucose utilisé sur place pour la contraction.', 'Tissu adipeux : triglycérides → glycérol + acides gras libérés dans le sang (**lipolyse**).'] },
            ],
          },
          { type: 'note', title: 'Le cas des myocytes', text: 'Les muscles stockent au total plus de glycogène que le foie (environ 300 à 400 g, du fait de leur masse), mais ils ne possèdent pas l’enzyme qui permet de libérer le glucose dans le sang : leur glycogène ne sert qu’à leur propre contraction. Seul le foie (et, dans une moindre mesure, le rein) peut exporter du glucose dans le sang.' },
          { type: 'note', title: 'Et les acides aminés ?', text: 'L’organisme ne stocke pas les acides aminés en excès : le foie leur retire leur groupement azoté, transformé en **urée**, éliminée par les reins (chapitre 1.4) ; le reste de la molécule est utilisé pour produire de l’énergie, du glucose ou des lipides.' },
          { type: 'warning', text: 'Ces voies ne fonctionnent pas au hasard : elles sont commandées par des hormones, principalement l’**insuline** (qui favorise le stockage) et le **glucagon** (qui favorise la libération du glucose). Leur rôle dans la régulation de la glycémie est étudié au chapitre 1.5.' },
          {
            type: 'retenir',
            items: [
              '**Anabolisme** = synthèse (consomme de l’énergie) ; **catabolisme** = dégradation (libère de l’énergie ou des molécules).',
              'Hépatocytes : **glycogénogenèse** après un repas, **glycogénolyse** entre les repas avec export du glucose dans le sang.',
              'Adipocytes : **lipogenèse** (stockage des triglycérides) après un repas, **lipolyse** (libération de glycérol et d’acides gras) à jeun ou à l’effort.',
              'Les myocytes stockent du glycogène mais ne libèrent pas de glucose dans le sang.',
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
        title: 'Observer la paroi intestinale à différentes échelles',
        duration: '30 min',
        skills: ['Observer', 'Calculer', 'Mettre en relation'],
        context: 'On cherche à comprendre pourquoi l’intestin grêle absorbe si efficacement les nutriments, en observant sa paroi du millimètre au micromètre.',
        documents: [
          { label: 'Document 1', title: 'Coupe d’intestin grêle au microscope optique', image: IMG.villositesMicro, caption: 'Coupe transversale colorée, faible grossissement.', credit: 'Jamilbaza — CC BY 4.0', size: 'small' },
          { label: 'Document 2', title: 'Schéma d’une villosité', image: IMG.villosite, caption: 'Coupe longitudinale d’une villosité.', size: 'small' },
          { label: 'Document 3', title: 'Mesures de la surface intestinale', source: 'D’après Helander et Fändriks, 2014', text: ['Longueur de l’intestin grêle chez le vivant : environ 2,9 m ; diamètre : environ 2,5 cm.', 'Les plis circulaires multiplient la surface par 1,6 environ, les villosités par 6,5 et les microvillosités par 13.'] },
        ],
        questions: [
          { text: 'Sur le document 1, quelles structures forment les « doigts » roses qui rayonnent vers le centre ? Où se trouve la lumière ?', answer: 'Ce sont les villosités intestinales, des replis de la muqueuse en doigt de gant. La lumière est l’espace clair au centre de la coupe, entre les villosités.' },
          { text: 'Calcule la surface intérieure d’un tube lisse de mêmes dimensions que l’intestin grêle, puis la surface réelle de la muqueuse.', hint: 'Surface latérale d’un cylindre = π × diamètre × longueur (en mètres).', answer: 'Tube lisse : 3,14 × 0,025 × 2,9 ≈ 0,23 m². Surface réelle : 0,23 × 1,6 × 6,5 × 13 ≈ 31 m², soit environ 130 fois plus.' },
          { text: 'Quel niveau d’organisation contribue le plus à l’augmentation de la surface ? À quelle échelle se situe-t-il ?', answer: 'Les microvillosités (facteur 13), qui sont des replis de la membrane plasmique des entérocytes, à l’échelle du micromètre : on ne les voit qu’au microscope électronique.' },
          { text: 'À l’aide du document 2, relève trois autres caractéristiques de la villosité qui facilitent l’absorption.', answer: 'L’épithélium est formé d’une seule couche de cellules (faible distance à parcourir) ; la villosité contient un réseau dense de capillaires sanguins, qui emportent les nutriments hydrosolubles ; elle contient un vaisseau chylifère, qui emporte les lipides.' },
          { text: 'Une maladie comme la maladie cœliaque (intolérance au gluten) provoque une atrophie des villosités, qui deviennent presque plates. Prévois ses conséquences.', answer: 'La surface d’échange diminue fortement, donc l’absorption des nutriments est réduite : amaigrissement, carences (fer, calcium, vitamines), diarrhées, retard de croissance chez l’enfant.' },
        ],
      },
      {
        title: 'Comment le glucose traverse-t-il l’entérocyte ?',
        duration: '35 min',
        skills: ['Exploiter des données', 'Raisonner', 'Schématiser'],
        context: 'Le glucose est absorbé même lorsqu’il est déjà plus concentré dans l’entérocyte que dans la lumière. On cherche à expliquer ce paradoxe.',
        documents: [
          { label: 'Document 4', title: 'Un entérocyte au travail', image: IMG.enterocyte, caption: 'Hexagones : glucose ; points : ions sodium et potassium.' },
          {
            label: 'Document 5',
            title: 'Concentrations mesurées en fin de digestion (valeurs indicatives)',
            blocks: [
              {
                type: 'table',
                head: ['Compartiment', 'Glucose (mmol/L)', 'Na^+^ (mmol/L)', 'Charge électrique'],
                rows: [
                  ['Lumière intestinale', '2', '140', 'Référence'],
                  ['Cytoplasme de l’entérocyte', '10', '12', 'Négative (environ −60 mV)'],
                  ['Liquide interstitiel et sang', '5', '140', 'Référence'],
                ],
              },
            ],
          },
          { label: 'Document 6', title: 'Expériences sur des fragments d’intestin isolés', text: ['Expérience 1 : sans ions Na^+^ dans la lumière, le glucose n’est plus absorbé.', 'Expérience 2 : la phlorizine, une molécule qui bloque le co-transporteur sodium-glucose de la membrane apicale, arrête l’absorption du glucose.', 'Expérience 3 : l’ouabaïne, une molécule qui bloque la pompe sodium-potassium, arrête l’absorption du glucose au bout de quelques minutes.'] },
        ],
        questions: [
          { text: 'D’après le document 5, le glucose entre-t-il dans l’entérocyte dans le sens ou contre le sens de son gradient de concentration ? Et quand il en sort par la membrane basale ?', answer: 'À l’entrée (membrane apicale), le glucose passe de 2 à 10 mmol/L : il va contre son gradient. À la sortie (membrane basale), il passe de 10 à 5 mmol/L : il va dans le sens de son gradient.' },
          { text: 'Déduis-en le type de transport à chaque membrane.', answer: 'Membrane apicale : transport actif (contre le gradient). Membrane basale : transport passif, par diffusion facilitée grâce à un transporteur (GLUT2).' },
          { text: 'Montre que l’ion Na^+^ a tendance à entrer dans l’entérocyte. Utilise la notion de gradient électrochimique.', answer: 'Na^+^ est beaucoup plus concentré dans la lumière (140 mmol/L) que dans le cytoplasme (12 mmol/L) : son gradient de concentration le pousse à entrer. De plus, l’intérieur de la cellule est chargé négativement et attire cet ion positif. Les deux gradients s’additionnent : le gradient électrochimique de Na^+^ est dirigé vers l’intérieur.' },
          { text: 'Exploite les expériences 1 et 2 : que révèlent-elles sur l’entrée du glucose ?', answer: 'L’entrée du glucose nécessite du sodium et une protéine que bloque la phlorizine : le glucose entre avec Na^+^, par un co-transporteur. L’énergie de l’entrée de Na^+^ (qui descend son gradient) est utilisée pour faire entrer le glucose contre son gradient : c’est un co-transport, transport actif secondaire.' },
          { text: 'Explique pourquoi l’ouabaïne arrête l’absorption du glucose, alors qu’elle n’agit pas sur le co-transporteur.', hint: 'Que devient la concentration de Na^+^ dans la cellule si la pompe s’arrête ?', answer: 'Sans pompe sodium-potassium, le Na^+^ entré avec le glucose n’est plus expulsé : sa concentration augmente dans l’entérocyte et son gradient disparaît peu à peu. Le co-transporteur n’a plus d’énergie pour faire entrer le glucose. La pompe, qui consomme de l’ATP, est donc indirectement indispensable.' },
          { text: 'Réalise un schéma fonctionnel de l’entérocyte montrant les trois protéines de transport, le sens des déplacements et le type de transport.', answer: 'Le schéma doit montrer : membrane apicale avec microvillosités et co-transporteur (2 Na^+^ + 1 glucose entrent, transport actif secondaire) ; jonctions serrées ; membrane basale avec le transporteur GLUT2 (sortie du glucose, diffusion facilitée) et la pompe Na^+^/K^+^ (3 Na^+^ sortent, 2 K^+^ entrent, ATP, transport actif primaire) ; capillaire sanguin recevant le glucose.' },
        ],
      },
      {
        title: 'Suivre le trajet des nutriments',
        duration: '25 min',
        skills: ['Exploiter des documents', 'Raisonner'],
        context: 'On compare le devenir du glucose et celui des lipides d’un repas, en mesurant notamment la glycémie dans deux veines du foie.',
        documents: [
          { label: 'Document 7', title: 'Les voies des nutriments', image: IMG.trajet, caption: 'Système porte hépatique et voie lymphatique.', size: 'small' },
          {
            label: 'Document 8',
            title: 'Glycémie mesurée dans deux veines (valeurs indicatives, simplifiées pour l’exercice)',
            blocks: [
              {
                type: 'table',
                head: ['Moment', 'Veine porte hépatique (entrée du foie)', 'Veines hépatiques (sortie du foie)'],
                rows: [
                  ['1 heure après un repas riche en amidon', '2,0 g/L', '1,3 g/L'],
                  ['Après une nuit de jeûne', '0,8 g/L', '1,0 g/L'],
                ],
              },
            ],
          },
          { label: 'Document 9', title: 'Observation après un repas gras', text: ['Chez un animal autopsié deux heures après un repas riche en graisses, les vaisseaux lymphatiques de l’intestin sont gonflés d’un liquide blanc laiteux : le chyle. Ils sont transparents chez un animal à jeun.'] },
        ],
        questions: [
          { text: 'Pourquoi la glycémie est-elle si élevée dans la veine porte hépatique après le repas ?', answer: 'La veine porte hépatique reçoit le sang des capillaires des villosités, chargé du glucose qui vient d’être absorbé.' },
          { text: 'Compare l’entrée et la sortie du foie après le repas, puis après le jeûne. Quel rôle du foie mets-tu en évidence ?', answer: 'Après le repas, le sang sort du foie moins riche en glucose qu’il n’y entre (1,3 contre 2,0 g/L) : le foie prélève et stocke du glucose (glycogénogenèse). Après le jeûne, le sang sort plus riche qu’il n’entre (1,0 contre 0,8 g/L) : le foie libère du glucose (glycogénolyse). Le foie tamponne donc les variations de la glycémie.' },
          { text: 'En quoi l’existence du système porte hépatique est-elle importante pour ce rôle ?', answer: 'Grâce au système porte, tout le sang venant de l’intestin passe par le foie avant d’atteindre la circulation générale : le foie peut stocker le glucose dès son arrivée et éviter une hausse trop forte de la glycémie dans le reste de l’organisme.' },
          { text: 'Interprète le document 9 : par quelle voie les lipides du repas sont-ils transportés ?', answer: 'Le liquide laiteux est le chyle, de la lymphe chargée de chylomicrons (triglycérides réassemblés dans les entérocytes). Les lipides passent donc par la voie lymphatique.' },
          { text: 'Décris le trajet d’une molécule de vitamine D (liposoluble) depuis la lumière intestinale jusqu’au cœur.', answer: 'Lumière intestinale → entérocyte (diffusion à travers la membrane, incorporation dans un chylomicron) → vaisseau chylifère de la villosité → vaisseaux lymphatiques → canal thoracique → veine sous-clavière gauche → veine cave supérieure → cœur.' },
        ],
      },
      {
        title: 'Stocker et libérer : hépatocytes et adipocytes',
        duration: '30 min',
        skills: ['Observer', 'Schématiser', 'Argumenter'],
        context: 'On observe au microscope deux tissus de réserve et on analyse l’évolution des réserves du foie au cours d’un jeûne.',
        documents: [
          { label: 'Document 10', title: 'Foie coloré au PAS (×400)', image: IMG.foie, caption: 'Le PAS colore le glycogène en magenta.' },
          { label: 'Document 11', title: 'Tissu adipeux (×200)', image: IMG.adipocytes, caption: 'Coloration hématoxyline-éosine.' },
          { label: 'Document 12', title: 'Glycogène du foie (valeurs moyennes)', text: ['Après un repas riche en glucides : environ 5 à 6 g de glycogène pour 100 g de foie.', 'Après 24 heures de jeûne : moins de 1 g pour 100 g de foie.'] },
        ],
        questions: [
          { text: 'Dans le document 10, où le glycogène est-il localisé ? Comment s’appelle la réaction qui l’a produit ?', answer: 'Le glycogène forme des granules magenta dans le cytoplasme des hépatocytes. Il a été produit à partir du glucose par glycogénogenèse, une réaction d’anabolisme.' },
          { text: 'Explique l’évolution du glycogène du foie au cours du jeûne (document 12) et son intérêt pour l’organisme.', answer: 'Pendant le jeûne, le glycogène est hydrolysé en glucose (glycogénolyse) et le glucose est exporté dans le sang : les réserves fondent. Cela maintient la glycémie et approvisionne les cellules, notamment le cerveau, qui consomme du glucose en permanence.' },
          { text: 'Pourquoi les adipocytes du document 11 paraissent-ils vides ? Que contenaient-ils ?', answer: 'Ils contenaient une grosse gouttelette de triglycérides, dissoute par les solvants utilisés pour préparer la coupe : il ne reste que le liseré de cytoplasme et le noyau aplati.' },
          { text: 'Lors d’un marathon, les coureurs ressentent parfois un brusque épuisement vers le 30^e^ kilomètre (« le mur »). Propose une explication en utilisant les mots glycogène, glycogénolyse et lipolyse.', answer: 'Au début de l’effort, les muscles utilisent surtout le glucose issu de la glycogénolyse de leur glycogène et du glycogène du foie. Vers le 30^e^ kilomètre, ces réserves sont presque épuisées : les muscles dépendent alors surtout des acides gras libérés par la lipolyse des adipocytes, une source d’énergie abondante mais mobilisée plus lentement. L’intensité de l’effort doit diminuer.' },
          { text: 'Construis un schéma bilan montrant, pour le foie et le tissu adipeux, ce qui se passe après un repas et pendant un jeûne.', answer: 'Après un repas : sang riche en glucose → foie (glucose → glycogène, glycogénogenèse ; glucose en excès → triglycérides, lipogenèse) et tissu adipeux (glucose et acides gras → triglycérides, lipogenèse). Pendant un jeûne : foie (glycogène → glucose libéré dans le sang, glycogénolyse) et tissu adipeux (triglycérides → glycérol + acides gras libérés dans le sang, lipolyse).' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'L’absorption des nutriments se fait dans l’intestin grêle, dont les plis, les villosités et les microvillosités portent la surface d’échange à environ 30 m².',
      'L’entérocyte est une cellule polarisée : membrane apicale et membrane basale portent des protéines de transport différentes ; les jonctions serrées rendent l’épithélium étanche.',
      'Transport passif (diffusion simple, diffusion facilitée) : dans le sens du gradient, sans énergie. Transport actif : contre le gradient, avec énergie (pompe à ATP, co-transport).',
      'Le glucose entre par co-transport avec Na^+^ (actif secondaire), grâce au gradient électrochimique entretenu par la pompe Na^+^/K^+^, et sort par diffusion facilitée.',
      'Les nutriments hydrosolubles (et les acides gras à chaîne courte) rejoignent le sang et le foie par le système porte hépatique ; les lipides en chylomicrons passent par la lymphe.',
      'Après un repas, le foie et les muscles stockent le glucose en glycogène et les adipocytes stockent des triglycérides (anabolisme) ; à jeun, glycogénolyse et lipolyse libèrent glucose et acides gras (catabolisme).',
    ],
    method: {
      title: 'Identifier un mode de transport membranaire',
      steps: [
        'Repérer de quel côté la substance est la plus concentrée et dans quel sens elle se déplace.',
        'Si elle va dans le sens de son gradient : transport passif. Petite molécule hydrophobe → diffusion simple ; molécule polaire ou ion → diffusion facilitée par un canal ou un transporteur.',
        'Si elle va contre son gradient : transport actif. Utilise-t-elle l’ATP (pompe, actif primaire) ou le gradient d’un autre ion (co-transport, actif secondaire) ?',
        'Pour un ion, raisonner sur le gradient électrochimique (concentration et charge).',
        'Vérifier avec les expériences d’inhibition (inhibiteur de pompe, de transporteur, absence d’un ion).',
      ],
    },
    vocabulary: [
      { term: 'Absorption', definition: 'Passage des nutriments de la lumière intestinale vers le milieu intérieur.' },
      { term: 'Villosité', definition: 'Saillie en doigt de gant de la muqueuse de l’intestin grêle, riche en capillaires.' },
      { term: 'Microvillosités', definition: 'Replis de la membrane apicale des entérocytes formant la bordure en brosse.' },
      { term: 'Cellule polarisée', definition: 'Cellule dont les pôles apical et basal ont des structures et des fonctions différentes.' },
      { term: 'Perméabilité membranaire', definition: 'Aptitude d’une membrane à se laisser traverser par une substance.' },
      { term: 'Diffusion', definition: 'Déplacement spontané d’une substance dans le sens de son gradient de concentration.' },
      { term: 'Transporteur', definition: 'Protéine membranaire spécifique et saturable qui fait traverser une substance.' },
      { term: 'Transport actif', definition: 'Transport contre le gradient, qui consomme de l’énergie.' },
      { term: 'Gradient électrochimique', definition: 'Force due aux différences de concentration et de charge qui pousse un ion à traverser une membrane.' },
      { term: 'Co-transport', definition: 'Transport couplé de deux substances par une même protéine, l’une descendant son gradient, l’autre le remontant.' },
      { term: 'Système porte', definition: 'Veine reliant deux réseaux de capillaires, comme la veine porte hépatique entre intestin et foie.' },
      { term: 'Chylomicron', definition: 'Particule de triglycérides et de protéines formée dans l’entérocyte et transportée par la lymphe.' },
      { term: 'Glycogénogenèse', definition: 'Synthèse de glycogène à partir de glucose.' },
      { term: 'Glycogénolyse', definition: 'Hydrolyse du glycogène en glucose.' },
      { term: 'Lipolyse', definition: 'Hydrolyse des triglycérides de réserve en glycérol et acides gras ; s’oppose à la lipogenèse.' },
    ],
    mistakes: [
      { wrong: 'Dire que le glucose entre dans l’entérocyte par diffusion simple.', right: 'Le glucose, polaire, ne traverse pas la bicouche : il entre par co-transport avec Na^+^ et sort par un transporteur.' },
      { wrong: 'Dire que le co-transporteur utilise directement l’ATP.', right: 'C’est la pompe Na^+^/K^+^ qui utilise l’ATP ; le co-transporteur utilise l’énergie du gradient de Na^+^ (transport actif secondaire).' },
      { wrong: 'Confondre membrane basale et « bas de la villosité ».', right: 'La membrane basale est la membrane de l’entérocyte tournée vers le chorion, quel que soit l’endroit de la villosité.' },
      { wrong: 'Penser que tous les nutriments passent par le foie juste après l’absorption.', right: 'Les lipides en chylomicrons empruntent la lymphe et rejoignent le sang sans passer d’abord par le foie.' },
      { wrong: 'Confondre glycogénogenèse et glycogénolyse.', right: 'Genèse = fabrication (glucose → glycogène) ; lyse = coupure (glycogène → glucose).' },
      { wrong: 'Croire que les muscles libèrent leur glucose dans le sang.', right: 'Seul le foie (et un peu le rein) exporte du glucose ; le glycogène musculaire est utilisé sur place.' },
    ],
    quiz: [
      { question: 'Quelle structure augmente le plus la surface de l’intestin grêle ?', choices: ['Les plis circulaires', 'Les villosités', 'Les microvillosités', 'La séreuse'], answer: 2, explanation: 'Les microvillosités multiplient la surface par environ 13, les villosités par 6,5 et les plis par 1,6.' },
      { question: 'La membrane apicale de l’entérocyte est tournée vers :', choices: ['Le capillaire sanguin', 'La lumière intestinale', 'Le vaisseau chylifère', 'La cellule voisine'], answer: 1, explanation: 'Le pôle apical, qui porte les microvillosités, est au contact de la lumière.' },
      { question: 'Un transport qui se fait contre le gradient de concentration est :', choices: ['Une diffusion simple', 'Une diffusion facilitée', 'Un transport actif', 'Une osmose'], answer: 2, explanation: 'Aller contre le gradient nécessite de l’énergie : c’est un transport actif.' },
      { question: 'Le glucose sort de l’entérocyte par la membrane basale grâce à :', choices: ['Une pompe à ATP', 'Une diffusion facilitée par un transporteur', 'Une diffusion simple à travers la bicouche', 'Une exocytose'], answer: 1, explanation: 'Plus concentré dans la cellule, il sort dans le sens de son gradient par le transporteur GLUT2.' },
      { question: 'La pompe Na^+^/K^+^ :', choices: ['Fait entrer 3 Na^+^ et sortir 2 K^+^', 'Fait sortir 3 Na^+^ et entrer 2 K^+^ en consommant de l’ATP', 'Fait entrer le glucose', 'Fonctionne sans énergie'], answer: 1, explanation: 'Elle maintient une concentration de Na^+^ basse dans la cellule, ce qui crée le gradient utilisé par le co-transporteur.' },
      { question: 'Les acides gras à chaîne courte rejoignent :', choices: ['La lymphe dans des chylomicrons', 'Le sang de la veine porte hépatique', 'Le canal thoracique', 'Les selles uniquement'], answer: 1, explanation: 'Petits et assez solubles, ils passent par diffusion dans les capillaires sanguins.' },
      { question: 'La veine porte hépatique relie :', choices: ['Le foie au cœur', 'Les capillaires de l’intestin aux capillaires du foie', 'L’intestin au canal thoracique', 'Le cœur aux poumons'], answer: 1, explanation: 'C’est la définition d’un système porte : une veine entre deux réseaux de capillaires.' },
      { question: 'La lipolyse est :', choices: ['La synthèse de triglycérides', 'L’hydrolyse des triglycérides en glycérol et acides gras', 'La synthèse de glycogène', 'L’absorption des lipides'], answer: 1, explanation: 'C’est une voie de catabolisme, activée à jeun et à l’effort.' },
      { question: 'Après un repas riche en glucides, le foie réalise surtout :', choices: ['La glycogénolyse', 'La lipolyse', 'La glycogénogenèse', 'La digestion de l’amidon'], answer: 2, explanation: 'Le glucose abondant est stocké sous forme de glycogène.' },
    ],
    exercises: [
      {
        title: 'Calcul et interprétation',
        statement: 'Un entérocyte possède environ 3 000 microvillosités, chacune assimilable à un cylindre de 1 µm de hauteur et de 0,1 µm de diamètre. a) Calcule la surface latérale d’une microvillosité (π × diamètre × hauteur). b) Calcule la surface apportée par l’ensemble des microvillosités. c) Compare à la surface du pôle apical s’il était plat, assimilé à un carré de 10 µm de côté.',
        answer: ['a) 3,14 × 0,1 × 1 ≈ 0,31 µm².', 'b) 3 000 × 0,31 ≈ 940 µm².', 'c) Pôle plat : 10 × 10 = 100 µm². Les microvillosités multiplient la surface d’échange de la membrane apicale par environ 9 à 10 : l’absorption est d’autant plus efficace.'],
      },
      {
        title: 'Un médicament contre le diabète',
        statement: 'Certains médicaments du diabète bloquent les co-transporteurs sodium-glucose. a) Rappelle le rôle de ces co-transporteurs dans l’intestin. b) Explique pourquoi l’absorption du glucose diminue en présence d’un inhibiteur, alors que les transporteurs de la membrane basale fonctionnent normalement. c) Quel est l’intérêt pour un patient diabétique ?',
        answer: ['a) Ils font entrer le glucose dans l’entérocyte, contre son gradient, en utilisant l’énergie de l’entrée de Na^+^ (transport actif secondaire).', 'b) Le glucose ne peut plus entrer par la membrane apicale : il n’arrive donc plus dans l’entérocyte et ne peut pas en sortir par la membrane basale. La première étape de l’absorption est bloquée.', 'c) Moins de glucose passe dans le sang, ce qui limite l’hyperglycémie (le même type de co-transporteur existe aussi dans le rein, chapitre 1.4).'],
      },
      {
        title: 'Le trajet d’un acide aminé',
        statement: 'Décris le trajet d’un acide aminé issu de la digestion d’une protéine, depuis la lumière intestinale jusqu’à une cellule musculaire de la jambe, en nommant les membranes, les vaisseaux et les organes traversés.',
        answer: 'Lumière intestinale → membrane apicale de l’entérocyte (co-transport avec Na^+^) → cytoplasme → membrane basale (transporteur) → liquide interstitiel du chorion → capillaire sanguin de la villosité → veines de l’intestin → veine porte hépatique → capillaires du foie → veines hépatiques → veine cave inférieure → cœur droit → poumons → cœur gauche → aorte → artères de la jambe → capillaires du muscle → liquide interstitiel → cellule musculaire.',
      },
    ],
    selfCheck: [
      'Je sais décrire la paroi de l’intestin grêle à toutes les échelles et calculer l’augmentation de la surface d’échange.',
      'Je sais expliquer ce qu’est une cellule polarisée et le rôle des jonctions serrées.',
      'Je sais distinguer diffusion simple, diffusion facilitée, transport actif primaire et co-transport.',
      'Je sais expliquer, schéma à l’appui, l’absorption du glucose par l’entérocyte.',
      'Je sais relier la nature d’un nutriment à sa voie de circulation (système porte hépatique ou lymphe).',
      'Je sais schématiser le stockage et la libération du glucose et des lipides par les hépatocytes et les adipocytes.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Helander H. F., Fändriks L. (2014), Surface area of the digestive tract – revisited — PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/24694282/' },
      { title: 'Villosité intestinale — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Villosit%C3%A9_intestinale' },
      { title: 'Veine porte hépatique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Veine_porte_h%C3%A9patique' },
      { title: 'Glycogène — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Glycog%C3%A8ne' },
      { title: 'Intestinal villi through microscope (image) — Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Intestinal_villi_through_microscope.jpg' },
    ],
  },
};

export default lesson;
