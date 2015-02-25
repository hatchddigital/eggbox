# Eggbox

A custom, configurable icon font set,
compiled with [grunt-webfont](https://github.com/sapegin/grunt-webfont)

## Dependancies

- Fontforge: 'brew install fontforge ttfautohint'
- Python: `brew install python` (for svg2png fallback script)
- ImageMagick's convert: `brew install imagemagick` (for svg2png fallback script)

### Usage

```
/// Call an eggbox icon to use
/// @author Jack Armley
/// @group Eggbox
/// @param {String} $icon [false] - Icon to use, from `$eggboxicons`
/// @param {String} $position [before] - Pseudo element to use (before or after)
/// @param {Boolean} $styles [true] - Include styles (true or false)
/// @requires {Variable} $eggbox-icons
p{
    @include eggbox-imgfallback('search');
}
```

## PNG fallback (uses svg2png script)

Eggbox also provides the means to generate fallback PNG images for every
icon at the size and of the color required for your project. These should
be applied with Modernizr (or similar) within your CSS classes that require
an icon.

Settings for fallbacks, like icon colour, size and image paths are configurable
through 'Gruntfile.js'.

### Usage

```
/// Provide an image fallback for an eggbox icon
/// Should only really come into play for IE7 (so very rarely)
/// It only outputs a background-image, so usage is flexible
/// @author Jack Armley
/// @group Eggbox
/// @param {String} $icon [false] - Icon to use, from `$eggboxicons`
/// @param {Map|Variable} $fallbacks [$eggbox-fallbacks] - Fallback properties map to use
p{
    @include eggbox-imgfallback('search');
}
```

## Changelog

