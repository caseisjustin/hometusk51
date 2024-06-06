import { Router } from 'express';
import {signup, signin, getMe, logout, verifyOtp} from '../controllers/auth.controller.js';
import authMiddleware from "../widdlewares/auth.middleware.js";
const router = Router()

router.post('/signup', signup, verifyOtp);
router.post('/signin', verifyOtp, signin);
router.get('/getMe', authMiddleware, getMe);
router.get('/logout', authMiddleware, logout);

export default router;