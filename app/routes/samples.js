'use strict';

const express = require('express');
const samples = express.Router();
const db = require('../models');

const dom = express.Router();

dom.get('/hash', (req, res) => {
  res.render('samples/dom/hash');
});

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

const stored = express.Router();

stored.get('/simple', (req, res) => {
  db.post
    .create({
      data: 'kek!',
    })
    .then(() => res.json('created'))
    .catch((err) => res.status(500).json(err));
});

samples.use('/dom', dom);
samples.use('/reflected', reflected);
samples.use('/stored', stored);

module.exports = samples;
