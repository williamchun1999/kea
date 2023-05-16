import {Link} from "react-router-dom"


import { Button } from "../components/button/button";
import { MainTitle } from "../components/Text";
import { Carousel } from "../components/Carousel";
import pics from "../assets/pics.jpg";
import pic from "../assets/pic.jpg";

export const LandingPage= ()=> {
  
  return (
    <div className="bg-base-200 flex flex-col h-screen w-screen">
      <MainTitle text="text-5xl" color="text-primary" />
      <Carousel img1={pic} img2={pics}/>
      <p className=" w-4/5 text-center m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut quae tempora, hic por</p>
      <div className="flex flex-col items-center">
        <Link to="/login">
          <Button name="Login" color="bg-primary "/>
        </Link>
        <Link to="/signup">
          <Button name="Sign Up" color="bg-primary " />
        </Link>
      </div>
    </div>
  );
}



