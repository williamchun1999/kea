
type Images = {
    img1: string;
    img2: string;
  }


export const Carousel = (imgs: Images) => {
  return (
    <div className="w-3/4 m-auto carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src={imgs.img1}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgs.img2}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgs.img1}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgs.img2}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
  
      </div>
  )
}
