import { CSSProperties } from "react";

import bear from "../../assets/bear.png";

type CardProps = {
  tasks: Array<{
    taskName: string;
    taskType: string;
    taskCompleted: boolean;
    taskProgress: number | null;
  }>;
};

export const Card = (props: CardProps) => {

  let countTaskDone = 0
  let totalTask = props.tasks.length
  props.tasks.forEach(task => task.taskCompleted ? countTaskDone += 1 : countTaskDone)
  let percentComplete = (countTaskDone / totalTask) * 100

  return (
    <>
      <div
        className="card w-full bg-primary text-primary-content ">
        <div className="flex justify-evenly items-center h-48">
          <div>
            <h2 className="card-title">Today's Goal:</h2>
            <p className="text-base-500">
              {countTaskDone} of {totalTask} completed
              <img src={bear} className="w-32 h-full"></img>
            </p>
          </div>
          <div
            className="radial-progress text-base-500"
            style={{ "--value": percentComplete, "--size": "7rem", "--thickness": "0.8rem" } as CSSProperties}
          >
            {Math.round(percentComplete)}%
          </div>
        </div>
      </div>
    </>
  );
};
