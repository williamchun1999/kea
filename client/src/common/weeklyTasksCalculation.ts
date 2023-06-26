import { Task } from "./types";

export const tasksCompletedPercentage = (tasks: Array<Task>) => {
  const amountOfTasks = tasks.length;
  if (amountOfTasks > 0) {
    return (
      tasks.reduce((sum, curr) => (curr.taskCompleted ? sum + 1 : sum), 0) /
      amountOfTasks
    );
  } 
  else {
    return 0;
  }
 
};
