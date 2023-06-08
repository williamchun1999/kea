import { useState } from "react";

import { FriendTaskOverview } from "../components/FriendTaskOverview";
import { Add, LogOutButton } from "../components/button/button";
import { Card } from "../components/Card/Card";
import {
  friendsTaskResponse,
  currentUserDataResponse,
} from "../common/fakeData";
import { UserTaskOverview } from "../components/UserTaskOverview";
import { Task } from "../common/types";
import { SeeAll } from "../components/SeeAll";
// import {
//   useListTasks,
// } from "../hooks/tasks";

import { useFetchUser } from "../hooks/user/fetchUser";
import { useAsync } from "react-async-hook";
import { useListTasks } from "../hooks/tasks";
export const Home = () => {

  // API CALLS
  const { error, result, loading } = useAsync(async () => {
      // Get User Info API Call
    const userResponse = await useFetchUser("http://localhost:3000/home");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user")
    }

    // Get User Tasks API Call
    const userTasksResponse = await useListTasks("http://localhost:3000/home/tasks/");
    if (userTasksResponse === null || userTasksResponse.status !== 200) {
      throw new Error("Failed to fetch tasks")
    }
    console.log('usertask response', userTasksResponse);
    // Get Friends Tasks API Call (max 3 friends)
    const friendTasksResponse = await useListTasks(`http://localhost:3000/home/tasks/${userResponse.data.friends[0]}`);
    if (friendTasksResponse === null || friendTasksResponse.status !== 200) {
      throw new Error("Failed to fetch tasks")
    }
    console.log('friend', friendTasksResponse);

  }, []);


  if (result) {

  }
  
  const [userTasks, setUserTasks] = useState<Array<Task>>(
    currentUserDataResponse.tasks
  );


  function fetchTasks(newTasks: Task[]) {
    setUserTasks(newTasks);
  }

  return (
    <div className="relative sm:mx-16 lg:mx-24">
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
            Welcome,{" "}
            <span className="text-primary font-bold">
              {/* {userInfo.fName} */}
            </span>
          </h1>
        </div>

        <LogOutButton />
      </div>

      <Card
        userName={currentUserDataResponse.userName}
        tasks={currentUserDataResponse.tasks}
      />
      <div className="tasks w-full p-4">
        <div className="flex justify-between">
          <h2 className="text-2xl">Weekly Tasks</h2>
          <Add />
        </div>
      </div>
      <UserTaskOverview tasks={userTasks} onUpdate={fetchTasks} />
      <div className="friend w-full p-4">
        <div className="flex justify-between">
          <h2 className="text-2xl">Your Friends</h2>
          <SeeAll />
        </div>
      </div>
      <FriendTaskOverview friendsTasks={friendsTaskResponse.slice(0, 3)} />
    </div>
  );
};
