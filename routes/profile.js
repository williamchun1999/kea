"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = __importDefault(require("express"));
const task_1 = require("../controllers/task");
const auth_1 = require("../middleware/auth");
const user_1 = require("../controllers/user");
exports.profileRouter = express_1.default.Router();
exports.profileRouter.get("/tasks/:userId?", task_1.taskController.getTasks);
exports.profileRouter.post("/tasks", task_1.taskController.createTask);
exports.profileRouter.patch("/tasks/:taskId", task_1.taskController.updateTask);
exports.profileRouter.delete("/tasks/:taskId", task_1.taskController.deleteTask);
// Get user
exports.profileRouter.get("/:userId?", auth_1.authMiddleware.ensureAuth, user_1.userController.getUser);
//# sourceMappingURL=profile.js.map