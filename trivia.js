var timer; 
var counter = 30;

// Counter is where it count downs
// We define a function to start everything: init();
// In the function, we are using the inbuilt setInterval() method to pass in the paramaters, a function and a duration: 1000ms (1 sec)

function init() {
	timer = setInterval(decTime,1000);
}

// Function is responsible for decrementing the counter variable
// Every time, the counter is decreased by 1 that each second passed
function decTime() {
	counter = counter - 1;

	// Referencing the p tag
	document.getElementById("tid").innerHTML = counter;

	// When time runs out, notify the user
	// Timer is reset with clearInterval

	if (counter <= 0) {
		clearInterval(timer);
		document.getElementById("tid").innerHTML = "Please submit answer".toUpperCase();
		return;
	}

var p = document.getElementById("tid");

// In the body, there is an onlick event button to call init() function

}

function check() {

	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var correct = 0;
	var wrong = 0;

	if (q1 == "Portuguese") {
		correct++;
	} else { 
		wrong--;
	}

	if (q2 == "Turkish") {
			correct++;
	} else { 
		wrong--;
	}
	
	if (q3 == "Chicken Wings") {
			correct++;
	} else { 
		wrong--;
	}

	if (q4 == "China") {
			correct++;
	} else { 
		wrong--;
	}

	document.getElementById("aftersubmit").style.visibility = "visible";
	document.getElementById("numbercorrect").innerHTML = "You got " + correct + " correct.";
	document.getElementById("numberwrong").innerHTML = "You got " + wrong + " wrong.";

	// Figure out why it's displaying a negative number for the number wrong. 

}
