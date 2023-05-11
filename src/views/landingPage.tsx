import { Button } from '../components/button/button'
import { MainTitle } from '../components/Text'

function LandingPage() {
  return (
    <div className="bg-base-200 flex flex-col h-screen w-screen">
      <MainTitle text="text-5xl" color="text-primary"/>
      <div className="flex justify-between mt-10">
        <div className="relative aspect-[9/16] bg-primary w-1/4 ml-14">9:16</div>
        <div className="relative aspect-[9/16] bg-primary w-1/4 mr-14">9:16</div>
      </div>
      <div className="basis-2/12 h-1/4 relative aspect-[16/9] bg-secondary w-7/12 z-0 m-auto -top-28">16:9</div>
      <p className="relative w-4/5 text-center m-auto -mt-10 -top-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consequuntur nesciunt eveniet optio.</p>
      
      <Button name="Login" color="bg-primary -pt-10 relative -top-10"/>
      <Button name="Sign Up" color="bg-primary -pt-10 relative -top-10"/>

    </div>)}

export default LandingPage;
