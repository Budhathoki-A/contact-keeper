// This is to register an user in the backend

// Bring in epress at first
const express = require('express');

// Create a variable called router and set that to Router
const router = express.Router();
const auth = require('../middleware/auth');

const {
  check,
  validationresult,
  validationResult,
} = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route           GET api/contacts
// @description     Get all users from contacts
// @access          Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route           POST api/contacts
// @description     Add new contact
// @access          Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route           PUT api/contacts/:id
// @description     Update contact
// @access          Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route           DELETE api/contacts/:id
// @description     Delete contact
// @access          Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

// Export the router
module.exports = router;
