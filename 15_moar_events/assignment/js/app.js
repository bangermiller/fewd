console.log("loaded!");

//Call $.val() on inputs to get the string value of your user's input
$("#submit-btn").click(function(){
	event.preventDefault();
	var city = $("#city-type").val();
	console.log('did it');

	if (city = $("austin")) {
	$("body").css("background-image", "url(file:///Users/bonnie/Desktop/code/fewd/15_moar_events/assignment/images/austin.jpg)");
	} 

	else if (city = $("SF")) {
	$("body").css("background-image", "url(file:///Users/bonnie/Desktop/code/fewd/15_moar_events/assignment/images/sf.jpg)");
	} 
});

//Create if / else if / else conditionals to control the flow of your application


//If a user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg

//If a user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg

//If a user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg

//If a user submits "Austin" or "ATX" make the background of the page austin.jpg

//If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg