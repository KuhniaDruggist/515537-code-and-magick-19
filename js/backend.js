'use strict';
(function () {

  var ServerLinks = {
    URL_POST: 'https://js.dump.academy/code-and-magick',
    URL_GET: 'https://js.dump.academy/code-and-magick/data'
  };

  var StatusCodes = {
    OK: 200
  };

  var TIMEOUT_IN_MS = 10000;
  var RESPONSE_TYPE = 'json';

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = RESPONSE_TYPE;

    xhr.open('POST', ServerLinks.URL_POST);

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCodes.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Error: Произошла ошибка соединения. Проверьте подключение к интернету');
    });

    xhr.addEventListener('timeout', function () {
      onError('Error: Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = RESPONSE_TYPE;

    xhr.open('GET', ServerLinks.URL_GET);

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCodes.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Error: Произошла ошибка соединения. Проверьте подключение к интернету');
    });

    xhr.addEventListener('timeout', function () {
      onError('Error: Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.send();
  };

  window.backend = {
    sentData: save,
    getData: load
  };

})();
