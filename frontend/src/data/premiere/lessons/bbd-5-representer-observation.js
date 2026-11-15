import { img } from '../media';
import photoDessin from '../../../assets/courses/premiere/bbd-5-representer-observation/photo-dessin.webp';
import dessinOignon from '../../../assets/courses/premiere/bbd-5-representer-observation/dessin-oignon.webp';
import schemaHormone from '../../../assets/courses/premiere/bbd-5-representer-observation/schema-hormone.webp';
import racineOignon from '../../../assets/courses/open/mitosis-onion-root.jpg';

const IMG = {
  photoDessin: img(photoDessin, 'Main d’élève dessinant au crayon des cellules végétales sur une feuille blanche, à côté d’un microscope optique portant une lame colorée ; une règle et une gomme posées sur la paillasse.', 'photo', 1536, 1024),
  racine: img(racineOignon, 'Microphotographie de cellules du méristème de racine d’oignon colorées en bleu : cellules rectangulaires à gros noyau arrondi et nucléole ; en haut, une cellule en division montre des chromosomes condensés.', 'micro', 1400, 1050),
  dessin: img(dessinOignon, 'Dessin d’observation au crayon de quatre cellules de méristème de racine d’oignon, légendé à droite : paroi, chromosomes, cytoplasme, noyau, nucléole ; la cellule en division est soulignée en vert ; barre d’échelle de 10 µm.', 'schema', 1400, 933),
  hormone: img(schemaHormone, 'Schéma fonctionnel d’une communication hormonale : glande endocrine libérant une hormone dans un vaisseau sanguin, transport par le sang jusqu’à une cellule cible portant des récepteurs, flèche vers la réponse.', 'schema', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'bbd-5-representer-observation',
  duration: 'Environ 2 séances, puis réinvesti dans tous les chapitres',
  hook: {
    image: IMG.photoDessin,
    question: 'À l’heure des appareils photo numériques, pourquoi les biologistes dessinent-ils encore à la main ?',
    text: 'Parce que dessiner oblige à **regarder vraiment** : pour tracer une cellule, il faut repérer sa forme, ses limites, ses structures, leurs proportions. Et parce qu’un schéma bien construit **explique** ce qu’aucune photo ne montre : l’organisation d’une cellule, le trajet d’une hormone, une boucle de régulation. Dans cette leçon, tu apprends à choisir la bonne représentation et à la réaliser selon les règles attendues au baccalauréat.',
  },
  objectives: [
    'Distinguer dessin d’observation, schéma d’organisation et schéma fonctionnel, et choisir la représentation adaptée à une consigne.',
    'Réaliser un dessin d’observation fidèle d’une préparation microscopique.',
    'Compléter une représentation par un titre, des légendes, des annotations et une échelle.',
    'Représenter un organe ou un appareil par un dessin anatomique orienté.',
    'Passer d’observations microscopiques au schéma d’une cellule eucaryote.',
    'Construire un schéma fonctionnel à partir d’un texte, avec un code de flèches légendé (communication hormonale, boucle de régulation).',
  ],
  prerequisites: [
    'Les règles de base du dessin d’observation vues en biotechnologies (leçon « Observer la diversité du vivant à l’échelle microscopique »).',
    'Calculer un agrandissement et tracer une barre d’échelle (leçon D.4).',
  ],
  program: [
    'Maîtriser des organisations anatomiques, notamment à l’aide du dessin (objectif de formation du programme de biochimie-biologie).',
    'Représenter par un dessin les organes du tube digestif et les glandes annexes, ainsi que les principaux organes des appareils reproducteurs (modules 01 et 02).',
    'Schématiser une cellule eucaryote avec ses organites (module B, item 4).',
    'Réaliser un schéma mettant en évidence les principaux acteurs d’une communication hormonale ; construire un schéma fonctionnel à partir d’un texte (module D, item 7).',
    'Schématiser une boucle de régulation et identifier les activations et les inhibitions (module D, item 10 ; module C, item 5).',
    'Dessiner une observation microscopique ; compléter un dessin ou un schéma par un titre, une échelle, des annotations (programme de biotechnologies, module 1).',
  ],

  course: {
    parts: [
      {
        title: 'Trois façons de représenter le vivant',
        intro: 'Avant de prendre ton crayon, demande-toi : dois-je montrer ce que je vois, comment c’est organisé ou comment cela fonctionne ?',
        blocks: [
          {
            type: 'compare',
            columns: [
              { title: 'Dessin d’observation', subtitle: 'ce que je vois', items: ['Représente **fidèlement** un objet réel observé (préparation, organe disséqué).', 'Respecte les formes et les **proportions**.', 'Au crayon, sans ombres ; titre, légendes, **échelle**.'] },
              { title: 'Schéma d’organisation', subtitle: 'comment c’est organisé', items: ['Représentation **simplifiée** et interprétée d’une structure.', 'Peut réunir plusieurs observations (microscope optique et électronique).', 'Proportions approximatives ; légendes ; couleurs possibles avec une légende.'] },
              { title: 'Schéma fonctionnel', subtitle: 'comment cela fonctionne', items: ['Montre les **acteurs** d’un mécanisme et leurs **relations**.', 'Utilise des cases et des **flèches codées** (transport, activation, inhibition).', 'Pas à l’échelle ; code des flèches toujours légendé.'] },
            ],
          },
          {
            type: 'table',
            caption: 'Quelle représentation pour quelle consigne ?',
            head: ['Consigne', 'Représentation attendue'],
            rows: [
              ['« Réalise le dessin d’observation des cellules visibles au microscope. »', 'Dessin d’observation'],
              ['« Représente par un dessin les organes du tube digestif et les glandes annexes. »', 'Dessin anatomique (schéma d’organisation d’un appareil)'],
              ['« Schématise une cellule eucaryote avec ses organites. »', 'Schéma d’organisation'],
              ['« Réalise un schéma montrant les acteurs d’une communication hormonale. »', 'Schéma fonctionnel'],
              ['« Schématise la boucle de régulation de la glycémie. »', 'Schéma fonctionnel avec activations (+) et inhibitions (−)'],
            ],
          },
          { type: 'p', text: 'Ces représentations ont un point commun : ce sont des **outils de communication scientifique**. Elles doivent être comprises par un lecteur qui n’a pas vu l’observation : d’où l’importance du titre, des légendes et des codes expliqués.' },
          {
            type: 'retenir',
            items: [
              'Dessin d’observation = fidèle à un objet réel, à l’échelle.',
              'Schéma d’organisation = simplifié et interprété ; schéma fonctionnel = acteurs et relations, avec des flèches codées.',
              'Toute représentation porte un titre et des légendes ; tout code (flèches, couleurs) est légendé.',
            ],
          },
        ],
      },

      {
        title: 'Réaliser un dessin d’observation',
        intro: 'Tu connais déjà les règles de base vues en biotechnologies ; voici la méthode complète, étape par étape, appliquée à des cellules en division.',
        blocks: [
          { type: 'figure', image: IMG.racine, caption: 'Cellules du méristème (zone de croissance) d’une racine d’oignon (_Allium cepa_), observées au microscope optique après coloration. En haut, une cellule en division : ses chromosomes sont condensés.', credit: 'Natalierussell77 — CC BY-SA 4.0 (Wikimedia Commons)', size: 'wide' },
          {
            type: 'steps',
            title: 'De la préparation au dessin',
            items: [
              { title: 'Observer avant de dessiner', text: 'Parcours la préparation au faible grossissement, puis choisis une zone **représentative** et nette au grossissement adapté.' },
              { title: 'Choisir ce que l’on dessine', text: 'Quelques cellules seulement (2 à 5), dont celles qui montrent ce que la consigne demande (ici, une cellule en division). On ne dessine pas le cercle du champ du microscope.' },
              { title: 'Tracer les contours', text: 'Au crayon HB bien taillé, en grand (au moins un tiers de page), centré à gauche pour laisser la place des légendes à droite. Traits nets et continus.' },
              { title: 'Respecter les proportions', text: 'Compare les tailles : le noyau occupe environ la moitié de la largeur de la cellule ; le nucléole est petit et arrondi.' },
              { title: 'Ajouter les structures internes', text: 'Uniquement celles que tu **vois** : noyau, nucléole, chromosomes. Pas d’ombres, pas de hachures, pas de pointillés décoratifs.' },
              { title: 'Légender', text: 'Traits de rappel à la règle, horizontaux si possible, qui ne se croisent pas ; légendes écrites horizontalement, alignées en colonne.' },
              { title: 'Titrer et mettre l’échelle', text: 'Titre complet et barre d’échelle calculée (leçon D.4).' },
            ],
          },
          { type: 'figure', image: IMG.dessin, caption: 'Modèle de dessin d’observation : « Cellules du méristème de racine d’oignon, dont une en division, observées au microscope optique (×400) après coloration ». La cellule en division est soulignée en vert.', size: 'normal' },
          { type: 'definition', term: 'Légende', text: 'nom d’une structure représentée, relié à elle par un trait de rappel (« Noyau », « Paroi »).' },
          { type: 'definition', term: 'Annotation', text: 'courte phrase ajoutée à une légende, qui décrit une observation ou explique un rôle. Exemple : « Chromosomes condensés : la cellule est en division ».' },
          {
            type: 'table',
            caption: 'Grille de vérification d’un dessin d’observation',
            head: ['Critère', 'Ce qui est attendu'],
            rows: [
              ['Fidélité', 'Formes, nombre et position des structures conformes à l’observation ; rien d’inventé.'],
              ['Taille et place', 'Au moins un tiers de page ; dessin à gauche, légendes à droite.'],
              ['Qualité du trait', 'Crayon à papier, traits fins, nets et continus ; ni ombres, ni hachures, ni couleur sauf consigne.'],
              ['Proportions', 'Rapports de taille respectés entre cellule, noyau et nucléole.'],
              ['Légendes', 'Mots exacts, orthographiés, écrits horizontalement et alignés.'],
              ['Traits de rappel', 'À la règle, parallèles, sans se croiser, touchant la structure désignée.'],
              ['Titre', 'Objet observé, technique, grossissement, coloration éventuelle.'],
              ['Échelle', 'Barre d’échelle calculée, avec sa valeur.'],
            ],
          },
          { type: 'warning', title: 'Ne dessine que ce que tu vois', text: 'Au microscope optique, à ×400, les mitochondries ou les ribosomes ne sont pas visibles : ils n’ont rien à faire sur un dessin d’observation, même si tu sais qu’ils existent. Leur place est dans un **schéma** d’organisation.' },
          {
            type: 'retenir',
            items: [
              'On observe d’abord, on choisit quelques cellules représentatives, puis on dessine grand, au crayon, sans ombres.',
              'Légendes alignées, traits de rappel à la règle sans croisement ; titre complet ; barre d’échelle.',
              'Une annotation ajoute une observation ou une explication à une légende.',
            ],
          },
        ],
      },

      {
        title: 'Le dessin anatomique : représenter un organe ou un appareil',
        intro: 'Le programme demande de savoir représenter par un dessin l’appareil digestif et les appareils reproducteurs.',
        blocks: [
          { type: 'p', text: 'Un **dessin anatomique** représente la disposition des organes d’un appareil, à partir d’une dissection, d’un modèle anatomique ou d’un cliché d’imagerie. Il se situe entre le dessin d’observation (il respecte les positions et les proportions) et le schéma (il simplifie les formes).' },
          {
            type: 'list',
            title: 'Les règles propres au dessin anatomique',
            ordered: true,
            items: [
              'Préciser la **vue** : de face (vue ventrale), de profil, en coupe.',
              'Préciser l’**orientation** : sur une vue de face, la droite du sujet est à gauche du lecteur. On l’indique par les mots « droite » et « gauche » du sujet, ou par une flèche d’orientation.',
              'Respecter les **positions relatives** : le foie est à droite du sujet sous le diaphragme, l’estomac à gauche, le pancréas derrière l’estomac.',
              'Montrer la **continuité** des conduits : le tube digestif est un tube continu de la bouche à l’anus, et les glandes annexes y sont reliées par leurs **canaux**.',
              'Utiliser des couleurs seulement si elles sont légendées (par exemple une couleur pour le tube digestif, une autre pour les glandes annexes).',
              'Titre, légendes alignées, traits de rappel à la règle, comme pour tout dessin.',
            ],
          },
          {
            type: 'compare',
            title: 'Ce que doit montrer le dessin de l’appareil digestif',
            columns: [
              { title: 'Le tube digestif', items: ['Bouche, pharynx, œsophage.', 'Estomac.', 'Intestin grêle (duodénum, puis jéjunum et iléon).', 'Gros intestin (côlon), rectum, anus.'] },
              { title: 'Les glandes annexes', items: ['Glandes salivaires et leurs canaux vers la bouche.', 'Foie et vésicule biliaire, canal cholédoque vers le duodénum.', 'Pancréas et canal pancréatique vers le duodénum.'] },
            ],
          },
          { type: 'note', title: 'La lumière du tube digestif', text: 'L’intérieur du tube digestif, appelé **lumière**, communique avec l’extérieur par la bouche et l’anus : c’est du milieu extérieur. Les glandes annexes, dites **exocrines**, déversent leurs sécrétions dans cette lumière par des canaux. Un bon dessin anatomique fait apparaître ces canaux.' },
          {
            type: 'retenir',
            items: [
              'Un dessin anatomique indique la vue et l’orientation (droite et gauche du sujet).',
              'Il respecte les positions relatives des organes et la continuité des conduits.',
              'Les glandes annexes sont reliées au tube digestif par leurs canaux.',
            ],
          },
        ],
      },

      {
        title: 'Du dessin au schéma : schématiser une cellule',
        intro: 'Le schéma d’organisation rassemble ce que l’on sait d’une structure, à partir de plusieurs observations.',
        blocks: [
          { type: 'p', text: 'Au microscope optique, une cellule animale montre surtout sa **membrane plasmique**, son **cytoplasme** et son **noyau**. Les électronographies révèlent en plus son **ultrastructure** : enveloppe nucléaire percée de pores, mitochondries, réticulum endoplasmique, appareil de Golgi, ribosomes, vésicules. Le schéma de la cellule eucaryote **réunit** ces observations en une représentation simplifiée.' },
          {
            type: 'table',
            caption: 'Ce que l’on représente sur le schéma d’une cellule eucaryote animale',
            head: ['Structure', 'Représentation conseillée', 'Observable au'],
            rows: [
              ['Membrane plasmique', 'Un trait fin continu qui limite la cellule', 'Microscope optique (limite) ; MET (structure)'],
              ['Noyau et enveloppe nucléaire', 'Double trait interrompu par des pores', 'Microscope optique (noyau) ; MET (enveloppe, pores)'],
              ['Nucléole', 'Zone arrondie plus sombre dans le noyau', 'Microscope optique et MET'],
              ['Mitochondrie', 'Ovale à double contour, membrane interne repliée en crêtes', 'MET'],
              ['Réticulum endoplasmique granuleux', 'Sacs aplatis parallèles, bordés de points (ribosomes)', 'MET'],
              ['Appareil de Golgi', 'Pile de saccules incurvés, entourée de petites vésicules', 'MET'],
              ['Vésicules de sécrétion', 'Petits cercles près de la membrane plasmique', 'MET'],
            ],
          },
          {
            type: 'list',
            title: 'Les règles du schéma d’organisation',
            items: [
              'Formes **régularisées** et simplifiées, mais **cohérentes** avec la réalité : on n’invente aucune structure.',
              'Proportions approximativement respectées (le noyau est le plus gros organite ; les ribosomes sont minuscules).',
              'Une même structure est toujours représentée par le même symbole.',
              'Couleurs autorisées, à condition d’être légendées.',
              'Titre (« Schéma de l’organisation d’une cellule eucaryote animale ») et légendes ; échelle absente, ou ordre de grandeur indiqué.',
            ],
          },
          {
            type: 'compare',
            title: 'Dessin ou schéma : la même cellule, deux représentations',
            columns: [
              { title: 'Dessin d’observation d’une cellule de racine', items: ['La cellule réellement observée, avec ses irrégularités.', 'Seulement paroi, cytoplasme, noyau, nucléole (visibles à ×400).', 'Barre d’échelle.'] },
              { title: 'Schéma d’une cellule végétale', items: ['Une cellule « type », régularisée.', 'Ajoute les organites connus grâce au MET : mitochondries, réticulum, appareil de Golgi, vacuole.', 'Pas d’échelle, ou ordre de grandeur indiqué.'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Le schéma d’organisation réunit des observations au microscope optique et au microscope électronique.',
              'Il simplifie les formes sans rien inventer et utilise des symboles constants.',
              'Couleurs et symboles sont légendés ; l’échelle est absente ou approximative.',
            ],
          },
        ],
      },

      {
        title: 'Construire un schéma fonctionnel',
        intro: 'Un schéma fonctionnel répond à la question « comment ça marche ? » : il montre qui agit sur qui, et par quel moyen.',
        blocks: [
          { type: 'definition', term: 'Schéma fonctionnel', text: 'représentation des **acteurs** d’un mécanisme biologique (organes, cellules, molécules) et de leurs **relations** (transport, action, activation, inhibition), à l’aide de cases et de flèches dont la signification est précisée dans une légende.' },
          { type: 'figure', image: IMG.hormone, caption: 'Schéma fonctionnel d’une communication hormonale : la glande endocrine (émetteur) libère une hormone (messager) transportée par le sang (voie de transmission) jusqu’aux cellules cibles, qui possèdent un récepteur spécifique et produisent une réponse.', size: 'wide' },
          {
            type: 'flow',
            title: 'Les acteurs d’une voie de communication hormonale',
            steps: [
              { title: 'Émetteur', text: 'cellules d’une glande endocrine' },
              { title: 'Messager', text: 'hormone sécrétée dans le sang' },
              { title: 'Voie de transmission', text: 'circulation sanguine' },
              { title: 'Récepteur', text: 'protéine spécifique de la cellule cible' },
              { title: 'Effecteur et réponse', text: 'modification de l’activité de la cellule cible' },
            ],
          },
          {
            type: 'table',
            caption: 'Un exemple de code de flèches (toujours à légender)',
            head: ['Symbole', 'Signification', 'Exemple'],
            rows: [
              ['Flèche pleine', 'Transport ou déplacement d’une molécule', 'Hormone transportée par le sang'],
              ['Flèche pleine marquée « + »', 'Stimulation (activation)', 'L’insuline stimule le stockage du glucose'],
              ['Flèche marquée « − »', 'Inhibition', 'La testostérone freine la sécrétion de LH'],
              ['Flèche en pointillés', 'Information ou contrôle (souvent un rétrocontrôle)', 'Retour d’information de la glycémie vers le pancréas'],
              ['Double flèche épaisse', 'Transformation', 'Glucose ⇒ glycogène'],
            ],
          },
          {
            type: 'steps',
            title: 'Construire un schéma fonctionnel à partir d’un texte',
            items: [
              { title: 'Repérer les acteurs', text: 'Souligne dans le texte les organes ou cellules (émetteur, cibles), les messagers (hormones) et les effets.' },
              { title: 'Ordonner', text: 'Range les acteurs dans l’ordre chronologique du mécanisme.' },
              { title: 'Placer les acteurs', text: 'Organes et cellules dans des cases ; messagers écrits sur les flèches ou dans des cases distinctes.' },
              { title: 'Relier', text: 'Trace les flèches selon ton code ; indique « + » ou « − » pour chaque action.' },
              { title: 'Fermer la boucle', text: 'S’il y a une régulation, représente le retour d’information (rétrocontrôle) jusqu’à l’émetteur.' },
              { title: 'Légender et titrer', text: 'Légende du code des flèches et des couleurs ; titre précis.' },
            ],
          },
          {
            type: 'flow',
            title: 'Exemple : boucle de régulation de la glycémie après un repas',
            steps: [
              { title: 'Hausse de la glycémie', text: 'après absorption intestinale du glucose' },
              { title: 'Pancréas (cellules β)', text: 'détectent la hausse : sécrétion d’insuline (+)' },
              { title: 'Insuline', text: 'transportée par le sang' },
              { title: 'Foie, muscles, tissu adipeux', text: 'entrée et stockage du glucose (+)' },
              { title: 'Baisse de la glycémie', text: 'retour vers la valeur de consigne (environ 1 g/L)' },
            ],
            caption: 'La baisse de la glycémie diminue en retour la sécrétion d’insuline : c’est un rétrocontrôle négatif, que l’on représente par une flèche de retour, de la glycémie vers le pancréas.',
          },
          {
            type: 'retenir',
            items: [
              'Un schéma fonctionnel montre les acteurs d’un mécanisme et leurs relations, pas leur aspect.',
              'Communication hormonale : émetteur (glande endocrine), messager (hormone), voie sanguine, récepteur de la cellule cible, réponse.',
              'Le code des flèches (transport, +, −, rétrocontrôle) est toujours légendé ; une régulation forme une boucle fermée.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Prévois une feuille blanche, un crayon HB bien taillé, une gomme et une règle. Réalise les représentations dans ton cahier, puis compare-les aux corrections et à la grille de vérification de la partie 2.',
    activities: [
      {
        title: 'Critiquer un dessin d’observation',
        duration: '15 min',
        skills: ['Évaluer', 'Corriger'],
        context: 'Léa a dessiné des cellules de racine d’oignon observées au microscope. Son professeur a décrit son travail dans le document ci-dessous.',
        documents: [
          {
            label: 'Document 1',
            title: 'Description du dessin de Léa',
            blocks: [
              {
                type: 'list',
                items: [
                  'Le dessin occupe un huitième de la page, au centre.',
                  'Léa a dessiné tout le cercle du champ du microscope, avec une trentaine de cellules.',
                  'Les noyaux sont coloriés en violet et ombrés au crayon.',
                  'Elle a ajouté des mitochondries dans chaque cellule « parce qu’il y en a toujours ».',
                  'Les légendes sont écrites en biais, autour du dessin ; deux traits de rappel se croisent.',
                  'Titre : « Oignon ».',
                  'Aucune échelle.',
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Relève au moins six défauts du dessin de Léa en t’appuyant sur la grille de vérification.', answer: 'Dessin trop petit ; cercle du champ et trop de cellules dessinés ; couleur et ombres ; structures inventées (mitochondries non visibles au microscope optique) ; légendes en biais et non alignées ; traits de rappel qui se croisent ; titre incomplet ; absence d’échelle.' },
          { text: 'Pourquoi le défaut « mitochondries ajoutées » est-il le plus grave sur le plan scientifique ?', answer: 'Parce qu’il rend le dessin infidèle : il représente ce que Léa sait et non ce qu’elle voit. Un dessin d’observation est une preuve ; il ne doit contenir que des structures réellement observées.' },
          { text: 'Rédige un titre complet pour le dessin de Léa.', hint: 'Quoi ? Avec quelle technique ? À quel grossissement ? Après quelle coloration ?', answer: '« Cellules du méristème de racine d’oignon (Allium cepa) observées au microscope optique (×400) après coloration ».' },
          { text: 'Propose à Léa trois conseils concrets pour refaire son dessin.', answer: 'Choisir trois ou quatre cellules nettes, dont une en division, et les dessiner sur au moins un tiers de page ; tracer des contours nets au crayon sans ombre ni couleur, en ne dessinant que les structures visibles ; aligner les légendes à droite avec des traits de rappel horizontaux à la règle, puis ajouter le titre complet et une barre d’échelle.' },
        ],
      },
      {
        title: 'Réaliser le dessin d’observation d’un méristème',
        duration: '35 min',
        skills: ['Observer', 'Représenter', 'Calculer'],
        context: 'Tu disposes de la microphotographie d’un méristème de racine d’oignon. Tu dois en réaliser le dessin d’observation complet.',
        documents: [
          { label: 'Document 2', title: 'Méristème de racine d’oignon (microscope optique, ×400)', image: IMG.racine, caption: 'Pour l’exercice, on admet que la largeur totale de la photographie correspond à 90 µm.', credit: 'Natalierussell77 — CC BY-SA 4.0 (Wikimedia Commons)' },
        ],
        questions: [
          { text: 'Choisis les cellules à dessiner et justifie ton choix.', answer: 'On choisit trois ou quatre cellules nettes et voisines, dont la cellule en division (en haut, chromosomes condensés) et des cellules en interphase avec un noyau et un nucléole bien visibles : elles sont représentatives de la préparation et permettent de comparer les deux états.' },
          { text: 'Réalise le dessin et légende-le avec : paroi, cytoplasme, noyau, nucléole, chromosomes.', hint: 'Compare ensuite ton dessin au modèle de la partie 2.', answer: 'Le dessin occupe au moins un tiers de page ; contours nets au crayon ; noyau d’environ la moitié de la largeur de la cellule ; chromosomes représentés par de petits bâtonnets dans la cellule en division ; légendes alignées à droite, traits de rappel horizontaux à la règle, sans croisement (voir le modèle de la partie 2).' },
          { text: 'Ajoute une annotation à la légende « Chromosomes ».', answer: 'Exemple : « Chromosomes condensés, visibles sous forme de bâtonnets : la cellule est en division (mitose) ».' },
          { text: 'Sur la photographie imprimée en 14 cm de large, une cellule mesure 2,5 cm de large. Calcule sa largeur réelle.', hint: '14 cm de photographie représentent 90 µm.', answer: 'Largeur réelle = (2,5 ÷ 14) × 90 ≈ 16 µm.' },
          { text: 'Sur ton dessin, cette cellule mesure 8 cm. Calcule l’agrandissement du dessin et la longueur d’une barre d’échelle de 10 µm.', answer: '8 cm = 80 000 µm ; agrandissement = 80 000 ÷ 16 = ×5 000. Barre de 10 µm : 10 × 5 000 = 50 000 µm = 5 cm.' },
          { text: 'Rédige le titre complet de ton dessin.', answer: '« Cellules du méristème de racine d’oignon (Allium cepa), dont une en division, observées au microscope optique (×400) après coloration ».' },
        ],
      },
      {
        title: 'Construire un schéma fonctionnel : l’axe gonadotrope masculin',
        duration: '30 min',
        skills: ['Extraire', 'Schématiser'],
        context: 'Le programme demande d’expliquer, à partir de schémas fonctionnels, la régulation des hormones de la reproduction. Tu vas construire ce schéma à partir d’un texte.',
        documents: [
          {
            label: 'Document 3',
            title: 'Le contrôle hormonal de la production de testostérone',
            text: [
              'L’hypothalamus, situé à la base du cerveau, sécrète une neurohormone, la GnRH, qui gagne l’hypophyse par le sang. La GnRH stimule la sécrétion de deux hormones hypophysaires, la LH et la FSH, qui sont libérées dans la circulation générale.',
              'Dans les testicules, la LH stimule les cellules de Leydig, qui sécrètent la testostérone. Celle-ci est transportée par le sang jusqu’à ses cellules cibles : elle permet la production des spermatozoïdes et le maintien des caractères sexuels secondaires.',
              'Lorsque la concentration de testostérone dans le sang augmente, elle freine la sécrétion de GnRH par l’hypothalamus et celle de LH par l’hypophyse. Lorsqu’elle diminue, ce frein se relâche.',
            ],
            source: 'Texte de synthèse simplifié',
          },
        ],
        questions: [
          { text: 'Relève les acteurs (organes, cellules) et les messagers (hormones) cités dans le texte.', answer: 'Acteurs : hypothalamus, hypophyse, testicules (cellules de Leydig), cellules cibles de la testostérone. Messagers : GnRH, LH, FSH, testostérone.' },
          { text: 'Construis le schéma fonctionnel de l’axe hypothalamo-hypophyso-testiculaire, avec un code de flèches légendé.', hint: 'Place les organes de haut en bas : hypothalamus, hypophyse, testicule, cellules cibles.', answer: ['Cases de haut en bas : hypothalamus → hypophyse → testicule (cellules de Leydig) → cellules cibles (spermatogenèse, caractères sexuels secondaires).', 'Flèches descendantes marquées « + » : GnRH (hypothalamus → hypophyse), LH (hypophyse → cellules de Leydig), testostérone (testicule → cellules cibles).', 'Deux flèches de retour marquées « − » partant de la testostérone : vers l’hypophyse et vers l’hypothalamus.', 'Légende : flèche pleine + = stimulation par une hormone transportée par le sang ; flèche − = inhibition (rétrocontrôle). Titre : « Schéma fonctionnel de la régulation de la sécrétion de testostérone ».'] },
          { text: 'Quel type de rétrocontrôle exerce la testostérone ? Justifie.', answer: 'Un rétrocontrôle négatif : une hausse de la testostérone freine les sécrétions de GnRH et de LH, ce qui diminue en retour la production de testostérone. Le système tend à maintenir la testostérone à une valeur stable.' },
          { text: 'Prévois, à l’aide de ton schéma, l’effet d’une ablation des testicules sur la concentration sanguine de LH. Justifie.', answer: 'Sans testicules, il n’y a plus de testostérone, donc plus de rétrocontrôle négatif : l’hypothalamus et l’hypophyse ne sont plus freinés et la concentration de LH augmente.' },
        ],
      },
      {
        title: 'Schématiser une cellule sécrétrice à partir d’observations',
        duration: '30 min',
        skills: ['Schématiser', 'Relier structure et fonction'],
        context: 'Les cellules exocrines du pancréas fabriquent et sécrètent les enzymes digestives du suc pancréatique. Un élève a relevé ses observations sur des électronographies de ces cellules.',
        documents: [
          {
            label: 'Document 4',
            title: 'Observations au microscope électronique à transmission',
            blocks: [
              {
                type: 'list',
                items: [
                  'Cellule de forme pyramidale, d’environ 15 µm de haut ; son pôle apical borde la lumière d’un canal.',
                  'Gros noyau arrondi en position basale, entouré d’une double membrane percée de pores ; un nucléole.',
                  'Réticulum endoplasmique granuleux très abondant, en sacs parallèles, dans la partie basale.',
                  'Appareil de Golgi au-dessus du noyau.',
                  'Nombreuses vésicules sombres (grains de sécrétion) dans la partie apicale.',
                  'Mitochondries réparties dans le cytoplasme.',
                ],
              },
            ],
            source: 'Observations décrites pour l’exercice',
          },
        ],
        questions: [
          { text: 'Quel type de représentation faut-il réaliser ici ? Justifie.', answer: 'Un schéma d’organisation : il s’agit de représenter de façon simplifiée l’organisation d’une cellule à partir d’observations de microscopie électronique, et non de reproduire fidèlement une image précise.' },
          { text: 'Réalise le schéma de cette cellule en respectant les positions des organites (pôle basal en bas, pôle apical en haut).', hint: 'Commence par le contour, puis le noyau en bas, le réticulum autour, le Golgi au-dessus, les vésicules en haut.', answer: 'Contour pyramidal avec le pôle apical en haut, bordant la lumière ; noyau à double contour percé de pores et nucléole dans la partie basale ; sacs parallèles bordés de points (réticulum granuleux) autour du noyau ; pile de saccules incurvés (Golgi) au-dessus du noyau ; nombreux petits cercles sombres (grains de sécrétion) au pôle apical, certains s’ouvrant dans la lumière ; quelques mitochondries ovales à crêtes. Légendes alignées, titre : « Schéma de l’organisation d’une cellule exocrine du pancréas ».' },
          { text: 'Ajoute deux annotations qui relient une structure à la fonction de la cellule.', answer: 'Exemples : « Réticulum endoplasmique granuleux très développé : synthèse abondante de protéines (enzymes digestives) » ; « Grains de sécrétion au pôle apical : libération des enzymes dans la lumière par exocytose ».' },
          { text: 'Faut-il placer une barre d’échelle sur ce schéma ? Justifie.', answer: 'Non, ou seulement une indication d’ordre de grandeur (« cellule d’environ 15 µm de haut ») : un schéma d’organisation simplifie les formes et ne respecte les proportions qu’approximativement.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Dessin d’observation (fidèle, à l’échelle), schéma d’organisation (simplifié, interprété) et schéma fonctionnel (acteurs et relations) répondent à des consignes différentes.',
      'Un dessin d’observation représente seulement ce qui est vu : quelques éléments représentatifs, dessinés grand, au crayon, sans ombres.',
      'Toute représentation porte un titre complet et des légendes alignées, reliées par des traits de rappel à la règle qui ne se croisent pas.',
      'Une annotation ajoute une observation ou une explication à une légende ; une barre d’échelle complète le dessin d’observation.',
      'Un dessin anatomique précise la vue et l’orientation, respecte les positions relatives et montre la continuité des conduits.',
      'Le schéma d’une cellule eucaryote réunit des observations au microscope optique et au microscope électronique, sans rien inventer.',
      'Un schéma fonctionnel montre émetteur, messager, voie de transmission, récepteur et réponse, avec un code de flèches (+, −, rétrocontrôle) toujours légendé.',
    ],
    method: {
      title: 'Réaliser un dessin d’observation',
      steps: [
        'Observer la préparation et choisir quelques éléments **représentatifs**.',
        'Tracer les contours au crayon, en grand, à gauche de la feuille, en respectant les **proportions**.',
        'Ajouter uniquement les structures **visibles**, sans ombres ni hachures.',
        'Légender à droite : traits de rappel à la règle, horizontaux, sans croisement ; légendes alignées.',
        'Ajouter les **annotations** utiles.',
        'Écrire le **titre complet** et tracer la **barre d’échelle** calculée.',
      ],
    },
    vocabulary: [
      { term: 'Dessin d’observation', definition: 'Représentation fidèle d’un objet réellement observé, à l’échelle.' },
      { term: 'Schéma d’organisation', definition: 'Représentation simplifiée et interprétée de l’organisation d’une structure.' },
      { term: 'Schéma fonctionnel', definition: 'Représentation des acteurs d’un mécanisme et de leurs relations par des cases et des flèches codées.' },
      { term: 'Dessin anatomique', definition: 'Représentation de la disposition des organes d’un appareil, avec sa vue et son orientation.' },
      { term: 'Légende', definition: 'Nom d’une structure, relié à elle par un trait de rappel.' },
      { term: 'Annotation', definition: 'Courte phrase qui complète une légende par une observation ou une explication.' },
      { term: 'Trait de rappel', definition: 'Trait tracé à la règle qui relie une légende à la structure désignée.' },
      { term: 'Méristème', definition: 'Zone d’une plante où les cellules se divisent activement, par exemple à l’extrémité des racines.' },
      { term: 'Émetteur', definition: 'Cellule ou organe qui produit et libère le messager d’une communication.' },
      { term: 'Récepteur', definition: 'Protéine de la cellule cible qui fixe spécifiquement un messager.' },
      { term: 'Rétrocontrôle', definition: 'Action en retour du résultat d’un mécanisme sur son point de départ ; négatif s’il le freine, positif s’il l’amplifie.' },
      { term: 'Lumière', definition: 'Espace intérieur d’un organe creux, comme le tube digestif, en continuité avec le milieu extérieur.' },
    ],
    mistakes: [
      { wrong: 'Dessiner ce que l’on sait au lieu de ce que l’on voit (mitochondries à ×400).', right: 'Sur un dessin d’observation, ne représenter que les structures visibles.' },
      { wrong: 'Ombrer, hachurer ou colorier un dessin d’observation.', right: 'Utiliser des traits nets et continus au crayon, sans ombres, sans couleur sauf consigne.' },
      { wrong: 'Écrire « Oignon » comme titre.', right: 'Donner un titre complet : objet, technique, grossissement, coloration.' },
      { wrong: 'Tracer des flèches dans un schéma fonctionnel sans en expliquer le sens.', right: 'Légender le code des flèches (transport, stimulation, inhibition, rétrocontrôle).' },
      { wrong: 'Placer le foie à droite du lecteur sur une vue de face.', right: 'Sur une vue de face, la droite du sujet est à la gauche du lecteur.' },
      { wrong: 'Oublier de fermer la boucle dans un schéma de régulation.', right: 'Représenter le rétrocontrôle qui revient vers l’émetteur.' },
    ],
    quiz: [
      { question: 'La consigne « Schématise une cellule eucaryote avec ses organites » attend :', choices: ['Un dessin d’observation', 'Un schéma d’organisation', 'Un graphique', 'Une photographie légendée'], answer: 1, explanation: 'On représente de façon simplifiée l’organisation d’une cellule, à partir de plusieurs observations.' },
      { question: 'Sur un dessin d’observation au microscope optique à ×400, on représente :', choices: ['Toutes les structures connues de la cellule', 'Uniquement les structures visibles', 'Les mitochondries et les ribosomes', 'Le cercle du champ du microscope'], answer: 1, explanation: 'Le dessin d’observation est fidèle : il ne montre que ce qui est réellement vu.' },
      { question: 'Les traits de rappel d’un dessin doivent être :', choices: ['Tracés à main levée', 'Tracés à la règle, sans se croiser', 'Fléchés', 'De couleurs différentes'], answer: 1, explanation: 'Traits de rappel à la règle, horizontaux si possible, qui ne se croisent pas.' },
      { question: 'Quelle phrase est une annotation ?', choices: ['« Noyau »', '« Paroi »', '« Chromosomes condensés : cellule en division »', '« Cytoplasme »'], answer: 2, explanation: 'Une annotation ajoute une observation ou une explication à une légende.' },
      { question: 'Sur un dessin anatomique en vue de face, la droite du sujet est :', choices: ['À droite du lecteur', 'À gauche du lecteur', 'En haut', 'Non indiquée'], answer: 1, explanation: 'Le sujet fait face au lecteur : sa droite est à la gauche du lecteur.' },
      { question: 'Dans une communication hormonale, le messager est :', choices: ['La glande endocrine', 'Le sang', 'L’hormone', 'Le récepteur'], answer: 2, explanation: 'L’hormone est le messager ; la glande est l’émetteur, le sang la voie de transmission.' },
      { question: 'Une hausse de testostérone qui freine la sécrétion de LH est un exemple de :', choices: ['Rétrocontrôle positif', 'Rétrocontrôle négatif', 'Stimulation', 'Transport'], answer: 1, explanation: 'Le produit freine sa propre production : c’est un rétrocontrôle négatif.' },
      { question: 'Un schéma fonctionnel doit toujours comporter :', choices: ['Une barre d’échelle', 'Une légende du code des flèches', 'Des ombres', 'Une photographie'], answer: 1, explanation: 'Sans légende, la signification des flèches (transport, +, −) est ambiguë.' },
    ],
    exercises: [
      {
        title: 'Choisir la représentation',
        statement: 'Pour chaque situation, indique la représentation adaptée et un élément indispensable : a) montrer au professeur ce que tu as observé sur une coupe d’intestin ; b) expliquer comment l’insuline fait baisser la glycémie ; c) situer le pancréas par rapport à l’estomac et au duodénum.',
        answer: [
          'a) Dessin d’observation : fidélité, titre complet, barre d’échelle.',
          'b) Schéma fonctionnel : acteurs (pancréas, insuline, sang, foie, muscles), flèches codées et légendées, rétrocontrôle.',
          'c) Dessin anatomique : vue de face et orientation (droite et gauche du sujet), positions relatives, canal pancréatique débouchant dans le duodénum.',
        ],
      },
      {
        title: 'Du texte au schéma fonctionnel',
        statement: 'Texte : « Quand la glycémie baisse (jeûne, effort), les cellules α des îlots du pancréas sécrètent du glucagon. Transporté par le sang, le glucagon stimule, dans le foie, la libération de glucose à partir du glycogène. La glycémie remonte, ce qui freine la sécrétion de glucagon. » Décris le schéma fonctionnel correspondant.',
        answer: 'Baisse de la glycémie → cellules α du pancréas (détection) → sécrétion de glucagon (+) → transport sanguin → foie : glycogène ⇒ glucose, libéré dans le sang (+) → hausse de la glycémie → flèche de retour marquée « − » vers les cellules α (rétrocontrôle négatif). Légende du code des flèches ; titre : « Schéma fonctionnel de la correction d’une hypoglycémie par le glucagon ».',
      },
      {
        title: 'Calculer l’échelle d’un dessin',
        statement: 'Une levure de 8 µm mesure 4 cm sur ton dessin d’observation. Calcule l’agrandissement du dessin et la longueur de la barre d’échelle représentant 5 µm.',
        answer: '4 cm = 40 000 µm ; agrandissement = 40 000 ÷ 8 = ×5 000. Barre de 5 µm : 5 × 5 000 = 25 000 µm = 2,5 cm.',
      },
    ],
    selfCheck: [
      'Je sais choisir entre dessin d’observation, schéma d’organisation et schéma fonctionnel selon la consigne.',
      'Je sais réaliser un dessin d’observation fidèle, sans ombres, avec des proportions respectées.',
      'Je sais légender, annoter, titrer et mettre une échelle.',
      'Je sais représenter un appareil par un dessin anatomique orienté.',
      'Je sais schématiser une cellule eucaryote à partir d’observations.',
      'Je sais construire un schéma fonctionnel à partir d’un texte, avec un code de flèches légendé.',
      'Je sais représenter une boucle de régulation avec son rétrocontrôle.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Mitose — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Mitose' },
      { title: 'Système endocrinien — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Syst%C3%A8me_endocrinien' },
      { title: 'Fichier : Mitosis in Onion Root various stages (Metaphase) — Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Mitosis_in_Onion_Root_various_stages_(Metaphase).jpg' },
    ],
  },
};

export default lesson;
