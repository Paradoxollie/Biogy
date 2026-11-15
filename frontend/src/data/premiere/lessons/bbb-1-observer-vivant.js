import { img } from '../media';
import niveaux from '../../../assets/courses/premiere/bbb-1-observer-vivant/niveaux.webp';
import celluleAnimale from '../../../assets/courses/premiere/bbb-1-observer-vivant/cellule-animale.webp';
import celluleVegetale from '../../../assets/courses/premiere/bbb-1-observer-vivant/cellule-vegetale.webp';
import metAcineuse from '../../../assets/courses/premiere/bbb-1-observer-vivant/met-acineuse.webp';
import epithelium from '../../../assets/courses/premiere/bbb-1-observer-vivant/epithelium.webp';
import radiographie from '../../../assets/courses/premiere/bbb-1-observer-vivant/radiographie.webp';
import villosites from '../../../assets/courses/open/intestinal-villi-microscope.webp';

const IMG = {
  niveaux: img(niveaux, 'Schéma des niveaux d’organisation emboîtés : organisme, appareil digestif, organe (intestin grêle), tissu épithélial, cellule, organite (noyau), molécule (ADN).', 'schema', 1400, 933),
  celluleAnimale: img(celluleAnimale, 'Schéma de l’ultrastructure d’une cellule animale sécrétrice : membrane plasmique, cytoplasme, noyau, nucléole, enveloppe nucléaire, pore nucléaire, réticulum endoplasmique rugueux, ribosomes, appareil de Golgi, vésicule de sécrétion, mitochondrie.', 'schema', 1400, 933),
  celluleVegetale: img(celluleVegetale, 'Schéma d’une cellule végétale chlorophyllienne : paroi, membrane plasmique, cytoplasme, noyau, grande vacuole, chloroplastes, mitochondries.', 'schema', 1400, 933),
  met: img(metAcineuse, 'Cliché de microscopie électronique à transmission, en noir et blanc, d’une cellule acineuse du pancréas : noyau avec nucléole et enveloppe nucléaire, nombreuses citernes de réticulum endoplasmique rugueux, appareil de Golgi, mitochondries et gros grains de sécrétion très sombres.', 'micro', 1536, 1024),
  epithelium: img(epithelium, 'Schéma de l’épithélium intestinal : entérocytes jointifs avec microvillosités au pôle apical, jonctions serrées, noyau, membrane basale et capillaire sanguin sous l’épithélium.', 'schema', 1400, 933),
  radiographie: img(radiographie, 'Radiographie d’une main et d’un poignet posée sur un négatoscope : os blancs, tissus mous gris pâle, fond noir.', 'photo', 1024, 1536),
  villosites: img(villosites, 'Coupe transversale d’intestin grêle colorée observée au microscope optique : nombreuses villosités rayonnant autour de la lumière intestinale.', 'micro', 1400, 1866),
};

const lesson = {
  version: 2,
  id: 'bbb-1-observer-vivant',
  duration: 'Environ 4 séances (cours, observations et analyse de documents)',
  hook: {
    image: IMG.niveaux,
    question: 'Entre ton corps (1,7 m) et une molécule d’ADN (2 nm de large), il y a un facteur de près d’un milliard. Comment observer chaque niveau du vivant avec le bon outil ?',
    text: 'Un organisme est formé d’appareils, d’organes, de tissus et de cellules, elles-mêmes remplies d’organites. Chaque niveau a sa taille, son outil d’observation et son lien avec une fonction. Dans ce chapitre, tu apprends à changer d’échelle, à lire un cliché de microscopie électronique, à schématiser une cellule et à expliquer pourquoi la forme d’un tissu ou d’un organite est adaptée à ce qu’il fait.',
  },
  objectives: [
    'Situer un objet biologique dans les niveaux d’organisation du vivant et estimer son ordre de grandeur.',
    'Associer un type de microscope à la taille de la structure observée et calculer une taille réelle.',
    'Expliquer comment les organes d’un appareil coopèrent pour assurer une fonction.',
    'Schématiser une cellule eucaryote animale et végétale avec ses organites.',
    'Expliquer le rôle du noyau, du réticulum endoplasmique et de l’appareil de Golgi à partir de leurs membranes.',
    'Relier la structure d’un tissu épithélial à la fonction de l’organe, et choisir une technique d’imagerie médicale adaptée au tissu observé.',
  ],
  prerequisites: [
    'Utiliser le microscope optique, calculer un grossissement et une taille réelle : chapitre de biotechnologies « Observer la diversité du vivant à l’échelle microscopique ».',
    'Les unités de longueur : 1 mm = 1 000 µm et 1 µm = 1 000 nm.',
    'La membrane plasmique est une bicouche de phospholipides associée à des protéines (module A, « Membranes biologiques »).',
  ],
  program: [
    'Estimer l’ordre de grandeur des objets d’étude à l’échelle microscopique ; associer un type de microscope à la taille de la structure observée (B1).',
    'Expliquer la contribution du rôle des organes à la fonction d’un appareil (B2).',
    'Expliquer le lien entre la structure d’un tissu épithélial et la fonction de l’organe (B3).',
    'Schématiser une cellule eucaryote avec ses organites (B4).',
    'Décrire le rôle du réticulum endoplasmique et de l’appareil de Golgi en lien avec leurs structures membranaires (B5).',
    'Expliquer le rôle du noyau dans la protection du matériel génétique (B6).',
    'Relier le choix d’une technologie d’imagerie médicale à la nature du tissu observé ; différencier sur une radiographie les os des tissus mous (B7).',
  ],

  course: {
    parts: [
      {
        title: 'Les niveaux d’organisation du vivant',
        intro: 'Le vivant s’étudie à plusieurs échelles emboîtées, comme des poupées russes : chaque niveau est construit à partir du niveau inférieur.',
        blocks: [
          { type: 'p', text: 'Un **organisme** comprend des **appareils** (ou systèmes) ; chaque appareil est formé d’**organes** ; chaque organe associe plusieurs **tissus** ; chaque tissu est un ensemble de **cellules** ; chaque cellule eucaryote contient des **organites**, eux-mêmes construits à partir de **molécules** (protéines, lipides, ADN…).' },
          { type: 'figure', image: IMG.niveaux, caption: 'Les niveaux d’organisation emboîtés, de l’organisme à la molécule, sur l’exemple de l’appareil digestif. En vert : la partie agrandie dans le dessin suivant.', size: 'wide' },
          { type: 'definition', term: 'Appareil', text: 'ensemble d’organes reliés entre eux qui coopèrent pour assurer une même grande fonction (digestion, excrétion, reproduction…).' },
          { type: 'definition', term: 'Organe', text: 'partie du corps délimitée, formée de plusieurs tissus, qui assure une ou plusieurs fonctions précises (estomac, foie, rein, testicule…).' },
          { type: 'definition', term: 'Tissu', text: 'ensemble de cellules semblables, et du milieu qui les entoure, qui réalisent ensemble une même fonction (tissu épithélial, musculaire, nerveux, conjonctif).' },
          {
            type: 'table',
            caption: 'Ordres de grandeur et outils d’observation',
            head: ['Niveau', 'Exemple', 'Ordre de grandeur', 'Outil d’observation'],
            rows: [
              ['Organisme', 'Être humain', '≈ 1,7 m', 'Œil nu'],
              ['Appareil', 'Appareil digestif', 'Quelques dizaines de cm (tronc)', 'Œil nu, imagerie médicale'],
              ['Organe', 'Intestin grêle (diamètre)', '≈ 3 cm', 'Œil nu, imagerie médicale'],
              ['Tissu', 'Villosité intestinale', '0,5 à 1 mm de haut', 'Loupe, microscope optique (coupe)'],
              ['Cellule', 'Entérocyte (cellule de l’intestin)', '≈ 20 µm de haut', 'Microscope optique'],
              ['Organite', 'Noyau ; mitochondrie ; ribosome', '5 à 10 µm ; 1 à 2 µm ; ≈ 25 nm', 'Microscope optique (noyau) ; microscope électronique (détails)'],
              ['Molécule', 'Protéine ; ADN (diamètre)', '≈ 5 nm ; 2 nm', 'Microscope électronique, techniques biochimiques'],
            ],
          },
          { type: 'p', text: 'Quand on « descend » d’un niveau, la taille est souvent divisée par 10 à 1 000. C’est pourquoi **chaque niveau a son outil** : l’œil, la loupe, le microscope optique, puis le microscope électronique.' },
          { type: 'p', text: 'Les organes d’un appareil ne travaillent pas isolément. Ils sont reliés par des **liens anatomiques** : conduits (canaux), continuité du tube, vaisseaux sanguins. Prenons l’**appareil digestif**, dont la fonction est de transformer les aliments en nutriments et de les faire passer dans le sang.' },
          {
            type: 'table',
            caption: 'La coopération des organes de l’appareil digestif',
            head: ['Organe', 'Rôle dans la fonction digestive', 'Lien anatomique'],
            rows: [
              ['Bouche', 'Mastication (digestion mécanique), salive qui commence la digestion de l’amidon', 'Début du tube digestif'],
              ['Œsophage', 'Transport du bol alimentaire par des contractions (péristaltisme)', 'Relie la bouche à l’estomac'],
              ['Estomac', 'Brassage ; suc gastrique acide qui commence la digestion des protéines', 'Se vide dans l’intestin grêle'],
              ['Foie et vésicule biliaire', 'Production et stockage de la **bile**, qui émulsionne les lipides', 'Canal cholédoque qui débouche dans le duodénum'],
              ['Pancréas', 'Suc pancréatique riche en enzymes digestives', 'Canal pancréatique qui débouche dans le duodénum'],
              ['Intestin grêle', 'Fin de la digestion et **absorption** des nutriments vers le sang et la lymphe', 'Veine porte hépatique vers le foie'],
              ['Gros intestin', 'Réabsorption d’eau, action du microbiote, formation des selles', 'Fin du tube digestif'],
            ],
          },
          { type: 'example', title: 'une coopération indispensable', text: 'Sans la bile du foie, les lipides restent en grosses gouttes et les enzymes du pancréas les digèrent mal : une partie des graisses est perdue dans les selles. Une fonction d’appareil dépend donc de **plusieurs organes** et des **conduits** qui les relient.' },
          { type: 'note', title: 'L’intérieur du tube est… à l’extérieur', text: 'La **lumière** du tube digestif (l’espace où circulent les aliments) communique avec l’extérieur par la bouche et l’anus : c’est le **milieu extérieur**. Un nutriment n’est vraiment « entré » dans l’organisme que lorsqu’il a traversé la paroi de l’intestin et rejoint le sang ou la lymphe.' },
          {
            type: 'retenir',
            items: [
              'Organisme → appareils → organes → tissus → cellules → organites → molécules.',
              'Chaque niveau a son ordre de grandeur : m, cm, mm, µm, nm.',
              'La fonction d’un appareil résulte de la coopération de ses organes, reliés par des liens anatomiques (conduits, vaisseaux).',
            ],
          },
        ],
      },

      {
        title: 'Choisir le bon microscope selon la taille de la structure',
        intro: 'Pour voir un détail, il ne suffit pas de grossir : il faut pouvoir distinguer séparément deux points très proches.',
        blocks: [
          { type: 'p', text: 'La démarche d’utilisation du microscope optique, la préparation des lames et le dessin d’observation sont étudiés dans le chapitre de biotechnologies « Observer la diversité du vivant à l’échelle microscopique ». Ici, on apprend à **choisir l’outil** en fonction de la taille de ce que l’on veut voir.' },
          { type: 'definition', term: 'Limite de résolution', text: 'plus petite distance entre deux points que l’instrument permet encore de voir séparés. Plus elle est **petite**, plus l’image est **détaillée**. Elle vaut environ 0,1 mm pour l’œil, 0,2 µm pour le microscope optique et quelques nanomètres (voire moins) pour le microscope électronique.' },
          { type: 'note', title: 'Le « grossissement vide »', text: 'Agrandir davantage une photo de microscope optique ne fait pas apparaître de nouveaux détails : l’image devient seulement plus grande et plus floue. Pour voir les membranes des organites (≈ 7,5 nm d’épaisseur), il faut changer d’instrument.' },
          {
            type: 'compare',
            title: 'Trois microscopes, trois usages',
            columns: [
              { title: 'Microscope optique', subtitle: 'ou photonique', items: ['Utilise la **lumière** et des lentilles en verre.', 'Grossissement jusqu’à ×1 000 environ ; limite de résolution ≈ 0,2 µm.', 'Cellules vivantes (état frais) ou coupes colorées : images **en couleurs**.', 'Montre les cellules, le noyau, les tissus.'] },
              { title: 'Microscope électronique à transmission', subtitle: 'MET', items: ['Un faisceau d’**électrons** traverse une coupe ultrafine (≈ 70 nm).', 'Grossissement jusqu’à plusieurs centaines de milliers de fois.', 'Échantillon mort, fixé, placé sous vide : images **en noir et blanc**.', 'Montre l’**intérieur** des cellules : l’ultrastructure.'] },
              { title: 'Microscope électronique à balayage', subtitle: 'MEB', items: ['Les électrons balaient la **surface** de l’échantillon recouvert d’une fine couche de métal.', 'Images en **relief**, noir et blanc (couleurs parfois ajoutées par ordinateur).', 'Montre la forme et la surface des cellules (microvillosités, cils…).'] },
            ],
          },
          { type: 'definition', term: 'Ultrastructure', text: 'organisation interne d’une cellule visible seulement au microscope électronique : membranes des organites, ribosomes, crêtes des mitochondries, pores nucléaires…' },
          { type: 'definition', term: 'Structure dense (ou opaque) aux électrons', text: 'en MET, une structure riche en atomes lourds (apportés par les « contrastants » comme l’osmium ou le plomb) arrête les électrons et apparaît **sombre** sur le cliché. Les zones qui laissent passer les électrons apparaissent **claires**.' },
          {
            type: 'table',
            caption: 'Quel microscope pour quelle structure ?',
            head: ['Structure', 'Taille', 'Microscope adapté'],
            rows: [
              ['Cellule animale', '10 à 30 µm', 'Optique'],
              ['Cellule végétale', '20 à 100 µm', 'Optique'],
              ['Noyau', '5 à 10 µm', 'Optique (détails : électronique)'],
              ['Mitochondrie, chloroplaste', '1 à 10 µm', 'Optique à fort grossissement (simple point ou bâtonnet) ; électronique pour les membranes internes'],
              ['Réticulum endoplasmique, appareil de Golgi', 'Membranes de ≈ 7,5 nm', 'Électronique uniquement'],
              ['Ribosome', '≈ 25 nm', 'Électronique uniquement'],
              ['Virus', '20 à 300 nm', 'Électronique uniquement'],
            ],
          },
          { type: 'definition', term: 'Agrandissement (ou grandissement)', text: 'rapport entre la taille d’un objet sur l’image (photo, cliché imprimé, dessin) et sa taille réelle. À ne pas confondre avec le **grossissement**, qui caractérise le réglage du microscope (oculaire × objectif).' },
          {
            type: 'formula',
            title: 'Calculer une taille réelle',
            expression: 'taille réelle = taille mesurée sur l’image ÷ agrandissement',
            legend: [
              { symbol: 'taille mesurée', meaning: 'mesurée à la règle sur l’image, puis convertie dans l’unité voulue (1 cm = 10 000 µm)' },
              { symbol: 'agrandissement', meaning: 'indiqué sous le cliché (ex. ×20 000), ou calculé à partir de la barre d’échelle' },
            ],
          },
          { type: 'example', title: 'une mitochondrie en MET', text: 'Sur un cliché agrandi ×20 000, une mitochondrie mesure 3 cm. 3 cm = 30 000 µm, donc taille réelle = 30 000 ÷ 20 000 = **1,5 µm**. Cette valeur est cohérente avec la taille d’une mitochondrie (1 à 2 µm).' },
          { type: 'warning', title: 'Méfie-toi des clichés imprimés', text: 'Un cliché peut être agrandi ou réduit à l’impression ou à l’écran : l’agrandissement indiqué n’est alors plus valable. La **barre d’échelle**, elle, est agrandie en même temps que l’image : c’est la référence la plus fiable.' },
          {
            type: 'retenir',
            items: [
              'Le choix du microscope dépend de la taille de la structure : optique jusqu’à ≈ 0,2 µm, électronique en dessous.',
              'Un cliché de MET est en noir et blanc, montre l’intérieur des cellules et porte une échelle en nm ou en µm.',
              'Taille réelle = taille sur l’image ÷ agrandissement (mêmes unités !).',
            ],
          },
        ],
      },

      {
        title: 'La cellule eucaryote et ses organites',
        intro: 'Les cellules de ton corps sont des cellules eucaryotes : elles possèdent un noyau et de nombreux compartiments délimités par des membranes.',
        blocks: [
          { type: 'definition', term: 'Organite', text: 'compartiment spécialisé de la cellule eucaryote, le plus souvent délimité par une ou deux membranes, qui assure une fonction précise.' },
          {
            type: 'compare',
            title: 'Membrane ou enveloppe ?',
            columns: [
              { title: 'Membrane', items: ['**Une** bicouche de phospholipides associée à des protéines (≈ 7,5 nm).', 'Exemples : membrane plasmique, membrane du réticulum, du Golgi, des vésicules.', 'Se schématise par **un** trait (ou deux traits très fins et rapprochés pour la bicouche).'] },
              { title: 'Enveloppe', items: ['**Deux** membranes superposées, séparées par un petit espace.', 'Exemples : enveloppe nucléaire, mitochondrie, chloroplaste.', 'Se schématise par **deux** traits parallèles bien visibles.'] },
            ],
          },
          { type: 'figure', image: IMG.celluleAnimale, caption: 'Ultrastructure d’une cellule animale sécrétrice, schématisée d’après des clichés de MET. En vert : le réticulum endoplasmique et l’appareil de Golgi. À droite, une vésicule déverse son contenu à l’extérieur (exocytose).', size: 'wide' },
          {
            type: 'table',
            caption: 'Les organites de la cellule animale : structure et fonction',
            head: ['Organite', 'Structure (vue en MET)', 'Fonction'],
            rows: [
              ['Membrane plasmique', 'Une membrane qui entoure la cellule', 'Délimite la cellule, contrôle les échanges, porte des récepteurs'],
              ['Noyau', 'Enveloppe nucléaire percée de pores ; chromatine (ADN + protéines) ; nucléole', 'Contient et protège l’information génétique ; lieu de la réplication et de la transcription'],
              ['Ribosomes', 'Petits grains (≈ 25 nm) sans membrane, libres ou fixés sur le réticulum', 'Synthèse des protéines (traduction)'],
              ['Réticulum endoplasmique rugueux (RER)', 'Réseau de sacs aplatis (citernes) couverts de ribosomes, en continuité avec l’enveloppe nucléaire', 'Synthèse des protéines destinées à être sécrétées ou insérées dans les membranes'],
              ['Réticulum endoplasmique lisse', 'Réseau de tubes sans ribosomes', 'Synthèse de lipides (dont les hormones stéroïdiennes dans les cellules qui les produisent)'],
              ['Appareil de Golgi', 'Empilement de saccules aplatis entouré de vésicules', 'Maturation, tri et emballage des protéines dans des vésicules'],
              ['Vésicules', 'Petits sacs sphériques limités par une membrane', 'Transport de molécules entre compartiments et vers l’extérieur'],
              ['Mitochondrie', 'Enveloppe dont la membrane interne forme des replis (crêtes)', 'Respiration cellulaire : production d’ATP, l’énergie utilisable par la cellule'],
              ['Cytosol', 'Liquide qui baigne les organites', 'Nombreuses réactions chimiques du métabolisme'],
            ],
          },
          { type: 'note', title: 'Cytoplasme ou cytosol ?', text: 'Le **cytoplasme** désigne tout le contenu de la cellule entre la membrane plasmique et le noyau, organites compris. Le **cytosol** est seulement le liquide dans lequel baignent les organites.' },
          { type: 'figure', image: IMG.celluleVegetale, caption: 'Schéma d’une cellule végétale chlorophyllienne : la grande vacuole repousse le cytoplasme contre la paroi. En vert : les chloroplastes.', size: 'wide' },
          {
            type: 'compare',
            title: 'Cellule animale et cellule végétale',
            columns: [
              { title: 'Points communs', items: ['Membrane plasmique, cytoplasme, noyau.', 'Réticulum endoplasmique, appareil de Golgi, vésicules, ribosomes.', 'Mitochondries (respiration).'] },
              { title: 'Spécificités de la cellule végétale', items: ['**Paroi** rigide de cellulose autour de la membrane plasmique.', 'Grande **vacuole** (jusqu’à 90 % du volume).', '**Chloroplastes** (photosynthèse) dans les cellules chlorophylliennes.', 'Forme souvent polygonale, fixée par la paroi.'] },
            ],
          },
          {
            type: 'table',
            caption: 'Cellule eucaryote et cellule procaryote',
            head: ['Critère', 'Cellule eucaryote', 'Cellule procaryote (bactérie)'],
            rows: [
              ['Noyau', 'Oui : ADN entouré d’une enveloppe nucléaire', 'Non : ADN libre dans le cytoplasme (nucléoïde)'],
              ['Organites membranaires', 'Nombreux (RE, Golgi, mitochondries…)', 'Aucun'],
              ['Ribosomes', 'Oui', 'Oui (plus petits)'],
              ['Taille', '10 à 100 µm', '1 à 5 µm'],
              ['Paroi', 'Chez les végétaux (cellulose) et les champignons', 'Chez presque toutes les bactéries (peptidoglycane)'],
            ],
          },
          {
            type: 'steps',
            title: 'Schématiser une cellule eucaryote',
            items: [
              { title: 'Tracer le contour', text: 'Au crayon, un grand contour (au moins un tiers de page) pour la membrane plasmique, et la paroi pour une cellule végétale.' },
              { title: 'Placer le noyau', text: 'Avec **deux traits** (enveloppe) interrompus par des pores, et le nucléole à l’intérieur.' },
              { title: 'Ajouter les organites', text: 'RER relié à l’enveloppe nucléaire, Golgi en saccules empilés, vésicules, mitochondries avec crêtes, en respectant les tailles relatives.' },
              { title: 'Légender', text: 'Légendes écrites horizontalement, alignées, reliées par des traits à la règle qui ne se croisent pas.' },
              { title: 'Titrer', text: 'Exemple : « Schéma de l’ultrastructure d’une cellule animale, d’après un cliché de MET ».' },
            ],
          },
          { type: 'warning', text: 'Un schéma n’est pas un dessin d’observation : il **simplifie** et **interprète**. On peut y regrouper des organites observés sur plusieurs clichés, mais on ne doit rien inventer.' },
          {
            type: 'retenir',
            items: [
              'La cellule eucaryote possède un noyau et des organites délimités par des membranes.',
              'Une membrane = une bicouche ; une enveloppe = deux membranes (noyau, mitochondrie, chloroplaste).',
              'La cellule végétale possède en plus une paroi, une grande vacuole et, souvent, des chloroplastes.',
              'La cellule procaryote n’a ni noyau ni organites membranaires.',
            ],
          },
        ],
      },

      {
        title: 'Noyau, réticulum et Golgi : des membranes au service de la cellule',
        intro: 'Les membranes internes découpent la cellule en compartiments : elles protègent l’ADN et organisent la fabrication des protéines.',
        blocks: [
          { type: 'p', text: 'L’ADN est enfermé dans le **noyau**, séparé du cytoplasme par l’**enveloppe nucléaire** (deux membranes). Celle-ci est percée de milliers de **pores nucléaires** (≈ 100 nm de diamètre), de grands complexes de protéines qui **contrôlent** les échanges.' },
          { type: 'definition', term: 'Pore nucléaire', text: 'complexe protéique qui traverse l’enveloppe nucléaire et trie les molécules : il laisse sortir les ARN messagers et les sous-unités des ribosomes, et entrer certaines protéines (enzymes de réplication, protéines associées à l’ADN). L’ADN, lui, ne sort jamais du noyau.' },
          {
            type: 'list',
            title: 'Comment le noyau protège le matériel génétique',
            items: [
              'L’enveloppe nucléaire tient l’ADN à l’écart des mouvements du cytoplasme et de nombreuses enzymes qui pourraient l’abîmer.',
              'Les pores ne laissent passer que les molécules autorisées : seule une **copie** de l’information (l’ARN messager) part vers les ribosomes.',
              'L’ADN est associé à des protéines qui le compactent : c’est la **chromatine**.',
            ],
          },
          { type: 'definition', term: 'Chromosome', text: 'molécule d’ADN associée à des protéines. Pendant la vie normale de la cellule, l’ADN est peu condensé (chromatine). Au moment de la division, il se condense en chromosomes bien visibles, formés d’une ou de deux **chromatides**.' },
          { type: 'note', title: 'Et pendant la mitose ?', text: 'Au cours de la division cellulaire, l’enveloppe nucléaire se fragmente pour que les chromosomes condensés puissent être répartis, puis elle se reconstitue autour de chaque lot de chromosomes. Voir le chapitre « Les divisions cellulaires ».' },
          { type: 'p', text: 'Beaucoup de cellules fabriquent des protéines destinées à l’**extérieur** : enzymes digestives, hormones, anticorps, mucus. Ces protéines suivent toujours le même trajet, entièrement délimité par des membranes : c’est la **voie de sécrétion**.' },
          {
            type: 'compare',
            title: 'Sécrétion ou excrétion ?',
            columns: [
              { title: 'Sécrétion', items: ['Libération par une cellule d’une substance **qu’elle a fabriquée** et qui a un rôle utile.', 'Exemples : enzymes du suc pancréatique, insuline, mucus.'] },
              { title: 'Excrétion', items: ['Élimination hors de l’organisme de **déchets** ou de substances en excès.', 'Exemples : urée dans l’urine (rein), CO~2~ (poumons).'] },
            ],
          },
          {
            type: 'flow',
            title: 'La voie de sécrétion d’une protéine',
            steps: [
              { title: 'RER', text: 'Les ribosomes fixés synthétisent la protéine, qui entre dans les citernes.' },
              { title: 'Vésicules de transport', text: 'Elles bourgeonnent du RER et fusionnent avec le Golgi.' },
              { title: 'Appareil de Golgi', text: 'Maturation (ajout de glucides) et tri des protéines.' },
              { title: 'Vésicules de sécrétion', text: 'Elles se détachent du Golgi et migrent vers la membrane plasmique.' },
              { title: 'Exocytose', text: 'La vésicule fusionne avec la membrane : le contenu est libéré.' },
            ],
            caption: 'La protéine reste toujours enfermée dans un compartiment : elle ne traverse aucune membrane après sa synthèse.',
          },
          { type: 'definition', term: 'Vésicule', text: 'petit sac sphérique délimité par une membrane, qui transporte des molécules d’un compartiment à l’autre en bourgeonnant de l’un et en fusionnant avec l’autre.' },
          { type: 'definition', term: 'Exocytose', text: 'libération du contenu d’une vésicule hors de la cellule par fusion de la membrane de la vésicule avec la membrane plasmique.' },
          { type: 'p', text: 'Ce trajet est possible parce que toutes ces membranes ont la **même structure** (une bicouche de phospholipides) : elles peuvent bourgeonner et fusionner entre elles sans laisser fuir le contenu.' },
          { type: 'figure', image: IMG.met, caption: 'Cliché de MET d’une cellule acineuse du pancréas, qui sécrète les enzymes digestives. En bas à gauche : le noyau et son nucléole. Au centre : de nombreuses citernes de RER (lignes ponctuées de ribosomes) et l’appareil de Golgi (saccules courbes). En haut à droite : les grains de sécrétion, denses aux électrons, accumulés près du pôle apical.', size: 'wide' },
          { type: 'example', title: 'une structure adaptée à la sécrétion', text: 'Une cellule acineuse du pancréas libère chaque jour de grandes quantités d’enzymes. On y observe un RER très abondant, un appareil de Golgi développé et de nombreux grains de sécrétion. La **richesse en membranes internes** est le signe d’une cellule spécialisée dans la sécrétion de protéines.' },
          {
            type: 'retenir',
            items: [
              'Le noyau protège l’ADN grâce à son enveloppe (deux membranes) ; les pores nucléaires contrôlent les échanges.',
              'Voie de sécrétion : RER → vésicules → Golgi → vésicules de sécrétion → exocytose.',
              'Toutes ces membranes ont la même structure et peuvent fusionner : les protéines restent enfermées jusqu’à leur libération.',
              'Sécrétion = libérer une substance utile fabriquée par la cellule ; excrétion = éliminer un déchet.',
            ],
          },
        ],
      },

      {
        title: 'Des cellules aux tissus : épithéliums et fonction des organes',
        intro: 'Les cellules d’un organe ne sont pas disposées au hasard : leur organisation explique ce que fait l’organe.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Tissu épithélial', text: 'Cellules jointives qui recouvrent une surface ou forment des glandes. Ex. : paroi interne de l’intestin, peau.', tone: 'green' },
              { title: 'Tissu conjonctif', text: 'Cellules dispersées dans une matrice abondante ; soutien, nutrition. Ex. : derme, os, sang.', tone: 'yellow' },
              { title: 'Tissu musculaire', text: 'Cellules allongées capables de se contracter. Ex. : muscles squelettiques, muscle lisse de l’intestin.', tone: 'red' },
              { title: 'Tissu nerveux', text: 'Neurones qui transmettent des messages nerveux, et cellules qui les entourent.', tone: 'blue' },
            ],
          },
          { type: 'definition', term: 'Tissu épithélial (épithélium)', text: 'tissu formé de cellules **jointives**, sans vaisseaux sanguins, reposant sur une fine couche de protéines (la **lame basale**). Il recouvre les surfaces (épithélium de revêtement) ou forme les glandes (épithélium glandulaire).' },
          { type: 'definition', term: 'Lumière', text: 'espace intérieur d’un organe creux ou d’une glande (tube digestif, tube urinaire, acinus du pancréas).' },
          { type: 'definition', term: 'Cellule polarisée', text: 'cellule dont les deux pôles n’ont ni la même structure ni les mêmes protéines : le **pôle apical**, tourné vers la lumière, et le **pôle basal**, tourné vers le milieu intérieur et les vaisseaux sanguins.' },
          { type: 'figure', image: IMG.epithelium, caption: 'Épithélium de l’intestin grêle : une seule couche d’entérocytes polarisés, soudés par des jonctions serrées. La membrane apicale porte les microvillosités ; la membrane basale fait face au milieu intérieur, près des capillaires sanguins.', size: 'wide' },
          {
            type: 'compare',
            title: 'Membrane apicale et membrane basale d’un entérocyte',
            columns: [
              { title: 'Membrane apicale', items: ['Tournée vers la **lumière** intestinale (milieu extérieur).', 'Hérissée de **microvillosités** (≈ 1 µm) : grande surface d’échange.', 'Porte des enzymes digestives et des transporteurs **d’entrée** des nutriments.'] },
              { title: 'Membrane basale', items: ['Tournée vers le **milieu intérieur** (liquide interstitiel, capillaires).', 'Porte d’**autres** transporteurs, qui font sortir les nutriments vers le sang.', 'Repose sur la lame basale de l’épithélium.'] },
            ],
          },
          { type: 'warning', title: 'Deux sens pour « membrane basale »', text: 'En physiologie cellulaire, la **membrane basale** désigne la membrane plasmique du pôle basal de la cellule (c’est le sens utilisé dans ce cours et dans les schémas de transport). Les histologistes appellent aussi « membrane basale » la fine couche de protéines sur laquelle repose l’épithélium : pour éviter la confusion, on la nomme ici **lame basale**.' },
          { type: 'definition', term: 'Jonctions serrées', text: 'zones, près du pôle apical, où les membranes de deux cellules voisines sont soudées par des protéines. Elles rendent l’épithélium **étanche** : les molécules ne peuvent pas passer entre les cellules et doivent traverser les cellules, donc leurs transporteurs. Elles empêchent aussi les protéines de la membrane apicale de migrer vers la membrane basale.' },
          { type: 'definition', term: 'Surface d’échange', text: 'surface à travers laquelle des molécules passent d’un milieu à un autre. Les échanges sont d’autant plus efficaces que la surface est **grande**, **fine** et **bien irriguée** par le sang.' },
          { type: 'figure', image: IMG.villosites, caption: 'Coupe transversale d’intestin grêle au microscope optique : des centaines de villosités rayonnent autour de la lumière. Chacune est recouverte d’entérocytes.', credit: 'Jamilbaza — CC BY 4.0, via Wikimedia Commons', size: 'small' },
          { type: 'example', title: 'l’intestin grêle, une immense surface d’absorption', text: 'Plis de la paroi, **villosités** (0,5 à 1 mm) et **microvillosités** (≈ 1 µm) multiplient la surface intérieure de l’intestin grêle par 60 à 120. Elle atteint environ **30 m²**, la surface d’un studio, pour un épithélium d’une seule couche de cellules (≈ 20 µm) et un riche réseau de capillaires dans chaque villosité.' },
          { type: 'definition', term: 'Fonction exocrine', text: 'sécrétion d’une substance déversée dans une **lumière** ou un conduit qui mène hors du milieu intérieur (tube digestif, peau). Elle s’oppose à la fonction **endocrine**, où la sécrétion (une hormone) passe directement dans le sang.' },
          {
            type: 'table',
            caption: 'Structure de l’épithélium et fonction de l’organe',
            head: ['Organe', 'Particularité de l’épithélium', 'Fonction permise'],
            rows: [
              ['Intestin grêle', 'Une couche d’entérocytes polarisés, microvillosités, jonctions serrées', 'Absorption des nutriments'],
              ['Pancréas (acini)', 'Cellules glandulaires polarisées autour d’une petite lumière ; grains de sécrétion au pôle apical', 'Sécrétion **exocrine** du suc pancréatique vers le duodénum'],
              ['Néphron (tube proximal du rein)', 'Cellules à microvillosités (bordure en brosse), riches en mitochondries', 'Réabsorption de l’eau, du glucose et des ions'],
              ['Testicule (tube séminifère)', 'Épithélium épais où les cellules germinales se divisent et se différencient', 'Production des spermatozoïdes dans la lumière du tube'],
              ['Utérus (endomètre)', 'Épithélium et glandes qui s’épaississent au cours du cycle', 'Accueil de l’embryon (nidation)'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Un épithélium est formé de cellules jointives et polarisées : pôle apical vers la lumière, pôle basal vers le milieu intérieur.',
              'Les jonctions serrées rendent l’épithélium étanche : les molécules doivent traverser les cellules.',
              'Microvillosités et villosités forment une grande surface d’échange : structure adaptée à l’absorption.',
              'Une glande exocrine déverse sa sécrétion dans une lumière ; une glande endocrine, dans le sang.',
            ],
          },
        ],
      },

      {
        title: 'Observer l’intérieur du corps : l’imagerie médicale',
        intro: 'Pour voir les organes d’un patient sans l’opérer, on utilise des rayonnements qui traversent le corps… ou qui y rebondissent.',
        blocks: [
          { type: 'p', text: 'En **radiographie**, un faisceau de **rayons X** traverse la partie du corps à examiner. Les tissus absorbent plus ou moins ces rayons selon leur densité et leur composition. Derrière le patient, un détecteur enregistre les rayons qui ont traversé : là où beaucoup de rayons arrivent, l’image est **noire** ; là où ils ont été arrêtés, elle est **blanche**.' },
          { type: 'definition', term: 'Tissu radio-opaque', text: 'tissu qui absorbe fortement les rayons X et apparaît **blanc** sur une radiographie. Les os et les dents, riches en calcium, sont radio-opaques.' },
          { type: 'definition', term: 'Tissus mous', text: 'tissus peu denses et pauvres en calcium (peau, muscles, graisse, viscères). Ils absorbent peu les rayons X : ils apparaissent **gris** et se distinguent mal les uns des autres. L’air (poumons, intestin) apparaît **noir**.' },
          { type: 'figure', image: IMG.radiographie, caption: 'Radiographie d’une main et d’un poignet : les os (phalanges, métacarpiens, os du carpe, radius et ulna) sont blancs ; les tissus mous forment un halo gris pâle ; l’air autour de la main est noir.', size: 'small' },
          { type: 'definition', term: 'Produit de contraste', text: 'substance qui absorbe fortement les rayons X, introduite dans le corps pour rendre visible un organe creux ou mou : sulfate de baryum avalé pour l’œsophage et l’estomac, produit iodé injecté pour les vaisseaux ou les voies urinaires.' },
          { type: 'p', text: 'L’**échographie** utilise des **ultrasons**, des sons trop aigus pour être entendus (de 2 à 15 MHz en médecine). Une sonde posée sur la peau, avec un gel qui chasse l’air, émet les ultrasons et capte leurs **échos** : ils se réfléchissent à chaque frontière entre deux tissus mous. Un ordinateur construit l’image en temps réel. Les liquides (vessie, liquide amniotique) apparaissent noirs ; l’os et l’air renvoient presque tous les ultrasons et empêchent de voir ce qui se trouve derrière.' },
          {
            type: 'compare',
            title: 'Radiographie ou échographie ?',
            columns: [
              { title: 'Radiographie', subtitle: 'Rayons X', items: ['Rayonnement **ionisant** : doses limitées, à éviter pendant la grossesse.', 'Idéale pour les tissus **opaques** aux rayons X : os, dents ; aussi les poumons (contraste air / tissus).', 'Tissus mous peu visibles, sauf avec un produit de contraste.', 'Ex. : fracture, carie, pneumonie.'] },
              { title: 'Échographie', subtitle: 'Ultrasons', items: ['**Non ionisante**, sans danger connu aux doses utilisées, image en temps réel.', 'Idéale pour les **tissus mous** et les liquides : foie, cœur, utérus, ovaires, fœtus.', 'Inutilisable à travers l’os et l’air.', 'Ex. : suivi de grossesse, comptage des follicules ovariens, calculs biliaires.'] },
            ],
          },
          { type: 'note', title: 'D’autres techniques', text: ['Le **scanner** (tomodensitométrie) utilise aussi les rayons X, mais reconstruit des images en coupes. L’**IRM** utilise un champ magnétique et donne d’excellentes images des tissus mous sans rayonnement ionisant.', 'La **scintigraphie** et la **TEP** suivent dans le corps une biomolécule marquée par un atome radioactif : tu en verras un exemple dans le chapitre « Transport des molécules ».'] },
          {
            type: 'retenir',
            items: [
              'Radiographie : rayons X absorbés par les tissus denses ; os blancs, tissus mous gris, air noir.',
              'Un produit de contraste rend visibles des organes mous ou creux en radiographie.',
              'Échographie : ultrasons réfléchis aux interfaces des tissus mous ; non ionisante.',
              'On choisit la technique selon la nature du tissu observé et les risques pour le patient.',
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
        title: 'Changer d’échelle et choisir le bon microscope',
        duration: '25 min',
        skills: ['Calculer', 'Argumenter'],
        context: 'Deux clichés de l’appareil digestif ont été obtenus au laboratoire d’histologie. Tu dois retrouver l’outil utilisé pour chacun et estimer la taille réelle de quelques structures.',
        documents: [
          { label: 'Document 1', title: 'Coupe d’intestin grêle', image: IMG.villosites, caption: 'Coupe transversale colorée.', credit: 'Jamilbaza — CC BY 4.0', size: 'small' },
          { label: 'Document 2', title: 'Cellule acineuse du pancréas', image: IMG.met, caption: 'Sur le tirage papier distribué en TP, l’agrandissement est de ×10 000.' },
          {
            label: 'Document 3',
            title: 'Mesures réalisées à la règle sur le tirage du document 2',
            blocks: [
              { type: 'table', head: ['Structure', 'Taille mesurée'], rows: [['Grain de sécrétion (diamètre)', '8 mm'], ['Mitochondrie (longueur)', '1,8 cm'], ['Épaisseur d’une membrane', 'environ 0,08 mm']] },
            ],
          },
        ],
        questions: [
          { text: 'Pour chacun des documents 1 et 2, indique le type de microscope utilisé. Donne deux arguments à chaque fois.', hint: 'Regarde les couleurs, le niveau de détail et ce que l’on voit à l’intérieur des cellules.', answer: 'Document 1 : microscope optique. L’image est en couleurs (coloration) et montre un organe entier en coupe avec ses villosités ; on ne distingue pas les organites. Document 2 : microscope électronique à transmission. L’image est en noir et blanc et montre l’ultrastructure : membranes du réticulum, ribosomes, crêtes des mitochondries, enveloppe nucléaire.' },
          { text: 'Calcule la taille réelle d’un grain de sécrétion et celle de la mitochondrie.', hint: 'Convertis d’abord en µm : 1 mm = 1 000 µm. Puis divise par l’agrandissement.', answer: 'Grain : 8 mm = 8 000 µm ; 8 000 ÷ 10 000 = 0,8 µm. Mitochondrie : 1,8 cm = 18 000 µm ; 18 000 ÷ 10 000 = 1,8 µm. Ces valeurs sont cohérentes (une mitochondrie mesure 1 à 2 µm).' },
          { text: 'Calcule l’épaisseur réelle d’une membrane, en nanomètres. Pourquoi est-il impossible de la voir au microscope optique ?', answer: '0,08 mm = 80 µm ; 80 ÷ 10 000 = 0,008 µm = 8 nm. La limite de résolution du microscope optique est d’environ 0,2 µm (200 nm) : une structure de 8 nm est 25 fois plus petite, elle ne peut pas être distinguée. Il faut le microscope électronique.' },
          { text: 'Un élève photocopie le document 2 en l’agrandissant deux fois, puis refait les mesures avec l’agrandissement ×10 000. Quelle erreur commet-il ? Comment l’éviter ?', answer: 'Sur la photocopie, l’agrandissement réel est ×20 000 : en gardant ×10 000, il trouve des tailles deux fois trop grandes. Il faut utiliser une barre d’échelle, qui est agrandie en même temps que l’image, ou recalculer l’agrandissement.' },
          { text: 'Range du plus grand au plus petit et associe à chacun l’outil d’observation adapté : ribosome, intestin grêle, villosité, noyau, entérocyte, protéine.', answer: 'Intestin grêle (≈ 3 cm, œil nu) > villosité (≈ 1 mm, loupe ou microscope optique) > entérocyte (≈ 20 µm, microscope optique) > noyau (≈ 5 à 10 µm, microscope optique) > ribosome (≈ 25 nm, microscope électronique) > protéine (≈ 5 nm, microscope électronique ou techniques biochimiques).' },
        ],
      },
      {
        title: 'Schématiser une cellule eucaryote à partir d’une électronographie',
        duration: '30 min',
        skills: ['Observer', 'Représenter'],
        context: 'Tu dois réaliser le schéma de la cellule acineuse du document 2 et la comparer à une cellule végétale et à une bactérie.',
        documents: [
          { label: 'Document 4', title: 'Cellule végétale chlorophyllienne', image: IMG.celluleVegetale, caption: 'Schéma réalisé d’après des observations au microscope optique et électronique.' },
        ],
        questions: [
          { text: 'Sur le document 2, repère et nomme : le noyau, le nucléole, l’enveloppe nucléaire, le réticulum endoplasmique rugueux, l’appareil de Golgi, une mitochondrie, les grains de sécrétion.', hint: 'Le RER forme des lignes parallèles ponctuées de petits grains noirs ; le Golgi forme des saccules courbes empilés sans grains.', answer: 'Noyau : grande zone arrondie en bas à gauche, avec le nucléole (zone sombre arrondie) ; enveloppe nucléaire : double trait qui limite le noyau ; RER : nombreuses lignes parallèles ponctuées de ribosomes, au centre ; Golgi : saccules courbes empilés au centre droit ; mitochondries : formes ovales à crêtes internes (en haut à gauche, en bas à droite) ; grains de sécrétion : gros disques très sombres en haut à droite.' },
          { text: 'Réalise le schéma légendé et titré de cette cellule, en respectant les règles du schéma.', answer: 'Compare ton schéma avec la figure de la partie 3 : contour de la membrane plasmique ; noyau tracé avec deux traits et des pores ; RER en citernes parallèles reliées à l’enveloppe, avec ribosomes ; Golgi en saccules empilés avec vésicules ; mitochondries avec crêtes ; grains de sécrétion près du pôle apical ; légendes alignées, traits à la règle ; titre : « Schéma de l’ultrastructure d’une cellule acineuse du pancréas, d’après un cliché de MET ».' },
          { text: 'Pourquoi trace-t-on l’enveloppe nucléaire avec deux traits et la membrane plasmique avec un seul ?', answer: 'L’enveloppe nucléaire est formée de deux membranes superposées, alors que la membrane plasmique n’en compte qu’une.' },
          { text: 'À l’aide du document 4, relève trois différences entre cette cellule végétale et la cellule acineuse.', answer: 'La cellule végétale possède une paroi autour de la membrane plasmique, une grande vacuole centrale et des chloroplastes ; la cellule acineuse n’en a pas. Inversement, la cellule acineuse est riche en grains de sécrétion et en RER.' },
          { text: 'Une bactérie mesure 2 µm et ne montre aucun noyau sur un cliché de MET. Justifie qu’il s’agit d’une cellule procaryote et cite un élément commun avec la cellule acineuse.', answer: 'Elle n’a pas de noyau (ADN libre dans le cytoplasme) ni d’organites membranaires, et elle est petite (1 à 5 µm) : c’est une cellule procaryote. Elle possède, comme la cellule acineuse, une membrane plasmique, un cytoplasme et des ribosomes.' },
        ],
      },
      {
        title: 'Suivre le trajet d’une protéine sécrétée',
        duration: '30 min',
        skills: ['Exploiter des résultats', 'Raisonner'],
        context: 'Dans les années 1960, George Palade et James Jamieson ont cherché à savoir par quels compartiments passent les enzymes fabriquées par les cellules acineuses du pancréas. Le principe de leur expérience est présenté ci-dessous.',
        documents: [
          {
            label: 'Document 5',
            title: 'Principe de l’expérience (autoradiographie)',
            text: [
              'Des fragments de pancréas sont placés 3 minutes dans un milieu contenant de la **leucine radioactive** (un acide aminé), puis transférés dans un milieu contenant de la leucine non radioactive : c’est la « chasse ».',
              'À différents moments, on réalise des coupes observées en MET, recouvertes d’une émulsion photographique : la radioactivité y fait apparaître des **grains noirs** au-dessus des compartiments qui contiennent les protéines marquées. On compte ensuite les grains dans chaque compartiment.',
            ],
            source: 'D’après Jamieson et Palade, 1967',
          },
          {
            label: 'Document 6',
            title: 'Répartition de la radioactivité (données simplifiées)',
            blocks: [
              {
                type: 'table',
                caption: 'Pourcentage des grains noirs observés dans chaque compartiment (valeurs arrondies)',
                head: ['Temps après le début du marquage', 'RER', 'Appareil de Golgi', 'Grains de sécrétion', 'Lumière de l’acinus'],
                rows: [
                  ['3 min', '85 %', '5 %', '2 %', '0 %'],
                  ['10 min', '45 %', '40 %', '7 %', '0 %'],
                  ['40 min', '25 %', '15 %', '50 %', '2 %'],
                  ['120 min', '15 %', '5 %', '55 %', '20 %'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Pourquoi utilise-t-on un acide aminé radioactif pour suivre les protéines ?', answer: 'Les acides aminés sont les constituants des protéines : la leucine radioactive est incorporée dans les protéines en cours de synthèse, qui deviennent radioactives et donc repérables.' },
          { text: 'Quel est le rôle de la « chasse » par de la leucine non radioactive ?', hint: 'Que se passerait-il si la cellule continuait à recevoir de la leucine radioactive ?', answer: 'Elle arrête le marquage : seules les protéines fabriquées pendant les 3 premières minutes sont radioactives. On peut ainsi suivre ce « lot » de protéines dans le temps, comme une vague.' },
          { text: 'Décris l’évolution de la radioactivité dans chaque compartiment.', answer: 'À 3 min, la radioactivité est presque entièrement dans le RER (85 %). À 10 min, elle diminue dans le RER (45 %) et augmente dans le Golgi (40 %). À 40 min, elle se trouve surtout dans les grains de sécrétion (50 %). À 120 min, elle reste élevée dans les grains (55 %) et apparaît dans la lumière de l’acinus (20 %).' },
          { text: 'Déduis-en le trajet des enzymes digestives dans la cellule acineuse.', answer: 'Les enzymes sont synthétisées dans le RER, passent dans l’appareil de Golgi, sont stockées dans les grains (vésicules) de sécrétion, puis libérées dans la lumière de l’acinus par exocytose.' },
          { text: 'Explique comment les protéines passent d’un compartiment au suivant sans traverser de membrane.', hint: 'Pense aux vésicules et à la structure des membranes.', answer: 'Des vésicules bourgeonnent du RER puis du Golgi en emportant les protéines dans leur lumière ; elles fusionnent avec le compartiment suivant, puis avec la membrane plasmique (exocytose). Cette fusion est possible car toutes ces membranes sont des bicouches de phospholipides de même structure.' },
          { text: 'Les grains de sécrétion s’accumulent au pôle apical de la cellule. En quoi cette polarité est-elle adaptée à la fonction exocrine du pancréas ?', answer: 'Le pôle apical est tourné vers la lumière de l’acinus, reliée au canal pancréatique : les enzymes sont libérées du bon côté, vers le duodénum, et non vers le milieu intérieur.' },
        ],
      },
      {
        title: 'Relier la structure de l’épithélium intestinal à l’absorption',
        duration: '25 min',
        skills: ['Observer', 'Argumenter'],
        context: 'L’intestin grêle absorbe chaque jour plusieurs centaines de grammes de nutriments. Tu dois montrer que sa structure, à toutes les échelles, est adaptée à cette fonction.',
        documents: [
          { label: 'Document 7', title: 'L’épithélium intestinal', image: IMG.epithelium, caption: 'Schéma d’après des clichés de microscopie optique et électronique.' },
          {
            label: 'Document 8',
            title: 'Un traceur arrêté par les jonctions serrées',
            text: [
              'On dépose dans la lumière intestinale un traceur visible en MET (une molécule dense aux électrons, incapable de traverser les membranes).',
              'Sur les clichés, on le retrouve entre les microvillosités et contre la membrane apicale, jusqu’au niveau des jonctions serrées, mais **jamais** dans l’espace entre les cellules situé sous ces jonctions, ni dans le milieu intérieur.',
            ],
          },
          {
            label: 'Document 9',
            title: 'Quelques valeurs',
            blocks: [
              { type: 'table', head: ['Élément', 'Valeur'], rows: [['Hauteur d’une villosité', '0,5 à 1 mm'], ['Longueur d’une microvillosité', '≈ 1 µm'], ['Épaisseur de l’épithélium', '1 cellule, ≈ 20 µm'], ['Surface intérieure de l’intestin grêle', '≈ 30 m²']] },
            ],
          },
        ],
        questions: [
          { text: 'Nomme les deux pôles d’un entérocyte et indique vers quel milieu chacun est tourné.', answer: 'Le pôle apical, qui porte les microvillosités, est tourné vers la lumière intestinale (milieu extérieur). Le pôle basal est tourné vers le milieu intérieur (liquide interstitiel et capillaires sanguins).' },
          { text: 'Relève dans les documents 7 et 9 trois caractéristiques qui font de l’intestin une surface d’échange efficace.', answer: 'Une très grande surface (≈ 30 m², grâce aux villosités et aux microvillosités) ; une très faible épaisseur (une seule couche de cellules d’environ 20 µm) ; une forte irrigation (capillaires sanguins juste sous l’épithélium).' },
          { text: 'Que montre l’expérience du document 8 sur le rôle des jonctions serrées ?', answer: 'Le traceur est arrêté au niveau des jonctions serrées : celles-ci ferment l’espace entre les cellules. L’épithélium est étanche, les molécules ne peuvent pas passer entre les cellules.' },
          { text: 'Déduis-en le trajet obligatoire d’un nutriment absorbé. Pourquoi la cellule a-t-elle besoin de transporteurs différents sur ses deux membranes ?', hint: 'Le nutriment doit entrer dans la cellule, puis en sortir de l’autre côté.', answer: 'Le nutriment doit traverser la cellule : il entre par la membrane apicale, traverse le cytoplasme, puis sort par la membrane basale vers le milieu intérieur. Il faut donc des transporteurs d’entrée sur la membrane apicale et des transporteurs de sortie sur la membrane basale : c’est la polarité de la cellule qui rend l’absorption orientée.' },
          { text: 'Rédige une conclusion de trois phrases reliant la structure de l’intestin à sa fonction aux échelles de l’organe, du tissu et de la cellule.', answer: 'À l’échelle de l’organe, les plis et les villosités augmentent énormément la surface d’échange. À l’échelle du tissu, l’épithélium est formé d’une seule couche de cellules jointives, soudées par des jonctions serrées et proches des capillaires. À l’échelle de la cellule, l’entérocyte est polarisé : ses microvillosités augmentent encore la surface et ses transporteurs orientent le passage des nutriments vers le sang.' },
        ],
      },
      {
        title: 'Lire une radiographie et choisir une technique d’imagerie',
        duration: '20 min',
        skills: ['Observer', 'Choisir', 'Justifier'],
        context: 'Dans un service d’imagerie médicale, le manipulateur en électroradiologie doit choisir l’examen adapté à chaque patient.',
        documents: [
          { label: 'Document 10', title: 'Radiographie de la main', image: IMG.radiographie, caption: 'Cliché observé sur un négatoscope.', size: 'small' },
          {
            label: 'Document 11',
            title: 'Quatre situations',
            blocks: [
              {
                type: 'list',
                items: [
                  'A. Un adolescent est tombé sur le poignet : on suspecte une fracture.',
                  'B. Une femme enceinte de 12 semaines vient pour le suivi de sa grossesse.',
                  'C. On veut observer le contour de l’estomac d’un patient qui souffre de douleurs digestives.',
                  'D. Dans le cadre d’une assistance médicale à la procréation, on veut compter les follicules d’un ovaire.',
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Sur le document 10, explique pourquoi les os apparaissent blancs et les tissus mous gris.', answer: 'Les os, riches en calcium, absorbent fortement les rayons X : peu de rayons atteignent le détecteur, la zone est blanche (os radio-opaques). Les tissus mous absorbent peu les rayons X : davantage de rayons traversent, la zone est grise. Autour de la main, les rayons traversent librement l’air : la zone est noire.' },
          { text: 'Pour chaque situation du document 11, choisis entre radiographie et échographie, et justifie.', hint: 'Demande-toi quel tissu on veut voir, et si le patient doit être protégé des rayonnements ionisants.', answer: 'A : radiographie, car on observe un os, tissu opaque aux rayons X. B : échographie, car le fœtus et l’utérus sont des tissus mous et les ultrasons ne sont pas ionisants. C : radiographie avec un produit de contraste (sulfate de baryum avalé), car l’estomac est un organe creux et mou, invisible sans contraste. D : échographie, car l’ovaire et les follicules (remplis de liquide) sont des tissus mous bien visibles aux ultrasons.' },
          { text: 'Pourquoi met-on du gel entre la sonde d’échographie et la peau ?', answer: 'Le gel chasse l’air : l’air renvoie presque tous les ultrasons et empêcherait d’obtenir une image des tissus situés en dessous.' },
          { text: 'Pourquoi limite-t-on le nombre de radiographies, surtout chez la femme enceinte ?', answer: 'Les rayons X sont des rayonnements ionisants, qui peuvent endommager l’ADN des cellules, en particulier celles qui se divisent beaucoup comme celles de l’embryon. On limite donc les doses et on préfère l’échographie pendant la grossesse.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Le vivant est organisé en niveaux emboîtés : organisme, appareils, organes, tissus, cellules, organites, molécules, chacun avec son ordre de grandeur.',
      'La fonction d’un appareil résulte de la coopération de ses organes, reliés par des conduits et des vaisseaux.',
      'Le microscope optique (limite ≈ 0,2 µm) montre cellules et tissus ; le microscope électronique montre l’ultrastructure (organites, membranes, ribosomes).',
      'La cellule eucaryote possède un noyau et des organites membranaires ; la cellule végétale a en plus une paroi, une grande vacuole et des chloroplastes.',
      'Le noyau protège l’ADN grâce à son enveloppe et à ses pores ; les protéines sécrétées suivent la voie RER → Golgi → vésicules → exocytose.',
      'Un épithélium est formé de cellules jointives et polarisées, soudées par des jonctions serrées ; sa structure (surface, finesse, polarité) explique la fonction de l’organe.',
      'La radiographie (rayons X) montre les tissus radio-opaques comme l’os ; l’échographie (ultrasons) montre les tissus mous.',
    ],
    method: {
      title: 'Exploiter un cliché de microscopie',
      steps: [
        'Identifier le type de microscope : couleurs, niveau de détail, échelle (µm ou nm).',
        'Repérer les structures en partant des plus faciles (noyau) vers les plus fines (RER, Golgi, ribosomes).',
        'Calculer une taille réelle avec l’agrandissement ou la barre d’échelle, en convertissant les unités.',
        'Relier les structures observées à la fonction de la cellule (ex. RER abondant → sécrétion de protéines).',
      ],
    },
    vocabulary: [
      { term: 'Organe', definition: 'Partie du corps formée de plusieurs tissus, qui assure une ou plusieurs fonctions.' },
      { term: 'Tissu', definition: 'Ensemble de cellules semblables qui réalisent ensemble une même fonction.' },
      { term: 'Limite de résolution', definition: 'Plus petite distance entre deux points que l’instrument permet de distinguer.' },
      { term: 'Agrandissement', definition: 'Rapport entre la taille d’un objet sur l’image et sa taille réelle.' },
      { term: 'Ultrastructure', definition: 'Organisation interne de la cellule visible au microscope électronique.' },
      { term: 'Organite', definition: 'Compartiment spécialisé de la cellule eucaryote, délimité par une ou deux membranes.' },
      { term: 'Enveloppe', definition: 'Ensemble de deux membranes superposées (noyau, mitochondrie, chloroplaste).' },
      { term: 'Pore nucléaire', definition: 'Complexe protéique de l’enveloppe nucléaire qui contrôle les échanges entre noyau et cytoplasme.' },
      { term: 'Exocytose', definition: 'Libération du contenu d’une vésicule par fusion avec la membrane plasmique.' },
      { term: 'Sécrétion', definition: 'Libération par une cellule d’une substance utile qu’elle a fabriquée.' },
      { term: 'Cellule polarisée', definition: 'Cellule dont le pôle apical et le pôle basal ont des structures et des protéines différentes.' },
      { term: 'Jonction serrée', definition: 'Zone de soudure entre deux cellules voisines qui rend l’épithélium étanche.' },
      { term: 'Surface d’échange', definition: 'Surface, grande et fine, à travers laquelle des molécules passent d’un milieu à un autre.' },
      { term: 'Fonction exocrine', definition: 'Sécrétion déversée dans une lumière ou un conduit, hors du milieu intérieur.' },
      { term: 'Produit de contraste', definition: 'Substance opaque aux rayons X qui rend visible un organe mou ou creux.' },
    ],
    mistakes: [
      { wrong: 'Dire qu’on voit le réticulum endoplasmique au microscope optique.', right: 'Ses membranes (≈ 7,5 nm) ne sont visibles qu’au microscope électronique.' },
      { wrong: 'Utiliser l’agrandissement indiqué sur un cliché qui a été agrandi à la photocopie.', right: 'Utiliser la barre d’échelle, ou recalculer l’agrandissement réel.' },
      { wrong: 'Dessiner l’enveloppe nucléaire avec un seul trait.', right: 'Une enveloppe compte deux membranes : deux traits, interrompus par les pores.' },
      { wrong: 'Confondre sécrétion et excrétion.', right: 'Sécrétion : substance utile fabriquée par la cellule ; excrétion : élimination d’un déchet.' },
      { wrong: 'Penser que les nutriments passent entre les cellules de l’intestin.', right: 'Les jonctions serrées rendent l’épithélium étanche : les nutriments traversent les cellules.' },
      { wrong: 'Choisir la radiographie pour observer un fœtus.', right: 'L’échographie est adaptée aux tissus mous et n’est pas ionisante.' },
    ],
    quiz: [
      { question: 'Quelle structure ne peut être observée qu’au microscope électronique ?', choices: ['Le noyau', 'Une cellule végétale', 'Un ribosome', 'Une villosité intestinale'], answer: 2, explanation: 'Un ribosome mesure environ 25 nm, bien en dessous de la limite de résolution du microscope optique (≈ 0,2 µm).' },
      { question: 'Sur un cliché agrandi ×20 000, un organite mesure 2 cm. Sa taille réelle est :', choices: ['10 µm', '1 µm', '0,1 µm', '40 µm'], answer: 1, explanation: '2 cm = 20 000 µm ; 20 000 ÷ 20 000 = 1 µm.' },
      { question: 'Quel organite est délimité par une enveloppe (deux membranes) ?', choices: ['L’appareil de Golgi', 'Une vésicule', 'Le réticulum endoplasmique', 'Le noyau'], answer: 3, explanation: 'Le noyau, comme la mitochondrie et le chloroplaste, est entouré de deux membranes.' },
      { question: 'Le trajet d’une enzyme sécrétée par une cellule du pancréas est :', choices: ['Golgi → RER → vésicule → exocytose', 'RER → Golgi → vésicule de sécrétion → exocytose', 'Noyau → Golgi → RER → exocytose', 'RER → mitochondrie → Golgi → exocytose'], answer: 1, explanation: 'La protéine est synthétisée dans le RER, mûrit dans le Golgi, puis est libérée par exocytose des vésicules de sécrétion.' },
      { question: 'Les pores nucléaires :', choices: ['Laissent sortir l’ADN vers le cytoplasme', 'Laissent sortir les ARN messagers et entrer certaines protéines', 'Fabriquent les protéines', 'N’existent que pendant la mitose'], answer: 1, explanation: 'L’ADN reste dans le noyau ; les pores contrôlent la sortie des ARNm et l’entrée de protéines.' },
      { question: 'Le rôle des jonctions serrées dans l’épithélium intestinal est de :', choices: ['Augmenter la surface d’échange', 'Rendre l’épithélium étanche entre les cellules', 'Produire des enzymes digestives', 'Transporter le glucose'], answer: 1, explanation: 'Elles soudent les cellules : les molécules doivent traverser les cellules et non passer entre elles.' },
      { question: 'Une cellule polarisée est une cellule :', choices: ['Qui possède deux noyaux', 'Dont les pôles apical et basal sont différents', 'Qui se divise rapidement', 'Chargée électriquement'], answer: 1, explanation: 'Ses deux pôles n’ont ni la même structure ni les mêmes protéines (transporteurs, microvillosités).' },
      { question: 'Sur une radiographie, les os apparaissent blancs car :', choices: ['Ils réfléchissent les ultrasons', 'Ils absorbent fortement les rayons X', 'Ils émettent de la lumière', 'Ils contiennent beaucoup d’eau'], answer: 1, explanation: 'Riches en calcium, les os absorbent les rayons X : peu de rayons atteignent le détecteur.' },
      { question: 'Quel examen choisir pour observer les ovaires d’une patiente ?', choices: ['Une radiographie sans produit de contraste', 'Une échographie', 'Un cliché de microscopie électronique', 'Une observation à l’œil nu'], answer: 1, explanation: 'Les ovaires sont des tissus mous : l’échographie, non ionisante, est adaptée.' },
    ],
    exercises: [
      {
        title: 'Calculs de tailles réelles',
        statement: ['Sur un cliché de MET agrandi ×15 000, on mesure : le noyau, 9 cm ; une mitochondrie, 2,4 cm ; un ribosome, 0,4 mm.', 'a) Calcule la taille réelle de chaque structure. b) Lesquelles seraient visibles au microscope optique ?'],
        answer: ['a) Noyau : 9 cm = 90 000 µm ; 90 000 ÷ 15 000 = 6 µm. Mitochondrie : 2,4 cm = 24 000 µm ; 24 000 ÷ 15 000 = 1,6 µm. Ribosome : 0,4 mm = 400 µm ; 400 ÷ 15 000 ≈ 0,027 µm = 27 nm.', 'b) Le noyau (6 µm) et la mitochondrie (1,6 µm, comme un petit grain sans détail) dépassent la limite de résolution de 0,2 µm. Le ribosome (27 nm) n’est visible qu’au microscope électronique.'],
      },
      {
        title: 'Une cellule spécialisée',
        statement: 'Les plasmocytes sont des cellules du sang qui sécrètent de grandes quantités d’anticorps (des protéines). Prévois, en justifiant, les organites que l’on doit observer en abondance sur un cliché de MET de plasmocyte.',
        answer: 'Les anticorps sont des protéines sécrétées : ils suivent la voie de sécrétion. On s’attend donc à observer un réticulum endoplasmique rugueux très développé (nombreuses citernes couvertes de ribosomes), un appareil de Golgi important et de nombreuses vésicules de sécrétion, ainsi que des mitochondries qui fournissent l’énergie nécessaire.',
      },
      {
        title: 'Glande exocrine ou endocrine ?',
        statement: 'Le pancréas contient des acini, dont les cellules déversent des enzymes dans un canal relié au duodénum, et des îlots de cellules qui libèrent l’insuline dans les capillaires sanguins. Qualifie chacune de ces fonctions et explique pourquoi le pancréas est dit « amphicrine ».',
        answer: 'Les acini assurent une fonction exocrine : leur sécrétion (suc pancréatique) est déversée dans une lumière et un conduit qui mènent au tube digestif, hors du milieu intérieur. Les îlots assurent une fonction endocrine : leur sécrétion (insuline, une hormone) passe directement dans le sang. Le pancréas possède les deux fonctions : il est amphicrine.',
      },
    ],
    selfCheck: [
      'Je sais citer les niveaux d’organisation du vivant et donner un ordre de grandeur pour chacun.',
      'Je sais expliquer comment les organes de l’appareil digestif coopèrent.',
      'Je sais choisir entre microscope optique et électronique selon la taille de la structure, et calculer une taille réelle.',
      'Je sais schématiser une cellule animale et une cellule végétale avec leurs organites.',
      'Je sais expliquer le rôle protecteur du noyau et décrire la voie de sécrétion d’une protéine.',
      'Je sais relier la polarité, les jonctions serrées et les microvillosités à la fonction d’absorption.',
      'Je sais choisir entre radiographie et échographie et reconnaître les os sur une radiographie.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Appareil de Golgi — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Appareil_de_Golgi' },
      { title: 'Microscope électronique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Microscope_%C3%A9lectronique' },
      { title: 'Surface area of the digestive tract – revisited (Helander et Fändriks, 2014) — PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/24694282/' },
      { title: 'Radiographie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Radiographie' },
      { title: 'Échographie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/%C3%89chographie' },
    ],
  },
};

export default lesson;
