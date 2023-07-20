import { User } from "../common/types";
import { tasksCompletedPercentage } from "../common/weeklyTasksCalculation";
type FriendsTasksProps = {
  friendsTasks: Array<User>;
};



export const FriendTaskOverview = ({ friendsTasks }: FriendsTasksProps) => {

  return (
    <>
      {friendsTasks.length === 0 &&
        <div className="p-4">
          <span>Unavailable. Add Friends in the Friends Menu</span>
        </div>}
      {friendsTasks.length > 0 &&
        <ul className="menu bg-base-200 rounded-box">
          {friendsTasks.map((friend) => {
             

            const percentage = Math.round(tasksCompletedPercentage(friend.tasks)*100)
            return (
              <li>
                <a
                  href={`/kea/friends/${friend.uuid}`}
                  className="flex flex-col items-start"
                >
                  <div className="flex w-full justify-between">
                    <span>{friend.userName}</span>
                    <span>{`${percentage}% tasks completed`}</span>
                  </div>
                  <progress
                    className="progress progress-primary"
                    value={`${percentage}`}
                    max="100"
                  ></progress>
                </a>
              </li>
            );
          })}
        </ul>
      }

    </>
  );
};
