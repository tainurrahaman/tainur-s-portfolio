import React from "react";
import { RiMessage2Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="my-8 md:my-14 lg:my-20">
      <div className="flex justify-between gap-16">
        <div className="flex-1">
          <h3 className="font-bold text-4xl uppercase mb-6">
            do you have a project to discuss ?
          </h3>
          <p className="text-2xl flex items-center gap-3 mb-4">
            Get in touch <RiMessage2Fill></RiMessage2Fill>
          </p>
          <div className="flex">
            <div className=" flex-1">
              <h3>Contact</h3>
              <p>tainurrahaman31@gmail.com</p>
            </div>
            <div className="flex flex-1">
              <div>
                <h3>Social Media</h3>
                <p>icons</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2>Contact Form</h2>
          <div className="flex items-center justify-center ">
            <form className="w-full space-y-4 rounded-lg shadow-lg">
              <div>
                <label className="block text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full p-3 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full p-3 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-300">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg hover:opacity-80 focus:outline-none"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
