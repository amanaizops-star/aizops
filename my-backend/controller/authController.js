const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const validator = require('validator');


const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      contact: user.contact,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};


exports.signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().reduce((acc, error) => {
          acc[error.param] = error.msg;
          return acc;
        }, {})
      });
    }

    const { name, contact, password } = req.body;

    const existingUser = await User.findOne({ contact: contact.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: {
          contact: 'User already exists with this email/phone'
        }
      });
    }

    const user = await User.create({
      name,
      contact: contact.toLowerCase(),
      password
    });

    const token = generateToken(user);

    user.lastLogin = new Date();
    await user.save();

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        contact: user.contact,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating account',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};


exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().reduce((acc, error) => {
          acc[error.param] = error.msg;
          return acc;
        }, {})
      });
    }

    const { contact, password } = req.body;

    const user = await User.findOne({ contact: contact.toLowerCase() }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        errors: {
          general: 'Invalid credentials'
        }
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        errors: {
          general: 'Account is deactivated. Please contact support.'
        }
      });
    }

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        errors: {
          general: 'Invalid credentials'
        }
      });
    }

    const token = generateToken(user);

    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        contact: user.contact,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};


exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        contact: user.contact,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user data'
    });
  }
};


exports.logout = (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
};


exports.updateProfile = async (req, res) => {
  try {
    const { name, contact } = req.body;
    
    const updateData = {};
    if (name) updateData.name = name;
    if (contact) {
      const existingUser = await User.findOne({ 
        contact: contact.toLowerCase(),
        _id: { $ne: req.user.id }
      });
      
      if (existingUser) {
        return res.status(400).json({
          success: false,
          errors: {
            contact: 'Email/phone already in use'
          }
        });
      }
      updateData.contact = contact.toLowerCase();
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        contact: user.contact,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating profile'
    });
  }
};


exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id).select('+password');

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        errors: {
          currentPassword: 'Current password is incorrect'
        }
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: 'Error changing password'
    });
  }
};