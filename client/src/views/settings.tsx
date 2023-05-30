

import { DeleteButton, AddFriends, LogOutButton, EditUserButton  } from "../components/button/button";
import { currentUserDataResponse } from '../common/fake_data';



export const Settings = () => {
  return (
    <div>
    <h1 className="text-4xl pt-14 pb-5 mb-10 text-center bg-primary shadow-md">More</h1>
    <div className="flex flex-col gap-3">
    
    <EditUserButton /> 
    <AddFriends />
    <DeleteButton userName={currentUserDataResponse.userName}/>
    <LogOutButton />
    </div>
    </div>
  )
}
