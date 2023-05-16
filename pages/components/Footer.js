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
function Footer() {
  return (
    <div className="h-[240px] bg-gray-300">
      <div className="flex flex-col items-center justify-center pt-12 text-sm">
        <ul className="flex text-gray-500">
          <li className="flex items-center mr-4">
            <HomeIcon className="w-6 h-5 bg-transparent" /> Home
          </li>
          <li className="flex items-center mr-4 ">
            <FilmIcon className="w-6 h-5 " /> Episodes
          </li>
          <li className="flex items-center mr-4 ">
            <HandRaisedIcon className="w-6 h-5 " /> Characters
          </li>
          <li className="flex items-center mr-4 ">
            <BookmarkIcon className="w-6 h-5 " /> My favorites
          </li>
          <li className="flex items-center mr-4 ">
            <UserIcon className="w-6 h-5 " /> Sign Up
          </li>
        </ul>
        <Image src={logo} className="  w-[200px]" alt=""/>
        <p className="text-sm text-gray-400">©Copyright Ndeye Fatou Ba</p>
      </div>
    </div>
  );
}

export default Footer;
