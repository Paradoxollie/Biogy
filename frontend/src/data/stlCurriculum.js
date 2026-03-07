export const COURSE_REFERENCES = [
  {
    id: 'stl-hub',
    title: 'Programmes et ressources en serie STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/cid143748/stl-bac-2021.html',
  },
  {
    id: 'premiere-biobio',
    title: 'Programme de biochimie-biologie de premiere STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/document/23089/download',
  },
  {
    id: 'premiere-biotech',
    title: 'Programme de biotechnologies de premiere STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/document/23092/download',
  },
  {
    id: 'terminale-bbb',
    title: 'Programme de biochimie, biologie et biotechnologies de terminale STL',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/document/23101/download',
  },
  {
    id: 'discipline',
    title: 'Biotechnologies, sciences et techniques medico-sociales',
    source: 'Eduscol',
    url: 'https://eduscol.education.fr/2340/biotechnologies-sciences-et-techniques-medico-sociales',
  },
  {
    id: 'delagrave-biotech-1re',
    title: 'Biotechnologies 1re STL - manuel numerique eleve',
    source: 'Delagrave',
    url: 'https://www.editions-delagrave.fr/site/302881',
  },
];

const COURSE_LEVELS = [
  {
    id: 'premiere',
    title: 'Premiere STL',
    shortTitle: 'Premiere',
    intro:
      'La premiere STL pose les bases. Tu y travailles a la fois les notions scientifiques, les gestes de laboratoire et la rigueur necessaire pour la suite.',
    sourceIds: ['stl-hub', 'premiere-biobio', 'premiere-biotech', 'delagrave-biotech-1re'],
    sections: [
      {
        id: 'biochimie-biologie',
        title: 'Biochimie-biologie',
        chapters: [
          {
            id: 'bb1-nutrition',
            code: 'BB1',
            title: 'Mecanismes moleculaires et physiologiques de la nutrition',
            summary: 'Comprendre comment l organisme transforme, absorbe et elimine la matiere.',
            skills: ['expliquer digestion et absorption', 'relier organes, tissus et molecules', 'utiliser un schema fonctionnel'],
          },
          {
            id: 'bb2-reproduction-genetique',
            code: 'BB2',
            title: 'Mecanismes physiologiques et moleculaires de la reproduction et de la transmission des caracteres hereditaires',
            summary: 'Relier reproduction, information genetique et transmission des caracteres.',
            skills: ['decrire la reproduction', 'relier gene et caractere', 'argumenter a partir de documents'],
          },
          {
            id: 'bba-biomolecules',
            code: 'BBA',
            title: 'Relations structures et proprietes des biomolecules',
            summary: 'Installer les bases de biochimie utiles a toute la suite du programme.',
            skills: ['identifier les grandes familles de biomolecules', 'relier structure et propriete', 'reutiliser ces notions dans un contexte biologique'],
          },
          {
            id: 'bbb-structures-fonctions',
            code: 'BBB',
            title: 'Relations structures et fonctions physiologiques',
            summary: 'Mettre en relation organisation du vivant et fonction biologique.',
            skills: ['decrire un niveau d organisation', 'relier structure et fonction', 'justifier une fonction par une observation'],
          },
          {
            id: 'bbc-homeostasie',
            code: 'BBC',
            title: 'Milieu interieur et homeostasie',
            summary: 'Comprendre les grandes regulations qui maintiennent l equilibre du milieu interieur.',
            skills: ['definir homeostasie', 'reperer une regulation', 'analyser une perturbation simple'],
          },
          {
            id: 'bbd-information-communication',
            code: 'BBD',
            title: 'Information et communication',
            summary: 'Savoir expliquer clairement un resultat, une observation ou un raisonnement scientifique.',
            skills: ['lire un document scientifique', 'faire un schema utile', 'rediger une explication precise'],
          },
        ],
      },
      {
        id: 'biotechnologies',
        title: 'Biotechnologies',
        chapters: [
          {
            id: 'bt1-microscopie',
            code: 'BT1',
            title: 'Observer la diversite du vivant a l echelle microscopique',
            summary: 'Apprendre a observer, regler le microscope et decrire ce que l on voit avec precision.',
            skills: ['utiliser le microscope optique', 'distinguer observation et interpretation', 'realiser un schema scientifique'],
            content: {
              intro:
                'En biotechnologies, on commence par observer. Ce chapitre t apprend a utiliser correctement le microscope, a decrire ce que tu vois et a garder une trace utile de tes observations.',
              objectives: [
                'Regler un microscope optique avec methode.',
                'Reconnaitre quelques grands types d organisation cellulaire.',
                'Distinguer une observation, une interpretation et un schema.',
              ],
              sections: [
                {
                  title: 'Pourquoi observe-t-on a l echelle microscopique ?',
                  body: [
                    'Une grande partie du vivant est invisible a l oeil nu. Le microscope permet donc d acceder a un niveau d organisation indispensable en STL : celui des cellules et des micro-organismes.',
                    'Observer ne consiste pas a regarder vite. Il faut repérer une forme, une organisation, une taille relative, puis comparer plusieurs observations avant de conclure.',
                  ],
                },
                {
                  title: 'Ce que l on peut reconnaitre',
                  body: [
                    'Une cellule procaryote ne possede pas de noyau individualise. Une cellule eucaryote possede au contraire un noyau et d autres compartiments internes.',
                    'Certaines structures donnent deja des indices utiles : paroi, noyau, vacuole, forme generale ou regroupement des cellules.',
                  ],
                },
                {
                  title: 'Bien utiliser le microscope',
                  body: [
                    'On commence toujours par le plus faible grossissement. Le champ est plus large et la mise au point plus facile.',
                    'On utilise d abord la vis macrometrique avec prudence, puis la vis micrometrique. L objectif ne doit jamais venir ecraser la lame.',
                  ],
                },
                {
                  title: 'Decrire correctement',
                  body: [
                    'En STL, il faut separer ce qui est vu de ce qui est interprete. Dire "je vois des cellules rondes" est une observation. Dire "ce sont des bacteries pathogenes" est deja une interpretation qui demande des preuves.',
                    'Le schema d observation doit etre propre, fidele, titre et legende. Il sert a garder une trace scientifique claire.',
                  ],
                },
              ],
              keyPoints: [
                'Observer, ce n est pas deviner.',
                'Le microscope se regle avec methode.',
                'Le vocabulaire scientifique doit rester precis.',
              ],
              selfCheck: [
                'Pourquoi commence-t-on par le plus faible grossissement ?',
                'Quelle difference fais-tu entre observation et interpretation ?',
                'Quelles structures peuvent t aider a reconnaitre un type cellulaire ?',
              ],
            },
          },
          {
            id: 'bt2-cultiver-microorganismes',
            code: 'BT2',
            title: 'Cultiver des micro-organismes',
            summary: 'Mettre en culture en respectant l asepsie, les milieux et les conditions de croissance.',
            skills: ['respecter l asepsie', 'choisir un milieu adapte', 'suivre une croissance simple'],
          },
          {
            id: 'bt3-identifier-microorganismes',
            code: 'BT3',
            title: 'Caracteriser pour identifier les micro-organismes',
            summary: 'Croiser plusieurs observations et tests pour construire une identification.',
            skills: ['choisir des caracteres utiles', 'lire un test', 'proposer une identification argumentee'],
          },
          {
            id: 'bt4-denombrement',
            code: 'BT4',
            title: 'Realiser un denombrement de micro-organismes presents dans un produit biologique',
            summary: 'Comparer les methodes de denombrement et lire un resultat quantitatif.',
            skills: ['choisir une methode', 'exprimer un resultat', 'interpreter un denombrement'],
          },
          {
            id: 'bt5-solutions',
            code: 'BT5',
            title: 'Preparer des solutions utilisables au laboratoire',
            summary: 'Travailler les concentrations, les dilutions et la tracabilite des solutions.',
            skills: ['calculer une dilution', 'preparer une solution', 'etiqueter correctement'],
          },
          {
            id: 'bt6-biomolecules',
            code: 'BT6',
            title: 'Detecter et caracteriser les biomolecules',
            summary: 'Mettre en evidence une biomolecule et lire correctement un resultat.',
            skills: ['choisir des temoins', 'decrire une reaction de detection', 'valider un resultat'],
          },
          {
            id: 'bt7-separation',
            code: 'BT7',
            title: 'Separer les composants d un melange',
            summary: 'Choisir une technique de separation et comprendre ce qu elle permet d isoler.',
            skills: ['choisir filtration ou centrifugation', 'lire un resultat de separation', 'relier technique et objectif'],
          },
          {
            id: 'bt8-concentration',
            code: 'BT8',
            title: 'Determiner la concentration d une biomolecule dans un produit biologique',
            summary: 'Passer d une mesure a une concentration exploitable.',
            skills: ['etablir une gamme simple', 'lire un etalonnage', 'exprimer une concentration'],
          },
          {
            id: 'bta-projet',
            code: 'BTA',
            title: 'S initier a la recherche experimentale et a la demarche de projet',
            summary: 'Apprendre a formuler une question, tester une idee et rendre compte.',
            skills: ['formuler une hypothese', 'organiser une demarche simple', 'presenter une conclusion'],
          },
          {
            id: 'btb-risques',
            code: 'BTB',
            title: 'Prevenir les risques au laboratoire de biotechnologies',
            summary: 'Identifier les dangers et adopter les bons reflexes en laboratoire.',
            skills: ['repérer un danger', 'choisir une mesure de prevention', 'agir avec rigueur en TP'],
          },
          {
            id: 'btc-mesures',
            code: 'BTC',
            title: 'Obtenir des resultats de mesure fiables',
            summary: 'Comprendre precision, justesse et qualite d un resultat de mesure.',
            skills: ['choisir le bon materiel', 'reduire les erreurs', 'exprimer un resultat correctement'],
          },
          {
            id: 'btd-numerique',
            code: 'BTD',
            title: 'Utiliser des outils numeriques en biotechnologies',
            summary: 'Chercher, traiter et presenter des donnees scientifiques de facon fiable.',
            skills: ['chercher une source fiable', 'traiter un tableau de donnees', 'presenter un resultat numerique'],
          },
        ],
      },
    ],
  },
  {
    id: 'terminale',
    title: 'Terminale STL',
    shortTitle: 'Terminale',
    intro:
      'En terminale STL, tu dois savoir relier le cours, le laboratoire et les epreuves du baccalaureat. Le travail demande plus d autonomie, plus de precision et plus de recul.',
    sourceIds: ['stl-hub', 'terminale-bbb', 'discipline'],
    sections: [
      {
        id: 'partie-s',
        title: 'Partie S - Concepts scientifiques',
        chapters: [
          {
            id: 's1-enzymes-voies',
            code: 'S1',
            title: 'Enzymes et voies metaboliques',
            summary: 'Comprendre le role des enzymes, des voies metaboliques et de l ATP dans le fonctionnement du vivant.',
            skills: ['definir une enzyme', 'expliquer une voie metabolique', 'lire une situation experimentale simple'],
            content: {
              intro:
                'Ce chapitre est central en terminale. Il sert a comprendre de nombreux protocoles de laboratoire, mais aussi des situations de sante, de production ou de fermentation.',
              objectives: [
                'Definir une enzyme comme catalyseur biologique.',
                'Comprendre la specificite enzymatique.',
                'Relier voies metaboliques, ATP, respiration et fermentation.',
              ],
              sections: [
                {
                  title: 'Une enzyme est un catalyseur biologique',
                  body: [
                    'Une enzyme accelere une reaction chimique sans etre consommee. Dans la cellule, cela permet des transformations rapides dans des conditions compatibles avec le vivant.',
                    'La plupart des enzymes sont des proteines. Leur structure est donc directement liee a leur activite.',
                  ],
                },
                {
                  title: 'La specificite enzymatique',
                  body: [
                    'Une enzyme n agit pas au hasard. Son site actif reconnait un substrat ou un petit nombre de substrats.',
                    'Cette specificite explique pourquoi chaque etape d une voie metabolique depend d une enzyme precise.',
                  ],
                },
                {
                  title: 'Ce qui modifie l activite enzymatique',
                  body: [
                    'La temperature, le pH, la concentration en substrat ou la presence d inhibiteurs peuvent modifier l activite d une enzyme.',
                    'En laboratoire, cela signifie qu un protocole enzymatique doit etre strictement respecte si l on veut obtenir un resultat interpretable.',
                  ],
                },
                {
                  title: 'Des enzymes aux voies metaboliques',
                  body: [
                    'Une voie metabolique est une suite ordonnee de reactions chimiques. Chaque etape depend d une enzyme donnee.',
                    'L ATP joue un role central dans ces transformations. La respiration et les fermentations sont deux grands exemples a connaitre en STL.',
                  ],
                },
              ],
              keyPoints: [
                'Une enzyme est un catalyseur biologique specifique.',
                'Les conditions du milieu influencent l activite enzymatique.',
                'Les voies metaboliques reposent sur un enchainement d etapes catalysees.',
              ],
              selfCheck: [
                'Que signifie la specificite d une enzyme ?',
                'Pourquoi le pH peut-il modifier une activite enzymatique ?',
                'Quel lien peux-tu faire entre enzymes, ATP et voies metaboliques ?',
              ],
            },
          },
          {
            id: 's2-immunite',
            code: 'S2',
            title: 'Immunite cellulaire et moleculaire',
            summary: 'Relier cellules, molecules et mecanismes de defense de l organisme.',
            skills: ['decrire une reponse immunitaire', 'relier acteurs et molecules', 'lire un document de sante'],
          },
          {
            id: 's3-adn-replication',
            code: 'S3',
            title: 'Proprietes de l ADN et replication',
            summary: 'Comprendre l ADN, sa replication et l importance de ces notions en biotechnologies.',
            skills: ['decrire la replication', 'relier ADN et heredite', 'interpreter un document de biologie moleculaire'],
          },
          {
            id: 's4-microorganismes-applications',
            code: 'S4',
            title: 'Microorganismes et domaines d application des biotechnologies',
            summary: 'Relier microbiologie, societes humaines et domaines d application.',
            skills: ['comparer des microorganismes', 'reconnaitre un domaine d application', 'argumenter sur un usage'],
          },
        ],
      },
      {
        id: 'partie-t',
        title: 'Partie T - Fondamentaux technologiques experimentaux',
        chapters: [
          {
            id: 't1-diversite-vivant',
            code: 'T1',
            title: 'Observer la diversite du vivant',
            summary: 'Approfondir l observation avec des techniques plus exigeantes.',
            skills: ['choisir une technique d observation', 'interpreter une image', 'comparer plusieurs niveaux d observation'],
          },
          {
            id: 't2-culture-croissance',
            code: 'T2',
            title: 'Cultiver des micro-organismes, suivre ou limiter leur croissance',
            summary: 'Comprendre la croissance microbienne et les moyens de la maitriser.',
            skills: ['suivre une croissance', 'choisir une culture selective', 'interpretrer un test antimicrobien'],
          },
          {
            id: 't3-identification',
            code: 'T3',
            title: 'Caracteriser pour identifier des micro-organismes',
            summary: 'Construire une identification plus fine et mieux argumentee.',
            skills: ['ordonner une demarche d identification', 'croiser plusieurs resultats', 'proposer une conclusion'],
          },
          {
            id: 't4-denombrement',
            code: 'T4',
            title: 'Realiser un denombrement de micro-organismes presents dans un produit biologique',
            summary: 'Comparer plusieurs methodes de denombrement selon le contexte.',
            skills: ['choisir une methode adaptee', 'lire un resultat quantitatif', 'relier resultat et critere'],
          },
          {
            id: 't5-solutions-biologie-moleculaire',
            code: 'T5',
            title: 'Preparer des solutions utilisables au laboratoire en biologie moleculaire',
            summary: 'Travailler les micro-volumes et la rigueur de preparation en biologie moleculaire.',
            skills: ['calculer un melange simple', 'manipuler en micro-volume', 'eviter les contaminations'],
          },
          {
            id: 't6-biomolecules',
            code: 'T6',
            title: 'Detecter et caracteriser les biomolecules',
            summary: 'Mobiliser des reactions de detection et des temoins adaptes.',
            skills: ['choisir des temoins', 'decrire une reaction utile', 'interpreter un resultat'],
          },
          {
            id: 't7-extraire-separer-purifier',
            code: 'T7',
            title: 'Extraire, separer, purifier les composants d un melange',
            summary: 'Choisir une technique de separation ou de purification selon l objectif.',
            skills: ['relier technique et objectif', 'lire un profil de separation', 'suivre une purification'],
          },
          {
            id: 't8-concentration',
            code: 'T8',
            title: 'Determiner la concentration d une biomolecule dans un produit biologique',
            summary: 'Exploiter un dosage et argumenter sur la qualite du resultat.',
            skills: ['etablir un dosage simple', 'lire un etalonnage', 'critiquer un resultat'],
          },
          {
            id: 't9-technologies-adn',
            code: 'T9',
            title: 'Utiliser les technologies de l ADN',
            summary: 'Entrer dans les techniques de biologie moleculaire et leurs usages.',
            skills: ['decrire une PCR', 'lire un resultat simple', 'relier technique et application'],
          },
          {
            id: 't10-technologies-vegetales',
            code: 'T10',
            title: 'Decouvrir les technologies cellulaires vegetales',
            summary: 'Comprendre quelques applications des biotechnologies vegetales.',
            skills: ['decrire une culture vegetale simple', 'reconnaitre un objectif biotechnologique', 'discuter un usage'],
          },
        ],
      },
      {
        id: 'partie-l',
        title: 'Partie L - Travailler ensemble au laboratoire',
        chapters: [
          {
            id: 'l1-projet',
            code: 'L1',
            title: 'Pratiquer une demarche de projet pour repondre a un enjeu des biotechnologies',
            summary: 'Organiser un projet technologique, exploiter les resultats et presenter le travail.',
            skills: ['poser une question de projet', 'organiser le travail', 'presenter un resultat'],
          },
          {
            id: 'l2-risques',
            code: 'L2',
            title: 'Pratiquer une demarche de prevention des risques au laboratoire de biotechnologies',
            summary: 'Analyser une situation de travail et proposer une prevention adaptee.',
            skills: ['identifier une situation a risque', 'justifier une prevention', 'agir correctement en laboratoire'],
          },
          {
            id: 'l3-mesures',
            code: 'L3',
            title: 'Obtenir des resultats de mesure fiables',
            summary: 'Approfondir la qualite des mesures et l esprit critique face aux resultats.',
            skills: ['analyser un resultat mesure', 'parler de fidelite et de justesse', 'ameliorer une procedure'],
          },
          {
            id: 'l4-numerique',
            code: 'L4',
            title: 'Mobiliser les outils numeriques en biotechnologies',
            summary: 'Utiliser le numerique pour traiter des donnees et exploiter des ressources de facon pertinente.',
            skills: ['interroger une ressource fiable', 'traiter des donnees', 'presenter un resultat numerique'],
          },
        ],
      },
    ],
  },
];

export const getCourseLevel = (levelId) =>
  COURSE_LEVELS.find((level) => level.id === levelId) || null;

export const getCourseChapter = (levelId, chapterId) => {
  const level = getCourseLevel(levelId);

  if (!level) {
    return null;
  }

  for (const section of level.sections) {
    const chapter = section.chapters.find((item) => item.id === chapterId);

    if (chapter) {
      return {
        level,
        section,
        chapter,
      };
    }
  }

  return null;
};

export const getCourseReferencesForLevel = (level) =>
  (level?.sourceIds || [])
    .map((sourceId) => COURSE_REFERENCES.find((reference) => reference.id === sourceId))
    .filter(Boolean);

export const getCourseLevels = () => COURSE_LEVELS;
