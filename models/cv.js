const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cvSchema = new Schema({
  name: String,
  contentId: [String],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;