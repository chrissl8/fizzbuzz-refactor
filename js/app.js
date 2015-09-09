/*
FizzBuzz App with Input and Functions
Chris Slaight, 2015
*/

//On document load, perform the following
$(document).ready(function() {

	//Call the following block of code on submit of form
	$('#submitValue').submit(function(e){
		e.preventDefault(); //preventDefault to prevent page refresh
		var value = $('#userInput').val(); //Grab user entered value
		doFizzBuzz(value); //Perform fizzbuzz operation below
		$('#userInput').val(""); //Clear user input field
		$('#userInput').focus(); //Set focus back on input
	})
});

//Function to perform fizz buzz operation which takes the max value as input
function doFizzBuzz(max) {

	//First check to see if an actual value is passed
	if(max == "" || max == null)
	{
		//Intentionally blank, as initially on pageload, there will be no value
	}

	//next, validate to make sure that an actual number is entered
	else if(isNaN(max))
	{
		$('#fizzbuzz').empty(); //Empty the fizzbuzz div object
		appendFizzBuzz("<p>Please enter a valid number</p>"); //Add P element telling user to enter a valid number
	}

	//Finally, perform fizzbuzz operation
	else
	{
		$('#fizzbuzz').empty();
		//Define loop that initializes 'number' as 1, counts until it hits the supplied value and increments by one
		for(var number = 1;number <= max;number++)
		{
			//If the  number is divisible by 3 and 5
			if( ((number % 3) == 0 ) && ((number % 5) == 0 ))
			{
				appendFizzBuzz("<p>FizzBuzz</p>"); //Append output is 'fizzbuzz'
			}
			//If the number is only divisible by 3
			else if( (number % 3) == 0)
			{
				appendFizzBuzz("<p>Fizz</p>"); //Append output is 'fizz'
			}
			//If the number is only divisible by 5
			else if( (number % 5 ) == 0)
			{
				appendFizzBuzz("<p>Buzz</p>"); //Append output is 'buzz'
			}
			//Finally, if the number is neither divisible by 3 or 5
			else
			{
				appendFizzBuzz("<p>" + number + "</p>"); //Append output is the number itself
			}
		}
	}
}

//Function to append supplied HTML to the fizzbuzz div
function appendFizzBuzz(html) {

	var div = document.getElementById("fizzbuzz"); //Grab fizzbuzz div into variable
	div.innerHTML += html; //append html inside div element
}