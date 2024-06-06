import authService from '../services/auth.service.js';

export const signup = async (req, res) => {
  try {
    const result = await authService.signup(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const result = authService.verifyOtp(req.body.login)
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const signin = async (req, res) => {
  try {
    const result = await authService.signin(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  res.json({ login: req.user.login, createdAt: req.user.createdAt });
};

export const logout = async (req, res) => {
  res.json({ message: 'Logout successful' });
};