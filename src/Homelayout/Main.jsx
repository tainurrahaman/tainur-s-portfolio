import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div
      className="font-roboto"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/7NnXzRbY/dhumketu-1.webp')",
        opacity: 0.8,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-5">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
