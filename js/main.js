$(function () {
    'use strict';
    // Adjust slider height
    var windowHeight = $(window).height(),
        upperHeight = $('.top-bar').innerHeight(),
        navHeight = $('nav').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - (upperHeight + navHeight));

    // class active in featured work
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data("class") === 'all') {
            $('.shuffle-images .row .col-sm').css('opacity', 1);
        } else {
            $('.shuffle').css('opacity', "0.3");
            $($(this).data("class")).parent().css('opacity', 1);
        }
    });
});