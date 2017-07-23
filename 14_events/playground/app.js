console.log("loaded, bro.");

$(".potato-generator").click(function() {
var potatoList = $(".potatoes");

var newPotato = $("<li>");
newPotato.html("potato");

newPotato.appendTo(potatoList);

});

$(".disappear").click(function(){

$(this).remove();

});

$(".alert-button").click(function() {
var userInput = $(".alert-input").val();
alert(userInput);
});

$(".alert-form").submit(function () {
event.preventDefault();

var userInputHere = $(".alert-form-input").val();
alert(userInputHere);

});

$("#change-input").change(function(){

alert("oh no, you touched the golden egg");

});
$(".pokemon").click(function(){
	var pokemon = $(this);
	console.log(pokemon.html());
});

$(".capital-button").click(function(){
var upperCase = $("#capital-input").val();
console.log(upperCase.toUpperCase());

});
$(".list-button").click(function(){
var userInputName = $(".list-input").val();



userInputName.appendto();

});



