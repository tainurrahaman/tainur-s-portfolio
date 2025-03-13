import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profile from "../assets/me.jpeg";
const About = () => {
  return (
    <div className="my-8 md:my-14 lg:my-20">
      <h2 className="font-bold text-4xl md:text-5xl pb-8 md:pb-16 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-14 lg:gap-20">
        <div className="pl-0 lg:pl-20 flex items-center justify-center">
          <img
            className="opacity-100 rounded-xl max-w-64 md:max-w-72 lg:max-w-80"
            src={profile}
            alt=""
          />
        </div>
        <div className="space-y-3">
          {" "}
          <p className="text-lg pr-0 lg:pr-10">
            Hello and welcome to my corner of the web! I'm a passionate and
            creative web application developer with a love for turning ideas
            into interactive digital experiences. Whether it's crafting elegant
            user interfaces, optimizing backend performance, or solving complex
            coding challenges, I'm always excited to bring innovation to the
            digital world.
          </p>
          <p className="text-lg pr-10">
            Let’s connect and create something amazing together!
          </p>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-[22px] mt-4 lg:mt-8 mb-4">
              Connect with me:
            </p>
            <div className="flex gap-3">
              <div
                className="border p-3 rounded-xl cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/tainur/", "_blank")
                }
              >
                <p className="flex items-center gap-2 text-[20px] pr-5">
                  <FaLinkedin className="text-[22px] text-blue-600 bg-white" />
                  Linkedin
                </p>
              </div>
              <div
                className="border p-3 rounded-xl cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/tainurrahaman", "_blank")
                }
              >
                <p className="flex items-center gap-2 text-[20px] pr-5">
                  <FaGithubSquare className="text-[22px] text-black bg-white" />
                  Github
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
