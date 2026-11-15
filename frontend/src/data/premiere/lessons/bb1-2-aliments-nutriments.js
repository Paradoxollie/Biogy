import { img } from '../media';
import appareilDigestif from '../../../assets/courses/premiere/bb1-2-aliments-nutriments/appareil-digestif.webp';
import paroiTube from '../../../assets/courses/premiere/bb1-2-aliments-nutriments/paroi-tube.webp';
import muqueuseGastrique from '../../../assets/courses/premiere/bb1-2-aliments-nutriments/muqueuse-gastrique.webp';
import digestionInVitro from '../../../assets/courses/premiere/bb1-2-aliments-nutriments/digestion-in-vitro.webp';

const IMG = {
  appareil: img(appareilDigestif, 'Schéma annoté de l’appareil digestif humain vu de face : bouche, glandes salivaires, œsophage, foie, vésicule biliaire, estomac, pancréas, duodénum, intestin grêle, côlon, rectum, anus. Les glandes annexes sont colorées en vert.', 'schema', 933, 1400),
  paroi: img(paroiTube, 'Schéma en perspective d’un segment d’intestin grêle ouvert montrant les couches de sa paroi : lumière, villosités, muqueuse, sous-muqueuse, muscle circulaire, muscle longitudinal, séreuse.', 'schema', 1400, 933),
  muqueuse: img(muqueuseGastrique, 'Microphotographie d’une coupe de muqueuse gastrique colorée à l’hématoxyline-éosine : cellules à mucus claires en surface, glandes tubulaires avec de grosses cellules roses et, à leur base, des cellules violettes.', 'micro', 1536, 1024),
  inVitro: img(digestionInVitro, 'Tubes contenant de l’empois d’amidon et une enzyme dans un bécher d’eau tiède avec un thermomètre ; à côté, une plaque à godets où l’eau iodée passe du bleu-noir au jaune.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bb1-2-aliments-nutriments',
  duration: 'Environ 5 séances (cours, travaux pratiques de digestion in vitro, observation microscopique)',
  hook: {
    image: IMG.inVitro,
    question: 'Ta tartine de pain met un à trois jours à traverser un tube long de plusieurs mètres, mais seul le glucose qu’elle contenait passera dans ton sang. Comment le pain devient-il glucose ?',
    text: 'Les aliments sont formés de grosses molécules qui ne peuvent pas traverser la paroi de l’intestin. Le tube digestif et ses glandes les découpent en petites molécules : les nutriments. Dans ce chapitre, tu découvres les organes de la digestion, l’organisation de leur paroi, les trois façons de digérer (mécanique, chimique, enzymatique) et le rôle étonnant des milliards de bactéries qui vivent dans ton intestin.',
  },
  objectives: [
    'Dessiner et légender l’appareil digestif en distinguant le tube digestif, les glandes annexes et la lumière.',
    'Relier l’organisation de la paroi d’un organe digestif (estomac, intestin) à ses fonctions : sécrétion, contraction musculaire lisse, péristaltisme.',
    'Présenter la digestion comme une simplification moléculaire réalisée par des réactions d’hydrolyse.',
    'Distinguer digestions mécanique, chimique et enzymatique ; expliquer l’influence de la température et du pH sur une enzyme, le rôle de l’acidité gastrique et celui de la bile.',
    'Montrer que la digestion dépend aussi du métabolisme du microbiote intestinal.',
    'Construire un schéma fonctionnel du devenir des biomolécules dans le tube digestif.',
  ],
  prerequisites: [
    'Cycle 4 : organisation de l’appareil digestif, digestion mécanique et chimique, surface d’échange, microbiote.',
    'Chapitre 1.1 : constituants des aliments (glucides, lipides, protides) et tests d’identification.',
    'Module transversal A : oses, acides aminés et liaison peptidique, triglycérides ; structure tridimensionnelle des protéines.',
  ],
  program: [
    'Représenter par un dessin les organes du tube digestif et les glandes annexes : exocrine, lumière (milieu extérieur), annexe / accessoire.',
    'Établir un lien entre la fonction d’un organe et son organisation histologique : contraction musculaire lisse, péristaltisme, différenciation cellulaire.',
    'Présenter la digestion comme une simplification moléculaire : réaction d’hydrolyse, aliment / nutriment, aliments non digestibles.',
    'Distinguer les mécanismes des digestions enzymatique, chimique et mécanique : enzyme, température optimale, pH optimal, péristaltisme, émulsification.',
    'Montrer que la digestion est dépendante du métabolisme microbien : microbiote, écosystème, symbiose.',
    'Construire un schéma fonctionnel présentant le devenir des biomolécules dans le tube digestif : bol alimentaire, chyme / chyle, hydrolyse, absorption.',
  ],

  course: {
    parts: [
      {
        title: 'L’appareil digestif : un tube et des glandes annexes',
        intro: 'De la bouche à l’anus, les aliments parcourent un long tube ouvert aux deux extrémités, aidé par des glandes situées à côté de lui.',
        blocks: [
          { type: 'p', text: 'L’**appareil digestif** comprend deux ensembles : le **tube digestif**, long de 5 à 8 m chez l’adulte (il est plus court chez le vivant, où ses muscles sont contractés, que relâché), que traversent les aliments, et les **glandes annexes**, qui fabriquent des sucs digestifs et les déversent dans le tube par des canaux.' },
          { type: 'figure', image: IMG.appareil, caption: 'L’appareil digestif humain. Le tube digestif (en gris) est continu de la bouche à l’anus ; les glandes annexes (en vert) lui sont reliées par des canaux. Le côlon et le rectum forment le gros intestin.', size: 'normal' },
          {
            type: 'table',
            caption: 'Les organes de l’appareil digestif et leur rôle',
            head: ['Organe', 'Caractéristiques', 'Rôle principal'],
            rows: [
              ['Bouche', 'Dents, langue, salive', 'Mastication, insalivation, début de digestion de l’amidon ; formation et déglutition du **bol alimentaire**.'],
              ['Œsophage', 'Tube musculaire d’environ 25 cm', 'Transport du bol alimentaire vers l’estomac par péristaltisme, en quelques secondes.'],
              ['Estomac', 'Poche d’environ 1,5 L à paroi très musclée', 'Stockage, brassage, acidification, début de digestion des protéines ; formation du **chyme** (2 à 4 heures).'],
              ['Intestin grêle', 'Environ 3 m chez le vivant (6 m relâché) : duodénum, jéjunum, iléon', 'Fin de la digestion grâce aux sucs pancréatique et intestinal et à la bile ; **absorption** des nutriments.'],
              ['Gros intestin', 'Environ 1,5 m : cæcum et appendice, côlon, rectum', 'Absorption de l’eau et des ions ; fermentation des fibres par le microbiote ; formation et stockage des selles (1 à 3 jours).'],
              ['Glandes salivaires', 'Trois paires (parotides, sous-mandibulaires, sublinguales)', 'Sécrètent la salive (environ 1 L par jour) : eau, mucus, amylase salivaire.'],
              ['Foie', 'Plus gros organe interne (environ 1,5 kg)', 'Produit la **bile** (0,5 à 1 L par jour) ; joue aussi un rôle majeur dans le devenir des nutriments (chapitre 1.3).'],
              ['Vésicule biliaire', 'Petit réservoir sous le foie', 'Stocke et concentre la bile, puis la libère dans le duodénum pendant les repas.'],
              ['Pancréas', 'Glande située derrière l’estomac', 'Produit le **suc pancréatique** (environ 1,5 L par jour : enzymes et ions bicarbonate) déversé dans le duodénum.'],
            ],
          },
          { type: 'definition', term: 'Lumière', text: 'espace intérieur d’un organe creux. La lumière du tube digestif communique avec l’extérieur par la bouche et par l’anus : elle appartient au **milieu extérieur**. Un aliment qui se trouve dans l’estomac n’est donc pas encore « entré » dans l’organisme : il n’y pénètre qu’après l’**absorption**, quand les nutriments traversent la paroi intestinale.' },
          { type: 'definition', term: 'Glande exocrine', text: 'glande qui déverse sa sécrétion, par un canal, dans une cavité ouverte sur l’extérieur (comme la lumière du tube digestif) ou à la surface du corps. Exemples : glandes salivaires, foie (bile), pancréas (suc pancréatique), glandes de la paroi de l’estomac. Elle s’oppose à la glande **endocrine**, qui libère ses produits (des hormones) dans le sang (chapitre 1.5).' },
          { type: 'definition', term: 'Glande annexe', text: 'glande située **en dehors** de la paroi du tube digestif et reliée à lui par un canal : glandes salivaires, foie, pancréas.' },
          { type: 'warning', title: 'Annexe ne veut pas dire accessoire', text: 'Le mot « annexe » décrit la **position** de la glande (à côté du tube), pas son importance. Ces glandes sont indispensables : chez les personnes atteintes de mucoviscidose, les canaux du pancréas se bouchent et les enzymes pancréatiques n’arrivent plus dans l’intestin ; les lipides et les protéines sont alors très mal digérés, et ces patients doivent avaler des enzymes en gélules à chaque repas.' },
          {
            type: 'steps',
            title: 'Réussir le dessin de l’appareil digestif',
            items: [
              'Au crayon, tracer d’abord le contour du tronc, puis le tube digestif **continu**, de la bouche à l’anus, sans interruption.',
              'Respecter les positions : le foie est à **droite du sujet** (donc à gauche de la feuille), l’estomac à gauche du sujet, sous le diaphragme ; l’intestin grêle occupe le centre de l’abdomen, encadré par le côlon.',
              'Placer les glandes annexes **hors** du tube et dessiner leurs canaux jusqu’à leur point d’abouchement (bouche, duodénum).',
              'Légender horizontalement, avec des traits de rappel tracés à la règle qui ne se croisent pas.',
              'Ajouter un titre complet : « Appareil digestif humain, vue de face ».',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Appareil digestif = **tube digestif** (bouche, œsophage, estomac, intestin grêle, gros intestin, anus) + **glandes annexes** (glandes salivaires, foie, pancréas).',
              'La **lumière** du tube digestif fait partie du milieu extérieur ; les nutriments entrent dans l’organisme lors de l’absorption.',
              'Les glandes annexes sont **exocrines** : leurs sécrétions arrivent dans la lumière par des canaux.',
              'Annexe (position) ≠ accessoire (sans importance).',
            ],
          },
        ],
      },

      {
        title: 'La paroi du tube digestif : une organisation au service de la fonction',
        intro: 'Au microscope, la paroi du tube digestif montre partout la même organisation en couches, mais chaque organe la spécialise selon sa fonction.',
        blocks: [
          { type: 'p', text: 'De l’œsophage au rectum, la paroi du tube digestif est formée de **quatre couches** (ou tuniques) superposées, de la lumière vers l’extérieur.' },
          { type: 'figure', image: IMG.paroi, caption: 'Organisation de la paroi de l’intestin grêle. La muqueuse (en vert) forme des villosités ; la musculeuse comprend une couche circulaire interne et une couche longitudinale externe.', size: 'wide' },
          {
            type: 'table',
            caption: 'Les couches de la paroi digestive',
            head: ['Couche', 'Composition', 'Rôle'],
            rows: [
              ['Muqueuse', 'Un **épithélium** (couche de cellules jointives au contact de la lumière) reposant sur un tissu conjonctif, le chorion', 'Sécrétion (mucus, enzymes, acide), absorption, protection.'],
              ['Sous-muqueuse', 'Tissu conjonctif riche en vaisseaux sanguins et lymphatiques et en nerfs', 'Nutrition de la paroi, transport des nutriments absorbés, commande nerveuse.'],
              ['Musculeuse', '**Muscle lisse** : une couche circulaire interne et une couche longitudinale externe (une troisième couche oblique dans l’estomac)', 'Brassage du contenu et progression par **péristaltisme**.'],
              ['Séreuse', 'Fine membrane (péritoine)', 'Enveloppe et protège l’organe ; permet son glissement contre les organes voisins.'],
            ],
          },
          { type: 'definition', term: 'Muscle lisse', text: 'tissu musculaire de la paroi des organes creux (tube digestif, vaisseaux sanguins, vessie), formé de cellules en fuseau. Ses contractions sont **involontaires**, lentes et prolongées ; elles sont commandées par le système nerveux autonome, sans intervention de la volonté. Il s’oppose au muscle squelettique strié, dont la contraction est volontaire et rapide.' },
          { type: 'definition', term: 'Péristaltisme', text: 'ondes de contraction des muscles lisses qui se propagent le long du tube digestif : la couche circulaire se contracte juste **en arrière** du contenu et le pousse, tandis que le segment situé en avant se relâche. Le contenu progresse ainsi toujours dans le même sens, de la bouche vers l’anus.' },
          { type: 'example', title: 'avaler la tête en bas', text: 'Un astronaute en apesanteur, ou une personne suspendue la tête en bas, peut avaler sans difficulté : ce n’est pas la gravité mais le péristaltisme de l’œsophage qui fait descendre le bol alimentaire jusqu’à l’estomac.' },
          { type: 'definition', term: 'Différenciation cellulaire', text: 'processus par lequel une cellule non spécialisée acquiert une forme et une fonction particulières, en exprimant certains de ses gènes. Dans la muqueuse digestive, des **cellules souches** se divisent sans cesse et donnent des cellules qui se différencient : l’épithélium de l’intestin est ainsi entièrement renouvelé en quelques jours (4 à 5 jours environ).' },
          { type: 'figure', image: IMG.muqueuse, caption: 'Coupe de muqueuse gastrique (hématoxyline-éosine, ×100). En haut, les cellules à mucus claires bordent la lumière ; dans les glandes, les grosses cellules roses sont les cellules pariétales (acide chlorhydrique) et, à la base, les cellules violettes sont les cellules principales (pepsinogène).', size: 'wide' },
          {
            type: 'compare',
            title: 'Deux organes, deux spécialisations',
            columns: [
              { title: 'Estomac', subtitle: 'organe de brassage et de digestion', items: ['Muqueuse creusée de **glandes gastriques** tubulaires.', 'Trois types de cellules différenciées : cellules à **mucus** (protection), cellules **pariétales** (acide chlorhydrique), cellules **principales** (pepsinogène).', 'Musculeuse très épaisse à trois couches : **brassage** énergique du contenu.', 'Absorbe très peu de nutriments.'] },
              { title: 'Intestin grêle', subtitle: 'organe de digestion finale et d’absorption', items: ['Muqueuse plissée, couverte de **villosités** et de microvillosités : immense surface d’échange.', 'Cellules différenciées : **entérocytes** (absorption, enzymes de la bordure en brosse), cellules caliciformes (mucus).', 'Musculeuse à deux couches : **péristaltisme** et mouvements de mélange.', 'Réseau très dense de capillaires sanguins et lymphatiques (chapitre 1.3).'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'La paroi digestive comprend quatre couches : **muqueuse, sous-muqueuse, musculeuse, séreuse**.',
              'La musculeuse est formée de **muscle lisse** (contraction involontaire) ; ses ondes de contraction assurent le **péristaltisme**.',
              'Les cellules de la muqueuse sont **différenciées** selon la fonction de l’organe : sécrétion d’acide et d’enzymes dans l’estomac, absorption dans l’intestin.',
            ],
          },
        ],
      },

      {
        title: 'La digestion, une simplification moléculaire',
        intro: 'Digérer, c’est découper de grosses molécules en petites molécules capables de traverser la paroi de l’intestin.',
        blocks: [
          { type: 'p', text: 'Les aliments contiennent des **macromolécules** : l’amidon est formé de milliers de glucoses, une protéine de centaines d’acides aminés, un triglycéride associe trois acides gras à un glycérol. Ces molécules sont trop grosses pour traverser la paroi intestinale. La digestion les transforme en molécules simples : les **nutriments**.' },
          { type: 'definition', term: 'Nutriment', text: 'molécule ou ion assez petit pour être **absorbé** à travers la paroi de l’intestin, puis utilisé par les cellules : glucose, fructose, galactose, acides aminés, acides gras, glycérol, monoglycérides, eau, ions minéraux, vitamines.' },
          {
            type: 'compare',
            title: 'Aliment ou nutriment ?',
            columns: [
              { title: 'Aliment', items: ['Ce que l’on mange (pain, viande, lait).', 'Mélange de nombreuses molécules, souvent des macromolécules.', 'Reste dans la lumière du tube digestif (milieu extérieur).'] },
              { title: 'Nutriment', items: ['Ce que l’on absorbe (glucose, acides aminés…).', 'Petite molécule ou ion, produit de la digestion (ou présent tel quel : eau, ions, vitamines).', 'Passe dans le milieu intérieur (sang, lymphe).'] },
            ],
          },
          { type: 'definition', term: 'Hydrolyse', text: 'réaction chimique qui coupe une liaison covalente entre deux unités d’une molécule grâce à une molécule d’**eau**. Chaque liaison coupée consomme une molécule d’eau : un groupement –H se fixe sur une unité et un groupement –OH sur l’autre.' },
          {
            type: 'formula',
            title: 'Exemple : hydrolyse du maltose',
            expression: 'maltose + H~2~O → glucose + glucose',
            legend: [
              { symbol: 'maltose', meaning: 'diholoside formé de deux glucoses unis par une liaison osidique' },
              { symbol: 'H~2~O', meaning: 'une molécule d’eau consommée par liaison coupée' },
            ],
          },
          {
            type: 'table',
            caption: 'Les trois grandes hydrolyses de la digestion',
            head: ['Biomolécule alimentaire', 'Liaison hydrolysée', 'Nutriments obtenus'],
            rows: [
              ['Amidon (polyoside)', 'Liaisons **osidiques** entre glucoses', 'Glucose (en passant par le maltose)'],
              ['Saccharose, lactose (diholosides)', 'Liaison osidique', 'Glucose + fructose ; glucose + galactose'],
              ['Protéines', 'Liaisons **peptidiques** entre acides aminés', 'Acides aminés (et quelques dipeptides et tripeptides)'],
              ['Triglycérides', 'Liaisons **ester** entre glycérol et acides gras', 'Acides gras et monoglycérides (un peu de glycérol)'],
            ],
          },
          { type: 'definition', term: 'Aliments non digestibles', text: 'constituants que nos enzymes ne savent pas hydrolyser : ce sont les **fibres alimentaires**, comme la **cellulose** des parois des cellules végétales. La cellulose est faite de glucoses, comme l’amidon, mais reliés par des liaisons différentes que nous ne savons pas couper. Les fibres arrivent intactes dans le gros intestin, où une partie est fermentée par les bactéries du microbiote ; le reste est éliminé dans les selles.' },
          { type: 'note', title: 'Expériences historiques', text: ['En 1752, René-Antoine Ferchault de Réaumur fait avaler à une buse de petits tubes métalliques percés de trous, contenant de la viande. Les tubes protègent la viande de tout broyage ; pourtant, quand l’oiseau les régurgite, la viande est en partie dissoute : l’estomac digère **chimiquement**.', 'Quelques années plus tard, Lazzaro Spallanzani recueille du suc gastrique et montre qu’il digère la viande **in vitro**, dans un tube maintenu à la température du corps : la digestion peut se faire hors de l’organisme, ce qui ouvre la voie à la découverte des enzymes.'] },
          {
            type: 'retenir',
            items: [
              'La digestion transforme des **macromolécules** (amidon, protéines, triglycérides) en **nutriments** absorbables.',
              'Elle repose sur des **hydrolyses** : chaque liaison coupée consomme une molécule d’eau.',
              'Les fibres (cellulose) ne sont pas digérées par nos enzymes : ce sont des aliments non digestibles.',
            ],
          },
        ],
      },

      {
        title: 'Trois mécanismes : digestion mécanique, chimique et enzymatique',
        intro: 'Broyer, acidifier, émulsionner, hydrolyser : la digestion combine des actions de natures différentes, qui se complètent.',
        blocks: [
          {
            type: 'compare',
            columns: [
              { title: 'Digestion mécanique', subtitle: 'fragmenter et mélanger', items: ['Mastication par les dents, brassage par l’estomac, péristaltisme et mouvements de mélange de l’intestin.', 'Ne modifie pas les molécules.', 'Augmente la **surface de contact** entre les aliments et les sucs digestifs, et fait progresser le contenu.'] },
              { title: 'Digestion chimique', subtitle: 'sans enzyme', items: ['**Acide chlorhydrique** de l’estomac : dénature les protéines, active la pepsine, tue de nombreux microbes.', '**Sels biliaires** : émulsionnent les lipides.', 'Prépare le travail des enzymes.'] },
              { title: 'Digestion enzymatique', subtitle: 'hydrolyser', items: ['**Hydrolyses** catalysées par des enzymes digestives.', 'Seul mécanisme qui coupe réellement les macromolécules en nutriments.', 'Dépend de la température et du pH.'] },
            ],
          },
          { type: 'definition', term: 'Enzyme', text: 'protéine qui **catalyse** (accélère) une réaction chimique précise, sans être modifiée à la fin de la réaction : elle peut donc agir en très petite quantité. Une enzyme est **spécifique** : elle ne reconnaît qu’un substrat (ou une famille de substrats) et ne catalyse qu’un type de réaction. Exemple : l’amylase hydrolyse l’amidon, mais pas les protéines.' },
          { type: 'p', text: 'Le substrat se fixe dans une petite région de l’enzyme, le **site actif**, dont la forme dépend de la structure tridimensionnelle de la protéine. Tout ce qui modifie cette structure modifie donc l’activité de l’enzyme.' },
          { type: 'definition', term: 'Température optimale', text: 'température à laquelle l’activité d’une enzyme est maximale : environ **37 °C** pour les enzymes humaines. À basse température (0 à 4 °C), l’activité est très faible, mais elle reprend si l’on réchauffe : l’effet est **réversible**. Au-delà de 45 à 50 °C environ, la protéine est **dénaturée** (sa structure tridimensionnelle est détruite) : l’activité disparaît de façon **irréversible**.' },
          { type: 'definition', term: 'pH optimal', text: 'pH auquel l’activité d’une enzyme est maximale. Il est adapté au milieu où l’enzyme agit : environ 2 pour la pepsine de l’estomac, environ 7 pour l’amylase salivaire, 7 à 8 pour les enzymes pancréatiques. Loin de ce pH, l’activité diminue, puis la protéine se dénature.' },
          {
            type: 'table',
            caption: 'Les principales enzymes digestives',
            head: ['Enzyme', 'Origine et lieu d’action', 'Réaction catalysée', 'pH optimal'],
            rows: [
              ['Amylase salivaire', 'Glandes salivaires → bouche', 'Amidon → maltose (et fragments d’amidon)', 'Environ 7'],
              ['Pepsine', 'Cellules principales de l’estomac (sous forme inactive, le pepsinogène) → estomac', 'Protéines → polypeptides', 'Environ 2'],
              ['Amylase pancréatique', 'Pancréas → intestin grêle', 'Amidon → maltose', '7 à 8'],
              ['Trypsine, chymotrypsine', 'Pancréas → intestin grêle', 'Polypeptides → peptides courts', 'Environ 8'],
              ['Lipase pancréatique', 'Pancréas → intestin grêle', 'Triglycérides émulsionnés → acides gras + monoglycérides', 'Environ 8'],
              ['Maltase, saccharase, lactase', 'Membrane des entérocytes (bordure en brosse)', 'Maltose → 2 glucoses ; saccharose → glucose + fructose ; lactose → glucose + galactose', 'Environ 7'],
              ['Peptidases', 'Membrane des entérocytes', 'Peptides courts → acides aminés', '7 à 8'],
            ],
          },
          { type: 'p', text: '**L’acidification de la lumière gastrique.** Les cellules pariétales des glandes gastriques possèdent, dans leur membrane du côté de la lumière, une **pompe à protons** qui fait sortir des ions H^+^ vers la lumière, contre leur gradient de concentration, en consommant de l’énergie (ATP) ; des ions Cl^-^ les accompagnent. Le suc gastrique contient ainsi de l’acide chlorhydrique et son pH atteint 1,5 à 2. Cette acidité dénature les protéines alimentaires (qui deviennent plus faciles à couper), transforme le pepsinogène inactif en **pepsine** active et détruit la plupart des microbes avalés. La muqueuse se protège de sa propre acidité grâce à une épaisse couche de **mucus** riche en ions bicarbonate.' },
          { type: 'note', title: 'Santé', text: 'Les médicaments appelés « inhibiteurs de la pompe à protons » (comme l’oméprazole) bloquent cette pompe et réduisent l’acidité : ils traitent le reflux gastro-œsophagien et les ulcères. Beaucoup d’ulcères sont dus à une bactérie, _Helicobacter pylori_, qui résiste à l’acidité : sa découverte a valu le prix Nobel 2005 à Barry Marshall et Robin Warren.' },
          { type: 'p', text: '**La bile et l’émulsification des lipides.** La bile est fabriquée par les cellules du foie, stockée dans la vésicule biliaire et déversée dans le duodénum par le canal cholédoque. Elle **ne contient aucune enzyme**. Ses **sels biliaires** sont des molécules amphiphiles : une partie hydrophobe se place dans la goutte de lipides, une partie hydrophile reste au contact de l’eau. Ils fragmentent les grosses gouttes de graisse en fines gouttelettes stables : c’est l’**émulsification**.' },
          { type: 'definition', term: 'Émulsification', text: 'dispersion des lipides en très fines gouttelettes dans un milieu aqueux. Elle multiplie la surface de contact entre les lipides et la lipase, enzyme soluble dans l’eau qui n’agit qu’à la surface des gouttes : la digestion des triglycérides est beaucoup plus rapide.' },
          { type: 'example', title: 'calcul de surface', text: 'Une goutte d’huile de 1 mm de diamètre fragmentée en gouttelettes de 1 µm donne 1 000 × 1 000 × 1 000 = 10^9^ gouttelettes. Le volume ne change pas, mais la surface totale est multipliée par **1 000** : la lipase a mille fois plus de surface sur laquelle agir.' },
          { type: 'p', text: 'Enfin, les ions **bicarbonate** du suc pancréatique et de la bile neutralisent l’acidité du chyme qui arrive de l’estomac : le pH de l’intestin grêle remonte vers 7 à 8, le pH optimal des enzymes pancréatiques.' },
          {
            type: 'retenir',
            items: [
              'Digestion **mécanique** : fragmenter, brasser, propulser (dents, muscles lisses) ; digestion **chimique** : acide chlorhydrique, sels biliaires ; digestion **enzymatique** : hydrolyses catalysées par des enzymes.',
              'Une enzyme est une protéine catalytique et spécifique, active à une **température optimale** (37 °C) et à un **pH optimal** adapté à son milieu.',
              'Les cellules pariétales acidifient la lumière de l’estomac (pompe à protons, pH ≈ 2) : dénaturation des protéines, activation de la pepsine, destruction des microbes.',
              'La bile ne digère pas : elle **émulsionne** les lipides, ce qui accélère l’action de la lipase pancréatique.',
            ],
          },
        ],
      },

      {
        title: 'Le microbiote intestinal, partenaire de la digestion',
        intro: 'Tu n’es jamais seul pour digérer : des dizaines de milliers de milliards de micro-organismes vivent dans ton gros intestin.',
        blocks: [
          { type: 'definition', term: 'Microbiote intestinal', text: 'ensemble des micro-organismes (surtout des bactéries, mais aussi des archées, des levures et des virus) qui vivent dans le tube digestif, principalement dans le côlon. On estime qu’il compte de l’ordre de 10^13^ bactéries, soit à peu près autant que les cellules du corps humain, appartenant à plusieurs centaines d’espèces différentes chez chaque personne.' },
          { type: 'definition', term: 'Écosystème', text: 'ensemble formé par un milieu de vie et les êtres vivants qui l’habitent, avec toutes leurs interactions. Le côlon est un écosystème : un milieu chaud (37 °C), humide, presque dépourvu de dioxygène, riche en résidus alimentaires, où de nombreuses espèces microbiennes coopèrent ou entrent en compétition.' },
          { type: 'definition', term: 'Symbiose', text: 'association durable et à bénéfices réciproques entre deux espèces différentes. L’être humain offre au microbiote un habitat stable et une nourriture régulière (les fibres) ; le microbiote lui rend de nombreux services.' },
          {
            type: 'cards',
            items: [
              { title: 'Digérer les fibres', text: 'Les bactéries fermentent les fibres que nous ne savons pas hydrolyser et produisent des **acides gras à chaîne courte** (acétate, propionate, butyrate), absorbés par le côlon : ils fournissent environ 5 à 10 % de notre énergie et nourrissent les cellules de la paroi du côlon.', tone: 'green' },
              { title: 'Produire des vitamines', text: 'Certaines bactéries synthétisent de la vitamine K et des vitamines du groupe B.', tone: 'yellow' },
              { title: 'Faire barrière', text: 'En occupant la place et en consommant les nutriments, le microbiote empêche l’installation de bactéries pathogènes (effet barrière).', tone: 'blue' },
              { title: 'Éduquer l’immunité', text: 'Le contact avec le microbiote participe à la maturation du système immunitaire de l’intestin.', tone: 'red' },
            ],
          },
          { type: 'warning', text: 'Un traitement antibiotique détruit aussi une partie du microbiote : ce déséquilibre (appelé **dysbiose**) peut provoquer des diarrhées et favoriser l’installation de bactéries pathogènes comme _Clostridioides difficile_. Une alimentation riche en fibres variées entretient au contraire un microbiote diversifié.' },
          { type: 'note', title: 'Biotechnologies', text: 'La plupart des bactéries du microbiote ne poussent pas sur les milieux de culture classiques. On les identifie aujourd’hui en séquençant directement leur ADN extrait des selles (métagénomique). La transplantation de microbiote fécal est déjà utilisée à l’hôpital pour traiter les infections récidivantes à _Clostridioides difficile_.' },
          {
            type: 'retenir',
            items: [
              'Le **microbiote** intestinal est l’ensemble des micro-organismes du tube digestif, surtout dans le côlon.',
              'Il forme avec son milieu un **écosystème** et vit en **symbiose** avec nous.',
              'Il fermente les fibres non digestibles en acides gras à chaîne courte absorbables : la digestion dépend donc aussi du **métabolisme microbien**.',
            ],
          },
        ],
      },

      {
        title: 'Schéma fonctionnel : le devenir des biomolécules dans le tube digestif',
        intro: 'Il est temps de rassembler tout le chapitre : où, comment et en quoi chaque biomolécule est-elle transformée ?',
        blocks: [
          { type: 'definition', term: 'Bol alimentaire', text: 'boule d’aliments mâchés et imprégnés de salive, formée dans la bouche et avalée (déglutition), qui descend dans l’œsophage.' },
          { type: 'definition', term: 'Chyme', text: 'bouillie acide et semi-liquide formée dans l’estomac par le brassage du bol alimentaire avec le suc gastrique ; il passe par petites quantités dans le duodénum.' },
          { type: 'definition', term: 'Chyle', text: 'lymphe d’aspect laiteux, très riche en lipides, qui circule dans les vaisseaux lymphatiques de l’intestin (vaisseaux chylifères) après un repas ; elle transporte les lipides absorbés (chapitre 1.3).' },
          { type: 'warning', title: 'Chyme ou chyle ?', text: 'Le **chyme** est dans la lumière du tube digestif (milieu extérieur) ; le **chyle** est dans les vaisseaux lymphatiques (milieu intérieur), après l’absorption.' },
          {
            type: 'flow',
            title: 'Les étapes de la transformation',
            steps: [
              { title: 'Aliment', text: 'bouche : mastication, salive' },
              { title: 'Bol alimentaire', text: 'œsophage : péristaltisme' },
              { title: 'Chyme', text: 'estomac : brassage, HCl, pepsine' },
              { title: 'Nutriments', text: 'intestin grêle : bile, suc pancréatique, enzymes intestinales' },
              { title: 'Milieu intérieur', text: 'absorption vers le sang et la lymphe' },
            ],
            caption: 'Les résidus non digérés (fibres) passent dans le gros intestin : fermentation par le microbiote, absorption de l’eau, formation des selles.',
          },
          {
            type: 'table',
            caption: 'Devenir des biomolécules dans le tube digestif',
            head: ['Biomolécule', 'Bouche', 'Estomac', 'Intestin grêle', 'Produits absorbés'],
            rows: [
              ['Amidon', 'Amylase salivaire → maltose (début)', 'L’amylase salivaire est inactivée par l’acidité', 'Amylase pancréatique → maltose ; maltase → glucose', 'Glucose'],
              ['Saccharose, lactose', '—', '—', 'Saccharase, lactase', 'Glucose, fructose, galactose'],
              ['Protéines', '—', 'HCl (dénaturation) ; pepsine → polypeptides', 'Trypsine, chymotrypsine → peptides ; peptidases → acides aminés', 'Acides aminés'],
              ['Triglycérides', '—', 'Brassage (début d’émulsion)', 'Bile (émulsification) ; lipase pancréatique → acides gras + monoglycérides', 'Acides gras, monoglycérides'],
              ['Cellulose (fibres)', '—', '—', 'Non hydrolysée', 'Rien ; fermentée en partie dans le côlon'],
            ],
          },
          { type: 'definition', term: 'Absorption', text: 'passage des nutriments de la lumière intestinale vers le milieu intérieur (sang et lymphe), à travers les cellules de la paroi de l’intestin grêle. Elle est étudiée en détail au chapitre 1.3.' },
          { type: 'example', title: 'l’intolérance au lactose', text: 'Chez beaucoup d’adultes, la production de lactase diminue. Le lactose du lait n’est plus hydrolysé dans l’intestin grêle : il arrive intact dans le côlon, où les bactéries le fermentent, ce qui produit des gaz, des ballonnements et parfois des diarrhées. Les yaourts et les fromages affinés, pauvres en lactose, sont souvent mieux tolérés.' },
          {
            type: 'retenir',
            items: [
              'Aliment → bol alimentaire (bouche) → chyme (estomac) → nutriments (intestin grêle) → absorption.',
              'Amidon → glucose ; protéines → acides aminés ; triglycérides → acides gras + monoglycérides : chaque fois par **hydrolyse** enzymatique.',
              'La digestion se termine dans l’intestin grêle, à la surface même des entérocytes (bordure en brosse).',
              'Ne pas confondre chyme (lumière du tube digestif) et chyle (lymphe chargée de lipides).',
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
        title: 'Dessiner et comprendre l’appareil digestif',
        duration: '30 min',
        skills: ['Représenter', 'Raisonner'],
        context: 'Tu dois réaliser dans ton cahier le dessin de l’appareil digestif et expliquer le trajet d’un morceau de pain.',
        documents: [
          { label: 'Document 1', title: 'L’appareil digestif humain', image: IMG.appareil, caption: 'Schéma annoté, vue de face.', size: 'small' },
        ],
        questions: [
          { text: 'Cite, dans l’ordre, les organes traversés par un morceau de pain de la bouche jusqu’à l’anus.', answer: 'Bouche, pharynx, œsophage, estomac, intestin grêle (duodénum, jéjunum, iléon), gros intestin (cæcum, côlon, rectum), anus.' },
          { text: 'Nomme les glandes annexes et indique, pour chacune, la sécrétion produite et l’endroit où elle est déversée.', answer: 'Glandes salivaires : salive, déversée dans la bouche. Foie : bile, stockée dans la vésicule biliaire puis déversée dans le duodénum. Pancréas : suc pancréatique, déversé dans le duodénum.' },
          { text: 'Pourquoi qualifie-t-on ces glandes d’exocrines ?', answer: 'Elles déversent leur sécrétion par un canal dans la lumière du tube digestif, une cavité qui communique avec l’extérieur, et non dans le sang.' },
          { text: 'Un camarade affirme : « Le pain que je viens d’avaler est déjà dans mon corps. » Corrige-le avec le vocabulaire du cours.', hint: 'À quel milieu appartient la lumière du tube digestif ?', answer: 'Le pain se trouve dans la lumière du tube digestif, qui communique avec l’extérieur par la bouche et l’anus : il est encore dans le milieu extérieur. Seuls les nutriments issus de sa digestion entreront dans le milieu intérieur, au moment de l’absorption à travers la paroi de l’intestin grêle.' },
          { text: 'Réalise le dessin légendé de l’appareil digestif en respectant les règles de la partie 1.', hint: 'Le foie est à droite du sujet, donc à gauche de ta feuille.', answer: 'Vérifie : tube continu de la bouche à l’anus ; foie à gauche de la feuille, estomac à droite ; glandes annexes hors du tube, reliées par des canaux ; légendes horizontales à la règle ; titre « Appareil digestif humain, vue de face ».' },
        ],
      },
      {
        title: 'Relier l’histologie de l’estomac à ses fonctions',
        duration: '30 min',
        skills: ['Observer', 'Mettre en relation'],
        context: 'On observe au microscope une coupe de paroi d’estomac pour comprendre comment cet organe brasse et digère les aliments sans se digérer lui-même.',
        documents: [
          { label: 'Document 2', title: 'Coupe de muqueuse gastrique (×100)', image: IMG.muqueuse, caption: 'Coloration à l’hématoxyline-éosine.' },
          { label: 'Document 3', title: 'Les cellules de la muqueuse gastrique', text: ['Cellules à mucus : en surface et à l’entrée des glandes ; elles sécrètent un mucus épais, riche en ions bicarbonate.', 'Cellules pariétales (ou bordantes) : grosses cellules roses, surtout dans la partie haute des glandes ; elles sécrètent l’acide chlorhydrique grâce à une pompe à protons.', 'Cellules principales : cellules violettes, à la base des glandes ; elles sécrètent le pepsinogène, forme inactive de la pepsine, transformée en pepsine par l’acidité.', 'Toutes ces cellules proviennent de cellules souches situées dans le col des glandes.'] },
          { label: 'Document 4', title: 'Organisation de la paroi digestive', image: IMG.paroi, caption: 'Les quatre couches de la paroi.', size: 'normal' },
        ],
        questions: [
          { text: 'Sur le document 2, repère les trois types de cellules décrits dans le document 3 (position et couleur).', answer: 'En haut, bordant la lumière : cellules à mucus, claires. Dans la partie haute et moyenne des glandes : grosses cellules roses, les cellules pariétales. À la base des glandes : cellules violettes, les cellules principales.' },
          { text: 'Ces trois types de cellules possèdent les mêmes gènes. Comment expliquer qu’elles soient si différentes ?', answer: 'Elles proviennent de cellules souches qui se sont différenciées : chaque type cellulaire exprime des gènes différents (gènes de la pompe à protons dans les cellules pariétales, du pepsinogène dans les cellules principales, du mucus dans les cellules à mucus) et acquiert ainsi une forme et une fonction particulières.' },
          { text: 'Explique pourquoi la pepsine est sécrétée sous une forme inactive et comment la muqueuse se protège de l’acide.', hint: 'Que se passerait-il si la pepsine était active dans la cellule qui la fabrique ?', answer: 'Active dans la cellule, la pepsine digérerait les protéines de la cellule elle-même. Sécrétée sous forme de pepsinogène, elle n’est activée que dans la lumière, par l’acide chlorhydrique. La muqueuse est protégée par une épaisse couche de mucus riche en bicarbonate, qui neutralise l’acide au contact de l’épithélium.' },
          { text: 'La musculeuse de l’estomac comporte trois couches de muscle lisse, contre deux dans l’intestin. Relie cette particularité à la fonction de l’estomac.', answer: 'Les trois couches orientées différemment permettent des contractions dans plusieurs directions : l’estomac brasse énergiquement son contenu et le mélange au suc gastrique (digestion mécanique), ce qui forme le chyme.' },
          { text: 'Les contractions de l’estomac sont-elles volontaires ? Justifie avec le type de tissu musculaire.', answer: 'Non : la musculeuse est faite de muscle lisse, dont les contractions sont involontaires, commandées par le système nerveux autonome.' },
        ],
      },
      {
        title: 'Digestion in vitro de l’amidon : influence de la température et du pH',
        duration: '40 min',
        skills: ['Expérimenter', 'Interpréter', 'Conclure'],
        context: 'En TP, on mélange 5 mL d’empois d’amidon à 1 % et 1 mL de solution d’amylase dans des tubes placés dans différentes conditions. Toutes les minutes, une goutte de chaque tube est déposée dans un godet contenant de l’eau iodée. On note le temps au bout duquel l’eau iodée ne bleuit plus (l’amidon a disparu).',
        documents: [
          { label: 'Document 5', title: 'Le montage', image: IMG.inVitro, caption: 'Tubes au bain-marie à 37 °C ; à droite, les godets d’eau iodée passent du bleu-noir au jaune au fil du temps.' },
          {
            label: 'Document 6',
            title: 'Résultats obtenus par la classe',
            blocks: [
              {
                type: 'table',
                caption: 'Série A : influence de la température (pH 7)',
                head: ['Tube', 'Condition', 'Disparition de l’amidon', 'Fehling à chaud à la fin'],
                rows: [
                  ['A1', '0 °C (bain de glace)', 'Plus de 30 min', 'Bleu'],
                  ['A2', '20 °C', '12 min', 'Rouge brique'],
                  ['A3', '37 °C', '4 min', 'Rouge brique'],
                  ['A4', '70 °C', 'Plus de 30 min', 'Bleu'],
                  ['A5', 'Amylase bouillie 5 min, puis 37 °C', 'Plus de 30 min', 'Bleu'],
                  ['A6', 'Amidon + eau, sans amylase, 37 °C', 'Plus de 30 min', 'Bleu'],
                ],
              },
              {
                type: 'table',
                caption: 'Série B : influence du pH (37 °C)',
                head: ['Tube', 'pH', 'Disparition de l’amidon'],
                rows: [
                  ['B1', '2', 'Plus de 30 min'],
                  ['B2', '5', '10 min'],
                  ['B3', '7', '4 min'],
                  ['B4', '9', '14 min'],
                ],
              },
              { type: 'p', text: 'Complément : le tube A1, sorti de la glace et placé 10 min à 37 °C, ne bleuit plus l’eau iodée. Le tube A4, refroidi puis placé 10 min à 37 °C, la bleuit toujours.' },
            ],
          },
        ],
        questions: [
          { text: 'Quel est le rôle du tube A6 ?', answer: 'C’est un témoin sans enzyme : il montre que l’amidon ne disparaît pas tout seul à 37 °C. La disparition de l’amidon dans les autres tubes est donc due à l’amylase.' },
          { text: 'Dans le tube A3, l’amidon disparaît et le test de Fehling devient positif. Que peux-tu en déduire sur la réaction catalysée ?', hint: 'Le test de Fehling met en évidence les sucres réducteurs.', answer: 'L’amidon (non réducteur) est remplacé par un sucre réducteur : le maltose. L’amylase catalyse l’hydrolyse de l’amidon en maltose : c’est une simplification moléculaire.' },
          { text: 'Détermine la température optimale et le pH optimal de cette amylase.', answer: 'Parmi les conditions testées, l’activité est maximale (temps le plus court, 4 min) à 37 °C et à pH 7 : la température optimale est proche de 37 °C et le pH optimal proche de 7.' },
          { text: 'Exploite le complément : compare l’effet du froid et celui d’une forte chaleur sur l’enzyme.', answer: 'À 0 °C, l’enzyme est presque inactive, mais elle retrouve son activité à 37 °C : l’effet du froid est réversible. À 70 °C (et après ébullition, tube A5), l’enzyme ne retrouve pas son activité : la chaleur l’a dénaturée de façon irréversible, sa structure tridimensionnelle et son site actif sont détruits.' },
          { text: 'L’amylase salivaire continue-t-elle à agir quand le bol alimentaire arrive dans l’estomac ? Argumente avec la série B.', answer: 'Non, pas longtemps : dans l’estomac, le pH est d’environ 2 ; la série B montre qu’à pH 2 l’amylase n’agit plus (plus de 30 min). La digestion de l’amidon reprend dans l’intestin grêle, grâce à l’amylase pancréatique, à un pH proche de 7 à 8.' },
          { text: 'Rédige une conclusion de deux ou trois phrases sur cette expérience.', answer: 'L’amylase est une enzyme qui catalyse l’hydrolyse de l’amidon en maltose. Son activité dépend de la température et du pH : elle est maximale vers 37 °C et pH 7, faible et réversible au froid, détruite par la chaleur, nulle en milieu très acide.' },
        ],
      },
      {
        title: 'Le rôle de la bile dans la digestion des lipides',
        duration: '25 min',
        skills: ['Interpréter', 'Raisonner'],
        context: 'On étudie la digestion des triglycérides du lait par la lipase pancréatique. La lipase libère des acides gras qui acidifient le milieu : un indicateur coloré, le rouge de phénol, passe alors du rouge au jaune. Plus le virage est rapide, plus la digestion est rapide.',
        documents: [
          {
            label: 'Document 7',
            title: 'Résultats de TP (37 °C)',
            blocks: [
              {
                type: 'table',
                head: ['Tube', 'Contenu (lait + rouge de phénol +…)', 'Temps de virage au jaune'],
                rows: [
                  ['1', 'Lipase', '12 min'],
                  ['2', 'Lipase + bile', '5 min'],
                  ['3', 'Bile seule', 'Pas de virage après 30 min'],
                  ['4', 'Lipase bouillie + bile', 'Pas de virage après 30 min'],
                ],
              },
            ],
          },
          { label: 'Document 8', title: 'Composition de la bile', text: ['La bile contient de l’eau, des ions bicarbonate, des sels biliaires, du cholestérol et des pigments biliaires (qui colorent les selles). Elle ne contient aucune enzyme.', 'Les sels biliaires sont des molécules amphiphiles : une partie est hydrophobe, l’autre hydrophile.'] },
        ],
        questions: [
          { text: 'Que signifie le virage au jaune du rouge de phénol ?', answer: 'Le milieu s’acidifie, car la lipase hydrolyse les triglycérides en libérant des acides gras : le virage traduit la digestion des lipides.' },
          { text: 'Que montrent les tubes 3 et 4 ?', answer: 'Tube 3 : la bile seule ne digère pas les lipides (elle ne contient pas d’enzyme). Tube 4 : sans lipase active (dénaturée par la chaleur), il n’y a pas de digestion. C’est donc bien la lipase qui hydrolyse les triglycérides.' },
          { text: 'Compare les tubes 1 et 2 et explique le rôle de la bile à l’aide du document 8.', hint: 'Où se placent les parties hydrophobe et hydrophile des sels biliaires ?', answer: 'Avec la bile, la digestion est plus de deux fois plus rapide (5 min contre 12 min). Les sels biliaires, amphiphiles, se placent à la surface des gouttes de graisse (partie hydrophobe vers le lipide, partie hydrophile vers l’eau) et les fragmentent en fines gouttelettes stables : c’est l’émulsification. La surface de contact entre lipides et lipase augmente, donc la digestion est plus rapide.' },
          { text: 'Pourquoi conseille-t-on souvent aux personnes privées de vésicule biliaire d’éviter les repas très gras ?', answer: 'La vésicule biliaire stocke la bile et la libère en grande quantité pendant les repas. Sans elle, la bile s’écoule en continu mais faiblement : lors d’un repas très gras, il n’y a pas assez de bile pour émulsionner tous les lipides, qui sont alors mal digérés (inconfort, diarrhées).' },
        ],
      },
      {
        title: 'Le microbiote intestinal, un partenaire de la digestion',
        duration: '25 min',
        skills: ['Exploiter des résultats scientifiques', 'Argumenter'],
        context: 'Pour étudier le rôle du microbiote, les chercheurs comparent des souris « axéniques », élevées en conditions stériles et donc dépourvues de tout micro-organisme, à des souris « conventionnelles », qui possèdent un microbiote normal.',
        documents: [
          { label: 'Document 9', title: 'Souris avec ou sans microbiote', source: 'D’après Bäckhed et al., PNAS, 2004', text: ['Les souris conventionnelles possèdent environ 42 % de masse grasse de plus que les souris axéniques, alors qu’elles mangent environ 29 % de nourriture en moins.', 'Quand on transfère à des souris axéniques adultes le microbiote intestinal de souris conventionnelles, leur masse grasse augmente d’environ 60 % en deux semaines, bien qu’elles mangent moins.'] },
          { label: 'Document 10', title: 'Fermentation des fibres', text: ['Dans le côlon, les bactéries fermentent les fibres alimentaires (que les enzymes de l’hôte ne peuvent pas hydrolyser) et produisent des acides gras à chaîne courte, absorbés par la paroi du côlon et utilisés comme source d’énergie par l’hôte.'] },
        ],
        questions: [
          { text: 'Pourquoi les chercheurs utilisent-ils des souris axéniques ?', answer: 'Elles n’ont aucun micro-organisme : en les comparant à des souris normales, ou en leur apportant un microbiote, on peut attribuer les différences observées à la seule présence du microbiote.' },
          { text: 'Décris les résultats du document 9.', answer: 'Les souris avec microbiote ont plus de masse grasse que les souris sans microbiote, bien qu’elles mangent moins. L’apport d’un microbiote à des souris axéniques augmente fortement leur masse grasse en deux semaines.' },
          { text: 'Explique ces résultats à l’aide du document 10.', answer: 'Le microbiote fermente les fibres que la souris ne peut pas digérer seule et produit des acides gras à chaîne courte absorbables : la souris retire donc plus d’énergie de la même nourriture. Le surplus d’énergie est stocké sous forme de graisse.' },
          { text: 'Montre que la relation entre l’hôte et son microbiote est une symbiose.', answer: 'C’est une association durable entre deux partenaires d’espèces différentes, à bénéfices réciproques : l’hôte fournit aux bactéries un habitat chaud et stable et une nourriture (les fibres) ; les bactéries fournissent à l’hôte de l’énergie (acides gras à chaîne courte), des vitamines et une protection contre les pathogènes.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'L’appareil digestif associe un tube digestif, dont la lumière appartient au milieu extérieur, et des glandes annexes exocrines (glandes salivaires, foie, pancréas).',
      'La paroi digestive comprend muqueuse, sous-muqueuse, musculeuse (muscle lisse, péristaltisme) et séreuse ; ses cellules sont différenciées selon la fonction de l’organe.',
      'La digestion est une simplification moléculaire : les macromolécules sont hydrolysées en nutriments absorbables ; les fibres ne sont pas digérées par nos enzymes.',
      'Digestion mécanique (broyage, brassage, péristaltisme), chimique (acide chlorhydrique, sels biliaires) et enzymatique (hydrolyses catalysées) se complètent.',
      'Les enzymes sont des protéines catalytiques spécifiques, actives à une température optimale (37 °C) et à un pH optimal adapté à leur milieu.',
      'L’estomac acidifie sa lumière (pH ≈ 2) ; la bile émulsionne les lipides sans les digérer.',
      'Le microbiote du côlon, en symbiose avec nous, fermente les fibres en acides gras à chaîne courte absorbables.',
    ],
    method: {
      title: 'Exploiter une expérience d’activité enzymatique',
      steps: [
        'Repérer la variable étudiée (température, pH, présence d’une substance) et ce qui est mesuré (temps de disparition d’un substrat, apparition d’un produit).',
        'Identifier les témoins : sans enzyme, enzyme dénaturée…',
        'Comparer les tubes deux à deux, en ne faisant varier qu’un seul facteur à la fois.',
        'Relier un temps court à une activité forte, et en déduire les conditions optimales.',
        'Conclure en nommant la réaction (substrat → produits) et les conditions de l’activité.',
      ],
    },
    vocabulary: [
      { term: 'Tube digestif', definition: 'Conduit continu de la bouche à l’anus, traversé par les aliments.' },
      { term: 'Glande annexe', definition: 'Glande située hors du tube digestif, reliée à lui par un canal (glandes salivaires, foie, pancréas).' },
      { term: 'Glande exocrine', definition: 'Glande qui déverse sa sécrétion par un canal dans une cavité ouverte sur l’extérieur.' },
      { term: 'Lumière', definition: 'Espace intérieur du tube digestif, qui appartient au milieu extérieur.' },
      { term: 'Muscle lisse', definition: 'Muscle de la paroi des organes creux, à contraction involontaire.' },
      { term: 'Péristaltisme', definition: 'Ondes de contraction des muscles lisses qui font progresser le contenu du tube digestif.' },
      { term: 'Différenciation cellulaire', definition: 'Acquisition par une cellule d’une forme et d’une fonction spécialisées.' },
      { term: 'Nutriment', definition: 'Petite molécule ou ion absorbable, issu de la digestion ou présent tel quel dans l’aliment.' },
      { term: 'Hydrolyse', definition: 'Coupure d’une liaison covalente grâce à une molécule d’eau.' },
      { term: 'Enzyme', definition: 'Protéine qui catalyse une réaction spécifique sans être consommée.' },
      { term: 'pH optimal', definition: 'pH pour lequel l’activité d’une enzyme est maximale.' },
      { term: 'Émulsification', definition: 'Fragmentation des lipides en fines gouttelettes par les sels biliaires.' },
      { term: 'Microbiote', definition: 'Ensemble des micro-organismes vivant dans un milieu, ici le tube digestif.' },
      { term: 'Symbiose', definition: 'Association durable et à bénéfices réciproques entre deux espèces.' },
      { term: 'Chyme', definition: 'Bouillie acide formée dans l’estomac ; à ne pas confondre avec le chyle, lymphe chargée de lipides.' },
    ],
    mistakes: [
      { wrong: 'Dire que la bile contient des enzymes qui digèrent les graisses.', right: 'La bile ne contient aucune enzyme : elle émulsionne les lipides, que la lipase pancréatique hydrolyse.' },
      { wrong: 'Penser que les aliments sont dans le corps dès qu’ils sont avalés.', right: 'La lumière du tube digestif appartient au milieu extérieur : seuls les nutriments absorbés entrent dans le milieu intérieur.' },
      { wrong: 'Confondre « glande annexe » et « glande accessoire ».', right: 'Annexe désigne la position (hors du tube) ; ces glandes sont indispensables à la digestion.' },
      { wrong: 'Croire qu’une enzyme chauffée à 0 °C puis réchauffée est détruite.', right: 'Le froid ralentit l’enzyme de façon réversible ; seule la chaleur excessive la dénature de façon irréversible.' },
      { wrong: 'Confondre chyme et chyle.', right: 'Le chyme est dans l’estomac et l’intestin (milieu extérieur) ; le chyle est la lymphe riche en lipides (milieu intérieur).' },
      { wrong: 'Dire que l’estomac est le principal lieu de l’absorption.', right: 'L’absorption des nutriments a lieu essentiellement dans l’intestin grêle.' },
    ],
    quiz: [
      { question: 'Laquelle de ces glandes n’est pas une glande annexe du tube digestif ?', choices: ['Le foie', 'Le pancréas', 'Les glandes salivaires', 'Les glandes gastriques'], answer: 3, explanation: 'Les glandes gastriques sont situées dans la paroi même de l’estomac ; les glandes annexes sont hors du tube digestif.' },
      { question: 'La lumière du tube digestif appartient :', choices: ['Au milieu intérieur', 'Au milieu extérieur', 'Au liquide interstitiel', 'Au sang'], answer: 1, explanation: 'Elle communique avec l’extérieur par la bouche et l’anus.' },
      { question: 'Le péristaltisme est dû à la contraction :', choices: ['Des muscles squelettiques', 'Des muscles lisses de la musculeuse', 'Des cellules de la muqueuse', 'Du diaphragme'], answer: 1, explanation: 'Les ondes de contraction des muscles lisses (involontaires) propulsent le contenu.' },
      { question: 'Une hydrolyse est une réaction qui :', choices: ['Assemble deux molécules en libérant de l’eau', 'Coupe une liaison en consommant une molécule d’eau', 'Dissout une molécule dans l’eau', 'Libère du dioxygène'], answer: 1, explanation: 'Chaque liaison coupée consomme une molécule d’eau.' },
      { question: 'Le produit final de la digestion de l’amidon est :', choices: ['Le maltose', 'Le glucose', 'Le saccharose', 'Le glycogène'], answer: 1, explanation: 'L’amylase donne du maltose, que la maltase de la bordure en brosse hydrolyse en glucose.' },
      { question: 'La pepsine a un pH optimal d’environ :', choices: ['2', '7', '8', '12'], answer: 0, explanation: 'Elle agit dans l’estomac, dont la lumière est très acide.' },
      { question: 'Le rôle principal des sels biliaires est :', choices: ['D’hydrolyser les protéines', 'D’émulsionner les lipides', 'D’acidifier le duodénum', 'D’absorber le glucose'], answer: 1, explanation: 'Ils fragmentent les lipides en fines gouttelettes, ce qui facilite l’action de la lipase.' },
      { question: 'Une amylase chauffée à 100 °C puis ramenée à 37 °C :', choices: ['Retrouve toute son activité', 'Est plus active qu’avant', 'Reste inactive car elle est dénaturée', 'Devient une lipase'], answer: 2, explanation: 'La chaleur détruit de façon irréversible la structure tridimensionnelle de l’enzyme.' },
      { question: 'La cellulose des légumes :', choices: ['Est hydrolysée en glucose dans l’estomac', 'Est hydrolysée par l’amylase', 'N’est pas digérée par nos enzymes', 'Est absorbée telle quelle'], answer: 2, explanation: 'Nous n’avons pas d’enzyme capable de couper ses liaisons ; elle est en partie fermentée par le microbiote.' },
      { question: 'La relation entre l’être humain et son microbiote intestinal est :', choices: ['Un parasitisme', 'Une symbiose', 'Une compétition', 'Une prédation'], answer: 1, explanation: 'C’est une association durable à bénéfices réciproques.' },
    ],
    exercises: [
      {
        title: 'Une expérience historique',
        statement: 'En 1752, Réaumur fait avaler à une buse de petits tubes métalliques percés de trous, contenant de la viande. Quelques heures plus tard, l’oiseau régurgite les tubes : la viande y est en partie dissoute. a) Pourquoi la viande est-elle placée dans des tubes ? b) Quelle conclusion Réaumur peut-il tirer ? c) Quelle expérience complémentaire permettrait de montrer que la digestion peut se faire hors de l’organisme ?',
        answer: ['a) Les tubes empêchent tout broyage mécanique de la viande par l’estomac ; les trous laissent passer le suc gastrique.', 'b) La viande est digérée sans broyage : l’estomac réalise une digestion chimique grâce à son suc.', 'c) Recueillir du suc gastrique et le mettre en contact avec de la viande dans un tube à 37 °C, avec un tube témoin contenant de l’eau à la place du suc (expérience de Spallanzani).'],
      },
      {
        title: 'Schéma fonctionnel',
        statement: 'Construis un schéma fonctionnel montrant le devenir d’une protéine du poisson, de la bouche jusqu’à l’absorption : organes, sécrétions, enzymes, produits obtenus.',
        answer: ['Bouche : mastication (digestion mécanique), pas de digestion chimique des protéines.', 'Estomac : brassage ; l’acide chlorhydrique dénature la protéine et active le pepsinogène en pepsine ; la pepsine hydrolyse la protéine en polypeptides.', 'Intestin grêle : les bicarbonates neutralisent l’acidité ; la trypsine et la chymotrypsine (suc pancréatique) hydrolysent les polypeptides en peptides courts ; les peptidases de la bordure en brosse donnent des acides aminés.', 'Les acides aminés sont absorbés par les entérocytes et passent dans le sang.'],
      },
      {
        title: 'Intolérance au lactose',
        statement: 'Après avoir bu un grand verre de lait, Thomas souffre de ballonnements. Son médecin suspecte un déficit en lactase. a) Écris la réaction catalysée par la lactase. b) Explique l’origine des troubles. c) Pourquoi Thomas supporte-t-il bien le fromage à pâte dure ?',
        answer: ['a) Lactose + H~2~O → glucose + galactose.', 'b) Sans lactase, le lactose n’est pas hydrolysé et ne peut pas être absorbé : il arrive dans le côlon, où les bactéries du microbiote le fermentent, ce qui produit des gaz.', 'c) Pendant la fabrication et l’affinage des fromages à pâte dure, le lactose est presque entièrement éliminé avec le lactosérum ou consommé par les bactéries lactiques.'],
      },
    ],
    selfCheck: [
      'Je sais dessiner et légender l’appareil digestif en distinguant tube digestif et glandes annexes.',
      'Je sais expliquer pourquoi la lumière du tube digestif fait partie du milieu extérieur.',
      'Je sais décrire les quatre couches de la paroi digestive et relier la musculeuse au péristaltisme.',
      'Je sais définir une hydrolyse et donner les nutriments issus de l’amidon, des protéines et des triglycérides.',
      'Je sais distinguer digestions mécanique, chimique et enzymatique.',
      'Je sais interpréter une expérience montrant l’influence de la température et du pH sur une enzyme.',
      'Je sais expliquer le rôle de l’acide gastrique, de la bile et du microbiote.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Microbiote intestinal (flore intestinale) — Inserm', url: 'https://www.inserm.fr/dossier/microbiote-intestinal-flore-intestinale/' },
      { title: 'Digestion — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Digestion' },
      { title: 'Enzyme — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Enzyme' },
      { title: 'Bile — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Bile' },
    ],
  },
};

export default lesson;
