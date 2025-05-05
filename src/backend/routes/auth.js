
/**
 * IMPORTANT: This is a mock file to demonstrate backend structure.
 * In a real project, this would be in a separate Node.js server application,
 * not in the browser-based React application.
 */

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// @desc    Login user & generate OTP
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if user exists
    let user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }
    
    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 10); // OTP valid for 10 minutes
    
    // Save OTP to user
    user.otp = {
      code: otp,
      expiresAt: otpExpiry,
    };
    
    await user.save();
    
    // In a production environment, you would send this OTP via email or SMS
    console.log(`OTP for ${email}: ${otp}`);
    
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Verify OTP & get token
// @route   POST /api/auth/verify
// @access  Public
router.post('/verify', async (req, res) => {
  try {
    const { email, otp } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    
    // Check if OTP is valid
    if (!user.otp || user.otp.code !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
    
    // Check if OTP is expired
    if (new Date() > new Date(user.otp.expiresAt)) {
      return res.status(400).json({ message: 'OTP expired' });
    }
    
    // Clear OTP
    user.otp = undefined;
    await user.save();
    
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const userExists = await User.findOne({ email });
    
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const user = await User.create({
      name,
      email,
      password,
    });
    
    if (user) {
      // Generate OTP for verification
      const otp = generateOTP();
      const otpExpiry = new Date();
      otpExpiry.setMinutes(otpExpiry.getMinutes() + 10); // OTP valid for 10 minutes
      
      // Save OTP to user
      user.otp = {
        code: otp,
        expiresAt: otpExpiry,
      };
      
      await user.save();
      
      // In a production environment, you would send this OTP via email or SMS
      console.log(`OTP for ${email}: ${otp}`);
      
      res.status(201).json({ message: 'User registered successfully. OTP sent for verification.' });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
