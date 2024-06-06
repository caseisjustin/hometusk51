import crypto from 'crypto';
import sendEmail from './email.service.js';

const generateOTP = () => {
  return crypto.randomBytes(3).toString('hex');
};

const sendOTP = async (email, otp) => {
  const subject = 'Your OTP Code';
  const text = `Your OTP code is ${otp}.`;
  await sendEmail(email, subject, text);
};

export {
  generateOTP,
  sendOTP
};