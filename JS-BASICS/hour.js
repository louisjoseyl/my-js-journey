// // hour 
// // if the hour is between 6am and 12pm : good morning 
// // if hour is between 12 pm and 6pm : good afternoon
// //otherwise: good evening
greet (18)
function greet(hour){
  if(hour < 12)
  console.log('Good morning')
  else if(hour < 18)
  console.log('good afternoon')
  else console.log ('good evening')
}