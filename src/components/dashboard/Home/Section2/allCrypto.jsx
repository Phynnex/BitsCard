import Lottie from "react-lottie";
import animationDataUp from "../../../../lottie/up.json";
import animationDataDown from "../../../../lottie/downward.json";
import { Link, useNavigate } from "react-router-dom";
import {
  TransTableBody,
  TransTableContent,
  
} from "../../../market/style";
import { useQuery } from "react-query";
import { getAllCoins } from "../../../../services/marketService";
import  styled  from "styled-components";

const TableScrollDiv = styled.div`
width: 90%;
`
const TransTableContainer = styled.div`
  width: 95%;
  height: 500px;
  overflow-y: auto;
  background: #21242d;
  margin: 0px auto;
  border-radius: 12px;
`
const AllCrypto = () => {
  const navigate = useNavigate();

  const queryClient = useQuery();
  const {
    data: allCoins,
    isLoading,
    isError,
  } = useQuery("market", getAllCoins);
  console.log({ allCoins, isLoading, isError });
  console.log(allCoins, "This is market");

  // const queryClient = useQuery();
  // const {
  //   data: allCoins,
  //   isLoading,
  //   isError,
  // } = useQuery("market", getAllCoins);
  // console.log({ allCoins, isLoading, isError });
  // console.log(allCoins, "This is market");
  // const queryClient = useQuery();
  // const {
  //   data: marketTrends,
  // } = useQuery("market", getMarketTrends);

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
                <tr key={key} onClick={() => {
                  navigate(`/market/${coin.name}`);
                }}>
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

export default AllCrypto;
