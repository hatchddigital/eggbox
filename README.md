# Eggbox

A custom, configurable icon font set using the
[Fontcustom](http://fontcustom.com/) Ruby Gem, by
[Yifei Zhang](https://twitter.com/exYZ) and
[Joshua Gross](https://twitter.com/endtwist). Many icons are from
the [Snowcone](http://tangentsnowball.github.com/Snowcone/index.html)
icon webfont set by Tangent Snowball.

## Usage

Express the mixin as below. An argument can be added, to specify whether the
icon gets added using a :before or :after pseudo element. By default, it will
use :before.

/#eggbox > .[icon-name](before|after);

## To install (on Mac OS)

### Step 1: Install the Fontcustom Ruby gem

    gem install fontcustom

#### * Dependancies:

- Xcode (available from the AppStore) with Command Line Tools enabled
  (Preferences > Downloads > Command Line Tools > Install)
- Homebrew
  `ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"`
- Fontforge
  `brew install fontforge eot-utils ttfautohint`

### Step 2: Clone the Eggbox repo and generate the icon set

1. Clone the eggbox repo

    git clone git@github.com:hatchddigital/eggbox.git

2. Generate your first icon set

    fontcustom compile src

To change eggbox settings, modify src/fontcustom.yml as required.

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

/#eggbox-fallback > .[icon-name](color|size)

To adjust the default image path, size and colour go to the settings block
(line 7) of the generated eggbox.less file.
