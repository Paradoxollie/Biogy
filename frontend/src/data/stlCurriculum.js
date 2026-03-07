import biotechDomainsImage from '../assets/courses/premiere/c1/biotech-domains.png';
import globulesRougesImage from '../assets/courses/premiere/c1/globules-rouges.png';
import hcbLogoImage from '../assets/courses/premiere/c1/hcb-logo.png';
import futurolSchemaImage from '../assets/courses/premiere/c1/futurol-schema.jpg';
import videoQrImage from '../assets/courses/premiere/c1/video-qr.png';
import c4EpiImage from '../assets/courses/premiere/c4/epi.jpg';
import c4Schema5MImage from '../assets/courses/premiere/c4/schema-5m.png';
import c4DangerBioImage from '../assets/courses/premiere/c4/danger-biologique.png';
import c4BaobabImage from '../assets/courses/premiere/c4/baobab.png';
import c4DasriImage from '../assets/courses/premiere/c4/dasri.png';
import c4AcetoneImage from '../assets/courses/premiere/c4/acetone.jpg';
import c4BioethanolImage from '../assets/courses/premiere/c4/bioethanol.png';

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
  {
    id: 'lyon-programme',
    title: 'Explications pour la lecture du programme de premiere STL biotechnologies',
    source: 'Academie de Lyon',
    url: 'https://pedagogie.ac-lyon.fr/biotechnologies/stl/',
  },
  {
    id: 'grenoble-microscope',
    title: 'Microscopie optique',
    source: 'Academie de Grenoble',
    url: 'https://sti-biotechnologies-pedagogie.web.ac-grenoble.fr/content/microscopie-optique',
  },
  {
    id: 'dijon-microscope',
    title: 'Le microscope photonique',
    source: 'Academie de Dijon',
    url: 'https://stl-bjb.ac-dijon.fr/spip.php?article185',
  },
  {
    id: 'edubase-techniques',
    title: 'Accompagnement des techniques de biotechnologies',
    source: 'Edubase',
    url: 'https://edubase.eduscol.education.fr/fiche/21971',
  },
  {
    id: 'edubase-decouverte',
    title: 'A la decouverte des biotechnologies - Elea',
    source: 'Edubase',
    url: 'https://edubase.eduscol.education.fr/fiche/22146',
  },
  {
    id: 'normandie-decouverte',
    title: 'Dossier : decouverte des biotechnologies',
    source: 'Academie de Normandie',
    url: 'https://sms-bse-bgb.ac-normandie.fr/Dossier-decouverte-des-biotechnologies',
  },
];

const PREMIERE_BT1_CONTENT = {
  intro:
    'Ce premier cours de biotechnologies a pour but de te faire decouvrir la specialite. Tu vas d abord travailler a partir de supports et de questions, puis tu construiras le cours a retenir sur la definition des biotechnologies, leurs domaines d application et leurs enjeux.',
  objectives: [
    'Definir les biotechnologies.',
    'Identifier et definir les cinq domaines des biotechnologies.',
    'Associer une application concrete a son domaine.',
    'S interroger sur les enjeux ethiques des biotechnologies.',
  ],
  chapterQuestionsTitle: 'Questions du cours',
  chapterQuestions: [
    'Qu appelle-t-on exactement biotechnologies ?',
    'Pourquoi dit-on que les biotechnologies sont a la fois anciennes et tres actuelles ?',
    'Quels sont les cinq domaines a connaitre en STL ?',
    'Pourquoi l usage du vivant doit-il etre encadre ?',
  ],
  questionSetsTitle: 'Travail guide',
  questionSetsIntro:
    'Commence par les supports et reponds aux questions. Cette partie sert a observer, relever des informations et construire progressivement le cours. Les reponses ne sont pas donnees ici.',
  questionSets: [
    {
      tag: 'Sequence 1',
      title: 'Presentation des biotechnologies',
      intro:
        'Observe le debut de la video pour identifier les problemes poses et le point commun entre les exemples presentes.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 0 min 00 a 1 min 29.',
          imageSrc: videoQrImage,
          imageAlt: 'QR code menant a la video de decouverte des biotechnologies',
        },
      ],
      instruction:
        'Regarde attentivement le passage, note les mots importants puis reponds par des phrases courtes et precises.',
      questions: [
        'Q1. Enonce les deux problematiques soulevees au debut du support.',
        'Q2. Identifie le point commun entre ces deux problematiques.',
        'Q3. Explique en quoi les biotechnologies permettent de repondre a ces questions.',
        'Q4. Cite trois exemples de substances ou de produits obtenus grace aux biotechnologies.',
      ],
    },
    {
      tag: 'Sequence 2',
      title: 'Histoire des biotechnologies',
      intro:
        'Le support montre que les biotechnologies ne sont pas seulement des techniques modernes.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 1 min 29 a 1 min 57.',
        },
      ],
      instruction:
        'Repere les exemples historiques cites dans le support et explique ce qu ils montrent.',
      questions: [
        'Q5. Argumente l affirmation suivante : "Les biotechnologies sont une science ancienne."',
        'Q6. Cite plusieurs produits obtenus grace aux biotechnologies.',
      ],
    },
    {
      tag: 'Sequence 3',
      title: 'Les progres des biotechnologies',
      intro:
        'Cette partie du support insiste sur une decouverte scientifique qui a transforme les biotechnologies.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 1 min 57 a 2 min 42.',
        },
      ],
      instruction:
        'Releve la decouverte citee et explique en quoi elle a fait progresser les biotechnologies.',
      questions: [
        'Q7. Cite la decouverte qui a permis aux biotechnologies de progresser et explique pourquoi.',
        'Q8. Rappelle l interet de modifier genetiquement des micro-organismes.',
      ],
    },
    {
      tag: 'Sequence 4',
      title: 'Les perspectives des biotechnologies',
      intro:
        'Le dernier passage de la video ouvre sur des applications de recherche et sur des perspectives medicales.',
      supports: [
        {
          label: 'Video : La biotechnologie dans notre vie',
          url: 'https://www.youtube.com/watch?v=x7O9ErPWTmw',
          detail: 'Passage a etudier : de 2 min 42 a la fin.',
        },
      ],
      instruction:
        'Observe l exemple donne dans le support puis formule une definition personnelle des biotechnologies.',
      questions: [
        'Q9. Explique en quoi le poisson zebre peut constituer un outil de biotechnologies.',
        'Q10. A l aide des reponses precedentes, propose une definition des biotechnologies.',
      ],
    },
    {
      tag: 'Travail 5',
      title: 'Identifier les disciplines impliquees',
      intro:
        'Les biotechnologies mobilisent plusieurs sciences. Il faut connaitre leur nom et savoir ce qu elles apportent.',
      supports: [
        {
          label: 'Support de travail',
          detail:
            'Associer chaque discipline a sa definition : biologie, genetique, microbiologie, biochimie, biologie moleculaire, bioinformatique.',
        },
      ],
      instruction:
        'Commence par faire les associations, puis explique pourquoi une meme situation biotechnologique peut mobiliser plusieurs disciplines.',
      questions: [
        'Q11. Associe chaque discipline a sa definition puis explique, en une phrase, pourquoi les biotechnologies mobilisent plusieurs sciences a la fois.',
      ],
    },
    {
      tag: 'Travail 6',
      title: 'Etudier un exemple medical',
      intro:
        'Lis le document puis utilise la definition des biotechnologies pour justifier ton raisonnement.',
      supports: [
        {
          label: 'Document d etude',
          detail: 'Fabrication de globules rouges in vitro par des chercheurs a l hopital Saint-Antoine de Paris.',
        },
      ],
      documents: [
        {
          label: 'Document',
          title: 'Fabrication de globules rouges in vitro',
          source: 'Hopital Saint-Antoine, Paris',
          imageSrc: globulesRougesImage,
          imageAlt: 'Schema simplifie de fabrication de globules rouges in vitro',
          body: [
            'La faisabilite de la fabrication de globules rouges hors de l organisme a ete validee par des resultats encourageants.',
            'Cette piste ouvre l espoir d une reserve de sang plus importante, avec une reduction possible de certaines complications et infections associees aux transfusions traditionnelles.',
            'La production a grande echelle necessitera toutefois des technologies plus avancees en ingenierie cellulaire.',
          ],
        },
      ],
      instruction:
        'Appuie-toi sur le document et sur ta definition des biotechnologies pour justifier chacune de tes reponses.',
      questions: [
        'Q12. Montre que la fabrication de globules rouges in vitro est bien une application des biotechnologies.',
        'Q13. Cite les avantages majeurs de l utilisation de globules rouges fabriques in vitro.',
        'Q14. Relie chaque couleur a son domaine puis donne au moins un exemple d application.',
      ],
    },
    {
      tag: 'Travail 7',
      title: 'Reflechir aux enjeux des biotechnologies',
      intro:
        'Les biotechnologies ne posent pas seulement des questions scientifiques. Elles soulevent aussi des enjeux sanitaires, environnementaux et societaux.',
      supports: [
        {
          label: 'Support de reflexion',
          detail:
            'Prendre comme exemple les OGM ou toute autre application et reflechir aux risques, aux limites et aux derives possibles.',
        },
      ],
      documents: [
        {
          label: 'Repere',
          title: 'Le Haut Conseil des biotechnologies',
          imageSrc: hcbLogoImage,
          imageAlt: 'Logo du Haut Conseil des biotechnologies',
          body: [
            'En France, les biotechnologies soulevent des questions de sante, d environnement, d agriculture, de recherche et de consommation.',
            'Le Haut Conseil des biotechnologies a ete cree en 2008 pour eclairer les pouvoirs publics sur ces questions.',
            'Ses missions portent notamment sur l evaluation des risques pour la sante et l environnement, l analyse des impacts economiques et societaux, ainsi que la reflexion ethique.',
          ],
        },
      ],
      instruction:
        'Formule une reponse argumentee en donnant au moins un exemple precis.',
      questions: [
        'Q15. Cite une ou plusieurs derives possibles de l utilisation des biotechnologies dans nos societes.',
      ],
    },
    {
      tag: 'Application',
      title: 'Etudier des entreprises de biotechnologies',
      intro:
        'Chaque document presente rapidement l activite d une entreprise. Le but est de reconnaitre une situation de biotechnologies dans un document reel.',
      supports: [
        {
          label: 'Consigne',
          detail:
            'Par binome, choisissez un document, surlignez les informations utiles puis repondez aux questions sans recopier le texte.',
        },
      ],
      documents: [
        {
          label: 'Document 1',
          title: 'DEINOVE',
          body: [
            'Des bacteries appelees deinocoques sont etudiees pour identifier de nouvelles molecules antibiotiques et antifongiques.',
            'L objectif est de proposer de nouvelles classes de medicaments, notamment contre certaines resistances aux antibiotiques.',
            'Le projet repond a un enjeu majeur de sante publique, car certaines infections deviennent de plus en plus difficiles a traiter avec les antibiotiques actuels.',
            'L idee centrale est d exploiter des bacteries encore peu etudiees pour enrichir l arsenal therapeutique disponible.',
          ],
        },
        {
          label: 'Document 2',
          title: 'Watchfrog',
          body: [
            'Des tetards fluorescents et des biomarqueurs sont utilises pour detecter rapidement certaines pollutions de l eau.',
            'L entreprise developpe des outils de surveillance environnementale, notamment pour reperer des perturbateurs endocriniens.',
            'La reponse peut etre obtenue en quelques jours, pour un cout plus faible que certains tests in vitro.',
            'Le document montre aussi qu une reflexion ethique accompagne cette application, car elle utilise des organismes vivants pour proteger l environnement.',
          ],
        },
        {
          label: 'Document 3',
          title: 'Futurol',
          imageSrc: futurolSchemaImage,
          imageAlt: 'Schema simplifie du procede Futurol de production de bioethanol',
          body: [
            'Des enzymes, des bacteries et des levures sont mobilisees pour transformer une biomasse vegetale en bioethanol.',
            'Le procede repose sur plusieurs etapes: pretraitement de la biomasse, hydrolyse en sucres simples, fermentation puis distillation.',
            'Le projet vise une production industrielle d energie et de matieres premieres chimiques en valorisant des ressources vegetales variees.',
            'Cette application illustre une biotechnologie industrielle qui cherche aussi a reduire l impact environnemental des productions energetiques.',
          ],
        },
      ],
      instruction:
        'Repere l organisme utilise, l utilite pour l etre humain, puis deduis le domaine de biotechnologies correspondant.',
      questions: [
        'A. Retrouve dans le texte les elements permettant d affirmer qu il s agit d une entreprise de biotechnologies.',
        'B. Identifie, pour chaque entreprise, l organisme utilise ou la propriete du vivant mobilisee ainsi que le benefice pour l etre humain.',
        'C. Deduis le domaine des biotechnologies correspondant et la couleur associee.',
      ],
    },
  ],
  courseSectionsTitle: 'Cours a retenir',
  courseSectionsIntro:
    'Cette partie correspond a la trace de cours. Elle rassemble l essentiel a apprendre apres le travail sur les supports.',
  courseSections: [
    {
      title: '1. Definir les biotechnologies',
      body: [
        'Les biotechnologies regroupent des methodes qui utilisent des organismes vivants, des cellules ou des proprietes du vivant pour produire des biens ou des services utiles a l etre humain.',
        'Elles s appuient sur des connaissances scientifiques pour comprendre le vivant, le transformer, l exploiter ou s en inspirer.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Une biotechnologie mobilise le vivant, ou les proprietes du vivant, pour repondre a un besoin utile a l etre humain.',
    },
    {
      title: '2. Des pratiques anciennes et des techniques modernes',
      body: [
        'Les biotechnologies sont anciennes par leurs usages. La fermentation est connue depuis des millenaires pour fabriquer du pain, du vin, de la biere, des yaourts ou des fromages.',
        'Elles sont aussi tres modernes, car elles se sont developpees avec les progres de la genetique, de la biologie moleculaire et de la microbiologie.',
        'La decouverte de la structure de l ADN en 1953 a permis de mieux comprendre l information genetique et a ouvert la voie a de nombreuses applications biotechnologiques.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Les biotechnologies sont a la fois anciennes par certains procedes et modernes par les connaissances scientifiques qu elles mobilisent.',
    },
    {
      title: '3. Les sciences mobilisees',
      body: [
        'Les biotechnologies ne correspondent pas a une science unique. Elles croisent plusieurs disciplines qui se completent au laboratoire et dans l industrie.',
      ],
      cards: [
        {
          title: 'Biologie',
          text: 'Science des etres vivants.',
        },
        {
          title: 'Genetique',
          text: 'Etude des lois de l heredite et de la transmission des caracteres.',
        },
        {
          title: 'Microbiologie',
          text: 'Etude des micro-organismes.',
        },
        {
          title: 'Biochimie',
          text: 'Etude des molecules chimiques du vivant.',
        },
        {
          title: 'Biologie moleculaire',
          text: 'Etude de l ADN, de l ARN et des mecanismes moleculaires du vivant.',
        },
        {
          title: 'Bioinformatique',
          text: 'Utilisation d outils numeriques pour traiter et exploiter des donnees biologiques.',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Les biotechnologies sont interdisciplinaires : elles mobilisent plusieurs sciences pour comprendre et exploiter le vivant.',
    },
    {
      title: '4. Les cinq domaines des biotechnologies',
      body: [
        'En STL, les biotechnologies sont classees en cinq grands domaines. Chacun est associe a une couleur. Il faut connaitre cette classification et savoir donner au moins un exemple pour chaque domaine.',
      ],
      documents: [
        {
          label: 'Schema de synthese',
          title: 'Classification des biotechnologies par domaines',
          imageSrc: biotechDomainsImage,
          imageAlt: 'Schema des cinq domaines des biotechnologies',
          footer:
            'Ce schema sert de repere visuel. Il ne remplace pas l apprentissage des definitions et des exemples.',
        },
      ],
      cards: [
        {
          title: 'Rouge',
          text: 'Sante. Exemples : insuline, vaccins, diagnostic, production de globules rouges.',
          tone: 'border-red-200 bg-red-50',
        },
        {
          title: 'Bleue',
          text: 'Milieux marins. Exemples : aquaculture, ressources marines, molecules d interet issues de la mer.',
          tone: 'border-blue-200 bg-blue-50',
        },
        {
          title: 'Verte',
          text: 'Agriculture et agroalimentaire. Exemples : fermentation alimentaire, OGM, amelioration des cultures.',
          tone: 'border-green-200 bg-green-50',
        },
        {
          title: 'Jaune',
          text: 'Environnement. Exemples : depollution, traitement des eaux, surveillance de pollutions.',
          tone: 'border-amber-200 bg-amber-50',
        },
        {
          title: 'Blanche',
          text: 'Industrie. Exemples : bioethanol, enzymes industrielles, pigments, lait sans lactose.',
          tone: 'border-slate-300 bg-slate-50',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Les cinq domaines a connaitre sont : sante, milieux marins, agriculture et agroalimentaire, environnement et industrie.',
    },
    {
      title: '5. Les enjeux des biotechnologies',
      body: [
        'Les biotechnologies peuvent apporter des benefices importants en sante, en environnement, en alimentation ou en industrie.',
        'Cependant, la manipulation du vivant peut soulever des risques, des limites techniques, des questions de securite et des enjeux ethiques ou societaux.',
        'Le developpement des biotechnologies doit donc etre encadre et discute avec rigueur.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Une application biotechnologique doit toujours etre evaluee en tenant compte de son utilite, de ses risques et de ses consequences possibles.',
    },
  ],
  method: {
    title: 'Methode - Analyser un document de biotechnologies',
    steps: [
      'Repere le besoin ou le probleme auquel le document cherche a repondre.',
      'Identifie l organisme vivant utilise ou la propriete du vivant mobilisee.',
      'Cherche le benefice attendu pour l etre humain.',
      'Associe ensuite le document au bon domaine des biotechnologies.',
      'Justifie ta reponse avec une phrase claire et precise.',
    ],
  },
  keyPointsTitle: 'Conclusion',
  keyPoints: [
    'Les biotechnologies sont des methodes qui utilisent des organismes vivants, ou les potentialites du vivant, pour produire des biens ou des services utiles a l etre humain.',
    'Elles s appuient sur plusieurs disciplines scientifiques comme la biologie, la microbiologie, la genetique, la biologie moleculaire, la biochimie et la bioinformatique.',
    'On distingue cinq grands domaines : sante, milieux marins, agroalimentaire et agriculture, environnement et industrie.',
    'Leur utilisation doit etre encadree pour limiter les risques, les derives et les questions ethiques qu elles peuvent soulever.',
  ],
  selfCheckTitle: 'Je verifie que j ai compris',
  selfCheck: [
    'Je sais proposer une definition simple et correcte des biotechnologies.',
    'Je sais expliquer pourquoi les biotechnologies sont a la fois anciennes et modernes.',
    'Je sais nommer les cinq domaines des biotechnologies et donner un exemple pour chacun.',
    'Je sais montrer qu une application biotechnologique peut soulever des enjeux ethiques.',
  ],
};

const PREMIERE_C4_CONTENT = {
  intro:
    'Ce cours est centre sur la securite au laboratoire de biotechnologies. Tu dois apprendre a identifier un danger, analyser une situation de travail et proposer des moyens de prevention adaptes avant, pendant et apres une manipulation.',
  objectives: [
    'Definir le vocabulaire specifique a la securite au laboratoire.',
    'Analyser une situation de travail avec la regle des 5 M.',
    'Realiser une analyse a priori des risques.',
    'Distinguer un danger biologique d un danger chimique.',
  ],
  chapterQuestionsTitle: 'Questions du cours',
  chapterQuestions: [
    'Quels dangers peuvent etre presents dans un laboratoire de biotechnologies ?',
    'Comment analyser correctement une situation de travail ?',
    'Comment reconnaitre un danger biologique ?',
    'Comment lire une etiquette de danger chimique ?',
  ],
  questionSetsTitle: 'Travail guide',
  questionSetsIntro:
    'Comme pour le premier cours, commence par observer les supports puis reponds aux questions. La page contient directement les extraits utiles. Les reponses ne sont pas donnees dans cette partie.',
  questionSets: [
    {
      tag: 'Travail 1',
      title: 'Le vocabulaire specifique a la securite au laboratoire',
      intro:
        'On commence par une situation tres simple de la vie quotidienne : faire cuire des pates. Elle sert de support pour comprendre le vocabulaire du risque avant de passer au laboratoire.',
      supports: [
        {
          label: 'Situation support',
          detail:
            'Une personne fait cuire des pates dans une casserole d eau bouillante sur une plaque de cuisson. Elle utilise une casserole, un couvercle et une cuillere.',
        },
      ],
      instruction:
        'A partir de cette situation, propose une definition simple des termes utilises en securite au laboratoire : danger, risque, dommage, situation de travail, manipulateur, prevention.',
      questions: [
        'Q1. A partir de la situation support, complete ton tableau de vocabulaire et formule les definitions des termes de securite.',
      ],
    },
    {
      tag: 'Etape 1',
      title: 'Analyser une situation de travail avec la regle des 5 M',
      intro:
        'La situation de travail rassemble tous les elements impliques dans une manipulation. Pour l analyser, on utilise la regle des 5 M.',
      supports: [
        {
          label: 'Schema des 5 M',
          detail:
            'Les 5 M sont : Manipulateur, Matiere, Materiel, Methode de travail, Milieu.',
          imageSrc: c4Schema5MImage,
          imageAlt: 'Schema des 5 M utilise en analyse des risques',
        },
        {
          label: 'Situation support',
          detail:
            'Reprends la situation "faire cuire des pates" et classe chaque element observe dans la bonne categorie des 5 M.',
        },
      ],
      instruction:
        'Observe le schema puis decris la situation de travail en classant les informations dans chacune des cinq categories.',
      questions: [
        'Q2. Complete la situation de travail "faire cuire des pates" en respectant la regle des 5 M.',
      ],
    },
    {
      tag: 'Etapes 2 et 3',
      title: 'Situation exposante, evenement dangereux et dommage',
      intro:
        'Une fois la situation de travail decrite, il faut identifier les situations exposantes, les evenements dangereux possibles et les dommages qui peuvent en resulter.',
      documents: [
        {
          label: 'Repere',
          title: 'Les notions a distinguer',
          body: [
            'La situation exposante est un moment de la manipulation ou le manipulateur peut entrer en contact avec un danger.',
            'L evenement dangereux est un evenement possible qui provoque la rencontre entre le danger et une porte d entree du manipulateur.',
            'Le dommage correspond a l atteinte a la sante qui peut apparaitre apres la survenue de cet evenement dangereux.',
          ],
        },
      ],
      instruction:
        'Reprends la situation "faire cuire des pates" et identifie un moment d exposition, un evenement dangereux possible et le dommage attendu.',
      questions: [
        'Q3. Complete le schema d apparition du dommage pour la situation "faire cuire des pates".',
      ],
    },
    {
      tag: 'Etape 4',
      title: 'Choisir des moyens de prevention',
      intro:
        'Une fois les risques identifies, il faut proposer des moyens de prevention adaptes. On cherche d abord a limiter l apparition de l evenement dangereux, puis on mobilise des protections collectives et individuelles si necessaire.',
      documents: [
        {
          label: 'Document 1',
          title: 'Exemples d equipements de protection',
          imageSrc: c4EpiImage,
          imageAlt: 'Exemples d EPI en laboratoire: blouse, lunettes, gants, hotte, masque',
          body: [
            'Les EPI protègent directement le manipulateur : blouse, lunettes, gants, masque.',
            'Les EPC protègent l ensemble des manipulateurs : hotte aspirante, ecran, dispositif de confinement.',
          ],
        },
      ],
      instruction:
        'A partir du document et de la demarche de prevention, explique quels moyens permettent de limiter le risque au laboratoire.',
    },
    {
      tag: 'Mise en oeuvre',
      title: 'Analyser la preparation d une suspension bacterienne',
      intro:
        'La situation de travail suivante sert d application au laboratoire : preparation d une suspension bacterienne par un eleve de premiere STL.',
      supports: [
        {
          label: 'Situation support',
          detail:
            'Un eleve de premiere STL prepare une suspension bacterienne a partir d un tube de culture. Il utilise un tube, une anse ou une pipette, un poste de travail et du materiel de laboratoire adapte.',
        },
      ],
      instruction:
        'Decris d abord la situation de travail avec les 5 M, puis repere une situation exposante, un evenement dangereux possible et un dommage pour le manipulateur.',
      questions: [
        'Q4. Decris la situation de travail de preparation d une suspension bacterienne en utilisant la regle des 5 M.',
        'Q5. Complete le schema d apparition du dommage pour cette situation de travail.',
      ],
    },
    {
      tag: 'Document 2',
      title: 'Les dangers biologiques',
      intro:
        'Certains micro-organismes sont inoffensifs, d autres peuvent provoquer des maladies. Il faut savoir reconnaitre un danger biologique et comprendre qu il ne se limite pas aux seuls agents infectieux.',
      documents: [
        {
          label: 'Document',
          title: 'Le danger biologique',
          imageSrc: c4DangerBioImage,
          imageAlt: 'Extrait de document sur le danger biologique au laboratoire',
          body: [
            'Un agent biologique peut provoquer des infections, des allergies, des maladies liees a des toxines ou d autres atteintes a la sante.',
            'Le danger biologique est repere par un pictogramme specifique au laboratoire.',
          ],
        },
      ],
      instruction:
        'Lis le document puis distingue ce qui est non pathogene de ce qui peut presenter un danger pour le manipulateur.',
      questions: [
        'Q6. Cite des agents biologiques non pathogenes qui peuvent etre rencontres ou utilises au laboratoire.',
      ],
    },
    {
      tag: 'Document 3',
      title: 'Exploiter une fiche de type Baobab',
      intro:
        'La base Baobab de l INRS permet d obtenir des informations utiles sur les agents biologiques: groupe de risque, reservoirs, voies de transmission et maladies associees.',
      documents: [
        {
          label: 'Repere',
          title: 'Base Baobab',
          imageSrc: c4BaobabImage,
          imageAlt: 'Capture d ecran de la base Baobab de l INRS',
          body: [
            'Extrait de fiche a exploiter : Pseudomonas aeruginosa est une bacterie opportuniste appartenant au groupe de risque 2.',
            'Elle peut etre retrouvee dans l eau, le sol ou des milieux humides et se transmettre notamment par contact avec des surfaces ou des materiels contamines.',
            'Elle peut provoquer diverses infections, en particulier chez des personnes fragilisees.',
          ],
        },
      ],
      instruction:
        'A partir de cette fiche extraite, releve les informations demandees sans les recopier mot pour mot.',
      questions: [
        'Q7. A partir de la fiche de type Baobab, complete les informations essentielles concernant Pseudomonas aeruginosa : nom, groupe de risque, reservoirs, voies de transmission, maladies possibles.',
      ],
    },
    {
      tag: 'Document 4',
      title: 'Classer un agent biologique infectieux',
      intro:
        'Les agents biologiques infectieux sont classes selon quatre groupes de risque croissant. Pour classer correctement un micro-organisme, il faut raisonner a partir de sa gravite et de l existence ou non d une prevention ou d un traitement.',
      documents: [
        {
          label: 'Repere',
          title: 'Les quatre groupes de risque',
          body: [
            'Groupe 1 : agent peu susceptible de provoquer une maladie chez l humain.',
            'Groupe 2 : agent pouvant provoquer une maladie, mais avec un risque de propagation limite et une prevention ou un traitement generalement disponibles.',
            'Groupe 3 : agent pouvant provoquer une maladie grave, avec un risque de propagation plus important.',
            'Groupe 4 : agent provoquant une maladie tres grave, avec un risque eleve et sans traitement efficace disponible.',
          ],
        },
      ],
      instruction:
        'Utilise la description des groupes pour justifier ton classement, pas seulement pour donner un numero.',
      questions: [
        'Q8. Classe Staphylococcus aureus dans l un des quatre groupes infectieux et justifie ton choix.',
      ],
    },
    {
      tag: 'Document 5',
      title: 'Eliminer des dechets infectieux',
      intro:
        'Les dechets d activite de soins a risques infectieux, ou DASRI, doivent etre stockes dans des emballages specifiques pour eviter toute contamination ou blessure.',
      documents: [
        {
          label: 'Document',
          title: 'Conditionnement des DASRI',
          imageSrc: c4DasriImage,
          imageAlt: 'Extrait de document sur le conditionnement des dechets DASRI',
          body: [
            'Les dechets infectieux sont stockes dans des emballages jaunes, a usage unique, resistants, impermeables et fermables de maniere definitive.',
            'Le conditionnement depend aussi de la nature du dechet : objets piquants ou coupants d un cote, dechets solides comme les boites de Petri de l autre.',
          ],
        },
      ],
      instruction:
        'Observe les deux types de contenants presentes puis justifie le choix du materiel de collecte selon le dechet considere.',
      questions: [
        'Q9. Explique pourquoi les dechets infectieux sont confines dans des emballages specifiques.',
        'Q10. Indique le type de conteneur DASRI a choisir pour une lame, une lamelle, des pipettes en verre et une boite de Petri apres culture.',
      ],
    },
    {
      tag: 'Danger chimique',
      title: 'Lire une etiquette de produit chimique',
      intro:
        'Au laboratoire, un produit chimique ne se manipule jamais sans lecture de son etiquette. Les pictogrammes, la mention d avertissement, les mentions de danger et les conseils de prudence sont complementaires.',
      documents: [
        {
          label: 'Document',
          title: 'Etiquette d acetone',
          imageSrc: c4AcetoneImage,
          imageAlt: 'Etiquette de danger du produit acetone',
          body: [
            'Cette etiquette comporte des pictogrammes, une mention d avertissement, des mentions de danger et des conseils de prudence.',
            'Elle permet de comprendre a la fois les dangers du produit et les precautions a mettre en place avant la manipulation.',
          ],
        },
        {
          label: 'Document complementaire',
          title: 'Etiquette simplifiee de bioethanol',
          imageSrc: c4BioethanolImage,
          imageAlt: 'Etiquette simplifiee de bioethanol',
          body: [
            'L etiquette d un produit ne se limite pas au nom du produit : elle apporte aussi des informations sur sa dangerosite.',
          ],
        },
      ],
      instruction:
        'Observe les etiquettes et repere les elements qui renseignent sur le danger et sur la conduite a tenir.',
      questions: [
        'Q11. Repere sur l etiquette d acetone les pictogrammes de danger, la mention d avertissement, les mentions de danger et les conseils de prudence.',
        'Q12. Cite deux precautions a prendre lors de l utilisation du produit presente.',
        'Q13. A partir des etiquettes observees, associe les pictogrammes vus dans le cours au danger principal qu ils signalent.',
      ],
    },
  ],
  courseSectionsTitle: 'Cours a retenir',
  courseSectionsIntro:
    'Une fois le travail guide termine, retiens les definitions, la demarche et les reperes indispensables pour travailler en securite au laboratoire.',
  courseSections: [
    {
      title: '1. Le vocabulaire de la securite',
      body: [
        'Le danger est un agent ou une situation capable de provoquer une atteinte a la sante.',
        'Le risque correspond a la possibilite qu un dommage survienne lors de l exposition a ce danger.',
        'Le dommage est l atteinte a la sante elle-meme: blessure, irritation, infection, allergie, intoxication.',
        'La prevention regroupe les moyens mis en place pour eviter ou limiter la survenue du dommage.',
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Au laboratoire, il faut toujours distinguer danger, exposition, risque et dommage.',
    },
    {
      title: '2. La regle des 5 M',
      body: [
        'Pour analyser une situation de travail, on decrit cinq elements: le Manipulateur, la Matiere utilisee, le Materiel, la Methode de travail et le Milieu.',
        'Cette analyse permet d identifier de facon rigoureuse les elements qui interviennent dans une manipulation et les points de vigilance associes.',
      ],
      documents: [
        {
          label: 'Schema',
          title: 'Regle des 5 M',
          imageSrc: c4Schema5MImage,
          imageAlt: 'Schema rappelant les 5 M de l analyse de situation de travail',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Une situation de travail se decrit toujours de facon complete avant de chercher les risques.',
    },
    {
      title: '3. La demarche a priori des risques',
      body: [
        'La prevention repose sur une analyse a priori des risques. On identifie d abord la situation de travail, puis les situations exposantes, les evenements dangereux possibles et enfin les dommages associes.',
        'Une fois l analyse terminee, on choisit des moyens de prevention adaptes. En priorite, on cherche a supprimer ou reduire la possibilite de l evenement dangereux.',
        'Si cela ne suffit pas, on ajoute des protections collectives, puis des protections individuelles.',
      ],
      cards: [
        {
          title: 'Etape 1',
          text: 'Decrire la situation de travail avec les 5 M.',
        },
        {
          title: 'Etape 2',
          text: 'Identifier les situations exposantes.',
        },
        {
          title: 'Etape 3',
          text: 'Reperer les evenements dangereux et les dommages possibles.',
        },
        {
          title: 'Etape 4',
          text: 'Choisir les moyens de prevention les plus adaptes.',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'La prevention ne se limite pas aux EPI. Elle commence par l analyse de la situation et par la reduction du danger.',
    },
    {
      title: '4. Les dangers biologiques',
      body: [
        'Un danger biologique peut etre lie a un agent infectieux, a une toxine, a un allergene ou a tout autre agent biologique susceptible de nuire au manipulateur.',
        'Les agents biologiques infectieux sont classes en quatre groupes de risque croissant. Ce classement aide a adapter les conditions de manipulation, de protection et d elimination des dechets.',
      ],
      documents: [
        {
          label: 'Document',
          title: 'Danger biologique',
          imageSrc: c4DangerBioImage,
          imageAlt: 'Extrait rappelant la notion de danger biologique',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Tous les micro-organismes ne sont pas dangereux, mais certains exigent des precautions strictes au laboratoire.',
    },
    {
      title: '5. Elimination des dechets infectieux',
      body: [
        'Les dechets biologiques infectieux sont elimines dans des contenants DASRI adaptes. Le choix du contenant depend du type de dechet.',
        'Les objets piquants, coupants ou cassants sont places dans des conteneurs rigides, alors que des dechets solides comme des boites de Petri peuvent etre places dans des emballages carton adaptes.',
      ],
      documents: [
        {
          label: 'Document',
          title: 'Conditionnement des DASRI',
          imageSrc: c4DasriImage,
          imageAlt: 'Document sur les conteneurs DASRI utilises au laboratoire',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Le tri des dechets fait partie de la securite. Un mauvais conditionnement peut exposer les manipulateurs et l environnement.',
    },
    {
      title: '6. Les dangers chimiques',
      body: [
        'Depuis l application du reglement CLP, les produits chimiques sont etiquetes avec des pictogrammes normalises, des mentions de danger et des conseils de prudence.',
        'La lecture de l etiquette est obligatoire avant toute manipulation. Elle permet de savoir quels risques existent et quelles precautions doivent etre mises en place.',
      ],
      documents: [
        {
          label: 'Document',
          title: 'Exemple d etiquette chimique',
          imageSrc: c4AcetoneImage,
          imageAlt: 'Etiquette de produit chimique a analyser',
        },
      ],
      takeawayTitle: 'A retenir',
      takeaway:
        'Un produit chimique ne se manipule jamais sans lecture de son etiquette et sans mise en place des precautions correspondantes.',
    },
  ],
  method: {
    title: 'Methode - Analyser une situation de travail',
    steps: [
      'Decris la situation de travail avec la regle des 5 M.',
      'Repere le danger present dans cette situation.',
      'Identifie une ou plusieurs situations exposantes.',
      'Cherche quel evenement dangereux peut survenir.',
      'Deduis le dommage possible pour le manipulateur.',
      'Propose ensuite les moyens de prevention les plus adaptes.',
    ],
  },
  keyPointsTitle: 'Conclusion',
  keyPoints: [
    'La securite au laboratoire repose sur un vocabulaire precis et sur une analyse rigoureuse des situations de travail.',
    'La demarche a priori des risques permet d identifier les situations exposantes, les evenements dangereux et les dommages possibles.',
    'Les dangers biologiques et les dangers chimiques ne se reperent pas de la meme facon, mais ils exigent tous une prevention adaptee.',
    'Les EPI, les EPC, la lecture des etiquettes et le tri des dechets sont des elements essentiels du travail au laboratoire.',
  ],
  selfCheckTitle: 'Je verifie que j ai compris',
  selfCheck: [
    'Je sais distinguer danger, risque, dommage et prevention.',
    'Je sais decrire une situation de travail avec la regle des 5 M.',
    'Je sais reconnaitre un danger biologique et un danger chimique.',
    'Je sais justifier un moyen de prevention ou un choix de contenant DASRI.',
  ],
};

const TERMINALE_S1_CONTENT = {
  intro:
    'En terminale STL, les enzymes sont au coeur des transformations biochimiques du vivant. Ce chapitre installe un socle indispensable pour comprendre le metabolisme, interpreter une voie metabolique simple et relier un resultat experimental a une activite enzymatique.',
  objectives: [
    'Definir le role d une enzyme.',
    'Expliquer la specificite d une enzyme.',
    'Relier activite enzymatique et conditions du milieu.',
    'Lire une voie metabolique simple.',
  ],
  sections: [
    {
      title: '1. Le role d une enzyme',
      body: [
        'Une enzyme est un catalyseur biologique. Elle accelere une reaction chimique sans etre consommee par cette reaction.',
        'Dans les cellules, les enzymes rendent possibles des transformations chimiques rapides et selectives dans des conditions compatibles avec la vie.',
      ],
    },
    {
      title: '2. Specificite et substrat',
      body: [
        'Chaque enzyme agit sur un ou plusieurs substrats particuliers. Cette specificite est liee a la structure tridimensionnelle de l enzyme et a l organisation de son site actif.',
        'Une reaction enzymatique n est donc pas un phenomene general et indifferent. Elle depend d une reconnaissance moleculaire precise.',
      ],
    },
    {
      title: '3. Conditions d activite',
      body: [
        'L activite d une enzyme depend notamment de la temperature, du pH, de la concentration en substrat et parfois de la presence de cofacteurs ou d inhibiteurs.',
        'Quand une condition s ecarte trop de la valeur favorable, l activite diminue et peut meme devenir nulle.',
      ],
    },
    {
      title: '4. Lire une voie metabolique',
      body: [
        'Une voie metabolique est une succession ordonnee de reactions catalysees par des enzymes. Le produit d une reaction devient souvent le substrat de la reaction suivante.',
        'Comprendre une voie metabolique, c est donc savoir relier molecules, enzymes et regulation.',
      ],
    },
  ],
  keyPoints: [
    'Une enzyme est un catalyseur biologique.',
    'Une enzyme possede une specificite d action.',
    'L activite enzymatique depend des conditions du milieu.',
    'Une voie metabolique organise plusieurs reactions successives.',
  ],
  selfCheck: [
    'Pourquoi dit-on qu une enzyme est un catalyseur ?',
    'Qu appelle-t-on specificite enzymatique ?',
    'Quels facteurs peuvent modifier l activite d une enzyme ?',
    'Comment lire une voie metabolique simple ?',
  ],
  sources: [
    {
      title: 'Programme de biochimie, biologie et biotechnologies de terminale STL',
      url: 'https://eduscol.education.fr/document/23101/download',
    },
    {
      title: 'Programmes et ressources en serie STL',
      url: 'https://eduscol.education.fr/cid143748/stl-bac-2021.html',
    },
  ],
};

const PREMIERE_BIOBIO_THEME_1_LESSONS = [
  {
    id: 'bb1-1-se-nourrir',
    code: '1.1',
    title: 'Se nourrir pour se construire',
    summary:
      'Relier besoins de l organisme, aliments consommes et grandes familles de biomolecules utiles a la construction du corps.',
  },
  {
    id: 'bb1-2-aliments-nutriments',
    code: '1.2',
    title: "Des aliments aux nutriments : transformation des aliments par l'appareil digestif",
    summary:
      'Comprendre comment les aliments sont transformes en nutriments par la digestion.',
  },
  {
    id: 'bb1-3-absorption-devenir',
    code: '1.3',
    title: 'Absorption et devenir des nutriments',
    summary:
      'Suivre le passage des nutriments dans l organisme et leur utilisation par les tissus et les organes.',
  },
  {
    id: 'bb1-4-rein-excretion',
    code: '1.4',
    title: "Rein et fonction d'excretion",
    summary:
      'Expliquer le role du rein dans la formation de l urine et l elimination des dechets.',
  },
  {
    id: 'bb1-5-stabilite-milieu-interieur',
    code: '1.5',
    title: 'Stabilite du milieu interieur',
    summary:
      'Comprendre les grandes regulations qui maintiennent l equilibre du milieu interieur.',
  },
];

const PREMIERE_BIOBIO_THEME_2_LESSONS = [
  {
    id: 'bb2-1-genotype-phenotype',
    code: '2.1',
    title: 'Du genotype au phenotype',
    summary:
      'Relier information genetique, expression des genes et caractere observable.',
  },
  {
    id: 'bb2-2-organes-amphicrines',
    code: '2.2',
    title: 'Testicules et ovaires, des organes amphicrines',
    summary:
      'Identifier le double role des gonades dans la production de gametes et d hormones.',
  },
  {
    id: 'bb2-3-regulation-hormonale',
    code: '2.3',
    title: 'Regulation hormonale de la reproduction',
    summary:
      'Comprendre comment les hormones controlent le fonctionnement des organes reproducteurs.',
  },
  {
    id: 'bb2-4-gametogenese-fecondation',
    code: '2.4',
    title: 'Gametogenese et fecondation',
    summary:
      'Etudier la formation des gametes et les etapes essentielles de la fecondation.',
  },
  {
    id: 'bb2-5-transmission-caracteres',
    code: '2.5',
    title: 'Transmission des caracteres hereditaires',
    summary:
      'Expliquer comment un caractere se transmet d une generation a l autre a partir de situations simples.',
  },
];

const PREMIERE_BIOBIO_TRANSVERSAL_A_LESSONS = [
  {
    id: 'bba-1-structures-biomolecules',
    code: 'A.1',
    title: 'Glucides, protides, lipides : caracteristiques structurales',
    summary:
      'Installer les reperes structuraux indispensables pour identifier les grandes familles de biomolecules.',
  },
  {
    id: 'bba-2-diversite-fonctions',
    code: 'A.2',
    title: 'Glucides et proteines : diversite de structures et de fonctions',
    summary:
      'Mettre en relation la structure d une biomolecule et la fonction qu elle assure dans l organisme.',
  },
  {
    id: 'bba-3-acides-nucleiques',
    code: 'A.3',
    title: 'Les acides nucleiques',
    summary:
      'Connaitre l organisation generale des acides nucleiques et leur role dans l information genetique.',
  },
  {
    id: 'bba-4-membranes',
    code: 'A.4',
    title: 'Membranes biologiques : structure et fonction',
    summary:
      'Comprendre le role des membranes dans les echanges et l organisation cellulaire.',
  },
];

const PREMIERE_BIOBIO_TRANSVERSAL_B_LESSONS = [
  {
    id: 'bbb-1-observer-vivant',
    code: 'B.1',
    title: 'Observer le vivant',
    summary:
      'Choisir le bon outil d observation et interpreter ce que l on voit a differentes echelles.',
  },
  {
    id: 'bbb-2-divisions-cellulaires',
    code: 'B.2',
    title: 'Les divisions cellulaires',
    summary:
      'Comparer les grandes etapes des divisions cellulaires et leur interet biologique.',
  },
];

const PREMIERE_BIOBIO_TRANSVERSAL_C_LESSONS = [
  {
    id: 'bbc-1-communication-hormonale',
    code: 'C.1',
    title: 'Communication hormonale',
    summary:
      'Identifier la logique d une communication endocrine et ses effets sur les organes cibles.',
  },
  {
    id: 'bbc-2-transport-molecules',
    code: 'C.2',
    title: 'Transport des molecules : organisme, tissu, cellule',
    summary:
      'Relier circulation, echanges et transport a differentes echelles du vivant.',
  },
];

const PREMIERE_BIOBIO_TRANSVERSAL_D_LESSONS = [
  {
    id: 'bbd-1-analyser-document',
    code: 'D.1',
    title: 'Analyser et interpreter un document',
    summary:
      'Prelever des informations utiles dans un document scientifique sans se perdre dans les details.',
  },
  {
    id: 'bbd-2-organigrammes',
    code: 'D.2',
    title: "Comprendre et organiser les organigrammes d'experiences",
    summary:
      'Lire une demarche experimentale et distinguer clairement objectifs, etapes et resultats.',
  },
  {
    id: 'bbd-3-analyser-courbe',
    code: 'D.3',
    title: 'Analyser une courbe',
    summary:
      'Degager une tendance, comparer des valeurs et formuler une conclusion a partir d un graphique.',
  },
  {
    id: 'bbd-4-utiliser-echelle',
    code: 'D.4',
    title: 'Utiliser une echelle',
    summary:
      'Passer d une image ou d un schema a des ordres de grandeur correctement justifies.',
  },
  {
    id: 'bbd-5-representer-observation',
    code: 'D.5',
    title: 'Representer une observation',
    summary:
      'Produire un schema ou une legende claire pour communiquer une observation biologique.',
  },
];

const COURSE_LEVELS = [
  {
    id: 'premiere',
    title: 'Première STL',
    shortTitle: 'Première',
    intro:
      'En premiere STL, les cours sont ranges pour retrouver clairement les modules de biotechnologies, les modules thematiques de biochimie-biologie et les reperes transversaux a mobiliser dans les deux specialites.',
    sourceIds: [
      'stl-hub',
      'premiere-biobio',
      'premiere-biotech',
      'delagrave-biotech-1re',
      'lyon-programme',
    ],
    sections: [
      {
        id: 'biotechnologies-transversal',
        title: 'Travailler ensemble au laboratoire de biotechnologies',
        chapters: [
          {
            id: 'module-a-projet',
            code: 'A',
            title: "S'initier à la recherche expérimentale et à la démarche de projet en biotechnologies",
            summary:
              'Chapitre officiel transversal centre sur la decouverte de la specialite, le questionnement scientifique et la demarche de projet.',
            skills: [
              'questionner une situation biotech',
              'analyser un document scientifique simple',
              'relier un exemple au domaine biotech correspondant',
            ],
            lessons: [
              {
                id: 'c1-decouverte-biotechnologies',
                code: 'C1',
                title: 'Découverte des biotechnologies',
                summary:
                  'Premier cours d entree dans la specialite : definition, domaines, exemples et enjeux.',
                content: PREMIERE_BT1_CONTENT,
              },
            ],
          },
          {
            id: 'module-b-risques',
            code: 'B',
            title: 'Prévenir les risques au laboratoire de biotechnologies',
            summary:
              'Chapitre officiel transversal dedie a la prevention des risques, a la securite et a la gestion des dechets.',
            skills: [
              'identifier un danger',
              'analyser une situation de travail',
              'choisir une prevention adaptee',
            ],
            lessons: [
              {
                id: 'c4-risques-securite-laboratoire',
                code: 'C4',
                title: 'Risques et sécurité au laboratoire de biotechnologies',
                summary:
                  'Cours centre sur le vocabulaire du risque, la demarche des 5M et les dangers chimiques ou biologiques.',
                content: PREMIERE_C4_CONTENT,
              },
              {
                id: 'at7-gestion-risques-laboratoire',
                code: 'AT7',
                title: 'Gestion des risques au laboratoire',
                summary:
                  'Activite technologique sur l analyse a priori des risques, les pictogrammes et la prevention.',
              },
            ],
          },
          {
            id: 'module-c-mesures',
            code: 'C',
            title: 'Obtenir des résultats de mesure fiables',
            summary:
              'Chapitre officiel transversal sur la qualite des mesures, la rigueur experimentale et la validation des resultats.',
            skills: [
              'analyser une mesure',
              'reperer une source d erreur',
              'ameliorer la fiabilite d une procedure',
            ],
          },
          {
            id: 'module-d-numerique',
            code: 'D',
            title: 'Utiliser des outils numériques en biotechnologies',
            summary:
              'Chapitre officiel transversal sur l usage du numerique pour traiter, organiser et communiquer des donnees.',
            skills: [
              'organiser des donnees',
              'traiter une information numerique',
              'presenter un resultat clairement',
            ],
          },
        ],
      },
      {
        id: 'biotechnologies-fondamentaux',
        title: 'Acquérir les fondamentaux technologiques et scientifiques des biotechnologies',
        chapters: [
          {
            id: 'module-1-diversite',
            code: '1',
            title: "Observer la diversité du vivant à l'échelle microscopique",
            summary:
              'Chapitre officiel sur les outils d observation et la comparaison des organisations du vivant.',
            skills: [
              'observer au laboratoire',
              'comparer des organisations biologiques',
              'decrire avec precision',
            ],
          },
          {
            id: 'module-2-culture',
            code: '2',
            title: 'Cultiver des micro-organismes',
            summary:
              'Chapitre officiel sur la culture des micro-organismes et le choix de conditions de croissance adaptees.',
            skills: [
              'respecter l asepsie',
              'cultiver un micro-organisme',
              'choisir des conditions de culture',
            ],
          },
          {
            id: 'module-3-identification',
            code: '3',
            title: 'Caractériser pour identifier les micro-organismes',
            summary:
              'Chapitre officiel sur l observation, les tests et la construction d une identification microbienne.',
            skills: [
              'observer une culture',
              'relier un test a une information',
              'construire une conclusion prudente',
            ],
          },
          {
            id: 'module-4-denombrement',
            code: '4',
            title: 'Réaliser un dénombrement de micro-organismes présents dans un produit biologique',
            summary:
              'Chapitre officiel sur les methodes de denombrement et l exploitation quantitative en microbiologie.',
            skills: [
              'choisir une methode de denombrement',
              'compter et exprimer un resultat',
              'exploiter un critere microbiologique simple',
            ],
          },
          {
            id: 'module-5-solutions',
            code: '5',
            title: 'Préparer des solutions utilisables au laboratoire',
            summary:
              'Chapitre officiel sur les solutions, les dilutions et la rigueur de preparation au laboratoire.',
            skills: [
              'calculer une concentration',
              'realiser une dilution',
              'tracer une preparation',
            ],
          },
          {
            id: 'module-6-biomolecules',
            code: '6',
            title: 'Détecter et caractériser les biomolécules',
            summary:
              'Chapitre officiel sur les tests de reconnaissance et la caracterisation simple des biomolecules.',
            skills: [
              'choisir un test',
              'observer un resultat',
              'relier un test a une biomolecule',
            ],
          },
          {
            id: 'module-7-separation',
            code: '7',
            title: "Séparer les composants d'un mélange",
            summary:
              'Chapitre officiel sur les techniques de separation exploitees en biotechnologies.',
            skills: [
              'choisir une technique de separation',
              'justifier une methode',
              'interpreter une separation simple',
            ],
          },
          {
            id: 'module-8-concentration',
            code: '8',
            title: "Déterminer la concentration d'une biomolécule dans un produit biologique",
            summary:
              'Chapitre officiel sur les strategies de dosage et l exploitation quantitative de resultats.',
            skills: [
              'choisir une methode de dosage',
              'exploiter une relation quantitative',
              'conclure sur une concentration',
            ],
            lessons: [
              {
                id: 'c8-dosage-volumetrique',
                code: 'C8',
                title: 'Dosage volumétrique',
                summary:
                  'Cours sur le vocabulaire de la volumetrie, les reactions support et le calcul a l equivalence.',
              },
            ],
          },
        ],
      },
      {
        id: 'biochimie-biologie-thematiques',
        title: 'Spécialité biochimie-biologie - modules thématiques',
        chapters: [
          {
            id: 'bb1-nutrition',
            code: '01',
            title: 'Mécanismes moléculaires et physiologiques de la nutrition',
            summary:
              'Theme officiel 01. Il va des besoins nutritionnels a la digestion, puis a l absorption, l excretion et l homeostasie.',
            skills: [
              'expliquer digestion et absorption',
              'relier organes, tissus et molecules',
              'mettre en relation nutrition et milieu interieur',
            ],
            lessons: PREMIERE_BIOBIO_THEME_1_LESSONS,
          },
          {
            id: 'bb2-reproduction-genetique',
            code: '02',
            title:
              'Mécanismes physiologiques et moléculaires de la reproduction et de la transmission des caractères héréditaires',
            summary:
              'Theme officiel 02. Il relie genotype, organes reproducteurs, regulation hormonale, gametogenese et heredite.',
            skills: [
              'decrire la reproduction',
              'relier gene et caractere',
              'argumenter a partir de documents',
            ],
            lessons: PREMIERE_BIOBIO_THEME_2_LESSONS,
          },
        ],
      },
      {
        id: 'biochimie-biologie-transversaux',
        title: 'Spécialité biochimie-biologie - modules transversaux',
        chapters: [
          {
            id: 'bba-biomolecules',
            code: 'A',
            title: 'Relations structures et propriétés des biomolécules',
            summary:
              'Module transversal officiel A. Il rassemble les bases structurales a mobiliser dans tous les themes de biochimie-biologie.',
            skills: [
              'identifier les grandes familles de biomolecules',
              'relier structure et propriete',
              'reutiliser ces notions dans un contexte biologique',
            ],
            lessons: PREMIERE_BIOBIO_TRANSVERSAL_A_LESSONS,
          },
          {
            id: 'bbb-structures-fonctions',
            code: 'B',
            title: 'Relations structures et fonctions physiologiques',
            summary:
              'Module transversal officiel B. Il aide a relier observation, organisation du vivant et fonction biologique.',
            skills: [
              'decrire un niveau d organisation',
              'relier structure et fonction',
              'justifier une fonction par une observation',
            ],
            lessons: PREMIERE_BIOBIO_TRANSVERSAL_B_LESSONS,
          },
          {
            id: 'bbc-homeostasie',
            code: 'C',
            title: 'Milieu interieur et homeostasie',
            summary:
              'Module transversal officiel C. Il apporte les reperes utiles pour comprendre les echanges et les grandes regulations.',
            skills: [
              'definir homeostasie',
              'reperer une regulation',
              'analyser une perturbation simple',
            ],
            lessons: PREMIERE_BIOBIO_TRANSVERSAL_C_LESSONS,
          },
          {
            id: 'bbd-information-communication',
            code: 'D',
            title: 'Information et communication',
            summary:
              'Module transversal officiel D. Il regroupe les methodes utiles pour lire, traiter et presenter un resultat scientifique.',
            skills: [
              'lire un document scientifique',
              'faire un schema utile',
              'rediger une explication precise',
            ],
            lessons: PREMIERE_BIOBIO_TRANSVERSAL_D_LESSONS,
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
      'En terminale STL, les cours approfondissent les notions construites en premiere et les relient davantage au projet technologique, a l interpretation des resultats et a la preparation du baccalaureat.',
    sourceIds: ['stl-hub', 'terminale-bbb', 'discipline'],
    sections: [
      {
        id: 'partie-s',
        title: 'Partie S - Corps humain et sante',
        chapters: [
          {
            id: 's1-enzymes-voies',
            code: 'S1',
            title: 'Enzymes et voies metaboliques',
            summary:
              'Comprendre le role des enzymes et l organisation des grandes voies metaboliques.',
            skills: [
              'definir une enzyme',
              'lire une voie metabolique',
              'relier condition et activite',
            ],
            content: TERMINALE_S1_CONTENT,
          },
          {
            id: 's2-immunite',
            code: 'S2',
            title: 'Immunite et reponse de l organisme',
            summary:
              'Expliquer les grandes lignes de la defense immunitaire et de ses deregulations.',
            skills: [
              'identifier des acteurs de l immunite',
              'lire une reponse immunitaire',
              'argumenter avec des documents',
            ],
          },
          {
            id: 's3-adn-replication',
            code: 'S3',
            title: 'ADN, replication et expression genetique',
            summary:
              'Relier information genetique, duplication et expression des genes.',
            skills: [
              'expliquer la replication',
              'relier gene et proteine',
              'interpreter un schema moleculaire',
            ],
          },
          {
            id: 's4-microorganismes-applications',
            code: 'S4',
            title: 'Micro-organismes et applications en sante',
            summary:
              'Comprendre les usages, les limites et les risques lies aux micro-organismes.',
            skills: [
              'relier micro-organisme et application',
              'analyser un contexte de sante',
              'raisonner avec prudence',
            ],
          },
        ],
      },
      {
        id: 'partie-t',
        title: 'Partie T - Pratiques biotechnologiques',
        chapters: [
          {
            id: 't1-diversite-vivant',
            code: 'T1',
            title: 'Observer et comparer la diversite du vivant',
            summary:
              'Approfondir les comparaisons d organisations biologiques et les outils d observation.',
            skills: [
              'comparer des organisations',
              'justifier une observation',
              'mobiliser les bons outils',
            ],
          },
          {
            id: 't2-culture-croissance',
            code: 'T2',
            title: 'Culture et croissance des micro-organismes',
            summary:
              'Etudier les parametres influencant la croissance et leur exploitation au laboratoire.',
            skills: [
              'suivre une croissance',
              'choisir des conditions de culture',
              'interpreter une courbe',
            ],
          },
          {
            id: 't3-identification',
            code: 'T3',
            title: 'Strategies d identification',
            summary:
              'Comparer plusieurs approches d identification en biotechnologies.',
            skills: [
              'confronter des tests',
              'choisir un critere',
              'construire une conclusion',
            ],
          },
          {
            id: 't4-denombrement',
            code: 'T4',
            title: 'Quantifier une population biologique',
            summary:
              'Passer d une mesure experimentale a une estimation interpretable.',
            skills: [
              'choisir une technique',
              'traiter des donnees',
              'exprimer un resultat final',
            ],
          },
          {
            id: 't5-solutions-biologie-moleculaire',
            code: 'T5',
            title: 'Solutions, tampons et besoins de biologie moleculaire',
            summary:
              'Relier composition d un milieu et objectif experimental.',
            skills: [
              'preparer un tampon',
              'justifier une composition',
              'securiser les manipulations',
            ],
          },
          {
            id: 't6-biomolecules',
            code: 'T6',
            title: 'Biomolecules et caracterisation',
            summary:
              'Utiliser differents indicateurs pour etudier des biomolecules.',
            skills: [
              'choisir un test',
              'analyser un resultat',
              'comparer plusieurs methodes',
            ],
          },
          {
            id: 't7-extraire-separer-purifier',
            code: 'T7',
            title: 'Extraire, separer, purifier',
            summary:
              'Relier une technique de traitement a la nature de l echantillon.',
            skills: [
              'justifier une etape',
              'optimiser un protocole',
              'evaluer un resultat',
            ],
          },
          {
            id: 't8-concentration',
            code: 'T8',
            title: 'Concentration et conservation des echantillons',
            summary:
              'Choisir une methode adaptee pour conserver la qualite d un echantillon.',
            skills: [
              'choisir un mode de conservation',
              'limiter les degradations',
              'tracer les conditions',
            ],
          },
          {
            id: 't9-technologies-adn',
            code: 'T9',
            title: 'Technologies de l ADN',
            summary:
              'Mettre en relation outils moleculaires, objectifs et limites d interpretation.',
            skills: [
              'expliquer un principe moleculaire',
              'lire un resultat',
              'justifier un choix technique',
            ],
          },
          {
            id: 't10-technologies-vegetales',
            code: 'T10',
            title: 'Technologies vegetales',
            summary:
              'Decouvrir les applications biotechnologiques liees au vegetal.',
            skills: [
              'comparer des applications',
              'expliquer une technique',
              'relier science et usage',
            ],
          },
        ],
      },
      {
        id: 'partie-l',
        title: 'Partie L - Laboratoire et projet',
        chapters: [
          {
            id: 'l1-projet',
            code: 'L1',
            title: 'Conduire et presenter un projet technologique',
            summary:
              'Structurer une demarche de projet, justifier ses choix et communiquer ses resultats.',
            skills: [
              'organiser un projet',
              'argumenter une demarche',
              'presenter un resultat',
            ],
          },
          {
            id: 'l2-risques',
            code: 'L2',
            title: 'Maitriser les risques et les responsabilites',
            summary:
              'Ancrer les pratiques de securite dans un contexte professionnel et scolaire.',
            skills: [
              'evaluer un risque',
              'mettre en place une prevention',
              'agir avec responsabilite',
            ],
          },
          {
            id: 'l3-mesures',
            code: 'L3',
            title: 'Valider une mesure et un resultat',
            summary:
              'Travailler la fiabilite, la reproductibilite et la communication d un resultat.',
            skills: [
              'comparer des mesures',
              'discuter une variabilite',
              'valider une conclusion',
            ],
          },
          {
            id: 'l4-numerique',
            code: 'L4',
            title: 'Numerique, donnees et communication scientifique',
            summary:
              'Traiter des donnees et produire des supports clairs pour l oral et l ecrit.',
            skills: [
              'traiter un jeu de donnees',
              'representer une information',
              'communiquer clairement',
            ],
          },
        ],
      },
    ],
  },
];

const LEGACY_SELECTIONS = {
  premiere: {
    'bt1-microscopie': {
      chapterId: 'module-a-projet',
      lessonId: 'c1-decouverte-biotechnologies',
    },
    'bt2-cultiver-microorganismes': {
      chapterId: 'module-2-culture',
    },
    'bt3-identifier-microorganismes': {
      chapterId: 'module-3-identification',
    },
    'bt4-denombrement': {
      chapterId: 'module-4-denombrement',
    },
    'bt5-solutions': {
      chapterId: 'module-5-solutions',
    },
    'bt6-biomolecules': {
      chapterId: 'module-6-biomolecules',
    },
    'bt7-separation': {
      chapterId: 'module-7-separation',
    },
    'bt8-concentration': {
      chapterId: 'module-8-concentration',
    },
    'bta-projet': {
      chapterId: 'module-a-projet',
    },
    'btb-risques': {
      chapterId: 'module-b-risques',
    },
    'btc-mesures': {
      chapterId: 'module-c-mesures',
    },
    'btd-numerique': {
      chapterId: 'module-d-numerique',
    },
  },
};

export const resolveCourseSelection = (levelId, chapterId, lessonId) => {
  const alias = LEGACY_SELECTIONS[levelId]?.[chapterId];

  if (!alias) {
    return {
      levelId,
      chapterId,
      lessonId: lessonId || null,
      redirected: false,
    };
  }

  return {
    levelId,
    chapterId: alias.chapterId,
    lessonId: alias.lessonId || lessonId || null,
    redirected: alias.chapterId !== chapterId || Boolean(alias.lessonId && alias.lessonId !== lessonId),
  };
};

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

export const getCourseLesson = (levelId, chapterId, lessonId) => {
  const result = getCourseChapter(levelId, chapterId);

  if (!result || !result.chapter.lessons?.length || !lessonId) {
    return null;
  }

  return result.chapter.lessons.find((lesson) => lesson.id === lessonId) || null;
};

export const getCourseReferencesForLevel = (level) =>
  (level?.sourceIds || [])
    .map((sourceId) => COURSE_REFERENCES.find((reference) => reference.id === sourceId))
    .filter(Boolean);

export const getCourseLevels = () => COURSE_LEVELS;
