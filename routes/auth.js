"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
// const settingController = require("../controllers/setting");
const auth_1 = require("../controllers/auth");
//auth Routes
exports.authRouter.get('/login', auth_1.authController.getLogin);
exports.authRouter.post('/login', auth_1.authController.postLogin);
exports.authRouter.get('/logout', auth_1.authController.logout);
exports.authRouter.get('/signup', auth_1.authController.getSignup);
exports.authRouter.post('/signup', auth_1.authController.postSignup);
//# sourceMappingURL=auth.js.map