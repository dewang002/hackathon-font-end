import React from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
function Contact() {
  return (
    <div className="h-[60vh] w-4/6  flex mx-auto">
      <div className=" w-[40%] h-[94%] gap-3  flex flex-col items-end pr-10 py-2 border-r">
        <h1 className="text-4xl font-semibold mb-[4vw] ">Contact Us </h1>
        <h1 className="text-2xl font-light flex items-center gap-4">
          Care@ravian.ai
          <MdEmail />
        </h1>
        <h1 className="text-2xl font-light flex items-center gap-4">
          FaceBook <FaSquareFacebook />
        </h1>
        <h1 className="text-2xl font-light flex items-center gap-4">
          Twitter <FaTwitterSquare />{" "}
        </h1>
      </div>
      <div className=" w-[60%] h-full  pl-10 py-2">
        <from className="flex flex-col items-start  text-black text-xl gap-1  ">
          <h1 className="text-white ">Your Name</h1>
          <input
            type="text"
            placeHolder=" Name..."
            className="outline-none bg-white h-[3vw] w-[74%] rounded-lg"
          />
          <h1 className="text-white ">Email Address</h1>
          <input
            type="text"
            placeHolder=" Email..."
            className="outline-none bg-white h-[3vw] w-[74%] rounded-lg"
          />
          <h1 className="text-white ">Message</h1>
          <textarea
            placeHolder="Type your message here..."
            className="rounded h-[16vw] outline-none w-[74%]"
          />
        </from>
      </div>
    </div>
  );
}

export default Contact;