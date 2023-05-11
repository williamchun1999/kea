import { FriendMenu } from '../components/friend_menu';
import { friendsTaskResponse } from '../common/fake_data';

export const Friends = () => {

  return (
    <div>
      <FriendMenu content={friendsTaskResponse} />
    </div>
  )
}
