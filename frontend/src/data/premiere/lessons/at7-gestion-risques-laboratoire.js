import { img } from '../media';
import posteMicrobio from '../../../assets/courses/premiere/at7-gestion-risques-laboratoire/poste-microbio.webp';
import posteSchema from '../../../assets/courses/premiere/at7-gestion-risques-laboratoire/poste-schema.webp';
import empreintes from '../../../assets/courses/premiere/at7-gestion-risques-laboratoire/empreintes.webp';
import dechets from '../../../assets/courses/premiere/at7-gestion-risques-laboratoire/dechets.webp';
import doucheOculaire from '../../../assets/courses/premiere/at7-gestion-risques-laboratoire/douche-oculaire.webp';

const IMG = {
  poste: img(posteMicrobio, 'Paillasse de microbiologie rangée : bec Bunsen allumé au centre, tubes de bouillon de culture dans un portoir, boîtes de Petri, anse sur son support, boîte de pipettes stériles, pissette de désinfectant, bac de désinfection contenant des pipettes et collecteur jaune.', 'photo', 1536, 1024),
  posteSchema: img(posteSchema, 'Schéma vu de dessus d’un poste de microbiologie : bec Bunsen au centre d’une zone d’asepsie en pointillés contenant les cultures et le matériel stérile ; bac de désinfection et collecteur DASRI à droite ; protocole et cahier à gauche.', 'schema', 1400, 933),
  empreintes: img(empreintes, 'Deux boîtes de Petri après incubation : à gauche, de nombreuses colonies groupées en trois empreintes de doigts ; à droite, presque aucune colonie.', 'photo', 1536, 1024),
  dechets: img(dechets, 'Schéma des cinq conteneurs de fin de séance : carton DASRI, collecteur OPCT, bidon de déchets chimiques, bac de désinfection et poubelle ordinaire.', 'schema', 1400, 933),
  douche: img(doucheOculaire, 'Rince-œil de laboratoire à deux buses fixé au-dessus d’un évier, avec une trousse de secours verte accrochée au mur.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'at7-gestion-risques-laboratoire',
  duration: 'Environ 2 séances (activité technologique)',
  hook: {
    image: IMG.poste,
    question: 'Tout est prêt sur la paillasse… Mais as-tu repéré les moments de la séance où un accident peut arriver ?',
    text: 'Une culture bactérienne, une flamme, de l’éthanol, une solution corrosive, de la verrerie : une séance de travaux pratiques ordinaire réunit plusieurs dangers. Un bon technicien ne compte pas sur la chance. Avant de manipuler, il lit la procédure, repère les situations exposantes, évalue les risques et sait pourquoi chaque consigne existe. Dans cette activité, tu appliques cette démarche à deux manipulations réelles, l’une de microbiologie, l’autre de chimie, jusqu’au tri des déchets et aux gestes d’urgence.',
  },
  objectives: [
    'Analyser la procédure d’une manipulation réelle pour repérer les situations exposantes et les événements dangereux les plus probables.',
    'Évaluer un risque en combinant la probabilité d’apparition du dommage et sa gravité, puis hiérarchiser les risques.',
    'Relier chaque mesure de prévention d’une procédure au risque qu’elle réduit, en distinguant la protection du manipulateur, de l’environnement et du produit.',
    'Mettre en œuvre un plan de prévention (désinfection, lavage des mains, tri des déchets) et vérifier son application par l’observation entre pairs.',
    'Réagir correctement en cas d’incident et expliquer pourquoi chaque geste est efficace.',
  ],
  prerequisites: [
    'Le vocabulaire de la sécurité vu dans le cours C4 : danger, risque, dommage, situation exposante, événement dangereux, règle des 5 M.',
    'La lecture d’une étiquette de produit chimique (pictogrammes, mentions de danger) et les groupes de risque des agents biologiques.',
  ],
  program: [
    'Distinguer le risque pour le manipulateur et l’environnement, du risque pour le produit.',
    'Identifier au sein d’une situation de travail une situation exposante.',
    'Dégager, au sein d’une situation exposante, les événements dangereux les plus probables.',
    'Faire le lien entre le risque, la probabilité d’apparition du dommage et sa gravité.',
    'Mettre en relation les mesures de prévention proposées et l’analyse des risques (poste de travail, équipements de protection collective et individuelle).',
    'Mettre en œuvre une gestuelle adaptée aux risques analysés.',
    'Appliquer une procédure de désinfection de la paillasse et une procédure de lavage des mains.',
    'Choisir le conteneur à déchets adapté (déchets chimiques, DASRI).',
  ],

  course: {
    parts: [
      {
        title: 'Du protocole au logigramme : repérer les situations exposantes',
        intro: 'Une analyse des risques se fait avant de manipuler, à partir de la procédure réelle. On la découpe en gestes et on cherche, pour chacun, le moment où le manipulateur rencontre un danger.',
        blocks: [
          { type: 'p', text: 'Le cours C4 t’a donné le vocabulaire et la démarche. On les applique ici à une vraie séance qui associe une manipulation de microbiologie et une manipulation de chimie. Rappel de la chaîne d’apparition du dommage : si l’on supprime un seul maillon, le dommage ne peut plus se produire.' },
          {
            type: 'flow',
            steps: [
              { title: 'Danger', text: 'culture, solution corrosive, flamme…' },
              { title: 'Situation exposante', text: 'le manipulateur est en présence du danger' },
              { title: 'Événement dangereux', text: 'projection, coupure, renversement…' },
              { title: 'Dommage', text: 'infection, brûlure, lésion de l’œil…' },
            ],
          },
          { type: 'definition', term: 'Logigramme', text: 'représentation d’une procédure opératoire sous forme d’étapes successives reliées par des flèches. Il oblige à passer en revue **chaque geste**, un par un, au lieu de raisonner sur la manipulation « en gros ».' },
          {
            type: 'steps',
            title: 'Construire le logigramme d’analyse d’une procédure',
            items: [
              'Lire toute la procédure avant de commencer, ainsi que les étiquettes et les fiches des produits.',
              'Écrire une case par geste, avec un verbe d’action et le matériel utilisé (« ouvrir le tube de culture près de la flamme »).',
              'Pour chaque case, se demander : quel danger est présent ? Le manipulateur y est-il exposé ?',
              'Si oui, noter l’événement dangereux le plus probable, la voie d’exposition et le dommage possible.',
              'Repérer aussi les étapes sans exposition (boîte de Petri fermée à l’étuve) : elles n’appellent pas de mesure particulière.',
            ],
          },
          {
            type: 'table',
            caption: 'Logigramme analysé : isolement d’une culture d’_Escherichia coli_ K12 (souche de laboratoire, groupe 1)',
            head: ['Étape de la procédure', 'Danger présent', 'Situation exposante ?', 'Événement dangereux possible'],
            rows: [
              ['1. Désinfecter la paillasse à l’éthanol à 70 %', 'Éthanol : très inflammable, irritant pour les yeux', 'Oui', 'Vapeurs ou flaque d’éthanol enflammées par une flamme ; projection dans l’œil'],
              ['2. Allumer le bec Bunsen', 'Flamme, gaz', 'Oui', 'Brûlure de la main ; cheveux ou manche de blouse qui prennent feu'],
              ['3. Ouvrir le tube et prélever avec l’anse', 'Culture bactérienne', 'Oui', 'Formation d’aérosols ; goutte de culture sur la peau ou la paillasse'],
              ['4. Ensemencer la gélose en stries', 'Culture bactérienne', 'Oui', 'Gouttelettes projetées ; contamination de la boîte par l’air (risque pour le **produit**)'],
              ['5. Stériliser l’anse dans la flamme', 'Culture et flamme', 'Oui', 'La culture « crépite » dans la flamme et projette des microgouttelettes contaminées'],
              ['6. Incuber la boîte fermée à 37 °C', 'Culture enfermée', 'Non, tant que la boîte reste fermée', '—'],
              ['7. Éliminer les déchets et ranger', 'Matériel contaminé, verre', 'Oui', 'Coupure avec du verre cassé ; contact avec du matériel souillé'],
            ],
          },
          { type: 'p', text: 'Pour chaque étape, pose-toi aussi la question inverse : **qu’est-ce que je risque d’abîmer ?** À l’étape 4, la culture peut être contaminée par les micro-organismes de l’air ou des mains : c’est un **risque pour le produit**, qui fausserait le résultat de l’isolement. Les mesures d’asepsie y répondent, alors que les mesures de sécurité protègent le manipulateur et l’environnement.' },
          { type: 'figure', image: IMG.posteSchema, caption: 'Le poste de microbiologie organisé à partir de l’analyse, vu de dessus. Les cultures et le matériel stérile restent dans la zone d’asepsie, à une vingtaine de centimètres autour de la flamme ; le bac de désinfection et le collecteur sont à portée de main, mais en dehors de cette zone.', size: 'wide' },
          {
            type: 'retenir',
            items: [
              'L’analyse a priori se fait **avant** la manipulation, geste par geste, à partir de la procédure (logigramme).',
              'Pour chaque geste : danger présent ? exposition ? événement dangereux le plus probable ? dommage ?',
              'On repère aussi le **risque pour le produit** (contamination de la culture), distinct du risque pour le manipulateur et l’environnement.',
            ],
          },
        ],
      },

      {
        title: 'Coter les risques de la séance et les hiérarchiser',
        intro: 'Tous les risques ne se valent pas. Coter chaque situation exposante permet de savoir par où commencer, puis de vérifier que les mesures prévues suffisent.',
        blocks: [
          { type: 'p', text: 'On utilise la même grille que dans le cours C4 : la probabilité (P) et la gravité (G) sont cotées de 1 à 3, et leur produit donne le niveau de risque : 1 ou 2, risque faible ; 3 ou 4, risque moyen ; 6 ou 9, risque élevé.' },
          {
            type: 'formula',
            title: 'Rappel',
            expression: 'niveau de risque = P × G',
            legend: [
              { symbol: 'P', meaning: 'probabilité d’apparition du dommage, de 1 (rare) à 3 (fréquente)' },
              { symbol: 'G', meaning: 'gravité du dommage, de 1 (légère) à 3 (grave)' },
            ],
          },
          {
            type: 'compare',
            title: 'Justifier une note : les questions à se poser',
            columns: [
              { title: 'Pour coter la probabilité', items: ['Le geste est-il fréquent, long, répété ?', 'Est-il fait dans une position délicate (au-dessus des yeux, près de la flamme) ?', 'Le manipulateur est-il débutant, pressé, fatigué ?', 'Une mesure est-elle déjà en place (pipeteur, portoir, bec éteint) ?'] },
              { title: 'Pour coter la gravité', items: ['Quelle est la nature du danger : groupe de risque, mentions de danger H ?', 'Quelle concentration, quelle quantité ?', 'Quelle partie du corps peut être atteinte (l’œil est plus vulnérable que la main) ?', 'Le dommage est-il réversible ou non ?'] },
            ],
          },
          {
            type: 'example',
            title: 'trois cotations argumentées',
            text: [
              'Projection de soude à 1 mol·L^-1^ dans l’œil en remplissant une burette placée au-dessus de la tête : P = 2 (le liquide peut déborder vers le visage), G = 3 (lésion de l’œil parfois irréversible), soit un niveau de **6 : risque élevé**.',
              'Brûlure de la main avec le bec Bunsen : P = 2, G = 2, soit un niveau de **4 : risque moyen**.',
              'Aérosol formé à l’ouverture d’un tube de culture d’une souche de groupe 1 : P = 2, G = 1 (agent non susceptible de provoquer une maladie chez l’être humain), soit un niveau de **2 : risque faible**. On applique quand même les bonnes pratiques : toute culture est manipulée comme si elle était potentiellement pathogène.',
            ],
          },
          { type: 'p', text: 'Une fois les mesures de la procédure prises en compte, on **recote** chaque situation. Une mesure de prévention fait baisser la probabilité, une mesure de protection fait baisser la gravité : le risque qui reste, appelé **risque résiduel**, doit être faible ou bien maîtrisé.' },
          {
            type: 'table',
            caption: 'Hiérarchisation des risques de la séance, avant et après les mesures',
            head: ['Situation exposante', 'Sans mesure', 'Mesures prévues par la procédure', 'Risque résiduel'],
            rows: [
              ['Remplir la burette de soude au-dessus de la tête', '2 × 3 = 6 : élevé', 'Burette descendue sous le niveau des yeux (P = 1) ; lunettes (G = 2 : seule la peau du visage reste exposée)', '1 × 2 = 2 : faible'],
              ['Désinfecter à l’éthanol près d’une flamme allumée', '2 × 3 = 6 : élevé', 'Désinfection bec éteint, flacon éloigné de la flamme (P = 1)', '1 × 3 = 3 : moyen, d’où la vigilance'],
              ['Éliminer lames et lamelles contaminées', '2 × 2 = 4 : moyen', 'Collecteur OPCT à portée de main, lamelles jamais reprises à la main (P = 1)', '1 × 2 = 2 : faible'],
              ['Flamber une anse chargée de culture', '2 × 1 = 2 : faible', 'Séchage préalable dans le cône bleu de la flamme (P = 1)', '1 × 1 = 1 : faible'],
            ],
          },
          { type: 'note', title: 'Une cotation, pas un calcul magique', text: 'Les notes dépendent du contexte : la même situation n’a pas le même niveau de risque pour un élève débutant ou pour un technicien expérimenté, avec une souche de groupe 1 ou de groupe 2. L’important est de **justifier chaque note par un argument**. Et un dommage très grave, même peu probable, mérite toujours des mesures.' },
          {
            type: 'retenir',
            items: [
              'Chaque note de probabilité ou de gravité se justifie par des arguments précis.',
              'On traite d’abord les situations de niveau élevé.',
              'Après les mesures, on recote : la prévention baisse la probabilité, la protection baisse la gravité, et le risque résiduel doit être faible ou maîtrisé.',
            ],
          },
        ],
      },

      {
        title: 'Relier chaque mesure de la procédure à l’analyse',
        intro: 'Chaque consigne d’une procédure a une raison d’être. Savoir laquelle, c’est être capable de l’appliquer sans l’oublier, même quand on est pressé.',
        blocks: [
          { type: 'p', text: 'Les mesures suivent l’ordre de priorité vu dans le cours C4 : supprimer ou remplacer le danger, réduire l’exposition, protéger collectivement, puis individuellement. Le premier niveau est le plus efficace, car il agit sur le danger lui-même.' },
          { type: 'example', title: 'la substitution', text: 'La phénolphtaléine, longtemps utilisée comme indicateur coloré dans les dosages acide-base, est classée **cancérogène** (catégorie 1B). Des fiches de substitution de l’INRS proposent de la remplacer, par exemple par le bleu de thymol, ou de suivre le dosage au pH-mètre : on supprime le danger au lieu de s’en protéger.' },
          { type: 'p', text: 'Prenons la manipulation de chimie de la séance : préparer 100 mL de solution d’hydroxyde de sodium (soude) à 0,10 mol·L^-1^ en diluant 10 fois une solution à 1,0 mol·L^-1^, puis remplir une burette. La solution mère porte le pictogramme **GHS05 (corrosion)**, la mention d’avertissement « Danger » et la mention H314 : « Provoque de graves brûlures de la peau et de graves lésions des yeux ».' },
          {
            type: 'table',
            caption: 'Analyse a posteriori de la procédure : à quoi sert chaque consigne ?',
            head: ['Consigne de la procédure', 'Risque visé', 'Ce qu’elle protège'],
            rows: [
              ['Porter des lunettes de protection pendant toute la séance', 'Projection de soude dans l’œil (lésion grave, parfois irréversible)', 'Le manipulateur'],
              ['Prélever avec une pipette jaugée **munie d’un pipeteur**', 'Ingestion de soude, brûlure de la bouche', 'Le manipulateur'],
              ['Travailler debout, flacon posé sur la paillasse et rebouché aussitôt', 'Renversement, projection ; la soude laissée à l’air absorbe aussi le dioxyde de carbone et change de concentration', 'Le manipulateur, l’environnement et le produit'],
              ['Remplir la burette **descendue sous le niveau des yeux**, robinet fermé, avec un petit entonnoir retiré ensuite', 'Projection dans les yeux lors d’un remplissage au-dessus de la tête ; volume faussé par l’entonnoir qui goutte', 'Le manipulateur (et la justesse de la mesure)'],
              ['Porter des gants en nitrile et les changer s’ils sont éclaboussés', 'Contact de la soude avec la peau', 'Le manipulateur'],
              ['Étiqueter la fiole : nom, concentration, date, pictogramme', 'Confusion avec de l’eau : ingestion, mauvais usage', 'Les autres utilisateurs et le produit'],
              ['Verser les restes dans le bidon de déchets chimiques prévu', 'Rejet d’une base dans les eaux usées', 'L’environnement'],
            ],
          },
          { type: 'p', text: 'En microbiologie, le même raisonnement s’applique. Travailler dans la zone d’asepsie autour de la flamme, flamber l’ouverture des tubes et n’entrouvrir que légèrement la boîte de Petri protègent surtout le **produit**. Le lavage des mains, la désinfection de la paillasse et le tri des déchets protègent surtout le **manipulateur** et l’**environnement**.' },
          { type: 'warning', title: 'Éthanol et flamme : le piège classique', text: 'L’éthanol utilisé pour désinfecter est **très inflammable** (mention H225 : « Liquide et vapeurs très inflammables »). On désinfecte la paillasse **bec éteint**, on laisse sécher, puis on allume. Un flacon d’éthanol ne reste jamais à côté de la flamme.' },
          { type: 'note', title: 'Ce que le programme attend de toi', text: 'En Première, on ne te demande pas d’inventer les mesures de prévention : on te demande de maîtriser la démarche d’analyse et de **justifier** les mesures prévues dans une procédure. C’est exactement ce que tu fais dans cette activité.' },
          {
            type: 'retenir',
            items: [
              'Chaque consigne d’une procédure répond à un risque identifié : tu dois pouvoir dire lequel et ce qu’elle protège (manipulateur, environnement, produit).',
              'Supprimer ou remplacer le danger (substitution) est plus efficace que s’en protéger.',
              'Les EPI ne compensent jamais une mauvaise organisation du poste de travail.',
            ],
          },
        ],
      },

      {
        title: 'Mettre en œuvre et contrôler la prévention',
        intro: 'Une analyse des risques ne sert que si elle se traduit en gestes avant, pendant et après la manipulation, et si l’on vérifie qu’ils sont vraiment appliqués.',
        blocks: [
          {
            type: 'steps',
            title: 'Plan de prévention de la séance (isolement et dosage)',
            items: [
              { title: 'Avant', text: 'Lire la procédure et les étiquettes ; repérer le rince-œil, la trousse de secours et les conteneurs à déchets ; attacher ses cheveux, fermer sa blouse ; se laver les mains ; désinfecter la paillasse bec éteint ; organiser le poste (zone d’asepsie, bac de désinfection et collecteur à portée de main).' },
              { title: 'Pendant', text: 'Porter les lunettes dès que la soude est sortie ; ouvrir les cultures près de la flamme et garder l’éthanol loin d’elle ; laisser les tubes debout dans un portoir ; utiliser le pipeteur ; reboucher les flacons ; jeter immédiatement lames et lamelles dans le collecteur OPCT.' },
              { title: 'Après', text: 'Trier les déchets ; placer la verrerie contaminée dans le bac de désinfection ; ranger ; désinfecter la paillasse ; retirer ses gants puis se laver les mains ; signaler et noter tout incident.' },
            ],
          },
          { type: 'figure', image: IMG.dechets, caption: 'Les conteneurs de fin de séance (règles de tri vues dans le cours C4). Ils doivent être en place et à portée de main dès le début, pas cherchés à la dernière minute.', size: 'wide' },
          { type: 'definition', term: 'Observation entre pairs', text: 'un élève observe un camarade pendant sa manipulation à l’aide d’une grille de critères, puis lui fait un retour précis et bienveillant. On repère ainsi les gestes à risque que l’on ne voit pas soi-même.' },
          {
            type: 'table',
            caption: 'Extrait d’une grille d’observation entre pairs',
            head: ['Geste observé', 'Critère de réussite'],
            rows: [
              ['Port des lunettes', 'Lunettes sur les yeux pendant toute la manipulation de la soude, et pas sur le front'],
              ['Ouverture du tube de culture', 'Près de la flamme, ouverture flambée, tube refermé aussitôt'],
              ['Stérilisation de l’anse', 'Séchage dans le cône bleu avant de porter l’anse au rouge'],
              ['Pipetage', 'Pipeteur toujours utilisé, jamais la bouche'],
              ['Remplissage de la burette', 'Burette descendue sous le niveau des yeux, robinet fermé, entonnoir retiré'],
              ['Élimination des déchets', 'Lame et lamelle directement dans le collecteur OPCT'],
              ['Fin de séance', 'Paillasse désinfectée ; mains lavées après le retrait des gants'],
            ],
          },
          { type: 'p', text: 'Le programme propose aussi de **vérifier expérimentalement** l’efficacité des mesures d’hygiène : comparer plusieurs désinfectants, ou plusieurs durées et modes de lavage des mains (activité 3).' },
          {
            type: 'steps',
            title: 'Tester l’efficacité de désinfectants de paillasse',
            items: [
              'Délimiter sur la paillasse plusieurs zones identiques et en garder une sans traitement : c’est la zone **témoin**.',
              'Traiter chaque autre zone avec un désinfectant différent, en respectant pour tous le même temps de contact.',
              'Prélever chaque zone de la même façon : écouvillon humidifié frotté sur la même surface puis étalé sur gélose, ou gélose de contact appliquée directement.',
              'Incuber toutes les boîtes dans les mêmes conditions, puis compter les colonies.',
              'Comparer chaque zone à la zone témoin, et répéter l’expérience avant de conclure.',
            ],
          },
          { type: 'note', title: 'Une seule différence à la fois', text: 'Pour que la comparaison soit valable, une seule condition change entre les essais (le désinfectant, ou la durée du lavage) ; tout le reste est identique. C’est la logique de toute démarche expérimentale.' },
          {
            type: 'retenir',
            items: [
              'Un plan de prévention organise les gestes avant, pendant et après la manipulation.',
              'L’observation entre pairs, à l’aide d’une grille, permet de vérifier que les mesures sont réellement appliquées.',
              'L’efficacité d’un désinfectant ou d’un lavage se teste par comparaison à un témoin, en ne changeant qu’un facteur et en répétant les essais.',
            ],
          },
        ],
      },

      {
        title: 'Réagir en cas d’incident : comprendre les gestes',
        intro: 'Malgré la prévention, un incident peut arriver. Connaître les gestes ne suffit pas : comprendre pourquoi ils sont efficaces permet de les appliquer sans hésiter.',
        blocks: [
          { type: 'p', text: 'Les premiers gestes et la règle **protéger, alerter, secourir** ont été présentés dans le cours C4. On les applique ici aux incidents possibles pendant cette séance. Dans tous les cas, on **prévient immédiatement le professeur**, et l’incident est noté dans le registre de santé et de sécurité de l’établissement.' },
          { type: 'figure', image: IMG.douche, caption: 'Un rince-œil fixé au-dessus d’un évier et une trousse de secours : repère leur emplacement dès le début de la séance.', size: 'normal' },
          {
            type: 'table',
            caption: 'Les incidents possibles pendant la séance',
            head: ['Incident', 'Gestes', 'Pourquoi ces gestes ?'],
            rows: [
              ['Projection de soude dans l’œil', 'Rincer **immédiatement** au rince-œil, paupières écartées, pendant au moins 15 minutes ; retirer les lentilles si possible ; alerter ; avis médical avec l’étiquette du produit.', 'Une base continue d’attaquer les tissus tant qu’elle reste dans l’œil : chaque seconde compte, et seul un rinçage long et abondant la dilue et l’entraîne.'],
              ['Coupure avec une lamelle contaminée', 'Ne pas faire saigner ; nettoyer à l’eau et au savon, rincer, puis désinfecter pendant au moins 5 minutes (Dakin, eau de Javel à 2,6 % diluée au 1/5^e^ ou, à défaut, alcool à 70 %) ; alerter ; déclarer l’accident.', 'Presser la plaie abîme les tissus sans éliminer les micro-organismes ; le lavage les entraîne, et l’antiseptique a besoin d’un temps de contact pour agir.'],
              ['Projection de culture dans l’œil ou la bouche', 'Rincer abondamment pendant au moins 5 minutes, à l’eau ou au sérum physiologique ; alerter ; avis médical.', 'Les muqueuses sont une porte d’entrée : le rinçage élimine les micro-organismes avant qu’ils ne s’y installent.'],
              ['Tube de culture renversé', 'Prévenir ; recouvrir de papier absorbant, puis verser le désinfectant ; laisser agir le temps prévu ; ramasser avec des gants dans le carton DASRI ; désinfecter de nouveau.', 'Le papier limite éclaboussures et aérosols quand on verse le désinfectant ; le temps de contact inactive les micro-organismes avant qu’on les manipule.'],
              ['Éthanol enflammé sur la paillasse', 'Couper le gaz ; étouffer les flammes avec un récipient retourné ou une couverture anti-feu ; alerter.', 'Une flamme a besoin de dioxygène : l’étouffer la prive d’air. Jeter de l’eau risquerait de projeter et d’étaler le liquide enflammé.'],
              ['Brûlure par la flamme', 'Refroidir aussitôt la zone sous l’eau tempérée pendant une quinzaine de minutes ; alerter.', 'Le refroidissement limite la progression de la brûlure dans la peau et calme la douleur ; la glace, trop froide, abîmerait davantage les tissus.'],
            ],
          },
          { type: 'warning', title: 'À ne jamais faire', text: ['Cacher un incident « pour ne pas déranger » : une coupure avec du matériel contaminé ou une projection dans l’œil impose toujours une prise en charge.', 'Tenter de « neutraliser » une projection de base avec un acide, ou l’inverse : la réaction dégage de la chaleur et aggrave la lésion. On rince à l’eau, c’est tout.'] },
          {
            type: 'retenir',
            items: [
              'Protéger, alerter, secourir : couper la source de danger, prévenir le professeur, puis appliquer les premiers gestes.',
              'Projection chimique dans l’œil : rinçage immédiat d’au moins 15 minutes ; coupure avec du matériel contaminé : ne pas faire saigner, laver, désinfecter au moins 5 minutes.',
              'Chaque geste a une raison : diluer et entraîner le produit, laisser agir l’antiseptique, priver le feu d’air.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur une situation réelle de laboratoire. Réponds d’abord seul(e), en phrases complètes : tu peux écrire ta réponse directement sous la question. Utilise le « coup de pouce » si tu bloques, puis compare avec la correction.',
    activities: [
      {
        title: 'Analyser le logigramme d’un isolement bactérien',
        duration: '30 min',
        skills: ['Analyser', 'Identifier', 'Justifier'],
        context: 'Ta classe doit isoler une souche d’_Escherichia coli_ K12 (souche de laboratoire non pathogène, groupe 1) à partir d’une culture en bouillon, puis réaliser un état frais. Avant de manipuler, le professeur te demande d’analyser la procédure.',
        documents: [
          {
            label: 'Document 1',
            title: 'Procédure opératoire simplifiée',
            blocks: [
              {
                type: 'steps',
                items: [
                  'Désinfecter la paillasse avec de l’éthanol à 70 %, bec Bunsen éteint ; laisser sécher.',
                  'Allumer le bec Bunsen ; disposer le matériel stérile dans la zone d’asepsie.',
                  'Homogénéiser le tube de bouillon, l’ouvrir près de la flamme et flamber son ouverture.',
                  'Prélever une goutte de culture avec l’anse stérile ; flamber l’ouverture du tube et le refermer.',
                  'Ensemencer la gélose en stries en entrouvrant seulement la boîte de Petri, près de la flamme.',
                  'Stériliser l’anse : la placer d’abord dans la zone la moins chaude de la flamme (cône bleu) pour sécher la culture, puis la porter au rouge.',
                  'Déposer une goutte de bouillon entre lame et lamelle (état frais) et l’observer au microscope.',
                  'Placer la boîte de Petri, retournée, à l’étuve à 37 °C.',
                  'Jeter la lame et la lamelle dans le collecteur OPCT, désinfecter la paillasse, se laver les mains.',
                ],
              },
            ],
          },
          {
            label: 'Document 2',
            title: 'Données sur les dangers',
            text: [
              '_Escherichia coli_ K12 : souche de laboratoire du groupe 1 (non susceptible de provoquer une maladie chez l’être humain). Par principe, toute culture est manipulée comme si elle était potentiellement pathogène.',
              'Éthanol à 70 % : liquide et vapeurs très inflammables (H225) ; provoque une sévère irritation des yeux (H319).',
              'Bec Bunsen : flamme de plus de 1 000 °C alimentée par un gaz combustible.',
              'Lames et lamelles : verre fin, cassant et coupant.',
            ],
          },
        ],
        questions: [
          { text: 'Relève quatre étapes de la procédure qui constituent des situations exposantes et indique pour chacune le danger en cause.', hint: 'Une situation exposante est un moment où tu es en présence d’un danger : cherche la flamme, l’éthanol, la culture et le verre.', answer: 'Par exemple : étape 1 (éthanol, inflammable et irritant pour les yeux) ; étape 2 (flamme et gaz) ; étapes 3, 4 et 5 (culture bactérienne) ; étape 6 (culture et flamme) ; étape 7 (culture et verre de la lame et de la lamelle) ; étape 9 (matériel contaminé, verre coupant).' },
          { text: 'Pour l’étape 6, décris l’événement dangereux possible, la voie d’exposition et le dommage. Explique comment la consigne le prévient.', hint: 'Que se passe-t-il si l’on plonge directement une anse chargée de liquide dans la partie la plus chaude de la flamme ?', answer: 'Le liquide bout brutalement et « crépite » : des microgouttelettes contaminées sont projetées (événement dangereux). Elles peuvent atteindre la peau, les yeux ou être inhalées (voies d’exposition : contact, muqueuses, inhalation). Le dommage possible est une infection ou une irritation, peu probable avec une souche de groupe 1, plus grave avec une souche pathogène. En séchant d’abord la culture dans le cône bleu, moins chaud, on supprime le crépitement.' },
          { text: 'Pourquoi l’étape 1 précise-t-elle « bec Bunsen éteint » ?', answer: 'L’éthanol à 70 % est très inflammable (H225) : ses vapeurs ou une flaque pourraient s’enflammer au contact de la flamme. On désinfecte bec éteint et on attend que la paillasse soit sèche avant d’allumer le bec.' },
          { text: 'Classe les consignes suivantes selon qu’elles protègent surtout le produit, ou surtout le manipulateur et l’environnement : ouvrir le tube près de la flamme ; se laver les mains en fin de séance ; entrouvrir seulement la boîte de Petri ; jeter la lame dans le collecteur OPCT ; flamber l’ouverture du tube.', hint: 'Ici, le « produit », c’est la culture : qu’est-ce qui pourrait la contaminer ?', answer: ['Surtout le produit (éviter que la culture soit contaminée par les micro-organismes de l’air) : ouvrir le tube près de la flamme, entrouvrir seulement la boîte de Petri, flamber l’ouverture du tube.', 'Surtout le manipulateur et l’environnement : se laver les mains, jeter la lame dans le collecteur OPCT.', 'Certaines consignes servent les deux : refermer vite le tube limite à la fois la contamination de la culture et la dispersion d’aérosols.'] },
          { text: 'L’étape 8 (incubation à l’étuve) est-elle une situation exposante ? Justifie.', answer: 'Non, tant que la boîte reste fermée : le danger (la culture) n’est pas accessible au manipulateur. La situation redevient exposante lors de la lecture des résultats, quand on ouvre la boîte.' },
        ],
      },
      {
        title: 'Évaluer les risques d’un dosage avec une solution corrosive',
        duration: '30 min',
        skills: ['Analyser', 'Évaluer', 'Argumenter'],
        context: 'Pour doser l’acide éthanoïque d’un vinaigre, tu dois préparer une solution d’hydroxyde de sodium (soude) à 0,10 mol·L^-1^ en diluant 10 fois une solution à 1,0 mol·L^-1^, puis remplir une burette de 25 mL avec la solution diluée.',
        documents: [
          {
            label: 'Document 3',
            title: 'Extrait de l’étiquette de la solution mère',
            source: 'Mentions du règlement CLP',
            text: [
              'Hydroxyde de sodium en solution aqueuse, 1,0 mol·L^-1^. Pictogramme GHS05 (corrosion). Mention d’avertissement : **Danger**.',
              'H290 : Peut être corrosif pour les métaux. H314 : Provoque de graves brûlures de la peau et de graves lésions des yeux.',
              'P280 : Porter des gants de protection, des vêtements de protection, un équipement de protection des yeux et du visage.',
              'P305 + P351 + P338 : En cas de contact avec les yeux : rincer avec précaution à l’eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte et si elles peuvent être facilement enlevées. Continuer à rincer.',
            ],
          },
          {
            label: 'Document 4',
            title: 'Grille de cotation des risques',
            blocks: [
              { type: 'table', head: ['Note', 'Probabilité', 'Gravité'], rows: [['1', 'Improbable', 'Faible, disparaît sans soin'], ['2', 'Possible', 'Lésion soignée sans séquelle'], ['3', 'Probable', 'Grave ou irréversible']] },
              { type: 'p', text: 'Niveau de risque = probabilité × gravité : 1 ou 2, faible ; 3 ou 4, moyen ; 6 ou 9, élevé.' },
            ],
          },
        ],
        questions: [
          { text: 'Relève dans le document 3 les informations qui montrent que la solution mère est dangereuse. Quelle partie du corps est la plus menacée ?', answer: 'Le pictogramme de corrosion, la mention d’avertissement « Danger » et la mention H314 (graves brûlures de la peau et graves lésions des yeux). Les yeux sont les plus menacés : une projection peut provoquer une lésion grave, parfois irréversible.' },
          { text: 'Cote les trois situations exposantes suivantes (probabilité, gravité, niveau) en justifiant chaque note : a) prélèvement de 10,0 mL de solution mère à la pipette jaugée munie d’un pipeteur ; b) remplissage de la burette placée au-dessus de la tête de l’élève ; c) transport de la fiole bouchée de solution diluée jusqu’à la paillasse.', hint: 'Pour la gravité, demande-toi quelle partie du corps peut être atteinte ; pour la probabilité, pense à la position des mains et des yeux pendant le geste.', answer: ['Exemple de cotation argumentée :', 'a) Probabilité 1 (pipeteur, geste à hauteur de paillasse), gravité 3 (solution corrosive) : niveau 3, risque moyen.', 'b) Probabilité 2 ou 3 (le liquide peut déborder ou couler vers le visage), gravité 3 (projection dans l’œil) : niveau 6 ou 9, risque élevé.', 'c) Probabilité 1 (fiole bouchée, trajet court), gravité 2 (coupure si la fiole tombe ; la solution diluée est bien moins agressive) : niveau 2, risque faible.', 'D’autres notes sont acceptables si elles sont justifiées.'] },
          { text: 'Quelle situation faut-il traiter en priorité ? Quelle consigne de la procédure réduit le plus ce risque ?', answer: 'La situation b, qui a le niveau le plus élevé. On descend la burette sur son support pour que son ouverture soit sous le niveau des yeux, robinet fermé, et on la remplit avec un petit entonnoir que l’on retire ensuite. Les lunettes protègent en plus si une projection se produit malgré tout.' },
          { text: 'Pour chaque consigne, indique le risque qu’elle réduit : porter des lunettes ; utiliser un pipeteur ; reboucher le flacon aussitôt ; verser les restes dans le bidon de déchets chimiques.', answer: ['Lunettes : projection de soude dans l’œil.', 'Pipeteur : ingestion de soude et brûlure de la bouche.', 'Reboucher le flacon : renversement et projection ; c’est aussi une protection du produit, car la soude laissée à l’air absorbe le dioxyde de carbone et sa concentration change.', 'Bidon de déchets chimiques : pollution des eaux usées (environnement).'] },
          { text: 'Un élève propose de ne pas porter ses lunettes puisque « la solution diluée n’est presque pas dangereuse ». Que lui réponds-tu ?', answer: 'Pendant la séance, il manipule aussi la solution mère corrosive, et ses voisins également : une projection peut survenir à tout moment, y compris à cause d’un autre élève. Les lunettes se portent du début à la fin de la séance, pas seulement pendant son propre geste.' },
        ],
      },
      {
        title: 'Le lavage des mains est-il efficace ?',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Interpréter', 'Critiquer'],
        context: 'Le programme propose d’étudier l’influence de la durée et du mode de lavage des mains. Dans une classe de Première, chaque binôme a appliqué trois doigts sur une gélose nutritive avant puis après un traitement des mains, et les boîtes ont été incubées 48 h à 30 °C.',
        documents: [
          { label: 'Document 5', title: 'Empreintes de doigts avant et après lavage', image: IMG.empreintes, caption: 'À gauche, trois doigts appliqués avant lavage ; à droite, les mêmes doigts après un lavage au savon de 40 secondes (photographie d’illustration).' },
          {
            label: 'Document 6',
            title: 'Résultats de la classe : nombre de colonies pour trois doigts',
            blocks: [
              {
                type: 'table',
                head: ['Traitement des mains', 'Avant', 'Après'],
                rows: [
                  ['Eau seule, 10 s', '152', '118'],
                  ['Savon, 10 s', '147', '61'],
                  ['Savon, 40 s, tous les gestes', '160', '9'],
                  ['Friction hydroalcoolique, 30 s', '139', '4'],
                ],
              },
              { type: 'p', text: 'Résultats de TP : un seul binôme par traitement, un seul essai.' },
            ],
          },
        ],
        questions: [
          { text: 'Calcule, pour chaque traitement, le pourcentage de diminution du nombre de colonies.', hint: 'Diminution (%) = (avant − après) ÷ avant × 100.', answer: ['Eau seule, 10 s : (152 − 118) ÷ 152 × 100 ≈ 22 %.', 'Savon, 10 s : (147 − 61) ÷ 147 × 100 ≈ 59 %.', 'Savon, 40 s : (160 − 9) ÷ 160 × 100 ≈ 94 %.', 'Friction hydroalcoolique, 30 s : (139 − 4) ÷ 139 × 100 ≈ 97 %.'] },
          { text: 'Quels facteurs influencent l’efficacité du lavage ? Appuie-toi sur des comparaisons précises.', answer: 'Le mode de lavage : pour une même durée de 10 s, le savon (59 %) est bien plus efficace que l’eau seule (22 %). La durée et la technique : avec le savon, passer de 10 s à 40 s en suivant tous les gestes fait passer la diminution de 59 % à 94 %. La friction hydroalcoolique de 30 s donne ici le meilleur résultat (97 %).' },
          { text: 'Pourquoi n’obtient-on pas zéro colonie, même après le meilleur traitement ? Est-ce un problème ?', answer: 'Le lavage élimine surtout la flore transitoire (micro-organismes récemment déposés sur la peau), mais pas toute la flore résidente, installée durablement dans la peau. Le but est de réduire fortement la charge microbienne des mains, pas de les rendre stériles, ce qui est impossible.' },
          { text: 'Propose deux améliorations du protocole pour que la conclusion soit plus fiable.', hint: 'Une seule mesure par traitement suffit-elle pour conclure ? Les doigts ont-ils été appliqués de la même façon ?', answer: 'Répéter chaque traitement avec plusieurs élèves et calculer une moyenne ; appliquer les doigts avec la même pression et pendant la même durée ; ajouter une boîte témoin non touchée pour vérifier que le milieu est stérile ; utiliser les mêmes doigts et la même gélose pour tous les essais.' },
          { text: 'Relie ces résultats à la procédure de fin de séance : quand et comment dois-tu te laver les mains ?', answer: 'En arrivant, après avoir retiré ses gants et avant de quitter le laboratoire, à l’eau et au savon en suivant tous les gestes (40 à 60 secondes au total, avec une friction soigneuse d’au moins 30 secondes), ou par friction hydroalcoolique de 20 à 30 secondes si les mains sont visiblement propres.' },
        ],
      },
      {
        title: 'Trier les déchets en fin de séance',
        duration: '15 min',
        skills: ['Identifier', 'Appliquer'],
        context: 'À la fin des deux manipulations (isolement et dosage), ta paillasse porte les déchets ci-dessous. Tu dois les éliminer correctement.',
        documents: [
          { label: 'Document 7', title: 'Les conteneurs du laboratoire', image: IMG.dechets, caption: 'Les cinq conteneurs disponibles en fin de séance.' },
          {
            label: 'Document 8',
            title: 'Les déchets de la paillasse',
            text: [
              'a) boîte de Petri d’une culture de la séance précédente, après lecture ; b) lame et lamelle de l’état frais ; c) cône de micropipette ayant servi à prélever la culture ; d) gants portés pendant l’isolement ;',
              'e) pipette jaugée en verre ayant servi à prélever la soude ; f) reste de solution de soude à 0,10 mol·L^-1^ dans un bécher ; g) emballage papier d’une pipette stérile ; h) pipette graduée en verre ayant contenu du bouillon de culture ; i) tube de culture fêlé.',
            ],
          },
        ],
        questions: [
          { text: 'Associe chaque élément (a à i) au conteneur adapté.', hint: 'Pose-toi deux questions : est-ce contaminé ? Est-ce que cela pique ou coupe ?', answer: ['Carton DASRI : a (boîte de Petri, éventuellement autoclavée avant), c (cône), d (gants).', 'Collecteur OPCT : b (lame et lamelle), i (tube fêlé contaminé, qui peut casser et couper).', 'Bac de désinfection : h (pipette réutilisable contaminée).', 'Bidon de déchets chimiques : f (reste de soude).', 'Poubelle ordinaire : g (emballage non souillé).', 'Piège : e n’est pas un déchet ; on la rince à l’eau du robinet puis à l’eau distillée et on la met au lavage.'] },
          { text: 'Pourquoi ne faut-il jamais mettre la lame b dans le carton DASRI ?', answer: 'Le verre peut percer le sac et le carton : la personne qui manipule ensuite le carton risque une coupure avec un objet contaminé. Les objets piquants ou coupants vont dans le collecteur OPCT rigide, qui résiste à la perforation.' },
          { text: 'Le reste de soude f est très dilué. Pourquoi le verse-t-on quand même dans le bidon de déchets chimiques ?', answer: 'Par principe, les déchets chimiques ne vont pas à l’évier : on évite de polluer les eaux usées, d’abîmer les canalisations et de provoquer des réactions avec d’autres produits jetés. C’est le règlement du laboratoire qui précise les éventuelles exceptions.' },
        ],
      },
      {
        title: 'Réagir face à un incident',
        duration: '20 min',
        skills: ['Raisonner', 'Appliquer'],
        context: 'Voici trois incidents survenus pendant des séances de TP. Pour chacun, indique la conduite à tenir, puis cherche comment il aurait pu être évité.',
        documents: [
          { label: 'Document 9', title: 'Le rince-œil de la salle de TP', image: IMG.douche, caption: 'Rince-œil à deux buses et trousse de secours.', size: 'normal' },
          {
            label: 'Document 10',
            title: 'Trois incidents',
            text: [
              'Incident 1 : en remplissant sa burette placée au-dessus de sa tête, Léa reçoit une goutte de soude à 1,0 mol·L^-1^ dans l’œil gauche. Elle ne portait pas ses lunettes.',
              'Incident 2 : Hugo se coupe le doigt avec la lamelle d’un état frais qu’il vient d’observer.',
              'Incident 3 : Inès renverse un tube de bouillon de culture d’_E. coli_ posé couché sur la paillasse.',
            ],
          },
        ],
        questions: [
          { text: 'Incident 1 : décris les premiers gestes, dans l’ordre, en précisant leur durée.', answer: 'Alerter immédiatement le professeur ; conduire Léa au rince-œil ; rincer aussitôt et abondamment à l’eau, paupières bien écartées, pendant au moins 15 minutes, en retirant ses lentilles si possible ; ne pas frotter l’œil ; avis médical systématique, avec l’étiquette du produit.' },
          { text: 'Incident 2 : quelle est la conduite à tenir ?', hint: 'La lamelle a touché une culture : c’est une coupure avec du matériel contaminé.', answer: 'Ne pas faire saigner la plaie ; la nettoyer à l’eau et au savon, rincer, puis désinfecter pendant au moins 5 minutes (Dakin ou eau de Javel diluée, à défaut alcool à 70 %) ; protéger par un pansement ; alerter le professeur, passer à l’infirmerie et déclarer l’accident.' },
          { text: 'Incident 3 : décris la procédure de décontamination de la paillasse.', answer: 'Prévenir les voisins et le professeur ; mettre des gants ; recouvrir le liquide de papier absorbant, verser du désinfectant dessus et laisser agir le temps de contact prévu ; ramasser le papier dans le carton DASRI (et le verre cassé éventuel dans le collecteur OPCT) ; désinfecter de nouveau la paillasse ; retirer les gants et se laver les mains.' },
          { text: 'Pour chacun des trois incidents, indique une mesure de prévention qui l’aurait évité ou en aurait limité les conséquences.', answer: ['Incident 1 : porter ses lunettes pendant toute la séance et remplir la burette descendue sous le niveau des yeux.', 'Incident 2 : manipuler lames et lamelles avec précaution et les jeter directement dans le collecteur OPCT, sans les reprendre à la main.', 'Incident 3 : toujours placer les tubes debout dans un portoir et ne les ouvrir qu’au moment du prélèvement.'] },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'L’analyse a priori des risques se fait avant de manipuler : on découpe la procédure en étapes (logigramme) pour repérer les situations exposantes et les événements dangereux les plus probables.',
      'Le risque se cote en combinant la probabilité d’apparition du dommage et sa gravité ; chaque note se justifie, on traite d’abord les risques les plus élevés, puis on recote après les mesures (risque résiduel).',
      'On distingue le risque pour le manipulateur et l’environnement du risque pour le produit (culture contaminée, solution altérée).',
      'Chaque consigne d’une procédure répond à un risque. Priorité : supprimer ou remplacer le danger, puis protéger collectivement, organiser le travail et enfin porter des EPI.',
      'Un plan de prévention organise les gestes avant, pendant et après la manipulation ; l’observation entre pairs vérifie qu’ils sont appliqués, et l’efficacité d’une mesure d’hygiène se teste par comparaison à un témoin.',
      'Les déchets sont triés dès la fin de la manipulation : carton DASRI, collecteur OPCT, bac de désinfection, bidons de déchets chimiques.',
      'En cas d’incident : protéger, alerter, secourir. Projection chimique dans l’œil : rinçage d’au moins 15 minutes ; coupure contaminée : laver, rincer, désinfecter au moins 5 minutes.',
    ],
    method: {
      title: 'Analyser les risques d’une manipulation en cinq étapes',
      steps: [
        'Lire toute la procédure et la découper en étapes (logigramme).',
        'Pour chaque étape, repérer le **danger** présent et dire s’il s’agit d’une **situation exposante**.',
        'Pour chaque situation exposante, décrire l’**événement dangereux** le plus probable, la voie d’exposition et le **dommage**.',
        'Coter le risque (probabilité × gravité) et classer les situations de la plus risquée à la moins risquée.',
        'Relier chaque mesure de prévention de la procédure au risque qu’elle réduit et à ce qu’elle protège : manipulateur, environnement ou produit.',
      ],
    },
    vocabulary: [
      { term: 'Logigramme', definition: 'Représentation d’une procédure en étapes successives reliées par des flèches, qui sert à analyser chaque geste.' },
      { term: 'Situation exposante', definition: 'Moment de la manipulation où le manipulateur est en présence d’un danger.' },
      { term: 'Événement dangereux', definition: 'Événement imprévu qui met le danger en contact avec le manipulateur (projection, coupure, renversement…).' },
      { term: 'Voie d’exposition', definition: 'Chemin par lequel le danger atteint l’organisme : contact cutané ou muqueux, inhalation, ingestion, piqûre ou coupure.' },
      { term: 'Probabilité', definition: 'Chance que l’événement dangereux se produise et entraîne le dommage.' },
      { term: 'Gravité', definition: 'Importance du dommage possible, de la simple gêne à l’atteinte irréversible.' },
      { term: 'Évaluation des risques', definition: 'Cotation de chaque risque à partir de sa probabilité et de sa gravité, pour les hiérarchiser.' },
      { term: 'Risque résiduel', definition: 'Risque qui subsiste une fois les mesures de prévention et de protection appliquées ; il doit être faible ou maîtrisé.' },
      { term: 'Observation entre pairs', definition: 'Observation d’un camarade qui manipule, à l’aide d’une grille de critères, suivie d’un retour précis et bienveillant.' },
      { term: 'Risque pour le produit', definition: 'Risque d’altérer ce que l’on manipule : contamination d’une culture, changement de concentration d’une solution.' },
      { term: 'Substitution', definition: 'Remplacement d’un produit ou d’un procédé dangereux par un autre qui l’est moins.' },
      { term: 'DASRI', definition: 'Déchets d’activités de soins à risques infectieux : déchets contaminés, collectés dans des emballages jaunes spécifiques.' },
      { term: 'OPCT', definition: 'Objets piquants, coupants, tranchants : ils sont collectés dans un collecteur rigide qui résiste à la perforation.' },
    ],
    mistakes: [
      { wrong: 'Travailler près de la flamme me protège des bactéries.', right: 'La zone d’asepsie protège surtout la culture (le produit) des contaminations ; le manipulateur est protégé par ses gestes, l’hygiène des mains et les EPI.' },
      { wrong: 'Un risque peu probable peut être ignoré.', right: 'Si le dommage possible est grave (œil, infection), même une faible probabilité impose des mesures de prévention.' },
      { wrong: 'Avec des gants, je suis protégé de tout.', right: 'Les EPI viennent en dernier : ils complètent une bonne organisation sans la remplacer, et des gants souillés contaminent tout ce qu’ils touchent.' },
      { wrong: 'Désinfecter à l’éthanol avec le bec allumé pour gagner du temps.', right: 'L’éthanol est très inflammable : on désinfecte bec éteint et on attend que la paillasse soit sèche.' },
      { wrong: 'Jeter une lame ou une lamelle dans le carton DASRI.', right: 'Tout ce qui pique ou coupe va dans le collecteur OPCT rigide.' },
      { wrong: 'Neutraliser une projection de soude avec du vinaigre.', right: 'On rince immédiatement et abondamment à l’eau, pendant au moins 15 minutes.' },
    ],
    quiz: [
      { question: 'Une situation exposante est :', choices: ['le dommage subi par le manipulateur', 'un moment où le manipulateur est en présence du danger', 'un équipement de protection', 'le pictogramme d’un produit'], answer: 1, explanation: 'La situation exposante est le moment où le danger est présent et accessible au manipulateur.' },
      { question: 'Le niveau d’un risque dépend :', choices: ['uniquement de la gravité du dommage', 'uniquement du nombre d’élèves présents', 'de la probabilité d’apparition du dommage et de sa gravité', 'du prix du produit utilisé'], answer: 2, explanation: 'Le risque combine la probabilité et la gravité du dommage.' },
      { question: 'Avec une probabilité cotée 2 et une gravité cotée 3, le niveau de risque est :', choices: ['5 : risque moyen', '1 : risque faible', '9 : risque élevé', '6 : risque élevé'], answer: 3, explanation: 'Niveau = probabilité × gravité = 2 × 3 = 6 : risque élevé.' },
      { question: 'Ouvrir un tube de culture près de la flamme protège surtout :', choices: ['le produit, c’est-à-dire la culture', 'les yeux du manipulateur', 'les canalisations', 'la paillasse voisine'], answer: 0, explanation: 'La zone d’asepsie évite que la culture soit contaminée par les micro-organismes de l’air.' },
      { question: 'Quelle mesure est prioritaire selon les principes de prévention ?', choices: ['Porter des gants', 'Remplacer un produit dangereux par un produit moins dangereux', 'Mettre une blouse', 'Porter un masque'], answer: 1, explanation: 'On agit d’abord sur le danger lui-même (substitution) ; les EPI viennent en dernier.' },
      { question: 'Une lamelle d’état frais usagée se jette :', choices: ['dans la poubelle ordinaire', 'dans le carton DASRI', 'dans le collecteur OPCT', 'dans l’évier'], answer: 2, explanation: 'Elle est contaminée et coupante : collecteur OPCT rigide.' },
      { question: 'Après une projection de soude dans l’œil, il faut :', choices: ['rincer à l’eau pendant au moins 15 minutes', 'verser quelques gouttes de vinaigre', 'frotter l’œil avec un mouchoir', 'attendre que la douleur passe'], answer: 0, explanation: 'Rinçage immédiat et prolongé à l’eau ; on ne neutralise jamais avec un acide.' },
      { question: 'Après une coupure avec du matériel contaminé, on :', choices: ['fait saigner la plaie en la pressant', 'met un pansement sans rien dire', 'applique une crème', 'nettoie à l’eau et au savon, rince, puis désinfecte au moins 5 minutes'], answer: 3, explanation: 'C’est la conduite recommandée par l’INRS ; on alerte ensuite et on déclare l’accident.' },
      { question: 'L’éthanol à 70 % utilisé pour désinfecter la paillasse :', choices: ['est sans danger', 'est très inflammable : on l’utilise bec éteint', 'rend la paillasse stérile', 'se mélange à l’eau de Javel pour être plus efficace'], answer: 1, explanation: 'Mention H225 : liquide et vapeurs très inflammables. Une désinfection ne stérilise pas.' },
      { question: 'Un lavage des mains au savon efficace dure environ :', choices: ['5 secondes', '15 minutes', '40 à 60 secondes', '5 minutes'], answer: 2, explanation: 'L’OMS recommande 40 à 60 secondes pour l’ensemble de la procédure : mouillage, friction de toutes les zones des mains, rinçage et séchage.' },
    ],
    exercises: [
      {
        title: 'Analyser une coloration de Gram',
        statement: ['Une coloration de Gram se réalise sur un frottis fixé à la flamme, avec successivement du violet de gentiane, du lugol, de l’éthanol à 95 % puis de la fuchsine.', 'a) Repère deux situations exposantes et le danger de chacune. b) Pour l’une d’elles, propose une cotation argumentée du risque. c) Justifie deux consignes habituelles de cette procédure en précisant ce qu’elles protègent.'],
        answer: ['a) Fixation du frottis à la flamme : flamme (brûlure) et frottis contaminé. Décoloration à l’éthanol : liquide très inflammable, à proximité possible du bec, et irritant pour les yeux. Manipulation des colorants : le violet de gentiane, par exemple, est nocif et dangereux pour les yeux.', 'b) Éthanol près de la flamme : probabilité 2 (flacon souvent posé près du bec), gravité 2 ou 3 (brûlure, incendie) : niveau 4 à 6, risque moyen à élevé.', 'c) Éloigner le flacon d’éthanol du bec et décolorer bec éteint ou loin de la flamme : protège le manipulateur et l’environnement (incendie). Récupérer les colorants dans le bidon de déchets chimiques : protège l’environnement. Porter des lunettes : protège les yeux du manipulateur.'],
      },
      {
        title: 'Coter et classer des risques',
        statement: ['On donne la cotation de quatre situations : a) coupure avec une lamelle : probabilité 2, gravité 2 ; b) projection d’une culture de groupe 2 dans l’œil : probabilité 1, gravité 3 ; c) brûlure par une plaque chauffante : probabilité 2, gravité 2 ; d) inhalation de vapeurs d’éthanol lors de la désinfection : probabilité 2, gravité 1.', 'Calcule le niveau de chaque risque, classe-les, puis explique pourquoi la situation b ne doit pas être négligée.'],
        answer: ['Niveaux : a) 4 (moyen) ; b) 3 (moyen) ; c) 4 (moyen) ; d) 2 (faible).', 'Classement : a et c (4), puis b (3), puis d (2).', 'La situation b est peu probable, mais sa gravité est maximale : infection de l’œil par un agent pathogène. La cotation seule peut sous-estimer ce type de risque ; les lunettes et des gestes calmes (pas de projection) restent indispensables.'],
      },
      {
        title: 'Construire l’analyse d’un état frais',
        statement: 'Présente sous forme de liste structurée (étape, situation exposante, événement dangereux et dommage, mesure de prévention et ce qu’elle protège) l’analyse des risques de la préparation d’un état frais à partir d’une culture en bouillon.',
        answer: ['Ouverture du tube : présence de la culture ; aérosol inhalé ou goutte sur la peau, infection possible ; ouvrir près de la flamme, refermer vite (protège le produit et limite la dispersion) et se laver les mains (protège le manipulateur).', 'Dépôt de la goutte avec une pipette : culture ; goutte projetée ou renversée ; pipette stérile munie d’une poire ou d’un pipeteur, jamais à la bouche (protège le manipulateur).', 'Pose de la lamelle : verre fin ; coupure contaminée ; geste doux, lamelle tenue par les bords (protège le manipulateur).', 'Élimination : lame et lamelle contaminées et coupantes ; coupure lors du tri ; collecteur OPCT (protège le manipulateur et le personnel d’entretien), puis désinfection de la paillasse (protège l’environnement).'],
      },
    ],
    selfCheck: [
      'Je sais découper une procédure en logigramme et y repérer les situations exposantes.',
      'Je sais décrire un événement dangereux, la voie d’exposition et le dommage associé.',
      'Je sais coter un risque (probabilité × gravité), justifier mes notes et recoter le risque après les mesures.',
      'Je sais distinguer le risque pour le manipulateur et l’environnement du risque pour le produit.',
      'Je sais expliquer à quoi sert chaque consigne d’une procédure.',
      'Je sais appliquer un plan de prévention, observer un camarade avec une grille et choisir le bon conteneur à déchets.',
      'Je connais les premiers gestes en cas de projection, de coupure, de brûlure ou de renversement de culture.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Risques biologiques : ce qu’il faut retenir — INRS', url: 'https://www.inrs.fr/risques/biologiques/ce-qu-il-faut-retenir.html' },
      { title: 'Base Baobab sur les agents biologiques — INRS', url: 'https://www.inrs.fr/publications/bdd/baobab.html' },
      { title: 'Risques chimiques : ce qu’il faut retenir — INRS', url: 'https://www.inrs.fr/risques/chimiques/ce-qu-il-faut-retenir.html' },
      { title: 'Classification et étiquetage des produits chimiques — INRS', url: 'https://www.inrs.fr/risques/classification-etiquetage-produits-chimiques/ce-qu-il-faut-retenir.html' },
      { title: 'Conduite à tenir en cas d’accident avec exposition au sang (affiche) — INRS', url: 'https://inrs.fr/dam/inrs/CatalogueAffiche/TI-A-775.pdf' },
    ],
  },
};

export default lesson;
