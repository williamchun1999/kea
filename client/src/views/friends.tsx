/* eslint-disable react-hooks/rules-of-hooks */
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useAsync } from "react-async-hook";
import axios from "axios";

import { axiosInstance  } from "../axios";
import { FriendMenu } from "../components/FriendMenu";
import { friendsTaskResponse } from "../common/fakeData";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useListTasks } from "../hooks/tasks";

export const Friends = () => {
  const [friendsList, setFriendsList] = useState<string[]>([]);


  // API CALLS 
  
  const { error, result, loading } = useAsync(async () => {

    // Get User Info API Call
    const userResponse = await useFetchUser("http://localhost:3000/friends");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }
    setFriendsList(userResponse.data.friends);
    // console.log("friendsList",friendsList)
    // console.log("userResponse",userResponse.data.friends)
    
    //Get Friends Info API Call and the Friends Task API call

  
    // if (friendsList.length === 0) {
    //   continue;
    // }
    // else {
      // axios
      //   .all(userResponse.data.friends.map((friendID) => useListTasks(`http://localhost:3000/friends/${friendID}`)))
      //   .then((data) => console.log("data",data)
      // );

    //implementation for when there are no friends in user 
      try {
        const friendIDs = userResponse.data.friends;

        //Get friends Info API Call 
        const friendsInfoEndpoint = friendIDs.map((friendID) => useFetchUser(`http://localhost:3000/friends/${friendID}`));
        const friendsInfoRes = await axios.all(friendsInfoEndpoint);
        const friendInfoData = friendsInfoRes.map((response) => response ? response.data : null);
        console.log("infodata", friendInfoData);

        //Get friends Task API Call 
        const friendsTaskEndpoint = friendIDs.map((friendID) => useListTasks(`http://localhost:3000/friends/tasks/${friendID}`));
        const friendsTaskRes = await axios.all(friendsTaskEndpoint);
        const friendTasksData = friendsTaskRes.map((response) => response ? response.data : null);
        console.log("tasksdata", friendTasksData);

      } catch (error) {
        console.error("Error:", error);
      }

    


  //     // Grab Friend Tasks
  //     const friendTasksResponse = await useListTasks(
  //       `/home/tasks/${userResponse.data.friends[i]}`
  //     );

  //     if (friendTasksResponse === null || friendTasksResponse.status !== 200) {
  //       throw new Error("Failed to fetch tasks");
  //     }

  //     friendsTasks.push({
  //       userName: friendUserDataResponse.data.userName,
  //       uuid: friendUserDataResponse.data.id,
  //       tasks: friendTasksResponse.data,
  //     })
  //   }
  //   return {
  //     userData: userResponse.data,
  //     friendsTasks,
  //   }
  }, []);


  //form control 
  const [formData, setFormData] = useState({
    userName: "",
  });
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    // Add Friend API here
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
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
            <button className="flex content-center flex-wrap">Add Friend</button>
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
          <FriendMenu content={friendsTaskResponse} />
        </div>
       
      </div>
    </>
  );
};

