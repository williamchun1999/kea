"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const task_1 = require("../controllers/task");
const user_1 = require("../controllers/user");
const auth_1 = require("../controllers/auth");
const auth_2 = require("../middleware/auth");
exports.homeRouter = express_1.default.Router();
//get tasks
exports.homeRouter.get('/tasks/:userId?', task_1.taskController.getTasks);
exports.homeRouter.post('/tasks/', task_1.taskController.createTask);
exports.homeRouter.patch('/tasks/:taskId', task_1.taskController.updateTask);
exports.homeRouter.delete('/tasks/:taskId', task_1.taskController.deleteTask);
// get user, list user
exports.homeRouter.get("/:userId?", auth_2.authMiddleware.ensureAuth, user_1.userController.getUser);
exports.homeRouter.get('/logout', auth_1.authController.logout);
//# sourceMappingURL=home.js.map