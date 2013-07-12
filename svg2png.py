import sys
import subprocess
import os
import argparse
import tempfile
from xml.etree import ElementTree


parser = argparse.ArgumentParser(
    description='SVG icon path to PNG raster export')
parser.add_argument('path', help='Path to SVG file(s)')
parser.add_argument('-c', '--color', help='Fill or stroke color for output')
parser.add_argument('-o', '--output', help='Output path for PNG images',
                    default='./')
parser.add_argument('-s', '--size', help='Output size in YYxZZ pixels',
                    default='128x128')


def main(argv=sys.argv):
    ''' Take provided path to SVGs and color and svg path/directory and
        generate PNG exported versions of all files with provided color.

        >> python svg2png path/to/svgs/ #000000 15x15
    '''

    if _dependencycheck() is False:
        return 0

    args = parser.parse_args()
    iconpath = args.path
    color = args.color
    size = args.size
    output = args.output

    if os.path.isdir(iconpath):
        svgfiles = [os.path.join(iconpath, f) for f in os.listdir(iconpath)
                    if os.path.isfile(os.path.join(iconpath, f)) and
                    f.endswith('.svg')]
    elif os.path.isfile(iconpath):
        svgfiles = [iconpath]

    for _file in svgfiles:
        _xml = ElementTree.parse(_file)
        fill_recursively(_xml.getroot(), color)
        _tmpfd, _tmppath = tempfile.mkstemp(suffix='.svg')
        _xml.write(_tmppath)
        name = os.path.basename(_file)
        if size is not None:
            name += '-%s' % size
        if color is not None:
            name += '-%s' % color.replace('#', '')
        export_png(_tmppath, output, size, name)


def fill_recursively(root, color=None):
    ''' Recursively move thorugh each node within the provided XML root
        and fill (or stroke) elements with the provided color. Any element
        that has a display="none" property should be removed from the
        document as they are to be invisible.

        :param root Parent element to fill fill and recurse through
        :type xml.etree.ElementTree.Element
        :param color 6 character hexidecimal color
        :type str
    '''
    removals = []
    for el in root:
        if el.attrib.get('display', '') == 'none':
            removals.append(el)
        if color is not None:
            if 'stroke' in el.attrib:
                el.attrib['stroke'] = color
            elif 'fill' in el.attrib:
                el.attrib['fill'] = color
    # Remove all nodes set as clear
    for el in removals:
        root.remove(el)
    # For any child elements that remain, send them through
    for el in root:
        fill_recursively(el, color)


def export_png(svgpath, exportpath, size=None, name=None):
    ''' Convert an SVG to a PNG at provided size using ImageMagick
        tool 'convert'.

        :param svgpath /path/to/file.svg
        :type str
        :param exportpath /path/to/outputs/
        :param size expected PNG size in YYxZZ pixels
        :type str
        :param name Optional filename of output PNG
        :type str
    '''
    if name is None:
        name = os.path.basename(svgpath)
    if name.endswith('.svg'):
        name = name.replace('.svg', '.png')
    if not name.endswith('.png'):
        name = '%s.png' % name
    cmd = ['convert', '-background', 'transparent']
    if size is not None:
        cmd += ['-resize', size]
    cmd += [svgpath, os.path.join(exportpath, name)]
    subprocess.call(cmd, stderr=subprocess.STDOUT,)


def _dependencycheck():
    ''' Validate all required dependencies are installed.
    '''
    message = "Dependency Failure: %s is not installed."
    try:
        # Check `covert` exists and supress any output from command
        subprocess.Popen(['convert', '--version'],
                         stderr=subprocess.STDOUT,
                         stdout=subprocess.PIPE).communicate()[0]
    except OSError:
        print message % 'ImageMagick'
        return False
    return True


if __name__ == '__main__':
    main()
