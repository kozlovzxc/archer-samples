'use strict';

const express = require('express');
const dom = express.Router();

dom.get('/hash', (req, res) => {
  res.render('dom/hash');
});

module.exports = dom;