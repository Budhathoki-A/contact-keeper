// This is to register an user in the backend

// Bring in epress at first
const express = require('express');

// Create a variable called router and set that to Router
const router = express.Router();

// @route           GET api/auth
// @description     GET logged in user
// @access          Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route           POST api/auth
// @description     Authinticate the user and get token
// @access          Public
router.post('/', (req, res) => {
  res.send('login user');
});

// Export the router
module.exports = router;
