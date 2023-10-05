'use strict'

const express = require('express');
const ArticleController = require('../controllers/article');

const router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/articles'});

// Test routes
router.post('/course-data', ArticleController.datosCurso);
router.get('/controller-test', ArticleController.test);

// useful routes
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id?', md_upload, ArticleController.upload);

module.exports = router;