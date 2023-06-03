import { Request, Response, NextFunction } from "express";

import { User, IUser } from "../models/User";

export const userController = {

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
  deleteUser: async (req: Request, res: Response) => {
    const currentUser = req.user as IUser;
    try {
      await User.deleteOne({ _id: currentUser._id });
      console.log("Deleted User");
      res.send({ message: 'Success' })
    } catch (err) {
    console.log(err)
      res.send({ message: err.message });
    }
  },
  addFriend: async (req: Request, res: Response) => {
    //get currentUser's ID
    const currentUser = req.user as IUser
    
    //get the userName of a friend that user put
    const  friendsId= req.params.friend;

    try {

       //check if the userName exists 
      const friend = await User.findOne({userName: friendsId})

      if (!friend){
        return res.send({ message: "Username does not exist" });
      }

      //find user and update the friends array only if it doesn't already exist 
      const user = await User.findOneAndUpdate(
        { _id: currentUser._id},
        { $addToSet: { friends: friend._id } },
        { new: true }
      );

      console.log("Followed Friend");
      
      res.send(user.friends);

    } catch (err) {
    console.log(err)
      res.send({ message: err.message });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    //assuming that the form already contains the information for user
    const { fName, lName, userName, email, password, friends } = req.body;

    //get currentUser's ID
    const currentUser = req.user as IUser
    try {
      const user = await User.findOneAndUpdate(
        { _id: currentUser._id },
        {
          $set: {
            fName: fName,
            lName: lName,
            userName: userName,
            email: email,
            password: password,
            friends: friends,
          },
        },
        { new: true }
      );

      if (!user) {
        return res.send({ message: "User not found" });
      }

      console.log("Updated User Information");
      res.send(user)
    } catch (err) {
    console.log(err)
      res.send({ message: err.message });
    }
  },
};
