//middleware to ensure user is logged in before using the app 
import { Request, Response, NextFunction } from 'express';


export const authMiddleware = {
    ensureAuth: function (req:Request, res:Response, next:NextFunction) {
      console.log( 'is authenticated: ', req.isAuthenticated())
      if (req.isAuthenticated()) {
        return next();
      } else {
        return res.send({ message: "User not a match" });
      }
    }
  };

