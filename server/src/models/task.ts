import mongoose, { Schema } from "mongoose";

export interface ITask {
  userId: String;
  taskName: String;
  taskType: String;
  taskCompleted: Boolean;
  taskProgress: {
    type: Number;
    nullable: true;
  };
  taskProgressTotal: {
    type: Number;
    nullable: true;
  };
  lastUpdated: Date;
}
const schema = new Schema<ITask>({
  userId: String,
  taskName: String,
  taskType: String,
  taskCompleted: Boolean,
  taskProgress: {
    type: Number,
    default: null,
  },
  taskProgressTotal: {
    type: Number,
    default: null,
  },
  lastUpdated: Date,
});

export const Task = mongoose.model('Task', schema);
