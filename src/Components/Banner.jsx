import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../assets/lottie.json";
import { MdFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <div className="hero my-0 md:my-14 lg:my-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-10">
        <div className="w-full md:max-w-3/5 pr-0 md:pr-5 lg:pr-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-7 lg:mb-10">
            Frontend Developer
          </h1>
          <p className="py-3 md:py-6 text-lg">
            I am Tainur - <span className="text-blue-500">web developer</span>{" "}
            from Bangladesh with 1 year of experience in building responsive and
            interactive web applications using React, Node.js, and MongoDB.
          </p>
          <button className="btn bg-purple-600 text-lg flex items-center border-none mt-3 mb-3 md:mb-0">
            Resume <MdFileDownload></MdFileDownload>{" "}
          </button>
        </div>

        <div className="w-full md:max-w-2/5 flex justify-center">
          <Lottie
            animationData={lottieImage}
            loop={true}
            className="w-80 lg:w-96 h-80 lg:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
