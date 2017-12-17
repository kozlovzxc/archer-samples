'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

const dom = require('./dom');
const reflected = require('./reflected');
const stored = require('./stored');

router.use('/dom', dom);
router.use('/reflected', reflected);
router.use('/stored', stored);

module.exports = router;
