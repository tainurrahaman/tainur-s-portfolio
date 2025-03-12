import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div
      className="font-roboto"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/7NnXzRbY/dhumketu-1.webp')",
        opacity: 0.9,
      }}
    >
      <div className=" inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
