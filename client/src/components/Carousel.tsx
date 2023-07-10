
type Images = {
    img1: string;
    img2: string;
    img3: string;
  }


export const Carousel = (imgs: Images) => {
  return (
    <>
    <div className="w-3/4 m-auto carousel rounded-box hidden max-[850px]:flex">
        <div className="carousel-item w-full">
          <img
            src={imgs.img1}
            className="w-full"
            alt="homepage"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgs.img3}
            className="w-full"
            alt="profile page"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgs.img2}
            className="w-full"
            alt="friends page"
          />
        </div>
      </div>
      <div className= "hidden min-[850px]:flex items-center gap-10 justify-center">
        <div className="w-1/5">
        <img
            src={imgs.img1}
            className="w-full"
            alt="homepage"
          />
        </div>
        <div className="w-1/5">
        <img
            src={imgs.img3}
            className="w-full"
            alt="profile page"
          />
        </div>
        <div className="w-1/5">
        <img
            src={imgs.img2}
            className="w-full"
            alt="friends page"
          />
        </div>
      </div>
      </>
  )
}
