'use strict'

const validator = require('validator');
// const Article = require('../models/article');

const controller = {

  datosCurso: (req, res) => {
    const hi = req.body.hi;
    // in body x-www-form-urlencoded

    return res.status(200).send({
      app: 'MERN',
      author: 'Rafael Rodriguez',
      url: 'http://localhost:3900/',
      hi
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: 'I am the test action of the article controller'
    });
  },

  save: (req, res) => {

    // Collect parameters per post
    const params = req.body;

    // Validate data (validator)
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);

    } catch (err) {
      return res.status(200).send({
        status: 'error',
        message: 'Missing data to send !!!'
      });
    }

    if (validate_title && validate_content) {
      return res.status(200).send({
        article: params
      });
    } else {
      return res.status(200).send({
        status: 'error',
        message: 'The data is not valid !!!'
      });
    }
  }

};  // end controller

module.exports = controller;
