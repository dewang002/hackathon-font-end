import React, { useState } from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { Link } from 'react-router-dom';
function Nav() {
useGSAP(()=>{
  
})

const navItems = [
  { name: "About", link: "/about" },
  { name: "Vision", link: "/vision" },
  { name: "RAVIAN AI", link: "/" },
  { name: "Offerings", link: "/offerings" },
  { name: "Contact", link: "/contact" },
];

  return (
    <div className=' h-[5vw] w-[80%] mx-auto flex justify-center  text-white cursor-pointer bg-zinc-[rgba(128, 128, 128, 0.43)]'>
        <div className=' flex items-center justify-center gap-16 pt-5 fixed'>
      {navItems.map((elem,index)=>( 
        <Link to={elem.link}>
       <h1 className= {` navname  ${index===2? 'text-3xl font-bold':"text-lg  relative text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"}`}>{elem.name}</h1>
      </Link>
      ))}
      </div>
    </div>
  )
}

export default Nav
