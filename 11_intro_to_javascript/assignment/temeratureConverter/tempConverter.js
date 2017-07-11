
var temperatureInput = parseInt ( prompt ("What is the temperature you would like to convert?"),10 );
var temperatureScale = prompt ("Would you like to convert to C or F?");

if (temperatureScale == "C" ) {
	console.log (temperatureInput * 9/5 + 32);
} else if (temperatureScale == "F") {
	console.log (temperatureInput * 1.8 + 32);
}











