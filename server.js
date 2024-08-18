const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
// 	console.log("Here");
// 	res.render("index", { text: "world" });
// })
// 
// app.get( '/game', (req,res) => {
// 	res.render("game");
// })

app.listen(3000);
