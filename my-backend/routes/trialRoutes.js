const express = require('express');
const router = express.Router();
const { 
  getTrialStatus, 
  extendTrial, 
  convertToPaid, 
  getAllTrials 
} = require('../controller/trialController');
const { protect, admin } = require('../middleware/auth');

router.get('/status', protect, getTrialStatus);
router.post('/convert', protect, convertToPaid);
router.post('/extend/:userId', protect, admin, extendTrial);
router.get('/all', protect, admin, getAllTrials);

module.exports = router;