import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../assets/lottie.json";

const Banner = () => {
  return (
    <div className="hero ">
      <div className="flex justify-between items-center">
        <div className="max-w-3/5">
          <h1 className="text-5xl font-bold">Frontend Developer</h1>
          <p className="py-6">
            I am a frontend developer from Bangladesh with 1 year of experience
            in building responsive and interactive web applications using React,
            Node.js, and MongoDB.
          </p>
          <button className="btn btn-primary">Resume</button>
        </div>

        <div className="max-w-2/5">
          <Lottie
            animationData={lottieImage}
            loop={true}
            className="w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
