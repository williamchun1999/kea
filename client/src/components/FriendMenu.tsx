import { User } from '../common/types'

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
    <ul className="menu bg-base-200 rounded-box">
    {props.content.map((friend) => {
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
  )
}
