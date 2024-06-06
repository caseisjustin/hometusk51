import express from 'express';
import {addCourse, getAllCourses, updateCourse, deleteCourse, getCourse} from '../controllers/course.controller.js';
import authMiddleware from '../widdlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, addCourse);
router.get('/all', authMiddleware, getAllCourses);
router.get('/:id', authMiddleware, getCourse);
router.put('/:id', authMiddleware, updateCourse);
router.delete('/:id', authMiddleware, deleteCourse);

export default router;