// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// --- Rescue Mission ---
// move upx2
// move right x2
// move down
// attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
this.moveDown();
 
// --- Grab the Mushroom ---
//move up
//move right
//move left
//move up
//attack
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// --- Drink Me ---
//move right
//attack
//move right
// move down
// move up
// move right
// attack
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
// --- Taunt the Guards ---

// move right
// break door
// move right
// taught Guards
// move left
// move left
// signal pheobe to attack
// move right
// tell pheobe to follow me
// move right x2
// move up
// move right
// taught Guards
// move down
// move right
// move up
// move right
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say('hey there!');
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// --- It's a Trap ---

// move down x2
// taught Guards
// move up x2
// signal for attack
this.moveDown();
this.moveDown();
this.say("hey you!");
this.moveUp();
this.moveUp();
this.say("attack!");

// --- Taunt ---

// Taught guard x4
this.say("Hey!");
this.say("Hey ugly");
this.say("Hey fatso");
this.say("Hey dummy");
this.say("you idiot!");

// --- Cowardly Taunt ---
// Run your soldier out where the ogres can hear you.
// Say something!
// Then run back behind the arrow towers for safety.
this.moveXY(50, 16);
this.say("hey dumbo!"); 
this.moveXY(63, 20);
this.moveXY(70, 10); 

// --- Commanding Followers ---
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me!")
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(65,45)
this.say("attack!")
// Make sure Tharin is safe!


// --- Mobile Artillary ---

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(48,40); //Move into range
this.attackXY(49,60); // shoot into center of first orc group
this.attackXY(47,53); // shoot at surviving ogre
this.attackXY(68,55); // shoot at center of second orc group
this.attackXY(60,47); // shoot at surviving ogre
 
 
// Reflection:
I really enjoyed this challenge since it was in the format of the game. However, I didnt feel like I gained that much knowledge.
I understood that using this was commamding whatever object I was clicking on, and that the following commmand
determined what it was that 'this' object would do. It was very fun to play with, and by far the most enjoyable
of any of the challenges to date. I did find typing out the same commands over and over again tedious, but that's what
you do in games so I'm not too upset about that.