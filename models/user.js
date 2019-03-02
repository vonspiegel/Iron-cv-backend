const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  username: String,
  password: String,
  contact: {
    firstName: { type:String, default: '' },
    lastName: { type:String, default: '' },
    email: { type:String, default: '' },
    address: { type:String, default: '' },
    phone: { type:String, default: '' },
  },
  socialNetwork: {
    github: { type:String, default: '' },
    facebook: { type:String, default: '' },
    linkedin: { type:String, default: '' },
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;