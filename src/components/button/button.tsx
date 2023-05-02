import { useState } from 'react'
import './button.module.css'
export const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button style={{color: 'blue'}} onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  )
}

