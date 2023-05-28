import { Request, Response, NextFunction } from "express";

import { User } from "../models/User";

export const settingController = {
  deleteUser: async (req: Request, res: Response) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      console.log("Deleted User");
      res.send({ message: 'Success' })
    } catch (err) {
      res.send({ message: err.message });
    }
  },
  addFriend: async (req: Request, res: Response) => {
    //get the email of a friend that user put
    const friendsId = req.params.friend;

    //find user and update the friends array
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { friends: friendsId } },
        { new: true }
      );

      if (!user) {
        return res.send({ message: "User not found" });
      }

      console.log("Followed Friend");
      res.send(user.friends);
    } catch (err) {
      res.send({ message: err.message });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    //assuming that the form already contains the information for user
    const { fName, lName, userName, email, password, friends } = req.body;

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
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
      res.send({ message: err.message });
    }
  },
};
