var express = require('express');
var samples = express.Router();

var dom = express.Router();

dom.get('/hash', function(req, res, next) {
  res.render('samples/dom/hash');
});

var reflected = express.Router();

reflected.get('/simple', function(req, res, next) {
  res.render('samples/reflected/simple', { text: req.query.text})
})

samples.use('/dom', dom);
samples.use('/reflected', reflected);

module.exports = samples;
