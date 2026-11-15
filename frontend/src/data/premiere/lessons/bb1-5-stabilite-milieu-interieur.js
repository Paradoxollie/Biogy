import { img } from '../media';
import compartiments from '../../../assets/courses/premiere/bb1-5-stabilite-milieu-interieur/compartiments.webp';
import glycemieLecteur from '../../../assets/courses/premiere/bb1-5-stabilite-milieu-interieur/glycemie-lecteur.webp';
import ilotLangerhans from '../../../assets/courses/premiere/bb1-5-stabilite-milieu-interieur/ilot-langerhans.webp';
import foieGlycogene from '../../../assets/courses/premiere/bb1-3-absorption-devenir/foie-glycogene.webp';

const IMG = {
  compartiments: img(compartiments, 'Schéma annoté des compartiments liquidiens dans un tissu : cellules et liquide intracellulaire, liquide interstitiel entre les cellules (en vert), capillaire sanguin avec plasma et hématies, capillaire lymphatique contenant la lymphe ; des flèches montrent les échanges.', 'schema', 1400, 933),
  lecteur: img(glycemieLecteur, 'Mesure de la glycémie capillaire : une goutte de sang au bout du doigt est déposée sur une bandelette insérée dans un lecteur de glycémie, à côté d’un stylo autopiqueur.', 'photo', 1536, 1024),
  ilot: img(ilotLangerhans, 'Microphotographie de pancréas colorée à l’hématoxyline-éosine : un îlot de Langerhans arrondi et pâle au centre, entouré d’acinus exocrines plus foncés.', 'micro', 1536, 1024),
  foie: img(foieGlycogene, 'Microphotographie de foie colorée au PAS : hépatocytes remplis de granules de glycogène magenta.', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bb1-5-stabilite-milieu-interieur',
  duration: 'Environ 4 séances (cours, exploitation de résultats d’analyses, études de cas cliniques)',
  hook: {
    image: IMG.lecteur,
    question: 'Que tu viennes de manger un croissant ou que tu n’aies rien avalé depuis 12 heures, ta glycémie reste proche de 1 g par litre. Comment ton organisme maintient-il cette valeur, et que se passe-t-il quand ce système se dérègle, comme dans le diabète ?',
    text: 'Tes cellules vivent dans un liquide dont la composition reste remarquablement stable : c’est le milieu intérieur. Dans ce chapitre, tu apprends à situer et comparer les liquides de l’organisme, à décrire une boucle de régulation, puis à expliquer comment deux hormones du pancréas, l’insuline et le glucagon, maintiennent la glycémie. Tu termines par l’étude de cas réels de diabète.',
  },
  objectives: [
    'Situer les compartiments liquidiens de l’organisme et définir le milieu intérieur.',
    'Comparer la composition des compartiments liquidiens et utiliser des valeurs de référence.',
    'Définir l’homéostasie et repérer les éléments d’une boucle de régulation : grandeur régulée, valeur de consigne, capteur, effecteur, rétroaction.',
    'Expliquer le rôle de l’insuline et du glucagon dans la régulation de la glycémie (glande endocrine, hormone, cellules cibles).',
    'Comparer des glycémies préprandiale et postprandiale et interpréter un test d’hyperglycémie provoquée.',
    'Expliquer les diabètes sucrés de type 1 et de type 2 comme des défaillances de la boucle de régulation.',
  ],
  prerequisites: [
    'Chapitre 1.3 : glycogénogenèse, glycogénolyse, lipogenèse et lipolyse dans les hépatocytes et les adipocytes ; système porte hépatique.',
    'Chapitre 1.4 : réabsorption du glucose par le rein et seuil rénal ; action de l’ADH.',
    'Seconde : notion de glande endocrine et d’hormone, communication par voie sanguine.',
  ],
  program: [
    'Expliquer le rôle de l’insuline et du glucagon dans la régulation de la glycémie : homéostasie, hormone, endocrine, hyperglycémie / hypoglycémie, boucle de régulation.',
    'Comparaison de glycémies préprandiale et postprandiale ; mise en évidence du rôle de l’insuline et du glucagon ; étude de cas cliniques de diabète sucré.',
    'Situer les différents compartiments liquidiens de l’organisme : sang / plasma, liquide interstitiel, lymphe canalisée, liquide intracellulaire / liquide extracellulaire.',
    'Comparer la composition de différents compartiments liquidiens : ions, biomolécules, valeur de référence, intervalle physiologique.',
    'Repérer les différents éléments d’une boucle de régulation au service du maintien d’une homéostasie : valeur de consigne, capteur, effecteur, réponse adaptée, grandeur régulée, rétroaction.',
    'Identifier les caractéristiques d’une hormone : glande endocrine, sécrétion, voie sanguine, cellule cible, récepteur.',
  ],

  course: {
    parts: [
      {
        title: 'Le milieu intérieur et les compartiments liquidiens',
        intro: 'Ton corps est composé d’environ 60 % d’eau, répartie dans plusieurs compartiments séparés par des membranes ou des parois.',
        blocks: [
          { type: 'p', text: 'Au XIX^e^ siècle, le physiologiste français Claude Bernard a montré que les cellules d’un organisme ne vivent pas en contact direct avec le monde extérieur, mais baignent dans un liquide dont la composition reste stable : le **milieu intérieur**. Selon sa formule, « la fixité du milieu intérieur est la condition de la vie libre ».' },
          { type: 'figure', image: IMG.compartiments, caption: 'Les compartiments liquidiens à l’échelle d’un tissu. Le liquide interstitiel (en vert) baigne les cellules ; il échange avec le plasma à travers la paroi des capillaires sanguins, et une partie est recueillie par les capillaires lymphatiques, où elle devient la lymphe.', size: 'wide' },
          { type: 'definition', term: 'Liquide intracellulaire', text: 'liquide contenu à l’intérieur des cellules (cytoplasme), séparé du reste par la membrane plasmique. C’est le plus grand compartiment : environ les deux tiers de l’eau du corps.' },
          { type: 'definition', term: 'Liquide extracellulaire', text: 'ensemble des liquides situés hors des cellules : le **plasma**, le **liquide interstitiel** et la **lymphe**. Il représente environ un tiers de l’eau du corps.' },
          { type: 'definition', term: 'Plasma', text: 'partie liquide du sang, dans laquelle sont en suspension les cellules sanguines (hématies, leucocytes, plaquettes). Le sang est donc formé de plasma et de cellules : il ne faut pas confondre **sang** et **plasma**.' },
          { type: 'definition', term: 'Liquide interstitiel', text: 'liquide qui baigne directement les cellules des tissus. Il se forme à partir du plasma qui sort des capillaires sanguins ; c’est par lui que les cellules reçoivent nutriments et dioxygène et rejettent leurs déchets.' },
          { type: 'definition', term: 'Lymphe canalisée', text: 'liquide interstitiel recueilli par les capillaires lymphatiques et transporté dans les vaisseaux lymphatiques, qui le ramènent dans le sang (veines sous-clavières).' },
          { type: 'definition', term: 'Milieu intérieur', text: 'ensemble des **liquides extracellulaires** (plasma, liquide interstitiel, lymphe) dans lesquels vivent les cellules et avec lesquels elles font leurs échanges. Il s’oppose au milieu extérieur, dont font partie la lumière du tube digestif et celle des voies urinaires.' },
          {
            type: 'table',
            caption: 'Répartition de l’eau chez un adulte de 70 kg (environ 42 L)',
            head: ['Compartiment', 'Volume approximatif', 'Part de l’eau totale'],
            rows: [
              ['Liquide intracellulaire', 'Environ 28 L', 'Environ 2/3'],
              ['Liquide interstitiel (et lymphe)', 'Environ 11 L', 'Environ 1/4'],
              ['Plasma', 'Environ 3 L', 'Moins de 1/10'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'Liquide **intracellulaire** (dans les cellules, ≈ 2/3 de l’eau) et liquide **extracellulaire** (≈ 1/3) : plasma, liquide interstitiel, lymphe.',
              'Le **milieu intérieur** est l’ensemble des liquides extracellulaires qui baignent les cellules.',
              'Le **liquide interstitiel** baigne directement les cellules ; il échange avec le **plasma** et alimente la **lymphe**.',
              'Sang = plasma + cellules sanguines.',
            ],
          },
        ],
      },

      {
        title: 'La composition des compartiments et les valeurs de référence',
        intro: 'Les compartiments échangent en permanence, mais ils n’ont pas tous la même composition.',
        blocks: [
          {
            type: 'table',
            caption: 'Composition comparée des compartiments (valeurs indicatives)',
            head: ['Constituant', 'Plasma', 'Liquide interstitiel', 'Liquide intracellulaire'],
            rows: [
              ['Ions sodium Na^+^ (mmol/L)', '142', '140', '12'],
              ['Ions potassium K^+^ (mmol/L)', '4', '4', '140'],
              ['Ions chlorure Cl^-^ (mmol/L)', '104', '108', 'Environ 5'],
              ['Glucose (g/L)', '1', 'Environ 1', 'Très faible (il est utilisé dès son entrée)'],
              ['Protéines (g/L)', '70', 'Faible', 'Très élevée'],
            ],
          },
          { type: 'p', text: '**Plasma et liquide interstitiel** ont presque la même composition en petites molécules et en ions, car l’eau et les petits solutés traversent librement la paroi des capillaires. Ils diffèrent surtout par les **protéines**, trop grosses pour sortir des capillaires : le plasma en contient environ 70 g par litre.' },
          { type: 'p', text: '**Liquide intracellulaire et liquide extracellulaire** ont des compositions très différentes : le sodium domine à l’extérieur, le potassium à l’intérieur. Cette différence est entretenue en permanence par les **pompes Na^+^/K^+^** des membranes (chapitre 1.3) ; elle est indispensable au fonctionnement des nerfs, des muscles et des transports membranaires.' },
          { type: 'definition', term: 'Valeur de référence (intervalle physiologique)', text: 'intervalle de valeurs d’un paramètre mesuré chez la grande majorité (95 %) des personnes en bonne santé. Une valeur située hors de cet intervalle peut signaler une maladie. Les laboratoires d’analyses médicales indiquent leurs intervalles de référence à côté de chaque résultat.' },
          {
            type: 'table',
            caption: 'Quelques valeurs de référence du sang chez l’adulte',
            head: ['Paramètre', 'Intervalle physiologique'],
            rows: [
              ['Glycémie à jeun', '0,70 à 1,10 g/L (3,9 à 6,1 mmol/L)'],
              ['Natrémie (Na^+^ plasmatique)', '135 à 145 mmol/L'],
              ['Kaliémie (K^+^ plasmatique)', '3,5 à 5,0 mmol/L'],
              ['Calcémie', '2,2 à 2,6 mmol/L'],
              ['Protéines plasmatiques', '60 à 80 g/L'],
              ['pH du sang artériel', '7,38 à 7,42'],
              ['Température centrale', 'Environ 37 °C'],
            ],
          },
          { type: 'example', title: 'convertir une glycémie', text: 'La masse molaire du glucose est de 180 g/mol. Une glycémie de 1 g/L correspond donc à 1 ÷ 180 ≈ 0,0055 mol/L, soit **5,5 mmol/L**. Les lecteurs de glycémie affichent selon les pays des g/L, des mg/dL (1 g/L = 100 mg/dL) ou des mmol/L.' },
          {
            type: 'retenir',
            items: [
              'Plasma et liquide interstitiel ont la même composition en ions et petites molécules, mais le plasma est riche en **protéines**.',
              'Na^+^ domine à l’extérieur des cellules, K^+^ à l’intérieur, grâce aux pompes Na^+^/K^+^.',
              'Chaque paramètre du milieu intérieur a un **intervalle physiologique** (exemple : glycémie à jeun de 0,70 à 1,10 g/L).',
            ],
          },
        ],
      },

      {
        title: 'L’homéostasie et la boucle de régulation',
        intro: 'Le milieu intérieur ne reste pas stable par hasard : chaque écart déclenche une réponse qui le corrige.',
        blocks: [
          { type: 'definition', term: 'Homéostasie', text: 'maintien des paramètres du milieu intérieur (glycémie, volume et concentration du plasma, température, pH…) dans des limites compatibles avec la vie, malgré les variations du milieu extérieur et de l’activité. C’est un **équilibre dynamique** : les valeurs oscillent sans cesse autour d’une valeur moyenne, grâce à des corrections permanentes.' },
          { type: 'p', text: 'Ce maintien repose sur des **boucles de régulation**, comparables au thermostat d’un chauffage : une grandeur est mesurée, comparée à une valeur visée, et tout écart déclenche une action correctrice.' },
          {
            type: 'table',
            caption: 'Le vocabulaire d’une boucle de régulation',
            head: ['Élément', 'Définition', 'Exemple de la glycémie'],
            rows: [
              ['Grandeur régulée', 'Paramètre maintenu stable', 'La glycémie'],
              ['Valeur de consigne', 'Valeur autour de laquelle la grandeur est maintenue', 'Environ 1 g/L'],
              ['Perturbation', 'Ce qui fait varier la grandeur', 'Un repas (hausse), un jeûne ou un effort (baisse)'],
              ['Capteur', 'Structure qui détecte la valeur de la grandeur et ses variations', 'Les cellules α et β des îlots de Langerhans'],
              ['Message', 'Signal envoyé aux effecteurs (nerveux ou hormonal)', 'L’insuline et le glucagon, transportés par le sang'],
              ['Effecteur', 'Organe ou cellule qui réalise la correction', 'Foie, muscles, tissu adipeux'],
              ['Réponse adaptée', 'Action qui ramène la grandeur vers la consigne', 'Stockage ou libération de glucose'],
            ],
          },
          { type: 'definition', term: 'Rétroaction négative (rétrocontrôle négatif)', text: 'mécanisme par lequel la réponse s’oppose à la variation qui l’a déclenchée : quand la grandeur revient vers la consigne, le stimulus diminue et la réponse s’atténue d’elle-même. C’est ce qui rend un système stable. (Une rétroaction **positive**, au contraire, amplifie la variation ; elle est rare et sert à déclencher des événements brefs, comme l’accouchement.)' },
          {
            type: 'flow',
            title: 'Structure générale d’une boucle de régulation',
            steps: [
              { title: 'Perturbation', text: 'la grandeur régulée s’écarte de la consigne' },
              { title: 'Capteur', text: 'détecte l’écart' },
              { title: 'Message', text: 'nerveux ou hormonal' },
              { title: 'Effecteurs', text: 'produisent la réponse adaptée' },
              { title: 'Retour à la consigne', text: 'le stimulus disparaît (rétroaction négative)' },
            ],
          },
          { type: 'example', title: 'une boucle déjà rencontrée : l’ADH', text: 'Grandeur régulée : la concentration du plasma (et la volémie). Capteurs : des neurones de l’hypothalamus sensibles à la concentration du plasma. Message : l’ADH, libérée par la neurohypophyse. Effecteur : le tube collecteur du rein. Réponse : réabsorption d’eau accrue. Le plasma redevient moins concentré, ce qui freine la sécrétion d’ADH : c’est une rétroaction négative (chapitre 1.4).' },
          { type: 'definition', term: 'Hormone', text: 'molécule **sécrétée** par une glande endocrine (ou par des cellules endocrines), **transportée par le sang**, qui agit à très faible concentration sur des **cellules cibles** possédant des **récepteurs** spécifiques, et modifie leur fonctionnement.' },
          { type: 'definition', term: 'Glande endocrine', text: 'glande qui libère ses sécrétions, les hormones, **directement dans le sang**, sans canal. Elle s’oppose à la glande exocrine, qui déverse sa sécrétion dans une cavité ouverte sur l’extérieur (chapitre 1.2).' },
          {
            type: 'retenir',
            items: [
              'L’**homéostasie** est le maintien dynamique des paramètres du milieu intérieur dans des limites compatibles avec la vie.',
              'Une boucle de régulation comprend : **grandeur régulée**, **valeur de consigne**, **capteur**, message, **effecteur**, **réponse adaptée**.',
              'La **rétroaction négative** corrige l’écart et stabilise le système.',
              'Une **hormone** est sécrétée dans le sang par une glande endocrine et agit sur des cellules cibles munies de récepteurs.',
            ],
          },
        ],
      },

      {
        title: 'La régulation de la glycémie par l’insuline et le glucagon',
        intro: 'Le glucose est le principal carburant des cellules, et le seul que le cerveau utilise normalement : sa concentration dans le sang est donc étroitement surveillée.',
        blocks: [
          { type: 'definition', term: 'Glycémie', text: 'concentration du glucose dans le plasma sanguin. Chez une personne en bonne santé, elle reste proche de **1 g/L** (5,5 mmol/L) : à jeun, entre 0,70 et 1,10 g/L ; après un repas, elle dépasse rarement 1,40 g/L.' },
          { type: 'definition', term: 'Hyperglycémie', text: 'glycémie supérieure à l’intervalle physiologique. Prolongée, elle abîme les vaisseaux sanguins, les nerfs, les reins et les yeux.' },
          { type: 'definition', term: 'Hypoglycémie', text: 'glycémie inférieure à l’intervalle physiologique (en dessous d’environ 0,6 à 0,7 g/L). Le cerveau, privé de glucose, souffre rapidement : sueurs, tremblements, faim, palpitations, troubles de la concentration, et dans les cas graves perte de connaissance.' },
          { type: 'compare', title: 'Glycémie préprandiale et postprandiale', columns: [
            { title: 'Préprandiale', subtitle: 'avant un repas, à jeun', items: ['Environ 0,8 à 1,0 g/L.', 'Les cellules consomment du glucose en permanence ; le foie en libère pour compenser (glycogénolyse).'] },
            { title: 'Postprandiale', subtitle: 'après un repas', items: ['Augmente pendant l’absorption intestinale : maximum d’environ 1,2 à 1,4 g/L, 30 à 60 minutes après le repas.', 'Revient à sa valeur de départ en 2 à 3 heures, grâce au stockage du glucose.'] },
          ] },
          { type: 'p', text: '**Le pancréas, organe de la régulation.** Le pancréas est une glande **amphicrine** (à la fois exocrine et endocrine). Sa partie exocrine, faite d’acinus, produit le suc pancréatique (chapitre 1.2). Dispersés entre les acinus, environ un million d’**îlots de Langerhans** forment sa partie endocrine (1 à 2 % de sa masse). Ils contiennent des **cellules β** (bêta), qui sécrètent l’**insuline**, et des **cellules α** (alpha), qui sécrètent le **glucagon**. Très irrigués, ils sont à la fois les **capteurs** de la glycémie et les **glandes endocrines** qui émettent les messages hormonaux.' },
          { type: 'figure', image: IMG.ilot, caption: 'Coupe de pancréas (hématoxyline-éosine, ×200). Au centre, un îlot de Langerhans, pâle et parcouru de capillaires (partie endocrine) ; tout autour, les acinus, plus foncés (partie exocrine).', size: 'wide' },
          { type: 'definition', term: 'Insuline', text: 'hormone **hypoglycémiante** (elle fait baisser la glycémie), de nature protéique (51 acides aminés), sécrétée par les cellules β des îlots de Langerhans quand la glycémie **augmente**. C’est la seule hormone hypoglycémiante de l’organisme.' },
          { type: 'definition', term: 'Glucagon', text: 'hormone **hyperglycémiante** (elle fait monter la glycémie), de nature peptidique (29 acides aminés), sécrétée par les cellules α des îlots de Langerhans quand la glycémie **diminue**. Sa principale cellule cible est l’hépatocyte.' },
          {
            type: 'table',
            caption: 'Les deux hormones de la glycémie',
            head: ['', 'Insuline', 'Glucagon'],
            rows: [
              ['Cellules sécrétrices', 'Cellules β des îlots de Langerhans', 'Cellules α des îlots de Langerhans'],
              ['Stimulus de sécrétion', 'Hausse de la glycémie (après un repas)', 'Baisse de la glycémie (jeûne, effort)'],
              ['Cellules cibles', 'Hépatocytes, myocytes, adipocytes', 'Surtout les hépatocytes'],
              ['Effets', 'Favorise l’entrée du glucose dans les muscles et le tissu adipeux ; stimule la glycogénogenèse (foie, muscles) et la lipogenèse ; freine la glycogénolyse et la lipolyse', 'Stimule la glycogénolyse et la fabrication de glucose (néoglucogenèse) par le foie ; le glucose est libéré dans le sang'],
              ['Résultat', 'La glycémie **diminue**', 'La glycémie **augmente**'],
            ],
          },
          {
            type: 'steps',
            title: 'La boucle de régulation de la glycémie',
            items: [
              { title: 'Après un repas : hyperglycémie', text: 'Le glucose absorbé fait monter la glycémie. Les cellules β détectent cette hausse et sécrètent plus d’insuline ; les cellules α sécrètent moins de glucagon.' },
              { title: 'Action de l’insuline', text: 'Transportée par le sang, l’insuline se fixe sur les récepteurs de ses cellules cibles : les myocytes et les adipocytes font entrer davantage de glucose ; le foie et les muscles le stockent en glycogène ; le foie et le tissu adipeux fabriquent des triglycérides.' },
              { title: 'Retour à la consigne', text: 'La glycémie redescend vers 1 g/L ; le stimulus disparaît et la sécrétion d’insuline diminue : c’est une rétroaction négative.' },
              { title: 'Pendant un jeûne ou un effort : tendance à l’hypoglycémie', text: 'Les cellules consomment du glucose et la glycémie baisse. Les cellules α sécrètent plus de glucagon, les cellules β moins d’insuline.' },
              { title: 'Action du glucagon', text: 'Le glucagon se fixe sur les récepteurs des hépatocytes : la glycogénolyse libère du glucose dans le sang ; quand le glycogène s’épuise, le foie fabrique du glucose à partir d’acides aminés et de glycérol. La baisse de l’insuline favorise en parallèle la lipolyse dans le tissu adipeux.' },
              { title: 'Retour à la consigne', text: 'La glycémie remonte vers 1 g/L ; la sécrétion de glucagon diminue (rétroaction négative).' },
            ],
          },
          { type: 'note', title: 'D’autres hormones hyperglycémiantes', text: 'En cas de stress ou d’effort intense, l’adrénaline (sécrétée par les glandes surrénales) et le cortisol font aussi monter la glycémie. L’organisme dispose donc de plusieurs hormones hyperglycémiantes, mais d’une seule hormone hypoglycémiante : l’insuline. Son absence ou son inefficacité ne peut pas être compensée.' },
          {
            type: 'retenir',
            items: [
              'La glycémie est maintenue autour de **1 g/L** par deux hormones des îlots de Langerhans du pancréas, qui sont à la fois capteurs et glandes endocrines.',
              '**Insuline** (cellules β) : hypoglycémiante ; favorise l’entrée et le stockage du glucose (foie, muscles, tissu adipeux).',
              '**Glucagon** (cellules α) : hyperglycémiante ; fait libérer du glucose par le foie.',
              'Chaque hormone est sécrétée en réponse à l’écart qu’elle corrige : **rétroaction négative**.',
            ],
          },
        ],
      },

      {
        title: 'Quand la régulation échoue : les diabètes sucrés',
        intro: 'Le diabète sucré touche des millions de personnes en France : c’est une défaillance de la boucle de régulation de la glycémie.',
        blocks: [
          { type: 'definition', term: 'Diabète sucré', text: 'maladie caractérisée par une **hyperglycémie chronique**. Le diagnostic repose sur une glycémie à jeun supérieure ou égale à **1,26 g/L** (7 mmol/L) à deux reprises, ou supérieure ou égale à 2 g/L, à n’importe quel moment de la journée en présence de symptômes.' },
          { type: 'p', text: 'Selon Santé publique France, plus de 3,8 millions de personnes étaient traitées par médicaments pour un diabète en France en 2023, soit 5,6 % de la population. Il existe deux formes principales.' },
          {
            type: 'compare',
            title: 'Diabète de type 1 et diabète de type 2',
            columns: [
              { title: 'Diabète de type 1', subtitle: 'moins de 10 % des cas', items: ['Maladie **auto-immune** : le système immunitaire détruit les **cellules β** des îlots de Langerhans.', 'Plus d’insuline : le glucose n’est plus stocké, la glycémie s’élève fortement.', 'Débute souvent chez l’enfant ou l’adulte jeune, de façon rapide : soif intense, urines abondantes, amaigrissement, fatigue.', 'Traitement : injections d’**insuline** à vie (stylo ou pompe), surveillance de la glycémie, adaptation de l’alimentation et de l’activité.'] },
              { title: 'Diabète de type 2', subtitle: 'plus de 90 % des cas', items: ['Les cellules cibles répondent mal à l’insuline (**insulinorésistance**), puis le pancréas finit par en sécréter trop peu.', 'Favorisé par le surpoids, la sédentarité, une alimentation déséquilibrée, l’âge et une prédisposition familiale.', 'S’installe lentement, souvent sans symptôme pendant des années.', 'Traitement : activité physique et alimentation équilibrée d’abord, puis médicaments, parfois insuline.'] },
            ],
          },
          { type: 'p', text: 'Quand la glycémie dépasse le **seuil rénal** (environ 1,8 g/L), les transporteurs du tube contourné proximal sont saturés : du glucose passe dans l’urine (**glycosurie**), entraînant de l’eau. D’où les signes classiques du diabète déséquilibré : urines abondantes (**polyurie**) et soif intense (**polydipsie**) (chapitre 1.4).' },
          { type: 'warning', title: 'Les complications', text: 'Une hyperglycémie prolongée, même sans symptôme, abîme les petits et les gros vaisseaux : atteintes des yeux (rétinopathie), des reins (néphropathie), des nerfs (perte de sensibilité, plaies des pieds), du cœur et des artères (infarctus, accident vasculaire cérébral). Un bon équilibre de la glycémie et une hygiène de vie adaptée en réduisent fortement le risque.' },
          { type: 'definition', term: 'Hyperglycémie provoquée par voie orale (HGPO)', text: 'test qui étudie la réponse de la boucle de régulation à une perturbation : à jeun, le patient boit 75 g de glucose, puis on mesure sa glycémie à intervalles réguliers pendant 2 heures. Chez une personne en bonne santé, deux heures après, elle est inférieure à 1,40 g/L ; une valeur supérieure ou égale à 2,00 g/L signe un diabète.' },
          { type: 'warning', title: 'Réagir à une hypoglycémie', text: 'Chez une personne diabétique traitée, une dose d’insuline trop forte, un repas sauté ou un effort imprévu peuvent provoquer une hypoglycémie. Il faut se « resucrer » immédiatement avec environ 15 g de sucre rapide (trois morceaux de sucre ou un petit verre de jus de fruits), puis contrôler la glycémie. En cas de perte de connaissance, on ne donne rien par la bouche et on appelle le 15.' },
          { type: 'note', title: 'Histoire des sciences', text: 'En 1889, Joseph von Mering et Oskar Minkowski retirent le pancréas d’un chien : l’animal devient diabétique. En 1921, à Toronto, Frederick Banting et Charles Best extraient l’insuline du pancréas ; dès 1922, les premières injections sauvent des enfants diabétiques, jusque-là condamnés. Aujourd’hui, l’insuline est produite par des micro-organismes génétiquement modifiés : une application majeure des biotechnologies.' },
          {
            type: 'retenir',
            items: [
              'Le **diabète sucré** est une hyperglycémie chronique (glycémie à jeun ≥ 1,26 g/L lors de deux mesures).',
              '**Type 1** : destruction auto-immune des cellules β, absence d’insuline, traitement par insuline.',
              '**Type 2** : insulinorésistance puis sécrétion insuffisante, favorisé par le surpoids et la sédentarité ; traitement par hygiène de vie et médicaments.',
              'Au-delà de 1,8 g/L, le glucose passe dans l’urine (glycosurie, polyurie, soif).',
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
        title: 'Situer et comparer les compartiments liquidiens',
        duration: '25 min',
        skills: ['Observer', 'Comparer', 'Raisonner'],
        context: 'On suit une molécule de glucose depuis le sang jusqu’à l’intérieur d’une cellule musculaire, en traversant les différents compartiments liquidiens.',
        documents: [
          { label: 'Document 1', title: 'Les compartiments liquidiens dans un tissu', image: IMG.compartiments, caption: 'Schéma annoté ; les flèches indiquent les échanges.' },
          {
            label: 'Document 2',
            title: 'Composition des compartiments (valeurs indicatives)',
            blocks: [
              {
                type: 'table',
                head: ['Constituant', 'Plasma', 'Liquide interstitiel', 'Liquide intracellulaire'],
                rows: [
                  ['Na^+^ (mmol/L)', '142', '140', '12'],
                  ['K^+^ (mmol/L)', '4', '4', '140'],
                  ['Glucose (g/L)', '1', 'Environ 1', 'Très faible'],
                  ['Protéines (g/L)', '70', 'Faible', 'Très élevée'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Nomme, dans l’ordre, les compartiments traversés par une molécule de glucose qui passe du sang dans une cellule musculaire.', answer: 'Plasma (dans le capillaire sanguin) → liquide interstitiel → liquide intracellulaire (cytoplasme de la cellule musculaire).' },
          { text: 'Quels compartiments constituent le milieu intérieur ? Justifie.', answer: 'Le plasma, le liquide interstitiel et la lymphe, c’est-à-dire les liquides extracellulaires : ce sont eux qui baignent les cellules et assurent leurs échanges. Le liquide intracellulaire n’en fait pas partie.' },
          { text: 'Compare la composition du plasma et du liquide interstitiel. Explique la différence principale.', hint: 'Qu’est-ce qui peut traverser la paroi d’un capillaire ?', answer: 'Les concentrations en ions et en glucose sont presque identiques, car ces petites molécules traversent librement la paroi des capillaires. Le plasma est en revanche beaucoup plus riche en protéines, trop grosses pour sortir des capillaires.' },
          { text: 'Compare le liquide intracellulaire et le liquide interstitiel pour Na^+^ et K^+^. Quel mécanisme entretient cette différence ?', answer: 'Le sodium est environ 12 fois plus concentré à l’extérieur, le potassium 35 fois plus concentré à l’intérieur. Cette différence est entretenue par la pompe Na^+^/K^+^, qui expulse le sodium et fait entrer le potassium en consommant de l’ATP (transport actif).' },
          { text: 'Pourquoi le glucose est-il très peu concentré dans le liquide intracellulaire, alors qu’il y entre en permanence ?', answer: 'La cellule l’utilise dès son entrée (respiration cellulaire) ou le stocke sous forme de glycogène : sa concentration interne reste faible, ce qui maintient un gradient favorable à son entrée.' },
        ],
      },
      {
        title: 'Comparer glycémies préprandiale et postprandiale',
        duration: '30 min',
        skills: ['Exploiter des données', 'Modéliser'],
        context: 'On mesure la glycémie et les concentrations d’insuline et de glucagon dans le sang d’un lycéen en bonne santé, avant puis après un petit-déjeuner riche en glucides pris au temps 0.',
        documents: [
          { label: 'Document 3', title: 'Mesure de la glycémie capillaire', image: IMG.lecteur, caption: 'Lecteur de glycémie et stylo autopiqueur.' },
          {
            label: 'Document 4',
            title: 'Évolution des concentrations sanguines (valeurs typiques simplifiées)',
            blocks: [
              {
                type: 'table',
                head: ['Temps (min)', 'Glycémie (g/L)', 'Insuline (unités arbitraires)', 'Glucagon (unités arbitraires)'],
                rows: [
                  ['0 (avant le repas)', '0,90', '10', '80'],
                  ['30', '1,35', '60', '55'],
                  ['60', '1,25', '50', '50'],
                  ['90', '1,05', '30', '60'],
                  ['120', '0,95', '15', '70'],
                  ['180', '0,88', '10', '80'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Donne la glycémie préprandiale et la glycémie postprandiale maximale. Sont-elles normales ?', answer: 'Préprandiale : 0,90 g/L, dans l’intervalle physiologique à jeun (0,70 à 1,10 g/L). Maximum postprandial : 1,35 g/L, atteint à 30 min, inférieur à 1,40 g/L : la réponse est normale.' },
          { text: 'Explique l’augmentation de la glycémie entre 0 et 30 minutes.', answer: 'L’amidon et les sucres du petit-déjeuner sont digérés en glucose, absorbé par l’intestin grêle et transporté par le sang : la glycémie augmente.' },
          { text: 'Décris l’évolution de l’insulinémie et de la glucagonémie, et mets-les en relation avec la glycémie.', answer: 'L’insuline augmente fortement quand la glycémie monte (maximum à 30 min), puis diminue quand la glycémie redescend. Le glucagon évolue en sens inverse : il diminue après le repas, puis remonte quand la glycémie revient vers sa valeur de départ. Chaque hormone suit les variations de la glycémie.' },
          { text: 'Explique pourquoi la glycémie revient à sa valeur initiale en 2 à 3 heures.', answer: 'L’insuline agit sur le foie, les muscles et le tissu adipeux : entrée du glucose dans les cellules, glycogénogenèse, lipogenèse. Le glucose quitte le sang pour être stocké : la glycémie diminue jusqu’à environ 0,9 g/L.' },
          { text: 'Identifie, dans cette situation, la grandeur régulée, la perturbation, le capteur, le message, les effecteurs et la réponse.', answer: 'Grandeur régulée : la glycémie (consigne ≈ 1 g/L). Perturbation : le repas. Capteur : les cellules β (et α) des îlots de Langerhans. Message : l’insuline (hausse) et le glucagon (baisse). Effecteurs : foie, muscles, tissu adipeux. Réponse : stockage du glucose, baisse de la glycémie.' },
          { text: 'Pourquoi la sécrétion d’insuline diminue-t-elle à partir de 30 minutes ? Comment appelle-t-on ce mécanisme ?', answer: 'Parce que la glycémie, qui est le stimulus de la sécrétion d’insuline, diminue grâce à l’action de l’insuline elle-même : la correction supprime la cause de la réponse. C’est une rétroaction négative.' },
        ],
      },
      {
        title: 'Mettre en évidence le rôle du pancréas, de l’insuline et du glucagon',
        duration: '30 min',
        skills: ['Exploiter des expériences historiques', 'Raisonner'],
        context: 'Des expériences réalisées sur le chien à la fin du XIX^e^ et au début du XX^e^ siècle ont permis de comprendre le rôle du pancréas dans la régulation de la glycémie.',
        documents: [
          {
            label: 'Document 5',
            title: 'Expériences historiques sur le chien',
            blocks: [
              {
                type: 'table',
                head: ['Expérience', 'Résultat'],
                rows: [
                  ['1. Ablation totale du pancréas (von Mering et Minkowski, 1889)', 'Glycémie supérieure à 3 g/L, glucose dans l’urine, urines abondantes, amaigrissement ; mort en quelques semaines'],
                  ['2. Ligature des canaux pancréatiques : le suc pancréatique n’arrive plus dans l’intestin', 'Mauvaise digestion des aliments, mais glycémie normale'],
                  ['3. Chien privé de pancréas, avec greffe d’un fragment de pancréas sous la peau, sans canal ni nerf (Hédon, 1892)', 'Glycémie normale ; le diabète apparaît dès que l’on retire le greffon'],
                  ['4. Chien privé de pancréas, injection d’extraits d’îlots de Langerhans (Banting et Best, 1921)', 'La glycémie redescend vers la normale pendant quelques heures'],
                ],
              },
            ],
          },
          { label: 'Document 6', title: 'Coupe de pancréas (×200)', image: IMG.ilot, caption: 'Un îlot de Langerhans entouré d’acinus.' },
          { label: 'Document 7', title: 'Des hépatocytes riches en glycogène', image: IMG.foie, caption: 'Coupe de foie colorée au PAS : le glycogène apparaît en magenta dans les hépatocytes.', size: 'normal' },
          { label: 'Document 8', title: 'Effet du glucagon sur un foie isolé', text: ['Un foie isolé, riche en glycogène, est perfusé avec une solution sans glucose. Sans glucagon, le liquide qui sort du foie contient très peu de glucose. Avec du glucagon, il en contient beaucoup, et le glycogène du foie diminue.'] },
        ],
        questions: [
          { text: 'Que montre l’expérience 1 ?', answer: 'Sans pancréas, la glycémie n’est plus régulée : l’animal devient diabétique. Le pancréas est indispensable à la régulation de la glycémie, en particulier pour l’empêcher de monter.' },
          { text: 'Que montre l’expérience 2 sur la partie exocrine du pancréas ?', answer: 'Quand le suc pancréatique (sécrétion exocrine) n’arrive plus dans l’intestin, la digestion est perturbée mais la glycémie reste normale : ce n’est pas la sécrétion exocrine qui régule la glycémie.' },
          { text: 'Montre que l’expérience 3 prouve l’existence d’une communication hormonale.', hint: 'Le greffon n’a ni canal ni nerf : par quelle voie peut-il agir ?', answer: 'Le greffon, placé sous la peau, n’est relié à l’organisme que par les vaisseaux sanguins qui l’irriguent. Il empêche pourtant le diabète : il agit donc en libérant dans le sang une substance qui agit à distance. C’est la définition d’une communication hormonale ; le pancréas est une glande endocrine.' },
          { text: 'À l’aide des documents 5 (expérience 4) et 6, précise d’où provient cette hormone et quel est son effet.', answer: 'Elle provient des îlots de Langerhans, les amas de cellules pâles dispersés entre les acinus : c’est l’insuline, sécrétée par les cellules β. Elle fait baisser la glycémie : c’est une hormone hypoglycémiante.' },
          { text: 'Interprète le document 8 : quel est l’effet du glucagon sur le foie ?', answer: 'Le glucagon fait diminuer le glycogène du foie et augmenter la libération de glucose : il stimule la glycogénolyse dans les hépatocytes. C’est une hormone hyperglycémiante, dont la cellule cible principale est l’hépatocyte.' },
        ],
      },
      {
        title: 'Étudier des cas cliniques de diabète sucré',
        duration: '35 min',
        skills: ['Exploiter des résultats d’analyses', 'Argumenter', 'Communiquer'],
        context: 'Deux patients consultent leur médecin. Leurs dossiers, simplifiés pour l’exercice, sont présentés ci-dessous.',
        documents: [
          { label: 'Document 9', title: 'Emma, 12 ans', text: ['Depuis trois semaines, Emma a très soif, urine beaucoup, même la nuit, et a perdu 4 kg alors qu’elle mange normalement.', 'Glycémie à jeun : 2,60 g/L. Glucose présent dans l’urine. Insuline dans le sang : presque indétectable. Présence dans le sang d’anticorps dirigés contre les cellules β des îlots de Langerhans.'] },
          { label: 'Document 10', title: 'Monsieur Martin, 58 ans', text: ['Monsieur Martin est en surpoids et pratique peu d’activité physique ; son père était diabétique. Il ne ressent aucun symptôme.', 'Glycémie à jeun mesurée à deux reprises : 1,45 g/L puis 1,48 g/L. Pas de glucose dans l’urine. Insuline dans le sang : normale à élevée.'] },
          {
            label: 'Document 11',
            title: 'Hyperglycémie provoquée par voie orale (75 g de glucose)',
            blocks: [
              {
                type: 'table',
                head: ['Temps (min)', 'Personne en bonne santé (g/L)', 'Monsieur Martin (g/L)'],
                rows: [
                  ['0', '0,90', '1,45'],
                  ['30', '1,40', '2,10'],
                  ['60', '1,30', '2,45'],
                  ['120', '1,05', '2,30'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Montre que les deux patients sont diabétiques.', answer: 'Emma : glycémie à jeun de 2,60 g/L, bien supérieure à 1,26 g/L, avec des symptômes. Monsieur Martin : glycémie à jeun supérieure à 1,26 g/L lors de deux mesures (1,45 et 1,48 g/L), et glycémie de 2,30 g/L 2 heures après l’HGPO (supérieure à 2,00 g/L).' },
          { text: 'Explique l’amaigrissement, la soif et les urines abondantes d’Emma.', hint: 'Pense au seuil rénal du glucose et au devenir du glucose sans insuline.', answer: 'Sans insuline, le glucose n’entre plus dans les cellules musculaires et adipeuses et n’est plus stocké : l’organisme puise dans ses réserves de graisses et de protéines, d’où l’amaigrissement. La glycémie (2,60 g/L) dépasse le seuil rénal (1,8 g/L) : du glucose passe dans l’urine et entraîne de l’eau (polyurie) ; la perte d’eau provoque une soif intense.' },
          { text: 'De quel type de diabète Emma est-elle atteinte ? Justifie et indique son traitement.', answer: 'Diabète de type 1 : jeune âge, début rapide, insuline presque absente et anticorps dirigés contre les cellules β, qui révèlent une destruction auto-immune de ces cellules. Son traitement repose sur des injections d’insuline à vie, avec une surveillance régulière de la glycémie.' },
          { text: 'Monsieur Martin a une insuline normale, voire élevée, et pourtant une hyperglycémie. Comment l’expliquer ? De quel type de diabète s’agit-il ?', answer: 'Ses cellules cibles (foie, muscles, tissu adipeux) répondent mal à l’insuline : c’est l’insulinorésistance. Le glucose est mal stocké malgré la présence d’insuline. Associée au surpoids, à la sédentarité et à l’hérédité, cette situation correspond à un diabète de type 2.' },
          { text: 'Pourquoi Monsieur Martin n’a-t-il aucun symptôme ni glucose dans l’urine ? Pourquoi faut-il pourtant le traiter ?', answer: 'Sa glycémie (environ 1,45 g/L) reste inférieure au seuil rénal (1,8 g/L) : tout le glucose filtré est réabsorbé, il n’y a ni glycosurie ni polyurie. Mais l’hyperglycémie chronique abîme silencieusement les vaisseaux (yeux, reins, nerfs, cœur) : il faut la corriger pour éviter les complications.' },
          { text: 'Propose deux conseils d’hygiène de vie pour Monsieur Martin et explique leur intérêt.', answer: 'Pratiquer une activité physique régulière : les muscles consomment du glucose et deviennent plus sensibles à l’insuline. Adopter une alimentation équilibrée, pauvre en sucres rapides et en graisses saturées, pour perdre du poids : la perte de poids diminue l’insulinorésistance.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Le milieu intérieur est l’ensemble des liquides extracellulaires (plasma, liquide interstitiel, lymphe) qui baignent les cellules ; le liquide intracellulaire contient les deux tiers de l’eau du corps.',
      'Plasma et liquide interstitiel ont la même composition en ions et petites molécules, mais le plasma est riche en protéines ; Na^+^ domine hors des cellules, K^+^ à l’intérieur.',
      'Chaque paramètre a un intervalle physiologique (glycémie à jeun : 0,70 à 1,10 g/L) ; l’homéostasie est leur maintien dynamique.',
      'Une boucle de régulation associe grandeur régulée, valeur de consigne, capteur, message, effecteur et réponse adaptée ; la rétroaction négative stabilise la grandeur.',
      'Les îlots de Langerhans du pancréas sont capteurs et glandes endocrines : l’insuline (cellules β) est hypoglycémiante, le glucagon (cellules α) est hyperglycémiant.',
      'L’insuline favorise l’entrée et le stockage du glucose (foie, muscles, tissu adipeux) ; le glucagon fait libérer du glucose par le foie.',
      'Le diabète sucré est une hyperglycémie chronique : type 1 (destruction des cellules β, absence d’insuline) ; type 2 (insulinorésistance, favorisée par le surpoids et la sédentarité).',
    ],
    method: {
      title: 'Analyser une boucle de régulation à partir de documents',
      steps: [
        'Identifier la grandeur régulée et sa valeur de consigne (ou son intervalle physiologique).',
        'Repérer la perturbation et le sens de l’écart (hausse ou baisse).',
        'Identifier le capteur et le message (nerveux ou hormonal : glande, hormone, voie sanguine).',
        'Identifier les effecteurs et la réponse adaptée.',
        'Vérifier que la réponse annule l’écart et que le message diminue ensuite : rétroaction négative.',
        'Pour une maladie, repérer l’élément défaillant de la boucle (capteur, message, effecteur).',
      ],
    },
    vocabulary: [
      { term: 'Milieu intérieur', definition: 'Ensemble des liquides extracellulaires qui baignent les cellules (plasma, liquide interstitiel, lymphe).' },
      { term: 'Liquide interstitiel', definition: 'Liquide qui baigne directement les cellules des tissus.' },
      { term: 'Plasma', definition: 'Partie liquide du sang, riche en protéines.' },
      { term: 'Lymphe', definition: 'Liquide interstitiel recueilli par les vaisseaux lymphatiques et ramené au sang.' },
      { term: 'Intervalle physiologique', definition: 'Intervalle des valeurs d’un paramètre observées chez les personnes en bonne santé.' },
      { term: 'Homéostasie', definition: 'Maintien dynamique des paramètres du milieu intérieur dans des limites compatibles avec la vie.' },
      { term: 'Valeur de consigne', definition: 'Valeur autour de laquelle une grandeur régulée est maintenue.' },
      { term: 'Capteur', definition: 'Structure qui détecte la valeur et les variations d’une grandeur régulée.' },
      { term: 'Effecteur', definition: 'Organe ou cellule qui produit la réponse correctrice.' },
      { term: 'Rétroaction négative', definition: 'La réponse s’oppose à la variation qui l’a déclenchée, ce qui stabilise la grandeur.' },
      { term: 'Hormone', definition: 'Molécule sécrétée dans le sang par une glande endocrine, qui agit sur des cellules cibles munies de récepteurs.' },
      { term: 'Glande endocrine', definition: 'Glande qui libère ses hormones directement dans le sang.' },
      { term: 'Insuline', definition: 'Hormone hypoglycémiante sécrétée par les cellules β des îlots de Langerhans.' },
      { term: 'Glucagon', definition: 'Hormone hyperglycémiante sécrétée par les cellules α des îlots de Langerhans.' },
      { term: 'Diabète sucré', definition: 'Hyperglycémie chronique (glycémie à jeun ≥ 1,26 g/L lors de deux mesures).' },
    ],
    mistakes: [
      { wrong: 'Confondre sang et plasma.', right: 'Le plasma est la partie liquide du sang ; le sang contient en plus les cellules sanguines.' },
      { wrong: 'Inclure le liquide intracellulaire dans le milieu intérieur.', right: 'Le milieu intérieur regroupe les liquides extracellulaires seulement.' },
      { wrong: 'Dire que l’insuline « détruit » ou « transforme » le sucre.', right: 'L’insuline fait entrer le glucose dans les cellules et favorise son stockage (glycogène, triglycérides).' },
      { wrong: 'Penser que le glucagon agit sur les muscles pour libérer du glucose.', right: 'Le glucagon agit surtout sur le foie ; les muscles n’exportent pas de glucose dans le sang.' },
      { wrong: 'Croire que le diabète de type 2 est dû à un manque d’insuline dès le départ.', right: 'Il débute par une insulinorésistance des cellules cibles ; la sécrétion d’insuline ne diminue que plus tard.' },
      { wrong: 'Croire qu’une glycémie stable signifie une glycémie constante.', right: 'La glycémie oscille autour de la consigne : c’est un équilibre dynamique.' },
    ],
    quiz: [
      { question: 'Quel liquide baigne directement les cellules ?', choices: ['Le plasma', 'La lymphe', 'Le liquide interstitiel', 'Le liquide intracellulaire'], answer: 2, explanation: 'Le liquide interstitiel est situé entre les cellules ; il échange avec le plasma.' },
      { question: 'Le milieu intérieur est constitué :', choices: ['Du liquide intracellulaire', 'Des liquides extracellulaires', 'Du contenu du tube digestif', 'De l’urine'], answer: 1, explanation: 'Plasma, liquide interstitiel et lymphe forment le milieu intérieur.' },
      { question: 'Ce qui différencie surtout le plasma du liquide interstitiel est sa richesse en :', choices: ['Sodium', 'Glucose', 'Protéines', 'Eau'], answer: 2, explanation: 'Les protéines, trop grosses, ne sortent pas des capillaires.' },
      { question: 'L’intervalle physiologique de la glycémie à jeun est :', choices: ['0,10 à 0,50 g/L', '0,70 à 1,10 g/L', '1,26 à 2,00 g/L', '2 à 3 g/L'], answer: 1, explanation: 'Une glycémie à jeun ≥ 1,26 g/L lors de deux mesures définit le diabète.' },
      { question: 'Dans une boucle de régulation, la structure qui détecte les variations de la grandeur régulée est :', choices: ['L’effecteur', 'Le capteur', 'La consigne', 'Le message'], answer: 1, explanation: 'Pour la glycémie, ce sont les cellules α et β des îlots de Langerhans.' },
      { question: 'L’insuline est sécrétée par :', choices: ['Les cellules α des îlots de Langerhans', 'Les cellules β des îlots de Langerhans', 'Les acinus du pancréas', 'Les hépatocytes'], answer: 1, explanation: 'Les cellules β sécrètent l’insuline, les cellules α le glucagon.' },
      { question: 'Le glucagon fait augmenter la glycémie en stimulant :', choices: ['La glycogénogenèse dans les muscles', 'La glycogénolyse dans le foie', 'La lipogenèse', 'L’entrée du glucose dans les adipocytes'], answer: 1, explanation: 'Le foie hydrolyse son glycogène et libère du glucose dans le sang.' },
      { question: 'Après un repas, la sécrétion d’insuline diminue quand la glycémie redescend. C’est un exemple de :', choices: ['Rétroaction positive', 'Rétroaction négative', 'Perturbation', 'Valeur de consigne'], answer: 1, explanation: 'La correction supprime le stimulus, ce qui atténue la réponse.' },
      { question: 'Le diabète de type 1 est dû à :', choices: ['Un excès d’insuline', 'La destruction auto-immune des cellules β', 'Un manque d’ADH', 'Une insulinorésistance due au surpoids'], answer: 1, explanation: 'Sans cellules β, il n’y a plus d’insuline : le traitement repose sur l’insuline.' },
      { question: 'Une personne a une glycémie de 1,5 g/L. On s’attend à ce que son urine :', choices: ['Contienne beaucoup de glucose', 'Ne contienne pas de glucose', 'Contienne des protéines', 'Soit absente'], answer: 1, explanation: '1,5 g/L reste sous le seuil rénal (≈ 1,8 g/L) : tout le glucose filtré est réabsorbé.' },
    ],
    exercises: [
      {
        title: 'Construire le schéma de la régulation',
        statement: 'Réalise un schéma fonctionnel de la régulation de la glycémie montrant les deux situations (hyperglycémie après un repas, hypoglycémie à jeun). Fais apparaître : le capteur, les hormones, les cellules cibles, les réponses et la rétroaction négative.',
        answer: ['Hyperglycémie → cellules β des îlots de Langerhans → sécrétion d’insuline dans le sang → foie (glycogénogenèse, lipogenèse), muscles (entrée du glucose, glycogénogenèse), tissu adipeux (entrée du glucose, lipogenèse) → baisse de la glycémie → retour à environ 1 g/L → la sécrétion d’insuline diminue (rétroaction négative).', 'Hypoglycémie → cellules α → sécrétion de glucagon → foie (glycogénolyse, production de glucose) → libération de glucose dans le sang → hausse de la glycémie → retour à environ 1 g/L → la sécrétion de glucagon diminue (rétroaction négative).'],
      },
      {
        title: 'Une hormone produite par biotechnologie',
        statement: 'Avant les années 1980, l’insuline injectée aux diabétiques était extraite de pancréas de porc ou de bœuf. Elle est aujourd’hui produite par des bactéries ou des levures dans lesquelles on a introduit le gène humain de l’insuline. a) Pourquoi l’insuline ne peut-elle pas être prise en comprimé ? b) Cite deux avantages de la production par micro-organismes.',
        answer: ['a) L’insuline est une protéine : avalée, elle serait hydrolysée en acides aminés par les enzymes digestives (pepsine, trypsine…) et perdrait son activité. Elle doit donc être injectée.', 'b) La production est illimitée et indépendante des abattoirs, et l’insuline obtenue est identique à l’insuline humaine, ce qui limite les réactions immunitaires.'],
      },
      {
        title: 'Lire un bilan sanguin',
        statement: 'Le bilan sanguin à jeun d’une patiente indique : glycémie 0,62 g/L ; natrémie 140 mmol/L ; kaliémie 4,1 mmol/L. a) Compare chaque valeur à l’intervalle physiologique. b) Quel symptôme peut ressentir la patiente ? c) Quelle hormone son pancréas devrait-il sécréter davantage ?',
        answer: ['a) Glycémie : 0,62 g/L, inférieure à 0,70 g/L : hypoglycémie. Natrémie et kaliémie sont normales (135 à 145 et 3,5 à 5,0 mmol/L).', 'b) Sueurs, tremblements, faim, fatigue ou difficultés de concentration, car le cerveau manque de glucose.', 'c) Le glucagon, hormone hyperglycémiante, qui stimule la libération de glucose par le foie (et l’insuline devrait diminuer).'],
      },
    ],
    selfCheck: [
      'Je sais situer les compartiments liquidiens et définir le milieu intérieur.',
      'Je sais comparer la composition du plasma, du liquide interstitiel et du liquide intracellulaire.',
      'Je sais utiliser une valeur de référence pour interpréter un résultat d’analyse.',
      'Je sais nommer les éléments d’une boucle de régulation et expliquer la rétroaction négative.',
      'Je sais expliquer le rôle de l’insuline et du glucagon, leurs cellules sécrétrices et leurs cellules cibles.',
      'Je sais interpréter des courbes de glycémie (repas, HGPO) et des expériences historiques.',
      'Je sais distinguer les diabètes de type 1 et de type 2 et expliquer leurs symptômes.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Prévalence et incidence du diabète — Santé publique France', url: 'https://www.santepubliquefrance.fr/maladies-et-traumatismes/diabete/articles/prevalence-et-incidence-du-diabete' },
      { title: 'Diabète de type 1 — Inserm', url: 'https://www.inserm.fr/dossier/diabete-type-1/' },
      { title: 'Diabète de type 2 — Inserm', url: 'https://www.inserm.fr/dossier/diabete-type-2/' },
      { title: 'Homéostasie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hom%C3%A9ostasie' },
      { title: 'Glycémie — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Glyc%C3%A9mie' },
    ],
  },
};

export default lesson;
