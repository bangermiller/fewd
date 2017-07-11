
var currentTemp = parseInt ( prompt ("What is the current temperature?"),10 );
var preferredTemp = parseInt (prompt ("What temperature would you like it to be?"),10);


if (preferredTemp > currentTemp) {
	console.log ("Turning off the A/C! It's too cold!");
} else if (preferredTemp < currentTemp) {
	console.log ("Turning on the A/C! it's boiling in here!");
} else if (preferredTemp == currentTemp) {
	console.log ("A perfect temperature. Keep the cool.");
}










