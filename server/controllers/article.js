'use strict'

const validator = require('validator');
const Article = require('../models/article');

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

      //Create the object to save
      const article = new Article();

      // Assign values
      article.title = params.title;
      article.content = params.content;
      article.image = null;

      // Save the article
      article.save()
        .then(() => {
          return res.status(200).send({
            status: 'success',
            article
          });
        })
        .catch((error) => {
          return res.status(404).send({
            status: 'error',
            message: 'The article has not been saved !!!'
          });
        });
    } else {
      return res.status(200).send({
        status: 'error',
        message: 'The data is not valid !!!'
      });
    }
  },

  getArticles: (req, res) => {

    const last = req.params.last;
    const query = Article.find({}).sort({ "_id": -1 }) // Order from largest to smallest
    if (last || last != undefined) {
      query.limit(3);
    }

    query
      .then((articles) => {
        if (!articles.length) {
          return res.status(404).send({
            message: 'Articles not found !!!'
          })
        }
        return res.status(200).send({
          status: 'success',
          articles
        })
      })
      .catch((error) => {
        return res.status(500).send({
          status: 'error',
          message: 'Articles not found !!!'
        });
      });
  },

  getArticle: async (req, res) => {

    // Recoger el id de la url
    const articleId = req.params.id;

    // Comprobar que existe
    if (!articleId || articleId == null) {
      return res.status(404).send({
        status: 'error',
        message: 'No existe el articulo !!!'
      });
    }
    // Buscar el articulo
    const article = await Article.findById({"_id": articleId});
    return res.status(200).send({
      status: 'success',
      article
    })
  }

};  // end controller

module.exports = controller;
