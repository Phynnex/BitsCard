import React, { useState } from "react";
import "../../../assets/css/dashboardhome.module.css";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";



const Card1 = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="account-card">
        <div className="d-flex justify-content-between">
        <p className="m-0 total-bal-text">crypto balance</p>
        <div onClick={() => setShow(!show)} >
            {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div className="acct-bal"> {show ? "$18,368.11" : "********"}</div>
        </div>
        <div className="d-flex gap-1 align-items-center justify-content-end">
          {/* <img src={cardImg} alt="" /> */}
        </div>

        <div className="d-flex align-items-center gap-3">
          <div>Eke Igwe</div>
          {/* <div>11/25</div> */}
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <button
            onClick={() => navigate("/market")}
            className="account-card-btn shadow"
          >
            Buy/Sell
          </button>
          <button
            onClick={() => navigate("/all-assets")}
            className="account-card-btn shadow"
          >
            Send
          </button>
          <button
            onClick={() => navigate("/receive-crypto")}
            className="account-card-btn shadow"
          >
            Receive
          </button>
        </div>
      </div>
    </>
  );
};

export default Card1;
