
var productPrice = parseInt ( prompt ("What is the price of the product you are buying?"),10 );
var inventoryCount = parseInt ( prompt ("How many of the items of this product are in inventory?"),10 );
var money = parseInt ( prompt ("How much money do you have?"),10 );
var itemsToBuy = parseInt ( prompt ("How many items do you wish to buy?"),10 );


if (inventoryCount > 0 && inventoryCount >= itemsToBuy) {
	if (money >= productPrice) {
		console.log ("purchase complete!");
	} else if (money < productPrice) {
		console.log ("Not enough money");
	}	
} else {
		console.log ("Not enough inventory");
}



