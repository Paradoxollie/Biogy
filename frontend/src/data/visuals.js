// Banque d'images du site : photographies de laboratoire et planches au crayon.
// Chaque photo existe en deux largeurs (srcSet) au format WebP.

import heroSm from '../assets/visuals/photo-hero-sm.webp';
import heroLg from '../assets/visuals/photo-hero-lg.webp';
import premiereSm from '../assets/visuals/photo-premiere-sm.webp';
import premiereLg from '../assets/visuals/photo-premiere-lg.webp';
import terminaleSm from '../assets/visuals/photo-terminale-sm.webp';
import terminaleLg from '../assets/visuals/photo-terminale-lg.webp';
import metrologieSm from '../assets/visuals/photo-metrologie-sm.webp';
import metrologieLg from '../assets/visuals/photo-metrologie-lg.webp';
import microscopeSm from '../assets/visuals/photo-microscope-sm.webp';
import microscopeLg from '../assets/visuals/photo-microscope-lg.webp';
import veilleSm from '../assets/visuals/photo-veille-sm.webp';
import veilleLg from '../assets/visuals/photo-veille-lg.webp';
import projetsSm from '../assets/visuals/photo-projets-sm.webp';
import projetsLg from '../assets/visuals/photo-projets-lg.webp';
import forumSm from '../assets/visuals/photo-forum-sm.webp';
import forumLg from '../assets/visuals/photo-forum-lg.webp';

import pencilPipette from '../assets/visuals/pencil-pipette.webp';
import pencilMicroscope from '../assets/visuals/pencil-microscope.webp';
import pencilMicrobes from '../assets/visuals/pencil-microbes.webp';
import pencilVerrerie from '../assets/visuals/pencil-verrerie.webp';
import pencilPetri from '../assets/visuals/pencil-petri.webp';
import pencilCellule from '../assets/visuals/pencil-cellule.webp';

const LANDSCAPE = { width: 1536, height: 1024, smWidth: 768 };
const PORTRAIT = { width: 1024, height: 1536, smWidth: 640 };

const photo = (sm, lg, format, alt, caption, position) => ({
  src: lg,
  srcSet: `${sm} ${format.smWidth}w, ${lg} ${format.width}w`,
  width: format.width,
  height: format.height,
  alt,
  caption,
  position,
});

export const PHOTOS = {
  hero: photo(heroSm, heroLg, PORTRAIT,
    'Main gantée distribuant un liquide ambré à la micropipette dans un tube à essai, boîtes de Petri ensemencées au premier plan.',
    'Prélèvement à la micropipette et isolements en stries sur gélose — salle de TP', 'center 40%'),
  premiere: photo(premiereSm, premiereLg, LANDSCAPE,
    'Boîtes de Petri présentant des colonies bactériennes isolées par la méthode des quadrants, anse d’ensemencement à côté.',
    'Isolement en quadrants : colonies crème, jaunes et orangées'),
  terminale: photo(terminaleSm, terminaleLg, LANDSCAPE,
    'Gel d’agarose posé sur un transilluminateur à lumière bleue, bandes d’ADN orangées alignées en pistes.',
    'Électrophorèse : fragments d’ADN révélés sous lumière bleue'),
  metrologie: photo(metrologieSm, metrologieLg, LANDSCAPE,
    'Micropipette distribuant de l’eau distillée dans un bécher posé sur une balance analytique.',
    'Contrôle gravimétrique d’une micropipette sur balance analytique'),
  microscope: photo(microscopeSm, microscopeLg, PORTRAIT,
    'Microscope optique éclairé par la lumière d’une fenêtre, une lame colorée sur la platine.',
    'Observation d’un frottis coloré au microscope optique', 'center 45%'),
  veille: photo(veilleSm, veilleLg, LANDSCAPE,
    'Bioréacteur de paillasse en verre contenant un milieu de culture ambré, sondes et tuyaux.',
    'Bioréacteur de paillasse en fonctionnement'),
  projets: photo(projetsSm, projetsLg, LANDSCAPE,
    'Vue de dessus d’un projet d’élève : cahier de croquis, boîte de Petri, tubes colorés, micropipette et lunettes.',
    'Carnet de projet, boîte de Petri et tubes : la démarche en images'),
  forum: photo(forumSm, forumLg, LANDSCAPE,
    'Deux élèves en blouse discutent autour d’un cahier de laboratoire, l’une montre un schéma au crayon.',
    'Échanger autour d’un schéma, à la paillasse'),
};

const pencil = (src, width, height, alt) => ({ src, width, height, alt });

export const PENCILS = {
  pipette: pencil(pencilPipette, 720, 1080, 'Dessin au crayon d’une micropipette et de son cône.'),
  microscope: pencil(pencilMicroscope, 720, 1080, 'Dessin au crayon d’un microscope optique.'),
  microbes: pencil(pencilMicrobes, 900, 900, 'Dessin au crayon d’un champ de microscope : coques, bacilles et levures.'),
  verrerie: pencil(pencilVerrerie, 1350, 900, 'Dessin au crayon de verrerie de laboratoire : erlenmeyer, bécher, fiole jaugée, éprouvette et tube.'),
  petri: pencil(pencilPetri, 900, 900, 'Dessin au crayon d’une boîte de Petri ensemencée et d’une anse.'),
  cellule: pencil(pencilCellule, 900, 900, 'Dessin au crayon d’une cellule animale en coupe.'),
};

export const LEVEL_VISUALS = {
  premiere: PHOTOS.premiere,
  terminale: PHOTOS.terminale,
};
