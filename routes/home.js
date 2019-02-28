const express = require('express');
const Cv = require('../models/cv');

const router = express.Router();

router.get('/', (req, res, next) => {
  Cv.find({})
    .then((cvList) => {
      res.status(200)
      res.json(cvList);
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  const { name, contentId } = req.body;

  const newCv = new Cv({
    name,
    contentId,
  });
  
  newCv.save()
  .then((cv)=> {
    res.status(200)
    res.json({cv: newCv})
  })
  .catch(next)
});

module.exports = router;