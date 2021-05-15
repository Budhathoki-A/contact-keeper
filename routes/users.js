// This is to register an user in the backend

// Bring in epress at first
const express = require('express');

// Create a variable called router and set that to Router
const router = express.Router();

// @route           POST api/users
// @description     Register a user
// @access          Public
router.post('/', (req, res) => {
  res.send('Registers a user.');
});

// Export the router
module.exports = router;
