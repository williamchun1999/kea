import { useState } from 'react'
import SeeAll from '../SeeAll'
import TaskInput from '../TaskInput'
import { currentUserDataResponse } from '../../common/fake_data'
import { Task } from '../../common/types'



interface TaskProps {


    //type Task for the array
    tasks: Array<Task>

    onUpdate:(newState: TaskProps[]) => void;
   
} 


const Weeklytasks = ({ tasks, onUpdate }: TaskProps ) => {

	//toggling checkbox 
    function check(task:Task): void {
        // Pass new value of task into database (whether it is completed or not);
        // Rerender data to display updated value 
    }


    //opening and closing the modals
    const [progressClick, setProgressClick] = useState(false)
    const [checkboxClick, setCheckboxClick] = useState(false)

    //opening and closing the modals. all modals will close after user deletes a task
	function handleProgressClick(newState: boolean) {
        setProgressClick(newState)
    }

    function handleCheckboxClick(newState: boolean) {
        setCheckboxClick(newState)
    }

    

    

    
    return (
        <>
        <div className="tasks w-full p-4">
            <div className="flex justify-between"> 
                <h2 className='text-3xl'>Weekly tasks</h2>
                <SeeAll />
            </div>
            
            <div className="taskList">
                <ul className='menu'>
                    <li className='rounded-box'>
                    {tasks.map((task) => 
                    task.taskType === "checkbox" ? (
                    <div className={`${task.taskCompleted ? 'bg-success' : ""} bg-base-200 hover:bg-neutral`}>
                        <label className={`label cursor-pointer flex-1 justify-between`} htmlFor="editCheckbox" onClick={() => setCheckboxClick(true)}> 
                            <span className="label-text">{task.taskName}</span> 
                        </label>
                        <input type="checkbox" className="checkbox checkbox-primary" checked={task.taskCompleted} onClick={()=>check(task)}/>

                        // I'm not sure but I might need to pass down task id to delete tasks?
                        {checkboxClick && <TaskInput title="Edit" type={task.type} htmlfor='editCheckbox' onConfirm={handleCheckboxClick}/>}
                    </div>

                    ) :
                    <div className={`${task.total === task.current ? 'bg-success' : ""} bg-base-200 hover:bg-neutral`}>
                        <label className="label cursor-pointer flex-1 justify-between" htmlFor="editProgress" onClick={() => setProgressClick(true)}>

                            <span>{task.name}</span>
                            <progress className="progress progress-primary w-6/12" value={task.current/task.total} max="1"></progress>
                        </label>

                        { progressClick && <TaskInput title="Edit" type={task.type} htmlfor='editProgress' onConfirm={handleProgressClick}/>}

                        
                    </div>
                )} 
                </li>
                   

                    
                </ul>
            </div>
           
            
          
        </div>
        
        
        </>
        
        
    )
}

export default Weeklytasks