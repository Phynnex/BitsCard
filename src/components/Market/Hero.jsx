import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";
import MarketHeroImg from "../../assets/image/marketHero.svg";

const Hero = () => {
  return (
    <div >
      <div >
        <div style={{width:"80%", display:"flex", justifyContent:"center", margin:"auto" }}>
          <div >
            <div >
              <h1>
              Today's Cryptocurrency Prices <br />
               by Market Cap

              </h1>
              <p>The global crypto market cap is $2.05T, a 2.35% decrease over the last day. Read More </p>

              
            </div>
          </div>

          <div >
            <img src={MarketHeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
