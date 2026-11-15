import { img } from '../media';
import hypothalamus from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/hypothalamus-hypophyse.webp';
import axeMasculin from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/axe-masculin.webp';
import cycleHormones from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/cycle-hormones.webp';
import echographie from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/echographie-ovaire.webp';
import axeFeminin from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/axe-feminin.webp';
import endometre from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/endometre-cycle.webp';
import pilule from '../../../assets/courses/premiere/bb2-3-regulation-hormonale/pilule.webp';

const IMG = {
  hypothalamus: img(hypothalamus, 'Schéma au crayon d’une coupe sagittale de cerveau situant l’hypothalamus et l’hypophyse, avec un agrandissement montrant les neurones à GnRH, les vaisseaux sanguins de la tige hypophysaire et l’antéhypophyse.', 'schema', 1400, 933),
  axeMasculin: img(axeMasculin, 'Schéma fonctionnel de l’axe gonadotrope masculin : hypothalamus, GnRH, antéhypophyse, LH vers les cellules de Leydig, FSH vers les cellules de Sertoli, testostérone, spermatogenèse, et rétrocontrôles négatifs de la testostérone et de l’inhibine.', 'schema', 1400, 1020),
  cycle: img(cycleHormones, 'Graphiques alignés sur 28 jours : FSH et LH avec un pic de LH vers le 14e jour, croissance d’un follicule puis corps jaune dans l’ovaire, œstradiol et progestérone, épaisseur de l’endomètre avec menstruations, prolifération et phase sécrétoire.', 'schema', 1400, 1167),
  echographie: img(echographie, 'Image d’échographie d’un ovaire en noir et blanc : plusieurs petits follicules noirs arrondis et un grand follicule dominant d’environ 20 mm.', 'photo', 1536, 1024),
  axeFeminin: img(axeFeminin, 'Deux schémas fonctionnels de l’axe gonadotrope féminin : rétrocontrôle négatif des hormones ovariennes sur l’hypothalamus et l’antéhypophyse, et rétrocontrôle positif de l’œstradiol élevé déclenchant le pic de LH et l’ovulation.', 'schema', 1400, 933),
  endometre: img(endometre, 'Schéma de l’endomètre en phase menstruelle, proliférative et sécrétoire : muqueuse fine qui se détache, puis épaissie avec des glandes droites, puis très épaisse avec des glandes tortueuses et des artérioles spiralées.', 'schema', 1400, 688),
  pilule: img(pilule, 'Deux graphiques sur 28 jours : sans contraception, pic de LH et augmentation de la progestérone après l’ovulation ; sous pilule œstroprogestative, LH et progestérone restent basses, sans pic ni ovulation.', 'schema', 1400, 840),
};

const lesson = {
  version: 2,
  id: 'bb2-3-regulation-hormonale',
  duration: 'Environ 4 séances (cours, analyse de courbes, d’expériences et de cas cliniques)',
  hook: {
    image: IMG.hypothalamus,
    question: 'Qui donne le rythme ? Comment une petite région du cerveau commande-t-elle les testicules et les ovaires ?',
    text: 'À la base du cerveau, l’hypothalamus et l’hypophyse, pas plus gros qu’un petit pois pour l’hypophyse, pilotent toute la reproduction. Chez l’homme, ils maintiennent une production stable de testostérone ; chez la femme, ils organisent un cycle d’environ 28 jours qui se répète pendant près de 40 ans. Comprendre ces régulations permet d’expliquer la pilule contraceptive comme les traitements de l’infertilité.',
  },
  objectives: [
    'Situer l’hypothalamus et l’hypophyse, et décrire la cascade de commande GnRH → FSH et LH → gonades.',
    'Expliquer la régulation de l’axe gonadotrope masculin par rétrocontrôle négatif.',
    'Relier le fonctionnement cyclique de l’ovaire aux concentrations de FSH et de LH.',
    'Distinguer rétrocontrôle négatif et rétrocontrôle positif, et expliquer le rôle d’une valeur seuil dans le déclenchement de l’ovulation.',
    'Expliquer l’évolution de l’endomètre au cours du cycle, avec ou sans fécondation, en lien avec les œstrogènes et la progestérone.',
    'Expliquer le mode d’action d’une contraception hormonale et le principe d’une stimulation ovarienne en assistance médicale à la procréation.',
  ],
  prerequisites: [
    'Hormone, glande endocrine, cellule cible et récepteur (leçon 2.2).',
    'Les gonades : cellules de Leydig et de Sertoli, follicules et corps jaune (leçon 2.2).',
    'Principales méthodes de contraception et d’assistance médicale à la procréation (collège, seconde).',
  ],
  program: [
    'Expliquer à partir de documents le caractère cyclique du fonctionnement de l’ovaire en lien avec les concentrations des hormones hypophysaires (folliculogenèse, corps jaune, ovulation, hypophyse, seuil de concentration).',
    'Expliquer à partir d’un document l’évolution de l’utérus en cas ou non de fécondation en faisant le lien avec l’impact des concentrations en œstrogènes et en progestérone sur l’endomètre.',
    'Expliquer à partir de schémas fonctionnels la régulation des axes gonadotropes féminin et masculin (cascade de régulation, rétrocontrôles négatif et positif, valeur seuil, hypothalamus et hypophyse, AMP).',
    'Mettre en relation à partir de documents le mode d’action d’une méthode contraceptive hormonale et le fonctionnement des appareils génitaux (rétrocontrôle, glaire cervicale, ovulation, contraception d’urgence).',
  ],

  course: {
    parts: [
      {
        title: 'Une commande à trois étages : hypothalamus, hypophyse, gonades',
        intro: 'Les gonades ne fonctionnent pas seules : elles obéissent à des hormones venues de la base du cerveau.',
        blocks: [
          { type: 'p', text: 'L’**hypothalamus** est une petite région située à la base du cerveau. Juste en dessous, reliée à lui par une tige, se trouve l’**hypophyse**, une glande endocrine de la taille d’un petit pois. Sa partie antérieure, l’**antéhypophyse**, sécrète les hormones qui commandent les gonades.' },
          { type: 'figure', image: IMG.hypothalamus, caption: 'Localisation de l’hypothalamus et de l’hypophyse. Agrandissement : les neurones à GnRH de l’hypothalamus libèrent leur hormone dans des vaisseaux sanguins qui la conduisent directement à l’antéhypophyse.', size: 'wide' },
          { type: 'definition', term: 'GnRH (gonadolibérine)', text: '**neurohormone** sécrétée par des neurones de l’hypothalamus dans des vaisseaux sanguins qui irriguent l’antéhypophyse. Elle est libérée **par pulses**, environ toutes les 60 à 90 minutes, et stimule la sécrétion de FSH et de LH. Son sigle vient de l’anglais _gonadotropin-releasing hormone_ : hormone qui libère les gonadotrophines.' },
          { type: 'definition', term: 'FSH et LH (gonadotrophines)', text: 'hormones de l’antéhypophyse qui agissent sur les gonades. **FSH** signifie _follicle-stimulating hormone_, hormone **folliculo-stimulante** : elle stimule la croissance des follicules chez la femme et les cellules de Sertoli chez l’homme. **LH** signifie _luteinizing hormone_, hormone **lutéinisante** : elle déclenche l’ovulation et la formation du corps jaune (« corps lutéal ») chez la femme, et stimule les cellules de Leydig chez l’homme.' },
          {
            type: 'flow',
            title: 'Une cascade de régulation',
            steps: [
              { title: 'Hypothalamus', text: 'GnRH (pulses)' },
              { title: 'Antéhypophyse', text: 'FSH et LH' },
              { title: 'Gonades', text: 'testostérone ou œstrogènes et progestérone' },
              { title: 'Organes cibles', text: 'voies génitales, caractères sexuels' },
            ],
            caption: 'Chaque étage stimule le suivant : on parle de cascade de régulation, ou axe gonadotrope.',
          },
          { type: 'note', title: 'Un cas clinique qui révèle le rôle de la GnRH', text: 'Dans le syndrome de Kallmann, les neurones à GnRH n’ont pas migré correctement vers l’hypothalamus pendant le développement embryonnaire. Sans GnRH, la FSH et la LH restent très basses : la puberté ne se déclenche pas. Un traitement par une petite pompe qui délivre de la GnRH par pulses permet de déclencher la puberté et de rendre la fertilité possible.' },
          {
            type: 'retenir',
            items: [
              'L’**hypothalamus** sécrète la **GnRH** par pulses ; elle stimule l’**antéhypophyse**.',
              'L’antéhypophyse sécrète deux **gonadotrophines** : **FSH** (folliculo-stimulante) et **LH** (lutéinisante).',
              'FSH et LH commandent les gonades, qui sécrètent les hormones sexuelles : c’est une **cascade de régulation**.',
            ],
          },
        ],
      },

      {
        title: 'L’axe gonadotrope masculin : une régulation stable',
        intro: 'Chez l’homme adulte, la concentration de testostérone reste à peu près constante. Comment est-elle maintenue ?',
        blocks: [
          {
            type: 'list',
            title: 'La commande du testicule',
            items: [
              'La **LH** agit sur les **cellules de Leydig** : elle stimule la sécrétion de **testostérone**.',
              'La **FSH** agit sur les **cellules de Sertoli** : avec la testostérone, elle permet la **spermatogenèse**.',
              'Les cellules de Sertoli sécrètent aussi une hormone, l’**inhibine**.',
            ],
          },
          { type: 'definition', term: 'Rétrocontrôle négatif', text: 'action en retour d’une hormone qui **freine** la sécrétion des hormones qui l’ont stimulée. Il ramène la grandeur régulée vers une valeur de référence : il **stabilise** le système.' },
          { type: 'p', text: 'La **testostérone** exerce un rétrocontrôle négatif sur l’**hypothalamus** (moins de GnRH) et sur l’**antéhypophyse** (moins de LH). L’**inhibine** freine la sécrétion de **FSH**. Si la testostérone augmente, la LH diminue, donc la testostérone redescend ; si elle diminue, le frein se relâche et la LH augmente. La concentration de testostérone oscille ainsi autour d’une **valeur de référence** : c’est une régulation de type homéostasie.' },
          { type: 'figure', image: IMG.axeMasculin, caption: 'Schéma fonctionnel de l’axe gonadotrope masculin. Flèches noires : sécrétion et stimulation. Flèches vertes en pointillés : rétrocontrôles négatifs de la testostérone et de l’inhibine.', size: 'wide' },
          { type: 'example', title: 'ce que montrent les expériences', text: ['Après l’ablation des testicules (castration), la LH et la FSH augmentent fortement : le frein exercé par la testostérone et l’inhibine a disparu.', 'Si l’on injecte de la testostérone à un animal castré, la LH redescend : la testostérone exerce bien un rétrocontrôle négatif.'] },
          { type: 'warning', title: 'Le dopage aux stéroïdes anabolisants', text: 'Les stéroïdes anabolisants, proches de la testostérone, sont parfois utilisés pour augmenter la masse musculaire. À fortes doses, ils exercent un rétrocontrôle négatif puissant : la GnRH, la LH et la FSH s’effondrent, les testicules ne sont plus stimulés, ils diminuent de volume et produisent beaucoup moins de spermatozoïdes. Ce dopage peut rendre infertile, en plus de ses autres effets dangereux sur le cœur et le foie.' },
          { type: 'note', title: 'Vers une contraception hormonale masculine', text: 'Le même principe inspire des recherches sur la contraception masculine : apporter de la testostérone, souvent associée à un progestatif, pour freiner la LH et la FSH et bloquer la spermatogenèse de façon réversible. Des essais cliniques évaluent par exemple un gel appliqué chaque jour sur la peau. Aujourd’hui, les méthodes masculines disponibles restent le préservatif et la vasectomie ; les méthodes thermiques sont encore en évaluation.' },
          {
            type: 'retenir',
            items: [
              'LH → cellules de Leydig → **testostérone** ; FSH + testostérone → cellules de Sertoli → **spermatogenèse**.',
              'La testostérone freine la GnRH et la LH ; l’inhibine freine la FSH : ce sont des **rétrocontrôles négatifs**.',
              'Ces rétrocontrôles maintiennent une concentration de testostérone à peu près **constante** et une production continue de spermatozoïdes.',
            ],
          },
        ],
      },

      {
        title: 'Le cycle ovarien, rythmé par la FSH et la LH',
        intro: 'Chez la femme, la reproduction est cyclique : environ tous les 28 jours, un ovocyte est libéré.',
        blocks: [
          { type: 'definition', term: 'Cycle menstruel', text: 'ensemble des modifications périodiques de l’ovaire et de l’utérus, qui durent en moyenne 28 jours (de 21 à 35 jours selon les femmes). Par convention, le **jour 1** est le premier jour des règles.' },
          { type: 'figure', image: IMG.cycle, caption: 'Évolution des hormones hypophysaires, de l’ovaire, des hormones ovariennes et de l’endomètre au cours d’un cycle de 28 jours (concentrations en unités arbitraires).', size: 'wide' },
          {
            type: 'table',
            caption: 'Les trois temps du cycle ovarien',
            head: ['Période', 'Hormones hypophysaires', 'Ovaire', 'Hormones ovariennes'],
            rows: [
              ['Phase folliculaire (J1 à J14)', 'La **FSH** augmente un peu en début de cycle puis diminue.', 'Plusieurs follicules cavitaires grossissent ; un seul devient **dominant** et atteint environ 20 mm ; les autres dégénèrent.', 'Les follicules sécrètent de plus en plus d’**œstradiol** ; son pic précède l’ovulation.'],
              ['Ovulation (vers J14)', '**Pic de LH** (et pic plus modeste de FSH).', 'Environ 36 heures après le début du pic de LH, le follicule mûr se rompt et libère l’ovocyte.', 'L’œstradiol chute brièvement.'],
              ['Phase lutéale (J14 à J28)', 'FSH et LH restent **basses**.', 'Le follicule vidé devient le **corps jaune**, qui fonctionne environ 14 jours puis régresse s’il n’y a pas de grossesse.', 'Le corps jaune sécrète de la **progestérone** (et de l’œstradiol), puis leur concentration chute en fin de cycle.'],
            ],
          },
          { type: 'p', text: 'La durée de la phase lutéale est assez constante (environ 14 jours) ; ce sont surtout les variations de la phase folliculaire qui expliquent les différences de durée des cycles. Chez une femme dont le cycle dure 32 jours, l’ovulation a lieu vers le 18e jour.' },
          { type: 'figure', image: IMG.echographie, caption: 'Échographie d’un ovaire en fin de phase folliculaire : les follicules, remplis de liquide, apparaissent en noir ; le grand follicule dominant mesure environ 20 mm.', size: 'normal' },
          { type: 'p', text: 'L’**échographie** permet de suivre la croissance des follicules : en début de cycle, on voit plusieurs petits follicules de quelques millimètres ; en fin de phase folliculaire, un follicule dominant de 18 à 24 mm. Après l’ovulation, il disparaît et laisse place au corps jaune.' },
          {
            type: 'retenir',
            items: [
              'Phase folliculaire : la **FSH** fait croître des follicules, qui sécrètent de l’**œstradiol** ; un seul devient dominant.',
              'Le **pic de LH** déclenche l’**ovulation**, environ 36 heures plus tard.',
              'Phase lutéale : sous l’effet de la LH, le **corps jaune** sécrète de la **progestérone** ; sans grossesse, il régresse au bout d’environ 14 jours.',
            ],
          },
        ],
      },

      {
        title: 'Rétrocontrôles négatif et positif chez la femme',
        intro: 'Comment expliquer qu’un même système produise des concentrations basses presque tout le cycle, puis un pic brutal de LH ?',
        blocks: [
          { type: 'p', text: 'Pendant la plus grande partie du cycle, les hormones ovariennes exercent un **rétrocontrôle négatif** sur l’hypothalamus et l’antéhypophyse : l’œstradiol (à concentration faible ou modérée) en phase folliculaire, la progestérone associée à l’œstradiol en phase lutéale. FSH et LH restent donc basses, et aucun nouveau follicule n’arrive à maturité pendant la phase lutéale.' },
          { type: 'definition', term: 'Rétrocontrôle positif', text: 'action en retour d’une hormone qui **amplifie** la sécrétion des hormones qui l’ont stimulée. Il ne stabilise pas : il provoque un **emballement** bref, ici le pic de LH.' },
          { type: 'definition', term: 'Valeur seuil', text: 'concentration à partir de laquelle l’effet d’une hormone change. Quand l’œstradiol sécrété par le follicule dominant dépasse un seuil (de l’ordre de 200 pg/mL) pendant environ deux jours, son rétrocontrôle sur l’hypothalamus et l’hypophyse devient **positif**.' },
          { type: 'figure', image: IMG.axeFeminin, caption: 'Schémas fonctionnels de l’axe gonadotrope féminin. A : rétrocontrôle négatif des hormones ovariennes. B : en fin de phase folliculaire, l’œstradiol élevé exerce un rétrocontrôle positif qui déclenche le pic de LH, puis l’ovulation.', size: 'wide' },
          {
            type: 'compare',
            title: 'Deux types de rétrocontrôle',
            columns: [
              { title: 'Rétrocontrôle négatif', subtitle: 'presque tout le cycle', items: ['Les hormones ovariennes **freinent** la GnRH, la FSH et la LH.', 'Effet : concentrations basses et stables.', 'En phase lutéale, il empêche la maturation de nouveaux follicules.'] },
              { title: 'Rétrocontrôle positif', subtitle: 'fin de phase folliculaire', items: ['L’œstradiol **au-dessus du seuil** stimule la GnRH et la LH.', 'Effet : **pic de LH** en quelques heures.', 'Le pic de LH déclenche l’ovulation et la formation du corps jaune.'] },
            ],
          },
          {
            type: 'steps',
            title: 'Le cycle, une boucle qui se répète',
            items: [
              'En fin de cycle, le corps jaune régresse : la progestérone et l’œstradiol chutent.',
              'Le rétrocontrôle négatif se relâche : la **FSH** augmente et lance la croissance de nouveaux follicules.',
              'Les follicules sécrètent de plus en plus d’œstradiol ; quand il dépasse le seuil, le rétrocontrôle devient **positif** : pic de LH, ovulation.',
              'Le corps jaune sécrète progestérone et œstradiol : rétrocontrôle négatif fort pendant la phase lutéale, jusqu’à sa régression.',
            ],
          },
          {
            type: 'retenir',
            items: [
              'Rétrocontrôle **négatif** : les hormones ovariennes freinent l’hypothalamus et l’hypophyse (la plus grande partie du cycle).',
              'Rétrocontrôle **positif** : l’œstradiol, au-dessus d’une **valeur seuil** pendant environ deux jours, déclenche le **pic de LH**.',
              'La chute des hormones ovariennes en fin de cycle relâche le frein et permet un nouveau cycle.',
            ],
          },
        ],
      },

      {
        title: 'Le cycle utérin : l’endomètre sous contrôle des hormones ovariennes',
        intro: 'Les hormones ovariennes préparent chaque mois l’utérus à accueillir un éventuel embryon.',
        blocks: [
          { type: 'figure', image: IMG.endometre, caption: 'L’endomètre au cours du cycle : fin et en partie détruit pendant les règles, épaissi avec des glandes droites en phase proliférative, très épais avec des glandes tortueuses et des artérioles spiralées (en vert) en phase sécrétoire.', size: 'wide' },
          {
            type: 'table',
            caption: 'Les phases du cycle utérin',
            head: ['Phase', 'Hormone responsable', 'État de l’endomètre'],
            rows: [
              ['Menstruelle (J1 à J4 environ)', 'Chute de la **progestérone** et de l’œstradiol', 'La couche superficielle de l’endomètre se détache et s’élimine avec un peu de sang : ce sont les **règles** (menstruations).'],
              ['Proliférative (J5 à J14)', '**Œstradiol** sécrété par les follicules', 'L’endomètre se reconstruit et s’**épaissit** ; les glandes s’allongent et restent droites ; les vaisseaux se développent.'],
              ['Sécrétoire (J15 à J28)', '**Progestérone** (et œstradiol) sécrétées par le corps jaune', 'L’endomètre atteint son épaisseur maximale ; les glandes deviennent **tortueuses** et sécrètent du glycogène ; les **artérioles spiralées** se développent : l’endomètre est prêt pour la **nidation**.'],
            ],
          },
          { type: 'p', text: 'Le **col de l’utérus** change lui aussi. Autour de l’ovulation, sous l’effet de l’œstradiol, la **glaire cervicale** est abondante, fluide et filante, avec un réseau à larges mailles : les spermatozoïdes la traversent facilement. En phase lutéale, la progestérone la rend épaisse, avec un réseau à mailles serrées : elle devient une barrière presque infranchissable.' },
          {
            type: 'compare',
            title: 'Avec ou sans fécondation',
            columns: [
              { title: 'Sans fécondation', items: ['Le corps jaune régresse au bout d’environ 14 jours.', 'La progestérone et l’œstradiol chutent.', 'L’endomètre n’est plus entretenu : il se détache, ce sont les **règles**.', 'La FSH remonte : un nouveau cycle commence.'] },
              { title: 'Avec fécondation', items: ['L’embryon s’implante dans l’endomètre environ une semaine après la fécondation et sécrète une hormone, l’**hCG**.', 'L’hCG, proche de la LH, **maintient le corps jaune**, qui continue à sécréter de la progestérone.', 'L’endomètre est maintenu : pas de règles. Le placenta prend ensuite le relais de la sécrétion de progestérone.', 'Les **tests de grossesse** détectent l’hCG dans l’urine.'] },
            ],
          },
          { type: 'note', title: 'Quand les ovaires ne fonctionnent plus', text: 'Certains traitements contre le cancer peuvent détruire les follicules. Un **traitement hormonal substitutif** (œstrogènes, puis œstrogènes et progestatif) permet de reproduire le cycle de l’endomètre et de provoquer des règles, mais il ne crée pas d’ovulation. Si un fragment d’ovaire a été prélevé et congelé avant le traitement, son **autogreffe** peut restaurer à la fois la sécrétion d’hormones et les ovulations : des grossesses ont ainsi été obtenues.' },
          {
            type: 'retenir',
            items: [
              'L’**œstradiol** fait proliférer l’endomètre ; la **progestérone** le transforme en muqueuse sécrétoire, prête pour la nidation.',
              'La chute de la progestérone en fin de cycle provoque les **règles**.',
              'En cas de grossesse, l’**hCG** de l’embryon maintient le corps jaune, donc la progestérone et l’endomètre.',
              'La glaire cervicale est perméable aux spermatozoïdes autour de l’ovulation et imperméable sous l’effet de la progestérone.',
            ],
          },
        ],
      },

      {
        title: 'Maîtriser la reproduction : contraception hormonale et AMP',
        intro: 'Connaître la régulation hormonale permet d’agir sur elle : pour éviter une grossesse, ou au contraire pour l’aider.',
        blocks: [
          { type: 'definition', term: 'Pilule œstroprogestative (combinée)', text: 'comprimé contenant un **œstrogène** et un **progestatif** de synthèse, pris chaque jour pendant 21 jours (selon les pilules, suivis de 7 jours d’arrêt ou de comprimés sans hormone).' },
          {
            type: 'list',
            title: 'Le mode d’action de la pilule œstroprogestative',
            ordered: true,
            items: [
              'Les hormones de synthèse maintiennent des concentrations **constantes** qui exercent un **rétrocontrôle négatif** permanent sur l’hypothalamus et l’hypophyse.',
              'La FSH reste basse (pas de follicule dominant) et il n’y a **pas de pic de LH** : **pas d’ovulation**.',
              'Le progestatif rend en plus la **glaire cervicale** épaisse et imperméable aux spermatozoïdes, et l’endomètre peu favorable à la nidation.',
              'Pendant l’arrêt, la chute des hormones de synthèse provoque un saignement (hémorragie de privation), qui n’est pas de véritables règles.',
            ],
          },
          { type: 'figure', image: IMG.pilule, caption: 'Concentrations de LH et de progestérone naturelle au cours d’un cycle sans contraception (A) et sous pilule œstroprogestative (B) : sous pilule, il n’y a ni pic de LH, ni ovulation, ni corps jaune.', size: 'wide' },
          { type: 'p', text: 'La **pilule progestative** (ou microprogestative) ne contient qu’un progestatif, pris tous les jours sans interruption. Elle agit surtout en épaississant la glaire cervicale ; certaines bloquent aussi l’ovulation. D’autres méthodes hormonales reposent sur les mêmes principes : implant, anneau vaginal, patch, dispositif intra-utérin hormonal.' },
          { type: 'definition', term: 'Contraception d’urgence', text: 'contraception à prendre après un rapport non ou mal protégé, **le plus tôt possible** : un comprimé de lévonorgestrel dans les 72 heures, ou d’ulipristal acétate dans les 5 jours. Elle agit surtout en **retardant ou en bloquant l’ovulation** ; elle est donc inefficace si l’ovulation a déjà eu lieu, et elle n’interrompt pas une grossesse déjà implantée. En France, elle est délivrée en pharmacie, sans ordonnance et gratuitement.' },
          { type: 'warning', title: 'Contraception et infections sexuellement transmissibles', text: 'Aucune contraception hormonale ne protège contre les infections sexuellement transmissibles (IST). Seuls les préservatifs, masculins ou internes, protègent à la fois d’une grossesse et des IST.' },
          { type: 'definition', term: 'AMP (assistance médicale à la procréation)', text: 'ensemble des techniques médicales qui aident un couple ou une personne à concevoir un enfant : stimulation ovarienne, insémination artificielle, fécondation _in vitro_ (FIV), avec ou sans micro-injection d’un spermatozoïde dans l’ovocyte (ICSI).' },
          {
            type: 'steps',
            title: 'Un protocole simplifié de stimulation ovarienne pour une FIV',
            items: [
              { title: 'Bloquer l’hypophyse', text: 'Un médicament proche de la GnRH (agoniste ou antagoniste) empêche un pic de LH spontané, qui provoquerait une ovulation trop tôt.' },
              { title: 'Stimuler les follicules', text: 'Des injections quotidiennes de **FSH** pendant 10 à 12 jours font croître **plusieurs follicules** à la fois (au lieu d’un seul).' },
              { title: 'Surveiller', text: 'Des échographies (taille des follicules) et des dosages d’œstradiol permettent d’adapter les doses.' },
              { title: 'Déclencher', text: 'Quand les follicules mesurent environ 18 mm, une injection d’**hCG**, qui agit comme la LH, imite le pic de LH et achève la maturation des ovocytes.' },
              { title: 'Ponctionner', text: 'Environ 36 heures plus tard, juste avant l’ovulation, les ovocytes sont aspirés sous échographie, puis fécondés au laboratoire.' },
              { title: 'Transférer', text: 'Un embryon est déposé dans l’utérus 2 à 5 jours plus tard ; de la progestérone est donnée pour soutenir l’endomètre.' },
            ],
          },
          {
            type: 'retenir',
            items: [
              'La pilule œstroprogestative exerce un **rétrocontrôle négatif** permanent : pas de pic de LH, donc **pas d’ovulation** ; le progestatif épaissit la **glaire cervicale**.',
              'La contraception d’urgence retarde ou bloque l’ovulation : elle doit être prise le plus tôt possible.',
              'En AMP, on bloque le pic de LH spontané, on stimule plusieurs follicules par la FSH, puis on imite le pic de LH par l’hCG avant de ponctionner les ovocytes.',
            ],
          },
        ],
      },
    ],
  },

  guided: {
    intro: 'Ces activités reposent sur des expériences historiques, des courbes et des protocoles médicaux. Prends le temps de lire chaque document avant de répondre, puis compare avec la correction.',
    activities: [
      {
        title: 'Reconstituer la commande du testicule',
        duration: '30 min',
        skills: ['Exploiter des résultats', 'Raisonner', 'Schématiser'],
        context: 'Au XXe siècle, des expériences sur des rats mâles adultes ont permis de comprendre comment le testicule est commandé.',
        documents: [
          {
            label: 'Document 1',
            title: 'Résultats d’expériences sur des rats mâles adultes',
            blocks: [
              {
                type: 'table',
                head: ['Expérience', 'Résultats observés'],
                rows: [
                  ['1. Ablation de l’hypophyse', 'Testicules atrophiés, testostérone très basse, arrêt de la spermatogenèse.'],
                  ['2. Ablation de l’hypophyse, puis injections de LH et de FSH', 'Testicules, testostérone et spermatogenèse normaux.'],
                  ['3. Ablation de l’hypophyse, puis injections de LH seule', 'Cellules de Leydig actives, testostérone normale.'],
                  ['4. Castration (ablation des testicules)', 'LH et FSH plusieurs fois plus élevées que chez un rat témoin.'],
                  ['5. Castration, puis injections de testostérone', 'LH à nouveau basse.'],
                ],
              },
            ],
          },
          { label: 'Document 2', title: 'Un cas clinique', text: 'Un adolescent de 17 ans n’a aucun signe de puberté. Ses concentrations de LH, de FSH et de testostérone sont très basses. Son hypophyse est normale : une injection de GnRH provoque une augmentation de LH et de FSH. Le diagnostic est un syndrome de Kallmann, une absence de neurones à GnRH.' },
        ],
        questions: [
          { text: 'Que montrent les expériences 1 et 2 sur le rôle de l’hypophyse ?', answer: 'Sans hypophyse, le testicule ne fonctionne plus (ni testostérone, ni spermatozoïdes). Des injections de LH et de FSH suffisent à rétablir son fonctionnement : l’hypophyse commande le testicule par l’intermédiaire de ces deux hormones, transportées par le sang.' },
          { text: 'D’après l’expérience 3, quelle hormone hypophysaire commande les cellules de Leydig ?', answer: 'La LH seule suffit à rétablir l’activité des cellules de Leydig et la sécrétion de testostérone : la LH stimule les cellules de Leydig.' },
          { text: 'Interprète les expériences 4 et 5. Comment appelle-t-on ce mécanisme ?', hint: 'Que se passe-t-il quand on supprime la testostérone, puis quand on la remet ?', answer: 'Sans testicules, il n’y a plus de testostérone et la LH augmente fortement ; quand on injecte de la testostérone, la LH redescend. La testostérone freine donc la sécrétion de LH : c’est un rétrocontrôle négatif.' },
          { text: 'À l’aide du document 2, précise le rôle de l’hypothalamus et propose un traitement.', answer: 'Sans GnRH, l’hypophyse, pourtant normale, ne sécrète presque pas de LH et de FSH : les testicules ne sont pas stimulés et la puberté ne démarre pas. L’hypothalamus commande donc l’hypophyse par la GnRH. Traitement possible : administrer de la GnRH par pulses (pompe), ou directement de la LH et de la FSH (ou de la testostérone pour les caractères sexuels secondaires).' },
          { text: 'Construis le schéma fonctionnel de l’axe gonadotrope masculin à partir de ces résultats.', answer: 'Hypothalamus → GnRH → antéhypophyse → LH → cellules de Leydig → testostérone → organes cibles ; antéhypophyse → FSH → cellules de Sertoli → spermatogenèse (avec la testostérone). Rétrocontrôles négatifs : testostérone ⊣ hypothalamus et antéhypophyse ; inhibine ⊣ FSH. Compare avec le schéma de la Partie 2.' },
        ],
      },
      {
        title: 'Lire les courbes d’un cycle',
        duration: '30 min',
        skills: ['Lire un graphique', 'Mettre en relation'],
        context: 'Une jeune femme dont les cycles durent 28 jours participe à une étude : on dose ses hormones et on suit ses ovaires par échographie.',
        documents: [
          { label: 'Document 3', title: 'Hormones, ovaire et endomètre au cours du cycle', image: IMG.cycle, caption: 'Concentrations en unités arbitraires.' },
          { label: 'Document 4', title: 'Échographie réalisée au cours du cycle', image: IMG.echographie, caption: 'Les follicules apparaissent en noir ; le plus grand mesure environ 20 mm.', size: 'normal' },
        ],
        questions: [
          { text: 'Relève la durée de la phase folliculaire et de la phase lutéale, et l’événement qui les sépare.', answer: 'Phase folliculaire : du jour 1 au jour 14 ; phase lutéale : du jour 14 au jour 28. Elles sont séparées par l’ovulation, vers le jour 14.' },
          { text: 'Mets en relation l’évolution de la FSH, la croissance des follicules et la concentration d’œstradiol pendant la phase folliculaire.', answer: 'La FSH, un peu plus élevée en début de cycle, stimule la croissance des follicules. En grossissant, les follicules sécrètent de plus en plus d’œstradiol, dont la concentration augmente jusqu’à un pic vers le jour 12-13.' },
          { text: 'Quel événement hormonal précède l’ovulation ? Justifie à partir du graphique.', answer: 'Un pic de LH, maximal vers le jour 13-14, juste avant l’ovulation : c’est lui qui déclenche la rupture du follicule mûr (environ 36 heures après le début du pic).' },
          { text: 'À quel moment du cycle l’échographie du document 4 a-t-elle probablement été réalisée ? Justifie.', answer: 'En fin de phase folliculaire, juste avant l’ovulation (vers les jours 12-13) : on voit un follicule dominant d’environ 20 mm, taille atteinte par le follicule mûr, et plusieurs petits follicules qui ne se développeront pas.' },
          { text: 'Explique l’évolution de la progestérone en phase lutéale, puis la survenue des règles au jour 28.', answer: 'Après l’ovulation, le follicule vidé devient le corps jaune, qui sécrète de la progestérone : sa concentration augmente jusqu’au jour 21 environ. Sans fécondation, le corps jaune régresse : la progestérone chute en fin de cycle. L’endomètre, qui n’est plus entretenu par la progestérone, se détache : ce sont les règles.' },
        ],
      },
      {
        title: 'Montrer le rétrocontrôle positif',
        duration: '25 min',
        skills: ['Exploiter des résultats', 'Argumenter'],
        context: 'Dans les années 1970, des expériences sur le singe rhésus, dont le cycle ressemble beaucoup à celui de la femme, ont permis de comprendre le déclenchement du pic de LH.',
        documents: [
          {
            label: 'Document 5',
            title: 'Expériences sur des femelles singes rhésus (résultats simplifiés)',
            blocks: [
              {
                type: 'table',
                head: ['Expérience', 'Résultats'],
                rows: [
                  ['A. Ablation des ovaires', 'La FSH et la LH augmentent fortement et durablement.'],
                  ['B. Ablation des ovaires, puis implant libérant une faible dose constante d’œstradiol', 'La FSH et la LH redescendent et restent basses.'],
                  ['C. Ablation des ovaires, puis injection d’une forte dose d’œstradiol (concentration élevée pendant plus de deux jours)', 'La LH baisse d’abord, puis présente un pic important environ 36 à 48 heures après l’injection.'],
                  ['D. Même injection qu’en C, mais la concentration d’œstradiol ne reste élevée que quelques heures', 'Pas de pic de LH.'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Que montrent les expériences A et B ?', answer: 'Sans ovaires, la FSH et la LH augmentent : les ovaires freinaient leur sécrétion. Une faible dose d’œstradiol suffit à les faire redescendre : l’œstradiol à faible concentration exerce un rétrocontrôle négatif sur l’axe hypothalamo-hypophysaire.' },
          { text: 'Compare les expériences B et C. Quel changement de l’effet de l’œstradiol mettent-elles en évidence ?', answer: 'À faible concentration (B), l’œstradiol freine la LH ; à forte concentration maintenue (C), après une baisse transitoire, il provoque un pic de LH. L’effet de l’œstradiol s’inverse : il devient un rétrocontrôle positif.' },
          { text: 'Que montre l’expérience D ? Relie-la à la notion de valeur seuil.', answer: 'Une concentration élevée mais trop brève ne déclenche pas de pic : il faut que l’œstradiol dépasse une valeur seuil pendant une durée suffisante (environ deux jours) pour que le rétrocontrôle devienne positif.' },
          { text: 'Applique ces résultats au cycle de la femme : quelle structure ovarienne produit cette forte concentration d’œstradiol, et à quel moment ?', answer: 'C’est le follicule dominant, en fin de phase folliculaire : en grossissant, il sécrète de plus en plus d’œstradiol, qui dépasse le seuil pendant environ deux jours. Le rétrocontrôle devient positif, ce qui déclenche le pic de LH puis l’ovulation.' },
        ],
      },
      {
        title: 'Contraception hormonale et stimulation ovarienne',
        duration: '30 min',
        skills: ['Mettre en relation', 'Expliquer', 'Argumenter'],
        context: 'Une infirmière scolaire prépare une séance d’information. Elle s’appuie sur des graphiques et sur un protocole d’AMP.',
        documents: [
          { label: 'Document 6', title: 'Hormones avec et sans pilule œstroprogestative', image: IMG.pilule, caption: 'A : cycle sans contraception. B : sous pilule combinée.' },
          { label: 'Document 7', title: 'La glaire cervicale', text: 'Au microscope, la glaire cervicale prélevée juste avant l’ovulation forme un réseau à larges mailles que les spermatozoïdes traversent facilement. Chez une femme sous pilule progestative, elle forme un réseau dense à mailles serrées, que les spermatozoïdes ne traversent pas.' },
          {
            label: 'Document 8',
            title: 'Protocole simplifié de stimulation ovarienne avant une FIV',
            blocks: [
              {
                type: 'table',
                head: ['Étape', 'Médicament', 'Durée'],
                rows: [
                  ['1', 'Antagoniste de la GnRH (bloque la sécrétion de LH et de FSH par l’hypophyse)', 'Pendant la stimulation'],
                  ['2', 'FSH en injection quotidienne', '10 à 12 jours'],
                  ['3', 'hCG en une injection, quand les follicules mesurent environ 18 mm', '1 jour'],
                  ['4', 'Ponction des ovocytes', '36 heures après l’hCG'],
                ],
              },
            ],
          },
        ],
        questions: [
          { text: 'Compare les graphiques A et B du document 6. Explique comment la pilule œstroprogestative empêche l’ovulation.', answer: 'Sans contraception, un pic de LH déclenche l’ovulation et la progestérone augmente ensuite (corps jaune). Sous pilule, la LH reste basse, sans pic, et la progestérone naturelle reste faible : il n’y a ni ovulation ni corps jaune. Les hormones de synthèse, à concentration constante, exercent un rétrocontrôle négatif permanent sur l’hypothalamus et l’hypophyse, ce qui empêche le pic de LH.' },
          { text: 'Explique, à l’aide du document 7, le mode d’action principal de la pilule progestative.', answer: 'Le progestatif rend la glaire cervicale épaisse, à mailles serrées : les spermatozoïdes ne peuvent pas franchir le col de l’utérus, donc ne peuvent pas atteindre l’ovocyte, même si une ovulation se produit.' },
          { text: 'Une élève a oublié sa pilule et a eu un rapport non protégé. Pourquoi la contraception d’urgence doit-elle être prise le plus vite possible ?', answer: 'La contraception d’urgence agit surtout en retardant ou en bloquant l’ovulation. Elle n’est efficace que si l’ovulation n’a pas encore eu lieu : plus elle est prise tôt, plus elle a de chances d’agir avant le pic de LH. Les spermatozoïdes pouvant survivre quelques jours dans les voies génitales, il faut agir vite. Elle est disponible en pharmacie, sans ordonnance.' },
          { text: 'Pour chaque étape du document 8, explique son rôle en t’appuyant sur la régulation de l’axe gonadotrope.', answer: 'Étape 1 : l’antagoniste empêche l’hypophyse de produire un pic de LH spontané, qui ferait ovuler trop tôt et ferait perdre les ovocytes. Étape 2 : de fortes doses de FSH stimulent la croissance de plusieurs follicules en même temps, au lieu d’un seul. Étape 3 : l’hCG agit comme la LH ; elle imite le pic de LH et achève la maturation des ovocytes. Étape 4 : la ponction a lieu environ 36 heures après, juste avant que l’ovulation ne se produise, pour recueillir les ovocytes mûrs.' },
        ],
      },
      {
        title: 'Retrouver des cycles après un cancer',
        duration: '20 min',
        skills: ['Exploiter un cas clinique', 'Raisonner'],
        context: 'Inès, 24 ans, a été traitée pour un cancer à 17 ans. La chimiothérapie a détruit ses follicules. Avant le traitement, un fragment de son ovaire avait été prélevé et congelé.',
        documents: [
          { label: 'Document 9', title: 'L’endomètre au cours du cycle', image: IMG.endometre, caption: 'Phases menstruelle, proliférative et sécrétoire.' },
          { label: 'Document 10', title: 'Deux traitements possibles', text: ['Traitement 1 : traitement hormonal substitutif, avec un œstrogène du 1er au 25e jour, auquel on ajoute un progestatif du 12e au 25e jour, puis un arrêt de quelques jours.', 'Traitement 2 : autogreffe, c’est-à-dire greffe chez Inès de son propre fragment d’ovaire décongelé.'] },
        ],
        questions: [
          { text: 'Avant tout traitement, Inès n’a plus de règles. Explique pourquoi à l’aide du document 9.', answer: 'Sans follicules ni corps jaune, ses ovaires ne sécrètent plus d’œstradiol ni de progestérone. L’endomètre n’est plus stimulé : il ne prolifère pas, ne devient pas sécrétoire et ne se détache pas périodiquement. Il n’y a donc plus de règles.' },
          { text: 'Explique pourquoi le traitement 1 permet de retrouver des règles, mais pas une ovulation.', answer: 'L’œstrogène fait proliférer l’endomètre, puis le progestatif le transforme en endomètre sécrétoire ; à l’arrêt, la chute des hormones provoque son détachement, comme des règles. Mais ce traitement ne remplace pas les follicules : aucun ovocyte n’est produit, il n’y a pas d’ovulation.' },
          { text: 'Pourquoi le traitement 2 peut-il rendre une grossesse possible ? Quelle commande hormonale doit rester fonctionnelle ?', answer: 'Le fragment d’ovaire greffé contient des follicules : stimulés par la FSH et la LH de son hypophyse, ils peuvent grandir, sécréter des hormones et libérer un ovocyte à l’ovulation. Il faut que l’axe hypothalamus-hypophyse fonctionne normalement pour commander l’ovaire greffé.' },
        ],
      },
    ],
  },

  review: {
    keyPoints: [
      'L’hypothalamus sécrète la GnRH par pulses ; elle stimule l’antéhypophyse, qui sécrète la FSH et la LH : c’est la cascade de régulation de l’axe gonadotrope.',
      'Chez l’homme, LH → cellules de Leydig → testostérone et FSH → cellules de Sertoli → spermatogenèse ; la testostérone et l’inhibine exercent un rétrocontrôle négatif qui stabilise le système.',
      'Chez la femme, la FSH fait croître les follicules, qui sécrètent de l’œstradiol ; le pic de LH déclenche l’ovulation ; le corps jaune sécrète progestérone et œstradiol pendant environ 14 jours.',
      'Les hormones ovariennes exercent un rétrocontrôle négatif presque tout le cycle ; l’œstradiol au-dessus d’une valeur seuil pendant environ deux jours exerce un rétrocontrôle positif qui provoque le pic de LH.',
      'L’œstradiol fait proliférer l’endomètre, la progestérone le rend sécrétoire ; sa chute provoque les règles ; en cas de grossesse, l’hCG maintient le corps jaune.',
      'La pilule œstroprogestative bloque l’ovulation par rétrocontrôle négatif ; la stimulation ovarienne en AMP associe blocage du pic spontané, FSH et hCG.',
    ],
    method: {
      title: 'Construire un schéma fonctionnel de régulation',
      steps: [
        'Placer les organes de haut en bas : hypothalamus, antéhypophyse, gonade, organes cibles.',
        'Relier les organes par des flèches pleines, en écrivant le nom de chaque hormone sur la flèche.',
        'Ajouter les rétrocontrôles avec un code distinct (pointillés, signe − pour un frein, + pour une stimulation).',
        'Ajouter une légende et un titre qui précise la situation (homme, ou femme à tel moment du cycle).',
      ],
    },
    vocabulary: [
      { term: 'Hypothalamus', definition: 'Région de la base du cerveau dont des neurones sécrètent la GnRH.' },
      { term: 'Antéhypophyse', definition: 'Partie antérieure de l’hypophyse, qui sécrète la FSH et la LH.' },
      { term: 'GnRH', definition: 'Neurohormone hypothalamique, libérée par pulses, qui stimule la sécrétion de FSH et de LH.' },
      { term: 'FSH', definition: 'Hormone folliculo-stimulante : croissance des follicules, stimulation des cellules de Sertoli.' },
      { term: 'LH', definition: 'Hormone lutéinisante : ovulation et corps jaune chez la femme, stimulation des cellules de Leydig chez l’homme.' },
      { term: 'Rétrocontrôle négatif', definition: 'Action en retour d’une hormone qui freine les sécrétions qui l’ont provoquée ; il stabilise.' },
      { term: 'Rétrocontrôle positif', definition: 'Action en retour d’une hormone qui amplifie les sécrétions qui l’ont provoquée ; il déclenche un pic.' },
      { term: 'Valeur seuil', definition: 'Concentration à partir de laquelle l’effet d’une hormone change.' },
      { term: 'Phase folliculaire', definition: 'Première partie du cycle, des règles à l’ovulation, pendant laquelle un follicule devient mûr.' },
      { term: 'Phase lutéale', definition: 'Seconde partie du cycle, de l’ovulation aux règles, dominée par le corps jaune et la progestérone.' },
      { term: 'Endomètre', definition: 'Muqueuse interne de l’utérus, qui prolifère puis devient sécrétoire au cours du cycle.' },
      { term: 'Glaire cervicale', definition: 'Sécrétion du col de l’utérus, perméable aux spermatozoïdes seulement autour de l’ovulation.' },
      { term: 'hCG', definition: 'Hormone sécrétée par l’embryon, qui maintient le corps jaune ; elle est détectée par les tests de grossesse.' },
      { term: 'AMP', definition: 'Assistance médicale à la procréation : stimulation ovarienne, insémination, fécondation in vitro.' },
    ],
    mistakes: [
      { wrong: 'Dire que la FSH et la LH sont sécrétées par l’hypothalamus.', right: 'L’hypothalamus sécrète la GnRH ; la FSH et la LH sont sécrétées par l’antéhypophyse.' },
      { wrong: 'Écrire que les règles marquent la fin du cycle et l’ovulation son début.', right: 'Le jour 1 du cycle est le premier jour des règles ; l’ovulation a lieu vers le milieu du cycle.' },
      { wrong: 'Penser que l’œstradiol exerce toujours un rétrocontrôle négatif.', right: 'Au-dessus d’un seuil, maintenu environ deux jours, il exerce un rétrocontrôle positif qui déclenche le pic de LH.' },
      { wrong: 'Dire que la progestérone fait épaissir l’endomètre dès le début du cycle.', right: 'L’œstradiol fait proliférer l’endomètre (phase folliculaire) ; la progestérone le rend sécrétoire (phase lutéale).' },
      { wrong: 'Croire que la contraception d’urgence interrompt une grossesse.', right: 'Elle retarde ou bloque l’ovulation ; elle n’agit pas sur une grossesse déjà implantée.' },
      { wrong: 'Penser que la pilule protège des IST.', right: 'Seuls les préservatifs protègent des infections sexuellement transmissibles.' },
    ],
    quiz: [
      { question: 'La GnRH est sécrétée par :', choices: ['L’antéhypophyse', 'L’hypothalamus', 'Les cellules de Leydig', 'Le corps jaune'], answer: 1, explanation: 'Des neurones de l’hypothalamus libèrent la GnRH par pulses ; elle stimule l’antéhypophyse.' },
      { question: 'Chez l’homme, la LH stimule :', choices: ['Les cellules de Sertoli', 'Les spermatozoïdes', 'Les cellules de Leydig', 'La prostate'], answer: 2, explanation: 'La LH stimule la sécrétion de testostérone par les cellules de Leydig.' },
      { question: 'Après une castration, la concentration de LH :', choices: ['Diminue', 'Ne change pas', 'Augmente fortement', 'Devient nulle'], answer: 2, explanation: 'Le rétrocontrôle négatif de la testostérone a disparu : la LH n’est plus freinée.' },
      { question: 'L’ovulation est déclenchée par :', choices: ['Un pic de LH', 'Une chute de FSH', 'Un pic de progestérone', 'L’arrêt des règles'], answer: 0, explanation: 'Le pic de LH provoque la rupture du follicule mûr environ 36 heures plus tard.' },
      { question: 'Pendant la phase lutéale, la principale hormone sécrétée par l’ovaire est :', choices: ['La FSH', 'La testostérone', 'La GnRH', 'La progestérone'], answer: 3, explanation: 'Le corps jaune sécrète surtout de la progestérone (et de l’œstradiol).' },
      { question: 'Le pic de LH résulte :', choices: ['D’un rétrocontrôle négatif de la progestérone', 'D’un rétrocontrôle positif de l’œstradiol au-dessus d’un seuil', 'De la régression du corps jaune', 'De la sécrétion d’hCG'], answer: 1, explanation: 'Une concentration élevée d’œstradiol, maintenue environ deux jours, inverse son effet sur l’axe hypothalamo-hypophysaire.' },
      { question: 'L’endomètre devient sécrétoire, avec des glandes tortueuses, sous l’effet :', choices: ['De la progestérone', 'De la FSH', 'De la LH seule', 'De la chute des hormones'], answer: 0, explanation: 'La progestérone du corps jaune prépare l’endomètre à la nidation.' },
      { question: 'Les règles sont provoquées par :', choices: ['Le pic de LH', 'La chute de la progestérone en fin de cycle', 'L’augmentation de l’œstradiol', 'La nidation'], answer: 1, explanation: 'Sans progestérone, l’endomètre n’est plus entretenu et sa couche superficielle se détache.' },
      { question: 'La pilule œstroprogestative empêche l’ovulation car :', choices: ['Elle détruit les follicules', 'Elle provoque un pic de LH permanent', 'Elle exerce un rétrocontrôle négatif qui empêche le pic de LH', 'Elle bloque la sécrétion de progestérone par l’embryon'], answer: 2, explanation: 'Les hormones de synthèse freinent en permanence l’hypothalamus et l’hypophyse.' },
      { question: 'Dans un protocole de FIV, l’injection d’hCG sert à :', choices: ['Faire croître plusieurs follicules', 'Imiter le pic de LH', 'Bloquer l’hypophyse', 'Provoquer les règles'], answer: 1, explanation: 'L’hCG agit comme la LH : elle déclenche la maturation finale des ovocytes avant la ponction.' },
    ],
    exercises: [
      {
        title: 'Un cycle de 32 jours',
        statement: 'Chloé a des cycles réguliers de 32 jours. a) À quel jour a lieu son ovulation ? Justifie. b) Ses règles commencent le 3 mars. À quelle date se situe probablement son ovulation ?',
        answer: ['a) La phase lutéale dure environ 14 jours quelle que soit la durée du cycle. L’ovulation a donc lieu vers le jour 32 − 14 = 18.', 'b) Le jour 1 est le 3 mars ; le jour 18 est 17 jours plus tard, soit vers le 20 mars.'],
      },
      {
        title: 'Un test de grossesse',
        statement: 'Explique pourquoi un test de grossesse urinaire recherche l’hCG, et pourquoi les règles ne surviennent pas chez une femme enceinte.',
        answer: 'L’hCG n’est produite que par l’embryon implanté : sa présence dans l’urine signe une grossesse. Cette hormone, qui agit comme la LH, maintient le corps jaune, qui continue à sécréter de la progestérone. L’endomètre reste donc entretenu et ne se détache pas : il n’y a pas de règles.',
      },
      {
        title: 'Schéma fonctionnel',
        statement: 'Réalise le schéma fonctionnel de l’axe gonadotrope féminin pendant la phase lutéale, puis explique en deux phrases pourquoi aucun nouveau follicule ne devient mûr pendant cette phase.',
        answer: ['Hypothalamus → GnRH → antéhypophyse → FSH et LH (basses) → ovaire (corps jaune) → progestérone et œstradiol → endomètre ; rétrocontrôle négatif (pointillés, signe −) de la progestérone et de l’œstradiol sur l’hypothalamus et l’antéhypophyse.', 'La progestérone et l’œstradiol du corps jaune freinent fortement la sécrétion de FSH et de LH. Sans FSH suffisante, les follicules ne peuvent pas grandir jusqu’à maturité.'],
      },
    ],
    selfCheck: [
      'Je sais situer l’hypothalamus et l’hypophyse et nommer leurs hormones.',
      'Je sais expliquer les sigles FSH et LH en lien avec leur action.',
      'Je sais construire le schéma fonctionnel de l’axe gonadotrope masculin avec ses rétrocontrôles.',
      'Je sais décrire les phases du cycle ovarien et les relier aux courbes de FSH, LH, œstradiol et progestérone.',
      'Je sais expliquer la différence entre rétrocontrôle négatif et positif, et le rôle de la valeur seuil.',
      'Je sais expliquer l’évolution de l’endomètre, avec ou sans fécondation.',
      'Je sais expliquer le mode d’action de la pilule et de la contraception d’urgence, et le principe d’une stimulation ovarienne.',
    ],
    sources: [
      { title: 'Programmes et ressources en série STL — Éduscol', url: 'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl' },
      { title: 'QuestionSexualité : contraception et contraception d’urgence — Santé publique France', url: 'https://www.questionsexualite.fr/' },
      { title: 'Contraception d’urgence — Service-public.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1100' },
      { title: 'Procréation médicale — Agence de la biomédecine', url: 'https://www.procreation-medicale.fr/' },
      { title: 'Cycle menstruel — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Cycle_menstruel' },
      { title: 'Hormone lutéinisante — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hormone_lut%C3%A9inisante' },
      { title: 'Hormone folliculo-stimulante — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Hormone_folliculo-stimulante' },
    ],
  },
};

export default lesson;
