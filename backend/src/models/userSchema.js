const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneno: {
    type: String,
    required: false,
  },
  fromOffTime: {
    type: String,
    required: false,
  },
  toffTime: {
    type: String,
    required: false,
  }
});

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
