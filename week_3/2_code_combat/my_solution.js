// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Rescue
 
move right 
move right 
move down
move down
attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();
 
 // mushroom
 up
 right
 left 
 up
 attack
 
 this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp()
this.attackNearbyEnemy();
 
 // drink me
 right
 attack
 right
 down
 up
 right
 attack
 
 this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
 // taunt
 
 right
 up
 say something long
 down
 right
 right
 up
 right
 say
 down
 down
 right
 up 
 right
 
 this.moveRight();
this.moveUp();
this.say("Hey, Follow me.");
this.moveDown();
this.moveRight();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.say("hey fellaz");
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
// its a trap 
 down
 down
 say something
 up
 up
 
 this.moveDown(20);
this.say("hey suckas");
this.moveUp(20);
 
 // taunt
 
 say something 4x unique  items
 
 this.say("sup punk");
this.say("follow me follow me follow me follow me follow me follow me follow me follow me follow me");
this.say("you");
this.say("sucke");

 
 // cowardly taunt
 
 move to bad coordinate
 say a taunt
 move to safety
 
 this.moveXY(63,20);
this.say("sup");
this.moveXY(70,10);

 // commanding followers
 say follow me
 move to enemy coords
 say attack
 move to safety
 
 this.say("follow me");
this.moveXY(62, 32);
this.say("attack boys");
this.moveXY(75, 63);
 
 // mobile artillery
 move in to range
 attack
 move in to middle range
 attack right
 attack right but closer to turret
 attack left
 attack left but closer to turret
 
 this.moveXY(30, 26); 
this.attackXY(46, 5); 
this.moveXY(53, 38);
this.attackXY(69, 57);
this.attackXY(63, 47);
this.attackXY(49, 67);
this.attackXY(50, 52);
 
// Reflection:
// Write your reflection here.
