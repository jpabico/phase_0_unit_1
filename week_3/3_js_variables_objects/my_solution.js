// I paired with Katia on this challenge.




// Pseudocode
// define secretNumber
// define password
// define allowedIn 
// define members set John as member 1 and Mary as member 4


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Jesson", "Katia", "Mary"];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//
// This code is already in its simplest form. 
// We simply defined the variables that need to be tested.
// There is no need to loop, or include any logic.
// 
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// What we found worked for us was a sort of trial and error method. 
// We would type out a line of code and run the file to see if it would be fixed.
// One of the problems we faced was not knowing what we were supposed to do. Once we
// got the ball rolling, we figured things out pretty quickly. Two questions we had when
// working on this challenge was what assert was, and what throw was. At this point, there
// are no real concepts we struggled with, but we learned about how the assert function works.
// A trick that we learned was how to deal with errors in JS. I feel fairly confident with all 
// four competencies. I enjoyed trying solve the errors in the challenge because it was like
// solving a puzzle.
// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

