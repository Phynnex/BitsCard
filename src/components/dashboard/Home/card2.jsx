import React, { useState } from "react";
import styles from "../../../assets/css/dashboardhome.module.css";

import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Card2 = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.accountCard} >
        <div className="d-flex justify-content-between">
          <p className="m-0 total-bal-text">Naira balance</p>
          <div onClick={() => setShow(!show)}>
              {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
        </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="acct-bal"> {show ? "$18,368.11" : "********"}</div>
            
          </div>

          <div className="d-flex align-items-center gap-3">
            <div>Eke Igwe</div>
            {/* <div>11/25</div> */}
          </div>
          <div className="d-flex align-items-center justify-content-evenly mt-2">
            <button
              onClick={() => navigate("/withdraw")}
              className={styles.accountCardBtn} 
            >
              Withdraw
            </button>
            <button
              onClick={() => navigate("/transfer")}
              className={styles.accountCardBtn} 
            >
              Transfer
            </button>
            {/* <button className="account-card-btn shadow">Send</button> */}
          </div>
        </div>
    </>
  );
};

export default Card2;
