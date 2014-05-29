// I paired [by myself] on this challenge.




// Pseudocode
// define a number that has to be 7
// define a string that says just open the door
// define allowed in as false
// define members as a group of 4 with john being first and mary being last 
// 
// 
// 


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Eric", "Sam", "Mary"];



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// I think the code is great. It is very simple and clean. 
// Don't think there is any further cleaning up or clarity that can be provided here.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I think reading the instructions was the first important thing as I realized I was trying to change the tests as opposed to writing code. 
// I did some searching on stack overflow but moreso on the tests. I found these similar to excel if statements and it therefore was pretty easy.
// Definitely learned a bunch in satisfying the tests and putting together my first java code. I thought this was a cool activity as I have heard of
// test based coding before. I really liked this challenge.
// 
// 
// 
// 


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

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Eric", "Sam", "Mary"];



assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  (secretNumber === 7),
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

