'use strict';

const express = require('express');
const db = require('../models');
const stored = express.Router();

stored.get('/simple', (req, res) => {
  db.post
    .create({
      data: 'kek!',
    })
    .then(() => res.json('created'))
    .catch((err) => res.status(500).json(err));
});

module.exports = stored;