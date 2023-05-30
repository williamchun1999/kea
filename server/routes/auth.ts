import express from "express"

const router = express.Router()

// const settingController = require("../controllers/setting");
import {authController} from "../controllers/auth"
import {homeController} from "../controllers/home"

//middleware to check if the user is logged in 
import {authMiddleware} from "../middleware/auth"


//auth Routes 

router.get("/home", homeController.getUser);
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)



export default router