# Eggbox

A custom, configurable icon font set using a slightly modified version of the brilliant [Fontcustom](http://fontcustom.com/) Ruby Gem (v0.1.1), by [Yifei Zhang](https://twitter.com/exYZ) and [Joshua Gross](https://twitter.com/endtwist). Icons are from the [Snowcone](http://tangentsnowball.github.com/Snowcone/index.html) icon webfont set by Tangent Snowball.

## To install (on Mac OS)

### Step 1: Install the modified Fontcustom ruby gem

1. If on a Mac, install xCode from the App store, and enable Command Line Tools

		(Preferences > Downloads > Command Line Tools)

2. Clone the Fontcustom repo we've forked and modified

		git clone git@github.com:hatchddigital/fontcustom.git

3. Install Homebrew

		ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"

4. Install fontforge

		sudo brew install fontforge eot-utils ttfautohint

5. Install the gem from the cloned repo

		cd/[path-to-repo]/
		sudo gem install fontcustom

Note: If you accidentally install the Gem from the Ruby Gem site this will wipe the slate clean:

		sudo gem uninstall fontcustom

### Step 2: Clone the Eggbox repo and generate the icon set

1. Clone the eggbox repo

		git clone git@github.com:hatchddigital/eggbox.git

2. Generate your first icon set

		fontcustom compile [location of repo]/src -n "Hatchd-eggbox" -o [location of repo]/compiled/

