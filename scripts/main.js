$(function () {

    var nav_menu_counter = 0;
    $('.nav-main').click(function () {
        if (nav_menu_counter === 0) {
            nav_menu_counter = 1;
            $(this).find('i').removeClass('fa-ellipsis-h');
            $(this).find('i').addClass('fa-times');
            $('.nav-main-items').css('display', 'block');
            $('.nav-main-items').css('opacity', '1');
        } else {
            nav_menu_counter = 0;
            $(this).find('i').addClass('fa-ellipsis-h');
            $(this).find('i').removeClass('fa-times');
            $('.nav-main-items').css('opacity', '0');
            $('.nav-main-items').css('display', 'none');
        }
    })


    $(window).on('scroll',function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1523){
            $('.main-bg').css('position','absolute');
            $('.main-bg').css('bottom','0');
        }
    })

    1523









});