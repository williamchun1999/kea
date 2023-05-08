
import './App.module.css'
import { Button, Add } from './components/button/button'
import { Card } from './components/Card/Card'


const user1 = {
  userName: 'elena',
  tasks: [{
    taskName: 'pair programming',
    taskType: 'checkbox',
    taskCompleted: true,
    taskProgress: null,
  },{
    taskName: 'do 5 leetcodes',
    taskType: 'progress',
    taskCompleted: false,
    taskProgress: 0.4,
  },
],
};

function App() {


  return (
    <>
      <div className="card">
        <Button />
        <Card userName={user1.userName} tasks={user1.tasks} />
        <Add />
      </div>
     
    </>
  )
}

export default App
