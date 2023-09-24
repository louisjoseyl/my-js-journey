// a program to cheek the speed of a car
// the normal speed limit is 70, so if the speed is 70 print okay
// if the speed is above 75 return 1  point
// 5km = 1 point
// make sure you retrun it to an integer using Math.floor(1.3)
// 12points -> suspended

checkSpeed(600)
function checkSpeed(speed){
    const speedlimit = 70
    const kmph = 5
  if (speed < speedlimit + kmph) console.log('ok')
  else{
    let points = Math.floor((speed - speedlimit) / kmph)
    if (points >= 12) console.log('Suspended')
    else console.log(points, 'points')
}
}