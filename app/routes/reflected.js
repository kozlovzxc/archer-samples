'use strict';

const express = require('express');
const reflected = express.Router();

reflected.get('/simple', (req, res) => {
  res.render('samples/reflected/simple', { text: req.query.text });
});

reflected.get('/script', (req, res) => {
  res.render('samples/reflected/inscript', { value: req.query.value });
});

reflected.get('/json', (req, res) => {
  res.render('samples/reflected/json', { text: JSON.stringify(req.query.text) });
});

reflected.get('/attribute', (req, res) => {
  res.render('samples/reflected/attribute', { attribute: req.query.attribute });
});

reflected.get('/cookie', (req, res) => {
  if (req.cookies.cookieValue === undefined) {
    res.render('samples/reflected/cookie', { text: 'No cookie' });
  } else {
    res.render('samples/reflected/cookie', { text: req.cookies.cookieValue });
  }
});

reflected.post('/cookie', (req, res) => {
  if (req.body.cookieValue) {
    res.cookie('cookieValue', req.body.cookieValue);
    res.redirect(req.originalUrl);
  } else {
    res.redirect(req.originalUrl);
  }

});

module.exports = reflected;