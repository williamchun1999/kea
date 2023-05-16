import { FriendMenu } from "../components/friend_menu";
import { Button, Add } from '../components/button/button';
import { Card } from '../components/Card/Card';
import { friendsTaskResponse, currentUserDataResponse } from '../common/fake_data';
import Habits from '../components/habits/Habits'
import { useState, useEffect } from "react";

export const Home = () => {
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


    //console.log(habits)*/
  return (
    <>
      <div className="card mb-20">
      <Button />
        <Card userName={currentUserDataResponse.userName} tasks={currentUserDataResponse.tasks} />
        <Add />
        {/* <Habits habits={habits} onUpdate={handleUpdate}/> */}
        <FriendMenu content={friendsTaskResponse.slice(0, 3)} />
        
      </div>
    </>)}
