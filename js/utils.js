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

  window.utils = {
    isEscEvent: pressEsc,
    isEnterEvent: pressEnter,
    randomElementFromArray: getRandomElementFromArray,
    randomSaturation: getrandomSaturation
  };

})();
