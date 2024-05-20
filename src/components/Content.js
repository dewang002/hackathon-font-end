import React from "react";
import line from "../../public/divider.png";
function Content() {
  return (
    <div className="h-[100vh] w-full">
      <div className="w-full h-32 flex justify-end items-center gap-2 flex-col mb-[10vw]">
        <h1 className="text-white text-4xl font-bold">Our Offerings</h1>
        <div>
          {" "}
          <img src={line} />{" "}
        </div>
      </div>
      <div className="h-[50vh] w-[80%] mx-auto flex justify-around items-start">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4 ">AI Data Analyst</h1>
          <p className="w-[40%] text-center text-lg font-light">
            AI Data Analyst Meet Your AI Data Analyst Unlock the full potential
            of your data with RAVIAN AI’s Data Analyst—an intelligent platform
            designed to transform raw data into actionable insights. Our AI Data
            Analyst is equipped with the latest machine learning algorithms and
            cutting-edge technologies to analyze, interpret, and visualize data
            with precision and speed.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4 ">Gen AI Vision Analyst</h1>
          <p className="w-[50%] text-center text-lg font-light">
            Introducing the Gen AI Vision Analyst: Redefining Visual
            Intelligence At RAVIAN AI, we're excited to introduce our
            revolutionary Gen AI Vision Analyst—a next-generation solution that
            sets a new standard for visual intelligence and data analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
