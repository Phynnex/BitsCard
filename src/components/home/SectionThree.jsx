import React from "react";
import styles from "../../assets/css/home.module.css";
import Img from "../../assets/image/laphone.png";
import Gplay from "../../assets/image/google-play-badge.png";
import Ios from "../../assets/image/ios-badge.png";

const SectionThree = () => {
  return (
    <section className={styles.sectionThree}>
      <div className="container">
        <header className="mb-5">
          <h2>Trade On The Go</h2>
        </header>

        <div className="d-flex align-items-center mb-5">
          <div>
            <img src={Img} alt="" />
          </div>

          <div>
            <a href="#">
              <img className="img-fluid" src={Gplay} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <img className="img-fluid" src={Ios} alt="" />
            </a>
          </div>
        </div>

        <div>
          <h3>Need help ?</h3>

          <div className="d-flex justify-content-evenly">
            <h4>24/7 Chat Support</h4>

            <h4>FAQs</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
