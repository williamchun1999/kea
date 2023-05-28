import passport from "passport";
import validator from "validator";
import { Request, Response, NextFunction } from 'express';
import flash from "express-flash"
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
declare module "express-session"{
    interface SessionData {
        returnTo:string
    }
}

//controllers for handelling authentication functions 

export const authController =  {
    getLogin: (req:Request,res:Response) => {
        if (req.user) {
            return res.redirect("/home");
          }
        res.send("success")
    },
    postLogin: async (req:Request,res:Response, next:NextFunction) => {

        const validationErrors = [];
        if (!validator.isEmail(req.body.email))
          validationErrors.push({ msg: "Please enter a valid email address." });
        if (validator.isEmpty(req.body.password))
          validationErrors.push({ msg: "Password cannot be blank." });
      
        if (validationErrors.length) {
          req.flash("errors in validating", validationErrors);
          return res.redirect("/login");
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
              return res.redirect("/login");
            }
            req.logIn(user, (err) => {
              if (err) {
                return next(err);
              }
              req.flash("success", { msg: "Success! You are logged in." });
              res.redirect(req.session.returnTo || "/home");
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
            res.redirect("/");
          });
    },
    getSignUp: (req:Request, res:Response) => {
        if (req.user) {
            return res.redirect("/ratings");
          }
    },


}
