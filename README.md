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
