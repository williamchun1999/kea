/* eslint-disable react-hooks/rules-of-hooks */
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useAsync } from "react-async-hook";
import axios from "axios";


import { FriendMenu } from "../components/FriendMenu";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useListTasks } from "../hooks/tasks";
import { User } from "../common/types";

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
    let friendsTasks: Array<User> = [];

    //implementation for when there are no friends in user
    // if (friendsList.length === 0) {
    //   friendsTasks = []

    // }
    const friendIDs = userResponse.data.friends;

    //Get friends Info API Call
    const friendsInfoEndpoint = friendIDs.map((friendID) =>
      useFetchUser(`http://localhost:3000/friends/${friendID}`)
    );
    const friendsInfoRes = await axios.all(friendsInfoEndpoint);
    const friendInfoData = friendsInfoRes.map((response) =>
      response ? response.data : null
    );
    console.log("infodata", friendInfoData);

    //Get friends Task API Call
    const friendsTaskEndpoint = friendIDs.map((friendID) =>
      useListTasks(`http://localhost:3000/friends/tasks/${friendID}`)
    );
    const friendsTaskRes = await axios.all(friendsTaskEndpoint);
    const friendTasksData = friendsTaskRes.map((response) =>
      response ? response.data : null
    );
    console.log("tasksdata", friendTasksData);

    // if (friendTasksData === null || friendsInfoData === null) {

    // }
    //add to friendsTasks array
    for (let i = 0; i < friendsList.length; i++) {
      friendsTasks.push({
        userName: friendInfoData[i].userName,
        uuid: friendInfoData[i].id,
        tasks: friendTasksData[i],
      });
    }
    console.log("friendsTasks", friendsTasks);
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

  console.log('result', result)
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
