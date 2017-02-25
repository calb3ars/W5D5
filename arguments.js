// Sum
// let sum = function() {
//   let args = Array.from(arguments);
//   // console.log(args);
//   let sumResult = args.reduce((acc, el) => {
//     return acc + el;
//   }, 0);
//   return sumResult;
// };

// console.log(sum(2,4,5));

let spreadSum = function(...nums) {
  let result = nums.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return result;
};
// console.log(spreadSum(2,4,5));

//Bind
// Arguments keyword
// Function.prototype.myBind = function(context) {
//   let args1 = Array.from(arguments);
//   args1.shift();
//   // console.log(args);
//   // console.log(arguments);
//   let that = this;
//   return function () {
//     let args2 = Array.from(arguments);
//     // args2.shift();
//     let args3 = args1.concat(args2);
//     console.log(args3);
//     console.log(context);
//     that.apply(context, args3);
//   };
//
// };

Function.prototype.myBind = function(context, ...args1) {
  let that = this;
  return function (...args2) {
    let args3 = args1.concat(args2);
    that.apply(context, args3);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
// breakfast.says("meow", "a tree");
// markov.says.myBind(breakfast)("meow", "a tree");
// markov.says.myBind(breakfast, "meow", "Kush")();
// markov.says.myBind(breakfast)("meow", "a tree");
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");

let curriedSum = function (numArgs, numbers = []) {
  return function _curriedSum(...num) {
    numbers.push(num[0]);
    if (numbers.length === numArgs) {
      return numbers.reduce( (acc, el) => {
        return acc + el;
      }, 0);
    } else {
      return curriedSum(numArgs, numbers);
    }
  };
};


const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry
Function.prototype.curry = function(numArgs, args = []) {
  let that = this;
  return function _curry(...arg) {
    args.push(arg[0]);
    if (numArgs === args.length) {
      return that.apply(undefined, args);
    } else {
      return that.curry(numArgs, args);
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
