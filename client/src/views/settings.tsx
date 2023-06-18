import { useAsync } from "react-async-hook";
import { useFetchUser } from "../hooks/user/fetchUser";
import { DeleteButton, AddFriends, LogOutButton, EditUserButton  } from "../components/button/button";
import { currentUserDataResponse } from '../common/fakeData';



export const Settings = () => {


// API CALLS
  const { error, result, loading } = useAsync(async () => {
    // Get User Info API Call
    const userResponse = await useFetchUser("http://localhost:3000/settings");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }
    return userResponse.data;
  }, []);


  return (
    <div>
    {error && <div>ERROR</div>}
    {result && (
      <>
      <h1 className="text-4xl pt-14 pb-5 mb-10 text-center bg-primary shadow-md">More</h1>
      <div className="flex flex-col gap-3">
        <EditUserButton user={result} /> 
        <AddFriends />
        <DeleteButton userName={result.userName}/>
        <LogOutButton />
      </div>
      </>
   )}
  </div>
    )
  }
  