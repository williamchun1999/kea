
<<<<<<< HEAD
import './App.module.css'
import { Button, Add } from './components/button/button'
import { Card } from './components/Card/Card'


const user1 = {
  userName: 'elena',
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

function App() {


  return (
    <>
      <div className="card">
        <Button />
        <Card userName={user1.userName} tasks={user1.tasks} />
        <Add />
      </div>
     
=======
import Habits from './components/habits/Habits'
import { useState, useEffect } from 'react';

// import Temp from './components/Temp'
/*interface Habit {
  id: number;
  name: string;
  type: "checkbox" | "progress";
  checked?: false;
  total?: number; //7 total hours of studying
  current?: number; //how much done?
} */

function App() {

  /*const [habits, setHabits] = useState<Habit[]>([])

    useEffect(() => {
        
        async function fetchHabits() {
          try {
            const response = await fetch('https://a0189d37-9167-4880-8aef-b5f97dd6f50d.mock.pstmn.io/get');
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

        
        <Habits habits={habits} onUpdate={handleUpdate}/>
       


>>>>>>> 3016ab73dfacd6ef17a5712c44ad7e2bd246aa14
    </>
  )
}

export default App
