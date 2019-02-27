const express = require('express');
const Cv = require('../models/cv');

const router = express.Router();

router.get('/home', (req, res, next) => {
  Cv.find({})
    .then((cv) => {
      res.render('/home', { cv, title: 'Iron-cv' })
    })
    .catch((error) => {
      console.log('error');
    })
})

module.exports = router;