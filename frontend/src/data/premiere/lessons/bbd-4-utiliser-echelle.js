import { img } from '../media';
import photoRegle from '../../../assets/courses/premiere/bbd-4-utiliser-echelle/photo-regle.webp';
import frottis from '../../../assets/courses/premiere/bbd-4-utiliser-echelle/frottis-sanguin.webp';
import metMitochondrie from '../../../assets/courses/premiere/bbd-4-utiliser-echelle/met-mitochondrie.webp';

const IMG = {
  photoRegle: img(photoRegle, 'Main d’élève posant une règle transparente sur une microphotographie imprimée de cellules colorées en violet, à côté d’une calculatrice et d’un crayon ; un microscope en arrière-plan.', 'photo', 1536, 1024),
  frottis: img(frottis, 'Microphotographie d’un frottis sanguin coloré au May-Grünwald-Giemsa : nombreuses hématies roses, un polynucléaire neutrophile au noyau violet plurilobé, quelques plaquettes ; barre d’échelle de 10 µm en bas à droite.', 'micro', 1536, 1024),
  met: img(metMitochondrie, 'Électronographie en noir et blanc d’une mitochondrie allongée, avec sa double membrane et ses crêtes, entourée de réticulum endoplasmique granuleux et de ribosomes ; barre d’échelle de 0,5 µm en bas à droite.', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bbd-4-utiliser-echelle',
  duration: 'Environ 2 séances, puis réinvesti dans les modules thématiques',
  hook: {
    image: IMG.photoRegle,
    question: 'Sur ton écran, une mitochondrie mesure 11 cm et une hématie à peine plus d’1 cm. Laquelle est la plus grande en réalité ?',
    text: 'C’est l’hématie : environ 7 µm, contre 2,5 µm pour la mitochondrie ! Une image scientifique peut être agrandie 1 000 fois ou 50 000 fois : sans échelle, elle ne dit rien de la taille réelle. Dans cette leçon, tu apprends à passer de l’image à la réalité, à manier les micromètres et les nanomètres, et à reconnaître le microscope utilisé grâce à l’échelle d’un cliché.',
  },
  objectives: [
    'Convertir les unités de longueur, du mètre au nanomètre, et utiliser les puissances de 10.',
    'Situer les objets biologiques sur l’échelle des tailles, de l’organe à la molécule, et donner un ordre de grandeur.',
    'Distinguer le grossissement d’un microscope et l’agrandissement (ou grandissement) d’une image.',
    'Calculer une taille réelle à partir d’une barre d’échelle ou d’un agrandissement, et calculer l’agrandissement d’une image.',
    'Associer un type de microscope à la taille de la structure observée.',
    'Ajouter une barre d’échelle à un dessin ou à un schéma.',
  ],
  prerequisites: [
    'Calculer une proportion (produit en croix) et utiliser une calculatrice.',
    'Leçon de biotechnologies « Observer la diversité du vivant à l’échelle microscopique » : microscope, grossissement, taille d’une cellule.',
  ],
  program: [
    'Estimer l’ordre de grandeur des objets d’étude à l’échelle microscopique : ordre de grandeur, échelle, agrandissement/grossissement (module B, item 1).',
    'Associer un type de microscope à la taille de la structure observée : microscopie optique, microscopie électronique (module B, item 1).',
    'Comparer différentes échelles de photographies microscopiques pour déterminer la nature du microscope utilisé ; déterminer la taille réelle d’une cellule et d’un organite (activités du module B).',
    'Estimer la taille d’un élément microscopique : grandissement/grossissement, échelle (programme de biotechnologies, module 1).',
    'Compléter un dessin ou un schéma par une échelle (programme de biotechnologies, module 1).',
  ],

  course: {
    parts: [
      {
        title: 'Unités de longueur et ordres de grandeur du vivant',
        intro: 'Du rein (une dizaine de centimètres) à la molécule d’ADN (2 nm de large), le vivant s’étend sur huit puissances de 10 : il faut savoir changer d’unité sans se tromper.',
        blocks: [
          { type: 'p', text: 'En biotechnologies, tu as appris à mesurer une bactérie ou une levure au microscope optique (leçon « Observer la diversité du vivant à l’échelle microscopique »). Le programme de biochimie-biologie élargit ce savoir-faire à **toutes les échelles** du corps humain, de l’organe à l’organite, et aux **clichés de microscopie électronique**.' },
          {
            type: 'table',
            caption: 'Les unités de longueur en biologie',
            head: ['Unité', 'Symbole', 'Valeur en mètre', 'Conversion utile'],
            rows: [
              ['Mètre', 'm', '1 m', '1 m = 100 cm = 1 000 mm'],
              ['Millimètre', 'mm', '10^-3^ m', '1 mm = 1 000 µm'],
              ['Micromètre', 'µm', '10^-6^ m', '1 µm = 1 000 nm = 0,001 mm'],
              ['Nanomètre', 'nm', '10^-9^ m', '1 nm = 0,001 µm'],
            ],
          },
          {
            type: 'example',
            title: 'conversions',
            text: [
              '0,5 µm = 0,5 × 1 000 = **500 nm**.',
              '25 nm = 25 ÷ 1 000 = **0,025 µm**.',
              '3 cm = 30 mm = 30 × 1 000 = **30 000 µm**.',
              '7 µm = 7 × 10^-6^ m, et aussi 0,007 mm.',
            ],
          },
          { type: 'definition', term: 'Ordre de grandeur', text: 'puissance de 10 la plus proche d’une valeur. On écrit la valeur sous la forme a × 10^n^ (avec a entre 1 et 10) : si a est inférieur à 5, l’ordre de grandeur est 10^n^ ; si a est supérieur ou égal à 5, c’est 10^n+1^. Exemple : pour une hématie de 7 µm = 7 × 10^-6^ m, l’ordre de grandeur est 10^-5^ m.' },
          {
            type: 'table',
            caption: 'L’échelle des tailles dans l’organisme humain',
            head: ['Objet', 'Taille approximative', 'Ordre de grandeur', 'Observable avec'],
            rows: [
              ['Rein (longueur)', '12 cm', '10^-1^ m', 'Œil nu'],
              ['Villosité intestinale (hauteur)', '0,5 à 1 mm', '10^-3^ m', 'Loupe, microscope optique'],
              ['Ovocyte (diamètre)', 'Environ 120 µm', '10^-4^ m', 'Microscope optique'],
              ['Cellule de l’épithélium intestinal (hauteur)', 'Environ 20 µm', '10^-5^ m', 'Microscope optique'],
              ['Hématie (diamètre)', '7 à 8 µm', '10^-5^ m', 'Microscope optique'],
              ['Bactérie', '1 à 5 µm', '10^-6^ m', 'Microscope optique (×1 000)'],
              ['Mitochondrie', 'Environ 1 µm de large, 1 à 10 µm de long', '10^-6^ m', 'Microscope électronique pour sa structure'],
              ['Microvillosité (diamètre)', 'Environ 0,1 µm', '10^-7^ m', 'Microscope électronique'],
              ['Virus', '20 à 300 nm', '10^-8^ à 10^-7^ m', 'Microscope électronique'],
              ['Ribosome', 'Environ 25 nm', '10^-8^ m', 'Microscope électronique'],
              ['Membrane plasmique (épaisseur)', '7 à 8 nm', '10^-8^ m', 'Microscope électronique'],
              ['Molécule d’ADN (largeur)', '2 nm', '10^-9^ m', 'Microscope électronique, techniques spécialisées'],
            ],
          },
          { type: 'definition', term: 'Limite de résolution', text: 'plus petite distance entre deux points que l’on peut encore distinguer séparément avec un instrument (on parle aussi de **pouvoir séparateur**). Elle vaut environ **0,1 mm** pour l’œil, **0,2 µm** pour le microscope optique et de l’ordre du **nanomètre** pour le microscope électronique observant des échantillons biologiques (encore moins pour des matériaux).' },
          { type: 'note', title: 'Pourquoi le microscope optique a-t-il une limite ?', text: 'La limite de résolution dépend de la longueur d’onde du rayonnement utilisé. La lumière visible a une longueur d’onde de 400 à 800 nm environ : aucun détail plus petit que 0,2 µm environ ne peut être séparé, quel que soit le grossissement. Les électrons ont une longueur d’onde bien plus courte : le microscope électronique révèle l’ultrastructure de la cellule.' },
          {
            type: 'retenir',
            items: [
              '1 mm = 1 000 µm ; 1 µm = 1 000 nm ; 1 µm = 10^-6^ m ; 1 nm = 10^-9^ m.',
              'Cellules : de quelques µm à une centaine de µm ; organites : de quelques dizaines de nm à quelques µm ; molécules : quelques nm.',
              'Limite de résolution : œil 0,1 mm ; microscope optique 0,2 µm ; microscope électronique de l’ordre du nanomètre.',
            ],
          },
        ],
      },

      {
        title: 'Grossissement, agrandissement et barre d’échelle',
        intro: 'Trois notions proches, souvent confondues : la première caractérise l’instrument, les deux autres l’image.',
        blocks: [
          { type: 'definition', term: 'Grossissement', text: 'caractéristique du **microscope** : nombre de fois que l’objet paraît plus grand quand on regarde dans l’oculaire. Il vaut G~oculaire~ × G~objectif~ (par exemple 10 × 40 = ×400).' },
          { type: 'definition', term: 'Agrandissement (ou grandissement)', text: 'caractéristique d’une **image** (photographie, dessin, schéma) : rapport entre la taille de l’objet sur l’image et sa taille réelle, exprimées **dans la même unité**.' },
          {
            type: 'formula',
            title: 'Agrandissement d’une image',
            expression: 'A = taille sur l’image ÷ taille réelle',
            legend: [
              { symbol: 'A', meaning: 'agrandissement, sans unité (noté par exemple ×2 000)' },
              { symbol: 'tailles', meaning: 'exprimées dans la même unité avant de diviser' },
            ],
          },
          { type: 'warning', title: 'Un cliché « pris à ×400 » n’est pas agrandi 400 fois', text: 'Le grossissement du microscope ne dit rien de l’image finale : la même photo peut être imprimée en petit dans un manuel, en grand sur une affiche ou affichée sur un écran de téléphone. Son agrandissement change à chaque fois. C’est pourquoi les clichés scientifiques portent une **barre d’échelle**.' },
          { type: 'definition', term: 'Barre d’échelle', text: 'segment tracé sur l’image, accompagné de la longueur réelle qu’il représente (par exemple « 10 µm »).' },
          {
            type: 'compare',
            title: 'Barre d’échelle ou agrandissement indiqué ?',
            columns: [
              { title: 'Barre d’échelle', subtitle: 'la solution des scientifiques', items: ['Elle est agrandie ou réduite **en même temps** que l’image.', 'Elle reste juste sur un écran, une photocopie ou une affiche.', 'Elle permet de mesurer n’importe quel élément par comparaison.'] },
              { title: 'Agrandissement indiqué (×G)', subtitle: 'valable pour un format précis', items: ['Il n’est juste que pour la taille d’impression d’origine.', 'Il devient faux dès que l’image est redimensionnée.', 'Il reste pratique pour un dessin dans un cahier.'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Le grossissement caractérise le microscope ; l’agrandissement caractérise l’image.',
              'Agrandissement = taille sur l’image ÷ taille réelle, dans la même unité.',
              'La barre d’échelle reste valable quelle que soit la taille d’affichage de l’image.',
            ],
          },
        ],
      },

      {
        title: 'Calculer une taille réelle',
        intro: 'Deux méthodes, selon ce que fournit le document : une barre d’échelle ou un agrandissement.',
        blocks: [
          { type: 'p', text: '**Méthode 1 : avec une barre d’échelle.** La longueur sur l’image et la longueur réelle sont **proportionnelles** : on peut utiliser un tableau de proportionnalité (produit en croix).' },
          { type: 'figure', image: IMG.frottis, caption: 'Frottis sanguin coloré au May-Grünwald-Giemsa, observé au microscope optique (objectif ×100 à immersion). Barre d’échelle : 10 µm.', size: 'wide' },
          {
            type: 'table',
            caption: 'Mesures à la règle sur l’image imprimée (15,4 cm de large) : taille réelle d’une hématie',
            head: ['', 'Barre d’échelle', 'Hématie'],
            rows: [
              ['Longueur sur l’image', '1,8 cm', '1,3 cm'],
              ['Longueur réelle', '10 µm', '? = 1,3 × 10 ÷ 1,8 ≈ 7,2 µm'],
            ],
          },
          {
            type: 'formula',
            title: 'Avec une barre d’échelle',
            expression: 'taille réelle = (taille de l’objet sur l’image ÷ taille de la barre sur l’image) × valeur de la barre',
            legend: [
              { symbol: 'mesures', meaning: 'faites à la règle, dans la même unité (mm ou cm)' },
              { symbol: 'valeur de la barre', meaning: 'longueur réelle écrite sur la barre (ex. 10 µm)' },
            ],
          },
          { type: 'p', text: '**Méthode 2 : avec l’agrandissement.** On divise la taille mesurée sur l’image par l’agrandissement, après avoir converti la mesure dans l’unité voulue pour le résultat.' },
          {
            type: 'formula',
            title: 'Avec l’agrandissement',
            expression: 'taille réelle = taille sur l’image ÷ A',
            legend: [
              { symbol: 'A', meaning: 'agrandissement de l’image' },
              { symbol: 'conversion', meaning: '1 cm = 10 000 µm = 10^7^ nm' },
            ],
          },
          { type: 'example', title: 'mitochondrie', text: 'Sur une électronographie imprimée avec un agrandissement de ×46 000, une mitochondrie mesure 11,5 cm de long. 11,5 cm = 115 000 µm. Taille réelle = 115 000 ÷ 46 000 = **2,5 µm**.' },
          { type: 'example', title: 'calculer l’agrandissement d’une image', text: 'Sur la même électronographie, la barre d’échelle « 0,5 µm » mesure 2,3 cm. 2,3 cm = 23 000 µm. Agrandissement A = 23 000 ÷ 0,5 = **×46 000**.' },
          {
            type: 'steps',
            title: 'Méthode complète',
            items: [
              { title: 'Mesurer', text: 'À la règle, au millimètre près, l’objet (dans sa plus grande dimension, ou celle demandée) et la barre d’échelle.' },
              { title: 'Convertir', text: 'Mettre toutes les longueurs dans la même unité avant tout calcul.' },
              { title: 'Calculer', text: 'Par proportionnalité (barre d’échelle) ou par division (agrandissement).' },
              { title: 'Exprimer le résultat', text: 'Dans une unité adaptée (µm pour une cellule, nm pour un ribosome), avec deux ou trois chiffres significatifs.' },
              { title: 'Contrôler', text: 'Comparer à l’ordre de grandeur attendu : une hématie de 70 µm ou une mitochondrie de 25 µm signalent une erreur de conversion.' },
            ],
          },
          { type: 'warning', title: 'Erreurs classiques', text: ['Diviser des centimètres par des micromètres sans convertir.', 'Utiliser le grossissement du microscope (×1 000) comme agrandissement de la photo imprimée.', 'Donner un résultat avec six décimales : une mesure à la règle n’est précise qu’au millimètre près.'] },
          {
            type: 'retenir',
            items: [
              'Avec une barre d’échelle : proportionnalité entre longueur sur l’image et longueur réelle.',
              'Avec un agrandissement : taille réelle = taille sur l’image ÷ A, après conversion.',
              'On convertit avant de calculer et on contrôle toujours la cohérence avec l’ordre de grandeur.',
            ],
          },
        ],
      },

      {
        title: 'Associer le microscope à la taille de la structure observée',
        intro: 'L’échelle d’un cliché trahit l’instrument qui l’a produit.',
        blocks: [
          { type: 'figure', image: IMG.met, caption: 'Électronographie d’une mitochondrie (microscope électronique à transmission). Barre d’échelle : 0,5 µm.', size: 'wide' },
          {
            type: 'table',
            caption: 'Trois types de microscopes',
            head: ['Critère', 'Microscope optique', 'Microscope électronique à transmission (MET)', 'Microscope électronique à balayage (MEB)'],
            rows: [
              ['Rayonnement', 'Lumière visible', 'Électrons qui traversent une coupe très fine', 'Électrons qui balaient la surface de l’échantillon'],
              ['Limite de résolution', 'Environ 0,2 µm', 'De l’ordre du nanomètre', 'Quelques nanomètres'],
              ['Aspect de l’image', 'Couleurs des colorants ; cellules entières ou coupes', 'Noir et blanc ; coupe montrant l’intérieur des cellules', 'Noir et blanc, impression de relief ; surface des objets'],
              ['Barre d’échelle typique', '10 à 100 µm', '0,1 à quelques µm, ou en nm', 'De quelques nm à quelques dizaines de µm'],
              ['Exemples', 'Coupe d’intestin, frottis sanguin, levures', 'Mitochondries, réticulum, ribosomes, membranes', 'Microvillosités, surface de bactéries ou d’hématies'],
            ],
          },
          {
            type: 'steps',
            title: 'Reconnaître le microscope utilisé à partir d’un cliché',
            items: [
              { title: 'Lire la barre d’échelle', text: 'Des dizaines de micromètres orientent vers le microscope optique ; une barre en nanomètres ou inférieure au micromètre, vers le microscope électronique.' },
              { title: 'Regarder les couleurs', text: 'Colorants (rose, violet, bleu) : microscope optique. Noir et blanc, ou couleurs ajoutées par ordinateur (« fausses couleurs ») : microscope électronique.' },
              { title: 'Regarder l’aspect', text: 'Image plane d’une coupe : microscope optique ou MET ; impression de relief : MEB.' },
              { title: 'Confronter à la limite de résolution', text: 'Un détail plus petit que 0,2 µm (crête mitochondriale, ribosome) ne peut provenir que d’un microscope électronique.' },
            ],
          },
          { type: 'example', title: 'comparer les deux clichés de la leçon', text: 'Le frottis sanguin porte une barre de 10 µm, il est coloré et montre des cellules entières : il a été obtenu au **microscope optique**. L’électronographie porte une barre de 0,5 µm, elle est en noir et blanc et montre les crêtes d’une mitochondrie et des ribosomes d’environ 25 nm, invisibles en microscopie optique : elle a été obtenue au **microscope électronique à transmission**.' },
          {
            type: 'retenir',
            items: [
              'Microscope optique : cellules et grosses structures (au mieux 0,2 µm) ; barres de l’ordre de 10 à 100 µm ; couleurs des colorants.',
              'Microscope électronique : ultrastructure (organites, membranes, virus) ; barres inférieures au micromètre ou en nm ; noir et blanc.',
              'Un détail plus petit que 0,2 µm ne peut être vu qu’en microscopie électronique.',
            ],
          },
        ],
      },

      {
        title: 'Mettre une échelle sur son dessin ou son schéma',
        intro: 'Un dessin d’observation sans échelle est incomplet : voici comment calculer et tracer la barre.',
        blocks: [
          {
            type: 'steps',
            title: 'Tracer une barre d’échelle sur un dessin',
            items: [
              { title: 'Connaître une taille réelle', text: 'Mesurée au microscope (oculaire micrométrique) ou calculée sur un cliché : par exemple une hématie de 7 µm.' },
              { title: 'Mesurer cet élément sur ton dessin', text: 'Par exemple 3,0 cm, soit 30 000 µm.' },
              { title: 'Calculer l’agrandissement du dessin', text: 'A = 30 000 ÷ 7 ≈ 4 300.' },
              { title: 'Choisir une longueur réelle ronde', text: 'Par exemple 10 µm, du même ordre que l’objet dessiné.' },
              { title: 'Calculer la longueur de la barre', text: '10 µm × 4 300 = 43 000 µm = **4,3 cm**. Trace un segment de 4,3 cm à la règle et écris « 10 µm » dessous.' },
            ],
          },
          { type: 'p', text: 'Pour un **schéma** très simplifié (schéma fonctionnel, schéma de synthèse), les proportions ne sont pas respectées : on n’indique pas d’échelle, ou seulement un ordre de grandeur (« cellule d’environ 20 µm »). Les règles complètes du dessin d’observation et du schéma sont détaillées dans la leçon D.5.' },
          {
            type: 'retenir',
            items: [
              'Barre d’échelle d’un dessin : longueur sur le dessin = longueur réelle choisie × agrandissement du dessin.',
              'On choisit une valeur ronde (1, 5, 10, 50 µm…) du même ordre de grandeur que l’objet.',
              'Un schéma fonctionnel n’est pas à l’échelle.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Pour toutes les activités, utilise une règle graduée et une calculatrice. Les mesures indiquées ont été faites sur les images imprimées en 15,4 cm de large ; tu peux aussi mesurer sur ton écran : les rapports restent les mêmes.',
    activities: [
      {
        title: 'Mesurer des cellules sanguines',
        duration: '25 min',
        skills: ['Mesurer', 'Calculer', 'Contrôler'],
        context: 'Un technicien de laboratoire observe un frottis sanguin. Il veut vérifier que les hématies ont une taille normale (7 à 8 µm de diamètre) et mesurer le polynucléaire neutrophile.',
        documents: [
          { label: 'Document 1', title: 'Frottis sanguin (May-Grünwald-Giemsa)', image: IMG.frottis, caption: 'Microscope optique, objectif ×100 à immersion. Barre d’échelle : 10 µm.' },
          {
            label: 'Document 2',
            title: 'Mesures réalisées à la règle sur l’image imprimée',
            blocks: [
              { type: 'table', head: ['Élément mesuré', 'Longueur sur l’image'], rows: [['Barre d’échelle « 10 µm »', '1,8 cm'], ['Diamètre moyen d’une hématie', '1,25 cm'], ['Diamètre du polynucléaire neutrophile', '2,7 cm']] },
            ],
          },
        ],
        questions: [
          { text: 'Calcule le diamètre réel moyen d’une hématie.', hint: 'Taille réelle = (taille de l’objet ÷ taille de la barre) × valeur de la barre.', answer: 'Diamètre = (1,25 ÷ 1,8) × 10 ≈ 6,9 µm, soit environ 7 µm.' },
          { text: 'Ce résultat est-il compatible avec une taille normale ? Donne son ordre de grandeur en mètre.', answer: 'Oui, environ 7 µm, ce qui correspond à la taille normale d’une hématie (7 à 8 µm ; la mesure à la règle n’est précise qu’au millimètre). 6,9 µm = 6,9 × 10^-6^ m : l’ordre de grandeur est 10^-5^ m.' },
          { text: 'Calcule le diamètre réel du polynucléaire neutrophile et compare-le à celui d’une hématie.', answer: 'Diamètre = (2,7 ÷ 1,8) × 10 = 15 µm. Le polynucléaire est environ deux fois plus grand qu’une hématie (15 ÷ 6,9 ≈ 2,2).' },
          { text: 'Calcule l’agrandissement de l’image imprimée.', hint: 'Convertis 1,8 cm en µm.', answer: '1,8 cm = 18 000 µm. A = 18 000 ÷ 10 = ×1 800.' },
          { text: 'Le cliché a été pris au grossissement ×1 000. Explique pourquoi l’agrandissement de l’image imprimée n’est pas ×1 000, et pourquoi la barre d’échelle est plus utile que cette indication.', answer: 'L’agrandissement dépend de la taille à laquelle la photo est imprimée ou affichée : ici, elle a été agrandie davantage, d’où ×1 800. Si l’on change la taille de l’image, l’agrandissement change encore ; la barre d’échelle, elle, est redimensionnée avec l’image et reste toujours juste.' },
        ],
      },
      {
        title: 'Mesurer un organite sur une électronographie',
        duration: '25 min',
        skills: ['Identifier', 'Calculer', 'Convertir'],
        context: 'Ce cliché provient d’une cellule de mammifère. On veut déterminer la taille de l’organite central et justifier le type de microscope utilisé.',
        documents: [
          { label: 'Document 3', title: 'Électronographie', image: IMG.met, caption: 'Barre d’échelle : 0,5 µm.' },
          {
            label: 'Document 4',
            title: 'Mesures réalisées à la règle sur l’image imprimée',
            blocks: [
              { type: 'table', head: ['Élément mesuré', 'Longueur sur l’image'], rows: [['Barre d’échelle « 0,5 µm »', '2,3 cm'], ['Longueur de l’organite central', '11,5 cm'], ['Largeur de l’organite central', '4,4 cm'], ['Diamètre d’un petit grain sombre (ribosome)', 'environ 1 mm']] },
            ],
          },
        ],
        questions: [
          { text: 'Quel type de microscope a permis d’obtenir ce cliché ? Donne trois arguments.', answer: 'Un microscope électronique à transmission : l’image est en noir et blanc, c’est une coupe qui montre l’intérieur de la cellule, et la barre d’échelle (0,5 µm) ainsi que les détails visibles (crêtes, ribosomes) sont inférieurs à la limite de résolution du microscope optique (0,2 µm).' },
          { text: 'Identifie l’organite central à l’aide de sa structure.', answer: 'C’est une mitochondrie : organite allongé, entouré d’une double membrane, dont la membrane interne forme des replis transversaux, les crêtes.' },
          { text: 'Calcule la longueur et la largeur réelles de cet organite.', answer: 'Longueur = (11,5 ÷ 2,3) × 0,5 = 2,5 µm. Largeur = (4,4 ÷ 2,3) × 0,5 ≈ 0,96 µm, soit environ 1 µm. Ces valeurs correspondent bien à une mitochondrie (environ 1 µm de large, de 1 à 10 µm de long).' },
          { text: 'Estime le diamètre d’un ribosome, en µm puis en nm.', hint: '1 mm = 0,1 cm ; 1 µm = 1 000 nm.', answer: 'Diamètre = (0,1 ÷ 2,3) × 0,5 ≈ 0,022 µm = 22 nm. C’est cohérent avec la taille d’un ribosome (20 à 30 nm), une estimation car la mesure d’un grain de 1 mm est imprécise.' },
          { text: 'Calcule l’agrandissement de l’image imprimée et compare-le à celui du frottis sanguin (×1 800).', answer: '2,3 cm = 23 000 µm ; A = 23 000 ÷ 0,5 = ×46 000. L’électronographie est environ 25 fois plus agrandie que le frottis (46 000 ÷ 1 800 ≈ 26).' },
        ],
      },
      {
        title: 'Associer microscope et taille des structures',
        duration: '20 min',
        skills: ['Classer', 'Justifier'],
        context: 'Des clichés ont été rassemblés pour un exposé sur l’intestin grêle, mais leurs légendes ont été perdues. Seules les barres d’échelle et une description subsistent.',
        documents: [
          {
            label: 'Document 5',
            title: 'Description de quatre clichés',
            blocks: [
              {
                type: 'table',
                head: ['Cliché', 'Description', 'Barre d’échelle'],
                rows: [
                  ['A', 'Coupe colorée en rose et violet montrant des villosités et leur épithélium', '200 µm'],
                  ['B', 'Image en noir et blanc en relief : surface hérissée de petits cylindres serrés', '1 µm'],
                  ['C', 'Coupe en noir et blanc : membrane plasmique formée de deux lignes sombres parallèles', '20 nm'],
                  ['D', 'Coupe colorée : cellules de l’épithélium intestinal avec leur noyau', '20 µm'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Associe à chaque cliché le microscope utilisé (optique, électronique à transmission, électronique à balayage). Justifie.', answer: 'A et D : microscope optique (images colorées, barres de 200 µm et 20 µm). B : microscope électronique à balayage (noir et blanc, relief de surface, barre de 1 µm : ce sont des microvillosités). C : microscope électronique à transmission (coupe en noir et blanc, barre de 20 nm, détail d’une membrane de 7 à 8 nm).' },
          { text: 'Range les quatre clichés du plus grand champ observé au plus petit.', answer: 'A (villosités, barre de 200 µm) > D (cellules, 20 µm) > B (microvillosités, 1 µm) > C (membrane, 20 nm).' },
          { text: 'Convertis chaque barre d’échelle en mètre, avec une puissance de 10.', answer: 'A : 200 µm = 2 × 10^-4^ m ; B : 1 µm = 10^-6^ m ; C : 20 nm = 2 × 10^-8^ m ; D : 20 µm = 2 × 10^-5^ m.' },
          { text: 'Un élève affirme avoir vu, au microscope optique, les ribosomes des cellules du cliché D. Est-ce possible ?', answer: 'Non : un ribosome mesure environ 25 nm, soit 0,025 µm, bien en dessous de la limite de résolution du microscope optique (0,2 µm). Il ne peut être vu qu’au microscope électronique.' },
        ],
      },
      {
        title: 'Placer une échelle sur un dessin',
        duration: '15 min',
        skills: ['Calculer', 'Représenter'],
        context: 'Une élève a réalisé le dessin d’observation d’une cellule de l’épithélium intestinal vue au microscope optique. Au microscope, grâce à l’oculaire micrométrique, elle a mesuré que cette cellule a une hauteur réelle de 24 µm. Sur son dessin, la cellule mesure 9,6 cm de haut.',
        documents: [
          { label: 'Document 6', title: 'Données', text: ['Hauteur réelle de la cellule : 24 µm.', 'Hauteur de la cellule sur le dessin : 9,6 cm.'] },
        ],
        questions: [
          { text: 'Calcule l’agrandissement de son dessin.', answer: '9,6 cm = 96 000 µm ; A = 96 000 ÷ 24 = ×4 000.' },
          { text: 'Quelle longueur doit mesurer, sur le dessin, une barre d’échelle représentant 10 µm ?', answer: '10 µm × 4 000 = 40 000 µm = 4,0 cm.' },
          { text: 'Le noyau mesure 2,4 cm sur le dessin. Quelle est sa taille réelle ? Est-ce cohérent ?', answer: '2,4 cm = 24 000 µm ; 24 000 ÷ 4 000 = 6 µm. C’est cohérent avec la taille d’un noyau (5 à 10 µm environ).' },
          { text: 'Pourquoi la barre d’échelle est-elle préférable à l’indication « ×4 000 » si le dessin est photocopié en format réduit ?', answer: 'En réduisant le dessin, la barre est réduite dans la même proportion et représente toujours 10 µm ; l’indication « ×4 000 », elle, devient fausse.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      '1 mm = 1 000 µm ; 1 µm = 1 000 nm ; 1 µm = 10^-6^ m ; 1 nm = 10^-9^ m.',
      'L’ordre de grandeur est la puissance de 10 la plus proche : cellules 10^-5^ m, bactéries et mitochondries 10^-6^ m, ribosomes et membranes 10^-8^ m.',
      'Le grossissement caractérise le microscope ; l’agrandissement (A = taille sur l’image ÷ taille réelle) caractérise l’image.',
      'Avec une barre d’échelle, la taille réelle se calcule par proportionnalité ; avec un agrandissement, par division après conversion.',
      'On convertit toujours avant de calculer, puis on contrôle le résultat avec l’ordre de grandeur attendu.',
      'Microscope optique : limite de résolution 0,2 µm, couleurs, barres de 10 à 100 µm ; microscope électronique : ultrastructure, noir et blanc, barres en nm ou inférieures au µm.',
      'Un dessin d’observation porte une barre d’échelle dont la longueur vaut la longueur réelle choisie multipliée par l’agrandissement.',
    ],
    method: {
      title: 'Déterminer la taille réelle d’un élément sur un cliché',
      steps: [
        'Repérer la **barre d’échelle** (ou l’agrandissement) et son unité.',
        'Mesurer à la règle l’élément et la barre, dans la même unité.',
        'Calculer : taille réelle = (taille de l’élément ÷ taille de la barre) × valeur de la barre.',
        'Exprimer le résultat dans une unité adaptée, avec une précision raisonnable.',
        'Contrôler la cohérence avec l’ordre de grandeur attendu et le microscope utilisé.',
      ],
    },
    vocabulary: [
      { term: 'Micromètre (µm)', definition: 'Millième de millimètre : 10^-6^ m. Unité adaptée aux cellules.' },
      { term: 'Nanomètre (nm)', definition: 'Millième de micromètre : 10^-9^ m. Unité adaptée aux molécules, membranes, virus.' },
      { term: 'Ordre de grandeur', definition: 'Puissance de 10 la plus proche d’une valeur.' },
      { term: 'Échelle', definition: 'Rapport entre une longueur représentée et la longueur réelle correspondante.' },
      { term: 'Barre d’échelle', definition: 'Segment tracé sur une image, accompagné de la longueur réelle qu’il représente.' },
      { term: 'Grossissement', definition: 'Caractéristique du microscope : G oculaire × G objectif.' },
      { term: 'Agrandissement', definition: 'Rapport entre la taille sur l’image et la taille réelle (on dit aussi grandissement).' },
      { term: 'Limite de résolution', definition: 'Plus petite distance entre deux points qu’un instrument permet de distinguer.' },
      { term: 'Ultrastructure', definition: 'Organisation interne de la cellule visible seulement au microscope électronique.' },
      { term: 'Électronographie', definition: 'Cliché obtenu au microscope électronique.' },
      { term: 'MET', definition: 'Microscope électronique à transmission : électrons traversant une coupe très fine.' },
      { term: 'MEB', definition: 'Microscope électronique à balayage : image en relief de la surface d’un objet.' },
    ],
    mistakes: [
      { wrong: 'Diviser une longueur en cm par une longueur en µm.', right: 'Convertir toutes les longueurs dans la même unité avant de calculer.' },
      { wrong: 'Utiliser le grossissement du microscope (×1 000) comme agrandissement de la photographie.', right: 'Calculer l’agrandissement de l’image à partir de la barre d’échelle.' },
      { wrong: 'Confondre 1 µm = 100 nm.', right: '1 µm = 1 000 nm.' },
      { wrong: 'Accepter un résultat aberrant (hématie de 70 µm).', right: 'Contrôler systématiquement avec l’ordre de grandeur attendu.' },
      { wrong: 'Penser qu’un fort grossissement permet de voir des ribosomes au microscope optique.', right: 'La limite de résolution (0,2 µm) empêche de séparer des détails plus petits, quel que soit le grossissement.' },
    ],
    quiz: [
      { question: '0,5 µm correspond à :', choices: ['5 nm', '50 nm', '500 nm', '5 000 nm'], answer: 2, explanation: '1 µm = 1 000 nm, donc 0,5 µm = 500 nm.' },
      { question: 'L’ordre de grandeur d’une hématie de 7 µm est :', choices: ['10^-4^ m', '10^-5^ m', '10^-6^ m', '10^-7^ m'], answer: 1, explanation: '7 µm = 7 × 10^-6^ m ; 7 ≥ 5, donc l’ordre de grandeur est 10^-5^ m.' },
      { question: 'L’agrandissement d’une image est :', choices: ['Le produit oculaire × objectif', 'Le rapport taille sur l’image ÷ taille réelle', 'La longueur de la barre d’échelle', 'La limite de résolution'], answer: 1, explanation: 'L’agrandissement caractérise l’image : taille sur l’image ÷ taille réelle.' },
      { question: 'Sur un cliché, la barre « 10 µm » mesure 2 cm et une cellule 5 cm. La cellule mesure :', choices: ['2,5 µm', '4 µm', '25 µm', '100 µm'], answer: 2, explanation: '(5 ÷ 2) × 10 = 25 µm.' },
      { question: 'Une barre d’échelle de 2 cm représente 0,5 µm. L’agrandissement est :', choices: ['×4', '×400', '×4 000', '×40 000'], answer: 3, explanation: '2 cm = 20 000 µm ; 20 000 ÷ 0,5 = ×40 000.' },
      { question: 'La limite de résolution du microscope optique est d’environ :', choices: ['0,2 mm', '0,2 µm', '0,2 nm', '2 nm'], answer: 1, explanation: 'Environ 0,2 µm, à cause de la longueur d’onde de la lumière visible.' },
      { question: 'Un cliché en noir et blanc, avec une barre de 100 nm, montrant des ribosomes, provient :', choices: ['D’un microscope optique', 'D’une loupe binoculaire', 'D’un microscope électronique', 'D’un appareil photo'], answer: 2, explanation: 'Barre en nanomètres et détails inférieurs à 0,2 µm : microscope électronique.' },
      { question: 'Pourquoi préfère-t-on une barre d’échelle à l’indication « ×G » ?', choices: ['Elle est plus jolie', 'Elle reste juste si l’image est agrandie ou réduite', 'Elle donne le grossissement du microscope', 'Elle évite de mesurer'], answer: 1, explanation: 'La barre est redimensionnée avec l’image ; l’agrandissement indiqué ne l’est pas.' },
    ],
    exercises: [
      {
        title: 'Conversions et ordres de grandeur',
        statement: 'Convertis en µm puis donne l’ordre de grandeur en mètre : a) une villosité intestinale de 0,8 mm ; b) un virus de 120 nm ; c) un ovocyte de 0,12 mm.',
        answer: [
          'a) 0,8 mm = 800 µm = 8 × 10^-4^ m : ordre de grandeur 10^-3^ m.',
          'b) 120 nm = 0,12 µm = 1,2 × 10^-7^ m : ordre de grandeur 10^-7^ m.',
          'c) 0,12 mm = 120 µm = 1,2 × 10^-4^ m : ordre de grandeur 10^-4^ m.',
        ],
      },
      {
        title: 'Détecter une erreur',
        statement: 'Un élève mesure sur une électronographie une mitochondrie de 6 cm et une barre « 1 µm » de 2 cm. Il écrit : « taille réelle = 6 ÷ 2 × 1 = 3 cm ». Corrige son erreur et vérifie la cohérence du résultat.',
        answer: 'Le rapport 6 ÷ 2 = 3 se multiplie par la valeur de la barre, donc par 1 µm : la mitochondrie mesure 3 µm (et non 3 cm). C’est cohérent : une mitochondrie mesure de 1 à quelques micromètres de long.',
      },
      {
        title: 'Choisir le bon microscope',
        statement: 'Pour chaque structure, indique si elle peut être observée au microscope optique, en justifiant par sa taille : noyau (6 µm), microvillosité (0,1 µm de diamètre), bactérie (2 µm), membrane plasmique (7,5 nm d’épaisseur).',
        answer: [
          'Noyau (6 µm) et bactérie (2 µm) : oui, ils sont plus grands que la limite de résolution du microscope optique (0,2 µm).',
          'Microvillosité (0,1 µm) et épaisseur de la membrane (7,5 nm = 0,0075 µm) : non, elles sont plus petites que 0,2 µm ; il faut un microscope électronique.',
        ],
      },
    ],
    selfCheck: [
      'Je sais convertir des longueurs entre mm, µm et nm, et les écrire avec une puissance de 10.',
      'Je sais donner l’ordre de grandeur d’un objet biologique.',
      'Je sais distinguer grossissement et agrandissement.',
      'Je sais calculer une taille réelle avec une barre d’échelle ou un agrandissement.',
      'Je sais calculer l’agrandissement d’une image.',
      'Je sais reconnaître le type de microscope utilisé à partir d’un cliché et de son échelle.',
      'Je sais tracer une barre d’échelle sur un dessin.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Ordres de grandeur de longueur — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Ordres_de_grandeur_de_longueur' },
      { title: 'Microscopie électronique en transmission — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Microscope_%C3%A9lectronique_en_transmission' },
      { title: 'Mitochondrie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Mitochondrie' },
    ],
  },
};

export default lesson;
