import React from "react";
import {
  HomeIcon,
  HandRaisedIcon,
  UserIcon,
  FilmIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import { logo } from "../../public/assets/index";
import Image from "next/image";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
function Nav() {
  return (
    <div>
    <nav className="relative flex bg-gray-800">
      <Image src={logo} className=" bg-transparent w-[200px]" />

      <ul className="absolute hidden bg-transparent lg:flex xl:flex right-4 ">
        
          <Link href="/" >
          <li className="flex items-center mr-4 text-white bg-transparent">
          <HomeIcon className="w-6 h-5 bg-transparent" /> Home 
          </li>
          </Link>
       <Link href="/episodes" >
        <li className="flex items-center mr-4 text-white bg-transparent">
          <FilmIcon className="w-6 h-5 bg-transparent" /> Episodes
        </li>
        </Link>
        <Link href="/characters">
        <li className="flex items-center mr-4 text-white bg-transparent">
          <HandRaisedIcon className="w-6 h-5 bg-transparent" /> Characters
        </li>
        </Link>
    
      </ul>

      <ResponsiveNav  />
      
    </nav>
   </div>
  );
}

export default Nav;
