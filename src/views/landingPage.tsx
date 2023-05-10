import { Button } from '../components/button/button'
import { MainTitle } from '../components/Text'

function LandingPage() {
  return (
    <div className="bg-base-200 flex flex-col">
      <MainTitle text="text-5xl" color="text-primary"/>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consequuntur nesciunt eveniet optio.</p>
      
      <Button name="Login" color="bg-primary"/>
    </div>)}

export default LandingPage;
