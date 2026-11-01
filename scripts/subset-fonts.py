# Builds public/fonts from the Google Fonts sources (github.com/google/fonts, OFL):
#   ofl/archivo/Archivo[wdth,wght].ttf
#   ofl/barlowcondensed/BarlowCondensed-ExtraBoldItalic.ttf, BarlowCondensed-SemiBoldItalic.ttf
#   ofl/roboto/Roboto[wdth,wght].ttf
#   ofl/robotocondensed/RobotoCondensed-Italic[wght].ttf
#
# One file per face: Latin + Romanian letters for RO/EN, Latin + Cyrillic for RU, so each language needs at most
# two files on its first screen. Variable fonts keep only the weights globals.css uses.
#
# usage: pip install fonttools brotli && python3 scripts/subset-fonts.py <dir with the .ttf files> public/fonts

import io
import os
import sys

from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

src, out = sys.argv[1], sys.argv[2]

# Google's "latin" subset, plus Ăă Șș Țț and the cedilla forms (Şş Ţţ) people still type.
LATIN = (
    list(range(0x20, 0x7F)) + list(range(0xA0, 0x100))
    + [0x131, 0x152, 0x153, 0x2BB, 0x2BC, 0x2C6, 0x2DA, 0x2DC, 0x304, 0x308, 0x329]
    + list(range(0x2000, 0x2070)) + [0x20AC, 0x2122, 0x2190, 0x2191, 0x2192, 0x2193, 0x2212, 0x2215]
    + [0x102, 0x103, 0x218, 0x219, 0x21A, 0x21B, 0x15E, 0x15F, 0x162, 0x163]
)
CYRILLIC = LATIN + list(range(0x400, 0x460)) + [0x490, 0x491, 0x2116]

FONTS = [
    # source file, variable axes to pin or narrow, characters, output name
    ("Archivo[wdth,wght].ttf", {"wdth": 100, "wght": (400, 700)}, LATIN, "archivo-latin"),
    ("BarlowCondensed-ExtraBoldItalic.ttf", None, LATIN, "barlow-condensed-800i-latin"),
    ("BarlowCondensed-SemiBoldItalic.ttf", None, LATIN, "barlow-condensed-600i-latin"),
    ("Roboto[wdth,wght].ttf", {"wdth": 100, "wght": (400, 700)}, CYRILLIC, "roboto-cyrillic"),
    ("RobotoCondensed-Italic[wght].ttf", {"wght": (600, 800)}, CYRILLIC, "roboto-condensed-italic-cyrillic"),
]

os.makedirs(out, exist_ok=True)
for name, axes, chars, out_name in FONTS:
    font = TTFont(os.path.join(src, name))
    if axes:
        font = instancer.instantiateVariableFont(font, axes)
        # Subsetting a freshly instanced font trips over stale glyph names in gvar; a save/load round trip fixes it.
        buf = io.BytesIO()
        font.save(buf)
        buf.seek(0)
        font = TTFont(buf)
    options = Options()
    options.hinting = False
    options.name_IDs = ["*"]
    subsetter = Subsetter(options)
    subsetter.populate(unicodes=chars)
    subsetter.subset(font)
    path = os.path.join(out, out_name + ".woff2")
    font.flavor = "woff2"
    font.save(path)
    print(f"{path}  {os.path.getsize(path) / 1024:.1f} KiB")
