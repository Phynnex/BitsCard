import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";

const SectionFour = () => {
  return (
    <section className={styles.sectionFour}>
      <div className="text-center">
        <h2 className="mb-3">Start Trading</h2>
        <Link to="#" className="pri-btn">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default SectionFour;
