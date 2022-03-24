import React from "react";
import styles from "../../assets/css/home.module.css";
import Btc from "../../assets/image/btc.png";
import Eth from "../../assets/image/eth.png";
import Usdt from "../../assets/image/usdt.png";
import Shib from "../../assets/image/shib.png";
import { Link } from "react-router-dom";

const marketInfo = [
  {
    name: "bitcoin",
    alias: "btc",
    icon: Btc,
    lastPrice: "407",
    change: "+2.05%",
    marketCap: "67,25",
  },

  {
    name: "ethereum",
    alias: "eth",
    icon: Eth,
    lastPrice: "407",
    change: "+2.05%",
    marketCap: "67,25",
  },

  {
    name: "tether",
    alias: "usdt",
    icon: Usdt,
    lastPrice: "407",
    change: "+2.05%",
    marketCap: "67,25",
  },

  {
    name: "shiba inu",
    alias: "shib",
    icon: Shib,
    lastPrice: "407",
    change: "+2.05%",
    marketCap: "67,25",
  },
];

const SectionTwo = () => {
  return (
    <section className={styles.sectionTwo}>
      <div className="container">
        <header>
          <h2>Market News</h2>
        </header>

        <div className={styles.cryptoNewsTableWrapper}>
          <div className={styles.cryptoNewsTableHeader}>name</div>
          <div className={styles.cryptoNewsTableHeader}>last price</div>
          <div className={styles.cryptoNewsTableHeader}>24h change</div>
          <div className={styles.cryptoNewsTableHeader}>market cap</div>
        </div>

        {marketInfo.map((data, index) => {
          return (
            <div key={index} className={styles.cryptoNewsTableWrapper}>
              <div className="d-flex align-items-center gap-3 ">
                <img src={data.icon} alt="" />
                <div className={styles.cryptoName}>{data.name}</div>
                <div className={styles.cryptoAlias}>{data.alias}</div>
              </div>
              <div>${data.lastPrice}</div>
              <div className={styles.cryptoPercent}>{data.change}</div>
              <div>${data.marketCap}m</div>
            </div>
          );
        })}

        <div className="d-flex gap-3">
          <h3>Sign Up Now For Free</h3>
          <Link to="#" className="pri-btn">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
