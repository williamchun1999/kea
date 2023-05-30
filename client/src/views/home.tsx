import { useState } from "react";

import { FriendTaskOverview } from "../components/friend_task_overview";
import { Button, Add } from "../components/button/button";
import { Card } from "../components/Card/Card";
import {
  friendsTaskResponse,
  currentUserDataResponse,
} from "../common/fake_data";
import { UserTaskOverview } from "../components/user_task_overview";
import { Task } from "../common/types";
import { SeeAll } from "../components/SeeAll";

export const Home = () => {
  // Page should only update when interacting with user's tasks (CRUD)
  /**
   * Home Component will fetch for current user
   * It will then use user's id to fetch request for their tasks
   * It will also use user's id to fetch request for their friends
   *
   *
   */
  const [userTasks, setUserTasks] = useState<Array<Task>>(
    currentUserDataResponse.tasks
  );
  function handleUpdate(newTasks: Task[]) {
    setUserTasks(newTasks);
  }

  //console.log(habits)*/
  return (
    <>
      <div className="card">
        <Card
          userName={currentUserDataResponse.userName}
          tasks={currentUserDataResponse.tasks}
        />
        <Add />
        <div className="tasks w-full p-4">
          <div className="flex justify-between">
            <h2 className="text-3xl">Weekly tasks</h2>
            <SeeAll userId={ currentUserDataResponse.uuid }/>
          </div>
        </div>
        <UserTaskOverview tasks={userTasks} onUpdate={handleUpdate} />
        <FriendTaskOverview friendsTasks={friendsTaskResponse.slice(0, 3)} />
      </div>
    </>
  );
};