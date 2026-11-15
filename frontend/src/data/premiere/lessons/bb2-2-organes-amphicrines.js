import { img } from '../media';
import appareilMasculin from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/appareil-masculin.webp';
import appareilFeminin from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/appareil-feminin.webp';
import testiculeCoupe from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/testicule-coupe.webp';
import tubeSeminifere from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/tube-seminifere.webp';
import ovaireCoupe from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/ovaire-coupe.webp';
import ovaireSchema from '../../../assets/courses/premiere/bb2-2-organes-amphicrines/ovaire-schema.webp';

const IMG = {
  masculin: img(appareilMasculin, 'Schéma au crayon de l’appareil reproducteur masculin vu de profil : vessie, vésicule séminale, prostate, glande de Cowper, canal déférent, urètre, pénis, épididyme, testicule et scrotum.', 'schema', 1254, 1254),
  feminin: img(appareilFeminin, 'Schéma au crayon de l’appareil reproducteur féminin vu de face : ovaires, trompes utérines et pavillons, utérus en coupe avec endomètre et myomètre, col de l’utérus et vagin.', 'schema', 1400, 933),
  testicule: img(testiculeCoupe, 'Coupe histologique de testicule colorée à l’hématoxyline-éosine : sections de tubes séminifères remplis de cellules germinales, spermatozoïdes dans la lumière, et entre les tubes des amas de cellules de Leydig roses près de capillaires sanguins.', 'micro', 1536, 1024),
  tube: img(tubeSeminifere, 'Schéma d’un secteur de tube séminifère : spermatogonies, spermatocytes I et II, spermatides et spermatozoïdes de la périphérie vers la lumière, cellules de Sertoli, et dans le tissu interstitiel des cellules de Leydig près d’un capillaire sanguin.', 'schema', 1400, 933),
  ovaire: img(ovaireCoupe, 'Coupe histologique d’ovaire colorée à l’hématoxyline-éosine : petits follicules primordiaux sous la surface, un follicule secondaire et un grand follicule cavitaire dont l’ovocyte repose sur un amas de cellules folliculaires.', 'micro', 1536, 1024),
  ovaireSchema: img(ovaireSchema, 'Schéma d’un ovaire en coupe montrant les étapes successives : follicules primordial, primaire, secondaire, cavitaire et mûr, ovulation d’un ovocyte II, corps jaune et corps blanc.', 'schema', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'bb2-2-organes-amphicrines',
  duration: 'Environ 3 séances (cours, observations microscopiques et analyse de documents)',
  hook: {
    image: IMG.ovaire,
    question: 'Comment un même organe peut-il fabriquer à la fois des cellules reproductrices et des hormones ?',
    text: 'Sur cette coupe d’ovaire, on reconnaît des follicules de tailles très différentes : chacun abrite un ovocyte, mais leurs cellules fabriquent aussi des hormones qui passent dans le sang. Le testicule fonctionne de la même façon. Dans ce chapitre, tu apprends à décrire les appareils reproducteurs, à lire une coupe de gonade et à comprendre comment une hormone, la testostérone, contrôle la production des spermatozoïdes et les transformations de la puberté.',
  },
  objectives: [
    'Représenter par un dessin légendé les principaux organes des appareils reproducteurs masculin et féminin.',
    'Associer à chaque organe sa fonction : production des gamètes, transport, sécrétions, fécondation, nidation.',
    'Repérer sur une coupe de testicule les tubes séminifères et les cellules de Leydig, et sur une coupe d’ovaire les différents follicules.',
    'Justifier que les testicules et les ovaires sont des organes amphicrines.',
    'Expliquer, à partir de documents, le contrôle de la spermatogenèse et des caractères sexuels secondaires masculins par la testostérone.',
  ],
  prerequisites: [
    'Organisation des appareils reproducteurs et transformations de la puberté (collège).',
    'Notions de glande endocrine, d’hormone et d’organe cible (seconde).',
    'Utilisation du microscope et lecture d’une coupe histologique (module 1).',
  ],
  program: [
    'Représenter par un dessin les principaux organes des appareils reproducteurs féminin et masculin (appareil génital, voie génitale, gonade, glandes annexes).',
    'Associer une fonction aux principaux organes (production de gamètes, nidation) ; observer des coupes de testicule, d’ovaire ou d’utérus.',
    'Expliquer à partir de documents le contrôle de la gamétogenèse et des caractères sexuels secondaires masculins par la testostérone (gonade, hormone, puberté, régulation, caractères sexuels primaires et secondaires).',
    'Observer des coupes de testicule pour localiser les cellules de Leydig.',
  ],

  course: {
    parts: [
      {
        title: 'Les appareils reproducteurs : organisation et fonctions',
        intro: 'Chez l’homme comme chez la femme, l’appareil reproducteur (ou appareil génital) est organisé selon le même plan : des gonades, des voies génitales et des glandes annexes.',
        blocks: [
          { type: 'definition', term: 'Gonade', text: 'organe qui produit les **gamètes** (cellules reproductrices) : les **testicules** chez l’homme, les **ovaires** chez la femme.' },
          { type: 'definition', term: 'Voies génitales', text: 'ensemble des conduits qui transportent les gamètes (et, chez la femme, accueillent l’embryon) : épididyme, canal déférent et urètre chez l’homme ; trompes utérines, utérus et vagin chez la femme.' },
          { type: 'definition', term: 'Glandes annexes', text: 'glandes qui déversent leurs sécrétions dans les voies génitales : vésicules séminales, prostate et glandes de Cowper chez l’homme.' },
          { type: 'figure', image: IMG.masculin, caption: 'L’appareil reproducteur masculin, vu de profil (coupe sagittale simplifiée). En vert : la gonade (testicule) et l’épididyme.', size: 'normal' },
          {
            type: 'table',
            caption: 'Organes de l’appareil reproducteur masculin et leurs fonctions',
            head: ['Organe', 'Catégorie', 'Fonction'],
            rows: [
              ['Testicules', 'Gonades', 'Produisent les **spermatozoïdes** et sécrètent la **testostérone**.'],
              ['Scrotum', 'Enveloppe externe', 'Maintient les testicules hors de l’abdomen, à environ 34 °C, température nécessaire à la production des spermatozoïdes.'],
              ['Épididyme', 'Voie génitale', 'Stocke les spermatozoïdes, où ils achèvent leur maturation et deviennent mobiles.'],
              ['Canal déférent', 'Voie génitale', 'Conduit les spermatozoïdes de l’épididyme jusqu’à l’urètre, dans la prostate.'],
              ['Vésicules séminales', 'Glandes annexes', 'Produisent la plus grande partie du liquide séminal, riche en fructose (source d’énergie des spermatozoïdes).'],
              ['Prostate', 'Glande annexe', 'Produit un liquide qui s’ajoute au sperme et participe à la mobilité des spermatozoïdes.'],
              ['Glandes de Cowper', 'Glandes annexes', 'Sécrètent un mucus qui lubrifie l’urètre avant l’éjaculation.'],
              ['Urètre et pénis', 'Voie génitale et organe génital externe', 'Conduit commun de l’urine et du sperme ; organe de l’accouplement.'],
            ],
          },
          { type: 'figure', image: IMG.feminin, caption: 'L’appareil reproducteur féminin, vu de face (l’utérus et le vagin sont représentés en coupe). En vert : les gonades (ovaires).', size: 'wide' },
          {
            type: 'table',
            caption: 'Organes de l’appareil reproducteur féminin et leurs fonctions',
            head: ['Organe', 'Catégorie', 'Fonction'],
            rows: [
              ['Ovaires', 'Gonades', 'Libèrent un **ovocyte** à chaque cycle et sécrètent les **œstrogènes** et la **progestérone**.'],
              ['Trompes utérines et pavillons', 'Voies génitales', 'Le pavillon capte l’ovocyte ; la **fécondation** a lieu dans le tiers externe de la trompe, qui conduit ensuite l’embryon vers l’utérus.'],
              ['Utérus : endomètre', 'Voie génitale', 'Muqueuse interne qui accueille l’embryon : c’est le lieu de la **nidation**.'],
              ['Utérus : myomètre', 'Voie génitale', 'Paroi musculaire épaisse ; ses contractions permettent l’accouchement.'],
              ['Col de l’utérus', 'Voie génitale', 'Sécrète la **glaire cervicale**, plus ou moins perméable aux spermatozoïdes selon le moment du cycle.'],
              ['Vagin et vulve', 'Voie génitale et organes génitaux externes', 'Organe de l’accouplement ; voie de sortie des règles et du bébé à la naissance.'],
            ],
          },
          { type: 'definition', term: 'Nidation', text: 'implantation de l’embryon dans l’endomètre de l’utérus, environ une semaine après la fécondation. L’endomètre doit avoir été préparé par les hormones ovariennes (leçon 2.3).' },
          {
            type: 'steps',
            title: 'Méthode : dessiner un appareil reproducteur',
            items: [
              'Choisir la vue et la garder : de face pour l’appareil féminin, de profil pour l’appareil masculin.',
              'Tracer au crayon, à main levée mais proprement, en respectant la position relative des organes (la vessie en avant, les gonades, les voies génitales qui les relient).',
              'Différencier par un code couleur les gonades, les voies génitales et les glandes annexes, et l’indiquer dans une légende.',
              'Légender à la règle, avec des traits horizontaux qui ne se croisent pas, puis écrire un titre précis (« Appareil reproducteur masculin, vue de profil »).',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Un appareil reproducteur comprend des **gonades**, des **voies génitales** et des **glandes annexes** (chez l’homme).',
              'Les testicules et les ovaires produisent les gamètes ; la fécondation a lieu dans la **trompe** ; la **nidation** a lieu dans l’**endomètre** de l’utérus.',
              'Un schéma d’anatomie est titré, légendé à la règle et précise la vue choisie.',
            ],
          },
        ],
      },

      {
        title: 'Le testicule, un organe amphicrine',
        intro: 'Au microscope, le testicule révèle deux territoires bien distincts, qui correspondent à ses deux fonctions.',
        blocks: [
          { type: 'definition', term: 'Fonction exocrine', text: 'production d’une substance déversée **dans une cavité ou à l’extérieur de l’organisme** par un canal. Exemple : le suc pancréatique déversé dans l’intestin.' },
          { type: 'definition', term: 'Fonction endocrine', text: 'production d’une **hormone** déversée **dans le sang**, qui la transporte jusqu’à ses cellules cibles. Exemple : l’insuline sécrétée par le pancréas.' },
          { type: 'definition', term: 'Organe amphicrine', text: 'organe qui assure **à la fois** une fonction exocrine et une fonction endocrine. Le pancréas, les testicules et les ovaires sont des organes amphicrines.' },
          { type: 'p', text: 'Chaque testicule contient plusieurs centaines de **tubes séminifères**, très fins (environ 0,2 mm de diamètre) et pelotonnés : mis bout à bout, ils mesureraient plusieurs centaines de mètres. Sur une coupe, on observe donc de nombreuses sections rondes de tubes séminifères, séparées par un **tissu interstitiel** riche en capillaires sanguins.' },
          { type: 'figure', image: IMG.testicule, caption: 'Coupe de testicule (coloration hématoxyline-éosine, ×400) : sections de tubes séminifères (violet) et, entre eux, le tissu interstitiel avec des amas de cellules de Leydig (rose vif) et des capillaires contenant des hématies.', size: 'wide' },
          { type: 'figure', image: IMG.tube, caption: 'Schéma interprétatif d’un secteur de tube séminifère et du tissu interstitiel : les cellules germinales se différencient de la périphérie vers la lumière ; les cellules de Leydig (en vert) sont situées entre les tubes.', size: 'wide' },
          {
            type: 'compare',
            title: 'Les deux fonctions du testicule',
            columns: [
              { title: 'Fonction exocrine', subtitle: 'dans les tubes séminifères', items: ['Les **cellules germinales** se divisent et se différencient de la paroi vers la lumière : spermatogonies, spermatocytes, spermatides, spermatozoïdes.', 'Les **cellules de Sertoli**, hautes, nourrissent et protègent les cellules germinales.', 'Les **spermatozoïdes** sont libérés dans la lumière du tube puis conduits vers l’épididyme et l’extérieur.'] },
              { title: 'Fonction endocrine', subtitle: 'dans le tissu interstitiel', items: ['Les **cellules de Leydig** (ou cellules interstitielles), groupées entre les tubes, sécrètent la **testostérone**.', 'La testostérone passe dans les **capillaires sanguins** voisins.', 'Le sang la distribue à ses **organes cibles** dans tout le corps.'] },
            ],
          },
          { type: 'note', title: 'Une glande qui libère des cellules', text: 'Le produit de la fonction exocrine du testicule n’est pas une simple sécrétion, comme le suc pancréatique : ce sont des cellules entières, les spermatozoïdes. Il en va de même pour l’ovaire, qui libère un ovocyte.' },
          {
            type: 'retenir',
            items: [
              'Un organe **amphicrine** a une fonction **exocrine** (produit libéré par un canal) et une fonction **endocrine** (hormone libérée dans le sang).',
              'Testicule : fonction exocrine dans les **tubes séminifères** (spermatozoïdes) ; fonction endocrine dans le **tissu interstitiel** (cellules de **Leydig** → testostérone).',
              'Les **cellules de Sertoli** soutiennent et nourrissent les cellules germinales.',
            ],
          },
        ],
      },

      {
        title: 'La testostérone contrôle la spermatogenèse et les caractères sexuels',
        intro: 'Comment une hormone fabriquée par quelques amas de cellules peut-elle transformer le corps à la puberté ?',
        blocks: [
          { type: 'definition', term: 'Hormone', text: 'molécule sécrétée par une glande endocrine dans le sang, qui agit à distance et à faible concentration sur des **cellules cibles** : ces cellules possèdent des **récepteurs** capables de la reconnaître.' },
          { type: 'p', text: 'La **testostérone** est une hormone **stéroïde**, fabriquée à partir du cholestérol par les cellules de Leydig. Elle agit sur toutes les cellules qui possèdent des récepteurs aux androgènes (les hormones « masculinisantes »).' },
          {
            type: 'compare',
            title: 'Caractères sexuels primaires et secondaires',
            columns: [
              { title: 'Caractères sexuels primaires', subtitle: 'mis en place avant la naissance', items: ['Nature des **gonades** (testicules ou ovaires).', 'Voies génitales et organes génitaux externes.', 'Chez l’embryon de sexe masculin, la testostérone sécrétée par les testicules dès la fin du 2e mois de grossesse contribue à leur mise en place.'] },
              { title: 'Caractères sexuels secondaires', subtitle: 'apparaissent à la puberté', items: ['Chez le garçon : pilosité (barbe, corps), voix plus grave (mue), développement musculaire, croissance du pénis et des testicules.', 'Chez la fille : développement des seins, élargissement du bassin, répartition des graisses, pilosité.', 'Ils dépendent des hormones sexuelles : testostérone chez le garçon, œstrogènes chez la fille.'] },
            ],
          },
          {
            type: 'table',
            caption: 'Les principaux organes cibles de la testostérone',
            head: ['Cellules ou organes cibles', 'Effets de la testostérone'],
            rows: [
              ['Cellules de Sertoli des tubes séminifères', 'Indispensable à la **spermatogenèse** (production des spermatozoïdes), avec une concentration très élevée dans le testicule.'],
              ['Glandes annexes (prostate, vésicules séminales)', 'Développement et sécrétion du liquide séminal.'],
              ['Organes génitaux externes', 'Croissance du pénis et du scrotum à la puberté.'],
              ['Larynx', 'Allongement des cordes vocales : la voix devient plus grave (mue).'],
              ['Peau et follicules pileux', 'Pilosité du visage et du corps ; sécrétion de sébum (d’où l’acné fréquente à la puberté).'],
              ['Muscles et os', 'Augmentation de la masse musculaire ; poussée de croissance puis arrêt de la croissance des os.'],
              ['Cerveau', 'Désir sexuel (libido).'],
            ],
          },
          { type: 'p', text: 'La concentration sanguine de testostérone est très faible pendant l’enfance. À la **puberté**, entre 11 et 15 ans environ, elle augmente fortement : les tubes séminifères commencent à produire des spermatozoïdes et les caractères sexuels secondaires apparaissent. Chez l’adulte, elle reste à peu près stable ; la production de spermatozoïdes est **continue**, de la puberté jusqu’à la fin de la vie.' },
          { type: 'example', title: 'l’expérience historique de Berthold (1849)', text: ['Arnold Berthold retire les testicules de jeunes coqs : ils ne développent ni crête ni barbillons, ne chantent pas et ne se battent pas. Chez d’autres coqs castrés, il greffe un testicule dans l’abdomen, loin de sa place normale : les caractères masculins se développent normalement.', 'Conclusion : le testicule agit sur l’organisme **par l’intermédiaire du sang**, et non par des nerfs : c’est la première mise en évidence d’une action hormonale.'] },
          { type: 'warning', title: 'La testostérone ne suffit pas à tout expliquer', text: 'Le fonctionnement du testicule est lui-même commandé par deux hormones de l’hypophyse, la LH et la FSH. Cette commande et ses régulations sont étudiées dans la leçon suivante.' },
          {
            type: 'retenir',
            items: [
              'La **testostérone**, hormone stéroïde des cellules de Leydig, agit sur des cellules cibles qui possèdent des récepteurs.',
              'Elle est indispensable à la **spermatogenèse** et au fonctionnement des glandes annexes.',
              'À la **puberté**, l’augmentation de sa concentration déclenche l’apparition des **caractères sexuels secondaires** masculins.',
              'Les caractères sexuels **primaires** (gonades, voies génitales, organes externes) sont mis en place avant la naissance.',
            ],
          },
        ],
      },

      {
        title: 'L’ovaire, un organe amphicrine au fonctionnement cyclique',
        intro: 'L’ovaire produit lui aussi des gamètes et des hormones, mais d’une façon très différente du testicule.',
        blocks: [
          { type: 'definition', term: 'Follicule ovarien', text: 'petite structure de l’ovaire formée d’un **ovocyte** entouré de **cellules folliculaires**. C’est l’unité de fonctionnement de l’ovaire : il protège l’ovocyte et sécrète des hormones.' },
          { type: 'p', text: 'Le stock de follicules est constitué **avant la naissance** : environ 1 à 2 millions à la naissance, environ 400 000 à la puberté. Il ne se renouvelle pas. Au cours de la vie, seuls 400 à 500 follicules environ arriveront à l’ovulation ; tous les autres dégénèrent. Lorsque le stock est épuisé, vers 50 ans, c’est la **ménopause**.' },
          { type: 'figure', image: IMG.ovaire, caption: 'Coupe d’ovaire (coloration hématoxyline-éosine, ×100) : follicules primordiaux sous la surface, follicule secondaire (à gauche) et grand follicule cavitaire avec sa cavité remplie de liquide (à droite).', size: 'wide' },
          {
            type: 'table',
            caption: 'Les étapes du développement d’un follicule (folliculogenèse)',
            head: ['Stade', 'Description', 'Taille approximative'],
            rows: [
              ['Follicule primordial', 'Ovocyte entouré d’une seule couche de cellules folliculaires aplaties.', '0,05 mm'],
              ['Follicule primaire', 'Une couche de cellules folliculaires cubiques.', '0,1 mm'],
              ['Follicule secondaire', 'Plusieurs couches de cellules folliculaires (la granulosa) ; une zone pellucide entoure l’ovocyte ; des thèques se forment autour.', '0,2 à 0,5 mm'],
              ['Follicule cavitaire', 'Une cavité remplie de liquide (l’antrum) apparaît entre les cellules folliculaires.', '0,5 à 10 mm'],
              ['Follicule mûr', 'Très grand follicule qui fait saillie à la surface de l’ovaire ; l’ovocyte repose sur un amas de cellules.', 'environ 20 mm'],
              ['Corps jaune', 'Après l’ovulation, les cellules du follicule vidé se transforment en une glande endocrine temporaire.', '20 à 30 mm'],
            ],
          },
          { type: 'figure', image: IMG.ovaireSchema, caption: 'Schéma de synthèse : les étapes successives d’un même follicule, de l’état primordial à l’ovulation, puis le corps jaune et sa cicatrice, le corps blanc. Le corps jaune est en vert.', size: 'wide' },
          {
            type: 'compare',
            title: 'Les deux fonctions de l’ovaire',
            columns: [
              { title: 'Fonction exocrine', subtitle: 'libération d’un ovocyte', items: ['En général, **un seul follicule** arrive à maturité à chaque cycle.', 'À l’**ovulation**, il se rompt et libère un **ovocyte** entouré de quelques cellules folliculaires.', 'L’ovocyte est capté par le **pavillon** de la trompe.'] },
              { title: 'Fonction endocrine', subtitle: 'hormones libérées dans le sang', items: ['Les cellules folliculaires (thèque interne et granulosa) des follicules en croissance sécrètent des **œstrogènes**, surtout l’œstradiol.', 'Après l’ovulation, le **corps jaune** sécrète de la **progestérone** et des œstrogènes.', 'Ces hormones agissent sur l’utérus, le col, les seins et l’hypothalamus.'] },
            ],
          },
          { type: 'p', text: 'À la puberté, l’augmentation de la sécrétion d’œstrogènes provoque l’apparition des **caractères sexuels secondaires** féminins (développement des seins, élargissement du bassin, répartition des graisses) et le développement de l’utérus. Les premières règles marquent le début des **cycles** : l’ovaire fonctionne de façon cyclique, ce que la leçon 2.3 explique.' },
          {
            type: 'table',
            caption: 'Testicule et ovaire : deux gonades amphicrines comparées',
            head: ['Critère', 'Testicule', 'Ovaire'],
            rows: [
              ['Produit exocrine', 'Spermatozoïdes', 'Ovocyte'],
              ['Rythme de production', 'Continu, des millions de spermatozoïdes par jour', 'Cyclique, en général un ovocyte par cycle'],
              ['Durée', 'De la puberté à la fin de la vie', 'De la puberté à la ménopause'],
              ['Stock de cellules germinales', 'Renouvelé (les spermatogonies se divisent)', 'Constitué avant la naissance, non renouvelé'],
              ['Cellules endocrines', 'Cellules de Leydig', 'Cellules folliculaires, puis corps jaune'],
              ['Hormones', 'Testostérone', 'Œstrogènes et progestérone'],
            ],
          },
          {
            type: 'retenir',
            items: [
              'L’ovaire contient des **follicules** à différents stades : primordial, primaire, secondaire, cavitaire, mûr.',
              'Fonction exocrine : à l’**ovulation**, le follicule mûr libère un **ovocyte**.',
              'Fonction endocrine : les follicules sécrètent des **œstrogènes** ; le **corps jaune** sécrète de la **progestérone** et des œstrogènes.',
              'Contrairement au testicule, l’ovaire fonctionne de façon **cyclique** et son stock de follicules n’est pas renouvelé.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Chaque activité s’appuie sur de vrais types de documents : schémas d’anatomie, coupes histologiques, expériences et cas cliniques. Réponds d’abord seul(e), puis utilise le coup de pouce et compare avec la correction.',
    activities: [
      {
        title: 'Dessiner et légender les appareils reproducteurs',
        duration: '30 min',
        skills: ['Représenter', 'Communiquer'],
        context: 'Tu dois produire dans ton cahier deux schémas d’anatomie propres, puis suivre le trajet des gamètes.',
        documents: [
          { label: 'Document 1', title: 'Appareil reproducteur masculin (vue de profil)', image: IMG.masculin, caption: 'Schéma légendé.', size: 'normal' },
          { label: 'Document 2', title: 'Une condition de la spermatogenèse', text: ['La production des spermatozoïdes nécessite une température d’environ 34 °C, inférieure de 2 à 3 °C à la température du corps. Chez le fœtus, les testicules se forment dans l’abdomen puis descendent dans le scrotum avant la naissance.', 'Chez quelques pour cent des garçons nés à terme, un testicule n’est pas descendu à la naissance (cryptorchidie). Non corrigée, cette anomalie peut diminuer la fertilité.'] },
        ],
        questions: [
          { text: 'Réalise un schéma simplifié de l’appareil reproducteur féminin vu de face. Légende : ovaire, trompe utérine, pavillon, utérus, endomètre, myomètre, col de l’utérus, vagin.', hint: 'Commence par l’utérus au centre, puis les trompes de part et d’autre ; n’oublie pas le titre.', answer: 'Compare ton schéma à la figure de la Partie 1 : utérus central en forme de poire renversée, trompes partant des angles supérieurs et se terminant par un pavillon frangé au-dessus de chaque ovaire, col ouvrant dans le vagin. Légendes horizontales à la règle, titre : « Appareil reproducteur féminin, vue de face ».' },
          { text: 'Sur le document 1, classe les organes en trois groupes : gonades, voies génitales, glandes annexes.', answer: 'Gonades : testicules. Voies génitales : épididyme, canal déférent, urètre (et pénis). Glandes annexes : vésicules séminales, prostate, glandes de Cowper.' },
          { text: 'Décris dans l’ordre le trajet d’un spermatozoïde depuis son lieu de production jusqu’à l’extérieur, puis jusqu’au lieu de la fécondation.', answer: 'Tube séminifère du testicule → épididyme → canal déférent → urètre (dans la prostate, où se mêlent les sécrétions des vésicules séminales et de la prostate) → extérieur par le pénis. Après dépôt dans le vagin : col de l’utérus → cavité utérine → trompe utérine, où a lieu la fécondation.' },
          { text: 'À l’aide du document 2, explique pourquoi les testicules sont situés dans le scrotum, hors de l’abdomen.', answer: 'La spermatogenèse nécessite une température d’environ 34 °C, plus basse que la température du corps (37 °C). Le scrotum, situé hors de l’abdomen, maintient les testicules à cette température. Un testicule resté dans l’abdomen est trop chaud : la production de spermatozoïdes peut être diminuée.' },
        ],
      },
      {
        title: 'Localiser les deux fonctions du testicule sur une coupe',
        duration: '25 min',
        skills: ['Observer', 'Interpréter', 'Argumenter'],
        context: 'Au laboratoire, tu observes une lame de testicule au microscope à l’objectif ×40.',
        documents: [
          { label: 'Document 3', title: 'Coupe de testicule (×400)', image: IMG.testicule, caption: 'Coloration hématoxyline-éosine.' },
          { label: 'Document 4', title: 'Schéma interprétatif', image: IMG.tube, caption: 'Secteur de tube séminifère et tissu interstitiel.', size: 'normal' },
        ],
        questions: [
          { text: 'Sur le document 3, repère les tubes séminifères, leur lumière, les spermatozoïdes et le tissu interstitiel. Décris l’aspect de chacun.', hint: 'Les spermatozoïdes ont une tête sombre et allongée et un flagelle fin.', answer: 'Les tubes séminifères sont les grandes sections rondes violettes, à paroi épaisse formée de nombreuses couches de cellules. Leur lumière est la zone claire centrale, où l’on voit les têtes sombres allongées et les flagelles roses des spermatozoïdes. Le tissu interstitiel occupe les espaces entre les tubes : il contient des amas de grosses cellules roses et des capillaires remplis d’hématies.' },
          { text: 'Où se situent les cellules de Leydig ? Quel élément voisin permet de comprendre comment leur hormone quitte le testicule ?', answer: 'Les cellules de Leydig sont les amas de cellules à cytoplasme rose vif situés dans le tissu interstitiel, entre les tubes. Elles sont proches des capillaires sanguins : la testostérone qu’elles sécrètent passe dans le sang, qui la transporte dans tout l’organisme.' },
          { text: 'Montre que le testicule est un organe amphicrine, en associant chaque fonction à une structure de la coupe.', answer: 'Fonction exocrine : les tubes séminifères produisent les spermatozoïdes, libérés dans la lumière des tubes puis évacués par les voies génitales vers l’extérieur. Fonction endocrine : les cellules de Leydig du tissu interstitiel sécrètent la testostérone dans le sang. Un organe qui assure ces deux fonctions est amphicrine.' },
          { text: 'Dans la paroi d’un tube, les cellules germinales sont disposées de la périphérie vers la lumière. Que suggère cette disposition ?', answer: 'Elle suggère que les cellules se forment à la périphérie (spermatogonies) puis se transforment progressivement en migrant vers la lumière (spermatocytes, spermatides) jusqu’à donner des spermatozoïdes libérés au centre. La disposition reflète la chronologie de la spermatogenèse.' },
        ],
      },
      {
        title: 'La testostérone, hormone de la spermatogenèse et de la puberté',
        duration: '30 min',
        skills: ['Exploiter des résultats', 'Raisonner', 'Argumenter'],
        context: 'On cherche à démontrer le rôle de la testostérone à partir d’expériences sur l’animal et d’un cas clinique.',
        documents: [
          {
            label: 'Document 5',
            title: 'Expérience sur des rats mâles adultes',
            text: 'Résultats observés trois semaines après le début de l’expérience (description qualitative).',
            blocks: [
              {
                type: 'table',
                head: ['Lot', 'Spermatozoïdes', 'Prostate et vésicules séminales', 'Comportement sexuel'],
                rows: [
                  ['Lot 1 : rats témoins (opération sans ablation)', 'Présents', 'Normales', 'Normal'],
                  ['Lot 2 : rats castrés (ablation des testicules)', 'Absents', 'Atrophiées', 'Disparu'],
                  ['Lot 3 : rats castrés recevant chaque jour une injection de testostérone', 'Absents', 'Normales', 'Normal'],
                ],
              },
            ],
          },
          {
            label: 'Document 6',
            title: 'Concentration de testostérone dans le sang selon l’âge',
            text: 'Ordres de grandeur chez le garçon et l’homme.',
            blocks: [
              {
                type: 'table',
                head: ['Période', 'Testostérone plasmatique'],
                rows: [
                  ['Enfance (2 à 10 ans)', 'Moins de 0,3 ng/mL'],
                  ['Puberté (11 à 16 ans)', 'Augmentation rapide'],
                  ['Adulte', 'Environ 3 à 9 ng/mL'],
                ],
              },
            ],
          },
          { label: 'Document 7', title: 'Un cas clinique', text: ['Lucas, 16 ans, consulte car il n’a pas de pilosité au visage, sa voix n’a pas mué et sa musculature est peu développée. Ses testicules sont petits ; sa concentration de testostérone est très inférieure à celle des garçons de son âge.', 'On lui prescrit des injections de testostérone. En quelques mois, sa pilosité se développe, sa voix devient plus grave et sa masse musculaire augmente.'] },
        ],
        questions: [
          { text: 'Compare les lots 1 et 2 du document 5. Que peux-tu en conclure sur le rôle des testicules ?', answer: 'Sans testicules (lot 2), les spermatozoïdes sont absents, la prostate et les vésicules séminales s’atrophient et le comportement sexuel disparaît. Les testicules sont donc nécessaires à la production des spermatozoïdes, au maintien des glandes annexes et au comportement sexuel.' },
          { text: 'Compare les lots 2 et 3. Quelle substance produite par les testicules est responsable de leur action sur les glandes annexes ? Pourquoi les spermatozoïdes restent-ils absents dans le lot 3 ?', hint: 'Qu’est-ce qui est rétabli, et qu’est-ce qui manque toujours ?', answer: 'Les injections de testostérone suffisent à rétablir des glandes annexes normales et le comportement sexuel : la testostérone est donc la substance testiculaire responsable de ces effets. Les spermatozoïdes restent absents car ils sont produits par les tubes séminifères des testicules, qui ont été retirés.' },
          { text: 'Relie le document 6 à l’apparition des caractères sexuels secondaires et au début de la production de spermatozoïdes.', answer: 'La testostérone est presque absente pendant l’enfance : pas de caractères sexuels secondaires ni de spermatozoïdes. À la puberté, sa concentration augmente fortement : les caractères sexuels secondaires apparaissent (pilosité, mue, muscles) et la spermatogenèse démarre. Chez l’adulte, la concentration reste élevée et stable, ce qui maintient ces caractères et une production continue.' },
          { text: 'Explique les symptômes de Lucas et l’effet du traitement (document 7). Distingue caractères sexuels primaires et secondaires.', answer: 'Lucas possède des testicules, des voies génitales et des organes génitaux externes masculins : ses caractères sexuels primaires sont en place depuis la naissance. Mais ses testicules sécrètent trop peu de testostérone : ses caractères sexuels secondaires ne sont pas apparus. Les injections de testostérone agissent sur les cellules cibles (follicules pileux, larynx, muscles) et déclenchent leur apparition, ce qui confirme le rôle de la testostérone.' },
        ],
      },
      {
        title: 'Lire une coupe d’ovaire',
        duration: '20 min',
        skills: ['Observer', 'Ordonner', 'Comparer'],
        context: 'Tu observes une coupe d’ovaire de mammifère à faible grossissement.',
        documents: [
          { label: 'Document 8', title: 'Coupe d’ovaire (×100)', image: IMG.ovaire, caption: 'Coloration hématoxyline-éosine.' },
        ],
        questions: [
          { text: 'Repère sur le document 8 des follicules primordiaux, un follicule secondaire et un follicule cavitaire. Indique pour chacun un critère de reconnaissance.', answer: 'Follicules primordiaux : petits cercles en rangée juste sous la surface, un ovocyte entouré d’une seule couche de cellules aplaties. Follicule secondaire (à gauche) : ovocyte entouré d’une zone pellucide rose et de plusieurs couches de cellules folliculaires, sans cavité. Follicule cavitaire (à droite) : grande cavité claire remplie de liquide, l’ovocyte reposant sur un amas de cellules.' },
          { text: 'Range ces follicules dans l’ordre de leur développement et précise ce que devient le follicule après l’ovulation.', answer: 'Follicule primordial → primaire → secondaire → cavitaire → mûr. Après l’ovulation, le follicule vidé se transforme en corps jaune, qui sécrète progestérone et œstrogènes, puis régresse en corps blanc s’il n’y a pas de grossesse.' },
          { text: 'Justifie que l’ovaire est un organe amphicrine, puis cite deux différences avec le testicule.', answer: 'L’ovaire libère un ovocyte à l’ovulation (fonction exocrine) et sécrète dans le sang des œstrogènes (follicules) et de la progestérone (corps jaune) : fonction endocrine. Différences : son fonctionnement est cyclique alors que le testicule produit en continu ; son stock de follicules est fixé avant la naissance alors que les spermatogonies se renouvellent (on peut aussi citer : un ovocyte par cycle contre des millions de spermatozoïdes par jour).' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un appareil reproducteur comprend des gonades (testicules ou ovaires), des voies génitales et, chez l’homme, des glandes annexes.',
      'La fécondation a lieu dans la trompe utérine ; la nidation a lieu dans l’endomètre de l’utérus.',
      'Testicules et ovaires sont des organes amphicrines : ils libèrent des gamètes (fonction exocrine) et sécrètent des hormones dans le sang (fonction endocrine).',
      'Dans le testicule, les tubes séminifères produisent les spermatozoïdes et les cellules de Leydig du tissu interstitiel sécrètent la testostérone.',
      'La testostérone est indispensable à la spermatogenèse ; son augmentation à la puberté déclenche les caractères sexuels secondaires masculins.',
      'Dans l’ovaire, les follicules se développent et sécrètent des œstrogènes ; après l’ovulation, le corps jaune sécrète progestérone et œstrogènes.',
    ],
    method: {
      title: 'Justifier qu’un organe est amphicrine',
      steps: [
        'Nommer le produit exocrine et la structure qui le fabrique (ex. spermatozoïdes, tubes séminifères).',
        'Préciser où ce produit est libéré : dans une cavité, puis vers l’extérieur par un conduit.',
        'Nommer l’hormone et les cellules endocrines (ex. testostérone, cellules de Leydig).',
        'Préciser que l’hormone est libérée dans le sang et conclure : l’organe est amphicrine.',
      ],
    },
    vocabulary: [
      { term: 'Gonade', definition: 'Organe producteur de gamètes : testicule ou ovaire.' },
      { term: 'Voies génitales', definition: 'Conduits qui transportent les gamètes : épididyme, canal déférent, urètre ; trompes, utérus, vagin.' },
      { term: 'Glandes annexes', definition: 'Vésicules séminales, prostate et glandes de Cowper, dont les sécrétions forment le liquide séminal.' },
      { term: 'Amphicrine', definition: 'Se dit d’un organe à la fois exocrine et endocrine.' },
      { term: 'Tube séminifère', definition: 'Tube du testicule dont la paroi produit les spermatozoïdes.' },
      { term: 'Cellule de Sertoli', definition: 'Cellule de la paroi des tubes séminifères qui nourrit et protège les cellules germinales.' },
      { term: 'Cellule de Leydig', definition: 'Cellule du tissu interstitiel du testicule qui sécrète la testostérone.' },
      { term: 'Testostérone', definition: 'Hormone stéroïde masculinisante sécrétée par les cellules de Leydig.' },
      { term: 'Caractères sexuels secondaires', definition: 'Caractères qui apparaissent à la puberté sous l’effet des hormones sexuelles.' },
      { term: 'Follicule ovarien', definition: 'Ovocyte entouré de cellules folliculaires, qui sécrètent des œstrogènes.' },
      { term: 'Corps jaune', definition: 'Glande endocrine temporaire formée après l’ovulation, qui sécrète la progestérone.' },
      { term: 'Nidation', definition: 'Implantation de l’embryon dans l’endomètre, environ une semaine après la fécondation.' },
      { term: 'Puberté', definition: 'Période de transformation du corps qui rend la reproduction possible, déclenchée par l’augmentation des hormones sexuelles.' },
    ],
    mistakes: [
      { wrong: 'Dire que les spermatozoïdes sont fabriqués dans l’épididyme ou la prostate.', right: 'Ils sont produits dans les tubes séminifères des testicules ; l’épididyme les stocke, les glandes annexes produisent le liquide séminal.' },
      { wrong: 'Placer les cellules de Leydig dans la paroi des tubes séminifères.', right: 'Elles sont dans le tissu interstitiel, entre les tubes, près des capillaires.' },
      { wrong: 'Confondre cellules de Sertoli et cellules de Leydig.', right: 'Sertoli : dans les tubes, soutien des cellules germinales. Leydig : entre les tubes, sécrétion de testostérone.' },
      { wrong: 'Écrire que la fécondation a lieu dans l’utérus.', right: 'Elle a lieu dans la trompe utérine ; l’embryon rejoint ensuite l’utérus pour la nidation.' },
      { wrong: 'Penser que l’ovaire fabrique de nouveaux ovocytes tout au long de la vie.', right: 'Le stock de follicules est constitué avant la naissance et ne se renouvelle pas.' },
    ],
    quiz: [
      { question: 'Les gonades sont :', choices: ['L’utérus et la prostate', 'Les testicules et les ovaires', 'Les trompes et les canaux déférents', 'Les glandes annexes'], answer: 1, explanation: 'Les gonades sont les organes qui produisent les gamètes.' },
      { question: 'Un organe amphicrine :', choices: ['Sécrète uniquement des hormones', 'Possède deux lobes', 'Assure une fonction exocrine et une fonction endocrine', 'Produit deux types de gamètes'], answer: 2, explanation: 'Amphicrine signifie à la fois exocrine (produit libéré par un canal) et endocrine (hormone dans le sang).' },
      { question: 'Les cellules de Leydig sont situées :', choices: ['Dans la lumière des tubes séminifères', 'Dans l’épididyme', 'Dans le tissu interstitiel, entre les tubes', 'Dans la prostate'], answer: 2, explanation: 'Elles forment des amas entre les tubes séminifères, près des capillaires sanguins.' },
      { question: 'La testostérone est sécrétée :', choices: ['Dans la lumière des tubes', 'Dans le sang', 'Dans l’urètre', 'Dans le liquide séminal uniquement'], answer: 1, explanation: 'C’est une hormone : elle est libérée dans le sang, qui la transporte vers ses cellules cibles.' },
      { question: 'La mue de la voix chez le garçon est :', choices: ['Un caractère sexuel primaire', 'Un caractère sexuel secondaire', 'Un effet de la progestérone', 'Présente dès la naissance'], answer: 1, explanation: 'Elle apparaît à la puberté sous l’effet de la testostérone sur le larynx.' },
      { question: 'Un rat castré qui reçoit des injections de testostérone :', choices: ['Retrouve des glandes annexes normales mais ne produit pas de spermatozoïdes', 'Produit à nouveau des spermatozoïdes', 'Reste avec des glandes annexes atrophiées', 'Ne présente aucun changement'], answer: 0, explanation: 'La testostérone rétablit les glandes annexes ; sans testicules, il n’y a pas de tubes séminifères, donc pas de spermatozoïdes.' },
      { question: 'Après l’ovulation, le follicule vidé devient :', choices: ['Un follicule primordial', 'Le corps jaune', 'L’endomètre', 'Un ovocyte'], answer: 1, explanation: 'Le corps jaune sécrète de la progestérone et des œstrogènes.' },
      { question: 'La nidation a lieu :', choices: ['Dans l’ovaire', 'Dans la trompe utérine', 'Dans l’endomètre de l’utérus', 'Dans le col de l’utérus'], answer: 2, explanation: 'L’embryon s’implante dans la muqueuse utérine, environ une semaine après la fécondation.' },
    ],
    exercises: [
      {
        title: 'Organes et fonctions',
        statement: 'Associe chaque organe à sa fonction : vésicule séminale, épididyme, pavillon, endomètre, cellules de Leydig, corps jaune. Fonctions : capter l’ovocyte ; sécréter la testostérone ; produire un liquide riche en fructose ; accueillir l’embryon ; stocker les spermatozoïdes ; sécréter la progestérone.',
        answer: ['Vésicule séminale : produire un liquide riche en fructose.', 'Épididyme : stocker les spermatozoïdes.', 'Pavillon : capter l’ovocyte.', 'Endomètre : accueillir l’embryon (nidation).', 'Cellules de Leydig : sécréter la testostérone.', 'Corps jaune : sécréter la progestérone.'],
      },
      {
        title: 'Une expérience à interpréter',
        statement: 'Chez un jeune animal castré, on greffe un fragment de testicule sous la peau du dos. Ses caractères sexuels secondaires se développent normalement. Que démontre cette expérience ? Quelle cellule du greffon est responsable du résultat ?',
        answer: 'Le testicule agit même s’il n’est plus relié aux voies génitales ni aux nerfs d’origine : il agit par l’intermédiaire du sang, en sécrétant une hormone. Les cellules de Leydig du greffon sécrètent la testostérone, qui gagne le sang et agit sur les cellules cibles.',
      },
      {
        title: 'Calculer une durée de vie reproductive',
        statement: 'Une femme a ses premières règles à 13 ans et sa ménopause à 51 ans. En supposant des cycles de 28 jours sans grossesse, combien d’ovulations a-t-elle eues environ ? Compare au nombre de follicules présents à la naissance et conclus.',
        answer: 'Durée : 51 − 13 = 38 ans, soit 38 × 365 ≈ 13 870 jours. Nombre de cycles ≈ 13 870 ÷ 28 ≈ 495, soit environ 500 ovulations. C’est très peu par rapport aux 1 à 2 millions de follicules présents à la naissance : la très grande majorité des follicules dégénère sans jamais arriver à l’ovulation.',
      },
    ],
    selfCheck: [
      'Je sais dessiner et légender les appareils reproducteurs masculin et féminin.',
      'Je sais associer chaque organe à sa fonction (gamètes, transport, sécrétions, fécondation, nidation).',
      'Je sais repérer tubes séminifères, cellules de Leydig et cellules de Sertoli sur une coupe de testicule.',
      'Je sais reconnaître les stades des follicules sur une coupe d’ovaire.',
      'Je sais justifier que les gonades sont des organes amphicrines.',
      'Je sais expliquer le rôle de la testostérone dans la spermatogenèse et à la puberté, à partir d’expériences.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Testicule — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Testicule' },
      { title: 'Cellule de Leydig — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cellule_de_Leydig' },
      { title: 'Testostérone — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Testost%C3%A9rone' },
      { title: 'Follicule ovarien — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Follicule_ovarien' },
    ],
  },
};

export default lesson;
