const Game = require('./lib/game.js');
const GameView = require('./lib/gameView.js');



// const canvasEl = document.getElementsByTagName("canvas")[0];
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
//
// const newGame = new Game(
//   canvasEl.width,
//   canvasEl.height
// ).start(canvasEl);

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});
