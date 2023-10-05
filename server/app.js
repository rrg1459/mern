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

// CORS to allow front-end requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Add prefixes to routes / Load routes
app.use('/api', article_routes);

// Export module (current file)
module.exports = app;