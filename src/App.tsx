
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
       


    </>
  )
}

export default App
