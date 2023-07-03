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
import { Add } from "../components/button/button";



export const Profile = () => {


  const { userId } = useParams(); 
  console.log(userId)

  const [tasks, setTasks] = useState<Array<Task>>(currentUserDataResponse.tasks)


  const { error, result, loading } = useAsync(async () => {

    const userProfileResponse = await useFetchUser(`http://localhost:3000/profile/${userId ? userId : ""}`);
    console.log('userProfileResponse:', userProfileResponse)
    if (userProfileResponse === null || userProfileResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }

    const userProfileTaskResponse = await useListTasks(`http://localhost:3000/profile/tasks/${userId ? userId : ""}`);
    console.log('userProfileTaskResponse:', userProfileTaskResponse)
    if (userProfileTaskResponse === null || userProfileTaskResponse.status !== 200) {
      throw new Error("Failed to fetch tasks");
    }
    setTasks(userProfileTaskResponse.data)

    return userProfileResponse.data
    
  }, [userId]);

  
  // Fetch Task Callback function after CRUD operation.
  const fetchTasks = async () => {
    const userTasksResponse = await useListTasks(
      `http://localhost:3000/profile/tasks/`
    );
    if (userTasksResponse === null || userTasksResponse.status !== 200) {
      throw new Error("Failed to fetch tasks");
    }
    console.log("usertask response after edits", userTasksResponse.data);
    setTasks(userTasksResponse.data);
  };


  // Calculate percentage for display
  const percentComplete = tasksCompletedPercentage(tasks) * 100


  return (

    <>
    {error && <div className="min-h-[calc(100vh-64px)]">ERROR</div>}
    {loading && <div className="min-h-[calc(100vh-64px)]">Loading...</div>}
    {result && 
    <div className="min-h-[calc(100vh-64px)] bg-base-200 pt-8">
      <div className="mx-auto card w-4/5 bg-base-100 shadow-xl lg:w-[60%]">
        <div className="flex flex-col justify-around card-body">
          <h2 className="card-title">
            {result.fName.toUpperCase()}
          </h2>
          <div className="flex flex-col items-center">
            <span className="block w-full card-title text-[1.5rem] md:text-[2rem]">Weekly Task Report</span>
          
            <div
              className="mt-8 radial-progress bg-primary text-primary-content border-4 border-primary"
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
          <div className="mt-4">
            <div className="flex justify-between">
              <h3 className="card-title text-[1.5rem] mb-4">{ userId ? `${result.fName.toUpperCase()}'s Tasks` : "My Tasks"}</h3>
              {userId ? null : <Add />}
              {userId ? null :<CreateTask callback={fetchTasks} />}
            </div>
           
           { userId ? <UserTaskOverview tasks={tasks} onUpdate={fetchTasks} userId={true}/> : <UserTaskOverview tasks={tasks} onUpdate={fetchTasks} userId={false}/>}
          </div>
        </div>
      </div>
    </div>}
    </>
    
  );
};
