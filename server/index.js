'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

mongoose.Promise = global.Promise; // Add promise to mongodb
mongoose.connect('mongodb://localhost:27017/api_rest_blog')
  .then(() => {
    console.log('Connection successfully!!!');

    // Create server and listen to HTTP requests
    app.listen(port, () => {
      console.log('Server running on http://localhost:' + port);
    });
  });