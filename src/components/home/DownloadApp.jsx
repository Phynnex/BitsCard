import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";
import Icon from "../Icon";

const DownloadApp = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className={styles.downloadAppCardWrapper}>
              <div className={styles.downloadAppCard}></div>
              <div className={`align-self-end ${styles.downloadAppCard}`}></div>
            </div>
          </div>
          <div className="col">
            <div className={styles.sectionHeader}>
              Trading Everytime and Everywhere
            </div>
            <p>Start with our Crypto App. Download now! </p>

            <div className="mt-5">
              <Link to="#">
                <Icon icon="andriodBtn" />
              </Link>

              <Link className={`ms-3`} to="#">
                <Icon icon="appleBtn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
