import { Request, Response, NextFunction } from "express";

import { User, IUser } from "../models/User";

export const homeController = {
    getUser: async (req:Request, res: Response) => {
        const currentUser = req.user as IUser;
        try {
            const user = await User.findById(currentUser._id)
            console.log("User info fetched");
            res.send({user})
        }
        catch(err){
        console.log(err)
        res.send({ message: err.message });
        }
    },
}