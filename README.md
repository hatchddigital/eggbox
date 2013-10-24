# Eggbox

A custom, configurable icon font set, compiled with [grunt-webfont](https://github.com/sapegin/grunt-webfont)

## Dependancies

Fontforge:

    brew install fontforge ttfautohint

## Usage

Express the mixin as below. An argument can be added, to specify whether the
icon gets added using a :before or :after pseudo element. By default, it will
use :before.

    #eggbox > .[icon-name](before|after);

## PNG fallback

Eggbox also provides the means to generate fallback PNG images for every
icon at the size and of the color required for your project. These should
be applied with Modernizr (or similar) within your CSS class that require
an icon.

### Install requirements for `svg2png`

#### * Dependancies:

This fallback requires Python and ImageMagick. If you are missing either
of these tools you can also install them with Homebrew.

- Python `brew install python`
- ImageMagick's convert `brew install imagemagick`

### Usage

    python svg2png /path/to/svg -c #000000 -o ~/Desktop/exports/ -s 128x128

Provide a single SVG or a directory of SVG files. You can provide optionals
to set the output color (in `#RRGGBB`), the output size (`PXxPX` in pixels)
as well as the output directory for each file.

Within the eggbox .LESS file, a mixin has been provided to allow easy use of
these fallbacks:

    #eggbox-fallback > .[icon-name](color|size)

To adjust the default image path, size and colour go to the settings block
(line 7) of the generated eggbox.less file.
