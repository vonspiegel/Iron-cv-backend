const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const cvSchema = new Schema({
  name: { type:String, default: 'My resume'},
  userId: {
      type: ObjectId,
      ref: 'User'
  },
  contentInfo: [{
    display: { type:Boolean, default: true },
    contentId: {
      type: ObjectId,
      ref: 'Content'
    }
  }],
  // contentId: [{
  //   type: ObjectId,
  //   ref: 'Content'
  // }],
  headline: { type:String, default: ''},
  summary: { type:String, default: ''},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;