import express from 'express';

import { taskController } from '../controllers/task';

const router = express.Router();

router.get('/tasks', taskController.getTasks);

export default router;