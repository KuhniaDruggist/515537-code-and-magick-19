'use strict';
(function () {

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (userNameInput !== document.activeElement) {
      window.utils.isEscEvent(evt, closePopup);
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openPopup);
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, closePopup);
  });

  var form = userDialog.querySelector('.setup-wizard-form');

  var onWizardParamSaved = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.sentData(new FormData(form), onWizardParamSaved, window.utils.onError);
    evt.preventDefault();
  });

})();
