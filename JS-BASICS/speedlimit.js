checkSpeed(95)

function checkSpeed(speed){
  const speedLimit = 70
  const kmPerPoint = 5
  if (speed < speedLimit + kmPerPoint) console.log('ok')
  else{
    let points = Math.floor((speed - speedLimit) / kmPerPoint)
      if (points >= 12)
      console.log('Suspended')

      else

      console.log(points, 'Points')
}
}