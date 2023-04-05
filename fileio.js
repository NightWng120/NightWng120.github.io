const fs = require("fs");
const prompt = require('prompt-sync')({sigint: true});
let scores = require("./highscores");
console.log(scores['Trever']);
name = prompt("Enter Name: ");
if(name === "clear"){
	scores = [];
	fs.writeFile("highscores.json", JSON.stringify(scores), err => { 
		if(err) throw err;
	});
	console.log("cleared file");
}
else {
	if(name in scores){
		scores[name] = score;
		console.log(scores);
	}
	else{
		const score = Math.floor(Math.random()*10);
		scores.push({user: name, score: score});
		console.log(scores);
		fs.writeFile("highscores.json", JSON.stringify(scores), err => { 
			if(err) throw err;
		});
	}
}
