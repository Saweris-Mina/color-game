var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.getElementsByTagName("h1")[0];
var restButton = document.querySelector("#rest");
var msgDisplay = document.querySelector("#msg");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = ("");
    restButton.textContent = ("New Colors");
    h1.style.backgroundColor = "#4682b4";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = ("");
    restButton.textContent = ("New Colors");
    h1.style.backgroundColor = "#4682b4";
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

restButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = ("");    
    this.textContent = ("New Colors");
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#4682b4";
})

for(var i=0; i < squares.length; i++){
    // add colors to each square
    squares[i].style.backgroundColor= colors[i];
    // add event listeners to squares
    squares[i].addEventListener("click", function(){
        // grab clicked color
        var colorClicked = this.style.backgroundColor;
        // compare clicked with target color
        if(colorClicked === pickedColor){
            msgDisplay.textContent = "Correct!";
            restButton.textContent = "Play Again?";
            changeColor(colorClicked);
            h1.style.backgroundColor = colorClicked;
        }
        else{
            msgDisplay.textContent = "Try Again..";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor()) 
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}