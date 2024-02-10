import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import community from "../assets/membership.jpg";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            marginleft:'20px',
             display: "block",
             width: "20px", 
             height: "30px",
             lineHeight: "50px",
              background: "lightgrey" }}
        onClick={onClick}
      />
    );
  }
function HomeScreen() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  

  return (
    <div className="flex flex-wrap">
      {/* First h2 above the image */}
      <div className="w-full md:w-1/2 p-5">
      {/* <a className="text-2xl  sm:text-4xl text-center   justify-between    mr-40 sm:text-12 ">New Arrival</a> */}
        <h2 className="text-center text-4xl  pb-5">NEW ARRIVAL</h2>
        <h4 className="md:ms-60 font-bold pt-5 underline underline-offset-4">JOIN TODAY</h4>
        {/* Image container */}
        <div className="flex justify-center items-center">
          <img
            className="w-80 h-100 mr-4"
            src={community}
            alt="community"
          />
        </div>
        {/* Content under the image */}
        <div className="text-center mt-4">
        <button className="bg-gray-300 text-blue-500 w-60 px-4 py-2 font-bold rounded-full mb-2">JOIN NOW</button>
        </div>
      </div>
      
      {/* Second h2 above the carousel */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-center mt-5 text-4xl text-teal-300 ">Unlock Premium Features Now</h2>
        <div className="mt-20 me-5 "> {/* Adjusted margin here */}
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="border-solid border-2  md:h-[280px] text-black rounded-xl "
              >
                <div className=" h-56 bg-white rounded-xl flex justify-center items-center rounded-lg">
                  <img
                    src={d.img}
                    alt=""
                    className="h-full rounded-xl w-44"                  />
                </div>

                <div className="flex flex-col items-center pt-4">
                  <p className="text-xl  font-semibold">{d.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Buttons under the carousel */}
        <div className="flex flex-col items-center mt-10">
          <button className="bg-emerald-500 text-white w-36 px-4 py-2 rounded-full mb-2">UNLOCK NOW</button>
          <button className="bg-emerald-500 text-white w-36 px-4 py-2 rounded-full ">DETAILS</button>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Low interest Rates`,
    img: `/carousel/img1.jpg`,
  },
  {
    name: `Interest free payments`,
    img: `/carousel/img2.jpg`,
  },
  {
    name: `Discount on Materials`,
    img: `/carousel/img3.jpg`,
  },
];

export default HomeScreen;
