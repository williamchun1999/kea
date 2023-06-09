import { Request, Response } from "express";

import { User, IUser } from "../models/User";

export const userController = {
  getUser: async (req: Request, res: Response) => {
    const currentUser = req.user as IUser;
    const { userId } = req.params;
    console.log("userID:", userId);
    try {
      const { _id, fName, lName, friends, userName, email } =
        await User.findById(userId ?? currentUser._id);
      console.log("User info fetched");
      res.send({
        id: _id,
        fName,
        lName,
        friends,
        userName,
        email,
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({ message: err.message });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    const currentUser = req.user as IUser;
    try {
      await User.deleteOne({ _id: currentUser._id });
      console.log("Deleted User");
      res.send({ message: "Success" });
    } catch (err) {
      console.log(err);
      res.send({ message: err.message });
    }
  },
  addFriend: async (req: Request, res: Response) => {
    //get currentUser's ID
    const currentUser = req.user as IUser;

    //get the userName of a friend that user put
    const friendUserName = req.params.friend;

    try {
      //check if the userName exists
      const friend = await User.findOne({ userName: friendUserName });

      if (!friend) {
        return res.send({ message: "Username does not exist" });
      }

      //find user and update the friends array only if it doesn't already exist
      const user = await User.findOneAndUpdate(
        { _id: currentUser._id },
        { $push: { friends: friend._id } },
        { new: true }
      );

      console.log("Followed Friend");

      res.send(user.friends);
    } catch (err) {
      console.log(err);
      res.send({ message: err.message });
    }
  },

  deleteUserFromFriendsLists: async (req: Request, res: Response) => {
    //get currentUser's ID
    const currentUser = req.user as IUser;

    try {
      //find users with the friendsId in friends List and update the friends array
      const result = await User.updateMany(
        { friends: currentUser._id },
        {
          $pull: {
            friends: currentUser._id,
          },
        }
      );

      console.log("Deleted user from friends list of all users");
      console.log("deleteUserFromFriendsList Result", result);
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(409).send({ message: err.message });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    //assuming that the form already contains the information for user
    const { fName, lName, userName, email } = req.body;

    //get currentUser's ID
    const currentUser = req.user as IUser;

    // Update User Body
    const updatedUser = {
      fName,
      lName,
      userName,
      email,
    };
    try {
      await User.findByIdAndUpdate(currentUser._id, updatedUser, { new: true });
      console.log("Updated User Information");
      return res.status(200).send(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(409).send({ message: err.message });
    }
  },
};
