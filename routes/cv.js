const express = require('express');
const Cv = require('../models/cv');
const User = require('../models/user')

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

  const { _id } = req.session.currentUser;

  const newCv = new Cv({
    name,
    contentId,
  });

  const addCVToUser = User.findByIdAndUpdate(_id, { $push: { cvs: newCv._id } })
  const saveCV = newCv.save()

  Promise.all([addCVToUser, saveCV])
    .then((response) => {
      console.log(response)
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
  const deleteCVToUser = User.findByIdAndUpdate(_id, { $splice: (cv._id , 1) });

  Cv.findByIdAndDelete(id)
    .then((response) => {
      console.log(response)
      res.status(200);
      res.json({ 
        message: "deleted",
        cv: cv });
    })
    .catch(next)

});

module.exports = router;