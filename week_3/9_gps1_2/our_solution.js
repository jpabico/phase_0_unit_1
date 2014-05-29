// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Jesson Foo
//  2. Wuang


// 0. "YOU SIGNED... WHO?!"




// 1. "Here they Come!"





// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

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

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"





// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection:
