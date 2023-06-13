import mongoose, { Schema, Types } from "mongoose";

export interface ITask extends Document {
  _id: Types.ObjectId;
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
});

export const Task = mongoose.model('Task', schema);
