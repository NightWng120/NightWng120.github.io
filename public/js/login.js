function main(){
	newpage();
	//const fs = require("fs");
	//let scores = require("./highscores");

	const userName = document.createElement("INPUT");
	const email = document.createElement("INPUT");
	const password = document.createElement("INPUT");
	const anchor = document.createElement("a");
	const div = document.createElement("div");
	const submit = document.createElement("button");

	userName.setAttribute('type', 'text');
	userName.setAttribute('id', 'username');
	userName.setAttribute('name', 'username');
	userName.setAttribute('class', 'input');
	userName.setAttribute('placeholder', 'n1gg451np4r15');
	document.body.appendChild(userName);

	email.setAttribute('type', 'email');
	email.setAttribute('id', 'email');
	email.setAttribute('name', 'email');
	email.setAttribute('class', 'input');
	email.setAttribute('placeholder', 'SPants@gmail.com');
	document.body.appendChild(email);

	password.setAttribute('type', 'password');
	password.setAttribute('id', 'password');
	password.setAttribute('name', 'password');
	password.setAttribute('class', 'input');
	password.setAttribute('maxlength', '12');
	password.setAttribute('required', true);
	document.body.appendChild(password);


	submit.setAttribute("type", "Button");
	submit.setAttribute("onclick", "submitInfo()");
	submit.setAttribute("style", "background-color: #ffffff;width: 100;height: 20px");
	submit.innerText = "submit";
	document.body.appendChild(submit);

	anchor.href = "game.html";
	anchor.textContent = "Mastermind";
	div.appendChild(anchor);
	div.style.position = "absolute";
	div.style.bottom = "20px";
	document.body.appendChild(div);
}

function newpage(){
	document.body.innerHTML = '';
	document.body.innerHTML = `<h1>Login/Signup Page</h1> <br>`;

}

function submitInfo(){
	const inputs = document.getElementsByClassName('input');
	if(inputs.length === 3){
		console.log(`Username: ${inputs[0].value}`);
		console.log(`Email: ${inputs[1].value}`);
		console.log(`Password: ${inputs[2].value}`);
	}
	//console.log(userName.value);
	//console.log(email.value);
	//console.log(password.value);
	main();
}


/*I don't know what to write yet. This will be the login screen/signup screen for users.
  I think I"m just going to have basic text boxes written in js and then send the output
  to the json file and then update the corresponding highscore whenever the submit button
  is pushed.*/
main();
