'use strict';

var filtersButtonsContent = document.querySelector('.catalog-filters__list');
var filterLinkButton = document.querySelectorAll('.catalog-filters__link');

filterLinkButton[0].classList.add('all');
filterLinkButton[1].classList.add('web');
filterLinkButton[2].classList.add('mobi');
filterLinkButton[3].classList.add('photo');

var clickFilterBtn = function (element) {
  if (element.classList.contains('catalog-filters__link')) {
    activatePin(element);
  }
}

var deactivatePin = function () {
    var prevPin = document.querySelector('.catalog-filters__link--active');
    if (prevPin) {
      prevPin.classList.remove('catalog-filters__link--active');
    }
  };

  var activatePin = function (element) {
    deactivatePin();
    element.classList.add('catalog-filters__link--active');
  };

/* ** cards catalog ** */

var catalogPreview = document.querySelector('.catalog-preview');

var cardMystery = catalogPreview.querySelectorAll('.mystery');
var cardLimited = catalogPreview.querySelectorAll('.limited');
var cardMobile = catalogPreview.querySelectorAll('.mobile');

var filterButtonName = function (arr, name) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add(name);
  }
}

filterButtonName(cardMystery, 'web');
filterButtonName(cardLimited, 'mobi');
filterButtonName(cardMobile, 'photo');

var hideCard = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute('style', 'display: none;');
  }
}

var showCard = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute('style', 'display: inline-block;');
  }
}

var searchButtonFilter = function (element) {
  if (element.classList.contains('all')) {
    showCard(cardMystery);
    showCard(cardLimited);
    showCard(cardMobile);
  }

  if (element.classList.contains('web')) {
    hideCard(cardLimited);
    hideCard(cardMobile);
  } else if (element.classList.contains('mobi')) {
    showCard(cardMobile);
  }

  if (element.classList.contains('mobi')) {
    hideCard(cardMystery);
    hideCard(cardLimited);
  } else if (element.classList.contains('photo')) {
    showCard(cardLimited);
  }

  if (element.classList.contains('photo')) {
    hideCard(cardMystery);
    hideCard(cardMobile);
  } else if (element.classList.contains('web')) {
    showCard(cardMystery);
  }
}

/* *** */

var deactivatePin = function () {
    var prevPin = document.querySelector('.catalog-filters__link--active');
    if (prevPin) {
      prevPin.classList.remove('catalog-filters__link--active');
    }
  };

  var activatePin = function (element) {
    deactivatePin();
    element.classList.add('catalog-filters__link--active');
  };

/* ** end cards catalog ** */

filtersButtonsContent.addEventListener('click', function (evt) {
  evt.preventDefault();
  var element = evt.target.tagName === 'A' ? evt.target : evt.target.parentNode;

  clickFilterBtn(element);
  searchButtonFilter(element);
});
