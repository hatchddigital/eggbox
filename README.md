# Eggbox

A custom, configurable icon font set,
compiled with [grunt-webfont](https://github.com/sapegin/grunt-webfont)

## Dependancies

- Fontforge: 'brew install fontforge ttfautohint'
- Python: `brew install python` (for svg2png fallback script)
- ImageMagick's convert: `brew install imagemagick` (for svg2png fallback script)

## Usage

@include eggbox([icon],[before (default) |after],[styles(default)|nostyles])

## PNG fallback (uses svg2png script)

Eggbox also provides the means to generate fallback PNG images for every
icon at the size and of the color required for your project. These should
be applied with Modernizr (or similar) within your CSS class that require
an icon.

Setting for fallbacks, like icon colour, size and image paths are configurable
through 'Gruntfile.js'.

## Usage

@include eggbox-fallbck([icon],[styles(default)|nostyles])
