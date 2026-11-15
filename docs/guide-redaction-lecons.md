# Guide de rédaction des leçons (format 2)

Ce guide décrit comment écrire une leçon de Première STL pour Biogy. La leçon de référence est
`frontend/src/data/premiere/lessons/module-1-diversite.js` : la lire en entier avant d’écrire.

## 1. Principe

Une leçon est un **cahier d’élève parfait** que l’élève peut suivre en autonomie :

1. **Introduction** : une accroche motivante, les objectifs (« à la fin, je sais… »), les prérequis.
2. **Le cours** : 3 à 6 parties numérotées, chacune avec définitions, explications, exemples, figures et un encadré « À retenir ».
3. **Travail guidé** : 3 à 5 activités appuyées sur de vrais documents, avec questions, coups de pouce et corrections.
4. **Bilan & entraînement** : l’essentiel, le vocabulaire, les erreurs fréquentes, un QCM autocorrigé, des exercices corrigés, une autoévaluation.

Le contenu suit **strictement le programme officiel** (BO spécial n° 1 du 22 janvier 2019, annexes 1 et 2) : tous les savoir-faire et notions du chapitre sont traités, sans hors-programme inutile.

## 2. Fichier

- Un fichier par leçon : `frontend/src/data/premiere/lessons/<id>.js`, où `<id>` est **exactement** l’identifiant du chapitre ou de la sous-partie dans `stlCurriculum.js` (ex. `module-2-culture`, `bb1-3-absorption-devenir`).
- Le fichier est chargé automatiquement (pas besoin de modifier d’autre fichier).
- Images : `frontend/src/assets/courses/premiere/<id>/<nom>.webp`, importées en tête du fichier et décrites avec `img(src, alt, kind, largeur, hauteur)` (`kind` : `photo`, `micro`, `schema`, `pencil`).

```js
import { img } from '../media';
import gram from '../../../assets/courses/premiere/module-1-diversite/gram.webp';

const IMG = { gram: img(gram, 'Texte alternatif précis', 'micro', 1536, 1024) };

export default {
  version: 2,
  id: 'module-1-diversite',
  duration: 'Environ 4 séances',
  hook: { image: IMG.x, question: '…?', text: '…' },
  objectives: ['…'],            // 4 à 6, verbes d’action
  prerequisites: ['…'],         // facultatif
  program: ['…'],               // savoir-faire / capacités officiels du chapitre
  course: { parts: [{ title: '…', intro: '…', blocks: [/* blocs */] }] },
  guided: { intro: '…', activities: [/* activités */] },
  review: { keyPoints, method, vocabulary, mistakes, quiz, exercises, selfCheck, sources },
};
```

## 3. Blocs du cours

| type | champs | usage |
|---|---|---|
| `p` | `text` (chaîne ou tableau) | paragraphe d’explication |
| `definition` | `term`, `text` | définition à apprendre |
| `retenir` | `items` (liste) ou `text`, `title?` | encadré « À retenir » — **obligatoire dans chaque partie** |
| `example` | `title?`, `text` | exemple concret, calcul résolu |
| `warning` | `title?`, `text` | piège, sécurité, erreur à éviter |
| `note` | `title?`, `text` | « pour aller plus loin », culture scientifique |
| `list` | `title?`, `items`, `ordered?` | énumération |
| `steps` | `title?`, `items` (chaînes ou `{ title, text }`) | protocole, démarche numérotée |
| `formula` | `title?`, `expression`, `legend: [{ symbol, meaning }]` | relation à connaître |
| `table` | `caption?`, `head: []`, `rows: [[]]` | tableau (autant de cellules que d’en-têtes) |
| `compare` | `title?`, `columns: [{ title, subtitle?, items }]` | comparaison 2 ou 3 colonnes |
| `cards` | `items: [{ title, text, tone? }]` | grille de cartes (`tone` : red, blue, green, yellow, white) |
| `flow` | `title?`, `steps` (chaînes ou `{ title, text }`), `caption?` | enchaînement (A → B → C) |
| `figure` | `image`, `caption`, `credit?`, `size?` (`small`, `normal`, `wide`) | illustration numérotée automatiquement |
| `video` | `title`, `url`, `detail?` | lien vers une vidéo |

Mise en forme dans les textes : `**gras**` (mots-clés), `==surligné==` (idée capitale, avec parcimonie), `_italique_` (noms latins : _Escherichia coli_), `H~2~O` (indice), `10^-3^` (exposant).

## 4. Travail guidé

```js
{
  title: 'Interpréter une coloration de Gram',
  duration: '25 min',
  skills: ['Observer', 'Interpréter'],
  context: 'Situation de départ…',
  documents: [
    { label: 'Document 1', title: '…', text: ['…'], image: IMG.gram, caption: '…', source: '…' },
    { label: 'Document 2', title: '…', blocks: [{ type: 'table', head: [...], rows: [...] }] },
  ],
  instruction: 'Consigne générale (facultatif)',
  questions: [{ text: '…', hint: 'coup de pouce', answer: 'correction rédigée' }],
}
```

- Les documents sont **réels ou présentés honnêtement** : données de TP, tableaux de mesures, textes, microphotographies, schémas. Ne jamais inventer une étude ou une source présentée comme réelle ; des données construites pour l’exercice sont présentées comme des résultats de TP ou une situation.
- Chaque question a une **correction** complète et, si utile, un **coup de pouce**. Les questions vont du relevé d’informations au raisonnement argumenté.
- Les questions sont numérotées automatiquement (Q1, Q2… en continu sur la leçon) : ne pas écrire « Q1. » dans le texte.

## 5. Bilan

- `keyPoints` : 5 à 7 phrases, l’essentiel du chapitre.
- `method` (facultatif) : `{ title, steps: [] }`, une méthode transférable.
- `vocabulary` : 8 à 15 termes `{ term, definition }`.
- `mistakes` : 3 à 6 `{ wrong, right }`.
- `quiz` : 6 à 10 `{ question, choices: [3 ou 4], answer: index (0 = premier), explanation }`. Varier la position de la bonne réponse.
- `exercises` : 2 à 4 `{ title?, statement, answer }`, avec correction détaillée.
- `selfCheck` : 5 à 8 « Je sais… ».
- `sources` : uniquement des URL **qui existent** (Éduscol, sites académiques, Wikipédia, organismes officiels : Inserm, Institut Pasteur, INRS, ANSES…).

## 6. Écriture

- Tutoiement, phrases courtes, ton encourageant, vocabulaire scientifique exact et défini à sa première apparition.
- Toujours relier la notion au laboratoire ou à la vie réelle (santé, alimentation, environnement, industrie).
- Français irréprochable : accents (y compris sur les majuscules : « À », « État »), apostrophe typographique `’`, guillemets « » avec espaces, nombres `1 000`, décimales à virgule `2,5`, unités séparées par une espace (`5 µm`, `37 °C`), signe `×`.
- Exactitude scientifique vérifiée (programme, manuels de STL, sources institutionnelles). En cas de doute, choisir la formulation la plus prudente et correcte.
- Garder le travail déjà fait par l’enseignante quand il est pertinent (structure des séquences, documents, images, vidéos) en l’améliorant.

## 7. Images

Chaque leçon comporte 3 à 7 visuels **beaux et exacts**, générés avec Codex CLI ou réutilisés (images libres de `courseMediaLibrary.js`, images existantes de l’enseignante).

1. Écrire un brief en anglais (sujet, format portrait 2:3 / paysage 3:2 / carré, détails scientifiques précis ; pour un schéma, la **liste exacte des légendes en français**).
2. `bash scripts/visuals/gen-image.sh <photo|micro|schema|pencil> brief.txt sortie.png`
3. Vérifier l’image (ouvrir le PNG) : orthographe de chaque légende, exactitude scientifique, absence d’aspect « IA », pas de texte parasite. Régénérer si nécessaire (3 essais au maximum ; sinon schéma sans légendes, décrit dans la légende de la figure).
4. `python scripts/visuals/to-webp.py sortie.png frontend/src/assets/courses/premiere/<id>/<nom>.webp <kind>` (affiche largeur et hauteur à reporter dans `img(...)`).

Styles : `photo` (photo de laboratoire réaliste), `micro` (microphotographie ou cliché de microscopie électronique), `schema` (schéma au crayon annoté en français, une couleur d’accent vert sauge), `pencil` (planche au crayon sans texte). Pas de logos, pas de visages, pas de texte dans les photos.

## 8. Vérification

Depuis `frontend/` : `npx vitest run src/data/premiere` (structure, QCM, images, accents) puis `npm run build`. Les deux doivent réussir.
