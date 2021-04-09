$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 0)
    {
      $('#jump_to_top').fadeIn('fast');
    }
    else
    {
      $('#jump_to_top').fadeOut('fast');
    }
  });
});
$(document).ready(function() {
  $('#jump_to_top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    return false;
  });
});
