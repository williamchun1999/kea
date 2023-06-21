import { User } from '../common/types';
import { tasksCompletedPercentage } from '../common/weeklyTasksCalculation';

type FriendMenuProps = {
  content: Array<User>
}

// Route to friend page when clicking their task
const directToFriendPage = () => {
  // Pass in required data for routing to page, will most likely need to change prop data to include some form of uuid for routing
  console.log('Clicked');
}


export const FriendMenu = (props: FriendMenuProps) => {
  return (
    <>
      {props.content.length === 0 &&
        <div className="p-4">
          <span>Unavailable. Add Friends in the Friends Menu</span>
        </div>}
      {props.content.length > 0 && <ul className="menu bg-base-200 rounded-box">
        {props.content.map((friend) => {
          const percentage = Math.round(tasksCompletedPercentage(friend.tasks))
          return (
            <li>
              <a
                href={`friends/${friend.uuid}`}
                className="flex flex-col items-start"
              >
                <div className="flex w-full justify-between">
                  <span>{friend.userName}</span>
                  <span>{`${percentage * 100}% tasks completed`}</span>
                </div>
                <progress
                  className="progress progress-primary"
                  value={`${percentage}`}
                  max="1"
                ></progress>
              </a>
            </li>
          );
        })}
      </ul>}

    </>

  )
}
