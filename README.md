# Eggbox

A custom, configurable icon font set,
compiled with [grunt-webfont](https://github.com/sapegin/grunt-webfont)

## Dependancies

- Fontforge: 'brew install fontforge ttfautohint'
- Python: `brew install python` (for svg2png fallback script)

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

## Changelog (major changes only)

-0.6.0 - Removed IE7 support (needs empty-coop 0.12.0 onwards)


