import { Task } from "./types";

export const tasksCompletedPercentage = (tasks: Array<Task>) => {
  const amountOfTasks = tasks.length;
  return (
    tasks.reduce((sum, curr) => (curr.taskCompleted ? sum + 1 : sum + 0), 0) /
    amountOfTasks
  );
};
