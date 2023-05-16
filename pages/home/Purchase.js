import React from "react";
import {
  CurrencyDollarIcon,
  FilmIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
function Purchase() {
  return (
    <div className='bg-blue-300 bg-center h-[500px] bg-cover bg-[url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddfw3oc-238dd5be-8f8c-4f2d-8e0f-ade60d4ac011.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRmdzNvYy0yMzhkZDViZS04ZjhjLTRmMmQtOGUwZi1hZGU2MGQ0YWMwMTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bU9eCLuz5o-HpOMgV4MCrY4xy9ojN2MTQREWCPrGheM")]'>
      <div className="flex flex-col items-center justify-center ">
        <h2 className=" text-center text-white w-[70%] pt-72">
          Don't miss out.
          <span className="text-lg font-bold text-red-400 underline">
          
            Our website{" "}
          </span>{" "}
          contains more than 32 episodes + extra manga slides that you've never
          seen before.
        </h2>

        <div className="flex justify-center w-[80%] mt-4">
          <Link href="/characters">
          <button className="mr-12 text-white bg-red-700 rounded-lg h-14 w-72">
            <div className="flex items-center justify-center text-sm ">
            
              See characters{" "}
            </div>
          </button>
          </Link>
<Link href="/episodes">
          <button className="text-white border-2 border-red-700 rounded-lg h-14 w-72 ">
            <div className="flex items-center justify-center text-sm">
              
              <FilmIcon className="w-6 h-6 mr-2" /> Watch free episodes{" "}
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
