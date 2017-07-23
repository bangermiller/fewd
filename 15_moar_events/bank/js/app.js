console.log("Loaded bro");

var checkingBalance = 0;
var savingsBalance = 0;

var depositChecking = function(amount) {
  // add the amount to the checking balance
  checkingBalance = checkingBalance + amount;

  showChecking();

};

var withdrawChecking = function(amount) {
  // subtract the amount from the checking balance
  if (checkingBalance >= amount) {
    (checkingBalance = checkingBalance - amount); 
   
  }
  // show the checking balance
   showChecking();
};

var depositSavings = function(amount) {
  // add the amount to the savings balance
  savingsBalance = savingsBalance + amount;
  // show the savings balance
  showSavings();
};

var withdrawSavings = function(amount) {
  // subtract the amount from the savings balance
  if( savingsBalance >= amount) {
  savingsBalance = savingsBalance - amount;
  }
  // show the savings balance
  showSavings();
};

var showChecking = function() {
  $("#checking .balance h1").text(checkingBalance);
};

var showSavings = function() {
  $("#savings .balance h1").text(savingsBalance);
};

showChecking();
showSavings();

// ================ EVENTS ================== //

// When I click the Checking Deposit button...
var checkingDepositButton = $("#checking .deposit");


checkingDepositButton.click(function() {

var userInput = parseInt($("#checking .amount").val());

depositChecking(userInput);
});



// When I click the Checking Withdraw button...

// When I click the Savings Deposit button...

// When I click the Savings Withdraw button...