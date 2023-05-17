export type Task = {
  taskName: string;
  taskType: string;
  taskCompleted: boolean;
  taskProgress: number | null;
};
export type User = {
  userName: string;
  uuid: string;
  tasks: Array<Task>;
};