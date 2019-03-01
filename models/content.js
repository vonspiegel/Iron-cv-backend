const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const contentSchema = new Schema({
  contentType: String,
  title: String,
  startDate: {
    month: String,
    year: String
  },
  endDate: {
    month: String,
    year: String
  },
  description: String,
  list: [String],
  user: {
    type: ObjectId,
    ref: 'User'
  },
  cvId: [{
    type: ObjectId,
    ref: 'Cv'
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;