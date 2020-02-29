'use strict';
(function () {

  var YOU_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';
  var MIN_SATURATION = 0;
  var MAX_SATURATION = 100;

  var renderColumn = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var renderColors = function (playerName) {
    if (playerName === 'Вы') {
      var columnColor = YOU_COLUMN_COLOR;
    } else {
      columnColor = 'hsl(240, ' + window.utils.randomSaturation(MIN_SATURATION, MAX_SATURATION) + '%,' + ' 50%)';
    }
    return columnColor;
  };

  window.columns = {
    maxHeightColumn: renderColumn,
    colorColumns: renderColors
  };

})();
