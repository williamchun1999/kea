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

  function createTask(){
      //popup that deals with adding elements should go here 
      console.log("createdTask")
  }
    
  return (
      <>
      <button className="btn btn-circle btn-lg add--text btn-primary text-base-400" onClick={createTask}> 
      +
      </button>
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

