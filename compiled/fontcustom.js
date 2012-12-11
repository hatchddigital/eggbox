// Script to ensure Eggbox will work for legacy browsers, that don't support generated content


function addicons(){
  //Create object with list of icons
  var icons = {
  	
    ".icon-arrows-keyline-down": "&#xf100;",
    ".icon-arrows-keyline-left": "&#xf101;",
    ".icon-arrows-keyline-right": "&#xf102;",
    ".icon-arrows-keyline-up": "&#xf103;",
    ".icon-social-facebook": "&#xf104;",
    ".icon-social-foursquare": "&#xf105;",
    ".icon-social-googleplus": "&#xf106;",
    ".icon-social-linkedin": "&#xf107;",
    ".icon-social-twitter-fill": "&#xf108;",
    ".icon-social-twitter": "&#xf109;",
    ".icon-ui-link": "&#xf10a;",
    ".icon-ui-mapmarker": "&#xf10b;",
    ".icon-ui-menutoggle": "&#xf10c;",
    ".icon-ui-refresh": "&#xf10d;",
    ".icon-ui-search": "&#xf10e;",
    ".icon-ui-settings": "&#xf10f;",
    ".icon-ui-tab": "&#xf110;",
  };

  //Detect IE version
  var browserver = parseInt($.browser.version, 10);

  //Run icon insertion
  if ($.browser.msie && browserver == 6 || browserver == 7) {
    $(".icon").each(function() {
      var $this = $(this);
      var icon = $this.attr("class").split(/\s/);
      for (key in icons) {
        if ([key]==icon[1]) {
          $this.prepend("<span class='icon-legacy'>" + icons[key] + "</span>");
        }
      }
    });
  }
}

//Run function
$(document).ready(function(){
  addicons();
});
