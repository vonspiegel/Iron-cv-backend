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
  avatarURL: { type: String, default: 'https://firebasestorage.googleapis.com/v0/b/iron-cv.appspot.com/o/images%2Ff0d17350-9b7a-42bb-87d1-0b7f4ed8582d.png?alt=media&token=c8f67ca2-a29d-4094-96e7-7dbf8edf16ec'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;