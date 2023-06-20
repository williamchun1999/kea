/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useAsync } from "react-async-hook";

import { FriendTaskOverview } from "../components/FriendTaskOverview";
import { Add, LogOutButton } from "../components/button/button";
import { Card } from "../components/card/Card";
import { UserTaskOverview } from "../components/UserTaskOverview";
import { Task, User } from "../common/types";
import { SeeAll } from "../components/SeeAll";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useListTasks } from "../hooks/tasks";
import { CreateTask } from "../components/CreateTask";

export const Home = () => {
  const [userTasks, setUserTasks] = useState<Array<Task>>([]);
  
  // API CALLS
  const { error, result, loading } = useAsync(async () => {
    // Get User Info API Call
    const userResponse = await useFetchUser("http://localhost:3000/home");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }

    // Get User Tasks API Call
    const userTasksResponse = await useListTasks(
      "http://localhost:3000/home/tasks/"
    );
    if (userTasksResponse === null || userTasksResponse.status !== 200) {
      throw new Error("Failed to fetch tasks");
    }
    setUserTasks(userTasksResponse.data);
    // Get Friends Tasks API Call (max 3 friends)
    const friendsTasks: Array<User> = [];

    for (let i = 0; i < 3; i++) {
      if (userResponse.data.friends[i] === undefined) {
        break;
      }

      // Grab Friend Info
      const friendUserDataResponse = await useFetchUser(`/home/${userResponse.data.friends[i]}`)
      if (friendUserDataResponse === null || friendUserDataResponse.status !== 200) {
        throw new Error("Failed to fetch tasks");
      }

      // Grab Friend Tasks
      const friendTasksResponse = await useListTasks(
        `/home/tasks/${userResponse.data.friends[i]}`
      );

      if (friendTasksResponse === null || friendTasksResponse.status !== 200) {
        throw new Error("Failed to fetch tasks");
      }

      friendsTasks.push({
        userName: friendUserDataResponse.data.userName,
        uuid: friendUserDataResponse.data.id,
        tasks: friendTasksResponse.data,
      })
    }
    return  {
      userData: userResponse.data,
      friendsTasks,
    }
  }, []);
  
  // Fetch Task Callback function after CRUD operation.
  const fetchTasks = async () => {
    const userTasksResponse = await useListTasks(
      "http://localhost:3000/home/tasks/"
    );
    if (userTasksResponse === null || userTasksResponse.status !== 200) {
      throw new Error("Failed to fetch tasks");
    }
    console.log("usertask response", userTasksResponse.data);
    setUserTasks(userTasksResponse.data);
  };
  return (
    <div className="h-screen relative sm:mx-16 lg:mx-24">
      {error && <div>ERROR</div>}
      {loading && <div>Loading...</div>}
      {/* In Future Need Loading Page View  */}
      {result && (
        <>
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium pl-3">
                {new Intl.DateTimeFormat("en-GB", {
                  weekday: "short",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date())}
              </h4>
              <h1 className="text-3xl font-semibold pl-3">
                {"Welcome, "}
                <span className="text-primary font-bold">{result.userData.fName}</span>
              </h1>
            </div>
            <LogOutButton />
          </div>

          <Card tasks={userTasks} />
          <div className="tasks w-full p-4">
            <div className="flex justify-between">
              <h2 className="text-2xl">Weekly Tasks</h2>
              <Add />
            </div>
          </div>
          <CreateTask callback={fetchTasks} />
          <UserTaskOverview tasks={userTasks} onUpdate={fetchTasks} />
          <div className="friend w-full p-4">
            <div className="flex justify-between">
              <h2 className="text-2xl">Your Friends</h2>
              <SeeAll />
            </div>
          </div>
          <FriendTaskOverview friendsTasks={result.friendsTasks} />
        </>
      )}
    </div>
  );
};
