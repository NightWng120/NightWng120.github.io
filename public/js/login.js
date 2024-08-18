function main(){
	newpage();
	//const fs = require("fs");
	//let scores = require("./highscores");
	const userName = document.createElement("INPUT");
	const email = document.createElement("INPUT");
	const password = document.createElement("INPUT");
	const anchor = document.createElement("a");
	const linebreak = document.createElement("br");
	const div = document.createElement("div");
	const style = document.createElement("style");
	style.textContent = `
	.bottom {
		position: absolute;
		bottom: 0;
		left: 0;
    }`;
	document.head.appendChild(style);

	userName.setAttribute('type', 'text');
	userName.setAttribute('id', 'username');
	userName.setAttribute('name', 'username');
	userName.setAttribute('placeholder', 'n1gg451np4r15');
	document.body.appendChild(userName);

	email.setAttribute('type', 'email');
	email.setAttribute('id', 'email');
	email.setAttribute('name', 'email');
	email.setAttribute('placeholder', 'SPants@gmail.com');
	document.body.appendChild(email);

	password.setAttribute('type', 'password');
	password.setAttribute('id', 'password');
	password.setAttribute('name', 'password');
	password.setAttribute('maxlength', '12');
	password.setAttribute('required', true);
	document.body.appendChild(password);

	div.id = "bottom";
	anchor.href = "game.html";
	anchor.textContent = "Mastermind";
	div.appendChild(anchor);
	document.body.appendChild(div);



}

newpage = () => {
	document.body.innerHTML = '';
	document.body.innerHTML = `<h1>Login/Signup Page</h1> <br>`;

}


/*I don't know what to write yet. This will be the login screen/signup screen for users.
  I think I"m just going to have basic text boxes written in js and then send the output
  to the json file and then update the corresponding highscore whenever the submit button
  is pushed.*/
main();
