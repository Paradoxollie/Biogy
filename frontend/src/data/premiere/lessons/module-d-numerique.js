import { img } from '../media';
import exao from '../../../assets/courses/premiere/module-d-numerique/exao.webp';
import tableur from '../../../assets/courses/premiere/module-d-numerique/tableur.webp';
import tendance from '../../../assets/courses/premiere/module-d-numerique/tendance.webp';
import graphiques from '../../../assets/courses/premiere/module-d-numerique/graphiques.webp';
import molecule from '../../../assets/courses/premiere/module-d-numerique/molecule-3d.webp';

const IMG = {
  exao: img(exao, 'Montage d’expérimentation assistée par ordinateur : erlenmeyer de suspension de levures agitée, sonde à dioxygène et sonde de température reliées à une interface, elle-même connectée à un ordinateur portable qui affiche une courbe décroissante.', 'photo', 1536, 1024),
  tableur: img(tableur, 'Feuille de tableur annotée : zone de nom, barre de formule affichant =MOYENNE(B2:B6), en-têtes de colonnes, numéros de lignes, cellule active B7 et poignée de recopie ; colonnes Essai, masse, écart à la référence et masse de référence.', 'schema', 1400, 933),
  tendance: img(tendance, 'Nuage de points d’une gamme de dosage des protéines : absorbance à 540 nm en fonction de la concentration, courbe de tendance y = 0,0572x, R² = 0,9999, un point entouré éloigné de la droite.', 'schema', 1400, 933),
  graphiques: img(graphiques, 'Trois graphiques dessinés au crayon : un diagramme en barres, une courbe de croissance sigmoïde (en forme de S), avec ses points, et un nuage de points aligné sur une droite passant par l’origine.', 'pencil', 1400, 933),
  molecule: img(molecule, 'Écran d’ordinateur affichant une protéine en représentation en rubans : hélices alpha et feuillets bêta colorés du bleu au rouge, sur fond noir.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'module-d-numerique',
  duration: 'Environ 3 séances, à remobiliser dans tous les chapitres',
  hook: {
    image: IMG.exao,
    question: 'Une sonde, une interface, un ordinateur : une courbe se trace toute seule. Mais qui vérifie qu’elle dit vrai ?',
    text: 'Au laboratoire de biotechnologies, le numérique est partout : des capteurs enregistrent la respiration de levures, un tableur calcule une concentration, un logiciel fait tourner une protéine en 3D, une base de données livre la fiche d’un micro-organisme, un document partagé rassemble le travail d’un groupe. Ces outils font gagner un temps précieux, à une condition : savoir les utiliser avec rigueur et esprit critique. C’est l’objet de ce chapitre.',
  },
  objectives: [
    'Exploiter des résultats expérimentaux avec un tableur : cellules, formules, fonctions, recopie.',
    'Choisir et construire un graphique adapté, ajouter une courbe de tendance et l’interpréter avec esprit critique.',
    'Utiliser un logiciel de visualisation 3D pour observer une molécule d’intérêt biologique.',
    'Rechercher une information avec des mots clés et des filtres, évaluer la fiabilité d’une source et rédiger une sitographie.',
    'Partager un document en ligne et produire un support oral ou un écrit structuré, lisible et rigoureux.',
  ],
  prerequisites: [
    'Les bases du tableur et du traitement de texte vues au collège.',
    'La notion de gamme d’étalonnage (chapitre « Obtenir des résultats de mesure fiables »).',
  ],
  program: [
    'Utiliser un logiciel de visualisation 3D de molécules d’intérêt biologique (représentation spatiale, interactivité).',
    'Consulter des bases de données ; trier les ressources ; élaborer une bibliographie, une sitographie (mot clé, filtre, requête, base de données et moteur de recherche, pertinence et fiabilité de l’information).',
    'Exploiter les résultats expérimentaux avec un tableur ou un logiciel dédié (cellule, fonctions mathématiques, courbe de tendance).',
    'Partager des documents en ligne (outils collaboratifs, documents partagés).',
    'Réaliser un support de présentation orale ; réaliser un document écrit structuré pour rendre compte d’une démarche (lisibilité, rigueur scientifique, schématisation, synthèse, hiérarchisation).',
  ],

  course: {
    parts: [
      {
        title: 'Exploiter des résultats avec un tableur',
        intro: 'Le tableur est la calculatrice du laboratoire : il calcule vite et sans erreur… à condition que les formules soient justes.',
        blocks: [
          { type: 'p', text: 'Un **tableur** (Calc de LibreOffice, Excel, tableur en ligne de l’ENT…) organise des données dans une grille de **cellules**. Chaque cellule est repérée par sa colonne (une lettre) et sa ligne (un nombre) : la cellule **B7** est à l’intersection de la colonne B et de la ligne 7. Le tableur est aussi un **grapheur** : il trace des graphiques à partir des données.' },
          { type: 'figure', image: IMG.tableur, caption: 'Les éléments d’une feuille de calcul. La cellule active B7 affiche le résultat (0,997) ; la barre de formule montre le calcul qu’elle contient : =MOYENNE(B2:B6).', size: 'wide' },
          { type: 'definition', term: 'Formule', text: 'calcul saisi dans une cellule, qui commence toujours par le signe **=**. Elle peut contenir des nombres, des **références** à d’autres cellules (B2, E2) et des **fonctions**. Si une donnée change, le résultat se met à jour automatiquement.' },
          {
            type: 'table',
            caption: 'Quelques fonctions mathématiques utiles (tableur en français)',
            head: ['Fonction', 'Exemple', 'Ce qu’elle calcule'],
            rows: [
              ['SOMME', '=SOMME(B2:B6)', 'la somme des cellules de B2 à B6'],
              ['MOYENNE', '=MOYENNE(B2:B6)', 'la moyenne de ces cellules'],
              ['MIN et MAX', '=MAX(B2:B6)-MIN(B2:B6)', 'la plus petite et la plus grande valeur ; ici, l’écart entre les deux'],
              ['NB', '=NB(B2:B6)', 'le nombre de cellules contenant un nombre'],
              ['ARRONDI', '=ARRONDI(B7;3)', 'la valeur de B7 arrondie à 3 décimales'],
            ],
          },
          { type: 'p', text: 'Le signe **:** désigne une plage de cellules (B2:B6 = de B2 à B6) ; dans un tableur en français, le signe **;** sépare les arguments d’une fonction, car la virgule sert de séparateur décimal.' },
          { type: 'definition', term: 'Recopie et références', text: 'en tirant la **poignée de recopie**, on copie une formule dans les cellules voisines : les références s’adaptent (B2 devient B3, B4…) ; ce sont des **références relatives**. Pour qu’une référence ne change pas, on la bloque avec le signe $ : **$E$2** est une **référence absolue**.' },
          { type: 'example', title: 'calculer des écarts à la référence', text: 'Dans la feuille ci-dessus, la cellule C2 contient =B2-$E$2. Recopiée vers le bas, elle devient =B3-$E$2, =B4-$E$2… : la masse change à chaque ligne, mais la référence 0,998 g, en E2, reste la même. Sans les $, la formule recopiée chercherait la référence en E3, E4… qui sont vides : les écarts seraient faux.' },
          {
            type: 'list',
            title: 'Organiser une feuille de calcul exploitable',
            items: [
              'Une seule donnée par cellule : un nombre sans son unité, l’unité étant indiquée dans l’**en-tête** de la colonne, par exemple « m (g) ».',
              'Une ligne par essai, une colonne par grandeur, des en-têtes explicites.',
              'Les **données brutes** sont conservées telles quelles ; les calculs se font dans d’autres colonnes.',
              'Les nombres sont saisis avec une virgule décimale : une valeur saisie avec un point peut être prise pour du texte et ignorée dans les calculs.',
              'Le nombre de décimales affichées est réglé pour rester cohérent avec la précision des mesures.',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Une formule commence par = ; elle utilise des références de cellules et des fonctions (SOMME, MOYENNE, MIN, MAX…).',
              'La recopie adapte les références relatives ; le signe $ bloque une référence absolue.',
              'Une donnée par cellule, l’unité dans l’en-tête, les données brutes conservées.',
            ],
          },
        ],
      },

      {
        title: 'Représenter des résultats : graphiques et courbe de tendance',
        intro: 'Un bon graphique montre en un coup d’œil ce qu’un tableau cache. Un mauvais graphique peut faire dire n’importe quoi aux données.',
        blocks: [
          { type: 'figure', image: IMG.graphiques, caption: 'Trois représentations, trois usages : diagramme en barres (comparer des catégories), courbe d’évolution (suivre une grandeur au cours du temps), nuage de points avec courbe de tendance (étudier la relation entre deux grandeurs).', size: 'wide' },
          {
            type: 'table',
            caption: 'Choisir la représentation adaptée à la question posée',
            head: ['Question posée', 'Représentation', 'Exemple au laboratoire'],
            rows: [
              ['Comparer des valeurs entre catégories', 'Diagramme en barres', 'Nombre de colonies sur trois milieux de culture'],
              ['Suivre l’évolution d’une grandeur au cours du temps', 'Courbe (points reliés)', 'Absorbance d’une culture de levures pendant 24 h (courbe de croissance)'],
              ['Étudier la relation entre deux grandeurs mesurées', 'Nuage de points + courbe de tendance', 'Absorbance en fonction de la concentration (gamme d’étalonnage)'],
            ],
          },
          {
            type: 'list',
            title: 'Les règles d’un graphique scientifique',
            ordered: true,
            items: [
              'Un **titre** qui dit ce que montre le graphique (« Absorbance à 540 nm en fonction de la concentration en protéines »).',
              'Des **axes nommés** avec la grandeur et son **unité** : en abscisse la grandeur que l’on fait varier, en ordonnée la grandeur mesurée.',
              'Une **échelle** adaptée, qui utilise bien la surface du graphique.',
              'Des points de mesure visibles ; une légende s’il y a plusieurs séries.',
              'Pas de lissage ni d’effet décoratif (3D, ombres) qui déforme les données.',
            ],
          },
          { type: 'warning', title: 'Le piège du graphique « en ligne »', text: 'Dans un tableur, le type « courbe » ou « ligne » place les valeurs de l’abscisse à intervalles réguliers, comme de simples étiquettes : des concentrations de 0, 2, 4, 6 et 10 g·L^-1^ seraient espacées de la même façon. Pour deux grandeurs numériques, on choisit toujours un **nuage de points (XY)**.' },
          { type: 'definition', term: 'Courbe de tendance', text: 'courbe tracée par le logiciel au plus près des points (par la méthode des moindres carrés), dont il peut afficher l’**équation**. Pour une gamme d’étalonnage, on choisit une tendance **linéaire passant par l’origine** (absorbance nulle quand la concentration est nulle) : y = a·x, où a est le coefficient directeur.' },
          { type: 'definition', term: 'Coefficient de détermination R²', text: 'nombre compris entre 0 et 1 qui indique à quel point les points sont proches de la courbe de tendance : plus il est proche de 1, mieux ils sont alignés. Il ne dit rien de la justesse des étalons : une gamme mal préparée peut être bien alignée.' },
          { type: 'figure', image: IMG.tendance, caption: 'Gamme de dosage des protéines (méthode du biuret). La courbe de tendance a été calculée sans le point entouré, nettement éloigné de la droite : ce point doit être expliqué, et l’étalon refait si possible.', size: 'wide' },
          { type: 'example', title: 'utiliser l’équation de la courbe de tendance', text: 'Avec y = 0,0572x, où y est l’absorbance et x la concentration en g·L^-1^ : un essai d’absorbance 0,412 a une concentration x = 0,412 ÷ 0,0572 ≈ 7,2 g·L^-1^ (valeur bien située dans la gamme de 0 à 10 g·L^-1^).' },
          { type: 'definition', term: 'ExAO', text: 'expérimentation assistée par ordinateur : des **capteurs** (sonde à dioxygène, pH-mètre, thermomètre, colorimètre…) mesurent une grandeur, une **interface** convertit le signal, et un **logiciel dédié** enregistre et trace les mesures en temps réel.' },
          { type: 'figure', image: IMG.exao, caption: 'Suivi par ExAO de la concentration en dioxygène d’une suspension de levures : la diminution traduit la consommation de dioxygène par la respiration cellulaire.', size: 'normal' },
          {
            type: 'compare',
            title: 'ExAO : atouts et précautions',
            columns: [
              { title: 'Atouts', items: ['Des centaines de mesures automatiques, à intervalle régulier.', 'Suivi en temps réel, sur de longues durées.', 'Données directement exploitables dans le logiciel ou le tableur.'] },
              { title: 'Précautions', items: ['Étalonner les capteurs avant la mesure.', 'Choisir la durée et l’intervalle d’acquisition.', 'Garder un regard critique : dérive du capteur, bruit, bulles d’air sur la sonde.'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Barres pour comparer des catégories, courbe pour une évolution dans le temps, nuage de points pour une relation entre deux grandeurs.',
              'Titre, axes nommés avec grandeur et unité, échelle adaptée : sans cela, un graphique ne vaut rien.',
              'La courbe de tendance donne une équation (y = a·x pour une gamme) ; R² mesure l’alignement, pas la justesse.',
            ],
          },
        ],
      },

      {
        title: 'Visualiser les molécules en 3D',
        intro: 'Une protéine fonctionne grâce à sa forme dans l’espace. Les logiciels de visualisation permettent de la voir, de la faire tourner et d’explorer sa structure.',
        blocks: [
          { type: 'p', text: 'Les structures tridimensionnelles des macromolécules biologiques (protéines, ADN, ARN) déterminées par les chercheurs sont déposées dans une banque de données mondiale et gratuite : la **Protein Data Bank (PDB)**, qui en compte plus de 200 000. Chaque structure a un **identifiant** de quatre caractères : 4HHB pour l’hémoglobine humaine, 1BNA pour un fragment d’ADN en double hélice, 1LYZ pour le lysozyme de blanc d’œuf.' },
          { type: 'p', text: 'Un **logiciel de visualisation 3D** lit ces fichiers et affiche la molécule à l’écran. Au lycée, on utilise par exemple **Libmol** (en ligne et gratuit), Rastop ou le visualiseur Mol* intégré au site de la PDB.' },
          { type: 'figure', image: IMG.molecule, caption: 'Une protéine en représentation « rubans » : les hélices alpha apparaissent comme des rubans enroulés, les feuillets bêta comme des flèches plates. La couleur varie du bleu au rouge du début à la fin de la chaîne d’acides aminés.', size: 'wide' },
          {
            type: 'table',
            caption: 'Les principales représentations',
            head: ['Représentation', 'Ce qu’elle montre', 'Utile pour…'],
            rows: [
              ['Fil de fer ou bâtonnets', 'Les liaisons entre atomes', 'Voir l’enchaînement des atomes d’une petite molécule (glucose)'],
              ['Boules et bâtonnets', 'Les atomes (boules) et les liaisons (bâtonnets)', 'Repérer les atomes et les groupements chimiques'],
              ['Sphères (modèle compact)', 'Le volume occupé par chaque atome', 'Voir la forme globale et la surface de la molécule'],
              ['Rubans', 'Le squelette de la chaîne : hélices et feuillets', 'Comprendre l’organisation d’une protéine'],
            ],
          },
          { type: 'definition', term: 'Code couleur des atomes', text: 'couleurs conventionnelles utilisées par la plupart des logiciels : **carbone** gris (ou noir), **oxygène** rouge, **azote** bleu, **hydrogène** blanc, **soufre** jaune, **phosphore** orange.' },
          { type: 'definition', term: 'Interactivité', text: 'possibilité d’agir sur la molécule affichée : la faire tourner, zoomer, changer de représentation ou de coloration (par élément, par chaîne, par structure), sélectionner et nommer un acide aminé ou un nucléotide, masquer les molécules d’eau, mesurer une distance.' },
          { type: 'note', title: 'Une image n’est pas la molécule', text: 'Une représentation est un **modèle** : les atomes ne sont pas des boules colorées et une hélice n’est pas un ruban. Chaque représentation met en valeur certaines informations et en cache d’autres. C’est pourquoi on en compare plusieurs.' },
          {
            type: 'retenir',
            items: [
              'Les structures 3D des macromolécules sont stockées dans la Protein Data Bank, chacune avec un identifiant de quatre caractères.',
              'Fil de fer, boules et bâtonnets, sphères, rubans : chaque représentation répond à une question.',
              'Code couleur : C gris, O rouge, N bleu, H blanc, S jaune, P orange.',
            ],
          },
        ],
      },

      {
        title: 'Rechercher et évaluer l’information',
        intro: 'Trouver une information prend quelques secondes ; savoir si elle est fiable demande de la méthode.',
        blocks: [
          {
            type: 'compare',
            title: 'Moteur de recherche ou base de données ?',
            columns: [
              { title: 'Moteur de recherche', subtitle: 'généraliste', items: ['Parcourt l’ensemble du Web.', 'Résultats très nombreux, de qualité très inégale, classés par un algorithme.', 'Utile pour une première exploration.'] },
              { title: 'Base de données', subtitle: 'spécialisée', items: ['Rassemble des informations sélectionnées et organisées sur un domaine.', 'Contenu validé par un organisme identifié.', 'Exemples : Protein Data Bank, base Baobab de l’INRS (agents biologiques), catalogue du CDI.'] },
            ],
          },
          { type: 'definition', term: 'Mot clé et requête', text: 'un **mot clé** est un terme précis qui résume le sujet ; une **requête** est la combinaison de mots clés soumise au moteur ou à la base. On peut l’affiner avec des opérateurs : ET (tous les mots), OU (l’un ou l’autre), SAUF (exclure un mot), et des guillemets pour une expression exacte : « résistance aux antibiotiques ».' },
          { type: 'definition', term: 'Filtre', text: 'critère qui restreint les résultats : date de publication, langue, type de document, organisme. Dans la PDB, on peut par exemple filtrer par organisme ou par méthode de détermination de la structure.' },
          {
            type: 'table',
            caption: 'Évaluer la fiabilité d’une source',
            head: ['Critère', 'Questions à se poser', 'Plutôt fiable si…'],
            rows: [
              ['Auteur', 'Qui écrit ? Est-il identifié, compétent ?', 'Organisme public, scientifique, enseignant, journaliste spécialisé identifié'],
              ['Objectif', 'Le site informe-t-il, vend-il, défend-il une opinion ?', 'But d’information, sans produit à vendre'],
              ['Date', 'Quand la page a-t-elle été publiée ou mise à jour ?', 'Date récente et indiquée'],
              ['Sources', 'Les affirmations sont-elles appuyées par des références ?', 'Sources citées et vérifiables'],
              ['Contenu', 'Est-il précis, nuancé, cohérent avec d’autres sources sérieuses ?', 'Vocabulaire exact, pas de promesse miracle, recoupement possible'],
            ],
          },
          { type: 'definition', term: 'Bibliographie et sitographie', text: 'liste des sources utilisées : livres et articles pour la **bibliographie**, pages web pour la **sitographie**. Elle permet au lecteur de vérifier les informations et respecte le travail des auteurs.' },
          {
            type: 'example',
            title: 'rédiger une référence',
            text: [
              'Livre : NOM Prénom de l’auteur. _Titre de l’ouvrage_. Éditeur, année.',
              'Page web : Auteur ou organisme. _Titre de la page_. Nom du site, date de publication ou de mise à jour si elle est indiquée. Adresse URL (consulté le jour/mois/année).',
              'Exemple : INRS. _Base Baobab, base d’observation des agents biologiques_. Site de l’INRS. https://www.inrs.fr/publications/bdd/baobab.html (consulté le 15 novembre 2026).',
            ],
          },
          { type: 'note', title: 'Trier les ressources', text: 'Au fil d’une recherche, on garde une trace des ressources utiles (titre, adresse, date de consultation, idée principale) et on écarte celles qui sont hors sujet ou peu fiables. Le professeur documentaliste du CDI peut t’aider à construire tes requêtes.' },
          {
            type: 'retenir',
            items: [
              'Moteur de recherche : tout le Web, qualité inégale ; base de données : contenu sélectionné et validé.',
              'Une requête efficace combine des mots clés précis, des opérateurs et des filtres.',
              'On évalue une source par son auteur, son objectif, sa date, ses références et son contenu, puis on la cite dans une bibliographie ou une sitographie.',
            ],
          },
        ],
      },

      {
        title: 'Collaborer et communiquer',
        intro: 'Un travail de laboratoire ne sert à rien s’il reste dans un cahier que personne ne peut relire. Partager et communiquer, c’est aussi de la science.',
        blocks: [
          { type: 'definition', term: 'Outil collaboratif', text: 'outil numérique qui permet à plusieurs personnes de travailler sur un même document en ligne : traitement de texte ou tableur partagé de l’ENT, espace de stockage commun, mur collaboratif. Chacun peut écrire, commenter, et l’**historique des versions** garde la trace des modifications.' },
          {
            type: 'list',
            title: 'Bonnes pratiques du travail partagé et de la traçabilité',
            items: [
              'Définir les **droits d’accès** : lecture seule, commentaire ou modification.',
              'Nommer les fichiers de façon explicite : classe, sujet, groupe, date, version, par exemple 1STL-dosage-biuret-G3-2026-11-15-v2.',
              'Conserver les données brutes et dater chaque version : on doit pouvoir retrouver d’où vient chaque résultat.',
              'Utiliser les commentaires pour discuter plutôt que d’effacer le travail des autres.',
              'Ne partager aucune donnée personnelle (nom de patient, photo d’un camarade) sans autorisation, et citer l’auteur et la licence des images utilisées.',
            ],
          },
          {
            type: 'cards',
            items: [
              { title: 'Lisibilité', text: 'Police assez grande, contraste suffisant, peu de texte, figures nettes et légendées.', tone: 'blue' },
              { title: 'Rigueur scientifique', text: 'Vocabulaire exact, unités, valeurs justes, sources citées, conclusions appuyées sur les résultats.', tone: 'green' },
              { title: 'Schématisation', text: 'Un schéma clair vaut mieux qu’un long paragraphe : protocole en logigramme, principe illustré.', tone: 'yellow' },
              { title: 'Synthèse et hiérarchisation', text: 'Aller à l’essentiel, du plus important au détail, avec des titres qui guident le lecteur.', tone: 'red' },
            ],
          },
          {
            type: 'steps',
            title: 'Structure d’un compte rendu écrit',
            items: [
              { title: 'Titre et problématique', text: 'Quelle question l’expérience cherche-t-elle à résoudre ?' },
              { title: 'Principe', text: 'L’idée de la méthode, en quelques lignes et un schéma.' },
              { title: 'Matériel et méthode', text: 'La procédure, sous forme de logigramme si possible.' },
              { title: 'Résultats', text: 'Tableaux et graphiques titrés, avec unités ; observations objectives.' },
              { title: 'Exploitation et discussion', text: 'Calculs, interprétation, critique des résultats (erreurs, limites).' },
              { title: 'Conclusion et sources', text: 'Réponse claire à la question posée, puis bibliographie et sitographie.' },
            ],
          },
          {
            type: 'list',
            title: 'Réussir un support de présentation orale',
            items: [
              'Une idée par diapositive, avec un titre informatif.',
              'Des mots clés plutôt que des phrases : l’orateur explique, la diapositive illustre.',
              'Des images, vidéos ou sons utiles au propos, légendés et sourcés.',
              'Une diapositive de plan au début, une conclusion à la fin ; s’entraîner pour respecter le temps.',
            ],
          },
          { type: 'note', title: 'Planifier un projet', text: 'Pour un projet de groupe, des logiciels gratuits permettent de construire un **diagramme de Gantt** : chaque tâche y est représentée par une barre sur un calendrier, ce qui aide à répartir le travail et à respecter les délais.' },
          {
            type: 'retenir',
            items: [
              'Un document partagé se gère avec des droits d’accès, un historique des versions et des noms de fichiers explicites.',
              'Toute communication scientifique vise la lisibilité, la rigueur, la schématisation, la synthèse et la hiérarchisation.',
              'Un compte rendu suit une structure : problématique, principe, méthode, résultats, discussion, conclusion, sources.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Ces activités se font de préférence devant un ordinateur, avec un tableur et un navigateur. Réponds d’abord seul(e), puis compare avec la correction.',
    activities: [
      {
        title: 'Traiter les résultats du contrôle d’une pipette',
        duration: '25 min',
        skills: ['Utiliser un tableur', 'Calculer'],
        context: 'Lors de la séance de métrologie des pipettes (AT5), un binôme a pesé cinq prises de 1 000 µL d’eau et saisi ses résultats dans un tableur.',
        documents: [
          { label: 'Document 1', title: 'La feuille de calcul du binôme', image: IMG.tableur, caption: 'Masses pesées (colonne B), écarts à la référence (colonne C) et masse de référence (cellule E2).' },
        ],
        questions: [
          { text: 'Quelle formule contient la cellule B7 ? Que calcule-t-elle ?', answer: 'B7 contient =MOYENNE(B2:B6) : elle calcule la moyenne des cinq masses pesées, de B2 à B6, soit 0,997 g (affiché avec trois décimales).' },
          { text: 'La cellule C2 contient =B2-$E$2. Que devient cette formule recopiée en C3 ? Pourquoi a-t-on écrit $E$2 ?', hint: 'Lors d’une recopie vers le bas, les références relatives avancent d’une ligne.', answer: 'En C3, elle devient =B3-$E$2. La référence B2 est relative : elle s’adapte à chaque ligne. La référence $E$2 est absolue : elle désigne toujours la masse de référence, seule valeur à soustraire à chaque masse.' },
          { text: 'Écris une formule qui calcule, dans une cellule libre, l’écart entre la plus grande et la plus petite masse.', answer: '=MAX(B2:B6)-MIN(B2:B6), qui donne 1,001 − 0,994 = 0,007 g. Cet écart renseigne sur la dispersion, donc sur la fidélité de la pipette.' },
          { text: 'Écris une formule qui calcule l’écart relatif moyen en pourcentage, puis conclus sur la justesse sachant que la tolérance est de 1 %.', answer: 'Par exemple =C7/E2*100, qui donne environ −0,06 % avec les valeurs non arrondies (la cellule C7 affiche −0,001, mais contient −0,0006). La valeur absolue de cet écart est bien inférieure à 1 % : la pipette est juste.' },
          { text: 'Propose un nom de fichier explicite pour ce travail et explique son intérêt.', answer: 'Par exemple 1STL-AT5-pipette-P1000-binome4-2026-11-15.ods : on sait sans l’ouvrir de quelle séance, de quel matériel, de quel binôme et de quelle date il s’agit. C’est indispensable pour la traçabilité.' },
        ],
      },
      {
        title: 'Construire et exploiter une courbe d’étalonnage',
        duration: '30 min',
        skills: ['Représenter', 'Exploiter', 'Critiquer'],
        context: 'Pour doser les protéines d’un sérum par la méthode du biuret, une classe a préparé une gamme d’étalons. Le sérum a été dilué au 1/10 avant la lecture.',
        documents: [
          {
            label: 'Document 2',
            title: 'Résultats du TP',
            blocks: [
              { type: 'table', head: ['Tube', 'ρ(protéines ; tube) en g·L^-1^', 'Absorbance à 540 nm'], rows: [['0 (blanc)', '0', '0,000'], ['1', '2', '0,118'], ['2', '4', '0,226'], ['3', '6', '0,347'], ['4', '8', '0,392'], ['5', '10', '0,570'], ['Essai (sérum dilué au 1/10)', '?', '0,412']] },
            ],
          },
          { label: 'Document 3', title: 'Graphique obtenu avec le tableur', image: IMG.tendance, caption: 'Nuage de points et courbe de tendance linéaire passant par l’origine, calculée sans le tube 4.' },
        ],
        questions: [
          { text: 'Quel type de graphique faut-il choisir dans le tableur ? Quelle grandeur en abscisse, laquelle en ordonnée ?', answer: 'Un nuage de points (XY), car les deux grandeurs sont numériques. En abscisse, la concentration en protéines (la grandeur que l’on fait varier), en ordonnée, l’absorbance (la grandeur mesurée).' },
          { text: 'Pourquoi choisit-on une courbe de tendance linéaire passant par l’origine ?', answer: 'L’absorbance est proportionnelle à la concentration dans cet intervalle, et le blanc (concentration nulle) a servi à faire le zéro : la droite doit passer par l’origine, d’équation y = a·x.' },
          { text: 'Le tube 4 semble aberrant. Qu’est-ce qui permet de le dire ? Peut-on simplement le supprimer ?', hint: 'Calcule l’absorbance attendue pour 8 g·L^-1^ avec l’équation de la droite.', answer: 'Avec y = 0,0572x, on attend A ≈ 0,0572 × 8 ≈ 0,458 ; on mesure 0,392, soit environ 14 % de moins, alors que les autres points sont sur la droite. On ne le supprime pas sans réfléchir : on cherche une cause (erreur de pipetage, tube mal homogénéisé), on le signale dans le compte rendu et, si possible, on refait cet étalon.' },
          { text: 'Calcule la concentration en protéines dans le tube d’essai, puis dans le sérum.', answer: 'Dans le tube : x = 0,412 ÷ 0,0572 ≈ 7,2 g·L^-1^, valeur située dans la gamme. Dans le sérum, dilué 10 fois : 7,2 × 10 = 72 g·L^-1^, ce qui est cohérent avec les valeurs habituelles des protéines sériques (environ 60 à 80 g·L^-1^).' },
          { text: 'Un élève affirme : « R² = 0,9999, donc mon dosage est forcément juste. » Qu’en penses-tu ?', answer: 'R² indique seulement que les points sont très bien alignés. Si la solution mère des étalons était mal préparée, tous les points seraient décalés de la même façon et resteraient alignés : le dosage serait faux malgré un excellent R². La justesse se vérifie avec un étalon de contrôle.' },
        ],
      },
      {
        title: 'Choisir la bonne représentation et exploiter une ExAO',
        duration: '20 min',
        skills: ['Choisir', 'Justifier'],
        context: 'Trois groupes doivent présenter leurs résultats, et un quatrième a utilisé un montage d’ExAO.',
        documents: [
          { label: 'Document 4', title: 'Trois types de graphiques', image: IMG.graphiques, caption: 'Diagramme en barres, courbe d’évolution, nuage de points avec courbe de tendance.' },
          {
            label: 'Document 5',
            title: 'Les situations',
            text: [
              'Situation A : comparer le nombre de colonies obtenues sur trois milieux de culture différents.',
              'Situation B : suivre l’absorbance d’une culture de levures toutes les heures pendant 24 h.',
              'Situation C : étudier le lien entre la concentration et l’absorbance pour une gamme d’étalons.',
              'Situation D : le groupe 4 a suivi la concentration en dioxygène d’une suspension de levures par ExAO, avec une mesure toutes les 5 secondes pendant 20 minutes.',
            ],
          },
        ],
        questions: [
          { text: 'Associe une représentation à chacune des situations A, B et C, en justifiant.', answer: 'A : diagramme en barres, car on compare des catégories (les milieux). B : courbe d’évolution, car on suit une grandeur au cours du temps (courbe de croissance). C : nuage de points avec courbe de tendance, car on étudie la relation entre deux grandeurs numériques.' },
          { text: 'Combien de mesures le groupe 4 a-t-il obtenues ? Pourquoi l’ExAO est-elle ici plus adaptée qu’une série de mesures à la main ?', answer: '20 min = 1 200 s ; 1 200 ÷ 5 = 240 intervalles, soit 241 mesures environ. À la main, ce serait impossible : l’ExAO mesure automatiquement, à intervalle régulier et en temps réel.' },
          { text: 'Cite deux précautions à prendre pour que les mesures de l’ExAO soient fiables.', answer: 'Étalonner la sonde à dioxygène avant la mesure ; vérifier qu’aucune bulle d’air ne reste collée à la sonde ; agiter la suspension de façon régulière ; maintenir une température constante (grandeur d’influence).' },
        ],
      },
      {
        title: 'Explorer une protéine en 3D',
        duration: '25 min',
        skills: ['Observer', 'Utiliser un logiciel'],
        context: 'Avec le logiciel Libmol, tu ouvres la structure de l’hémoglobine humaine (identifiant PDB : 4HHB), puis celle d’une petite protéine affichée en rubans.',
        documents: [
          { label: 'Document 6', title: 'Une protéine affichée en rubans', image: IMG.molecule, caption: 'Coloration « arc-en-ciel » du début (bleu) à la fin (rouge) de la chaîne.' },
          {
            label: 'Document 7',
            title: 'Quelques commandes du logiciel',
            text: [
              'Clic gauche maintenu : faire tourner la molécule. Molette : zoomer.',
              'Menu « Représentation » : bâtonnets, boules et bâtonnets, sphères, rubans.',
              'Menu « Couleurs » : par élément chimique, par chaîne, par structure secondaire.',
              'Clic sur un atome : affiche le nom de l’acide aminé et sa position dans la chaîne.',
            ],
            link: { label: 'Ouvrir Libmol', url: 'https://libmol.org/' },
          },
        ],
        questions: [
          { text: 'Sur le document 6, repère et nomme les deux types de structures visibles.', answer: 'Des hélices alpha, représentées par des rubans enroulés en spirale, et des feuillets bêta, représentés par des flèches plates parallèles. Les parties fines qui les relient sont des boucles.' },
          { text: 'Que signifie la coloration du bleu au rouge ?', answer: 'Elle suit l’ordre de la chaîne d’acides aminés : le bleu correspond au début de la chaîne et le rouge à la fin. Elle permet de suivre le trajet de la chaîne dans l’espace.' },
          { text: 'Tu affiches l’hémoglobine en coloration « par chaîne ». Tu vois quatre couleurs. Qu’en déduis-tu ?', answer: 'L’hémoglobine est formée de quatre chaînes polypeptidiques (deux chaînes alpha et deux chaînes bêta), associées dans l’espace.' },
          { text: 'Quelle représentation choisirais-tu pour voir la forme globale de la protéine, et laquelle pour repérer les atomes d’oxygène d’un acide aminé ? Justifie.', answer: 'Pour la forme globale : les sphères (modèle compact), qui montrent le volume occupé. Pour repérer les atomes d’oxygène : les boules et bâtonnets avec la coloration par élément, où l’oxygène apparaît en rouge.' },
          { text: 'Pourquoi l’interactivité du logiciel est-elle indispensable pour comprendre une structure 3D ?', answer: 'Une image fixe est une projection à plat : des parties de la molécule en cachent d’autres. Faire tourner, zoomer et changer de représentation permet de percevoir la profondeur et d’explorer la structure sous tous les angles.' },
        ],
      },
      {
        title: 'Rechercher, évaluer et citer des sources',
        duration: '25 min',
        skills: ['Rechercher', 'Évaluer', 'Communiquer'],
        context: 'Pour un exposé sur la bactérie _Pseudomonas aeruginosa_, ton groupe a obtenu les résultats suivants avec un moteur de recherche (présentation simplifiée d’une recherche).',
        documents: [
          {
            label: 'Document 8',
            title: 'Quatre résultats de recherche',
            text: [
              'Source 1 : fiche de la base Baobab de l’INRS sur _Pseudomonas aeruginosa_ : groupe de risque, réservoirs, transmission, maladies ; mise à jour datée, références citées.',
              'Source 2 : blog anonyme qui vend un « spray antibactérien naturel » et affirme qu’il « élimine 100 % des bactéries dangereuses ».',
              'Source 3 : article d’encyclopédie collaborative en ligne, avec de nombreuses références en bas de page.',
              'Source 4 : message sur un forum de discussion, non daté, signé d’un pseudonyme.',
            ],
          },
        ],
        questions: [
          { text: 'Classe ces sources de la plus fiable à la moins fiable, en utilisant au moins trois critères.', answer: 'Source 1 (organisme public spécialisé, but d’information, date de mise à jour, références) ; puis source 3 (utile pour débuter, mais auteurs multiples : il faut vérifier dans les références citées) ; puis source 4 (auteur anonyme, non daté, sans source) ; la source 2 est la moins fiable (auteur anonyme, objectif commercial, promesse invérifiable de « 100 % »).' },
          { text: 'Propose une requête pour trouver des informations sur la résistance de cette bactérie aux antibiotiques, en utilisant des mots clés, des guillemets et un opérateur.', answer: 'Par exemple : « Pseudomonas aeruginosa » ET « résistance aux antibiotiques » (au clavier, on tape des guillemets droits). On peut ajouter un filtre de date (moins de 5 ans) ou rechercher sur des sites d’organismes officiels.' },
          { text: 'Quelle est la différence entre la recherche faite ici et une recherche directe dans la base Baobab ?', answer: 'Le moteur de recherche parcourt tout le Web et mélange des sources de qualité très inégale. La base Baobab ne contient que des fiches rédigées et validées par l’INRS, organisées selon les mêmes rubriques : l’information y est moins abondante mais fiable.' },
          { text: 'Rédige l’entrée de la source 1 pour la sitographie de ton exposé.', answer: 'INRS. Base Baobab, fiche _Pseudomonas aeruginosa_. Site de l’INRS. https://www.inrs.fr/publications/bdd/baobab.html (consulté le 15 novembre 2026). On indique l’organisme auteur, le titre, le site, l’adresse et la date de consultation.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Dans un tableur, une formule commence par = ; elle combine des références (relatives ou absolues avec $) et des fonctions comme SOMME, MOYENNE, MIN, MAX.',
      'Le graphique dépend de la question : barres pour comparer, courbe pour une évolution, nuage de points pour une relation entre deux grandeurs ; titre, axes, grandeurs et unités sont obligatoires.',
      'La courbe de tendance fournit une équation (y = a·x pour une gamme) ; R² mesure l’alignement des points, pas la justesse du dosage.',
      'L’ExAO enregistre automatiquement des mesures en temps réel grâce à des capteurs étalonnés, une interface et un logiciel dédié.',
      'Les structures 3D des macromolécules se trouvent dans la Protein Data Bank ; un logiciel de visualisation permet de les explorer avec différentes représentations.',
      'Une information se recherche avec des mots clés et des filtres, s’évalue (auteur, objectif, date, sources, contenu) et se cite dans une bibliographie ou une sitographie.',
      'Un document partagé se gère avec des droits, un historique et des noms explicites ; toute communication vise lisibilité, rigueur et synthèse.',
    ],
    method: {
      title: 'Construire une courbe d’étalonnage au tableur',
      steps: [
        'Saisir les données : une colonne par grandeur, l’unité dans l’en-tête, une virgule décimale.',
        'Sélectionner les deux colonnes et insérer un graphique de type **nuage de points (XY)**.',
        'Ajouter un titre, nommer les axes avec la grandeur et l’unité.',
        'Ajouter une courbe de tendance linéaire, l’interception étant fixée à 0, et afficher l’équation et R².',
        'Vérifier que tous les points sont proches de la droite ; expliquer ou refaire un point aberrant.',
        'Calculer la concentration de l’essai à partir de l’équation, si son absorbance est dans la gamme.',
      ],
    },
    vocabulary: [
      { term: 'Tableur-grapheur', definition: 'Logiciel qui calcule à partir de données organisées en cellules et trace des graphiques.' },
      { term: 'Cellule', definition: 'Case du tableur repérée par une lettre de colonne et un numéro de ligne (B7).' },
      { term: 'Formule', definition: 'Calcul saisi dans une cellule, commençant par le signe =.' },
      { term: 'Référence absolue', definition: 'Référence bloquée par le signe $ ($E$2), qui ne change pas lors d’une recopie.' },
      { term: 'Courbe de tendance', definition: 'Courbe calculée au plus près des points d’un graphique, dont le logiciel affiche l’équation.' },
      { term: 'Coefficient de détermination', definition: 'R², entre 0 et 1 : indique l’alignement des points sur la courbe de tendance.' },
      { term: 'ExAO', definition: 'Expérimentation assistée par ordinateur : capteurs, interface et logiciel d’acquisition.' },
      { term: 'Protein Data Bank', definition: 'Banque de données mondiale des structures 3D des macromolécules biologiques.' },
      { term: 'Représentation en rubans', definition: 'Représentation 3D d’une protéine qui montre les hélices et les feuillets de sa chaîne.' },
      { term: 'Interactivité', definition: 'Possibilité d’agir sur la molécule affichée : rotation, zoom, sélection, changement de représentation.' },
      { term: 'Requête', definition: 'Combinaison de mots clés et d’opérateurs soumise à un moteur de recherche ou à une base.' },
      { term: 'Filtre', definition: 'Critère qui restreint les résultats d’une recherche (date, langue, type de document).' },
      { term: 'Sitographie', definition: 'Liste des sites web consultés, avec auteur, titre, adresse et date de consultation.' },
      { term: 'Outil collaboratif', definition: 'Outil numérique permettant de travailler à plusieurs sur un même document en ligne.' },
    ],
    mistakes: [
      { wrong: 'Taper « 0,998 g » dans une cellule.', right: 'On saisit seulement le nombre ; l’unité va dans l’en-tête de la colonne, sinon le tableur ne peut pas calculer.' },
      { wrong: 'Recopier une formule sans bloquer la cellule de référence.', right: 'On écrit $E$2 pour que la référence ne se décale pas lors de la recopie.' },
      { wrong: 'Choisir un graphique « courbe » pour une gamme d’étalonnage.', right: 'On choisit un nuage de points (XY), qui respecte les valeurs de l’abscisse.' },
      { wrong: 'Croire qu’un R² proche de 1 prouve que le dosage est juste.', right: 'R² mesure l’alignement ; la justesse se vérifie avec un étalon de contrôle.' },
      { wrong: 'Copier un paragraphe trouvé sur Internet sans citer la source.', right: 'On reformule et on cite chaque source dans la sitographie.' },
      { wrong: 'Considérer la représentation en boules d’une molécule comme une photographie.', right: 'C’est un modèle, qui met en valeur certaines informations et en cache d’autres.' },
    ],
    quiz: [
      { question: 'Dans un tableur, une formule commence toujours par :', choices: ['le signe =', 'le signe $', 'une lettre', 'le signe :'], answer: 0, explanation: 'Le signe = indique au tableur qu’il doit calculer.' },
      { question: 'La formule =MOYENNE(B2:B6) calcule :', choices: ['la somme de B2 et B6', 'la moyenne des cellules de B2 à B6', 'la moyenne de B2 et B6 seulement', 'le nombre de cellules de B2 à B6'], answer: 1, explanation: 'Le signe : désigne la plage de B2 à B6.' },
      { question: 'La formule =B2-$E$2, recopiée une ligne plus bas, devient :', choices: ['=B2-$E$3', '=B3-$E$3', '=B3-$E$2', '=B2-$E$2'], answer: 2, explanation: 'B2 est relative et devient B3 ; $E$2 est absolue et ne change pas.' },
      { question: 'Pour représenter l’absorbance en fonction de la concentration, on choisit :', choices: ['un diagramme en secteurs', 'un diagramme en barres', 'un graphique « ligne » à intervalles réguliers', 'un nuage de points'], answer: 3, explanation: 'Deux grandeurs numériques : nuage de points (XY), puis courbe de tendance.' },
      { question: 'Un coefficient R² = 0,998 signifie que :', choices: ['les points sont très bien alignés sur la courbe de tendance', 'le dosage est juste à 99,8 %', 'l’incertitude est de 0,2 %', 'la gamme passe par l’origine'], answer: 0, explanation: 'R² renseigne seulement sur l’alignement des points.' },
      { question: 'Avec la courbe de tendance y = 0,05x, un essai d’absorbance 0,30 a pour concentration :', choices: ['0,015 g·L^-1^', '6,0 g·L^-1^', '0,60 g·L^-1^', '60 g·L^-1^'], answer: 1, explanation: 'x = 0,30 ÷ 0,05 = 6,0 g·L^-1^.' },
      { question: 'La Protein Data Bank est :', choices: ['un logiciel de traitement de texte', 'une banque de données de structures 3D de macromolécules', 'un moteur de recherche généraliste', 'un réseau social de chercheurs'], answer: 1, explanation: 'Elle rassemble les structures 3D déterminées par les chercheurs, chacune avec un identifiant.' },
      { question: 'Dans le code couleur habituel des atomes, l’oxygène est :', choices: ['bleu', 'jaune', 'rouge', 'blanc'], answer: 2, explanation: 'Carbone gris, oxygène rouge, azote bleu, hydrogène blanc, soufre jaune.' },
      { question: 'Quel critère rend une source peu fiable ?', choices: ['un auteur identifié', 'une date de mise à jour', 'des références citées', 'un objectif commercial avec des promesses spectaculaires'], answer: 3, explanation: 'Un site qui vend un produit n’est pas une source d’information neutre.' },
      { question: 'L’historique des versions d’un document partagé permet :', choices: ['de retrouver qui a modifié quoi et de revenir à une version antérieure', 'd’empêcher toute modification', 'de traduire le document', 'de vérifier l’orthographe'], answer: 0, explanation: 'Il garantit la traçabilité du travail collectif.' },
    ],
    exercises: [
      {
        title: 'Construire une feuille de calcul',
        statement: ['Trois binômes ont mesuré l’absorbance d’un même essai : 0,412 ; 0,418 ; 0,409. La courbe de tendance de la gamme est y = 0,0572x (x en g·L^-1^).', 'a) Organise ces données dans un tableur (en-têtes, cellules). b) Écris la formule de la moyenne et celle de la concentration correspondante. c) Calcule les valeurs.'],
        answer: ['a) Colonne A « Binôme » (1, 2, 3 en A2 à A4), colonne B « Absorbance à 540 nm » (B2 à B4) ; cellule E2 contenant le coefficient 0,0572.', 'b) En B5 : =MOYENNE(B2:B4). En B6 : =B5/$E$2 (ou =B5/0,0572).', 'c) Moyenne = (0,412 + 0,418 + 0,409) ÷ 3 = 0,413 ; concentration = 0,413 ÷ 0,0572 ≈ 7,22 g·L^-1^ dans le tube.'],
      },
      {
        title: 'Critiquer un graphique',
        statement: 'Un élève présente une courbe de croissance de levures tracée avec le type « courbe » du tableur. Les mesures ont été faites à 0, 1, 2, 4, 8 et 24 h. Le graphique n’a ni titre ni unités. Relève les erreurs et propose une version correcte.',
        answer: ['Erreur 1 : le type « courbe » place les temps à intervalles réguliers, ce qui déforme l’allure (l’écart entre 8 h et 24 h est représenté comme celui entre 0 et 1 h).', 'Erreur 2 : pas de titre, axes sans grandeur ni unité.', 'Version correcte : nuage de points (XY) avec points reliés, temps en heures en abscisse, absorbance (sans unité) ou concentration en cellules en ordonnée, titre « Évolution de l’absorbance d’une culture de levures en fonction du temps ».'],
      },
      {
        title: 'Préparer un exposé',
        statement: 'Ton groupe prépare un exposé de 5 minutes sur le dosage des protéines. Propose un plan de 5 diapositives et indique, pour chacune, le contenu principal et une règle de lisibilité à respecter.',
        answer: ['1. Titre et problématique (« Comment mesurer la quantité de protéines d’un sérum ? ») : titre court et lisible.', '2. Principe de la méthode du biuret : un schéma légendé plutôt qu’un paragraphe.', '3. Protocole : un logigramme simple.', '4. Résultats : la courbe d’étalonnage titrée, avec axes, unités et équation.', '5. Conclusion et sources : la valeur obtenue avec son unité, sa comparaison aux valeurs normales et la sitographie.'],
      },
    ],
    selfCheck: [
      'Je sais écrire une formule avec des références et des fonctions, et utiliser la recopie.',
      'Je sais quand bloquer une référence avec le signe $.',
      'Je sais choisir un graphique adapté et le rendre complet (titre, axes, unités).',
      'Je sais ajouter une courbe de tendance et utiliser son équation, en restant critique sur R².',
      'Je sais afficher une molécule en 3D et choisir une représentation adaptée.',
      'Je sais construire une requête, évaluer la fiabilité d’une source et rédiger une sitographie.',
      'Je sais travailler sur un document partagé et structurer un compte rendu ou un support oral.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Protein Data Bank (RCSB PDB)', url: 'https://www.rcsb.org/' },
      { title: 'Libmol, visualiseur moléculaire en ligne', url: 'https://libmol.org/' },
      { title: 'Protein Data Bank — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Protein_Data_Bank' },
      { title: 'Expérimentation assistée par ordinateur — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Exp%C3%A9rimentation_assist%C3%A9e_par_ordinateur' },
      { title: 'Base Baobab sur les agents biologiques — INRS', url: 'https://www.inrs.fr/publications/bdd/baobab.html' },
      { title: 'Pix, le service public pour évaluer et certifier ses compétences numériques', url: 'https://pix.fr/' },
    ],
  },
};

export default lesson;
