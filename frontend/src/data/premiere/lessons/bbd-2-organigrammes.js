import { img } from '../media';
import organigramme from '../../../assets/courses/premiere/bbd-2-organigrammes/organigramme.webp';
import coqs from '../../../assets/courses/premiere/bbd-2-organigrammes/coqs-berthold.webp';
import tubesLugol from '../../../assets/courses/premiere/bbd-2-organigrammes/tubes-lugol.webp';

const IMG = {
  organigramme: img(organigramme, 'Organigramme type d’une démarche expérimentale : problème, hypothèse, puis deux branches parallèles (lot témoin et lot expérimental, un seul facteur diffère), chacune menant à un résultat ; les deux résultats mènent à une comparaison puis à la conclusion.', 'schema', 933, 1400),
  coqs: img(coqs, 'Planche au crayon de trois coqs de profil : à gauche un coq à grande crête dentelée, au centre un coq castré à crête et barbillons très réduits, à droite un coq castré ayant reçu une greffe de testicule, à grande crête.', 'pencil', 1400, 933),
  lugol: img(tubesLugol, 'Six tubes à essai dans un portoir après ajout de lugol : tubes 1, 2 et 5 bleu-noir, tubes 3 et 6 jaune-orangé, tube 4 jaune pâle ; un flacon compte-gouttes de lugol et un bain-marie en arrière-plan.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bbd-2-organigrammes',
  duration: 'Environ 2 séances, puis réinvesti dans les modules thématiques',
  hook: {
    image: IMG.coqs,
    question: 'En 1849, un médecin allemand castre de jeunes coqs : leur crête régresse. Il greffe alors un testicule dans leur ventre, loin de sa place normale, et la crête se maintient. Comment représenter clairement cette expérience pour en tirer une conclusion solide ?',
    text: 'Une expérience scientifique compare toujours plusieurs lots traités différemment. Quand le texte est long, on s’y perd. L’organigramme d’expériences met la démarche à plat : un coup d’œil suffit pour voir ce qui varie, ce qui sert de témoin, ce que l’on observe et ce que l’on conclut. C’est l’outil idéal pour lire, concevoir et présenter une expérience de biochimie ou de physiologie.',
  },
  objectives: [
    'Repérer dans un organigramme le problème, les lots, le facteur étudié, les résultats et la conclusion.',
    'Identifier le lot témoin et vérifier qu’un seul facteur varie entre deux lots comparés.',
    'Lire un organigramme de protocole et un organigramme d’expériences comparées, puis conclure lot par lot.',
    'Construire un organigramme clair à partir d’un texte ou d’un protocole.',
    'Concevoir une expérience montrant qu’une molécule présente les propriétés d’une hormone.',
    'Suivre une clé de détermination (organigramme de décision).',
  ],
  prerequisites: [
    'Savoir distinguer une observation d’une interprétation (leçon D.1).',
    'Savoir qu’une enzyme catalyse une réaction et que l’amidon est révélé par le lugol (bleu-noir).',
  ],
  program: [
    'Interpréter avec rigueur des résultats expérimentaux obtenus en laboratoire (objectif de formation).',
    'Mettre en évidence le rôle de la catalyse enzymatique, l’influence des paramètres physico-chimiques sur l’activité enzymatique et le rôle de la bile (module 01, digestion).',
    'Expliquer à partir de documents le contrôle des caractères sexuels secondaires masculins par la testostérone : expériences réalisées sur des modèles animaux (module 02).',
    'Concevoir des expériences permettant de montrer qu’une molécule présente les propriétés d’une hormone ; analyser des expériences historiques (module D, item 7).',
    'Identifier les caractéristiques d’une hormone : cellule cible, greffe, voie sanguine (module D, item 8).',
    'Réaliser un document écrit structuré pour rendre compte d’une démarche (programme de biotechnologies).',
  ],

  course: {
    parts: [
      {
        title: 'Qu’est-ce qu’un organigramme d’expériences ?',
        intro: 'Un bon schéma vaut mieux qu’un long texte : l’organigramme montre la structure d’une démarche en un coup d’œil.',
        blocks: [
          { type: 'definition', term: 'Organigramme d’expériences', text: 'représentation graphique d’une démarche expérimentale ou d’un protocole, formée de **cases** (étapes, lots, résultats, conclusions) reliées par des **flèches** qui indiquent l’ordre chronologique ou logique.' },
          { type: 'p', text: 'Il remplace un texte continu par une structure visuelle : on voit immédiatement **combien de lots** sont comparés, **ce qui diffère** entre eux, **ce qui est observé** et **ce que l’on conclut**. Au laboratoire, il sert aussi de « feuille de route » pendant la manipulation.' },
          {
            type: 'cards',
            items: [
              { title: 'Organigramme de démarche', text: 'Problème → hypothèse → expérience → résultats → conclusion. Il montre le raisonnement scientifique.', tone: 'blue' },
              { title: 'Organigramme de protocole', text: 'Suite ordonnée d’opérations : prélever, mélanger, incuber, révéler, lire. Il guide la manipulation.', tone: 'green' },
              { title: 'Organigramme d’expériences comparées', text: 'Plusieurs branches parallèles, une par lot, traitées de la même façon sauf pour le facteur étudié.', tone: 'yellow' },
              { title: 'Organigramme de décision', text: 'Questions successives à réponse oui ou non qui mènent à une identification (clé de détermination).', tone: 'red' },
            ],
          },
          {
            type: 'table',
            caption: 'Conventions graphiques les plus courantes',
            head: ['Élément', 'Représentation', 'Exemple'],
            rows: [
              ['Étape, action', 'Case rectangulaire ; verbe à l’infinitif ou nom court', '« Ajouter 1 mL d’amylase »'],
              ['Condition opératoire', 'Écrite le long de la flèche ou sous la case', '« 10 min à 37 °C »'],
              ['Lot', 'Une branche verticale par lot, toutes alignées au même niveau', '« Lot témoin », « Lot expérimental »'],
              ['Question, test', 'Case en losange ; réponses « oui » ou « non » sur les flèches qui en partent', '« La cellule a-t-elle un noyau ? »'],
              ['Résultat', 'Case distincte (encadré arrondi, couleur), sous la dernière étape du lot', '« Coloration bleu-noir »'],
              ['Conclusion', 'Case finale, en bas, qui rassemble les branches', '« L’amylase hydrolyse l’amidon »'],
              ['Flèche', 'Indique l’étape suivante ; une flèche ne se croise pas avec une autre', '→'],
            ],
          },
          { type: 'warning', title: 'Pas de norme unique', text: 'Il n’existe pas une seule façon de dessiner un organigramme. L’essentiel est d’être **cohérent** : même forme pour le même type de case, même niveau pour la même étape dans tous les lots. Si tu utilises un code (couleurs, formes), ajoute une **légende**.' },
          {
            type: 'retenir',
            items: [
              'Un organigramme représente une démarche ou un protocole par des cases reliées par des flèches.',
              'Quatre usages : démarche, protocole, expériences comparées, décision (clé de détermination).',
              'Les conventions doivent être cohérentes : une forme par type de case, un niveau par étape.',
            ],
          },
        ],
      },

      {
        title: 'La logique d’une expérience : témoin et facteur unique',
        intro: 'Un organigramme n’est utile que si l’expérience qu’il représente est bien construite.',
        blocks: [
          { type: 'definition', term: 'Facteur étudié', text: 'paramètre que l’expérimentateur fait varier volontairement pour tester son hypothèse (présence d’une enzyme, température, présence d’un organe…). On l’appelle aussi **variable**.' },
          { type: 'definition', term: 'Lot expérimental', text: 'lot dans lequel le facteur étudié est modifié.' },
          { type: 'definition', term: 'Lot témoin', text: 'lot traité exactement comme le lot expérimental, **sauf pour le facteur étudié**. La comparaison des deux lots permet d’attribuer la différence de résultat à ce seul facteur.' },
          { type: 'figure', image: IMG.organigramme, caption: 'Structure type d’un organigramme d’expériences : les deux branches ne diffèrent que par un seul facteur ; c’est la comparaison de leurs résultats qui permet de conclure.', size: 'small' },
          { type: 'p', text: 'C’est le principe du **facteur unique** (on dit aussi « toutes choses égales par ailleurs ») : si deux lots diffèrent par deux facteurs à la fois, on ne peut pas savoir lequel des deux est responsable de la différence observée.' },
          {
            type: 'table',
            caption: 'Témoin négatif et témoin positif',
            head: ['Type de témoin', 'Définition', 'Exemple (digestion de l’amidon)'],
            rows: [
              ['Témoin négatif', 'Lot où l’effet ne doit **pas** se produire : il vérifie que le résultat n’apparaît pas sans le facteur étudié.', 'Empois d’amidon + eau, sans enzyme : l’amidon doit rester (lugol bleu-noir).'],
              ['Témoin positif', 'Lot où l’effet **doit** se produire : il vérifie que la technique fonctionne et que les réactifs sont actifs.', 'Empois d’amidon + amylase à 37 °C : l’amidon doit disparaître (lugol jaune-orangé).'],
            ],
          },
          {
            type: 'list',
            title: 'Les autres qualités d’une expérience fiable',
            items: [
              '**Paramètres fixés** : volumes, concentrations, durée, pH, température identiques dans tous les lots (sauf le facteur étudié).',
              '**Répétition** : plusieurs essais, plusieurs animaux ou plusieurs tubes par lot, pour vérifier que le résultat n’est pas dû au hasard.',
              '**Mesure objective** : un critère de résultat clair, si possible chiffré (couleur, durée, masse, concentration).',
            ],
          },
          { type: 'warning', title: 'Erreur classique', text: 'Comparer un tube « amylase à 37 °C » avec un tube « eau à 0 °C » : deux facteurs diffèrent (présence d’enzyme et température). Aucune conclusion n’est possible. Il faut comparer des lots qui ne diffèrent que par **un** facteur.' },
          {
            type: 'retenir',
            items: [
              'Le lot témoin ne diffère du lot expérimental que par le facteur étudié.',
              'Témoin négatif : l’effet ne doit pas apparaître ; témoin positif : l’effet doit apparaître.',
              'Une expérience fiable fixe tous les autres paramètres et répète les essais.',
            ],
          },
        ],
      },

      {
        title: 'Lire un organigramme : exemple résolu de la digestion de l’amidon',
        intro: 'Voici comment exploiter, pas à pas, un organigramme d’expériences comparées issu d’une séance de travaux pratiques.',
        blocks: [
          { type: 'p', text: 'Problème : **quelles conditions permettent à l’amylase d’hydrolyser l’amidon ?** L’amidon est révélé par le lugol (eau iodée) : coloration **bleu-noir** s’il est présent, couleur **jaune-orangé** du lugol s’il a disparu.' },
          {
            type: 'flow',
            title: 'Étapes communes à tous les tubes (paramètres fixés)',
            steps: [
              { title: 'Préparer', text: '6 tubes de 5 mL d’empois d’amidon à 1 %' },
              { title: 'Ajouter', text: '1 mL d’amylase, de salive diluée ou d’eau selon le tube' },
              { title: 'Incuber', text: '10 min à la température du tube' },
              { title: 'Révéler', text: '2 gouttes de lugol' },
              { title: 'Lire', text: 'la couleur obtenue' },
            ],
          },
          {
            type: 'table',
            caption: 'Ce qui diffère entre les tubes, et les résultats obtenus',
            head: ['Tube', 'Contenu ajouté à l’empois', 'Condition d’incubation', 'Couleur avec le lugol'],
            rows: [
              ['1', 'Eau distillée', '37 °C', 'Bleu-noir'],
              ['2', 'Amylase', '0 °C (bain de glace)', 'Bleu-noir'],
              ['3', 'Amylase', '37 °C', 'Jaune-orangé'],
              ['4', 'Amylase', '10 min à 0 °C, puis 10 min à 37 °C', 'Jaune pâle'],
              ['5', 'Amylase bouillie 5 min puis refroidie', '37 °C', 'Bleu-noir'],
              ['6', 'Salive diluée', '37 °C', 'Jaune-orangé'],
            ],
          },
          { type: 'figure', image: IMG.lugol, caption: 'Résultats des six tubes après ajout de lugol (tubes 1 à 6 de gauche à droite). Bleu-noir : amidon présent ; jaune-orangé : amidon hydrolysé.', size: 'wide' },
          {
            type: 'steps',
            title: 'Méthode de lecture d’un organigramme d’expériences comparées',
            items: [
              { title: 'Repérer le problème', text: 'Quelle question l’expérience cherche-t-elle à résoudre ?' },
              { title: 'Repérer les étapes communes', text: 'Ce sont les paramètres fixés : ils ne peuvent pas expliquer une différence entre lots.' },
              { title: 'Repérer ce qui diffère', text: 'Pour chaque lot, note le ou les facteurs qui le distinguent des autres.' },
              { title: 'Former des paires', text: 'Associe chaque lot à celui qui ne diffère que par **un** facteur : c’est son témoin.' },
              { title: 'Conclure paire par paire', text: 'Pour chaque paire : seule différence → résultat → conclusion.' },
              { title: 'Faire la synthèse', text: 'Rassemble les conclusions partielles pour répondre au problème.' },
            ],
          },
          {
            type: 'table',
            caption: 'Exploitation paire par paire',
            head: ['Paire comparée', 'Seule différence', 'Résultat', 'Conclusion'],
            rows: [
              ['Tube 1 / tube 3', 'Présence d’amylase', 'L’amidon disparaît seulement avec l’amylase.', 'L’amylase hydrolyse l’amidon.'],
              ['Tube 2 / tube 3', 'Température (0 °C ou 37 °C)', 'Pas d’hydrolyse à 0 °C.', 'À 0 °C, l’amylase est inactive (ou très ralentie).'],
              ['Tube 2 / tube 4', 'Passage à 37 °C après le froid', 'L’hydrolyse reprend.', 'L’effet du froid est **réversible** : l’enzyme n’est pas détruite.'],
              ['Tube 3 / tube 5', 'Chauffage préalable de l’amylase', 'Pas d’hydrolyse après ébullition.', 'La chaleur détruit l’enzyme de façon **irréversible** (dénaturation).'],
              ['Tube 1 / tube 6', 'Présence de salive', 'L’amidon disparaît avec la salive.', 'La salive contient une enzyme qui hydrolyse l’amidon : l’amylase salivaire.'],
            ],
          },
          { type: 'example', title: 'synthèse rédigée', text: 'L’amylase, présente notamment dans la salive, hydrolyse l’amidon à 37 °C (tubes 1, 3 et 6). Elle est inactive à 0 °C, mais retrouve son activité quand on la replace à 37 °C (tubes 2 et 4) ; en revanche, une ébullition la rend définitivement inactive (tube 5). L’activité de l’amylase dépend donc de la température : le froid l’inhibe de façon réversible, la chaleur la dénature de façon irréversible.' },
          { type: 'note', title: 'Pourquoi le tube 4 est-il plus pâle ?', text: 'Après seulement 10 min à 37 °C, une petite quantité de produits intermédiaires de l’hydrolyse (dextrines) peut encore donner une teinte légèrement colorée avec le lugol. L’essentiel est que l’amidon, responsable du bleu-noir, a disparu.' },
          {
            type: 'retenir',
            items: [
              'On sépare les étapes communes (paramètres fixés) de ce qui diffère entre les lots.',
              'On compare les lots **par paires** qui ne diffèrent que par un facteur.',
              'Chaque comparaison donne une conclusion partielle ; la synthèse répond au problème.',
            ],
          },
        ],
      },

      {
        title: 'Construire un organigramme à partir d’un texte',
        intro: 'Transformer un texte en organigramme oblige à repérer la structure de l’expérience : c’est déjà la moitié de l’analyse.',
        blocks: [
          { type: 'p', text: 'Texte de départ : en 1849, Arnold Berthold, médecin à Göttingen, travaille sur de jeunes coqs. Il en laisse certains intacts. Il en castre d’autres (ablation des testicules) : chez eux, la crête et les barbillons restent petits, ils ne chantent pas et ne se battent pas. Chez d’autres coqs castrés, il replace un testicule dans la cavité abdominale, loin de sa position normale : ces coqs développent une grande crête, chantent et ont un comportement de coq normal. À l’autopsie, le testicule greffé est irrigué par de nouveaux vaisseaux sanguins, mais il n’est relié à aucun nerf.' },
          { type: 'figure', image: IMG.coqs, caption: 'Les trois situations de l’expérience de Berthold : coq non opéré (à gauche), coq castré (au centre), coq castré ayant reçu une greffe de testicule (à droite).', size: 'wide' },
          {
            type: 'steps',
            title: 'Construire un organigramme d’expériences comparées',
            items: [
              { title: 'Écrire le problème en haut', text: '« Comment le testicule contrôle-t-il la crête et le comportement du coq ? »' },
              { title: 'Lister les lots', text: 'Repère dans le texte chaque groupe traité différemment : ici, trois lots.' },
              { title: 'Une branche par lot', text: 'Trace les branches côte à côte ; écris le traitement dans une case, au même niveau pour tous les lots.' },
              { title: 'Ajouter les résultats', text: 'Une case « résultat » sous chaque traitement, toutes alignées sur une même ligne.' },
              { title: 'Comparer et conclure', text: 'Relie les résultats à une ou plusieurs cases « conclusion » en bas ; indique quelles branches sont comparées.' },
              { title: 'Relire', text: 'Phrases courtes, aucune flèche croisée, un titre, une légende si tu utilises un code.' },
            ],
          },
          {
            type: 'compare',
            title: 'L’organigramme obtenu : trois branches parallèles',
            columns: [
              { title: 'Lot 1 (témoin)', subtitle: 'Coq non opéré', items: ['Traitement : aucun.', 'Résultat : grande crête, chant, comportement de coq.'] },
              { title: 'Lot 2', subtitle: 'Coq castré', items: ['Traitement : ablation des testicules.', 'Résultat : petite crête, pas de chant, comportement non combatif.'] },
              { title: 'Lot 3', subtitle: 'Coq castré + greffe', items: ['Traitement : ablation, puis greffe d’un testicule dans l’abdomen.', 'Résultat : grande crête, chant, comportement de coq.'] },
            ],
          },
          {
            type: 'flow',
            title: 'Conclusions tirées de l’organigramme',
            steps: [
              { title: 'Lot 1 / lot 2', text: 'Les testicules sont nécessaires au développement de la crête et du comportement.' },
              { title: 'Lot 2 / lot 3', text: 'Un testicule greffé, même mal placé, suffit à rétablir ces caractères.' },
              { title: 'Autopsie', text: 'Le greffon est relié au sang, pas aux nerfs.' },
              { title: 'Conclusion', text: 'Le testicule agit à distance par une substance transportée par le sang.' },
            ],
            caption: 'Cette substance, la testostérone, sera isolée en 1935 : c’est une hormone.',
          },
          {
            type: 'table',
            caption: 'Les expériences classiques qui révèlent une hormone',
            head: ['Expérience', 'Ce qu’elle montre'],
            rows: [
              ['Ablation de l’organe', 'L’organe est **nécessaire** à l’effet observé.'],
              ['Greffe de l’organe à un autre endroit', 'L’organe agit **sans connexion nerveuse**, par voie sanguine.'],
              ['Injection d’un extrait de l’organe à un animal privé de cet organe', 'Une **substance chimique** de l’organe suffit à rétablir l’effet.'],
              ['Injection de la molécule purifiée', 'Cette molécule précise est le **messager** (hormone).'],
              ['Mesure de la molécule dans le sang', 'Elle est bien **transportée par le sang** jusqu’aux cellules cibles.'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Pour construire un organigramme : problème en haut, une branche par lot, traitements puis résultats alignés, conclusion en bas.',
              'Ablation, greffe et injection d’extrait sont les expériences types qui montrent l’action d’une hormone.',
              'L’organigramme fait apparaître les paires de lots à comparer.',
            ],
          },
        ],
      },

      {
        title: 'Concevoir une expérience et suivre un organigramme de décision',
        intro: 'Concevoir une expérience, c’est construire l’organigramme avant de manipuler ; identifier un micro-organisme, c’est suivre un organigramme de décision.',
        blocks: [
          {
            type: 'steps',
            title: 'Concevoir une expérience',
            items: [
              { title: 'Formuler l’hypothèse', text: 'Une phrase testable : « Le pancréas produit une substance qui fait baisser la glycémie. »' },
              { title: 'Choisir le facteur étudié', text: 'Ce que l’on fait varier : présence du pancréas, puis présence d’un extrait de pancréas.' },
              { title: 'Définir les lots', text: 'Un lot expérimental par condition testée, et le ou les témoins correspondants.' },
              { title: 'Fixer les paramètres', text: 'Même espèce, même âge, même alimentation, même moment de mesure ; plusieurs individus par lot.' },
              { title: 'Prévoir les résultats', text: 'Ce que l’on doit observer si l’hypothèse est juste… et ce qui la réfuterait.' },
            ],
          },
          {
            type: 'example',
            title: 'le pancréas et la glycémie',
            text: [
              '**Lot témoin** : chien subissant la même opération chirurgicale, mais sans ablation du pancréas (**opération simulée**). Résultat attendu : glycémie normale.',
              '**Lot 2** : ablation du pancréas. Historiquement (Minkowski et von Mering, 1889) : forte hyperglycémie et glucose dans les urines, comme dans un diabète.',
              '**Lot 3** : ablation du pancréas puis injection d’un extrait de pancréas. Historiquement (Banting et Best, 1921-1922) : la glycémie diminue.',
              'Conclusion : le pancréas libère dans le sang une substance hypoglycémiante, l’**insuline**.',
            ],
          },
          { type: 'note', title: 'Pourquoi une « opération simulée » ?', text: 'Une opération chirurgicale (anesthésie, stress, cicatrisation) peut à elle seule modifier la glycémie. Le témoin doit donc subir la même opération, sans l’ablation : ainsi, la seule différence entre les lots est l’absence du pancréas. De même, quand on injecte une molécule dissoute dans un solvant, le témoin reçoit le **solvant seul**.' },
          { type: 'definition', term: 'Clé de détermination', text: 'organigramme de décision formé de questions successives, chacune à deux réponses possibles (oui ou non), qui conduit à l’identification d’un objet, par exemple un micro-organisme observé au microscope.' },
          {
            type: 'table',
            caption: 'Clé de détermination simplifiée d’un micro-organisme observé au microscope (caractères morphologiques)',
            head: ['Question', 'Si oui', 'Si non'],
            rows: [
              ['1. La cellule possède-t-elle un noyau ?', 'Eucaryote : aller à la question 2.', 'Procaryote (bactérie) : aller à la question 3.'],
              ['2. La cellule contient-elle des chloroplastes (couleur verte) ?', 'Micro-algue.', 'Ovale, 5 à 10 µm, avec bourgeons : levure.'],
              ['3. Après coloration de Gram, la bactérie est-elle violette ?', 'Gram positif : aller à la question 4.', 'Gram négatif (rose) : aller à la question 4.'],
              ['4. La bactérie est-elle sphérique ?', 'Coque (préciser le groupement : amas, chaînette…).', 'Bacille (bâtonnet) ou autre forme.'],
            ],
          },
          { type: 'warning', text: 'Dans une clé de détermination, on répond aux questions **dans l’ordre**, sans en sauter, et uniquement à partir de ce que l’on observe réellement. Une réponse fausse au début conduit à une identification fausse à la fin.' },
          {
            type: 'retenir',
            items: [
              'Concevoir une expérience : hypothèse, facteur étudié, lots et témoins, paramètres fixés, résultats attendus.',
              'Le témoin subit tout sauf le facteur étudié : opération simulée, injection du solvant seul.',
              'Une clé de détermination se suit question par question, dans l’ordre, à partir des observations.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Dans chaque activité, commence par repérer les lots et ce qui les distingue. Réponds en phrases complètes, utilise le coup de pouce si besoin, puis compare avec la correction.',
    activities: [
      {
        title: 'Lire un organigramme : le rôle de la lipase et de la bile',
        duration: '30 min',
        skills: ['Lire', 'Comparer', 'Conclure'],
        context: 'Au laboratoire, on étudie la digestion des lipides du lait. Le lait est rendu légèrement basique et additionné de phénolphtaléine, un indicateur coloré rose en milieu basique et incolore quand le pH devient inférieur à 8 environ. Si les triglycérides du lait sont hydrolysés, les acides gras libérés font baisser le pH : le mélange se décolore.',
        documents: [
          {
            label: 'Document 1',
            title: 'Organigramme du protocole commun',
            blocks: [
              {
                type: 'flow',
                steps: [
                  { title: 'Préparer', text: '5 tubes : 5 mL de lait + carbonate de sodium + phénolphtaléine (rose)' },
                  { title: 'Ajouter', text: 'les réactifs propres à chaque tube (document 2)' },
                  { title: 'Incuber', text: '30 min au bain-marie à 37 °C' },
                  { title: 'Observer', text: 'noter la durée nécessaire à la décoloration' },
                ],
              },
            ],
          },
          {
            label: 'Document 2',
            title: 'Réactifs ajoutés et résultats',
            source: 'Résultats de travaux pratiques',
            blocks: [
              {
                type: 'table',
                head: ['Tube', 'Réactifs ajoutés', 'Durée de décoloration'],
                rows: [
                  ['A', '1 mL d’eau + 1 mL d’eau', 'Pas de décoloration en 30 min'],
                  ['B', '1 mL de bile + 1 mL d’eau', 'Pas de décoloration en 30 min'],
                  ['C', '1 mL de lipase + 1 mL d’eau', '18 min'],
                  ['D', '1 mL de lipase + 1 mL de bile', '7 min'],
                  ['E', '1 mL de lipase bouillie + 1 mL de bile', 'Pas de décoloration en 30 min'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Formule le problème étudié et relève les paramètres fixés.', hint: 'Les paramètres fixés sont dans l’organigramme du document 1.', answer: 'Problème : quel est le rôle de la lipase et de la bile dans la digestion des lipides du lait ? Paramètres fixés : 5 mL de lait, carbonate et phénolphtaléine, volume total ajouté (2 mL), 37 °C, durée d’observation de 30 min.' },
          { text: 'Pourquoi ajoute-t-on 1 mL d’eau dans certains tubes ?', answer: 'Pour que tous les tubes aient le même volume final : la concentration des réactifs reste identique et seule la nature des réactifs diffère entre les tubes.' },
          { text: 'Quel tube joue le rôle de témoin négatif ? Justifie.', answer: 'Le tube A, qui ne contient ni lipase ni bile : il montre que le lait ne se décolore pas seul dans ces conditions.' },
          { text: 'Complète l’exploitation paire par paire : A/C, A/B, C/D, D/E. Pour chaque paire, indique la seule différence, le résultat et la conclusion.', hint: 'Présente ta réponse sous forme de tableau.', answer: ['A/C : présence de lipase ; décoloration en 18 min avec la lipase seulement ; la lipase hydrolyse les triglycérides du lait en libérant des acides gras.', 'A/B : présence de bile ; aucune décoloration ; la bile seule n’hydrolyse pas les lipides.', 'C/D : présence de bile avec la lipase ; décoloration plus rapide (7 min au lieu de 18 min) ; la bile accélère l’action de la lipase.', 'D/E : lipase active ou bouillie ; pas de décoloration avec la lipase bouillie ; la lipase est une enzyme dénaturée par la chaleur.'] },
          { text: 'Rédige la conclusion générale. Tu peux t’appuyer sur cette connaissance : la bile émulsionne les lipides, c’est-à-dire qu’elle les disperse en fines gouttelettes.', answer: 'La lipase est l’enzyme qui hydrolyse les triglycérides en acides gras (et glycérol) ; elle est dénaturée par la chaleur. La bile n’est pas une enzyme et ne digère pas les lipides, mais elle accélère leur hydrolyse : en émulsionnant les lipides en fines gouttelettes, elle augmente la surface de contact entre les lipides et la lipase.' },
        ],
      },
      {
        title: 'Construire un organigramme : testostérone et vésicules séminales',
        duration: '30 min',
        skills: ['Construire', 'Raisonner'],
        context: 'Chez le rat mâle, les vésicules séminales sont des glandes annexes de l’appareil reproducteur dont le développement dépend des testicules. Des chercheurs veulent montrer que la testostérone, produite par les testicules, est l’hormone responsable de ce développement.',
        documents: [
          {
            label: 'Document 3',
            title: 'Description de l’expérience',
            text: [
              'Trois lots de 6 jeunes rats mâles adultes de même âge sont constitués. Les rats du lot 1 subissent une opération simulée (incision puis suture, sans retrait des testicules) et reçoivent chaque jour une injection d’huile. Les rats du lot 2 sont castrés et reçoivent chaque jour une injection d’huile. Les rats du lot 3 sont castrés et reçoivent chaque jour une injection de testostérone dissoute dans de l’huile.',
              'Après trois semaines, les vésicules séminales sont prélevées et pesées.',
            ],
          },
          {
            label: 'Document 4',
            title: 'Masse moyenne des vésicules séminales après trois semaines',
            source: 'Valeurs moyennes simplifiées, construites pour l’exercice',
            blocks: [
              {
                type: 'table',
                head: ['Lot', 'Masse moyenne des vésicules séminales (mg)'],
                rows: [
                  ['Lot 1 : opération simulée + huile', '480'],
                  ['Lot 2 : castration + huile', '60'],
                  ['Lot 3 : castration + testostérone dans l’huile', '450'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Construis l’organigramme de cette expérience : problème, trois branches (traitement puis résultat), conclusion.', hint: 'Une branche par lot ; aligne les traitements sur une ligne et les résultats sur la ligne suivante.', answer: ['Problème : la testostérone est-elle l’hormone testiculaire qui contrôle le développement des vésicules séminales ?', 'Branche 1 : opération simulée + injection d’huile → vésicules de 480 mg.', 'Branche 2 : castration + injection d’huile → vésicules de 60 mg.', 'Branche 3 : castration + injection de testostérone dans l’huile → vésicules de 450 mg.', 'Conclusion (en bas, reliée aux trois résultats) : la testostérone est l’hormone testiculaire nécessaire et suffisante au développement des vésicules séminales.'] },
          { text: 'Pourquoi les rats du lot 1 subissent-ils une opération simulée et pourquoi les rats des lots 1 et 2 reçoivent-ils de l’huile ?', answer: 'L’opération simulée garantit que la seule différence entre les lots 1 et 2 est l’absence des testicules (et non le stress ou la cicatrisation liés à l’opération). L’huile est le solvant de la testostérone : en l’injectant aux lots 1 et 2, on vérifie que l’effet observé dans le lot 3 est dû à la testostérone et non au solvant.' },
          { text: 'Compare les lots 1 et 2, puis les lots 2 et 3. Conclus pour chaque comparaison.', answer: 'Lots 1 et 2 : sans testicules, la masse des vésicules séminales chute de 480 à 60 mg, soit 8 fois moins ; les testicules sont nécessaires à leur développement. Lots 2 et 3 : chez des rats castrés, la testostérone rétablit une masse de 450 mg, proche du témoin ; la testostérone suffit à remplacer les testicules.' },
          { text: 'Pourquoi a-t-on utilisé 6 rats par lot ?', answer: 'Les individus varient naturellement. Travailler sur 6 rats et calculer une moyenne permet de vérifier que la différence observée n’est pas due au hasard d’un individu particulier.' },
          { text: 'Quelles caractéristiques d’une hormone cette expérience met-elle en évidence ?', answer: 'La testostérone est produite par un organe (le testicule), elle agit à distance sur des cellules cibles (les vésicules séminales) et elle est efficace lorsqu’elle est injectée, donc transportée par le sang.' },
        ],
      },
      {
        title: 'Concevoir une expérience : la découverte de la sécrétine',
        duration: '30 min',
        skills: ['Concevoir', 'Argumenter'],
        context: 'Au début du XX^e^ siècle, on pense que la sécrétion du suc pancréatique est déclenchée uniquement par des nerfs, lorsque le chyme acide arrive dans l’intestin grêle. En 1902, les physiologistes britanniques William Bayliss et Ernest Starling testent une autre hypothèse.',
        documents: [
          {
            label: 'Document 5',
            title: 'Les observations de Bayliss et Starling (chien anesthésié)',
            text: [
              'Observation 1 : de l’acide chlorhydrique introduit dans une anse d’intestin grêle dont tous les nerfs ont été sectionnés déclenche quand même une sécrétion de suc pancréatique.',
              'Observation 2 : de l’acide chlorhydrique injecté directement dans le sang ne déclenche aucune sécrétion.',
              'Observation 3 : la muqueuse de cette anse est grattée, broyée avec de l’acide chlorhydrique puis filtrée ; ce filtrat, injecté dans une veine, déclenche une abondante sécrétion de suc pancréatique.',
              'Bayliss et Starling nomment « sécrétine » la substance responsable. C’est en 1905 que Starling propose le mot « hormone ».',
            ],
            source: 'D’après Bayliss et Starling, 1902',
          },
        ],
        questions: [
          { text: 'Quelle hypothèse l’observation 1 permet-elle de formuler ?', answer: 'Puisque la sécrétion a lieu sans nerfs, la muqueuse intestinale au contact de l’acide libère probablement dans le sang une substance qui stimule le pancréas.' },
          { text: 'Quel est le rôle de l’observation 2 dans le raisonnement ?', hint: 'L’extrait de l’observation 3 contient de l’acide…', answer: 'C’est un témoin : l’extrait de muqueuse injecté dans l’observation 3 contient de l’acide chlorhydrique. L’observation 2 montre que l’acide seul, dans le sang, ne déclenche pas la sécrétion ; l’effet de l’extrait est donc dû à une substance produite par la muqueuse.' },
          { text: 'Construis l’organigramme des observations 2 et 3 sous forme de deux branches comparées. Indique la seule différence et la conclusion.', answer: ['Branche témoin : injection intraveineuse d’acide chlorhydrique → pas de sécrétion pancréatique.', 'Branche expérimentale : injection intraveineuse d’un extrait acide de muqueuse intestinale → sécrétion abondante.', 'Seule différence : la présence de constituants de la muqueuse.', 'Conclusion : la muqueuse intestinale contient une substance (la sécrétine) qui, transportée par le sang, stimule la sécrétion du pancréas.'] },
          { text: 'Propose un témoin supplémentaire qui renforcerait la conclusion. Précise le résultat attendu si l’hypothèse est juste.', answer: 'Injecter un extrait préparé de la même façon (grattage, broyage avec de l’acide, filtration) à partir d’un autre tissu, par exemple un muscle. Si la sécrétine est spécifique de la muqueuse intestinale, cet extrait ne doit déclencher aucune sécrétion pancréatique.' },
          { text: 'Montre que la sécrétine présente les caractéristiques d’une hormone.', answer: 'Elle est produite par des cellules d’un organe (la muqueuse de l’intestin grêle), libérée dans le sang (elle agit après injection intraveineuse et sans nerfs) et agit à distance sur des cellules cibles (celles du pancréas), dont elle déclenche une réponse : la sécrétion du suc pancréatique.' },
        ],
      },
      {
        title: 'Suivre une clé de détermination',
        duration: '15 min',
        skills: ['Observer', 'Identifier'],
        context: 'Quatre préparations microscopiques ont été observées au laboratoire. Utilise la clé de détermination de la partie 5 du cours pour les identifier.',
        documents: [
          {
            label: 'Document 6',
            title: 'Descriptions des observations',
            blocks: [
              {
                type: 'table',
                head: ['Préparation', 'Observation au microscope'],
                rows: [
                  ['P1', 'Cellules de 1 à 2 µm, sans noyau visible, sphériques, groupées en amas, violettes après coloration de Gram.'],
                  ['P2', 'Cellules ovales de 6 à 8 µm, avec un noyau, sans chloroplaste, certaines portant un petit bourgeon.'],
                  ['P3', 'Cellules en bâtonnet de 2 à 3 µm, sans noyau, roses après coloration de Gram.'],
                  ['P4', 'Cellules sphériques de 5 µm environ, avec un noyau et un gros chloroplaste vert.'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Identifie P1 en indiquant le chemin suivi dans la clé (numéros des questions et réponses).', answer: 'Question 1 : pas de noyau → procaryote (bactérie), question 3. Question 3 : violette → Gram positif, question 4. Question 4 : sphérique → coque. P1 : coques Gram positif en amas.' },
          { text: 'Identifie P2, P3 et P4 de la même façon.', answer: 'P2 : question 1 oui (noyau) → question 2 non (pas de chloroplaste), ovale de 6 à 8 µm avec bourgeons → levure. P3 : question 1 non → question 3 non (rose, Gram négatif) → question 4 non (bâtonnet) → bacille Gram négatif. P4 : question 1 oui → question 2 oui (chloroplaste) → micro-algue.' },
          { text: 'Pourquoi la clé ne permet-elle pas d’identifier l’espèce exacte de la bactérie P1 ? Que faudrait-il de plus ?', answer: 'La clé n’utilise que des caractères morphologiques (forme, groupement, Gram), communs à de nombreuses espèces. Pour identifier l’espèce, il faudrait étudier d’autres caractères, culturaux et métaboliques (tests biochimiques), qui seront abordés en terminale.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un organigramme d’expériences représente une démarche ou un protocole par des cases reliées par des flèches, avec des conventions cohérentes.',
      'Le lot témoin est traité exactement comme le lot expérimental, sauf pour le facteur étudié : un seul facteur varie entre deux lots comparés.',
      'Témoin négatif : l’effet ne doit pas apparaître ; témoin positif : l’effet doit apparaître et prouve que la technique fonctionne.',
      'Pour lire un organigramme : étapes communes, ce qui diffère, paires de lots, conclusion partielle par paire, puis synthèse.',
      'Pour construire un organigramme : problème en haut, une branche par lot, traitements puis résultats alignés, conclusion en bas.',
      'Ablation, greffe et injection d’extrait sont les expériences types qui révèlent une hormone ; le témoin subit une opération simulée ou reçoit le solvant seul.',
      'Une clé de détermination est un organigramme de décision que l’on suit question par question, dans l’ordre.',
    ],
    method: {
      title: 'Exploiter un organigramme d’expériences comparées',
      steps: [
        'Formuler le **problème** posé par l’expérience.',
        'Repérer les **étapes communes** : ce sont les paramètres fixés.',
        'Repérer, pour chaque lot, ce qui le **distingue** des autres.',
        'Associer les lots **par paires** ne différant que par un seul facteur.',
        'Pour chaque paire : seule différence → résultat → conclusion partielle.',
        'Rassembler les conclusions partielles en une **synthèse** qui répond au problème.',
      ],
    },
    vocabulary: [
      { term: 'Organigramme d’expériences', definition: 'Représentation d’une démarche ou d’un protocole par des cases reliées par des flèches.' },
      { term: 'Protocole', definition: 'Description précise et ordonnée des opérations à réaliser pour une expérience.' },
      { term: 'Facteur étudié', definition: 'Paramètre que l’on fait varier volontairement pour tester une hypothèse (variable).' },
      { term: 'Paramètre fixé', definition: 'Condition maintenue identique dans tous les lots.' },
      { term: 'Lot expérimental', definition: 'Lot dans lequel le facteur étudié est modifié.' },
      { term: 'Lot témoin', definition: 'Lot identique au lot expérimental sauf pour le facteur étudié, qui sert de référence.' },
      { term: 'Témoin négatif', definition: 'Témoin dans lequel l’effet recherché ne doit pas se produire.' },
      { term: 'Témoin positif', definition: 'Témoin dans lequel l’effet recherché doit se produire, ce qui valide la technique.' },
      { term: 'Opération simulée', definition: 'Intervention chirurgicale identique à celle du lot expérimental, mais sans ablation, réalisée sur le lot témoin.' },
      { term: 'Ablation', definition: 'Retrait chirurgical d’un organe ou d’une partie d’organe.' },
      { term: 'Greffe', definition: 'Implantation d’un organe ou d’un tissu à un endroit du corps.' },
      { term: 'Hormone', definition: 'Molécule sécrétée par une glande endocrine, transportée par le sang, qui agit sur des cellules cibles possédant un récepteur.' },
      { term: 'Clé de détermination', definition: 'Organigramme de décision formé de questions à deux réponses qui mène à une identification.' },
    ],
    mistakes: [
      { wrong: 'Comparer deux lots qui diffèrent par deux facteurs à la fois.', right: 'Ne comparer que des lots qui diffèrent par un seul facteur.' },
      { wrong: 'Oublier le lot témoin dans une expérience que l’on conçoit.', right: 'Prévoir systématiquement un témoin, et un témoin de l’opération ou du solvant si besoin.' },
      { wrong: 'Écrire de longues phrases dans les cases de l’organigramme.', right: 'Utiliser des verbes à l’infinitif ou des noms courts ; une idée par case.' },
      { wrong: 'Placer les résultats des différents lots à des hauteurs différentes.', right: 'Aligner les traitements sur une ligne et les résultats sur la ligne suivante pour faciliter la comparaison.' },
      { wrong: 'Conclure à partir d’un seul individu ou d’un seul tube.', right: 'Répéter les essais et raisonner sur des moyennes.' },
      { wrong: 'Sauter une question dans une clé de détermination.', right: 'Répondre aux questions dans l’ordre, à partir des seules observations.' },
    ],
    quiz: [
      { question: 'Dans une expérience bien construite, le lot témoin et le lot expérimental diffèrent :', choices: ['Par tous les paramètres', 'Par un seul facteur', 'Par deux facteurs', 'Uniquement par le nombre d’essais'], answer: 1, explanation: 'C’est le principe du facteur unique : seule une différence permet de conclure.' },
      { question: 'Un tube « empois d’amidon + eau » dans une expérience sur l’amylase est :', choices: ['Un témoin positif', 'Un lot expérimental', 'Un témoin négatif', 'Inutile'], answer: 2, explanation: 'Sans enzyme, l’amidon ne doit pas disparaître : l’effet ne doit pas se produire.' },
      { question: 'Le tube 4 (amylase 10 min à 0 °C puis 10 min à 37 °C) devient jaune. On en conclut que :', choices: ['Le froid détruit l’amylase', 'L’effet du froid sur l’amylase est réversible', 'L’amylase agit mieux à 0 °C', 'Le lugol est périmé'], answer: 1, explanation: 'L’enzyme retrouve son activité à 37 °C : elle n’a pas été détruite par le froid.' },
      { question: 'Dans un organigramme, une case en losange représente généralement :', choices: ['Un résultat', 'Une question à réponse oui ou non', 'Une conclusion', 'Un réactif'], answer: 1, explanation: 'Le losange est la convention habituelle pour un test ou une décision.' },
      { question: 'Un testicule greffé dans l’abdomen d’un coq castré maintient sa crête. Cela montre que le testicule agit :', choices: ['Par les nerfs', 'Par une substance transportée par le sang', 'Uniquement à sa place normale', 'Grâce à la crête'], answer: 1, explanation: 'Le greffon n’est relié qu’à des vaisseaux sanguins : il agit par voie sanguine.' },
      { question: 'Pourquoi injecte-t-on de l’huile seule à un lot témoin quand la testostérone est dissoute dans l’huile ?', choices: ['Pour nourrir les rats', 'Pour vérifier que l’effet n’est pas dû au solvant', 'Pour augmenter la masse des glandes', 'Pour gagner du temps'], answer: 1, explanation: 'Le témoin reçoit tout sauf le facteur étudié, donc le solvant seul.' },
      { question: 'Quelle étape vient en premier quand on conçoit une expérience ?', choices: ['Noter les résultats', 'Formuler une hypothèse testable', 'Dessiner les flèches', 'Rédiger la conclusion'], answer: 1, explanation: 'L’hypothèse guide le choix du facteur étudié, des lots et des témoins.' },
      { question: 'Dans une clé de détermination, une cellule sans noyau est :', choices: ['Une levure', 'Une micro-algue', 'Un procaryote', 'Une cellule végétale'], answer: 2, explanation: 'L’absence de noyau caractérise les procaryotes, comme les bactéries.' },
    ],
    exercises: [
      {
        title: 'Repérer une expérience mal construite',
        statement: 'Un élève veut montrer que la pepsine digère les protéines à pH 2. Il prépare deux tubes à 37 °C : tube 1, blanc d’œuf + pepsine à pH 2 ; tube 2, blanc d’œuf + eau à pH 7. Le cube du tube 1 est digéré, pas celui du tube 2. Explique pourquoi il ne peut pas conclure et propose une expérience correcte.',
        answer: [
          'Les deux tubes diffèrent par deux facteurs : la présence de pepsine et le pH. On ne peut pas savoir si la digestion est due à la pepsine, à l’acidité ou aux deux.',
          'Expérience correcte : tube 1, pepsine à pH 2 ; tube 2, eau à pH 2 (témoin sans enzyme) ; tube 3, pepsine à pH 7 (témoin du pH). Tous à 37 °C, même volume, même durée, même masse de blanc d’œuf.',
        ],
      },
      {
        title: 'Construire un organigramme à partir d’un protocole',
        statement: 'Protocole : « Dans trois tubes, verser 2 mL d’une solution de glucose. Ajouter 1 mL de levures vivantes dans le tube 1, 1 mL de levures tuées par la chaleur dans le tube 2 et 1 mL d’eau dans le tube 3. Placer 30 min à 30 °C, puis mesurer le volume de dioxyde de carbone dégagé. » Construis l’organigramme, puis indique les paires à comparer.',
        answer: [
          'Étape commune en haut : 3 tubes de 2 mL de glucose. Trois branches : levures vivantes (tube 1), levures tuées (tube 2), eau (tube 3). Étape commune sous les branches : 30 min à 30 °C. Ligne des résultats : volume de CO~2~ dégagé dans chaque tube. Conclusion en bas.',
          'Paires : tube 3 / tube 1 (présence de levures vivantes) ; tube 2 / tube 1 (levures vivantes ou mortes : rôle de l’activité des cellules).',
        ],
      },
      {
        title: 'Concevoir une expérience',
        statement: 'On suppose que la thyroïde produit une hormone qui accélère le métabolisme (consommation de dioxygène). Propose trois lots de rats permettant de le montrer, en précisant les témoins et les résultats attendus si l’hypothèse est juste.',
        answer: [
          'Lot 1 (témoin) : opération simulée, injection de solvant ; consommation de dioxygène normale.',
          'Lot 2 : ablation de la thyroïde, injection de solvant ; consommation de dioxygène diminuée.',
          'Lot 3 : ablation de la thyroïde, injection d’extrait thyroïdien (ou de l’hormone purifiée) dans le solvant ; consommation de dioxygène rétablie.',
          'Même âge, même alimentation, plusieurs rats par lot, mesure au même moment.',
        ],
      },
    ],
    selfCheck: [
      'Je sais repérer dans un organigramme le problème, les lots, le facteur étudié, les résultats et la conclusion.',
      'Je sais identifier un lot témoin et distinguer témoin positif et témoin négatif.',
      'Je sais vérifier qu’un seul facteur varie entre deux lots comparés.',
      'Je sais exploiter un organigramme paire par paire, puis rédiger une synthèse.',
      'Je sais construire un organigramme à partir d’un texte ou d’un protocole.',
      'Je sais concevoir une expérience montrant qu’une molécule est une hormone.',
      'Je sais suivre une clé de détermination.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Arnold Adolph Berthold — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Arnold_Adolph_Berthold' },
      { title: 'Sécrétine — Wikipédia', url: 'https://fr.wikipedia.org/wiki/S%C3%A9cr%C3%A9tine' },
      { title: 'Amylase — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Amylase' },
    ],
  },
};

export default lesson;
