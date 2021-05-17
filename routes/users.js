// This is to register an user in the backend

// Bring in epress at first
const express = require('express');

// Bringing in the check validator for checking and validating the datas
const { check, validationResult } = require('express-validator');

// Create a variable called router and set that to Router
const router = express.Router();

// Bringing in the UserSchema model
const User = require('../models/User');

// @route           POST api/users
// @description     Register a user
// @access          Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    // res.send(req.body);  res.body gives the data that sent to the route which
    // in case will be the email, password and name.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('passed');
  }
);

// Export the router
module.exports = router;
