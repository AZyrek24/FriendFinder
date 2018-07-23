// Node packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// Parse application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/", function(err, res) {
  res.send("YOYOYOYOYO");
})

// Server listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT)
});