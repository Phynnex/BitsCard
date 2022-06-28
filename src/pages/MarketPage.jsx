import React from "react";
import CTA from "../components/home/CTA";
import DownloadApp from "../components/home/DownloadApp";
import Features from "../components/home/Features";
import Hero from "../components/Market/Hero";
import News from "../components/home/News";
import AllCoins from "../components/Market/table";

const Home = () => {
  return (
    <main>
      <Hero />
      <AllCoins />
      <DownloadApp />
    </main>
  );
};

export default Home;
