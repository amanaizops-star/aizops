
const cron = require('node-cron');  
const Trial = require('../models/Trial'); 
const User = require('../models/GeneralUser'); 


const scheduleTrialReminders = () => {
    cron.schedule('0 9 * * *', async () => {
        console.log('Running trial reminder check at 9 AM');
        
        try {
            console.log('Trial reminders checked');
        } catch (error) {
            console.error('Trial scheduler error:', error);
        }
    });
};

module.exports = { scheduleTrialReminders };