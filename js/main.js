const colors = ["red", "orange", "yellow", "green", "blue", "violet"];
var computer_colors = [];
var attempts = 10;
for(let i = 0; i < 4; i++){
	computer_colors.push(colors[Math.floor(Math.random()*6)]);
}
console.log(computer_colors);
function main(){
	newPage();
	const colors = ["red", "orange", "yellow", "green", "blue", "violet"];
	const colorButtons = document.getElementById("colors");
	const controlButtons = document.getElementById("controls");
	const linebreak = document.createElement("br");
	for(color of colors){
		const button = document.createElement('button');
		button.setAttribute('type', 'Button');
		button.setAttribute('onclick', 'addColor(\'' + color + '\')');
		button.setAttribute('style', 'background-color: ' + color + ';width: 50px;height: 20px');
		colorButtons.append(button);
	}
	document.body.appendChild(linebreak);
	document.body.appendChild(linebreak);
	printSquares();
	const submit = document.createElement('button');
	submit.setAttribute("type", "Button");
	submit.setAttribute("onclick", "submit()");
	submit.setAttribute("style", "background-color: #ffffff;width: 100;height: 20px");
	submit.innerText = "submit";
	controlButtons.append(submit);

	const clear = document.createElement('button');
	clear.setAttribute("type", "Button");
	clear.setAttribute("onclick", "clearScreen()");
	clear.setAttribute("style", "background-color: #ffffff;width: 100;height: 20px");
	clear.innerText = "clear";
	controlButtons.append(clear);

}

function newPage(){
	document.body.innerHTML = '';
	document.body.innerHTML =`<h1>Mastermind</h1> <p> <a href="rules.html">Rules</a> </p> <h3 id="attempts">Attempts Left: ${attempts}</h3><div id="colors"></div> <br> <div id="playArea"></div> <br> <div id="controls"></div>` 
}

function printSquares(){

	const div = document.getElementById('playArea');
	const linebreak = document.createElement('br');
	const space = document.createTextNode('\xa0');
	for(let i = 0; i < 4; i++){
		const guess = document.createElement('CANVAS');
		guess.setAttribute("class", "currentGuess");
		guess.setAttribute("id", "square");
		guess.setAttribute("width", "20");
		guess.setAttribute("height", "20");
		guess.setAttribute("style", "border: 1px solid black;background-color: #ffffff");
		div.append(guess);
		div.append(space);
	}

	div.append(space);

	for(let i = 0; i < 4; i++){
		const peg = document.createElement('CANVAS');
		peg.setAttribute("class", "currentPeg");
		peg.setAttribute("id", "square");
		peg.setAttribute("width", "20");
		peg.setAttribute("height", "20");
		peg.setAttribute("style", "border: 1px solid black;background-color: #ffffff");
		div.append(peg);
	}
	div.append(linebreak);
}

function reset(){
		main();
}

function clearScreen(){
	const squares = document.getElementsByClassName('currentGuess');
	for(square of squares){
		if(square.style.backgroundColor != "rgb(255, 255, 255)"){
			square.style.backgroundColor = "rgb(255, 255, 255)";
		}
	}
}

function addColor(color){
	const button = document.getElementById(color);
	const squares = document.getElementsByClassName('currentGuess');

	//console.log("We out here as %s", color);
	for(square of squares){
		if(square.style.backgroundColor === "rgb(255, 255, 255)"){
			square.style.backgroundColor = color;
			break;
		}
	}
}

function submit(){

	let memo = {};
	let black = 0;
	let white = 0;
	let pegs = [];
	let guessColors = [];
	const currentGuesses = document.querySelectorAll(".currentGuess");
	const h3 = document.getElementById("attempts");


	for(let i = 0; i < 4; i++){
		console.log(currentGuesses[i].style.backgroundColor);
		if(currentGuesses[i].style.backgroundColor == 'rgb(255, 255, 255)'){
			clearScreen();
			alert("Not enough colors");
			return;
		}
		guessColors.push(currentGuesses[i].style.backgroundColor);
	}

	console.log(h3);

	attempts-=1;
	h3.innerHTML = `Attempts Left: ${attempts}`;

	for(const [index, element] of guessColors.entries()){
		if(element === computer_colors[index]){
			memo[index] = element;
			black++;
		}
	}

	for(const [index, element] of guessColors.entries()){
		if(computer_colors[index] === element){
			continue;
		}
		for(const [num, letter] of computer_colors.entries()){
			if(num in memo){
				continue;
			}
			else if(element === letter){
				white++;
				memo[num] = letter;
				break;
			}
		}
	}

	for(let i = 0; i < black; i++){
			pegs.push("black");
	}
	if(white != 0){
		for(let i = black; i < white + black; i++){
			pegs.push("grey");
		}
	}
	console.log(pegs);

	for(let i = 0; i < 4; i++){
			const currentGuess = document.querySelector(".currentGuess");
			const currentPeg= document.querySelector(".currentPeg");
			currentPeg.setAttribute("style","border: 1px solid black;background-color: " + pegs[i]);
			currentGuess.setAttribute("class", "previousGuess");
			currentPeg.setAttribute("class", "previousPeg");
	}
	
	if(black === 4){
		//console.log("Player Wins!");
		computer_colors = [];
		attempts = 10;

		for(let i = 0; i < 4; i++){
			computer_colors.push(colors[Math.floor(Math.random()*6)]);
			console.log(computer_colors[i]);
		}
		const divControls = document.getElementById('controls');
		const reset = document.createElement('button');
		const h2 = document.createElement('H2');
		h2.innerText = "Player Wins!";
		reset.setAttribute("type", "Button");
		reset.setAttribute("onclick", "reset()");
		reset.setAttribute("style", "background-color: #ffffff;width: 100;height: 20px");
		reset.innerText = "reset";
		divControls.appendChild(reset);
		document.body.appendChild(h2);
		//alert("Player Wins!");
		return;
	}
	else if(attempts == 0){
		computer_colors = [];
		attempts = 10;

		for(let i = 0; i < 4; i++){
			computer_colors.push(colors[Math.floor(Math.random()*6)]);
			console.log(computer_colors[i]);
		}
		const divControls = document.getElementById('controls');
		const reset = document.createElement('button');
		const h2 = document.createElement('H2');
		h2.innerText = "Computer Wins :(";
		reset.setAttribute("type", "Button");
		reset.setAttribute("onclick", "reset()");
		reset.setAttribute("style", "background-color: #ffffff;width: 100;height: 20px");
		reset.innerText = "reset";
		divControls.appendChild(reset);
		document.body.appendChild(h2);
		return;
	}
	else{
		printSquares();
	}
}

main();
