/* eslint-disable react-hooks/rules-of-hooks */
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useAsync } from "react-async-hook";
import axios from "axios";

import { FriendMenu } from "../components/FriendMenu";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useListTasks } from "../hooks/tasks";
import { User } from "../common/types";
import { useAddFriend } from "../hooks/user/addFriend";

export const Friends = () => {
  // API CALLS

  const { error, result, loading, execute } = useAsync(async () => {
    // Get User Info API Call
    const userResponse = await useFetchUser("/friends");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }
    //Get Friends Info API Call and the Friends Task API call
    let friendsTasks: Array<User> = [];

    const friendIDs = userResponse.data.friends;

    //Get friends Info API Call

    const friendsInfoEndpoint = friendIDs.map(
      (friendID) => `/friends/${friendID}`
    );
    const friendInfoResp = await axios.all(
      friendsInfoEndpoint.map((endpoint) => useFetchUser(endpoint))
    );
    const friendInfoData = friendInfoResp.map((response) => {
      if (response && response.data) {
        return response.data;
      }
      throw new Error("failed to get friends info");
    });

    //Get friends Task API Call

    const friendsTaskEndpoint = friendIDs.map(
      (friendID) => `/friends/tasks/${friendID}`
    );

    const friendTasksResp = await axios.all(
      friendsTaskEndpoint.map((endpoint) => useListTasks(endpoint))
    );

    const friendTasksData = friendTasksResp.map((response) => {
      if (response && response.data) {
        return response.data;
      }
      throw new Error("failed to get friends' tasks");
    });

    //add to friendsTasks array
    for (let i = 0; i < userResponse.data.friends.length; i++) {
      friendsTasks.push({
        fName: friendInfoData[i].fName,
        userName: friendInfoData[i].userName,
        uuid: friendInfoData[i].id,
        tasks: friendTasksData[i],
      });
    }

    return {
      friendsTasks: friendsTasks,
    };
  }, []);

  //form control
  const [formData, setFormData] = useState({
    userName: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    // Add Friend API here
    try {
      const result = await useAddFriend(
        `/friends/addFriend/${formData.userName}`
      );
      if (result === null || result.status !== 200) {
        console.log("error");
      } else {
        console.log("Add Friend Data", result.data);
        /* callback of fetch tasks */
        execute();
      }
    } catch (err) {
      console.log("ERR", err);
    }
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
      <div className="min-h-[calc(100vh-64px)]">
        {error && <div>ERROR</div>}
        {loading && <div>Loading...</div>}
        {result && (
          <>
            <div className="bg-primary box-border h-24 border-b-[20px] border-solid border-white sticky top-0 z-10">
              <div className="top flex flex-col sm:flex-row h-full mx-4">
                <h1 className="flex grow content-center flex-wrap font-bold text-xl lg:text-3xl">
                  Friends
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex content-center items-center gap-x-4"
                >
                  <button className="btn btn-secondary btn-sm flex content-center flex-wrap">
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
            <div className="sm:mx-16 lg:mx-24">
              <FriendMenu content={result.friendsTasks} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
