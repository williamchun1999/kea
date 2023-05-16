import { useEffect, useState } from 'react'
import SeeAll from '../SeeAll'
import TaskInput from '../TaskInput'



interface HabitProps {

    habits: Array<{
        id: number;
        name: string;
        type: "checkbox" | "progress";
        checked?: false;
        total?: number; //7 total hours of studying
        current?: number; //how much done?
    }>

    onUpdate:(newState: HabitProps[]) => void;
   
} 


const WeeklyHabits = ({ habits, onUpdate }: HabitProps ) => {


    function check(id: number): void {
        const newState = habits.map(habit => {
            if (habit.id === id) {
            return {...habit, checked: habit.checked === false ? true : false};
            } 
        
            return habit;
        });

        onUpdate(newState)
    }


    

    
    return (
        <>
        <div className="habits w-full ">
            <div className="flex justify-between"> 
                <h2 className='text-3xl'>Weekly Habits</h2>
                <SeeAll />
            </div>
            
            <div className="habitList">
                <ul className='menu'>
                    <li className='rounded-box'>
                    {habits.map((habit) => 
                    habit.type === "checkbox" ? (
                    <div className={`${habit.checked ? 'bg-success' : ""} bg-base-200 hover:bg-neutral`}>
                        <label className={`label cursor-pointer flex-1 justify-between`} htmlFor="editCheckbox"> 
                            <span className="label-text">{habit.name}</span> 
                        </label>
                        <input type="checkbox" className="checkbox checkbox-primary" checked={habit.checked} onClick={()=>check(habit.id)}/>


                        <TaskInput title="Edit" type={habit.type} htmlfor='editCheckbox'/>
                    </div>

                    ) :
                    <div className={`${habit.total === habit.current ? 'bg-success' : ""} bg-base-200 hover:bg-neutral`}>
                        <label className="label cursor-pointer flex-1 justify-between" htmlFor="editProgress">

                            <span>{habit.name}</span>
                            <progress className="progress progress-primary w-6/12" value={habit.current/habit.total} max="1"></progress>


                        </label>

                        <TaskInput title="Edit" type={habit.type} htmlfor='editProgress'/>
                        
                        
                    </div>
                )} 
                </li>
                   

                    
                </ul>
            </div>
           
            
          
        </div>
        
        </>
        

    )
}

export default WeeklyHabits