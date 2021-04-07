$(document).ready(function() {
  $('#jump_to_top').hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 0)
    {
      $('#jump_to_top').fadeIn();
    }
    else
    {
      $('#jump_to_top').fadeOut();
    }
  });
});
$(document).ready(function() {
  $('#jump_to_top').click(function() {
    $('html, body').animate({ scrollTop: 0 });
    return false;
  });
});
