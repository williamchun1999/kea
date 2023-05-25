
import { Request, Response, NextFunction } from 'express';


import {User} from "../models/User";

export const settingController = {

    deleteUser: async(req:Request ,res:Response) => {
        try{
            await User.deleteOne({_id : req.params.id })
            console.log("Deleted User")
            res.redirect("/")
        } catch (err) {
            res.redirect("/settings")
        }
    },
    addFriend: async(req:Request ,res:Response) => {
        //get the email of a friend that user put 
        const friendsId = req.params.friend

        try{
            await User.findOneAndUpdate({_id : req.params.id}, {$push: {friends:friendsId}} )
            console.log("Followed Friend")
            res.redirect("/settings")
        } catch (err) {
            res.redirect("/settings")
        }
    },
    updateUser: async(req:Request ,res:Response) => {

        //assuming that the form already contains the information for user
        const {fName, lName, userName, email, password, friends} = req.body
        
        try{
            await User.findOneAndUpdate(
                {_id : req.params.id}, 
                {$set: {
                    fName : fName,
                    lName: lName,
                    userName : userName,
                    email: email, 
                    password: password,
                    friends: friends,
                },
                },
                {new : true}
                )
            console.log("Updated User Information")
            res.redirect("/settings")
        } catch (err) {
            res.redirect("/settings")
        }
    },
}
