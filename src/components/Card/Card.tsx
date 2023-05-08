import { CSSProperties } from "react";
import bear from "../../assets/bear.png"

type CardProps = {
  userName: string;
  tasks: Array<{
    taskName: string;
    taskType: string;
    taskCompleted: boolean;
    taskProgress: number | null;
  }>;
};

export const Card = (props:CardProps) => {
 
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await fetch("");
  //       const data = await res.json();
  //       //need to do calculations with the data fetched from db, then setstate to that %
 
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   getData();

  //   return () => {
  //     // setProgress(0)
  //   };
  // }, [progress]);

  let countTaskDone=0
  let totalTask = props.tasks.length  
  props.tasks.forEach(task => task.taskCompleted ? countTaskDone+= 1 : countTaskDone)
  let percentComplete = (countTaskDone/totalTask) *100


 
  return (
    <>
      <h4 className="font-medium pl-3">{new Intl.DateTimeFormat("en-GB", {weekday: 'short', year:"numeric",month:"long",day:"numeric"}).format(new Date())}</h4>
      <h2 className="text-2xl font-semibold pl-3">Welcome, <span className="text-primary font-bold">{props.userName}!</span></h2>
      <div
        className="card w-screen bg-primary text-primary-content"
      >
        <div className="flex justify-evenly items-center h-48">
          <div>
            <h2 className="card-title">Today's Goal:</h2>
            <p className="text-base-500">
              {countTaskDone} of {totalTask} completed
            <img src={bear} className="w-32 h-full"></img>
            </p>
          </div>
            <div
              className="radial-progress text-base-500"
              style={{ "--value": percentComplete, "--size": "7rem", "--thickness": "0.8rem"} as CSSProperties}
            >
              {Math.round(percentComplete)}%
            </div>
        </div>
      </div>
    </>
  );
};
