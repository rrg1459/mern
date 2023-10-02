'use strict'

// Load node modules to create server
var express = require('express');
var bodyParser = require('body-parser');

// Run express (http)
var app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//
app.get('/', (req, res) => {
  return res.status(200).send({
    app: 'MERN',
    author: 'Rafael RodriguezR',
    url: 'http://localhost:3900/'
  }

  );
});

// Export module (current file)
module.exports = app;