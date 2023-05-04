type Task = {
  taskName: string;
  taskType: string;
  taskCompleted: boolean;
  taskProgress: number | null;
};

type FriendsTasksProps = {
  friendsTasks: Array<{
    userName: string;
    tasks: Array<Task>;
  }>;
};

const checkTaskType = (task: Task) => {
  return task.taskType === "Progress" && task.taskProgress !== null ? (
    <progress
      className="progress progress-primary"
      value={task.taskProgress?.toString()}
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
      <div className="flex justify-between">
        <h3>Your Friends</h3>
        {/* Button for See All */}
        <button className="btn btn-link">See All</button>
      </div>
      <ul className="menu bg-base-200 rounded-box">
        {friendsTasks.map((friend) => {
          return (
            <li>
              <a className="flex flex-col items-start">
                <span>{friend.userName}</span>
                <span>{friend.tasks[0].taskName}</span>
                {checkTaskType(friend.tasks[0])}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
