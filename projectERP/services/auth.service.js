import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { generateOTP, sendOTP } from './otp.service.js';

const signup = async ({ login, password }) => {
    let user = await User.findOne({ login });
    if (user) {
        throw new Error('User already exists');
    }

    user = new User({ login, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;

    await user.save();
    await sendOTP(user.login, otp);
    return { message: 'User created, OTP send to email' };
};

const verifyOtp = async (login) => {
    const user = await User.findOne({ login });

    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return { message: 'Invalid or expired OTP' };
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_KEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_KEY, { expiresIn: '7d' });
    return {accessToken, refreshToken}
}

const signin = async ({ login, password }) => {
    const user = await User.findOne({ login });
    if (!user) {
        throw new Error('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid Credentials');
    }

    const payload = {
        user: {
            id: user.id,
            login: user.login
        }
    };

    const accessToken = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1m' });
    const refreshToken = jwt.sign(payload, 'your_jwt_refresh_secret', { expiresIn: '7d' });

    return { accessToken, refreshToken };
};

export default {
    signup,
    signin,
    verifyOtp
}