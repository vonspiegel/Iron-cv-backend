const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const contentSchema = new Schema({
  contentType: String,
  title: { type:String, default: '' },
  name: { type:String, default: '' },
  description: { type:String, default: '' },
  city: { type:String, default: '' },
  startDate: {
    month: { type:String, default: '' },
    year: { type:String, default: '' },
  },
  endDate: {
    month: { type:String, default: '' },
    year: { type:String, default: '' },
  },
  tasks: { type:String, default: '' },
  userId: {
    type: ObjectId,
    ref: 'User',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;