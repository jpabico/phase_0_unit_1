// I worked [by myself, with:] on this challenge

// Your mission description:
// get new weapon, drop old weapon
// John is cool and all, but he uses a pretty wimpy sword. He encounters a revolutionary new weapon called a baseball bat
// and has to move around a maze to pick it up and get ride of his old weapon.
// 

// Pseudocode
// create john
// create bat
// move john to pickup bat
// 
// 
// 
// 

// Initial Code

var sword {
	attributes: "sharp and swift",
}

var john {
	id: "John",
	team: "Humans",
	weapon: sword,
	pos:
		x: 20,
		y: 20,
}

var baseballBat {
	attributes: "clunky and heavy",
	location: batLocation,
}

var batLocation {
	x: 50,
	y: 50,
}

var getBat {
	position: batLocation,
	weapon: baseballBat,
}

john.getBat

john.weapon


// Refactored Code

var sword {
	attributes: "sharp and swift",
}

var john {
	id: "John",
	team: "Humans",
	weapon: sword,
	pos:
		x: 20,
		y: 20,
}

var baseballBat {
	attributes: "clunky and heavy",
	location: batLocation,
}

var batLocation {
	x: 50,
	y: 50,
}

var getBat {
	position: batLocation,
	weapon: baseballBat,
}

john.getBat

john.weapon



// Reflection
// 
// // This was a bit challenging as I felt a bit rusty after a few days off. I also
// didn't see codecombat as that good of a guide as it was tough to see their underlying code.
// I think that something along the lines of this should work, althought integrating a function would be better.
// Definitely need to work on this a bit.
// 
// 
// 
// 
// 
// 