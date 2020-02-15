'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_MANTLE_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

userNameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя персонажа не может содержать менее 2-x символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Максимальная длина имени персонажа — 25 символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var userCoatInput = userDialog.querySelector('input[name="coat-color"]');
var userCoatColor = userDialog.querySelector('.wizard-coat');

var userEyesInput = userDialog.querySelector('input[name="eyes-color"]');
var userEyesColor = userDialog.querySelector('.wizard-eyes');

var userFireballInput = userDialog.querySelector('input[name="fireball-color"]');
var userFireballColor = userDialog.querySelector('.setup-fireball-wrap');

var changesCoatColor = function (arr) {
  userCoatInput.value = getRandomNumber(arr);
  userCoatColor.style.fill = userCoatInput.value;
}

var changesEyesColor = function (arr) {
  userEyesInput.value = getRandomNumber(arr);
  userEyesColor.setAttribute('style', 'fill');
  userEyesColor.style.fill = userEyesInput.value;
}

var changesFireballColor = function (arr) {
  userFireballInput.value = getRandomNumber(arr);
  userFireballColor.style.background = userFireballInput.value;
}

userCoatColor.addEventListener('click', function () {
  changesCoatColor(WIZARD_MANTLE_COLORS);
});

userEyesColor.addEventListener('click', function () {
  changesEyesColor(WIZARD_EYES);
});

userFireballColor.addEventListener('click', function () {
  changesFireballColor(WIZARD_FIREBALL_COLORS);
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomNumber = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createWizards = function () {
  var wizardArray = [];
  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: getRandomNumber(WIZARD_NAMES) + ' ' + getRandomNumber(WIZARD_SURNAMES),
      coatColor: getRandomNumber(WIZARD_MANTLE_COLORS),
      eyesColor: getRandomNumber(WIZARD_EYES),
    };
    wizardArray.push(wizard);
  }
  return wizardArray;
};

var wizards = createWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  return fragment;
};

similarListElement.appendChild(renderWizards());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
