var express = require('express');
var samples = express.Router();

/* GET some page. */
samples.get('/domxss-hash', function(req, res, next) {
  res.render('samples/domxss-hash');
});

samples.get('/reflected-simple', function(req, res, next) {
  res.render('samples/reflected-simple', { text: req.query.text})
})

module.exports = samples;
