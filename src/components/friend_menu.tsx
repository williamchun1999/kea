import { Task, User } from '../common/types'

type FriendMenuProps = {
  content: Array<User>
}

// Route to friend page when clicking their task
const directToFriendPage = () => {
  // Pass in required data for routing to page, will most likely need to change prop data to include some form of uuid for routing?
  console.log('Clicked');
}

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

export const FriendMenu = (props: FriendMenuProps) => {
  return (
    <ul className="menu bg-base-200 rounded-box">
      {props.content.map((friend) => {
        return (
          <li>
            <a className="flex flex-col items-start" onClick={directToFriendPage}>
              <span>{friend.userName}</span>
              <span>{friend.tasks[0].taskName}</span>
              {checkTaskType(friend.tasks[0])}
            </a>
          </li>
        );
      })}
    </ul>
  )
}