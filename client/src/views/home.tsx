import { useState } from "react";

import { FriendTaskOverview } from "../components/FriendTaskOverview";
import { Add } from "../components/button/button";
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

export const Home = () => {
  const [userTasks, setUserTasks] = useState<Array<Task>>(
    currentUserDataResponse.tasks
  );
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // use Effect that does the fetchTasks function on initial render
  // fetchTasks function that can be also used a callback function (.then()) after a crud operation call in a child component

  /* 
   useEffect(() => {
    fetchTasks();
  }, []);
  */

  /* const fetchTasks = () => {
    setIsLoading(true);
    setError(null);

    axios.get('/api/tasks')
      .then((response) => {
        setUserTasks(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };
  */
  function fetchTasks(newTasks: Task[]) {
    setUserTasks(newTasks);
  }

  return (
    <div className="relative sm:mx-16 lg:mx-24">
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
          {currentUserDataResponse.userName}!
        </span>
      </h1>
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
