import { img } from '../media';
import ovocyteMicro from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/ovocyte-micro.webp';
import caryotypes from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/caryotypes-fecondation.webp';
import mitose from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/mitose.webp';
import meiose from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/meiose.webp';
import spermatozoide from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/spermatozoide.webp';
import gametogenese from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/gametogenese-comparee.webp';
import trajet from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/trajet-gametes.webp';
import fecondation from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/fecondation.webp';
import trisomie from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/caryotype-trisomie21.webp';
import arbreMito from '../../../assets/courses/premiere/bb2-4-gametogenese-fecondation/arbre-mitochondrial.webp';
import tubeSeminifere from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/tube-seminifere.webp';
import testiculeCoupe from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/testicule-coupe.webp';

const IMG = {
  ovocyte: img(ovocyteMicro, 'Microphotographie d’un ovocyte humain entouré de sa zone pellucide translucide, avec un petit globule polaire sous la zone, quelques cellules folliculaires et plusieurs spermatozoïdes accrochés à la surface.', 'micro', 1254, 1254),
  caryotypes: img(caryotypes, 'Garnitures chromosomiques schématiques : spermatozoïde à 23 chromosomes gris dont un Y, ovocyte à 23 chromosomes verts dont un X, et cellule-œuf à 46 chromosomes formant 23 paires, chaque paire associant un chromosome gris et un vert.', 'schema', 1400, 943),
  mitose: img(mitose, 'Schéma des étapes de la mitose d’une cellule à 2n = 4 chromosomes : prophase, métaphase, anaphase avec séparation des chromatides sœurs, télophase, puis deux cellules filles identiques.', 'schema', 1400, 446),
  meiose: img(meiose, 'Schéma des étapes de la méiose d’une cellule à 2n = 4 chromosomes : appariement des homologues, métaphase I, séparation des homologues, deux cellules haploïdes, métaphase II, séparation des chromatides et quatre cellules haploïdes.', 'schema', 1400, 1036),
  spermatozoide: img(spermatozoide, 'Schéma d’un spermatozoïde en coupe longitudinale : tête avec acrosome et noyau, centriole, pièce intermédiaire avec mitochondries en hélice, long flagelle, membrane plasmique.', 'schema', 1400, 501),
  gametogenese: img(gametogenese, 'Schéma comparant spermatogenèse et ovogenèse : multiplication, accroissement, méiose I, méiose II et différenciation ; un spermatocyte I donne quatre spermatozoïdes, un ovocyte I donne un seul gamète et des globules polaires.', 'schema', 1400, 1064),
  trajet: img(trajet, 'Schéma numéroté de l’appareil génital féminin : ovulation, capture de l’ovocyte par le pavillon, fécondation dans la trompe, premières divisions de l’embryon, blastocyste dans l’utérus et nidation dans l’endomètre.', 'schema', 1400, 933),
  fecondation: img(fecondation, 'Schéma de la fécondation : ovocyte II entouré de cellules folliculaires et de la zone pellucide, avec granules corticaux, chromosomes en métaphase II, premier globule polaire et spermatozoïdes ; puis cellule-œuf avec pronucléus mâle et femelle et deux globules polaires.', 'schema', 1400, 933),
  trisomie: img(trisomie, 'Caryotype schématique d’un garçon porteur de trisomie 21 : 22 paires d’autosomes dont la paire 21 comporte trois chromosomes, encadrée en vert, et les chromosomes X et Y.', 'schema', 1400, 840),
  arbreMito: img(arbreMito, 'Arbre généalogique sur trois générations : les enfants des femmes porteuses de la mutation mitochondriale sont tous porteurs, alors que les enfants des hommes porteurs ne le sont jamais.', 'schema', 1300, 760),
  tube: img(tubeSeminifere, 'Schéma d’un secteur de tube séminifère : spermatogonies, spermatocytes I et II, spermatides et spermatozoïdes de la périphérie vers la lumière, cellules de Sertoli et cellules de Leydig.', 'schema', 1400, 933),
  testicule: img(testiculeCoupe, 'Coupe histologique de testicule : tubes séminifères avec leurs couches de cellules germinales et spermatozoïdes dans la lumière, tissu interstitiel avec cellules de Leydig.', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bb2-4-gametogenese-fecondation',
  duration: 'Environ 4 séances (cours, observations microscopiques, analyse de caryotypes et de documents)',
  hook: {
    image: IMG.ovocyte,
    question: 'Comment deux cellules à 23 chromosomes donnent-elles un être humain dont chaque cellule en possède 46 ?',
    text: 'Cet ovocyte, l’une des plus grandes cellules humaines, est entouré de spermatozoïdes, mais un seul pourra le féconder. Pour que la cellule-œuf possède exactement 46 chromosomes, les gamètes doivent en avoir 23 : c’est le rôle de la méiose. Dans ce chapitre, tu suis la formation des gamètes, puis la fécondation, et tu découvres ce qui se passe quand la répartition des chromosomes se dérègle.',
  },
  objectives: [
    'Distinguer chromosome à une ou deux chromatides, chromosomes homologues, cellule diploïde et cellule haploïde ; lire un caryotype.',
    'Comparer mitose et méiose, et expliquer comment la méiose produit des cellules haploïdes.',
    'Identifier chaque stade de la spermatogenèse et de l’ovogenèse, et comparer leur chronologie.',
    'Décrire la chronologie de la fécondation, de l’ovulation à la formation de la cellule-œuf.',
    'Montrer les conséquences chromosomiques de la fécondation : additivité des génomes nucléaires, transmission maternelle du génome mitochondrial, anomalies du nombre de chromosomes.',
  ],
  prerequisites: [
    'Les cellules humaines possèdent 46 chromosomes et les gamètes 23 (collège, seconde).',
    'Gène, allèle et chromosomes homologues (leçon 2.1).',
    'Testicule, ovaire et follicules ; régulation hormonale et ovulation (leçons 2.2 et 2.3).',
  ],
  program: [
    'Expliquer à partir d’un support le mécanisme de production de gamètes haploïdes (division équationnelle et réductionnelle, phases d’une mitose, méiose, chromosomes homologues, chromatides, division asymétrique).',
    'Identifier chaque stade de différenciation cellulaire de la formation des gamètes (spermatogenèse, spermatozoïde, ovogenèse, ovocyte).',
    'Décrire la chronologie du processus de fécondation (ovulation, ovocyte II, métaphase II, fécondation, génome nucléaire).',
    'Montrer les conséquences chromosomiques de la fécondation (diploïde et haploïde, additivité des génomes nucléaires, génome mitochondrial).',
  ],

  course: {
    parts: [
      {
        title: 'Chromosomes, caryotype et mitose',
        intro: 'Pour comprendre la formation des gamètes, il faut d’abord savoir compter les chromosomes… et les chromatides.',
        blocks: [
          { type: 'p', text: 'Un **chromosome** est formé d’une molécule d’ADN associée à des protéines. Avant chaque division, pendant l’interphase, l’ADN est **répliqué** (copié) : le chromosome passe alors d’**une chromatide** à **deux chromatides** identiques, appelées chromatides sœurs, reliées au niveau du **centromère**. C’est sous cette forme, très condensée, qu’on l’observe pendant la division.' },
          { type: 'definition', term: 'Caryotype', text: 'représentation ordonnée des chromosomes d’une cellule, photographiés pendant une division et classés par paires selon leur taille, la position du centromère et leurs bandes. L’espèce humaine possède **22 paires d’autosomes** et **une paire de chromosomes sexuels** ou **gonosomes** : XX chez la femme, XY chez l’homme. On écrit la formule chromosomique 46,XX ou 46,XY.' },
          { type: 'definition', term: 'Cellule diploïde (2n)', text: 'cellule dont les chromosomes vont **par paires** de chromosomes homologues. Chez l’être humain, 2n = 46. C’est le cas de toutes les cellules du corps (cellules somatiques).' },
          { type: 'definition', term: 'Cellule haploïde (n)', text: 'cellule qui ne possède qu’**un seul chromosome de chaque paire**. Chez l’être humain, n = 23. C’est le cas des **gamètes**.' },
          { type: 'figure', image: IMG.caryotypes, caption: 'Garnitures chromosomiques schématiques (chromosomes représentés à une chromatide) : chaque gamète est haploïde (n = 23) ; la cellule-œuf, diploïde (2n = 46), possède une paire de chaque chromosome, un chromosome de chaque paire venant de chaque parent.', size: 'wide' },
          { type: 'definition', term: 'Mitose', text: 'division d’une cellule en **deux cellules filles génétiquement identiques** entre elles et à la cellule mère. Elle conserve le nombre de chromosomes (2n → 2n) : c’est une **division équationnelle**. Elle permet la croissance et le renouvellement des tissus.' },
          { type: 'figure', image: IMG.mitose, caption: 'Les phases de la mitose (cellule à 2n = 4). Les chromatides sœurs de chaque chromosome se séparent à l’anaphase : chaque cellule fille reçoit un exemplaire de chaque chromosome.', size: 'wide' },
          {
            type: 'table',
            caption: 'Les phases de la mitose',
            head: ['Phase', 'Ce qui se passe'],
            rows: [
              ['Prophase', 'Les chromosomes, à deux chromatides, se condensent et deviennent visibles ; l’enveloppe du noyau disparaît ; le fuseau se forme.'],
              ['Métaphase', 'Les chromosomes s’alignent sur le **plan équatorial** de la cellule.'],
              ['Anaphase', 'Les deux **chromatides sœurs** de chaque chromosome se séparent et migrent vers les pôles opposés.'],
              ['Télophase', 'Un noyau se reforme à chaque pôle ; la cellule se divise en deux cellules filles à chromosomes à une chromatide.'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Un chromosome possède **une** chromatide, ou **deux** chromatides sœurs identiques après la réplication de l’ADN.',
              'Cellule **diploïde** : chromosomes par paires (2n = 46) ; cellule **haploïde** : un chromosome de chaque paire (n = 23).',
              'Le **caryotype** humain compte 22 paires d’autosomes et une paire de gonosomes (XX ou XY).',
              'La **mitose**, division équationnelle, donne deux cellules identiques à la cellule mère.',
            ],
          },
        ],
      },

      {
        title: 'La méiose : deux divisions pour former des cellules haploïdes',
        intro: 'Si les gamètes avaient 46 chromosomes, la cellule-œuf en aurait 92. La méiose divise par deux le nombre de chromosomes.',
        blocks: [
          { type: 'definition', term: 'Méiose', text: 'succession de **deux divisions** cellulaires, précédées d’une seule réplication de l’ADN, qui transforme une cellule diploïde (2n) en **quatre cellules haploïdes** (n). Elle a lieu uniquement dans les gonades, lors de la formation des gamètes.' },
          { type: 'figure', image: IMG.meiose, caption: 'Les étapes de la méiose (cellule à 2n = 4, chromosomes d’origine paternelle en gris, d’origine maternelle en vert ; les échanges entre chromosomes homologues ne sont pas représentés ici).', size: 'wide' },
          {
            type: 'steps',
            title: 'Méiose I : la division réductionnelle',
            items: [
              { title: 'Prophase I', text: 'Les chromosomes, à deux chromatides, se condensent. Les **chromosomes homologues s’apparient** deux à deux, sur toute leur longueur.' },
              { title: 'Métaphase I', text: 'Les **paires** de chromosomes homologues se placent sur le plan équatorial, un homologue de chaque côté.' },
              { title: 'Anaphase I', text: 'Les **chromosomes homologues se séparent** : chacun, toujours à deux chromatides, migre vers un pôle.' },
              { title: 'Télophase I', text: 'On obtient **deux cellules haploïdes** (n), dont les chromosomes ont encore deux chromatides.' },
            ],
          },
          {
            type: 'steps',
            title: 'Méiose II : la division équationnelle',
            items: [
              { title: 'Prophase II et métaphase II', text: 'Sans nouvelle réplication, les chromosomes de chaque cellule s’alignent sur le plan équatorial.' },
              { title: 'Anaphase II', text: 'Les **chromatides sœurs se séparent**, comme dans une mitose.' },
              { title: 'Télophase II', text: 'On obtient **quatre cellules haploïdes** (n), dont les chromosomes n’ont plus qu’une chromatide.' },
            ],
          },
          {
            type: 'table',
            caption: 'Mitose et méiose comparées',
            head: ['Critère', 'Mitose', 'Méiose'],
            rows: [
              ['Où ?', 'Dans toutes les cellules qui se divisent', 'Seulement dans les gonades'],
              ['Nombre de divisions', 'Une', 'Deux (méiose I et méiose II)'],
              ['Appariement des homologues', 'Non', 'Oui, en prophase I'],
              ['Ce qui se sépare', 'Les chromatides sœurs', 'Les homologues (anaphase I), puis les chromatides sœurs (anaphase II)'],
              ['Résultat', '2 cellules diploïdes identiques', '4 cellules haploïdes, génétiquement différentes'],
              ['Rôle', 'Croissance, renouvellement des tissus', 'Formation des gamètes'],
            ],
          },
          {
            type: 'table',
            caption: 'Nombre de chromosomes et quantité d’ADN au cours de la méiose (cellule humaine)',
            head: ['Étape', 'Chromosomes par cellule', 'Chromatides par chromosome', 'Quantité d’ADN par cellule'],
            rows: [
              ['Avant la réplication', '46 (2n)', '1', 'Q (environ 6,6 pg)'],
              ['Après la réplication (début de méiose I)', '46 (2n)', '2', '2Q'],
              ['Après la méiose I', '23 (n)', '2', 'Q'],
              ['Après la méiose II (gamète)', '23 (n)', '1', 'Q/2'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'La **méiose** comprend deux divisions précédées d’une seule réplication : une cellule 2n donne **quatre cellules n**.',
              'Méiose I, **réductionnelle** : appariement puis **séparation des chromosomes homologues** (2n → n).',
              'Méiose II, **équationnelle** : **séparation des chromatides sœurs** (n → n).',
            ],
          },
        ],
      },

      {
        title: 'La spermatogenèse : des millions de spermatozoïdes chaque jour',
        intro: 'Dans les tubes séminifères, les cellules germinales se transforment en spermatozoïdes, de la paroi vers la lumière.',
        blocks: [
          { type: 'definition', term: 'Spermatogenèse', text: 'ensemble des étapes qui, dans les tubes séminifères, transforment une **spermatogonie** (2n) en **spermatozoïdes** (n). Elle dure environ 74 jours (deux mois et demi) et se déroule **en continu** de la puberté à la fin de la vie.' },
          { type: 'figure', image: IMG.tube, caption: 'Les stades de la spermatogenèse dans la paroi d’un tube séminifère, de la périphérie (spermatogonies) vers la lumière (spermatozoïdes).', size: 'wide' },
          {
            type: 'table',
            caption: 'Les stades de la spermatogenèse',
            head: ['Étape', 'Cellules', 'Garniture chromosomique', 'Événement'],
            rows: [
              ['Multiplication', 'Spermatogonies, contre la paroi du tube', '2n', 'Mitoses : certaines spermatogonies restent en réserve, d’autres s’engagent vers la méiose.'],
              ['Accroissement', 'Spermatocytes I, grosses cellules', '2n (chromosomes à 2 chromatides)', 'Croissance de la cellule et réplication de l’ADN.'],
              ['Méiose I', 'Spermatocytes II', 'n (2 chromatides)', 'Chaque spermatocyte I donne deux spermatocytes II.'],
              ['Méiose II', 'Spermatides, petites cellules rondes près de la lumière', 'n (1 chromatide)', 'Chaque spermatocyte II donne deux spermatides.'],
              ['Différenciation (spermiogenèse)', 'Spermatozoïdes', 'n', 'Le noyau se condense, l’acrosome et le flagelle se forment, la plus grande partie du cytoplasme est éliminée.'],
            ],
          },
          { type: 'p', text: 'Un spermatocyte I produit donc **quatre spermatozoïdes**. Les cellules de Sertoli soutiennent et nourrissent les cellules germinales tout au long de leur différenciation.' },
          { type: 'figure', image: IMG.spermatozoide, caption: 'Le spermatozoïde, une cellule spécialisée pour le déplacement et la fécondation (longueur totale : environ 60 µm ; tête : environ 5 µm).', size: 'wide' },
          {
            type: 'table',
            caption: 'Structure et fonction du spermatozoïde',
            head: ['Partie', 'Contenu', 'Fonction'],
            rows: [
              ['Tête', '**Noyau** haploïde très condensé, recouvert par l’**acrosome**, une vésicule remplie d’enzymes', 'Apporter le génome paternel ; les enzymes de l’acrosome permettent de traverser la zone pellucide.'],
              ['Pièce intermédiaire', 'Nombreuses **mitochondries** enroulées en hélice', 'Produire l’énergie (ATP) nécessaire aux battements du flagelle.'],
              ['Flagelle', 'Filaments protéiques', 'Assurer la mobilité.'],
            ],
          },
          { type: 'note', title: 'Ce que montre la microscopie électronique', text: 'Sur une électronographie de spermatozoïde, on distingue le noyau très dense, l’acrosome en forme de capuchon, les mitochondries serrées autour de la base du flagelle et le centriole. En revanche, le cytoplasme est presque absent : on n’y trouve ni réserves, ni réticulum abondant.' },
          {
            type: 'retenir',
            items: [
              'Spermatogenèse : spermatogonie (2n) → spermatocyte I (2n) → **méiose I** → spermatocytes II (n) → **méiose II** → spermatides (n) → **spermiogenèse** → spermatozoïdes (n).',
              'Un spermatocyte I donne **quatre spermatozoïdes** ; la production est continue de la puberté à la fin de la vie.',
              'Le spermatozoïde comprend une tête (noyau haploïde, acrosome), une pièce intermédiaire (mitochondries) et un flagelle.',
            ],
          },
        ],
      },

      {
        title: 'L’ovogenèse : une méiose qui dure des décennies',
        intro: 'Chez la femme, la méiose commence avant la naissance et ne s’achève qu’au moment de la fécondation.',
        blocks: [
          { type: 'definition', term: 'Ovogenèse', text: 'ensemble des étapes qui transforment une **ovogonie** (2n) en un gamète femelle (n). Elle commence chez le fœtus et se poursuit, à chaque cycle, de la puberté à la ménopause.' },
          {
            type: 'steps',
            title: 'La chronologie de l’ovogenèse',
            items: [
              { title: 'Avant la naissance', text: 'Les **ovogonies** se multiplient par mitoses, puis se transforment en **ovocytes I** (2n), qui commencent la méiose et s’arrêtent en **prophase I**. Chacun est entouré de cellules aplaties : c’est un follicule primordial.' },
              { title: 'De la naissance à la puberté', text: 'Les ovocytes I restent **bloqués en prophase I**, parfois pendant plus de 40 ans.' },
              { title: 'À chaque cycle, juste avant l’ovulation', text: 'Dans le follicule dominant, sous l’effet du pic de LH, l’ovocyte I achève la **méiose I** par une **division inégale** : il donne un gros **ovocyte II** (n), qui garde presque tout le cytoplasme, et un minuscule **premier globule polaire**.' },
              { title: 'Ovulation', text: 'L’ovocyte II commence la méiose II et **s’arrête en métaphase II**. C’est dans cet état qu’il est libéré à l’ovulation.' },
              { title: 'Seulement en cas de fécondation', text: 'L’entrée du spermatozoïde déclenche la fin de la **méiose II**, avec l’expulsion d’un **deuxième globule polaire**. Sans fécondation, l’ovocyte II dégénère en 12 à 24 heures.' },
            ],
          },
          { type: 'definition', term: 'Division asymétrique', text: 'division qui produit deux cellules de tailles très différentes. Lors de l’ovogenèse, les deux divisions de la méiose sont asymétriques : l’ovocyte conserve les réserves de cytoplasme utiles aux premiers jours de l’embryon, tandis que les **globules polaires**, qui ne reçoivent qu’un noyau et très peu de cytoplasme, dégénèrent.' },
          { type: 'figure', image: IMG.gametogenese, caption: 'Spermatogenèse et ovogenèse comparées : mêmes grandes étapes, mais chronologie et résultats très différents.', size: 'wide' },
          {
            type: 'table',
            caption: 'Spermatogenèse et ovogenèse comparées',
            head: ['Critère', 'Spermatogenèse', 'Ovogenèse'],
            rows: [
              ['Début', 'À la puberté', 'Avant la naissance'],
              ['Déroulement', 'Continu, environ 74 jours par cycle de production', 'Bloquée en prophase I jusqu’à la puberté, puis reprise d’un ovocyte à chaque cycle'],
              ['Divisions de la méiose', 'Symétriques', 'Asymétriques (globules polaires)'],
              ['Fin de la méiose', 'Avant la libération des gamètes', 'Seulement si fécondation (ovocyte II bloqué en métaphase II)'],
              ['Résultat d’une cellule entrée en méiose', '4 spermatozoïdes', '1 seul gamète et des globules polaires'],
              ['Gamète', 'Petit (60 µm de long), mobile, sans réserves', 'Très gros (environ 120 µm de diamètre), immobile, riche en réserves'],
            ],
          },
          { type: 'p', text: 'L’**ovocyte II** libéré à l’ovulation mesure environ 0,12 mm : c’est l’une des plus grandes cellules du corps humain, à la limite de ce que l’œil nu peut distinguer. Il est entouré d’une épaisse couche de glycoprotéines, la **zone pellucide**, et de cellules folliculaires qui forment la **corona radiata**. Sous sa membrane se trouvent de nombreux **granules corticaux**.' },
          {
            type: 'retenir',
            items: [
              'Ovogenèse : ovogonie (2n) → ovocyte I (2n), **bloqué en prophase I** jusqu’à la puberté → **méiose I** juste avant l’ovulation → ovocyte II (n) + 1er globule polaire.',
              'L’ovocyte II est libéré **bloqué en métaphase II** ; la méiose II ne s’achève qu’en cas de fécondation (2e globule polaire).',
              'Les divisions sont **asymétriques** : un ovocyte I ne donne qu’un seul gamète, riche en réserves.',
            ],
          },
        ],
      },

      {
        title: 'La fécondation : chronologie d’une rencontre',
        intro: 'La fécondation est l’union d’un spermatozoïde et d’un ovocyte II ; elle se déroule dans la trompe utérine.',
        blocks: [
          { type: 'figure', image: IMG.trajet, caption: 'Le trajet des gamètes et de l’embryon : 1. ovulation ; 2. capture de l’ovocyte par le pavillon ; 3. fécondation dans le tiers externe de la trompe ; 4. premières divisions de la cellule-œuf pendant sa descente ; 5. blastocyste dans l’utérus ; 6. nidation dans l’endomètre, environ une semaine après la fécondation.', size: 'wide' },
          { type: 'p', text: 'Après l’ovulation, l’ovocyte II n’est fécondable que pendant **12 à 24 heures**. Les spermatozoïdes, déposés par centaines de millions dans le vagin, traversent la glaire cervicale, l’utérus puis la trompe : seules quelques centaines atteignent l’ovocyte. Ils peuvent survivre **3 à 5 jours** dans les voies génitales féminines, où ils acquièrent leur pouvoir fécondant.' },
          { type: 'figure', image: IMG.fecondation, caption: 'À gauche : l’ovocyte II au moment de la fécondation (bloqué en métaphase II). À droite : la cellule-œuf quelques heures plus tard, avec ses deux pronucléus et ses deux globules polaires.', size: 'wide' },
          {
            type: 'steps',
            title: 'Les étapes de la fécondation',
            items: [
              { title: 'Traversée de la corona radiata', text: 'Grâce à leur flagelle, des spermatozoïdes se faufilent entre les cellules folliculaires.' },
              { title: 'Reconnaissance et réaction acrosomique', text: 'Un spermatozoïde se fixe sur des glycoprotéines de la zone pellucide, propres à l’espèce. Son acrosome libère ses **enzymes**, qui creusent un passage dans la zone pellucide.' },
              { title: 'Fusion des membranes', text: 'La membrane du spermatozoïde fusionne avec celle de l’ovocyte : le **noyau** du spermatozoïde (et son centriole) pénètre dans le cytoplasme ; ses mitochondries sont éliminées.' },
              { title: 'Réaction corticale', text: 'Les **granules corticaux** libèrent leur contenu sous la zone pellucide, qui se modifie et devient infranchissable : aucun autre spermatozoïde ne peut entrer (blocage de la polyspermie).' },
              { title: 'Fin de la méiose II', text: 'Activé, l’ovocyte achève sa méiose II et expulse le **deuxième globule polaire**.' },
              { title: 'Formation des pronucléus', text: 'Le noyau du spermatozoïde gonfle pour former le **pronucléus mâle** (n), le noyau de l’ovocyte forme le **pronucléus femelle** (n). Chacun réplique son ADN et ils se rapprochent.' },
              { title: 'Amphimixie', text: 'Les enveloppes des deux pronucléus disparaissent et les chromosomes paternels et maternels se rassemblent sur le fuseau de la première mitose : la **cellule-œuf** (zygote), diploïde, est formée. Elle commence aussitôt à se diviser.' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'La fécondation a lieu dans le **tiers externe de la trompe**, dans les 24 heures qui suivent l’ovulation.',
              'Étapes : traversée de la corona radiata, **réaction acrosomique**, fusion des membranes, **réaction corticale** (un seul spermatozoïde), fin de la **méiose II**, pronucléus mâle et femelle, **amphimixie**.',
              'La **cellule-œuf** (zygote) est diploïde : elle associe le génome nucléaire du père et celui de la mère.',
            ],
          },
        ],
      },

      {
        title: 'Les conséquences chromosomiques de la fécondation',
        intro: 'La fécondation rétablit la diploïdie : la méiose et la fécondation forment un cycle qui maintient 46 chromosomes de génération en génération.',
        blocks: [
          { type: 'definition', term: 'Additivité des génomes nucléaires', text: 'la cellule-œuf réunit les 23 chromosomes du spermatozoïde et les 23 chromosomes de l’ovocyte : **n + n = 2n**. Chaque paire de chromosomes homologues comprend un chromosome d’origine paternelle et un chromosome d’origine maternelle (voir la figure de la Partie 1).' },
          { type: 'p', text: 'Le sexe génétique est déterminé à la fécondation par le spermatozoïde : tous les ovocytes portent un chromosome X, alors que la moitié des spermatozoïdes porte un X et l’autre moitié un Y. Un ovocyte fécondé par un spermatozoïde X donne une cellule-œuf 46,XX ; par un spermatozoïde Y, une cellule-œuf 46,XY.' },
          { type: 'definition', term: 'Génome mitochondrial', text: 'petite molécule d’ADN circulaire (16 569 paires de nucléotides, 37 gènes) présente en plusieurs exemplaires dans chaque mitochondrie. Les mitochondries de la cellule-œuf proviennent **uniquement de l’ovocyte** : celles du spermatozoïde sont éliminées. Le génome mitochondrial est donc transmis **uniquement par la mère**, à tous ses enfants.' },
          { type: 'example', title: 'une maladie mitochondriale', text: 'La neuropathie optique héréditaire de Leber est due à une mutation d’un gène de l’ADN mitochondrial. Elle provoque une perte brutale de la vision, le plus souvent chez de jeunes hommes. Une femme porteuse transmet la mutation à tous ses enfants (qui ne développeront pas tous la maladie) ; un homme porteur ne la transmet jamais.' },
          { type: 'definition', term: 'Non-disjonction', text: 'anomalie de la méiose : deux chromosomes homologues (en anaphase I) ou deux chromatides sœurs (en anaphase II) ne se séparent pas. Elle produit des gamètes à **n + 1** chromosomes (24) ou **n − 1** chromosomes (22).' },
          { type: 'p', text: 'Si un gamète à 24 chromosomes est fécondé par un gamète normal, la cellule-œuf possède 47 chromosomes : c’est une **trisomie**. Avec un gamète à 22 chromosomes, elle en possède 45 : c’est une **monosomie**. La plupart de ces anomalies empêchent le développement de l’embryon ; quelques-unes sont compatibles avec la vie.' },
          { type: 'figure', image: IMG.trisomie, caption: 'Caryotype schématique d’un garçon porteur de trisomie 21 : trois chromosomes 21 (encadrés). Formule chromosomique : 47,XY,+21.', size: 'wide' },
          {
            type: 'table',
            caption: 'Quelques anomalies du nombre de chromosomes compatibles avec la vie',
            head: ['Anomalie', 'Formule chromosomique', 'Origine'],
            rows: [
              ['Trisomie 21', '47,XX,+21 ou 47,XY,+21', 'Gamète portant deux chromosomes 21, le plus souvent l’ovocyte ; la fréquence augmente avec l’âge maternel.'],
              ['Syndrome de Klinefelter', '47,XXY', 'Gamète portant deux gonosomes (XX ou XY).'],
              ['Syndrome de Turner', '45,X', 'Gamète dépourvu de gonosome.'],
            ],
          },
          { type: 'note', title: 'Pourquoi l’âge maternel compte', text: 'Les ovocytes I restent bloqués en prophase I depuis la vie fœtale. Plus ce blocage dure, plus le risque d’une mauvaise séparation des chromosomes lors de la reprise de la méiose augmente. C’est pourquoi le risque de trisomie 21 augmente avec l’âge de la mère ; un dépistage est proposé à toutes les femmes enceintes.' },
          {
            type: 'retenir',
            items: [
              'Fécondation : **n + n = 2n** ; chaque paire de chromosomes associe un chromosome paternel et un chromosome maternel.',
              'Le spermatozoïde (X ou Y) détermine le sexe génétique de la cellule-œuf.',
              'Le **génome mitochondrial** est transmis **uniquement par la mère**.',
              'Une **non-disjonction** pendant la méiose donne un gamète anormal et, après fécondation, une trisomie (47) ou une monosomie (45).',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les activités suivent l’ordre de la leçon : de la méiose à la cellule-œuf. Réponds d’abord seul(e), puis utilise le coup de pouce et compare avec la correction.',
    activities: [
      {
        title: 'Suivre l’ADN pendant la méiose',
        duration: '25 min',
        skills: ['Exploiter des mesures', 'Raisonner'],
        context: 'Au laboratoire, on mesure par fluorescence la quantité d’ADN contenue dans des cellules isolées de testicule, à différents stades.',
        documents: [
          {
            label: 'Document 1',
            title: 'Quantité d’ADN par cellule (résultats de mesures, valeurs moyennes)',
            blocks: [
              {
                type: 'table',
                head: ['Cellule', 'Quantité d’ADN (pg)'],
                rows: [
                  ['Spermatogonie (juste après une mitose)', '6,6'],
                  ['Spermatocyte I', '13,2'],
                  ['Spermatocyte II', '6,6'],
                  ['Spermatide', '3,3'],
                ],
              },
            ],
          },
          { label: 'Document 2', title: 'Les étapes de la méiose', image: IMG.meiose, caption: 'Cellule à 2n = 4.' },
        ],
        questions: [
          { text: 'Explique le doublement de la quantité d’ADN entre la spermatogonie et le spermatocyte I.', answer: 'Avant la méiose, l’ADN est répliqué : chaque chromosome passe d’une à deux chromatides. La quantité d’ADN double (6,6 → 13,2 pg) sans que le nombre de chromosomes change (46).' },
          { text: 'Explique les deux diminutions de moitié, en précisant à chaque fois ce qui se sépare.', hint: 'Utilise le document 2 : que sépare l’anaphase I ? l’anaphase II ?', answer: 'Méiose I (13,2 → 6,6 pg) : les chromosomes homologues se séparent ; chaque spermatocyte II reçoit 23 chromosomes à deux chromatides. Méiose II (6,6 → 3,3 pg) : les chromatides sœurs se séparent ; chaque spermatide reçoit 23 chromosomes à une chromatide.' },
          { text: 'Complète pour chaque cellule du document 1 : nombre de chromosomes, nombre de chromatides par chromosome, diploïde ou haploïde.', answer: 'Spermatogonie : 46 chromosomes à 1 chromatide, diploïde. Spermatocyte I : 46 chromosomes à 2 chromatides, diploïde. Spermatocyte II : 23 chromosomes à 2 chromatides, haploïde. Spermatide : 23 chromosomes à 1 chromatide, haploïde.' },
          { text: 'Pourquoi dit-on que la méiose I est réductionnelle et la méiose II équationnelle ?', answer: 'La méiose I réduit le nombre de chromosomes de moitié (2n → n) en séparant les homologues. La méiose II ne change pas le nombre de chromosomes (n → n) : comme une mitose, elle sépare les chromatides sœurs et produit des cellules identiques entre elles par leur nombre de chromosomes.' },
        ],
      },
      {
        title: 'Identifier les stades de la spermatogenèse',
        duration: '25 min',
        skills: ['Observer', 'Identifier', 'Justifier'],
        context: 'Tu observes une coupe de testicule et tu dois reconnaître les cellules de la lignée germinale.',
        documents: [
          { label: 'Document 3', title: 'Coupe de testicule (×400)', image: IMG.testicule, caption: 'Coloration hématoxyline-éosine.' },
          {
            label: 'Document 4',
            title: 'Critères de reconnaissance',
            blocks: [
              {
                type: 'table',
                head: ['Cellule', 'Position dans le tube', 'Aspect'],
                rows: [
                  ['Spermatogonie', 'Contre la paroi (périphérie)', 'Petite, noyau rond et sombre'],
                  ['Spermatocyte I', 'Couches moyennes', 'La plus grosse, noyau avec des filaments de chromatine'],
                  ['Spermatide', 'Près de la lumière', 'Petite cellule ronde, noyau clair'],
                  ['Spermatozoïde', 'Bordure de la lumière', 'Tête sombre allongée, flagelle dans la lumière'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Repère sur le document 3 chaque type de cellule du document 4 et décris sa position.', answer: 'Les spermatogonies forment une rangée de petites cellules sombres contre la paroi du tube ; les spermatocytes I, les plus grosses cellules, à noyau filamenteux, occupent les couches moyennes ; les spermatides, petites et rondes, se trouvent près de la lumière ; les spermatozoïdes ont leur tête sombre allongée au bord de la lumière et leur flagelle dans la lumière.' },
          { text: 'Quelles cellules sont diploïdes ? haploïdes ? Justifie.', answer: 'Diploïdes : spermatogonies et spermatocytes I, car ils n’ont pas encore réalisé la méiose I. Haploïdes : spermatocytes II, spermatides et spermatozoïdes, issus de la méiose I qui a séparé les chromosomes homologues.' },
          { text: 'Que traduit la disposition des cellules de la périphérie vers la lumière ?', answer: 'Elle traduit la chronologie de la spermatogenèse : les cellules se forment à la périphérie et se transforment en progressant vers la lumière, où les spermatozoïdes sont libérés.' },
          { text: 'Combien de spermatozoïdes un testicule peut-il produire à partir de 1 000 spermatocytes I ? Combien de temps faut-il environ pour passer d’une spermatogonie à un spermatozoïde ?', answer: 'Chaque spermatocyte I donne 4 spermatozoïdes : 1 000 × 4 = 4 000 spermatozoïdes. Il faut environ 74 jours, soit deux mois et demi.' },
        ],
      },
      {
        title: 'Comparer la chronologie des deux gamétogenèses',
        duration: '25 min',
        skills: ['Comparer', 'Argumenter'],
        context: 'On compare la formation des gamètes chez une femme de 35 ans et chez un homme du même âge.',
        documents: [
          { label: 'Document 5', title: 'Spermatogenèse et ovogenèse', image: IMG.gametogenese, caption: 'Schéma comparatif.' },
          { label: 'Document 6', title: 'Âge des cellules germinales', text: ['Chez l’homme de 35 ans, un spermatozoïde éjaculé provient d’une spermatogonie qui s’est engagée dans la spermatogenèse environ deux mois et demi plus tôt.', 'Chez la femme de 35 ans, l’ovocyte libéré à l’ovulation est issu d’un ovocyte I formé avant sa naissance et resté bloqué en prophase I pendant plus de 35 ans.'] },
        ],
        questions: [
          { text: 'Compare le nombre de gamètes produits à partir d’une cellule entrée en méiose chez l’homme et chez la femme. Explique la différence.', answer: 'Un spermatocyte I donne 4 spermatozoïdes, alors qu’un ovocyte I ne donne qu’un seul gamète. Chez la femme, les deux divisions sont asymétriques : à chaque fois, une des deux cellules (le globule polaire) reçoit très peu de cytoplasme et dégénère.' },
          { text: 'Quel est l’intérêt de ces divisions asymétriques ?', answer: 'Elles concentrent presque tout le cytoplasme, avec ses réserves et ses organites, dans un seul gros ovocyte. Ces réserves permettent les premières divisions de l’embryon, avant la nidation.' },
          { text: 'Où et quand la méiose de l’ovocyte s’arrête-t-elle ? Quand s’achève-t-elle ?', answer: 'Elle s’arrête une première fois en prophase I, avant la naissance, jusqu’au cycle où le follicule devient dominant ; puis une deuxième fois en métaphase II, au moment de l’ovulation. Elle ne s’achève qu’en cas de fécondation.' },
          { text: 'À l’aide du document 6, propose une explication à l’augmentation du risque de trisomie 21 avec l’âge de la mère.', answer: 'L’ovocyte d’une femme de 35 ans est resté bloqué en prophase I plus de 35 ans, alors qu’un spermatozoïde est formé en deux mois et demi. Plus le blocage est long, plus le risque d’une mauvaise séparation des chromosomes (non-disjonction) à la reprise de la méiose augmente. Un ovocyte à deux chromosomes 21 fécondé donne une trisomie 21.' },
        ],
      },
      {
        title: 'Reconstituer la chronologie de la fécondation',
        duration: '25 min',
        skills: ['Observer', 'Ordonner', 'Expliquer'],
        context: 'Dans un laboratoire de fécondation in vitro, une biologiste observe un ovocyte au microscope, quelques heures après l’avoir mis en présence de spermatozoïdes.',
        documents: [
          { label: 'Document 7', title: 'Ovocyte observé au microscope (×400)', image: IMG.ovocyte, caption: 'Microphotographie en contraste de modulation.' },
          { label: 'Document 8', title: 'Étapes de la fécondation (dans le désordre)', text: ['A. Les granules corticaux libèrent leur contenu et la zone pellucide se modifie.', 'B. Le spermatozoïde se fixe à la zone pellucide et libère les enzymes de son acrosome.', 'C. Deux pronucléus sont visibles dans le cytoplasme.', 'D. Les membranes du spermatozoïde et de l’ovocyte fusionnent.', 'E. Le deuxième globule polaire est expulsé.', 'F. Les spermatozoïdes traversent les cellules de la corona radiata.'] },
        ],
        questions: [
          { text: 'Sur le document 7, repère la zone pellucide, le premier globule polaire et les spermatozoïdes. Justifie qu’il s’agit d’un ovocyte II.', answer: 'La zone pellucide est l’épais anneau translucide autour de la cellule ; le premier globule polaire est la petite cellule ovale entre la zone et la membrane ; les spermatozoïdes sont accrochés à la surface de la zone. La présence d’un premier globule polaire montre que la méiose I est terminée : c’est un ovocyte II (bloqué en métaphase II).' },
          { text: 'Range les étapes du document 8 dans l’ordre chronologique.', answer: 'F (traversée de la corona radiata) → B (fixation et réaction acrosomique) → D (fusion des membranes) → A (réaction corticale) → E (expulsion du 2e globule polaire, fin de la méiose II) → C (deux pronucléus).' },
          { text: 'Explique pourquoi un seul spermatozoïde féconde l’ovocyte, alors que plusieurs sont fixés à la zone pellucide.', answer: 'Dès la fusion du premier spermatozoïde, la réaction corticale modifie la zone pellucide, qui devient infranchissable : les autres spermatozoïdes ne peuvent plus entrer. Ce blocage de la polyspermie garantit une cellule-œuf à 2n = 46 chromosomes.' },
          { text: 'Combien de chromosomes contient chaque pronucléus ? Et la cellule-œuf ? Où la fécondation a-t-elle lieu naturellement ?', answer: 'Chaque pronucléus contient 23 chromosomes (n) ; la cellule-œuf en contient 46 (2n). Naturellement, la fécondation a lieu dans le tiers externe de la trompe utérine, dans les 24 heures qui suivent l’ovulation.' },
        ],
      },
      {
        title: 'Caryotypes et ADN mitochondrial : ce que transmet la fécondation',
        duration: '30 min',
        skills: ['Analyser un caryotype', 'Exploiter un arbre généalogique', 'Raisonner'],
        context: 'Un service de génétique reçoit deux familles : la première pour un enfant porteur de trisomie 21, la seconde pour une maladie de la vision qui touche plusieurs membres de la famille.',
        documents: [
          { label: 'Document 9', title: 'Garnitures chromosomiques des gamètes et de la cellule-œuf', image: IMG.caryotypes, caption: 'Chromosomes représentés à une chromatide.' },
          { label: 'Document 10', title: 'Caryotype de l’enfant de la première famille', image: IMG.trisomie, caption: 'Caryotype schématique.' },
          { label: 'Document 11', title: 'Seconde famille : transmission d’une mutation de l’ADN mitochondrial', image: IMG.arbreMito, caption: 'Les individus porteurs de la mutation ont été identifiés par analyse génétique.' },
        ],
        questions: [
          { text: 'À l’aide du document 9, montre que la fécondation rétablit la diploïdie.', answer: 'Le spermatozoïde et l’ovocyte possèdent chacun 23 chromosomes, un de chaque paire (n). La cellule-œuf en possède 46, rangés en 23 paires : chaque paire comprend un chromosome venant du spermatozoïde et un venant de l’ovocyte. La fécondation associe deux génomes haploïdes : n + n = 2n.' },
          { text: 'Écris la formule chromosomique de l’enfant du document 10 et explique, à l’aide d’un schéma simple, comment une non-disjonction en méiose I chez la mère peut produire ce caryotype.', hint: 'Que se passe-t-il si les deux chromosomes 21 migrent vers le même pôle en anaphase I ?', answer: 'Formule : 47,XY,+21. En anaphase I, les deux chromosomes 21 homologues ne se séparent pas et migrent ensemble vers le même pôle : l’ovocyte II reçoit deux chromosomes 21 (24 chromosomes au total). Fécondé par un spermatozoïde normal (23 chromosomes, dont un 21), il donne une cellule-œuf à 47 chromosomes, avec trois chromosomes 21.' },
          { text: 'Dans le document 11, relève ce que deviennent les enfants des hommes porteurs (I-1 et II-4) et des femmes porteuses (I-4 et II-3).', answer: 'Les enfants des hommes porteurs I-1 (II-1, II-2) et II-4 (III-4, III-5) ne sont pas porteurs. Les enfants des femmes porteuses I-4 (II-3, II-4) et II-3 (III-1, III-2, III-3) sont tous porteurs.' },
          { text: 'Explique ces observations à partir de ce qui se passe lors de la fécondation.', answer: 'L’ADN mitochondrial est contenu dans les mitochondries. Lors de la fécondation, seul le noyau du spermatozoïde entre dans l’ovocyte ; ses mitochondries sont éliminées. Toutes les mitochondries de la cellule-œuf viennent de l’ovocyte : une mère porteuse transmet la mutation à tous ses enfants, un père porteur ne la transmet jamais.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Les cellules du corps sont diploïdes (2n = 46, chromosomes par paires) ; les gamètes sont haploïdes (n = 23, un chromosome de chaque paire).',
      'La mitose, division équationnelle, donne deux cellules identiques ; la méiose, deux divisions précédées d’une réplication, donne quatre cellules haploïdes.',
      'Méiose I : appariement puis séparation des chromosomes homologues (réductionnelle) ; méiose II : séparation des chromatides sœurs (équationnelle).',
      'Spermatogenèse : spermatogonie → spermatocyte I → spermatocytes II → spermatides → spermatozoïdes, en continu et en environ 74 jours ; un spermatocyte I donne quatre spermatozoïdes.',
      'Ovogenèse : ovocyte I bloqué en prophase I depuis la vie fœtale, méiose I asymétrique juste avant l’ovulation, ovocyte II bloqué en métaphase II jusqu’à la fécondation.',
      'Fécondation dans la trompe : réaction acrosomique, fusion, réaction corticale, fin de la méiose II, pronucléus, amphimixie : n + n = 2n.',
      'Le génome mitochondrial est transmis par la mère ; une non-disjonction méiotique conduit à une trisomie ou à une monosomie.',
    ],
    method: {
      title: 'Suivre les chromosomes au cours d’une division',
      steps: [
        'Compter les chromosomes : c’est le nombre de centromères.',
        'Compter les chromatides de chaque chromosome (une ou deux).',
        'Repérer s’il existe des paires d’homologues (diploïde) ou non (haploïde).',
        'Identifier ce qui se sépare : des homologues (anaphase I) ou des chromatides sœurs (mitose, anaphase II).',
      ],
    },
    vocabulary: [
      { term: 'Chromatide', definition: 'Chacune des deux copies identiques d’un chromosome après réplication, reliées par le centromère.' },
      { term: 'Chromosomes homologues', definition: 'Chromosomes d’une même paire, de même forme, portant les mêmes gènes ; l’un vient du père, l’autre de la mère.' },
      { term: 'Diploïde', definition: 'Se dit d’une cellule dont les chromosomes vont par paires (2n = 46).' },
      { term: 'Haploïde', definition: 'Se dit d’une cellule qui ne possède qu’un chromosome de chaque paire (n = 23).' },
      { term: 'Caryotype', definition: 'Représentation ordonnée des chromosomes d’une cellule, classés par paires.' },
      { term: 'Mitose', definition: 'Division équationnelle donnant deux cellules identiques à la cellule mère.' },
      { term: 'Méiose', definition: 'Deux divisions successives qui produisent quatre cellules haploïdes à partir d’une cellule diploïde.' },
      { term: 'Spermatogenèse', definition: 'Formation des spermatozoïdes dans les tubes séminifères.' },
      { term: 'Ovogenèse', definition: 'Formation du gamète femelle, commencée avant la naissance.' },
      { term: 'Globule polaire', definition: 'Petite cellule produite par les divisions asymétriques de l’ovogenèse, qui dégénère.' },
      { term: 'Ovocyte II', definition: 'Gamète femelle libéré à l’ovulation, bloqué en métaphase II.' },
      { term: 'Réaction acrosomique', definition: 'Libération des enzymes de l’acrosome, qui permet au spermatozoïde de traverser la zone pellucide.' },
      { term: 'Réaction corticale', definition: 'Libération du contenu des granules corticaux, qui empêche l’entrée d’autres spermatozoïdes.' },
      { term: 'Cellule-œuf', definition: 'Première cellule diploïde d’un nouvel individu, issue de la fécondation (zygote).' },
      { term: 'Non-disjonction', definition: 'Absence de séparation de deux homologues ou de deux chromatides pendant la méiose.' },
    ],
    mistakes: [
      { wrong: 'Confondre chromosome à deux chromatides et paire de chromosomes homologues.', right: 'Les deux chromatides d’un chromosome sont identiques et reliées par le centromère ; deux homologues sont deux chromosomes distincts, l’un paternel, l’autre maternel.' },
      { wrong: 'Dire que la méiose II divise par deux le nombre de chromosomes.', right: 'C’est la méiose I qui est réductionnelle ; la méiose II sépare les chromatides sœurs sans changer le nombre de chromosomes.' },
      { wrong: 'Écrire que l’ovocyte libéré à l’ovulation est un ovule ayant terminé sa méiose.', right: 'C’est un ovocyte II bloqué en métaphase II ; la méiose II ne s’achève qu’en cas de fécondation.' },
      { wrong: 'Dire que le spermatozoïde entier entre dans l’ovocyte.', right: 'Seuls son noyau et son centriole jouent un rôle ; ses mitochondries sont éliminées.' },
      { wrong: 'Penser que la trisomie 21 est héritée d’un parent malade.', right: 'Elle résulte le plus souvent d’une non-disjonction accidentelle lors de la méiose d’un des parents.' },
    ],
    quiz: [
      { question: 'Une cellule humaine haploïde contient :', choices: ['46 chromosomes', '23 chromosomes', '92 chromatides', '22 chromosomes'], answer: 1, explanation: 'Une cellule haploïde possède un chromosome de chaque paire : n = 23.' },
      { question: 'En anaphase I de méiose, ce sont :', choices: ['Les chromatides sœurs qui se séparent', 'Les chromosomes homologues qui se séparent', 'Les noyaux qui fusionnent', 'Les centromères qui se dupliquent'], answer: 1, explanation: 'La méiose I sépare les homologues : c’est la division réductionnelle.' },
      { question: 'Un spermatocyte II humain possède :', choices: ['46 chromosomes à 2 chromatides', '23 chromosomes à 1 chromatide', '23 chromosomes à 2 chromatides', '46 chromosomes à 1 chromatide'], answer: 2, explanation: 'Issu de la méiose I, il est haploïde mais ses chromosomes ont encore deux chromatides.' },
      { question: 'Un spermatocyte I donne :', choices: ['1 spermatozoïde', '2 spermatozoïdes', '4 spermatozoïdes', '8 spermatozoïdes'], answer: 2, explanation: 'Deux divisions successives donnent quatre spermatides, puis quatre spermatozoïdes.' },
      { question: 'À l’ovulation, la cellule libérée est :', choices: ['Un ovocyte I bloqué en prophase I', 'Un ovocyte II bloqué en métaphase II', 'Une ovogonie', 'Une cellule-œuf'], answer: 1, explanation: 'La méiose I s’achève juste avant l’ovulation ; l’ovocyte II reste bloqué en métaphase II.' },
      { question: 'La réaction corticale :', choices: ['Permet au spermatozoïde de traverser la zone pellucide', 'Empêche l’entrée d’autres spermatozoïdes', 'Forme les pronucléus', 'Déclenche l’ovulation'], answer: 1, explanation: 'Le contenu des granules corticaux modifie la zone pellucide : c’est le blocage de la polyspermie.' },
      { question: 'Le sexe génétique de l’enfant est déterminé par :', choices: ['L’ovocyte', 'Le spermatozoïde', 'L’âge de la mère', 'La nidation'], answer: 1, explanation: 'Tous les ovocytes portent un X ; le spermatozoïde porte un X ou un Y.' },
      { question: 'Le génome mitochondrial d’un enfant provient :', choices: ['Du père uniquement', 'Des deux parents à parts égales', 'De la mère uniquement', 'Ni du père ni de la mère'], answer: 2, explanation: 'Les mitochondries de la cellule-œuf sont celles de l’ovocyte.' },
      { question: 'La formule chromosomique 47,XX,+21 correspond à :', choices: ['Une fille porteuse de trisomie 21', 'Un garçon porteur de trisomie 21', 'Une monosomie', 'Un caryotype normal'], answer: 0, explanation: '47 chromosomes, deux X et un chromosome 21 supplémentaire.' },
    ],
    exercises: [
      {
        title: 'Une cellule à 2n = 6',
        statement: 'Une cellule animale possède 2n = 6 chromosomes. a) Combien de chromosomes et de chromatides possède-t-elle en métaphase de mitose ? b) Combien de chromosomes possèdent les cellules obtenues à la fin de la méiose I ? de la méiose II ? Précise le nombre de chromatides.',
        answer: ['a) En métaphase de mitose : 6 chromosomes à 2 chromatides, soit 12 chromatides.', 'b) Fin de méiose I : 3 chromosomes à 2 chromatides (n = 3). Fin de méiose II : 3 chromosomes à 1 chromatide.'],
      },
      {
        title: 'Une non-disjonction en méiose II',
        statement: 'Lors de la méiose II d’un spermatocyte II, les deux chromatides d’un chromosome 21 ne se séparent pas. Quelles spermatides obtient-on ? Quelles cellules-œufs peuvent se former si elles fécondent un ovocyte normal ?',
        answer: 'Le spermatocyte II donne une spermatide à 24 chromosomes (deux chromosomes 21) et une spermatide à 22 chromosomes (aucun chromosome 21). Après fécondation d’un ovocyte normal (23 chromosomes), on obtient soit une cellule-œuf à 47 chromosomes (trisomie 21), soit une cellule-œuf à 45 chromosomes (monosomie 21, qui ne permet pas le développement).',
      },
      {
        title: 'Comparer deux gamètes',
        statement: 'En une dizaine de lignes, compare le spermatozoïde et l’ovocyte II : taille, mobilité, contenu, garniture chromosomique, et relie chaque différence à la fonction du gamète.',
        answer: 'Le spermatozoïde est petit (60 µm), mobile grâce à son flagelle alimenté en énergie par les mitochondries de la pièce intermédiaire ; il ne contient presque pas de cytoplasme mais un noyau très condensé et un acrosome riche en enzymes : il est adapté au déplacement et à la traversée de la zone pellucide. L’ovocyte II est très gros (120 µm), immobile, riche en réserves et en organites : il assure les premières divisions de l’embryon. Il est protégé par la zone pellucide et possède des granules corticaux qui empêchent la polyspermie. Les deux gamètes sont haploïdes (n = 23) : leur union rétablit la diploïdie.',
      },
    ],
    selfCheck: [
      'Je sais compter les chromosomes et les chromatides d’une cellule et dire si elle est diploïde ou haploïde.',
      'Je sais décrire les phases de la mitose et de la méiose, et les comparer.',
      'Je sais nommer dans l’ordre les cellules de la spermatogenèse et de l’ovogenèse.',
      'Je sais expliquer les blocages de la méiose de l’ovocyte et la division asymétrique.',
      'Je sais décrire la chronologie de la fécondation et le rôle de l’acrosome et des granules corticaux.',
      'Je sais expliquer l’additivité des génomes, la transmission maternelle de l’ADN mitochondrial et l’origine d’une trisomie.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Méiose — Wikipédia', url: 'https://fr.wikipedia.org/wiki/M%C3%A9iose' },
      { title: 'Fécondation — Wikipédia', url: 'https://fr.wikipedia.org/wiki/F%C3%A9condation' },
      { title: 'Trisomie 21 — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Trisomie_21' },
      { title: 'Génome mitochondrial — Wikipédia', url: 'https://fr.wikipedia.org/wiki/G%C3%A9nome_mitochondrial' },
    ],
  },
};

export default lesson;
