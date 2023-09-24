


 //tenary operator
 // if a customer has more than 100 points,
 // they are a 'gold' customer, otherwise,
 // they are a 'silver' customer.

//  let points = 900
//  let type = points > 100 ? 'gold' : 'silver'

//  console.log(type)

 

//logical operator 
 
// logical and


// let highIncome = false
// let goodCreditScore = false
// let eligibleForLoan =highIncome || goodCreditScore
// console.log('Eligbible', eligibleForLoan) 

// let applicationRefused = !eligibleForLoan
// console.log('Application Refused', applicationRefused) 


//falsy values

// let userColor = 'red'
// let defaultColor = 'blue'
// let currentColor = userColor || defaultColor

// console.log(currentColor)



// //  bitwise operator
// // read, write, execute
// const readPermission = 4
// const writePermission = 2
// const executePermission = 1
// let myPermission = 0
// myPermission = myPermission | readPermission | writePermission
// console.log(myPermission)

// let x = (2+3)*4
// console.log(x)


//exercise

// let a = 'red'
// let b = 'blue'
// let c = a
// a = b
// b = c
// console.log(a)
// console.log(b)
 


// // if else

// // hour 
// // if the hour is between 6am and 12pm : good morning 
// // if hour is between 12 pm and 6pm : good afternoon
// //otherwise: good evening 

// let hour = 19

// if (hour >= 6 && hour <12){

//   console.log('Good morning!')
// }
// else if (hour >= 12 && hour <18 ){
//   console.log('Good afternoon!')
// }
//  else{
//   console.log('Good evening!')
//  }

//switch case

let role = 'guest'
// switch (role){
//   case 'guest':
//     console.log('Guest User')
//     break
//   case 'moderator':
//     console.log('Moderator User')
//     break
  
//     default:
//       console.log('Unknown User')
// }

// using if statement for the same thing

// if (role === 'guest') console.log('Guest User')
// else if (role === 'moderator') console.log('Moderator User')
// else console.log('Unknown User')


// // for loop

// for(let i =0; i <10; i++){
//   if (i % 2 !== 0)console.log(i)
// }


// //while loop
// let i =0
// while(i <= 5 ){
//   if (i % 2 !== 0)console.log(i)
//   i++
// }

//do while loop

// let i = 9
// do{
//   if (i % 2 !== 0)console.log(i)
//   i++
// } while(i <= 5)


// //infinite loop

// let i = 0
// while(i < 5){
//   console.log(i)
// }

// //for-in
// const person = {
//   name: 'Joseph',
//   age: 23
// }
// for (let key in person)
// console.log(key)

//break and continue

// let i =0;
// while (i <= 10){
//   if ( i === 5) break
//   console.log(i)
//   i++
// }

// // write a function that take two numbers and returns the maximum of the two
// let num1 = 20.5
// let num2 = 20.5

// let number = max (num1, num2)

// console.log(number)
// function max(num1, num2){

//   return (num1 > num2) ? num1 : num2
// }

// exercise to print true is the width is greater the height, else false

// let check = isLandscape ( 3, 2)
// console.log(check)

// function isLandscape(width, height){
//   return width > height
// }

// exercise fizz buz algorithm
// a function that returns a string 'fizz' is the input is divisible by three
// divisible by 3 => fizz
// divisible by 5 => buzz
// divisible by 3 => fizzbuzz
// not divisible by 3 and 5 =>> input
// not a number => 'not a number"

// const output = fizzBuzz (false)
// console.log(output)

// function fizzBuzz(input){

//   if (typeof input !== 'number')
//     return NaN
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz'
//   if (input % 3 === 0)
//     return 'Fizz'
//   if (input % 5 === 0)
//     return 'Buzz'
//   return input
// } 

// EXERCISE DEMERIT POINT
//speed limit =70
//5 -> 1 point
// checkSpeed(130)
// function checkSpeed(speed){
//   const speedLimit = 70;
//   const kmPerPoint = 5
//   if(speed < speedLimit + kmPerPoint) console.log ('ok')
//   else{
//     const points = Math.floor( (speed - speedLimit  ) / kmPerPoint)
//     if (points >= 12)
//       console.log ('License suspended')
//     else
//       console.log (points, 'points')
//   } 
// }

// Exercise even and odd number

// showNumbers(10)
// function showNumbers(limit){
//   for (let i=0; i <= limit; i++){
//     if (i % 2 === 0) console.log(i, 'EVEN')
//     else console.log(i, 'ODD')

//   }

// }
 
// function to calculate the average grade
const marks = [80, 80, 80]
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


// calculateGrade(marks)

// function calculateGrade(marks){
  
//   const average = calculateAverage(marks)

//   if (average < 60) console.log('you have failed')
//   if (average < 70) console.log('you are a D student')
//   if (average < 80) console.log('you are a C student')
//   if (average < 90) console.log('you are an B student')
//   else console.log('you are an A student')
  
// }
// function calculateAverage(array){
  
//   let sum = 0
//   for (let value of array)
//     sum +=value;
//   return sum / array.length
  
// }


// stars exercise for junior developers

// showStar(10)

// function showStar (rows){
//   for(row = 1; row <= rows; row++){
//     let pattern ='';
//     for( i=0; i<row; i++)
//       pattern +='*'
//     console.log(pattern)
//   }
// }


// showPrimes(100)

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++){
//     if (isPrime(number)) console.log(number)
//   }
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++){
//     if (number % factor === 0)
//       return false;

//   return true;
//   }
// } 


// objects
//grouping related variables
// if a function is inside an object we call it a method


// // factory function: it produce objects
// function createCircle(radius){
  
//   return {
//     radius, 
//     draw(){
//       console.log('draw')
//     }
//   };
   
// }

// const circle1 = createCircle(1)
// console.log(circle1)

// const circle2 = createCircle(2)
// console.log(circle2)



// // using constructor pattern for creating objects
// // constructor does not use camel notation
// // pascal notation is what constructor use OneTwoThree by covention

// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
// }

const circle = new Circle(1);




function Circle (radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }

}

const another = new Circle(1);