const axios = require('axios');
const Notification = require('../models/Notification');

const sendWhatsAppMessage = async (to, message, messageType, userId, trialId) => {
  try {
    const notification = new Notification({
      userId,
      trialId,
      type: 'whatsapp',
      messageType,
      recipient: to,
      content: message,
      status: 'pending'
    });

   
    console.log(`WhatsApp message sent to ${to}:`, message);
    
    notification.status = 'sent';
    notification.sentAt = new Date();
    await notification.save();

    return { success: true, notification };

  } catch (error) {
    console.error('WhatsApp send error:', error);
    
    const notification = await Notification.findOne({ 
      userId, 
      trialId, 
      messageType,
      status: 'pending' 
    });
    
    if (notification) {
      notification.status = 'failed';
      notification.error = error.message;
      await notification.save();
    }

    return { success: false, error: error.message };
  }
};

// Trial reminder messages
const getTrialReminderMessage = (daysLeft, userFirstName, trialEndDate) => {
  const messages = {
    7: {
      template: `⏰ Hi ${userFirstName}, your Anlook trial has 7 days remaining!`,
      body: `\n\nMake the most of your remaining time with:\n• WhatsApp Business features\n• Campaign management\n• 24/7 chatbot support\n\nNeed help? Contact us at support@anlook.com`
    },
    3: {
      template: `⚠️ Hi ${userFirstName}, only 3 days left in your Anlook trial!`,
      body: `\n\nYour trial ends on ${trialEndDate}. Upgrade now to keep all your features active.\n\n👉 Visit our website to upgrade: anlook.com/upgrade`
    },
    1: {
      template: `🔥 Last day, ${userFirstName}! Your Anlook trial expires tomorrow.`,
      body: `\n\nDon't lose access to your WhatsApp automation features. Upgrade today!\n\n👉 anlook.com/upgrade`
    },
    expired: {
      template: `😔 Hi ${userFirstName}, your Anlook trial has expired.`,
      body: `\n\nBut don't worry! You can still reactivate your account with our paid plans.\n\n👉 anlook.com/pricing`
    }
  };

  return messages[daysLeft]?.template + (messages[daysLeft]?.body || '') || '';
};

module.exports = { sendWhatsAppMessage, getTrialReminderMessage };