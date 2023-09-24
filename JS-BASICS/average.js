// function to calculate the average grade
const marks = [80, 80, 80]
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
console.log(calculateGrade(marks))
function calculateGrade(marks){
  const average = calculateAverage(marks)
  if(average < 60) return ' F STUDENT'
  if(average < 70) return ' D STUDENT'
  if(average < 80) return ' C STUDENT'
  if(average < 90) return ' B STUDENT'
  if(average < 100) return ' A STUDENT'
}

function calculateAverage(array){
  let sum = 0
  for(let value of array)
  sum +=value;
  return sum / array.length
  
}