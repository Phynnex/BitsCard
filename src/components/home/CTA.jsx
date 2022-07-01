import React from "react";
import styles from "../../assets/css/home.module.css";
import { Link } from "react-router-dom";
import ctaImg from "../../assets/image/home/cta.svg";

const CTA = () => {
  return (
    <section className={styles.homepageSection}>
      <div className={styles.cta}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.sectionHeader}>Start Trading</div>
              <div className="mt-5">
                <Link to="#">
                  <button className="pri-btn">Get Started</button>
                </Link>
              </div>
            </div>
            <div className="col">
              <img
                className={styles.ctaImage}
                src={ctaImg}
                alt="cta-attachment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
