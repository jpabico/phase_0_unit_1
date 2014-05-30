gps1.2

// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Eric Shemtov
//  2. Garrett Dalton


// 0. "YOU SIGNED... WHO?!"

var aSandler = { 
    name : "Adam Sandler",
    age : 47,
    quote : "That's your home! Are you too good for your home?!",
    };

var kBell = {
    name : "Kristen Bell",
    age : 33,
    quote : "Do you wanna build a snowman?",
};

var jCarrey  = new Client();
  jCarrey.name = "Jim"



  
}

var clients = [jCarrey, aSchwarzeneggar, aSandler, kBell];


console.log(aSandler.name);
console.log(kBell['age'])

// 1. "Here they Come!"

var jCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance> YEAH!")

var aSchwarzeneggar = new Client("Arnold Schwarzeneggar", 66, "Run! Go! Get to dee Choppa!!!")

var wSmith = new Client("Will Smith", 46, "here come the men in black")


// 2. "TIME IS MONEY!"

function Client (whattheycallme, age, quote){
  this.name = whattheycallme;
  this.age = age;
  this.quote = quote;
  this.getName = function() {
    console.log("Name:" + whattheycallme);
  }
}
//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

function print(clients){
  for (i = 0; i < clients.length; i++){
      console.log ("Name:" + clients[i].name, "Age:" + clients[i].age, "Quote:" + clients[i].quote)
  }



// 4. "But wait, there's more!"
var aSandler = { 
    name : "Adam Sandler",
    age : 47,
    quote : "That's your home! Are you too good for your home?!",
    showName : function(){
        console.log("name:" + this.name);
    }
    }

   var aSandler = { 
    name : "Adam Sandler",
    age : 47,
    quote : "That's your home! Are you too good for your home?!",
    showName : function(){
        alert('name: ' + this.name);}}
    
// 5.  ** BONUS **
var myObject = {
    iAm : 'an object',
    whatAmI : function(){
        alert('I am ' + this.iAm);
    }
}

//  6.  Your Reflection:

// This gps was definitely a challenge as both Garrett and I hadn't made it to far through this weeks assignments by thursday.
// We still were able to tackle the issue and I think coming up wit hte method and functions, while challenging, we were able to get through with external resources and a bit of guidance by emily. 
// I definitely learned a ton especially with regards to syntax and garrett's thinking style also opened up my mind a bit. We did pretty well switching off between driver and navigator and i think overall, we had a great sesion.'
