/* eslint-disable react-hooks/rules-of-hooks */
import { CSSProperties, useEffect, useState } from "react";

import { UserTaskOverview } from '../components/UserTaskOverview';
import { Task } from '../common/types';
import { currentUserDataResponse } from "../common/fakeData";
import { tasksCompletedPercentage } from "../common/weeklyTasksCalculation";
import { useLoaderData, useParams } from "react-router-dom";
import { useFetchUser } from "../hooks/user/fetchUser";
import { useAsync } from "react-async-hook";
//import { Form, useLoaderData } from "react-router-dom";

import { useListTasks } from "../hooks/tasks";
import { CreateTask } from "../components/CreateTask";




export async function loader({ params }: any) {

  console.log('params: ', params)
  const paramsId = params.userId

  
  const userProfileResponse = await useFetchUser(`http://localhost:3000/profile/${paramsId}`);
  console.log('userProfileResponse:', userProfileResponse)

  const userProfileTaskResponse = await useListTasks(`http://localhost:3000/profile/tasks/${paramsId}`);
  console.log('userProfileTaskResponse:', userProfileTaskResponse)

  return { userProfileResponse , userProfileTaskResponse, paramsId };


}

export const Profile = () => {

  const { userProfileResponse, userProfileTaskResponse, paramsId } = useLoaderData();

/*  const { userId } = useParams(); 
  console.log(userId) */
  
  // To Chloe: REFER TO HOME PAGE FOR API CALL SET UP
  const [tasks, setTasks] = useState<Array<Task>>(currentUserDataResponse.tasks)

  useEffect(() => {
    setTasks(userProfileTaskResponse.data)
    console.log('set task', tasks)
  }, [])


  // Fetch Task Callback function after CRUD operation.
  const fetchTasks = async () => {
    const userTasksResponse = await useListTasks(
      `http://localhost:3000/profile/tasks/${paramsId}`
    );
    if (userTasksResponse === null || userTasksResponse.status !== 200) {
      throw new Error("Failed to fetch tasks");
    }
    console.log("usertask response after edits", userTasksResponse.data);
    setTasks(userTasksResponse.data);
  };






  // Calculate percentage for display
  const percentComplete = tasksCompletedPercentage(currentUserDataResponse.tasks) * 100


  return (

    <>
    
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto card w-4/5 bg-base-100 shadow-xl">
        <div className="flex flex-col justify-around card-body">
          <h2 className="card-title">
            {userProfileResponse.data.userName.toUpperCase()}
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
            <UserTaskOverview tasks={tasks} onUpdate={fetchTasks} /> 
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};
