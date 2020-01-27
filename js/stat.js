'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_INDENT = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var SECOND_POINT_X = 210;
var SECOND_POINT_Y = 10;

var THIRD_POINT_X = 420;

var FOURTH_POINT_X = 400;
var FOURTH_POINT_Y = 135;

var FIFTH_POINT_X = 420;
var FIFTH_POINT_Y = 270;

var SIX_POINT_X = 210;
var SIX_POINT_Y = 250;

var SEVENTH_POINT_Y = 270;

var EIGHT_POINT_X = 20;
var EIGHT_POINT_Y = 135;

var GAP = 50;
var TEXT_GAP = 20;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var YOU_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';

var FONT_COLOR = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + SECOND_POINT_X, y + SECOND_POINT_Y);
  ctx.lineTo(x + THIRD_POINT_X, y);
  ctx.lineTo(x + FOURTH_POINT_X, y + FOURTH_POINT_Y);
  ctx.lineTo(x + FIFTH_POINT_X, y + FIFTH_POINT_Y);
  ctx.lineTo(x + SIX_POINT_X, y + SIX_POINT_Y);
  ctx.lineTo(x, y + SEVENTH_POINT_Y);
  ctx.lineTo(x + EIGHT_POINT_X, y + EIGHT_POINT_Y);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getColor = function (playerName) {
  if (playerName === 'Вы') {
    var columnColor = YOU_COLUMN_COLOR;
  } else {
    columnColor = 'hsl(240, ' + getRandomNumber(0, 100) + '%,' + ' 50%)';
  }
  return columnColor;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_INDENT, CLOUD_Y + SHADOW_INDENT, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = FONT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_GAP * 0.5);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_GAP * 1.5);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(players[i], CLOUD_X + EIGHT_POINT_X + GAP + (COLUMN_WIDTH + GAP) * i, CLOUD_Y + SECOND_POINT_Y + TEXT_GAP * 2 + COLUMN_HEIGHT + TEXT_GAP * 1.5);
    ctx.fillText(Math.round(times[i]), CLOUD_X + EIGHT_POINT_X + GAP + (COLUMN_WIDTH + GAP) * i, CLOUD_Y + SECOND_POINT_Y + TEXT_GAP * 3 + COLUMN_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime - TEXT_GAP);
    ctx.fillStyle = getColor(players[i]);
    ctx.fillRect(CLOUD_X + EIGHT_POINT_X + GAP + (COLUMN_WIDTH + GAP) * i, CLOUD_Y + SECOND_POINT_Y + TEXT_GAP * 3 + COLUMN_HEIGHT, COLUMN_WIDTH, -(COLUMN_HEIGHT * times[i]) / maxTime);
  }
};
