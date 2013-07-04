import sys
from xml.etree import ElementTree
import subprocess
import os


def usage(argv):
    cmd = os.path.basename(argv[0])
    print('usage: %s <#hexcol>\n'
          '(example: "%s #ff00ff")' % (cmd, cmd))
    sys.exit(1)


def main(argv=sys.argv):
    '''Take provided color and svg path/directory and generate
    PNG exported versions of all files with provided color
    '''
    if len(argv) < 3:
        usage(argv)

    # Setup arguments
    icondir = argv[1]
    color = argv[2]
    size = argv[3] if len(argv) > 3 else None

    svgfiles = [f for f in os.listdir(icondir) if os.path.isfile(os.path.join(icondir,f)) and f.endswith('.svg')]

    for _file in svgfiles:
        path = os.path.join(icondir, _file)
        _xml = ElementTree.parse(path)
        root = _xml.getroot()
        removals = []
        # Find and set the provided color
        for el in root:
            if el.tag.endswith('g'):
                removals.append(el)
            # if 'fill' in el.attrib:
            #     el.attrib['fill'] = color
            # elif el.tag.endswith('path'):
            el.attrib['fill'] = color
        # Remove the grid from the provided eggbox Icon
        for el in removals:
            root.remove(el)
        # Write temporary SVG file with final changes
        _xml.write(os.path.join('tmp', _file))
        exportdir = 'exports'
        exportname = color.replace('#', '')
        export_png(os.path.join('tmp', _file), exportdir, size, exportname)


def colorfill(el, color):
    '''Fill every thing with the colors
    '''
    pass


def export_png(svgpath, exportpath, size=None, name=None):
    ''' Convert an SVG to a PNG at provided size using ImageMagick
    tool 'convert'.
    '''
    name = '--' + name if name is not None else None
    pngpath = os.path.basename(svgpath).replace('.svg', (name or '') + '.png')

    cmd = ['convert', '-transparent', 'white']
    if size is not None:
        cmd += ['-resize', size]
    cmd += [svgpath, os.path.join(exportpath, pngpath)]
    subprocess.call(cmd, stderr=subprocess.STDOUT,)


if __name__ == '__main__':
    main()
