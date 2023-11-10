// app.js
"use strict";
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


// Create an Express application
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('home');
});

app.get("/success", function (req, res) {
    res.render("success");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get("/failure", function (req, res) {
    res.render("failure");
});

// Set up the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
