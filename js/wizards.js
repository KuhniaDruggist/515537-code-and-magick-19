'use strict';
(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_MANTLE_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var createWizards = function () {
    var wizardArray = [];
    for (var i = 0; i < 4; i++) {
      var wizard = {
        name: window.utils.randomElementFromArray(WIZARD_NAMES) + ' ' + window.utils.randomElementFromArray(WIZARD_SURNAMES),
        coatColor: window.utils.randomElementFromArray(WIZARD_MANTLE_COLORS),
        eyesColor: window.utils.randomElementFromArray(WIZARD_EYES),
      };
      wizardArray.push(wizard);
    }
    return wizardArray;
  };

  window.wizards = {
    createWizards: createWizards
  };

})();
