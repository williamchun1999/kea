import TaskInput from "./TaskInput";
import { Task, TaskType } from "../common/types";

interface TaskProps {
  //type Task for the array
  tasks: Array<Task>;

  onUpdate: (newState: Task[]) => void;
}

export const UserTaskOverview = ({ tasks, onUpdate }: TaskProps) => {
  // Create a clone where we can mutate the array and return the mutated version in our onUpdate function to rerender the page
  const tasksClone = [...tasks];

  //toggling checkbox
  function toggleCheckbox(task: Task): void {
    // Pass new value of task into database (whether it is completed or not);
    // Rerender data to display updated value
    task.taskCompleted = !task.taskCompleted;
    onUpdate(tasksClone);
  }

  const checkTaskType = (task: Task) => {
    return task.taskType === TaskType.progress && task.taskProgress !== null ? (
     
          <progress
            className="progress progress-primary w-6/12"
            value={task.taskProgress?.toString()}
            max="1"
          ></progress>
    ) : (     
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={task.taskCompleted}
          onClick={() => toggleCheckbox(task)}
        />
    );
  };

  return (
    <>
      <div className="taskList">
        <ul className="menu">
          <li className="rounded-box">
            {tasksClone.map((task) => {
              return (
                <>
                  <div
                    className={`${
                      task.taskProgress === 1 || task.taskCompleted ? "bg-success" : ""
                    } bg-base-200 hover:bg-neutral`}
                  >
                    <label
                      className="label cursor-pointer flex-1 justify-between"
                      htmlFor="edit-task-modal"
                    >
                      <span className="label-text">{task.taskName}</span>
                    </label>
                    {checkTaskType(task)}
                  </div>
                  <TaskInput task={task} />
                </>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};
