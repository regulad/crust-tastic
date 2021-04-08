$(document).ready(function() {
  $("#header_menu_dialogue").hide();
});
$(document).ready(function() {
  $("#header_menu").hover(function() {
    $("#header_menu_dialogue").show();
    $("#header_menu_icon").text("expand_less");
  },function() {
    $('#header_menu_dialogue').hide();
    $("#header_menu_icon").text("expand_more");
  });
});
