var expressGratitude= function (name) {
	console.log("you have saved our lives, " + name);
	console.log("we are eternally grateful.");

};

expressGratitude("Mark"); //runs the function
expressGratitude("Bonnie");
expressGratitude("Ego");

// saving functions and returning the variable later
var join = function(firstWord, secondWord)  {
	var joinedWord = firstWord + " " + secondWord;

//store return value in variable
return joinedWord;
};

//use variable later in my program
var greeting = join("Hello", "there");
console.log(greeting);

// sumOfThree
var sumOfThree = function (a, b, c) {
	var total = a + b + c;

return total;
};

var productOfThree = function (num1, num2, num3) {
	var totalproduct = num1 * num2 * num3;

return totalproduct;
};


