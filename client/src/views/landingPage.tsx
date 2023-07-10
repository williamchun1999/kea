import {Link} from "react-router-dom"


import { Button } from "../components/button/button";
import { MainTitle } from "../components/Text";
import { Carousel } from "../components/Carousel";
import friends from "../assets/friends.png";
import homepage from "../assets/homepage.png";
import profile from "../assets/profile.png";


export const LandingPage= ()=> {
  
  return (
    <div className="bg-base-200 flex flex-col h-full w-screen">
      <MainTitle />
      <Carousel img1={homepage} img2={friends} img3={profile}/>
      <p className=" w-4/5 text-center m-auto text-secondary "> Keep yourself and your friends accountable through this app!</p>
      <div className="flex flex-col items-center ">
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



