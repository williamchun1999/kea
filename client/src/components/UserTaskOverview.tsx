import { useState } from "react";

import TaskInput from "./TaskInput";
import { Task, TaskType } from "../common/types";
import { useUpdateTask } from "../hooks/tasks";
//import { useListTasks } from "../hooks/tasks/listTasks";

interface TaskProps {
  //type Task for the array
  tasks: Array<Task>;
  userId?: boolean;
  onUpdate: () => void; // Actual function will have no parameters
  
}

export const UserTaskOverview = ({ tasks, onUpdate , userId }: TaskProps) => {
  console.log(tasks);
  const [loading, setLoading] = useState(false);

  //toggling checkbox
  const toggleCheckbox = async({_id, taskName, taskProgress, taskProgressTotal, taskCompleted}: Task) => {
    setLoading(true);

    // Pass new value of task into database (whether it is completed or not);
    try {
      const result = await useUpdateTask(`/home/tasks/${_id}`, {
        taskName,
        taskProgress,
        taskProgressTotal,
        taskCompleted: (!taskCompleted),
      });
      if (result === null || result.status !== 200) {
        console.log('error')
      } else {
        console.log('update task api data', result.data);
            // Rerender data to display updated value
        onUpdate();
      }
      
    }
    catch (err) {
      console.log('ERR', err)
    }

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
        disabled={userId || loading}
      />
    );
  };

  return (
    <>
      <div className="taskList">
        <ul className="menu rounded-box">
          {tasks.map((task) => {
            return (
              <li>
                <label
                  className={`${
                    task.taskProgress === 1 || task.taskCompleted
                      ? "bg-success"
                      : ""
                  } bg-base-200 hover:bg-neutral label cursor-pointer flex justify-between`}
                  htmlFor={`${task._id}-edit-modal`}
                >
                  <span className="label-text">{task.taskName}</span>
                  {checkTaskType(task)}
                </label>

                {userId ? null : <TaskInput task={task} onUpdate={onUpdate}/>}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
