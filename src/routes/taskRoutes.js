import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateCompleteQuery } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateCompleteQuery, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
