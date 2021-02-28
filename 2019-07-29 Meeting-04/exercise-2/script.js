//	Calculate and display the result of 5 square (5 * 5).
function showResultOfMultiply5By5() {
	var base = 5;
	var evaluator = 2;
	var result = Math.pow(base, evaluator);
	var str = "Power of " + base + " by " + evaluator + " is " + result;
	document.getElementById("display-result").innerHTML=str;
}

/*	
	Show an alert window with:
	1.	The result of dividing 100 by 8.
	2. The reminder of dividing 100 by 8.
 */
function showResultOfDivisionAndModulu() {
	var dividee = 100;
	var divider = 8;
	
	//	First I find the reminder
	var reminder = 100 % 8;
	
	//	Subtracting the reminder from the dividee to receive an integer
	var result = (100 -  reminder) / 8;
	
	window.alert("Dividing " + dividee + " by " + divider 
						+ " result is " + result 
						+ " and reminder is " + reminder);
}

/*
	Concatinate the words "Hello" and "World" and 
	output the combined string to console's log.
*/
function concatinateTwoWords() {
	var logMessage = "Hello";
	logMessage += ' ';
	logMessage += "World!";
	console.log(logMessage);
}
