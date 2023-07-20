"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const settingController = require("../controllers/setting");
const user_1 = require("../controllers/user");
//Settings Routes 
router.delete("/deleteUser", user_1.userController.deleteUser);
router.put("/addFriend/:friend", user_1.userController.addFriend);
router.put("/updateUser", user_1.userController.updateUser);
exports.default = router;
//# sourceMappingURL=user.js.map