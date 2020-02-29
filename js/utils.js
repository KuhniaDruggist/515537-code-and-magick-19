'use strict';
(function () {

  var Buttons = {
    ESC_KEY: 'Escape',
    ENTER_KEY: 'Enter'
  };

  window.utils = {
    isEscEvent: function (evt, action) {
      if (evt.key === Buttons.ESC_KEY) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === Buttons.ENTER_KEY) {
        action();
      }
    },
    randomElementFromArray: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    randomSaturation: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

})();
