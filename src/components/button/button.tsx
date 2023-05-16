import { useState } from 'react'
import './button.module.css'

type ButtonProp = {
  color?: string;
  name?: string;
}

// export const Button = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)} className="btn btn-primary">count is {count}</button>
//   )
// }

export const Add = () => {

  const [selectedValue, updateSelectedValue] = useState('')

  function handleSelectedValue(event: React.ChangeEvent<HTMLInputElement>) {
    updateSelectedValue(() => event?.target.value)
  }

  console.log(selectedValue)

  function createTask(){
      //popup that deals with adding elements should go here 
      console.log("createdTask")
  }
    
  return (
      <>
      <label className="btn btn-circle btn-lg add--text btn-primary text-base-400 fixed bottom-4 right-4" onClick={createTask} htmlFor="addTask"> 
      +
      </label>

      <input type="checkbox" id="addTask" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">


          {/** title and exit button */}
          <div className="top flex flex-1 justify-between">
            <h3 className="font-bold text-lg">Create New Task</h3>
            <label className="btn btn-circle bg-transparent border-0" htmlFor='addTask' >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </label>
          </div>


          {/* new task name input */}
          <label htmlFor="newTaskName" className='block w-full'>Task Name:</label>
          <input type="text" id="newTaskName" placeholder="Type here" className="input input-bordered w-full" />
          
          {/* checkbox or progres bar? */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Checkbox</span> 
              <input type="radio" name="taskType" id="checkbox" value="checkbox" className="radio checked:bg-[#e0b0ff]" checked={selectedValue === 'checkbox'} onChange={handleSelectedValue} />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Progress Bar</span> 
              <input type="radio" name="taskType" id="progressBar" value="progressBar"  className="radio checked:bg-[#e0b0ff]" checked={selectedValue === 'progressBar'} onChange={handleSelectedValue}/>
            </label>
          </div>


          {selectedValue === "progressBar" && (
            <>
              <div className="progressInput flex flex-1 ">
                <input type="text" placeholder="number" className="input input-bordered w-2/4" />
                <input type="text" placeholder="type (e.g. hours, pages)" className="input input-bordered w-2/4" />
              </div>
             
            </>
          )}

          <div className="selectMenu flex flex-1 justify-between">
            <label htmlFor="period" className=' flex flex-1 items-center'>Period</label>
            <select className="select select-bordered w-9/12" id='period'>

                <option disabled selected>1 Week</option>
                <option>3 days</option>
                <option>5 days</option>
            </select>

          </div>

           {/* buttons */}
           <div className="modal-action flex-col space-x-0">
              <label htmlFor="addTask" className='btn btn-block'>Create</label>
          </div>
        </div>
      </div>

    </>
    )
  }

export const Button = (design: ButtonProp ) => {
  return(
    <>
    <button className={`btn btn-wide self-center tracking-widest font-bold ${design.color} text-base mb-3 rounded-full`}>{design.name}</button>
    </>
  )
}

