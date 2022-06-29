import React, { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import animationDataUp from "../../lottie/up.json";
import animationDataDown from "../../lottie/downward.json";
import { Link } from "react-router-dom";

import {
  TransTableBody,
  TransTableContainer,
  TransTableContent,
  TableScrollDiv,
} from "./style";
import { useQuery } from "react-query";
import { getAllCoins } from "../../services/marketService";

const AllCoins = () => {
  const queryClient = useQuery();
  const {
    data: allCoins,
    isLoading,
    isError,
  } = useQuery("market", getAllCoins);
  console.log({ allCoins, isLoading, isError });
  console.log(allCoins, "This is market");

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
    <>
      <TableScrollDiv>
        <TransTableContainer>
          <TransTableContent>
            <TransTableBody>
              <tr>
                <th>Name</th>
                <th>Last Price</th>
                <th>24h Change</th>
                <th>24h Change</th>
              </tr>

              {allCoins?.map((coin, key) => (
                <tr key={key}>
                  <td>
                    <div className="d-flex justify-content-start">
                      <img
                        width={50}
                        src={coin.image}
                        alt=""
                        style={{ marginLeft: "60px" }}
                      />

                      <div style={{ marginLeft: "24px" }}>
                        <div>{coin.name}</div>
                        <div>{coin.symbol}</div>
                      </div>
                    </div>
                  </td>

                  <td>${coin.current_price.toLocaleString()}</td>
                  <td>
                    <div
                      className={`text-center ${
                        coin.price_change_percentage_24h < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {coin.price_change_percentage_24h.toFixed(3)}
                    </div>
                  </td>
                  <td>
                    <div>
                      <Lottie
                        options={
                          coin.price_change_percentage_24h < 0
                            ? defaultOptions2
                            : defaultOptions
                        }
                        height={50}
                        width={50}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </TransTableBody>
          </TransTableContent>
        </TransTableContainer>
      </TableScrollDiv>
    </>
  );
};

export default AllCoins;
