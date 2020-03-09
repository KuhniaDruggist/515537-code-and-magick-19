'use strict';
(function () {

  var Buttons = {
    ESC_KEY: 'Escape',
    ENTER_KEY: 'Enter'
  };

  var pressEsc = function (evt, action) {
    if (evt.key === Buttons.ESC_KEY) {
      action();
    }
  };

  var pressEnter = function (evt, action) {
    if (evt.key === Buttons.ENTER_KEY) {
      action();
    }
  };

  var getRandomElementFromArray = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var getrandomSaturation = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var onError = function (errorMessage) {
    var nodeError = document.createElement('div');
    nodeError.style = 'z-index: 100; width: 400px; text-align: center; background-color: black;';
    nodeError.style.position = 'absolute';
    nodeError.style.top = '30%';
    nodeError.style.left = 'calc(50% - 200px)';
    nodeError.style.fontSize = '30px';
    nodeError.style.color = 'orange';

    nodeError.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', nodeError);
  };

  window.utils = {
    isEscEvent: pressEsc,
    isEnterEvent: pressEnter,
    randomElementFromArray: getRandomElementFromArray,
    randomSaturation: getrandomSaturation,
    onError: onError
  };

})();
