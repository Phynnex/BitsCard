import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";
import HeroAtt from "../../assets/image/home/hero-img.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className={styles.heroContent}>
              <h1 className="text-white">
                Start trading Crypto Currency Easily
              </h1>
              <p>Join the world largest crypto exchange </p>

              <div className="mt-5">
                <Link to="/register">
                  <button className="pri-btn">Get Started</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <img className="img-fluid" src={HeroAtt} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
