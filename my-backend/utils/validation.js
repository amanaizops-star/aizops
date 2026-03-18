
const validator = require('validator');

exports.validateContact = (contact) => {
  return validator.isEmail(contact) || validator.isMobilePhone(contact, 'any');
};

exports.sanitizeContact = (contact) => {
  return contact.toLowerCase().trim();
};

exports.validatePassword = (password) => {
  return password && password.length >= 6;
};

exports.generateRandomPassword = (length = 10) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};