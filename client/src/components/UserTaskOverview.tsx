import { useState } from "react";

import TaskInput from "./TaskInput";
import { Task, TaskType } from "../common/types";
//import { useListTasks } from "../hooks/tasks/listTasks";

interface TaskProps {
  //type Task for the array
  tasks: Array<Task>;

  onUpdate: (newState: Task[]) => void; // Actual function will have no parameters
  
}

export const UserTaskOverview = ({ tasks, onUpdate }: TaskProps) => {

  const [loading, setLoading] = useState(false);
  //const { data, loading, error } = useListTasks<Task[]>("http://localhost:5000/tasks?userId=1", (rawData) => rawData);

  /*if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>;
  }*/

  // Temporary clone due to lack of api calls
  const tasksClone = [...tasks];

  //toggling checkbox
  function toggleCheckbox(task: Task): void {
    setLoading(true);
    // Pass new value of task into database (whether it is completed or not);
    task.taskCompleted = !task.taskCompleted;
    // Rerender data to display updated value
    onUpdate(tasksClone);
    setLoading(false);

  }

  const checkTaskType = (task: Task) => {
    return task.taskType === TaskType.progress && task.taskProgress !== null ? (
      <progress
        className="progress progress-primary w-6/12"
        value={`${task.taskProgress / task.taskProgressTotal!}`}
        max="1"
      ></progress>
    ) : (
      <input
        type="checkbox"
        className="checkbox checkbox-primary"
        checked={task.taskCompleted}
        onClick={() => toggleCheckbox(task)}
        disabled={loading}
      />
    );
  };

  return (
    <>
      <div className="taskList">
        <ul className="menu rounded-box">
          {tasksClone.map((task) => {
            return (
              <li>
                <label
                  className={`${
                    task.taskProgress === 1 || task.taskCompleted
                      ? "bg-success"
                      : ""
                  } bg-base-200 hover:bg-neutral label cursor-pointer flex justify-between`}
                  htmlFor={`${task.id}-edit-modal`}
                >
                  <span className="label-text">{task.taskName}</span>
                  {checkTaskType(task)}
                </label>

                <TaskInput task={task} onUpdate={onUpdate}/>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
