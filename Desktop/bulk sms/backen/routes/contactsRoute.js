// routes/contacts.js
const express = require('express');
const router = express.Router();
const { validationResult,body } = require('express-validator');
const { getAllContacts, createContact } = require('../controller/ContactsController');
const auth = require('../moddleware/auth');


router.post('/', auth, [
  // Custom validation to check both single and multiple phone numbers
  body().custom(value => {
    // Handling a single phoneNumber
    if (value.phoneNumber) {
      if (typeof value.phoneNumber !== 'string' || !value.phoneNumber.trim().length) {
        throw new Error('Please include a valid phone number');
      }
      if (!value.phoneNumber.trim().match(/^\d+$/)) {
        throw new Error('Phone number must be numeric');
      }
    }

    // Handling an array of phoneNumbers
    if (Array.isArray(value.phoneNumbers)) {
      value.phoneNumbers.forEach((phoneNumber, index) => {
        if (typeof phoneNumber !== 'string' || !phoneNumber.trim().length) {
          throw new Error(`Please include a valid phone number at index ${index}`);
        }
        if (!phoneNumber.trim().match(/^\d+$/)) {
          throw new Error(`Phone number at index ${index} must be numeric`);
        }
      });
    }

    return true; // Indicates the success of this synchronous custom validator
  })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  createContact(req, res);
});

router.get('/', auth, getAllContacts);

module.exports = router;
