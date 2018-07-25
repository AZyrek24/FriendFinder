// Node packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// Parse application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(express.static('./app/public'));
// Server listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT)
});