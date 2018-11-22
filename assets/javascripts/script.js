$(document).ready( function() {
    // var $root = $('html, body');
    // $('a').click(function () {
    //     var href = $.attr(this, 'href');
    //     $root.animate({
    //         scrollTop: ($(href).offset().top)
    //     }, 800);
    //     return false;
    // });

    $('.nav-trigger').click(function () {
        $('.nav').toggleClass('opened');
        $('.nav_item_sub-menu').removeClass('opened');
        $('.nav').removeClass('opened-sub');
    });

    if($(window).width() < 750){
        $('.have-sub-menu').click(function (e) {
            $(this).toggleClass('clicked');
            $('.nav_item_sub-menu').toggleClass('opened');
            $('.nav').toggleClass('opened-sub');
        });
    }

    $('.footer-trigger').click(function () {
        $('.footer-nav').toggleClass('opened');
        $('.footer').toggleClass('opened');
    });

});

new WOW().init();
