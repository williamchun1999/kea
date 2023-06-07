import passport from "passport";
import validator from "validator";
import { Request, Response, NextFunction } from 'express';

// import {Session} from "express-session"

import { User } from "../models/User";

//extending the type definition for the Request to inculde the flash property 
declare global{
    namespace Express {
    interface FlashMessage{
        msg:string
    }
    interface Request {
        flash (type:string, message: FlashMessage | FlashMessage[]):void
    }
}
}

//controllers for handelling authentication functions 

export const authController =  {
    getLogin: (req:Request,res:Response) => {
        if (req.user) {
            // return res.redirect("/home");
            res.status(200).send({message: "user already logged in , redirect to home"})
          }
        res.status(200).send({message: "success"})
    },
    postLogin: async (req:Request,res:Response, next:NextFunction) => {
      console.log("req.body", req.body)

        const validationErrors = [];
        if (!req.body.email || !req.body.password){
          validationErrors.push({ msg: "Email and/or password cannot be blank" });
        }
        if (!validator.isEmail(req.body.email))
          validationErrors.push({ msg: "Please enter a valid email address." });
        if (validator.isEmpty(req.body.password))
          validationErrors.push({ msg: "Password cannot be blank." });
      
        if (validationErrors.length) {
          req.flash("errors in validating", validationErrors);
          return res.send({ message: validationErrors})
        }
        req.body.email = validator.normalizeEmail(req.body.email, {
          gmail_remove_dots: false,
        });

      try{
          passport.authenticate("local", (err:Error, user: typeof User, info) => {
          if (err) {
            return next(err);
          }
          if (!user) {
            req.flash("errors", info);
            return res.status(400).send({ message: "User does not exist" })
          }
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            req.flash("success", { msg: "Success! You are logged in." });
            return res.status(200).send({ message: "Success return to home" })
          });
      }) (req,res,next)
      } catch (err){
          next(err)
      }
  },
    logout: (req:Request, res:Response) => {
        req.session.destroy((err) => {
            if (err)
              console.log("Error : Failed to destroy the session during logout.", err);
            req.user = null;
            console.log("logged out")
            res.status(200).send({ message: "Success" })
            // res.redirect("/");
          });
    },
    getSignup: (req:Request, res:Response) => {
        if (req.user) {
            // return res.redirect("/home")
            res.status(200).send({message: "user already logged in , redirect to home"})
          }
        res.status(200).send({ message: "Success" })
    },
    postSignup: async (req: Request, res: Response, next: NextFunction) => {
        try {
         
          const validationErrors = [];
          
          if (!validator.isEmail(req.body.email))
            validationErrors.push({ msg: "Please enter a valid email address." });
          if (!validator.isLength(req.body.password, { min: 8 }))
            validationErrors.push({ msg: "Password must be at least 8 characters long" });
          if (req.body.password !== req.body.passwordC)
            validationErrors.push({ msg: "Passwords do not match" });
      
          if (validationErrors.length) {
            req.flash("errors", validationErrors);
            return res.send({ message: validationErrors});
          }
          
          req.body.email = validator.normalizeEmail(req.body.email, {
            gmail_remove_dots: false,
          });
          
          const user = new User({
            fName: req.body.fName,
            lName: req.body.lName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
          });

          //checks for if there is an existing user in the db 

          const existingUser = await User.findOne({
            $or: [{ email: req.body.email }, { userName: req.body.userName }],
          });
      
          if (existingUser) {
            req.flash("errors", {
              msg: "Account with that email address or username already exists.",
            });
            return res.status(200).send({ message: "Account with that email address or username already exists." });
          }
      
          await user.save();
          await new Promise<void>((resolve, reject) => {
            req.logIn(user, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          });
          res.status(200).send({ message: "Success return to home" })
        } catch (err) {
          next(err);
        }
      }

}
