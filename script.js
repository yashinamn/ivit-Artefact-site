"use strict";

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, main').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.phoneButton').click(function (event) {
        $('.phoneButton, .buttonsWrap').toggleClass('active');
    });
});