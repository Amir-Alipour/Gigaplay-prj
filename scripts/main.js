$(function () {
    AOS.init();

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

    $(window).on('scroll', function () {
        console.log($(window).scrollTop());
    })
    1815

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if(scroll > 925){
            $('#card-featued').css('position','fixed');
            $('#card-featued').css('top','100px');
            $('#card-featued').css('right','109px');
            $('#card-featued').css('width','488px');
            $('#footer-of-header').css('margin-top', '500px');
        }else{
            $('#card-featued').removeAttr('style');
            $('#card-featued').css('position','relative');
            $('#card-featued').css('top','900px');
            $('#footer-of-header').css('margin-top', '0');
        }

1781
        if (scroll > 1700) {
            $('.main-bg').css('position', 'absolute');
            $('.main-bg').css('top', '1700px');
            $('.main-bg').css('background-repeat', 'repeat');
        } else {
            $('.main-bg').css('position', 'fixed');
            $('.main-bg').css('top', '0');
            $('.main-bg').css('background-repeat', 'no-repeat');
        }

        if (scroll > 1780) {
            $('.befor-ellip').css('opacity', '0');
            setTimeout(() => {
                $('.befor-ellip').css('position', 'absolute');
            }, 500);
        } else {
            $('.befor-ellip').css('opacity', '1');
            setTimeout(() => {
                $('.befor-ellip').css('position', 'fixed');
            }, 500);
        }

        if(scroll > 1781){
            $('#card-featued').removeAttr('style');
            $('#card-featued').css('position','absolute');
            $('#card-featued').css('top','1880px');
            $('#card-featued').css('width','488px');
            $('#card-featued').css('right','109px');
            $('#footer-of-header').css('margin-top', '500px');
        }
    })










});