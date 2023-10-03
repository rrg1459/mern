'use strict'

const express = require('express');
const ArticleController = require('../controllers/article');

const router = express.Router();

// Test routes
router.post('/course-data', ArticleController.datosCurso);
router.get('/controller-test', ArticleController.test);

// useful routes
router.post('/save', ArticleController.save);
router.get('/articles', ArticleController.getArticles);


module.exports = router;