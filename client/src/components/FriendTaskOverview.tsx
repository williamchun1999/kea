import { Task, TaskType, User } from "../common/types";

type FriendsTasksProps = {
  friendsTasks: Array<User>;
};
const checkTaskType = (task: Task) => {
  return task.taskType === TaskType.progress && task.taskProgress !== null ? (
    <progress
      className="progress progress-primary"
      value={`${task.taskProgress / task.taskProgressTotal!}`}
      max={"1"}
    ></progress>
  ) : (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          checked={task.taskCompleted}
          readOnly
          className="checkbox checkbox-primary"
        />
      </label>
    </div>
  );
};

export const FriendTaskOverview = ({ friendsTasks }: FriendsTasksProps) => {
  return (
    <>
      <ul className="menu bg-base-200 rounded-box">
        {friendsTasks.map((friend) => {
          return (
            <li>
              <a
                href={`profile/${friend.uuid}`}
                className="flex flex-col items-start"
              >
                <span>{friend.userName}</span>
                <span>Weekly Task Progress</span>
                <progress
                  className="progress progress-primary w-6/12"
                  value={``}
                  max="1"
                ></progress>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
