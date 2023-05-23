

import { DeleteButton } from "../components/button/button";
import { currentUserDataResponse } from '../common/fake_data';



export const Settings = () => {
  return (
    <div>
    <h1 className="text-4xl pt-14 pb-5 mb-10 text-center bg-primary shadow-md">More</h1>
    <DeleteButton userName={currentUserDataResponse.userName}/>
    </div>
  )
}
