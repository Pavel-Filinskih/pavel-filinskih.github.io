'use strict';

var sliderContent = document.querySelector('.slider-content');
var sliderList = sliderContent.querySelectorAll('.slide-list');

var sliderBtnControls = document.querySelector('.team-controls');
var controlsButton = sliderBtnControls.querySelectorAll('.team-controls__button');

function changeSlide(id) {

  for(var i = 0; i < sliderList.length; i++) {
    sliderList[i].classList.remove('slide-list--show');
    controlsButton[i].classList.remove('team-controls__button--active');
  }

  sliderList[id].classList.add('slide-list--show');
  controlsButton[id].classList.add('team-controls__button--active');
}

for(var i = 0; i < controlsButton.length; i++) {
  sliderList[i].id = 'slide-' + (i + 1);
  controlsButton[i].id = 'slide-' + (i + 1);
  controlsButton[i].addEventListener('click', changeSlide.bind(controlsButton[i], i));
}

/* brends */

var brendsContent = document.querySelector('.brends-content');
var brendsList = brendsContent.querySelectorAll('.brends__list');

var brendsBtnControls = document.querySelector('.brends-controls');
var brendsControlsButton = brendsBtnControls.querySelectorAll('.brends-controls__button');

function changeBrends(id) {

  for(var i = 0; i < brendsList.length; i++) {
    brendsList[i].classList.remove('brends__list--show');
    brendsControlsButton[i].classList.remove('brends-controls__button--active');
  }

  brendsList[id].classList.add('brends__list--show');
  brendsControlsButton[id].classList.add('brends-controls__button--active');
}

for(var i = 0; i < brendsControlsButton.length; i++) {
  brendsList[i].id = 'slide-' + (i + 1);
  brendsControlsButton[i].id = 'slide-' + (i + 1);
  brendsControlsButton[i].addEventListener('click', changeBrends.bind(brendsControlsButton[i], i));
}

/* clients */

var clientsContent = document.querySelector('.clients-content');
var clientsList = clientsContent.querySelectorAll('.clients__slide');

var clientsBtnControls = document.querySelector('.clients-controls');
var clientsControlsButton = clientsBtnControls.querySelectorAll('.clients-controls__button');

function changeClients(id) {

  for(var i = 0; i < clientsList.length; i++) {
    clientsList[i].classList.remove('clients__slide--show');
    clientsControlsButton[i].classList.remove('clients-controls__button--active');
  }

  clientsList[id].classList.add('clients__slide--show');
  clientsControlsButton[id].classList.add('clients-controls__button--active');
}

for(var i = 0; i < clientsControlsButton.length; i++) {
  clientsList[i].id = 'slide-' + (i + 1);
  clientsControlsButton[i].id = 'slide-' + (i + 1);
  clientsControlsButton[i].addEventListener('click', changeClients.bind(clientsControlsButton[i], i));
}
