/* eslint-disable react-hooks/rules-of-hooks */
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useAsync } from "react-async-hook";
import axios from "axios";


import { FriendMenu } from "../components/FriendMenu";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useListTasks } from "../hooks/tasks";
import { User } from "../common/types";

export const Friends = () => {
  // const [friendsList, setFriendsList] = useState<string[]>([]);

  // API CALLS

  const { error, result, loading } = useAsync(async () => {
    // Get User Info API Call
    const userResponse = await useFetchUser("http://localhost:3000/friends");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }

    // setFriendsList(userResponse.data.friends);
    // console.log("friendsList",friendsList)

    //Get Friends Info API Call and the Friends Task API call
    let friendsTasks: Array<User> = [];

    const friendIDs = userResponse.data.friends;


    //Get friends Info API Call
    
    const friendsInfoEndpoint= friendIDs.map((friendID) => `http://localhost:3000/friends/${friendID}`)
    const friendInfoResp = await axios.all(friendsInfoEndpoint.map((endpoint) => useFetchUser(endpoint)))
    const friendInfoData = friendInfoResp.map((response) => {
      if (response && response.data) {
        return response.data;
      }
      throw new Error ("failed to get friends info")
    });

  
     //Get friends Task API Call
    
     const friendsTaskEndpoint= friendIDs.map((friendID) => `http://localhost:3000/friends/tasks/${friendID}`)
     const friendTasksResp = await axios.all(friendsTaskEndpoint.map((endpoint) => useListTasks(endpoint)))
     const friendTasksData = friendTasksResp.map((response) => {
       if (response && response.data) {
         return response.data;
       }
       throw new Error ("failed to get friends' tasks");
     });

  
    //add to friendsTasks array
    for (let i = 0; i < userResponse.data.friends.length; i++) {
      friendsTasks.push({
        userName: friendInfoData[i].userName,
        uuid: friendInfoData[i].id,
        tasks: friendTasksData[i],
      });
    }
    console.log("friendtasks", friendsTasks)
    return {
      friendsTasks: friendsTasks,
    };
  }, []);

  //form control
  const [formData, setFormData] = useState({
    userName: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Add Friend API here
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <>
      {error && <div>ERROR</div>}
      {loading && <div>Loading...</div>}
      {result && (
        <>
          <div className="bg-primary h-24 mb-4 sticky top-0 z-10">
            <div className="flex flex-col sm:flex-row h-full mx-4">
              <h1 className="flex grow content-center flex-wrap font-bold text-xl lg:text-3xl">
                Friends
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex content-center flex-wrap gap-x-4"
              >
                <button className="flex content-center flex-wrap">
                  Add Friend
                </button>
                <input
                  type="text"
                  placeholder="username"
                  name="userName"
                  className="input input-bordered input-primary"
                  onChange={handleChange}
                  value={formData.userName}
                />
              </form>
            </div>
          </div>
          <div className="h-screen relative sm:mx-16 lg:mx-24">
            <div>
              <FriendMenu content={result.friendsTasks} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
