import { Button } from "../components/button/button";
import { MainTitle } from "../components/Text";
import pics from "../assets/pics.jpg";
import pic from "../assets/pic.jpg";

function LandingPage() {
  return (
    <div className="bg-base-200 flex flex-col h-screen w-screen">
      <MainTitle text="text-5xl" color="text-primary" />
      <div className="w-3/4 m-auto carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src={pics}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={pic}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={pics}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={pic}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
  
      </div>
      <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut quae tempora, hic por</p>
      <Button name="Login" color="bg-primary -pt-10 relative " />
      <Button name="Sign Up" color="bg-primary -pt-10 relative" />
    </div>
  );
}

export default LandingPage;

