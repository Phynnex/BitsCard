import axios from "axios";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationDataUp from "../../lottie/up.json";
import animationDataDown from "../../lottie/downward.json";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";




const MarketTrend = () => {
  const [allCoins, setAllCoins] = useState(null);
  const [apiErr, setApiErr] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      let response = await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cusd-coin%2Ccardano%2Cdogecoin%2Cshiba-inu%2Ctron&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .catch((error) => {
          setApiErr(error.toJSON());
        });
      console.log(response.data);
      setAllCoins(response.data);
    };

    fetchCoin();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataUp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationDataDown,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <h2 className={styles.marketTrendTittle}>Market Trend</h2>
      <div className={styles.marketTrendContainer}>
        <div className="d-flex justify-content-around text-center">
          <p>Name</p>
          <p>Last Price</p>
          <p>24h Change</p>
          <p>24h Change</p>
        </div>
        {apiErr != null ? (
          <div>{apiErr.message}</div>
        ) : allCoins === null ? (
          <div>Loading...</div>
        ) : (
          allCoins.map((coin, key) => {
            return (
              <div key={key}>
                <Link to={coin.id}>
                  <div className="d-flex justify-content-around">
                    <div className="d-flex">
                      <img
                        width={50}
                        src={coin.image}
                        alt=""
                        style={{ marginRight: "24px" }}
                      />
                      <div>
                        <div>{coin.name}</div>
                        <div>{coin.symbol}</div>
                      </div>
                    </div>

                    <div>${coin.current_price.toLocaleString()}</div>

                    <div className="text-center">
                      <div
                        className={`text-center ${
                          coin.price_change_percentage_24h < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                        {coin.price_change_percentage_24h.toFixed(3)}
                      </div>
                    </div>
                    <div>
                      <Lottie
                        options={
                          coin.price_change_percentage_24h < 0
                            ? defaultOptions2
                            : defaultOptions
                        }
                        height={50}
                        width={100}
                      />
                    </div>
                  </div>
                </Link>
                <hr className="w-90"/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MarketTrend;
