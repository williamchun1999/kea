import { FriendTaskOverview } from "../components/friend_task_overview";
import { Button, Add } from '../components/button/button'
import { Card } from '../components/Card/Card'
import Habits from '../components/habits/Habits'
import { useState, useEffect } from "react";

// Temporary Hard coded data response of friends and personal user tasks

const user1 = {
  userName: 'Elena',
  tasks: [{
    taskName: 'pair programming',
    taskType: 'checkbox',
    taskCompleted: true,
    taskProgress: null,
  },{
    taskName: 'do 5 leetcodes',
    taskType: 'progress',
    taskCompleted: false,
    taskProgress: 0.4,
  },
],
};

const friendsTaskResponse = [
  {
    userName: "William",
    tasks: [
      {
        taskName: "5 questions of Leetcode",
        taskType: "Progress",
        taskCompleted: false,
        taskProgress: 0.8,
      },
    ],
  },
  {
    userName: "Chloe",
    tasks: [
      {
        taskName: "Finish Essay",
        taskType: "Checkbox",
        taskCompleted: false,
        taskProgress: null,
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: "Progress",
        taskCompleted: true,
        taskProgress: 1,
      },
    ],
  },
];



function App() {
  /*interface Habit {
  id: number;
  name: string;
  type: "checkbox" | "progress";
  checked?: false;
  total?: number; //e.g. 7 total hours of studying
  current?: number; //how much done?
} 

  const [habits, setHabits] = useState<Habit[]>([])

    useEffect(() => {
        
        async function fetchHabits() {
          try {
            const response = await fetch('https://a6e8ec70-3095-485b-83d7-1b9d254f4f42.mock.pstmn.io/get');
            const data = await response.json();
            setHabits(data);
          } catch (error) {
            console.error('Error fetching habits:', error);
          }
        }
    
        fetchHabits();
    }, []);

    function handleUpdate(newHabits: Habit[]) {
      setHabits(newHabits);
      
    }


    //console.log(habits)
  return (
    <>
      <div className="card">
        <Button />
        <div className="head p-4">
          <Card userName={user1.userName} tasks={user1.tasks} />
        </div>
        
        <div className="tasks p-4">
          <Habits habits={habits} onUpdate={handleUpdate}/> 
          <FriendTaskOverview friendsTasks={friendsTaskResponse} />

        </div>
       
        <Add />
        
      </div>
  </>)*/}

export default App;
