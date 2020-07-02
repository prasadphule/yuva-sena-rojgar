$(function () {
    'use strict'

    //aos
    AOS.init();

    //once page with graphics loaded the call remaing images
    $(window).on("load", function () {
        var images = $(".carousel-inner").find('img[data-src]');
        for (var i = 0; i <= images.length; i++) {
            let element = $(images[i])[0];
            $(element).attr('src', $(element).data('src'));
            $(element).removeAttr('data-src');
        }
    });

    //worker carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        pauseOnHover: false,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: false
            }
        }
    });

})
