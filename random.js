//creating an REGULAR function to create a random number
function alertRegularRandom() {
  var randomRegNumber = Math.floor( Math.random() * 6 ) + 1;  
  document.write('<p> This is the Regular function result: '+ randomRegNumber + '</p>');
}

alertRegularRandom();
alertRegularRandom();

//creating an ANONYMOUS function via a function expression to create a random number
var alertAnonymousRandom = function () {
    var randomAnonNumber = Math.floor(Math.random() * 6 ) + 1;
    document.write('<p> This is the Anonymous function result: '+ randomAnonNumber + '</p>');
};

alertAnonymousRandom();
alertAnonymousRandom();

//RETURNING a function to create a random number
//As soon as the function encounters a return statement it exits the function and returns a value.
function alertRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

document.write('<p>The number returned by the fuction is: ' + alertRandomNumber() + '</p>');
document.write('<p>The number returned by the fuction is: ' + alertRandomNumber() + '</p>');
console.log('The number returned by the fuction is: ' + alertRandomNumber());
console.log('The number returned by the fuction is: ' + alertRandomNumber());

//What year is it? Function
//function gets stored in variable
function getYear() {
  var year = new Date().getFullYear();
  return year;
}

var yearToday = getYear();

document.write('<p>This current year is: ' + yearToday + '</p>');
document.write('<p>In 5 years, it will be: ' + (yearToday + 5) + '</p>');

//When you call a function you pass a VALUE called an ARGUMENT which is stored in a PARAMETER in the function.
function newRandomNumber(upper) {
  var randomNewNumber = Math.floor(Math.random() * upper) + 1;
  return randomNewNumber;
}

document.write('<p>This passes an argument to the fuction: ' + newRandomNumber(6) + '</p>');

//Passing more than one ARGUMENT
function orderingStarbucks(drink, pastry) {
  document.write('<p>I would like to order a ' + drink + ' and ' + pastry + '</p>');
}

orderingStarbucks('coffee','cookies');

//Catching and throwing an ERROR
function newFunction(upper, lower) {
  if (isNaN(upper) || isNaN(lower)) {
    throw new Error('Error message: is not a number');
  } return Math.floor(Math.random() * (upper + lower - 1) + lower);
}

console.log(newFunction(100, 6));
console.log(newFunction(5000, 500));
console.log(newFunction(30, 'five'));
