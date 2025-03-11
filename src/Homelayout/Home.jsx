import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;
