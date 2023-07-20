"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.comparePassword = void 0;
//makes the userSchema
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.default.Schema({
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    friends: {
        type: [String],
        default: [],
    },
});
//password hash middleware
UserSchema.pre("save", function save(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt_1.default.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt_1.default.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
// Helper method for validating user's password.
const comparePassword = (candidatePassword, userPassword) => {
    return bcrypt_1.default.compare(candidatePassword, userPassword);
};
exports.comparePassword = comparePassword;
exports.User = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=User.js.map