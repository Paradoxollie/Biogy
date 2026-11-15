import { img } from '../media';
import communication from '../../../assets/courses/premiere/bbc-1-communication-hormonale/communication.webp';
import modesAction from '../../../assets/courses/premiere/bbc-1-communication-hormonale/modes-action.webp';
import ilot from '../../../assets/courses/premiere/bbc-1-communication-hormonale/ilot.webp';
import berthold from '../../../assets/courses/premiere/bbc-1-communication-hormonale/berthold.webp';

const IMG = {
  communication: img(communication, 'Schéma de la communication hormonale : une glande endocrine sécrète une hormone dans un vaisseau sanguin ; l’hormone se fixe sur les récepteurs d’une cellule cible mais pas sur une cellule non cible dépourvue de récepteurs.', 'schema', 1400, 933),
  modes: img(modesAction, 'Schéma comparant le mode d’action d’une hormone hydrophile, fixée sur un récepteur membranaire et déclenchant une réponse rapide, et celui d’une hormone stéroïdienne, qui traverse la membrane, se lie à un récepteur intracellulaire puis agit sur l’ADN dans le noyau pour déclencher la synthèse de protéines.', 'schema', 1400, 933),
  ilot: img(ilot, 'Coupe de pancréas colorée à l’hématoxyline-éosine : un îlot de Langerhans clair, traversé de capillaires, entouré d’acini exocrines plus foncés.', 'micro', 1536, 1024),
  berthold: img(berthold, 'Planche au crayon de trois volailles : un coq normal à grande crête qui chante, un chapon à petite crête, et un coq castré ayant reçu une greffe de testicule dans l’abdomen, de nouveau doté d’une grande crête.', 'pencil', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'bbc-1-communication-hormonale',
  duration: 'Environ 4 séances (cours et analyse de documents)',
  hook: {
    image: IMG.berthold,
    question: 'En 1849, un médecin retire les testicules de jeunes coqs : leur crête régresse et ils cessent de chanter. Il greffe un testicule dans leur abdomen… et tout redevient normal. Quel message relie un organe à des cellules éloignées ?',
    text: 'Ta glycémie, ta croissance, ta puberté, la quantité d’eau que tu élimines : tout cela est piloté par des messagers chimiques transportés par le sang, les hormones. Dans ce chapitre, tu apprends à identifier les acteurs d’une communication hormonale, à prouver qu’une molécule est une hormone, à comprendre comment elle agit sur sa cellule cible et comment des boucles de régulation maintiennent l’équilibre de l’organisme.',
  },
  objectives: [
    'Décrire l’organisation générale d’une voie de communication : émetteur, messager, voie de transmission, récepteur, effecteur.',
    'Réaliser un schéma fonctionnel des acteurs d’une communication hormonale : glande endocrine, hormone, voie sanguine, cellule cible, récepteur.',
    'Identifier les caractéristiques d’une hormone à partir d’expériences d’ablation, de greffe et d’injection.',
    'Comparer le mode d’action d’une hormone hydrophile et d’une hormone stéroïdienne sur la cellule cible.',
    'Schématiser une boucle de régulation, repérer ses éléments et identifier les rétrocontrôles négatifs et positifs.',
  ],
  prerequisites: [
    'Notion d’hormone et de communication par le sang (seconde).',
    'Structure de la membrane plasmique ; molécules hydrophiles et hydrophobes (module A, « Membranes biologiques »).',
    'Le noyau stérane des hormones stéroïdiennes, dérivé du cholestérol (module A).',
  ],
  program: [
    'Expliquer l’organisation générale d’une voie de communication : émetteur, messager, effecteur, voie de transmission (D6).',
    'Réaliser un schéma mettant en évidence les principaux acteurs d’une communication hormonale : glande endocrine, sécrétion, hormone, voie sanguine, cellule cible, récepteur hormonal, spécificité hormone-récepteur (D7).',
    'Identifier les caractéristiques d’une hormone : cellule cible, greffe, voie sanguine (D8).',
    'Préciser le mode d’action d’une hormone hydrophile et d’une hormone hydrophobe à l’échelle de la cellule cible : hormone peptidique/hormone stéroïdienne, récepteur membranaire/récepteur intracellulaire (D9).',
    'Schématiser une boucle de régulation de la sécrétion hormonale ; identifier le type de régulation en indiquant les activations et les inhibitions : rétrocontrôle négatif/positif, homéostasie (D10).',
    'Repérer les éléments d’une boucle de régulation au service d’une homéostasie : valeur de consigne, capteur, effecteur, réponse adaptée, grandeur régulée, rétroaction (C5).',
  ],

  course: {
    parts: [
      {
        title: 'Communiquer dans l’organisme : les voies de communication',
        intro: 'Tes quelque 30 000 milliards de cellules doivent agir de façon coordonnée. Pour cela, elles échangent en permanence des informations.',
        blocks: [
          { type: 'p', text: 'Toute communication, entre personnes comme entre cellules, suit le même schéma : un **émetteur** produit un **message**, qui circule par une **voie de transmission** jusqu’à un **récepteur** ; celui-ci déclenche la **réponse** d’un **effecteur**.' },
          {
            type: 'flow',
            title: 'Organisation générale d’une voie de communication',
            steps: [
              { title: 'Émetteur', text: 'Cellule ou organe qui produit le message.' },
              { title: 'Messager', text: 'Molécule (ou signal électrique) qui porte l’information.' },
              { title: 'Voie de transmission', text: 'Sang, fibre nerveuse…' },
              { title: 'Récepteur', text: 'Protéine qui reconnaît le messager.' },
              { title: 'Effecteur', text: 'Cellule ou organe qui réalise la réponse.' },
            ],
          },
          {
            type: 'table',
            caption: 'Deux exemples de voies de communication',
            head: ['Élément', 'Communication hormonale (insuline)', 'Communication nerveuse (réflexe)'],
            rows: [
              ['Émetteur', 'Cellules β des îlots de Langerhans du pancréas', 'Neurone moteur de la moelle épinière'],
              ['Messager', 'Insuline (hormone)', 'Message nerveux électrique, puis neurotransmetteur'],
              ['Voie de transmission', 'Sang', 'Fibre nerveuse (axone)'],
              ['Récepteur', 'Récepteur de l’insuline, dans la membrane des cellules cibles', 'Récepteur du neurotransmetteur sur la cellule musculaire'],
              ['Effecteur et réponse', 'Foie, muscles, tissu adipeux : stockage du glucose', 'Muscle : contraction'],
            ],
          },
          {
            type: 'compare',
            title: 'Communication nerveuse et communication hormonale',
            columns: [
              { title: 'Nerveuse', items: ['Message électrique le long des neurones, puis chimique au contact de la cellule cible.', 'Très **rapide** (millisecondes) et très **ciblée** : une cellule précise.', 'Effet bref.'] },
              { title: 'Hormonale', items: ['Message chimique, l’**hormone**, transporté par le **sang** dans tout l’organisme.', 'Plus **lente** (secondes à heures) ; seules les cellules cibles répondent.', 'Effet souvent plus **durable**.'] },
            ],
          },
          { type: 'note', title: 'Des systèmes qui coopèrent', text: 'Certaines hormones sont produites par des neurones : l’**ADH** (hormone antidiurétique) est fabriquée par des neurones de l’hypothalamus puis libérée dans le sang au niveau de la neurohypophyse. Les deux systèmes de communication sont étroitement liés.' },
          {
            type: 'retenir',
            items: [
              'Une voie de communication associe un émetteur, un messager, une voie de transmission, un récepteur et un effecteur.',
              'La communication nerveuse est rapide et ciblée ; la communication hormonale utilise le sang, elle est plus lente et plus durable.',
            ],
          },
        ],
      },

      {
        title: 'Les acteurs de la communication hormonale',
        intro: 'Une hormone circule dans tout le corps… mais elle n’agit que sur certaines cellules. Pourquoi ?',
        blocks: [
          { type: 'definition', term: 'Glande endocrine', text: 'organe ou groupe de cellules qui **sécrète** des hormones directement **dans le sang**, sans canal. Exemples : hypophyse, thyroïde, glandes surrénales, îlots de Langerhans du pancréas, testicules, ovaires.' },
          { type: 'definition', term: 'Hormone', text: 'molécule **sécrétée** par une glande endocrine, **transportée par le sang**, qui agit à **très faible concentration** (de l’ordre de 10^-9^ à 10^-12^ mol/L) sur des **cellules cibles**, souvent éloignées, dont elle modifie l’activité.' },
          { type: 'figure', image: IMG.communication, caption: 'Les acteurs d’une communication hormonale. L’hormone (en vert) est sécrétée dans le sang par la glande endocrine ; elle passe à côté de toutes les cellules, mais seule la cellule cible, qui possède des récepteurs complémentaires, répond.', size: 'wide' },
          { type: 'definition', term: 'Cellule cible', text: 'cellule qui possède des récepteurs spécifiques d’une hormone et qui modifie son activité lorsque l’hormone s’y fixe. Une cellule dépourvue de ce récepteur ne réagit pas, même si l’hormone passe à côté d’elle.' },
          { type: 'definition', term: 'Récepteur hormonal', text: 'protéine de la cellule cible (dans sa membrane ou à l’intérieur de la cellule) dont une partie a une forme **complémentaire** de celle de l’hormone. La fixation de l’hormone sur son récepteur déclenche la réponse de la cellule.' },
          { type: 'definition', term: 'Spécificité hormone-récepteur', text: 'un récepteur ne fixe qu’une hormone (ou des molécules de forme très proche), comme une serrure n’accepte qu’une clé. C’est pourquoi chaque hormone n’agit que sur ses cellules cibles.' },
          { type: 'example', title: 'l’insuline et ses cibles', text: 'L’insuline circule dans tout le corps, mais seules les cellules qui possèdent le récepteur de l’insuline (cellules du foie, des muscles, du tissu adipeux) répondent en absorbant ou en stockant du glucose. Une hormone peut donc avoir **plusieurs types** de cellules cibles, et une même cellule peut porter des récepteurs pour **plusieurs** hormones.' },
          {
            type: 'table',
            caption: 'Quelques hormones étudiées en Première',
            head: ['Glande', 'Hormone', 'Cellules cibles', 'Effet principal'],
            rows: [
              ['Pancréas (cellules β des îlots)', 'Insuline', 'Foie, muscles, tissu adipeux', 'Stockage du glucose : baisse de la glycémie'],
              ['Pancréas (cellules α des îlots)', 'Glucagon', 'Foie', 'Libération de glucose : hausse de la glycémie'],
              ['Hypothalamus (libérée par la neurohypophyse)', 'ADH', 'Cellules du tube collecteur du rein', 'Réabsorption d’eau : urine plus concentrée'],
              ['Hypothalamus', 'GnRH', 'Cellules de l’hypophyse antérieure', 'Sécrétion de LH et de FSH'],
              ['Hypophyse antérieure', 'LH et FSH', 'Testicules, ovaires', 'Production des gamètes et des hormones sexuelles'],
              ['Testicules (cellules de Leydig)', 'Testostérone', 'Voies génitales, muscles, peau, tubes séminifères…', 'Caractères sexuels masculins, spermatogenèse'],
              ['Ovaires (follicules, corps jaune)', 'Œstradiol, progestérone', 'Utérus, glandes mammaires, hypothalamus, hypophyse', 'Cycle utérin, caractères sexuels féminins'],
            ],
          },
          { type: 'p', text: 'Le **pancréas** est une glande **amphicrine** : ses acini ont une fonction **exocrine** (ils déversent le suc pancréatique dans le duodénum) et ses îlots de Langerhans une fonction **endocrine** (ils libèrent l’insuline et le glucagon dans le sang).' },
          { type: 'figure', image: IMG.ilot, caption: 'Coupe de pancréas colorée (×400). Au centre, un îlot de Langerhans : cellules endocrines claires, traversées de capillaires sanguins dans lesquels elles déversent l’insuline et le glucagon. Autour, les acini exocrines, plus foncés, sécrètent les enzymes digestives.', size: 'wide' },
          { type: 'warning', text: 'Une hormone n’est pas une enzyme : elle ne catalyse aucune réaction, elle **transporte une information**. Et une glande endocrine n’a pas de canal : sa sécrétion passe directement dans le sang.' },
          {
            type: 'retenir',
            items: [
              'Glande endocrine → sécrétion d’une hormone dans le sang → transport par voie sanguine → fixation sur le récepteur d’une cellule cible → réponse.',
              'Seules les cellules qui possèdent le récepteur spécifique de l’hormone répondent : c’est la spécificité hormone-récepteur.',
              'Une hormone agit à très faible concentration.',
            ],
          },
        ],
      },

      {
        title: 'Montrer qu’une molécule est une hormone',
        intro: 'Comment les physiologistes ont-ils découvert les hormones, bien avant de savoir les doser ? Grâce à une démarche expérimentale rigoureuse.',
        blocks: [
          {
            type: 'steps',
            title: 'La démarche expérimentale',
            items: [
              { title: 'Ablation', text: 'Retirer l’organe supposé endocrine et observer les troubles qui apparaissent : l’organe est nécessaire à une fonction.' },
              { title: 'Greffe', text: 'Replacer l’organe **ailleurs** dans le corps, irrigué par le sang mais sans connexion nerveuse. Si les troubles disparaissent, le message passe par le **sang**.' },
              { title: 'Injection d’extrait', text: 'Injecter un extrait de l’organe (ou la molécule purifiée) à un animal privé de l’organe. Si les troubles disparaissent, le message est une **substance chimique**.' },
              { title: 'Dosage', text: 'Mesurer la molécule dans le sang et montrer que sa concentration varie avec la fonction étudiée.' },
            ],
          },
          { type: 'figure', image: IMG.berthold, caption: 'L’expérience de Berthold (1849). À gauche, un coq normal ; au centre, un coq castré (chapon) à petite crête ; à droite, un coq castré qui a reçu une greffe de testicule dans l’abdomen (pointillés) et qui garde une grande crête.', size: 'wide' },
          { type: 'example', title: 'Berthold et les coqs', text: 'En 1849, Arnold Berthold castre de jeunes coqs : devenus chapons, ils gardent une petite crête pâle, ne chantent plus et ne se battent plus. Chez d’autres coqs castrés, il greffe un testicule dans la cavité abdominale : ces animaux développent une grande crête et un comportement de coq. Le testicule greffé est irrigué par des vaisseaux sanguins, mais il n’a aucune connexion nerveuse. Berthold conclut que le testicule agit **par l’intermédiaire du sang**. La substance en cause, la testostérone, ne sera isolée qu’en 1935.' },
          { type: 'example', title: 'le pancréas et l’insuline', text: 'En 1889, Oskar Minkowski et Joseph von Mering retirent le pancréas d’un chien : l’animal devient diabétique (glycémie élevée, glucose dans l’urine). Minkowski montre ensuite qu’un fragment de pancréas greffé sous la peau empêche le diabète, qui réapparaît quand on retire la greffe. En 1921-1922, Frederick Banting et Charles Best obtiennent un extrait de pancréas qui fait baisser la glycémie de chiens diabétiques : c’est l’**insuline**. Dès 1922, elle sauve la vie de personnes atteintes de diabète.' },
          {
            type: 'list',
            title: 'Les caractéristiques d’une hormone',
            ordered: true,
            items: [
              'Elle est produite par des cellules **endocrines** spécialisées.',
              'Elle est libérée dans le sang et transportée par la **voie sanguine** dans tout l’organisme.',
              'Elle agit **à distance**, uniquement sur des **cellules cibles** qui possèdent un récepteur spécifique.',
              'Elle est active à **très faible concentration** et elle est dégradée assez vite (de quelques minutes à quelques heures), ce qui permet d’ajuster son effet en permanence.',
            ],
          },
          { type: 'warning', title: 'Raisonner avec rigueur', text: 'L’ablation seule ne prouve pas qu’un organe agit par une hormone : il pourrait agir par des nerfs. C’est la **greffe à un autre endroit** (sans nerfs) qui prouve la voie sanguine, et l’**injection d’extrait** qui prouve la nature chimique du message. Chaque expérience doit être comparée à un **témoin** (animal non opéré, ou opéré sans ablation).' },
          {
            type: 'retenir',
            items: [
              'Ablation → troubles ; greffe ailleurs → correction (voie sanguine) ; injection d’extrait → correction (messager chimique).',
              'Une hormone est produite par des cellules endocrines, transportée par le sang, active à faible dose sur des cellules cibles.',
            ],
          },
        ],
      },

      {
        title: 'Comment une hormone agit-elle sur sa cellule cible ?',
        intro: 'Toutes les hormones ne peuvent pas entrer dans la cellule : tout dépend de leur affinité pour l’eau ou pour les lipides de la membrane.',
        blocks: [
          { type: 'p', text: 'La membrane plasmique est une bicouche de phospholipides dont le cœur est **hydrophobe**. Une molécule **hydrophile** (soluble dans l’eau) ne peut pas la traverser ; une petite molécule **hydrophobe** (soluble dans les lipides) la traverse par diffusion. Les hormones se répartissent donc en deux grands groupes, qui n’agissent pas de la même façon.' },
          {
            type: 'compare',
            title: 'Deux modes d’action',
            columns: [
              { title: 'Hormones hydrophiles', subtitle: 'peptidiques ou protéiques', items: ['Chaînes d’acides aminés : insuline (51 acides aminés), glucagon, ADH, LH, FSH, GnRH.', 'Dissoutes dans le plasma.', 'Ne traversent **pas** la membrane.', 'Se fixent sur un **récepteur membranaire**, à la surface de la cellule cible.', 'Déclenchent une cascade de réactions dans le cytoplasme qui modifie l’activité de protéines déjà présentes : réponse **rapide** (secondes à minutes).'] },
              { title: 'Hormones hydrophobes', subtitle: 'stéroïdiennes', items: ['Dérivées du cholestérol (noyau stérane à quatre cycles) : testostérone, œstradiol, progestérone, cortisol.', 'Transportées dans le sang liées à des protéines de transport.', 'Traversent la membrane par **diffusion**.', 'Se lient à un **récepteur intracellulaire** (dans le cytoplasme ou le noyau).', 'Le complexe hormone-récepteur se fixe sur l’ADN et modifie l’expression de gènes : synthèse de nouvelles protéines, réponse **plus lente** (heures) mais durable.'] },
            ],
          },
          { type: 'figure', image: IMG.modes, caption: 'Mode d’action d’une hormone hydrophile (à gauche) et d’une hormone stéroïdienne (à droite). Les récepteurs sont en vert.', size: 'wide' },
          { type: 'example', title: 'l’insuline, une hormone hydrophile', text: 'Dans une cellule musculaire, la fixation de l’insuline sur son récepteur membranaire provoque le déplacement de vésicules contenant des transporteurs de glucose (GLUT4) vers la membrane plasmique : en quelques minutes, la cellule fait entrer beaucoup plus de glucose. Dans le foie, l’insuline active la synthèse de glycogène.' },
          { type: 'example', title: 'la testostérone, une hormone stéroïdienne', text: 'La testostérone traverse la membrane des cellules cibles et se lie à son récepteur intracellulaire. Le complexe active certains gènes, par exemple ceux qui permettent le développement des caractères sexuels secondaires (pilosité, voix plus grave, masse musculaire).' },
          { type: 'note', title: 'Une exception utile à connaître', text: 'Les hormones thyroïdiennes ne sont pas des stéroïdes, mais elles sont aussi hydrophobes : comme les stéroïdes, elles agissent par l’intermédiaire d’un récepteur intracellulaire. C’est la **solubilité** de l’hormone qui détermine la localisation de son récepteur.' },
          {
            type: 'retenir',
            items: [
              'Hormone hydrophile (peptidique) → récepteur membranaire → modification rapide de l’activité de protéines existantes.',
              'Hormone hydrophobe (stéroïdienne) → traverse la membrane → récepteur intracellulaire → action sur l’expression des gènes, plus lente et durable.',
            ],
          },
        ],
      },

      {
        title: 'Les boucles de régulation et l’homéostasie',
        intro: 'Ta glycémie reste proche de 1 g/L, que tu viennes de manger un gâteau ou que tu sois à jeun depuis la veille. Comment ?',
        blocks: [
          { type: 'definition', term: 'Homéostasie', text: 'maintien des paramètres du milieu intérieur (glycémie, température, concentration des ions, pression artérielle…) dans des limites compatibles avec la vie, malgré les perturbations. C’est un **équilibre dynamique** : le paramètre oscille autour d’une valeur moyenne et il est corrigé en permanence.' },
          {
            type: 'table',
            caption: 'Les éléments d’une boucle de régulation : l’exemple de la glycémie',
            head: ['Élément', 'Définition', 'Exemple de la glycémie'],
            rows: [
              ['Grandeur régulée', 'Paramètre maintenu stable', 'Glycémie (concentration du glucose dans le plasma)'],
              ['Valeur de consigne', 'Valeur autour de laquelle la grandeur est maintenue', 'Environ 1 g/L (entre 0,70 et 1,10 g/L chez une personne à jeun)'],
              ['Perturbation', 'Ce qui écarte la grandeur de la consigne', 'Repas (hausse) ; jeûne ou effort (baisse)'],
              ['Capteur', 'Structure qui mesure la grandeur et détecte un écart', 'Cellules α et β des îlots de Langerhans, sensibles à la glycémie'],
              ['Système de commande', 'Structure qui compare à la consigne et ajuste le message', 'Ici aussi les îlots : ils modulent la sécrétion d’insuline et de glucagon'],
              ['Messager', 'Signal envoyé aux effecteurs', 'Insuline ou glucagon, par voie sanguine'],
              ['Effecteurs', 'Organes qui modifient la grandeur', 'Foie, muscles, tissu adipeux'],
              ['Réponse adaptée', 'Action qui corrige l’écart', 'Stockage du glucose (glycogène, lipides) ou libération de glucose par le foie'],
              ['Rétroaction', 'Effet de la correction sur la boucle elle-même', 'La glycémie revenue à la normale réduit la sécrétion d’insuline (ou de glucagon)'],
            ],
          },
          {
            type: 'flow',
            title: 'Après un repas : corriger une hyperglycémie',
            steps: [
              { title: 'Repas', text: 'Le glucose absorbé passe dans le sang.' },
              { title: 'Hyperglycémie', text: 'Glycémie supérieure à la consigne.' },
              { title: 'Cellules β', text: 'Sécrétion d’insuline augmentée.' },
              { title: 'Foie, muscles, tissu adipeux', text: 'Entrée et stockage du glucose.' },
              { title: 'Retour vers 1 g/L', text: 'La sécrétion d’insuline diminue.' },
            ],
          },
          {
            type: 'flow',
            title: 'Pendant un jeûne : corriger une hypoglycémie',
            steps: [
              { title: 'Jeûne, effort', text: 'Le glucose sanguin est consommé.' },
              { title: 'Hypoglycémie', text: 'Glycémie inférieure à la consigne.' },
              { title: 'Cellules α', text: 'Sécrétion de glucagon augmentée.' },
              { title: 'Foie', text: 'Dégradation du glycogène et libération de glucose.' },
              { title: 'Retour vers 1 g/L', text: 'La sécrétion de glucagon diminue.' },
            ],
          },
          { type: 'definition', term: 'Rétrocontrôle négatif', text: 'l’effet produit par la boucle **réduit** l’écart à la consigne et **freine** le signal qui l’a provoqué. C’est le mode de régulation qui **stabilise** un paramètre : il est au cœur de l’homéostasie.' },
          { type: 'definition', term: 'Rétrocontrôle positif', text: 'l’effet produit **amplifie** le signal qui l’a provoqué : la réponse s’emballe jusqu’à un événement ponctuel. Exemple : juste avant l’ovulation, la forte concentration d’œstradiol stimule l’hypothalamus et l’hypophyse, ce qui déclenche un pic de LH, puis l’ovulation.' },
          { type: 'definition', term: 'Activateur et inhibiteur', text: 'un **activateur** stimule une sécrétion ou une activité (on note **+** sur la flèche) ; un **inhibiteur** la freine (on note **−**).' },
          { type: 'p', text: 'Dans l’**axe gonadotrope masculin**, l’hypothalamus sécrète la GnRH, qui **active** l’hypophyse ; l’hypophyse sécrète LH et FSH, qui **activent** les testicules ; la testostérone produite **inhibe** en retour l’hypothalamus et l’hypophyse. Ce rétrocontrôle négatif maintient la concentration de testostérone à peu près constante.' },
          {
            type: 'flow',
            title: 'L’axe gonadotrope masculin',
            steps: [
              { title: 'Hypothalamus', text: 'Sécrète la GnRH (+).' },
              { title: 'Hypophyse antérieure', text: 'Sécrète LH et FSH (+).' },
              { title: 'Testicules', text: 'Sécrètent la testostérone.' },
              { title: 'Rétrocontrôle négatif', text: 'La testostérone freine (−) l’hypothalamus et l’hypophyse.' },
            ],
            caption: 'La dernière étape referme la boucle : plus il y a de testostérone, moins la GnRH et la LH sont sécrétées.',
          },
          {
            type: 'steps',
            title: 'Schématiser une boucle de régulation',
            items: [
              'Placer les organes dans des cadres, de la commande (en haut) vers les effecteurs (en bas).',
              'Les relier par des flèches portant le nom du messager (hormone) et la voie (sang).',
              'Indiquer sur chaque flèche **+** (activation) ou **−** (inhibition).',
              'Fermer la boucle par une flèche de rétroaction, de l’effet produit vers la commande.',
              'Conclure : rétrocontrôle négatif (stabilisation) ou positif (amplification).',
            ],
          },
          { type: 'warning', title: 'Quand la boucle se dérègle', text: 'Si une boucle est défaillante, la grandeur sort de son intervalle normal : c’est une pathologie. Dans le **diabète de type 1**, les cellules β sont détruites par le système immunitaire : l’insuline manque et la glycémie reste élevée. Dans le **diabète de type 2**, l’insuline est produite mais les cellules cibles y répondent mal. On diagnostique un diabète si la glycémie à jeun est supérieure ou égale à 1,26 g/L lors de deux dosages.' },
          {
            type: 'retenir',
            items: [
              'Une boucle de régulation comprend une grandeur régulée, une valeur de consigne, des capteurs, une commande, des messagers, des effecteurs et une rétroaction.',
              'Glycémie : l’insuline (hypoglycémiante) et le glucagon (hyperglycémiant) corrigent les écarts à la consigne d’environ 1 g/L.',
              'Rétrocontrôle négatif = stabilisation (homéostasie) ; rétrocontrôle positif = amplification (pic de LH).',
              'Dans un schéma, on indique + pour une activation et − pour une inhibition.',
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
        title: 'Rejouer l’expérience de Berthold',
        duration: '20 min',
        skills: ['Raisonner', 'Argumenter'],
        context: 'Tu es à la place d’Arnold Berthold en 1849. On sait déjà que la castration modifie l’aspect et le comportement des coqs, mais on ignore comment le testicule agit sur le reste du corps.',
        documents: [
          { label: 'Document 1', title: 'Les trois lots de coqs', image: IMG.berthold, caption: 'De gauche à droite : lot A, lot B, lot C.' },
          {
            label: 'Document 2',
            title: 'Protocole et résultats (d’après Berthold, 1849)',
            blocks: [
              {
                type: 'table',
                head: ['Lot', 'Traitement', 'Crête et barbillons', 'Chant et comportement'],
                rows: [
                  ['A', 'Aucune opération', 'Grands, rouges', 'Chante, se bat, s’intéresse aux poules'],
                  ['B', 'Castration (ablation des deux testicules)', 'Petits, pâles', 'Ne chante plus, calme'],
                  ['C', 'Castration puis greffe d’un testicule dans l’abdomen', 'Grands, rouges', 'Chante, se bat'],
                ],
              },
              { type: 'p', text: 'À l’autopsie des coqs du lot C, le testicule greffé est irrigué par de nouveaux vaisseaux sanguins ; il n’est relié à aucun nerf.' },
            ],
          },
        ],
        questions: [
          { text: 'À quoi sert le lot A ?', answer: 'C’est le lot témoin : il montre l’aspect et le comportement normaux d’un coq, auxquels on compare les résultats des lots opérés.' },
          { text: 'Que montre la comparaison des lots A et B ?', answer: 'Sans testicules, la crête et les barbillons régressent et le comportement de coq disparaît : les testicules sont nécessaires au développement et au maintien de ces caractères.' },
          { text: 'Pourquoi la greffe du lot C est-elle placée dans l’abdomen, et non à la place d’origine du testicule ? Que démontre ce résultat ?', hint: 'Lis attentivement la phrase sur l’autopsie.', answer: 'Placé ailleurs, le testicule greffé n’a plus aucune connexion nerveuse, mais il est irrigué par le sang. Comme les caractères de coq sont rétablis, le testicule agit à distance par l’intermédiaire du sang : il libère un messager chimique transporté par la voie sanguine.' },
          { text: 'Propose une expérience complémentaire qui montrerait que ce messager est une substance chimique, et indique le résultat attendu.', answer: 'Injecter régulièrement un extrait de testicule (ou de la testostérone purifiée) à des coqs castrés et comparer à des coqs castrés recevant une injection de liquide sans extrait (témoin). Résultat attendu : les coqs castrés traités retrouvent une grande crête et un comportement de coq, pas les témoins.' },
          { text: 'Identifie, dans cet exemple, la glande endocrine, l’hormone, la voie de transmission et des cellules cibles.', answer: 'Glande endocrine : le testicule. Hormone : la testostérone (inconnue à l’époque). Voie de transmission : le sang. Cellules cibles : par exemple les cellules de la crête et des barbillons, et des cellules du système nerveux impliquées dans le comportement.' },
        ],
      },
      {
        title: 'Le pancréas, une glande endocrine',
        duration: '30 min',
        skills: ['Observer', 'Raisonner', 'Schématiser'],
        context: 'Au XIX^e^ siècle, le diabète sucré est une maladie mortelle dont on ignore la cause. Les documents retracent les étapes qui ont conduit à la découverte de l’insuline.',
        documents: [
          { label: 'Document 3', title: 'Coupe de pancréas (×400)', image: IMG.ilot, caption: 'Coloration à l’hématoxyline-éosine.' },
          {
            label: 'Document 4',
            title: 'Des expériences historiques',
            blocks: [
              {
                type: 'table',
                head: ['Expérience', 'Résultat'],
                rows: [
                  ['1889 — Minkowski et von Mering retirent le pancréas d’un chien.', 'Le chien devient diabétique : glycémie très élevée, glucose dans l’urine, amaigrissement ; il meurt en quelques semaines.'],
                  ['Années 1890 — Minkowski greffe un fragment de pancréas sous la peau d’un chien, puis retire le pancréas en place.', 'Pas de diabète tant que la greffe est en place ; le diabète apparaît dès qu’on retire la greffe.'],
                  ['Ligature du canal pancréatique chez un chien.', 'Les acini dégénèrent, les îlots de Langerhans restent intacts ; le chien ne devient pas diabétique.'],
                  ['1921-1922 — Banting et Best injectent à des chiens diabétiques un extrait de pancréas dont les acini ont dégénéré.', 'La glycémie diminue fortement et revient vers la normale pendant plusieurs heures.'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Sur le document 3, localise les deux types de tissus du pancréas et nomme leur fonction.', answer: 'Au centre, l’îlot de Langerhans, formé de cellules claires et traversé de capillaires sanguins : tissu endocrine qui sécrète l’insuline et le glucagon dans le sang. Autour, les acini, plus foncés, groupés autour de petites lumières : tissu exocrine qui sécrète les enzymes du suc pancréatique.' },
          { text: 'Que montre la première expérience ?', answer: 'Le pancréas est indispensable au maintien d’une glycémie normale : sans pancréas, la glycémie augmente fortement (diabète).' },
          { text: 'En quoi la greffe sous la peau démontre-t-elle une action par voie sanguine ?', answer: 'Sous la peau, le fragment de pancréas n’est relié ni au tube digestif ni aux nerfs d’origine, mais il est vascularisé. Il suffit pourtant à empêcher le diabète : il agit donc en libérant une substance dans le sang.' },
          { text: 'Montre que les expériences 3 et 4 permettent d’attribuer cette fonction aux îlots de Langerhans et d’identifier un messager chimique.', hint: 'Quel tissu reste intact après la ligature du canal ?', answer: 'Après ligature du canal, seuls les îlots subsistent et le chien n’est pas diabétique : ce sont les îlots, et non les acini, qui régulent la glycémie. L’extrait de ce pancréas, injecté, fait baisser la glycémie : il contient une substance chimique hypoglycémiante, l’insuline.' },
          { text: 'Réalise un schéma fonctionnel de la communication hormonale assurée par l’insuline.', answer: 'Cellules β des îlots de Langerhans (glande endocrine) → sécrétion d’insuline dans le sang → transport par voie sanguine → fixation sur les récepteurs membranaires des cellules cibles (foie, muscles, tissu adipeux) → entrée et stockage du glucose → baisse de la glycémie.' },
        ],
      },
      {
        title: 'Comparer deux modes d’action hormonaux',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Comparer'],
        context: 'On compare l’action de l’insuline sur les cellules musculaires et celle de l’œstradiol sur les cellules de l’utérus.',
        documents: [
          {
            label: 'Document 5',
            title: 'Nature des deux hormones',
            blocks: [
              {
                type: 'compare',
                columns: [
                  { title: 'Insuline', items: ['Protéine de 51 acides aminés, en deux chaînes reliées par des ponts disulfure.', 'Très soluble dans l’eau.'] },
                  { title: 'Œstradiol', items: ['Stéroïde à quatre cycles (noyau stérane), dérivé du cholestérol.', 'Très peu soluble dans l’eau, soluble dans les lipides.'] },
                ],
              },
            ],
          },
          {
            label: 'Document 6',
            title: 'Résultats expérimentaux (simplifiés)',
            blocks: [
              {
                type: 'list',
                items: [
                  'Expérience 1 : après injection d’œstradiol radioactif à un animal, la radioactivité se concentre dans le **noyau** des cellules de l’utérus, mais pas dans les cellules du muscle squelettique.',
                  'Expérience 2 : de l’insuline radioactive mise en présence de cellules musculaires reste fixée à la **surface** des cellules.',
                  'Expérience 3 : l’actinomycine D bloque la transcription des gènes (fabrication des ARN messagers). En sa présence, l’œstradiol ne provoque plus la synthèse de nouvelles protéines dans l’utérus, alors que l’insuline stimule toujours l’entrée du glucose dans les cellules musculaires en quelques minutes.',
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Classe chaque hormone (hydrophile ou hydrophobe) et déduis-en si elle peut traverser la membrane plasmique.', answer: 'L’insuline, protéine soluble dans l’eau, est hydrophile : elle ne peut pas traverser le cœur hydrophobe de la bicouche. L’œstradiol, stéroïde soluble dans les lipides, est hydrophobe : il traverse la membrane par diffusion.' },
          { text: 'Où se trouvent les récepteurs de chacune de ces hormones ? Justifie avec les expériences 1 et 2.', answer: 'L’insuline reste à la surface des cellules : son récepteur est membranaire. L’œstradiol se concentre dans le noyau des cellules cibles : son récepteur est intracellulaire, et le complexe hormone-récepteur agit dans le noyau.' },
          { text: 'Pourquoi les cellules du muscle squelettique ne retiennent-elles pas l’œstradiol radioactif ?', answer: 'Elles ne possèdent pas (ou très peu) de récepteurs de l’œstradiol : l’hormone entre puis ressort par diffusion sans être retenue. Ce ne sont pas des cellules cibles de l’œstradiol.' },
          { text: 'Interprète l’expérience 3.', hint: 'Que doit faire le complexe œstradiol-récepteur pour qu’une nouvelle protéine soit fabriquée ?', answer: 'L’œstradiol agit en activant la transcription de gènes : si la transcription est bloquée, aucune nouvelle protéine n’est produite. L’insuline, elle, agit en modifiant l’activité de protéines déjà présentes (déplacement des transporteurs de glucose vers la membrane) : son effet ne dépend pas de la transcription et reste rapide.' },
          { text: 'Résume dans un tableau les différences entre les deux modes d’action (nature, récepteur, mécanisme, rapidité).', answer: 'Insuline : hydrophile, peptidique ; récepteur membranaire ; cascade de réactions dans le cytoplasme qui modifie l’activité de protéines existantes ; réponse en quelques minutes. Œstradiol : hydrophobe, stéroïdien ; récepteur intracellulaire ; le complexe hormone-récepteur modifie l’expression des gènes ; réponse en quelques heures, durable.' },
        ],
      },
      {
        title: 'Analyser une boucle de régulation : l’hyperglycémie provoquée',
        duration: '30 min',
        skills: ['Exploiter des données', 'Schématiser', 'Conclure'],
        context: 'Deux personnes à jeun boivent une solution contenant 75 g de glucose. On mesure ensuite leur glycémie et leur insulinémie (concentration d’insuline dans le plasma) pendant 2 heures. C’est l’épreuve d’hyperglycémie provoquée par voie orale.',
        documents: [
          {
            label: 'Document 7',
            title: 'Résultats d’analyse (exemple pédagogique)',
            blocks: [
              {
                type: 'table',
                head: ['Temps (min)', '0', '30', '60', '90', '120'],
                rows: [
                  ['Personne A — glycémie (g/L)', '0,85', '1,40', '1,25', '1,05', '0,90'],
                  ['Personne A — insulinémie (mUI/L)', '8', '60', '45', '25', '12'],
                  ['Personne B — glycémie (g/L)', '1,40', '2,10', '2,60', '2,70', '2,50'],
                  ['Personne B — insulinémie (mUI/L)', '2', '3', '3', '2', '2'],
                ],
              },
            ],
          },
          {
            label: 'Document 8',
            title: 'Repères médicaux',
            text: ['Glycémie à jeun normale : 0,70 à 1,10 g/L. Diabète : glycémie à jeun supérieure ou égale à 1,26 g/L (à deux reprises), ou glycémie supérieure ou égale à 2,00 g/L 2 heures après l’ingestion de 75 g de glucose.'],
          },
        ],
        questions: [
          { text: 'Pour la personne A, identifie la perturbation, la grandeur régulée et sa valeur de consigne.', answer: 'La perturbation est l’ingestion de 75 g de glucose. La grandeur régulée est la glycémie ; sa valeur de consigne est d’environ 1 g/L (la glycémie initiale vaut ici 0,85 g/L).' },
          { text: 'Décris et explique l’évolution de la glycémie et de l’insulinémie de la personne A.', answer: 'La glycémie monte de 0,85 à 1,40 g/L dans les 30 premières minutes (absorption du glucose), puis redescend jusqu’à 0,90 g/L, valeur atteinte à 120 min. L’insulinémie augmente en même temps (elle passe de 8 à 60 mUI/L, valeur atteinte à 30 min) puis diminue. L’hyperglycémie est détectée par les cellules β, qui sécrètent plus d’insuline ; l’insuline fait entrer et stocker le glucose dans le foie, les muscles et le tissu adipeux, ce qui ramène la glycémie vers la consigne. La sécrétion d’insuline diminue alors.' },
          { text: 'Identifie, dans cette régulation, le capteur, les effecteurs, la réponse adaptée et le type de rétroaction.', answer: 'Capteur : cellules β des îlots de Langerhans. Effecteurs : foie, muscles, tissu adipeux. Réponse adaptée : entrée et stockage du glucose (glycogène, lipides). Rétroaction négative : le retour de la glycémie vers la consigne réduit la sécrétion d’insuline.' },
          { text: 'La personne B est-elle diabétique ? Justifie avec les repères médicaux, puis propose un type de diabète.', answer: 'Oui : sa glycémie à jeun (1,40 g/L) dépasse 1,26 g/L, et sa glycémie à 120 min (2,50 g/L) dépasse 2,00 g/L (à confirmer par un second dosage à jeun). Son insulinémie reste très basse et ne réagit pas à l’hyperglycémie : ses cellules β ne produisent pas d’insuline. Cela oriente vers un diabète de type 1.' },
          { text: 'Schématise la boucle de régulation de la glycémie après un repas en indiquant activations (+) et inhibitions (−).', answer: 'Hausse de la glycémie → (+) cellules β des îlots → sécrétion d’insuline → sang → (+) foie, muscles, tissu adipeux : stockage du glucose → baisse de la glycémie → (−) retour sur les cellules β, dont la sécrétion d’insuline diminue. La boucle est fermée : c’est un rétrocontrôle négatif.' },
        ],
      },
      {
        title: 'Schématiser l’axe gonadotrope et ses rétrocontrôles',
        duration: '25 min',
        skills: ['Raisonner', 'Schématiser'],
        context: 'Chez le rat mâle adulte, on réalise plusieurs expériences pour comprendre comment la sécrétion de testostérone est maintenue constante.',
        documents: [
          {
            label: 'Document 9',
            title: 'Résultats expérimentaux (simplifiés)',
            blocks: [
              {
                type: 'table',
                head: ['Expérience', 'Concentration de LH dans le sang', 'Concentration de testostérone'],
                rows: [
                  ['Castration (ablation des testicules)', 'Augmente fortement', 'Presque nulle'],
                  ['Castration puis injections régulières de testostérone', 'Revient à la normale', 'Normale'],
                  ['Injection de GnRH à un rat normal', 'Augmente', 'Augmente ensuite'],
                  ['Destruction de l’hypothalamus', 'Diminue fortement', 'Diminue fortement'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Que montrent la destruction de l’hypothalamus et l’injection de GnRH ?', answer: 'Sans hypothalamus, la LH et la testostérone chutent ; une injection de GnRH augmente la LH puis la testostérone. L’hypothalamus, par la GnRH, active la sécrétion de LH par l’hypophyse, qui active à son tour la sécrétion de testostérone par les testicules.' },
          { text: 'Pourquoi la LH augmente-t-elle après une castration ? Que montre l’injection de testostérone au rat castré ?', hint: 'Que manque-t-il au rat castré ?', answer: 'Après castration, il n’y a plus de testostérone : le frein qu’elle exerçait sur l’hypothalamus et l’hypophyse disparaît, donc la LH augmente. L’injection de testostérone ramène la LH à la normale : la testostérone inhibe la sécrétion de GnRH et de LH.' },
          { text: 'Réalise le schéma de l’axe gonadotrope masculin en indiquant les activations (+) et les inhibitions (−).', answer: 'Hypothalamus → GnRH (+) → hypophyse antérieure → LH et FSH (+) → testicules → testostérone → effets sur les cellules cibles ; une flèche de retour part de la testostérone vers l’hypophyse et vers l’hypothalamus avec le signe (−).' },
          { text: 'De quel type de rétrocontrôle s’agit-il ? Quel est son intérêt ?', answer: 'C’est un rétrocontrôle négatif : quand la testostérone augmente, elle freine sa propre stimulation ; quand elle diminue, le frein se relâche. La concentration de testostérone reste ainsi à peu près constante.' },
          { text: 'Chez la femme, juste avant l’ovulation, une forte concentration d’œstradiol augmente la sécrétion de LH. En quoi ce rétrocontrôle diffère-t-il du précédent ?', answer: 'C’est un rétrocontrôle positif : l’œstradiol stimule la sécrétion de LH, qui stimule à son tour l’ovaire. La réponse s’amplifie jusqu’au pic de LH qui déclenche l’ovulation, au lieu de stabiliser la concentration hormonale.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Une voie de communication associe un émetteur, un messager, une voie de transmission, un récepteur et un effecteur.',
      'Une hormone est sécrétée par une glande endocrine, transportée par le sang et active à très faible concentration sur des cellules cibles.',
      'Seules les cellules qui possèdent le récepteur spécifique d’une hormone répondent : c’est la spécificité hormone-récepteur.',
      'Ablation, greffe ailleurs et injection d’extrait permettent de prouver qu’un organe agit par une hormone transportée par le sang.',
      'Une hormone hydrophile (peptidique) agit via un récepteur membranaire, rapidement ; une hormone stéroïdienne traverse la membrane et agit via un récepteur intracellulaire sur l’expression des gènes.',
      'Une boucle de régulation (capteur, commande, messager, effecteurs, rétroaction) maintient une grandeur autour de sa valeur de consigne : c’est l’homéostasie.',
      'Le rétrocontrôle négatif stabilise (glycémie, testostérone) ; le rétrocontrôle positif amplifie (pic de LH avant l’ovulation).',
    ],
    method: {
      title: 'Exploiter une expérience historique d’endocrinologie',
      steps: [
        'Identifier le témoin et l’unique paramètre qui change entre les lots.',
        'Pour chaque expérience, écrire « Je vois que… » (résultat) puis « J’en déduis que… » (conclusion).',
        'Ablation → l’organe est nécessaire ; greffe ailleurs → voie sanguine ; injection d’extrait → messager chimique.',
        'Conclure en nommant la glande, l’hormone, la voie de transmission et les cellules cibles.',
      ],
    },
    vocabulary: [
      { term: 'Émetteur', definition: 'Cellule ou organe qui produit le message.' },
      { term: 'Messager', definition: 'Molécule ou signal qui porte l’information jusqu’aux cellules cibles.' },
      { term: 'Effecteur', definition: 'Cellule ou organe qui réalise la réponse.' },
      { term: 'Glande endocrine', definition: 'Glande qui sécrète ses hormones directement dans le sang.' },
      { term: 'Hormone', definition: 'Messager chimique sécrété dans le sang, actif à faible concentration sur des cellules cibles.' },
      { term: 'Cellule cible', definition: 'Cellule qui possède le récepteur spécifique d’une hormone et y répond.' },
      { term: 'Récepteur hormonal', definition: 'Protéine de forme complémentaire de l’hormone, dont la fixation déclenche la réponse.' },
      { term: 'Récepteur membranaire', definition: 'Récepteur situé dans la membrane plasmique, qui fixe les hormones hydrophiles.' },
      { term: 'Récepteur intracellulaire', definition: 'Récepteur situé dans le cytoplasme ou le noyau, qui fixe les hormones hydrophobes.' },
      { term: 'Hormone stéroïdienne', definition: 'Hormone hydrophobe dérivée du cholestérol (testostérone, œstradiol, progestérone).' },
      { term: 'Homéostasie', definition: 'Maintien des paramètres du milieu intérieur dans des limites compatibles avec la vie.' },
      { term: 'Valeur de consigne', definition: 'Valeur autour de laquelle une grandeur régulée est maintenue.' },
      { term: 'Capteur', definition: 'Structure qui mesure la grandeur régulée et détecte un écart.' },
      { term: 'Rétrocontrôle négatif', definition: 'Effet qui freine le signal qui l’a provoqué et stabilise la grandeur.' },
      { term: 'Rétrocontrôle positif', definition: 'Effet qui amplifie le signal qui l’a provoqué.' },
    ],
    mistakes: [
      { wrong: 'Dire qu’une hormone agit sur toutes les cellules qu’elle rencontre.', right: 'Elle n’agit que sur les cellules cibles, qui possèdent son récepteur spécifique.' },
      { wrong: 'Conclure d’une simple ablation que l’organe produit une hormone.', right: 'Il faut une greffe ailleurs (voie sanguine) ou une injection d’extrait (messager chimique).' },
      { wrong: 'Placer le récepteur de l’insuline dans le noyau.', right: 'L’insuline est hydrophile : son récepteur est membranaire.' },
      { wrong: 'Confondre glande endocrine et glande exocrine.', right: 'Endocrine : sécrétion dans le sang ; exocrine : sécrétion dans une lumière ou un canal.' },
      { wrong: 'Penser que le rétrocontrôle négatif « fait baisser » toujours la grandeur.', right: 'Il corrige l’écart dans les deux sens : il ramène la grandeur vers la consigne.' },
    ],
    quiz: [
      { question: 'Une hormone est transportée vers ses cellules cibles par :', choices: ['Les nerfs', 'Le sang', 'La lymphe uniquement', 'Le tube digestif'], answer: 1, explanation: 'Les hormones sont sécrétées dans le sang et transportées par la voie sanguine.' },
      { question: 'Une cellule est une cellule cible d’une hormone si :', choices: ['Elle est proche de la glande', 'Elle possède le récepteur spécifique de l’hormone', 'Elle produit l’hormone', 'Elle est très irriguée'], answer: 1, explanation: 'Seules les cellules qui portent le récepteur complémentaire de l’hormone répondent.' },
      { question: 'Dans l’expérience de Berthold, la greffe d’un testicule dans l’abdomen montre que :', choices: ['Le testicule agit par des nerfs', 'Le testicule agit par voie sanguine', 'La crête produit une hormone', 'La castration est sans effet'], answer: 1, explanation: 'Le testicule greffé n’a aucune connexion nerveuse mais il est irrigué : il agit par le sang.' },
      { question: 'Le pancréas est dit amphicrine car :', choices: ['Il produit deux hormones', 'Il a une fonction exocrine et une fonction endocrine', 'Il est relié à deux organes', 'Il sécrète dans l’intestin et dans l’estomac'], answer: 1, explanation: 'Ses acini sont exocrines (suc pancréatique), ses îlots de Langerhans endocrines (insuline, glucagon).' },
      { question: 'Le récepteur de la testostérone est :', choices: ['Membranaire', 'Intracellulaire', 'Situé dans le sang', 'Situé dans l’hypophyse uniquement'], answer: 1, explanation: 'La testostérone, stéroïde hydrophobe, traverse la membrane et se lie à un récepteur intracellulaire.' },
      { question: 'Une hormone hydrophile :', choices: ['Traverse la membrane par diffusion', 'Agit directement sur l’ADN', 'Se fixe sur un récepteur membranaire', 'Est dérivée du cholestérol'], answer: 2, explanation: 'Elle ne peut pas traverser la bicouche hydrophobe : elle se fixe sur un récepteur de la membrane.' },
      { question: 'Dans la régulation de la glycémie, les capteurs sont :', choices: ['Les cellules du foie', 'Les cellules α et β des îlots de Langerhans', 'Les cellules musculaires', 'Les cellules de l’intestin'], answer: 1, explanation: 'Les cellules des îlots détectent la glycémie et ajustent la sécrétion d’insuline et de glucagon.' },
      { question: 'La testostérone freine la sécrétion de LH : c’est un exemple de :', choices: ['Rétrocontrôle positif', 'Rétrocontrôle négatif', 'Communication nerveuse', 'Sécrétion exocrine'], answer: 1, explanation: 'L’effet (testostérone) freine le signal qui l’a provoqué (LH) : la concentration est stabilisée.' },
      { question: 'Le glucagon :', choices: ['Fait baisser la glycémie', 'Fait augmenter la glycémie', 'Est sécrété par les cellules β', 'Agit surtout sur les muscles'], answer: 1, explanation: 'Sécrété par les cellules α, il stimule la libération de glucose par le foie : il est hyperglycémiant.' },
    ],
    exercises: [
      {
        title: 'Une molécule est-elle une hormone ?',
        statement: 'Des chercheurs pensent que la glande thyroïde produit une hormone qui contrôle la métamorphose des têtards en grenouilles. Propose une série d’expériences, avec leurs témoins et les résultats attendus, pour le démontrer.',
        answer: ['1) Ablation de la thyroïde chez des têtards (témoin : têtards opérés sans ablation) : résultat attendu, pas de métamorphose.', '2) Greffe de thyroïde à un autre endroit du corps de têtards privés de thyroïde : la métamorphose a lieu, le message passe par le sang.', '3) Ajout d’extrait de thyroïde (ou de la molécule purifiée) à l’eau ou injection chez des têtards sans thyroïde (témoin : injection de liquide sans extrait) : la métamorphose a lieu, le messager est chimique.', '4) Dosage de la molécule dans le sang : sa concentration augmente au moment de la métamorphose.'],
      },
      {
        title: 'Prévoir un mode d’action',
        statement: 'Le cortisol est une hormone stéroïdienne sécrétée par les glandes surrénales ; l’ADH est un peptide de 9 acides aminés. Prévois, pour chacune, la localisation de son récepteur et la rapidité de son action. Justifie.',
        answer: 'Le cortisol, stéroïde hydrophobe, traverse la membrane par diffusion et se lie à un récepteur intracellulaire ; le complexe modifie l’expression de gènes : action lente (heures) et durable. L’ADH, peptide hydrophile, ne traverse pas la membrane : elle se fixe sur un récepteur membranaire des cellules du tube collecteur et déclenche une cascade de réactions (insertion d’aquaporines dans la membrane) : action rapide (minutes).',
      },
      {
        title: 'Lire une boucle de régulation',
        statement: 'Une personne prend de fortes doses de testostérone de synthèse (dopage). Prévois l’évolution de sa sécrétion de LH et explique pourquoi ses testicules peuvent diminuer de volume.',
        answer: 'La forte concentration de testostérone exerce un rétrocontrôle négatif sur l’hypothalamus et l’hypophyse : la sécrétion de GnRH puis de LH et de FSH diminue fortement. Les testicules, qui ne sont plus stimulés par la LH et la FSH, réduisent leur activité (production de testostérone et de spermatozoïdes) et diminuent de volume.',
      },
    ],
    selfCheck: [
      'Je sais décrire l’organisation d’une voie de communication avec le bon vocabulaire.',
      'Je sais schématiser une communication hormonale : glande, hormone, sang, cellule cible, récepteur.',
      'Je sais expliquer ce que démontrent une ablation, une greffe et une injection d’extrait.',
      'Je sais donner les caractéristiques d’une hormone.',
      'Je sais comparer le mode d’action d’une hormone hydrophile et d’une hormone stéroïdienne.',
      'Je sais repérer les éléments d’une boucle de régulation et la schématiser avec des + et des −.',
      'Je sais distinguer rétrocontrôle négatif et rétrocontrôle positif.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Hormone — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hormone' },
      { title: 'Insuline — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Insuline' },
      { title: 'Homéostasie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hom%C3%A9ostasie' },
      { title: 'Diabète de type 1 — Inserm', url: 'https://www.inserm.fr/dossier/diabete-type-1/' },
    ],
  },
};

export default lesson;
