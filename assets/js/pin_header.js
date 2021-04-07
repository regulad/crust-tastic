function resizeContentPadding() {
  $('#main_content').css('margin-top',$('#main_header').css('height'));
}
$(document).ready(resizeContentPadding);
$(window).resize(resizeContentPadding);
