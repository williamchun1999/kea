import { Task, TaskType, User } from "../common/types";

type FriendsTasksProps = {
  friendsTasks: Array<User>;
};

const calculateWeeklyPercentage = () => {}

export const FriendTaskOverview = ({ friendsTasks }: FriendsTasksProps) => {

  return (
    <>
      <ul className="menu bg-base-200 rounded-box">
        {friendsTasks.map((friend) => {
          return (
            <li>
              <a
                href={`friends/${friend.uuid}`}
                className="flex flex-col items-start"
              >
                <span>{friend.userName}</span>
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
