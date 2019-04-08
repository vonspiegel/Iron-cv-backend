const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

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
  title: { type:String, default: '' },
  summary: { type:String, default: '' },
  socialNetwork: {
    github: { type:String, default: '' },
    medium: { type:String, default: '' },
    linkedin: { type:String, default: '' },
  },
  softSkills: [String],
  hardSkills: [String],
  interests: [String],
  languages: [{
    language: String,
    level: String,
  }],
  avatarURL: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;