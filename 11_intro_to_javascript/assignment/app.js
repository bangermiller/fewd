
var productPrice = parseInt ( prompt ("What is the price of the product you are buying?") );
var inventoryItemNumber = parseInt ( prompt ("How many of the items of this product are in inventory?") );
var money = parseInt ( prompt ("How much money do you have?") );
var itemsToBuy = parseInt ( prompt ("How many items do you wish to buy?") );

if(productPrice >= money && inventoryItemNumber > itemsToBuy) {
	console.log("Purchase complete!");
} else if(money < productPrice && inventoryItemNumber > itemsToBuy) {
	console.log ("Not enough money");
} else if  (productPrice >= money && inventoryItemNumber > itemsToBuy) {
  console.log("Not enough inventory");
}

	
