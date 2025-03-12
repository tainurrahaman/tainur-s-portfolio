import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";
import Education from "../Components/Education";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
