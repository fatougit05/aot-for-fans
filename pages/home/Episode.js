import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function Episode() {
  return (
    <div className="h-[600px]">
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className=" text-white text-center text-3xl font-bold w-[80%]">
          The entire saga of Eren and his friends here!
        </h1>
        <div className=" h-2   bg-red-700 max-w-[800px] w-[80%]"></div>
      </div>

      <img
        className="absolute w-36 h-36 z-index-2"
        src="https://www.seekpng.com/png/full/132-1329915_attack-on-titan-2-a-attack-on-titan.png"
        alt=""
      />
      <img
        className="absolute w-36 h-36 z-index-2 right-1"
        src="https://www.seekpng.com/png/full/132-1329915_attack-on-titan-2-a-attack-on-titan.png"
        alt=""
      />

      <div className="mt-20 mx-auto w-[96%] flex flex-col justify-center items-center">
      <Link href={`/details/7317000657`}>
        <img
          className="rounded-lg w-80"
          src="https://i.redd.it/lvkk8zmqfsr61.jpg"
          alt=""
        />
        </Link>
        <img
          className="absolute -z-10 "
          src="https://www.pngarts.com/files/2/Blood-Red-Abstract-Lines-PNG-High-Quality-Image.png"
          alt=""
        />

        <div className="flex flex-col items-center justify-center ml-10">
          <h1 className="text-2xl font-bold text-white underline">
            To You, After 2,000 Years
          </h1>
          <p className="font-thin text-white ">
            <span className="text-xl font-bold text-red-700 ">Season 1</span>{" "}
            •Subtitled
          </p>

          <div className="flex items-center mt-10 w-[80%] ">
            <Link href={`/details/7317000657`}>
            <button className="w-56 h-12 text-sm text-center text-white bg-red-700 rounded-md ">
              <div className="flex items-center justify-center">
                <PlayIcon className="w-5 h-5 mr-2" /> Start Watching S1 E1
              </div>
            </button>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
