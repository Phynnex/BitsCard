import React from "react";
import CTA from "../components/home/CTA";
import DownloadApp from "../components/home/DownloadApp";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import MarketTrend from "../components/home/MarketTrend/table";
import News from "../components/home/News";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <DownloadApp />
      <MarketTrend />
      <News />
      <CTA />
    </main>
  );
};

export default Home;
