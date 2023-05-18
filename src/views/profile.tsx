import { CSSProperties, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// import Habits from '../components/habits/Habits';
import { currentUserDataResponse } from "../common/fake_data";
import { tasksCompletedPercentage } from "../common/weekly_tasks_calculation";

// type ProfileProps = {

// }

// export const loader = async ({ params }) => {
//   // const userData= await getUserData(params.uuid);
//   return { currentUserDataResponse }
// }

export const Profile = () => {
  // Can grab uuid from useParams, or from loader
  // let { uuid } = useParams();
  // const { currentUserDataResponse } = useLoaderData();

  // API Call of friend's data
  // Use uuid to do a request for their data

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
            {/* Need to resolve Habits component */}
            {/* <Habits habits={currentUserDataResponse.tasks} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
