const fs = require("fs");
let scores = require("./highscores");
const userName = document.createElement("INPUT");
const email = document.createElement("INPUT");
const password = document.createElement("INPUT");

userName.setAttribute('type', 'text');
userName.setAttribute('id', 'username');
userName.setAttribute('name', 'username');
userName.setAttribute('placeholder', 'n1gg451np4r15');

email.setAttribute('type', 'email');
email.setAttribute('id', 'email');
email.setAttribute('name', 'email');
email.setAttribute('placeholder', 'SPants@gmail.com');

password.setAttribute('type', 'password');
password.setAttribute('id', 'password');
password.setAttribute('name', 'password');
password.setAttribute('maxlength', '12');
password.setAttribute('required', true);

newpage = () => {
	document.body.innerHTML = '';
	document.body.innerHTML <h1>Login/Signup Page</h1> <br>

}


/*I don't know what to write yet. This will be the login screen/signup screen for users.
  I think I"m just going to have basic text boxes written in js and then send the output
  to the json file and then update the corresponding highscore whenever the submit button
  is pushed.*/
