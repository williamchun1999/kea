"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsRouter = void 0;
const express_1 = __importDefault(require("express"));
const task_1 = require("../controllers/task");
const user_1 = require("../controllers/user");
exports.friendsRouter = express_1.default.Router();
exports.friendsRouter.get("/tasks/:userId?", task_1.taskController.getTasks);
// list user info 
exports.friendsRouter.get("/:userId?", user_1.userController.getUser);
exports.friendsRouter.patch("/addFriend/:friend", user_1.userController.addFriend);
//# sourceMappingURL=friends.js.map