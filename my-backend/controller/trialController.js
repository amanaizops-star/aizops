const Trial = require('../models/Trial');
const User = require('../models/User');
const Notification = require('../models/Notification');
const { sendWhatsAppMessage } = require('../utils/whatsappSender');


const getTrialStatus = async (req, res) => {
  try {
    const trial = await Trial.findOne({ 
      userId: req.user.id, 
      status: 'active' 
    });

    if (!trial) {
      return res.status(404).json({ 
        success: false, 
        error: 'No active trial found' 
      });
    }

    const daysRemaining = trial.calculateDaysRemaining();
    const isExpired = trial.isExpired();

    res.json({
      success: true,
      data: {
        trialId: trial._id,
        startDate: trial.trialStartDate,
        endDate: trial.trialEndDate,
        daysRemaining,
        status: isExpired ? 'expired' : trial.status,
        notifications: trial.notificationsSent
      }
    });

  } catch (error) {
    console.error('Get trial status error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


const extendTrial = async (req, res) => {
  try {
    const { userId } = req.params;
    const { days } = req.body;

    const trial = await Trial.findOne({ userId, status: 'active' });

    if (!trial) {
      return res.status(404).json({ success: false, error: 'Trial not found' });
    }

    const newEndDate = new Date(trial.trialEndDate);
    newEndDate.setDate(newEndDate.getDate() + days);
    
    trial.trialEndDate = newEndDate;
    await trial.save();

    await sendWhatsAppMessage(
      trial.whatsappNumber,
      `🎉 Good news! Your trial has been extended by ${days} days. New expiry date: ${newEndDate.toLocaleDateString()}`
    );

    res.json({
      success: true,
      data: {
        newEndDate: trial.trialEndDate,
        daysRemaining: trial.calculateDaysRemaining()
      }
    });

  } catch (error) {
    console.error('Extend trial error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


const convertToPaid = async (req, res) => {
  try {
    const trial = await Trial.findOne({ 
      userId: req.user.id, 
      status: 'active' 
    });

    if (!trial) {
      return res.status(404).json({ success: false, error: 'Trial not found' });
    }

    trial.status = 'converted';
    trial.convertedToPaid = true;
    trial.convertedAt = new Date();
    await trial.save();

    // Send confirmation
    await sendWhatsAppMessage(
      trial.whatsappNumber,
      `🎉 Thank you for upgrading to our paid plan! Your account is now fully activated.`
    );

    res.json({
      success: true,
      message: 'Successfully converted to paid plan'
    });

  } catch (error) {
    console.error('Convert to paid error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


const getAllTrials = async (req, res) => {
  try {
    const trials = await Trial.find()
      .populate('userId', 'firstName lastName emailId mobileNo')
      .sort('-createdAt');

    const formattedTrials = trials.map(trial => ({
      ...trial.toObject(),
      daysRemaining: trial.calculateDaysRemaining()
    }));

    res.json({
      success: true,
      data: formattedTrials
    });

  } catch (error) {
    console.error('Get all trials error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = { getTrialStatus, extendTrial, convertToPaid, getAllTrials };