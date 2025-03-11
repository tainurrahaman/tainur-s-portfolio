import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#111723]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
