import {Router} from 'express';
import {setUserCourse, getUserCourses, deleteUserCourse} from '../controllers/user.course.controller.js';
import authMiddleware from '../widdlewares/auth.middleware.js';

const router = Router();

router.post('/set-user-course', authMiddleware, setUserCourse);
router.get('/:userId', authMiddleware, getUserCourses);
router.delete('/:userId/course/:courseId', authMiddleware, deleteUserCourse);

export default router;