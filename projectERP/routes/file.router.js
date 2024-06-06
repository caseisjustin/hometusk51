import {Router} from 'express';
import {uploadFile, listFiles, deleteFile, getFile, downloadFile, updateFile} from '../controllers/file.controller.js';
import authMiddleware from '../widdlewares/auth.middleware.js';

const router = Router();

router.post('/upload', authMiddleware, uploadFile);
router.get('/list', authMiddleware, listFiles);
router.get('/:id', authMiddleware, getFile);
router.delete('/:id', authMiddleware, deleteFile);
router.get('/download/:id', authMiddleware, downloadFile);
router.put('/:id', authMiddleware, updateFile);

export default router;