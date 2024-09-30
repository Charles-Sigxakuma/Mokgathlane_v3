$(function() {
    "use strict";
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".stick").addClass("sticky");
        } else {
            $(".stick").removeClass("sticky");
        }
    });
    $('body').scrollspy({
        target: ".navbar",
        offset: 25
    });
    $("#navbarSupported a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function() {
                window.location.hash = hash;
            });
        }
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });
    $(window).on('load', function() {
        $('#preloader').delay(2000).fadeOut('slow');
        $('body').delay(2000).css({
            'overflow': 'visible'
        });
    });
    $('.carousel').carousel({
        interval: 3800
    });
    $('.home-center-desc').magnificPopup({
        delegate: 'a.icon',
        type: 'iframe'
    });
    $('.project').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});