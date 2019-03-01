const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  username: String,
  password: String,
  contact: {
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String,
  },
  socialNet: {
    github: String,
    facebook: String,
    linkedin: String,
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;