


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

// let role = 'guest'
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
// const marks = [80, 80, 80]
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

//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function(){
//     console.log('draw');
//   }
// }

// circle.draw();


// dynamic nature of objects

// const circle = {
//   radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color
// delete circle.draw

// console.log(circle)


// constructor properties


// function Circle (radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }

// }


// Circle.call({}, 1)



// // console.log(Circle.name)
// // console.log(Circle.length)
// // console.log(Circle.constructor)


// //value vs reference type

// let obj = {value: 10};


// function increase(obj){
//   obj.value++;
// }

// increase(obj);
// console.log(obj);


// //cloning an object

// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// }

// // this is the older one

// // const another = {};

// // for (let key in circle)
// //   another [key] = circle[key]

// // or you can use this one it is a bit modern

// // const another = Object.assign({}, circle);


// //while this is even better by  using the spread 

// const another = {...circle};

// console.log(another);


// maths objects in javascript

// string objects

// you are now in enumerable object
// back on cloning an object

// const cirle = {
//   radius: 1,
//   draw(){
//     console.log('draw');
//   }
// }
// // one way to clone an object is by using the object assign method
// const newAnother = Object.assign({ color: 'yellow'}, cirle);
// //NB: object.assign copies the properties and methods of
// //more source object into a traget object
// // we can use it to clone and object and also combine two or more object


// // another way is by using the spread operator
// const another = {...cirle};
// // NB: it is used to get all the properties and methods
// //of an objects and put it in another objects

// console.log(newAnother, another)

//2nd nov 2023
// continuation of template literal
// template literals are from es6
// you can use ${name} to concatenate your string
// const fname = 'Josy';
// const another = 
// `Hi ${fname}

// thank you for joining my mailing list. 
// Regards,
// Louis`;

// console.log(another);

// Date objects
// different ways to create a date object

// const now = new Date();
// const date1 = new Date('May 11 2018 9:00');
// const date2 = new Date(2018, 4, 11, 9);
// now.getDate

//exercise 1 adress 

// const address = {
//   street: 'Baptist street',
//   city:'Benin City',
//   zipCode: 300105,
// }

// function showAddress(address){
//   for(let key in address)
//     console.log(key, address[key])
// }

// showAddress(address);


//exercise 2 object equality

// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// //construction Function
// function Address(street, city, zipCode){
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// function areEqual(address1, address2){
//   return address1.street===address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
// }
// function areSame(address1, address2){
//   return address1===address2
// }


// console.log(areEqual(address1, address2))
// console.log(areSame(address1, address2))


//exercise 3 blog post object

// const blogPost = {
//   title: 'coronavirus',
//   body: 'letmecome',
//   author: 'mark',
//   views: 23,
//   comment: [
//     {author: 'josey', body: 'dame'},
//     {author: 'jude', body: 'jame'}
//   ],
//   isLive: true
// }

// console.log(blogPost)



//exercise 4 construction function

// const newpost = new Post('r', 'e', 'd');

// function Post (title, body, author){
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.view = 0;
//   this.comment = [];
//   this.isLive = false;
// }

// console.log(newpost)


//exercise 5 price range object



//ARRAYS

// const numbers = [3, 4];

// //add elements to the array
// //End
// numbers.push(6,5)
// //Beginning
// numbers.unshift(1,2)
// //middle
// numbers.splice(2, 0, 'a', 'b')

// console.log(numbers)



// finding primitive elements in an array

// const numbers = [1, 2, 3, 1, 4]

// console.log(numbers.indexOf(2))
// console.log(numbers.lastIndexOf(1))
// console.log(numbers.includes(2))



// finding reference elements in an array

// const courses = [
//   { id: 1, name: 'a'},
//   { id: 2, name: 'b'}
// ];

// const course = courses.find(function(course){
//   return course.name === 'a';
// });

// console.log(course);


// // arrow function

// const courses = [
//   { id: 1, name: 'a'},
//   { id: 2, name: 'b'}
// ];

// const course = courses.find(course => {
//   return course.name === 'a';
// });

// console.log(course);


//removing elements from an array

// let numbers = [1, 2, 3, 4];

// //end
// // const last = numbers.pop()
// // console.log(numbers)
// // console.log(last)

// // //beginning
// // const first = numbers.shift()
// // console.log(first)
// // //middle
// numbers.splice(2,2)
// console.log(numbers)


// how to empty an array

// solution 1
// numbers = [];

//solution 2 most preferred cause it will also reference an empty array

// numbers.length = 0;

//solution 3
// numbers.splice(0, numbers.length)

// //solution 4
// while(numbers.length > 0)
//   numbers.pop()
// console.log(numbers)


//combining two arrays

// const first = [1, 2];
// const second = [3, 4];
// const combined = first.concat(second);
// // or use the spread operator
// const combined1 = [...first, ...second]

// // to copy an array
// const copy = [...combined]
// //or
// const coopy = combined.slice()
// console.log(copy, coopy)


// // iterating an array

// const numbers = [1, 2, 3]
// // using the for loop
// for (let number of numbers)
//   console.log(number)

// //using the forEach callback
// numbers.forEach((number, index) => {
//   console.log(index, number);
// })

//joining an array

// const numbers = [1, 2, 3]
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);



//sorting an array in primitive

// const numbers = [2, 3, 1]
// numbers.sort();
// console.log(numbers)
// numbers.reverse()
// console.log(numbers)


//sorting an array in objects

// const courses = [
//   { id: 1, name: 'Node.js'},
//   { id: 2, name: 'Javascript'}
// ];

// courses.sort(function(a, b){
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();
//   if (nameA < nameB) return -1;
//   if(nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses)


//testing elements of an array

/*every(), checks to see if every element in a given array matches
the given criteria

some() checks to see if we have one element that matches the given 
criteria */

// const numbers = [1, -1, 2, 3];
// const atLeatOnePositive = numbers.some(function(value){
//   return value => 0;
// })

// console.log(atLeatOnePositive)


// filtering an array

// const numbers = [1, -1, 2, 3];

// //this example returns only the positive elements of the array
// const filtered = numbers.filter(value => value >= 0);

// console.log(filtered)

//mapping an array
/*with this method we can map each element in an array to 
something else*/

// const numbers = [1, -1, 2, 3];

//this example returns only the positive elements of the array
// const filtered = numbers.filter(value => value >= 0);


//mapping an elements to a string
// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);


//mapping an element to an object

// const numbers = [1, -1, 2, 3];

// // const filtered = numbers.filter(value => value >= 0);

// // const items = filtered.map(n => ({ value: n}));

// // for best practise you can also chain them

// const items = numbers
//   .filter(value => value >= 0)
//   .map(n => ({ value: n}));

// console.log(items);


// reducing an array

// const numbers = [1, -1, 2, 3];


//using the normal for operator

// let sum = 0;

// for(let n of numbers)
//   sum +=n

// console.log(sum)

// or using the reduce method

// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum)


//exercise 
//array from range

// const numbers = arrayFromRange(1, 50);

// console.log(numbers);

// function arrayFromRange(min, max){
//   const newArray = [];
//   for(let i = min; i <= max; i++)
//     newArray.push(i);
//   return newArray;

// }



//exercise include

// const numbers = [1, 2, 3, 4,];
// // console.log(numbers.includes(1));

// function includes(array, searchElement){
//   for (let element of array)
//     if (element === searchElement)
//       return true;
    

//   return false;
// }

// console.log(includes(numbers, 6))


//exercise except

// const numbers = [1, 2, 3, 4,];
// // console.log(numbers.includes(1));

// function except(array, excluded){
//   const output = [];
//   for (let element of array)
//     if(!excluded.includes(element))
//       output.push(element)
//   return output;
    
// }

// console.log(except(numbers, [1, 2, 6]))


//exercise count occurence

// const numbers = [1, 2, 3, 4,]

// const output = countOcurrences(numbers, 1);

// function countOcurrences(array, searchElement){
//   let count = 0;
//   for (let element of array)
//     if(element === searchElement)
//       count ++
//     return count;
// }

// console.log(output);


//or

// const numbers = [1, 2, 3, 4]
// const count = countOccurrrences(numbers, 1)
// console.log(count);

// function countOccurrrences(array, searchElement){
//   return array.reduce((accumulator, current) => {
//     const occurence = (current === searchElement) ? 1 : 0;
//     return accumulator + occurence;
//   },0);
// }

// exercise get max

// remember that anytime you want to get a single value from an
// array  you use the reduce method for it

// const numbers = [1, 2, 3, 4]

// const max = getMax(numbers);
// function getMax(array){
//   if (array.length === 0) return undefined;

//   return array.reduce((a, b) => (b > a) ? b : a);
// }

// console.log(max)


//Exercise 

// const movies = [
//   { title: 'a', year: 2018, rating: 4.5},
//   { title: 'b', year: 2018, rating: 4.7},
//   { title: 'c', year: 2018, rating: 3},
//   { title: 'd', year: 2017, rating: 4.5},
// ];

// console.log(movies{title})




// //  functions in js
// function walk() {
//   console.log('walk');
// }

// walk();

// // funciton expression

// let run = function() {
//   console.log('run');
// };
// let move = run;

// run();
// move();

//let say that we are trying to build a function
// to check the discount of more than one prices

// function sum (discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);

// }

// console.log(sum(0.1, 20, 30));

// default parameters

// function interest (principal, rate, years){
//   rate = rate || 3.5;
//   years = years || 5;
//   return (principal * rate * years) / 100;
// }

// console.log(interest(10000))

// in modern javascript

// function interest (principal, rate = 3.5, years = 5){
//   return (principal * rate * years) / 100;
// }

// console.log(interest(10000, 6, 12))


// getters and setters

// const person = {
//   firstName: 'Joseph',
//   lastName: 'Louis',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`
//   },
//   set fullName(value){
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// person.fullName = 'John Smith'

// console.log(person)



//exercise sum of arguments

// function sum(...values){
//   if(values.length === 1 && Array.isArray(values[0]))
//     values = [...values[0]]
//   return values.reduce((a, b) => a + b );
// }

// console.log(sum([1,2,3,4,5]));



//exercise  area of circle

// const circle = {
//   radius: 2,
//   get area (){
//     return Math.PI * this.radius * this.radius;
//   }
// }

// circle.radius = 4;

// console.log(circle.area)


// //exercise error handling

// try {const numbers = [1, 2, 3, 4]
// const count = countOccurrrences(true, 1);
// console.log(count);}

// catch (e){
//   console.log(e.message)
// }

// function countOccurrrences(array, searchElement){
//   if (!Array.isArray(array))
//     throw new Error('invalid array')
//   return array.reduce((accumulator, current) => {
//     const occurence = (current === searchElement) ? 1 : 0;
//     return accumulator + occurence;
//   },0);
// }




