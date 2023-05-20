export enum TaskType {
  progress = "progress",
  checkbox = "checkbox",

}

export type Task = {
  taskName: string;
  taskType: TaskType;
  taskCompleted: boolean;
  taskProgress: number | null;
  taskProgressTotal: number | null;

};
export type User = {
  userName: string;
  uuid: string;
  tasks: Array<Task>;
};