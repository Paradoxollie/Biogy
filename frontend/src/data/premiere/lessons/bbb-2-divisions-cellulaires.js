import { img } from '../media';
import chromosome from '../../../assets/courses/premiere/bbb-2-divisions-cellulaires/chromosome.webp';
import mitose from '../../../assets/courses/premiere/bbb-2-divisions-cellulaires/mitose.webp';
import courbe from '../../../assets/courses/premiere/bbb-2-divisions-cellulaires/courbe-adn.webp';
import meiose from '../../../assets/courses/premiere/bbb-2-divisions-cellulaires/meiose.webp';
import racine from '../../../assets/courses/premiere/bbb-2-divisions-cellulaires/racine.webp';

const IMG = {
  chromosome: img(chromosome, 'Schéma d’un chromosome à une chromatide qui devient, après réplication, un chromosome à deux chromatides sœurs identiques reliées par le centromère.', 'schema', 1400, 933),
  mitose: img(mitose, 'Schéma des quatre phases de la mitose d’une cellule animale à 2n = 4 chromosomes : prophase, métaphase avec fuseau mitotique et plaque équatoriale, anaphase, télophase.', 'schema', 1400, 933),
  courbe: img(courbe, 'Courbe de la quantité d’ADN par cellule en fonction du temps : palier à Q en G1, augmentation jusqu’à 2Q en S, palier à 2Q en G2, chute verticale à Q à la fin de la mitose.', 'schema', 1400, 933),
  meiose: img(meiose, 'Schéma des deux divisions de la méiose d’une cellule à 2n = 4 : la méiose I sépare les chromosomes homologues, la méiose II sépare les chromatides ; on obtient quatre cellules à n = 2.', 'schema', 1400, 933),
  racine: img(racine, 'Microphotographie d’un écrasement d’extrémité de racine d’oignon coloré à l’orcéine acétique : nombreuses cellules en interphase et quelques cellules en division à différentes phases.', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bbb-2-divisions-cellulaires',
  duration: 'Environ 4 séances (cours, observation de mitoses et exercices)',
  hook: {
    image: IMG.mitose,
    question: 'Ton corps fabrique plusieurs millions de nouvelles cellules chaque seconde. Comment chacune reçoit-elle une copie complète et exacte de tes 46 chromosomes ?',
    text: 'Grandir, cicatriser, renouveler la paroi de l’intestin ou produire des gamètes : tout cela repose sur des divisions cellulaires. Dans ce chapitre, tu découvres comment l’ADN est copié, comment la mitose le partage à l’identique et comment la méiose produit des cellules qui ne possèdent plus qu’un exemplaire de chaque chromosome.',
  },
  objectives: [
    'Décrire un chromosome à une ou à deux chromatides et distinguer cellule diploïde et cellule haploïde.',
    'Situer les phases du cycle cellulaire et expliquer la réplication semi-conservative de l’ADN et sa fidélité.',
    'Reconnaître les phases de la mitose et expliquer comment l’ADN est réparti à l’identique entre les deux cellules filles.',
    'Tracer et interpréter la courbe de la quantité d’ADN par cellule au cours du cycle cellulaire et de la méiose.',
    'Expliquer la répartition des chromosomes au cours des deux divisions de la méiose et comparer mitose et méiose.',
  ],
  prerequisites: [
    'L’ADN est formé de deux brins complémentaires (A–T, C–G) et antiparallèles (module A, « Les acides nucléiques »).',
    'Une cellule humaine possède 46 chromosomes, un gamète 23 (collège, seconde).',
    'Le noyau, l’enveloppe nucléaire et les pores nucléaires (chapitre « Observer le vivant »).',
  ],
  program: [
    'Expliquer les modalités de répartition de l’ADN lors de la mitose ; tracer une courbe représentant la quantité d’ADN génomique en fonction de la phase du cycle cellulaire (D4).',
    'Expliquer les modalités de répartition de l’ADN lors de la méiose ; tracer une courbe représentant la quantité d’ADN génomique en fonction de la phase du cycle (D5).',
    'Concepts associés : réplication, ADN polymérase, fidélité, fuseau mitotique, microtubule, séparation des chromatides, séparation des chromosomes homologues, mitose/méiose, division réductionnelle/division équationnelle.',
    'Expliquer le rôle du noyau dans la protection du matériel génétique : réarrangement de l’enveloppe nucléaire au cours de la mitose (B6).',
    'Phases d’une mitose, méiose/mitose, chromosomes homologues, chromatides : bases du chapitre « Gamétogenèse et fécondation ».',
  ],

  course: {
    parts: [
      {
        title: 'Chromosomes, caryotype et cycle cellulaire',
        intro: 'Avant de comprendre comment une cellule se divise, il faut savoir ce qu’elle doit partager : ses chromosomes.',
        blocks: [
          { type: 'definition', term: 'Chromosome', text: 'longue molécule d’ADN associée à des protéines. Selon le moment du cycle, il est formé d’**une chromatide** (une molécule d’ADN) ou de **deux chromatides** identiques (deux molécules d’ADN identiques), reliées au niveau du **centromère**.' },
          { type: 'figure', image: IMG.chromosome, caption: 'Un même chromosome avant et après la réplication de son ADN. Les deux chromatides sœurs sont identiques : mêmes gènes, mêmes allèles.', size: 'normal' },
          { type: 'definition', term: 'Chromatides sœurs', text: 'les deux chromatides d’un même chromosome, issues de la réplication d’une seule molécule d’ADN : elles portent exactement la même information génétique.' },
          { type: 'p', text: 'Le **caryotype** est la photographie des chromosomes d’une cellule, rangés par paires selon leur taille et la position de leur centromère. Chez l’être humain, une cellule du corps (cellule **somatique**) contient **46 chromosomes**, soit **23 paires** : 22 paires d’autosomes et une paire de chromosomes sexuels (XX chez la femme, XY chez l’homme).' },
          { type: 'definition', term: 'Chromosomes homologues', text: 'les deux chromosomes d’une même paire : l’un vient du père, l’autre de la mère. Ils portent les mêmes gènes aux mêmes emplacements, mais pas forcément les mêmes allèles.' },
          {
            type: 'compare',
            title: 'Cellule diploïde et cellule haploïde',
            columns: [
              { title: 'Diploïde (2n)', items: ['Les chromosomes sont **par paires** d’homologues.', 'Cellules somatiques, cellule-œuf.', 'Chez l’être humain : 2n = 46.'] },
              { title: 'Haploïde (n)', items: ['Un **seul** chromosome de chaque paire.', 'Gamètes (spermatozoïdes, ovocytes).', 'Chez l’être humain : n = 23.'] },
            ],
          },
          { type: 'warning', text: 'Ne confonds pas **chromatide** et **chromosome** : un chromosome à deux chromatides compte pour **un seul** chromosome. Une cellule humaine en fin d’interphase possède toujours 46 chromosomes, mais 92 chromatides.' },
          { type: 'definition', term: 'Cycle cellulaire', text: 'ensemble des étapes qui séparent deux divisions successives d’une cellule. Il comprend l’**interphase** (phases G1, S, G2) puis la **mitose** (phase M).' },
          {
            type: 'table',
            caption: 'Les phases du cycle cellulaire (cellule humaine en culture, cycle d’environ 24 h)',
            head: ['Phase', 'Durée typique', 'Événements', 'État des chromosomes'],
            rows: [
              ['G1', '≈ 11 h', 'Croissance de la cellule, synthèse de protéines, activité spécialisée', 'Une chromatide, décondensés (chromatine)'],
              ['S (synthèse)', '≈ 8 h', '**Réplication** de l’ADN', 'Passage progressif d’une à deux chromatides'],
              ['G2', '≈ 4 h', 'Préparation de la division', 'Deux chromatides, décondensés'],
              ['M (mitose)', '≈ 1 h', 'Division du noyau puis du cytoplasme', 'Condensés ; deux chromatides puis une'],
            ],
          },
          { type: 'note', title: 'Toutes les cellules ne se divisent pas', text: 'Beaucoup de cellules spécialisées sortent du cycle et ne se divisent plus (la plupart des neurones par exemple) : on dit qu’elles sont en phase **G0**. D’autres se divisent sans cesse : les cellules souches de l’intestin renouvellent tout l’épithélium intestinal en 3 à 5 jours.' },
          {
            type: 'retenir',
            items: [
              'Un chromosome a une chromatide (en G1) ou deux chromatides sœurs identiques (après la phase S).',
              'Une cellule humaine diploïde a 2n = 46 chromosomes (23 paires d’homologues) ; un gamète haploïde a n = 23.',
              'Le cycle cellulaire = interphase (G1, S, G2) + mitose (M).',
            ],
          },
        ],
      },

      {
        title: 'La réplication de l’ADN : copier fidèlement',
        intro: 'Pendant la phase S, la cellule copie la totalité de son ADN : plus de 6 milliards de paires de nucléotides chez l’être humain.',
        blocks: [
          { type: 'definition', term: 'Réplication', text: 'synthèse, pendant la phase S, d’une copie de chaque molécule d’ADN. Elle produit deux molécules identiques entre elles et identiques à la molécule de départ.' },
          {
            type: 'steps',
            title: 'Les étapes de la réplication',
            items: [
              { title: 'Ouverture', text: 'La double hélice s’ouvre localement : les liaisons hydrogène entre bases complémentaires sont rompues et les deux brins se séparent.' },
              { title: 'Lecture du brin matrice', text: 'Chaque brin sert de **modèle**. L’**ADN polymérase** le parcourt et place en face de chaque nucléotide le nucléotide complémentaire : A en face de T, C en face de G.' },
              { title: 'Allongement', text: 'L’ADN polymérase relie les nucléotides du nouveau brin les uns aux autres, toujours dans le sens 5’→3’.' },
              { title: 'Résultat', text: 'Deux molécules d’ADN, formées chacune d’un brin ancien et d’un brin nouveau : la réplication est **semi-conservative**.' },
            ],
          },
          { type: 'definition', term: 'ADN polymérase', text: 'enzyme qui synthétise un nouveau brin d’ADN à partir de nucléotides libres, en respectant la complémentarité des bases avec le brin matrice.' },
          { type: 'example', title: 'compléter un brin', text: 'Brin matrice : 3’-TACGGATC-5’. Nouveau brin synthétisé : **5’-ATGCCTAG-3’**. Chaque base est la complémentaire de celle d’en face, et les deux brins sont antiparallèles.' },
          { type: 'definition', term: 'Fidélité de la réplication', text: 'capacité à produire une copie exacte. Elle repose sur la complémentarité des bases, sur la **relecture** par l’ADN polymérase, qui retire un nucléotide mal apparié, et sur des systèmes de réparation. Il reste environ **une erreur pour 10^9^ à 10^10^ nucléotides** copiés.' },
          { type: 'example', title: 'combien d’erreurs par cycle ?', text: 'Une cellule humaine copie environ 6,4 × 10^9^ paires de nucléotides. Avec une erreur pour 10^9^ à 10^10^ nucléotides, il reste en moyenne **moins d’une à quelques erreurs** par réplication complète : la copie est presque parfaite. Une erreur non corrigée devient une **mutation**, transmise aux cellules filles (voir le chapitre « Du génotype au phénotype »).' },
          { type: 'note', title: 'Une expérience célèbre', text: 'En 1958, Matthew Meselson et Franklin Stahl ont montré que la réplication est semi-conservative en cultivant des bactéries avec de l’azote « lourd », puis de l’azote normal. Tu analyses leurs résultats dans le travail guidé.' },
          {
            type: 'retenir',
            items: [
              'La réplication a lieu en phase S : chaque molécule d’ADN est copiée.',
              'L’ADN polymérase assemble un brin complémentaire du brin matrice, dans le sens 5’→3’.',
              'La réplication est semi-conservative : chaque molécule fille garde un brin ancien.',
              'Grâce à la complémentarité, à la relecture et à la réparation, la réplication est très fidèle.',
            ],
          },
        ],
      },

      {
        title: 'La mitose : partager l’ADN à l’identique',
        intro: 'Après la réplication, chaque chromosome possède deux chromatides identiques. La mitose sépare ces chromatides et en donne une à chaque cellule fille.',
        blocks: [
          { type: 'definition', term: 'Mitose', text: 'division d’une cellule en **deux cellules filles génétiquement identiques** entre elles et à la cellule mère : même nombre de chromosomes, même information génétique. Elle comprend quatre phases (prophase, métaphase, anaphase, télophase), suivies de la division du cytoplasme.' },
          { type: 'definition', term: 'Fuseau mitotique', text: 'ensemble de **microtubules**, de longs tubes creux formés d’une protéine (la tubuline), tendus entre les deux pôles de la cellule. Certains s’accrochent au centromère des chromosomes et les déplacent.' },
          { type: 'figure', image: IMG.mitose, caption: 'Les quatre phases de la mitose dans une cellule animale à 2n = 4 chromosomes. Dans chaque paire, un homologue est dessiné en gris, l’autre en vert : chaque cellule fille reçoit les quatre chromosomes.', size: 'wide' },
          {
            type: 'steps',
            title: 'Les phases de la mitose',
            items: [
              { title: 'Prophase', text: 'Les chromosomes, déjà à deux chromatides, se **condensent** et deviennent visibles. Le fuseau mitotique se forme entre les deux pôles. En fin de prophase, l’**enveloppe nucléaire se fragmente** : les microtubules peuvent atteindre les chromosomes.' },
              { title: 'Métaphase', text: 'Les chromosomes, très condensés, s’alignent au milieu de la cellule sur la **plaque équatoriale**. Le centromère de chacun est relié aux deux pôles par des microtubules.' },
              { title: 'Anaphase', text: 'Les **chromatides sœurs se séparent** au niveau du centromère et migrent vers les pôles opposés, tirées par le raccourcissement des microtubules. Chaque pôle reçoit une chromatide de chaque chromosome.' },
              { title: 'Télophase', text: 'À chaque pôle, le lot complet de chromosomes à une chromatide se décondense ; une **enveloppe nucléaire se reforme** autour de chaque lot ; le fuseau disparaît.' },
              { title: 'Cytodiérèse', text: 'Le cytoplasme se partage : par étranglement dans la cellule animale, par la construction d’une nouvelle paroi au milieu de la cellule végétale. Deux cellules filles sont formées.' },
            ],
          },
          { type: 'figure', image: IMG.racine, caption: 'Extrémité de racine d’oignon écrasée et colorée à l’orcéine acétique (×400). La plupart des cellules sont en interphase (noyau rond) ; quelques-unes sont en division, à différentes phases.', size: 'wide' },
          {
            type: 'table',
            caption: 'Chromosomes et quantité d’ADN au cours du cycle d’une cellule humaine',
            head: ['Moment', 'Nombre de chromosomes', 'Chromatides par chromosome', 'Quantité d’ADN'],
            rows: [
              ['G1', '46', '1', 'Q'],
              ['G2 (après la réplication)', '46', '2', '2Q'],
              ['Métaphase', '46', '2', '2Q'],
              ['Anaphase (dans la cellule qui se divise)', '92 (46 à chaque pôle)', '1', '2Q'],
              ['Chaque cellule fille', '46', '1', 'Q'],
            ],
          },
          { type: 'p', text: 'Le partage à l’identique repose sur deux mécanismes complémentaires : la **réplication** fabrique deux chromatides identiques, puis la **séparation des chromatides** à l’anaphase en envoie exactement une vers chaque pôle.' },
          { type: 'warning', text: 'À l’anaphase de la mitose, ce sont les **chromatides sœurs** qui se séparent, pas les chromosomes homologues. Chaque cellule fille reçoit donc les deux homologues de chaque paire : elle reste diploïde.' },
          {
            type: 'cards',
            items: [
              { title: 'Croissance', text: 'De la cellule-œuf à environ 30 000 milliards de cellules chez l’adulte.', tone: 'green' },
              { title: 'Renouvellement', text: 'Épiderme, épithélium intestinal, cellules du sang sont remplacés en permanence.', tone: 'blue' },
              { title: 'Réparation', text: 'Cicatrisation d’une plaie, consolidation d’une fracture.', tone: 'yellow' },
            ],
          },
          { type: 'note', title: 'Bloquer le fuseau', text: 'La **colchicine** empêche l’assemblage des microtubules : sans fuseau, les cellules restent bloquées en métaphase, avec des chromosomes très condensés et faciles à compter. On l’utilise pour réaliser les caryotypes. Certains médicaments anticancéreux agissent aussi sur les microtubules pour arrêter la division des cellules tumorales.' },
          {
            type: 'retenir',
            items: [
              'Prophase (condensation, fragmentation de l’enveloppe nucléaire), métaphase (plaque équatoriale), anaphase (séparation des chromatides), télophase (reformation des noyaux), puis cytodiérèse.',
              'Le fuseau mitotique, formé de microtubules, déplace les chromosomes.',
              'Mitose : une cellule 2n donne deux cellules 2n génétiquement identiques.',
            ],
          },
        ],
      },

      {
        title: 'Suivre la quantité d’ADN au cours du cycle cellulaire',
        intro: 'On peut mesurer la quantité d’ADN contenue dans le noyau de chaque cellule et suivre son évolution au cours du temps.',
        blocks: [
          { type: 'p', text: 'Après une coloration spécifique de l’ADN (réaction de Feulgen ou colorant fluorescent), l’intensité de coloration d’un noyau est proportionnelle à sa quantité d’ADN. On la mesure par microspectrophotométrie ou par cytométrie en flux. On note **Q** la quantité d’ADN d’une cellule diploïde en phase G1.' },
          { type: 'figure', image: IMG.courbe, caption: 'Évolution de la quantité d’ADN par cellule au cours du cycle cellulaire : l’augmentation est progressive pendant la phase S, la chute est brutale à la fin de la mitose.', size: 'wide' },
          {
            type: 'table',
            caption: 'Lire la courbe',
            head: ['Partie de la courbe', 'Interprétation'],
            rows: [
              ['Palier à Q', 'G1 : chromosomes à une chromatide'],
              ['Augmentation progressive de Q à 2Q', 'Phase S : réplication de l’ADN, qui dure plusieurs heures'],
              ['Palier à 2Q', 'G2, puis prophase, métaphase et anaphase : chromosomes à deux chromatides, puis chromatides séparées mais encore dans la même cellule'],
              ['Chute verticale de 2Q à Q', 'Fin de la mitose (télophase et cytodiérèse) : l’ADN est partagé entre deux cellules filles'],
            ],
          },
          {
            type: 'steps',
            title: 'Tracer la courbe de la quantité d’ADN',
            items: [
              'Placer le temps en abscisse (en heures) et la quantité d’ADN par cellule en ordonnée (en unités arbitraires ou en picogrammes), avec des échelles régulières.',
              'Placer les points du tableau de mesures et les relier à la règle.',
              'Délimiter les phases par des pointillés verticaux : palier bas = G1, montée = S, palier haut = G2 et mitose, chute = fin de la mitose.',
              'Donner un titre complet : « Évolution de la quantité d’ADN par cellule au cours du cycle cellulaire ».',
            ],
          },
          { type: 'warning', text: 'La quantité d’ADN par cellule ne diminue pas pendant l’anaphase : les chromatides sont séparées mais restent dans la **même** cellule jusqu’à la cytodiérèse. La chute est tracée verticale car la séparation des deux cellules est très brève à l’échelle du cycle.' },
          {
            type: 'retenir',
            items: [
              'La quantité d’ADN double (Q → 2Q) pendant la phase S, progressivement.',
              'Elle est divisée par deux (2Q → Q) à la fin de la mitose, brutalement.',
              'Chaque cellule fille retrouve la quantité d’ADN de la cellule mère en G1.',
            ],
          },
        ],
      },

      {
        title: 'La méiose : produire des cellules haploïdes',
        intro: 'Les gamètes ne contiennent que 23 chromosomes. Sans division particulière, le nombre de chromosomes doublerait à chaque génération !',
        blocks: [
          { type: 'definition', term: 'Méiose', text: 'succession de **deux divisions** cellulaires, précédées d’**une seule réplication**, qui transforme une cellule diploïde (2n) en **quatre cellules haploïdes** (n). Elle a lieu uniquement dans les gonades (testicules, ovaires) et produit les gamètes.' },
          { type: 'figure', image: IMG.meiose, caption: 'Les deux divisions de la méiose pour une cellule à 2n = 4. La méiose I sépare les chromosomes homologues (chacun garde ses deux chromatides) ; la méiose II sépare les chromatides sœurs.', size: 'wide' },
          {
            type: 'compare',
            title: 'Les deux divisions de la méiose',
            columns: [
              { title: 'Méiose I', subtitle: 'Division réductionnelle', items: ['Prophase I : les chromosomes homologues, à deux chromatides, s’**apparient** deux à deux.', 'Métaphase I : les **paires** d’homologues se placent de part et d’autre de la plaque équatoriale.', 'Anaphase I : les **chromosomes homologues se séparent** ; chacun garde ses deux chromatides.', 'Résultat : 2 cellules haploïdes, chromosomes à deux chromatides. Le nombre de chromosomes est **divisé par deux**.'] },
              { title: 'Méiose II', subtitle: 'Division équationnelle', items: ['Aucune réplication ne la précède.', 'Métaphase II : les chromosomes s’alignent sur la plaque équatoriale.', 'Anaphase II : les **chromatides sœurs se séparent**, comme dans une mitose.', 'Résultat : 4 cellules haploïdes, chromosomes à une chromatide. Le nombre de chromosomes **ne change pas**.'] },
            ],
          },
          { type: 'definition', term: 'Division réductionnelle', text: 'division qui réduit de moitié le nombre de chromosomes en séparant les chromosomes homologues (méiose I) : 2n → n.' },
          { type: 'definition', term: 'Division équationnelle', text: 'division qui conserve le nombre de chromosomes en séparant les chromatides sœurs (mitose, méiose II).' },
          {
            type: 'table',
            caption: 'Chromosomes et quantité d’ADN au cours de la méiose humaine',
            head: ['Étape', 'Nombre de chromosomes', 'Chromatides par chromosome', 'Quantité d’ADN par cellule'],
            rows: [
              ['Cellule mère en G1', '46 (2n)', '1', 'Q'],
              ['Après la réplication', '46 (2n)', '2', '2Q'],
              ['Après la méiose I (chaque cellule)', '23 (n)', '2', 'Q'],
              ['Après la méiose II (chaque cellule)', '23 (n)', '1', 'Q/2'],
              ['Cellule-œuf, après la fécondation', '46 (2n)', '1', 'Q'],
            ],
          },
          { type: 'p', text: 'La courbe de la quantité d’ADN au cours de la méiose présente donc une montée (Q → 2Q, réplication), puis **deux chutes** successives : 2Q → Q à la fin de la méiose I et Q → Q/2 à la fin de la méiose II. La fécondation réunit deux gamètes : Q/2 + Q/2 = Q, et la cellule-œuf est de nouveau diploïde.' },
          {
            type: 'table',
            caption: 'Comparer mitose et méiose',
            head: ['Critère', 'Mitose', 'Méiose'],
            rows: [
              ['Cellules concernées', 'Cellules somatiques (et cellules souches)', 'Cellules germinales des gonades'],
              ['Nombre de divisions', '1', '2 (après une seule réplication)'],
              ['Ce qui se sépare', 'Chromatides sœurs', 'Chromosomes homologues (I), puis chromatides sœurs (II)'],
              ['Résultat', '2 cellules diploïdes (2n)', '4 cellules haploïdes (n)'],
              ['Information génétique', 'Identique à celle de la cellule mère', 'Différente d’une cellule à l’autre'],
              ['Rôle', 'Croissance, renouvellement, réparation', 'Production des gamètes, reproduction sexuée'],
            ],
          },
          { type: 'note', title: 'Pour aller plus loin', text: ['Pendant la prophase I, des fragments sont échangés entre chromatides de chromosomes homologues (crossing-over), et les homologues se répartissent au hasard à l’anaphase I : les gamètes sont tous différents. C’est le **brassage génétique**, étudié dans le chapitre « Transmission des caractères héréditaires ».', 'Chez la femme, les divisions de la méiose sont inégales : elles donnent un seul gros ovocyte et de petits globules polaires (chapitre « Gamétogenèse et fécondation »).'] },
          { type: 'warning', title: 'Quand la séparation échoue', text: 'Si deux chromosomes homologues (ou deux chromatides) ne se séparent pas, un gamète reçoit un chromosome en trop et un autre un chromosome en moins. Après fécondation, la cellule-œuf peut avoir 47 chromosomes : c’est le cas de la **trisomie 21** (trois chromosomes 21).' },
          {
            type: 'retenir',
            items: [
              'Méiose = une réplication + deux divisions : une cellule 2n donne quatre cellules n.',
              'Méiose I (réductionnelle) : séparation des chromosomes homologues.',
              'Méiose II (équationnelle) : séparation des chromatides sœurs.',
              'Quantité d’ADN : Q → 2Q → Q → Q/2 ; la fécondation rétablit Q et la diploïdie.',
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
        title: 'Identifier les phases de la mitose dans une racine d’oignon',
        duration: '30 min',
        skills: ['Observer', 'Calculer', 'Raisonner'],
        context: 'En TP, tu as préparé une lame à partir de l’extrémité d’une racine d’oignon (_Allium cepa_, 2n = 16) pour observer des cellules en division.',
        documents: [
          {
            label: 'Document 1',
            title: 'Protocole résumé',
            blocks: [
              {
                type: 'steps',
                items: [
                  'Couper les 2 à 3 derniers millimètres de jeunes racines d’oignon : c’est la zone de croissance de la racine (méristème).',
                  'Les plonger quelques minutes dans de l’acide chlorhydrique chaud pour ramollir les tissus et séparer les cellules.',
                  'Colorer l’ADN avec de l’orcéine acétique (ou du carmin acétique).',
                  'Écraser l’extrémité entre lame et lamelle pour étaler les cellules en une seule couche, puis observer à ×400.',
                ],
              },
            ],
          },
          { label: 'Document 2', title: 'Observation au microscope (×400)', image: IMG.racine, caption: 'Écrasement d’extrémité de racine d’oignon coloré à l’orcéine acétique.' },
          {
            label: 'Document 3',
            title: 'Comptage réalisé sur 200 cellules',
            blocks: [
              { type: 'table', head: ['Phase', 'Nombre de cellules'], rows: [['Interphase', '176'], ['Prophase', '12'], ['Métaphase', '5'], ['Anaphase', '3'], ['Télophase', '4']] },
              { type: 'p', text: 'Dans les conditions du TP, le cycle cellulaire de ces cellules dure environ 20 h. Les cellules se divisent de façon indépendante les unes des autres.' },
            ],
          },
        ],
        questions: [
          { text: 'Pourquoi observe-t-on l’extrémité de la racine et non une feuille ?', answer: 'L’extrémité de la racine contient le méristème, une zone où les cellules se divisent intensément pour assurer la croissance de la racine. Dans une feuille adulte, les cellules ne se divisent presque plus : on n’y verrait pas de mitoses.' },
          { text: 'Sur le document 2, explique comment on reconnaît une cellule en interphase, puis repère une cellule en métaphase et une cellule en anaphase en justifiant.', hint: 'Regarde si l’on voit un noyau rond ou des chromosomes, et où se trouvent ces chromosomes.', answer: 'En interphase, la cellule possède un noyau rond, limité, avec une chromatine finement granuleuse et des nucléoles : les chromosomes, décondensés, ne sont pas visibles individuellement. En métaphase, les chromosomes condensés forment une bande sombre au milieu de la cellule (plaque équatoriale). En anaphase, on voit deux lots de chromosomes en forme de V qui s’éloignent vers les deux extrémités de la cellule. Sur le document 2 : la métaphase est à gauche, au milieu de l’image ; l’anaphase à droite, au milieu ; on repère aussi une prophase en haut au centre (chromosomes en filaments dans un noyau encore arrondi) et une télophase en bas (deux lots de chromosomes aux deux bouts de la cellule, séparés par la nouvelle paroi en formation).' },
          { text: 'Calcule le pourcentage de cellules en division, puis estime la durée de la mitose et celle de chacune de ses phases.', hint: 'Si les cellules se divisent indépendamment, la proportion de cellules dans une phase est proportionnelle à la durée de cette phase.', answer: 'Cellules en division : 12 + 5 + 3 + 4 = 24, soit 24 ÷ 200 = 12 %. Durée de la mitose : 12 % de 20 h = 2,4 h, soit environ 2 h 24 min. Prophase : 12 ÷ 200 = 6 % → 1,2 h (72 min) ; métaphase : 2,5 % → 0,5 h (30 min) ; anaphase : 1,5 % → 0,3 h (18 min) ; télophase : 2 % → 0,4 h (24 min). L’interphase dure 88 % du cycle, soit environ 17,6 h.' },
          { text: 'Combien de chromosomes, et à combien de chromatides, compte-t-on dans une cellule d’oignon en métaphase ? Et dans chaque lot de chromosomes en fin d’anaphase ?', answer: 'En métaphase : 16 chromosomes à deux chromatides (32 chromatides). En fin d’anaphase, chaque lot contient 16 chromosomes à une chromatide : chaque future cellule fille reçoit un exemplaire de chaque chromosome.' },
          { text: 'Que deviendraient ces cellules si l’on ajoutait de la colchicine au milieu de culture des racines ? Justifie.', answer: 'La colchicine empêche l’assemblage des microtubules : le fuseau mitotique ne se forme pas, les chromatides ne peuvent pas être séparées. Les cellules restent bloquées en métaphase et la proportion de cellules en métaphase augmente.' },
        ],
      },
      {
        title: 'Tracer et interpréter la courbe de la quantité d’ADN',
        duration: '25 min',
        skills: ['Tracer', 'Interpréter'],
        context: 'Des cellules humaines en culture ont été synchronisées (elles commencent toutes leur cycle en même temps). On mesure régulièrement la quantité moyenne d’ADN par noyau.',
        documents: [
          {
            label: 'Document 4',
            title: 'Quantité d’ADN par noyau (résultats de TP, unités arbitraires)',
            blocks: [
              {
                type: 'table',
                head: ['Temps (h)', '0', '4', '8', '11', '13', '15', '17', '19', '21', '23', '24', '28'],
                rows: [['ADN (u.a.)', '10', '10', '10', '10', '12,5', '15', '17,5', '20', '20', '20', '10', '10']],
              },
            ],
          },
        ],
        questions: [
          { text: 'Trace la courbe de la quantité d’ADN par noyau en fonction du temps.', hint: 'Abscisse : 1 cm pour 2 h ; ordonnée : 1 cm pour 2 u.a. Relie les points à la règle et n’oublie pas le titre.', answer: 'La courbe présente un palier à 10 u.a. de 0 à 11 h, une montée régulière jusqu’à 20 u.a. entre 11 h et 19 h, un palier à 20 u.a. de 19 h à 23 h, une chute brutale à 10 u.a. entre 23 h et 24 h, puis un nouveau palier à 10 u.a. Titre : « Évolution de la quantité d’ADN par noyau au cours du cycle cellulaire de cellules humaines en culture ».' },
          { text: 'Délimite sur ta courbe les phases G1, S, G2 et M, et donne la durée de chacune.', answer: 'G1 : de 0 à 11 h (11 h) ; S : de 11 à 19 h (8 h) ; G2 : de 19 à 23 h (4 h) ; M : de 23 à 24 h (1 h). Le cycle complet dure 24 h.' },
          { text: 'Quel phénomène explique l’augmentation de la quantité d’ADN entre 11 h et 19 h ? Pourquoi cette augmentation est-elle progressive ?', answer: 'C’est la réplication de l’ADN (phase S) : chaque molécule d’ADN est copiée par l’ADN polymérase. Elle est progressive car la copie des milliards de nucléotides prend plusieurs heures ; à la fin, la quantité d’ADN a exactement doublé.' },
          { text: 'Décris l’état des chromosomes à 5 h, à 21 h et à 26 h.', answer: 'À 5 h (G1) : chromosomes à une chromatide, décondensés. À 21 h (G2) : chromosomes à deux chromatides, encore décondensés. À 26 h (G1 du cycle suivant) : chromosomes à une chromatide dans chacune des deux cellules filles.' },
          { text: 'Explique pourquoi il est indispensable que la quantité d’ADN double avant la mitose.', answer: 'La mitose partage l’ADN entre deux cellules filles. Si l’ADN n’avait pas été doublé, chaque cellule fille ne recevrait que la moitié du matériel génétique. Grâce à la réplication, chaque cellule fille reçoit une copie complète (quantité Q), identique à celle de la cellule mère.' },
        ],
      },
      {
        title: 'Comprendre la réplication : l’expérience de Meselson et Stahl',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Raisonner'],
        context: 'En 1958, on savait que l’ADN est copié avant chaque division, mais pas comment. Trois hypothèses existaient ; Meselson et Stahl ont imaginé une expérience pour trancher entre les deux principales.',
        documents: [
          {
            label: 'Document 5',
            title: 'Deux hypothèses',
            blocks: [
              {
                type: 'compare',
                columns: [
                  { title: 'Réplication conservative', items: ['La molécule mère reste intacte.', 'Elle sert de modèle à une molécule entièrement nouvelle.'] },
                  { title: 'Réplication semi-conservative', items: ['Les deux brins se séparent.', 'Chaque brin ancien sert de modèle et reste associé au brin nouveau.'] },
                ],
              },
            ],
          },
          {
            label: 'Document 6',
            title: 'L’expérience et ses résultats',
            text: [
              'Des bactéries sont cultivées pendant de nombreuses générations dans un milieu contenant de l’azote lourd (^15^N) : tout leur ADN devient « lourd ». Elles sont ensuite transférées dans un milieu à azote normal (^14^N), où elles se divisent.',
              'Après chaque génération, l’ADN est extrait et centrifugé : il se place à une hauteur qui dépend de sa densité. Résultats : avant le transfert, une seule bande d’ADN **lourd** ; après une génération, une seule bande d’ADN **intermédiaire** ; après deux générations, une bande intermédiaire et une bande **légère**, en quantités égales.',
            ],
            source: 'Meselson et Stahl, 1958',
          },
        ],
        questions: [
          { text: 'Quels résultats prévoit l’hypothèse conservative après une génération dans le milieu à ^14^N ?', answer: 'La molécule mère (deux brins lourds) reste intacte et une molécule entièrement nouvelle (deux brins légers) est fabriquée : on devrait obtenir deux bandes, une lourde et une légère.' },
          { text: 'Montre que les résultats obtenus après une, puis deux générations valident l’hypothèse semi-conservative.', hint: 'Fais un petit schéma avec des brins lourds (traits épais) et légers (traits fins).', answer: 'Après une génération, chaque molécule est formée d’un brin lourd ancien et d’un brin léger nouveau : toutes sont intermédiaires, une seule bande, comme observé. Après deux générations, les brins lourds et les brins légers servent de modèles à des brins légers : on obtient autant de molécules intermédiaires (lourd + léger) que de molécules légères (léger + léger), soit deux bandes en quantités égales. C’est exactement le résultat obtenu.' },
          { text: 'Écris le brin synthétisé par l’ADN polymérase à partir du brin matrice 3’-GGCATTACG-5’.', answer: '5’-CCGTAATGC-3’ : C en face de G, G en face de C, T en face de A, A en face de T, et les deux brins sont antiparallèles.' },
          { text: 'Lors d’une réplication, l’ADN polymérase insère un G en face d’un T, et cette erreur n’est pas corrigée. Quelle sera la conséquence pour les cellules filles ?', answer: 'Lors de la réplication suivante, le G servira de modèle et un C sera placé en face : l’une des cellules descendantes portera une paire C–G à la place de la paire A–T d’origine. C’est une mutation, transmise à toutes les cellules issues de cette cellule.' },
        ],
      },
      {
        title: 'Suivre les chromosomes au cours de la méiose',
        duration: '30 min',
        skills: ['Schématiser', 'Comparer', 'Tracer'],
        context: 'On étudie la formation des spermatozoïdes dans un testicule humain. Une cellule diploïde en G1 contient une quantité d’ADN notée Q.',
        documents: [
          { label: 'Document 7', title: 'Les deux divisions de la méiose (cellule à 2n = 4)', image: IMG.meiose, caption: 'Schéma des étapes de la méiose.' },
          {
            label: 'Document 8',
            title: 'Quantité d’ADN par cellule au cours de la méiose (unités arbitraires)',
            blocks: [
              {
                type: 'table',
                head: ['Étape', 'G1', 'Fin de la phase S', 'Métaphase I', 'Fin de la méiose I', 'Métaphase II', 'Fin de la méiose II'],
                rows: [['ADN (u.a.)', '10', '20', '20', '10', '10', '5']],
              },
            ],
          },
        ],
        questions: [
          { text: 'Sur le document 7, indique ce qui se sépare lors de la méiose I, puis lors de la méiose II.', answer: 'Lors de la méiose I, ce sont les chromosomes homologues de chaque paire qui se séparent (chacun garde ses deux chromatides). Lors de la méiose II, ce sont les chromatides sœurs de chaque chromosome qui se séparent.' },
          { text: 'Pourquoi la méiose I est-elle qualifiée de réductionnelle et la méiose II d’équationnelle ?', answer: 'La méiose I fait passer le nombre de chromosomes de 2n = 4 à n = 2 : elle réduit de moitié le nombre de chromosomes. La méiose II conserve ce nombre (n = 2 avant et après) : elle ne fait que séparer les chromatides, comme une mitose.' },
          { text: 'Pour une cellule humaine, complète : nombre de chromosomes et de chromatides par chromosome en métaphase I, en fin de méiose I et en fin de méiose II.', answer: 'Métaphase I : 46 chromosomes à deux chromatides (23 paires d’homologues appariés). Fin de méiose I : 23 chromosomes à deux chromatides dans chaque cellule. Fin de méiose II : 23 chromosomes à une chromatide dans chaque cellule (spermatide, futur spermatozoïde).' },
          { text: 'Trace la courbe de la quantité d’ADN par cellule au cours de la méiose à partir du document 8 et compare-la à celle de la mitose.', answer: 'La courbe monte de 10 à 20 u.a. (réplication), reste à 20 jusqu’à la fin de la méiose I, chute à 10, reste à 10 pendant la méiose II, puis chute à 5. Comme pour la mitose, il y a une seule réplication ; mais la méiose comporte deux chutes successives, et les cellules finales ont la moitié de l’ADN d’une cellule en G1 (Q/2), contre Q pour une cellule fille de mitose.' },
          { text: 'Explique pourquoi la méiose est indispensable au maintien du nombre de chromosomes de l’espèce au fil des générations.', answer: 'À la fécondation, deux gamètes s’unissent et additionnent leurs chromosomes. Grâce à la méiose, chaque gamète est haploïde (n = 23) : la cellule-œuf retrouve 2n = 46 chromosomes. Sans méiose, le nombre de chromosomes doublerait à chaque génération.' },
          { text: 'Lors d’une méiose, les deux chromosomes 21 d’une paire ne se séparent pas en anaphase I. Quelles sont les conséquences possibles ?', answer: 'Une des cellules issues de la méiose I reçoit les deux chromosomes 21, l’autre aucun. Les gamètes formés auront 24 ou 22 chromosomes. Si un gamète à 24 chromosomes (deux chromosomes 21) est fécondé par un gamète normal, la cellule-œuf aura 47 chromosomes dont trois chromosomes 21 : trisomie 21.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un chromosome est formé d’une chromatide (G1) ou de deux chromatides sœurs identiques (après la phase S) reliées par le centromère.',
      'Le cycle cellulaire comprend l’interphase (G1, S, G2) et la mitose (M) ; l’ADN est répliqué pendant la phase S.',
      'La réplication est semi-conservative : l’ADN polymérase synthétise un brin complémentaire de chaque brin matrice ; elle est très fidèle grâce à la relecture et à la réparation.',
      'La mitose (prophase, métaphase, anaphase, télophase) sépare les chromatides sœurs grâce au fuseau de microtubules : une cellule 2n donne deux cellules 2n identiques.',
      'La quantité d’ADN par cellule double progressivement en phase S (Q → 2Q) et revient brutalement à Q à la fin de la mitose.',
      'La méiose (une réplication, deux divisions) transforme une cellule 2n en quatre cellules n : la méiose I sépare les homologues, la méiose II sépare les chromatides.',
    ],
    method: {
      title: 'Identifier une phase de division sur un document',
      steps: [
        'Repérer si un noyau est visible (interphase) ou si les chromosomes sont condensés (division).',
        'Observer la position des chromosomes : dispersés (prophase), alignés au centre (métaphase), en deux lots qui s’écartent (anaphase), regroupés aux pôles avec un étranglement (télophase).',
        'Compter les chromosomes et leurs chromatides : homologues appariés ou séparés ? chromatides séparées ?',
        'Conclure : mitose ou méiose, et quelle phase (méiose I si les homologues se séparent, méiose II ou mitose si ce sont les chromatides).',
      ],
    },
    vocabulary: [
      { term: 'Chromatide', definition: 'Une des deux copies identiques d’un chromosome après la réplication ; une chromatide = une molécule d’ADN.' },
      { term: 'Centromère', definition: 'Zone de resserrement qui relie les deux chromatides sœurs et où s’accrochent les microtubules.' },
      { term: 'Chromosomes homologues', definition: 'Les deux chromosomes d’une même paire, l’un d’origine paternelle, l’autre d’origine maternelle.' },
      { term: 'Diploïde', definition: 'Cellule possédant des paires de chromosomes homologues (2n).' },
      { term: 'Haploïde', definition: 'Cellule possédant un seul chromosome de chaque paire (n).' },
      { term: 'Cycle cellulaire', definition: 'Succession de l’interphase (G1, S, G2) et de la mitose entre deux divisions.' },
      { term: 'Réplication', definition: 'Copie de l’ADN en phase S, de façon semi-conservative.' },
      { term: 'ADN polymérase', definition: 'Enzyme qui synthétise un brin d’ADN complémentaire du brin matrice.' },
      { term: 'Fidélité', definition: 'Capacité de la réplication à produire une copie exacte (environ une erreur pour 10^9^ à 10^10^ nucléotides).' },
      { term: 'Mitose', definition: 'Division d’une cellule en deux cellules filles génétiquement identiques.' },
      { term: 'Fuseau mitotique', definition: 'Ensemble de microtubules qui déplace les chromosomes pendant la division.' },
      { term: 'Microtubule', definition: 'Tube creux formé de tubuline, constituant du fuseau.' },
      { term: 'Méiose', definition: 'Deux divisions successives après une réplication : une cellule 2n donne quatre cellules n.' },
      { term: 'Division réductionnelle', definition: 'Division qui sépare les chromosomes homologues et réduit de moitié leur nombre (méiose I).' },
      { term: 'Division équationnelle', definition: 'Division qui sépare les chromatides sœurs sans changer le nombre de chromosomes (mitose, méiose II).' },
    ],
    mistakes: [
      { wrong: 'Dire qu’après la phase S, la cellule humaine a 92 chromosomes.', right: 'Elle a 46 chromosomes à deux chromatides, soit 92 chromatides.' },
      { wrong: 'Placer la réplication pendant la mitose.', right: 'La réplication a lieu pendant l’interphase, en phase S, avant la mitose.' },
      { wrong: 'Tracer une chute de la quantité d’ADN dès l’anaphase.', right: 'Les chromatides séparées restent dans la même cellule : la chute se place à la fin de la mitose (cytodiérèse).' },
      { wrong: 'Écrire que les chromosomes homologues se séparent pendant la mitose.', right: 'En mitose (et en méiose II), ce sont les chromatides sœurs qui se séparent ; les homologues ne se séparent qu’en méiose I.' },
      { wrong: 'Penser que la méiose comporte deux réplications.', right: 'Une seule réplication précède les deux divisions de la méiose.' },
    ],
    quiz: [
      { question: 'Une cellule humaine en phase G2 contient :', choices: ['46 chromosomes à une chromatide', '92 chromosomes à une chromatide', '46 chromosomes à deux chromatides', '23 chromosomes à deux chromatides'], answer: 2, explanation: 'Après la réplication (phase S), chacun des 46 chromosomes possède deux chromatides.' },
      { question: 'La réplication de l’ADN a lieu :', choices: ['En phase G1', 'En phase S', 'En métaphase', 'En anaphase'], answer: 1, explanation: 'S signifie synthèse : c’est la phase de réplication de l’ADN, pendant l’interphase.' },
      { question: 'Le brin complémentaire de 3’-ATGC-5’ est :', choices: ['5’-ATGC-3’', '5’-TACG-3’', '5’-GCAT-3’', '5’-UACG-3’'], answer: 1, explanation: 'A est complémentaire de T et C de G ; les deux brins sont antiparallèles.' },
      { question: 'La réplication est dite semi-conservative car :', choices: ['La moitié de l’ADN seulement est copiée', 'Chaque molécule fille contient un brin ancien et un brin nouveau', 'Elle produit deux brins identiques non appariés', 'Elle a lieu une fois sur deux'], answer: 1, explanation: 'Chaque brin parental sert de modèle et reste associé au nouveau brin synthétisé.' },
      { question: 'Pendant quelle phase de la mitose les chromatides sœurs se séparent-elles ?', choices: ['Prophase', 'Métaphase', 'Anaphase', 'Télophase'], answer: 2, explanation: 'À l’anaphase, les centromères se séparent et les chromatides migrent vers les pôles.' },
      { question: 'Le fuseau mitotique est formé :', choices: ['De microtubules', 'D’ADN', 'De phospholipides', 'De ribosomes'], answer: 0, explanation: 'Le fuseau est un ensemble de microtubules (tubuline) qui déplacent les chromosomes.' },
      { question: 'Sur la courbe de la quantité d’ADN, la montée de Q à 2Q correspond à :', choices: ['La mitose', 'La phase G1', 'La phase S', 'La cytodiérèse'], answer: 2, explanation: 'La quantité d’ADN double progressivement pendant la réplication, en phase S.' },
      { question: 'La méiose I est une division réductionnelle car :', choices: ['Elle sépare les chromatides sœurs', 'Elle sépare les chromosomes homologues', 'Elle réduit la taille de la cellule', 'Elle détruit une partie de l’ADN'], answer: 1, explanation: 'La séparation des homologues fait passer de 2n à n chromosomes.' },
      { question: 'À la fin de la méiose, une cellule humaine contient :', choices: ['46 chromosomes à une chromatide', '23 chromosomes à deux chromatides', '23 chromosomes à une chromatide', '46 chromosomes à deux chromatides'], answer: 2, explanation: 'Après la méiose II, chaque cellule est haploïde (n = 23) avec des chromosomes à une chromatide (quantité d’ADN Q/2).' },
    ],
    exercises: [
      {
        title: 'Reconnaître une division',
        statement: 'Une cellule d’un animal dont les cellules somatiques ont 2n = 8 chromosomes présente 8 chromosomes à deux chromatides alignés sur la plaque équatoriale, sans appariement. Une autre cellule du même animal présente 4 paires de chromosomes appariés de part et d’autre de la plaque équatoriale. Identifie la division et la phase de chaque cellule.',
        answer: 'Première cellule : 8 chromosomes à deux chromatides, alignés individuellement sur la plaque équatoriale, sans appariement : métaphase de mitose. Seconde cellule : les chromosomes homologues sont appariés par paires de part et d’autre de la plaque équatoriale : métaphase I de méiose (division réductionnelle).',
      },
      {
        title: 'Durée des phases',
        statement: 'Dans une culture de cellules qui se divisent de façon indépendante, le cycle dure 18 h. Sur 500 cellules observées, 450 sont en interphase et 30 en prophase. Calcule la durée de l’interphase, de la mitose et de la prophase.',
        answer: 'Interphase : 450 ÷ 500 = 90 % de 18 h = 16,2 h. Mitose : 50 cellules en division, soit 10 % de 18 h = 1,8 h (1 h 48 min). Prophase : 30 ÷ 500 = 6 % de 18 h = 1,08 h, soit environ 65 min.',
      },
      {
        title: 'Quantité d’ADN',
        statement: 'Une cellule diploïde humaine en G1 contient environ 6,4 pg d’ADN. Indique la quantité d’ADN d’une cellule en G2, d’une cellule fille de mitose, d’une cellule en fin de méiose I et d’un spermatozoïde.',
        answer: 'G2 : 12,8 pg (l’ADN a été répliqué). Cellule fille de mitose : 6,4 pg. Fin de méiose I : 6,4 pg (23 chromosomes à deux chromatides). Spermatozoïde : 3,2 pg (23 chromosomes à une chromatide).',
      },
    ],
    selfCheck: [
      'Je sais schématiser un chromosome à une et à deux chromatides et définir chromosomes homologues, diploïde et haploïde.',
      'Je sais citer les phases du cycle cellulaire et situer la réplication.',
      'Je sais expliquer la réplication semi-conservative, le rôle de l’ADN polymérase et la fidélité de la copie.',
      'Je sais reconnaître et décrire les phases de la mitose et le rôle du fuseau mitotique.',
      'Je sais tracer et interpréter la courbe de la quantité d’ADN au cours du cycle cellulaire.',
      'Je sais expliquer les deux divisions de la méiose et tracer la courbe de la quantité d’ADN correspondante.',
      'Je sais comparer mitose et méiose.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Cycle cellulaire — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cycle_cellulaire' },
      { title: 'Mitose — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Mitose' },
      { title: 'Méiose — Wikipédia', url: 'https://fr.wikipedia.org/wiki/M%C3%A9iose' },
      { title: 'Expérience de Meselson et Stahl — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Exp%C3%A9rience_de_Meselson_et_Stahl' },
    ],
  },
};

export default lesson;
