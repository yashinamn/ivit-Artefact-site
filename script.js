"use strict";

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, main, .nav').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.phoneButton').click(function (event) {
        $('.phoneButton, .buttonsWrap').toggleClass('active');
    });
});


$(document).ready(function(){
    $('.slider').slick({
        asNavFor:'.sliderMin',
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:500,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        fade:true,   
    });
    $('.sliderMin').slick({
        asNavFor:'.slider',
        arrows:false,
        dots:false,
        adaptiveHeight:true,
        adaptiveWidth:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:500,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        vertical:true,
        verticalSwiping:true,
    })
});