'use strict';

var ESCAPE_KEY_CODE = 27;

var zoomOverlay = document.querySelector('.icon-zoom');

var galleryOverlay = document.querySelector('.gallery-overlay');
var galleryClose = document.querySelector('.gallery-overlay-close');
var srcPict = document.querySelector('.gallery-overlay-image');

var showElement = function (elem) {
  elem.classList.remove('overlay-show');
};

var hideElement = function (elem) {
  elem.classList.add('overlay-show');
};

var showOverlay = function (pic) {
  srcPict.src = pic.src;
  srcPict.width = '640';
  srcPict.height = '480';
  showElement(galleryOverlay);
}

zoomOverlay.addEventListener('click', function (evt) {
  if (evt.target.src) {
    var clickedPic = evt.target;
    showOverlay(clickedPic);
  }
});

galleryClose.addEventListener('click', function () {
  hideElement(galleryOverlay);
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    hideElement(galleryOverlay);
  }
  console.log('ура');
});
