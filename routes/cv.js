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

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Cv.findById(id)
    .then((cv) => {
      res.status(200);
      res.json(cv);
    })
    .catch(next)
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, contentId } = req.body;
  const cvToUpdate = {
    name,
    contentId,
  };

  Cv.findByIdAndUpdate(id, cvToUpdate)
    .then((cv) => {
      res.status(200);
      res.json({ 
        message: "updated",
        cv: cv });
    })
    .catch(next)
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Cv.findByIdAndDelete(id)
    .then((cv) => {
      res.status(200);
      res.json({ 
        message: "deleted",
        cv: cv });
    })
    .catch(next)

});

module.exports = router;