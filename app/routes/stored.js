'use strict';

const express = require('express');
const db = require('../models');
const stored = express.Router();

stored.get('/simple', (req, res) => {
  db.post
    .all()
    .then((posts) => {
      res.render('stored/simple', {
        posts,
      });
    })
    .catch((err) => res.json(err));
});
stored.post('/simple', (req, res) => {
  db.post
    .create({
      data: req.body.data,
    })
    .then(() => db.post.all())
    .then((posts) => res.render('stored/simple', {
      posts,
    }))
    .catch((err) => res.status(500).json(err));
});

module.exports = stored;