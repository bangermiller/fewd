var paragraph = $("<p>");
paragraph.html("I am a lonely paragraph.");
paragraph.appendTo("body");


var firstListItem = $("<li>");
firstListItem.html("first List item new");
firstListItem.appendTo(".first");

var secondListItem = $("<li>");
secondListItem.html("second List");
secondListItem.prependTo(".second");


var circle = $("<div>");
circle.addClass("circle");
circle.appendTo(".circles");
