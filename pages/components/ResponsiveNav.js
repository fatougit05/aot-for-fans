import { useState } from 'react'
import Link from 'next/link'
import {
    HomeIcon,
    HandRaisedIcon,
    UserIcon,
    FilmIcon,
    BookmarkIcon,
  } from "@heroicons/react/24/solid";
function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-700 transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col items-center justify-center mt-28">
             
              
            <Link href="/" >
          <li className="flex items-center my-4 text-2xl font-bold text-white hover:text-red-500">
          <HomeIcon className="w-6 h-5 bg-transparent" /> Home 
          </li>
          </Link>
              
          <Link href="/episodes" >
          <li className="flex items-center my-4 text-2xl font-bold text-white hover:text-red-500">
          <FilmIcon className="w-6 h-5 bg-transparent" /> Episodes
          </li>
          </Link>

          <Link href="/characters" >
          <li className="flex items-center my-4 text-2xl font-bold text-white hover:text-red-500">
          <HandRaisedIcon className="w-6 h-5 bg-transparent" /> Characters
          </li>
          </Link>

        
               
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className='visible xl:hidden lg:hidden'>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="flex items-center justify-end w-11/12">
                <div className="relative z-50 flex flex-col items-center justify-between w-6 h-6 mt-10 cursor-pointer group" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}