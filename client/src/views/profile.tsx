/* eslint-disable react-hooks/rules-of-hooks */
import { CSSProperties, useState } from "react";

import { UserTaskOverview } from '../components/UserTaskOverview';
import { Task } from '../common/types';
import { currentUserDataResponse } from "../common/fakeData";
import { tasksCompletedPercentage } from "../common/weeklyTasksCalculation";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useAsync } from "react-async-hook";
//import { Form, useLoaderData } from "react-router-dom";

import { useListTasks } from "../hooks/tasks";
import { CreateTask } from "../components/CreateTask";

export const Profile = () => {

  // To Chloe: REFER TO HOME PAGE FOR API CALL SET UP
  const [tasks, setTasks] = useState<Array<Task>>(currentUserDataResponse.tasks)
  // Can grab uuid from useParams, or from loader
  const { userId } = useParams(); 
  console.log(userId)
  // API Call of friend's data
  // Use uuid to do a request for their data
  // 

  const { error, result, loading } = useAsync(async () => {
    // Get User Info API Call
    const userResponse = await useFetchUser(`http://localhost:3000/profile/${userId}`);
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }

    console.log("userprofile", userResponse.data)
    


  }, []);





  // Calculate percentage for display
  const percentComplete = tasksCompletedPercentage(currentUserDataResponse.tasks) * 100


  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto card w-4/5 bg-base-100 shadow-xl">
        <div className="flex flex-col justify-around card-body">
          <h2 className="card-title">
            {currentUserDataResponse.userName.toUpperCase()}
          </h2>
          <div className="flex flex-col items-center">
            <span>Weekly Task Report</span>
            <div
              className=" mt-4 radial-progress bg-primary text-primary-content border-4 border-primary"
              style={
                {
                  "--value": percentComplete,
                  "--size": "12rem",
                  "--thickness": "1rem",
                } as CSSProperties
              }
            >
              {Math.round(percentComplete)}%
            </div>
          </div>
          <div>
            <h3>Tasks</h3>
            {/* <UserTaskOverview tasks={tasks} onUpdate={} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
