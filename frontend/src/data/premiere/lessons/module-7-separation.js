import { img } from '../media';
import ccmPhoto from '../../../assets/courses/premiere/module-7-separation/ccm-plaque.webp';
import cuve from '../../../assets/courses/premiere/module-7-separation/cuve-ccm.webp';
import chromatogramme from '../../../assets/courses/premiere/module-7-separation/chromatogramme.webp';
import colonne from '../../../assets/courses/premiere/module-7-separation/colonne.webp';
import echange from '../../../assets/courses/premiere/module-7-separation/echange-ions.webp';

const IMG = {
  ccmPhoto: img(ccmPhoto, 'Main gantée tenant à la pince une plaque de chromatographie sur couche mince révélée : taches violettes à différentes hauteurs au-dessus d’une ligne tracée au crayon.', 'photo', 1536, 1024),
  cuve: img(cuve, 'Schéma légendé d’une cuve de chromatographie sur couche mince : couvercle, cuve, plaque de silice, front du solvant, ligne de dépôt, dépôts, phase mobile.', 'schema', 933, 1400),
  chromatogramme: img(chromatogramme, 'Chromatogramme schématisé : trois pistes (A, B et M), entre la ligne de dépôt et le front du solvant ; les deux taches de M sont aux mêmes hauteurs que celles de A et de B ; flèches « d » et « D » pour le calcul du rapport frontal.', 'schema', 933, 1400),
  colonne: img(colonne, 'Montage de chromatographie d’échange d’ions : colonne contenant la résine échangeuse d’ions sous une couche de phase mobile, fritté, robinet et tubes de fractions recueillies.', 'schema', 933, 1400),
  echange: img(echange, 'Principe de l’échange de cations : une bille de résine porte des charges fixes négatives qui retiennent les molécules positives, tandis que les molécules négatives sont entraînées.', 'schema', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'module-7-separation',
  duration: 'Environ 4 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.ccmPhoto,
    question: 'Un mélange incolore d’acides aminés, une huile essentielle qui contient des dizaines de molécules : comment séparer leurs constituants pour les identifier, ou pour les récupérer purs ?',
    text: 'Les biomolécules d’un mélange se ressemblent, mais pas tout à fait : certaines sont plus polaires, d’autres plus chargées. La chromatographie exploite ces petites différences pour les faire avancer à des vitesses différentes. Dans ce chapitre, tu apprends à réaliser une chromatographie sur couche mince pour identifier des molécules, puis une chromatographie d’échange d’ions pour les purifier.',
  },
  objectives: [
    'Expliquer le principe d’une chromatographie : phase fixe, phase mobile, force de rétention et force d’entraînement.',
    'Associer les propriétés des molécules à séparer (polarité, charge) à la nature des phases utilisées.',
    'Réaliser une chromatographie sur couche mince en maîtrisant ses points critiques et critiquer le chromatogramme.',
    'Calculer un rapport frontal et identifier des biomolécules par comparaison à des étalons.',
    'Expliquer et réaliser une chromatographie d’échange d’ions : fixation, lavage, élution, puis critiquer la séparation.',
  ],
  prerequisites: [
    'Un acide aminé possède un groupement amine, un groupement carboxyle et une chaîne latérale qui lui est propre (biochimie-biologie).',
    'Les notions de molécule polaire et d’ion (physique-chimie).',
    'La détection des acides aminés par la ninhydrine (module 6).',
  ],
  program: [
    'Associer les propriétés biochimiques des molécules à séparer avec la nature des phases utilisées.',
    'Réaliser la procédure de la chromatographie sur couche mince en tenant compte des points critiques ; critiquer la qualité du chromatogramme obtenu.',
    'Identifier les biomolécules séparées par comparaison à des étalons.',
    'Expliquer l’établissement de liaisons ioniques entre les molécules à séparer et les constituants des phases.',
    'Réaliser la procédure de la chromatographie sur colonne en tenant compte des points critiques ; critiquer la qualité de la séparation.',
    'Notions : chromatographie analytique et préparative, phase fixe, phase mobile, liaisons faibles, force d’entraînement, force de rétention, étalonnage par comparaison, détection, fixation, lavage, élution.',
  ],

  course: {
    parts: [
      {
        title: 'Le principe de la chromatographie',
        intro: 'Toutes les chromatographies reposent sur la même idée : une course entre deux phases, où chaque molécule avance à sa propre vitesse.',
        blocks: [
          { type: 'p', text: 'Au laboratoire, on sépare les constituants d’un mélange pour deux raisons : les **identifier** (quels acides aminés contient cet hydrolysat de protéine ? ce produit est-il pur ?) ou les **récupérer** séparément pour les utiliser (purifier une enzyme, une protéine médicament comme l’insuline).' },
          { type: 'definition', term: 'Chromatographie', text: 'technique de séparation des constituants d’un mélange fondée sur leur **répartition différente** entre une **phase fixe** (ou stationnaire) et une **phase mobile** qui se déplace au contact de la phase fixe.' },
          { type: 'definition', term: 'Phase fixe et phase mobile', text: 'la **phase fixe** reste immobile (gel de silice sur une plaque, résine dans une colonne) ; la **phase mobile** (ou éluant) est un liquide qui se déplace et entraîne les molécules du mélange.' },
          { type: 'p', text: 'Chaque molécule établit des **liaisons faibles** à la fois avec la phase fixe et avec la phase mobile : **liaisons hydrogène** (entre groupements polaires –OH, –NH~2~, –COOH), **liaisons ioniques** (entre charges de signes opposés), **interactions hydrophobes** (entre parties non polaires). Ces liaisons se font et se défont sans cesse pendant la migration.' },
          {
            type: 'compare',
            title: 'Deux forces opposées',
            columns: [
              { title: 'Force de rétention', subtitle: 'exercée par la phase fixe', items: ['Résulte des liaisons faibles entre la molécule et la phase fixe.', 'Plus elle est forte, plus la molécule est **retenue** : elle migre **lentement**.'] },
              { title: 'Force d’entraînement', subtitle: 'exercée par la phase mobile', items: ['Résulte de l’affinité de la molécule pour la phase mobile (sa solubilité dans l’éluant).', 'Plus elle est forte, plus la molécule est **entraînée** : elle migre **vite**.'] },
            ],
          },
          { type: 'p', text: 'Deux molécules sont séparées si l’équilibre entre ces deux forces est **différent** pour chacune d’elles. Pour bien séparer, on choisit des phases adaptées aux propriétés des molécules : leur **polarité** pour la chromatographie sur couche mince, leur **charge électrique** pour la chromatographie d’échange d’ions.' },
          {
            type: 'compare',
            title: 'Deux objectifs, deux types de chromatographie',
            columns: [
              { title: 'Chromatographie analytique', subtitle: 'ex. chromatographie sur couche mince (CCM)', items: ['But : **identifier** les constituants d’un mélange ou vérifier une pureté.', 'Très petites quantités (quelques microlitres).', 'Les molécules restent sur la plaque.'] },
              { title: 'Chromatographie préparative', subtitle: 'ex. chromatographie d’échange d’ions sur colonne', items: ['But : **séparer et récupérer** les constituants pour les purifier.', 'Quantités plus importantes.', 'Les molécules sont recueillies dans des **fractions** distinctes.'] },
            ],
          },
          { type: 'note', title: 'Et les autres techniques de séparation ?', text: ['La **filtration** et la **centrifugation** séparent des particules (cellules, précipités) d’un liquide : elles servent souvent à préparer l’échantillon avant une chromatographie.', 'L’**électrophorèse** sépare des molécules chargées (ADN, protéines) qui migrent dans un gel sous l’effet d’un champ électrique. Son principe sera étudié en terminale.'] },
          {
            type: 'retenir',
            items: [
              'Une chromatographie sépare les molécules selon leur répartition entre une **phase fixe** et une **phase mobile**.',
              'Force de **rétention** (phase fixe) contre force d’**entraînement** (phase mobile), grâce à des **liaisons faibles**.',
              'Chromatographie **analytique** : identifier ; chromatographie **préparative** : récupérer et purifier.',
            ],
          },
        ],
      },

      {
        title: 'Réaliser une chromatographie sur couche mince',
        intro: 'La CCM est rapide et peu coûteuse : quelques gouttes de solvant et une plaque suffisent pour savoir ce que contient un mélange.',
        blocks: [
          { type: 'definition', term: 'Chromatographie sur couche mince (CCM)', text: 'chromatographie analytique dont la **phase fixe** est une fine couche de **gel de silice** déposée sur une plaque (aluminium, verre ou plastique) et la **phase mobile** un mélange de solvants qui monte dans la silice par **capillarité**.' },
          { type: 'p', text: 'Le gel de silice est **très polaire** : il porte de nombreux groupements –OH qui forment des liaisons hydrogène avec les molécules polaires. Conséquence : ==plus une molécule est polaire, plus elle est retenue par la silice et moins elle migre== ; une molécule peu polaire est entraînée loin par l’éluant. La composition de la phase mobile compte aussi : un éluant plus polaire entraîne davantage les molécules polaires.' },
          {
            type: 'table',
            caption: 'Associer les molécules à séparer et les phases',
            head: ['Molécules à séparer', 'Phase fixe', 'Phase mobile (exemple)', 'Révélation'],
            rows: [
              ['Acides aminés', 'Gel de silice', 'Butan-1-ol, acide éthanoïque, eau', 'Pulvérisation de **ninhydrine** puis chauffage : taches violettes'],
              ['Glucides (oses, diholosides)', 'Gel de silice', 'Mélange de solvants polaires (par exemple butan-1-ol, acide éthanoïque, eau)', 'Pulvérisation d’un révélateur des glucides puis chauffage : taches colorées'],
              ['Alcools des huiles essentielles (menthol, linalol…)', 'Gel de silice', 'Mélange peu polaire (par exemple cyclohexane et acétate d’éthyle)', 'Révélateur chimique (vapeurs de diiode, vanilline sulfurique…)'],
            ],
          },
          { type: 'figure', image: IMG.cuve, caption: 'Une CCM en cours : la ligne de dépôt est au-dessus du niveau de la phase mobile, la cuve est fermée par son couvercle.', size: 'small' },
          {
            type: 'steps',
            title: 'La procédure de la CCM et ses points critiques',
            items: [
              { title: 'Préparer et saturer la cuve', text: 'Verser la phase mobile sur **0,5 cm** environ, fermer le couvercle et attendre une dizaine de minutes : l’atmosphère se **sature en vapeurs** de solvant, ce qui donne un front régulier.' },
              { title: 'Préparer la plaque', text: 'La tenir par les bords, **avec des gants** (les doigts déposent des acides aminés). Tracer au **crayon à papier**, sans appuyer, la **ligne de dépôt** à 1,5 cm du bas, et repérer les emplacements des dépôts à au moins 1 cm les uns des autres et des bords.' },
              { title: 'Déposer', text: 'À l’aide d’un tube capillaire (ou d’une micropipette), faire des dépôts **petits** (2 à 3 mm de diamètre), en plusieurs fois au même endroit en séchant entre chaque dépôt. Un dépôt par **étalon** et un par **échantillon**.' },
              { title: 'Faire migrer', text: 'Placer la plaque verticalement dans la cuve, ligne de dépôt **au-dessus** du niveau de l’éluant, refermer et ne plus bouger la cuve.' },
              { title: 'Arrêter la migration', text: 'Quand le front du solvant arrive à environ 1 cm du haut, sortir la plaque et **marquer aussitôt le front** au crayon, avant qu’il ne s’évapore. Sécher sous hotte.' },
              { title: 'Révéler', text: 'Si les taches sont invisibles, les révéler (ninhydrine puis chauffage pour les acides aminés, lampe UV, diiode…). **Entourer** les taches au crayon.' },
            ],
          },
          { type: 'warning', title: 'Pourquoi ces précautions ?', text: ['Au **crayon** et pas au stylo : l’encre migrerait avec le solvant.', 'Ligne de dépôt **sous** le niveau du solvant : les dépôts se dissolvent dans la cuve au lieu de migrer.', 'Dépôts **trop gros** : taches étalées qui se chevauchent ; dépôts **trop faibles** : taches invisibles après révélation.', 'Les solvants sont inflammables et nocifs, la ninhydrine est nocive : travail sous hotte, gants et lunettes.'] },
          {
            type: 'retenir',
            items: [
              'CCM : phase fixe = **gel de silice** (polaire), phase mobile = mélange de solvants qui monte par capillarité.',
              'Plus une molécule est **polaire**, plus elle est retenue par la silice et **moins elle migre**.',
              'Points critiques : cuve saturée et fermée, ligne au crayon au-dessus de l’éluant, petits dépôts, gants, front marqué aussitôt, révélation.',
            ],
          },
        ],
      },

      {
        title: 'Exploiter et critiquer un chromatogramme',
        intro: 'Après la migration, il reste à lire la plaque : mesurer, comparer, et juger si le résultat est fiable.',
        blocks: [
          { type: 'definition', term: 'Chromatogramme', text: 'plaque obtenue après la migration et la révélation : chaque tache correspond à au moins une molécule séparée.' },
          { type: 'figure', image: IMG.ccmPhoto, caption: 'Plaque de CCM d’acides aminés révélée à la ninhydrine : chaque tache violette correspond à au moins un acide aminé.', size: 'normal' },
          { type: 'definition', term: 'Rapport frontal (R~f~)', text: 'rapport entre la distance parcourue par une molécule et la distance parcourue par le front du solvant, mesurées toutes les deux **depuis la ligne de dépôt**. Il est compris entre 0 et 1 et n’a **pas d’unité**.' },
          {
            type: 'formula',
            title: 'Rapport frontal',
            expression: 'R~f~ = d ÷ D',
            legend: [
              { symbol: 'd', meaning: 'distance entre la ligne de dépôt et le **centre** de la tache' },
              { symbol: 'D', meaning: 'distance entre la ligne de dépôt et le front du solvant' },
            ],
          },
          { type: 'figure', image: IMG.chromatogramme, caption: 'Identifier par comparaison : les deux taches du mélange M sont aux mêmes hauteurs (mêmes R~f~) que les étalons A et B.', size: 'small' },
          { type: 'definition', term: 'Étalonnage par comparaison', text: 'méthode d’identification qui consiste à déposer sur la **même plaque** des **étalons** (solutions de molécules connues) et l’échantillon. Une tache de l’échantillon qui a le **même R~f~** (et la même couleur après révélation) qu’un étalon correspond très probablement à la même molécule.' },
          { type: 'example', title: 'calcul et identification', text: ['Le front du solvant est à D = 8,0 cm de la ligne de dépôt.', 'Étalon A : d = 5,6 cm, donc R~f~ = 5,6 ÷ 8,0 = **0,70** ; étalon B : d = 2,4 cm, donc R~f~ = 2,4 ÷ 8,0 = **0,30**.', 'Le mélange M donne deux taches à 5,6 cm et 2,4 cm : il contient **A et B**.'] },
          { type: 'warning', title: 'Les limites de l’identification', text: ['Le R~f~ dépend des conditions (silice, composition de l’éluant, saturation, température) : on ne compare que des taches **de la même plaque**.', 'Deux molécules différentes peuvent avoir le même R~f~ ; une seule tache ne prouve donc pas qu’un produit est pur.', 'Une molécule en trop faible quantité ne donne pas de tache visible : c’est la **limite de détection**.'] },
          {
            type: 'table',
            caption: 'Critiquer la qualité d’un chromatogramme',
            head: ['Défaut observé', 'Cause probable', 'Remède'],
            rows: [
              ['Taches très étalées, en traînée', 'Dépôt trop gros ou trop concentré', 'Déposer moins, en plusieurs petites fois, ou diluer'],
              ['Aucune tache visible pour un dépôt', 'Quantité sous la limite de détection, révélation insuffisante', 'Déposer plusieurs fois au même endroit ; révéler correctement'],
              ['Front oblique ou irrégulier', 'Plaque penchée ou touchant la paroi, cuve non saturée ou ouverte', 'Plaque droite, cuve saturée et fermée'],
              ['Taches toutes sur la ligne ou toutes près du front', 'Phase mobile inadaptée (pas assez ou trop entraînante)', 'Modifier la composition de la phase mobile'],
              ['Taches qui se chevauchent', 'Migration trop courte, dépôts trop proches', 'Laisser migrer plus longtemps, espacer les dépôts'],
              ['Taches violettes parasites (ninhydrine)', 'Plaque touchée avec les doigts', 'Manipuler avec des gants, par les bords'],
            ],
          },
          { type: 'p', text: 'Un bon chromatogramme présente des taches **petites, rondes et bien séparées**, un front **horizontal** et des R~f~ ni trop proches de 0 ni trop proches de 1 (idéalement entre 0,2 et 0,8).' },
          {
            type: 'retenir',
            items: [
              '**R~f~ = d ÷ D**, distances mesurées depuis la ligne de dépôt jusqu’au centre de la tache et jusqu’au front.',
              'On identifie une molécule par comparaison à des **étalons déposés sur la même plaque** (même R~f~, même couleur).',
              'Un chromatogramme se critique : taille et forme des taches, front, séparation, limite de détection.',
            ],
          },
        ],
      },

      {
        title: 'Purifier par chromatographie d’échange d’ions',
        intro: 'Pour récupérer des molécules séparées, on utilise une colonne et la charge électrique des molécules.',
        blocks: [
          { type: 'p', text: 'Un acide aminé porte des groupements qui peuvent être chargés. Sa **charge globale** dépend du pH de la solution et de son **pH isoélectrique** (pHi), le pH auquel sa charge globale est nulle : si le pH est **inférieur** au pHi, l’acide aminé est chargé **positivement** ; si le pH est **supérieur** au pHi, il est chargé **négativement**.' },
          {
            type: 'table',
            caption: 'Charge de trois acides aminés à pH 6',
            head: ['Acide aminé', 'pHi', 'Comparaison', 'Charge globale à pH 6'],
            rows: [
              ['Acide aspartique', '2,8', 'pH > pHi', 'Négative'],
              ['Glycine', '6,0', 'pH = pHi', 'Nulle'],
              ['Lysine', '9,7', 'pH < pHi', 'Positive'],
            ],
          },
          { type: 'definition', term: 'Phase fixe chargée', text: 'résine formée de petites billes de polymère insoluble portant des **groupements chargés** fixés solidement. Une résine **échangeuse de cations** porte des charges fixes **négatives** et retient les molécules positives ; une résine **échangeuse d’anions** porte des charges fixes **positives** et retient les molécules négatives.' },
          { type: 'definition', term: 'Liaison ionique', text: 'liaison faible due à l’**attraction électrostatique** entre deux charges de signes opposés : ici, entre un groupement chargé de la résine et une molécule de charge opposée.' },
          { type: 'figure', image: IMG.echange, caption: 'Sur une résine échangeuse de cations, les molécules positives établissent des liaisons ioniques avec les charges fixes négatives et sont retenues ; les molécules négatives sont repoussées et entraînées par la phase mobile.', size: 'wide' },
          { type: 'p', text: 'Au départ, les charges de la résine sont associées à de petits ions (par exemple des ions Na^+^ pour une résine échangeuse de cations). Les molécules du mélange prennent leur place : c’est pourquoi on parle d’**échange d’ions**.' },
          { type: 'figure', image: IMG.colonne, caption: 'Montage de chromatographie sur colonne : la phase mobile traverse la résine et l’éluat est recueilli en fractions successives.', size: 'small' },
          {
            type: 'steps',
            title: 'Les étapes de la chromatographie d’échange d’ions',
            items: [
              { title: 'Équilibrer la colonne', text: 'Faire passer le **tampon** de départ (pH choisi en fonction des pHi) : la résine se met à ce pH.' },
              { title: 'Déposer le mélange', text: 'Laisser descendre le tampon jusqu’au ras de la résine, puis déposer **délicatement** un petit volume de mélange au sommet, sans creuser la résine.' },
              { title: 'Fixation', text: 'Les molécules de charge **opposée** à celle de la résine établissent des liaisons ioniques et sont **retenues** ; les autres traversent la colonne.' },
              { title: 'Lavage', text: 'Faire passer le même tampon : les molécules **non fixées** sortent de la colonne et sont recueillies dans les premières fractions.' },
              { title: 'Élution', text: 'Changer de phase mobile : un tampon de **pH différent** (qui modifie la charge des molécules fixées) ou un tampon riche en **sels** (dont les ions prennent leur place sur la résine). La force d’entraînement devient plus forte que la force de rétention : les molécules fixées sont **décrochées** et recueillies dans d’autres fractions.' },
              { title: 'Détecter et identifier', text: 'Déposer une goutte de chaque fraction sur une plaque de silice et révéler (ninhydrine) pour repérer les fractions qui contiennent des acides aminés, puis les identifier par CCM avec des étalons.' },
            ],
          },
          { type: 'definition', term: 'Fraction et éluat', text: 'l’**éluat** est le liquide qui sort de la colonne ; on le recueille en **fractions** de même volume, dans des tubes numérotés dans l’ordre de sortie.' },
          { type: 'warning', title: 'Points critiques de la colonne', text: ['**Ne jamais laisser la résine se dessécher** : il doit toujours rester du liquide au-dessus d’elle, sinon des bulles d’air créent des chemins préférentiels.', 'Déposer un **petit volume** de mélange, sans dépasser la capacité de la résine.', 'Régler un **débit lent et régulier** avec le robinet ; recueillir des fractions de même volume dans des tubes numérotés.', 'Choisir le **pH** du tampon en fonction des pHi des molécules à séparer.'] },
          { type: 'note', title: 'En colonne ou en « batch »', text: 'L’échange d’ions peut aussi se faire en « batch » : la résine est mélangée au mélange dans un tube, agitée, puis séparée du liquide par décantation ou centrifugation. Les étapes de fixation, lavage et élution sont les mêmes.' },
          { type: 'p', text: 'On **critique la qualité de la séparation** en analysant les fractions : une bonne séparation donne chaque molécule dans un groupe de fractions **distinct**, séparé par des fractions vides. Si une même molécule se retrouve à la fois dans les fractions de lavage et d’élution, la colonne était saturée, le débit trop rapide ou le pH mal choisi.' },
          {
            type: 'retenir',
            items: [
              'La charge d’un acide aminé dépend du pH : positive si pH < pHi, négative si pH > pHi.',
              'Résine **échangeuse de cations** (charges fixes négatives) : elle retient les molécules **positives** par des **liaisons ioniques**.',
              'Étapes : équilibration, dépôt, **fixation**, **lavage** (molécules non fixées), **élution** (changement de pH ou de concentration en sels).',
              'La résine ne doit jamais sécher ; les fractions sont analysées par dépôt sur silice et révélation ou par CCM.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les documents présentent des résultats obtenus en travaux pratiques. Réponds d’abord seul(e), en phrases complètes ; pour les calculs, écris la formule, puis les valeurs, puis le résultat. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Identifier les acides aminés d’un mélange par CCM',
        duration: '30 min',
        skills: ['Mesurer', 'Calculer', 'Identifier'],
        context: 'On cherche quels acides aminés contient un mélange X. Sur une même plaque de silice, on a déposé quatre étalons (lysine, glycine, alanine, leucine) et le mélange X. Phase mobile : butan-1-ol, acide éthanoïque, eau. Révélation : ninhydrine puis chauffage.',
        documents: [
          {
            label: 'Document 1',
            title: 'Mesures réalisées sur le chromatogramme (TP)',
            blocks: [
              {
                type: 'table',
                head: ['Dépôt', 'Distance parcourue par la ou les taches (cm)'],
                rows: [
                  ['Lysine', '0,8'],
                  ['Glycine', '2,0'],
                  ['Alanine', '2,8'],
                  ['Leucine', '5,2'],
                  ['Mélange X', '2,0 et 5,2'],
                ],
              },
              { type: 'p', text: 'Distance entre la ligne de dépôt et le front du solvant : D = 8,0 cm. Toutes les taches sont violettes.' },
            ],
          },
        ],
        questions: [
          { text: 'Calcule le rapport frontal de chaque étalon.', hint: 'R~f~ = d ÷ D, avec D = 8,0 cm.', answer: 'Lysine : 0,8 ÷ 8,0 = 0,10 ; glycine : 2,0 ÷ 8,0 = 0,25 ; alanine : 2,8 ÷ 8,0 = 0,35 ; leucine : 5,2 ÷ 8,0 = 0,65.' },
          { text: 'Quels acides aminés le mélange X contient-il ? Justifie.', answer: 'Les deux taches de X ont des R~f~ de 0,25 et 0,65, identiques à ceux de la glycine et de la leucine, et elles sont violettes comme les étalons : X contient très probablement de la glycine et de la leucine. Il ne contient ni lysine ni alanine en quantité détectable.' },
          { text: 'Pourquoi les étalons et le mélange doivent-ils être déposés sur la même plaque ?', answer: 'Le R~f~ dépend des conditions de migration (composition de l’éluant, silice, saturation, température). Pour comparer des R~f~, il faut que toutes les molécules aient migré exactement dans les mêmes conditions, donc sur la même plaque, en même temps.' },
          { text: 'La leucine possède une chaîne latérale peu polaire, la lysine une chaîne latérale chargée. Explique leur différence de migration.', hint: 'Quelle molécule forme le plus de liaisons avec la silice, très polaire ?', answer: 'La lysine, très polaire et chargée, établit beaucoup de liaisons avec la silice polaire : la force de rétention l’emporte, elle migre peu (R~f~ = 0,10). La leucine, moins polaire, est moins retenue et davantage entraînée par la phase mobile : elle migre loin (R~f~ = 0,65).' },
          { text: 'Peut-on affirmer que X ne contient que deux acides aminés ? Justifie.', answer: 'Non : un acide aminé présent en trop faible quantité peut ne pas être détecté (limite de détection), et deux acides aminés de même R~f~ dans ces conditions donneraient une seule tache.' },
        ],
      },
      {
        title: 'Critiquer des chromatogrammes',
        duration: '20 min',
        skills: ['Observer', 'Critiquer', 'Proposer'],
        context: 'Quatre binômes ont réalisé la même CCM d’acides aminés. Le professeur a noté l’aspect de chaque plaque après révélation.',
        documents: [
          {
            label: 'Document 2',
            title: 'Observations des plaques',
            text: ['Binôme 1 : les taches sont petites, rondes et bien séparées ; le front est horizontal.', 'Binôme 2 : les taches forment de longues traînées violettes qui se rejoignent.', 'Binôme 3 : aucune tache n’est visible ; la ligne de dépôt était sous le niveau de l’éluant au début de la migration.', 'Binôme 4 : le front est très oblique et des petites taches violettes sont dispersées sur toute la plaque, en forme d’empreintes.'],
          },
          { label: 'Document 3', title: 'La cuve de chromatographie', image: IMG.cuve, caption: 'Montage correct d’une CCM.', size: 'small' },
        ],
        questions: [
          { text: 'Quel binôme a obtenu un chromatogramme exploitable ? Justifie avec les critères de qualité.', answer: 'Le binôme 1 : taches petites, rondes et bien séparées, front horizontal. Ce chromatogramme permet de mesurer les R~f~ avec précision.' },
          { text: 'Explique le défaut du binôme 2 et propose un remède.', answer: 'Les dépôts étaient trop gros ou trop concentrés : les molécules s’étalent en traînées pendant la migration et les taches se chevauchent. Il faut faire des dépôts plus petits (2 à 3 mm), en plusieurs fois avec séchage, ou diluer les solutions.' },
          { text: 'Explique le résultat du binôme 3.', answer: 'La ligne de dépôt était sous le niveau de la phase mobile : les dépôts se sont dissous dans l’éluant de la cuve au lieu de migrer sur la plaque. La ligne de dépôt doit toujours être au-dessus du niveau du solvant.' },
          { text: 'Propose deux causes aux défauts du binôme 4.', answer: 'Front oblique : plaque posée de travers ou touchant la paroi, cuve non saturée ou mal fermée. Taches dispersées en forme d’empreintes : la plaque a été touchée avec les doigts ; la ninhydrine révèle les acides aminés de la peau. Il faut porter des gants et tenir la plaque par les bords.' },
        ],
      },
      {
        title: 'Relier la polarité des molécules à leur migration',
        duration: '25 min',
        skills: ['Raisonner', 'Argumenter'],
        context: 'On analyse par CCM une huile essentielle de menthe poivrée. Phase fixe : gel de silice. Phase mobile : cyclohexane et acétate d’éthyle (8 volumes pour 2). Révélation : vanilline sulfurique puis chauffage.',
        documents: [
          {
            label: 'Document 4',
            title: 'Trois molécules de l’huile essentielle',
            blocks: [
              {
                type: 'table',
                head: ['Molécule', 'Famille', 'Groupement caractéristique', 'R~f~ mesuré en TP'],
                rows: [
                  ['Menthol', 'Alcool', '–OH (liaisons hydrogène possibles)', '0,30'],
                  ['Menthone', 'Cétone', 'C=O (polarité moyenne)', '0,60'],
                  ['Limonène', 'Hydrocarbure', 'Aucun atome d’oxygène (peu polaire)', '0,90'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Classe ces trois molécules de la plus polaire à la moins polaire.', answer: 'Menthol (alcool, groupement –OH) > menthone (cétone, groupement C=O) > limonène (hydrocarbure, sans oxygène).' },
          { text: 'Explique pourquoi le menthol migre le moins.', hint: 'Pense aux liaisons hydrogène avec les groupements –OH de la silice.', answer: 'Le menthol est le plus polaire : son groupement –OH forme des liaisons hydrogène avec les groupements –OH de la silice. La force de rétention est forte, il est retenu et migre peu (R~f~ = 0,30).' },
          { text: 'On remplace la phase mobile par un mélange plus riche en acétate d’éthyle, plus polaire. Comment évoluent les R~f~ ? Justifie.', answer: 'Les R~f~ augmentent : une phase mobile plus polaire entraîne davantage les molécules polaires (la force d’entraînement augmente), elles migrent plus loin.' },
          { text: 'Un échantillon d’huile essentielle donne deux taches de R~f~ 0,30 et 0,60, déposées sur la même plaque que les trois étalons. Conclus.', answer: 'L’échantillon contient du menthol et de la menthone (mêmes R~f~ que les étalons sur la même plaque) ; le limonène n’est pas détecté.' },
          { text: 'S’agit-il ici d’une chromatographie analytique ou préparative ? Justifie.', answer: 'Analytique : le but est d’identifier les constituants de l’huile essentielle, avec de très petites quantités, sans les récupérer.' },
        ],
      },
      {
        title: 'Séparer et récupérer deux acides aminés sur colonne',
        duration: '35 min',
        skills: ['Expliquer', 'Interpréter', 'Critiquer'],
        context: 'On veut séparer un mélange d’acide aspartique (pHi = 2,8) et de lysine (pHi = 9,7) sur une colonne de résine échangeuse de cations (charges fixes négatives).',
        documents: [
          {
            label: 'Document 5',
            title: 'Procédure suivie',
            text: ['1. Équilibrer la résine avec un tampon pH 6.', '2. Déposer 0,5 mL du mélange au sommet de la résine.', '3. Laver avec le tampon pH 6 et recueillir les fractions 1 à 5 (2 mL chacune).', '4. Éluer avec un tampon pH 11 et recueillir les fractions 6 à 10 (2 mL chacune).', '5. Déposer une goutte de chaque fraction sur une plaque de silice et révéler à la ninhydrine.'],
          },
          {
            label: 'Document 6',
            title: 'Résultat de la détection (TP)',
            blocks: [
              {
                type: 'table',
                head: ['Fraction', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                rows: [['Tache violette', 'non', 'oui', 'oui', 'non', 'non', 'non', 'oui', 'oui', 'oui', 'non']],
              },
              { type: 'p', text: 'Une CCM des fractions 2-3 et 7-9 avec des étalons montre que les fractions 2-3 contiennent l’acide aspartique et les fractions 7-9 la lysine.' },
            ],
          },
          { label: 'Document 7', title: 'Le montage', image: IMG.colonne, caption: 'Colonne de résine échangeuse d’ions et fractions recueillies.', size: 'small' },
        ],
        questions: [
          { text: 'Indique la charge globale de chaque acide aminé à pH 6.', answer: 'Acide aspartique : pH 6 > pHi 2,8, charge négative. Lysine : pH 6 < pHi 9,7, charge positive.' },
          { text: 'Explique quel acide aminé est fixé sur la résine à pH 6, et par quel type de liaison.', answer: 'La lysine, chargée positivement, établit des liaisons ioniques avec les charges fixes négatives de la résine : elle est fixée. L’acide aspartique, chargé négativement, est repoussé par la résine et n’est pas retenu.' },
          { text: 'Relie ces explications aux résultats du document 6.', answer: 'L’acide aspartique, non fixé, sort pendant le lavage (fractions 2 et 3). La lysine, fixée, ne sort qu’après le changement de tampon (fractions 7 à 9).' },
          { text: 'Pourquoi le tampon pH 11 permet-il l’élution de la lysine ?', hint: 'Compare pH 11 au pHi de la lysine.', answer: 'À pH 11, le pH est supérieur au pHi de la lysine (9,7) : la lysine devient chargée négativement. Elle n’établit plus de liaisons ioniques avec la résine, elle est même repoussée : la force d’entraînement l’emporte et elle est éluée.' },
          { text: 'La séparation est-elle de bonne qualité ? Justifie.', answer: 'Oui : chaque acide aminé se trouve dans un groupe de fractions distinct (2-3 et 7-9), séparés par des fractions sans acide aminé (4 à 6). Les deux acides aminés sont récupérés séparément.' },
          { text: 'Un autre binôme retrouve de la lysine dans les fractions 2-3 et 7-9. Propose deux explications.', answer: 'La colonne était saturée (trop de mélange déposé par rapport à la capacité de la résine) ou le débit était trop rapide pour que toute la lysine se fixe. Une résine desséchée (chemins préférentiels) ou un tampon de lavage au mauvais pH peuvent aussi expliquer ce résultat.' },
          { text: 'Pourquoi parle-t-on ici de chromatographie préparative ?', answer: 'Parce que le but est de séparer et de récupérer chaque acide aminé dans des fractions distinctes, pour pouvoir les utiliser ensuite, et pas seulement de les identifier.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Une chromatographie sépare les constituants d’un mélange selon leur répartition entre une phase fixe et une phase mobile.',
      'La force de rétention (phase fixe) et la force d’entraînement (phase mobile) résultent de liaisons faibles : liaisons hydrogène, ioniques, interactions hydrophobes.',
      'En CCM sur silice, plus une molécule est polaire, plus elle est retenue et moins elle migre.',
      'R~f~ = d ÷ D ; on identifie une molécule par comparaison à des étalons déposés sur la même plaque.',
      'Un chromatogramme se critique : petites taches rondes, bien séparées, front horizontal ; attention à la limite de détection.',
      'La chromatographie d’échange d’ions est préparative : fixation par liaisons ioniques, lavage, puis élution par changement de pH ou de concentration en sels.',
    ],
    method: {
      title: 'Identifier une biomolécule par CCM',
      steps: [
        'Déposer, sur la même plaque, les étalons et l’échantillon.',
        'Après migration et révélation, mesurer D (ligne de dépôt → front) et d pour chaque tache (ligne de dépôt → centre de la tache).',
        'Calculer chaque R~f~ = d ÷ D.',
        'Comparer les R~f~ (et les couleurs) des taches de l’échantillon à ceux des étalons.',
        'Conclure prudemment : « contient très probablement… », en tenant compte de la limite de détection et de la qualité du chromatogramme.',
      ],
    },
    vocabulary: [
      { term: 'Chromatographie', definition: 'Technique de séparation fondée sur la répartition des molécules entre une phase fixe et une phase mobile.' },
      { term: 'Phase fixe', definition: 'Phase immobile qui retient plus ou moins les molécules (silice, résine).' },
      { term: 'Phase mobile', definition: 'Liquide qui se déplace et entraîne les molécules (éluant).' },
      { term: 'Liaison faible', definition: 'Liaison peu énergétique qui se fait et se défait : liaison hydrogène, liaison ionique, interaction hydrophobe.' },
      { term: 'Force de rétention', definition: 'Tendance d’une molécule à être retenue par la phase fixe.' },
      { term: 'Force d’entraînement', definition: 'Tendance d’une molécule à être entraînée par la phase mobile.' },
      { term: 'Chromatographie analytique', definition: 'Chromatographie qui sert à identifier les constituants d’un mélange.' },
      { term: 'Chromatographie préparative', definition: 'Chromatographie qui sert à séparer et récupérer les constituants d’un mélange.' },
      { term: 'Rapport frontal', definition: 'R~f~ = d ÷ D, rapport sans unité caractéristique d’une molécule dans des conditions données.' },
      { term: 'Étalon', definition: 'Solution d’une molécule connue déposée pour identifier par comparaison.' },
      { term: 'Révélation', definition: 'Traitement qui rend visibles les taches de molécules incolores (ninhydrine, UV, diiode…).' },
      { term: 'pH isoélectrique', definition: 'pH auquel la charge globale d’un acide aminé est nulle.' },
      { term: 'Résine échangeuse de cations', definition: 'Phase fixe portant des charges négatives, qui retient les molécules positives.' },
      { term: 'Élution', definition: 'Étape où l’on décroche les molécules fixées en changeant la phase mobile.' },
      { term: 'Fraction', definition: 'Volume d’éluat recueilli dans un tube, dans l’ordre de sortie de la colonne.' },
    ],
    mistakes: [
      { wrong: 'Mesurer les distances depuis le bas de la plaque.', right: 'On mesure les deux distances (d puis D) depuis la ligne de dépôt ; d va jusqu’au centre de la tache.' },
      { wrong: 'Comparer des R~f~ obtenus sur des plaques différentes.', right: 'On compare uniquement des taches de la même plaque, qui ont migré dans les mêmes conditions.' },
      { wrong: 'Tracer la ligne de dépôt au stylo, sous le niveau de l’éluant.', right: 'Au crayon à papier, et au-dessus du niveau de la phase mobile.' },
      { wrong: 'Penser qu’une molécule polaire migre loin sur la silice.', right: 'La silice est polaire : elle retient les molécules polaires, qui migrent peu.' },
      { wrong: 'Laisser la colonne se vider complètement entre deux étapes.', right: 'La résine ne doit jamais sécher : il reste toujours du liquide au-dessus d’elle.' },
      { wrong: 'Croire qu’une résine échangeuse de cations porte des charges positives.', right: 'Elle porte des charges fixes négatives et échange (retient) des cations, c’est-à-dire des molécules positives.' },
    ],
    quiz: [
      { question: 'En CCM, la phase fixe est généralement :', choices: ['Le solvant', 'Le gel de silice', 'La cuve en verre', 'Le révélateur'], answer: 1, explanation: 'La phase fixe est la fine couche de gel de silice ; le solvant est la phase mobile.' },
      { question: 'Sur une plaque, D = 10,0 cm et une tache est à d = 4,0 cm. Son R~f~ vaut :', choices: ['0,40', '2,5', '4,0', '0,04'], answer: 0, explanation: 'R~f~ = d ÷ D = 4,0 ÷ 10,0 = 0,40.' },
      { question: 'Sur une plaque de silice, la molécule qui migre le moins est la plus :', choices: ['Petite', 'Polaire', 'Colorée', 'Volatile'], answer: 1, explanation: 'La silice est polaire : elle retient fortement les molécules polaires.' },
      { question: 'Pourquoi trace-t-on la ligne de dépôt au crayon à papier ?', choices: ['Parce qu’il est plus précis', 'Parce que l’encre migrerait avec le solvant', 'Pour révéler les taches', 'Pour saturer la cuve'], answer: 1, explanation: 'Le graphite ne migre pas, alors que l’encre se dissout dans l’éluant et donne des taches parasites.' },
      { question: 'Pour identifier une molécule par CCM, on compare son R~f~ à celui :', choices: ['D’un étalon déposé sur la même plaque', 'Lu dans un livre', 'D’un étalon d’une autre séance', 'Du front du solvant'], answer: 0, explanation: 'Le R~f~ dépend des conditions : la comparaison n’est valable que sur la même plaque.' },
      { question: 'À pH 6, la lysine (pHi = 9,7) est :', choices: ['Chargée négativement', 'Neutre', 'Chargée positivement', 'Insoluble'], answer: 2, explanation: 'pH < pHi : la charge globale est positive.' },
      { question: 'Une résine échangeuse de cations retient :', choices: ['Les molécules chargées positivement', 'Les molécules chargées négativement', 'Toutes les molécules', 'Les molécules neutres'], answer: 0, explanation: 'Elle porte des charges fixes négatives qui établissent des liaisons ioniques avec les molécules positives.' },
      { question: 'L’étape qui décroche les molécules fixées sur la résine s’appelle :', choices: ['Le dépôt', 'Le lavage', 'L’élution', 'La révélation'], answer: 2, explanation: 'L’élution utilise une phase mobile de pH ou de concentration en sels différente pour décrocher les molécules fixées.' },
      { question: 'La chromatographie d’échange d’ions sur colonne est surtout :', choices: ['Analytique', 'Préparative', 'Électrophorétique', 'Qualitative uniquement'], answer: 1, explanation: 'Elle sert à séparer et récupérer les constituants dans des fractions distinctes.' },
    ],
    exercises: [
      {
        title: 'Analyse d’un hydrolysat de protéine',
        statement: ['On hydrolyse une protéine pour libérer ses acides aminés. Sur une même plaque, on dépose l’hydrolysat et trois étalons. Après migration (D = 9,0 cm) et révélation à la ninhydrine :', 'Étalons : acide aspartique d = 1,8 cm ; valine d = 4,5 cm ; phénylalanine d = 6,3 cm. Hydrolysat : taches à 1,8 cm, 4,5 cm et 7,2 cm.', 'a) Calcule les R~f~. b) Identifie les acides aminés de l’hydrolysat. c) Que peut-on dire de la tache à 7,2 cm ?'],
        answer: ['a) Acide aspartique : 0,20 ; valine : 0,50 ; phénylalanine : 0,70 ; taches de l’hydrolysat : 0,20 ; 0,50 ; 0,80.', 'b) L’hydrolysat contient de l’acide aspartique et de la valine (mêmes R~f~ que les étalons) ; pas de phénylalanine détectable.', 'c) La tache de R~f~ 0,80 correspond à un acide aminé qui n’a pas d’étalon sur la plaque : il faudrait refaire la CCM avec d’autres étalons pour l’identifier.'],
      },
      {
        title: 'Choisir le pH d’une séparation',
        statement: 'On veut séparer de la glycine (pHi = 6,0) et de la lysine (pHi = 9,7) sur une résine échangeuse de cations. On dispose de tampons à pH 3, pH 8 et pH 11. Quel tampon choisir pour la fixation et le lavage ? Lequel pour l’élution ? Justifie.',
        answer: ['Fixation et lavage à pH 8 : la glycine (pH > pHi) est chargée négativement et n’est pas retenue, elle sort au lavage ; la lysine (pH < pHi) est chargée positivement et se fixe sur la résine.', 'Élution à pH 11 : la lysine (pH > pHi) devient négative, elle se décroche et sort de la colonne.', 'Le tampon pH 3 ne convient pas : les deux acides aminés seraient positifs et se fixeraient tous les deux.'],
      },
      {
        title: 'Un chromatogramme à critiquer',
        statement: 'Un élève obtient un chromatogramme où toutes les taches sont restées très près de la ligne de dépôt (R~f~ inférieurs à 0,1). Que peut-on en conclure sur le choix de la phase mobile ? Que proposer ?',
        answer: 'La phase mobile n’est pas assez entraînante pour ces molécules : la force de rétention de la silice l’emporte largement. Il faut une phase mobile plus polaire (par exemple plus riche en solvant polaire), pour augmenter la force d’entraînement et obtenir des R~f~ entre 0,2 et 0,8.',
      },
    ],
    selfCheck: [
      'Je sais définir phase fixe, phase mobile, force de rétention et force d’entraînement.',
      'Je sais distinguer chromatographie analytique et préparative.',
      'Je sais associer la polarité des molécules à leur migration sur silice.',
      'Je sais réaliser une CCM en respectant ses points critiques.',
      'Je sais calculer un R~f~ et identifier une molécule par comparaison à des étalons.',
      'Je sais critiquer un chromatogramme et proposer des remèdes.',
      'Je sais expliquer la fixation par liaisons ioniques, le lavage et l’élution sur une résine échangeuse d’ions.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Chromatographie sur couche mince — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Chromatographie_sur_couche_mince' },
      { title: 'Chromatographie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Chromatographie' },
      { title: 'Chromatographie à échange d’ions — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Chromatographie_%C3%A0_%C3%A9change_d%27ions' },
      { title: 'Point isoélectrique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Point_iso%C3%A9lectrique' },
    ],
  },
};

export default lesson;
