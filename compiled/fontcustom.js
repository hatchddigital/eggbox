/**
 * ICON FONT FIX
 *
 * Font fix script moves through all generated supporting browsers (e.g. those
 * that don't support :before/:after) and adding in a new span element with
 * the proper font character code.
 * The character codes MUST be added to the icon_codes array for this
 * technique to function correctly.
 *
 */

$(document).ready(function () {
    if (!Modernizr.generatedcontent) {
        var icon_codes = {
            
            'arrows-full-down': '&#xf100;', 
            'arrows-full-left': '&#xf101;', 
            'arrows-full-right': '&#xf102;', 
            'arrows-full-up': '&#xf103;', 
            'arrows-fullinverted-down': '&#xf104;', 
            'arrows-fullinverted-left': '&#xf105;', 
            'arrows-fullinverted-right': '&#xf106;', 
            'arrows-fullinverted-up': '&#xf107;', 
            'arrows-hairline-down': '&#xf108;', 
            'arrows-hairline-left': '&#xf109;', 
            'arrows-hairline-right': '&#xf10a;', 
            'arrows-hairline-up': '&#xf10b;', 
            'arrows-keyline-down': '&#xf10c;', 
            'arrows-keyline-left': '&#xf10d;', 
            'arrows-keyline-right': '&#xf10e;', 
            'arrows-keyline-up': '&#xf10f;', 
            'arrows-outline-down': '&#xf110;', 
            'arrows-outline-left': '&#xf111;', 
            'arrows-outline-right': '&#xf112;', 
            'arrows-outline-up': '&#xf113;', 
            'misc-bell': '&#xf114;', 
            'misc-book-closed': '&#xf115;', 
            'misc-book-open': '&#xf116;', 
            'misc-clock': '&#xf117;', 
            'misc-coffeecup': '&#xf118;', 
            'misc-conversation': '&#xf119;', 
            'misc-handshake': '&#xf11a;', 
            'misc-heart': '&#xf11b;', 
            'misc-paperclip': '&#xf11c;', 
            'misc-presentation': '&#xf11d;', 
            'misc-stopwatch': '&#xf11e;', 
            'misc-timer': '&#xf11f;', 
            'misc-vcard': '&#xf120;', 
            'social-facebook-fill': '&#xf121;', 
            'social-facebook': '&#xf122;', 
            'social-foursquare-inverted': '&#xf123;', 
            'social-foursquare': '&#xf124;', 
            'social-googleplus': '&#xf125;', 
            'social-instagram': '&#xf126;', 
            'social-linked': '&#xf127;', 
            'social-linkedin-fill': '&#xf128;', 
            'social-rss-fill': '&#xf129;', 
            'social-rss': '&#xf12a;', 
            'social-twitter-fill': '&#xf12b;', 
            'social-twitter': '&#xf12c;', 
            'social-youtube': '&#xf12d;', 
            'ui-alert-fill': '&#xf12e;', 
            'ui-battery-50': '&#xf12f;', 
            'ui-battery-full': '&#xf130;', 
            'ui-battery-low': '&#xf131;', 
            'ui-bookmark': '&#xf132;', 
            'ui-calendar': '&#xf133;', 
            'ui-check': '&#xf134;', 
            'ui-checkbox-blank': '&#xf135;', 
            'ui-checkbox-checked': '&#xf136;', 
            'ui-comment': '&#xf137;', 
            'ui-contract': '&#xf138;', 
            'ui-cross-large': '&#xf139;', 
            'ui-cross-small': '&#xf13a;', 
            'ui-documents': '&#xf13b;', 
            'ui-download': '&#xf13c;', 
            'ui-edit': '&#xf13d;', 
            'ui-email-closed': '&#xf13e;', 
            'ui-email-open': '&#xf13f;', 
            'ui-equaliser-horz': '&#xf140;', 
            'ui-equaliser-vert': '&#xf141;', 
            'ui-expand': '&#xf142;', 
            'ui-favourite': '&#xf143;', 
            'ui-flag': '&#xf144;', 
            'ui-help': '&#xf145;', 
            'ui-home': '&#xf146;', 
            'ui-image': '&#xf147;', 
            'ui-info-fill': '&#xf148;', 
            'ui-info': '&#xf149;', 
            'ui-link': '&#xf14a;', 
            'ui-location-pointer': '&#xf14b;', 
            'ui-lock-locked': '&#xf14c;', 
            'ui-lock-unlocked': '&#xf14d;', 
            'ui-logout-1': '&#xf14e;', 
            'ui-logout-2': '&#xf14f;', 
            'ui-mapmarker': '&#xf150;', 
            'ui-menutoggle': '&#xf151;', 
            'ui-microphone': '&#xf152;', 
            'ui-minus': '&#xf153;', 
            'ui-phone': '&#xf154;', 
            'ui-plus': '&#xf155;', 
            'ui-print': '&#xf156;', 
            'ui-profile-2': '&#xf157;', 
            'ui-profile': '&#xf158;', 
            'ui-refresh': '&#xf159;', 
            'ui-search': '&#xf15a;', 
            'ui-settings-spanner': '&#xf15b;', 
            'ui-settings': '&#xf15c;', 
            'ui-sync-1': '&#xf15d;', 
            'ui-sync-2': '&#xf15e;', 
            'ui-tab': '&#xf15f;', 
            'ui-trash': '&#xf160;', 
            'ui-upload': '&#xf161;', 
            'ui-view': '&#xf162;', 
            'ui-zoom-in': '&#xf163;', 
            'ui-zoom-out': '&#xf164;', 
        };
        $('[class*="icon-"]').each(function () {
            var $this = $(this)
              , classes = $(this).attr('class').split(' ')
              , icon_class = false;
            for (x = 0; x < classes.length; x++) {
                if (classes[x].indexOf('icon-') === 0) {
                    icon_class = classes[x].replace('icon-', '');
                }
            }
            var prepend_element = '<span class="icon icon-legacy">' +
                                      icon_codes[icon_class] +
                                  '</span>';
            $this.prepend(prepend_element);
        });
    }
});
