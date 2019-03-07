const express = require('express');
const Cv = require('../models/cv');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res, next) => {
  const { _id } = req.session.currentUser;
  Cv.find({userId: _id})
    .then((cvList) => {
      res.status(200)
      res.json(cvList);
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  const { name, user } = req.body;
  const newCv = new Cv({
    name,
    userId: user._id,
  });
  const saveCV = newCv.save()
      .then((response) => {
      res.status(200)
      res.json(response)
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
  const cvToUpdate = req.body
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