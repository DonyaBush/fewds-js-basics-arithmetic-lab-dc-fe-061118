/*

Variables defined in the test suite:

- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!


 newID = 1000000000 + oldID
//console.log(oldID)
//console.log(currentAge)
var age = 'currentAge';

function currentAge() {
  var res = 'ageIsValid'
   res = res + Number.isInteger(123) + ": 123";
   res = res + Number.isInteger(0.0) + ": currentAge"
     document.getElementById("currentAge").innerHTML = res;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (20 - 0) + min;
}
console.log(Math.random());
