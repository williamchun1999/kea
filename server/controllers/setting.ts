// import express from "express"
// import mongoose from "mongoose"
import { Request, Response, NextFunction } from 'express';


const User = require("../models/User")

const router = express.Router()

module.exports = {

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
        let friendsId = req.params.friend

        try{
            await User.findOneAndUpdate({_id : req.params.id}, {$push: {friends:friendsId}} )
            console.log("Added User")
            res.redirect("/settings")
        } catch (err) {
            res.redirect("/settings")
        }
    },
}