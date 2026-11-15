import { img } from '../media';
import aliments from '../../../assets/courses/premiere/bba-1-structures-biomolecules/aliments.webp';
import familles from '../../../assets/courses/premiere/bba-1-structures-biomolecules/familles.webp';
import eau from '../../../assets/courses/premiere/bba-1-structures-biomolecules/eau.webp';
import huileEau from '../../../assets/courses/premiere/bba-1-structures-biomolecules/huile-eau.webp';

const IMG = {
  aliments: img(aliments, 'Trois béchers sur une paillasse de laboratoire : sucre en poudre, huile végétale et blanc d’œuf cru, à côté d’une coquille d’œuf et d’une spatule.', 'photo', 1536, 1024),
  familles: img(familles, 'Schéma au crayon : des oses s’assemblent en polyoside, des acides aminés en protéine, un glycérol et trois acides gras en triglycéride.', 'schema', 1400, 933),
  eau: img(eau, 'Schéma au crayon de molécules d’eau : atome d’oxygène, atomes d’hydrogène, liaison covalente et liaisons hydrogène en pointillés verts entre molécules voisines.', 'schema', 1254, 1254),
  huileEau: img(huileEau, 'Bécher d’eau surmonté d’une couche d’huile ; des gouttelettes d’huile sphériques remontent dans l’eau.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bba-1-structures-biomolecules',
  duration: 'Environ 4 séances (cours, modèles moléculaires et exercices)',
  hook: {
    image: IMG.aliments,
    question: 'Du sucre, de l’huile, du blanc d’œuf : pourquoi le sucre se dissout-il dans l’eau alors que l’huile flotte en gouttelettes ?',
    text: 'Ces trois aliments sont faits de biomolécules très différentes : des glucides, des lipides et des protéines. Leur comportement dans l’eau, leur rôle dans ton organisme et la façon dont tes enzymes les digèrent dépendent tous de leur structure. Dans ce chapitre, tu apprends à « lire » une molécule : repérer ses fonctions chimiques, dessiner le D-glucose, écrire un acide aminé ou un acide gras, et prévoir si une molécule aime l’eau ou la fuit.',
  },
  objectives: [
    'Identifier les fonctions chimiques (alcool, aldéhyde, cétone, acide carboxylique, amine, amide, ester) dans une molécule.',
    'Représenter le D-glucose en projection de Fischer et en représentation cyclique de Haworth, puis le comparer au D-galactose, au D-fructose, au D-ribose et au D-désoxyribose.',
    'Écrire la formule générique d’un acide α-aminé de la série L, puis expliquer pourquoi son carbone α est asymétrique.',
    'Écrire la formule semi-développée d’un acide gras saturé ou mono-insaturé à partir de sa notation officielle.',
    'Reconnaître le noyau stérane du cholestérol et des hormones stéroïdiennes.',
    'Repérer dans une biomolécule les zones hydrophiles et hydrophobes, et prévoir les liaisons hydrogène avec l’eau.',
  ],
  prerequisites: [
    'Atome, molécule, ion ; molécule organique et molécule minérale (seconde).',
    'Une liaison covalente est une mise en commun de deux électrons ; le carbone forme 4 liaisons, l’azote 3, l’oxygène 2 et l’hydrogène 1.',
  ],
  program: [
    'Identifier les principales fonctions chimiques (alcool, aldéhyde, cétone, acide carboxylique, amine, amide, ester) associées aux groupes caractéristiques dans une molécule.',
    'Représenter la formule semi-développée cyclique du D-glucose ; comparer les formules semi-développées cycliques et linéaires des molécules de D-galactose, D-fructose, D-ribose et D-désoxyribose à celle du D-glucose.',
    'Représenter la formule générique d’un acide α-aminé de la série L ; expliquer la nature asymétrique de l’atome de carbone α dans un acide aminé.',
    'Représenter la formule semi-développée d’un acide gras saturé, et celle d’un acide gras mono-insaturé à partir de son écriture en nomenclature officielle.',
    'Reconnaître le noyau stérane d’une hormone stéroïdienne ou d’une vitamine liposoluble.',
    'Identifier dans une biomolécule les zones pouvant interagir avec l’eau ; prévoir les liaisons faibles qui peuvent s’établir avec l’eau.',
  ],

  course: {
    parts: [
      {
        title: 'Les biomolécules, des molécules organiques',
        intro: 'Ton corps est constitué d’environ 60 % d’eau. Presque tout le reste est fait de quatre grandes familles de molécules construites autour d’atomes de carbone.',
        blocks: [
          { type: 'definition', term: 'Biomolécule', text: 'molécule fabriquée par les êtres vivants. Les biomolécules sont des **molécules organiques** : leur squelette est une chaîne d’atomes de **carbone** (C) liés à des atomes d’**hydrogène** (H), souvent d’**oxygène** (O) et d’**azote** (N), parfois de **phosphore** (P) et de **soufre** (S).' },
          { type: 'p', text: 'On classe les biomolécules en quatre grandes familles. Trois d’entre elles sont étudiées dans ce chapitre ; les acides nucléiques (ADN, ARN) font l’objet d’un chapitre à part.' },
          {
            type: 'table',
            caption: 'Les grandes familles de biomolécules',
            head: ['Famille', 'Unités de base (monomères)', 'Exemples', 'Rôles principaux'],
            rows: [
              ['Glucides', 'Oses (ex. glucose)', 'Glucose, saccharose, amidon, glycogène', 'Source d’énergie rapide, réserve, structure'],
              ['Protides', 'Acides aminés', 'Peptides, protéines (hémoglobine, enzymes, collagène)', 'Catalyse, transport, structure, défense, communication'],
              ['Lipides', 'Acides gras, glycérol, stérols', 'Triglycérides, phospholipides, cholestérol', 'Réserve d’énergie, membranes, hormones'],
              ['Acides nucléiques', 'Nucléotides', 'ADN, ARN', 'Support et expression de l’information génétique'],
            ],
          },
          { type: 'definition', term: 'Monomère et polymère', text: 'un **monomère** est une petite molécule qui peut se lier à d’autres molécules semblables. Un **polymère** est une grande molécule (macromolécule) formée par l’enchaînement d’un grand nombre de monomères. Deux monomères liés forment un **dimère**.' },
          { type: 'figure', image: IMG.familles, caption: 'Des unités de base aux grandes molécules : les oses forment des polyosides, les acides aminés forment des protéines. Un triglycéride n’est pas un polymère : il associe un glycérol et trois acides gras.', size: 'wide' },
          { type: 'p', text: 'Pour décrire une molécule, on utilise plusieurs types de formules. La **formule brute** indique seulement la nature et le nombre d’atomes (C~6~H~12~O~6~ pour le glucose). La **formule développée** montre toutes les liaisons. La **formule semi-développée**, la plus utilisée en biochimie, montre les liaisons entre atomes de carbone et les groupes d’atomes, sans détailler les liaisons C–H.' },
          { type: 'example', title: 'l’éthanol', text: 'Formule brute : C~2~H~6~O. Formule semi-développée : CH~3~–CH~2~–OH. On lit tout de suite qu’il y a deux atomes de carbone et un groupe –OH.' },
          {
            type: 'retenir',
            items: [
              'Les biomolécules sont des molécules organiques à squelette carboné : C, H, O, souvent N, parfois P et S.',
              'Quatre familles : glucides (oses), protides (acides aminés), lipides (acides gras, glycérol, stérols), acides nucléiques (nucléotides).',
              'Un polymère est un enchaînement de nombreux monomères ; la formule semi-développée est l’outil de base pour décrire une biomolécule.',
            ],
          },
        ],
      },

      {
        title: 'Les fonctions chimiques, clés de lecture des biomolécules',
        intro: 'Une biomolécule peut sembler compliquée. Pourtant, elle se lit comme un assemblage de quelques groupes d’atomes toujours les mêmes.',
        blocks: [
          { type: 'definition', term: 'Groupe caractéristique', text: 'groupe d’atomes (autres que C et H) fixé sur le squelette carboné, qui donne à la molécule des propriétés chimiques particulières. Le groupe caractéristique définit la **fonction chimique** de la molécule. Une même biomolécule porte souvent plusieurs fonctions.' },
          { type: 'p', text: 'Dans les formules, la lettre **R** désigne le reste de la molécule (une chaîne carbonée quelconque).' },
          {
            type: 'table',
            caption: 'Les sept fonctions chimiques à connaître',
            head: ['Fonction', 'Groupe caractéristique', 'Écriture semi-développée', 'Exemple dans le vivant'],
            rows: [
              ['Alcool', 'Hydroxyle –OH, porté par un carbone qui n’est lié qu’à des C ou des H', 'R–CH~2~–OH ; R–CHOH–R′', 'Glycérol, glucose (plusieurs –OH), cholestérol'],
              ['Aldéhyde', 'Carbonyle C=O **en bout de chaîne** (le carbone porte aussi un H)', 'R–CHO', 'Glucose (C1), galactose, ribose'],
              ['Cétone', 'Carbonyle C=O **à l’intérieur de la chaîne** (le carbone est lié à deux autres C)', 'R–CO–R′', 'Fructose (C2)'],
              ['Acide carboxylique', 'Carboxyle –COOH', 'R–COOH (souvent ionisé en R–COO^−^ dans la cellule)', 'Acides gras, acides aminés, acide lactique'],
              ['Amine', 'Amine –NH~2~', 'R–NH~2~ (souvent ionisé en R–NH~3~^+^ dans la cellule)', 'Acides aminés'],
              ['Amide', 'Carbonyle lié à un azote –CO–NH–', 'R–CO–NH–R′', 'Liaison peptidique des protéines, urée'],
              ['Ester', 'Carbonyle lié à un oxygène lui-même lié à un carbone –CO–O–', 'R–CO–O–R′', 'Triglycérides, phospholipides'],
            ],
          },
          {
            type: 'compare',
            title: 'Trois paires à ne pas confondre',
            columns: [
              { title: 'Aldéhyde ou cétone ?', items: ['Les deux possèdent un groupe carbonyle C=O.', '**Aldéhyde** : le C=O est au bout de la chaîne (–CHO).', '**Cétone** : le C=O est entouré de deux carbones (–CO–).'] },
              { title: 'Acide carboxylique ou ester ?', items: ['Les deux possèdent –CO–O–.', '**Acide** : l’oxygène porte un H (–COOH).', '**Ester** : l’oxygène est lié à un carbone (–CO–O–C).'] },
              { title: 'Amine ou amide ?', items: ['Les deux contiennent un atome d’azote.', '**Amine** : l’azote n’est lié qu’à des C ou des H (–NH~2~).', '**Amide** : l’azote est lié à un C=O (–CO–NH–).'] },
            ],
          },
          { type: 'p', text: 'Les fonctions alcool, acide carboxylique et amine peuvent réagir entre elles en libérant une molécule d’eau : c’est une **condensation**. Un acide et un alcool donnent un **ester** ; un acide et une amine donnent un **amide**. L’hydrolyse est la réaction inverse : elle coupe la liaison en consommant une molécule d’eau. Ces réactions expliquent la construction et la digestion de nombreuses biomolécules.' },
          { type: 'example', title: 'l’acide lactique', text: 'L’acide lactique, produit par tes muscles lors d’un effort intense et par les bactéries du yaourt, a pour formule semi-développée CH~3~–CHOH–COOH. Il porte une fonction **alcool** (sur le carbone 2) et une fonction **acide carboxylique** (carbone 1).' },
          {
            type: 'retenir',
            items: [
              'Une fonction chimique est définie par un groupe caractéristique : –OH (alcool), –CHO (aldéhyde), –CO– (cétone), –COOH (acide carboxylique), –NH~2~ (amine), –CO–NH– (amide), –CO–O– (ester).',
              'Aldéhyde = C=O en bout de chaîne ; cétone = C=O dans la chaîne.',
              'Acide + alcool → ester + eau ; acide + amine → amide + eau (condensation). L’hydrolyse fait l’inverse.',
            ],
          },
        ],
      },

      {
        title: 'Les oses : l’exemple du D-glucose',
        intro: 'Le glucose est le carburant principal de tes cellules : ton cerveau en consomme environ 100 g par jour. C’est aussi la molécule de référence pour comprendre tous les autres oses.',
        blocks: [
          { type: 'definition', term: 'Ose', text: 'glucide simple, non hydrolysable, comportant de 3 à 7 atomes de carbone, une fonction **carbonyle** (aldéhyde ou cétone) et des fonctions **alcool** sur les autres carbones. Les oses sont les monomères des glucides ; on les appelle aussi monosaccharides.' },
          {
            type: 'compare',
            title: 'Deux critères pour classer un ose',
            columns: [
              { title: 'Selon la fonction carbonyle', items: ['**Aldose** : fonction aldéhyde (sur le carbone 1). Ex. glucose, galactose, ribose.', '**Cétose** : fonction cétone (le plus souvent sur le carbone 2). Ex. fructose.'] },
              { title: 'Selon le nombre de carbones', items: ['3 C : triose ; 4 C : tétrose.', '**5 C : pentose** (ribose, désoxyribose).', '**6 C : hexose** (glucose, galactose, fructose).'] },
            ],
          },
          { type: 'p', text: 'Le glucose est donc un **aldohexose** : un aldose à 6 carbones, de formule brute C~6~H~12~O~6~. Les carbones sont numérotés de 1 à 6 en partant de l’extrémité la plus proche de la fonction carbonyle.' },
          { type: 'definition', term: 'Carbone asymétrique', text: 'atome de carbone lié à **quatre atomes ou groupes d’atomes tous différents**. Une molécule qui en possède un peut exister sous deux formes, images l’une de l’autre dans un miroir mais non superposables, comme ta main droite et ta main gauche. Le glucose linéaire possède 4 carbones asymétriques : C2, C3, C4 et C5.' },
          { type: 'p', text: 'Pour représenter ces carbones dans le plan, on utilise la **projection de Fischer** : la chaîne carbonée est dessinée verticalement, le carbone 1 en haut ; à chaque carbone, les groupes –OH et –H sont placés à gauche ou à droite d’un trait horizontal.' },
          {
            type: 'table',
            caption: 'Projection de Fischer du D-glucose (forme linéaire)',
            head: ['Carbone', 'Représentation de Fischer', 'Fonction et position du –OH'],
            rows: [
              ['C1', 'CHO', 'Aldéhyde'],
              ['C2', 'H – C – OH', 'Alcool, –OH à **droite**'],
              ['C3', 'HO – C – H', 'Alcool, –OH à **gauche**'],
              ['C4', 'H – C – OH', 'Alcool, –OH à **droite**'],
              ['C5', 'H – C – OH', 'Alcool, –OH à **droite** → série **D**'],
              ['C6', 'CH~2~OH', 'Alcool (primaire)'],
            ],
          },
          { type: 'note', title: 'Astuce de mémorisation', text: 'Pour le D-glucose, les –OH de C2 à C5 sont à droite, gauche, droite, droite : « D, G, D, D ». On dit qu’un ose appartient à la **série D** quand le –OH du dernier carbone asymétrique (le plus éloigné du carbonyle, ici C5) est à droite. Presque tous les oses naturels sont de la série D.' },
          { type: 'p', text: 'Dans l’eau, plus de 99 % des molécules de glucose ne sont pas linéaires mais **cycliques** : la fonction aldéhyde du C1 réagit avec la fonction alcool du C5. Il se forme un cycle à six sommets (cinq carbones et un oxygène) appelé **pyranose**. Le C1 porte alors un nouveau groupe –OH, appelé –OH **anomérique** (ou hémiacétalique).' },
          { type: 'definition', term: 'Représentation de Haworth', text: 'représentation de la forme cyclique d’un ose : le cycle est dessiné comme un hexagone vu en perspective, posé à plat, l’oxygène du cycle en haut à droite. Les groupes sont placés **au-dessus** ou **au-dessous** du plan du cycle.' },
          {
            type: 'steps',
            title: 'Dessiner l’α-D-glucopyranose en représentation de Haworth',
            items: [
              { title: 'Tracer le cycle', text: 'Dessiner un hexagone aplati, le bord avant en trait épais. Placer l’atome d’oxygène au sommet arrière droit.' },
              { title: 'Numéroter', text: 'C1 au sommet de droite (à côté de l’oxygène), puis dans le sens des aiguilles d’une montre : C2 en bas à droite, C3 en bas à gauche, C4 à gauche, C5 en haut à gauche (relié à l’oxygène).' },
              { title: 'Placer le CH~2~OH', text: 'Le carbone 6 (CH~2~OH) est dessiné **au-dessus** du cycle, sur C5 : c’est la marque de la série D.' },
              { title: 'Placer les –OH', text: 'Règle : un –OH à **droite** en Fischer est dessiné **en bas** en Haworth ; à gauche, il est dessiné en haut. Donc : –OH de C2 en bas, de C3 en haut, de C4 en bas.' },
              { title: 'Placer le –OH anomérique', text: 'Sur C1 : –OH **en bas** pour l’anomère **α** (du côté opposé au CH~2~OH), **en haut** pour l’anomère **β**. Compléter chaque carbone avec un H.' },
            ],
          },
          {
            type: 'table',
            caption: 'Bilan : position des groupes dans la représentation de Haworth du D-glucose',
            head: ['Carbone', 'Place dans le cycle', 'Au-dessus du plan', 'Au-dessous du plan'],
            rows: [
              ['C1', 'À droite, lié à l’oxygène du cycle', 'H (α) ou OH (β)', 'OH (α) ou H (β)'],
              ['C2', 'En bas à droite', 'H', 'OH'],
              ['C3', 'En bas à gauche', 'OH', 'H'],
              ['C4', 'À gauche', 'H', 'OH'],
              ['C5', 'En haut à gauche, lié à l’oxygène du cycle', 'CH~2~OH (carbone 6)', 'H'],
            ],
          },
          { type: 'warning', title: 'Pièges fréquents', text: ['Le cycle du glucose contient **cinq carbones et un oxygène** : le carbone 6 est à l’extérieur du cycle.', 'α et β ne diffèrent que par la position du –OH du **carbone 1**. Cette petite différence a de grandes conséquences : l’amidon (glucose α) est digestible, la cellulose (glucose β) ne l’est pas pour l’être humain.'] },
          { type: 'p', text: 'Les autres oses du programme se comparent facilement au D-glucose : il suffit de repérer ce qui change.' },
          {
            type: 'table',
            caption: 'Comparer quatre oses au D-glucose',
            head: ['Ose', 'Formule brute', 'Classement', 'Différence avec le D-glucose', 'Forme cyclique'],
            rows: [
              ['D-galactose', 'C~6~H~12~O~6~', 'Aldohexose', 'Seul le –OH du **C4** change de côté : à gauche en Fischer, donc en haut en Haworth', 'Cycle à 6 sommets (pyranose)'],
              ['D-fructose', 'C~6~H~12~O~6~', 'Cétohexose', 'Fonction **cétone sur le C2** ; le C1 porte un CH~2~OH. C3, C4 et C5 sont identiques au glucose', 'Le C2 réagit avec le –OH du C5 : cycle à **5 sommets** (furanose)'],
              ['D-ribose', 'C~5~H~10~O~5~', 'Aldopentose', '**5 carbones** ; les –OH de C2, C3 et C4 sont tous à droite en Fischer', 'Le C1 réagit avec le –OH du C4 : cycle à 5 sommets (furanose)'],
              ['D-désoxyribose', 'C~5~H~10~O~4~', 'Aldopentose', 'Comme le ribose, mais le **C2 ne porte pas de –OH** (deux H) : il a perdu un atome d’oxygène, d’où son nom', 'Cycle à 5 sommets (furanose)'],
            ],
          },
          { type: 'note', title: 'Pour aller plus loin', text: 'Le glucose, le galactose et le fructose ont la même formule brute C~6~H~12~O~6~ mais des formules semi-développées différentes : ce sont des **isomères**. Le ribose et le désoxyribose sont les sucres des acides nucléiques (ARN et ADN).' },
          {
            type: 'retenir',
            items: [
              'Un ose porte une fonction carbonyle (aldose : aldéhyde en C1 ; cétose : cétone en C2) et des fonctions alcool. Hexose = 6 C, pentose = 5 C.',
              'D-glucose (C~6~H~12~O~6~) en Fischer : –OH de C2 à C5 à droite, gauche, droite, droite. Série D : –OH du C5 à droite.',
              'En Haworth : cycle de 5 C + 1 O ; –OH à droite en Fischer → en bas ; CH~2~OH en haut ; α = –OH du C1 en bas, β = en haut.',
              'Galactose : différence en C4. Fructose : cétone en C2, cycle à 5 sommets. Ribose : 5 C. Désoxyribose : pas de –OH en C2.',
            ],
          },
        ],
      },

      {
        title: 'Les acides aminés, unités des protéines',
        intro: 'Les milliers de protéines de ton organisme sont construites à partir de seulement 20 acides aminés différents, comme des milliers de mots écrits avec un alphabet de 20 lettres.',
        blocks: [
          { type: 'definition', term: 'Acide α-aminé', text: 'molécule qui porte, sur un même atome de carbone appelé **carbone α**, une fonction **amine** (–NH~2~) et une fonction **acide carboxylique** (–COOH). Le carbone α porte aussi un atome d’hydrogène et une **chaîne latérale R** (ou radical), différente pour chacun des 20 acides aminés.' },
          {
            type: 'formula',
            title: 'Formule générique d’un acide α-aminé',
            expression: 'H~2~N – C~α~H(R) – COOH',
            legend: [
              { symbol: 'H~2~N–', meaning: 'fonction amine' },
              { symbol: '–COOH', meaning: 'fonction acide carboxylique' },
              { symbol: 'C~α~', meaning: 'carbone α, qui porte les deux fonctions' },
              { symbol: 'R', meaning: 'chaîne latérale (radical), propre à chaque acide aminé' },
            ],
          },
          { type: 'example', title: 'trois acides aminés', text: ['**Glycine** : R = H. C’est le plus petit acide aminé.', '**Alanine** : R = CH~3~, soit CH~3~–CH(NH~2~)–COOH.', '**Sérine** : R = CH~2~OH ; sa chaîne latérale porte une fonction alcool.'] },
          { type: 'p', text: 'Le carbone α est lié à quatre groupes différents : –NH~2~, –COOH, –H et –R. C’est donc un **carbone asymétrique**, sauf dans la glycine où R = H (le carbone porte alors deux H). Chaque acide aminé (sauf la glycine) existe ainsi sous deux formes symétriques dans un miroir, appelées **L** et **D**.' },
          {
            type: 'table',
            caption: 'Projection de Fischer d’un acide α-aminé de la série L',
            head: ['Position autour du carbone α', 'Groupe placé'],
            rows: [
              ['En haut (verticale)', '–COOH'],
              ['À gauche (horizontale)', '–NH~2~ : c’est ce qui définit la **série L**'],
              ['À droite (horizontale)', '–H'],
              ['En bas (verticale)', 'Chaîne latérale R'],
            ],
          },
          { type: 'p', text: 'Dans la série D, le –NH~2~ serait à droite. Les protéines de tous les êtres vivants sont construites **uniquement avec des acides aminés L**.' },
          { type: 'note', title: 'Dans la cellule', text: 'Au pH de la cellule (proche de 7), la fonction acide perd un ion H^+^ (–COO^−^) et la fonction amine en gagne un (–NH~3~^+^). L’acide aminé porte alors une charge positive et une charge négative : on l’écrit H~3~N^+^–CH(R)–COO^−^. Ces charges jouent un rôle important dans la forme des protéines (chapitre suivant).' },
          {
            type: 'retenir',
            items: [
              'Acide α-aminé : H~2~N–CH(R)–COOH ; amine et acide carboxylique portés par le même carbone α.',
              'Les 20 acides aminés ne diffèrent que par leur chaîne latérale R.',
              'Le carbone α est asymétrique (4 groupes différents), sauf chez la glycine (R = H).',
              'Série L : en Fischer, –COOH en haut, R en bas, –NH~2~ à gauche. Les protéines sont faites d’acides aminés L.',
            ],
          },
        ],
      },

      {
        title: 'Les lipides : acides gras, triglycérides et stérols',
        intro: 'Huile d’olive, beurre, cholestérol, hormones sexuelles : tous sont des lipides. Leur point commun n’est pas une unité de base, mais leur faible affinité pour l’eau.',
        blocks: [
          { type: 'definition', term: 'Lipides', text: 'biomolécules très peu solubles dans l’eau mais solubles dans les solvants organiques (éthanol, acétone, éther). Ils comprennent notamment les acides gras, les triglycérides, les phospholipides et les stérols.' },
          { type: 'definition', term: 'Acide gras', text: 'acide carboxylique à **longue chaîne carbonée** non ramifiée, possédant le plus souvent un **nombre pair** d’atomes de carbone (en général de 14 à 22, surtout 16 et 18). Il porte une fonction acide carboxylique (–COOH) au carbone 1 et un groupe méthyle (–CH~3~) à l’autre extrémité.' },
          {
            type: 'compare',
            title: 'Acide gras saturé ou insaturé',
            columns: [
              { title: 'Saturé', subtitle: 'ex. acide palmitique, acide stéarique', items: ['Uniquement des liaisons **simples** C–C : chaque carbone porte le maximum d’atomes d’hydrogène.', 'Chaîne rectiligne : les molécules s’empilent bien.', 'Graisses **solides** à température ambiante (beurre, saindoux).'] },
              { title: 'Insaturé', subtitle: 'ex. acide oléique, acide linoléique', items: ['Une (**mono-insaturé**) ou plusieurs (**poly-insaturé**) **doubles liaisons** C=C.', 'Dans le vivant, la double liaison est le plus souvent **cis** : elle crée un coude dans la chaîne.', 'Les molécules s’empilent mal : **huiles liquides** à température ambiante.'] },
            ],
          },
          { type: 'example', title: 'deux acides gras saturés', text: ['Acide palmitique (16 carbones) : CH~3~–(CH~2~)~14~–COOH.', 'Acide stéarique (18 carbones) : CH~3~–(CH~2~)~16~–COOH. La notation (CH~2~)~16~ signifie « 16 groupes CH~2~ enchaînés ».'] },
          { type: 'definition', term: 'Nomenclature officielle', text: 'notation **Cn:p Δx** : **n** est le nombre de carbones, **p** le nombre de doubles liaisons et **x** le numéro du premier carbone de chaque double liaison, les carbones étant numérotés à partir du carbone de la fonction acide (C1). Exemple : l’acide oléique est C18:1 Δ9 (18 carbones, une double liaison entre C9 et C10). Son nom systématique est acide _cis_-octadéc-9-énoïque.' },
          {
            type: 'steps',
            title: 'Écrire la formule d’un acide gras mono-insaturé à partir de Cn:1 Δx',
            items: [
              { title: 'Placer les extrémités', text: 'Écrire –COOH à droite (C1) et CH~3~– à gauche (carbone n).' },
              { title: 'Placer la double liaison', text: 'Elle relie Cx et C(x+1) : écrire –CH=CH–.' },
              { title: 'Compléter côté acide', text: 'Entre C1 et Cx, il y a x − 2 groupes CH~2~.' },
              { title: 'Compléter côté méthyle', text: 'Entre C(x+1) et le CH~3~ (Cn), il y a n − x − 2 groupes CH~2~.' },
              { title: 'Vérifier', text: 'Compter les carbones : 1 + (n − x − 2) + 2 + (x − 2) + 1 = n.' },
            ],
          },
          { type: 'example', title: 'acide oléique, C18:1 Δ9', text: 'x − 2 = 7 groupes CH~2~ côté acide ; 18 − 9 − 2 = 7 groupes CH~2~ côté méthyle. Formule semi-développée : CH~3~–(CH~2~)~7~–CH=CH–(CH~2~)~7~–COOH. Vérification : 1 + 7 + 2 + 7 + 1 = 18 carbones.' },
          { type: 'note', title: 'Les oméga des étiquettes alimentaires', text: 'En nutrition, on repère souvent la première double liaison à partir du **groupe méthyle** (CH~3~) : c’est la notation oméga (ω) ou n−x. L’acide oléique (double liaison au 9^e^ carbone en partant du CH~3~ : 18 − 9 = 9) est un oméga-9 ; l’acide linoléique (C18:2 Δ9,12) est un oméga-6.' },
          { type: 'definition', term: 'Triglycéride', text: 'lipide formé par l’**estérification** des trois fonctions alcool du **glycérol** (CH~2~OH–CHOH–CH~2~OH) par trois acides gras. Il contient trois fonctions **ester** et se forme en libérant trois molécules d’eau : glycérol + 3 acides gras → triglycéride + 3 H~2~O. C’est la principale forme de **réserve d’énergie** (tissu adipeux, huiles des graines).' },
          { type: 'definition', term: 'Noyau stérane', text: 'squelette de **quatre cycles carbonés accolés** : trois cycles à 6 carbones (notés A, B, C) et un cycle à 5 carbones (D), soit 17 atomes de carbone. Toute molécule qui le possède est un **stéroïde**.' },
          { type: 'p', text: 'Le **cholestérol** (C~27~H~46~O) est le stéroïde de référence : noyau stérane, une fonction alcool sur le carbone 3 et une chaîne carbonée sur le carbone 17. Il entre dans la composition des membranes des cellules animales et sert de précurseur à d’autres stéroïdes.' },
          {
            type: 'table',
            caption: 'Des molécules construites à partir du cholestérol',
            head: ['Molécule', 'Ce qu’on reconnaît', 'Rôle'],
            rows: [
              ['Cholestérol', 'Noyau stérane, –OH en C3, chaîne latérale en C17', 'Constituant des membranes, précurseur'],
              ['Testostérone', 'Noyau stérane, fonction cétone en C3, –OH en C17, pas de longue chaîne', 'Hormone sexuelle (testicules)'],
              ['Œstradiol', 'Noyau stérane, cycle A aromatique, –OH en C3 et en C17', 'Hormone sexuelle (ovaires)'],
              ['Progestérone', 'Noyau stérane, deux fonctions cétone', 'Hormone sexuelle (ovaires, placenta)'],
              ['Vitamine D', 'Dérive du cholestérol : on reconnaît les cycles A, C et D, mais le **cycle B est ouvert** (sous l’action des UV dans la peau)', 'Vitamine liposoluble : absorption intestinale du calcium'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Acide gras : longue chaîne carbonée + –COOH. Saturé = liaisons simples (solide) ; insaturé = double(s) liaison(s) C=C, coude cis (liquide).',
              'Notation officielle Cn:p Δx, carbones numérotés depuis le –COOH. Acide oléique : C18:1 Δ9 = CH~3~–(CH~2~)~7~–CH=CH–(CH~2~)~7~–COOH.',
              'Triglycéride = glycérol + 3 acides gras liés par des fonctions ester : lipide de réserve.',
              'Noyau stérane = 3 cycles à 6 C + 1 cycle à 5 C : cholestérol, hormones stéroïdiennes ; la vitamine D dérive du cholestérol.',
            ],
          },
        ],
      },

      {
        title: 'Polarité : quelles zones d’une molécule interagissent avec l’eau ?',
        intro: 'L’eau est le solvant de la vie. Savoir si une molécule « aime » l’eau permet de prévoir où elle se trouve dans la cellule et comment elle est transportée dans le sang.',
        blocks: [
          { type: 'definition', term: 'Électronégativité', text: 'capacité d’un atome à attirer vers lui les électrons d’une liaison covalente. Dans les biomolécules, l’ordre est : **O > N > C ≈ H**.' },
          {
            type: 'table',
            caption: 'Électronégativité de quelques atomes (échelle de Pauling)',
            head: ['Atome', 'H', 'C', 'S', 'N', 'O'],
            rows: [['Électronégativité', '2,2', '2,6', '2,6', '3,0', '3,4']],
          },
          { type: 'p', text: 'Quand deux atomes d’électronégativités différentes sont liés (O–H, N–H, C=O), les électrons de la liaison sont attirés vers le plus électronégatif. Celui-ci porte une **charge partielle négative** (δ^−^) et l’autre une **charge partielle positive** (δ^+^) : la liaison est **polarisée**. Les liaisons C–C et C–H, entre atomes d’électronégativités voisines, sont **apolaires**.' },
          { type: 'p', text: 'La molécule d’eau H~2~O est coudée : l’oxygène (δ^−^) attire les électrons des deux liaisons O–H, les hydrogènes portent des charges δ^+^. L’eau est une molécule **polaire**.' },
          { type: 'definition', term: 'Liaison hydrogène', text: 'liaison faible (environ 20 fois plus faible qu’une liaison covalente) entre un atome d’hydrogène lié à un atome très électronégatif (O ou N) et un autre atome électronégatif (O ou N) voisin. Elle se représente par des pointillés.' },
          { type: 'figure', image: IMG.eau, caption: 'Les molécules d’eau sont reliées entre elles par des liaisons hydrogène (pointillés verts), beaucoup plus faibles que les liaisons covalentes O–H.', size: 'normal' },
          {
            type: 'compare',
            title: 'Hydrophile ou hydrophobe ?',
            columns: [
              { title: 'Zones hydrophiles', subtitle: '« qui aiment l’eau »', items: ['Groupes **polaires** : –OH, –CHO, C=O, –COOH, –NH~2~.', 'Groupes **ionisés** : –COO^−^, –NH~3~^+^, phosphate.', 'Ils forment des liaisons hydrogène ou des interactions électriques avec l’eau.', 'Ex. glucose (cinq –OH) : très soluble dans l’eau.'] },
              { title: 'Zones hydrophobes', subtitle: '« qui fuient l’eau »', items: ['Chaînes **hydrocarbonées** (C–C, C–H), cycles carbonés.', 'Elles ne forment pas de liaisons hydrogène avec l’eau.', 'Dans l’eau, elles se regroupent entre elles.', 'Ex. triglycérides, cholestérol : insolubles dans l’eau.'] },
            ],
          },
          { type: 'figure', image: IMG.huileEau, caption: 'L’huile (triglycérides, molécules hydrophobes) ne se mélange pas à l’eau : elle forme des gouttelettes qui remontent et se rassemblent en surface.', size: 'wide' },
          { type: 'p', text: 'Beaucoup de biomolécules possèdent à la fois une zone hydrophile et une zone hydrophobe : on dit qu’elles sont **amphiphiles**. Un acide gras en est un exemple : la tête –COOH est hydrophile, la longue chaîne est hydrophobe. Cette double nature explique la formation des membranes (chapitre « Membranes biologiques »).' },
          {
            type: 'steps',
            title: 'Méthode : prévoir le comportement d’une molécule dans l’eau',
            items: [
              'Repérer les groupes polaires ou ionisés (O et N liés à H, C=O, charges).',
              'Repérer les zones hydrocarbonées (chaînes de CH~2~, cycles).',
              'Comparer leur importance : plus les groupes polaires sont nombreux par rapport à la taille de la chaîne, plus la molécule est soluble.',
              'Prévoir les liaisons hydrogène possibles avec l’eau : chaque –OH ou –NH peut en former.',
            ],
          },
          { type: 'example', title: 'glycérol et triglycéride', text: 'Le glycérol, petite molécule à trois –OH, se mélange à l’eau en toutes proportions. Dans un triglycéride, ces trois –OH ont été transformés en fonctions ester et trois longues chaînes hydrophobes ont été ajoutées : la molécule devient insoluble.' },
          {
            type: 'retenir',
            items: [
              'O et N sont plus électronégatifs que C et H : les liaisons O–H, N–H et C=O sont polarisées, les liaisons C–H et C–C non.',
              'Une liaison hydrogène relie un atome H lié à O (ou N) à un autre atome O ou N voisin : c’est une liaison faible.',
              'Zones hydrophiles = groupes polaires ou ionisés ; zones hydrophobes = chaînes hydrocarbonées.',
              'Une molécule amphiphile possède les deux types de zones (ex. acide gras).',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des documents. Réponds d’abord seul(e), en phrases complètes : tu peux écrire ta réponse directement sous la question. Garde le cours ouvert, utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Repérer les fonctions chimiques',
        duration: '25 min',
        skills: ['Identifier', 'Comparer'],
        context: 'Au laboratoire, on travaille avec de nombreuses petites molécules du métabolisme. Avant de prévoir leurs propriétés, il faut savoir lire leur formule.',
        documents: [
          {
            label: 'Document 1',
            title: 'Formules semi-développées de six molécules du vivant',
            blocks: [
              {
                type: 'table',
                head: ['Molécule', 'Formule semi-développée', 'Où la trouve-t-on ?'],
                rows: [
                  ['Glycérol', 'CH~2~OH–CHOH–CH~2~OH', 'Triglycérides, phospholipides'],
                  ['Glycéraldéhyde', 'CHO–CHOH–CH~2~OH', 'Dégradation du glucose dans la cellule'],
                  ['Dihydroxyacétone', 'CH~2~OH–CO–CH~2~OH', 'Dégradation du glucose ; autobronzants'],
                  ['Alanine', 'CH~3~–CH(NH~2~)–COOH', 'Protéines'],
                  ['Urée', 'H~2~N–CO–NH~2~', 'Urine (élimination de l’azote)'],
                  ['Butyrate de glycérol (fragment)', 'CH~3~–CH~2~–CH~2~–CO–O–CH~2~–R', 'Matière grasse du beurre'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Nomme la ou les fonctions chimiques présentes dans le glycérol, le glycéraldéhyde et la dihydroxyacétone.', hint: 'Cherche –OH, –CHO (bout de chaîne) et –CO– (milieu de chaîne).', answer: 'Glycérol : trois fonctions alcool. Glycéraldéhyde : une fonction aldéhyde (C1) et deux fonctions alcool. Dihydroxyacétone : une fonction cétone (C2) et deux fonctions alcool.' },
          { text: 'Le glycéraldéhyde et la dihydroxyacétone ont la même formule brute. Écris-la, puis classe chacune de ces molécules (aldose ou cétose, et nombre de carbones).', hint: 'Compte les atomes C, H et O dans chaque formule.', answer: 'Formule brute commune : C~3~H~6~O~3~ (ce sont des isomères). Le glycéraldéhyde est un aldotriose (aldéhyde, 3 C) et la dihydroxyacétone est un cétotriose (cétone, 3 C) : ce sont les deux plus petits oses.' },
          { text: 'Repère les fonctions de l’alanine et justifie qu’il s’agit d’un acide α-aminé.', answer: 'L’alanine possède une fonction amine (–NH~2~) et une fonction acide carboxylique (–COOH), portées par le même carbone (C2, le carbone α). Sa chaîne latérale est R = CH~3~ : c’est un acide α-aminé.' },
          { text: 'L’urée et le butyrate de glycérol contiennent tous deux un groupe C=O. Indique la fonction de chacun en justifiant.', hint: 'À quoi le carbone du C=O est-il lié de l’autre côté : un azote ou un oxygène lié à un carbone ?', answer: 'Dans l’urée, le C=O est lié à des atomes d’azote : ce sont des fonctions amide (H~2~N–CO–). Dans le butyrate de glycérol, le C=O est lié à un oxygène lui-même lié à un carbone (–CO–O–CH~2~–) : c’est une fonction ester.' },
          { text: 'Écris l’équation de formation de la fonction ester du butyrate de glycérol à partir d’un acide et d’un alcool.', hint: 'Acide + alcool → ester + eau.', answer: 'CH~3~–CH~2~–CH~2~–COOH (acide butyrique) + HO–CH~2~–R (alcool du glycérol) → CH~3~–CH~2~–CH~2~–CO–O–CH~2~–R (ester) + H~2~O. C’est une condensation.' },
        ],
      },
      {
        title: 'Du D-glucose aux autres oses',
        duration: '30 min',
        skills: ['Représenter', 'Comparer', 'Raisonner'],
        context: 'Tu disposes des projections de Fischer de quatre oses. Le but est de les comparer au D-glucose sans rien apprendre de plus par cœur.',
        documents: [
          {
            label: 'Document 2',
            title: 'Projections de Fischer de quatre oses (formes linéaires)',
            blocks: [
              {
                type: 'table',
                head: ['Carbone', 'D-glucose', 'D-galactose', 'D-fructose', 'D-ribose'],
                rows: [
                  ['C1', 'CHO', 'CHO', 'CH~2~OH', 'CHO'],
                  ['C2', 'H – C – OH', 'H – C – OH', 'C=O', 'H – C – OH'],
                  ['C3', 'HO – C – H', 'HO – C – H', 'HO – C – H', 'H – C – OH'],
                  ['C4', 'H – C – OH', 'HO – C – H', 'H – C – OH', 'H – C – OH'],
                  ['C5', 'H – C – OH', 'H – C – OH', 'H – C – OH', 'CH~2~OH'],
                  ['C6', 'CH~2~OH', 'CH~2~OH', 'CH~2~OH', '—'],
                ],
              },
            ],
            source: 'Formules de référence',
          },
        ],
        questions: [
          { text: 'Classe chaque ose : aldose ou cétose, hexose ou pentose.', answer: 'D-glucose : aldohexose. D-galactose : aldohexose. D-fructose : cétohexose (cétone en C2). D-ribose : aldopentose.' },
          { text: 'Quel carbone distingue le D-galactose du D-glucose ? Où sera placé son –OH dans la représentation de Haworth ?', hint: 'Compare les lignes une à une. Rappel : à gauche en Fischer → en haut en Haworth.', answer: 'Seul le carbone 4 diffère : son –OH est à gauche dans le galactose (à droite dans le glucose). En Haworth, le –OH du C4 du galactose est donc dessiné au-dessus du plan du cycle.' },
          { text: 'Justifie que ces quatre oses appartiennent tous à la série D.', hint: 'Repère, pour chacun, le dernier carbone asymétrique.', answer: 'Pour les hexoses, le dernier carbone asymétrique est le C5 ; pour le ribose, c’est le C4. Dans les quatre cas, le –OH de ce carbone est à droite : les quatre oses sont de la série D.' },
          { text: 'Combien de carbones asymétriques compte le D-fructose linéaire ? Justifie.', answer: 'Trois : C3, C4 et C5 portent chacun quatre groupes différents. Le C1 et le C6 portent deux H, et le C2 porte une double liaison C=O : ils ne sont pas asymétriques.' },
          { text: 'Écris la projection de Fischer du D-désoxyribose, puis sa formule brute.', hint: 'Désoxy- signifie « un oxygène en moins », sur le carbone 2.', answer: 'C1 : CHO ; C2 : H – C – H ; C3 : H – C – OH ; C4 : H – C – OH ; C5 : CH~2~OH. Formule brute : C~5~H~10~O~4~ (le ribose est C~5~H~10~O~5~).' },
          { text: 'Lors de la cyclisation du fructose, quels carbones réagissent ? Combien d’atomes compte le cycle formé ?', answer: 'La fonction cétone du C2 réagit avec la fonction alcool du C5. Le cycle comporte les carbones C2, C3, C4, C5 et l’oxygène : 5 sommets (furanose). Le C1 et le C6 (CH~2~OH) restent à l’extérieur du cycle.' },
        ],
      },
      {
        title: 'Écrire et comparer des acides gras',
        duration: '25 min',
        skills: ['Représenter', 'Exploiter des données', 'Argumenter'],
        context: 'L’huile d’olive est liquide à 20 °C, le beurre est solide. Leurs triglycérides ne contiennent pas les mêmes acides gras.',
        documents: [
          {
            label: 'Document 3',
            title: 'Quelques acides gras alimentaires',
            blocks: [
              {
                type: 'table',
                head: ['Nom usuel', 'Notation', 'Température de fusion', 'Abondant dans'],
                rows: [
                  ['Acide palmitique', 'C16:0', '63 °C', 'Huile de palme, beurre, viande'],
                  ['Acide stéarique', 'C18:0', '69 °C', 'Beurre de cacao, graisses animales'],
                  ['Acide oléique', 'C18:1 Δ9', '13 °C', 'Huile d’olive (55 à 83 % des acides gras)'],
                  ['Acide linoléique', 'C18:2 Δ9,12', 'Environ −5 °C', 'Huiles de tournesol, de noix'],
                ],
              },
            ],
            source: 'Valeurs arrondies — Wikipédia',
          },
        ],
        questions: [
          { text: 'Que signifient les notations C18:0 et C18:1 Δ9 ?', answer: 'C18:0 : 18 atomes de carbone, aucune double liaison (acide gras saturé). C18:1 Δ9 : 18 atomes de carbone, une double liaison qui part du carbone 9 (entre C9 et C10), les carbones étant numérotés à partir du –COOH.' },
          { text: 'Écris la formule semi-développée de l’acide stéarique.', answer: 'CH~3~–(CH~2~)~16~–COOH : un CH~3~, seize CH~2~ et un –COOH, soit 18 carbones.' },
          { text: 'Écris la formule semi-développée d’un acide gras C16:1 Δ9 (acide palmitoléique).', hint: 'Côté acide : x − 2 groupes CH~2~ ; côté méthyle : n − x − 2 groupes CH~2~.', answer: 'Côté acide : 9 − 2 = 7 CH~2~ ; côté méthyle : 16 − 9 − 2 = 5 CH~2~. Formule : CH~3~–(CH~2~)~5~–CH=CH–(CH~2~)~7~–COOH. Vérification : 1 + 5 + 2 + 7 + 1 = 16 carbones.' },
          { text: 'Décris l’effet du nombre de doubles liaisons sur la température de fusion, pour des acides gras à 18 carbones.', answer: 'Plus il y a de doubles liaisons, plus la température de fusion est basse : 69 °C pour l’acide stéarique (0 double liaison), 13 °C pour l’acide oléique (1), environ −5 °C pour l’acide linoléique (2).' },
          { text: 'Explique pourquoi l’huile d’olive est liquide à 20 °C alors que le beurre est solide.', hint: 'Pense à la forme de la chaîne et à la façon dont les molécules s’empilent.', answer: 'L’huile d’olive est riche en acide oléique, insaturé : sa double liaison cis crée un coude qui empêche les chaînes de s’empiler de façon compacte ; les interactions entre molécules sont plus faibles, elle fond à basse température et reste liquide à 20 °C. Le beurre est riche en acides gras saturés à chaîne rectiligne, qui s’empilent bien : il est solide à 20 °C.' },
        ],
      },
      {
        title: 'Prévoir la solubilité dans l’eau',
        duration: '25 min',
        skills: ['Observer', 'Relier structure et propriété', 'Argumenter'],
        context: 'En TP, des élèves ont introduit une pointe de spatule (ou quelques gouttes) de différentes substances dans 5 mL d’eau, puis ont agité.',
        documents: [
          {
            label: 'Document 4',
            title: 'Résultats du test de solubilité',
            blocks: [
              {
                type: 'table',
                head: ['Substance', 'Formule (simplifiée)', 'Observation après agitation'],
                rows: [
                  ['Glucose', 'C~6~H~12~O~6~, cinq groupes –OH', 'Dissous : liquide limpide, une seule phase'],
                  ['Glycérol', 'CH~2~OH–CHOH–CH~2~OH', 'Mélangé : une seule phase'],
                  ['Huile (triglycérides)', '3 fonctions ester et 3 chaînes de 16 à 18 C', 'Deux phases : gouttelettes puis couche en surface'],
                  ['Cholestérol', 'Noyau stérane, chaîne carbonée, un seul –OH', 'Insoluble : poudre en suspension, puis dépôt'],
                ],
              },
            ],
          },
          { label: 'Document 5', title: 'Huile et eau', image: IMG.huileEau, caption: 'Huile versée dans l’eau, après agitation.' },
        ],
        questions: [
          { text: 'Classe les quatre substances en hydrophiles et hydrophobes d’après les observations.', answer: 'Hydrophiles : glucose et glycérol (une seule phase avec l’eau). Hydrophobes : huile et cholestérol (ils ne se mélangent pas à l’eau).' },
          { text: 'Explique la solubilité du glucose en t’appuyant sur la notion de liaison hydrogène.', hint: 'Quels groupes du glucose sont polaires ?', answer: 'Le glucose porte cinq groupes –OH polaires (O δ^−^, H δ^+^). Chacun peut former des liaisons hydrogène avec les molécules d’eau, qui entourent alors chaque molécule de glucose : il se dissout.' },
          { text: 'Le cholestérol possède un groupe –OH. Pourquoi est-il pourtant insoluble dans l’eau ?', answer: 'Son unique –OH est une très petite zone hydrophile comparée au reste de la molécule (noyau stérane et chaîne carbonée, 27 carbones), entièrement hydrophobe. La partie hydrophobe l’emporte : le cholestérol est insoluble dans l’eau.' },
          { text: 'Le glycérol est soluble alors que les triglycérides, qui en dérivent, sont insolubles. Explique ce paradoxe.', answer: 'Dans le triglycéride, les trois –OH du glycérol ont réagi avec trois acides gras pour former des fonctions ester : les groupes capables de liaisons hydrogène ont disparu, et trois longues chaînes hydrophobes ont été ajoutées. La molécule devient presque entièrement hydrophobe.' },
          { text: 'Le cholestérol et les triglycérides circulent pourtant dans le sang, qui est composé surtout d’eau. Propose une hypothèse sur la façon dont ils sont transportés.', hint: 'Une molécule hydrophobe doit être « emballée » par quelque chose qui présente une surface hydrophile.', answer: 'Ils ne peuvent pas être dissous directement : ils sont transportés à l’intérieur de particules (les lipoprotéines, comme les LDL et les HDL) dont la surface est formée de molécules amphiphiles et de protéines, hydrophiles côté sang, alors que le cœur hydrophobe contient les lipides.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Les biomolécules sont des molécules organiques à squelette carboné ; on les lit grâce à leurs fonctions chimiques : alcool, aldéhyde, cétone, acide carboxylique, amine, amide, ester.',
      'Un ose porte une fonction carbonyle (aldose ou cétose) et des fonctions alcool. Le D-glucose est un aldohexose C~6~H~12~O~6~.',
      'En Fischer, le D-glucose a ses –OH à droite, gauche, droite, droite (C2 à C5) ; en Haworth, c’est un cycle de 5 C + 1 O, CH~2~OH en haut, α ou β selon le –OH du C1.',
      'Galactose : différence en C4 ; fructose : cétose, cycle à 5 sommets ; ribose : pentose ; désoxyribose : pas de –OH en C2.',
      'Un acide α-aminé L s’écrit H~2~N–CH(R)–COOH ; son carbone α est asymétrique (sauf glycine).',
      'Un acide gras est saturé ou insaturé ; la notation Cn:p Δx permet d’écrire sa formule. Triglycéride = glycérol + 3 acides gras (esters). Les stéroïdes possèdent le noyau stérane.',
      'Les groupes polaires ou ionisés sont hydrophiles et forment des liaisons hydrogène avec l’eau ; les chaînes hydrocarbonées sont hydrophobes.',
    ],
    method: {
      title: 'Analyser la formule d’une biomolécule',
      steps: [
        'Compter les carbones et repérer le squelette (chaîne, cycle, noyau stérane).',
        'Entourer chaque groupe caractéristique et nommer la fonction correspondante.',
        'En déduire la famille : ose (carbonyle + alcools), acide aminé (amine + acide sur le même carbone), acide gras (longue chaîne + acide), stéroïde (4 cycles).',
        'Repérer les carbones asymétriques (4 groupes différents).',
        'Délimiter les zones hydrophiles et hydrophobes pour prévoir le comportement dans l’eau.',
      ],
    },
    vocabulary: [
      { term: 'Groupe caractéristique', definition: 'Groupe d’atomes fixé sur le squelette carboné qui définit la fonction chimique d’une molécule.' },
      { term: 'Aldose / cétose', definition: 'Ose à fonction aldéhyde (C1) / ose à fonction cétone (le plus souvent en C2).' },
      { term: 'Hexose / pentose', definition: 'Ose à 6 atomes de carbone / ose à 5 atomes de carbone.' },
      { term: 'Projection de Fischer', definition: 'Représentation plane d’une molécule linéaire : chaîne verticale, groupes à gauche ou à droite de chaque carbone.' },
      { term: 'Représentation de Haworth', definition: 'Représentation de la forme cyclique d’un ose, groupes placés au-dessus ou au-dessous du plan du cycle.' },
      { term: 'Carbone asymétrique', definition: 'Carbone lié à quatre atomes ou groupes d’atomes tous différents.' },
      { term: 'Série D / série L', definition: 'Pour un ose : –OH du dernier carbone asymétrique à droite (D). Pour un acide aminé : –NH~2~ à gauche en Fischer (L).' },
      { term: 'Acide α-aminé', definition: 'Molécule portant une fonction amine et une fonction acide carboxylique sur le même carbone α, ainsi qu’une chaîne latérale R.' },
      { term: 'Acide gras', definition: 'Acide carboxylique à longue chaîne carbonée non ramifiée, saturée ou insaturée.' },
      { term: 'Triglycéride', definition: 'Ester formé d’un glycérol et de trois acides gras ; lipide de réserve.' },
      { term: 'Noyau stérane', definition: 'Squelette de trois cycles à 6 carbones et d’un cycle à 5 carbones accolés, propre aux stéroïdes.' },
      { term: 'Électronégativité', definition: 'Capacité d’un atome à attirer les électrons d’une liaison covalente (O > N > C ≈ H).' },
      { term: 'Liaison hydrogène', definition: 'Liaison faible entre un atome H lié à O ou à N, et un autre atome O ou N.' },
      { term: 'Hydrophile / hydrophobe', definition: 'Qui interagit avec l’eau (groupes polaires ou ionisés) / qui ne forme pas de liaisons avec l’eau (chaînes hydrocarbonées).' },
      { term: 'Amphiphile', definition: 'Se dit d’une molécule possédant à la fois une zone hydrophile et une zone hydrophobe.' },
    ],
    mistakes: [
      { wrong: 'Confondre une cétone et un aldéhyde parce que les deux ont un C=O.', right: 'Aldéhyde : C=O en bout de chaîne (–CHO) ; cétone : C=O entre deux carbones (–CO–).' },
      { wrong: 'Dessiner le cycle du glucose avec six carbones.', right: 'Le cycle pyranose contient 5 carbones et 1 oxygène ; le carbone 6 (CH~2~OH) est à l’extérieur, au-dessus du cycle.' },
      { wrong: 'Placer en haut, en Haworth, un –OH qui est à droite en Fischer.', right: 'À droite en Fischer → en bas en Haworth ; à gauche → en haut.' },
      { wrong: 'Numéroter les carbones d’un acide gras à partir du CH~3~ dans la notation Δ.', right: 'Dans la notation Cn:p Δx, le C1 est le carbone du –COOH ; seule la notation oméga compte depuis le CH~3~.' },
      { wrong: 'Dire que toutes les molécules qui contiennent un –OH sont solubles dans l’eau.', right: 'Il faut comparer la zone hydrophile à la zone hydrophobe : le cholestérol a un –OH mais reste insoluble.' },
      { wrong: 'Écrire que le carbone α de la glycine est asymétrique.', right: 'Dans la glycine, R = H : le carbone α porte deux H, il n’est pas asymétrique.' },
    ],
    quiz: [
      { question: 'Le groupe –CHO caractérise la fonction :', choices: ['cétone', 'acide carboxylique', 'aldéhyde', 'ester'], answer: 2, explanation: '–CHO : carbonyle en bout de chaîne, le carbone porte un H. C’est la fonction aldéhyde.' },
      { question: 'La formule R–CO–O–R′ correspond à la fonction :', choices: ['acide carboxylique', 'amide', 'cétone', 'ester'], answer: 3, explanation: 'Le carbonyle est lié à un oxygène, lui-même lié à un carbone : c’est un ester (comme dans les triglycérides).' },
      { question: 'Le D-fructose est :', choices: ['un aldohexose', 'un cétohexose', 'un aldopentose', 'un cétopentose'], answer: 1, explanation: 'Le fructose possède 6 carbones et une fonction cétone en C2 : c’est un cétohexose.' },
      { question: 'Dans la représentation de Haworth de l’α-D-glucose, le –OH du carbone 1 est :', choices: ['au-dessous du plan du cycle', 'au-dessus du plan du cycle', 'dans le plan du cycle', 'remplacé par un H'], answer: 0, explanation: 'Anomère α : –OH du C1 en bas, du côté opposé au CH~2~OH. En haut, ce serait l’anomère β.' },
      { question: 'Le D-désoxyribose diffère du D-ribose par :', choices: ['un carbone de plus', 'une fonction cétone', 'l’absence de –OH sur le carbone 2', 'l’absence de –OH sur le carbone 5'], answer: 2, explanation: 'Désoxy- : le C2 porte deux H au lieu d’un H et d’un –OH (C~5~H~10~O~4~ au lieu de C~5~H~10~O~5~).' },
      { question: 'Pourquoi le carbone α de l’alanine est-il asymétrique ?', choices: ['Il est lié à quatre groupes différents', 'Il porte une double liaison', 'Il est lié à deux atomes d’azote', 'Il porte une charge positive'], answer: 0, explanation: 'Le carbone α de l’alanine est lié à –NH~2~, –COOH, –H et –CH~3~ : quatre groupes différents.' },
      { question: 'La notation C18:1 Δ9 désigne :', choices: ['un acide gras saturé à 18 carbones', 'un acide gras à 18 carbones et 9 doubles liaisons', 'un acide gras à 18 carbones et une double liaison entre C9 et C10', 'un acide gras à 9 carbones'], answer: 2, explanation: '18 carbones, 1 double liaison, qui commence au carbone 9 compté depuis le –COOH : c’est l’acide oléique.' },
      { question: 'Le noyau stérane est formé de :', choices: ['quatre cycles à 6 carbones', 'trois cycles à 6 carbones et un cycle à 5 carbones', 'un cycle de 5 carbones et 1 oxygène', 'deux cycles à 6 carbones'], answer: 1, explanation: 'Trois cycles hexagonaux (A, B, C) et un cycle pentagonal (D) accolés.' },
      { question: 'Quelle liaison est apolaire ?', choices: ['O–H', 'N–H', 'C=O', 'C–H'], answer: 3, explanation: 'C et H ont des électronégativités voisines : la liaison C–H n’est pas polarisée.' },
      { question: 'Une molécule amphiphile :', choices: ['est entièrement hydrophile', 'est entièrement hydrophobe', 'ne contient pas de carbone', 'possède une zone hydrophile et une zone hydrophobe'], answer: 3, explanation: 'Amphiphile = qui possède les deux types de zones, comme un acide gras (tête –COOH, chaîne hydrocarbonée).' },
    ],
    exercises: [
      {
        title: 'Le galactose du lait',
        statement: ['Le lactose du lait libère, lors de sa digestion, du glucose et du galactose.', 'a) Écris la projection de Fischer du D-galactose. b) Indique la position (au-dessus ou au-dessous du plan) de chaque –OH dans la représentation de Haworth de l’α-D-galactose.'],
        answer: ['a) C1 : CHO ; C2 : H – C – OH ; C3 : HO – C – H ; C4 : HO – C – H ; C5 : H – C – OH ; C6 : CH~2~OH.', 'b) C1 (α) : au-dessous ; C2 : au-dessous ; C3 : au-dessus ; C4 : au-dessus (seule différence avec le glucose) ; CH~2~OH : au-dessus du C5.'],
      },
      {
        title: 'Un acide gras oméga-7',
        statement: 'L’acide vaccénique, présent dans le lait, a pour notation C18:1 Δ11. Écris sa formule semi-développée et indique s’il s’agit d’un oméga-7 ou d’un oméga-9.',
        answer: ['Côté acide : 11 − 2 = 9 CH~2~ ; côté méthyle : 18 − 11 − 2 = 5 CH~2~.', 'Formule : CH~3~–(CH~2~)~5~–CH=CH–(CH~2~)~9~–COOH (1 + 5 + 2 + 9 + 1 = 18 carbones).', 'Depuis le CH~3~, la double liaison commence au carbone 18 − 11 = 7 : c’est un oméga-7.'],
      },
      {
        title: 'Lire une molécule inconnue',
        statement: 'La sérine a pour formule HOCH~2~–CH(NH~2~)–COOH. a) Nomme ses fonctions. b) Montre que c’est un acide α-aminé et donne sa chaîne latérale. c) Repère les zones capables de former des liaisons hydrogène avec l’eau.',
        answer: ['a) Une fonction alcool (–OH), une fonction amine (–NH~2~) et une fonction acide carboxylique (–COOH).', 'b) Les fonctions amine et acide sont portées par le même carbone (carbone α) : c’est un acide α-aminé de chaîne latérale R = –CH~2~OH.', 'c) Le –OH, le –NH~2~ et le –COOH sont polaires : tous peuvent former des liaisons hydrogène avec l’eau. La sérine est donc très hydrophile.'],
      },
    ],
    selfCheck: [
      'Je sais reconnaître les sept fonctions chimiques du programme dans une formule.',
      'Je sais dessiner le D-glucose en projection de Fischer et en représentation de Haworth (α et β).',
      'Je sais comparer le galactose, le fructose, le ribose et le désoxyribose au glucose.',
      'Je sais écrire la formule générique d’un acide α-aminé L, et expliquer l’asymétrie du carbone α.',
      'Je sais écrire la formule d’un acide gras saturé ou mono-insaturé à partir de sa notation.',
      'Je sais reconnaître le noyau stérane dans une molécule.',
      'Je sais repérer les zones hydrophiles et hydrophobes d’une biomolécule et prévoir les liaisons hydrogène avec l’eau.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Groupe caractéristique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Groupe_caract%C3%A9ristique' },
      { title: 'Projection de Fischer — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Projection_de_Fischer' },
      { title: 'Projection de Haworth — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Projection_de_Haworth' },
      { title: 'Acide aminé — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_amin%C3%A9' },
      { title: 'Acide gras — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_gras' },
      { title: 'Stéroïde — Wikipédia', url: 'https://fr.wikipedia.org/wiki/St%C3%A9ro%C3%AFde' },
      { title: 'Liaison hydrogène — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Liaison_hydrog%C3%A8ne' },
    ],
  },
};

export default lesson;
