
nysc();
function nysc(){
  let userName = 'Louis Joseph';
  let nationality = 'Nigeria';
  let lowerNationality = nationality.toLowerCase();
  let age = 45;
  let confirm = (age <= 30) && (lowerNationality === 'nigeria') ? 'ELIGIBLE FOR NYSC' : 'NOT ELIGIBLE';

  console.log('FULL NAME: ', userName);
  console.log('NATIONALITY: ', nationality);
  console.log('ELIGIBILITY STATUS: ', confirm);
}