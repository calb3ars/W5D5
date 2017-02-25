const Asteroid = require('./asteroid');
const Asteroid = require('./asteroid');
const Asteroid = require('./asteroid');
const Asteroid = require('./asteroid');

const asteroids = [];
Game.numAsteroids = 15;
const XDIM = 800;
const YDIM = 600;

const Game = function () {
  this.asteroids = [];
  this.bullets = [];

  for(let i = 0; i < Game.numAsteroids; i++) {
    asteroids.push(
      new Asteroid(
        {pos: [Math.random(xDim), Math.random(yDim)]}
      )
    )
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, XDIM, YDIM);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, XDIM, YDIM);
  asteroids.forEach(function (asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  asteroids.forEach((asteroid) => asteroid.move());
}

module.exports = Game;
