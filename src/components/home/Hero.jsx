import React from "react";
import styles from "../../assets/css/home.module.css";
import HeroImg from "../../assets/image/hero-image.png";

const Hero = () => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className="row justify-content-between align-items-center">
          <div className="col-5">
            <div className={styles.heroContent}>
              <h1>buy, trade, and hold crypto and giftcard</h1>
            </div>

            <div className={styles.heroInputWrapper}>
              <input
                className={styles.heroInput}
                type="text"
                placeholder="Email/ Phone"
              />
              <button className={styles.heroFormBtn}>Get Started</button>
            </div>
          </div>
          <div className="col-4">
            <img src={HeroImg} alt="differnt gift cards" />
          </div>
        </div>

        <div className={styles.heroBizDetailWrapper}>
          <div className="row">
            <div className="col">
              <div className={styles.heroBizDetail}>
                $200K <br /> <span>Exchange</span>
              </div>
            </div>
            <div className="col">
              <div className={styles.heroBizDetail}>
                10+ <br /> <span>Crypto</span>
              </div>
            </div>
            <div className="col">
              <div className={styles.heroBizDetail}>
                100k <br /> <span>Users </span>
              </div>
            </div>
            <div className="col">
              <div className={styles.heroBizDetail}>
                0.01% <br /> <span>Transcation fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
