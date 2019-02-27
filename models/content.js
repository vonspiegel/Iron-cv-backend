const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  type: String,
  name: String,
  startDate: Date,
  endDate: Date,
  description: String,
  list: [String],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;