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
exports.taskController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const task_1 = require("../models/task");
exports.taskController = {
    getTasks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currentUser = req.user;
        const { userId } = req.params;
        try {
            const tasks = yield task_1.Task.find({
                userId: userId !== null && userId !== void 0 ? userId : currentUser._id,
            }).exec();
            res.status(200).json(tasks);
        }
        catch (error) {
            res.status(404).json({ message: error.message });
        }
    }),
    createTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { taskName, taskType, taskProgress, taskProgressTotal } = req.body;
        const currentUser = req.user;
        if (!mongoose_1.default.Types.ObjectId.isValid(currentUser._id))
            return res.status(404).send(`No task with user id: ${currentUser._id}`);
        const newTask = new task_1.Task({
            userId: currentUser._id,
            taskName,
            taskType,
            taskProgress,
            taskProgressTotal,
            taskCompleted: false,
        });
        try {
            yield newTask.save();
            res.status(201).json(newTask);
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    }),
    updateTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { taskName, taskProgress, taskProgressTotal, taskCompleted } = req.body;
        const { taskId } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(taskId))
            return res.status(404).send(`No task with task id: ${taskId}`);
        const updatedTask = {
            taskName,
            taskProgress,
            taskProgressTotal,
            taskCompleted,
        };
        try {
            yield task_1.Task.findByIdAndUpdate(taskId, updatedTask, { new: true });
            return res.status(200).json(updatedTask);
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    }),
    deleteTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { taskId } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(taskId))
            return res.status(404).send(`No task with task id: ${taskId}`);
        yield task_1.Task.findByIdAndDelete(taskId);
        res.status(200).json({ message: "Post deleted successfully." });
    }),
    deleteAllTasks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currentUser = req.user;
        try {
            const result = yield task_1.Task.deleteMany({ userId: currentUser._id });
            console.log("Deleted all tasks from user");
            console.log("DeleteAllTasks Result", result);
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err);
            res.status(409).send({ message: err.message });
        }
    }),
};
//# sourceMappingURL=task.js.map