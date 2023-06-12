export enum TaskType {
  progress = "progress",
  checkbox = "checkbox",

}

export type Task = {
  userId: string;
  taskName: string;
  taskType: TaskType;
  taskCompleted: boolean;
  taskProgress: number | null;
  taskProgressTotal: number | null;
  _id: string;
  

};
export type User = {
  userName: string;
  uuid: string;
  tasks: Array<Task>;
};