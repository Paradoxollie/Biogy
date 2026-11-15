import { img } from '../media';
import drepanocytose from '../../../assets/courses/premiere/bba-2-diversite-fonctions/drepanocytose.webp';
import polyosides from '../../../assets/courses/premiere/bba-2-diversite-fonctions/polyosides.webp';
import amidonLugol from '../../../assets/courses/premiere/bba-2-diversite-fonctions/amidon-lugol.webp';
import niveaux from '../../../assets/courses/premiere/bba-2-diversite-fonctions/niveaux-structure.webp';
import liaisons from '../../../assets/courses/premiere/bba-2-diversite-fonctions/liaisons-3d.webp';
import blancOeuf from '../../../assets/courses/premiere/bba-2-diversite-fonctions/blanc-oeuf.webp';

const IMG = {
  drepanocytose: img(drepanocytose, 'Frottis sanguin coloré au microscope optique : hématies rondes et nombreuses hématies allongées en forme de faucille, un granulocyte au noyau violet.', 'micro', 1536, 1024),
  polyosides: img(polyosides, 'Schéma au crayon de trois polymères du glucose : amylose en hélice, amylopectine peu ramifiée, glycogène très ramifié ; les points de ramification sont en vert.', 'schema', 1400, 933),
  amidonLugol: img(amidonLugol, 'Microphotographie de grains d’amidon de pomme de terre colorés en bleu-violet foncé par le lugol, certains montrant des stries concentriques.', 'micro', 1536, 1024),
  niveaux: img(niveaux, 'Schéma au crayon des quatre niveaux de structure d’une protéine : chaîne d’acides aminés, hélice α et feuillet β, chaîne repliée, assemblage de quatre sous-unités.', 'schema', 1400, 933),
  liaisons: img(liaisons, 'Schéma au crayon d’une chaîne polypeptidique repliée montrant un pont disulfure, une liaison ionique, une liaison hydrogène et un cœur d’interactions hydrophobes.', 'schema', 1400, 933),
  blancOeuf: img(blancOeuf, 'Deux tubes à essai : à gauche du blanc d’œuf cru transparent, à droite du blanc d’œuf chauffé, blanc et solide ; un bain-marie en arrière-plan.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bba-2-diversite-fonctions',
  duration: 'Environ 4 séances (cours, modélisation moléculaire et travaux pratiques)',
  hook: {
    image: IMG.drepanocytose,
    question: 'Un seul acide aminé change sur les 146 d’une chaîne de l’hémoglobine… et les globules rouges prennent la forme de faucilles. Comment est-ce possible ?',
    text: 'Avec une vingtaine de « briques » seulement, le vivant fabrique des milliers de glucides et de protéines aux rôles très différents : réserve d’énergie, transport de l’oxygène, catalyse, défense… Le secret est dans l’ordre des briques, dans les liaisons qui les unissent et dans la forme finale de la molécule. Dans ce chapitre, tu découvres comment la structure d’une biomolécule détermine sa fonction, et pourquoi une petite modification peut tout changer.',
  },
  objectives: [
    'Identifier les oses qui composent le maltose, le lactose, le saccharose, l’amidon et le glycogène, et décrire la liaison osidique.',
    'Schématiser la structure primaire d’un peptide en faisant apparaître les liaisons peptidiques et les extrémités N-terminale et C-terminale.',
    'Identifier la cystéine, la valine, la sérine, la lysine et l’acide glutamique, et repérer un acide aminé hydrophobe dans une protéine.',
    'Identifier les liaisons qui stabilisent la structure tridimensionnelle d’une protéine et relier cette structure à sa fonction.',
    'Expliquer l’influence du pH et de la température sur la conformation des biomolécules (dénaturation).',
  ],
  prerequisites: [
    'Les oses, le D-glucose en représentation de Haworth (anomères α et β).',
    'La formule générique d’un acide α-aminé et les fonctions chimiques (chapitre « Glucides, protides, lipides »).',
    'Hydrophile, hydrophobe, liaison hydrogène.',
  ],
  program: [
    'Identifier dans le maltose, le lactose, le saccharose, l’amidon et le glycogène la nature du (des) ose(s).',
    'Schématiser la structure primaire d’un peptide en mettant en évidence la liaison peptidique.',
    'Identifier la cystéine, la valine, la sérine, la lysine et l’acide glutamique. Repérer un acide aminé hydrophobe au sein d’une protéine.',
    'Identifier au sein d’une protéine la nature des liaisons intervenant dans sa structure tridimensionnelle.',
    'Expliquer l’influence des paramètres physicochimiques sur la conformation des biomolécules.',
  ],

  course: {
    parts: [
      {
        title: 'Des oses aux osides : la liaison osidique',
        intro: 'Le sucre de table, le sucre du lait et le sucre du malt ne sont pas des oses mais des associations de deux oses.',
        blocks: [
          { type: 'definition', term: 'Oside', text: 'glucide dont l’**hydrolyse** libère des oses. Un **holoside** ne libère que des oses ; un hétéroside libère des oses et une partie non glucidique (ex. glycoprotéines).' },
          { type: 'definition', term: 'Liaison osidique', text: 'liaison covalente qui relie le **–OH anomérique** d’un ose (porté par le C1 d’un aldose, le C2 d’un cétose) à un groupe –OH d’un autre ose, avec **élimination d’une molécule d’eau**. On la note en précisant la forme (α ou β) de l’ose engagé par son carbone anomérique et les numéros des carbones reliés, par exemple **α(1→4)**.' },
          {
            type: 'formula',
            title: 'Formation et hydrolyse d’un diholoside',
            expression: 'ose + ose ⇄ diholoside + H~2~O',
            legend: [
              { symbol: '→', meaning: 'condensation : formation de la liaison osidique' },
              { symbol: '←', meaning: 'hydrolyse : coupure de la liaison (enzymes digestives, acide à chaud)' },
            ],
          },
          { type: 'p', text: 'Deux oses liés forment un **diholoside** (dimère). Quand des centaines ou des milliers d’oses sont liés, on obtient un **polyoside** (polymère).' },
          {
            type: 'table',
            caption: 'Les trois diholosides du programme',
            head: ['Diholoside', 'Oses constitutifs', 'Liaison osidique', 'Où le trouve-t-on ?'],
            rows: [
              ['Maltose', 'α-D-glucose + D-glucose', 'α(1→4) : C1 du premier glucose, C4 du second', 'Malt (orge germée) ; produit de la digestion de l’amidon'],
              ['Lactose', 'β-D-galactose + D-glucose', 'β(1→4) : C1 du galactose, C4 du glucose', 'Lait des mammifères (environ 50 g/L dans le lait de vache)'],
              ['Saccharose', 'α-D-glucose + β-D-fructose', 'α1↔β2 : C1 du glucose, C2 du fructose', 'Sucre de table, extrait de la betterave et de la canne à sucre'],
            ],
          },
          { type: 'example', title: 'digérer le lait', text: 'Dans l’intestin, une enzyme, la **lactase**, hydrolyse la liaison β(1→4) du lactose : lactose + H~2~O → galactose + glucose. Chez les personnes qui produisent peu de lactase à l’âge adulte, le lactose non digéré est fermenté par les bactéries du côlon : c’est l’**intolérance au lactose** (ballonnements, douleurs).' },
          { type: 'note', title: 'Une liaison qui engage deux carbones anomériques', text: 'Dans le saccharose, la liaison relie les deux carbones anomériques (C1 du glucose et C2 du fructose) : aucun –OH anomérique ne reste libre. C’est pourquoi le saccharose, contrairement au maltose et au lactose, ne donne pas de test positif à la liqueur de Fehling : il n’est pas **réducteur**.' },
          {
            type: 'retenir',
            items: [
              'Une liaison osidique relie le –OH anomérique d’un ose à un –OH d’un autre ose, avec libération d’eau ; l’hydrolyse la coupe.',
              'Maltose = glucose + glucose (α1→4) ; lactose = galactose + glucose (β1→4) ; saccharose = glucose + fructose (α1↔β2).',
              'Monomère → dimère (diholoside) → polymère (polyoside).',
            ],
          },
        ],
      },

      {
        title: 'Amidon et glycogène : deux polyosides de réserve',
        intro: 'Les végétaux et les animaux stockent le glucose sous forme de polymères : une réserve énorme, compacte et rapidement mobilisable.',
        blocks: [
          { type: 'definition', term: 'Polyoside', text: 'polymère formé de nombreux oses unis par des liaisons osidiques. L’amidon, le glycogène et la cellulose sont des polyosides formés **uniquement de D-glucose**.' },
          {
            type: 'compare',
            title: 'L’amidon, réserve des végétaux, est un mélange de deux molécules',
            columns: [
              { title: 'Amylose', subtitle: '20 à 30 % de l’amidon', items: ['Longue chaîne **non ramifiée** de glucoses unis par des liaisons **α(1→4)**.', 'La chaîne s’enroule en **hélice**.', 'C’est elle qui donne la couleur bleu-noir avec le lugol.'] },
              { title: 'Amylopectine', subtitle: '70 à 80 % de l’amidon', items: ['Chaînes de glucoses unis en **α(1→4)**.', '**Ramifications** par des liaisons **α(1→6)**, environ tous les 20 à 30 glucoses.', 'Molécule très grande, en forme d’arbre.'] },
            ],
          },
          { type: 'p', text: 'Le **glycogène** est la réserve de glucose des animaux et des champignons. Chez l’être humain, il est stocké surtout dans le **foie** et les **muscles**. Sa structure ressemble à celle de l’amylopectine, mais il est **beaucoup plus ramifié** (une ramification α(1→6) tous les 8 à 12 glucoses) et donc plus compact.' },
          { type: 'figure', image: IMG.polyosides, caption: 'Amidon (amylose et amylopectine) et glycogène : trois polymères du glucose qui diffèrent par leur forme et leur nombre de ramifications (en vert). Chaque hexagone représente un glucose ; représentation simplifiée, sans respecter le nombre réel d’unités.', size: 'wide' },
          {
            type: 'table',
            caption: 'Comparer amidon et glycogène',
            head: ['Caractère', 'Amidon', 'Glycogène'],
            rows: [
              ['Monomère', 'α-D-glucose', 'α-D-glucose'],
              ['Liaisons', 'α(1→4) et α(1→6) (amylopectine)', 'α(1→4) et α(1→6)'],
              ['Ramifications', 'Aucune (amylose) ou tous les 20 à 30 glucoses (amylopectine)', 'Tous les 8 à 12 glucoses'],
              ['Où ?', 'Grains dans les cellules végétales (tubercules, graines)', 'Granules dans les cellules du foie et des muscles'],
              ['Coloration au lugol', '**Bleu-noir**', '**Brun-rouge** (acajou)'],
            ],
          },
          { type: 'figure', image: IMG.amidonLugol, caption: 'Grains d’amidon de pomme de terre colorés par le lugol (eau iodée), observés au microscope optique (×400) : l’amidon prend une teinte bleu-violet foncé.', size: 'wide' },
          {
            type: 'list',
            title: 'Pourquoi ces structures sont-elles adaptées à la réserve ?',
            items: [
              'Des milliers de glucoses sont regroupés dans **une seule grosse molécule insoluble** : la cellule stocke beaucoup de glucose sans attirer d’eau par osmose.',
              'La forme compacte occupe peu de place.',
              'Les **nombreuses extrémités** des ramifications permettent à plusieurs enzymes de libérer des glucoses en même temps : le glycogène, très ramifié, fournit du glucose **très rapidement** (effort musculaire, jeûne).',
            ],
          },
          { type: 'example', title: 'la digestion de l’amidon', text: 'Dans la bouche et l’intestin, les **amylases** hydrolysent les liaisons α(1→4) de l’amidon et libèrent surtout du maltose ; la **maltase** de l’intestin hydrolyse ensuite le maltose en deux glucoses, qui sont absorbés.' },
          { type: 'note', title: 'Même monomère, autre liaison, autre fonction', text: 'La **cellulose**, constituant des parois végétales, est aussi un polymère du glucose, mais ses glucoses sont unis par des liaisons **β(1→4)**. Ses chaînes rectilignes s’associent par de nombreuses liaisons hydrogène en fibres très solides : c’est un polyoside de **structure**. L’être humain ne possède pas d’enzyme capable de couper ces liaisons : la cellulose forme les fibres alimentaires.' },
          {
            type: 'retenir',
            items: [
              'Amidon et glycogène sont des polymères d’α-D-glucose unis en α(1→4), ramifiés en α(1→6).',
              'Amidon = amylose (hélice non ramifiée) + amylopectine (ramifiée) ; glycogène = encore plus ramifié et compact.',
              'Lugol : amidon bleu-noir, glycogène brun-rouge.',
              'Grosses molécules insolubles et ramifiées : stockage compact, mobilisation rapide du glucose.',
            ],
          },
        ],
      },

      {
        title: 'Les protéines, des enchaînements d’acides aminés',
        intro: 'L’insuline compte 51 acides aminés, une chaîne d’hémoglobine en compte 146, la titine du muscle plus de 30 000 ! Toutes sont construites selon le même principe.',
        blocks: [
          { type: 'definition', term: 'Liaison peptidique', text: 'liaison covalente formée entre la fonction **acide carboxylique** d’un acide aminé et la fonction **amine** de l’acide aminé suivant, avec élimination d’une molécule d’eau. Elle forme une fonction **amide** : **–CO–NH–**.' },
          {
            type: 'formula',
            title: 'Formation d’un dipeptide',
            expression: 'H~2~N–CH(R~1~)–COOH + H~2~N–CH(R~2~)–COOH → H~2~N–CH(R~1~)–**CO–NH**–CH(R~2~)–COOH + H~2~O',
            legend: [
              { symbol: 'R~1~, R~2~', meaning: 'chaînes latérales des deux acides aminés' },
              { symbol: '–CO–NH–', meaning: 'liaison peptidique (fonction amide)' },
            ],
          },
          { type: 'p', text: 'Un enchaînement de quelques acides aminés est un **peptide** (dipeptide, tripeptide…) ; une longue chaîne est un **polypeptide**. On parle généralement de **protéine** au-delà d’une cinquantaine d’acides aminés. Une protéine peut comporter une ou plusieurs chaînes polypeptidiques.' },
          {
            type: 'compare',
            title: 'Une chaîne a toujours deux extrémités différentes',
            columns: [
              { title: 'Extrémité N-terminale', items: ['Premier acide aminé de la chaîne.', 'Sa fonction **amine** –NH~2~ est libre.', 'Par convention, on l’écrit **à gauche**.'] },
              { title: 'Extrémité C-terminale', items: ['Dernier acide aminé de la chaîne.', 'Sa fonction **acide –COOH** est libre.', 'On l’écrit **à droite**.'] },
            ],
          },
          { type: 'definition', term: 'Structure primaire', text: 'ordre (séquence) des acides aminés d’une chaîne polypeptidique, écrit de l’extrémité N-terminale vers l’extrémité C-terminale, avec les abréviations à trois lettres (Ser-Lys-Val) ou à une lettre (SKV). La structure primaire est maintenue par les liaisons peptidiques.' },
          {
            type: 'steps',
            title: 'Schématiser la structure primaire d’un tripeptide',
            items: [
              { title: 'Écrire le squelette', text: 'Répéter trois fois le motif –NH–CH(R)–CO– : H~2~N–CH(R~1~)–CO–NH–CH(R~2~)–CO–NH–CH(R~3~)–COOH.' },
              { title: 'Remplacer les R', text: 'Placer la chaîne latérale de chaque acide aminé, dans l’ordre de la séquence.' },
              { title: 'Repérer les liaisons peptidiques', text: 'Entourer chaque –CO–NH– : un peptide de _n_ acides aminés en compte **n − 1**.' },
              { title: 'Nommer les extrémités', text: 'Indiquer N-terminale à gauche (–NH~2~ libre) et C-terminale à droite (–COOH libre).' },
            ],
          },
          { type: 'example', title: 'le tripeptide Ser-Lys-Val', text: ['H~2~N–CH(CH~2~OH)–**CO–NH**–CH[(CH~2~)~4~–NH~2~]–**CO–NH**–CH[CH(CH~3~)~2~]–COOH', 'Sérine en position N-terminale, valine en position C-terminale, deux liaisons peptidiques (en gras).'] },
          { type: 'p', text: 'Les 20 acides aminés se distinguent par leur chaîne latérale. On les classe selon le comportement de cette chaîne vis-à-vis de l’eau. Le programme demande de savoir identifier cinq d’entre eux.' },
          {
            type: 'table',
            caption: 'Cinq acides aminés à identifier',
            head: ['Acide aminé', 'Abréviations', 'Chaîne latérale R', 'Classe', 'Au pH de la cellule (≈ 7)'],
            rows: [
              ['Valine', 'Val, V', '–CH(CH~3~)~2~', '**Apolaire, hydrophobe**', 'Non chargée'],
              ['Sérine', 'Ser, S', '–CH~2~–OH', 'Polaire non chargée (fonction alcool)', 'Non chargée ; liaisons hydrogène'],
              ['Cystéine', 'Cys, C', '–CH~2~–SH', 'Polaire, groupe thiol –SH', 'Non chargée ; peut former un **pont disulfure**'],
              ['Lysine', 'Lys, K', '–(CH~2~)~4~–NH~2~', 'Basique (fonction amine)', 'Chargée **positivement** : –NH~3~^+^'],
              ['Acide glutamique', 'Glu, E', '–CH~2~–CH~2~–COOH', 'Acide (fonction acide carboxylique)', 'Chargée **négativement** : –COO^−^'],
            ],
          },
          { type: 'definition', term: 'Acide aminé hydrophobe', text: 'acide aminé dont la chaîne latérale est **hydrocarbonée** (seulement C et H) : elle ne forme pas de liaisons hydrogène avec l’eau. Exemples : valine, leucine, isoleucine, alanine, phénylalanine.' },
          { type: 'note', title: 'Une diversité presque infinie', text: 'Avec 20 acides aminés possibles à chaque position, il existe 20 × 20 × 20 = 8 000 tripeptides différents, et 20^100^ (environ 10^130^) séquences possibles pour une chaîne de 100 acides aminés.' },
          {
            type: 'retenir',
            items: [
              'Liaison peptidique = –CO–NH– (fonction amide), formée entre le –COOH d’un acide aminé et le –NH~2~ du suivant, avec libération d’eau.',
              'Structure primaire = séquence des acides aminés, écrite de N-terminale (–NH~2~ libre) à C-terminale (–COOH libre).',
              'Valine : hydrophobe ; sérine : polaire (–OH) ; cystéine : –SH (ponts disulfure) ; lysine : chargée + ; acide glutamique : chargé −.',
            ],
          },
        ],
      },

      {
        title: 'De la séquence à la forme, de la forme à la fonction',
        intro: 'Une chaîne d’acides aminés ne reste pas étirée : elle se replie spontanément en une forme précise, indispensable à son rôle.',
        blocks: [
          {
            type: 'table',
            caption: 'Les quatre niveaux de structure d’une protéine',
            head: ['Niveau', 'Description', 'Liaisons qui le stabilisent'],
            rows: [
              ['Structure primaire', 'Séquence des acides aminés', 'Liaisons peptidiques (covalentes)'],
              ['Structure secondaire', 'Repliements locaux réguliers de la chaîne : **hélice α** (enroulement en ressort) et **feuillet β** (segments étirés côte à côte)', 'Liaisons hydrogène entre les C=O et les N–H de la chaîne principale'],
              ['Structure tertiaire', 'Repliement de toute la chaîne dans l’espace : forme tridimensionnelle', 'Liaisons entre chaînes latérales : liaisons hydrogène, ioniques, interactions hydrophobes, ponts disulfure'],
              ['Structure quaternaire', 'Association de plusieurs chaînes (sous-unités) ; n’existe que chez certaines protéines', 'Mêmes liaisons, entre chaînes différentes'],
            ],
          },
          { type: 'figure', image: IMG.niveaux, caption: 'Les quatre niveaux de structure d’une protéine. La structure quaternaire représentée (quatre sous-unités, deux à deux identiques) rappelle celle de l’hémoglobine.', size: 'wide' },
          { type: 'p', text: 'La **structure tridimensionnelle** (tertiaire et, le cas échéant, quaternaire) est stabilisée par quatre types de liaisons entre les chaînes latérales. À part le pont disulfure, ce sont des **liaisons faibles**, nombreuses mais faciles à rompre.' },
          {
            type: 'table',
            caption: 'Les liaisons de la structure tridimensionnelle',
            head: ['Liaison', 'Entre quels groupes ?', 'Exemple d’acides aminés', 'Force'],
            rows: [
              ['Pont disulfure', 'Deux groupes thiol –SH qui forment –S–S–', 'Cystéine + cystéine', 'Covalente (forte)'],
              ['Liaison ionique', 'Un groupe chargé – (–COO^−^) et un groupe chargé + (–NH~3~^+^)', 'Acide glutamique + lysine', 'Faible'],
              ['Liaison hydrogène', 'Un H lié à O ou N, et un atome O ou N', 'Sérine (–OH), chaîne principale', 'Faible'],
              ['Interactions hydrophobes', 'Chaînes latérales apolaires qui se regroupent à l’abri de l’eau', 'Valine, leucine, phénylalanine', 'Faibles'],
            ],
          },
          { type: 'figure', image: IMG.liaisons, caption: 'Les liaisons qui maintiennent le repliement d’une protéine. Les chaînes latérales hydrophobes (en vert) se regroupent au cœur de la molécule, loin de l’eau.', size: 'wide' },
          { type: 'p', text: 'Dans une protéine soluble, les acides aminés **hydrophobes** sont surtout regroupés **au cœur** de la molécule, tandis que les acides aminés polaires ou chargés sont exposés **en surface**, au contact de l’eau. La séquence (structure primaire) détermine donc le repliement : ==la séquence détermine la forme, et la forme détermine la fonction==.' },
          { type: 'definition', term: 'Protéine fonctionnelle', text: 'protéine qui a acquis sa structure tridimensionnelle correcte et peut assurer son rôle : fixer une molécule précise (site de fixation), catalyser une réaction (site actif d’une enzyme), s’assembler avec d’autres protéines…' },
          {
            type: 'cards',
            items: [
              { title: 'Catalyse', text: 'Les **enzymes** accélèrent les réactions : amylase, lactase, pepsine.', tone: 'green' },
              { title: 'Transport', text: 'L’**hémoglobine** transporte le dioxygène dans le sang.', tone: 'red' },
              { title: 'Structure', text: 'Le **collagène** (peau, tendons, os) et la **kératine** (cheveux, ongles) forment des fibres résistantes.', tone: 'yellow' },
              { title: 'Défense', text: 'Les **anticorps** reconnaissent et neutralisent les éléments étrangers.', tone: 'blue' },
              { title: 'Communication', text: 'Des hormones (**insuline**) et des **récepteurs** transmettent des messages.', tone: 'white' },
              { title: 'Mouvement', text: 'L’**actine** et la **myosine** permettent la contraction des muscles.', tone: 'green' },
            ],
          },
          { type: 'example', title: 'l’hémoglobine et la drépanocytose', text: ['L’hémoglobine est formée de **quatre chaînes** (deux chaînes α de 141 acides aminés et deux chaînes β de 146 acides aminés), chacune associée à un groupement hème contenant du fer qui fixe le dioxygène.', 'Dans la **drépanocytose**, maladie génétique héréditaire, le 6^e^ acide aminé des chaînes β est une **valine** (hydrophobe) au lieu d’un **acide glutamique** (chargé, hydrophile). Lorsque l’hémoglobine a libéré son dioxygène, cette valine exposée en surface s’associe par interactions hydrophobes à une autre molécule d’hémoglobine : les molécules s’empilent en longues fibres qui déforment le globule rouge en **faucille**.'] },
          {
            type: 'retenir',
            items: [
              'Quatre niveaux : primaire (séquence), secondaire (hélice α, feuillet β), tertiaire (repliement de la chaîne), quaternaire (plusieurs chaînes).',
              'La structure tridimensionnelle est stabilisée par des liaisons hydrogène, des liaisons ioniques, des interactions hydrophobes (faibles) et des ponts disulfure (covalents).',
              'Les acides aminés hydrophobes sont au cœur des protéines solubles, les acides aminés polaires en surface.',
              'La séquence détermine la forme, la forme détermine la fonction : une seule substitution peut modifier la fonction (drépanocytose).',
            ],
          },
        ],
      },

      {
        title: 'pH, température et dénaturation',
        intro: 'Quand tu fais cuire un œuf, le blanc transparent devient blanc et solide, et il ne redevient jamais liquide. Ses protéines ont été dénaturées.',
        blocks: [
          { type: 'definition', term: 'Dénaturation', text: 'perte de la structure tridimensionnelle (secondaire, tertiaire et quaternaire) d’une protéine, due à la rupture des **liaisons faibles**, **sans rupture des liaisons peptidiques** : la structure primaire est conservée. Une protéine dénaturée perd sa fonction.' },
          { type: 'figure', image: IMG.blancOeuf, caption: 'Blanc d’œuf cru (à gauche) et blanc d’œuf chauffé au bain-marie (à droite) : la chaleur dénature les protéines, qui se déplient et s’agglomèrent.', size: 'wide' },
          {
            type: 'compare',
            title: 'Deux paramètres physicochimiques',
            columns: [
              { title: 'La température', items: ['La chaleur augmente l’agitation des molécules et **rompt les liaisons faibles**.', 'Au-delà d’une **température limite**, propre à chaque protéine, la protéine est dénaturée.', 'Le froid ralentit l’activité des protéines mais ne les dénature généralement pas : on conserve les enzymes au réfrigérateur ou au congélateur.'] },
              { title: 'Le pH', items: ['Le pH modifie la charge des chaînes latérales : –COO^−^ devient –COOH en milieu acide, –NH~3~^+^ devient –NH~2~ en milieu basique.', 'Les **liaisons ioniques** et certaines liaisons hydrogène sont alors rompues.', 'En dehors de l’intervalle délimité par les **pH limites**, la protéine est dénaturée.'] },
            ],
          },
          {
            type: 'flow',
            title: 'De la cause à la conséquence',
            steps: [
              { title: 'Chaleur ou pH extrême', text: 'agitation, changement de charges' },
              { title: 'Rupture des liaisons faibles', text: 'hydrogène, ioniques, hydrophobes' },
              { title: 'Perte de la forme 3D', text: 'la chaîne se déplie' },
              { title: 'Perte de la fonction', text: 'site actif ou de fixation déformé' },
            ],
          },
          {
            type: 'table',
            caption: 'Chaque protéine a ses conditions de fonctionnement',
            head: ['Enzyme', 'Lieu d’action', 'pH optimal (environ)'],
            rows: [
              ['Pepsine', 'Estomac', '2'],
              ['Amylase salivaire', 'Bouche', '7'],
              ['Trypsine', 'Intestin grêle', '8'],
            ],
          },
          { type: 'p', text: 'La dénaturation est souvent **irréversible** (cuisson). Elle peut être **réversible** lorsque les conditions redeviennent favorables avant que les chaînes dépliées ne s’agglomèrent : la protéine retrouve alors spontanément sa forme, ce qui montre que la séquence suffit à déterminer le repliement.' },
          { type: 'warning', title: 'Au laboratoire et en santé', text: ['La stérilisation à l’autoclave (121 °C) et la désinfection par l’éthanol à 70 % détruisent les micro-organismes notamment en dénaturant leurs protéines.', 'Une fièvre supérieure à 41 °C est dangereuse : certaines protéines humaines commencent à se dénaturer.', 'Une enzyme se conserve au froid et s’utilise à pH contrôlé (solution tampon).'] },
          { type: 'note', title: 'Et les autres biomolécules ?', text: 'Les acides nucléiques sont eux aussi stabilisés par des liaisons faibles : vers 90 °C, les deux brins de l’ADN se séparent. Ce phénomène est étudié dans le chapitre « Les acides nucléiques ».' },
          {
            type: 'retenir',
            items: [
              'Dénaturation = perte de la structure 3D par rupture des liaisons faibles ; les liaisons peptidiques ne sont pas rompues.',
              'La chaleur (au-delà de la température limite) et les pH extrêmes (au-delà des pH limites) dénaturent les protéines.',
              'Une protéine dénaturée perd sa fonction ; la dénaturation est souvent irréversible.',
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
        title: 'Identifier les oses d’un diholoside',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Identifier', 'Raisonner'],
        context: 'En TP, on hydrolyse trois diholosides (maltose, lactose, saccharose) en milieu acide à chaud. Les oses libérés sont séparés par chromatographie sur couche mince, à côté de trois témoins (glucose, galactose, fructose).',
        documents: [
          {
            label: 'Document 1',
            title: 'Résultats de la chromatographie après révélation',
            blocks: [
              {
                type: 'table',
                head: ['Dépôt', 'Taches observées'],
                rows: [
                  ['Témoin glucose', 'Une tache (hauteur du glucose)'],
                  ['Témoin galactose', 'Une tache (hauteur du galactose)'],
                  ['Témoin fructose', 'Une tache (hauteur du fructose)'],
                  ['Hydrolysat de maltose', 'Une seule tache, à la hauteur du glucose'],
                  ['Hydrolysat de lactose', 'Deux taches, aux hauteurs du glucose et du galactose'],
                  ['Hydrolysat de saccharose', 'Deux taches, aux hauteurs du glucose et du fructose'],
                ],
              },
            ],
            source: 'Résultats de TP',
          },
        ],
        questions: [
          { text: 'Pourquoi faut-il hydrolyser les diholosides avant la chromatographie ?', answer: 'Pour couper la liaison osidique et libérer les oses qui les constituent : on peut alors identifier ces oses en les comparant aux témoins.' },
          { text: 'Identifie les oses constitutifs de chaque diholoside.', hint: 'Une tache à la même hauteur qu’un témoin correspond au même ose.', answer: 'Maltose : glucose uniquement (deux glucoses). Lactose : glucose et galactose. Saccharose : glucose et fructose.' },
          { text: 'Le maltose ne donne qu’une seule tache alors qu’il est formé de deux oses. Explique.', answer: 'Ses deux oses sont identiques (deux D-glucoses) : ils migrent à la même hauteur et ne forment qu’une seule tache.' },
          { text: 'Écris l’équation d’hydrolyse du lactose et nomme l’enzyme qui la réalise dans l’intestin.', answer: 'Lactose + H~2~O → D-galactose + D-glucose. Dans l’intestin, cette hydrolyse est catalysée par la lactase.' },
          { text: 'Le lactose, le maltose et le saccharose sont-ils des holosides ? Justifie.', answer: 'Oui : leur hydrolyse ne libère que des oses (aucune partie non glucidique). Ce sont des diholosides.' },
        ],
      },
      {
        title: 'Amidon et glycogène : des réserves bien construites',
        duration: '25 min',
        skills: ['Observer', 'Comparer', 'Relier structure et fonction'],
        context: 'On compare la réserve de glucose d’un tubercule de pomme de terre et celle du foie humain.',
        documents: [
          { label: 'Document 2', title: 'Grains d’amidon de pomme de terre après ajout de lugol (×400)', image: IMG.amidonLugol, caption: 'Grains d’amidon colorés par le lugol.' },
          { label: 'Document 3', title: 'Structure de trois polymères du glucose', image: IMG.polyosides, caption: 'Représentation simplifiée de l’amylose, de l’amylopectine et du glycogène.' },
          {
            label: 'Document 4',
            title: 'Quelques données',
            text: ['Un foie adulte contient environ 100 g de glycogène, utilisés pour maintenir la glycémie entre les repas. Les muscles en contiennent environ 400 g, utilisés pendant l’effort.', 'Les enzymes qui libèrent le glucose du glycogène agissent à partir des extrémités des chaînes.'],
          },
        ],
        questions: [
          { text: 'Quel test met en évidence l’amidon ? Décris le résultat visible dans le document 2.', answer: 'Le test au lugol (eau iodée) : les grains d’amidon se colorent en bleu-violet foncé (bleu-noir), alors que le fond reste jaune-brun, couleur du lugol.' },
          { text: 'Quel ose obtient-on par hydrolyse complète de l’amidon et du glycogène ? Quels types de liaisons sont coupés ?', answer: 'On obtient uniquement du D-glucose. Il faut couper les liaisons osidiques α(1→4) des chaînes et α(1→6) des ramifications.' },
          { text: 'À l’aide du document 3, compare la structure de l’amylopectine et celle du glycogène.', answer: 'Les deux sont des chaînes de glucoses ramifiées. Le glycogène est beaucoup plus ramifié (ramification tous les 8 à 12 glucoses contre 20 à 30 pour l’amylopectine) et plus compact.' },
          { text: 'Explique en quoi la forte ramification du glycogène est adaptée à une libération rapide de glucose.', hint: 'Où les enzymes agissent-elles (document 4) ?', answer: 'Les enzymes agissent à partir des extrémités des chaînes. Plus une molécule est ramifiée, plus elle possède d’extrémités : de nombreuses enzymes peuvent détacher des glucoses en même temps, ce qui permet de fournir rapidement du glucose au muscle ou au sang.' },
          { text: 'Pourquoi est-il avantageux de stocker le glucose sous forme d’un polymère insoluble plutôt que sous forme de glucose libre ?', answer: 'Une seule grosse molécule insoluble regroupe des milliers de glucoses : elle n’attire presque pas d’eau par osmose et prend peu de place. Autant de glucose libre dissous ferait entrer beaucoup d’eau dans la cellule.' },
        ],
      },
      {
        title: 'Écrire un peptide et repérer ses liaisons',
        duration: '25 min',
        skills: ['Représenter', 'Identifier', 'Calculer'],
        context: 'On étudie un petit peptide de séquence Cys-Glu-Val-Lys.',
        documents: [
          {
            label: 'Document 5',
            title: 'Chaînes latérales de quelques acides aminés',
            blocks: [
              {
                type: 'table',
                head: ['Acide aminé', 'Chaîne latérale R'],
                rows: [
                  ['Cystéine (Cys)', '–CH~2~–SH'],
                  ['Acide glutamique (Glu)', '–CH~2~–CH~2~–COOH'],
                  ['Valine (Val)', '–CH(CH~3~)~2~'],
                  ['Lysine (Lys)', '–(CH~2~)~4~–NH~2~'],
                  ['Sérine (Ser)', '–CH~2~–OH'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Écris la formule semi-développée du tétrapeptide Cys-Glu-Val-Lys.', hint: 'Squelette : H~2~N–CH(R~1~)–CO–NH–CH(R~2~)–CO–NH–CH(R~3~)–CO–NH–CH(R~4~)–COOH.', answer: 'H~2~N–CH(CH~2~–SH)–CO–NH–CH(CH~2~–CH~2~–COOH)–CO–NH–CH[CH(CH~3~)~2~]–CO–NH–CH[(CH~2~)~4~–NH~2~]–COOH.' },
          { text: 'Combien ce peptide compte-t-il de liaisons peptidiques ? Indique ses extrémités.', answer: 'Trois liaisons peptidiques (4 − 1). L’extrémité N-terminale est la cystéine (–NH~2~ libre), l’extrémité C-terminale est la lysine (–COOH libre).' },
          { text: 'Classe les quatre acides aminés du peptide selon leur chaîne latérale. Lequel est hydrophobe ?', answer: 'Cystéine : polaire, groupe thiol –SH. Acide glutamique : acide, chargé négativement à pH 7. Valine : apolaire, hydrophobe. Lysine : basique, chargée positivement à pH 7. Le seul hydrophobe est la valine (chaîne uniquement hydrocarbonée).' },
          { text: 'Dans une protéine repliée, quelle liaison peut s’établir entre la chaîne latérale de l’acide glutamique et celle de la lysine ? Et entre deux cystéines ?', answer: 'Entre l’acide glutamique (–COO^−^) et la lysine (–NH~3~^+^) : une liaison ionique. Entre deux cystéines : un pont disulfure –S–S–, liaison covalente.' },
          { text: 'Le peptide Lys-Val-Glu-Cys est-il identique au peptide étudié ? Justifie.', answer: 'Non : il contient les mêmes acides aminés mais dans un autre ordre. Sa structure primaire est différente : l’extrémité N-terminale est la lysine et l’extrémité C-terminale la cystéine.' },
        ],
      },
      {
        title: 'La drépanocytose : un acide aminé change tout',
        duration: '30 min',
        skills: ['Comparer des séquences', 'Expliquer', 'Argumenter'],
        context: 'La drépanocytose est la maladie génétique la plus fréquente en France ; elle fait l’objet d’un dépistage à la naissance. Elle touche l’hémoglobine, protéine des globules rouges.',
        documents: [
          { label: 'Document 6', title: 'Frottis sanguin d’une personne atteinte de drépanocytose', image: IMG.drepanocytose, caption: 'Frottis coloré observé au microscope optique (×1 000).' },
          {
            label: 'Document 7',
            title: 'Début de la séquence de la chaîne β de l’hémoglobine',
            blocks: [
              {
                type: 'table',
                head: ['Position', '1', '2', '3', '4', '5', '6', '7', '8'],
                rows: [
                  ['Hémoglobine A (normale)', 'Val', 'His', 'Leu', 'Thr', 'Pro', 'Glu', 'Glu', 'Lys'],
                  ['Hémoglobine S (drépanocytose)', 'Val', 'His', 'Leu', 'Thr', 'Pro', 'Val', 'Glu', 'Lys'],
                ],
              },
            ],
            source: 'Séquence de référence de la chaîne β humaine',
          },
          {
            label: 'Document 8',
            title: 'Le comportement de l’hémoglobine S',
            text: ['Lorsqu’elles ont libéré leur dioxygène (dans les capillaires des tissus), les molécules d’hémoglobine S s’associent les unes aux autres et forment de longues fibres rigides. Les globules rouges se déforment en faucille, deviennent rigides, se bloquent dans les petits vaisseaux et sont détruits plus vite que les globules rouges normaux.', 'Conséquences : crises douloureuses, anémie, infections plus fréquentes.'],
          },
        ],
        questions: [
          { text: 'Décris les globules rouges du document 6.', answer: 'À côté de globules rouges ronds (disques à centre plus clair), on observe de nombreux globules rouges allongés, courbés, aux extrémités pointues : en forme de faucille.' },
          { text: 'Compare les deux séquences du document 7. Quelle différence relèves-tu ?', answer: 'Les séquences sont identiques sauf en position 6 : l’acide glutamique (Glu) de l’hémoglobine A est remplacé par une valine (Val) dans l’hémoglobine S.' },
          { text: 'Compare les propriétés des chaînes latérales de ces deux acides aminés.', hint: 'Relis le tableau des cinq acides aminés à connaître.', answer: 'L’acide glutamique a une chaîne latérale acide, chargée négativement à pH 7 (–COO^−^), donc hydrophile. La valine a une chaîne hydrocarbonée –CH(CH~3~)~2~, apolaire, donc hydrophobe.' },
          { text: 'Propose une explication à l’association des molécules d’hémoglobine S (HbS) en fibres.', hint: 'L’acide aminé 6 est situé à la surface de la protéine, au contact de l’eau.', answer: 'En surface, la valine hydrophobe ne peut pas interagir avec l’eau. Elle établit des interactions hydrophobes avec une zone hydrophobe d’une autre molécule d’hémoglobine S. Les molécules s’empilent ainsi les unes sur les autres et forment des fibres.' },
          { text: 'Rédige un bilan reliant la structure de l’hémoglobine S (HbS) à ses conséquences, de l’échelle moléculaire à l’échelle de l’organisme.', answer: 'Un seul acide aminé change dans la structure primaire de la chaîne β (Glu → Val en position 6). Cette valine hydrophobe en surface provoque l’association des molécules d’hémoglobine en fibres quand elles ont libéré leur dioxygène. Les globules rouges se déforment en faucille et deviennent rigides : ils bouchent les petits vaisseaux (crises douloureuses) et sont détruits plus vite (anémie). La structure d’une protéine conditionne donc sa fonction.' },
        ],
      },
      {
        title: 'Dénaturer une enzyme par la chaleur',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Interpréter', 'Argumenter'],
        context: 'L’amylase salivaire hydrolyse l’amidon. En TP, on place pendant 10 min des tubes de solution d’amylase à différentes températures, puis on les ramène tous à 37 °C, on ajoute de l’empois d’amidon et, 10 min plus tard, on teste le contenu au lugol.',
        documents: [
          { label: 'Document 9', title: 'Un exemple de dénaturation', image: IMG.blancOeuf, caption: 'Blanc d’œuf avant et après chauffage.' },
          {
            label: 'Document 10',
            title: 'Résultats du test au lugol',
            blocks: [
              {
                type: 'table',
                head: ['Température du traitement préalable de l’amylase', 'Couleur avec le lugol après 10 min à 37 °C'],
                rows: [
                  ['0 °C', 'Jaune-brun'],
                  ['20 °C', 'Jaune-brun'],
                  ['37 °C', 'Jaune-brun'],
                  ['60 °C', 'Violet-brun'],
                  ['80 °C', 'Bleu-noir'],
                  ['100 °C', 'Bleu-noir'],
                  ['Témoin sans amylase', 'Bleu-noir'],
                ],
              },
            ],
            source: 'Résultats de TP',
          },
        ],
        questions: [
          { text: 'Que signifient les couleurs jaune-brun et bleu-noir obtenues avec le lugol ?', answer: 'Jaune-brun (couleur du lugol) : il n’y a plus d’amidon, il a été hydrolysé par l’amylase. Bleu-noir : l’amidon est toujours présent, il n’a pas été hydrolysé.' },
          { text: 'À quoi sert le tube témoin sans amylase ?', answer: 'Il montre que, sans amylase, l’amidon reste intact pendant l’expérience (bleu-noir) : la disparition de l’amidon dans les autres tubes est donc bien due à l’amylase.' },
          { text: 'Interprète les résultats : après quel traitement l’amylase est-elle encore active ? inactive ?', answer: 'Après un passage à 0, 20 ou 37 °C, l’amylase est active (amidon hydrolysé). Après 60 °C, elle n’est plus que partiellement active. Après 80 ou 100 °C, elle est inactive, même ramenée à 37 °C.' },
          { text: 'Explique, à l’échelle moléculaire, l’absence d’activité après un traitement à 80 °C.', hint: 'Quelles liaisons la chaleur rompt-elle ?', answer: 'La chaleur a rompu les liaisons faibles (liaisons hydrogène, ioniques, interactions hydrophobes) qui maintiennent la structure tridimensionnelle de l’amylase. L’enzyme est dénaturée : son site actif est déformé, elle ne peut plus fixer ni hydrolyser l’amidon. La dénaturation est irréversible puisque le retour à 37 °C ne rétablit pas l’activité.' },
          { text: 'Le traitement à 0 °C ne détruit pas l’activité. Quelle conséquence pratique en tire-t-on au laboratoire ?', answer: 'Le froid ne dénature pas l’enzyme : on peut conserver les enzymes au froid (réfrigérateur, congélateur) sans perdre leur activité, puis les utiliser à leur température optimale.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Une liaison osidique relie le –OH anomérique d’un ose à un –OH d’un autre ose, avec libération d’eau ; l’hydrolyse la coupe.',
      'Maltose = 2 glucoses ; lactose = galactose + glucose ; saccharose = glucose + fructose. Amidon et glycogène sont des polymères ramifiés d’α-D-glucose, adaptés à la réserve.',
      'La liaison peptidique –CO–NH– unit les acides aminés ; la structure primaire est la séquence, écrite de l’extrémité N-terminale à l’extrémité C-terminale.',
      'Les chaînes latérales déterminent les propriétés : valine hydrophobe, sérine polaire, cystéine (ponts disulfure), lysine chargée +, acide glutamique chargé −.',
      'La structure 3D est stabilisée par des liaisons hydrogène, ioniques, des interactions hydrophobes et des ponts disulfure ; elle conditionne la fonction.',
      'La chaleur et les pH extrêmes rompent les liaisons faibles : la protéine est dénaturée et perd sa fonction.',
    ],
    method: {
      title: 'Expliquer une relation structure-fonction',
      steps: [
        'Décrire la structure à l’échelle moléculaire (monomères, liaisons, ramifications ou séquence).',
        'Identifier la propriété qui en découle (solubilité, compacité, charges, zones hydrophobes, forme du site).',
        'Relier cette propriété à la fonction biologique (réserve, transport, catalyse…).',
        'Si une modification est décrite (mutation, chaleur, pH), suivre la même chaîne : structure modifiée → propriété modifiée → fonction modifiée.',
      ],
    },
    vocabulary: [
      { term: 'Oside', definition: 'Glucide dont l’hydrolyse libère des oses.' },
      { term: 'Holoside', definition: 'Oside dont l’hydrolyse ne libère que des oses.' },
      { term: 'Liaison osidique', definition: 'Liaison entre le –OH anomérique d’un ose et un –OH d’un autre ose, formée avec libération d’eau.' },
      { term: 'Polyoside', definition: 'Polymère d’oses (amidon, glycogène, cellulose).' },
      { term: 'Ramification', definition: 'Départ d’une chaîne latérale sur une chaîne d’oses, par une liaison α(1→6) dans l’amidon et le glycogène.' },
      { term: 'Liaison peptidique', definition: 'Liaison amide –CO–NH– entre deux acides aminés.' },
      { term: 'Structure primaire', definition: 'Séquence des acides aminés d’une chaîne polypeptidique.' },
      { term: 'Extrémité N-terminale', definition: 'Début de la chaîne : acide aminé dont la fonction amine est libre.' },
      { term: 'Extrémité C-terminale', definition: 'Fin de la chaîne : acide aminé dont la fonction acide carboxylique est libre.' },
      { term: 'Pont disulfure', definition: 'Liaison covalente –S–S– entre deux cystéines.' },
      { term: 'Interactions hydrophobes', definition: 'Regroupement des chaînes latérales apolaires à l’abri de l’eau.' },
      { term: 'Liaison ionique', definition: 'Attraction entre deux groupes de charges opposées (–COO^−^ et –NH~3~^+^).' },
      { term: 'Structure tridimensionnelle', definition: 'Forme de la protéine dans l’espace (structures secondaire, tertiaire et quaternaire).' },
      { term: 'Dénaturation', definition: 'Perte de la structure 3D par rupture des liaisons faibles, sans rupture des liaisons peptidiques.' },
      { term: 'Température limite / pH limite', definition: 'Valeurs au-delà desquelles une protéine est dénaturée.' },
    ],
    mistakes: [
      { wrong: 'Dire que le saccharose est formé de deux glucoses.', right: 'Saccharose = glucose + fructose ; c’est le maltose qui est formé de deux glucoses.' },
      { wrong: 'Confondre amidon et glycogène.', right: 'Tous deux sont des polymères ramifiés du glucose, mais l’amidon est la réserve des végétaux (bleu-noir au lugol) et le glycogène celle des animaux, plus ramifié (brun-rouge au lugol).' },
      { wrong: 'Écrire une séquence en commençant par l’extrémité C-terminale.', right: 'Par convention, une séquence s’écrit de l’extrémité N-terminale (à gauche) vers l’extrémité C-terminale (à droite).' },
      { wrong: 'Penser que la dénaturation coupe la protéine en acides aminés.', right: 'La dénaturation rompt les liaisons faibles ; les liaisons peptidiques restent intactes. C’est l’hydrolyse qui coupe les liaisons peptidiques.' },
      { wrong: 'Dire que le pont disulfure est une liaison faible.', right: 'Le pont disulfure est une liaison covalente, forte ; les liaisons hydrogène, ioniques et hydrophobes sont faibles.' },
      { wrong: 'Croire que le froid dénature les enzymes.', right: 'Le froid ralentit leur activité, mais elles redeviennent actives à leur température optimale.' },
    ],
    quiz: [
      { question: 'L’hydrolyse du lactose libère :', choices: ['deux glucoses', 'du glucose et du fructose', 'du galactose et du glucose', 'du galactose et du fructose'], answer: 2, explanation: 'Le lactose est formé d’un β-D-galactose et d’un D-glucose unis par une liaison β(1→4).' },
      { question: 'La liaison osidique se forme :', choices: ['entre deux groupes –NH~2~', 'entre deux atomes de soufre', 'sans libération d’eau', 'entre le –OH anomérique d’un ose et un –OH d’un autre ose'], answer: 3, explanation: 'Elle relie le –OH anomérique d’un ose à un –OH d’un autre ose, avec élimination d’une molécule d’eau.' },
      { question: 'Le glycogène se distingue de l’amylopectine par :', choices: ['son monomère, le fructose', 'l’absence de ramifications', 'des ramifications plus nombreuses', 'des liaisons β(1→4)'], answer: 2, explanation: 'Même monomère (α-D-glucose) et mêmes liaisons, mais une ramification tous les 8 à 12 glucoses au lieu de 20 à 30.' },
      { question: 'Une liaison peptidique correspond à la fonction :', choices: ['amide', 'ester', 'cétone', 'alcool'], answer: 0, explanation: 'La liaison peptidique –CO–NH– est une fonction amide.' },
      { question: 'Un peptide de 10 acides aminés contient :', choices: ['10 liaisons peptidiques', '11 liaisons peptidiques', '20 liaisons peptidiques', '9 liaisons peptidiques'], answer: 3, explanation: 'Un peptide de _n_ acides aminés possède _n_ − 1 liaisons peptidiques.' },
      { question: 'Quel acide aminé possède une chaîne latérale hydrophobe ?', choices: ['La sérine', 'La lysine', 'La valine', 'L’acide glutamique'], answer: 2, explanation: 'La chaîne de la valine, –CH(CH~3~)~2~, est uniquement hydrocarbonée : elle est apolaire.' },
      { question: 'Entre une lysine et un acide glutamique, il peut s’établir :', choices: ['un pont disulfure', 'une liaison peptidique de structure tertiaire', 'une liaison ionique', 'une liaison osidique'], answer: 2, explanation: 'À pH 7, la lysine porte –NH~3~^+^ et l’acide glutamique –COO^−^ : ils s’attirent (liaison ionique).' },
      { question: 'L’hélice α et le feuillet β appartiennent à la structure :', choices: ['primaire', 'secondaire', 'tertiaire', 'quaternaire'], answer: 1, explanation: 'Ce sont des repliements locaux stabilisés par des liaisons hydrogène de la chaîne principale : structure secondaire.' },
      { question: 'Lors de la dénaturation d’une protéine par la chaleur :', choices: ['les liaisons faibles sont rompues', 'les liaisons peptidiques sont coupées', 'la séquence est modifiée', 'la protéine devient plus active'], answer: 0, explanation: 'La chaleur rompt les liaisons faibles ; la structure primaire est conservée mais la forme 3D et la fonction sont perdues.' },
      { question: 'Dans la drépanocytose, la valine qui remplace l’acide glutamique :', choices: ['forme un pont disulfure', 'crée une zone hydrophobe en surface de l’hémoglobine', 'coupe la chaîne β', 'fixe davantage de dioxygène'], answer: 1, explanation: 'La valine hydrophobe en surface permet l’association des molécules d’hémoglobine S (HbS) en fibres par interactions hydrophobes.' },
    ],
    exercises: [
      {
        title: 'Digestion de l’amidon',
        statement: ['Un élève mâche longuement un morceau de pain (riche en amidon) et constate qu’il prend un goût sucré.', 'a) Quelle enzyme est responsable ? b) Quelles liaisons coupe-t-elle, et quel diholoside libère-t-elle ? c) Quelle enzyme intestinale termine la digestion de ce diholoside, et en quoi ?'],
        answer: ['a) L’amylase salivaire.', 'b) Elle hydrolyse les liaisons osidiques α(1→4) de l’amidon et libère surtout du maltose, au goût sucré.', 'c) La maltase de l’intestin hydrolyse le maltose en deux molécules de D-glucose, absorbées dans le sang.'],
      },
      {
        title: 'Structure primaire',
        statement: 'Le peptide Ser-Val-Cys est formé de trois acides aminés. a) Écris sa formule semi-développée. b) Entoure les liaisons peptidiques et nomme les extrémités. c) Quel acide aminé de ce peptide pourrait participer à un pont disulfure dans une protéine ?',
        answer: ['a) H~2~N–CH(CH~2~OH)–CO–NH–CH[CH(CH~3~)~2~]–CO–NH–CH(CH~2~–SH)–COOH.', 'b) Deux liaisons peptidiques –CO–NH– ; extrémité N-terminale : sérine ; extrémité C-terminale : cystéine.', 'c) La cystéine, grâce à son groupe thiol –SH, qui peut former un pont –S–S– avec une autre cystéine.'],
      },
      {
        title: 'Une enzyme de l’estomac',
        statement: 'La pepsine, enzyme de l’estomac, est active à pH 2. Arrivée dans l’intestin (pH ≈ 8), elle devient inactive. Explique cette observation à l’échelle moléculaire.',
        answer: 'À pH 8, les charges des chaînes latérales de la pepsine sont modifiées (par exemple, des groupes –COOH deviennent –COO^−^). Des liaisons ioniques et des liaisons hydrogène qui maintenaient sa structure tridimensionnelle sont rompues ou modifiées : la pepsine se déforme (dénaturation), son site actif n’est plus fonctionnel. Le pH 8 est au-delà de son pH limite.',
      },
    ],
    selfCheck: [
      'Je sais identifier les oses du maltose, du lactose, du saccharose, de l’amidon et du glycogène.',
      'Je sais décrire une liaison osidique et la noter (α1→4, α1→6…).',
      'Je sais expliquer pourquoi l’amidon et le glycogène sont adaptés à la réserve de glucose.',
      'Je sais écrire la structure primaire d’un peptide, repérer les liaisons peptidiques et les extrémités N- et C-terminales.',
      'Je sais identifier la cystéine, la valine, la sérine, la lysine et l’acide glutamique, et repérer un acide aminé hydrophobe.',
      'Je sais nommer les liaisons qui stabilisent la structure 3D d’une protéine.',
      'Je sais expliquer la dénaturation d’une protéine par la chaleur ou le pH.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Liaison osidique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Liaison_osidique' },
      { title: 'Amidon — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Amidon' },
      { title: 'Glycogène — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Glycog%C3%A8ne' },
      { title: 'Liaison peptidique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Liaison_peptidique' },
      { title: 'Structure des protéines — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Structure_des_prot%C3%A9ines' },
      { title: 'Drépanocytose — Inserm', url: 'https://www.inserm.fr/dossier/drepanocytose/' },
      { title: 'Hémoglobine — Wikipédia', url: 'https://fr.wikipedia.org/wiki/H%C3%A9moglobine' },
    ],
  },
};

export default lesson;
