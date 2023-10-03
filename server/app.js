'use strict'

// Load node modules to create server
const express = require('express');
const bodyParser = require('body-parser');

// Run express (http)
const app = express();

const article_routes = require('./routes/article');


// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Add prefixes to routes / Load routes
app.use('/api', article_routes);

// Export module (current file)
module.exports = app;