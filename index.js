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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_flash_1 = __importDefault(require("express-flash"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const dotenv_1 = __importDefault(require("dotenv"));
const node_cron_1 = __importDefault(require("node-cron"));
const path_1 = __importDefault(require("path"));
const database_1 = require("./config/database");
const setting_1 = require("./routes/setting");
const auth_1 = require("./routes/auth");
const home_1 = require("./routes/home");
const friends_1 = require("./routes/friends");
const profile_1 = require("./routes/profile");
const task_1 = require("./models/task");
const morgan_1 = __importDefault(require("morgan"));
const User_1 = require("./models/User");
const app = (0, express_1.default)();
// Path for .env file
dotenv_1.default.config({ path: "config/.env" });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "http://localhost:5173", credentials: true }));
//connecting to db
(0, database_1.connectDB)();
// PASSPORT
passport_1.default.use(new passport_local_1.Strategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //check if the email exists in the db
        const user = yield User_1.User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
            return done(null, false, {
                msg: "Incorrect Password",
            });
        }
        //if there is a match then compare the password to the password in the db
        const isMatch = yield (0, User_1.comparePassword)(password, user.password);
        if (isMatch) {
            return done(null, user);
        }
        return done(null, false, { msg: "Invalid email or password." });
    }
    catch (err) {
        return done(err);
    }
})));
passport_1.default.serializeUser((user, done) => {
    done(null, user._id);
});
passport_1.default.deserializeUser((id, done) => {
    User_1.User.findById(id)
        .then((user) => done(null, user))
        .catch((err) => done(err));
});
//Logging
app.use((0, morgan_1.default)("dev"));
// Setup Sessions - stored in MongoDB
app.use((0, express_session_1.default)({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({ mongoUrl: process.env.DB_STRING }),
}));
// Passport middleware
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
});
//allowing to use flash
app.use((0, express_flash_1.default)());
//determining which route to use
app.use("/settings", setting_1.settingRouter);
app.use("/", auth_1.authRouter);
app.use("/home", home_1.homeRouter);
app.use("/friends", friends_1.friendsRouter);
app.use("/profile", profile_1.profileRouter);
// Cron job for weekly interval resetting tasks
node_cron_1.default.schedule("0 0 * * MON", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield task_1.Task.bulkWrite([
            {
                updateMany: {
                    filter: { taskType: "progress" },
                    update: {
                        $set: {
                            taskProgress: { type: 0, nullable: true },
                            taskCompleted: false,
                        },
                    },
                },
            },
            {
                updateMany: {
                    filter: { taskType: "checkbox" },
                    update: {
                        $set: {
                            taskProgress: { type: null, nullable: true },
                            taskCompleted: false,
                        },
                    },
                },
            },
        ]);
    }
    catch (error) {
        console.error(error);
    }
}));
//serving the frontend 
app.use(express_1.default.static(path_1.default.join(__dirname, "./client/dist")));
app.get("*", function (_, res) {
    res.sendFile(path_1.default.join(__dirname, "./client/dist/index.html"), function (err) {
        res.status(500).send(err);
    });
});
//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server running on Port: ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map