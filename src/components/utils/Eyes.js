import React, { useEffect, useState } from "react";

function Eyes() {
    const [rotate, setrotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;
            let deltaX= mouseX - window.innerWidth/2
            let deltaY=mouseY - window.innerHeight/2
            var degree = Math.atan2(deltaY,deltaX)*(180/Math.PI)-180
            setrotate(degree)
        })
    })

  return (
    <div className="h-[60vh] w-[40vw] mx-auto ">
      <div className="h-[20vh] w-[40vw ] flex justify-center gap-2">
        <div className="h-[100%] w-[30%] rounded-[50%] bg-white flex items-center justify-center">
          <div className=" relative h-[60%] w-[60%] bg-zinc-800  rounded-[100%]">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="rectangle absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-full h-[38%] rotate-[190deg]">
              <div className="eye w-10 h-10 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[30%] rounded-[50%] bg-white flex items-center justify-center">
        <div className=" relative h-[60%] w-[60%] bg-zinc-800  rounded-[100%]">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="rectangle absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-full h-[38%] rotate-[190deg]">
              <div className="eye w-10 h-10 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
