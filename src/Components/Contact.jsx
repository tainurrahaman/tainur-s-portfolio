import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h3>do you have a project to discuss ?</h3>
        <p>Get in touch</p>
        <div>
          <div className="flex">
            <h3>Contact</h3>
            <h3>Social Media</h3>
          </div>
          <div className="flex">
            <p>gmil.com</p>
            <div>
              <p>icons</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Contact Form</h2>
        <div className="flex items-center justify-center ">
          <form className="w-full max-w-md p-6 space-y-4 rounded-lg shadow-lg">
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
  );
};

export default Contact;
