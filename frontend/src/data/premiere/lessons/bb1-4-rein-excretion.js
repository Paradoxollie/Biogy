import { img } from '../media';
import appareilUrinaire from '../../../assets/courses/premiere/bb1-4-rein-excretion/appareil-urinaire.webp';
import coupeRein from '../../../assets/courses/premiere/bb1-4-rein-excretion/coupe-rein.webp';
import nephron from '../../../assets/courses/premiere/bb1-4-rein-excretion/nephron.webp';
import corpuscule from '../../../assets/courses/premiere/bb1-4-rein-excretion/corpuscule-micro.webp';
import hemodialyse from '../../../assets/courses/premiere/bb1-4-rein-excretion/hemodialyse.webp';

const IMG = {
  appareil: img(appareilUrinaire, 'Schéma annoté de l’appareil urinaire vu de face : deux reins, artères et veines rénales, aorte, veine cave inférieure, uretères, vessie et urètre, devant la colonne vertébrale et le bassin.', 'schema', 933, 1400),
  coupe: img(coupeRein, 'Schéma d’une coupe longitudinale de rein : capsule, cortex (en vert), médulla formée de pyramides rénales, calices, bassinet, uretère, artère et veine rénales.', 'schema', 1400, 933),
  nephron: img(nephron, 'Schéma annoté d’un néphron : artérioles afférente et efférente, glomérule, capsule de Bowman, tube contourné proximal, anse de Henlé, tube contourné distal, tube collecteur, capillaires péritubulaires, limite cortex-médulla.', 'schema', 933, 1400),
  corpuscule: img(corpuscule, 'Microphotographie de cortex rénal colorée à l’hématoxyline-éosine : un corpuscule rénal arrondi, avec son peloton de capillaires entouré d’un espace clair, au milieu de coupes de tubes.', 'micro', 1536, 1024),
  dialyse: img(hemodialyse, 'Hémodialyseur fixé sur un générateur de dialyse : cylindre transparent rempli de fibres creuses, tubulures de sang rouge aux extrémités et tubulures de dialysat sur le côté.', 'photo', 1536, 1024),
};

const lesson = {
  version: 2,
  id: 'bb1-4-rein-excretion',
  duration: 'Environ 5 séances (cours, observations microscopiques, études de cas)',
  hook: {
    image: IMG.dialyse,
    question: 'Chaque jour, tes reins filtrent environ 180 litres de plasma, mais tu n’urines qu’un litre et demi. Que deviennent les 178 litres restants ? Et comment une machine peut-elle remplacer des reins malades ?',
    text: 'Les reins ne sont pas de simples « filtres à déchets » : ils trient en permanence le plasma, récupèrent presque tout ce qui est utile et ajustent la quantité d’eau rejetée selon tes besoins. Dans ce chapitre, tu découvres l’appareil urinaire, le néphron, les étapes de la formation de l’urine et leurs mécanismes moléculaires, puis ce qui se passe quand le rein est malade.',
  },
  objectives: [
    'Dessiner l’appareil urinaire (reins, uretères, vessie, urètre) et situer la lumière des voies urinaires.',
    'Identifier le néphron comme unité fonctionnelle de formation de l’urine et le localiser dans le rein.',
    'Illustrer le rôle du rein dans l’élimination de l’eau et des métabolites en comparant plasma et urine, et en comparant un rein et un hémodialyseur.',
    'Expliquer et localiser les mécanismes de formation de l’urine : filtration sélective, réabsorption, excrétion.',
    'Relier la structure du corpuscule rénal (glomérule, podocytes, pédicelles) à sa fonction de filtration.',
    'Expliquer le mécanisme moléculaire de la réabsorption du glucose (saturation des transporteurs) et la réabsorption de l’eau régulée par l’ADH.',
  ],
  prerequisites: [
    'Chapitre 1.3 : transport passif et actif, gradient électrochimique, co-transport sodium-glucose de l’entérocyte, cellule polarisée.',
    'Chapitre 1.2 : la lumière d’un organe creux appartient au milieu extérieur.',
    'Cycle 4 : organes de l’appareil urinaire, circulation sanguine.',
  ],
  program: [
    'Représenter par un dessin les organes de l’appareil urinaire : lumière (milieu extérieur), uretère / urètre.',
    'Identifier l’unité fonctionnelle de formation de l’urine : le néphron.',
    'Illustrer les rôles du rein dans l’élimination de l’eau et de métabolites : diurèse, métabolites ; comparaison plasma / urine définitive, comparaison d’un hémodialyseur et d’un rein.',
    'Expliquer les mécanismes de formation de l’urine et leur localisation : filtration sélective, réabsorption, excrétion.',
    'Mettre en relation la structure du corpuscule rénal et sa fonction de filtration : glomérule, podocytes, pédicelles ; maladie de Berger.',
    'Expliquer à partir d’un schéma le mécanisme moléculaire de la réabsorption du glucose : saturation, transporteur, transport passif / actif, gradient électrochimique, co-transport.',
    'Expliquer à partir d’un schéma simple la réabsorption d’eau régulée par l’ADH : gradient hydrique, aquaporine, volémie, hormone, membrane apicale / membrane basale.',
  ],

  course: {
    parts: [
      {
        title: 'L’appareil urinaire',
        intro: 'Deux reins fabriquent l’urine en continu ; des conduits l’évacuent et une poche la stocke.',
        blocks: [
          { type: 'p', text: 'L’**appareil urinaire** élimine les déchets du métabolisme et règle la quantité d’eau et la composition du sang. Il comprend deux **reins**, qui forment l’urine, et les **voies urinaires**, qui l’évacuent : deux uretères, la vessie et l’urètre.' },
          { type: 'figure', image: IMG.appareil, caption: 'L’appareil urinaire, vue de face. Chaque rein reçoit une artère rénale, branche de l’aorte, et renvoie son sang par une veine rénale dans la veine cave inférieure.', size: 'normal' },
          {
            type: 'table',
            caption: 'Les organes de l’appareil urinaire',
            head: ['Organe', 'Description', 'Rôle'],
            rows: [
              ['Reins', 'Deux organes en forme de haricot, d’environ 12 cm et 150 g, situés contre la paroi postérieure de l’abdomen, de part et d’autre de la colonne vertébrale', 'Filtrent le sang et forment l’urine ; ils reçoivent environ 1,2 L de sang par minute, soit 20 à 25 % du débit du cœur.'],
              ['Artère et veine rénales', 'Branche de l’aorte ; affluent de la veine cave inférieure', 'Amènent le sang à filtrer ; ramènent le sang « épuré ».'],
              ['Uretères', 'Deux conduits musculaires d’environ 25 cm', 'Conduisent l’urine de chaque rein à la vessie, par péristaltisme.'],
              ['Vessie', 'Poche musculaire extensible, dans le bassin', 'Stocke l’urine ; le besoin d’uriner apparaît vers 300 à 400 mL.'],
              ['Urètre', 'Un seul conduit (environ 4 cm chez la femme, 20 cm chez l’homme)', 'Évacue l’urine de la vessie vers l’extérieur (miction).'],
            ],
          },
          { type: 'warning', title: 'Uretère ou urètre ?', text: 'Les **uretères** (au pluriel, il y en a deux) relient les reins à la vessie. L’**urètre** (un seul) relie la vessie à l’extérieur. Moyen mnémotechnique : l’urètre est le plus court mot… et le dernier conduit.' },
          { type: 'definition', term: 'Lumière des voies urinaires', text: 'espace intérieur des tubes du rein, des uretères, de la vessie et de l’urètre. Elle communique avec l’extérieur : elle appartient au **milieu extérieur**. Dès qu’une substance passe du sang dans la lumière d’un tube rénal, elle est sur le chemin de la sortie, sauf si elle est récupérée (réabsorbée).' },
          { type: 'note', title: 'Le rein, aussi une glande endocrine', text: 'Le rein produit l’érythropoïétine (EPO), hormone qui stimule la fabrication des globules rouges, et active la vitamine D. C’est pourquoi l’insuffisance rénale s’accompagne souvent d’anémie et de fragilité osseuse.' },
          {
            type: 'retenir',
            items: [
              'Appareil urinaire = 2 **reins** + 2 **uretères** + **vessie** + **urètre**.',
              'La lumière des voies urinaires appartient au **milieu extérieur**.',
              'Uretères : reins → vessie ; urètre : vessie → extérieur.',
            ],
          },
        ],
      },

      {
        title: 'Le néphron, unité fonctionnelle du rein',
        intro: 'Chaque rein contient environ un million de petites unités qui fabriquent l’urine : les néphrons.',
        blocks: [
          { type: 'figure', image: IMG.coupe, caption: 'Coupe longitudinale d’un rein. Le cortex (en vert) contient les corpuscules rénaux ; la médulla est formée de pyramides striées par les anses de Henlé et les tubes collecteurs ; l’urine s’écoule par les calices dans le bassinet, puis dans l’uretère.', size: 'wide' },
          { type: 'p', text: 'En coupe, le rein montre une zone périphérique granuleuse, le **cortex**, et une zone profonde striée, la **médulla**, formée de **pyramides rénales**. La pointe de chaque pyramide (papille) déverse l’urine dans un **calice** ; les calices se rejoignent dans le **bassinet**, qui se prolonge par l’uretère.' },
          { type: 'definition', term: 'Néphron', text: 'unité structurale et fonctionnelle du rein, qui forme l’urine à partir du plasma. Chaque rein en contient environ un million. Le néphron est un tube microscopique, fermé à une extrémité par le corpuscule rénal et ouvert à l’autre dans un tube collecteur ; il s’étend du cortex à la médulla.' },
          { type: 'figure', image: IMG.nephron, caption: 'Organisation d’un néphron et de ses vaisseaux. Le tubule (en vert) va de la capsule de Bowman au tube contourné distal, qui débouche dans un tube collecteur commun à plusieurs néphrons.', size: 'normal' },
          {
            type: 'table',
            caption: 'Les parties du néphron',
            head: ['Partie', 'Localisation', 'Rôle principal'],
            rows: [
              ['Corpuscule rénal (glomérule + capsule de Bowman)', 'Cortex', '**Filtration** du plasma : formation de l’urine primitive.'],
              ['Tube contourné proximal', 'Cortex', '**Réabsorption** massive : tout le glucose et les acides aminés, environ deux tiers de l’eau et du sodium.'],
              ['Anse de Henlé', 'Médulla', 'Réabsorption d’eau et de sel ; rend le milieu de la médulla très concentré, ce qui permet de concentrer l’urine.'],
              ['Tube contourné distal', 'Cortex', 'Ajustement fin de la réabsorption des ions (sodium, potassium).'],
              ['Tube collecteur', 'Du cortex à la papille', 'Réabsorption d’eau **réglée par l’ADH** ; conduit l’urine définitive vers les calices.'],
            ],
          },
          { type: 'p', text: 'Le sang suit un trajet particulier : artère rénale → **artériole afférente** → capillaires du **glomérule** → **artériole efférente** → **capillaires péritubulaires**, qui entourent les tubes et récupèrent les substances réabsorbées → veinules → veine rénale. Deux réseaux de capillaires se succèdent donc : l’un sert à filtrer, l’autre à réabsorber.' },
          {
            type: 'retenir',
            items: [
              'Le rein comprend un **cortex**, une **médulla** (pyramides), des **calices** et un **bassinet**.',
              'Le **néphron** est l’unité fonctionnelle du rein : corpuscule rénal, tube contourné proximal, anse de Henlé, tube contourné distal, puis tube collecteur.',
              'Le sang traverse deux réseaux de capillaires : glomérulaire (filtration) puis péritubulaire (réabsorption).',
            ],
          },
        ],
      },

      {
        title: 'Le rein élimine l’eau et les déchets du métabolisme',
        intro: 'Comparer la composition du plasma et celle de l’urine révèle ce que le rein garde et ce qu’il rejette.',
        blocks: [
          { type: 'definition', term: 'Métabolites (déchets)', text: 'substances produites par le fonctionnement des cellules, inutiles ou toxiques si elles s’accumulent. Les principaux sont l’**urée** (fabriquée par le foie à partir de l’azote des acides aminés en excès, 20 à 30 g éliminés par jour), la **créatinine** (issue des muscles, produite en quantité à peu près constante) et l’**acide urique** (issu de la dégradation des acides nucléiques ; en excès, il provoque la goutte). Le rein élimine aussi des médicaments et les ions en excès.' },
          { type: 'definition', term: 'Diurèse', text: 'volume d’urine produit par unité de temps, en général exprimé en litres par 24 heures. Chez l’adulte, elle est d’environ **1,5 L par jour**, mais varie de 0,5 à plus de 2,5 L selon la boisson, la transpiration et l’alimentation.' },
          {
            type: 'table',
            caption: 'Composition du plasma et de l’urine définitive (valeurs moyennes indicatives, en g/L)',
            head: ['Constituant', 'Plasma', 'Urine définitive', 'Concentration dans l’urine / plasma'],
            rows: [
              ['Eau', '910', '950', '—'],
              ['Protéines', '70', '0', 'Absentes de l’urine'],
              ['Glucose', '1', '0', 'Absent de l’urine'],
              ['Urée', '0,3', '20', '× 67'],
              ['Créatinine', '0,01', '1', '× 100'],
              ['Acide urique', '0,04', '0,5', '× 12'],
              ['Ions sodium Na^+^', '3,3', '3,5', 'Environ × 1 (variable)'],
              ['Ions potassium K^+^', '0,2', '2', '× 10'],
            ],
          },
          { type: 'p', text: 'Deux catégories apparaissent : les substances **utiles** (protéines, glucose) sont absentes de l’urine, elles sont conservées ; les **déchets** (urée, créatinine, acide urique) sont jusqu’à 100 fois plus concentrés dans l’urine que dans le plasma : le rein les **concentre** pour les éliminer avec peu d’eau. La teneur en eau et en ions de l’urine varie selon les apports : le rein ajuste ce qu’il rejette pour garder un milieu intérieur stable.' },
          { type: 'p', text: '**Quand les reins ne fonctionnent plus.** Dans l’insuffisance rénale chronique, les néphrons sont détruits peu à peu. Au stade terminal, l’urée, la créatinine et le potassium s’accumulent dans le sang (l’excès de potassium peut arrêter le cœur) et l’eau est retenue (œdèmes). Il faut alors une **greffe de rein** ou une **dialyse**.' },
          { type: 'figure', image: IMG.dialyse, caption: 'Un hémodialyseur : le sang du patient circule dans des milliers de fibres creuses dont la paroi est une membrane semi-perméable ; le dialysat circule autour, en sens inverse.', size: 'wide' },
          { type: 'definition', term: 'Hémodialyse', text: 'technique qui épure le sang hors du corps. Le sang circule d’un côté d’une membrane semi-perméable, un liquide de dialyse (**dialysat**) de l’autre. Les petites molécules passent par **diffusion**, du milieu le plus concentré vers le moins concentré : l’urée, la créatinine et le potassium en excès passent du sang vers le dialysat, qui n’en contient pas ou peu. Le dialysat contient du glucose, du sodium et des bicarbonates aux concentrations normales du plasma, pour que le sang ne les perde pas. Une légère pression retire l’eau en excès (ultrafiltration).' },
          {
            type: 'compare',
            title: 'Rein ou hémodialyseur ?',
            columns: [
              { title: 'Rein', items: ['Fonctionne **en continu**, 24 heures sur 24.', 'Filtration puis **réabsorption sélective** : il récupère ce qui est utile, grâce à des transporteurs.', 'Ajuste l’élimination d’eau et d’ions selon les besoins (hormones comme l’ADH).', 'Produit aussi des hormones (EPO, forme active de la vitamine D).'] },
              { title: 'Hémodialyseur', items: ['Fonctionne **par séances**, souvent trois fois 4 heures par semaine.', 'Simple **diffusion** à travers une membrane : pas de réabsorption ; c’est la composition du dialysat qui évite les pertes.', 'Pas de régulation hormonale ; le patient doit limiter ce qu’il boit et le potassium qu’il mange.', 'Aucune fonction hormonale (traitements complémentaires nécessaires).'] },
            ],
          },
          {
            type: 'retenir',
            items: [
              'Le rein élimine l’eau et les **métabolites** (urée, créatinine, acide urique) en les concentrant fortement dans l’urine.',
              'Il conserve les substances utiles : l’urine normale ne contient ni protéines ni glucose.',
              'La **diurèse** est d’environ 1,5 L par jour et varie selon les apports en eau.',
              'L’hémodialyseur épure le sang par diffusion à travers une membrane, mais sans réabsorption sélective ni régulation.',
            ],
          },
        ],
      },

      {
        title: 'Les mécanismes de formation de l’urine',
        intro: 'L’urine se forme en trois temps : le rein filtre beaucoup, récupère presque tout, puis élimine le reste.',
        blocks: [
          {
            type: 'steps',
            title: 'Les étapes de la formation de l’urine',
            items: [
              { title: 'Filtration sélective (corpuscule rénal)', text: 'Sous l’effet de la pression du sang dans le glomérule, une partie du plasma passe dans la capsule de Bowman. L’eau et les petites molécules (glucose, acides aminés, urée, ions) passent ; les cellules sanguines et les protéines sont retenues. Le filtrat est l’**urine primitive** : environ **180 L par jour**.' },
              { title: 'Réabsorption (tubes)', text: 'Les substances utiles repassent de la lumière des tubes vers le sang des capillaires péritubulaires : environ 99 % de l’eau, 100 % du glucose et des acides aminés (chez une personne en bonne santé), plus de 99 % du sodium. L’essentiel a lieu dans le tube contourné proximal.' },
              { title: 'Excrétion', text: 'L’**urine définitive** (environ 1,5 L par jour), concentrée en déchets, s’écoule par les tubes collecteurs, les calices, le bassinet et les uretères jusqu’à la vessie, puis elle est **éliminée hors de l’organisme** par l’urètre.' },
            ],
          },
          { type: 'definition', term: 'Filtration sélective', text: 'passage d’une partie du plasma du glomérule vers la capsule de Bowman, à travers une barrière qui trie les substances selon leur **taille** (et leur charge électrique). C’est un phénomène passif, dû à la pression du sang.' },
          { type: 'definition', term: 'Réabsorption', text: 'retour de substances filtrées de la lumière des tubes rénaux vers le sang, à travers les cellules des tubes. Elle fait intervenir des transports passifs et actifs.' },
          { type: 'definition', term: 'Excrétion', text: 'élimination hors de l’organisme de déchets du métabolisme ; pour le rein, c’est l’élimination de l’urine définitive.' },
          { type: 'warning', title: 'Sécrétion ou excrétion ?', text: ['Une **sécrétion** est la libération, par une cellule, d’une substance qu’elle a fabriquée et qui est **utile** (enzyme, hormone, mucus). Une **excrétion** est l’élimination d’un **déchet** hors de l’organisme.', 'Dans le néphron, on parle aussi de **sécrétion tubulaire** pour le passage de certaines substances du sang vers la lumière des tubes (ions H^+^ et K^+^, certains médicaments) : elle complète la filtration.'] },
          { type: 'example', title: 'calculer des pourcentages de réabsorption', text: ['Eau : 180 L filtrés, 1,5 L excrétés → réabsorbée à (180 − 1,5) ÷ 180 ≈ **99 %**.', 'Glucose : 180 L × 1 g/L = 180 g filtrés par jour, 0 g excrété → réabsorbé à **100 %**.', 'Urée : 180 × 0,3 = 54 g filtrés, 1,5 × 20 = 30 g excrétés → environ 45 % réabsorbée seulement : l’urée est un déchet, en grande partie éliminé.'] },
          {
            type: 'table',
            caption: 'Composition comparée (valeurs indicatives, en g/L)',
            head: ['Constituant', 'Plasma', 'Urine primitive', 'Urine définitive'],
            rows: [
              ['Protéines', '70', 'Traces (0,1 environ)', '0'],
              ['Glucose', '1', '1', '0'],
              ['Urée', '0,3', '0,3', '20'],
              ['Na^+^', '3,3', '3,3', '3,5'],
              ['Volume par jour', '—', 'Environ 180 L', 'Environ 1,5 L'],
            ],
          },
          { type: 'p', text: 'L’urine primitive a la même composition que le plasma, **sauf les protéines** : la filtration ne trie que selon la taille. C’est ensuite la réabsorption, sélective, qui fait la différence entre urine primitive et urine définitive.' },
          {
            type: 'retenir',
            items: [
              '**Filtration** (corpuscule rénal) → urine primitive (≈ 180 L par jour), sans protéines ni cellules.',
              '**Réabsorption** (surtout le tube contourné proximal) → retour au sang de l’eau, du glucose, des acides aminés, des ions.',
              '**Excrétion** → élimination de l’urine définitive (≈ 1,5 L par jour), riche en déchets.',
              'Sécrétion (substance utile libérée par une cellule) ≠ excrétion (déchet éliminé de l’organisme).',
            ],
          },
        ],
      },

      {
        title: 'Le corpuscule rénal, un filtre sélectif',
        intro: 'La structure du corpuscule rénal explique pourquoi l’eau et le glucose sont filtrés, mais pas les protéines ni les cellules.',
        blocks: [
          { type: 'definition', term: 'Glomérule', text: 'peloton de capillaires sanguins situé entre l’artériole afférente et l’artériole efférente, plus étroite. Ce rétrécissement maintient une pression élevée dans le glomérule, ce qui pousse le plasma à travers la paroi des capillaires.' },
          { type: 'p', text: 'La **capsule de Bowman** entoure le glomérule comme une coupe à double paroi. Son feuillet externe limite l’**espace urinaire**, où s’accumule le filtrat avant de couler dans le tube contourné proximal ; son feuillet interne est plaqué contre les capillaires.' },
          { type: 'figure', image: IMG.corpuscule, caption: 'Corpuscule rénal au microscope optique (hématoxyline-éosine, ×400). Au centre, le glomérule, peloton de capillaires riche en noyaux ; autour, l’espace urinaire clair, limité par la capsule de Bowman ; tout autour, des coupes de tubes contournés.', size: 'wide' },
          { type: 'definition', term: 'Podocytes', text: 'cellules du feuillet interne de la capsule de Bowman, qui enlacent les capillaires du glomérule grâce à leurs prolongements.' },
          { type: 'definition', term: 'Pédicelles', text: 'fins prolongements des podocytes, qui s’engrènent les uns entre les autres comme les doigts de deux mains croisées. Entre eux restent des **fentes de filtration**, larges de quelques dizaines de nanomètres et fermées par un fin diaphragme percé de pores encore plus petits.' },
          {
            type: 'list',
            title: 'La barrière de filtration comprend trois couches successives',
            ordered: true,
            items: [
              'La paroi du capillaire, percée de nombreux pores (endothélium fenêtré) : elle retient les **cellules sanguines**.',
              'La membrane basale glomérulaire, un réseau de protéines chargé négativement : elle freine les grosses molécules et repousse les protéines chargées négativement, comme l’albumine.',
              'Les fentes de filtration entre les **pédicelles** des podocytes et leur diaphragme : dernier tamis, qui arrête les protéines.',
            ],
          },
          {
            type: 'table',
            caption: 'La filtration dépend de la taille des molécules',
            head: ['Substance', 'Masse molaire (g/mol)', 'Filtrée ?'],
            rows: [
              ['Eau', '18', 'Oui, librement'],
              ['Urée', '60', 'Oui, librement'],
              ['Glucose', '180', 'Oui, librement'],
              ['Insuline (petite protéine)', 'Environ 5 800', 'Oui, en grande partie'],
              ['Albumine', 'Environ 66 000', 'Très peu (traces)'],
              ['Immunoglobulines (anticorps)', '150 000 et plus', 'Non'],
              ['Hématies', 'Cellules de 7 µm', 'Non'],
            ],
          },
          { type: 'example', title: 'la maladie de Berger', text: ['La maladie de Berger (néphropathie à IgA), décrite en 1968 par le Français Jean Berger, est la plus fréquente des maladies des glomérules dans le monde. Des anticorps de type IgA se déposent dans les glomérules et provoquent une inflammation qui abîme la barrière de filtration.', 'Les fentes de filtration ne retiennent plus les grosses molécules : on trouve des **protéines** dans l’urine (protéinurie) et même des **hématies** (hématurie), qui colorent parfois l’urine en rouge foncé, souvent quelques jours après une angine. La maladie peut évoluer lentement vers l’insuffisance rénale.'] },
          {
            type: 'retenir',
            items: [
              'Le corpuscule rénal associe le **glomérule** (capillaires sous pression) et la capsule de Bowman.',
              'La barrière de filtration (capillaire fenêtré, membrane basale, fentes entre les **pédicelles** des **podocytes**) trie selon la taille : eau et petites molécules passent, protéines et cellules sont retenues.',
              'Une lésion de cette barrière (maladie de Berger) laisse passer protéines et hématies dans l’urine.',
            ],
          },
        ],
      },

      {
        title: 'La réabsorption du glucose et de l’eau',
        intro: 'Deux exemples montrent comment le néphron récupère ce qui est utile : le glucose, grâce à des transporteurs, et l’eau, grâce à une hormone.',
        blocks: [
          { type: 'p', text: '**Le glucose.** Les cellules du tube contourné proximal ressemblent beaucoup aux entérocytes : ce sont des cellules **polarisées**, dont la membrane apicale (côté lumière du tube) porte une bordure en brosse, et dont la membrane basale est tournée vers les capillaires péritubulaires. Elles utilisent le **même mécanisme** que l’entérocyte pour récupérer le glucose.' },
          {
            type: 'steps',
            title: 'Réabsorption du glucose par une cellule du tube contourné proximal',
            items: [
              { title: 'Membrane basale : la pompe Na^+^/K^+^', text: 'Elle expulse 3 Na^+^ et fait entrer 2 K^+^ en consommant de l’ATP (transport actif primaire) : le Na^+^ reste peu concentré dans la cellule, dont l’intérieur est négatif. Le gradient électrochimique de Na^+^ est dirigé vers l’intérieur.' },
              { title: 'Membrane apicale : le co-transporteur sodium-glucose', text: 'Le Na^+^ entre en descendant son gradient électrochimique et entraîne le glucose contre son gradient de concentration (transport actif secondaire, co-transport).' },
              { title: 'Membrane basale : le transporteur du glucose', text: 'Le glucose, accumulé dans la cellule, sort par diffusion facilitée (transport passif) et rejoint le sang des capillaires péritubulaires.' },
            ],
          },
          { type: 'definition', term: 'Saturation', text: 'état d’un système de transport dont tous les transporteurs sont occupés : le débit de transport atteint alors une valeur maximale et ne peut plus augmenter, même si la quantité de substance à transporter augmente. Le nombre de co-transporteurs du tube proximal est limité : leur débit maximal correspond à une glycémie d’environ **1,8 g par litre**, appelée **seuil rénal** du glucose.' },
          { type: 'p', text: 'Tant que la glycémie reste inférieure à ce seuil, tout le glucose filtré est réabsorbé : l’urine n’en contient pas. Au-dessus (hyperglycémie du **diabète sucré**), les transporteurs sont saturés : le glucose en excès reste dans le tube et passe dans l’urine (**glycosurie**). Ce glucose retient de l’eau dans le tube par osmose : le patient urine beaucoup (polyurie) et a très soif (polydipsie).' },
          { type: 'note', title: 'Médecine', text: 'Le mot « diabète sucré » vient de ce que les médecins de l’Antiquité avaient remarqué le goût sucré de l’urine des malades. Aujourd’hui, des médicaments du diabète de type 2, les gliflozines, bloquent les co-transporteurs sodium-glucose du rein : le glucose est éliminé dans l’urine et la glycémie baisse.' },
          { type: 'p', text: '**L’eau.** L’eau traverse les membranes par **osmose** : elle se déplace passivement du milieu le moins concentré en solutés vers le milieu le plus concentré. Elle passe par des protéines canaux spécifiques, les **aquaporines**. Dans le tube contourné proximal, l’eau suit les solutés réabsorbés (environ deux tiers de l’eau filtrée). Dans le tube collecteur, la réabsorption de l’eau est **réglable** : elle dépend de l’ADH.' },
          { type: 'definition', term: 'Gradient hydrique', text: 'différence de concentration en solutés entre deux milieux séparés par une membrane, qui entraîne un mouvement d’eau par osmose. Autour des tubes collecteurs, le liquide de la médulla est très concentré (grâce aux anses de Henlé) : l’eau du tube collecteur a tendance à en sortir, si la membrane la laisse passer.' },
          { type: 'definition', term: 'Aquaporine', text: 'protéine membranaire formant un canal spécifique de l’eau, qui permet un passage rapide de l’eau dans le sens du gradient hydrique (transport passif).' },
          { type: 'definition', term: 'ADH (hormone antidiurétique)', text: 'hormone peptidique, aussi appelée vasopressine, fabriquée par des neurones de l’hypothalamus et libérée dans le sang par la **neurohypophyse** (lobe postérieur de l’hypophyse). Sa sécrétion augmente quand le plasma devient trop concentré (manque d’eau, repas salé) ou quand la **volémie** diminue (hémorragie, déshydratation).' },
          { type: 'definition', term: 'Volémie', text: 'volume total de sang contenu dans l’organisme, environ 5 L chez l’adulte.' },
          {
            type: 'steps',
            title: 'Action de l’ADH sur une cellule du tube collecteur',
            items: [
              'L’ADH, apportée par le sang, se fixe sur des **récepteurs** spécifiques de la **membrane basale** des cellules du tube collecteur (ses cellules cibles).',
              'Ce signal déclenche, dans la cellule, le transport de vésicules chargées d’**aquaporines**, qui fusionnent avec la **membrane apicale**.',
              'La membrane apicale devient perméable à l’eau : l’eau quitte la lumière du tube, attirée par le liquide très concentré de la médulla, puis traverse la membrane basale (qui possède en permanence d’autres aquaporines) et retourne dans le sang.',
              'Résultat : l’urine est **peu abondante et concentrée** ; le sang retient de l’eau, sa concentration diminue et la volémie remonte.',
              'Quand l’ADH diminue, les aquaporines sont retirées de la membrane apicale : l’eau reste dans le tube et l’urine est abondante et diluée.',
            ],
          },
          {
            type: 'flow',
            title: 'Exemple : après un effort intense sans boire',
            steps: [
              { title: 'Déshydratation', text: 'plasma plus concentré, volémie en baisse' },
              { title: 'Hypothalamus', text: 'détecte la variation' },
              { title: 'Neurohypophyse', text: 'libère plus d’ADH' },
              { title: 'Tube collecteur', text: 'aquaporines dans la membrane apicale' },
              { title: 'Réabsorption d’eau', text: 'urine rare et foncée, volémie rétablie' },
            ],
          },
          { type: 'example', title: 'le diabète insipide', text: 'Quand l’ADH n’est plus sécrétée (lésion de l’hypothalamus ou de l’hypophyse) ou que les cellules du tube collecteur n’y répondent plus, la membrane apicale reste imperméable à l’eau : le patient produit chaque jour de très grandes quantités (parfois plus de 10 L) d’une urine très diluée, **sans glucose**, et boit énormément. On le traite, quand l’hormone manque, par un analogue de l’ADH, la desmopressine. À ne pas confondre avec le diabète sucré, où l’urine contient du glucose.' },
          { type: 'example', title: 'l’alcool fait uriner', text: 'L’éthanol **inhibe la sécrétion d’ADH** par la neurohypophyse. Après avoir bu de l’alcool, on urine plus que le volume bu : l’organisme se déshydrate, ce qui contribue aux maux de tête du lendemain.' },
          {
            type: 'retenir',
            items: [
              'Le glucose est réabsorbé dans le tube contourné proximal par le même mécanisme que dans l’entérocyte : **co-transport** avec Na^+^ (apical), **pompe Na^+^/K^+^** et **transporteur** (basal).',
              'Les transporteurs sont en nombre limité : au-delà d’une glycémie d’environ 1,8 g par litre, ils sont **saturés** et le glucose passe dans l’urine (diabète sucré).',
              'L’eau est réabsorbée par **osmose** à travers des **aquaporines**, dans le sens du **gradient hydrique**.',
              'L’**ADH** fait insérer des aquaporines dans la membrane apicale des cellules du tube collecteur : plus d’eau réabsorbée, urine concentrée, volémie maintenue.',
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
        title: 'Dessiner l’appareil urinaire et localiser le néphron',
        duration: '30 min',
        skills: ['Représenter', 'Changer d’échelle'],
        context: 'Tu dois dessiner l’appareil urinaire dans ton cahier, puis situer le néphron à l’échelle du rein.',
        documents: [
          { label: 'Document 1', title: 'L’appareil urinaire', image: IMG.appareil, caption: 'Vue de face.', size: 'small' },
          { label: 'Document 2', title: 'Coupe de rein', image: IMG.coupe, caption: 'Coupe longitudinale.', size: 'normal' },
          { label: 'Document 3', title: 'Un néphron', image: IMG.nephron, caption: 'Schéma d’un néphron et de ses vaisseaux.', size: 'small' },
        ],
        questions: [
          { text: 'Décris le trajet d’une goutte d’urine depuis un néphron jusqu’à l’extérieur du corps.', answer: 'Tube collecteur → papille d’une pyramide → calice → bassinet → uretère → vessie (stockage) → urètre → extérieur.' },
          { text: 'Réalise le dessin légendé de l’appareil urinaire (reins, artères et veines rénales, uretères, vessie, urètre).', hint: 'Le rein droit du sujet, à gauche de ta feuille, est un peu plus bas que le gauche.', answer: 'Vérifie : deux reins de part et d’autre de la colonne, le droit légèrement plus bas ; deux uretères qui descendent jusqu’à la vessie ; un seul urètre sous la vessie ; légendes horizontales tracées à la règle ; titre « Appareil urinaire humain, vue de face ».' },
          { text: 'À l’aide des documents 2 et 3, indique dans quelle zone du rein se trouvent les corpuscules rénaux et les anses de Henlé.', answer: 'Les corpuscules rénaux (et les tubes contournés) sont dans le cortex, la zone granuleuse périphérique ; les anses de Henlé et les tubes collecteurs plongent dans la médulla, dont ils forment les stries des pyramides.' },
          { text: 'Pourquoi peut-on dire que l’urine présente dans la vessie est déjà « hors de l’organisme » ?', answer: 'La lumière des voies urinaires communique avec l’extérieur par l’urètre : elle fait partie du milieu extérieur. Les substances passées dans l’urine ont quitté le milieu intérieur.' },
          { text: 'Explique pourquoi le néphron est qualifié d’unité fonctionnelle du rein.', answer: 'C’est la plus petite structure du rein capable de réaliser à elle seule toutes les étapes de la formation de l’urine : filtration dans le corpuscule, réabsorption dans les tubes. Le rein en contient environ un million qui fonctionnent en parallèle.' },
        ],
      },
      {
        title: 'Comparer plasma, urine primitive et urine définitive',
        duration: '35 min',
        skills: ['Exploiter un tableau', 'Calculer', 'Raisonner'],
        context: 'On cherche à déduire les étapes de la formation de l’urine à partir de la composition des liquides. L’urine primitive a été prélevée chez l’animal par micropuncture dans la capsule de Bowman.',
        documents: [
          {
            label: 'Document 4',
            title: 'Composition des liquides (valeurs indicatives)',
            blocks: [
              {
                type: 'table',
                head: ['Constituant (g/L)', 'Plasma', 'Urine primitive', 'Urine définitive'],
                rows: [
                  ['Eau', '910', '990', '950'],
                  ['Protéines', '70', 'Traces', '0'],
                  ['Glucose', '1', '1', '0'],
                  ['Acides aminés', '0,5', '0,5', '0'],
                  ['Urée', '0,3', '0,3', '20'],
                  ['Créatinine', '0,01', '0,01', '1'],
                  ['Na^+^', '3,3', '3,3', '3,5'],
                ],
              },
            ],
          },
          { label: 'Document 5', title: 'Volumes quotidiens', text: ['Volume d’urine primitive formé par jour : 180 L.', 'Volume d’urine définitive (diurèse) : 1,5 L par jour.'] },
        ],
        questions: [
          { text: 'Compare le plasma et l’urine primitive. Quelle étape cette comparaison met-elle en évidence et où a-t-elle lieu ?', answer: 'L’urine primitive a la même composition que le plasma, sauf qu’elle ne contient presque pas de protéines. Elle résulte d’une filtration sélective (selon la taille des molécules), qui a lieu dans le corpuscule rénal.' },
          { text: 'Calcule la masse de glucose filtrée par jour et la masse excrétée. Conclus.', answer: 'Filtré : 180 L × 1 g/L = 180 g par jour. Excrété : 1,5 L × 0 = 0 g. Tout le glucose filtré est réabsorbé (100 %).' },
          { text: 'Calcule le pourcentage d’eau réabsorbée.', answer: '(180 − 1,5) ÷ 180 × 100 ≈ 99,2 % de l’eau filtrée est réabsorbée.' },
          { text: 'Calcule les masses d’urée filtrée et excrétée par jour. Que deviennent les 24 g de différence ?', answer: 'Filtrée : 180 × 0,3 = 54 g. Excrétée : 1,5 × 20 = 30 g. Les 24 g de différence ont été réabsorbés (passivement) et sont retournés dans le sang : l’urée n’est que partiellement éliminée à chaque passage, mais elle est fortement concentrée dans l’urine.' },
          { text: 'Classe les constituants en deux groupes : ceux que le rein conserve et ceux qu’il élimine. Justifie.', answer: 'Conservés : protéines (non filtrées), glucose et acides aminés (filtrés puis réabsorbés à 100 %), l’essentiel de l’eau et du sodium. Éliminés : urée et créatinine, déchets du métabolisme, concentrés respectivement environ 67 et 100 fois dans l’urine définitive.' },
          { text: 'Rédige un bilan des trois étapes de la formation de l’urine en utilisant les mots : filtration sélective, réabsorption, excrétion, corpuscule rénal, tubes.', answer: 'Dans le corpuscule rénal, la filtration sélective forme environ 180 L d’urine primitive, semblable au plasma sans protéines. Dans les tubes, la réabsorption renvoie dans le sang presque toute l’eau, tout le glucose, les acides aminés et la plupart des ions. Il reste 1,5 L d’urine définitive, riche en déchets, dont l’excrétion se fait par les voies urinaires.' },
        ],
      },
      {
        title: 'Le corpuscule rénal et la maladie de Berger',
        duration: '30 min',
        skills: ['Observer', 'Mettre en relation', 'Argumenter'],
        context: 'Paul, 22 ans, remarque que ses urines sont rouge foncé deux jours après une angine. Son médecin demande une analyse d’urine, puis une biopsie rénale.',
        documents: [
          { label: 'Document 6', title: 'Corpuscule rénal sain (×400)', image: IMG.corpuscule, caption: 'Coupe colorée à l’hématoxyline-éosine.' },
          { label: 'Document 7', title: 'La barrière de filtration', text: ['Le sang du glomérule est séparé de l’espace urinaire par trois couches : la paroi des capillaires, percée de pores ; une membrane basale ; les podocytes, dont les pédicelles s’engrènent en laissant entre eux des fentes de filtration de quelques dizaines de nanomètres, fermées par un diaphragme.', 'Les molécules de masse molaire inférieure à environ 10 000 g/mol sont filtrées librement ; l’albumine (66 000 g/mol) ne passe qu’à l’état de traces ; les cellules ne passent pas.'] },
          {
            label: 'Document 8',
            title: 'Résultats des examens de Paul',
            blocks: [
              {
                type: 'table',
                head: ['Examen', 'Paul', 'Valeur normale'],
                rows: [
                  ['Hématies dans l’urine', 'Très nombreuses', 'Moins de 10 par mm³'],
                  ['Protéines dans l’urine', '1,5 g par 24 h', 'Moins de 0,15 g par 24 h'],
                  ['Glucose dans l’urine', 'Absent', 'Absent'],
                  ['Biopsie rénale', 'Dépôts d’anticorps IgA dans les glomérules, inflammation', 'Pas de dépôt'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Sur le document 6, repère le glomérule, l’espace urinaire et les tubes contournés.', answer: 'Le glomérule est le peloton central dense, riche en noyaux violets ; l’espace urinaire est le croissant clair qui l’entoure, limité par la capsule de Bowman ; les tubes contournés sont les sections rondes ou ovales tout autour.' },
          { text: 'Explique, grâce au document 7, pourquoi l’urine d’une personne en bonne santé ne contient ni protéines ni hématies.', answer: 'Les hématies, très grosses, sont retenues par la paroi des capillaires ; les protéines, de grande taille, sont arrêtées par la membrane basale et surtout par les fentes de filtration entre les pédicelles des podocytes. La filtration est sélective selon la taille.' },
          { text: 'Quelles anomalies présente Paul ? Relie-les aux résultats de la biopsie.', hint: 'Que devient la barrière de filtration quand les glomérules sont enflammés ?', answer: 'Paul a une hématurie (hématies dans l’urine) et une protéinurie (10 fois la valeur normale). Les dépôts d’IgA et l’inflammation abîment la barrière de filtration : les fentes entre pédicelles et la membrane basale ne retiennent plus les grosses molécules ni les cellules, qui passent dans l’urine primitive puis dans l’urine définitive.' },
          { text: 'Pourquoi le glucose reste-t-il absent de l’urine de Paul ?', answer: 'Le glucose est normalement filtré ; il est ensuite réabsorbé en totalité par le tube contourné proximal, qui fonctionne normalement chez Paul (et sa glycémie est normale). La maladie touche le filtre glomérulaire, pas la réabsorption.' },
          { text: 'Pourquoi le médecin va-t-il surveiller régulièrement la créatinine dans le sang de Paul ?', answer: 'La créatinine est un déchet produit en quantité constante et éliminé par filtration : si la maladie détruit des néphrons, la filtration diminue et la créatinine s’accumule dans le sang. Son augmentation signale une évolution vers l’insuffisance rénale.' },
        ],
      },
      {
        title: 'La réabsorption du glucose et ses limites',
        duration: '30 min',
        skills: ['Exploiter des données', 'Expliquer un mécanisme'],
        context: 'On fait varier la glycémie d’un sujet en lui perfusant du glucose et on mesure, pour chaque glycémie, le glucose filtré, réabsorbé et excrété par ses reins.',
        documents: [
          {
            label: 'Document 9',
            title: 'Débits de glucose (données réalistes simplifiées ; débit de filtration : 125 mL par minute)',
            blocks: [
              {
                type: 'table',
                head: ['Glycémie (g/L)', 'Filtré (mg/min)', 'Réabsorbé (mg/min)', 'Excrété (mg/min)'],
                rows: [
                  ['1,0', '125', '125', '0'],
                  ['1,5', '188', '188', '0'],
                  ['2,0', '250', '245', '5'],
                  ['3,0', '375', '330', '45'],
                  ['4,0', '500', '370', '130'],
                  ['5,0', '625', '375', '250'],
                ],
              },
            ],
          },
          { label: 'Document 10', title: 'Les cellules du tube contourné proximal', text: ['Elles possèdent une bordure en brosse du côté de la lumière du tube. Leur membrane apicale contient des co-transporteurs sodium-glucose ; leur membrane basale contient des pompes Na^+^/K^+^ et des transporteurs du glucose identiques à ceux des entérocytes. Le nombre de co-transporteurs est limité.'] },
        ],
        questions: [
          { text: 'Décris l’évolution du glucose réabsorbé quand la glycémie augmente.', answer: 'Le glucose réabsorbé augmente d’abord comme le glucose filtré (tout est réabsorbé jusqu’à environ 1,5 g/L), puis augmente de moins en moins et plafonne vers 375 mg par minute, à partir d’environ 5 g/L de glycémie.' },
          { text: 'À partir de quelle glycémie le glucose apparaît-il dans l’urine ?', answer: 'Entre 1,5 et 2 g/L : c’est le seuil rénal du glucose, d’environ 1,8 g/L.' },
          { text: 'Explique le plafonnement de la réabsorption à l’aide du document 10.', hint: 'Que se passe-t-il quand tous les co-transporteurs sont occupés ?', answer: 'La réabsorption du glucose dépend des co-transporteurs sodium-glucose, en nombre limité. Quand la glycémie est élevée, tous les transporteurs sont occupés : ils sont saturés, le débit de réabsorption atteint un maximum. Le glucose filtré en plus ne peut pas être réabsorbé et passe dans l’urine.' },
          { text: 'Schématise une cellule du tube contourné proximal en montrant le trajet du glucose et le type de chaque transport.', answer: 'Membrane apicale : co-transporteur (Na^+^ et glucose entrent ensemble ; transport actif secondaire, Na^+^ descend son gradient électrochimique, le glucose remonte son gradient). Membrane basale : transporteur du glucose (sortie par diffusion facilitée, transport passif) et pompe Na^+^/K^+^ (3 Na^+^ sortent, 2 K^+^ entrent, ATP, transport actif primaire). Capillaire péritubulaire recevant le glucose.' },
          { text: 'Quel point commun y a-t-il entre la cellule du tube proximal et l’entérocyte ? Pourquoi est-ce logique ?', answer: 'Les deux sont des cellules épithéliales polarisées à bordure en brosse qui utilisent les mêmes protéines (co-transporteur sodium-glucose, pompe Na^+^/K^+^, transporteur du glucose). Dans les deux cas, il s’agit de faire passer le glucose d’une lumière (milieu extérieur) vers le sang, même quand il y est peu concentré.' },
          { text: 'Un patient diabétique a une glycémie à jeun de 2,8 g/L ; il urine 3,5 L par jour. Explique ces deux observations.', answer: 'Sa glycémie dépasse le seuil rénal (1,8 g/L) : les transporteurs sont saturés et du glucose reste dans l’urine (glycosurie). Ce glucose retient de l’eau dans les tubes par osmose : moins d’eau est réabsorbée, la diurèse augmente (polyurie).' },
        ],
      },
      {
        title: 'L’ADH et la réabsorption de l’eau',
        duration: '30 min',
        skills: ['Exploiter des documents', 'Expliquer un mécanisme', 'Argumenter'],
        context: 'On étudie comment l’ADH règle le volume d’urine, à partir d’un cas clinique et d’expériences.',
        documents: [
          {
            label: 'Document 11',
            title: 'Diurèse mesurée dans différentes situations (valeurs indicatives)',
            blocks: [
              {
                type: 'table',
                head: ['Situation', 'Volume d’urine produit en 3 h', 'Aspect de l’urine'],
                rows: [
                  ['Sujet qui boit 1 L d’eau', 'Environ 900 mL', 'Claire, diluée'],
                  ['Même sujet, 1 L d’eau + injection d’ADH', 'Environ 200 mL', 'Foncée, concentrée'],
                  ['Sujet qui boit 1 L de bière (5 % d’alcool)', 'Environ 1 100 mL', 'Claire, diluée'],
                ],
              },
            ],
          },
          { label: 'Document 12', title: 'Cas de Léa, 30 ans', text: ['Après un traumatisme crânien, Léa urine 8 L par jour d’une urine très diluée et a constamment soif. Son urine ne contient pas de glucose et sa glycémie est normale. Le dosage montre une concentration d’ADH dans le sang presque nulle.', 'Après une injection de desmopressine (molécule qui agit comme l’ADH), sa diurèse redescend à 2 L par jour.'] },
          { label: 'Document 13', title: 'Mode d’action de l’ADH', text: ['L’ADH se fixe sur des récepteurs de la membrane basale des cellules du tube collecteur. Elle déclenche l’insertion d’aquaporines dans leur membrane apicale. La membrane basale possède en permanence des aquaporines. Le liquide de la médulla, autour des tubes collecteurs, est beaucoup plus concentré que l’urine qui y circule.'] },
        ],
        questions: [
          { text: 'Compare les deux premières situations du document 11. Quel est l’effet de l’ADH sur la diurèse ?', answer: 'Avec l’ADH, le volume d’urine est beaucoup plus faible (200 mL contre 900 mL) et l’urine plus concentrée : l’ADH diminue la diurèse, elle augmente la réabsorption de l’eau. C’est le sens de son nom, hormone antidiurétique.' },
          { text: 'À l’aide du document 13, explique le mécanisme cellulaire de cet effet.', hint: 'Dans quel sens l’eau se déplace-t-elle par osmose ? Que manque-t-il à la membrane apicale sans ADH ?', answer: 'L’ADH fait insérer des aquaporines dans la membrane apicale, qui devient perméable à l’eau. L’eau du tube passe alors par osmose vers le liquide très concentré de la médulla (gradient hydrique), traverse la cellule puis la membrane basale (aquaporines permanentes) et retourne dans le sang. Moins d’eau reste dans l’urine.' },
          { text: 'Pourquoi qualifie-t-on l’ADH d’hormone ? Précise sa glande d’origine et ses cellules cibles.', answer: 'C’est une molécule libérée dans le sang par la neurohypophyse, qui agit à distance sur des cellules cibles possédant des récepteurs spécifiques : les cellules du tube collecteur du rein.' },
          { text: 'Explique les symptômes de Léa et l’effet de la desmopressine. De quelle maladie souffre-t-elle ?', answer: 'Sans ADH, la membrane apicale des cellules du tube collecteur ne contient pas d’aquaporines : l’eau n’est pas réabsorbée et Léa élimine une très grande quantité d’urine diluée ; elle perd de l’eau et a soif. La desmopressine remplace l’ADH : les aquaporines sont insérées, l’eau est réabsorbée et la diurèse diminue. C’est un diabète insipide (sans glucose dans l’urine, contrairement au diabète sucré).' },
          { text: 'Le sujet qui boit 1 L de bière urine plus que le volume bu. Propose une explication.', answer: 'L’éthanol inhibe la sécrétion d’ADH par la neurohypophyse. Avec moins d’ADH, moins d’aquaporines sont insérées dans la membrane apicale des cellules du tube collecteur, moins d’eau est réabsorbée et la diurèse augmente : l’organisme perd plus d’eau qu’il n’en a reçu, il se déshydrate.' },
          { text: 'Après une forte transpiration, la volémie diminue. Décris la réponse de l’organisme jusqu’au retour à la normale.', answer: 'La baisse de la volémie et la concentration du plasma sont détectées ; la neurohypophyse libère plus d’ADH ; l’ADH augmente le nombre d’aquaporines dans la membrane apicale des cellules du tube collecteur ; la réabsorption d’eau augmente, l’urine devient rare et concentrée ; l’eau conservée (et la soif, qui pousse à boire) ramène la volémie à sa valeur normale.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'L’appareil urinaire comprend deux reins, deux uretères, la vessie et l’urètre ; la lumière des voies urinaires appartient au milieu extérieur.',
      'Le néphron est l’unité fonctionnelle du rein : corpuscule rénal, tube contourné proximal, anse de Henlé, tube contourné distal, tube collecteur.',
      'Le rein élimine l’eau et les métabolites (urée, créatinine, acide urique) en les concentrant, et conserve protéines et glucose ; la diurèse est d’environ 1,5 L par jour.',
      'Formation de l’urine : filtration sélective dans le corpuscule (≈ 180 L d’urine primitive par jour), réabsorption dans les tubes (≈ 99 % de l’eau), excrétion de l’urine définitive.',
      'La barrière de filtration (capillaires fenêtrés, membrane basale, fentes entre les pédicelles des podocytes) retient protéines et cellules ; sa lésion (maladie de Berger) provoque protéinurie et hématurie.',
      'Le glucose est réabsorbé par co-transport avec Na^+^, comme dans l’intestin ; au-delà d’environ 1,8 g/L, les transporteurs sont saturés (glycosurie du diabète sucré).',
      'L’ADH, libérée par la neurohypophyse, fait insérer des aquaporines dans la membrane apicale des cellules du tube collecteur : la réabsorption d’eau augmente, l’urine se concentre, la volémie est maintenue.',
    ],
    method: {
      title: 'Exploiter un tableau de composition des liquides rénaux',
      steps: [
        'Comparer plasma et urine primitive : ce qui manque dans l’urine primitive n’a pas été filtré (critère de taille).',
        'Comparer urine primitive et urine définitive : ce qui disparaît a été réabsorbé ; ce qui se concentre est éliminé.',
        'Toujours raisonner en quantités par jour : masse = concentration × volume (180 L pour l’urine primitive, 1,5 L pour l’urine définitive).',
        'Calculer un pourcentage de réabsorption : (quantité filtrée − quantité excrétée) ÷ quantité filtrée × 100.',
        'Conclure en localisant chaque étape dans le néphron.',
      ],
    },
    vocabulary: [
      { term: 'Uretère', definition: 'Conduit qui amène l’urine d’un rein à la vessie (il y en a deux).' },
      { term: 'Urètre', definition: 'Conduit unique qui évacue l’urine de la vessie vers l’extérieur.' },
      { term: 'Néphron', definition: 'Unité structurale et fonctionnelle du rein, qui forme l’urine.' },
      { term: 'Glomérule', definition: 'Peloton de capillaires du corpuscule rénal, entre les artérioles afférente et efférente.' },
      { term: 'Podocyte', definition: 'Cellule de la capsule de Bowman qui enlace les capillaires glomérulaires par ses pédicelles.' },
      { term: 'Pédicelles', definition: 'Prolongements des podocytes qui délimitent les fentes de filtration.' },
      { term: 'Filtration sélective', definition: 'Passage du plasma dans la capsule de Bowman avec tri selon la taille des molécules.' },
      { term: 'Réabsorption', definition: 'Retour de substances de la lumière des tubes rénaux vers le sang.' },
      { term: 'Excrétion', definition: 'Élimination hors de l’organisme des déchets du métabolisme.' },
      { term: 'Diurèse', definition: 'Volume d’urine produit par unité de temps (environ 1,5 L par jour).' },
      { term: 'Métabolite', definition: 'Substance produite par le métabolisme ; ici, déchet comme l’urée ou la créatinine.' },
      { term: 'Saturation', definition: 'État où tous les transporteurs sont occupés : le débit de transport est maximal.' },
      { term: 'Aquaporine', definition: 'Protéine canal spécifique de l’eau.' },
      { term: 'ADH', definition: 'Hormone antidiurétique libérée par la neurohypophyse, qui augmente la réabsorption de l’eau.' },
      { term: 'Volémie', definition: 'Volume total de sang de l’organisme (environ 5 L).' },
    ],
    mistakes: [
      { wrong: 'Confondre uretère et urètre.', right: 'Deux uretères relient les reins à la vessie ; un seul urètre relie la vessie à l’extérieur.' },
      { wrong: 'Dire que le glucose n’est pas filtré parce qu’il est absent de l’urine.', right: 'Le glucose est filtré librement, puis réabsorbé à 100 % dans le tube contourné proximal.' },
      { wrong: 'Penser que le rein ne fait que filtrer.', right: 'Il filtre 180 L par jour mais en réabsorbe plus de 99 % : la réabsorption sélective est essentielle.' },
      { wrong: 'Confondre diabète sucré et diabète insipide.', right: 'Diabète sucré : hyperglycémie et glucose dans l’urine. Diabète insipide : manque d’ADH, urine abondante sans glucose.' },
      { wrong: 'Dire que l’ADH fait « pomper » l’eau par les cellules.', right: 'L’eau se déplace passivement par osmose ; l’ADH rend seulement la membrane apicale perméable en y faisant insérer des aquaporines.' },
      { wrong: 'Confondre sécrétion et excrétion.', right: 'Une sécrétion libère une substance utile fabriquée par une cellule ; une excrétion élimine un déchet hors de l’organisme.' },
    ],
    quiz: [
      { question: 'L’urine passe de la vessie à l’extérieur par :', choices: ['L’uretère', 'L’urètre', 'Le bassinet', 'Le tube collecteur'], answer: 1, explanation: 'L’urètre, conduit unique, évacue l’urine de la vessie.' },
      { question: 'L’unité fonctionnelle du rein est :', choices: ['Le glomérule', 'Le néphron', 'La pyramide rénale', 'Le podocyte'], answer: 1, explanation: 'Le néphron réalise toutes les étapes de la formation de l’urine.' },
      { question: 'Le volume d’urine primitive formé chaque jour est d’environ :', choices: ['1,5 L', '18 L', '180 L', '1 800 L'], answer: 2, explanation: 'Environ 180 L, dont plus de 99 % sont réabsorbés.' },
      { question: 'Quelle substance est présente dans le plasma mais pratiquement absente de l’urine primitive ?', choices: ['Le glucose', 'L’urée', 'Les protéines', 'Les ions sodium'], answer: 2, explanation: 'Les protéines, trop grosses, ne franchissent pas la barrière de filtration.' },
      { question: 'Les fentes de filtration du corpuscule rénal se situent entre :', choices: ['Les hématies', 'Les pédicelles des podocytes', 'Les cellules du tube proximal', 'Les artérioles'], answer: 1, explanation: 'Les pédicelles des podocytes s’engrènent en laissant de fines fentes fermées par un diaphragme.' },
      { question: 'Dans la maladie de Berger, on trouve dans l’urine :', choices: ['Du glucose', 'Des protéines et des hématies', 'De l’ADH', 'Rien d’anormal'], answer: 1, explanation: 'Les dépôts d’IgA abîment la barrière de filtration, qui laisse passer protéines et hématies.' },
      { question: 'Le glucose entre dans les cellules du tube contourné proximal par :', choices: ['Diffusion simple', 'Co-transport avec Na^+^', 'Une pompe à ATP', 'Les aquaporines'], answer: 1, explanation: 'C’est un transport actif secondaire, identique à celui de l’entérocyte.' },
      { question: 'Le glucose apparaît dans l’urine quand la glycémie dépasse environ :', choices: ['0,5 g/L', '1 g/L', '1,8 g/L', '5 g/L'], answer: 2, explanation: 'Au-delà de ce seuil rénal, les co-transporteurs sont saturés.' },
      { question: 'L’ADH agit en :', choices: ['Augmentant la filtration glomérulaire', 'Insérant des aquaporines dans la membrane apicale des cellules du tube collecteur', 'Bloquant la pompe Na^+^/K^+^', 'Détruisant l’urée'], answer: 1, explanation: 'La membrane apicale devient perméable à l’eau, qui est réabsorbée par osmose.' },
      { question: 'L’alcool augmente la diurèse car il :', choices: ['Stimule la sécrétion d’ADH', 'Inhibe la sécrétion d’ADH', 'Augmente la glycémie', 'Bouche les uretères'], answer: 1, explanation: 'Moins d’ADH, moins d’aquaporines, moins d’eau réabsorbée.' },
    ],
    exercises: [
      {
        title: 'La clairance de la créatinine',
        statement: 'La créatinine est filtrée, puis ni réabsorbée ni sécrétée (en première approximation). Chez un patient, la créatinine vaut 0,01 g/L dans le plasma et 1,2 g/L dans l’urine ; sa diurèse est de 1,5 L par jour. a) Calcule la masse de créatinine excrétée par jour. b) Déduis-en le volume de plasma filtré par jour. c) Le patient est-il en insuffisance rénale (valeur normale : environ 180 L par jour) ?',
        answer: ['a) 1,2 g/L × 1,5 L = 1,8 g par jour.', 'b) Toute la créatinine excrétée a été filtrée : volume filtré = 1,8 ÷ 0,01 = 180 L par jour.', 'c) Non : 180 L par jour correspond à une filtration normale. En cas d’insuffisance rénale, ce volume diminue et la créatinine du sang augmente.'],
      },
      {
        title: 'Rein et hémodialyseur',
        statement: 'Le dialysat utilisé en hémodialyse contient du glucose (1 g/L), du sodium (3,3 g/L) et du bicarbonate, mais pas d’urée et très peu de potassium. a) Explique pourquoi l’urée passe du sang vers le dialysat. b) Pourquoi le dialysat contient-il du glucose et du sodium ? c) Cite deux fonctions du rein que l’hémodialyseur ne remplace pas.',
        answer: ['a) L’urée est plus concentrée dans le sang que dans le dialysat (qui n’en contient pas) : elle diffuse à travers la membrane, dans le sens de son gradient de concentration.', 'b) À concentrations égales de part et d’autre de la membrane, il n’y a pas de diffusion nette : le sang ne perd ni glucose ni sodium, substances utiles que le rein aurait réabsorbées.', 'c) Par exemple : la réabsorption sélective réglée par des hormones (ADH), le fonctionnement continu, la production d’EPO et l’activation de la vitamine D.'],
      },
      {
        title: 'Schéma de synthèse',
        statement: 'Réalise un schéma simplifié du néphron sur lequel tu localiseras : la filtration, la réabsorption du glucose, la réabsorption d’eau réglée par l’ADH et la sortie de l’urine définitive. Indique pour chaque étape ce qui passe et dans quel sens.',
        answer: ['Corpuscule rénal : filtration du plasma (eau, glucose, urée, ions) du glomérule vers la capsule de Bowman ; protéines et cellules retenues.', 'Tube contourné proximal : réabsorption de tout le glucose (co-transport avec Na^+^), des acides aminés, d’environ deux tiers de l’eau et du sodium, vers les capillaires péritubulaires.', 'Tube collecteur : réabsorption d’eau par les aquaporines, dont le nombre dans la membrane apicale dépend de l’ADH.', 'Sortie : urine définitive vers les calices, le bassinet et l’uretère.'],
      },
    ],
    selfCheck: [
      'Je sais dessiner et légender l’appareil urinaire et je ne confonds plus uretère et urètre.',
      'Je sais nommer et localiser les parties du néphron.',
      'Je sais comparer plasma, urine primitive et urine définitive et calculer un pourcentage de réabsorption.',
      'Je sais expliquer la filtration sélective à partir de la structure du corpuscule rénal (podocytes, pédicelles) et interpréter une maladie de Berger.',
      'Je sais expliquer la réabsorption du glucose et la notion de saturation, et la relier au diabète sucré.',
      'Je sais expliquer l’action de l’ADH sur la réabsorption de l’eau et interpréter un diabète insipide.',
      'Je sais comparer un rein et un hémodialyseur.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'Néphron — Wikipédia', url: 'https://fr.wikipedia.org/wiki/N%C3%A9phron' },
      { title: 'Maladie de Berger — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Maladie_de_Berger' },
      { title: 'Hormone antidiurétique — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hormone_antidiur%C3%A9tique' },
      { title: 'Hémodialyse — Wikipédia', url: 'https://fr.wikipedia.org/wiki/H%C3%A9modialyse' },
    ],
  },
};

export default lesson;
