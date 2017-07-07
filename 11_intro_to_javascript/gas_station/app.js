
	var gasLevel = parseInt (prompt ("how much gas in the tank"));
	var gasPrice = parseInt (prompt ("what's the gas price?"));
	
	if (gasLevel < 10 && gasPrice <4) {
		console.log("Stop here for gas");
	} else {
		console.log ("Keep Driving!");
	}