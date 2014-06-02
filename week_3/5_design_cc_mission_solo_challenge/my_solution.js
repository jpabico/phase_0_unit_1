// This is a solo challenge

// Your mission description:
// hero must defeat monster with attack command
// 

// Pseudocode
// create object hero
// create object monster
// create attack command
// 

// Initial Code

var hero = {
	health:100;
	attack:20;
}

var monster = {
	health:50;
	attack:10;
}

hero.attack = function() {
	if (monster.health > 0) {
		monster.health -= hero.attack
		if (monster.health <= 0) {
			console.log("You have defeated the monster")
		}
	}
	return monster.health;
}


// Refactored Code


var hero = {
	health:100;
	attack:20;
}

var monster = {
	health:50;
	attack:10;
}

hero.attack = function() {
	if (monster.health > 0) {
		monster.health -= hero.attack
		if (monster.health <= 0) {
			console.log("You have defeated the monster")
		}
	}
	return monster.health;
}



// Reflection
// 
// This assignment was rather difficult for me because I did not understand the directions very well.
// Initially I started by watching a bunch of youtube videos on how to make javascript games.
// This proved to be helpful, but also far too much for what the directions appeared to ask.
// Additionally, it was so much that I realized I didn't really know what I was writing if I
// made a game as advanced as the ones I had seen in the videos. I ended up writing a very simple mission
// where a hero simply slays a monster using the function attack.
// 