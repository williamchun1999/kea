import express from "express";

export const authRouter = express.Router();

// const settingController = require("../controllers/setting");
import {authController} from "../controllers/auth"
import {userController} from "../controllers/user"

//middleware to check if the user is logged in
import { authMiddleware } from "../middleware/auth";

//auth Routes

authRouter.get('/login', authController.getLogin)
authRouter.post('/login', authController.postLogin)
authRouter.get('/logout', authController.logout)
authRouter.get('/signup', authController.getSignup)
authRouter.post('/signup', authController.postSignup)
