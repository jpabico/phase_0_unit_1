// I worked on this challenge by myself.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
  //***Rescue Mission*****

//move upx2
// move right x2
//move down x1
//attack
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
// *****Grab the Mushroom****

// move up
//move right
//move left
//move up
//attack
this.attackNearbyEnemy();

// ****Drink Me

//attack
this.attackNearbyEnemy();
//moveright
this.moveRight();
//move down
this.moveDown();
//move up
this.moveUp();
//move right
this.moveRight();
//attack
this.attackNearbyEnemy();

//**********Taunt the Gaurds*****
//moveright
this.moveRight();
//bust down door
this.bustDownDoor();
//move right
this.moveRight();
//say wassup
this.say("Hello")
//move left x2
this.moveLeft();
this.moveLeft();
//say attack;
this.say("Attack")
//get phoebe to fllow move right
this.moveRight();
//follow me
this.say("Follow me")

this.moveRight();
this.moveRight();
//move up
this.moveUp();
//move right
this.moveRight();
// say hello
this.say("Heylow")
//move down
this.moveDown();
//move right
this.moveRight();
//move up
this.moveUp();
//move right
this.moveRight();
  

//*****It's a Trap*****

//move down
this.moveDown();
this.moveDown();
//say wassup
this.say("wassup")
//move up
this.moveUp();
this.moveUp();  

//**break the trap, its a prison 


// **Taunt***

//say taunts 4x
this.say("Hey you");
this.say("Wanna fight?");
this.say("Come here!");
this.say("You scared?");

// **Cowardly taunt***
// Run your soldier out where the ogres can hear you.
this.moveXY(50,16);
// Say something!
this.say("Yolo");
// Then run back behind the arrow towers for safety.
this.moveXY(70,10);

//**Commanding Followers

// Saying anything with "follow" in it will get nearby soldiers to follow you
this.say("follow the leader");
// Saying anything with "attack" will send nearby troops into a battle mode.
this.say("Time to attack");
// Make sure Tharin is safe!
this.moveXY(62,46)
//taunt
this.say("OGRE!")
//move to safety
this.moveXY(60,63);

//***Mobile Artillery


//move into range
this.moveXY(57,32);
//attack
this.attackXY(67,52);
this.attackXY(63,46);
//move into range
this.moveXY(48,44);
//attack
this.attackXY(49,67);
this.attackXY(49,55);

 
 
 
 
 
 
 
// Reflection:
// Write your reflection here.