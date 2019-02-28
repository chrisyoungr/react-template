'use strict';
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('hit /');
  res.sendFile(path.join(
    __dirname, 'public', 'index.html'));
});

router.get('*', (req, res, next) => {
  console.log('hit *');
  res.sendFile(path.join(
    __dirname, 'public', 'index.html'));
});

module.exports = router;