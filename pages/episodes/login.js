import { LockClosedIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';
export default function EpisodeLogin() {

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
        slidesToShow: 4,
        slidesToScroll: 4,
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
    <div className='h-[1000px]'>
        <div className='flex items-center justify-center text-white pt-52'>
            <LockClosedIcon className='w-8 h-8 mr-4'/> Please {" "} 
            <Link href="/login">
            <span className='pl-2 pr-2 text-xs text-red-600 underline'> log in </span> 
            </Link>
            in order to watch the free episodes.
        </div>
        <div className='flex flex-col items-center justify-center'>
<h1 className='text-2xl font-bold text-white blur'>SEASON 1</h1>
<Slider {...settings} className="mx-auto w-[80%] mt-10 blur">
        {new Array(12).fill(0).map((_, index) => (
          <div
            className="flex items-center mx-auto ml-4 outline-none w-[90%]"
            key={index}
          >
            <div className="flex flex-col justify-center">
              <img
                className="w-[76%]  rounded blur"
                src="https://i.redd.it/lvkk8zmqfsr61.jpg"
                alt=""
                
              />

              <p className='pt-4 text-xs text-left text-white'>Episode 1 <span className='text-red-600'>{" "}•Subtitled</span> 
              <span className='pl-4 text-xs font-thin text-white'>27 min.</span>
              </p>
              </div>
          </div>
        ))}
      </Slider>
      </div>

      <h1 className='pt-20 text-2xl font-bold text-center text-white blur'>SEASON 1</h1>
<Slider {...settings} className="mx-auto w-[80%] mt-10 blur">
        {new Array(12).fill(0).map((_, index) => (
          <div
            className="flex items-center mx-auto ml-4 outline-none w-[90%]"
            key={index}
          >
            <div className="flex flex-col justify-center">
              <img
                className="w-[76%]  rounded blur"
                src="https://i.redd.it/lvkk8zmqfsr61.jpg"
                alt=""
                
              />

              <p className='pt-4 text-xs text-left text-white'>Episode 1 <span className='text-red-600'>{" "}•Subtitled</span> 
              <span className='pl-4 text-xs font-thin text-white'>27 min.</span>
              </p>
              </div>
          </div>
        ))}
      </Slider>
      
      
    </div>
  )
    
}

