// First of, bring in mongoose
const mongoose = require('mongoose');

// We then have to create UserSchema which takes in object property
const UserSchema = mongoose.Schema({
  // This is for the user to have things
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // This gives the currrent date and time and it will be used for the time of registry.
  },
});

module.exports = mongoose.model('User', UserSchema);
// We are going to using this in our users route.
