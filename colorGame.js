var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numSquares = 3:numSquares = 6;
			reset();
		});
	}
}

function reset(){
	colors = generateRandomColor(numSquares);
	//pick a random color from the array
	pickedColor = pickColor();
	//change the display to match the picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//paint the squares accordingly
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function setUpSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click" , function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Try again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				resetButton.textContent = "New Colors"
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var pick = Math.floor(Math.random() * colors.length);
	return colors[pick];
}

function generateRandomColor(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0;i<num;i++){
	//generate a random color and push it into the array
	arr.push(randomColor());
}
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" between 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" between 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" between 0-255
	var b = Math.floor(Math.random() * 256);
	//generate "rgb(255, 0, 0)" using above parameters
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	//return the value of picked color
	return rgb;
}