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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const User_1 = require("../models/User");
exports.userController = {
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currentUser = req.user;
        const { userId } = req.params;
        console.log("userID:", userId);
        try {
            const { _id, fName, lName, friends, userName, email } = yield User_1.User.findById(userId !== null && userId !== void 0 ? userId : currentUser._id);
            console.log("User info fetched");
            res.send({
                id: _id,
                fName,
                lName,
                friends,
                userName,
                email,
            });
        }
        catch (err) {
            console.log(err);
            res.status(404).send({ message: err.message });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currentUser = req.user;
        try {
            yield User_1.User.deleteOne({ _id: currentUser._id });
            console.log("Deleted User");
            res.send({ message: "Success" });
        }
        catch (err) {
            console.log(err);
            res.send({ message: err.message });
        }
    }),
    addFriend: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //get currentUser's ID
        const currentUser = req.user;
        //get the userName of a friend that user put
        const friendUserName = req.params.friend;
        try {
            //check if the userName exists
            const friend = yield User_1.User.findOne({ userName: friendUserName });
            if (!friend) {
                return res.send({ message: "Username does not exist" });
            }
            //find user and update the friends array only if it doesn't already exist
            const user = yield User_1.User.findOneAndUpdate({ _id: currentUser._id }, { $push: { friends: friend._id } }, { new: true });
            console.log("Followed Friend");
            res.send(user.friends);
        }
        catch (err) {
            console.log(err);
            res.send({ message: err.message });
        }
    }),
    deleteUserFromFriendsLists: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //get currentUser's ID
        const currentUser = req.user;
        try {
            //find users with the friendsId in friends List and update the friends array
            const result = yield User_1.User.updateMany({ friends: currentUser._id }, {
                $pull: {
                    friends: currentUser._id,
                },
            });
            console.log("Deleted user from friends list of all users");
            console.log("deleteUserFromFriendsList Result", result);
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err);
            res.status(409).send({ message: err.message });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //assuming that the form already contains the information for user
        const { fName, lName, userName, email } = req.body;
        //get currentUser's ID
        const currentUser = req.user;
        // Update User Body
        const updatedUser = {
            fName,
            lName,
            userName,
            email,
        };
        try {
            yield User_1.User.findByIdAndUpdate(currentUser._id, updatedUser, { new: true });
            console.log("Updated User Information");
            return res.status(200).send(updatedUser);
        }
        catch (err) {
            console.log(err);
            res.status(409).send({ message: err.message });
        }
    }),
};
//# sourceMappingURL=user.js.map