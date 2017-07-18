// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">

	var itemListArray = [];
	var addItem = $("#new-item-button");
	addItem.on( "click", function(event) {
	var newItem = $("#new-item-text");
	var itemValue = ($(newItem).val());
	var newLi = $("<li></li>").text(itemValue);
	console.log(newLi);
	
	var toDo = $("#item-list-to-do");
	newLi.appendTo(toDo);
	newLi.innerHtml = "";
	console.log($("item-list-to-do"));
	itemListArray.push(newLi);
	console.log(itemListArray);
});
	
	
	var done = $("#done");
	done.on("click", function() {
	var doneList = $("item-list-done");
	for(var i = 0; i <itemListArray.length; i++) {
		itemListArray[i].append(doneList);
	}
	});
// 	<p>Wrap things in ca$h</p>

// 	<span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>


var addNewItem = function() {

};

// Move all items from "Todo" to "Done"

var completeAll = function() {

};

// Remove all items from "Done"

var clearAll = function() {

};

// Render Starting items

var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];


var renderAllItems = function(itemsToRender) {

};

// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {};

// Mark a single item as Done

var markAsDone = function(itemNumber) {};