console.log('loaded!');

//Call $.val() on inputs to get the string value of your user's input
$('#submit-btn').click(function(){
	event.preventDefault();
	var city = $('#city-type');
	console.log('did it');

	 if 
	 	(city.val() == 'austin' ||
        city.val() == 'ATX' ||
        city.val() == 'Austin') { 
       	$('body').removeClass();
      	$('body').addClass('austin');
      console.log('austin submitted');	
	} 
	else if 
		(city.val() == 'SF' ||
        city.val() == 'San Francisco' ||
        city.val() == 'Bay Area') { 
       	$('body').removeClass();
      	$('body').addClass('sf');
      console.log('sf submitted');	
	}
	else if 
		(city.val() == 'LA' ||
        city.val() == 'LAX' ||
        city.val() == 'Las Angeles') { 
       	$('body').removeClass();
      	$('body').addClass('la');
      console.log('la submitted');	
	}
	else if 
		(city.val() == 'New York City' ||
        city.val() == 'New York' ||
        city.val() == 'NYC') { 
       	$('body').removeClass();
      	$('body').addClass('nyc');
      console.log('nyc submitted');	
	}
	else if
		(city.val() == 'Sydney' ||
        city.val() == 'SYD' ||
        city.val() == 'sydney') { 
       	$('body').removeClass();
      	$('body').addClass('sydney');
      console.log('sydney submitted');	
		
	}

});







//If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg