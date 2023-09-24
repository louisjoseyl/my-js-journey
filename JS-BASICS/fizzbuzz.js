//create a fzzbuzz app to do the following 
// divisible by 3=> Fizz
// divisible by 5=> Buzz
// divisible by both 3 and 5 => FizzBuzz
// not divisible by both 3 and 5 => input
// not a number => 'not a number'

console.log(fizzBuzz(15))

function fizzBuzz(input){
  if ((input % 3 ===0) && (input % 5 ===0))
    return 'FizzBuzz'
  
  if ( typeof input != 'number')
  return 'not a number'
  if (input % 3 ===0)
  return 'Fizz'
  if (input % 5 ===0)
  return 'Buzz'
  if ((input % 3 !=0) && (input % 5 !=0))
  return input


}