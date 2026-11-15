import { img } from '../media';
import hematies from '../../../assets/courses/premiere/bb2-1-genotype-phenotype/hematies-falciformes.webp';
import expression from '../../../assets/courses/premiere/bb2-1-genotype-phenotype/expression-genetique.webp';
import chromosomes from '../../../assets/courses/premiere/bb2-1-genotype-phenotype/chromosomes-alleles.webp';
import echelles from '../../../assets/courses/premiere/bb2-1-genotype-phenotype/drepanocytose-echelles.webp';

const IMG = {
  hematies: img(hematies, 'Frottis sanguin coloré au May-Grünwald-Giemsa : hématies rondes à centre clair et nombreuses hématies allongées en forme de faucille, un granulocyte neutrophile à noyau violet plurilobé.', 'micro', 1536, 1024),
  expression: img(expression, 'Schéma au crayon de l’expression d’un gène : dans le noyau, un gène de l’ADN est transcrit en ARN messager, qui sort par un pore nucléaire ; dans le cytoplasme, un ribosome traduit l’ARN messager en chaîne d’acides aminés qui se replie en protéine.', 'schema', 1400, 933),
  chromosomes: img(chromosomes, 'Schéma d’une paire de chromosomes homologues portant au même locus l’allèle A et l’allèle a, avec un agrandissement de la double hélice d’ADN et de ses nucléotides.', 'schema', 1400, 933),
  echelles: img(echelles, 'Tableau dessiné comparant sang normal et drépanocytose à trois échelles : molécules d’hémoglobine A libres ou hémoglobine S formant des fibres, hématie normale ou falciforme, capillaire où circulent les hématies ou capillaire obstrué.', 'schema', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'bb2-1-genotype-phenotype',
  duration: 'Environ 3 séances (cours, exercices sur séquences et analyse de documents)',
  hook: {
    image: IMG.hematies,
    question: 'Un seul nucléotide changé sur les trois milliards de notre ADN peut-il déformer nos globules rouges et provoquer une maladie ?',
    text: 'Sur ce frottis sanguin, certaines hématies ont la forme d’une faucille : c’est la drépanocytose, la maladie génétique la plus fréquente en France. Sa cause tient en une « lettre » modifiée dans un gène. Dans ce chapitre, tu suis le chemin qui mène de l’ADN à la protéine, puis de la protéine au caractère visible : c’est le passage du génotype au phénotype.',
  },
  objectives: [
    'Définir et utiliser correctement gène, locus, allèle, génotype et phénotype.',
    'Décrire les deux étapes de l’expression d’un gène : la transcription dans le noyau et la traduction dans le cytoplasme.',
    'Transcrire une séquence d’ADN en ARN messager, puis la traduire en séquence d’acides aminés grâce au code génétique.',
    'Identifier une mutation ponctuelle (substitution, délétion, insertion) et prévoir ses conséquences sur la protéine.',
    'Relier le génotype au phénotype aux échelles moléculaire, cellulaire et de l’organisme, à partir de la drépanocytose et de l’albinisme.',
  ],
  prerequisites: [
    'L’ADN, support de l’information génétique, est une double hélice formée de nucléotides (A, T, C, G) appariés A–T et C–G (seconde).',
    'Les cellules humaines possèdent 46 chromosomes, soit 23 paires ; les gamètes en possèdent 23 (collège, seconde).',
    'Une protéine est une chaîne d’acides aminés repliée dans l’espace (module transversal A).',
  ],
  program: [
    'Mettre en relation génotype et phénotype à l’échelle moléculaire à l’aide d’un exemple.',
    'Concepts : génotype et phénotype ; gène et allèle ; mutation visible ; caractères observables.',
    'Comparer des séquences alléliques différentes d’un même gène chez des individus de phénotypes différents (drépanocytose, albinisme).',
    'Réaliser des exercices comparés de transcription et de traduction de séquences portant ou non une mutation ponctuelle.',
  ],

  course: {
    parts: [
      {
        title: 'Gènes, allèles, génotype et phénotype',
        intro: 'Avant de comprendre comment un gène agit, il faut un vocabulaire précis : chaque mot désigne une réalité différente.',
        blocks: [
          { type: 'p', text: 'L’information génétique est portée par l’**ADN** (acide désoxyribonucléique), une très longue molécule formée de deux brins enroulés en **double hélice**. Chaque brin est une suite de **nucléotides**, qui ne diffèrent que par leur base : A (adénine), T (thymine), C (cytosine) ou G (guanine). Les deux brins sont **complémentaires** : A fait toujours face à T, et C à G.' },
          { type: 'p', text: 'Dans une cellule humaine, l’ADN se trouve dans le **noyau**. Il est associé à des protéines et forme les **chromosomes** : 46 chromosomes, soit **23 paires**. Les deux chromosomes d’une paire sont dits **homologues** : ils ont la même taille, la même forme et portent les mêmes gènes aux mêmes emplacements. L’un vient du père, l’autre de la mère.' },
          { type: 'definition', term: 'Gène', text: 'portion d’ADN située à un emplacement précis d’un chromosome, qui porte l’information nécessaire à la fabrication d’une molécule fonctionnelle, le plus souvent une **protéine**. L’être humain possède environ 20 000 gènes codant des protéines.' },
          { type: 'definition', term: 'Locus', text: 'emplacement précis d’un gène sur un chromosome (pluriel : des loci). Un même gène occupe le même locus sur les deux chromosomes homologues.' },
          { type: 'definition', term: 'Allèle', text: 'version d’un gène. Deux allèles d’un même gène diffèrent par leur **séquence de nucléotides**, souvent d’un seul ou de quelques nucléotides seulement.' },
          { type: 'figure', image: IMG.chromosomes, caption: 'Une paire de chromosomes homologues : au même locus, chaque chromosome porte un allèle du gène (ici A et a). L’agrandissement rappelle qu’un gène est une portion de la double hélice d’ADN.', size: 'wide' },
          { type: 'p', text: 'Puisque les chromosomes vont par paires, chaque cellule (sauf les gamètes) possède **deux allèles** de chaque gène porté par les autosomes. Si les deux allèles sont identiques, l’individu est **homozygote** pour ce gène ; s’ils sont différents, il est **hétérozygote**.' },
          { type: 'definition', term: 'Génotype', text: 'ensemble des allèles que possède un individu pour le ou les gènes étudiés. On l’écrit entre parenthèses, les deux barres obliques représentant la paire de chromosomes homologues : (A//A), (A//a) ou (a//a).' },
          { type: 'definition', term: 'Phénotype', text: 'ensemble des **caractères observables** d’un individu. On l’écrit entre crochets, par exemple [A]. Il se décrit à plusieurs échelles : **moléculaire** (la protéine produite), **cellulaire** (la forme ou le fonctionnement des cellules) et **de l’organisme** (ce que l’on voit ou mesure chez la personne).' },
          {
            type: 'table',
            caption: 'Le phénotype se décrit à trois échelles',
            head: ['Échelle', 'Drépanocytose', 'Albinisme'],
            rows: [
              ['Moléculaire', 'Hémoglobine S, qui forme des fibres quand le sang manque de dioxygène', 'Tyrosinase absente ou inactive'],
              ['Cellulaire', 'Hématies déformées en faucille, rigides et fragiles', 'Mélanocytes incapables de produire de la mélanine'],
              ['Organisme', 'Anémie, crises douloureuses, infections plus fréquentes', 'Peau et cheveux très clairs, sensibilité au soleil, troubles de la vision'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Un **gène** est une portion d’ADN située à un **locus** ; un **allèle** est une version de ce gène.',
              'Chaque cellule possède **deux allèles** de chaque gène (un sur chaque chromosome homologue) : identiques chez un homozygote, différents chez un hétérozygote.',
              'Le **génotype** (A//a) décrit les allèles ; le **phénotype** [A] décrit les caractères observables, aux échelles moléculaire, cellulaire et de l’organisme.',
            ],
          },
        ],
      },

      {
        title: 'L’expression d’un gène : de l’ADN à la protéine',
        intro: 'L’ADN reste dans le noyau, mais les protéines sont fabriquées dans le cytoplasme. Comment l’information passe-t-elle de l’un à l’autre ?',
        blocks: [
          { type: 'p', text: 'L’**expression d’un gène** se fait en deux étapes. Le gène est d’abord **copié** en une molécule intermédiaire, l’**ARN messager** (ARNm), qui sort du noyau. Dans le cytoplasme, l’ARNm est ensuite **lu** par les ribosomes, qui assemblent les acides aminés dans l’ordre qu’il indique.' },
          {
            type: 'compare',
            title: 'ADN et ARN messager : deux acides nucléiques différents',
            columns: [
              { title: 'ADN', subtitle: 'acide désoxyribonucléique', items: ['**Deux brins** complémentaires en double hélice.', 'Sucre : désoxyribose.', 'Bases : A, **T**, C, G.', 'Reste dans le noyau ; très long (des millions de nucléotides par chromosome).'] },
              { title: 'ARN messager', subtitle: 'acide ribonucléique', items: ['**Un seul brin**.', 'Sucre : ribose.', 'Bases : A, **U** (uracile), C, G : U remplace T.', 'Copie d’un seul gène ; passe du noyau au cytoplasme.'] },
            ],
          },
          { type: 'definition', term: 'Transcription', text: 'synthèse d’un ARN messager à partir d’un seul des deux brins d’un gène, appelé **brin transcrit**. Elle a lieu dans le **noyau** et est réalisée par une enzyme, l’ARN polymérase, qui assemble des nucléotides d’ARN complémentaires du brin transcrit : en face de A elle place U, en face de T elle place A, en face de C elle place G, en face de G elle place C.' },
          { type: 'example', title: 'transcrire une séquence', text: ['Brin transcrit de l’ADN : 3′ – TAC GGA CTT – 5′', 'ARN messager obtenu : 5′ – AUG CCU GAA – 3′', 'L’ARNm a donc la **même séquence que l’autre brin** de l’ADN (le brin non transcrit), à une différence près : U à la place de T.'] },
          { type: 'definition', term: 'Traduction', text: 'synthèse d’une chaîne d’acides aminés (polypeptide) à partir de l’ARN messager. Elle a lieu dans le **cytoplasme**, sur les **ribosomes**, qui lisent l’ARNm par groupes de trois nucléotides appelés **codons**.' },
          { type: 'definition', term: 'Code génétique', text: 'système de correspondance entre les 64 codons et les 20 acides aminés. 61 codons désignent un acide aminé ; 3 codons (UAA, UAG, UGA) sont des **codons stop** qui arrêtent la traduction. Le codon **AUG** (méthionine) est le codon initiateur : la traduction commence toujours par lui.' },
          {
            type: 'table',
            caption: 'Le code génétique (lire la 1re base dans la colonne de gauche, la 2e base en haut, puis chercher la 3e base dans la case)',
            head: ['1re base', 'U', 'C', 'A', 'G'],
            rows: [
              ['U', 'UUU, UUC : Phe — UUA, UUG : Leu', 'UCU, UCC, UCA, UCG : Ser', 'UAU, UAC : Tyr — UAA, UAG : stop', 'UGU, UGC : Cys — UGA : stop — UGG : Trp'],
              ['C', 'CUU, CUC, CUA, CUG : Leu', 'CCU, CCC, CCA, CCG : Pro', 'CAU, CAC : His — CAA, CAG : Gln', 'CGU, CGC, CGA, CGG : Arg'],
              ['A', 'AUU, AUC, AUA : Ile — AUG : Met (initiation)', 'ACU, ACC, ACA, ACG : Thr', 'AAU, AAC : Asn — AAA, AAG : Lys', 'AGU, AGC : Ser — AGA, AGG : Arg'],
              ['G', 'GUU, GUC, GUA, GUG : Val', 'GCU, GCC, GCA, GCG : Ala', 'GAU, GAC : Asp — GAA, GAG : Glu', 'GGU, GGC, GGA, GGG : Gly'],
            ],
          },
          { type: 'note', title: 'Les abréviations des acides aminés', text: 'Ala alanine, Arg arginine, Asn asparagine, Asp acide aspartique, Cys cystéine, Gln glutamine, Glu acide glutamique, Gly glycine, His histidine, Ile isoleucine, Leu leucine, Lys lysine, Met méthionine, Phe phénylalanine, Pro proline, Ser sérine, Thr thréonine, Trp tryptophane, Tyr tyrosine, Val valine.' },
          { type: 'p', text: 'Le code génétique est **redondant** : un même acide aminé peut être codé par plusieurs codons (la leucine en a six). Il est **univoque** : un codon ne désigne qu’un seul acide aminé. Il est presque **universel** : il est le même chez les bactéries, les plantes et les animaux, ce qui permet de faire produire une protéine humaine par une bactérie en biotechnologie.' },
          {
            type: 'steps',
            title: 'Méthode : traduire un ARN messager',
            items: [
              { title: 'Repérer le codon initiateur', text: 'Chercher le premier AUG (sens 5′ → 3′) : il fixe le cadre de lecture.' },
              { title: 'Découper en codons', text: 'Séparer la séquence en triplets successifs, sans chevauchement, à partir de AUG.' },
              { title: 'Traduire', text: 'Pour chaque codon, lire l’acide aminé dans le tableau du code génétique.' },
              { title: 'S’arrêter au codon stop', text: 'UAA, UAG ou UGA ne codent aucun acide aminé : la chaîne est terminée.' },
            ],
          },
          { type: 'figure', image: IMG.expression, caption: 'L’expression d’un gène : transcription dans le noyau, sortie de l’ARN messager par un pore nucléaire, traduction par un ribosome dans le cytoplasme. La chaîne d’acides aminés se replie ensuite en une protéine à la forme précise.', size: 'wide' },
          { type: 'p', text: 'La chaîne d’acides aminés se replie dans l’espace : sa **forme tridimensionnelle** dépend de la **séquence des acides aminés**. Or la fonction d’une protéine (enzyme, transporteur, hormone, protéine de structure) dépend de sa forme. Changer un seul acide aminé peut donc suffire à modifier la fonction d’une protéine.' },
          {
            type: 'flow',
            title: 'Du gène au caractère',
            steps: [
              { title: 'Gène (ADN)', text: 'séquence de nucléotides' },
              { title: 'ARN messager', text: 'transcription (noyau)' },
              { title: 'Protéine', text: 'traduction (cytoplasme)' },
              { title: 'Phénotype', text: 'cellule et organisme' },
            ],
            caption: 'La séquence des nucléotides détermine la séquence des acides aminés, donc la forme et la fonction de la protéine, donc le caractère.',
          },
          {
            type: 'retenir',
            items: [
              'La **transcription** (noyau) copie un gène en **ARN messager**, complémentaire du brin transcrit, avec U à la place de T.',
              'La **traduction** (cytoplasme, ribosomes) lit l’ARNm **codon par codon**, de AUG jusqu’à un codon stop.',
              'Le **code génétique** fait correspondre chaque codon à un acide aminé ; il est redondant, univoque et quasi universel.',
              'La séquence des acides aminés détermine la **forme** de la protéine, donc sa **fonction**.',
            ],
          },
        ],
      },

      {
        title: 'Les mutations, origine de nouveaux allèles',
        intro: 'Si les allèles d’un gène diffèrent par leur séquence, c’est que l’ADN peut être modifié : on parle de mutation.',
        blocks: [
          { type: 'definition', term: 'Mutation', text: 'modification de la séquence des nucléotides de l’ADN. Elle est **rare**, **aléatoire** et, une fois présente, elle est recopiée à chaque division de la cellule. Une mutation crée un **nouvel allèle**.' },
          { type: 'p', text: 'Les mutations proviennent d’**erreurs de copie** de l’ADN avant les divisions cellulaires, ou de l’action d’**agents mutagènes** qui augmentent leur fréquence : rayons ultraviolets, rayons X, certaines substances chimiques comme le benzopyrène de la fumée de tabac.' },
          { type: 'definition', term: 'Mutation ponctuelle', text: 'mutation qui ne touche qu’**un seul nucléotide** : il peut être **remplacé** par un autre (substitution), **perdu** (délétion) ou **ajouté** (insertion).' },
          {
            type: 'table',
            caption: 'Conséquences possibles d’une mutation ponctuelle sur la protéine',
            head: ['Mutation', 'Effet sur les codons', 'Conséquence sur la protéine'],
            rows: [
              ['Substitution **silencieuse**', 'Le codon change mais code le même acide aminé (code redondant) : GCA → GCG, toujours Ala.', 'Protéine identique : aucun effet.'],
              ['Substitution **faux-sens**', 'Le codon change et code un autre acide aminé : GAG (Glu) → GTG (Val).', 'Un acide aminé est remplacé : la protéine peut perdre tout ou partie de sa fonction (ex. drépanocytose).'],
              ['Substitution **non-sens**', 'Le codon devient un codon stop : TGG (Trp) → TAG (stop).', 'Protéine raccourcie, le plus souvent non fonctionnelle.'],
              ['**Délétion** ou **insertion** d’un nucléotide', 'Tous les codons suivants sont décalés : c’est un **décalage du cadre de lecture**.', 'Séquence d’acides aminés très différente après la mutation, souvent un codon stop précoce : protéine non fonctionnelle.'],
            ],
          },
          { type: 'warning', title: 'Deux idées fausses à éviter', text: ['Une mutation n’est pas forcément néfaste : beaucoup sont **neutres** (silencieuses ou sans effet sur la fonction), et certaines peuvent être avantageuses.', 'Seules les mutations présentes dans les **cellules de la lignée germinale** (celles qui donnent les gamètes) sont transmises aux enfants. Une mutation d’une cellule de la peau, provoquée par les UV par exemple, n’est pas héréditaire.'] },
          { type: 'note', title: 'Une délétion de trois nucléotides : la mucoviscidose', text: 'La mutation la plus fréquente de la mucoviscidose est la perte de trois nucléotides consécutifs dans le gène CFTR. Le cadre de lecture n’est pas décalé, mais la protéine CFTR perd un acide aminé (une phénylalanine) : elle se replie mal et n’atteint pas la membrane des cellules, où elle devrait laisser passer les ions chlorure.' },
          {
            type: 'retenir',
            items: [
              'Une **mutation** est une modification rare et aléatoire de la séquence de l’ADN ; elle crée un nouvel **allèle**.',
              'Mutation ponctuelle : **substitution**, **délétion** ou **insertion** d’un nucléotide.',
              'Selon le cas, la protéine est identique (silencieuse), modifiée (faux-sens), raccourcie (non-sens) ou très différente (décalage du cadre de lecture).',
              'Seules les mutations des cellules germinales sont transmises à la descendance.',
            ],
          },
        ],
      },

      {
        title: 'Du génotype au phénotype : drépanocytose et albinisme',
        intro: 'Deux exemples montrent comment une différence de séquence entre deux allèles se traduit jusqu’à l’échelle de l’organisme.',
        blocks: [
          { type: 'p', text: '**Exemple 1 : la drépanocytose.** L’**hémoglobine** est la protéine des hématies (globules rouges) qui fixe et transporte le dioxygène. Elle est formée de quatre chaînes : deux chaînes α et deux chaînes β. La chaîne β, longue de 146 acides aminés, est codée par le gène **HBB**, situé sur le chromosome 11.' },
          {
            type: 'table',
            caption: 'Comparaison des deux allèles du gène HBB (brin non transcrit, codons 4 à 8)',
            head: ['Allèle', 'Séquence (codons 4 à 8)', 'Acides aminés 4 à 8'],
            rows: [
              ['Hb^A^ (hémoglobine normale)', 'ACT CCT G**A**G GAG AAG', 'Thr – Pro – **Glu** – Glu – Lys'],
              ['Hb^S^ (hémoglobine S)', 'ACT CCT G**T**G GAG AAG', 'Thr – Pro – **Val** – Glu – Lys'],
            ],
          },
          { type: 'p', text: 'Une **substitution** d’un seul nucléotide (A remplacé par T) transforme le codon 6 : GAG devient GTG. L’ARNm porte GUG au lieu de GAG, et la chaîne β possède une **valine** au lieu d’un **acide glutamique** en position 6 : c’est une mutation faux-sens.' },
          {
            type: 'list',
            title: 'Les conséquences, de la molécule à l’organisme',
            items: [
              '**Échelle moléculaire** : la valine rend la surface de l’hémoglobine S « collante ». Quand le sang est pauvre en dioxygène, les molécules d’hémoglobine S s’assemblent en **longues fibres rigides**.',
              '**Échelle cellulaire** : ces fibres déforment les hématies en **faucille** (hématies falciformes) ; elles deviennent rigides et fragiles, et sont détruites beaucoup plus vite que la normale.',
              '**Échelle de l’organisme** : la destruction des hématies provoque une **anémie** (fatigue, essoufflement) ; les hématies rigides bouchent les petits vaisseaux, ce qui provoque des **crises douloureuses** et peut abîmer des organes ; les infections sont plus fréquentes.',
            ],
          },
          { type: 'figure', image: IMG.echelles, caption: 'Le phénotype de la drépanocytose aux trois échelles : hémoglobine S formant des fibres, hématie falciforme, capillaire obstrué.', size: 'wide' },
          { type: 'figure', image: IMG.hematies, caption: 'Frottis sanguin d’une personne atteinte de drépanocytose (coloration de May-Grünwald-Giemsa, ×1 000) : hématies normales et hématies falciformes.', size: 'wide' },
          { type: 'p', text: 'Seules les personnes de génotype (Hb^S^//Hb^S^) sont malades. Une personne hétérozygote (Hb^A^//Hb^S^) fabrique les deux hémoglobines ; elle n’a en général aucun symptôme, car son hémoglobine A suffit : on dit qu’elle est **porteuse saine**. À l’échelle de l’organisme, l’allèle Hb^S^ se comporte donc comme un allèle **récessif**, alors qu’à l’échelle moléculaire les deux hémoglobines sont présentes.' },
          { type: 'note', title: 'Le phénotype dépend aussi de l’environnement', text: 'Chez une personne malade, les crises sont favorisées par le manque de dioxygène (altitude, effort intense), la déshydratation, le froid ou les infections. Une bonne hydratation, la vaccination et un suivi médical réduisent les complications. Le phénotype résulte donc du génotype **et** des conditions de vie.' },
          { type: 'p', text: '**Exemple 2 : l’albinisme.** La **mélanine** est le pigment qui colore la peau, les cheveux et l’iris. Elle est fabriquée dans des cellules spécialisées, les **mélanocytes**, à partir d’un acide aminé, la tyrosine. Les premières étapes sont catalysées par une enzyme, la **tyrosinase**, codée par le gène **TYR** (chromosome 11).' },
          {
            type: 'flow',
            title: 'La voie de synthèse de la mélanine (simplifiée)',
            steps: [
              { title: 'Tyrosine', text: 'acide aminé' },
              { title: 'DOPA', text: 'tyrosinase' },
              { title: 'Dopaquinone', text: 'tyrosinase' },
              { title: 'Mélanine', text: 'plusieurs étapes' },
            ],
          },
          { type: 'p', text: 'De nombreuses mutations différentes du gène TYR (faux-sens, non-sens, décalages du cadre de lecture) donnent une tyrosinase **absente ou inactive**. Sans tyrosinase, la mélanine n’est pas produite : c’est l’**albinisme oculo-cutané de type 1**, caractérisé par une peau et des cheveux très clairs, des iris clairs, une grande sensibilité au soleil et une vision diminuée.' },
          { type: 'p', text: 'Une personne hétérozygote, porteuse d’un allèle fonctionnel et d’un allèle muté, produit assez de tyrosinase pour fabriquer de la mélanine : elle n’est pas albinos. Comme pour la drépanocytose, l’allèle muté est **récessif** : il ne s’exprime dans le phénotype que chez les homozygotes.' },
          {
            type: 'retenir',
            items: [
              'Drépanocytose : substitution GAG → GTG dans le gène HBB → valine à la place de l’acide glutamique → hémoglobine S formant des fibres → hématies falciformes → anémie et crises douloureuses.',
              'Albinisme : mutation du gène TYR → tyrosinase non fonctionnelle → pas de mélanine → peau, cheveux et yeux très clairs.',
              'Raisonnement type : **allèle** (séquence) → **protéine** (séquence d’acides aminés, forme, fonction) → **cellule** → **organisme**.',
              'Le phénotype dépend du génotype mais aussi de l’environnement.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur des documents. Garde le tableau du code génétique (Partie 2) sous les yeux. Réponds d’abord seul(e), en phrases complètes, puis utilise le coup de pouce et compare avec la correction.',
    activities: [
      {
        title: 'Comparer les allèles Hb^A^ et Hb^S^',
        duration: '30 min',
        skills: ['Comparer', 'Transcrire et traduire', 'Expliquer'],
        context: 'Deux personnes ont réalisé un test génétique. La première a un sang normal ; la seconde est atteinte de drépanocytose. On compare un fragment du gène HBB de leurs cellules.',
        documents: [
          {
            label: 'Document 1',
            title: 'Fragment du brin transcrit du gène HBB (codons 3 à 9)',
            blocks: [
              {
                type: 'table',
                head: ['Personne', 'Brin transcrit (sens 3′ → 5′)'],
                rows: [
                  ['Personne 1 (sang normal)', 'GAC TGA GGA CTC CTC TTC AGA'],
                  ['Personne 2 (drépanocytose)', 'GAC TGA GGA CAC CTC TTC AGA'],
                ],
              },
            ],
            source: 'Séquences du gène HBB humain',
          },
          { label: 'Document 2', title: 'Sang de la personne 2 (×1 000)', image: IMG.hematies, caption: 'Frottis sanguin coloré au May-Grünwald-Giemsa.' },
        ],
        questions: [
          { text: 'Compare les deux séquences du document 1 : localise la différence et nomme le type de mutation.', hint: 'Compare codon par codon.', answer: 'Les séquences diffèrent par un seul nucléotide, dans le 4e codon du fragment (codon 6 du gène) : CTC chez la personne 1, CAC chez la personne 2. Un T est remplacé par un A sur le brin transcrit : c’est une mutation ponctuelle par substitution.' },
          { text: 'Écris la séquence de l’ARN messager produit à partir de chaque fragment.', hint: 'En face de A, place U ; en face de T, place A ; en face de C, place G ; en face de G, place C.', answer: 'Personne 1 : 5′ – CUG ACU CCU GAG GAG AAG UCU – 3′. Personne 2 : 5′ – CUG ACU CCU GUG GAG AAG UCU – 3′.' },
          { text: 'Traduis les deux ARN messagers à l’aide du code génétique.', answer: 'Personne 1 : Leu – Thr – Pro – Glu – Glu – Lys – Ser. Personne 2 : Leu – Thr – Pro – Val – Glu – Lys – Ser. L’acide glutamique en position 6 est remplacé par une valine : c’est une substitution faux-sens.' },
          { text: 'Explique le phénotype de la personne 2 aux échelles moléculaire, cellulaire et de l’organisme, en t’appuyant sur le document 2.', answer: 'Échelle moléculaire : la chaîne β de son hémoglobine porte une valine ; cette hémoglobine S forme des fibres rigides quand le sang est pauvre en dioxygène. Échelle cellulaire : ces fibres déforment les hématies en faucille, comme on le voit sur le document 2 ; ces hématies rigides sont détruites rapidement. Échelle de l’organisme : anémie (fatigue), obstruction des petits vaisseaux et crises douloureuses.' },
          { text: 'Une troisième personne est de génotype (Hb^A^//Hb^S^). Indique quelles hémoglobines elle produit et explique pourquoi elle n’est en général pas malade.', hint: 'Chaque allèle est exprimé.', answer: 'Les deux allèles sont transcrits et traduits : elle produit de l’hémoglobine A et de l’hémoglobine S. L’hémoglobine A est suffisante pour que ses hématies gardent une forme normale dans les conditions habituelles : elle est porteuse saine. L’allèle Hb^S^ est récessif à l’échelle de l’organisme.' },
        ],
      },
      {
        title: 'Albinisme : quand une enzyme manque',
        duration: '25 min',
        skills: ['Exploiter des documents', 'Raisonner'],
        context: 'Une jeune fille albinos a des parents à la pigmentation normale. On cherche à expliquer son phénotype à partir du gène TYR.',
        documents: [
          { label: 'Document 3', title: 'Le rôle de la tyrosinase', text: ['Dans les mélanocytes de la peau, des cheveux et de l’iris, la tyrosinase catalyse la transformation de la tyrosine en DOPA, puis de la DOPA en dopaquinone. La dopaquinone est ensuite transformée en mélanine.', 'Chez les personnes atteintes d’albinisme oculo-cutané de type 1, on ne détecte aucune activité tyrosinase dans les mélanocytes.'] },
          {
            label: 'Document 4',
            title: 'Comparaison d’un fragment de deux allèles du gène TYR',
            text: 'Séquences simplifiées, construites pour l’exercice (brin non transcrit, à partir du codon initiateur).',
            blocks: [
              {
                type: 'table',
                head: ['Allèle', 'Brin non transcrit (sens 5′ → 3′)'],
                rows: [
                  ['Allèle fonctionnel', 'ATG CTC CTG GCT GTT TTG TAC TGC CTG CTG TGG AGT'],
                  ['Allèle de la jeune fille', 'ATG CTC CTG GCT GTT TTG TAC TGC CTG CTG TAG AGT'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Repère la différence entre les deux allèles et nomme la mutation.', answer: 'Le 11e codon passe de TGG à TAG : un G est remplacé par un A. C’est une mutation ponctuelle par substitution.' },
          { text: 'Écris l’ARN messager correspondant aux deux derniers codons de chaque allèle, puis indique la conséquence de la mutation sur la protéine.', hint: 'Cherche UAG dans le tableau du code génétique.', answer: 'Allèle fonctionnel : UGG AGU, soit Trp – Ser, et la traduction continue. Allèle muté : UAG AGU ; UAG est un codon stop. La traduction s’arrête après le 10e acide aminé : la protéine est très raccourcie (la tyrosinase compte normalement plus de 500 acides aminés). C’est une mutation non-sens : la tyrosinase produite n’est pas fonctionnelle.' },
          { text: 'À l’aide du document 3, explique le phénotype de la jeune fille aux trois échelles.', answer: 'Échelle moléculaire : la tyrosinase est absente ou inactive. Échelle cellulaire : ses mélanocytes ne peuvent pas transformer la tyrosine en DOPA, donc ne produisent pas de mélanine. Échelle de l’organisme : sa peau, ses cheveux et ses iris sont très clairs, elle est très sensible au soleil et sa vision est diminuée.' },
          { text: 'Ses deux parents ont une pigmentation normale. Propose leur génotype et celui de leur fille, en notant T l’allèle fonctionnel et t l’allèle muté.', hint: 'Une seule copie fonctionnelle du gène suffit à produire de la mélanine.', answer: 'La fille est albinos : elle ne possède aucun allèle fonctionnel, son génotype est (t//t). Elle a reçu un allèle t de chaque parent. Les parents, non albinos, possèdent donc chacun un allèle T et un allèle t : ils sont hétérozygotes (T//t). Leur allèle T suffit à produire assez de tyrosinase.' },
        ],
      },
      {
        title: 'Exercice comparé : quatre mutations ponctuelles',
        duration: '25 min',
        skills: ['Transcrire et traduire', 'Classer', 'Argumenter'],
        context: 'Au laboratoire, on a séquencé un court gène de référence et quatre allèles mutés. Les séquences sont simplifiées pour l’exercice.',
        documents: [
          {
            label: 'Document 5',
            title: 'Brin non transcrit (5′ → 3′) du gène de référence et de quatre allèles',
            blocks: [
              {
                type: 'table',
                head: ['Allèle', 'Séquence'],
                rows: [
                  ['Référence', 'ATG GCA TGG CTT AAA GGC TGA'],
                  ['Allèle 1', 'ATG GCG TGG CTT AAA GGC TGA'],
                  ['Allèle 2', 'ATG GCA TGG CCT AAA GGC TGA'],
                  ['Allèle 3', 'ATG GCA TAG CTT AAA GGC TGA'],
                  ['Allèle 4', 'ATG CAT GGC TTA AAG GCT GA'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Écris l’ARN messager de la séquence de référence et traduis-le.', answer: 'ARNm : AUG GCA UGG CUU AAA GGC UGA. Protéine : Met – Ala – Trp – Leu – Lys – Gly, puis stop (UGA).' },
          { text: 'Traduis les allèles 1, 2 et 3, puis nomme chaque mutation.', hint: 'Compare d’abord chaque séquence à la référence pour trouver le nucléotide modifié.', answer: 'Allèle 1 : GCA → GCG, toujours Ala : Met – Ala – Trp – Leu – Lys – Gly. Substitution silencieuse. Allèle 2 : CTT → CCT, Leu → Pro : Met – Ala – Trp – Pro – Lys – Gly. Substitution faux-sens. Allèle 3 : TGG → TAG, codon stop : Met – Ala, puis arrêt. Substitution non-sens.' },
          { text: 'Compare l’allèle 4 à la référence. Quelle mutation s’est produite ? Traduis-le et explique ce qui se passe.', answer: 'Le G du 2e codon (GCA) a disparu : c’est une délétion. Tous les codons suivants sont décalés : AUG CAU GGC UUA AAG GCU GA… donne Met – His – Gly – Leu – Lys – Ala… La séquence des acides aminés est entièrement modifiée après la méthionine et le codon stop d’origine n’est plus lu : c’est un décalage du cadre de lecture.' },
          { text: 'Classe les quatre allèles de celui qui a le moins de risque de modifier le phénotype à celui qui en a le plus. Justifie.', answer: 'Allèle 1 (silencieux) : protéine identique, aucun effet. Allèle 2 (faux-sens) : un seul acide aminé change, l’effet dépend de sa place dans la protéine. Allèles 3 et 4 : protéine raccourcie ou entièrement différente, presque toujours non fonctionnelle ; ce sont les mutations qui ont le plus de risque de modifier le phénotype.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un gène est une portion d’ADN située à un locus ; ses différentes versions sont des allèles, qui diffèrent par leur séquence de nucléotides.',
      'Le génotype, noté (A//a), désigne les deux allèles d’un individu ; le phénotype, noté [A], ses caractères observables aux échelles moléculaire, cellulaire et de l’organisme.',
      'L’expression d’un gène comprend la transcription (noyau : ADN → ARN messager) et la traduction (cytoplasme, ribosomes : ARNm → chaîne d’acides aminés).',
      'Le code génétique associe chaque codon à un acide aminé ; la traduction commence à AUG et s’arrête à un codon stop.',
      'Une mutation ponctuelle (substitution, délétion, insertion) peut être silencieuse, faux-sens, non-sens ou décaler le cadre de lecture.',
      'La séquence des acides aminés détermine la forme et la fonction de la protéine, donc le phénotype : drépanocytose (HBB, Glu → Val) et albinisme (TYR, tyrosinase inactive).',
    ],
    method: {
      title: 'Relier une différence de séquence à un phénotype',
      steps: [
        'Comparer les séquences des allèles codon par codon et localiser la mutation (nature et position).',
        'Transcrire puis traduire chaque séquence à l’aide du code génétique.',
        'Conclure sur la protéine : identique, un acide aminé changé, raccourcie ou entièrement modifiée.',
        'Relier la protéine modifiée à la cellule puis à l’organisme, en citant les documents.',
      ],
    },
    vocabulary: [
      { term: 'Gène', definition: 'Portion d’ADN située à un locus, qui porte l’information pour fabriquer une protéine.' },
      { term: 'Locus', definition: 'Emplacement précis d’un gène sur un chromosome.' },
      { term: 'Allèle', definition: 'Version d’un gène, qui diffère des autres par sa séquence de nucléotides.' },
      { term: 'Homozygote', definition: 'Individu qui possède deux allèles identiques d’un gène.' },
      { term: 'Hétérozygote', definition: 'Individu qui possède deux allèles différents d’un gène.' },
      { term: 'Génotype', definition: 'Ensemble des allèles d’un individu pour les gènes étudiés, noté (A//a).' },
      { term: 'Phénotype', definition: 'Ensemble des caractères observables, aux échelles moléculaire, cellulaire et de l’organisme, noté [A].' },
      { term: 'Transcription', definition: 'Synthèse d’un ARN messager complémentaire du brin transcrit d’un gène, dans le noyau.' },
      { term: 'ARN messager', definition: 'Copie simple brin d’un gène, avec U à la place de T, lue par les ribosomes.' },
      { term: 'Traduction', definition: 'Synthèse d’une chaîne d’acides aminés à partir de l’ARNm, sur les ribosomes du cytoplasme.' },
      { term: 'Codon', definition: 'Groupe de trois nucléotides de l’ARNm correspondant à un acide aminé ou à un signal stop.' },
      { term: 'Code génétique', definition: 'Correspondance entre les 64 codons et les 20 acides aminés (et les 3 codons stop).' },
      { term: 'Mutation', definition: 'Modification rare et aléatoire de la séquence de l’ADN, à l’origine de nouveaux allèles.' },
      { term: 'Décalage du cadre de lecture', definition: 'Modification de tous les codons situés après une délétion ou une insertion d’un nucléotide.' },
    ],
    mistakes: [
      { wrong: 'Confondre gène et allèle : « les yeux bleus sont un gène ».', right: 'Le gène est la portion d’ADN ; l’allèle en est une version ; la couleur des yeux est un caractère du phénotype.' },
      { wrong: 'Écrire T dans un ARN messager.', right: 'L’ARN contient de l’uracile : en face d’un A du brin transcrit, on place U.' },
      { wrong: 'Traduire l’ADN directement, ou commencer la lecture n’importe où.', right: 'On traduit l’ARNm, codon par codon, à partir du codon initiateur AUG.' },
      { wrong: 'Penser que toute mutation modifie la protéine et rend malade.', right: 'Une substitution peut être silencieuse ; beaucoup de mutations sont neutres.' },
      { wrong: 'Dire qu’une mutation des cellules de la peau sera transmise aux enfants.', right: 'Seules les mutations des cellules germinales (à l’origine des gamètes) sont héréditaires.' },
    ],
    quiz: [
      { question: 'Un allèle est :', choices: ['Un chromosome hérité de la mère', 'Une version d’un gène', 'Un caractère observable', 'Une protéine anormale'], answer: 1, explanation: 'Les allèles sont les différentes versions d’un même gène ; ils diffèrent par leur séquence.' },
      { question: 'Le génotype d’un individu hétérozygote s’écrit :', choices: ['[A]', '(A//A)', '(A//a)', '(a//a)'], answer: 2, explanation: 'Hétérozygote : deux allèles différents, un sur chaque chromosome homologue.' },
      { question: 'La transcription a lieu :', choices: ['Dans le noyau', 'Sur les ribosomes du cytoplasme', 'Dans les mitochondries', 'Dans le sang'], answer: 0, explanation: 'L’ADN reste dans le noyau, où il est transcrit en ARN messager.' },
      { question: 'Le brin transcrit porte le triplet TAC. Le codon de l’ARN messager correspondant est :', choices: ['ATG', 'AUG', 'UAC', 'TUG'], answer: 1, explanation: 'Complémentarité : T → A, A → U, C → G, donc AUG.' },
      { question: 'Le codon AUG :', choices: ['Est un codon stop', 'Code la valine', 'Est le codon initiateur (méthionine)', 'N’existe pas dans l’ARN'], answer: 2, explanation: 'AUG code la méthionine et marque le début de la traduction.' },
      { question: 'Une substitution qui transforme GCA en GCG (deux codons de l’alanine) est :', choices: ['Faux-sens', 'Non-sens', 'Un décalage du cadre de lecture', 'Silencieuse'], answer: 3, explanation: 'Le code est redondant : l’acide aminé ne change pas, la protéine est identique.' },
      { question: 'La délétion d’un nucléotide au début d’un gène entraîne le plus souvent :', choices: ['Un décalage du cadre de lecture et une protéine non fonctionnelle', 'Le remplacement d’un seul acide aminé', 'Aucune conséquence', 'Une protéine plus longue mais normale'], answer: 0, explanation: 'Tous les codons suivants sont décalés : la séquence d’acides aminés est bouleversée.' },
      { question: 'Dans la drépanocytose, la mutation du gène HBB remplace :', choices: ['Une valine par une leucine', 'Un acide glutamique par une valine', 'Un codon par un codon stop', 'Toute la chaîne β'], answer: 1, explanation: 'GAG (Glu) devient GTG (Val) au codon 6 : substitution faux-sens.' },
      { question: 'Une personne albinos de type 1 :', choices: ['Ne possède pas le gène TYR', 'Possède deux allèles TYR non fonctionnels', 'A une tyrosinase plus active', 'A un allèle muté et un allèle fonctionnel'], answer: 1, explanation: 'L’allèle muté est récessif : il faut deux allèles non fonctionnels pour ne pas produire de mélanine.' },
    ],
    exercises: [
      {
        title: 'Transcrire et traduire',
        statement: ['Le brin transcrit d’un fragment de gène est : 3′ – TAC AAA CCG GTA ATT – 5′.', 'a) Écris l’ARN messager. b) Traduis-le. c) Une substitution remplace le 9e nucléotide du brin transcrit (G) par T. Quelle est la conséquence ?'],
        answer: ['a) ARNm : 5′ – AUG UUU GGC CAU UAA – 3′.', 'b) Met – Phe – Gly – His, puis stop (UAA).', 'c) Le brin transcrit devient TAC AAA CCT : le 3e codon de l’ARNm devient GGA, qui code aussi la glycine. La protéine est inchangée : c’est une substitution silencieuse.'],
      },
      {
        title: 'Le vocabulaire en situation',
        statement: 'Pour le gène HBB, Léa est de génotype (Hb^A^//Hb^S^) et son frère Tom de génotype (Hb^S^//Hb^S^). Pour chacun, indique s’il est homozygote ou hétérozygote, puis décris son phénotype à l’échelle moléculaire et à l’échelle de l’organisme.',
        answer: ['Léa est hétérozygote : elle produit de l’hémoglobine A et de l’hémoglobine S (échelle moléculaire), mais n’a en général pas de symptômes (porteuse saine).', 'Tom est homozygote : il ne produit que de l’hémoglobine S, qui forme des fibres ; ses hématies sont falciformes et il est atteint de drépanocytose (anémie, crises douloureuses).'],
      },
      {
        title: 'Rédiger une explication',
        statement: 'En une dizaine de lignes, explique comment une mutation du gène TYR peut conduire à l’albinisme. Utilise les mots : allèle, mutation, transcription, traduction, tyrosinase, mélanine, phénotype.',
        answer: 'Une mutation modifie la séquence du gène TYR et crée un nouvel allèle. Cet allèle est transcrit en ARN messager, lui aussi modifié. Lors de la traduction, la protéine obtenue est différente : un acide aminé changé, une chaîne raccourcie (codon stop) ou une séquence bouleversée (décalage du cadre de lecture). La tyrosinase ainsi produite n’a plus la bonne forme et ne catalyse plus la transformation de la tyrosine. Les mélanocytes ne fabriquent pas de mélanine. Chez une personne qui possède deux allèles mutés, le phénotype est l’albinisme : peau, cheveux et iris très clairs, sensibilité au soleil, vision diminuée.',
      },
    ],
    selfCheck: [
      'Je sais définir gène, locus, allèle, homozygote et hétérozygote.',
      'Je sais écrire un génotype (A//a) et un phénotype [A].',
      'Je sais décrire la transcription et la traduction (lieu, molécules, règles).',
      'Je sais transcrire un brin d’ADN et traduire un ARN messager avec le code génétique.',
      'Je sais nommer une mutation ponctuelle et prévoir sa conséquence sur la protéine.',
      'Je sais expliquer la drépanocytose et l’albinisme du gène jusqu’à l’organisme.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Drépanocytose — Inserm', url: 'https://www.inserm.fr/dossier/drepanocytose/' },
      { title: 'Drépanocytose — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Dr%C3%A9panocytose' },
      { title: 'Code génétique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Code_g%C3%A9n%C3%A9tique' },
      { title: 'Albinisme — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Albinisme' },
    ],
  },
};

export default lesson;
