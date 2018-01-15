'use strict';

var slides = document.querySelectorAll('.cuba-slide');
var leftSlideBtn = document.querySelector('.cuba-slider__btn-prev');
var rightSlideBtn = document.querySelector('.cuba-slider__btn-next');

var slideNumber = 0;

var moveSlide = function (n) {
  slides[slideNumber].className = 'cuba-slide';
  slideNumber = (n + slides.length) % slides.length;
  slides[slideNumber].className = 'cuba-slide cuba-slide--show';
};

leftSlideBtn.addEventListener('click', function (evt) {
    moveSlide(slideNumber -1);
});

rightSlideBtn.addEventListener('click', function (evt) {
    moveSlide(slideNumber + 1);
});
