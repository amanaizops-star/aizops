const mongoose = require('mongoose');

const trialSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trialStartDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  trialEndDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'cancelled', 'converted'],
    default: 'active'
  },
  daysRemaining: {
    type: Number,
    default: 15
  },
  notificationsSent: {
    day7: { type: Boolean, default: false },
    day3: { type: Boolean, default: false },
    day1: { type: Boolean, default: false },
    expired: { type: Boolean, default: false }
  },
  whatsappNumber: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  convertedToPaid: {
    type: Boolean,
    default: false
  },
  convertedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

trialSchema.methods.calculateDaysRemaining = function() {
  const today = new Date();
  const end = new Date(this.trialEndDate);
  const diffTime = end - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  this.daysRemaining = diffDays > 0 ? diffDays : 0;
  return this.daysRemaining;
};

trialSchema.methods.isExpired = function() {
  const today = new Date();
  return today > this.trialEndDate;
};

module.exports = mongoose.model('Trial', trialSchema);