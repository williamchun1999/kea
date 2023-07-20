"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const passport_1 = __importDefault(require("passport"));
const validator_1 = __importDefault(require("validator"));
// import {Session} from "express-session"
const User_1 = require("../models/User");
//controllers for handelling authentication functions
exports.authController = {
    getLogin: (req, res) => {
        if (req.user) {
            // return res.redirect("/home");
            res
                .status(200)
                .send({ message: "user already logged in , redirect to home" });
        }
        res.status(200).send({ message: "success" });
    },
    postLogin: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("req.body", req.body);
        const validationErrors = [];
        if (!req.body.email || !req.body.password) {
            validationErrors.push({ msg: "Email and/or password cannot be blank" });
        }
        if (!validator_1.default.isEmail(req.body.email))
            validationErrors.push({ msg: "Please enter a valid email address." });
        if (validator_1.default.isEmpty(req.body.password))
            validationErrors.push({ msg: "Password cannot be blank." });
        if (validationErrors.length) {
            req.flash("errors in validating", validationErrors);
            return res.send({ message: validationErrors });
        }
        req.body.email = validator_1.default.normalizeEmail(req.body.email, {
            gmail_remove_dots: false,
        });
        try {
            passport_1.default.authenticate("local", (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    req.flash("errors", info);
                    return res.status(400).send({ message: "User does not exist" });
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    req.flash("success", { msg: "Success! You are logged in." });
                    return res.status(200).send({ message: "Success return to home" });
                });
            })(req, res, next);
        }
        catch (err) {
            next(err);
        }
    }),
    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err)
                console.log("Error : Failed to destroy the session during logout.", err);
            req.user = null;
            console.log("logged out");
            res.status(200).send({ message: "Success" });
        });
    },
    getSignup: (req, res) => {
        if (req.user) {
            // return res.redirect("/home")
            res
                .status(200)
                .send({ message: "user already logged in , redirect to home" });
        }
        res.status(200).send({ message: "Success" });
    },
    postSignup: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validationErrors = [];
            if (!validator_1.default.isEmail(req.body.email))
                validationErrors.push({ msg: "Please enter a valid email address." });
            if (!validator_1.default.isLength(req.body.password, { min: 8 }))
                validationErrors.push({
                    msg: "Password must be at least 8 characters long",
                });
            if (req.body.password !== req.body.passwordC)
                validationErrors.push({ msg: "Passwords do not match" });
            if (validationErrors.length) {
                req.flash("errors", validationErrors);
                return res.status(400).send({ message: validationErrors });
            }
            req.body.email = validator_1.default.normalizeEmail(req.body.email, {
                gmail_remove_dots: false,
            });
            const user = new User_1.User({
                fName: req.body.fName,
                lName: req.body.lName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
            });
            //checks for if there is an existing user in the db
            const existingUser = yield User_1.User.findOne({
                $or: [{ email: req.body.email }, { userName: req.body.userName }],
            });
            if (existingUser) {
                req.flash("errors", {
                    msg: "Account with that email address or username already exists.",
                });
                return res
                    .status(400)
                    .send({
                    message: "Account with that email address or username already exists.",
                });
            }
            yield user.save();
            yield new Promise((resolve, reject) => {
                req.logIn(user, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
            res.status(200).send({ message: "Success return to home" });
        }
        catch (err) {
            next(err);
        }
    }),
};
//# sourceMappingURL=auth.js.map