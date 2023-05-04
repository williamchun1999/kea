
import './App.module.css'
import { Button, Add } from './components/button/button'
import { Card } from './components/Card/Card'
import bear from "./assets/bear.png"

function App() {


  return (
    <>
      <div className="card">
        <Button />
        <Card image= {bear}/>
        <Add />
      </div>
     
    </>
  )
}

export default App
