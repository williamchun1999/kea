import { TaskType } from "./types";

export type CreateTaskBody = {
    taskName: string;
    taskType: TaskType;
    taskProgress: number | null;
    taskProgressTotal: number | null;
}
export type UpdateTaskBody = {
    taskName: string;
    taskProgress: number | null;
    taskProgressTotal: number | null;
    taskCompleted: boolean;
}