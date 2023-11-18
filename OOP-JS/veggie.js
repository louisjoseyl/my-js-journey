let bird = {
  fname: '',
  hasWings: true,
  canFly: true,
  hasFeathers: true
}

let eagle1 = {...bird}
eagle1.fname = 'Eagle';
let eagle2 = Object.assign({isBig: true}, bird)
eagle2.hasFeathers= false;

console.log("eagle1: ", eagle1)
console.log("eagle2: ", eagle2)

console.log('eagle1 has wings:', eagle1.hasWings)
console.log('eagle1 can fly:', eagle1.canFly)
console.log('eagle1 has feathers:', eagle1.hasFeathers)

