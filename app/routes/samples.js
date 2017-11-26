var express = require('express');
var samples = express.Router();

/* GET some page. */
samples.get('/domxss-hash', function(req, res, next) {
  res.render('samples/domxss-hash');
});

module.exports = samples;
