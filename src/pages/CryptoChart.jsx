import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { Link, useParams, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ThreeRowNews from "../components/ThreeRowNews";

const CryptoChart = () => {
  let param = useParams();
  let navigate = useNavigate();

  const [options, setOptions] = useState(null);
  const [series, setSeries] = useState(null);
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      let response = await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${param.crypto}/ohlc?vs_currency=usd&days=7`
        )
        .catch(function (error) {
          console.log(error.toJSON());
        });

      setOptions({
        chart: {
          type: "candlestick",
          // height: 350,
        },
        title: {
          text: `${param.crypto.toUpperCase()} CandleStick Chart`,
          align: "center",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      });

      setSeries([{ data: response.data }]);
    };

    fetchChartData();
  }, [setOptions, setSeries, param.crypto]);

  useEffect(() => {
    const fetchCoin = async () => {
      let response = await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${param.crypto}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        )
        .catch(function (error) {
          console.log(error.toJSON());
        });
      setCoin(response.data[0]);
      console.log(response.data[0]);
    };

    fetchCoin();
  }, [setCoin, param.crypto]);

  const toSellPage = () => {
    navigate("sell", {
      state: { id: coin.symbol, price: coin.current_price },
    });
  };

  return (
    <div className="container mt-3">
     
      {coin === null ? (
        <h2 className="m-0">{param.crypto.toUpperCase()}</h2>
      ) : (
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center">
            <img width={30} src={coin.image} alt={coin.id} />
            <h2 className="m-0">{coin.name}</h2>
          </div>

          <div>${coin.current_price}</div>
          <small
            className={
              coin.price_change_percentage_24h < 0
                ? "text-danger"
                : "text-success"
            }
          >
            {coin.price_change_percentage_24h}{" "}
          </small>
        </div>
      )}

      {series === null ? (
        <div>loading...</div>
      ) : (
        <div className="crypto-chart-wrapper">
          <div className="crypto-chart">
            <Chart
              options={options}
              series={series}
              type="candlestick"
              height="350"
            />
          </div>

          <div className="d-flex justify-content-around  my-4">
            <Link to="buy" className="pri-btn">
              Buy
            </Link>

            <button onClick={toSellPage} className="pri-alt-btn">
              Sell
            </button>
          </div>
        </div>
      )}

      {/* <ThreeRowNews /> */}
    </div>
  );
};

export default CryptoChart;
