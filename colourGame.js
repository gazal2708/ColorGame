var numSquares=27;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetColors=document.getElementById("new")
var modeButton=document.querySelectorAll(".mode");

for (var i =0; i<modeButton.length; i++) {
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		modeButton[2].classList.remove("selected");
		modeButton[3].classList.remove("selected");

		this.classList.add("selected");

		//figure out how many colors to show;
		//pick new colors;
		//pick a new picked color;
		//update the page to show the changes;
		
		 if(this.textContent==="Easy"){
			numSquares=3;
		}
		 	else if(this.textContent==="Hard"){
				numSquares=6;
			}
			else if(this.textContent==="Super Hard"){
				numSquares=12;
			}
			else{
				numSquares=27;
			}

			reset();
		});
	
}

colorDisplay.textContent=pickedColor;

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetColors.textContent="New Colors!";
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++)
{
	//add initial colors to squares;
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
	}
	
}
h1.style.backgroundColor="steelblue"

}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares=3;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares=6;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
		
// 			squares[i].style.backgroundColor=colors[i];
		
// 			squares[i].style.display="block";
// 		}
	
// });


resetColors.addEventListener("click",function(){
reset();
});

for(var i=0;i<squares.length;i++)
{
	//add initial colors to squares;
	squares[i].style.backgroundColor=colors[i];
	//add click listeners to squares;
	squares[i].addEventListener("click",function(){
		//grab color of clicked square;
		var clickedColor= this.style.backgroundColor;
		
		//compare color with pickedColor;
		if(clickedColor===pickedColor)
		{
			resetColors.textContent="Play Again?";
			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColor(color){
	//loop through each square;
	for(var i=0;i<squares.length;i++)
	//change color of each square one by one through loop to match the correct color;
	squares[i].style.background=color;
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];

}

function generateRandomColors(num)
{
	//take an empty array
	var arr=[];
	//repeat num times
	for(var i=0;i<num;i++){
		//get random color and push them into this empty array;
		arr.push(randomColor());
	}
		return arr;
		//return array;
	
}

function randomColor(){
	var rand1=Math.floor(Math.random()*256);
	var rand2=Math.floor(Math.random()*256);
	var rand3=Math.floor(Math.random()*256);
	//pick a red color from 0 to 255
	//pick a green color from 0 to 255
	//pick a blue color from 0 to 255
	return "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
}