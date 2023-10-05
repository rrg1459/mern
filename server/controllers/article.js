'use strict'

const validator = require('validator');
var fs = require('fs');
var path = require('path');

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

  getArticle: (req, res) => {

    const articleId = req.params.id;
    const query = Article.findById(articleId)

    query
      .then((article) => {
        if (!article) {
          return res.status(404).send({
            message: 'Article not found !!!'
          })
        }
        return res.status(200).send({
          status: 'success',
          article
        })
      })
      .catch((error) => {
        return res.status(500).send({
          status: 'error',
          message: 'Problem with article ID !!!'
        });
      });
  },

  update: (req, res) => {

    const articleId = req.params.id;
    const params = req.body;

    try {

      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);

      if (validate_title && validate_content) {
        Article.findOneAndUpdate({ _id: articleId }, params, { new: true })
          .then((article, err) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: "Failed to return the article",
              });
            }
            if (!article) {
              return res.status(404).json({
                message: "Article not found",
              });
            }
            return res.status(200).send({
              status: 'success',
              article
            });
          })
          .catch((err) => {
            res.status(500).json({
              status: "Error",
              message: 'Problem with article ID !!!'
            });
          })
      } else {
        return res.status(500).send({
          status: 'error',
          message: 'The data is not valid !!!'
        });
      }

    } catch (err) {
      return res.status(500).send({
        status: 'error',
        message: 'Missing data to send !!!'
      });
    }
  },

  delete: (req, res) => {

    const articleId = req.params.id;

    try {

      Article.findOneAndDelete({ _id: articleId })
        .then((article, err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "Failed to return the article",
            });
          }
          if (!article) {
            return res.status(404).json({
              message: "Article not found",
            });
          }
          return res.status(200).send({
            status: 'success',
            message: "Article deleted",
            article
          });
        })
        .catch((err) => {
          res.status(500).json({
            status: "Error",
            message: 'Problem with article ID !!!'
          });
        })

    } catch (err) {
      return res.status(500).send({
        status: 'error',
        message: 'Missing data to send !!!'
      });
    }
  },

  upload: (req, res) => {
    // Configure module connect multiparty router/article.js (done)

    var file_name = 'Imagen no subida...';

    if (!req.files) {
      return res.status(404).send({
        status: 'error',
        message: file_name
      });
    }

    var file_path = req.files.image.path;

    // * in windows
    // * var file_split = file_path.split('\\');

    // * in linux
    var file_split = file_path.split('/');

    file_name = file_split[2];

    var extension_split = file_name.split('\.');
    var file_ext = extension_split[1];

    if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {

      // delete file
      fs.unlink(file_path, (err) => {
        return res.status(200).send({
          status: 'error',
          message: 'Image extension is invalid !!!'
        });
      });

    } else {

      const articleId = req.params.id;

      if (articleId) {
        Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true })
          .then((articleUpdated, err) => {

            if (err) {
              console.log(err);
              return res.status(500).json({
                message: "Failed to return the article",
              });
            }
            if (!articleUpdated) {
              return res.status(404).json({
                message: "Article not found",
              });
            }
            return res.status(200).send({
              status: 'success',
              article: articleUpdated
            });
          })
          .catch((err) => {
            res.status(500).json({
              status: "Error",
              message: 'Problem with article ID !!!'
            });
          })
      } else {
        return res.status(200).send({
          status: 'success',
          image: file_name
        });
      }

    }
  }, // end upload file

  getImage: (req, res) => {
    var file = req.params.image;
    var path_file = './upload/articles/' + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(404).send({
          status: 'error',
          message: 'La imagen no existe !!!'
        });
      }
    });
  },

  search: (req, res) => {

    var searchString = req.params.search;

    // Find or
    Article.find({
      "$or": [
        { "title": { "$regex": searchString, "$options": "i" } },
        { "content": { "$regex": searchString, "$options": "i" } }
      ]
    })
      .sort([['date', 'descending']])
      .then((articles, err) => {

        if (err) {
          return res.status(500).send({
            status: 'error',
            message: 'Request error !!!'
          });
        }

        if (!articles || !articles.length) {
          return res.status(404).send({
            status: 'error',
            message: 'There are no articles that match your search !!!'
          });
        }

        return res.status(200).send({
          status: 'success',
          articles
        });

      });
  }

};  // end controller

module.exports = controller;
