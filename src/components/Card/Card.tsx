import {useState, useEffect,  CSSProperties} from 'react'


import './Card.module.css'


export const Card = () => {

  const [progress, setProgress] = useState(30)

  useEffect(() => {
    async function getData(){
      try{
        const res = await fetch("")
        const data = await res.json()
        //probably need to do calculations with the data fetched from db, then setstate to that % 
        setProgress(data)

      } catch(err){
        console.log(err)
      }
    }

    getData()

    return () => {
      // setProgress(0)
    }

  },[progress])

  return (
    <div>
        <div 
        className="radial-progress text-primary card--progress" 
        style={{"--value":progress} as CSSProperties} 
        >
      {progress}%
      </div>

    </div>
  )
}

