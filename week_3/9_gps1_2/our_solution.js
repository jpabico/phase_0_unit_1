// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Jesson Foo
//  2. Qin Wuang


// 0. "YOU SIGNED... WHO?!"

function Client(name, age, quote) {
  this.name= name;
  this.age= age;
  this.quote= quote;
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

// 1. "Here they Come!"

var adam ={
  	name:"Adam Sandler",
  	age: 47,
  	quote: "That's your home! Are you too good for your home?!",
};
var kristen={
	name: "Kristen Bell",
	age: 33,
	quote: "Do you wanna build a snowman?",
};
var jim={
	name:"Jim Carrey",
	age: 52,
	quote: "...So you're telling me there's a chance? YEAH!",
};



// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client(name, age, quote) {
  this.name= name;
  this.age= age;
  this.quote= quote;
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showinfo=function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.quote);
  };
};
var shooter = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooter.showinfo();
// 4. "But wait, there's more!"

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showinfo=function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.quote);
  };
  this.showQuote=function(){
   console.log(this.quote);
  };
};
var shooter = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooter.showQuote();
// 5.  ** BONUS **
function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showInfo=function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.quote);
  };
  this.introduction=function(){
    console.log("my name is " + this.name + " and my age is " + this.age + " my favorite quote is " + this.quote );
  };
  this.showQuote=function(){
   console.log(this.quote);
  };
};


//  6.  Your Reflection:

// I thought this GPS was a bit more difficult because qin's native language was not english.
// The hardest part of this GPS was trying to designate a driver and a navigator sometimes I felt like
// he got frustrated because I didn't understand him and he would end up just typing what he meant.
// other times when I was navigating, he didn't know what I was saying and did whatever he wanted as well.
// Our guide, Emily Anderson was very helpful in helping us work out a few minor issues with node.
// overall this was one a harder GPS, but it provided a good learning experience in the sense that
// I realized it won't always be easy to work with people.

