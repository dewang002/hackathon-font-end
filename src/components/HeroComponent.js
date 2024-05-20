import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

function HeroComponent() {

  useGSAP(()=>{
gsap.to(".words",{
 x:"-100%",
 duration:6,
 ease:"linear",
 repeat:-1,

})
  })
  return (
    <>
    <div className="flex justify-start flex-col items-center h-[90vh] w-full cursor-default">
<button className="mt-[4vw] outline outline-1 px-8 py-2 rounded-full uppercase active:scale-[0.96] hover:bg-gradient-to-r from-gray-400 to-gray-700 transition ease-in-out delay-75">Try Ravian</button>
      <h1 className="text-[8vw] font-bold tracking-tight mt-[8vw]">RAVIAN AI</h1>
      <div className="relative  text-center translate-y-[-1vw] leading-[4vw]">
        <h1 className="text-[1.5vw] font-light text-zinc-600 ">Turn Data into</h1>
        <div className=" h-[8vw] w-[100vw]  flex  items-center overflow-hidden">
        <h1 className="words text-[8vw] shrink-0 italic">- Dicision - Dicision</h1>
        <h1 className="words text-[8vw] shrink-0 italic">- Dicision - Dicision</h1>
        <h1 className="words text-[8vw] shrink-0 italic">- Dicision - Dicision</h1>
        </div>
        <h1 className="text-[1.5vw] font-light pt-5 text-zinc-600">with our AI Data Scientist</h1>
      </div>

    </div>
    </>
  );
}

export default HeroComponent;
