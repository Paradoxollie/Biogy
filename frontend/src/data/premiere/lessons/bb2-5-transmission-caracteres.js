import { img } from '../media';
import brassageInter from '../../../assets/courses/premiere/bb2-5-transmission-caracteres/brassage-inter.webp';
import brassageIntra from '../../../assets/courses/premiere/bb2-5-transmission-caracteres/brassage-intra.webp';
import arbreAlbinisme from '../../../assets/courses/premiere/bb2-5-transmission-caracteres/arbre-albinisme.webp';
import arbreHemophilie from '../../../assets/courses/premiere/bb2-5-transmission-caracteres/arbre-hemophilie.webp';
import arbreHuntington from '../../../assets/courses/premiere/bb2-5-transmission-caracteres/arbre-huntington.webp';

const IMG = {
  inter: img(brassageInter, 'Schéma du brassage interchromosomique pour deux paires de chromosomes portant les gènes A et B : deux dispositions équiprobables des paires en métaphase I donnent quatre types de gamètes, (A/ ; B/), (a/ ; b/), (A/ ; b/) et (a/ ; B/), chacun représentant 25 % des gamètes.', 'schema', 1400, 840),
  intra: img(brassageIntra, 'Schéma du brassage intrachromosomique : appariement de deux chromosomes homologues portant A et B ou a et b, chiasma et crossing-over entre chromatides non sœurs, puis quatre gamètes : deux parentaux (A B) et (a b), deux recombinés (A b) et (a B).', 'schema', 1400, 840),
  albinisme: img(arbreAlbinisme, 'Arbre généalogique sur trois générations : deux parents sains ont une fille atteinte (II-4) ; leur fils sain II-2 et son épouse saine II-1 ont un fils atteint (III-2).', 'schema', 1300, 760),
  hemophilie: img(arbreHemophilie, 'Arbre généalogique sur trois générations : seuls des garçons sont atteints (II-2 et III-3), nés de mères saines ; le fils de l’homme atteint II-2 est sain.', 'schema', 1300, 760),
  huntington: img(arbreHuntington, 'Arbre généalogique sur trois générations : le caractère est présent à chaque génération, chez des hommes et des femmes ; chaque personne atteinte a un parent atteint, et le père atteint I-1 a un fils atteint II-4.', 'schema', 1300, 760),
};

const lesson = {
  version: 2,
  id: 'bb2-5-transmission-caracteres',
  duration: 'Environ 3 séances (cours, simulations de méiose et analyse d’arbres généalogiques)',
  hook: {
    image: IMG.intra,
    question: 'Pourquoi des frères et sœurs, nés des mêmes parents, ne se ressemblent-ils jamais parfaitement ?',
    text: 'Chaque enfant reçoit la moitié des chromosomes de chacun de ses parents, mais jamais la même moitié : la méiose mélange les allèles, puis la fécondation associe au hasard deux gamètes uniques. Dans ce chapitre, tu apprends à expliquer cette diversité par des dessins, puis à lire un arbre généalogique comme le font les généticiens pour comprendre comment une maladie se transmet dans une famille.',
  },
  objectives: [
    'Expliquer par un dessin comment la méiose réalise un brassage interchromosomique et un brassage intrachromosomique.',
    'Montrer que la fécondation amplifie la diversité génétique et construire un tableau de croisement des gamètes.',
    'Utiliser correctement homozygote, hétérozygote, dominance, récessivité, autosome et gonosome.',
    'Identifier le mode de transmission d’un caractère héréditaire à partir d’un arbre généalogique, en argumentant.',
    'Écrire les génotypes des membres d’une famille et calculer la probabilité qu’un enfant soit atteint.',
  ],
  prerequisites: [
    'Gène, allèle, génotype et phénotype (leçon 2.1).',
    'Méiose : appariement des homologues, anaphase I et anaphase II ; fécondation : n + n = 2n (leçon 2.4).',
    'Calcul de probabilités simples (une chance sur deux, sur quatre).',
  ],
  program: [
    'Expliquer par un dessin comment la méiose et la fécondation permettent les deux types de brassage chromosomique (brassage interchromosomique et intrachromosomique, appariement, chromosomes homologues, crossing-over, ségrégation aléatoire).',
    'Identifier le mode de transmission d’un caractère héréditaire à partir d’un arbre généalogique (homozygote et hétérozygote, allèles, dominance, récessivité, autosome et gonosome).',
    'Construire un tableau de croisement de gamètes ; analyser des arbres généalogiques comparés.',
  ],

  course: {
    parts: [
      {
        title: 'Allèles dominants, récessifs ou codominants',
        intro: 'Chez un hétérozygote, deux allèles différents sont présents : lequel s’exprime dans le phénotype ?',
        blocks: [
          { type: 'p', text: 'Pour chaque gène porté par les autosomes, un individu possède deux allèles, un sur chaque chromosome homologue. Il est **homozygote** si ces deux allèles sont identiques, **hétérozygote** s’ils sont différents. La question est alors de savoir quel phénotype présente un hétérozygote.' },
          { type: 'definition', term: 'Allèle dominant', text: 'allèle qui s’exprime dans le phénotype même lorsqu’il est présent en un seul exemplaire, c’est-à-dire chez l’hétérozygote. On le note par une **majuscule** (A).' },
          { type: 'definition', term: 'Allèle récessif', text: 'allèle qui ne s’exprime dans le phénotype que s’il est présent en deux exemplaires, chez l’homozygote. On le note par une **minuscule** (a). Chez un hétérozygote (A//a), il est « masqué » par l’allèle dominant.' },
          {
            type: 'table',
            caption: 'Génotypes et phénotypes pour un gène à deux allèles, A dominant et a récessif',
            head: ['Génotype', 'Nom', 'Phénotype'],
            rows: [
              ['(A//A)', 'Homozygote', '[A]'],
              ['(A//a)', 'Hétérozygote', '[A] : l’allèle a est présent mais ne s’exprime pas'],
              ['(a//a)', 'Homozygote', '[a]'],
            ],
          },
          { type: 'definition', term: 'Allèles codominants', text: 'allèles qui s’expriment tous les deux chez l’hétérozygote. Exemple : pour le groupe sanguin, les allèles A et B sont codominants (une personne (A//B) est du groupe [AB]), et tous deux sont dominants sur l’allèle O (une personne (A//O) est du groupe [A]).' },
          { type: 'definition', term: 'Autosome et gonosome', text: 'les **autosomes** sont les 22 paires de chromosomes identiques chez l’homme et la femme ; les **gonosomes** sont les chromosomes sexuels X et Y. Un gène porté par le chromosome X est présent en **deux exemplaires chez la femme** (XX) mais en **un seul chez l’homme** (XY) : chez l’homme, un allèle récessif porté par le X s’exprime donc toujours.' },
          { type: 'p', text: 'Pour un gène porté par le chromosome X, on note l’allèle en exposant : une femme conductrice (porteuse saine) de l’hémophilie s’écrit X^H^X^h^, un homme hémophile X^h^Y, un homme sain X^H^Y.' },
          {
            type: 'retenir',
            items: [
              'Un allèle **dominant** (majuscule) s’exprime chez l’hétérozygote ; un allèle **récessif** (minuscule) ne s’exprime qu’à l’état homozygote.',
              'Des allèles **codominants** s’expriment tous les deux (groupe sanguin [AB]).',
              'Un gène porté par le chromosome X n’existe qu’en un exemplaire chez l’homme : un allèle récessif lié à X s’exprime chez lui.',
            ],
          },
        ],
      },

      {
        title: 'Le brassage interchromosomique',
        intro: 'Lors de la méiose, chaque paire de chromosomes homologues se répartit au hasard entre les deux cellules filles.',
        blocks: [
          { type: 'p', text: 'En métaphase I, les paires de chromosomes homologues s’alignent sur le plan équatorial. L’orientation de chaque paire, c’est-à-dire le côté où se place le chromosome d’origine paternelle, est **aléatoire** et **indépendante** de celle des autres paires. À l’anaphase I, chaque cellule fille reçoit donc une combinaison au hasard de chromosomes paternels et maternels : c’est la **ségrégation aléatoire** des chromosomes homologues.' },
          { type: 'definition', term: 'Brassage interchromosomique', text: 'nouvelle combinaison d’allèles produite par la répartition aléatoire et indépendante des chromosomes homologues de chaque paire en anaphase I. Il concerne des gènes situés sur **des chromosomes différents**.' },
          { type: 'figure', image: IMG.inter, caption: 'Le brassage interchromosomique chez un individu (A//a ; B//b) dont les deux gènes sont portés par deux paires de chromosomes différentes : les deux dispositions possibles en métaphase I sont équiprobables, d’où quatre types de gamètes en proportions égales.', size: 'wide' },
          {
            type: 'formula',
            title: 'Nombre de combinaisons de chromosomes dans les gamètes',
            expression: 'nombre de combinaisons = 2^n^',
            legend: [
              { symbol: 'n', meaning: 'nombre de paires de chromosomes (n = 23 chez l’être humain)' },
            ],
          },
          { type: 'example', title: 'chez l’être humain', text: 'Avec 23 paires de chromosomes, une personne peut produire 2^23^ ≈ **8,4 millions** de combinaisons différentes de chromosomes dans ses gamètes, rien que par le brassage interchromosomique.' },
          {
            type: 'retenir',
            items: [
              'En anaphase I, chaque paire d’homologues se sépare **au hasard** et **indépendamment** des autres : c’est le brassage interchromosomique.',
              'Un individu (A//a ; B//b), dont les gènes sont sur des chromosomes différents, produit **4 types de gamètes** équiprobables (25 % chacun).',
              'Avec n paires de chromosomes, on obtient 2^n^ combinaisons : 2^23^ ≈ 8,4 millions chez l’être humain.',
            ],
          },
        ],
      },

      {
        title: 'Le brassage intrachromosomique',
        intro: 'Les chromosomes homologues ne se contentent pas de se séparer : ils échangent aussi des morceaux.',
        blocks: [
          { type: 'p', text: 'En prophase I, les chromosomes homologues s’apparient étroitement sur toute leur longueur. Les chromatides de deux homologues peuvent alors se croiser : ces points de contact, visibles au microscope sous forme de X, sont appelés **chiasmas**. Au niveau d’un chiasma, deux **chromatides non sœurs** (une de chaque homologue) se cassent et échangent des segments : c’est le **crossing-over** (ou enjambement).' },
          { type: 'definition', term: 'Brassage intrachromosomique', text: 'nouvelle combinaison d’allèles **sur un même chromosome**, produite par crossing-over entre chromatides non sœurs de deux chromosomes homologues, en prophase I. Il concerne des gènes situés sur **le même chromosome** (gènes liés).' },
          { type: 'figure', image: IMG.intra, caption: 'Le brassage intrachromosomique chez un individu dont un chromosome porte A et B et l’homologue a et b : un crossing-over entre les deux gènes produit des chromatides recombinées, donc des gamètes (A b/) et (a B/) qui n’existaient pas chez les parents.', size: 'wide' },
          {
            type: 'compare',
            title: 'Gamètes parentaux et gamètes recombinés',
            columns: [
              { title: 'Gamètes parentaux', items: ['Ils portent les combinaisons d’allèles déjà présentes sur les chromosomes de l’individu : (A B/) et (a b/).', 'Ils sont toujours majoritaires.'] },
              { title: 'Gamètes recombinés', items: ['Ils portent de nouvelles combinaisons : (A b/) et (a B/).', 'Ils ne se forment que si un crossing-over a eu lieu entre les deux gènes.', 'Ils sont d’autant plus fréquents que les gènes sont éloignés sur le chromosome.'] },
            ],
          },
          { type: 'p', text: 'Chez l’être humain, chaque paire de chromosomes présente en général un à trois crossing-over à chaque méiose. Associé au brassage interchromosomique, le brassage intrachromosomique rend le nombre de gamètes génétiquement différents **pratiquement illimité** : deux gamètes d’une même personne ne sont jamais identiques.' },
          {
            type: 'retenir',
            items: [
              'En prophase I, les homologues appariés forment des **chiasmas** où des chromatides non sœurs échangent des segments : c’est le **crossing-over**.',
              'Le crossing-over crée des chromosomes **recombinés**, donc de nouvelles associations d’allèles sur un même chromosome.',
              'Les deux brassages de la méiose produisent une diversité de gamètes pratiquement infinie.',
            ],
          },
        ],
      },

      {
        title: 'La fécondation amplifie la diversité : le tableau de croisement',
        intro: 'La fécondation réunit au hasard un gamète de chaque parent : chaque cellule-œuf est unique.',
        blocks: [
          { type: 'p', text: 'Sans même compter les crossing-over, la rencontre au hasard d’un des 8,4 millions de types de spermatozoïdes avec un des 8,4 millions de types d’ovocytes donne environ 8,4 millions × 8,4 millions ≈ **70 000 milliards** de combinaisons possibles. Chaque individu est donc génétiquement unique, sauf les **vrais jumeaux**, issus d’une même cellule-œuf qui s’est séparée en deux embryons.' },
          { type: 'definition', term: 'Tableau de croisement', text: 'tableau à double entrée (ou échiquier de croisement) qui présente les gamètes d’un parent en ligne, ceux de l’autre parent en colonne, et dans chaque case le génotype de la cellule-œuf obtenue. Si les gamètes sont équiprobables, chaque case a la même probabilité.' },
          {
            type: 'table',
            caption: 'Croisement de deux parents hétérozygotes (A//a) × (A//a)',
            head: ['Gamètes', 'Père : A (1/2)', 'Père : a (1/2)'],
            rows: [
              ['Mère : A (1/2)', '(A//A) [A] : 1/4', '(A//a) [A] : 1/4'],
              ['Mère : a (1/2)', '(A//a) [A] : 1/4', '(a//a) [a] : 1/4'],
            ],
          },
          { type: 'p', text: 'Bilan : 1/4 (A//A), 1/2 (A//a) et 1/4 (a//a), soit **3/4 de phénotype [A]** et **1/4 de phénotype [a]**. Ces probabilités s’appliquent à **chaque** enfant, indépendamment des autres : avoir eu un premier enfant atteint ne change pas le risque pour le suivant.' },
          { type: 'example', title: 'drépanocytose', text: 'Deux parents porteurs sains (Hb^A^//Hb^S^) ont, à chaque grossesse, une probabilité de 1/4 d’avoir un enfant malade (Hb^S^//Hb^S^), de 1/2 d’avoir un enfant porteur sain et de 1/4 d’avoir un enfant (Hb^A^//Hb^A^).' },
          {
            type: 'table',
            caption: 'Croisement pour un gène porté par le chromosome X : mère conductrice X^H^X^h^ × père sain X^H^Y',
            head: ['Gamètes', 'Père : X^H^ (1/2)', 'Père : Y (1/2)'],
            rows: [
              ['Mère : X^H^ (1/2)', 'X^H^X^H^ : fille saine (1/4)', 'X^H^Y : garçon sain (1/4)'],
              ['Mère : X^h^ (1/2)', 'X^H^X^h^ : fille conductrice, saine (1/4)', 'X^h^Y : garçon hémophile (1/4)'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'La fécondation associe **au hasard** deux gamètes uniques : environ 70 000 milliards de combinaisons sans compter les crossing-over.',
              'Le **tableau de croisement** permet de prévoir les génotypes et phénotypes des enfants et leurs probabilités.',
              '(A//a) × (A//a) donne 1/4 d’enfants [a] ; ce risque est le même à chaque naissance.',
            ],
          },
        ],
      },

      {
        title: 'Identifier un mode de transmission sur un arbre généalogique',
        intro: 'Un arbre généalogique est un document de travail du généticien : il se lit avec une méthode rigoureuse.',
        blocks: [
          {
            type: 'list',
            title: 'Les conventions d’un arbre généalogique',
            items: [
              'Un **carré** représente un homme, un **rond** une femme ; un symbole **plein** indique une personne atteinte (ou porteuse du caractère étudié).',
              'Un trait horizontal relie les deux parents ; un trait vertical descend vers leurs enfants, rangés de gauche à droite par ordre de naissance.',
              'Les générations sont numérotées en chiffres romains (I, II, III) et les individus de chaque génération en chiffres arabes : II-4 est la 4e personne de la génération II.',
            ],
          },
          {
            type: 'steps',
            title: 'Méthode : identifier le mode de transmission',
            items: [
              { title: 'L’allèle est-il dominant ou récessif ?', text: 'Si deux parents **non atteints** ont un enfant **atteint**, l’allèle responsable est **récessif** : chaque parent le portait sans l’exprimer. Si deux parents atteints ont un enfant non atteint, l’allèle est dominant. Un caractère présent à chaque génération, chaque atteint ayant un parent atteint, suggère un allèle dominant.' },
              { title: 'Le gène est-il porté par un autosome ou par le chromosome X ?', text: 'Teste l’hypothèse « gène porté par X ». Pour un allèle **récessif lié à X** : une fille atteinte a forcément un père atteint, et les garçons atteints sont bien plus nombreux. Une **transmission de père à fils** exclut un gène porté par X, car un père transmet son chromosome Y à ses fils. Si l’hypothèse X est contredite, le gène est **autosomique**.' },
              { title: 'Écrire les génotypes', text: 'Commence par les personnes dont le génotype est certain (les atteints pour un caractère récessif), puis remonte aux parents et descends aux enfants.' },
              { title: 'Calculer un risque', text: 'Utilise un tableau de croisement à partir des génotypes des parents ; si un génotype est incertain, multiplie les probabilités.' },
            ],
          },
          { type: 'figure', image: IMG.albinisme, caption: 'Transmission de l’albinisme dans une famille (exemple traité ci-dessous).', size: 'wide' },
          { type: 'example', title: 'analyse de l’arbre de l’albinisme', text: ['Dominant ou récessif ? II-4 est atteinte alors que ses parents I-1 et I-2 ne le sont pas : l’allèle responsable est récessif. On le note a, l’allèle normal A.', 'Autosome ou X ? Si l’allèle était récessif et porté par X, la fille atteinte II-4 serait X^a^X^a^ et aurait reçu un X^a^ de son père : I-1 serait X^a^Y, donc atteint. Or il est sain : le gène est autosomique.', 'Génotypes : II-4 et III-2 sont (a//a) ; leurs parents, sains, sont tous hétérozygotes (A//a) : I-1, I-2, II-1 et II-2. Les autres personnes saines sont (A//A) ou (A//a).'] },
          {
            type: 'table',
            caption: 'Les indices des principaux modes de transmission',
            head: ['Mode de transmission', 'Indices sur l’arbre', 'Exemples'],
            rows: [
              ['Autosomique récessif', 'Enfant atteint né de deux parents sains ; le caractère peut « sauter » des générations ; filles et garçons touchés.', 'Albinisme, drépanocytose, mucoviscidose'],
              ['Autosomique dominant', 'Chaque atteint a au moins un parent atteint ; présent à chaque génération ; transmission possible de père à fils.', 'Maladie de Huntington, achondroplasie'],
              ['Récessif lié à X', 'Surtout des garçons atteints, nés de mères saines (conductrices) ; jamais de transmission de père à fils.', 'Hémophilie A, daltonisme, myopathie de Duchenne'],
              ['Mitochondrial (leçon 2.4)', 'Transmis par les mères à tous leurs enfants, jamais par les pères.', 'Neuropathie optique de Leber'],
            ],
          },
          { type: 'warning', title: 'Rester prudent', text: 'Une famille compte peu d’enfants : un arbre permet souvent de conclure qu’une hypothèse est **exclue** ou **la plus probable**, rarement de la démontrer. Pour une maladie rare, on suppose qu’une personne venue d’une autre famille n’est pas porteuse, sauf indication contraire. Écris toujours tes arguments en citant les individus (« II-4 est atteinte alors que… »).' },
          {
            type: 'retenir',
            items: [
              'Deux parents sains qui ont un enfant atteint → allèle **récessif**.',
              'Une fille atteinte dont le père est sain → pour un allèle récessif, le gène n’est **pas lié à X** : il est **autosomique**.',
              'Une transmission **père → fils** exclut un gène porté par le chromosome X.',
              'On argumente en citant les individus, puis on écrit les génotypes et on calcule les risques avec un tableau de croisement.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Les deux premières activités sont des simulations de méiose à réaliser par des dessins ; les suivantes sont des analyses d’arbres généalogiques réels dans leur structure. Rédige toujours tes arguments en citant les individus.',
    activities: [
      {
        title: 'Dessiner le brassage interchromosomique',
        duration: '25 min',
        skills: ['Schématiser', 'Calculer'],
        context: 'On étudie une cellule à 2n = 4 chromosomes d’un individu de génotype (A//a ; B//b), les deux gènes étant situés sur deux paires de chromosomes différentes.',
        documents: [
          { label: 'Document 1', title: 'Brassage interchromosomique', image: IMG.inter, caption: 'Les deux dispositions possibles en métaphase I.' },
        ],
        questions: [
          { text: 'Explique pourquoi les deux dispositions de la métaphase I ont la même probabilité.', answer: 'L’orientation de chaque paire de chromosomes homologues sur le plan équatorial est aléatoire et indépendante de celle de l’autre paire : le chromosome portant B a autant de chances de se placer du même côté que celui portant A que du côté opposé.' },
          { text: 'Écris les génotypes des gamètes obtenus et leurs proportions.', answer: 'Quatre types de gamètes : (A/ ; B/), (a/ ; b/), (A/ ; b/) et (a/ ; B/), chacun dans la proportion de 1/4 (25 %).' },
          { text: 'Réalise le même dessin pour un individu (A//a ; B//b ; D//d), les trois gènes étant sur trois paires différentes. Combien de types de gamètes obtiens-tu ?', hint: 'Combien de dispositions différentes des trois paires sont possibles en métaphase I ?', answer: 'Il existe 4 dispositions possibles des trois paires, chacune donnant deux types de gamètes : on obtient 2^3^ = 8 types de gamètes : (A/ ; B/ ; D/), (A/ ; B/ ; d/), (A/ ; b/ ; D/), (A/ ; b/ ; d/), (a/ ; B/ ; D/), (a/ ; B/ ; d/), (a/ ; b/ ; D/), (a/ ; b/ ; d/), chacun dans la proportion de 1/8.' },
          { text: 'Calcule le nombre de combinaisons de chromosomes possibles dans les gamètes humains, puis le nombre de cellules-œufs différentes que peut produire un couple, sans tenir compte des crossing-over.', answer: '2^23^ = 8 388 608, soit environ 8,4 millions de combinaisons par parent. Pour un couple : 8,4 millions × 8,4 millions ≈ 7 × 10^13^, soit environ 70 000 milliards de cellules-œufs génétiquement différentes.' },
        ],
      },
      {
        title: 'Simuler un crossing-over',
        duration: '25 min',
        skills: ['Schématiser', 'Raisonner', 'Calculer'],
        context: 'Un individu possède, sur une paire de chromosomes, un chromosome portant les allèles A et B et un homologue portant a et b : son génotype s’écrit (A B//a b).',
        documents: [
          { label: 'Document 2', title: 'Brassage intrachromosomique', image: IMG.intra, caption: 'Crossing-over entre les gènes A et B.' },
          { label: 'Document 3', title: 'Une donnée de comptage', text: 'Dans l’ensemble des méioses de cet individu, on estime qu’un crossing-over se produit entre les gènes A et B dans 20 % des cellules. Chaque crossing-over ne concerne que deux des quatre chromatides de la paire.' },
        ],
        questions: [
          { text: 'Sans crossing-over, quels types de gamètes cet individu produit-il ?', answer: 'Seulement deux types de gamètes parentaux, en proportions égales : (A B/) et (a b/).' },
          { text: 'Dessine la paire de chromosomes en prophase I avec un chiasma entre A et B, puis les quatre chromatides après le crossing-over.', hint: 'Les chromatides sœurs d’un même chromosome sont identiques avant l’échange.', answer: 'Avant l’échange : deux chromatides A B (chromosome 1) et deux chromatides a b (chromosome 2). Au chiasma, une chromatide A B et une chromatide a b échangent leur segment portant B ou b. Après l’échange : A B, A b, a B, a b. Compare avec le document 2.' },
          { text: 'Quelle proportion de gamètes recombinés une cellule ayant réalisé ce crossing-over produit-elle ?', answer: 'Elle produit quatre gamètes : deux parentaux (A B/) et (a b/), et deux recombinés (A b/) et (a B/), soit 2 sur 4 = 50 % de gamètes recombinés.' },
          { text: 'À l’aide du document 3, calcule le pourcentage de gamètes recombinés produits par cet individu.', answer: 'Seules 20 % des méioses comportent un crossing-over entre A et B, et elles donnent 50 % de gamètes recombinés : 20 % × 0,5 = 10 % de gamètes recombinés (5 % (A b/) et 5 % (a B/)) ; les 90 % restants sont parentaux (45 % (A B/) et 45 % (a b/)).' },
        ],
      },
      {
        title: 'Analyser un arbre : l’hémophilie A',
        duration: '30 min',
        skills: ['Analyser un arbre', 'Argumenter', 'Calculer un risque'],
        context: 'L’hémophilie A est une maladie de la coagulation du sang : un déficit en facteur VIII provoque des saignements prolongés. Le gène du facteur VIII est situé sur le chromosome X.',
        documents: [
          { label: 'Document 4', title: 'Une famille touchée par l’hémophilie A', image: IMG.hemophilie, caption: 'Arbre généalogique.' },
        ],
        questions: [
          { text: 'L’allèle responsable de l’hémophilie est-il dominant ou récessif ? Justifie à partir de l’arbre.', answer: 'II-2 est atteint alors que ses parents I-1 et I-2 sont sains : l’allèle responsable est récessif. On le note h, l’allèle normal H.' },
          { text: 'Relève deux observations de l’arbre compatibles avec un gène porté par le chromosome X.', answer: 'Seuls des garçons sont atteints (II-2 et III-3), et tous sont nés de mères saines (I-2 et II-5), qui sont donc conductrices. De plus, le fils de l’homme atteint II-2 (III-2) est sain : il n’y a pas de transmission de père à fils.' },
          { text: 'Écris les génotypes de I-2, II-2, II-5, III-1 et III-2.', hint: 'Un garçon reçoit son chromosome X de sa mère et son Y de son père.', answer: 'I-2 : X^H^X^h^ (conductrice, elle a transmis X^h^ à II-2). II-2 : X^h^Y. II-5 : X^H^X^h^ (elle a un fils atteint, III-3, dont le X vient d’elle). III-1 : X^H^X^h^ (elle a forcément reçu le X^h^ de son père II-2) : conductrice. III-2 : X^H^Y (il a reçu Y de son père et X^H^ de sa mère II-1).' },
          { text: 'II-5 et II-6 attendent un nouvel enfant. Quelle est la probabilité qu’il soit un garçon hémophile ? Si l’on sait que c’est un garçon, quelle est la probabilité qu’il soit hémophile ?', answer: 'Croisement X^H^X^h^ × X^H^Y : 1/4 X^H^X^H^, 1/4 X^H^X^h^, 1/4 X^H^Y, 1/4 X^h^Y. La probabilité d’un garçon hémophile est de 1/4. Si l’on sait que c’est un garçon, il reçoit X^H^ ou X^h^ de sa mère avec la même probabilité : 1/2.' },
        ],
      },
      {
        title: 'Analyser un arbre : la maladie de Huntington',
        duration: '25 min',
        skills: ['Analyser un arbre', 'Argumenter'],
        context: 'La maladie de Huntington est une maladie rare du système nerveux, qui se déclare le plus souvent vers 35 à 45 ans. Elle est due à un allèle anormal d’un gène situé sur le chromosome 4. Les familles concernées sont accompagnées par des consultations de conseil génétique.',
        documents: [
          { label: 'Document 5', title: 'Une famille touchée par la maladie de Huntington', image: IMG.huntington, caption: 'Arbre généalogique (personnes atteintes identifiées à l’âge adulte).' },
        ],
        questions: [
          { text: 'Montre que l’hypothèse d’un allèle dominant est la plus probable.', answer: 'Chaque personne atteinte (II-2, II-4, III-1, III-3, III-4) a un parent atteint, et la maladie est présente à chaque génération. Si l’allèle était récessif, les conjoints sains venus d’autres familles (I-2, II-1, II-5) devraient tous être porteurs, ce qui est très improbable pour une maladie rare. L’allèle responsable est donc dominant.' },
          { text: 'Le gène peut-il être porté par le chromosome X ? Justifie avec un individu précis.', answer: 'Non : I-1, homme atteint, a un fils atteint (II-4), et II-4 a lui aussi un fils atteint (III-4). Or un père transmet son chromosome Y, et non son X, à ses fils : une transmission de père à fils exclut un gène porté par X. Le gène est autosomique, ce que confirme sa localisation sur le chromosome 4.' },
          { text: 'Écris les génotypes de I-1, I-2, II-4 et III-5, en notant H l’allèle de la maladie et h l’allèle normal.', answer: 'I-2 et III-5, sains : (h//h). I-1 est atteint et a des enfants sains (II-3) : il est hétérozygote (H//h). II-4, atteint, a une mère saine (h//h) : il a reçu h d’elle, il est donc (H//h).' },
          { text: 'Quelle est la probabilité que le futur enfant de III-3 (atteint) et d’une conjointe saine soit porteur de l’allèle de la maladie ?', answer: 'III-3 est (H//h), car sa mère II-2 est atteinte et son père II-1 sain (h//h). Croisement (H//h) × (h//h) : 1/2 (H//h) et 1/2 (h//h). La probabilité est de 1/2, à chaque naissance.' },
        ],
      },
      {
        title: 'Calculer un risque : albinisme et conseil génétique',
        duration: '20 min',
        skills: ['Raisonner', 'Calculer'],
        context: 'Dans la famille touchée par l’albinisme étudiée dans le cours, II-3, sœur saine de II-4, souhaite avoir un enfant. Elle consulte un généticien.',
        documents: [
          { label: 'Document 6', title: 'La famille de II-3', image: IMG.albinisme, caption: 'Arbre généalogique.' },
        ],
        questions: [
          { text: 'Quels sont les génotypes possibles de II-3 ? Avec quelles probabilités ?', hint: 'Ses parents sont (A//a) × (A//a), et l’on sait qu’elle n’est pas atteinte.', answer: 'Ses parents sont (A//a) × (A//a) : un enfant est (A//A) avec une probabilité de 1/4, (A//a) de 1/2, (a//a) de 1/4. Comme II-3 n’est pas atteinte, on ne garde que les cas (A//A) et (A//a) : (A//A) avec une probabilité de 1/3 et (A//a) avec une probabilité de 2/3.' },
          { text: 'Son conjoint est hétérozygote (A//a). Calcule la probabilité que leur enfant soit atteint.', answer: 'L’enfant ne peut être atteint que si II-3 est (A//a), probabilité 2/3. Dans ce cas, le croisement (A//a) × (A//a) donne 1/4 d’enfants (a//a). Probabilité totale : 2/3 × 1/4 = 1/6.' },
          { text: 'Et si son conjoint est issu d’une famille sans albinisme, et considéré comme (A//A) ?', answer: 'Un parent (A//A) transmet toujours A : l’enfant reçoit au moins un allèle A et ne peut pas être atteint. La probabilité est nulle ; l’enfant peut seulement être porteur (A//a).' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un allèle dominant s’exprime chez l’hétérozygote ; un allèle récessif ne s’exprime qu’à l’état homozygote ; des allèles codominants s’expriment tous les deux.',
      'Brassage interchromosomique : en anaphase I, les homologues de chaque paire se répartissent au hasard et indépendamment ; 2^n^ combinaisons, soit 2^23^ ≈ 8,4 millions chez l’être humain.',
      'Brassage intrachromosomique : en prophase I, des crossing-over entre chromatides non sœurs créent des chromosomes recombinés.',
      'La fécondation associe au hasard deux gamètes uniques : chaque individu est génétiquement unique, sauf les vrais jumeaux.',
      'Un tableau de croisement donne les génotypes possibles des enfants et leurs probabilités, valables à chaque naissance.',
      'Sur un arbre : deux parents sains avec un enfant atteint → allèle récessif ; fille atteinte de père sain → récessif autosomique ; transmission père → fils → gène non porté par X.',
    ],
    method: {
      title: 'Exploiter un arbre généalogique',
      steps: [
        'Repérer les personnes atteintes et leur sexe, génération par génération.',
        'Déterminer si l’allèle est dominant ou récessif, en citant un couple précis.',
        'Tester l’hypothèse d’un gène porté par le chromosome X et conclure : autosomique ou lié à X.',
        'Écrire les génotypes certains, puis les génotypes possibles.',
        'Calculer un risque à l’aide d’un tableau de croisement, en multipliant les probabilités si un génotype est incertain.',
      ],
    },
    vocabulary: [
      { term: 'Homozygote', definition: 'Individu qui possède deux allèles identiques d’un gène.' },
      { term: 'Hétérozygote', definition: 'Individu qui possède deux allèles différents d’un gène.' },
      { term: 'Allèle dominant', definition: 'Allèle qui s’exprime dans le phénotype chez l’hétérozygote.' },
      { term: 'Allèle récessif', definition: 'Allèle qui ne s’exprime qu’à l’état homozygote.' },
      { term: 'Codominance', definition: 'Expression simultanée de deux allèles chez l’hétérozygote (groupe sanguin AB).' },
      { term: 'Autosome', definition: 'Chromosome non sexuel ; l’être humain en possède 22 paires.' },
      { term: 'Gonosome', definition: 'Chromosome sexuel, X ou Y.' },
      { term: 'Brassage interchromosomique', definition: 'Répartition aléatoire et indépendante des homologues de chaque paire en anaphase I.' },
      { term: 'Brassage intrachromosomique', definition: 'Recombinaison d’allèles sur un même chromosome par crossing-over en prophase I.' },
      { term: 'Chiasma', definition: 'Point de croisement visible entre deux chromatides non sœurs de chromosomes homologues appariés.' },
      { term: 'Crossing-over', definition: 'Échange de segments entre chromatides non sœurs de deux homologues.' },
      { term: 'Gamète recombiné', definition: 'Gamète portant une combinaison d’allèles absente des chromosomes du parent.' },
      { term: 'Tableau de croisement', definition: 'Tableau croisant les gamètes des deux parents pour prévoir les génotypes des enfants.' },
      { term: 'Conductrice', definition: 'Femme hétérozygote pour un allèle récessif lié à X, saine mais capable de le transmettre.' },
    ],
    mistakes: [
      { wrong: 'Penser qu’un allèle dominant est plus fréquent ou « plus fort » qu’un allèle récessif.', right: 'Dominant signifie seulement qu’il s’exprime chez l’hétérozygote ; la maladie de Huntington est dominante mais rare.' },
      { wrong: 'Confondre brassage interchromosomique (anaphase I) et intrachromosomique (prophase I).', right: 'Inter : séparation aléatoire des paires de chromosomes ; intra : échanges entre chromatides de deux homologues.' },
      { wrong: 'Dire qu’un crossing-over a lieu entre chromatides sœurs.', right: 'Il a lieu entre chromatides non sœurs, c’est-à-dire appartenant à deux chromosomes homologues.' },
      { wrong: 'Croire qu’après un premier enfant atteint, les suivants seront forcément sains (« une chance sur quatre déjà utilisée »).', right: 'Chaque fécondation est indépendante : le risque est le même à chaque naissance.' },
      { wrong: 'Conclure « lié au sexe » dès que plus de garçons que de filles sont atteints dans une petite famille.', right: 'Il faut tester l’hypothèse avec des individus précis (fille atteinte et son père, transmission père → fils).' },
    ],
    quiz: [
      { question: 'Un individu (A//a) de phénotype [A] montre que :', choices: ['L’allèle a est dominant', 'L’allèle A est dominant', 'Les allèles sont codominants', 'Il est homozygote'], answer: 1, explanation: 'Chez l’hétérozygote, seul l’allèle A s’exprime : il est dominant, a est récessif.' },
      { question: 'Le brassage interchromosomique a lieu :', choices: ['En prophase I', 'En anaphase I', 'En anaphase II', 'Lors de la fécondation uniquement'], answer: 1, explanation: 'Il résulte de la répartition aléatoire des chromosomes homologues lors de leur séparation en anaphase I.' },
      { question: 'Un individu (A//a ; B//b), gènes sur deux paires différentes, produit :', choices: ['2 types de gamètes', '4 types de gamètes équiprobables', '8 types de gamètes', '1 seul type de gamète'], answer: 1, explanation: '(A/ ; B/), (A/ ; b/), (a/ ; B/), (a/ ; b/), chacun 25 %.' },
      { question: 'Le crossing-over :', choices: ['Sépare les chromatides sœurs', 'Échange des segments entre chromatides non sœurs', 'Double le nombre de chromosomes', 'A lieu pendant la mitose'], answer: 1, explanation: 'En prophase I, deux chromatides de chromosomes homologues échangent des segments au niveau d’un chiasma.' },
      { question: 'Deux parents (A//a) ont un enfant. La probabilité qu’il soit [a] est :', choices: ['1/2', '3/4', '1/4', '0'], answer: 2, explanation: 'Seule la combinaison (a//a), une case sur quatre du tableau de croisement, donne le phénotype [a].' },
      { question: 'Deux parents sains ont un enfant atteint. On peut conclure que l’allèle responsable est :', choices: ['Dominant', 'Récessif', 'Lié à Y', 'Mitochondrial'], answer: 1, explanation: 'Les parents portaient l’allèle sans l’exprimer : il est récessif.' },
      { question: 'Une transmission d’un père atteint à son fils atteint permet d’exclure :', choices: ['Un gène autosomique', 'Un gène porté par le chromosome X', 'Un allèle dominant', 'Une transmission héréditaire'], answer: 1, explanation: 'Un père transmet son chromosome Y à ses fils, jamais son X.' },
      { question: 'Une femme conductrice de l’hémophilie a pour génotype :', choices: ['X^h^X^h^', 'X^H^Y', 'X^H^X^h^', 'X^h^Y'], answer: 2, explanation: 'Elle porte un allèle h masqué par l’allèle H : elle est saine mais peut le transmettre.' },
    ],
    exercises: [
      {
        title: 'Groupes sanguins',
        statement: 'Une femme de groupe [A], de génotype (A//O), et un homme de groupe [B], de génotype (B//O), ont des enfants. Construis le tableau de croisement et donne les groupes sanguins possibles avec leurs probabilités.',
        answer: ['Gamètes de la mère : A (1/2), O (1/2). Gamètes du père : B (1/2), O (1/2).', 'Enfants : (A//B) [AB] 1/4 ; (A//O) [A] 1/4 ; (B//O) [B] 1/4 ; (O//O) [O] 1/4. Les quatre groupes sont possibles, chacun avec une probabilité de 1/4.'],
      },
      {
        title: 'Un caractère récessif lié à X',
        statement: 'Le daltonisme (vision anormale des couleurs) est dû à un allèle récessif d porté par le chromosome X. Un homme daltonien et une femme non porteuse ont une fille. a) Quel est son génotype ? b) Elle a plus tard un enfant avec un homme à la vision normale : quelle est la probabilité que ce soit un garçon daltonien ?',
        answer: ['a) Le père X^d^Y transmet son X^d^ à toutes ses filles ; la mère non porteuse transmet X^D^. La fille est X^D^X^d^ : elle voit normalement mais est conductrice.', 'b) Croisement X^D^X^d^ × X^D^Y : 1/4 X^D^X^D^, 1/4 X^D^X^d^, 1/4 X^D^Y, 1/4 X^d^Y. La probabilité d’un garçon daltonien est de 1/4.'],
      },
      {
        title: 'Rédiger avec des arguments',
        statement: 'Dans une famille, un caractère touche une fille (III-2) dont les deux parents (II-3 et II-4) sont sains. Rédige le raisonnement complet qui permet de conclure sur le mode de transmission.',
        answer: 'III-2 est atteinte alors que ses parents II-3 et II-4 sont sains : l’allèle responsable est donc récessif (on le note a), chacun des parents le portant sans l’exprimer. Si le gène était porté par le chromosome X, la fille atteinte serait X^a^X^a^ et aurait reçu un X^a^ de son père II-3 (ou II-4), qui serait alors X^a^Y, donc atteint. Or son père est sain : l’hypothèse d’un gène lié à X est rejetée. Le caractère est donc autosomique récessif ; III-2 est (a//a) et ses deux parents sont (A//a).',
      },
    ],
    selfCheck: [
      'Je sais définir allèle dominant, récessif et codominant, autosome et gonosome.',
      'Je sais dessiner le brassage interchromosomique et calculer le nombre de combinaisons (2^n^).',
      'Je sais dessiner un crossing-over et distinguer gamètes parentaux et recombinés.',
      'Je sais expliquer pourquoi chaque individu est génétiquement unique.',
      'Je sais construire un tableau de croisement, y compris pour un gène porté par X.',
      'Je sais identifier un mode de transmission sur un arbre en citant des individus précis.',
      'Je sais écrire les génotypes d’une famille et calculer un risque.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Enjambement (crossing-over) — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Enjambement_(g%C3%A9n%C3%A9tique)' },
      { title: 'Hémophilie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/H%C3%A9mophilie' },
      { title: 'Maladie de Huntington — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Maladie_de_Huntington' },
      { title: 'Albinisme — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Albinisme' },
    ],
  },
};

export default lesson;
