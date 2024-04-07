const express = require('express');
const { check } = require('express-validator');
const { sendMessage, getAllMessageStatuses } = require('../controller/messageController');
const auth = require('../moddleware/auth');


const router = express.Router();

router.post('/',auth,
  [
    check('to', 'Recipient number is required').not().isEmpty(),
    check('from', 'Sender number is required').not().isEmpty(),
    check('content', 'Message content is required').not().isEmpty(),
  ],
  sendMessage
);

router.get('/', getAllMessageStatuses);

module.exports = router;
