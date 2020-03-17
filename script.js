"use strict";

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, main, .nav_portfolio').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.phoneButton').click(function (event) {
        $('.phoneButton, .buttonsWrap').toggleClass('active');
    });
});
