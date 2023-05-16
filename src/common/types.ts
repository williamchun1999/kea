export type Task = {
  taskName: string;
  taskType: string;
  taskCompleted: boolean;
  taskProgress: number | null;
};
export type User = {
  userName: string;
  tasks: Array<Task>;
};