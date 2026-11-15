import { img } from '../media';
import metMembrane from '../../../assets/courses/premiere/bba-4-membranes/met-membrane.webp';
import phospholipide from '../../../assets/courses/premiere/bba-4-membranes/phospholipide.webp';
import micelleBicouche from '../../../assets/courses/premiere/bba-4-membranes/micelle-bicouche.webp';
import mosaique from '../../../assets/courses/premiere/bba-4-membranes/mosaique-fluide.webp';
import transportRecepteur from '../../../assets/courses/premiere/bba-4-membranes/transporteur-recepteur.webp';

const IMG = {
  met: img(metMembrane, 'Cliché de microscopie électronique à transmission en noir et blanc : les membranes plasmiques de deux cellules voisines apparaissent chacune comme deux fines lignes sombres séparées par une ligne claire.', 'micro', 1536, 1024),
  phospholipide: img(phospholipide, 'Schéma au crayon d’un phospholipide : tête hydrophile (groupement phosphate et glycérol, en vert) et deux queues hydrophobes d’acides gras, dont une coudée ; à côté, son symbole simplifié.', 'schema', 933, 1400),
  micelleBicouche: img(micelleBicouche, 'Schéma au crayon de molécules amphiphiles dans l’eau : une micelle, une bicouche phospholipidique et un liposome, têtes hydrophiles tournées vers l’eau.', 'schema', 1400, 933),
  mosaique: img(mosaique, 'Schéma au crayon d’un fragment de membrane plasmique en perspective : bicouche phospholipidique, protéine transmembranaire, canal, protéine périphérique, glycoprotéine et cholestérol.', 'schema', 1400, 933),
  transportRecepteur: img(transportRecepteur, 'Schéma au crayon comparant un transporteur, qui fait traverser la membrane à une molécule, et un récepteur, qui fixe une molécule informative restant à l’extérieur et déclenche une réponse cellulaire.', 'schema', 1400, 933),
};

const lesson = {
  version: 2,
  id: 'bba-4-membranes',
  duration: 'Environ 3 séances (cours, observation d’électronographies et exercices)',
  hook: {
    image: IMG.met,
    question: 'Une enveloppe cent fois plus fine qu’une bulle de savon sépare chacune de tes cellules de son milieu. Comment une couche aussi fine peut-elle être à la fois une barrière et une porte ?',
    text: 'La membrane plasmique ne mesure que 7 à 8 nanomètres d’épaisseur : il faut un microscope électronique pour la voir. Pourtant, elle trie ce qui entre et sort de la cellule, reçoit des messages et permet aux cellules de se reconnaître. Dans ce chapitre, tu découvres comment des molécules amphiphiles s’organisent spontanément dans l’eau, comment est construite une membrane et quel rôle jouent ses protéines.',
  },
  objectives: [
    'Identifier dans une biomolécule les zones hydrophiles et hydrophobes et prévoir son comportement dans l’eau.',
    'Schématiser un phospholipide en faisant apparaître ses parties hydrophile et hydrophobe.',
    'Expliquer la formation de micelles et de bicouches par des molécules amphiphiles dans l’eau.',
    'Représenter schématiquement une membrane biologique dans un environnement aqueux (modèle de la mosaïque fluide).',
    'Expliquer la différence fonctionnelle entre un transporteur et un récepteur.',
  ],
  prerequisites: [
    'Acides gras, glycérol, fonction ester, triglycérides, cholestérol (chapitre « Glucides, protides, lipides »).',
    'Polarité, liaison hydrogène, hydrophile et hydrophobe.',
    'Protéines : structure tridimensionnelle et acides aminés hydrophobes (chapitre « Glucides et protéines »).',
  ],
  program: [
    'Identifier dans une biomolécule les zones pouvant interagir avec l’eau ; prévoir les liaisons faibles qui peuvent s’établir avec l’eau.',
    'Schématiser un phospholipide.',
    'Représenter schématiquement une membrane biologique dans un environnement aqueux.',
    'Expliquer la différence fonctionnelle entre un récepteur et un transporteur.',
  ],

  course: {
    parts: [
      {
        title: 'Les phospholipides, des molécules amphiphiles',
        intro: 'Les membranes sont construites avec un lipide particulier, qui possède à la fois une partie qui aime l’eau et une partie qui la fuit.',
        blocks: [
          { type: 'definition', term: 'Phospholipide', text: 'lipide formé d’un **glycérol** dont deux fonctions alcool sont estérifiées par **deux acides gras** et la troisième par un **groupement phosphate**, lui-même lié à un petit groupement polaire (choline, éthanolamine, sérine…). Exemple : la phosphatidylcholine (ou lécithine), abondante dans le jaune d’œuf et le soja.' },
          { type: 'figure', image: IMG.phospholipide, caption: 'Un phospholipide : une tête hydrophile (groupement phosphate et groupement polaire, fixés sur le glycérol) et deux queues hydrophobes. La double liaison _cis_ d’un acide gras insaturé crée un coude. À droite, le symbole utilisé dans les schémas de membranes.', size: 'small' },
          {
            type: 'compare',
            title: 'Deux parties aux propriétés opposées',
            columns: [
              { title: 'La tête', subtitle: 'hydrophile', items: ['Groupement phosphate chargé négativement et groupement polaire (souvent chargé).', 'Établit des liaisons hydrogène et des interactions électriques avec les molécules d’eau.'] },
              { title: 'Les deux queues', subtitle: 'hydrophobes', items: ['Longues chaînes hydrocarbonées des acides gras (C–C et C–H, apolaires).', 'Ne forment pas de liaisons avec l’eau : elles se regroupent entre elles.'] },
            ],
          },
          { type: 'definition', term: 'Molécule amphiphile', text: 'molécule qui possède à la fois une partie **hydrophile** et une partie **hydrophobe**. Les phospholipides, les acides gras, les savons et les détergents sont amphiphiles.' },
          {
            type: 'table',
            caption: 'Triglycéride ou phospholipide ?',
            head: ['Caractère', 'Triglycéride', 'Phospholipide'],
            rows: [
              ['Glycérol estérifié par', '3 acides gras', '2 acides gras + 1 groupement phosphate'],
              ['Comportement dans l’eau', 'Entièrement hydrophobe : gouttelettes', 'Amphiphile : s’organise en bicouches'],
              ['Rôle principal', 'Réserve d’énergie', 'Constituant des membranes'],
            ],
          },
          {
            type: 'steps',
            title: 'Schématiser un phospholipide',
            items: [
              'Dessiner un petit cercle pour la tête (on peut le colorier ou le hachurer).',
              'Tracer sous le cercle deux traits parallèles pour les deux queues d’acides gras.',
              'Annoter : « tête hydrophile (groupement phosphate) », « queues hydrophobes (chaînes d’acides gras) ».',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Phospholipide = glycérol + 2 acides gras + groupement phosphate lié à un groupement polaire.',
              'Tête hydrophile (phosphate, chargé) et deux queues hydrophobes (chaînes d’acides gras) : c’est une molécule amphiphile.',
              'Symbole : un cercle (tête) et deux traits (queues).',
            ],
          },
        ],
      },

      {
        title: 'Dans l’eau : micelles et bicouches',
        intro: 'Verse des molécules amphiphiles dans l’eau : sans aucune intervention, elles s’assemblent en structures ordonnées.',
        blocks: [
          { type: 'p', text: 'Les parties hydrophobes ne peuvent pas établir de liaisons hydrogène avec l’eau. Les molécules amphiphiles s’organisent donc **spontanément** de façon que leurs **parties hydrophobes se regroupent à l’abri de l’eau**, tandis que leurs **parties hydrophiles restent au contact de l’eau**. Deux grands types d’assemblage en résultent.' },
          { type: 'definition', term: 'Micelle', text: 'petite sphère formée de molécules amphiphiles à **une seule queue** (acides gras, savons, détergents) : les têtes hydrophiles forment la surface, au contact de l’eau ; les queues hydrophobes sont regroupées au centre.' },
          { type: 'definition', term: 'Bicouche phospholipidique', text: 'double couche de phospholipides disposés **queue contre queue** : les têtes hydrophiles sont tournées vers l’eau de part et d’autre, les queues hydrophobes forment le cœur de la bicouche. Une bicouche se referme spontanément sur elle-même en une vésicule (**liposome**), qui contient de l’eau.' },
          { type: 'figure', image: IMG.micelleBicouche, caption: 'Assemblages de molécules amphiphiles dans l’eau : micelle (molécules à une queue), bicouche phospholipidique et liposome (molécules à deux queues). Dans tous les cas, les queues hydrophobes sont à l’abri de l’eau.', size: 'wide' },
          { type: 'p', text: 'La forme de la molécule détermine l’assemblage : une molécule à une queue a une forme de cône et forme des micelles ; un phospholipide, avec ses deux queues, a une forme de cylindre et forme surtout des **bicouches**. Toutes les membranes biologiques sont construites sur une bicouche.' },
          {
            type: 'cards',
            items: [
              { title: 'Se laver les mains', text: 'Le savon forme des micelles : les graisses sont piégées dans le cœur hydrophobe des micelles et emportées par l’eau.', tone: 'blue' },
              { title: 'Digérer les graisses', text: 'Dans l’intestin, les sels biliaires (amphiphiles) forment des micelles avec les produits de digestion des lipides, ce qui facilite leur absorption.', tone: 'yellow' },
              { title: 'Extraire l’ADN', text: 'Le détergent détruit les bicouches des membranes : les cellules éclatent et libèrent leur ADN.', tone: 'green' },
              { title: 'Transporter un médicament', text: 'Des liposomes ou des nanoparticules lipidiques transportent des médicaments ou l’ARN messager de certains vaccins.', tone: 'red' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Dans l’eau, les molécules amphiphiles regroupent spontanément leurs parties hydrophobes à l’abri de l’eau.',
              'Molécules à une queue → micelles ; phospholipides (deux queues) → bicouches, qui se referment en liposomes.',
              'La bicouche phospholipidique est la structure de base de toutes les membranes biologiques.',
            ],
          },
        ],
      },

      {
        title: 'La membrane plasmique : le modèle de la mosaïque fluide',
        intro: 'La membrane plasmique délimite la cellule. Les membranes du noyau, des mitochondries et des autres organites sont construites sur le même modèle.',
        blocks: [
          { type: 'p', text: 'Au **microscope électronique à transmission**, une membrane apparaît comme deux fines lignes sombres séparées par une ligne claire, sur une épaisseur totale d’environ **7,5 nm**. Elle est invisible au microscope optique, dont la limite de résolution est d’environ 0,2 µm (200 nm).' },
          { type: 'figure', image: IMG.met, caption: 'Membranes plasmiques de deux cellules voisines observées au microscope électronique à transmission (environ ×300 000). Chaque membrane présente l’aspect de « rails de chemin de fer » : deux lignes sombres (zones des têtes hydrophiles et des protéines) et une ligne claire (cœur hydrophobe de la bicouche).', size: 'wide' },
          {
            type: 'list',
            title: 'Composition de la membrane plasmique',
            items: [
              '**Lipides** : surtout des phospholipides, du **cholestérol** (dans les cellules animales) et des glycolipides.',
              '**Protéines** : en masse, à peu près autant que de lipides ; elles assurent la plupart des fonctions de la membrane.',
              '**Glucides** : quelques pour cent, fixés sur des lipides (glycolipides) ou des protéines (glycoprotéines), uniquement sur la **face externe**.',
            ],
          },
          { type: 'definition', term: 'Modèle de la mosaïque fluide', text: 'modèle de la membrane proposé par Seymour Jonathan Singer et Garth Nicolson en 1972. **Mosaïque** : des protéines variées sont insérées dans la bicouche phospholipidique, comme les pièces d’une mosaïque. **Fluide** : les phospholipides et beaucoup de protéines se déplacent latéralement dans leur couche ; la membrane n’est pas une structure figée.' },
          { type: 'figure', image: IMG.mosaique, caption: 'La membrane plasmique selon le modèle de la mosaïque fluide. Les glucides des glycoprotéines sont tournés vers le milieu extracellulaire ; le cholestérol s’intercale entre les phospholipides.', size: 'wide' },
          {
            type: 'compare',
            title: 'Deux façons de s’associer à la bicouche',
            columns: [
              { title: 'Protéines transmembranaires', subtitle: 'ou intrinsèques', items: ['Traversent toute la bicouche.', 'Leur partie au contact des queues est riche en acides aminés **hydrophobes** ; leurs parties en contact avec l’eau, de chaque côté, sont **hydrophiles**.', 'Exemples : transporteurs, la plupart des récepteurs.'] },
              { title: 'Protéines périphériques', subtitle: 'ou extrinsèques', items: ['Situées à la surface de la membrane, d’un seul côté.', 'Liées par des liaisons faibles aux têtes des phospholipides ou à d’autres protéines.', 'Exemples : protéines du cytosquelette fixées sous la membrane.'] },
            ],
          },
          { type: 'note', title: 'Une membrane asymétrique', text: 'Les deux faces de la membrane ne sont pas identiques : les glucides ne se trouvent que sur la face externe, où ils forment un « manteau » (glycocalyx) qui intervient dans la **reconnaissance** des cellules, par exemple les antigènes des groupes sanguins A, B et O. Le passage d’un phospholipide d’une couche à l’autre est rare.' },
          {
            type: 'steps',
            title: 'Représenter une membrane biologique dans un environnement aqueux',
            items: [
              { title: 'Les deux milieux', text: 'Indiquer de part et d’autre « milieu extracellulaire (aqueux) » et « cytoplasme (aqueux) ».' },
              { title: 'La bicouche', text: 'Dessiner deux rangées de symboles de phospholipides, têtes vers l’eau de chaque côté, queues face à face au centre.' },
              { title: 'Les protéines', text: 'Placer au moins une protéine transmembranaire traversant la bicouche et une protéine périphérique d’un seul côté.' },
              { title: 'Les glucides', text: 'Ajouter des chaînes de glucides uniquement sur la face externe (glycoprotéine, glycolipide).' },
              { title: 'Légender et titrer', text: 'Légendes à la règle : parties hydrophiles et hydrophobes, protéines, cholestérol ; titre : « Organisation de la membrane plasmique (modèle de la mosaïque fluide) ».' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Membrane plasmique = bicouche phospholipidique (≈ 7,5 nm) + cholestérol + protéines + glucides sur la face externe.',
              'Au microscope électronique : deux lignes sombres et une ligne claire.',
              'Modèle de la mosaïque fluide : protéines insérées dans une bicouche où lipides et protéines se déplacent latéralement.',
              'Protéines transmembranaires (parties hydrophobes dans la bicouche) et protéines périphériques (en surface).',
            ],
          },
        ],
      },

      {
        title: 'Une barrière sélective : transporteurs et récepteurs',
        intro: 'La bicouche arrête la plupart des molécules utiles à la cellule. Ce sont ses protéines qui ouvrent des passages et captent les messages.',
        blocks: [
          { type: 'p', text: 'Le cœur hydrophobe de la bicouche laisse passer facilement les **petites molécules apolaires** (dioxygène O~2~, dioxyde de carbone CO~2~, hormones stéroïdiennes). Les petites molécules polaires non chargées (eau, urée) la traversent lentement. Les **ions** (Na^+^, K^+^, Cl^−^) et les **grosses molécules polaires** (glucose, acides aminés) ne la traversent pratiquement pas : leur passage nécessite des protéines. La membrane a une **perméabilité sélective**.' },
          { type: 'definition', term: 'Transporteur', text: 'protéine transmembranaire qui permet à une substance précise de **traverser la membrane**. Elle est **spécifique** : elle ne laisse passer qu’une substance ou une famille de substances. Exemples : les transporteurs du glucose (GLUT), les aquaporines (canaux à eau), la pompe à ions sodium et potassium (Na^+^/K^+^-ATPase).' },
          { type: 'definition', term: 'Récepteur', text: 'protéine, le plus souvent transmembranaire, qui **fixe spécifiquement une molécule informative** (hormone, neurotransmetteur) sur un site de forme complémentaire. La fixation modifie la conformation du récepteur et déclenche une **réponse dans la cellule**. La molécule informative **ne traverse pas** la membrane.' },
          { type: 'figure', image: IMG.transportRecepteur, caption: 'Transporteur et récepteur : la molécule transportée traverse la membrane ; la molécule informative reste à l’extérieur, mais sa fixation au récepteur déclenche une réponse cellulaire.', size: 'wide' },
          {
            type: 'table',
            caption: 'Transporteur ou récepteur : la différence fonctionnelle',
            head: ['Critère', 'Transporteur', 'Récepteur'],
            rows: [
              ['Molécule prise en charge', 'Substance à faire entrer ou sortir (nutriment, ion, eau)', 'Molécule informative (hormone, neurotransmetteur)'],
              ['Devenir de cette molécule', '**Traverse la membrane**', '**Reste à l’extérieur**, fixée au récepteur'],
              ['Conséquence', 'Modification de la composition du milieu intérieur de la cellule', 'Transmission d’un message : réponse de la cellule'],
              ['Point commun', 'Protéine membranaire spécifique', 'Protéine membranaire spécifique'],
              ['Exemples', 'GLUT (glucose), aquaporines (eau)', 'Récepteur de l’insuline, récepteur de l’ADH'],
            ],
          },
          { type: 'example', title: 'deux cellules spécialisées', text: ['Une **cellule de l’intestin** (entérocyte) possède du côté de l’intestin un transporteur qui fait entrer le glucose avec des ions Na^+^ (SGLT1), et du côté du sang un autre transporteur (GLUT2) qui le fait sortir : le glucose traverse la cellule.', 'Une **cellule du rein** possède des récepteurs de l’hormone antidiurétique (ADH). Quand l’ADH s’y fixe, la cellule insère des aquaporines dans sa membrane et réabsorbe davantage d’eau.'] },
          { type: 'note', title: 'Le cas des hormones stéroïdiennes', text: 'Les hormones stéroïdiennes (testostérone, œstradiol, cortisol), dérivées du cholestérol, sont hydrophobes : elles traversent la bicouche et se fixent sur des **récepteurs situés à l’intérieur** de la cellule. Les hormones hydrophiles (insuline, ADH) ne peuvent pas traverser : leurs récepteurs sont membranaires.' },
          {
            type: 'retenir',
            items: [
              'La bicouche laisse passer les petites molécules apolaires, mais pas les ions ni les grosses molécules polaires : perméabilité sélective.',
              'Transporteur : protéine qui fait traverser la membrane à une substance précise.',
              'Récepteur : protéine qui fixe une molécule informative, sans la faire entrer, et déclenche une réponse de la cellule.',
              'Transporteurs et récepteurs sont des protéines spécifiques ; leur forme détermine la molécule prise en charge.',
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
        title: 'Qui traverse la bicouche ?',
        duration: '25 min',
        skills: ['Exploiter des données', 'Relier structure et propriété', 'Argumenter'],
        context: 'On fabrique au laboratoire des bicouches lipidiques artificielles, sans aucune protéine, et on teste leur perméabilité à différentes substances.',
        documents: [
          {
            label: 'Document 1',
            title: 'Perméabilité d’une bicouche lipidique artificielle',
            blocks: [
              {
                type: 'table',
                head: ['Substance', 'Caractéristiques', 'Passage à travers la bicouche'],
                rows: [
                  ['Dioxygène O~2~, dioxyde de carbone CO~2~', 'Petites molécules apolaires', 'Rapide'],
                  ['Eau H~2~O, urée', 'Petites molécules polaires non chargées', 'Lent'],
                  ['Glucose', 'Molécule polaire plus grosse (cinq –OH)', 'Très lent'],
                  ['Ions Na^+^, K^+^, Cl^−^', 'Petits ions chargés, entourés de molécules d’eau', 'Pratiquement nul'],
                ],
              },
            ],
            source: 'Données classiques de biologie cellulaire (ordres de grandeur)',
          },
        ],
        questions: [
          { text: 'Classe les substances de la plus perméante à la moins perméante, et relève les deux caractéristiques qui influencent le passage.', answer: 'O~2~ et CO~2~ > eau et urée > glucose > ions. Le passage dépend de la polarité (ou de la charge) et de la taille : les petites molécules apolaires passent le mieux, les ions et les grosses molécules polaires le moins.' },
          { text: 'Explique pourquoi les ions ne traversent pratiquement pas la bicouche.', hint: 'Quelle zone de la bicouche doivent-ils franchir ?', answer: 'Pour traverser, un ion devrait franchir le cœur hydrophobe formé par les queues des phospholipides. Chargé et entouré de molécules d’eau, il ne peut pas établir d’interactions avec ces chaînes apolaires : il est arrêté.' },
          { text: 'Les cellules absorbent pourtant rapidement du glucose et des ions. Que peut-on en déduire sur la membrane réelle ?', answer: 'La membrane réelle contient, en plus de la bicouche, des protéines (transporteurs, canaux) qui permettent le passage spécifique du glucose et des ions.' },
          { text: 'Prévois le comportement de la testostérone, hormone stéroïdienne dérivée du cholestérol, vis-à-vis de la bicouche. Justifie.', answer: 'La testostérone est essentiellement hydrophobe (noyau stérane) : elle traverse facilement le cœur hydrophobe de la bicouche, sans transporteur.' },
        ],
      },
      {
        title: 'Micelles, bicouches et savon',
        duration: '25 min',
        skills: ['Identifier', 'Schématiser', 'Expliquer'],
        context: 'Un savon est un mélange de sels d’acides gras. On compare son comportement dans l’eau à celui des phospholipides.',
        documents: [
          { label: 'Document 2', title: 'Formule de l’oléate de sodium, constituant d’un savon', text: ['CH~3~–(CH~2~)~7~–CH=CH–(CH~2~)~7~–COO^−^ Na^+^'] },
          { label: 'Document 3', title: 'Observations', text: ['Expérience 1 : de l’oléate de sodium agité dans l’eau forme des milliers de minuscules sphères, les micelles.', 'Expérience 2 : des phospholipides agités dans l’eau forment des vésicules creuses, remplies d’eau, dont la paroi est une bicouche (liposomes).', 'Expérience 3 : de l’huile agitée dans l’eau forme des gouttelettes qui remontent ; si l’on ajoute du savon, l’huile reste dispersée en fines gouttelettes.'] },
          { label: 'Document 4', title: 'Assemblages dans l’eau', image: IMG.micelleBicouche, caption: 'Micelle, bicouche et liposome.' },
        ],
        questions: [
          { text: 'Repère, dans la formule de l’oléate de sodium, la partie hydrophile et la partie hydrophobe. Comment qualifie-t-on une telle molécule ?', answer: 'La partie hydrophile est le groupement carboxylate –COO^−^ (chargé) ; la partie hydrophobe est la longue chaîne hydrocarbonée CH~3~–(CH~2~)~7~–CH=CH–(CH~2~)~7~–. C’est une molécule amphiphile.' },
          { text: 'Schématise une micelle d’oléate dans l’eau en symbolisant chaque molécule par un cercle (tête) et un trait (queue). Justifie l’orientation des molécules.', answer: 'Les cercles forment la surface de la sphère, au contact de l’eau ; les traits sont tous dirigés vers le centre. Ainsi, les parties hydrophiles interagissent avec l’eau et les parties hydrophobes sont regroupées à l’abri de l’eau.' },
          { text: 'Pourquoi les phospholipides forment-ils des bicouches plutôt que des micelles ?', hint: 'Compare le nombre de queues.', answer: 'Un phospholipide possède deux queues : sa forme est à peu près cylindrique et les molécules ne peuvent pas se regrouper en une petite sphère. Elles se placent côte à côte en deux couches, queue contre queue, têtes vers l’eau de chaque côté.' },
          { text: 'Explique, à l’aide de l’expérience 3, comment le savon élimine une tache de graisse.', answer: 'Les chaînes hydrophobes des molécules de savon s’associent à la graisse (hydrophobe), tandis que leurs têtes restent au contact de l’eau. La graisse se retrouve enfermée au cœur des micelles, dispersée dans l’eau, et elle est emportée au rinçage.' },
        ],
      },
      {
        title: 'Lire une électronographie de membrane',
        duration: '25 min',
        skills: ['Observer', 'Calculer', 'Schématiser'],
        context: 'Les premières images de membranes ont été obtenues au microscope électronique dans les années 1950. Elles ont permis de proposer des modèles de leur organisation.',
        documents: [
          { label: 'Document 5', title: 'Membranes plasmiques de deux cellules voisines (MET)', image: IMG.met, caption: 'Cliché de microscopie électronique à transmission.' },
          { label: 'Document 6', title: 'Données', text: ['Sur le cliché imprimé, le grandissement est de ×300 000. L’épaisseur d’une membrane, d’un bord sombre à l’autre, mesure 2,25 mm sur le cliché.', 'Pour obtenir ce cliché, l’échantillon est traité par un composé contenant un métal lourd (l’osmium), qui se fixe surtout sur les parties polaires (têtes des phospholipides, protéines) et les rend sombres.'] },
        ],
        questions: [
          { text: 'Décris l’aspect d’une membrane sur le cliché.', answer: 'Chaque membrane apparaît comme deux fines lignes sombres parallèles, séparées par une ligne claire : un aspect en « rails de chemin de fer ».' },
          { text: 'Calcule l’épaisseur réelle de la membrane, en nanomètres.', hint: 'Taille réelle = taille sur le cliché ÷ grandissement ; 1 mm = 1 000 000 nm.', answer: '2,25 mm = 2 250 000 nm. Épaisseur réelle = 2 250 000 ÷ 300 000 = 7,5 nm.' },
          { text: 'Pourquoi cette structure est-elle invisible au microscope optique ?', answer: 'Sa limite de résolution est d’environ 0,2 µm, soit 200 nm : une membrane de 7,5 nm d’épaisseur est beaucoup trop fine pour être distinguée. Il faut le microscope électronique, dont la résolution atteint le nanomètre.' },
          { text: 'À l’aide du document 6, relie les lignes sombres et la ligne claire à l’organisation de la bicouche.', answer: 'Les deux lignes sombres correspondent aux zones polaires (têtes hydrophiles des phospholipides et protéines), qui fixent l’osmium : il y en a une de chaque côté de la membrane. La ligne claire centrale correspond au cœur hydrophobe formé par les queues d’acides gras, qui fixe peu l’osmium.' },
          { text: 'Réalise le schéma légendé d’une membrane dans son environnement aqueux, selon le modèle de la mosaïque fluide.', hint: 'Suis la méthode de la partie 3 du cours : milieux, bicouche, protéines, glucides, légendes, titre.', answer: 'Compare ton schéma à la figure de la mosaïque fluide : milieu extracellulaire et cytoplasme indiqués ; bicouche de phospholipides (têtes vers l’eau, queues au centre) ; au moins une protéine transmembranaire et une protéine périphérique ; glucides sur la face externe seulement ; légendes à la règle et titre complet.' },
        ],
      },
      {
        title: 'Transporteur ou récepteur ? Deux cellules spécialisées',
        duration: '30 min',
        skills: ['Exploiter des documents', 'Classer', 'Argumenter'],
        context: 'Les cellules de l’intestin et du rein échangent beaucoup de substances avec leur milieu. Leurs membranes portent des protéines spécialisées.',
        documents: [
          { label: 'Document 7', title: 'Une cellule de l’intestin grêle (entérocyte)', text: ['Du côté de l’intestin (pôle apical), la protéine SGLT1 fait entrer dans la cellule le glucose issu de la digestion, en même temps que des ions sodium Na^+^.', 'Du côté du sang (pôle basal), la protéine GLUT2 laisse sortir le glucose de la cellule vers le sang.'] },
          { label: 'Document 8', title: 'Une cellule du rein (tube collecteur)', text: ['L’hormone antidiurétique (ADH) est un petit peptide de 9 acides aminés, hydrophile, sécrété quand l’organisme manque d’eau.', 'Côté sang, l’ADH se fixe sur une protéine membranaire, la protéine V2. Cette fixation déclenche dans la cellule une série de réactions qui aboutit à l’insertion d’aquaporines (canaux à eau) dans la membrane côté urine : l’eau de l’urine est alors réabsorbée vers le sang.'] },
          { label: 'Document 9', title: 'Une maladie rare', text: ['Dans le diabète insipide néphrogénique héréditaire, le plus souvent, la protéine V2 est anormale et ne fixe plus l’ADH. Les personnes atteintes produisent de très grands volumes d’urine diluée (plusieurs litres par jour), même lorsque leur taux d’ADH est normal.'] },
          { label: 'Document 10', title: 'Transporteur et récepteur', image: IMG.transportRecepteur, caption: 'Schéma comparatif.' },
        ],
        questions: [
          { text: 'Classe SGLT1, GLUT2, la protéine V2 et les aquaporines en transporteurs ou récepteurs. Justifie chaque choix.', answer: 'SGLT1, GLUT2 et les aquaporines sont des transporteurs : elles font traverser la membrane à une substance (glucose, ions Na^+^, eau). La protéine V2 est un récepteur : elle fixe une molécule informative, l’ADH, qui reste à l’extérieur, et déclenche une réponse dans la cellule.' },
          { text: 'Rédige en deux phrases la différence fonctionnelle entre un transporteur et un récepteur.', answer: 'Un transporteur permet à une substance précise de traverser la membrane : il modifie la composition des milieux de part et d’autre. Un récepteur fixe une molécule informative sans la faire entrer : il transmet un message qui déclenche une réponse de la cellule.' },
          { text: 'Pourquoi l’ADH a-t-elle besoin d’un récepteur membranaire pour agir ?', hint: 'Relis les propriétés de l’ADH (document 8) et celles de la bicouche.', answer: 'L’ADH est un peptide hydrophile : il ne peut pas traverser le cœur hydrophobe de la bicouche. Il agit donc en se fixant sur un récepteur situé à la surface de la cellule.' },
          { text: 'Explique pourquoi les personnes atteintes de diabète insipide néphrogénique produisent beaucoup d’urine malgré un taux d’ADH normal.', answer: 'Leur récepteur V2 anormal ne fixe plus l’ADH : le message n’est pas reçu par les cellules du rein. Les aquaporines ne sont pas insérées dans la membrane, l’eau de l’urine n’est pas réabsorbée et les urines sont abondantes et diluées. Le problème vient du récepteur, pas de l’hormone.' },
          { text: 'Montre que ces exemples illustrent la relation entre structure et fonction des protéines membranaires.', answer: 'Chaque protéine possède une forme précise qui lui permet de prendre en charge une seule substance (glucose, eau, ADH) : c’est sa spécificité. Une modification de la structure de la protéine V2 (protéine anormale) suffit à supprimer sa fonction de récepteur.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'Un phospholipide est formé d’un glycérol, de deux acides gras et d’un groupement phosphate lié à un groupement polaire : tête hydrophile, deux queues hydrophobes.',
      'Dans l’eau, les molécules amphiphiles s’assemblent spontanément, parties hydrophobes à l’abri de l’eau : micelles (une queue) ou bicouches (deux queues).',
      'La membrane plasmique est une bicouche phospholipidique d’environ 7,5 nm associée à du cholestérol, à des protéines et, sur la face externe, à des glucides.',
      'Modèle de la mosaïque fluide : des protéines insérées dans une bicouche où lipides et protéines se déplacent latéralement.',
      'La bicouche laisse passer les petites molécules apolaires, mais arrête les ions et les grosses molécules polaires : perméabilité sélective.',
      'Un transporteur fait traverser la membrane à une substance ; un récepteur fixe une molécule informative et déclenche une réponse, sans la faire entrer.',
    ],
    method: {
      title: 'Prévoir le comportement d’une molécule vis-à-vis d’une membrane',
      steps: [
        'Repérer les zones hydrophiles (groupes polaires ou chargés) et hydrophobes (chaînes hydrocarbonées, noyau stérane).',
        'Si la molécule est petite et apolaire (ou très hydrophobe), prévoir qu’elle traverse directement la bicouche.',
        'Si elle est chargée ou grosse et polaire, prévoir qu’un transporteur est nécessaire.',
        'Si c’est une molécule informative hydrophile, prévoir qu’elle agit par un récepteur membranaire.',
      ],
    },
    vocabulary: [
      { term: 'Phospholipide', definition: 'Lipide formé d’un glycérol, de deux acides gras et d’un groupement phosphate lié à un groupement polaire.' },
      { term: 'Amphiphile', definition: 'Se dit d’une molécule possédant une partie hydrophile et une partie hydrophobe.' },
      { term: 'Micelle', definition: 'Sphère de molécules amphiphiles à une queue, têtes vers l’eau, queues au centre.' },
      { term: 'Bicouche phospholipidique', definition: 'Double couche de phospholipides disposés queue contre queue, têtes vers l’eau de chaque côté.' },
      { term: 'Liposome', definition: 'Vésicule dont la paroi est une bicouche de phospholipides, contenant de l’eau.' },
      { term: 'Membrane plasmique', definition: 'Membrane qui délimite la cellule et la sépare du milieu extracellulaire.' },
      { term: 'Mosaïque fluide', definition: 'Modèle de membrane : protéines insérées dans une bicouche lipidique où les molécules se déplacent latéralement.' },
      { term: 'Protéine transmembranaire', definition: 'Protéine qui traverse toute la bicouche.' },
      { term: 'Protéine périphérique', definition: 'Protéine fixée à la surface de la membrane, d’un seul côté.' },
      { term: 'Glycoprotéine', definition: 'Protéine portant des chaînes de glucides, tournées vers le milieu extracellulaire.' },
      { term: 'Perméabilité sélective', definition: 'Propriété de la membrane de laisser passer certaines substances et pas d’autres.' },
      { term: 'Transporteur', definition: 'Protéine membranaire qui fait traverser la membrane à une substance précise.' },
      { term: 'Récepteur', definition: 'Protéine qui fixe spécifiquement une molécule informative et déclenche une réponse cellulaire.' },
    ],
    mistakes: [
      { wrong: 'Dessiner une bicouche avec les queues hydrophobes tournées vers l’eau.', right: 'Les têtes hydrophiles sont au contact de l’eau des deux côtés ; les queues hydrophobes sont face à face au centre.' },
      { wrong: 'Confondre micelle et bicouche.', right: 'Micelle : une seule couche de molécules à une queue, en sphère pleine. Bicouche : deux couches de phospholipides, qui peuvent former une vésicule creuse.' },
      { wrong: 'Dire que la molécule informative entre dans la cellule par son récepteur.', right: 'Une molécule qui se fixe sur un récepteur membranaire reste à l’extérieur : c’est le message qui est transmis.' },
      { wrong: 'Placer des glucides sur les deux faces de la membrane.', right: 'Les glucides membranaires sont uniquement sur la face externe.' },
      { wrong: 'Croire que la membrane est une structure rigide.', right: 'Elle est fluide : phospholipides et protéines se déplacent latéralement dans leur couche.' },
      { wrong: 'Penser que toutes les hormones ont un récepteur membranaire.', right: 'Les hormones stéroïdiennes, hydrophobes, traversent la membrane et ont des récepteurs à l’intérieur de la cellule.' },
    ],
    quiz: [
      { question: 'Un phospholipide est formé de :', choices: ['glycérol + 3 acides gras', 'glycérol + 2 acides gras + groupement phosphate', 'cholestérol + phosphate', 'acides aminés + phosphate'], answer: 1, explanation: 'Deux fonctions alcool du glycérol sont estérifiées par des acides gras, la troisième par un groupement phosphate.' },
      { question: 'La tête d’un phospholipide est :', choices: ['hydrophobe', 'apolaire', 'formée d’acides gras', 'hydrophile'], answer: 3, explanation: 'Le groupement phosphate chargé et le groupement polaire interagissent avec l’eau : la tête est hydrophile.' },
      { question: 'Dans l’eau, des molécules amphiphiles à une seule queue forment surtout :', choices: ['des micelles', 'des bicouches', 'des cristaux', 'des liaisons peptidiques'], answer: 0, explanation: 'Les molécules à une queue (acides gras, savons) se regroupent en micelles, queues au centre.' },
      { question: 'Au microscope électronique, la membrane plasmique apparaît comme :', choices: ['une ligne sombre unique', 'un réseau de fibres', 'deux lignes sombres séparées par une ligne claire', 'une couche de petits grains'], answer: 2, explanation: 'Aspect en « rails » : deux lignes sombres (zones polaires) et une ligne claire (cœur hydrophobe).' },
      { question: 'L’épaisseur de la membrane plasmique est d’environ :', choices: ['7,5 µm', '7,5 nm', '0,2 µm', '75 nm'], answer: 1, explanation: 'Environ 7,5 nm, ce qui la rend invisible au microscope optique.' },
      { question: 'Dans le modèle de la mosaïque fluide, le mot « fluide » signifie que :', choices: ['la membrane est liquide comme l’eau', 'la membrane laisse tout passer', 'les protéines changent de séquence', 'les lipides et les protéines se déplacent latéralement'], answer: 3, explanation: 'Les phospholipides et beaucoup de protéines diffusent latéralement dans leur couche.' },
      { question: 'Quelle molécule traverse le plus facilement une bicouche lipidique sans protéine ?', choices: ['Le dioxygène', 'Le glucose', 'L’ion sodium', 'Une protéine'], answer: 0, explanation: 'Petite et apolaire, la molécule de dioxygène traverse facilement le cœur hydrophobe.' },
      { question: 'Un transporteur membranaire :', choices: ['fixe une hormone qui reste à l’extérieur', 'est un phospholipide', 'fait traverser la membrane à une substance précise', 'se trouve seulement dans le noyau'], answer: 2, explanation: 'Le transporteur permet le passage spécifique d’une substance à travers la membrane.' },
      { question: 'La fixation de l’ADH sur son récepteur :', choices: ['fait entrer l’ADH dans la cellule', 'déclenche une réponse dans la cellule', 'détruit la membrane', 'transporte du glucose'], answer: 1, explanation: 'L’ADH reste à l’extérieur ; sa fixation sur le récepteur déclenche une réponse (insertion d’aquaporines).' },
    ],
    exercises: [
      {
        title: 'Schématiser',
        statement: 'Réalise le schéma légendé : a) d’un phospholipide ; b) d’une micelle d’acides gras dans l’eau ; c) d’une bicouche phospholipidique séparant deux milieux aqueux.',
        answer: ['a) Un cercle (tête hydrophile : groupement phosphate) et deux traits (queues hydrophobes : chaînes d’acides gras).', 'b) Des molécules à un trait disposées en cercle, têtes à l’extérieur au contact de l’eau, queues vers le centre.', 'c) Deux rangées de phospholipides, queues face à face au centre, têtes vers l’eau de chaque côté ; légendes « milieu aqueux » de part et d’autre, « partie hydrophile », « partie hydrophobe ».'],
      },
      {
        title: 'Calcul d’épaisseur',
        statement: 'Sur une électronographie au grandissement ×200 000, une membrane plasmique mesure 1,5 mm d’épaisseur. Calcule son épaisseur réelle en nanomètres et indique si le résultat est cohérent.',
        answer: '1,5 mm = 1 500 000 nm ; 1 500 000 ÷ 200 000 = 7,5 nm. C’est cohérent avec l’épaisseur d’une bicouche phospholipidique et de ses protéines (environ 7 à 8 nm).',
      },
      {
        title: 'Insuline et glucose',
        statement: 'Dans une cellule musculaire, l’insuline se fixe sur une protéine membranaire, ce qui provoque l’arrivée à la membrane de protéines GLUT4 qui font entrer le glucose. Identifie le récepteur et le transporteur, et justifie.',
        answer: 'La protéine qui fixe l’insuline est un récepteur : elle fixe une molécule informative (l’insuline reste à l’extérieur) et déclenche une réponse cellulaire. GLUT4 est un transporteur : il fait traverser la membrane au glucose, qui entre dans la cellule.',
      },
    ],
    selfCheck: [
      'Je sais repérer les zones hydrophiles et hydrophobes d’une molécule et prévoir son comportement dans l’eau.',
      'Je sais schématiser un phospholipide et expliquer pourquoi il est amphiphile.',
      'Je sais expliquer la formation d’une micelle et d’une bicouche dans l’eau.',
      'Je sais décrire une membrane observée au microscope électronique et calculer son épaisseur.',
      'Je sais représenter une membrane dans un milieu aqueux selon le modèle de la mosaïque fluide.',
      'Je sais expliquer la différence fonctionnelle entre un transporteur et un récepteur.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Phospholipide — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Phospholipide' },
      { title: 'Micelle — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Micelle' },
      { title: 'Bicouche lipidique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Bicouche_lipidique' },
      { title: 'Membrane plasmique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Membrane_plasmique' },
      { title: 'Protéine membranaire — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Prot%C3%A9ine_membranaire' },
      { title: 'Récepteur (biochimie) — Wikipédia', url: 'https://fr.wikipedia.org/wiki/R%C3%A9cepteur_(biochimie)' },
    ],
  },
};

export default lesson;
