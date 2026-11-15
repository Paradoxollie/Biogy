"""Convertit une image générée (PNG) en WebP optimisé pour le site.

usage : python to-webp.py <entree.png> <sortie.webp> <photo|micro|schema|pencil>
- photo / micro : redimensionnée (1600 px max), WebP qualité 80.
- schema / pencil : fond papier blanchi (niveaux), WebP qualité 84, 1400 px max.
Affiche « largeur hauteur » de l'image produite.
"""
import sys
from PIL import Image, ImageOps

src, out, kind = sys.argv[1], sys.argv[2], sys.argv[3]
im = Image.open(src).convert('RGB')
limit = 1400 if kind in ('schema', 'pencil') else 1600
im.thumbnail((limit, limit), Image.LANCZOS)
if kind in ('schema', 'pencil'):
    # Blanchit le papier sans toucher aux traits : tout ce qui est plus clair que 232 devient blanc.
    lut = [min(255, round(v * 255 / 232)) for v in range(256)]
    im = im.point(lut * 3)
    im.save(out, 'WEBP', quality=84, method=6)
else:
    im.save(out, 'WEBP', quality=80, method=6)
print(im.width, im.height)
