var startButton = document.getElementById("start");
startButton.setAttribute("style", "color:blue; background-color:aqua; font-size:30px; font-weight:bolder; display:flex; justify-content:center; text-align:center;"); 

var guess = document.getElementById("guess");

var timeX = document.querySelector(".time");

timeX.setAttribute("style", "color:blue; background-color:aqua; font-size:30px; font-weight:bolder; display:flex; flex-wrap:wrap; justify-content:center; ");

var secondsLeft = 30;
var win = document.getElementById("result");

var loose = document.getElementById("result");



startButton.addEventListener ("click", function () {
	var timer = setInterval(function() {
		secondsLeft--;
		timeX.textContent = secondsLeft + " seconds left";
		if (secondsLeft === 0) {
			clearInterval(timer);
			timeX.textContent = "Time ended!";
			sendMessage();
}
}, 1000);

});


function sendMessage() {
	win.textContent = "You won!"
	result.appendChild(win);
}
