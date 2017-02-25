
Function.prototype.inherits = function (parent) {
  function Surrogate () {}

  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

class Ship {
  constructor (name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

function Asteroid (name, speed, size) {
    this.name = name;
    this.speed = speed;
    this.size = size;
}

function MovingObject (name, speed) {
    this.name = name;
    this.speed = speed;
}

  MovingObject.prototype.vroom = function() {
    console.log(`${this.name} is going ${this.speed} miles per hour`);
  };

Asteroid.inherits2(MovingObject);

let ast = new Asteroid ("Bob", 50, 100);

let ship = new Ship ("Enterprise", 150);

let obj = new MovingObject("Jill", 2000);

obj.vroom();
ast.vroom();
