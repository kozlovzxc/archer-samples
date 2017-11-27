var express = require('express');
var samples = express.Router();

var dom = express.Router();

dom.get('/hash', function(req, res, next) {
  res.render('samples/dom/hash');
});

var reflected = express.Router();

reflected.get('/simple', function(req, res, next) {
  res.render('samples/reflected/simple', { text: req.query.text });
});

reflected.get('/json', function(req, res, next) {
  res.render('samples/reflected/json', { text: JSON.stringify(req.query.text) });
});

reflected.get('/attribute', function(req, res, next) {
  res.render('samples/reflected/attribute', { attribute: req.query.attribute });
});

reflected.get('/cookie', function(req, res, next) {
  if (req.cookies.cookieValue === undefined) {
    res.render('samples/reflected/cookie', { text: 'No cookie' });
  } else {
    res.render('samples/reflected/cookie', { text: req.cookies.cookieValue });
  }
});

reflected.post('/cookie', function(req, res, next) {
  if (req.body.cookieValue) {
    res.cookie('cookieValue', req.body.cookieValue);
    res.redirect(req.originalUrl);
  } else {
    res.redirect(req.originalUrl);
  }

});

samples.use('/dom', dom);
samples.use('/reflected', reflected);

module.exports = samples;
