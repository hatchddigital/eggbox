# Eggbox

A custom, configurable icon font set using the brilliant
[Fontcustom](http://fontcustom.com/) Ruby Gem (v0.1.1), by
[Yifei Zhang](https://twitter.com/exYZ) and
[Joshua Gross](https://twitter.com/endtwist). Many icons are from
the [Snowcone](http://tangentsnowball.github.com/Snowcone/index.html)
icon webfont set by Tangent Snowball.

## To install (on Mac OS)

### Step 1: Install the Fontcustom ruby gem

    gem install fontcustom

#### * Dependancies:

- xCode (get from the App store), with Command Line Tools enabled
  (Preferences > Downloads > Command Line Tools)
- Homebrew
  ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"
- Fontforge
  brew install fontforge eot-utils ttfautohint

### Step 2: Clone the Eggbox repo and generate the icon set

1. Clone the eggbox repo

		git clone git@github.com:hatchddigital/eggbox.git

2. Generate your first icon set

		fontcustom compile src

To change eggbox settings, modify src/fontcustom.yml

## PNG fallback

This repo provides the means for generated fallback PNG images for every
icon in a set of sizes and colors as required.

### Requirements

- python
- imagemagick

### Installation (on Mac OS)

If have brew installed you can easily install requirements otherwise
feel free to find instructions from your preferred package providers.

```sh
brew install python
brew install imagemagick
```
### Usage

python svg2png /path/to/svg -c #000000 -o ~/Desktop/exports/ -s 128x128

Provide a single SVG or a directory of SVG files. You can provide optionals
to set the output color (in #RRGGBB), the output size (XXxXX in pixels) as
well as the output directory for each file.

Each exported icon will have a filename matching provided details to allow
for easy use within CSS fallbacks. The format will be `icon-YYxZZ-RRGGBB.png`
for the above example would be `icon-128x128-000000.png` within the provided
export directory.
