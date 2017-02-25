const Util = require('./util');
const MovingObject = require('./movingObject');

const Asteroid = function (hi) {
  console.log(hi);
  // let hello = hi.pos;
  MovingObject.call(this, {
    pos: hi["pos"],
    vel: [10, 10],
    radius: 50,
    color: 'purple'
  });
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

window.Asteroid = Asteroid;
