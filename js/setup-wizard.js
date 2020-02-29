'use strict';
(function () {

  var WIZARD_MANTLE_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = document.querySelector('.setup');

  var userCoatInput = userDialog.querySelector('input[name="coat-color"]');
  var userCoatColor = userDialog.querySelector('.wizard-coat');

  var userEyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var userEyesColor = userDialog.querySelector('.wizard-eyes');

  var userFireballInput = userDialog.querySelector('input[name="fireball-color"]');
  var userFireballColor = userDialog.querySelector('.setup-fireball-wrap');

  var changesCoatColor = function (arr) {
    userCoatInput.value = window.utils.randomElementFromArray(arr);
    userCoatColor.style.fill = userCoatInput.value;
  };

  var changesEyesColor = function (arr) {
    userEyesInput.value = window.utils.randomElementFromArray(arr);
    userEyesColor.setAttribute('style', 'fill');
    userEyesColor.style.fill = userEyesInput.value;
  };

  var changesFireballColor = function (arr) {
    userFireballInput.value = window.utils.randomElementFromArray(arr);
    userFireballColor.style.background = userFireballInput.value;
  };

  userCoatColor.addEventListener('click', function () {
    changesCoatColor(WIZARD_MANTLE_COLORS);
  });

  userEyesColor.addEventListener('click', function () {
    changesEyesColor(WIZARD_EYES);
  });

  userFireballColor.addEventListener('click', function () {
    changesFireballColor(WIZARD_FIREBALL_COLORS);
  });

})();
