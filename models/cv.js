const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const cvSchema = new Schema({
  name: String,
  userId: {
      type: ObjectId,
      ref: 'User'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;