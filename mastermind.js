const prompt = require('prompt-sync')({sigint: true});

let colors = ["r", "o", "y", "g", "b", "v"];
const indices = [1,3,5,7];
loop = true;

while(loop){
	let tries = 10;
	let computer_colors = [];
//	computer_colors = ['o','o','o','o'];
	for(let i = 0; i < 4; i++){
		computer_colors.push(colors[Math.floor(Math.random()*6)]);
	}

//	console.log(computer_colors);
	console.log("Try to break the computer's code!");
	while(tries > 0){

		let memo = {};
		let pegs = String("| | | | |").split('');
		let white = 0;
		let black = 0;
		console.log("Tries: %d", tries);
		tries-=1;
		let userin = prompt("Enter your guess: ");

		if(userin === "q"){
			console.log("quitting...");
			tries = 0;
			continue;
		}

		if(userin === "ans"){
			console.log(computer_colors);
			tries+=1;
			continue;
		}

		userin = userin.split('');
		if(userin.length < 4){
			console.log("\n**Invalid guess**\n");
			tries++;
			continue;
		}
		for(const [index, element] of userin.entries()){
			if(element === computer_colors[index]){
				memo[index] = element;
				black++;
			}
		}

		for(const [index, element] of userin.entries()){
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

		console.log(`Black: ${black}\nWhite: ${white}`);

		for(let i = 0; i < black; i++){
			pegs[indices[i]] = '0';
		}
		if(white != 0){
			for(let i = black; i < white + black; i++){
				pegs[indices[i]] = 'O';
			}
		}
		if(black === 4){
			console.log("Player Wins!");
			tries = 0;
			continue;
		}
		if(tries === 0){
			console.log("\nComputer's Code: %s\nComputer Wins!", computer_colors.toString().replace(/,/g, ''));
			continue;
		}
		console.log("%s %s", userin.toString().replace(/,/g,''), pegs.toString().replace(/,/g,''));
	}

	let userin = prompt("Would you like to play again? y/n: ");
	if(userin.toLowerCase() === 'y'){
		let tries = 10;
		continue;
	}
	else if(userin.toLowerCase() === 'n'){
		loop = false;
		continue;
	}
}
