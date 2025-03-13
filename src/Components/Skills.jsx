import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="my-8 md:my-14 lg:my-20">
      <h2 className="font-bold text-4xl md:text-5xl text-center">Skills</h2>
      <p className="py-5 md:py-12 text-2xl  md:text-3xl text-center px-5">
        The skills, tools and technologies I use:
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-10 px-0 lg:px-10">
        <div className="border p-3 md:p-5 rounded-xl flex flex-col justify-center items-center">
          <FaReact className="text-5xl md:text-7xl text-blue-500"></FaReact>
          <p className="text-xl md:text-2xl font-bold pt-4 md:pt-7">React</p>
        </div>
        <div className="border  p-3 md:p-5 rounded-xl flex flex-col justify-center items-center">
          <SiMongodb className="text-5xl md:text-7xl text-green-800"></SiMongodb>
          <p className="text-xl md:text-2xl font-bold pt-4 md:pt-7">MongoDB</p>
        </div>
        <div className="border  p-3 md:p-5 rounded-xl flex flex-col justify-center items-center">
          <FaNodeJs className="text-5xl md:text-7xl text-green-700"></FaNodeJs>
          <p className="text-xl md:text-2xl font-bold pt-4 md:pt-7">Node.js</p>
        </div>
        <div className="border  p-3 md:p-5 rounded-xl flex flex-col justify-center items-center">
          <SiMysql className="text-5xl md:text-7xl text-blue-500"></SiMysql>
          <p className="text-xl md:text-2xl font-bold pt-4 md:pt-7">MySQL</p>
        </div>
        <div className="border  p-3 md:p-5 rounded-xl flex flex-col justify-center items-center">
          <RiTailwindCssFill className="text-5xl md:text-7xl text-blue-400"></RiTailwindCssFill>
          <p className="text-xl md:text-2xl font-bold pt-4 md:pt-7">
            Tailwind CSS
          </p>
        </div>
        <div className="border  p-3 md:p-5 rounded-xl flex flex-col justify-center items-center">
          <RiFirebaseFill className="text-5xl md:text-7xl text-yellow-300"></RiFirebaseFill>
          <p className="text-xl md:text-2xl font-bold pt-4 md:pt-7">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
