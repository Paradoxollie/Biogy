import { img } from '../media';
import kefirPaillasse from '../../../assets/courses/premiere/module-3-identification/kefir-paillasse.webp';
import dendrogramme from '../../../assets/courses/premiere/module-3-identification/dendrogramme.webp';
import etatFraisKefir from '../../../assets/courses/premiere/module-3-identification/etat-frais-kefir.webp';
import gramStreptocoques from '../../../assets/courses/premiere/module-3-identification/gram-streptocoques.webp';
import gramBacillus from '../../../assets/courses/premiere/module-3-identification/gram-bacillus.webp';
import morphologies from '../../../assets/courses/premiere/module-1-diversite/morphologies.webp';
import gramMelange from '../../../assets/courses/premiere/module-1-diversite/gram.webp';

const IMG = {
  kefir: img(kefirPaillasse, 'Bocal de kéfir de lait sur une paillasse, cuillère portant deux grains de kéfir, lame et lamelle avec une goutte de kéfir, microscope en arrière-plan.', 'photo', 1536, 1024),
  dendrogramme: img(dendrogramme, 'Dendrogramme simplifié de six espèces bactériennes avec un axe de pourcentage de similitude de 70 à 100 % : Staphylococcus aureus et Staphylococcus epidermidis réunis au nœud A (96 %), rejoints par Bacillus subtilis au nœud B (85 %) ; Escherichia coli et Salmonella enterica réunis au nœud C (93 %), rejoints par Klebsiella pneumoniae au nœud D (91 %) ; les deux groupes réunis au nœud E (75 %).', 'schema', 1400, 894),
  etatFrais: img(etatFraisKefir, 'État frais de kéfir observé à ×400 : grosses levures ovales, plusieurs en bourgeonnement, nombreuses petites bactéries en bâtonnets et en chaînettes de coques, et globules de matière grasse ronds.', 'micro', 1536, 1024),
  streptocoques: img(gramStreptocoques, 'Coloration de Gram observée à ×1 000 : coques violets d’environ 1 µm, groupés en longues chaînettes et par paires.', 'micro', 1536, 1024),
  bacillus: img(gramBacillus, 'Coloration de Gram observée à ×1 000 : grands bacilles violets à bouts carrés, isolés ou en chaînettes, certains contenant une spore ovale non colorée.', 'micro', 1536, 1024),
  morphologies: img(morphologies, 'Planche des formes et groupements bactériens : coques, diplocoques, streptocoques en chaînette, staphylocoques en amas, bacilles, coccobacilles, vibrions, spirilles.', 'schema', 1400, 933),
  gramMelange: img(gramMelange, 'Coloration de Gram d’un mélange de deux souches observée à ×1 000 : coques violets groupés en amas et petits bacilles roses isolés.', 'micro', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'module-3-identification',
  duration: 'Environ 3 séances (cours et travaux pratiques)',
  hook: {
    image: IMG.kefir,
    question: 'Dans une goutte de kéfir vivent des levures et plusieurs espèces de bactéries. Comment savoir qui est qui, et comment leur donner un nom que tous les scientifiques du monde comprennent ?',
    text: 'Identifier un micro-organisme, c’est comme mener une enquête : on rassemble des indices (sa forme, sa taille, sa façon de se grouper, sa couleur après coloration…) et on les compare à ceux d’espèces déjà connues et nommées selon des règles précises. Dans ce chapitre, tu apprends à nommer correctement les bactéries, à lire leur parenté sur un dendrogramme et à exploiter leurs caractères morphologiques.',
  },
  objectives: [
    'Expliquer pourquoi une identification exige une souche pure et quels caractères elle utilise.',
    'Écrire correctement le nom d’une famille, d’un genre et d’une espèce de bactérie.',
    'Situer un taxon dans la hiérarchie de la classification et lire un dendrogramme à l’aide du pourcentage de similitude.',
    'Déterminer la forme, la taille et le mode de groupement de bactéries observées après une coloration de Gram.',
    'Distinguer les levures des bactéries par leur forme, leur taille et la présence de bourgeons.',
  ],
  prerequisites: [
    'Réaliser un état frais et une coloration de Gram, utiliser le microscope et estimer une taille (chapitre « Observer la diversité du vivant à l’échelle microscopique »).',
    'Obtenir une culture pure par isolement et repérer un contaminant (chapitre « Cultiver des micro-organismes »).',
  ],
  program: [
    'Utiliser les règles d’écriture de la nomenclature des bactéries pour les taxons suivants : familles, genres, espèces.',
    'Situer un taxon dans la hiérarchie de la classification ; analyser un dendrogramme à l’aide du pourcentage de similitude entre taxons.',
    'Déterminer la forme, la taille et le mode de groupement des bactéries en vue de leur identification.',
    'Distinguer les levures des bactéries par leur morphologie : forme, taille, présence de bourgeon.',
    'En Première, l’identification se limite aux caractères morphologiques ; les caractères culturaux et métaboliques sont seulement évoqués et seront étudiés en Terminale.',
  ],

  course: {
    parts: [
      {
        title: 'Identifier un micro-organisme : une démarche',
        intro: 'Savoir quelle bactérie se trouve dans un aliment, une eau ou un prélèvement de patient permet de décider : le produit est-il sain ? Quel traitement choisir ? La souche de production est-elle la bonne ?',
        blocks: [
          { type: 'definition', term: 'Identification', text: 'démarche qui consiste à déterminer le **nom** (genre et espèce) d’un micro-organisme, en comparant ses caractères à ceux de micro-organismes déjà décrits et référencés dans des tableaux d’identification.' },
          { type: 'definition', term: 'Souche pure', text: 'population de micro-organismes qui descendent tous d’une **même cellule** : on l’obtient en repiquant une colonie bien isolée. On n’identifie jamais un mélange : les caractères observés seraient ceux de plusieurs micro-organismes à la fois.' },
          {
            type: 'cards',
            items: [
              { title: 'Caractères morphologiques', text: 'Observés au microscope : forme, taille, mode de groupement, résultat de la coloration de Gram, mobilité, présence de spores. **Étudiés en Première.**', tone: 'green' },
              { title: 'Caractères culturaux', text: 'Aspect des colonies, croissance sur tel milieu sélectif, température ou besoin en dioxygène. Évoqués en Première, approfondis en Terminale.', tone: 'blue' },
              { title: 'Caractères métaboliques', text: 'Enzymes possédées et substrats utilisés (fermentation de sucres, catalase, oxydase…). Étudiés en Terminale.', tone: 'yellow' },
            ],
          },
          {
            type: 'flow',
            title: 'La démarche d’identification',
            steps: [
              { title: 'Souche pure', text: 'Colonie isolée, repiquée.' },
              { title: 'Caractères morphologiques', text: 'État frais, coloration de Gram.' },
              { title: 'Orientation', text: 'Vers un groupe de micro-organismes.' },
              { title: 'Autres caractères', text: 'Culturaux et métaboliques.' },
              { title: 'Comparaison', text: 'Avec un tableau d’identification : nom de l’espèce.' },
            ],
          },
          { type: 'p', text: 'Les caractères morphologiques sont rapides à obtenir et orientent fortement l’enquête. Mais ils ne suffisent presque jamais à nommer une espèce : des dizaines d’espèces différentes sont, par exemple, des « bacilles Gram négatif ».' },
          { type: 'note', title: 'Pour aller plus loin', text: ['Exemples de caractères métaboliques étudiés en Terminale : la **catalase** (enzyme qui décompose l’eau oxygénée en dégageant des bulles de dioxygène : les staphylocoques la possèdent, pas les streptocoques), l’**oxydase**, ou les galeries miniaturisées, qui testent en une fois une vingtaine de caractères.', 'Les laboratoires utilisent aussi des méthodes modernes : séquençage de gènes, spectrométrie de masse.'] },
          {
            type: 'retenir',
            items: [
              'On identifie toujours une **souche pure**, issue d’une colonie isolée.',
              'L’identification compare des caractères morphologiques, culturaux et métaboliques à ceux d’espèces référencées.',
              'En Première, on exploite les **caractères morphologiques** : ils orientent l’identification sans suffire à nommer l’espèce.',
            ],
          },
        ],
      },

      {
        title: 'Classer et nommer les bactéries',
        intro: 'Pour que tous les laboratoires parlent de la même bactérie, chaque espèce porte un nom unique, écrit selon des règles internationales.',
        blocks: [
          { type: 'definition', term: 'Classification', text: 'rangement des êtres vivants en groupes emboîtés, selon leurs ressemblances et leur parenté. Chaque groupe s’appelle un **taxon** ; il occupe un **rang** dans une hiérarchie.' },
          {
            type: 'table',
            caption: 'La hiérarchie de la classification : exemple d’Escherichia coli',
            head: ['Rang', 'Taxon', 'Remarque'],
            rows: [
              ['Domaine', '_Bacteria_ (Bactéries)', 'Procaryotes ; les deux autres domaines sont les Archées et les Eucaryotes.'],
              ['Phylum (embranchement)', '_Pseudomonadota_', 'Anciennement appelé _Proteobacteria_.'],
              ['Classe', '_Gammaproteobacteria_', ''],
              ['Ordre', '_Enterobacterales_', 'Les noms d’ordre se terminent par **-ales**.'],
              ['Famille', '_Enterobacteriaceae_', 'Les noms de famille se terminent par **-aceae**.'],
              ['Genre', '_Escherichia_', 'Nom latin, avec une majuscule.'],
              ['Espèce', '_Escherichia coli_', 'Nom de genre + épithète spécifique.'],
            ],
          },
          { type: 'p', text: 'Plus on descend dans la hiérarchie, plus les membres d’un même taxon se ressemblent et sont proches parents. L’**espèce** est le rang de base : chez les bactéries, c’est un ensemble de souches qui partagent de nombreux caractères et une très grande similitude génétique.' },
          { type: 'definition', term: 'Nomenclature binomiale', text: 'système qui désigne chaque espèce par **deux mots latins** : le nom du **genre**, suivi de l’**épithète spécifique**. Exemple : _Staphylococcus aureus_ (genre _Staphylococcus_, épithète _aureus_, « doré »).' },
          {
            type: 'list',
            title: 'Les règles d’écriture des noms de bactéries',
            ordered: true,
            items: [
              '**Genre** : majuscule initiale. **Épithète spécifique** : toujours en minuscules, même si elle vient d’un nom propre (_Escherichia coli_, _Salmonella enterica_).',
              'Les noms latins s’écrivent en **italique** à l’ordinateur et sont **soulignés** quand on écrit à la main (chaque mot souligné séparément).',
              'Après une première citation complète, on peut **abréger le genre** par son initiale suivie d’un point, s’il n’y a pas d’ambiguïté : _E. coli_, _S. aureus_.',
              '**sp.** désigne une espèce non déterminée d’un genre (_Staphylococcus_ sp.) ; **spp.** désigne plusieurs espèces du genre (_Salmonella_ spp.). Ces abréviations ne sont pas en italique.',
              '**Famille** : un seul mot latin, avec une majuscule, terminé par **-aceae**, en italique (_Enterobacteriaceae_, _Staphylococcaceae_, _Bacillaceae_).',
              'Le nom d’une **souche** suit le nom de l’espèce, en caractères droits : _E. coli_ K-12.',
              'Les noms français courants (un staphylocoque, les entérobactéries) s’écrivent sans majuscule et sans italique.',
            ],
          },
          {
            type: 'table',
            caption: 'Repérer les erreurs d’écriture',
            head: ['Écriture fautive', 'Erreur', 'Écriture correcte'],
            rows: [
              ['Escherichia Coli', 'Majuscule à l’épithète, pas d’italique', '_Escherichia coli_'],
              ['E.coli', 'Pas d’espace après le point, pas d’italique', '_E. coli_'],
              ['staphylococcus aureus', 'Minuscule au genre', '_Staphylococcus aureus_'],
              ['Les entérobacteriaceae', 'Mélange de français et de latin, minuscule', 'Les _Enterobacteriaceae_ (ou les entérobactéries)'],
              ['Des _Salmonella sp._ variées', 'sp. au lieu de spp., abréviation en italique', 'Des _Salmonella_ spp.'],
            ],
          },
          { type: 'note', title: 'Une classification qui évolue', text: 'La classification change quand les données génétiques progressent. En 2020, par exemple, l’ancien genre _Lactobacillus_ a été découpé en 25 genres : une partie des « lactobacilles » des aliments porte aujourd’hui un autre nom de genre.' },
          {
            type: 'retenir',
            items: [
              'Hiérarchie : domaine, phylum, classe, ordre, famille, genre, espèce. Chaque groupe est un **taxon**.',
              'Espèce = _Genre épithète_ : majuscule au genre, minuscule à l’épithète, italique (souligné à la main).',
              'Famille : un mot latin à majuscule, terminé par **-aceae**, en italique.',
              'Genre abrégé après la première citation (_E. coli_) ; sp. = une espèce non déterminée, spp. = plusieurs espèces.',
            ],
          },
        ],
      },

      {
        title: 'Lire un dendrogramme',
        intro: 'Comment savoir que deux bactéries sont « cousines » ? On compare leur ADN et on représente leurs ressemblances par un arbre.',
        blocks: [
          { type: 'definition', term: 'Dendrogramme', text: 'schéma en forme d’arbre qui regroupe des taxons selon leur degré de ressemblance. Les taxons sont placés à l’extrémité des branches ; les branches se rejoignent en des **nœuds** dont la position, lue sur un axe, indique le niveau de ressemblance.' },
          { type: 'definition', term: 'Pourcentage de similitude', text: 'proportion de caractères identiques entre deux taxons. Aujourd’hui, on compare surtout des **séquences d’ADN** (par exemple un gène présent chez toutes les bactéries) : 98 % de similitude signifie que 98 % des positions comparées sont identiques.' },
          { type: 'figure', image: IMG.dendrogramme, caption: 'Dendrogramme simplifié construit pour la leçon (valeurs arrondies) : la position de chaque nœud se lit sur l’axe du pourcentage de similitude.', size: 'wide' },
          {
            type: 'steps',
            title: 'Lire un dendrogramme',
            items: [
              { title: 'Repérer l’axe', text: 'Ici, le pourcentage de similitude augmente de gauche à droite ; les taxons sont à droite, à 100 %.' },
              { title: 'Trouver le nœud qui réunit deux taxons', text: 'Remonter les deux branches jusqu’au point où elles se rejoignent.' },
              { title: 'Lire sa valeur', text: 'Descendre verticalement du nœud jusqu’à l’axe : c’est le pourcentage de similitude entre les deux taxons (ou les deux groupes).' },
              { title: 'Comparer', text: 'Plus le nœud est proche de 100 %, plus les taxons sont proches parents.' },
            ],
          },
          { type: 'example', title: 'lecture du nœud A', text: '_Staphylococcus aureus_ et _Staphylococcus epidermidis_ se rejoignent au nœud A, à **96 %** : ce sont les deux espèces les plus proches du document. Elles appartiennent bien au même genre, _Staphylococcus_.' },
          { type: 'p', text: 'Les taxons s’emboîtent : les espèces d’un même **genre** se rejoignent à des pourcentages élevés, les genres d’une même **famille** à des pourcentages plus faibles, et ainsi de suite. Les seuils exacts dépendent de la méthode de comparaison utilisée : un exercice les donne toujours.' },
          { type: 'warning', title: 'Piège classique', text: 'Deux taxons écrits l’un sous l’autre ne sont pas forcément proches : seule compte la position du nœud qui les réunit. Sur le document, _Bacillus subtilis_ est écrit juste au-dessus d’_Escherichia coli_, mais elles ne se rejoignent qu’au nœud E, à 75 %.' },
          {
            type: 'retenir',
            items: [
              'Un dendrogramme regroupe les taxons selon leur pourcentage de similitude (souvent calculé sur l’ADN).',
              'La valeur d’un nœud, lue sur l’axe, donne la similitude entre les taxons qu’il réunit : plus elle est élevée, plus ils sont proches.',
              'Espèces d’un même genre, puis genres d’une même famille, se regroupent à des niveaux de similitude décroissants.',
            ],
          },
        ],
      },

      {
        title: 'Exploiter les caractères morphologiques des bactéries',
        intro: 'La coloration de Gram, apprise au chapitre « Observer la diversité du vivant à l’échelle microscopique », devient ici un outil d’identification.',
        blocks: [
          { type: 'p', text: 'Pour orienter l’identification, on décrit au microscope (×1 000, après coloration de Gram) quatre caractères : la **forme**, la **taille**, le **mode de groupement** et la **couleur de Gram**. L’état frais apporte en plus la **mobilité**.' },
          { type: 'figure', image: IMG.morphologies, caption: 'Formes et groupements des bactéries (rappel).', size: 'wide' },
          { type: 'definition', term: 'Mode de groupement', text: 'disposition des cellules les unes par rapport aux autres. Il dépend de la façon dont la bactérie se divise et de la tendance des cellules à rester accolées : division selon un seul plan → **chaînettes** (streptocoques) ; selon plusieurs plans → **amas** (staphylocoques) ; deux cellules restées accolées → **diplocoques**.' },
          { type: 'p', text: 'La **taille** s’estime avec un oculaire micrométrique ou une barre d’échelle : un coque mesure environ 1 µm de diamètre ; un bacille courant mesure 0,5 à 1 µm de large et 2 à 5 µm de long.' },
          {
            type: 'table',
            caption: 'Caractères morphologiques de quelques genres bactériens',
            head: ['Genre', 'Forme et taille', 'Groupement', 'Gram', 'Où le trouve-t-on ?'],
            rows: [
              ['_Staphylococcus_', 'Coques, environ 1 µm', 'Amas (grappes)', 'Positif', 'Peau, muqueuses'],
              ['_Streptococcus_', 'Coques un peu ovoïdes, environ 1 µm', 'Chaînettes, paires', 'Positif', 'Yaourt (_S. thermophilus_), gorge'],
              ['_Bacillus_', 'Grands bacilles, environ 1 × 3 à 5 µm, spores possibles', 'Isolés ou chaînettes', 'Positif', 'Sol'],
              ['_Lactobacillus_ et genres voisins', 'Bacilles fins, 2 à 6 µm', 'Isolés ou chaînettes', 'Positif', 'Yaourt, kéfir, fromages'],
              ['_Escherichia_', 'Bacilles, environ 0,5 × 2 µm', 'Isolés', 'Négatif', 'Intestin'],
              ['_Neisseria_', 'Coques aplatis', 'Diplocoques', 'Négatif', 'Muqueuses'],
            ],
          },
          { type: 'figure', image: IMG.streptocoques, caption: 'Coques Gram positif en chaînettes (×1 000) : morphologie caractéristique des streptocoques.', size: 'wide' },
          { type: 'figure', image: IMG.bacillus, caption: 'Grands bacilles Gram positif en chaînettes (×1 000) ; certaines cellules contiennent une spore, qui ne prend pas le colorant.', size: 'wide' },
          { type: 'definition', term: 'Spore (endospore)', text: 'forme de résistance que fabriquent certaines bactéries (_Bacillus_, _Clostridium_) à l’intérieur de leur cellule. Elle apparaît comme une zone ovale, réfringente et non colorée. Sa présence est un caractère morphologique très utile.' },
          { type: 'example', title: 'décrire pour orienter', text: '« Coques Gram positif, d’environ 1 µm, groupés en amas » : cette description oriente vers le genre _Staphylococcus_. « Bacilles Gram négatif isolés, de 2 µm » : elle oriente vers un groupe très large, qui contient _Escherichia_, _Salmonella_, _Klebsiella_ et bien d’autres genres.' },
          { type: 'warning', title: 'Les limites de la morphologie', text: 'La morphologie oriente mais ne permet pas, à elle seule, de nommer l’espèce : _Escherichia coli_ et _Salmonella enterica_ ont exactement le même aspect au microscope. Il faut alors des caractères culturaux et métaboliques.' },
          {
            type: 'retenir',
            items: [
              'On décrit une bactérie par sa **forme**, sa **taille**, son **mode de groupement** et sa **couleur de Gram** (et sa mobilité à l’état frais).',
              'Le groupement dépend du mode de division : chaînettes (streptocoques), amas (staphylocoques), diplocoques.',
              'Spores visibles : orientation vers _Bacillus_ ou _Clostridium_.',
              'La morphologie oriente vers un genre ou un groupe ; elle ne suffit pas à identifier l’espèce.',
            ],
          },
        ],
      },

      {
        title: 'Distinguer les levures des bactéries',
        intro: 'Dans de nombreux produits fermentés (kéfir, levain, bière, kombucha), levures et bactéries vivent ensemble. Au microscope, on les distingue grâce à des critères simples.',
        blocks: [
          { type: 'definition', term: 'Critère différentiel', text: 'caractère qui prend des valeurs différentes chez deux groupes et permet donc de les distinguer.' },
          {
            type: 'compare',
            title: 'Levure ou bactérie ?',
            columns: [
              { title: 'Levure', subtitle: 'Eucaryote, champignon unicellulaire', items: ['**Taille** : 5 à 10 µm.', '**Forme** : ovale ou sphérique.', '**Bourgeons** fréquents : la cellule mère forme une petite cellule fille accolée (bourgeonnement).', 'Structures internes parfois visibles (vacuole).', 'Jamais mobile.'] },
              { title: 'Bactérie', subtitle: 'Procaryote', items: ['**Taille** : 1 à 5 µm, soit environ 5 à 10 fois plus petite.', '**Forme** : coque, bacille, vibrion, spirille.', '**Pas de bourgeon** : division en deux cellules égales.', 'Pas de structure interne visible au microscope optique.', 'Parfois mobile (flagelles).'] },
            ],
          },
          { type: 'figure', image: IMG.etatFrais, caption: 'État frais de kéfir (×400) : grosses levures ovales, dont plusieurs bourgeonnent, au milieu de nombreuses petites bactéries (bacilles et coques en chaînettes). Les sphères lisses et brillantes, de tailles variées, sont des globules de matière grasse du lait.', size: 'wide' },
          { type: 'p', text: 'L’**état frais** est la technique de choix pour un produit fermenté : il montre les cellules **vivantes**, leurs bourgeons et leur éventuelle mobilité, sans les déformer. Dans le kéfir, on observe des **levures** et des **bactéries lactiques** (lactobacilles, lactocoques…), responsables du goût acidulé et légèrement pétillant de la boisson.' },
          { type: 'warning', title: 'Ne pas confondre', text: 'Dans un produit laitier, les **globules de matière grasse** ressemblent à des levures. Mais ils sont parfaitement ronds, très brillants, de tailles très variables, sans bourgeon et sans structure interne.' },
          { type: 'note', title: 'Et après une coloration de Gram ?', text: 'Les levures retiennent le violet : elles apparaissent violettes, comme des bactéries Gram positif. Leur grande taille et leurs bourgeons permettent toutefois de les reconnaître sans hésitation.' },
          {
            type: 'retenir',
            items: [
              'Trois critères différentiels : la **taille** (5 à 10 µm pour une levure, 1 à 5 µm pour une bactérie), la **forme** et la présence de **bourgeons**.',
              'L’état frais d’un produit fermenté montre des levures et des bactéries vivantes.',
              'Les globules de matière grasse sont ronds, brillants, de taille variable et sans bourgeon.',
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
        title: 'Écrire correctement les noms des bactéries',
        duration: '20 min',
        skills: ['Appliquer une règle', 'Communiquer'],
        context: 'Un élève a rédigé le compte rendu d’un TP. Son professeur lui a rendu la copie avec la mention : « Revoir l’écriture des noms scientifiques. »',
        documents: [
          {
            label: 'Document 1',
            title: 'Extrait du compte rendu (recopié sans italique)',
            text: [
              '« Le prélèvement de peau contenait des Staphylococcus Aureus et des staphylococcus epidermidis, deux espèces de la famille des staphylococcaceae. »',
              '« Le yaourt contient Streptococcus Thermophilus. Le fromage contaminé contenait plusieurs espèces de salmonelles, notées Salmonella sp. »',
              '« Après une première mention de Escherichia coli, je l’ai notée E.coli dans la suite du texte. »',
            ],
          },
        ],
        questions: [
          { text: 'Relève les erreurs d’écriture concernant les noms d’espèces et corrige-les.', hint: 'Majuscule au genre, minuscule à l’épithète, italique.', answer: '« Staphylococcus Aureus » → _Staphylococcus aureus_ (épithète en minuscule) ; « staphylococcus epidermidis » → _Staphylococcus epidermidis_ (genre avec majuscule) ; « Streptococcus Thermophilus » → _Streptococcus thermophilus_. Tous ces noms doivent être en italique, ou soulignés à la main.' },
          { text: 'Corrige l’écriture du nom de la famille et donne le rang de chacun des taxons suivants : _Staphylococcaceae_, _Staphylococcus_, _Staphylococcus aureus_.', answer: 'La famille s’écrit _Staphylococcaceae_ : majuscule, terminaison -aceae, italique. _Staphylococcaceae_ est une famille, _Staphylococcus_ un genre et _Staphylococcus aureus_ une espèce.' },
          { text: 'L’élève a écrit « Salmonella sp. » pour plusieurs espèces. Est-ce correct ?', answer: 'Non : sp. désigne une seule espèce non déterminée. Pour plusieurs espèces du genre, on écrit _Salmonella_ spp. (le genre en italique, spp. en caractères droits).' },
          { text: 'Corrige l’abréviation « E.coli » et explique à quelle condition on peut l’utiliser.', answer: 'On écrit _E. coli_, avec un espace après le point et en italique. L’abréviation n’est possible qu’après avoir écrit une première fois le nom complet, _Escherichia coli_, et s’il n’existe pas de confusion possible avec un autre genre commençant par E.' },
          { text: 'Comment l’élève doit-il écrire ces noms dans un compte rendu manuscrit ?', answer: 'À la main, on ne peut pas écrire en italique : on souligne le nom de genre et l’épithète spécifique (chaque mot séparément).' },
        ],
      },
      {
        title: 'Analyser un dendrogramme',
        duration: '25 min',
        skills: ['Lire un document', 'Raisonner', 'Classer'],
        context: 'Le document 2 représente la proximité génétique de six espèces bactériennes, calculée par comparaison de leur ADN. Pour cet exercice, on utilise les seuils donnés dans le document 3.',
        documents: [
          { label: 'Document 2', title: 'Dendrogramme simplifié de six espèces bactériennes', image: IMG.dendrogramme, caption: 'Dendrogramme construit pour l’exercice (valeurs arrondies).' },
          { label: 'Document 3', title: 'Seuils utilisés dans cet exercice', text: ['Deux espèces qui se rejoignent à **95 % ou plus** appartiennent au même genre.', 'Deux taxons qui se rejoignent à **90 % ou plus** appartiennent à la même famille.', 'Coloration de Gram : _Staphylococcus_ et _Bacillus_ sont Gram positif ; _Escherichia_, _Salmonella_ et _Klebsiella_ sont Gram négatif.'] },
        ],
        questions: [
          { text: 'Quelles sont les deux espèces les plus proches génétiquement ? Donne leur pourcentage de similitude.', hint: 'Cherche le nœud le plus à droite.', answer: '_Staphylococcus aureus_ et _Staphylococcus epidermidis_, réunies au nœud A, à 96 % de similitude.' },
          { text: 'Ces deux espèces appartiennent-elles au même genre ? Ta réponse est-elle cohérente avec leurs noms ?', answer: 'Oui : 96 % est supérieur au seuil de 95 % ; elles appartiennent au même genre. C’est cohérent : leurs noms commencent par le même nom de genre, _Staphylococcus_.' },
          { text: '_Escherichia coli_ et _Salmonella enterica_ appartiennent-elles au même genre ? À la même famille ? Justifie.', answer: 'Elles se rejoignent au nœud C, à 93 % : c’est moins que 95 %, donc ce sont deux genres différents ; c’est plus que 90 %, donc elles appartiennent à la même famille.' },
          { text: 'À quelle famille appartient _Klebsiella pneumoniae_, sachant que celle d’_E. coli_ est _Enterobacteriaceae_ ?', answer: '_Klebsiella pneumoniae_ rejoint le groupe _E. coli_ – _S. enterica_ au nœud D, à 91 % (au moins 90 %) : elle appartient à la même famille, les _Enterobacteriaceae_.' },
          { text: '_Bacillus subtilis_ appartient-elle à la famille des _Staphylococcaceae_ ? Justifie.', answer: 'Non : elle ne rejoint les staphylocoques qu’au nœud B, à 85 %, en dessous du seuil de 90 %. Elle appartient à une autre famille (les _Bacillaceae_).' },
          { text: 'Le nœud E sépare deux grands groupes. Quel caractère morphologique partagent les espèces de chacun des deux groupes ?', answer: 'Le premier groupe (_Staphylococcus_, _Bacillus_) ne contient que des bactéries Gram positif ; le second (_Escherichia_, _Salmonella_, _Klebsiella_) que des bactéries Gram négatif. Le regroupement génétique correspond ici à une différence de structure de la paroi.' },
          { text: 'Un élève affirme : « _Bacillus subtilis_ est proche d’_Escherichia coli_ puisqu’elles sont écrites l’une sous l’autre. » Corrige-le.', answer: 'La position des noms sur la page n’a pas de sens : seul compte le nœud qui réunit les deux espèces. Elles ne se rejoignent qu’au nœud E, à 75 %, la plus faible similitude du document : ce sont les espèces les plus éloignées.' },
        ],
      },
      {
        title: 'Comparer plusieurs souches sur des colorations de Gram',
        duration: '30 min',
        skills: ['Observer', 'Décrire', 'Argumenter'],
        context: 'Un laboratoire de contrôle a isolé quatre souches pures (A, B, C et D) à partir de différents produits. Une coloration de Gram a été réalisée sur chacune ; les souches C et D figurent sur la même lame, photographiée pour les comparer.',
        documents: [
          { label: 'Document 4', title: 'Souche A, isolée d’un yaourt (×1 000)', image: IMG.streptocoques, caption: 'Coloration de Gram de la souche A.' },
          { label: 'Document 5', title: 'Souche B, isolée d’un échantillon de terre (×1 000)', image: IMG.bacillus, caption: 'Coloration de Gram de la souche B.' },
          { label: 'Document 6', title: 'Souches C (prélèvement de peau) et D (eau de rivière) sur la même lame (×1 000)', image: IMG.gramMelange, caption: 'Coloration de Gram des souches C et D.' },
          {
            label: 'Document 7',
            title: 'Mesures à l’oculaire micrométrique',
            blocks: [
              {
                type: 'table',
                head: ['Souche', 'Dimensions mesurées'],
                rows: [
                  ['A', 'Diamètre : 0,8 à 1 µm'],
                  ['B', 'Largeur : 1 µm ; longueur : 3 à 5 µm'],
                  ['C', 'Diamètre : environ 1 µm'],
                  ['D', 'Largeur : 0,5 µm ; longueur : 2 µm'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Décris la souche A : forme, taille, mode de groupement, résultat de la coloration de Gram.', answer: 'Coques d’environ 0,8 à 1 µm de diamètre, groupés en chaînettes (et par paires), colorés en violet : coques Gram positif en chaînettes.' },
          { text: 'À l’aide du tableau du cours, vers quel genre la souche A oriente-t-elle ? Est-ce cohérent avec son origine ?', answer: 'Des coques Gram positif en chaînettes orientent vers le genre _Streptococcus_. C’est cohérent : _Streptococcus thermophilus_ est l’une des bactéries du yaourt.' },
          { text: 'Décris la souche B. Quel détail permet d’orienter vers le genre _Bacillus_ ?', answer: 'Grands bacilles Gram positif (violets) à bouts carrés, de 1 µm sur 3 à 5 µm, isolés ou en chaînettes. Certaines cellules contiennent une **spore** ovale non colorée : avec la forme et l’origine (le sol), cela oriente vers _Bacillus_.' },
          { text: 'Décris les souches C et D, puis propose une orientation pour chacune.', answer: 'C : coques Gram positif d’environ 1 µm, groupés en amas : orientation vers _Staphylococcus_ (cohérent avec un prélèvement de peau). D : petits bacilles Gram négatif (roses) de 0,5 × 2 µm, isolés : orientation vers un bacille Gram négatif, par exemple une entérobactérie comme _Escherichia_.' },
          { text: 'Peut-on affirmer que la souche D correspond à _Escherichia coli_ ? Justifie et indique ce qu’il faudrait faire.', hint: 'Combien de genres sont des bacilles Gram négatif ?', answer: 'Non : de très nombreuses bactéries (_Escherichia_, _Salmonella_, _Klebsiella_…) sont des bacilles Gram négatif identiques au microscope. La morphologie oriente seulement ; il faut étudier des caractères culturaux et métaboliques (étudiés en Terminale) pour identifier l’espèce.' },
          { text: 'Pourquoi la coloration de Gram doit-elle être réalisée sur une souche pure ?', answer: 'Sur un mélange, on observerait les caractères de plusieurs micro-organismes sans savoir à quelle colonie ils correspondent : la description ne permettrait pas d’orienter l’identification d’une souche précise. Ici, les souches C et D, toutes deux pures, figurent volontairement sur la même lame pour être comparées.' },
        ],
      },
      {
        title: 'Distinguer levures et bactéries dans un produit fermenté',
        duration: '25 min',
        skills: ['Observer', 'Calculer', 'Justifier'],
        context: 'On a réalisé un état frais de kéfir de lait, observé à l’objectif ×40. La photographie a été imprimée : sur ce tirage, 10 µm correspondent à 4,0 cm.',
        documents: [
          { label: 'Document 8', title: 'État frais de kéfir (×400)', image: IMG.etatFrais, caption: 'Préparation non colorée entre lame et lamelle.' },
          {
            label: 'Document 9',
            title: 'Mesures sur le tirage',
            blocks: [
              {
                type: 'table',
                head: ['Élément observé', 'Description', 'Longueur sur le tirage'],
                rows: [
                  ['Élément 1', 'Cellule ovale, avec une petite cellule accolée et une zone claire à l’intérieur', '2,8 cm'],
                  ['Élément 2', 'Petit bâtonnet, souvent en courte chaîne', '1,2 cm'],
                  ['Élément 3', 'Petite sphère, en chaînette', '0,4 cm'],
                  ['Élément 4', 'Sphère lisse et très brillante, sans structure interne', '0,6 à 4 cm selon les sphères'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Calcule la taille réelle des éléments 1, 2 et 3.', hint: '4,0 cm sur le tirage représentent 10 µm : taille réelle = (mesure ÷ 4,0) × 10.', answer: 'Élément 1 : (2,8 ÷ 4,0) × 10 = 7 µm. Élément 2 : (1,2 ÷ 4,0) × 10 = 3 µm. Élément 3 : (0,4 ÷ 4,0) × 10 = 1 µm.' },
          { text: 'Identifie la nature des éléments 1, 2 et 3 en utilisant au moins deux critères différentiels pour chacun.', answer: 'Élément 1 : levure (7 µm, dans l’intervalle 5 à 10 µm ; forme ovale ; bourgeon accolé ; vacuole visible). Élément 2 : bactérie en bâtonnet, un bacille (3 µm ; pas de bourgeon) : probablement un lactobacille. Élément 3 : bactérie sphérique, un coque (1 µm ; en chaînette ; pas de bourgeon).' },
          { text: 'L’élément 4 est-il une levure ? Justifie.', answer: 'Non : ces sphères sont parfaitement rondes, très brillantes, de tailles très variables, sans bourgeon ni structure interne. Ce sont des globules de matière grasse du lait.' },
          { text: 'Qu’indique la présence de nombreux bourgeons sur l’état des levures ?', answer: 'Le bourgeonnement est le mode de multiplication des levures : de nombreux bourgeons montrent que les levures se multiplient activement, donc qu’elles sont vivantes. Un test au bleu de méthylène permettrait de le confirmer.' },
          { text: 'Pourquoi l’état frais est-il ici préférable à une coloration de Gram ?', answer: 'L’état frais montre les cellules vivantes, sans les tuer ni les déformer : on voit les bourgeons et une éventuelle mobilité. De plus, les levures apparaissent violettes après une coloration de Gram, comme les bactéries Gram positif ; l’état frais suffit à distinguer levures et bactéries par la taille, la forme et les bourgeons.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'On identifie toujours une souche pure, en comparant ses caractères morphologiques, culturaux et métaboliques à ceux d’espèces référencées ; en Première, on exploite les caractères morphologiques.',
      'Hiérarchie de la classification : domaine, phylum, classe, ordre, famille, genre, espèce ; chaque groupe est un taxon.',
      'Nom d’espèce = _Genre épithète_ (majuscule au genre, minuscule à l’épithète, italique ou souligné à la main) ; famille en -aceae ; sp. et spp.',
      'Un dendrogramme regroupe les taxons selon leur pourcentage de similitude : la valeur du nœud qui réunit deux taxons mesure leur proximité.',
      'Forme, taille, mode de groupement et couleur de Gram orientent vers un genre ou un groupe, sans suffire à nommer l’espèce.',
      'Levure : 5 à 10 µm, ovale, bourgeonnante ; bactérie : 1 à 5 µm, sans bourgeon.',
    ],
    method: {
      title: 'Lire un dendrogramme',
      steps: [
        'Repérer l’axe et son sens : où se trouvent 100 % et les faibles similitudes ?',
        'Pour deux taxons, suivre leurs branches jusqu’au **nœud** qui les réunit.',
        'Lire la valeur du nœud sur l’axe : c’est leur pourcentage de similitude.',
        'Comparer cette valeur aux seuils donnés (genre, famille) pour conclure.',
        'Ne jamais conclure d’après la position des noms sur la page.',
      ],
    },
    vocabulary: [
      { term: 'Identification', definition: 'Détermination du nom (genre et espèce) d’un micro-organisme par comparaison avec des espèces référencées.' },
      { term: 'Souche pure', definition: 'Population issue d’une seule cellule, obtenue à partir d’une colonie isolée.' },
      { term: 'Taxon', definition: 'Groupe d’êtres vivants occupant un rang de la classification (famille, genre, espèce…).' },
      { term: 'Classification', definition: 'Rangement des êtres vivants en groupes emboîtés selon leurs ressemblances et leur parenté.' },
      { term: 'Nomenclature binomiale', definition: 'Désignation d’une espèce par deux mots latins : le genre et l’épithète spécifique.' },
      { term: 'Genre', definition: 'Taxon regroupant des espèces très proches ; son nom prend une majuscule.' },
      { term: 'Espèce', definition: 'Rang de base de la classification ; chez les bactéries, ensemble de souches très semblables, notamment génétiquement.' },
      { term: 'Famille', definition: 'Taxon regroupant des genres proches ; nom latin terminé par -aceae.' },
      { term: 'Dendrogramme', definition: 'Arbre représentant le degré de ressemblance entre taxons.' },
      { term: 'Pourcentage de similitude', definition: 'Proportion de caractères (souvent de positions d’ADN) identiques entre deux taxons.' },
      { term: 'Caractère morphologique', definition: 'Caractère observé au microscope : forme, taille, groupement, Gram, spores, mobilité.' },
      { term: 'Mode de groupement', definition: 'Disposition des cellules entre elles : isolées, diplocoques, chaînettes, amas.' },
      { term: 'Bourgeonnement', definition: 'Mode de multiplication des levures : une petite cellule fille se forme sur la cellule mère.' },
      { term: 'Critère différentiel', definition: 'Caractère qui permet de distinguer deux groupes.' },
    ],
    mistakes: [
      { wrong: 'Écrire « Escherichia Coli ».', right: 'L’épithète spécifique s’écrit toujours en minuscules : _Escherichia coli_.' },
      { wrong: 'Écrire « Salmonella sp. » pour désigner plusieurs espèces.', right: 'sp. = une espèce non déterminée ; spp. = plusieurs espèces : _Salmonella_ spp.' },
      { wrong: 'Conclure qu’une bactérie est _E. coli_ parce que c’est un bacille Gram négatif.', right: 'La morphologie oriente vers un groupe ; il faut d’autres caractères pour identifier l’espèce.' },
      { wrong: 'Juger la parenté de deux taxons d’après leur position sur la page d’un dendrogramme.', right: 'Seule la valeur du nœud qui les réunit compte.' },
      { wrong: 'Prendre un globule de matière grasse pour une levure.', right: 'Le globule est parfaitement rond, brillant, de taille variable, sans bourgeon ni structure interne.' },
    ],
    quiz: [
      { question: 'Quelle écriture est correcte ?', choices: ['Staphylococcus Aureus', 'staphylococcus aureus', '_Staphylococcus aureus_', '_Staphylococcus_ _Aureus_'], answer: 2, explanation: 'Genre avec majuscule, épithète en minuscules, le tout en italique.' },
      { question: 'Le nom _Enterobacteriaceae_ désigne :', choices: ['Une espèce', 'Un genre', 'Une famille', 'Un domaine'], answer: 2, explanation: 'La terminaison -aceae est celle des noms de famille.' },
      { question: 'Pour désigner plusieurs espèces du genre _Salmonella_, on écrit :', choices: ['_Salmonella_ sp.', '_Salmonella_ spp.', '_Salmonella spp_', 'Salmonellas'], answer: 1, explanation: 'spp. désigne plusieurs espèces ; il s’écrit en caractères droits.' },
      { question: 'Dans la hiérarchie de la classification, le rang situé juste au-dessus du genre est :', choices: ['L’espèce', 'L’ordre', 'La famille', 'La classe'], answer: 2, explanation: 'Ordre, puis famille, puis genre, puis espèce.' },
      { question: 'Sur un dendrogramme, deux espèces réunies par un nœud à 97 % sont :', choices: ['Très éloignées', 'Plus proches que deux espèces réunies à 85 %', 'Forcément de deux familles différentes', 'Impossibles à comparer'], answer: 1, explanation: 'Plus le pourcentage de similitude du nœud est élevé, plus les taxons sont proches.' },
      { question: 'Des coques Gram positif groupés en amas orientent vers le genre :', choices: ['_Streptococcus_', '_Staphylococcus_', '_Escherichia_', '_Bacillus_'], answer: 1, explanation: 'Les staphylocoques se divisent selon plusieurs plans et forment des amas.' },
      { question: 'Le mode de groupement en chaînettes s’explique par :', choices: ['Des divisions selon un seul plan, cellules restant accolées', 'La présence de spores', 'La coloration de Gram', 'La mobilité des bactéries'], answer: 0, explanation: 'Quand les divisions se font toujours dans le même plan et que les cellules restent accolées, elles forment une chaînette.' },
      { question: 'Une cellule ovale de 8 µm portant une petite cellule accolée est :', choices: ['Un coque', 'Un bacille', 'Une levure en bourgeonnement', 'Un globule de matière grasse'], answer: 2, explanation: 'Taille de 5 à 10 µm, forme ovale et bourgeon : c’est une levure.' },
      { question: 'Pour identifier un micro-organisme, on travaille sur :', choices: ['Un mélange de colonies', 'Une souche pure', 'Le produit brut', 'N’importe quelle colonie d’une boîte contaminée'], answer: 1, explanation: 'Seule une souche pure garantit que les caractères observés appartiennent à un seul micro-organisme.' },
    ],
    exercises: [
      {
        title: 'Nommer et classer',
        statement: ['Une fiche technique indique : « _Lactococcus lactis_ appartient à la famille des _Streptococcaceae_. Les _Lactococcus_ spp. sont utilisés en fromagerie. »', 'a) Donne le genre et l’épithète spécifique de l’espèce citée. b) Comment reconnaît-on que _Streptococcaceae_ est une famille ? c) Que signifie « spp. » ? d) Écris l’abréviation de l’espèce utilisable dans la suite du texte.'],
        answer: ['a) Genre : _Lactococcus_ ; épithète spécifique : _lactis_.', 'b) Le nom se termine par -aceae, terminaison des noms de famille ; il a une majuscule et s’écrit en italique.', 'c) Plusieurs espèces du genre _Lactococcus_.', 'd) _L. lactis_ (après une première citation du nom complet).'],
      },
      {
        title: 'Lire un dendrogramme sans figure',
        statement: 'Sur un dendrogramme, les espèces W et X se rejoignent à 97 %, ce groupe rejoint l’espèce Y à 92 %, puis l’ensemble rejoint l’espèce Z à 80 %. Avec les seuils « même genre : 95 % ou plus ; même famille : 90 % ou plus », classe ces quatre espèces en genres et en familles.',
        answer: ['W et X (97 %) : même genre.', 'Y (92 % avec W et X) : genre différent, mais même famille que W et X.', 'Z (80 %) : famille différente des trois autres.', 'Bilan : une famille contenant deux genres (W et X d’un côté, Y de l’autre) ; Z dans une autre famille.'],
      },
      {
        title: 'Orienter une identification',
        statement: 'Après une coloration de Gram d’une souche pure isolée d’un fromage, on observe des cellules violettes ovales de 6 µm, dont certaines portent une petite cellule accolée, et, sur une autre lame issue d’une seconde souche, des coques violets de 1 µm en chaînettes. Décris et oriente chaque souche.',
        answer: ['Première souche : cellules ovales de 6 µm, avec bourgeons : ce sont des **levures** (la couleur violette ne doit pas tromper : les levures retiennent le violet de la coloration de Gram).', 'Seconde souche : coques Gram positif de 1 µm en chaînettes : orientation vers les streptocoques et genres voisins (par exemple _Streptococcus_ ou _Lactococcus_, fréquents dans les produits laitiers). D’autres caractères seront nécessaires pour conclure.'],
      },
    ],
    selfCheck: [
      'Je sais expliquer pourquoi l’identification se fait sur une souche pure.',
      'Je sais écrire correctement un nom de famille, de genre et d’espèce, et utiliser sp. et spp.',
      'Je connais l’ordre des rangs de la classification.',
      'Je sais lire la valeur d’un nœud sur un dendrogramme et conclure avec des seuils donnés.',
      'Je sais décrire une bactérie par sa forme, sa taille, son groupement et sa couleur de Gram.',
      'Je sais distinguer une levure d’une bactérie et d’un globule de matière grasse.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'LPSN, liste des noms de procaryotes validement publiés — DSMZ', url: 'https://lpsn.dsmz.de/' },
      { title: 'Coloration de Gram — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Coloration_de_Gram' },
    ],
  },
};

export default lesson;
