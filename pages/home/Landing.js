import React from "react";
import Characters from "../../characters.json"
import { useState, useEffect } from "react";
import Link from "next/link";
function Landing() {
function getRandomChar (Characters) {
  //getting random obj from data array
  if(Characters !== undefined) {
  const randomI = Math.floor(Math.random() * Characters.length - 1)

  const randomChar = Characters[randomI]
  
return randomChar;
}
}

const result = getRandomChar(Characters)

useEffect(() => {
  getRandomChar()
},[])

function OnChar () {
  return result
}

console.log(result)

  return (
    <div className=" flex flex-col items-center justify-center h-[700px]">
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center justify-center text-white">
          <div className="flex items-center mt-10 ">
            <h1 className="font-extrabold text-3xl pl-12 z-[0.75]">
              Welcome to the universe of Attack on Titan
              <span className="responsive-text"> survey corps trainees </span>
            </h1>
          
            <img
              className="w-20 h-20 ml-4"
              src="https://www.pngarts.com/files/8/Attack-On-Titan-Survey-Corps-Logo-Download-Transparent-PNG-Image.png"
              alt=""
            />
          </div>
          <p className="text-xs w-[80%] mt-10">
            A space for the aot fandom to re-watch and comments your favorite
            aot episodes {"  "}
            <Link href="/episodes">
            <span className="text-red-800 underline hover:cursor-pointer hover:">
              our free episodes{" "}
            </span>{" "}
            </Link>
            and watch the latest season.
          </p>

          <div className="flex flex-col items-center mt-10 w-[80%]">
            <h1 className="text-lg font-bold">
              Rewarded best anime stream-line by users from:
            </h1>

            <div className="flex items-center mt-4 ">
              <img
                className="h-20 w-30 "
                src="https://download.logo.wine/logo/Crunchyroll/Crunchyroll-Logo.wine.png"
                alt=""
              />
              <img
                className="h-20 ml-4 w-30"
                src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-N-Symbol-logo-red-transparent-RGB-png.png"
                alt=""
              />
              <img
                className="h-20 ml-4 w-30"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>

        
          <img
            src={result?.characterImage}
            alt=""
            className="w-[70%] max-w-[300px]"
          />

    
      
      
  
      </div>
    </div>
  );
}

export default Landing;
