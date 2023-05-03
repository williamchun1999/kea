import { useState } from 'react'
import './button.module.css'


export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} className="btn btn-primary">count is {count}</button>

  )
}

export const Add = () => {

  function clicked(){
      //popup that deals with adding elements should go here 
      console.log("clicked")
  }
    
  return (
      <>
      <button className="btn btn-circle btn-lg add--text" onClick={clicked}> +
      </button>
    </>
    )
  }

