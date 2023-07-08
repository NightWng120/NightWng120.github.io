CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE table highscores(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20),
	score INT
);

CREATE table accounts(
	email_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(50),
	password VARCHAR(20)
);

INSERT INTO highscores(name, score) VALUES("Trever", 8);
INSERT INTO highscores(name, score) VALUES("Jonathon", 3);
INSERT INTO highscores(name, score) VALUES("Noah", 4);
INSERT INTO highscores(name, score) VALUES("Kaylee", 5);
INSERT INTO highscores(name, score) VALUES("Elliot", 2);

SELECT * FROM highscores;

INSERT INTO accounts(email, password) VALUES("treverholmes9@gmail.com","Minecraft3");
INSERT INTO accounts(email, password) VALUES("hoover122678@gmail.com","Buster12");
INSERT INTO accounts(email, password) VALUES("noahhoovey@gmail.com","Imgay1337");
INSERT INTO accounts(email, password) VALUES("keldridge82802@gmail.com","skittles82802");
INSERT INTO accounts(email, password) VALUES("bandkid51608","fortnite12");

SELECT * FROM accounts;
