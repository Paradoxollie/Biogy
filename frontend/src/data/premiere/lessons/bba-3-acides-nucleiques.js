import { img } from '../media';
import extraction from '../../../assets/courses/premiere/bba-3-acides-nucleiques/extraction-adn.webp';
import nucleotide from '../../../assets/courses/premiere/bba-3-acides-nucleiques/nucleotide.webp';
import doubleHelice from '../../../assets/courses/premiere/bba-3-acides-nucleiques/double-helice.webp';
import appariement from '../../../assets/courses/premiere/bba-3-acides-nucleiques/appariement.webp';
import openstaxNucleotide from '../../../assets/courses/open/dna-nucleotide-openstax.jpg';

const IMG = {
  extraction: img(extraction, 'Tube à essai contenant un extrait vert de kiwi surmonté d’éthanol ; des filaments blancs d’ADN sont enroulés autour d’une baguette de verre.', 'photo', 1024, 1536),
  nucleotide: img(nucleotide, 'Schéma au crayon d’un nucléotide : groupement phosphate, pentose (pentagone) et base azotée ; les carbones 1′, 3′ et 5′ du pentose sont repérés.', 'schema', 1120, 1400),
  doubleHelice: img(doubleHelice, 'Schéma au crayon de la double hélice d’ADN : deux squelettes sucre-phosphate enroulés, reliés par des paires de bases unies par des liaisons hydrogène.', 'schema', 933, 1400),
  appariement: img(appariement, 'Schéma au crayon d’un fragment d’ADN déroulé en échelle : brin 1 de 5′ vers 3′, brin 2 de 3′ vers 5′, paires A–T (deux liaisons hydrogène) et G–C (trois liaisons hydrogène).', 'schema', 933, 1400),
  openstax: img(openstaxNucleotide, 'Schéma en anglais : double hélice d’ADN, deux paires de bases avec leurs formules chimiques et liaisons hydrogène, et un nucléotide détaillé (phosphate, sucre, base azotée).', 'schema', 817, 822),
};

const lesson = {
  version: 2,
  id: 'bba-3-acides-nucleiques',
  duration: 'Environ 3 séances (cours, modélisation et travaux pratiques)',
  hook: {
    image: IMG.extraction,
    question: 'Ces filaments blancs, extraits d’un kiwi en une heure de TP, contiennent toute l’information nécessaire pour construire un kiwi. Comment une molécule peut-elle porter une information ?',
    text: 'Chacune de tes cellules contient environ deux mètres d’ADN, replié dans un noyau de quelques micromètres. Cette molécule est écrite avec un alphabet de quatre lettres seulement : A, T, G et C. Dans ce chapitre, tu apprends à repérer les constituants d’un acide nucléique, à écrire et orienter une séquence, à comprendre pourquoi les deux brins de l’ADN s’associent si précisément, et ce qui distingue l’ADN de l’ARN.',
  },
  objectives: [
    'Repérer, dans un acide nucléique, la base azotée, l’ose et le groupement phosphate qui composent les nucléotides.',
    'Représenter une séquence nucléotidique avec les lettres des bases, en indiquant son orientation 5′→3′.',
    'Identifier les points communs et les différences entre une molécule d’ADN et une molécule d’ARN.',
    'Expliquer le rôle des liaisons hydrogène entre bases complémentaires dans l’association de deux brins (A=T, C≡G, A=U).',
    'Expliquer l’effet de la température sur la structure de l’ADN : dénaturation et hybridation moléculaire.',
  ],
  prerequisites: [
    'Les oses : D-ribose et D-désoxyribose, numérotation des carbones (chapitre « Glucides, protides, lipides »).',
    'Liaison covalente, liaison hydrogène ; fonction ester.',
    'L’ADN est le support de l’information génétique (seconde).',
  ],
  program: [
    'Repérer au sein d’un acide nucléique la base, l’ose et le groupement phosphate composant les nucléotides.',
    'Représenter une séquence nucléotidique à l’aide des lettres symboles représentant les bases azotées.',
    'Identifier les points communs et les différences entre une molécule d’ADN et une molécule d’ARN.',
    'Expliquer le rôle des liaisons hydrogène entre les acides nucléiques monocaténaires pour leur interaction spécifique.',
    'Expliquer l’influence des paramètres physicochimiques sur la conformation des biomolécules (cas de l’ADN).',
  ],

  course: {
    parts: [
      {
        title: 'Les nucléotides, unités des acides nucléiques',
        intro: 'L’ADN et l’ARN sont des polymères géants. Comme les protéines, ils sont construits à partir d’un petit nombre de monomères : les nucléotides.',
        blocks: [
          { type: 'definition', term: 'Acide nucléique', text: 'polymère de **nucléotides**. Il en existe deux types : l’**ADN** (acide désoxyribonucléique) et l’**ARN** (acide ribonucléique).' },
          { type: 'definition', term: 'Nucléotide', text: 'monomère formé de trois éléments liés entre eux : un **groupement phosphate**, un **pentose** (ose à 5 carbones) et une **base azotée**.' },
          { type: 'figure', image: IMG.nucleotide, caption: 'Organisation d’un nucléotide. La base azotée est fixée sur le carbone 1′ du pentose, le groupement phosphate sur le carbone 5′ ; le carbone 3′ porte un groupe –OH libre (petit cercle).', size: 'small' },
          { type: 'p', text: 'Pour ne pas confondre les atomes du pentose avec ceux de la base, les carbones du pentose sont numérotés **1′ à 5′** (on lit « un prime », « cinq prime »). Le pentose est sous forme cyclique, à 5 sommets (4 carbones et 1 oxygène), le carbone 5′ restant à l’extérieur du cycle.' },
          {
            type: 'compare',
            title: 'Deux pentoses, deux acides nucléiques',
            columns: [
              { title: 'Désoxyribose', subtitle: 'dans l’ADN', items: ['C~5~H~10~O~4~.', 'Le carbone **2′** porte deux H : pas de –OH.', 'D’où le nom acide **désoxy**ribonucléique.'] },
              { title: 'Ribose', subtitle: 'dans l’ARN', items: ['C~5~H~10~O~5~.', 'Le carbone **2′** porte un groupe –OH.', 'D’où le nom acide **ribo**nucléique.'] },
            ],
          },
          { type: 'definition', term: 'Base azotée', text: 'molécule cyclique riche en atomes d’azote. On la désigne par une lettre. Les bases à **deux cycles** sont les **purines** (adénine, guanine) ; les bases à **un cycle** sont les **pyrimidines** (cytosine, thymine, uracile).' },
          {
            type: 'table',
            caption: 'Les cinq bases azotées',
            head: ['Base', 'Lettre', 'Famille', 'Présente dans'],
            rows: [
              ['Adénine', 'A', 'Purine (2 cycles)', 'ADN et ARN'],
              ['Guanine', 'G', 'Purine (2 cycles)', 'ADN et ARN'],
              ['Cytosine', 'C', 'Pyrimidine (1 cycle)', 'ADN et ARN'],
              ['Thymine', 'T', 'Pyrimidine (1 cycle)', '**ADN seulement**'],
              ['Uracile', 'U', 'Pyrimidine (1 cycle)', '**ARN seulement**'],
            ],
          },
          { type: 'note', title: 'Les nucléotides ne servent pas qu’à l’ADN', text: 'L’**ATP** (adénosine triphosphate), qui fournit l’énergie aux réactions de la cellule, est un nucléotide à adénine et ribose portant trois groupements phosphate.' },
          {
            type: 'retenir',
            items: [
              'Nucléotide = groupement phosphate + pentose + base azotée.',
              'Base fixée sur le C1′ du pentose, phosphate sur le C5′, –OH libre sur le C3′.',
              'ADN : désoxyribose, bases A, T, G, C. ARN : ribose, bases A, U, G, C.',
            ],
          },
        ],
      },

      {
        title: 'Le brin : liaison phosphodiester et orientation 5′→3′',
        intro: 'Les nucléotides s’enchaînent toujours de la même façon, ce qui donne au brin un sens de lecture, comme une phrase.',
        blocks: [
          { type: 'definition', term: 'Liaison phosphodiester', text: 'liaison qui unit deux nucléotides successifs : le groupement phosphate relie le **carbone 3′** du pentose d’un nucléotide au **carbone 5′** du pentose du nucléotide suivant. Le phosphate forme ainsi deux fonctions ester, d’où le nom « phospho-di-ester ».' },
          { type: 'p', text: 'L’enchaînement « pentose – phosphate – pentose – phosphate… » forme le **squelette sucre-phosphate** du brin ; les bases azotées sont fixées sur ce squelette, comme les dents d’un peigne.' },
          {
            type: 'compare',
            title: 'Les deux extrémités d’un brin',
            columns: [
              { title: 'Extrémité 5′', items: ['Le carbone 5′ du premier nucléotide porte un **groupement phosphate libre**.', 'C’est le début du brin.'] },
              { title: 'Extrémité 3′', items: ['Le carbone 3′ du dernier nucléotide porte un **–OH libre**.', 'C’est la fin du brin : un nouveau nucléotide ne peut s’ajouter que de ce côté.'] },
            ],
          },
          { type: 'definition', term: 'Séquence nucléotidique', text: 'ordre des nucléotides d’un brin, écrit avec les lettres des bases, **de l’extrémité 5′ vers l’extrémité 3′**. Exemple : 5′-ATGCCGTA-3′. C’est cet ordre qui porte l’information génétique.' },
          {
            type: 'steps',
            title: 'Représenter une séquence nucléotidique',
            items: [
              'Écrire « 5′- » à gauche.',
              'Écrire les lettres des bases dans l’ordre, sans espace : A, T, G, C pour l’ADN ; A, U, G, C pour l’ARN.',
              'Terminer par « -3′ » à droite.',
              'Si l’on écrit un brin dans l’autre sens, l’indiquer : 3′-…-5′.',
            ],
          },
          { type: 'warning', title: 'Une séquence sans orientation ne veut rien dire', text: 'Les séquences 5′-ATGC-3′ et 5′-CGTA-3′ sont **différentes** : la seconde correspond au même enchaînement de lettres lu à l’envers. Indique toujours les extrémités 5′ et 3′.' },
          { type: 'note', title: 'Une information presque illimitée', text: 'Avec 4 nucléotides possibles à chaque position, un fragment de 10 nucléotides peut avoir 4^10^, soit plus d’un million de séquences différentes. Le génome humain compte environ 3 milliards de paires de nucléotides par lot de chromosomes.' },
          {
            type: 'retenir',
            items: [
              'La liaison phosphodiester relie le C3′ d’un nucléotide au C5′ du suivant par un groupement phosphate.',
              'Un brin est orienté : extrémité 5′ (phosphate libre) et extrémité 3′ (–OH libre).',
              'Une séquence s’écrit de 5′ vers 3′ avec les lettres des bases : 5′-ATGC-3′.',
            ],
          },
        ],
      },

      {
        title: 'La double hélice d’ADN : deux brins complémentaires et antiparallèles',
        intro: 'En 1953, James Watson et Francis Crick proposent le modèle de la double hélice, en s’appuyant notamment sur les clichés de diffraction des rayons X obtenus par Rosalind Franklin.',
        blocks: [
          { type: 'p', text: 'L’ADN est **bicaténaire** : il est formé de **deux brins** (deux chaînes) enroulés l’un autour de l’autre en **double hélice**. Les squelettes sucre-phosphate sont à l’extérieur ; les bases sont tournées vers l’intérieur et s’associent deux à deux.' },
          { type: 'figure', image: IMG.doubleHelice, caption: 'La double hélice d’ADN : environ 2 nm de diamètre, un tour d’hélice tous les 3,4 nm, soit une dizaine de paires de bases.', size: 'small' },
          { type: 'definition', term: 'Complémentarité des bases', text: 'une base d’un brin s’associe toujours à la même base de l’autre brin, par des **liaisons hydrogène** : **A** avec **T** par **2** liaisons hydrogène (notées A=T), **G** avec **C** par **3** liaisons hydrogène (notées C≡G). Une purine s’associe toujours à une pyrimidine : la largeur de la double hélice est constante.' },
          { type: 'definition', term: 'Brins antiparallèles', text: 'les deux brins sont orientés en **sens opposés** : en face de l’extrémité 5′ d’un brin se trouve l’extrémité 3′ de l’autre.' },
          { type: 'figure', image: IMG.appariement, caption: 'Fragment d’ADN déroulé : les deux brins sont complémentaires (A en face de T, G en face de C) et antiparallèles (flèches de 5′ vers 3′). Les paires G–C comptent trois liaisons hydrogène, les paires A–T deux.', size: 'small' },
          {
            type: 'steps',
            title: 'Écrire le brin complémentaire d’un brin d’ADN',
            items: [
              { title: 'Écrire le brin donné', text: '5′-ATGCCA-3′' },
              { title: 'Écrire, base par base, la base complémentaire en dessous', text: 'A → T, T → A, G → C, C → G : on obtient TACGGT.' },
              { title: 'Orienter le brin obtenu en sens inverse', text: '3′-TACGGT-5′ (antiparallèle).' },
              { title: 'Si on le demande, le réécrire de 5′ vers 3′', text: 'Lire de droite à gauche : 5′-TGGCAT-3′.' },
            ],
          },
          { type: 'p', text: 'Conséquence de la complémentarité : dans un ADN bicaténaire, il y a **autant de A que de T** et **autant de G que de C** (règles établies par Erwin Chargaff vers 1950). La séquence d’un brin permet de déduire celle de l’autre : c’est ce qui permet à l’ADN d’être copié fidèlement.' },
          {
            type: 'retenir',
            items: [
              'ADN = deux brins enroulés en double hélice, squelettes sucre-phosphate à l’extérieur, bases à l’intérieur.',
              'Bases complémentaires : A=T (2 liaisons hydrogène), C≡G (3 liaisons hydrogène).',
              'Les deux brins sont antiparallèles : 5′→3′ face à 3′→5′.',
              'Dans un ADN bicaténaire : %A = %T et %G = %C.',
            ],
          },
        ],
      },

      {
        title: 'ADN et ARN : points communs et différences',
        intro: 'L’ADN conserve l’information génétique ; les ARN en sont des copies de travail, utilisées par la cellule pour fabriquer ses protéines.',
        blocks: [
          {
            type: 'table',
            caption: 'Comparer l’ADN et l’ARN',
            head: ['Caractère', 'ADN', 'ARN'],
            rows: [
              ['Monomères', 'Désoxyribonucléotides', 'Ribonucléotides'],
              ['Pentose', 'Désoxyribose (pas de –OH en 2′)', 'Ribose (–OH en 2′)'],
              ['Bases', 'A, T, G, C', 'A, **U**, G, C'],
              ['Nombre de brins', '2 brins complémentaires et antiparallèles (bicaténaire)', '1 seul brin (monocaténaire), qui peut se replier localement'],
              ['Taille', 'Très longue (des millions de nucléotides par molécule chez l’être humain)', 'Courte (de quelques dizaines à quelques milliers de nucléotides)'],
              ['Localisation chez les eucaryotes', 'Noyau (et mitochondries)', 'Formé dans le noyau, très présent dans le cytoplasme'],
              ['Stabilité', 'Molécule stable, conservée toute la vie de la cellule', 'Molécule temporaire, rapidement dégradée'],
              ['Rôle', 'Support permanent de l’information génétique', 'Expression de l’information : ARN messager, ARN de transfert, ARN ribosomique'],
            ],
          },
          {
            type: 'list',
            title: 'Les points communs',
            items: [
              'Ce sont des polymères de nucléotides (phosphate + pentose + base).',
              'Les nucléotides sont unis par des liaisons phosphodiester (C3′–phosphate–C5′).',
              'Les brins sont orientés 5′→3′ et leur séquence porte une information.',
              'Ils possèdent trois bases communes : A, G et C.',
            ],
          },
          { type: 'p', text: 'Dans l’ARN, l’**uracile** remplace la thymine et s’associe à l’adénine par **2 liaisons hydrogène** (A=U). Ces appariements permettent à un brin d’ARN de s’associer à un brin d’ADN complémentaire (lors de la fabrication de l’ARN, étudiée dans le chapitre sur l’expression des gènes) ou de se replier sur lui-même, comme l’ARN de transfert.' },
          { type: 'example', title: 'ARN complémentaire d’un brin d’ADN', text: 'Brin d’ADN : 3′-TACGGA-5′. L’ARN complémentaire s’écrit 5′-AUGCCU-3′ : en face de chaque A de l’ADN, on place un U.' },
          {
            type: 'retenir',
            items: [
              'ADN : désoxyribose, A-T-G-C, deux brins, stable, stockage de l’information.',
              'ARN : ribose, A-U-G-C, un brin, temporaire, expression de l’information.',
              'Points communs : nucléotides, liaisons phosphodiester, orientation 5′→3′, bases A, G, C.',
              'Appariement dans l’ARN : A=U et C≡G.',
            ],
          },
        ],
      },

      {
        title: 'Liaisons hydrogène : dénaturation et hybridation de l’ADN',
        intro: 'Les deux brins de l’ADN tiennent ensemble grâce à des millions de liaisons faibles. On peut les séparer… puis les réassocier : c’est la base de nombreuses techniques de biotechnologie.',
        blocks: [
          { type: 'p', text: 'Une liaison hydrogène est une **liaison faible** : seule, elle est facile à rompre. Mais une molécule d’ADN en compte des millions, ce qui rend la double hélice très stable à la température du corps. Les liaisons phosphodiester des squelettes, elles, sont covalentes : elles ne sont pas rompues par une élévation modérée de température.' },
          { type: 'definition', term: 'Dénaturation de l’ADN', text: 'séparation des deux brins de l’ADN par **rupture des liaisons hydrogène** entre bases complémentaires, provoquée par une température élevée (environ 90 à 95 °C) ou un pH très basique. On obtient deux brins **monocaténaires** ; leur séquence n’est pas modifiée.' },
          { type: 'definition', term: 'Hybridation moléculaire', text: 'association spontanée, par liaisons hydrogène, de deux acides nucléiques **monocaténaires** dont les séquences sont **complémentaires et antiparallèles**, lorsque la température redescend. Les deux brins peuvent avoir des origines différentes (ADN et ADN, ADN et ARN).' },
          {
            type: 'flow',
            title: 'Dénaturation et hybridation',
            steps: [
              { title: 'ADN bicaténaire', text: 'deux brins appariés' },
              { title: 'Chauffage vers 95 °C', text: 'rupture des liaisons hydrogène' },
              { title: 'Deux brins monocaténaires', text: 'séquences intactes' },
              { title: 'Refroidissement', text: 'appariement des séquences complémentaires : hybridation' },
            ],
          },
          { type: 'p', text: 'Plus un ADN est riche en paires **G–C** (trois liaisons hydrogène), plus il faut chauffer pour séparer ses brins : sa **température de fusion** (température à laquelle la moitié des molécules sont dénaturées) est plus élevée.' },
          {
            type: 'cards',
            items: [
              { title: 'PCR', text: 'Pour copier un fragment d’ADN, on chauffe à 95 °C (dénaturation), puis on refroidit vers 50 à 65 °C pour que de courtes amorces s’hybrident aux brins, avant leur prolongement par une enzyme.', tone: 'green' },
              { title: 'Sondes', text: 'Une **sonde** est un court brin marqué (fluorescent par exemple), complémentaire d’une séquence recherchée : si elle s’hybride, la séquence est présente (diagnostic, recherche d’un gène).', tone: 'blue' },
              { title: 'Tests de détection', text: 'Les tests de détection d’un virus par RT-PCR reposent sur l’hybridation d’amorces et de sondes à une séquence spécifique du virus.', tone: 'yellow' },
            ],
          },
          { type: 'warning', title: 'Complémentaire ET antiparallèle', text: 'Une sonde s’hybride avec une séquence cible seulement si les bases sont complémentaires **lorsque les deux brins sont placés tête-bêche** (5′ face à 3′). Une suite de bases complémentaires mais orientée dans le même sens ne s’hybride pas.' },
          {
            type: 'retenir',
            items: [
              'Les liaisons hydrogène entre bases complémentaires sont faibles, mais nombreuses : elles assurent la cohésion et la spécificité de l’association des deux brins.',
              'Dénaturation : la chaleur (vers 95 °C) rompt les liaisons hydrogène et sépare les brins, sans modifier leur séquence.',
              'Hybridation : au refroidissement, deux brins complémentaires et antiparallèles se réassocient. Elle est utilisée en PCR et avec les sondes.',
              'Un ADN riche en G–C a une température de fusion plus élevée.',
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
        title: 'Repérer les constituants des nucléotides',
        duration: '25 min',
        skills: ['Observer', 'Identifier', 'Traduire un document'],
        context: 'Les documents scientifiques sont souvent en anglais. Ce schéma, publié dans un manuel universitaire libre, représente l’ADN à trois échelles.',
        documents: [
          { label: 'Document 1', title: 'Structure de l’ADN (schéma en anglais)', image: IMG.openstax, caption: 'En haut à gauche : la double hélice ; en haut à droite : deux paires de bases et leurs formules ; en bas : un nucléotide à guanine.', credit: 'OpenStax — CC BY 4.0' },
          {
            label: 'Document 2',
            title: 'Petit lexique',
            blocks: [
              {
                type: 'table',
                head: ['Anglais', 'Français'],
                rows: [
                  ['Sugar', 'Sucre (ici le désoxyribose)'],
                  ['Phosphate', 'Groupement phosphate'],
                  ['Nitrogenous base', 'Base azotée'],
                  ['Base pair', 'Paire de bases'],
                  ['Hydrogen bonds', 'Liaisons hydrogène'],
                  ['Sugar-phosphate backbone', 'Squelette sucre-phosphate'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Dans le nucléotide du bas du document 1, nomme les trois constituants et indique le carbone du sucre sur lequel chacun est fixé.', hint: 'Les carbones du sucre sont numérotés 1′ à 5′.', answer: 'Le groupement phosphate (Phosphate) est fixé sur le carbone 5′ ; la base azotée (Nitrogenous base), ici la guanine, est fixée sur le carbone 1′ ; le sucre (Sugar) est le désoxyribose, qui porte un –OH libre sur le carbone 3′.' },
          { text: 'Justifie que ce sucre est un désoxyribose et non un ribose.', answer: 'Le carbone 2′ du sucre ne porte pas de groupe –OH (seulement des H), alors que le carbone 3′ en porte un. Un ribose porterait un –OH sur le carbone 2′.' },
          { text: 'Dans la partie en haut à droite, repère l’extrémité 5′ et l’extrémité 3′ du brin de gauche. Que remarques-tu pour le brin de droite ?', answer: 'Le brin de gauche commence en haut par un phosphate libre (extrémité 5′) et se termine en bas par un –OH sur le carbone 3′ (extrémité 3′). Le brin de droite est orienté en sens inverse : extrémité 3′ en haut (–OH) et 5′ en bas. Les deux brins sont antiparallèles.' },
          { text: 'Compte les liaisons hydrogène (pointillés) entre la thymine et l’adénine, puis entre la guanine et la cytosine. Conclus.', answer: 'Deux liaisons hydrogène entre la thymine et l’adénine, trois entre la guanine et la cytosine. Les bases s’associent de façon spécifique : A=T et C≡G.' },
          { text: 'Pourquoi appelle-t-on « squelette sucre-phosphate » les montants de l’échelle ?', answer: 'Ils sont formés par l’alternance de sucres et de groupements phosphate liés par des liaisons phosphodiester. Ils forment la charpente du brin, sur laquelle sont fixées les bases.' },
        ],
      },
      {
        title: 'Écrire et orienter des séquences',
        duration: '25 min',
        skills: ['Représenter', 'Appliquer une règle', 'Calculer'],
        context: 'Un laboratoire a séquencé un court fragment d’ADN double brin. Seule la séquence d’un brin est fournie.',
        documents: [
          { label: 'Document 3', title: 'Séquence d’un brin du fragment', text: ['5′-ATGGCTTACGAT-3′'] },
        ],
        questions: [
          { text: 'Combien de nucléotides compte ce brin ? Combien de paires de bases compte le fragment double brin ?', answer: 'Le brin compte 12 nucléotides ; le fragment double brin compte donc 12 paires de bases.' },
          { text: 'Écris la séquence du brin complémentaire, d’abord orienté 3′→5′ sous le brin donné, puis réécrite de 5′ vers 3′.', hint: 'A ↔ T et G ↔ C, puis inverse le sens de lecture.', answer: 'Sous le brin donné : 3′-TACCGAATGCTA-5′. Réécrite de 5′ vers 3′ : 5′-ATCGTAAGCCAT-3′.' },
          { text: 'Calcule le nombre total de liaisons hydrogène qui unissent les deux brins.', hint: 'Compte les paires A–T (2 liaisons) et G–C (3 liaisons).', answer: 'Le brin donné contient 3 A et 4 T, soit 7 paires A–T : 7 × 2 = 14 liaisons. Il contient 3 G et 2 C, soit 5 paires G–C : 5 × 3 = 15 liaisons. Total : 29 liaisons hydrogène.' },
          { text: 'Écris la séquence d’un ARN qui serait complémentaire du brin 3′-TACCGAATGCTA-5′.', answer: '5′-AUGGCUUACGAU-3′ : même séquence que le brin donné dans le document, mais avec U à la place de T.' },
          { text: 'Un élève écrit le brin complémentaire sous la forme 5′-TACCGAATGCTA-3′. Explique son erreur.', answer: 'Il a bien trouvé les bases complémentaires mais a oublié que les brins sont antiparallèles : la séquence TACCGAATGCTA se lit de 3′ vers 5′. Écrite de 5′ vers 3′, elle devient 5′-ATCGTAAGCCAT-3′.' },
        ],
      },
      {
        title: 'ADN ou ARN ? Exploiter des compositions en bases',
        duration: '20 min',
        skills: ['Exploiter des données', 'Raisonner', 'Argumenter'],
        context: 'On analyse la composition en bases de différents acides nucléiques.',
        documents: [
          {
            label: 'Document 4',
            title: 'Composition en bases de l’ADN de trois espèces (en %)',
            blocks: [
              {
                type: 'table',
                head: ['Espèce', 'A', 'T', 'G', 'C'],
                rows: [
                  ['Être humain', '29,5', '29,5', '20,5', '20,5'],
                  ['_Escherichia coli_ (bactérie intestinale)', '24,5', '24,5', '25,5', '25,5'],
                  ['_Thermus thermophilus_ (bactérie des sources chaudes)', '15,5', '15,5', '34,5', '34,5'],
                ],
              },
            ],
            source: 'Valeurs arrondies, calculées à partir du taux de G + C des génomes séquencés',
          },
          { label: 'Document 5', title: 'Un acide nucléique inconnu', text: ['Un acide nucléique X, extrait d’un virus, a la composition suivante (situation d’exercice) : A : 24 % ; U : 32 % ; G : 25 % ; C : 19 %. On n’y détecte pas de thymine.'] },
        ],
        questions: [
          { text: 'Dans le document 4, compare %A et %T, puis %G et %C. Explique ces égalités.', answer: 'Pour chaque espèce, %A = %T et %G = %C. Dans un ADN bicaténaire, chaque A d’un brin est apparié à un T de l’autre brin et chaque G à un C : il y a donc autant de A que de T et autant de G que de C.' },
          { text: 'Calcule le pourcentage de G + C de chaque ADN. Lequel est le plus difficile à dénaturer par la chaleur ? Justifie.', answer: 'Être humain : 41 % ; _E. coli_ : 51 % ; _T. thermophilus_ : 69 %. L’ADN de _T. thermophilus_ est le plus difficile à dénaturer : il est le plus riche en paires G–C, unies par trois liaisons hydrogène au lieu de deux. Cela est cohérent avec la vie de cette bactérie dans des sources chaudes.' },
          { text: 'L’acide nucléique X est-il de l’ADN ou de l’ARN ? Justifie.', answer: 'C’est de l’ARN : il contient de l’uracile (U) et pas de thymine.' },
          { text: 'Cet acide nucléique est-il monocaténaire ou bicaténaire ? Justifie.', hint: 'Que devrait-on observer s’il était formé de deux brins complémentaires ?', answer: 'S’il était bicaténaire, on aurait %A = %U et %G = %C. Or A = 24 % ≠ U = 32 % et G = 25 % ≠ C = 19 % : il est monocaténaire (un seul brin).' },
        ],
      },
      {
        title: 'Extraire l’ADN au laboratoire',
        duration: '25 min',
        skills: ['Comprendre un protocole', 'Relier structure et propriété'],
        context: 'En TP, des élèves extraient l’ADN d’un kiwi avec du matériel simple.',
        documents: [
          { label: 'Document 6', title: 'Résultat de l’extraction', image: IMG.extraction, caption: 'Filaments d’ADN à l’interface entre l’extrait de kiwi et l’éthanol.' },
          {
            label: 'Document 7',
            title: 'Protocole suivi',
            blocks: [
              {
                type: 'steps',
                items: [
                  'Écraser un demi-kiwi dans un mortier avec 10 mL d’eau salée (chlorure de sodium) et 5 mL de liquide vaisselle (détergent).',
                  'Laisser agir 10 min, puis filtrer pour récupérer le liquide.',
                  'Verser lentement, le long de la paroi du tube incliné, de l’éthanol glacé sur le filtrat (même volume).',
                  'Attendre quelques minutes : des filaments blancs apparaissent à l’interface ; les enrouler sur une baguette de verre.',
                ],
              },
            ],
          },
          { label: 'Document 8', title: 'Quelques propriétés', text: ['Les membranes des cellules et du noyau sont formées principalement de lipides ; les détergents les dissolvent.', 'Les groupements phosphate de l’ADN portent des charges négatives ; les ions sodium Na^+^ peuvent les neutraliser.', 'L’ADN est soluble dans l’eau mais insoluble dans l’éthanol.'] },
        ],
        questions: [
          { text: 'Quel est le rôle du détergent ?', answer: 'Il dissout les lipides des membranes plasmiques et nucléaires : les cellules et les noyaux éclatent et libèrent leur ADN dans la solution.' },
          { text: 'Quel est le rôle du sel ?', answer: 'Les ions Na^+^ neutralisent les charges négatives des groupements phosphate de l’ADN : les molécules d’ADN ne se repoussent plus et peuvent s’agréger, ce qui facilite leur précipitation.' },
          { text: 'Explique l’apparition des filaments à l’interface entre le filtrat et l’éthanol.', answer: 'L’ADN, soluble dans l’eau du filtrat, est insoluble dans l’éthanol : au contact de l’éthanol, il précipite et forme des filaments blancs visibles.' },
          { text: 'Une molécule d’ADN mesure environ 2 nm de diamètre. Comment peut-on voir l’ADN à l’œil nu ?', answer: 'On ne voit pas une molécule isolée : on voit des millions de longues molécules d’ADN agrégées et enchevêtrées en filaments.' },
          { text: 'Ce protocole permet-il de séparer l’ADN de l’ARN ? Justifie.', answer: 'Non : l’ARN est lui aussi un acide nucléique, chargé négativement et insoluble dans l’éthanol ; il précipite en même temps. Les filaments obtenus contiennent surtout de l’ADN, mais aussi de l’ARN et quelques protéines.' },
        ],
      },
      {
        title: 'Dénaturation et hybridation moléculaire',
        duration: '25 min',
        skills: ['Calculer', 'Raisonner', 'Appliquer'],
        context: 'Les biologistes utilisent la chaleur pour séparer les brins d’ADN, puis des sondes pour rechercher une séquence précise.',
        documents: [
          {
            label: 'Document 9',
            title: 'Température de fusion de l’ADN',
            text: ['La température de fusion T~m~ est la température à laquelle la moitié des molécules d’ADN sont dénaturées. Dans une solution saline donnée, elle peut être estimée par la relation établie par Julius Marmur et Paul Doty (1962) :'],
            blocks: [
              { type: 'formula', expression: 'T~m~ = 69,3 + 0,41 × (% G + C)', legend: [{ symbol: 'T~m~', meaning: 'température de fusion en °C' }, { symbol: '% G + C', meaning: 'pourcentage de paires G–C de l’ADN' }] },
            ],
          },
          { label: 'Document 10', title: 'Recherche d’une séquence par une sonde', text: ['Séquence cible (brin d’ADN dénaturé) : 5′-GGATCCTA-3′.', 'Sondes proposées : sonde 1 : 5′-GGATCCTA-3′ ; sonde 2 : 5′-CCTAGGAT-3′ ; sonde 3 : 5′-TAGGATCC-3′.'] },
        ],
        questions: [
          { text: 'Calcule la température de fusion de l’ADN humain (41 % de G + C) et celle de l’ADN de _Thermus thermophilus_ (69 % de G + C).', answer: 'ADN humain : T~m~ = 69,3 + 0,41 × 41 ≈ 86,1 °C. ADN de _T. thermophilus_ : T~m~ = 69,3 + 0,41 × 69 ≈ 97,6 °C.' },
          { text: 'Explique, à l’échelle moléculaire, pourquoi T~m~ augmente avec le pourcentage de G + C.', answer: 'Une paire G–C est unie par trois liaisons hydrogène, une paire A–T par deux seulement. Plus l’ADN contient de paires G–C, plus il faut d’énergie (donc une température élevée) pour rompre toutes les liaisons hydrogène et séparer les brins.' },
          { text: 'Pourquoi la dénaturation ne modifie-t-elle pas la séquence de l’ADN ?', answer: 'La chaleur rompt seulement les liaisons hydrogène (faibles) entre les bases des deux brins. Les liaisons phosphodiester (covalentes) qui relient les nucléotides d’un même brin ne sont pas rompues : l’ordre des nucléotides est conservé.' },
          { text: 'Quelle sonde du document 10 s’hybride avec la séquence cible ? Justifie en écrivant l’appariement.', hint: 'Place la sonde tête-bêche sous la cible : 3′ sous le 5′.', answer: ['La sonde 3. Placée tête-bêche, elle se lit 3′-CCTAGGAT-5′ sous la cible 5′-GGATCCTA-3′ : G–C, G–C, A–T, T–A, C–G, C–G, T–A, A–T. Toutes les bases sont complémentaires et les brins antiparallèles.', 'La sonde 1 est identique à la cible (pas complémentaire). La sonde 2 porte bien les bases complémentaires, mais orientées dans le même sens que la cible (parallèle) : elle ne s’hybride pas.'] },
          { text: 'Lors d’une PCR, l’étape d’hybridation des amorces se fait vers 55 °C et non à 95 °C. Pourquoi ?', answer: 'À 95 °C, les liaisons hydrogène sont rompues : aucun appariement stable n’est possible. En refroidissant vers 55 °C, les liaisons hydrogène peuvent se former entre les amorces et les séquences complémentaires des brins : l’hybridation devient possible.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Les acides nucléiques (ADN, ARN) sont des polymères de nucléotides ; un nucléotide = groupement phosphate + pentose + base azotée.',
      'La base est fixée sur le C1′ du pentose, le phosphate sur le C5′ ; la liaison phosphodiester relie le C3′ d’un nucléotide au C5′ du suivant.',
      'Un brin est orienté 5′→3′ ; une séquence s’écrit de 5′ vers 3′ avec les lettres des bases.',
      'L’ADN est formé de deux brins complémentaires (A=T, C≡G) et antiparallèles, enroulés en double hélice.',
      'L’ARN diffère de l’ADN par son ribose, l’uracile à la place de la thymine, un seul brin et un rôle d’expression de l’information.',
      'Les liaisons hydrogène, faibles mais nombreuses, assurent l’association spécifique des brins ; la chaleur les rompt (dénaturation) et le refroidissement permet l’hybridation.',
    ],
    method: {
      title: 'Écrire le brin complémentaire d’une séquence',
      steps: [
        'Recopier le brin donné avec ses extrémités (ex. 5′-ATGC-3′).',
        'Écrire en dessous la base complémentaire de chaque base : A↔T (ou A→U pour un ARN), G↔C.',
        'Orienter le nouveau brin en sens inverse (3′ sous 5′).',
        'Si demandé, réécrire le brin de 5′ vers 3′ en le lisant de droite à gauche.',
        'Vérifier : chaque paire est A–T ou G–C, et les extrémités sont opposées.',
      ],
    },
    vocabulary: [
      { term: 'Nucléotide', definition: 'Monomère des acides nucléiques : groupement phosphate + pentose + base azotée.' },
      { term: 'Désoxyribose / ribose', definition: 'Pentose de l’ADN (sans –OH en 2′) / pentose de l’ARN (avec –OH en 2′).' },
      { term: 'Base azotée', definition: 'Molécule cyclique azotée désignée par une lettre : A, T, G, C (ADN) ; A, U, G, C (ARN).' },
      { term: 'Purine / pyrimidine', definition: 'Base à deux cycles (A, G) / base à un cycle (C, T, U).' },
      { term: 'Liaison phosphodiester', definition: 'Liaison entre le C3′ d’un nucléotide et le C5′ du suivant, par l’intermédiaire d’un groupement phosphate.' },
      { term: 'Orientation 5′→3′', definition: 'Sens d’un brin, de l’extrémité à phosphate libre (5′) vers l’extrémité à –OH libre (3′).' },
      { term: 'Séquence nucléotidique', definition: 'Ordre des nucléotides d’un brin, écrit de 5′ vers 3′.' },
      { term: 'Monocaténaire / bicaténaire', definition: 'Formé d’un seul brin / formé de deux brins.' },
      { term: 'Complémentarité', definition: 'Association spécifique des bases : A avec T (ou U), G avec C.' },
      { term: 'Antiparallèle', definition: 'Se dit de deux brins appariés orientés en sens opposés.' },
      { term: 'Double hélice', definition: 'Structure de l’ADN : deux brins enroulés autour d’un même axe.' },
      { term: 'Dénaturation de l’ADN', definition: 'Séparation des deux brins par rupture des liaisons hydrogène (chaleur, pH très basique).' },
      { term: 'Hybridation moléculaire', definition: 'Association de deux brins monocaténaires complémentaires et antiparallèles par liaisons hydrogène.' },
      { term: 'Sonde', definition: 'Court brin d’acide nucléique marqué, complémentaire d’une séquence recherchée.' },
    ],
    mistakes: [
      { wrong: 'Écrire une séquence sans préciser 5′ et 3′.', right: 'Une séquence s’écrit toujours avec ses extrémités : 5′-ATGC-3′.' },
      { wrong: 'Écrire le brin complémentaire dans le même sens que le brin donné.', right: 'Les brins sont antiparallèles : le complémentaire de 5′-ATGC-3′ est 3′-TACG-5′, soit 5′-GCAT-3′.' },
      { wrong: 'Placer de la thymine dans un ARN ou de l’uracile dans l’ADN.', right: 'ADN : A, T, G, C. ARN : A, U, G, C.' },
      { wrong: 'Dire que la dénaturation coupe l’ADN en nucléotides.', right: 'La dénaturation ne rompt que les liaisons hydrogène entre les deux brins ; les liaisons phosphodiester restent intactes.' },
      { wrong: 'Dire que la paire A–T compte trois liaisons hydrogène.', right: 'A=T : deux liaisons hydrogène ; C≡G : trois liaisons hydrogène.' },
      { wrong: 'Penser que l’ARN est toujours parfaitement linéaire.', right: 'L’ARN est monocaténaire, mais il peut se replier en formant des appariements locaux (A=U, C≡G).' },
    ],
    quiz: [
      { question: 'Un nucléotide est formé :', choices: ['d’un acide aminé, d’un ose et d’un phosphate', 'd’un groupement phosphate, d’un pentose et d’une base azotée', 'd’un glycérol et de deux acides gras', 'de deux bases azotées et d’un sucre'], answer: 1, explanation: 'Nucléotide = groupement phosphate + pentose (ribose ou désoxyribose) + base azotée.' },
      { question: 'Dans un nucléotide, la base azotée est fixée sur le carbone :', choices: ['1′ du pentose', '2′ du pentose', '3′ du pentose', '5′ du pentose'], answer: 0, explanation: 'La base est liée au C1′ ; le phosphate est lié au C5′.' },
      { question: 'Quelle base est présente dans l’ARN mais pas dans l’ADN ?', choices: ['L’adénine', 'La thymine', 'La guanine', 'L’uracile'], answer: 3, explanation: 'L’uracile remplace la thymine dans l’ARN.' },
      { question: 'La liaison phosphodiester relie :', choices: ['deux bases complémentaires', 'le C1′ au C2′ d’un même pentose', 'le C3′ d’un nucléotide au C5′ du suivant', 'les deux brins de l’ADN'], answer: 2, explanation: 'Le groupement phosphate unit le C3′ d’un nucléotide au C5′ du nucléotide suivant, dans un même brin.' },
      { question: 'Le brin complémentaire de 5′-AATGC-3′ s’écrit, de 5′ vers 3′ :', choices: ['5′-TTACG-3′', '5′-CGTAA-3′', '5′-AATGC-3′', '5′-GCATT-3′'], answer: 3, explanation: 'Complémentaire : 3′-TTACG-5′, qui se lit de 5′ vers 3′ : 5′-GCATT-3′.' },
      { question: 'Entre la guanine et la cytosine, il y a :', choices: ['une liaison covalente', 'deux liaisons hydrogène', 'trois liaisons hydrogène', 'un pont disulfure'], answer: 2, explanation: 'C≡G : trois liaisons hydrogène ; A=T : deux.' },
      { question: 'Un ADN bicaténaire contient 30 % d’adénine. Son pourcentage de guanine est :', choices: ['20 %', '30 %', '40 %', '70 %'], answer: 0, explanation: '%A = %T = 30 %, donc %G + %C = 40 % et %G = %C = 20 %.' },
      { question: 'La dénaturation de l’ADN par la chaleur provoque :', choices: ['la rupture des liaisons phosphodiester', 'la séparation des deux brins', 'le remplacement de T par U', 'la formation de ponts disulfure'], answer: 1, explanation: 'La chaleur rompt les liaisons hydrogène entre bases : les deux brins se séparent, sans modification de leur séquence.' },
      { question: 'L’hybridation moléculaire nécessite deux brins :', choices: ['identiques et parallèles', 'complémentaires et parallèles', 'complémentaires et antiparallèles', 'identiques et antiparallèles'], answer: 2, explanation: 'Les bases doivent être complémentaires lorsque les brins sont placés tête-bêche (antiparallèles).' },
    ],
    exercises: [
      {
        title: 'Analyser un fragment d’ADN',
        statement: ['On donne un brin d’ADN : 5′-GCATTAGC-3′.', 'a) Écris le brin complémentaire, orienté. b) Calcule le nombre de liaisons hydrogène entre les deux brins. c) Calcule le pourcentage de G + C du fragment.'],
        answer: ['a) 3′-CGTAATCG-5′, soit 5′-GCTAATGC-3′ de 5′ vers 3′.', 'b) Le brin donné contient 4 bases A ou T (A, T, T, A) et 4 bases G ou C (G, C, G, C) : 4 × 2 + 4 × 3 = 8 + 12 = 20 liaisons hydrogène.', 'c) 4 paires G–C sur 8 : 50 % de G + C.'],
      },
      {
        title: 'ADN ou ARN ?',
        statement: 'Deux échantillons d’acides nucléiques sont analysés. Échantillon 1 : désoxyribose, A 20 %, T 20 %, G 30 %, C 30 %. Échantillon 2 : ribose, A 26 %, U 22 %, G 30 %, C 22 %. Identifie chaque molécule et indique si elle est monocaténaire ou bicaténaire.',
        answer: ['Échantillon 1 : désoxyribose et thymine, c’est de l’ADN ; %A = %T et %G = %C, il est bicaténaire.', 'Échantillon 2 : ribose et uracile, c’est de l’ARN ; %A ≠ %U et %G ≠ %C, il est monocaténaire.'],
      },
      {
        title: 'Une sonde pour un diagnostic',
        statement: 'Pour détecter une bactérie, on recherche dans l’ADN de l’échantillon la séquence 5′-TTGACA-3′ à l’aide d’une sonde fluorescente. a) Écris la séquence de la sonde (de 5′ vers 3′). b) Pourquoi faut-il chauffer l’ADN de l’échantillon avant d’ajouter la sonde ?',
        answer: ['a) La sonde est complémentaire et antiparallèle : 3′-AACTGT-5′, soit 5′-TGTCAA-3′.', 'b) Il faut d’abord dénaturer l’ADN double brin (rupture des liaisons hydrogène) pour obtenir des brins monocaténaires : la sonde peut alors s’hybrider à sa séquence complémentaire lors du refroidissement.'],
      },
    ],
    selfCheck: [
      'Je sais repérer la base, le pentose et le groupement phosphate dans un nucléotide et dans un brin.',
      'Je sais distinguer le ribose du désoxyribose et les bases de l’ADN de celles de l’ARN.',
      'Je sais écrire une séquence orientée 5′→3′.',
      'Je sais écrire le brin complémentaire et antiparallèle d’un brin d’ADN, ou l’ARN complémentaire.',
      'Je sais citer les points communs et les différences entre ADN et ARN.',
      'Je sais expliquer le rôle des liaisons hydrogène (A=T, C≡G, A=U) dans l’association des brins.',
      'Je sais expliquer la dénaturation de l’ADN par la chaleur et le principe de l’hybridation moléculaire.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Acide désoxyribonucléique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_d%C3%A9soxyribonucl%C3%A9ique' },
      { title: 'Acide ribonucléique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Acide_ribonucl%C3%A9ique' },
      { title: 'Nucléotide — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Nucl%C3%A9otide' },
      { title: 'Hybridation moléculaire — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hybridation_mol%C3%A9culaire' },
      { title: 'Schéma « DNA Nucleotides » — OpenStax, Wikimedia Commons (CC BY 4.0)', url: 'https://commons.wikimedia.org/wiki/File:0322_DNA_Nucleotides_Numbered.jpg' },
    ],
  },
};

export default lesson;
