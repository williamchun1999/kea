"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const auth_1 = require("../controllers/auth");
const task_1 = require("../controllers/task");
exports.settingRouter = express_1.default.Router();
//Settings Routes
exports.settingRouter.get("/", user_1.userController.getUser);
exports.settingRouter.delete("/deleteUser", user_1.userController.deleteUser);
exports.settingRouter.delete("/deleteUserFromFriendsList", user_1.userController.deleteUserFromFriendsLists);
exports.settingRouter.delete("/deleteAllTasks", task_1.taskController.deleteAllTasks);
exports.settingRouter.put("/updateUser", user_1.userController.updateUser);
exports.settingRouter.get("/logout", auth_1.authController.logout);
//# sourceMappingURL=setting.js.map