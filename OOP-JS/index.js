// enumerating properties

// function Circle (radius){
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }

// const circle = new Circle (10);

// // using for in loop

// for (let key in circle){
//   if (typeof circle[key] !== 'function')
//   console.log(key, circle[key])
// }

// // another approach to get all the keys in an object

// const keys = Object.keys(circle);
// console.log(keys);

// // to check if an object has a given property

// if ('radius' in circle)
//   console.log('the circle has a radius');



/// abstraction

// function Circle (radius){
//   this.radius = radius;
//   let defaultLocation = {x: 0, y:0 };

//   this.draw = function () {
//     computeOptimumLocation;
//     console.log('draw');
//   }
// }

// const circle = new  Circle(10);



// // exercise stopwatch

// function Stopwatch (){
//   let startTime, endTime, running, duration = 0;

//   this.start = function (){
//     if(running)
//       throw new Error ( 'Stopwatch has already started');
//     running = true;

//     startTime = new Date();
//   };
//   this.stop = function (){
//     if(!running)
//       throw new Error ( 'Stopwatch is not started');

//     running = false;

//     endTime = new Date();
    
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };

//   this.reset = function(){
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, 'duration', {
//     get: function() { return duration;}
//   });


// }



// inheritance



// prototype and instance members

// function Circle(radius) {

// //instance members
//   this.radius = radius;
//   this.move = function() {
//     console.log('move');
//   }
// }

// //prototype members
// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// const c1 = new Circle(1);



// create your own prototypical inheritance

// function extend(Child, Parent) {
  
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape(color){
//   this.color = color;

// }
// Shape.prototype.duplicate = function(){
//   console.log('duplicate');
// }


// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function() {
//   console.log('draw')
// }

// function Square (size, color) {
//   Shape.call(this, color);
//   this.size = size;
// }

// extend(Square, Shape);

// const s = new Shape('white');
// const c = new Circle(1, 'red');
// const sq = new Square(10, 'blue');



// method overriding

// function extend(Child, Parent) {
  
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape(){
// }

// Shape.prototype.duplicate = function(){
//   console.log('duplicate');
// }


// function Circle() {
  
// }

// extend(Circle, Shape);

// Shape.prototype.duplicate = function(){
//   console.log('duplicate Circle');
// }

// const c = new Circle();


//exercise

  

