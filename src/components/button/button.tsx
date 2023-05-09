import { useState } from 'react'
import './button.module.css'
export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} className="btn-accent">count is {count}</button>

  )
}

