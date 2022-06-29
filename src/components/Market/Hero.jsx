import React from "react";
// import { Link } from "react-router-dom";
import styles from "../../assets/css/market.module.css";
import MarketHeroImg from "../../assets/image/marketHero.svg";

const Hero = () => {
  return (
    <div className={styles.marketHero}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7">
            <h1 className="text-white">
              Today's Cryptocurrency Prices by Market Cap
            </h1>
            <div className="w-75">
              The global crypto market cap is $2.05T, a 2.35% decrease over the
              last day. Read More
            </div>
          </div>
          <div className="col text-center">
            <img src={MarketHeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
