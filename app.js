//require the necessary libraries
var express = require('express');
var expressConfig = require('./config/express');
var routes = require('./routes');

// Setup server
var app = express();
//set the config
expressConfig(app);
//add the routes
routes(app);
//export app
module.exports = app;
