// const express = require('express');
// const router = express.Router();
// const { submitContact } = require('../controller/contactController');

// // @desc    Submit contact form
// // @route   POST /api/contact
// // @access  Public
// router.post('/', submitContact);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { 
    submitContact, 
    getAllContacts 
} = require('../controller/contactController');

router.post('/', submitContact);

router.get('/', getAllContacts);

module.exports = router;