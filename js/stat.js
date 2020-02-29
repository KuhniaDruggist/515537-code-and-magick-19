'use strict';
(function () {

  var CLOUD_X = 100;
  var CLOUD_Y = 10;


  var SECOND_POINT_Y = 10;
  var EIGHT_POINT_X = 20;

  var CLOUD_COLOR = '#fff';

  var SHADOW_INDENT = 10;
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

  var GAP = 50;
  var TEXT_GAP = 20;
  var COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;

  var FONT_COLOR = '#000';

  window.renderStatistics = function (ctx, players, times) {
    window.cloud(ctx, CLOUD_X + SHADOW_INDENT, CLOUD_Y + SHADOW_INDENT, SHADOW_COLOR);
    window.cloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

    ctx.fillStyle = FONT_COLOR;
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_GAP * 0.5);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_GAP * 1.5);

    var maxTime = window.columns.maxHeightColumn(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = FONT_COLOR;
      ctx.fillText(players[i], CLOUD_X + EIGHT_POINT_X + GAP + (COLUMN_WIDTH + GAP) * i, CLOUD_Y + SECOND_POINT_Y + TEXT_GAP * 2 + COLUMN_HEIGHT + TEXT_GAP * 1.5);
      ctx.fillText(Math.round(times[i]), CLOUD_X + EIGHT_POINT_X + GAP + (COLUMN_WIDTH + GAP) * i, CLOUD_Y + SECOND_POINT_Y + TEXT_GAP * 3 + COLUMN_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime - TEXT_GAP);
      ctx.fillStyle = window.columns.colorColumns(players[i]);
      ctx.fillRect(CLOUD_X + EIGHT_POINT_X + GAP + (COLUMN_WIDTH + GAP) * i, CLOUD_Y + SECOND_POINT_Y + TEXT_GAP * 3 + COLUMN_HEIGHT, COLUMN_WIDTH, -(COLUMN_HEIGHT * times[i]) / maxTime);
    }
  };

})();
