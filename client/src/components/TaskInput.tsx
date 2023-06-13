import { useState } from "react";
import { Task, TaskType } from "../common/types";
import { useUpdateTask } from "../hooks/tasks";

interface TaskInputProps {
  task: Task;
  onUpdate: () => void;
}

const TaskInput = ({ task, onUpdate }: TaskInputProps) => {
  const [currentName, setName] = useState(task.taskName);
  const [taskProgress, setTaskProgress] = useState(task.taskProgress);
  const [taskProgressTotal, setTaskProgressTotal] = useState(
    task.taskProgressTotal
  );

  const updateTask = async () => {

    if ((taskProgress !== null && isNaN(taskProgress)) || (taskProgressTotal !== null && isNaN(taskProgressTotal))) {
      console.log('needs to be number');
      return;
    }
    if (taskProgress! > taskProgressTotal!) {
      console.log('task progress needs to be lower or the same value as progress total');
      return;
    }
      /* check if task is checkbox
  if it is, leave completed value as it originally was
  check if task progress === task progress total,
  if it is, include true to task completed property in the body, else make it false */
      try {
        const result = await useUpdateTask(`/home/tasks/${task._id}`, {
          taskName: currentName,
          taskProgress,
          taskProgressTotal,
          taskCompleted: task.taskCompleted === null ? task.taskCompleted : taskProgress === taskProgressTotal ? true : false
        });
        if (result === null || result.status !== 200) {
          console.log('error')
        } else {
          console.log('update task api data', result.data);
          /* callback of fetch tasks */
          onUpdate();
        }

      }
      catch (err) {
        console.log('ERR', err)
      }

  }

  //close the modals
  const deleteTask = () => {
    /* delete task api call */
    /* callback of fetch tasks */
  }

  return (
    <>
      {/* modal setup */}
      <input
        type="checkbox"
        id={`${task._id}-edit-modal`}
        className="modal-toggle"
      />

      <div className="modal bg-transparent">
        {/* modal for editing tasks */}
        <div className="modal-box">
          {/* top elements (title, exit button) */}
          <div className="top flex flex-1 justify-between">
            <h3 className="text-font-bold text-lg">Edit Task</h3>
            <label
              className="btn btn-circle bg-transparent border-0"
              htmlFor={`${task._id}-edit-modal`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          {/* inputs */}
          <div className="editTask flex flex-col">
            <label htmlFor="taskName" className="block w-full">
              Task Name:
            </label>
            <input
              type="text"
              id="taskName"
              placeholder={`${task.taskName}`}
              className="input input-bordered w-full"
              onChange={(e) => setName(e.target.value)}
            />

            {task.taskType === TaskType.progress ? (
              <>
                <label htmlFor="taskProgress" className="block w-full">
                  Progress:
                </label>
                <input
                  type="number"
                  id="taskProgress"
                  placeholder={`Current Progress: ${task.taskProgress}`}
                  min="0"
                  max={`${task.taskProgressTotal}`}
                  className="input input-bordered w-full"
                  onChange={(e) => setTaskProgress(Number(e.target.value))}
                />
                <label htmlFor="taskProgressTotal" className="block w-full">
                  Out of:
                </label>
                <input
                  type="number"
                  id="taskProgressTotal"
                  placeholder={`Total: ${task.taskProgressTotal}`}
                  min="1"
                  max={"100"}
                  className="input input-bordered w-full"
                  onChange={(e) => setTaskProgressTotal(Number(e.target.value))}
                />
              </>
            ) : null}
          </div>

          {/* update & delete buttons */}
          <div className="modal-action flex-col space-x-0">
            <label
              htmlFor={`${task._id}-edit-modal`}
              className="btn btn-block"
              onClick={() => updateTask()}
            >
              Update
            </label>
            <label
              htmlFor={`${task._id}-edit-modal`}
              className="btn btn-block"
              onClick={() => deleteTask()}
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
