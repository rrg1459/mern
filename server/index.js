'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Add promise to mongodb
mongoose.connect('mongodb://localhost:27017/api_rest_blog')
  .then(() => {
    console.log('Connection successfully!!!');
  });