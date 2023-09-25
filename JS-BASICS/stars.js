// stars rows
// when you pass a function it should display asterik 
// with the numbers of asterik on it
console.log(showStar(10))
 function showStar(rows){
  for(let row =1; row <= rows; row++){
    let pattern = ''
    for(let i =0; i<row; i++)
      pattern += '*';
    console.log(pattern)
  }
 }