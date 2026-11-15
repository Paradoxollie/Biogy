import { describe, expect, test } from 'vitest';
const modules = import.meta.glob('./lessons/*.js', { eager: true });
const PREMIERE_LESSONS = Object.fromEntries(Object.entries(modules).map(([path, module]) => [path.split('/').pop().replace(/\.js$/, ''), module.default]));
import { getCourseLevel } from '../stlCurriculum';

// Validation des leçons de Première au format 2 : chaque leçon doit être
// complète, cohérente et rattachée à un chapitre ou une sous-partie existante.

const BLOCK_TYPES = new Set(['p', 'definition', 'retenir', 'example', 'warning', 'note', 'list', 'steps', 'formula', 'table', 'compare', 'cards', 'flow', 'figure', 'video']);
const IMAGE_KINDS = new Set(['photo', 'micro', 'schema', 'pencil']);
const nonEmpty = (value) => (Array.isArray(value) ? value.length > 0 && value.every(nonEmpty) : typeof value === 'string' && value.trim().length > 0);

const curriculumIds = new Set();
getCourseLevel('premiere').sections.forEach((section) => section.chapters.forEach((chapter) => {
  curriculumIds.add(chapter.id);
  (chapter.lessons || []).forEach((lesson) => curriculumIds.add(lesson.id));
}));

function checkImage(image, where) {
  expect(image, `${where} : image manquante`).toBeTruthy();
  expect(nonEmpty(image.src), `${where} : src manquant`).toBe(true);
  expect(nonEmpty(image.alt), `${where} : texte alternatif manquant`).toBe(true);
  expect(IMAGE_KINDS.has(image.kind), `${where} : kind invalide (${image.kind})`).toBe(true);
}

function checkBlock(block, where) {
  expect(BLOCK_TYPES.has(block.type), `${where} : type de bloc inconnu « ${block.type} »`).toBe(true);
  switch (block.type) {
    case 'p': case 'example': case 'warning': case 'note':
      expect(nonEmpty(block.text), `${where} : texte vide`).toBe(true); break;
    case 'definition':
      expect(nonEmpty(block.term) && nonEmpty(block.text), `${where} : définition incomplète`).toBe(true); break;
    case 'retenir':
      expect(nonEmpty(block.text) || nonEmpty(block.items), `${where} : « À retenir » vide`).toBe(true); break;
    case 'list': case 'steps':
      expect(Array.isArray(block.items) && block.items.length > 0, `${where} : liste vide`).toBe(true); break;
    case 'formula':
      expect(nonEmpty(block.expression), `${where} : formule vide`).toBe(true); break;
    case 'table':
      expect(block.head?.length > 0 && block.rows?.length > 0, `${where} : tableau vide`).toBe(true);
      block.rows.forEach((row, index) => expect(row.length, `${where} : ligne ${index + 1} du tableau incomplète`).toBe(block.head.length));
      break;
    case 'compare':
      expect(block.columns?.length >= 2, `${where} : comparaison incomplète`).toBe(true); break;
    case 'cards':
      expect(block.items?.length > 0, `${where} : cartes vides`).toBe(true); break;
    case 'flow':
      expect(block.steps?.length >= 2, `${where} : schéma de flux trop court`).toBe(true); break;
    case 'figure':
      checkImage(block.image, where);
      expect(nonEmpty(block.caption), `${where} : légende de figure manquante`).toBe(true);
      break;
    case 'video':
      expect(/^https:\/\//.test(block.url), `${where} : lien vidéo invalide`).toBe(true); break;
    default:
  }
}

const lessons = Object.values(PREMIERE_LESSONS);

test('au moins une leçon au format 2 est chargée', () => {
  expect(lessons.length).toBeGreaterThan(0);
});

describe.each(lessons.map((lesson) => [lesson.id, lesson]))('Leçon %s', (id, lesson) => {
  test('est rattachée au programme de Première', () => {
    expect(curriculumIds.has(id), `nom de fichier inconnu dans stlCurriculum : ${id}`).toBe(true);
    expect(lesson?.version, 'version: 2 manquante').toBe(2);
    expect(lesson.id, 'l’id doit être identique au nom du fichier').toBe(id);
  });

  test('introduction complète', () => {
    expect(nonEmpty(lesson.hook?.question), 'accroche manquante').toBe(true);
    expect(lesson.objectives?.length, 'objectifs').toBeGreaterThanOrEqual(3);
    if (lesson.hook.image) checkImage(lesson.hook.image, 'accroche');
  });

  test('cours structuré en parties', () => {
    const parts = lesson.course?.parts || [];
    expect(parts.length, 'nombre de parties').toBeGreaterThanOrEqual(2);
    parts.forEach((part, partIndex) => {
      expect(nonEmpty(part.title), `partie ${partIndex + 1} sans titre`).toBe(true);
      expect(part.blocks?.length, `partie ${partIndex + 1} vide`).toBeGreaterThan(0);
      part.blocks.forEach((block, blockIndex) => checkBlock(block, `partie ${partIndex + 1}, bloc ${blockIndex + 1}`));
      expect(part.blocks.some((block) => block.type === 'retenir'), `partie ${partIndex + 1} sans « À retenir »`).toBe(true);
    });
  });

  test('travail guidé exploitable', () => {
    const activities = lesson.guided?.activities || [];
    expect(activities.length, 'activités').toBeGreaterThanOrEqual(2);
    activities.forEach((activity, index) => {
      const where = `activité ${index + 1}`;
      expect(nonEmpty(activity.title), `${where} sans titre`).toBe(true);
      expect(activity.questions?.length, `${where} sans question`).toBeGreaterThan(0);
      (activity.documents || []).forEach((doc, docIndex) => {
        if (doc.image) checkImage(doc.image, `${where}, document ${docIndex + 1}`);
        (doc.blocks || []).forEach((block, blockIndex) => checkBlock(block, `${where}, document ${docIndex + 1}, bloc ${blockIndex + 1}`));
        expect(nonEmpty(doc.text) || doc.image || doc.blocks?.length || doc.link, `${where}, document ${docIndex + 1} vide`).toBeTruthy();
      });
      activity.questions.forEach((question, qIndex) => {
        expect(nonEmpty(question.text), `${where}, question ${qIndex + 1} vide`).toBe(true);
        expect(nonEmpty(question.answer), `${where}, question ${qIndex + 1} sans correction`).toBe(true);
      });
    });
  });

  test('bilan complet', () => {
    const review = lesson.review || {};
    expect(review.keyPoints?.length, 'points essentiels').toBeGreaterThanOrEqual(3);
    expect(review.vocabulary?.length, 'vocabulaire').toBeGreaterThanOrEqual(5);
    expect(review.selfCheck?.length, 'autoévaluation').toBeGreaterThanOrEqual(3);
    expect(review.quiz?.length, 'QCM').toBeGreaterThanOrEqual(5);
    review.quiz.forEach((item, index) => {
      expect(item.choices?.length, `QCM ${index + 1} : choix`).toBeGreaterThanOrEqual(3);
      expect(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.choices.length, `QCM ${index + 1} : index de réponse invalide`).toBe(true);
      expect(nonEmpty(item.explanation), `QCM ${index + 1} : explication manquante`).toBe(true);
      expect(new Set(item.choices).size, `QCM ${index + 1} : choix en double`).toBe(item.choices.length);
    });
    (review.exercises || []).forEach((exercise, index) => {
      expect(nonEmpty(exercise.statement) && nonEmpty(exercise.answer), `exercice ${index + 1} incomplet`).toBe(true);
    });
    (review.sources || []).forEach((source) => expect(/^https:\/\//.test(source.url), `source invalide : ${source.url}`).toBe(true));
    expect(new Set(review.vocabulary.map((word) => word.term)).size, 'termes de vocabulaire en double').toBe(review.vocabulary.length);
  });

  test('texte en français correctement accentué', () => {
    const text = JSON.stringify(lesson, (key, value) => (key === 'src' || key === 'url' || key === 'id' ? undefined : value));
    // Mots fréquents écrits sans accent dans l'ancien contenu (frontières Unicode, pas \b ASCII).
    const suspects = text.match(/(?<![\p{L}\p{N}])(premiere|deja|etre|tres|apres|reponse|reponses|methode|etape|etapes|systeme|molecule|molecules|proteine|proteines|ecris|decris|determine|precise|realise|reflechis|carre|genetique|biologie moleculaire)(?![\p{L}\p{N}])/giu) || [];
    expect(suspects, `mots sans accent : ${[...new Set(suspects)].join(', ')}`).toEqual([]);
    // « d abord » → « d’abord » ; on ignore les unités (« 30 s à 1 min », « 5 m au-dessus »).
    const missing = text.match(/(?<![\p{L}\p{N}])(?<!\d )[dlnsjm] [aeiouyhéèêà]\p{L}*/giu) || [];
    expect(missing, `apostrophe manquante : ${missing.slice(0, 5).join(' | ')}`).toEqual([]);
  });
});
