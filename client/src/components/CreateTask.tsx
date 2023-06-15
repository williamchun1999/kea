import React, { ChangeEventHandler, useState } from "react";
import {} from "../common/responseTypes";
import { TaskType } from "../common/types";
import { TextBox } from "./Form";
import { useCreateTask } from "../hooks/tasks";
export const CreateTask = ({ callback }: { callback: () => void }) => {
  const [error, setError] = useState(false);
  const [selectedValue, updateSelectedValue] = useState(TaskType.checkbox);
  const [createTaskFormData, setCreateTaskFormData] = useState<{
    taskName: string;
    taskType: TaskType;
    taskProgress: number | null;
    taskProgressTotal: number | null;
  }>({
    taskName: "",
    taskType: TaskType.checkbox,
    taskProgress: null,
    taskProgressTotal: null,
  });

  const handleSelectedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSelectedValue(event.target.value as TaskType);
    if (event.target.value === TaskType.checkbox) {
      setCreateTaskFormData((prev) => {
        return {
          ...prev,
          taskType: TaskType.checkbox,
          taskProgress: null,
          taskProgressTotal: null,
        };
      });
    } else {
      setCreateTaskFormData((prev) => {
        return {
          ...prev,
          taskType: TaskType.progress,
          taskProgress: 0,
          taskProgressTotal: 1,
        };
      });
    }
  };

  //make controlled inputs from React's end
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCreateTaskFormData((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.name === "taskProgressTotal"
            ? Number(event.target.value)
            : event.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await useCreateTask("/home/tasks", createTaskFormData);
      if (result === null || result.status !== 201) {
        setError(true);
      } else {
        console.log("create task api data", result.data);
        callback();
      }
    } catch (error) {
      setError(true);
      console.log("ERROR: ", error);
    }
  };

  return (
    <>
      {error && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Creating Task Failed</span>
          <button className="btn btn-sm" onClick={() => setError(false)}>
            Close
          </button>
        </div>
      )}
      <input type="checkbox" id="addTask" className="modal-toggle" />
      <div className="modal">
        <form className="modal-box" onSubmit={handleSubmit}>
          {/** title and exit button */}
          <div className="top flex flex-1 justify-between">
            <h3 className="font-bold text-lg">Create New Task</h3>
            <label
              className="btn btn-circle bg-transparent border-0"
              htmlFor="addTask"
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

          {/* new task name input */}
          <TextBox
            title="Task Name"
            name="taskName"
            value={createTaskFormData.taskName}
            controlInput={handleChange}
            type="text"
          />

          {/* checkbox or progress bar? */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Checkbox</span>
              <input
                type="radio"
                name="taskType"
                id="checkbox"
                value={TaskType.checkbox}
                className="radio checked:bg-[#e0b0ff]"
                checked={selectedValue === TaskType.checkbox}
                onChange={handleSelectedValue}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Progress Bar</span>
              <input
                type="radio"
                name="taskType"
                id="progressBar"
                value={TaskType.progress}
                className="radio checked:bg-[#e0b0ff]"
                checked={selectedValue === TaskType.progress}
                onChange={handleSelectedValue}
              />
            </label>
          </div>

          {selectedValue === TaskType.progress && (
            <div className="progressInput flex flex-1 ">
              <input
                type="number"
                id="taskProgressTotal"
                name="taskProgressTotal"
                placeholder="total"
                min={"1"}
                className="input input-bordered w-2/4"
                onChange={handleChange}
              />
            </div>
          )}
          {/* buttons */}
          <div className="modal-action flex-col space-x-0">
            <label
              htmlFor="addTask"
              className="btn btn-block"
              onClick={() => handleSubmit()}
            >
              Create
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
