import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="flex justify-between">
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
