import React from "react";
import styles from "../../assets/css/home.module.css";
import Icon from "../Icon";

const Features = () => {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className={`card bg-transparent mx-auto ${styles.featureCard}`}
            >
              <div className="text-center mb-3">
                <Icon icon="fb1" />
              </div>
              <div className={`mb-3 ${styles.featureCardHeader}`}>
                strong security
              </div>
              <p>
                Secure transaction and record information with 2-factor
                authentication (2FA)
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className={`card bg-transparent mx-auto ${styles.featureCard}`}
            >
              <div className="text-center mb-3">
                <Icon icon="fb2" />
              </div>
              <div className={`mb-3 ${styles.featureCardHeader}`}>
                Payment Options
              </div>
              <p>
                Flexible payment of methods with Visa, Mastercard, Paypal, bank
                transfer
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className={`card bg-transparent mx-auto ${styles.featureCard}`}
            >
              <div className="text-center mb-3">
                <Icon icon="fb3" />
              </div>
              <div className={`mb-3 ${styles.featureCardHeader}`}>
                Market Updated
              </div>
              <p>
                The most accurate and trusted source for market cap, valuation,
                and cryptocurrency information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
