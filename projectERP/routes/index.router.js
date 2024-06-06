import { Router } from "express";
import authRouter from './auth.router.js';
import fileRouter from './file.router.js';
import courseRouter from './course.router.js';
import userCourseRouter from './user.course.router.js';


const router = Router()

router.use('/auth', authRouter);
router.use('/file', fileRouter);
router.use('/course', courseRouter);
router.use('/user-course', userCourseRouter);


export default router;