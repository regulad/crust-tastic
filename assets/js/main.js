function resizeContentPadding() {
    $('#main_content').css(
        'margin-top',
        $('#main_header').css('height')
    );
}

$(document).ready(resizeContentPadding);
$(window).resize(resizeContentPadding);

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

$(document).ready(function() {
    $("#header_menu").hover(function() {
        $("#header_menu_dialogue").show();
        $("#header_menu_icon").text("expand_less");

    },function() {
        $('#header_menu_dialogue').hide();
        $("#header_menu_icon").text("expand_more");
    });
});
