import { img } from '../media';
import microscopeSchema from '../../../assets/courses/premiere/module-1-diversite/microscope-schema.webp';
import etatFrais from '../../../assets/courses/premiere/module-1-diversite/etat-frais.webp';
import gram from '../../../assets/courses/premiere/module-1-diversite/gram.webp';
import morphologies from '../../../assets/courses/premiere/module-1-diversite/morphologies.webp';
import dessinMoisissure from '../../../assets/courses/premiere/module-1-diversite/dessin-moisissure.webp';
import moisissureMicro from '../../../assets/courses/premiere/module-1-diversite/moisissure.webp';
import cellules from '../../../assets/courses/premiere/module-1-diversite/cellules.webp';
import arbre from '../../../assets/courses/premiere/module-1-diversite/arbre.webp';
import microAlgues from '../../../assets/courses/premiere/module-1-diversite/micro-algues.webp';
import levures from '../../../assets/courses/premiere/module-1-diversite/levures.webp';
import metBacterie from '../../../assets/courses/premiere/module-1-diversite/met-bacterie.webp';
import hemocytometer from '../../../assets/courses/open/hemocytometer-grid.jpg';
import microscopePhoto from '../../../assets/visuals/photo-microscope-lg.webp';

const IMG = {
  microscope: img(microscopeSchema, 'Schéma annoté du microscope optique : oculaire, tube optique, revolver, objectif, platine, valet, condenseur, diaphragme, source lumineuse, vis macrométrique, vis micrométrique, potence.', 'schema', 933, 1400),
  etatFrais: img(etatFrais, 'Microphotographie d’un état frais : petites bactéries en bâtonnet et quelques levures ovales, non colorées.', 'micro', 1536, 1024),
  gram: img(gram, 'Frottis coloré par la méthode de Gram : coques violettes en amas et bacilles roses.', 'micro', 1536, 1024),
  morphologies: img(morphologies, 'Planche des formes et groupements bactériens : coques, diplocoques, streptocoques, staphylocoques, bacilles, coccobacilles, vibrions, spirilles.', 'schema', 1400, 933),
  dessinMoisissure: img(dessinMoisissure, 'Dessin d’observation légendé de l’appareil sporifère d’une moisissure Aspergillus, avec barre d’échelle.', 'schema', 933, 1400),
  moisissure: img(moisissureMicro, 'Microphotographie d’Aspergillus coloré au bleu coton : hyphes, conidiophores et têtes aspergillaires.', 'micro', 1536, 1024),
  cellules: img(cellules, 'Schéma comparé d’une bactérie (procaryote) et d’une levure (eucaryote) avec leurs structures légendées.', 'schema', 1400, 933),
  arbre: img(arbre, 'Arbre du vivant simplifié : ancêtre commun, bactéries, archées, eucaryotes (champignons, végétaux et micro-algues, animaux).', 'schema', 1400, 933),
  microAlgues: img(microAlgues, 'Microphotographie d’un échantillon d’eau douce : micro-algues vertes sphériques, desmidiées et diatomée.', 'micro', 1536, 1024),
  levures: img(levures, 'Microphotographie de levures de boulanger colorées au bleu de méthylène, certaines en bourgeonnement.', 'micro', 1536, 1024),
  met: img(metBacterie, 'Cliché de microscopie électronique à transmission d’une coupe de bactérie, en noir et blanc.', 'micro', 1536, 1024),
  malassez: img(hemocytometer, 'Quadrillage d’un hématimètre de type Neubauer observé au microscope.', 'photo', 1280, 1024),
  microscopePhoto: img(microscopePhoto, 'Microscope optique éclairé par la lumière d’une fenêtre, une lame colorée sur la platine.', 'photo', 1024, 1536),
};

const lesson = {
  version: 2,
  id: 'module-1-diversite',
  duration: 'Environ 4 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.microscopePhoto,
    question: 'Une seule goutte d’eau de fleurs contient des milliers d’êtres vivants. Comment les voir, les mesurer et les reconnaître ?',
    text: 'Bactéries, levures, micro-algues : le monde microscopique est immense, mais invisible à l’œil nu. Dans ce chapitre, tu apprends à utiliser le microscope comme un professionnel, à préparer une lame, à mesurer une cellule et à reconnaître les grands types cellulaires.',
  },
  objectives: [
    'Utiliser le microscope optique avec méthode et calculer un grossissement.',
    'Réaliser un état frais et une coloration de Gram, puis interpréter ce que j’observe.',
    'Estimer la taille d’un élément microscopique grâce à une échelle.',
    'Réaliser un dessin d’observation fidèle, titré, légendé et à l’échelle.',
    'Distinguer une bactérie, une levure et une micro-algue, et les situer dans le vivant.',
  ],
  prerequisites: [
    'Les unités de longueur et les conversions : 1 mm = 1 000 µm.',
    'La cellule est l’unité de base du vivant (collège, seconde).',
  ],
  program: [
    'Réaliser un état frais à partir d’une suspension bactérienne en milieu liquide.',
    'Mettre en œuvre la coloration de Gram.',
    'Maîtriser la démarche d’utilisation du microscope optique.',
    'Estimer la taille d’un élément microscopique.',
    'Dessiner une observation microscopique ; compléter un dessin par un titre, une échelle, des annotations.',
    'Différencier un cliché de microscopie optique et un cliché de microscopie électronique.',
    'Identifier les éléments caractéristiques des cellules observées ; distinguer bactérie, micro-algue et levure.',
  ],

  course: {
    parts: [
      {
        title: 'Le microscope optique, un instrument de précision',
        intro: 'Les micro-organismes mesurent quelques micromètres : il faut les agrandir des centaines de fois pour les observer.',
        blocks: [
          { type: 'p', text: 'Le **microscope optique** (ou photonique) utilise la **lumière** et deux systèmes de lentilles placés l’un au-dessus de l’autre : l’**objectif**, tout près de la préparation, donne une première image agrandie ; l’**oculaire**, contre l’œil, agrandit encore cette image.' },
          { type: 'figure', image: IMG.microscope, caption: 'Les éléments du microscope optique. En vert : le trajet de la lumière (condenseur, objectif, oculaire).', size: 'normal' },
          {
            type: 'table',
            caption: 'Rôle de chaque élément',
            head: ['Élément', 'Rôle'],
            rows: [
              ['Oculaire', 'Lentille contre l’œil : agrandit l’image donnée par l’objectif (souvent ×10).'],
              ['Objectifs et revolver', 'Lentilles de grossissements différents (×4, ×10, ×40, ×100) montées sur un revolver qui tourne pour les changer.'],
              ['Platine et valets', 'Support de la lame ; les valets (ou la pince du chariot) la maintiennent en place.'],
              ['Condenseur et diaphragme', 'Concentrent la lumière sur la préparation ; le diaphragme règle la quantité de lumière et donc le **contraste**.'],
              ['Vis macrométrique', 'Mise au point **grossière** : déplace beaucoup la platine. Uniquement avec les faibles grossissements.'],
              ['Vis micrométrique', 'Mise au point **fine** : affine la netteté, à tous les grossissements.'],
              ['Source lumineuse', 'Éclaire la préparation par en dessous ; son intensité est réglable.'],
            ],
          },
          { type: 'definition', term: 'Grossissement', text: 'nombre de fois que l’objet paraît plus grand dans le microscope. Il se lit sur l’oculaire et sur l’objectif.' },
          {
            type: 'formula',
            title: 'Grossissement du microscope',
            expression: 'G = G~oculaire~ × G~objectif~',
            legend: [
              { symbol: 'G~oculaire~', meaning: 'grossissement de l’oculaire (ex. ×10)' },
              { symbol: 'G~objectif~', meaning: 'grossissement de l’objectif utilisé (ex. ×40)' },
            ],
          },
          { type: 'example', title: 'calcul', text: 'Avec un oculaire ×10 et l’objectif ×40, le grossissement est G = 10 × 40 = **×400**. Avec l’objectif ×100 à immersion, on atteint **×1 000**.' },
          { type: 'definition', term: 'Champ microscopique', text: 'zone circulaire de la préparation visible dans l’oculaire. Plus le grossissement est fort, plus le champ est **petit** et plus l’image est **sombre** : on voit moins de choses, mais plus en détail.' },
          {
            type: 'steps',
            title: 'Démarche d’utilisation du microscope',
            items: [
              { title: 'Préparer', text: 'Allumer la source lumineuse, régler une intensité moyenne et placer l’objectif le plus faible (×4 ou ×10) au-dessus de la platine.' },
              { title: 'Installer la lame', text: 'Poser la lame, lamelle vers le haut, et la fixer avec les valets. Centrer la préparation au-dessus du trou de la platine.' },
              { title: 'Faire la mise au point au faible grossissement', text: 'En regardant **de côté**, rapprocher l’objectif de la lame avec la vis macrométrique. Puis, l’œil à l’oculaire, éloigner lentement jusqu’à obtenir une image nette.' },
              { title: 'Centrer et régler le contraste', text: 'Déplacer la lame pour placer la zone intéressante au centre du champ. Ajuster le diaphragme : plus fermé, l’image est plus contrastée.' },
              { title: 'Passer au grossissement supérieur', text: 'Tourner le revolver vers l’objectif suivant. À partir de ×40, **seule la vis micrométrique** est utilisée.' },
              { title: 'Utiliser l’objectif ×100', text: 'Déposer une goutte d’huile à immersion sur la lame, basculer l’objectif ×100 dans l’huile et affiner avec la vis micrométrique.' },
              { title: 'Ranger', text: 'Revenir à l’objectif le plus faible, retirer la lame, essuyer l’huile de l’objectif ×100 avec un papier optique, éteindre la lumière.' },
            ],
          },
          { type: 'warning', text: 'Ne jamais utiliser la vis macrométrique avec les objectifs ×40 et ×100 : l’objectif, très proche de la lame, peut l’écraser et s’abîmer.' },
          { type: 'note', title: 'Pourquoi de l’huile à immersion ?', text: 'L’huile a presque le même indice de réfraction que le verre : la lumière n’est pas déviée entre la lame et l’objectif. L’image est plus lumineuse et plus détaillée, ce qui est indispensable à ×1 000.' },
          {
            type: 'retenir',
            items: [
              'Le grossissement total est le produit des grossissements de l’oculaire et de l’objectif.',
              'On commence **toujours** au plus faible grossissement, puis on augmente progressivement.',
              'La vis macrométrique ne sert qu’aux faibles grossissements ; la vis micrométrique affine la netteté.',
            ],
          },
        ],
      },

      {
        title: 'Préparer une observation : état frais et coloration de Gram',
        intro: 'Les cellules sont petites et transparentes : sans préparation adaptée, on ne voit presque rien.',
        blocks: [
          { type: 'p', text: 'Au laboratoire, on distingue deux grands types de préparations : l’**état frais**, qui montre des cellules **vivantes** non colorées, et le **frottis coloré**, où les cellules sont **tuées, fixées** sur la lame puis colorées.' },
          { type: 'definition', term: 'État frais', text: 'préparation d’une goutte de suspension de cellules entre lame et lamelle, observée sans coloration. Il permet d’observer la **forme**, le **mode de groupement** et la **mobilité** des cellules vivantes.' },
          {
            type: 'steps',
            title: 'Réaliser un état frais',
            items: [
              'Déposer au centre d’une lame propre une goutte de la culture en milieu liquide (ou une goutte d’eau physiologique stérile dans laquelle on met en suspension une petite partie d’une colonie).',
              'Poser la lamelle en biais, en la laissant tomber doucement, pour éviter les bulles d’air.',
              'Observer à l’objectif ×40 (grossissement ×400), le diaphragme assez fermé pour augmenter le contraste.',
              'Après l’observation, jeter la lame dans le récipient de désinfection prévu.',
            ],
          },
          { type: 'figure', image: IMG.etatFrais, caption: 'État frais observé à ×400 : petites bactéries en bâtonnet et levures ovales, plus grosses. Les cellules ne sont pas colorées.', size: 'wide' },
          { type: 'definition', term: 'Mobilité bactérienne', text: 'déplacement propre d’une bactérie, dans **toutes les directions**, souvent grâce à un ou plusieurs flagelles. Il ne faut pas la confondre avec le **mouvement brownien** (agitation sur place de toutes les particules) ni avec un **courant** (toutes les cellules emportées dans la même direction).' },
          { type: 'p', text: 'Pour voir plus de détails, on colore les cellules. Une **coloration simple** (par exemple au bleu de méthylène) colore toutes les cellules de la même couleur. Une **coloration différentielle** donne des couleurs différentes selon la nature des cellules : c’est le cas de la coloration de Gram, la plus utilisée en microbiologie.' },
          { type: 'definition', term: 'Coloration de Gram', text: 'coloration différentielle qui classe les bactéries en deux groupes selon la structure de leur **paroi** : les bactéries **Gram positif**, colorées en **violet**, et les bactéries **Gram négatif**, colorées en **rose**.' },
          {
            type: 'steps',
            title: 'Les étapes de la coloration de Gram',
            items: [
              { title: 'Frottis', text: 'Étaler finement une goutte de suspension sur la lame, laisser sécher puis **fixer** (passage rapide dans la flamme ou alcool) : les cellules sont tuées et collées à la lame.' },
              { title: 'Violet de gentiane — 1 min', text: 'Toutes les bactéries se colorent en violet. Rincer à l’eau.' },
              { title: 'Lugol — 1 min', text: 'Le lugol (mordant) fixe le violet dans les cellules. Rincer à l’eau.' },
              { title: 'Alcool — quelques secondes', text: '**Étape clé** : l’alcool décolore les bactéries Gram négatif, mais pas les Gram positif. Arrêter dès que le liquide coule incolore, puis rincer.' },
              { title: 'Fuchsine (ou safranine) — 30 s à 1 min', text: 'Contre-coloration : les bactéries décolorées deviennent roses. Rincer, sécher.' },
              { title: 'Observation', text: 'À l’objectif ×100 à immersion (×1 000).' },
            ],
          },
          {
            type: 'table',
            caption: 'Couleur des bactéries après chaque étape',
            head: ['Étape', 'Gram positif', 'Gram négatif'],
            rows: [
              ['Violet de gentiane', 'Violet', 'Violet'],
              ['Lugol', 'Violet', 'Violet'],
              ['Alcool', 'Violet (le violet reste)', 'Incolore (le violet part)'],
              ['Fuchsine', '**Violet**', '**Rose**'],
            ],
          },
          { type: 'figure', image: IMG.gram, caption: 'Coloration de Gram d’un mélange de bactéries (×1 000) : coques Gram positif en amas (violet) et bacilles Gram négatif (rose).', size: 'wide' },
          {
            type: 'compare',
            title: 'Pourquoi deux couleurs ? Une question de paroi',
            columns: [
              { title: 'Gram positif', subtitle: 'ex. Staphylococcus aureus', items: ['Paroi **épaisse** de peptidoglycane.', 'Le complexe violet + lugol reste piégé malgré l’alcool.', 'Résultat : bactéries **violettes**.'] },
              { title: 'Gram négatif', subtitle: 'ex. Escherichia coli', items: ['Paroi **fine** de peptidoglycane, entourée d’une membrane externe.', 'L’alcool dissout la membrane externe et entraîne le violet.', 'Résultat : bactéries décolorées puis **roses** (fuchsine).'] },
            ],
          },
          { type: 'p', text: 'Au microscope, on décrit toujours trois caractères : la **forme** (morphologie), le **mode de groupement** et, après un Gram, la **couleur**. Par exemple : « coques Gram positif en amas » ou « bacilles Gram négatif isolés ».' },
          { type: 'figure', image: IMG.morphologies, caption: 'Les principales formes et les principaux groupements des bactéries.', size: 'wide' },
          { type: 'warning', title: 'Sécurité et erreurs à éviter', text: ['Les micro-organismes sont manipulés comme s’ils étaient pathogènes : blouse, gants si demandé, travail près de la flamme, paillasse désinfectée, déchets dans les poubelles dédiées.', 'Une décoloration à l’alcool trop longue rend roses des bactéries Gram positif (faux Gram négatif) ; trop courte, elle laisse violettes des Gram négatif.'] },
          {
            type: 'retenir',
            items: [
              'L’état frais montre des cellules **vivantes** : forme, groupement et **mobilité**.',
              'La coloration de Gram suit l’ordre : violet de gentiane, lugol, alcool, fuchsine.',
              'Gram positif = **violet** (paroi épaisse) ; Gram négatif = **rose** (paroi fine + membrane externe).',
              'On décrit une bactérie par sa forme, son groupement et sa couleur de Gram.',
            ],
          },
        ],
      },

      {
        title: 'Mesurer : estimer la taille d’un élément microscopique',
        intro: 'Une bactérie mesure environ un millième de millimètre. Pour parler de ces tailles, on utilise le micromètre.',
        blocks: [
          { type: 'p', text: 'L’unité adaptée est le **micromètre** (µm) : **1 mm = 1 000 µm** et 1 µm = 0,001 mm. Pour les virus et les détails observés en microscopie électronique, on utilise le **nanomètre** : 1 µm = 1 000 nm.' },
          {
            type: 'table',
            caption: 'Ordres de grandeur à connaître',
            head: ['Élément', 'Taille approximative', 'Visible au microscope optique ?'],
            rows: [
              ['Virus', '20 à 300 nm', 'Non (microscope électronique)'],
              ['Bactérie', '1 à 5 µm', 'Oui, à ×1 000 pour les détails'],
              ['Levure', '5 à 10 µm', 'Oui, dès ×400'],
              ['Globule rouge (hématie)', 'Environ 7 µm', 'Oui'],
              ['Micro-algue (ex. Chlorella)', '2 à 10 µm', 'Oui'],
              ['Cellule végétale', '20 à 100 µm', 'Oui, dès ×100'],
            ],
          },
          { type: 'definition', term: 'Grandissement', text: 'rapport entre la taille de l’image (sur une photo ou un dessin) et la taille réelle de l’objet. À ne pas confondre avec le **grossissement**, qui caractérise le microscope.' },
          {
            type: 'formula',
            title: 'Calculer une taille réelle avec une barre d’échelle',
            expression: 'taille réelle = (taille mesurée de l’objet ÷ taille mesurée de la barre) × valeur de la barre',
            legend: [
              { symbol: 'mesures', meaning: 'faites à la règle sur l’image, dans la même unité (mm ou cm)' },
              { symbol: 'valeur de la barre', meaning: 'longueur réelle indiquée sur l’échelle (ex. 10 µm)' },
            ],
          },
          { type: 'example', title: 'levure', text: 'Sur une microphotographie, la barre d’échelle « 10 µm » mesure 2,0 cm et une levure mesure 1,4 cm. Taille réelle = (1,4 ÷ 2,0) × 10 = **7 µm**.' },
          { type: 'p', text: 'Directement au microscope, on peut utiliser un **oculaire micrométrique** : une petite règle graduée est gravée dans l’oculaire. On l’**étalonne** d’abord avec un micromètre objet (une lame portant une règle de 1 mm divisée en 100 parties de 10 µm) afin de savoir combien de micromètres vaut une graduation pour chaque objectif.' },
          { type: 'p', text: 'On peut aussi comparer la cellule au quadrillage d’un **hématimètre** (cellule de Malassez), dont les dimensions sont connues : un rectangle mesure 0,25 mm × 0,20 mm et chaque petit carré mesure **0,05 mm de côté, soit 50 µm**.' },
          { type: 'figure', image: IMG.malassez, caption: 'Quadrillage d’un hématimètre vu au microscope (ici une cellule de Neubauer, aux carrés de 0,2 mm). Chaque modèle a ses propres dimensions : celles de la cellule de Malassez sont données ci-dessus.', credit: 'Jeffrey M. Vinocur — CC BY 2.5', size: 'normal' },
          {
            type: 'retenir',
            items: [
              '1 mm = 1 000 µm ; 1 µm = 1 000 nm.',
              'Taille réelle = taille sur l’image ÷ grandissement, ou calcul à partir de la barre d’échelle.',
              'Une bactérie mesure quelques µm, une levure environ 5 à 10 µm.',
            ],
          },
        ],
      },

      {
        title: 'Dessiner une observation microscopique',
        intro: 'Le dessin oblige à bien regarder : c’est un outil de raisonnement, pas un exercice artistique.',
        blocks: [
          {
            type: 'compare',
            columns: [
              { title: 'Dessin d’observation', items: ['Représente **fidèlement** ce qui est vu, avec les vraies proportions.', 'Un seul objet ou quelques cellules, à l’échelle.', 'Sert à décrire une préparation réelle.'] },
              { title: 'Schéma', items: ['Représentation **simplifiée** et interprétée.', 'Ne garde que l’essentiel, peut regrouper plusieurs observations.', 'Sert à expliquer une organisation ou un mécanisme.'] },
            ],
          },
          {
            type: 'list',
            title: 'Les règles d’un dessin d’observation réussi',
            ordered: true,
            items: [
              'Au **crayon à papier** bien taillé, avec des traits nets et continus : pas d’ombres, pas de hachures, pas de couleur sauf consigne.',
              'Un dessin **assez grand** (au moins un tiers de page), centré, qui respecte les proportions observées.',
              'Des **légendes** écrites horizontalement, alignées sur le côté, reliées par des **traits de rappel tracés à la règle** qui ne se croisent pas.',
              'Un **titre complet** : ce qui est observé, la technique, le grossissement. Exemple : « Appareil sporifère d’Aspergillus observé au microscope optique (×400) après coloration au bleu coton ».',
              'Une **échelle** (barre graduée) ou l’indication du grandissement.',
            ],
          },
          { type: 'figure', image: IMG.dessinMoisissure, caption: 'Exemple de dessin d’observation : appareil sporifère d’une moisissure (Aspergillus), légendé et accompagné d’une barre d’échelle.', size: 'small' },
          { type: 'retenir', text: 'Un dessin d’observation est fidèle, titré, légendé à la règle et accompagné d’une échelle.' },
        ],
      },

      {
        title: 'Reconnaître les cellules et les situer dans le vivant',
        intro: 'Tous les êtres vivants sont formés de cellules, mais toutes les cellules ne sont pas organisées de la même façon.',
        blocks: [
          { type: 'definition', term: 'Cellule procaryote', text: 'cellule **sans noyau** : l’ADN (chromosome) est libre dans le cytoplasme. Elle est petite (1 à 5 µm) et ne contient pas d’organites entourés d’une membrane. Exemple : les **bactéries**.' },
          { type: 'definition', term: 'Cellule eucaryote', text: 'cellule possédant un **noyau** qui contient l’ADN, et des **organites** (mitochondries, vacuoles, chloroplastes chez les végétaux et les algues). Elle est plus grande (5 à 100 µm). Exemples : **levures**, **micro-algues**, cellules animales et végétales.' },
          { type: 'figure', image: IMG.cellules, caption: 'Une bactérie (procaryote) et une levure (eucaryote) : la présence d’un noyau est le critère essentiel.', size: 'wide' },
          {
            type: 'compare',
            title: 'Bactérie, levure, micro-algue : les critères de reconnaissance',
            columns: [
              { title: 'Bactérie', subtitle: 'Procaryote', items: ['1 à 5 µm.', 'Pas de noyau, ADN libre dans le cytoplasme.', 'Formes : coques, bacilles, spirilles…', 'Paroi ; parfois flagelles (mobilité).'] },
              { title: 'Levure', subtitle: 'Eucaryote — champignon unicellulaire', items: ['5 à 10 µm, forme ovale.', 'Noyau, vacuole, mitochondries.', 'Se multiplie souvent par **bourgeonnement**.', 'Pas de chlorophylle.'] },
              { title: 'Micro-algue', subtitle: 'Eucaryote photosynthétique', items: ['Taille variable (2 µm à plus de 100 µm).', 'Noyau et **chloroplastes** : couleur verte (ou brune).', 'Réalise la photosynthèse.', 'Formes variées : sphères, diatomées…'] },
            ],
          },
          { type: 'p', text: 'Le **microscope électronique** utilise un faisceau d’**électrons** au lieu de la lumière. Il permet des grossissements bien plus élevés et montre l’intérieur des cellules (l’**ultrastructure**) ou leur surface en relief.' },
          {
            type: 'table',
            caption: 'Reconnaître un cliché de microscopie',
            head: ['Critère', 'Microscopie optique', 'Microscopie électronique'],
            rows: [
              ['Rayonnement', 'Lumière visible', 'Faisceau d’électrons'],
              ['Grossissement', 'Jusqu’à ×1 000 environ', 'Jusqu’à plusieurs centaines de milliers'],
              ['Détails visibles', 'Cellules, noyau, grosses structures (au mieux ≈ 0,2 µm)', 'Organites, membranes, virus (de l’ordre du nanomètre)'],
              ['Couleurs', 'Couleurs des colorants (violet, rose, bleu…)', 'Noir et blanc ; couleurs ajoutées par ordinateur (« fausses couleurs »)'],
              ['Échelle typique', 'Micromètres (µm)', 'Nanomètres (nm) à quelques µm'],
            ],
          },
          { type: 'p', text: 'Pour classer les êtres vivants, les scientifiques comparent leurs caractères et leurs gènes et construisent un **arbre phylogénétique**, qui représente leurs liens de parenté. Le vivant est aujourd’hui divisé en **trois grands domaines** : les **Bactéries**, les **Archées** (procaryotes aussi, souvent dans des milieux extrêmes) et les **Eucaryotes**.' },
          { type: 'figure', image: IMG.arbre, caption: 'Arbre du vivant simplifié : les levures et les micro-algues appartiennent aux Eucaryotes, les bactéries forment un domaine à part.', size: 'wide' },
          {
            type: 'retenir',
            items: [
              'Procaryote = **pas de noyau** (bactéries) ; eucaryote = **noyau et organites** (levures, micro-algues…).',
              'La levure bourgeonne et n’a pas de chloroplaste ; la micro-algue possède des chloroplastes.',
              'Un cliché de microscopie électronique est en noir et blanc (ou fausses couleurs) avec une échelle en nm.',
              'Le vivant se divise en trois domaines : Bactéries, Archées, Eucaryotes.',
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
        title: 'Régler le microscope et calculer un grossissement',
        duration: '20 min',
        skills: ['Observer', 'Calculer'],
        context: 'Ton microscope possède un oculaire ×10 et quatre objectifs : ×4, ×10, ×40 et ×100 à immersion. Tu dois observer une lame de levures.',
        documents: [
          { label: 'Document 1', title: 'Le microscope du laboratoire', image: IMG.microscope, caption: 'Schéma annoté du microscope optique.', size: 'small' },
        ],
        questions: [
          { text: 'Par quel objectif faut-il commencer l’observation ? Justifie.', hint: 'Pense à la taille du champ et à la distance entre l’objectif et la lame.', answer: 'On commence par l’objectif le plus faible (×4 ou ×10) : le champ est large, on repère facilement la préparation et l’objectif est loin de la lame, donc il n’y a pas de risque de l’écraser.' },
          { text: 'Calcule le grossissement obtenu avec chacun des quatre objectifs.', hint: 'G = G oculaire × G objectif.', answer: '×4 → ×40 ; ×10 → ×100 ; ×40 → ×400 ; ×100 → ×1 000.' },
          { text: 'Tu passes de l’objectif ×10 à l’objectif ×40. Quelle vis utilises-tu, et pourquoi ?', answer: 'Uniquement la vis micrométrique : à ×40, l’objectif est très proche de la lame ; la vis macrométrique risquerait d’écraser la lame et d’abîmer l’objectif.' },
          { text: 'En passant à ×400, l’image devient plus sombre et on voit moins de levures. Explique ces deux observations et propose un réglage.', hint: 'Que devient le champ microscopique quand on grossit ?', answer: 'Le champ est plus petit : on voit une plus petite surface de la lame, donc moins de levures. La lumière est répartie sur une image plus agrandie, donc l’image est plus sombre. On ouvre un peu le diaphragme ou on augmente l’intensité lumineuse.' },
          { text: 'Pourquoi met-on une goutte d’huile pour utiliser l’objectif ×100 ?', answer: 'L’huile à immersion a presque le même indice de réfraction que le verre : la lumière n’est pas déviée, l’image est plus lumineuse et plus détaillée.' },
        ],
      },
      {
        title: 'Interpréter une coloration de Gram',
        duration: '25 min',
        skills: ['Observer', 'Interpréter', 'Argumenter'],
        context: 'Un technicien a réalisé une coloration de Gram à partir d’un prélèvement contenant plusieurs bactéries.',
        documents: [
          { label: 'Document 2', title: 'Résultat de la coloration de Gram (×1 000)', image: IMG.gram, caption: 'Frottis coloré par la méthode de Gram.' },
          { label: 'Document 3', title: 'La paroi bactérienne', text: ['Les bactéries Gram positif possèdent une paroi épaisse, riche en peptidoglycane.', 'Les bactéries Gram négatif possèdent une paroi fine de peptidoglycane, recouverte d’une membrane externe riche en lipides, que l’alcool dissout.'] },
        ],
        questions: [
          { text: 'Décris les deux types de bactéries visibles : forme, mode de groupement et couleur.', hint: 'Utilise le vocabulaire de la planche des formes bactériennes (Partie 2 du cours).', answer: 'On observe des coques (sphériques) groupées en amas, colorées en violet, et des bacilles (bâtonnets) isolés ou par deux, colorés en rose.' },
          { text: 'Donne le résultat de Gram de chaque type de bactérie.', answer: 'Les coques en amas sont Gram positif (violettes) ; les bacilles sont Gram négatif (roses).' },
          { text: 'À l’aide du document 3, explique pourquoi les bacilles sont roses.', hint: 'Que fait l’alcool à une paroi fine entourée de lipides ?', answer: 'Leur paroi fine est entourée d’une membrane externe lipidique. L’alcool dissout cette membrane et entraîne le violet : les bacilles sont décolorés, puis colorés en rose par la fuchsine.' },
          { text: 'Un élève a laissé l’alcool agir une minute entière. Quelle erreur risque-t-il de commettre dans sa conclusion ?', answer: 'Une décoloration trop longue peut aussi décolorer les bactéries Gram positif : elles apparaîtraient roses et seraient classées à tort Gram négatif.' },
          { text: 'Pourquoi l’état frais ne permet-il pas d’obtenir ce résultat ?', answer: 'L’état frais n’est pas coloré : il montre la forme, le groupement et la mobilité des cellules vivantes, mais pas la structure de leur paroi.' },
        ],
      },
      {
        title: 'Estimer la taille de cellules',
        duration: '20 min',
        skills: ['Calculer', 'Raisonner'],
        context: 'On cherche à savoir si les cellules observées peuvent être des bactéries ou des levures.',
        documents: [
          { label: 'Document 4', title: 'Levures colorées au bleu de méthylène (×400)', image: IMG.levures, caption: 'Levures de boulanger, certaines en bourgeonnement.' },
          {
            label: 'Document 5',
            title: 'Mesures réalisées sur la microphotographie imprimée',
            blocks: [
              { type: 'table', head: ['Mesure', 'Valeur'], rows: [['Barre d’échelle « 20 µm »', '3,2 cm'], ['Longueur d’une levure', '1,2 cm'], ['Longueur d’un bourgeon', '0,5 cm']] },
            ],
          },
        ],
        questions: [
          { text: 'Calcule la taille réelle d’une levure.', hint: 'Taille réelle = (taille de l’objet ÷ taille de la barre) × valeur de la barre.', answer: 'Taille réelle = (1,2 ÷ 3,2) × 20 = 7,5 µm.' },
          { text: 'Calcule la taille réelle du bourgeon.', answer: '(0,5 ÷ 3,2) × 20 ≈ 3,1 µm.' },
          { text: 'Ces cellules peuvent-elles être des bactéries ? Justifie avec les ordres de grandeur et un caractère visible.', answer: 'Non : 7,5 µm correspond à la taille d’une levure (5 à 10 µm), une bactérie mesure 1 à 5 µm. De plus, le bourgeonnement est caractéristique des levures.' },
          { text: 'Dans une cellule de Malassez, un petit carré mesure 50 µm de côté. Combien de levures de 7,5 µm pourrait-on aligner sur un côté ?', answer: '50 ÷ 7,5 ≈ 6,7 : environ 6 à 7 levures.' },
        ],
      },
      {
        title: 'Réaliser un dessin d’observation',
        duration: '30 min',
        skills: ['Représenter', 'Communiquer'],
        context: 'Tu dois produire, dans ton cahier, un dessin d’observation de l’appareil sporifère d’une moisissure à partir de la microphotographie.',
        documents: [
          { label: 'Document 6', title: 'Aspergillus coloré au bleu coton (×400)', image: IMG.moisissure, caption: 'Microphotographie d’une moisissure du genre Aspergillus.' },
        ],
        questions: [
          { text: 'Réalise le dessin d’un appareil sporifère en respectant les règles du dessin d’observation.', hint: 'Choisis un seul appareil sporifère bien net, dessine grand, au crayon, sans ombres.', answer: 'Compare ton dessin au modèle de la Partie 4 : traits nets et continus, proportions respectées, un seul appareil sporifère, taille suffisante.' },
          { text: 'Légende ton dessin avec : hyphe, conidiophore, vésicule, phialides, conidies.', answer: 'Les légendes sont alignées à droite, horizontales, reliées par des traits de rappel à la règle qui ne se croisent pas.' },
          { text: 'Rédige le titre complet de ton dessin.', hint: 'Quoi ? Avec quelle technique ? À quel grossissement ?', answer: 'Exemple : « Appareil sporifère d’Aspergillus observé au microscope optique (×400) après coloration au bleu coton ».' },
          { text: 'Sachant que la vésicule mesure environ 30 µm de diamètre et qu’elle mesure 3 cm sur ton dessin, calcule le grandissement de ton dessin.', hint: 'Grandissement = taille de l’image ÷ taille réelle, dans la même unité (1 cm = 10 000 µm).', answer: '3 cm = 30 000 µm. Grandissement = 30 000 ÷ 30 = ×1 000.' },
        ],
      },
      {
        title: 'Classer des micro-organismes',
        duration: '25 min',
        skills: ['Observer', 'Classer', 'Justifier'],
        context: 'Voici trois clichés obtenus au laboratoire et dans une revue scientifique.',
        documents: [
          { label: 'Document 7', title: 'Échantillon d’eau douce (×400)', image: IMG.microAlgues, caption: 'Microphotographie d’un échantillon d’eau de mare.' },
          { label: 'Document 8', title: 'Coupe d’une cellule', image: IMG.met, caption: 'Cliché publié dans une revue scientifique.' },
        ],
        questions: [
          { text: 'Le document 7 montre des micro-algues. Relève deux critères visibles qui le justifient.', answer: 'Les cellules sont vertes, ce qui indique la présence de chloroplastes (photosynthèse) ; on distingue des formes variées (sphères, diatomée) et des structures internes.' },
          { text: 'Le document 8 a-t-il été obtenu en microscopie optique ou électronique ? Donne deux arguments.', hint: 'Regarde les couleurs et le niveau de détail.', answer: 'En microscopie électronique : l’image est en noir et blanc et montre des détails très fins de l’intérieur de la cellule (paroi, membranes), invisibles au microscope optique.' },
          { text: 'La cellule du document 8 est-elle procaryote ou eucaryote ? Justifie.', answer: 'Procaryote : on ne voit pas de noyau entouré d’une membrane, l’ADN occupe une zone claire (nucléoïde) dans le cytoplasme. C’est une bactérie.' },
          { text: 'Place une levure, une micro-algue et une bactérie dans les trois domaines du vivant.', answer: 'La bactérie appartient au domaine des Bactéries ; la levure (champignon) et la micro-algue appartiennent au domaine des Eucaryotes.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Le grossissement du microscope est G = G~oculaire~ × G~objectif~ ; on commence toujours au plus faible grossissement.',
      'L’état frais montre des cellules vivantes (forme, groupement, mobilité) ; le frottis est fixé puis coloré.',
      'Coloration de Gram : violet de gentiane, lugol, alcool, fuchsine. Gram positif = violet, Gram négatif = rose, selon la paroi.',
      'On mesure en micromètres (1 mm = 1 000 µm) à l’aide d’une barre d’échelle, d’un oculaire micrométrique ou d’un hématimètre.',
      'Un dessin d’observation est fidèle, titré, légendé à la règle et accompagné d’une échelle.',
      'Procaryote = pas de noyau (bactéries) ; eucaryote = noyau et organites (levures, micro-algues). Le vivant compte trois domaines.',
    ],
    method: {
      title: 'Décrire une bactérie observée au microscope',
      steps: [
        'Indiquer la préparation et le grossissement (ex. coloration de Gram, ×1 000).',
        'Décrire la **forme** : coque, bacille, coccobacille, spirille…',
        'Décrire le **mode de groupement** : isolées, par deux, en chaînette, en amas.',
        'Donner la **couleur** et conclure : Gram positif (violet) ou Gram négatif (rose).',
      ],
    },
    vocabulary: [
      { term: 'Oculaire', definition: 'Lentille placée contre l’œil, qui agrandit l’image donnée par l’objectif.' },
      { term: 'Objectif', definition: 'Lentille proche de la préparation, qui donne une première image agrandie.' },
      { term: 'Grossissement', definition: 'Nombre de fois que l’objet paraît plus grand : G oculaire × G objectif.' },
      { term: 'Grandissement', definition: 'Rapport entre la taille de l’image (photo, dessin) et la taille réelle.' },
      { term: 'Champ microscopique', definition: 'Zone de la préparation visible dans l’oculaire ; il rétrécit quand le grossissement augmente.' },
      { term: 'État frais', definition: 'Préparation non colorée de cellules vivantes entre lame et lamelle.' },
      { term: 'Frottis', definition: 'Étalement fin de cellules sur une lame, séché et fixé avant coloration.' },
      { term: 'Coloration différentielle', definition: 'Coloration qui donne des couleurs différentes selon le type de cellule (ex. Gram).' },
      { term: 'Mobilité', definition: 'Déplacement propre d’une cellule dans toutes les directions, souvent grâce à des flagelles.' },
      { term: 'Procaryote', definition: 'Cellule sans noyau, dont l’ADN est libre dans le cytoplasme (bactéries).' },
      { term: 'Eucaryote', definition: 'Cellule possédant un noyau et des organites (levures, algues, animaux, végétaux).' },
      { term: 'Arbre phylogénétique', definition: 'Représentation des liens de parenté entre êtres vivants.' },
    ],
    mistakes: [
      { wrong: 'Faire la mise au point à ×400 avec la vis macrométrique.', right: 'À partir de ×40 (objectif), on n’utilise que la vis micrométrique.' },
      { wrong: 'Confondre grossissement de l’objectif (×40) et grossissement total (×400).', right: 'Le grossissement total est le produit oculaire × objectif.' },
      { wrong: 'Dire qu’une bactérie « bouge » dès qu’elle s’agite sur place.', right: 'L’agitation sur place est le mouvement brownien ; la mobilité est un déplacement dans toutes les directions.' },
      { wrong: 'Oublier le titre ou l’échelle d’un dessin d’observation.', right: 'Un dessin sans titre complet ni échelle est incomplet.' },
      { wrong: 'Écrire qu’une levure est une bactérie parce qu’elle est unicellulaire.', right: 'Une levure est un champignon unicellulaire eucaryote : elle possède un noyau.' },
    ],
    quiz: [
      { question: 'Avec un oculaire ×10 et un objectif ×40, le grossissement est de :', choices: ['×50', '×400', '×4 000', '×40'], answer: 1, explanation: 'G = 10 × 40 = ×400.' },
      { question: 'Quelle vis utilise-t-on avec l’objectif ×100 ?', choices: ['La vis macrométrique', 'La vis micrométrique', 'Les deux', 'Aucune'], answer: 1, explanation: 'Aux forts grossissements, seule la vis micrométrique est utilisée pour ne pas écraser la lame.' },
      { question: 'L’état frais permet surtout d’observer :', choices: ['La couleur de Gram', 'La mobilité des bactéries', 'L’ADN des cellules', 'Les virus'], answer: 1, explanation: 'Les cellules sont vivantes et non colorées : on peut observer leur mobilité.' },
      { question: 'Dans la coloration de Gram, l’étape qui différencie les deux groupes est :', choices: ['Le violet de gentiane', 'Le lugol', 'L’alcool', 'La fuchsine'], answer: 2, explanation: 'L’alcool décolore les Gram négatif mais pas les Gram positif.' },
      { question: 'Une bactérie Gram négatif apparaît :', choices: ['Violette', 'Rose', 'Bleue', 'Incolore'], answer: 1, explanation: 'Décolorée par l’alcool, elle est recolorée en rose par la fuchsine.' },
      { question: '1 mm correspond à :', choices: ['100 µm', '1 000 µm', '10 000 µm', '0,001 µm'], answer: 1, explanation: '1 mm = 1 000 µm.' },
      { question: 'Une cellule de 8 µm qui bourgeonne et possède un noyau est probablement :', choices: ['Une bactérie', 'Un virus', 'Une levure', 'Une archée'], answer: 2, explanation: 'Taille de 5 à 10 µm, noyau et bourgeonnement : c’est une levure.' },
      { question: 'Un cliché en noir et blanc montrant des membranes internes avec une échelle de 200 nm provient :', choices: ['D’un microscope optique', 'D’un microscope électronique', 'D’une loupe binoculaire', 'D’un appareil photo'], answer: 1, explanation: 'Le noir et blanc et l’échelle en nanomètres sont caractéristiques de la microscopie électronique.' },
    ],
    exercises: [
      {
        title: 'Grossissement et champ',
        statement: ['Un élève observe des levures avec un oculaire ×15 et l’objectif ×40.', 'a) Calcule le grossissement. b) Il passe ensuite à l’objectif ×100. Calcule le nouveau grossissement et indique deux précautions à prendre.'],
        answer: ['a) G = 15 × 40 = ×600.', 'b) G = 15 × 100 = ×1 500. Précautions : déposer une goutte d’huile à immersion et n’utiliser que la vis micrométrique.'],
      },
      {
        title: 'Taille réelle',
        statement: 'Sur une microphotographie, une bactérie mesure 6 mm et la barre d’échelle « 2 µm » mesure 4 mm. Calcule la taille réelle de la bactérie et indique si cette taille est cohérente.',
        answer: 'Taille réelle = (6 ÷ 4) × 2 = 3 µm. C’est cohérent : une bactérie mesure de 1 à 5 µm.',
      },
      {
        title: 'Résultat de Gram',
        statement: 'Après une coloration de Gram, on observe des bacilles roses isolés. Rédige la description complète et explique la couleur obtenue.',
        answer: 'Bacilles Gram négatif isolés. Leur paroi fine, entourée d’une membrane externe, a été décolorée par l’alcool ; la fuchsine les a ensuite colorés en rose.',
      },
    ],
    selfCheck: [
      'Je sais nommer les éléments du microscope et donner leur rôle.',
      'Je sais calculer un grossissement et suivre la démarche d’utilisation du microscope.',
      'Je sais réaliser un état frais et expliquer ce qu’il permet d’observer.',
      'Je connais les étapes de la coloration de Gram et j’explique les deux couleurs obtenues.',
      'Je sais calculer une taille réelle à partir d’une échelle.',
      'Je sais réaliser un dessin d’observation complet.',
      'Je sais distinguer bactérie, levure et micro-algue, et un cliché d’optique d’un cliché électronique.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Microscope optique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Microscope_optique' },
      { title: 'Coloration de Gram — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Coloration_de_Gram' },
      { title: 'Cellule de Malassez — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cellule_de_Malassez' },
    ],
  },
};

export default lesson;
