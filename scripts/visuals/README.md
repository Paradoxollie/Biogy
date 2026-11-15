# Génération des visuels des cours

Les images des leçons sont générées avec Codex CLI (outil image intégré, compte ChatGPT de l'enseignante), puis converties en WebP.

1. Écrire un brief précis en anglais dans un fichier texte (sujet, cadrage, format, et pour un schéma la liste EXACTE des légendes en français).
2. Générer : `bash scripts/visuals/gen-image.sh <photo|micro|pencil|schema> brief.txt sortie.png`
3. Vérifier l'image (orthographe des légendes, exactitude scientifique, aspect « non IA »). Régénérer si besoin.
4. Convertir : `python scripts/visuals/to-webp.py sortie.png frontend/src/assets/courses/premiere/<lecon>/<nom>.webp <type>`

Styles : `style-photo.txt` (photo de laboratoire réaliste), `style-micro.txt` (microphotographie), `style-pencil.txt` (planche au crayon sans texte), `style-schema.txt` (schéma au crayon annoté en français).
