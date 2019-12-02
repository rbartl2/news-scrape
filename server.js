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

const PORT = process.env.PORT || 3000;

const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect Mongoose to database
mongoose.connect(db, function(error){
    if(error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection successful");
    }
});



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });