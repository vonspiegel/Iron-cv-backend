const express = require('express');
const Content = require('../models/content');
const router = express.Router();


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.session.currentUser;

  // console.log(id)
  Content.find({userId: _id})
    .then((content) => {
      res.status(200);
      res.json(content);
    })
    .catch(next)
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.session.currentUser;
  const {
    contentType,
    title,
    name,
    description,
    city,
    startDate,
    endDate,
    tasks,
  } = req.body.content;
  const newContent = new Content({
    contentType,
    title,
    name,
    description,
    city,
    startDate,
    endDate,
    tasks,
    cvId: id,
    userId: _id,
  });
  const saveContent = newContent.save()
  .then((response) => {
    res.status(200)
    res.json(response)
  })
  .catch(next)
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  const { contentType, name, startDate, endDate, description, tasks } = req.body;
  const contentToUpdate = {
    contentType,
    name,
    startDate,
    endDate,
    description,
    tasks
  };

  Content.findByIdAndUpdate(id, contentToUpdate)
    .then((content) => {
      res.status(200);
      res.json({
        message: "updated",
        content: content });
    })
    .catch(next)
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Content.findByIdAndDelete(id)
    .then((content) => {
      res.status(200);
      res.json({
        message: "deleted",
        content: content });
    })
    .catch(next)

});

module.exports = router;

