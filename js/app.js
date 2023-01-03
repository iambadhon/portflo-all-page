$(function () {

    //============================preloader section start============================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(800);
    });
    //============================preloader section end============================//

    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }

        if (scrolling > 150) {
            $("#nav").addClass("nav_sticky");
        } else {
            $("#nav").removeClass("nav_sticky")
        }
    });
    //============================scroll to top section end============================//

    //============================slick slider section end============================//
    $('.service_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: ".service-slick-prev",
        nextArrow: ".service-slick-next",
    });

    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: ".slick-prev",
        nextArrow: ".slick-next",
    });
    //============================slick slider section end============================//

    //============================lightbox section start============================//

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        disableScrolling: true,
        showImageNumberLabel: false,
    });

    //============================lightbox section end============================//




    //============================animation scroll section start============================//

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });

    //============================animation scroll section end============================//

});