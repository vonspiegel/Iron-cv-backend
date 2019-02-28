const express = require('express');
const Content = require('../models/content');
const router = express.Router();

router.get('/cv/:id', (req, res, next) => {
  const { id } = req.params;

  Content.findById(id)
    .then((content) => {
      res.status(200);
      res.json(content);
    })
    .catch(next)
});

router.put('/cv/:id', (req, res, next) => {
  const { id } = req.params;
  const { type, title, startDate, endDate, description, list } = req.body;
  const contentToUpdate = {
    type,
    title,
    startDate,
    endDate,
    description,
    list
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

router.delete('/cv/:id', (req, res, next) => {
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

