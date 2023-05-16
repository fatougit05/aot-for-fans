import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import titan from "../api/data/titan";
import axios from "axios";
function Titan() {
  
const [posts,setPost] = useState([])
  
async function getPost () {

  setPost(titan)
  console.log(posts)
}

useEffect(() => {
  getPost()
},[])

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#CECECE",
          borderRadius: "60%",
          right: "1%",
          width: "30px",
          height: "30px",
          textAlign: "center",
          paddingTop: "6px",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative low-opacity-bg-image">
      <div className="flex flex-col items-center justify-center pt-20 bg-transparent">
        <h1 className="text-3xl font-bold text-white bg-transparent ">
          Choose your titan
        </h1>
        <div className="h-2 bg-red-700 w-80"></div>
      </div>

      <Slider {...settings} className="w-[85%] mx-auto mt-20  ">
        {posts.map((post, index) => (
          <div
            className="flex items-center mx-auto w-[100%] outline-none"
            key={index}
          >
            <div className="flex ">
              <img
                className="w-[60%]"
                src={post.titanImage}
                alt=""
                srcset=""
              />

              <div className="flex flex-col justify-center ">
                <h1 className="text-3xl text-white underline">
              
                  {post.titanName}
                </h1>

                <div className="pt-10">
                  <h1 className="text-2xl text-red-600 bold">Speciality</h1>
                  <p className="text-xs text-center text-white">
                    {post.speciality}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Titan;
