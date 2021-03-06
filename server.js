// Node packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// Parse application
app.use(express.static('./app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Server listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT)
});