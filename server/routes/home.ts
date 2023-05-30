import express from 'express';

import { taskController } from '../controllers/task';

const router = express.Router();

router.get('/tasks/:userId', taskController.getTasks);
router.post('/tasks/:userId', taskController.createTask);
router.patch('/tasks/:taskId', taskController.updateTask);
router.delete('/tasks/:taskId', taskController.deleteTask);
// get user, list user
export default router;