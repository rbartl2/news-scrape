// Dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");

// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

var router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + '/public'));

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);


// Require all models
// var db = require("./models");

var PORT = 3000;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoHeadlines", { useNewUrlParser: true });



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });