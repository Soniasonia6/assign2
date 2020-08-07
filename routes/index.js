/*
File Name: index.js
Author's Name: Sonia Sonia
Website Name: Sonia Golden Temple in India 
File Description: This file contain routes for all pug files*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    
    message: 'Sonia'
  }
  res.render('index', data);
});

/*GET about page*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page', message: 'This is my about page' });
});

/*GET History page*/
router.get('/History', function(req, res, next) {
  res.render('History', { title: 'History' });
});

/*GET importance page*/
router.get('/Importance', function(req, res, next) {
    res.render('Importance', { title: 'Importance' });
});

/*GET contact page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});


module.exports = router;
