import {useState, CSSProperties} from 'react'

export const Card = () => {

  return (
    <div>
        <div 
        className="radial-progress" 
        style={{"--value":20} as CSSProperties} 
        >
      20%
      </div>
      <progress className="progress progress-secondary w-56" value="30" max="80"></progress>
      <progress className="progress progress-secondary w-56" value="99" max="100"></progress>
    </div>
  )
}

