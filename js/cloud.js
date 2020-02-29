'use strict';
(function () {

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

  window.cloud = {
    render: renderCloud
  };

})();
