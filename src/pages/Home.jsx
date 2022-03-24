import React from "react";
import Hero from "../components/home/Hero";
import SectionFour from "../components/home/SectionFour";
import SectionThree from "../components/home/SectionThree";
import SectionTwo from "../components/home/SectionTwo";

const Home = () => {
  return (
    <main>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
};

export default Home;
