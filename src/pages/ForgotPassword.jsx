import React from "react";
import { Link, useNavigate } from "react-router-dom";
import attach from "../assets/image/regandlogin/login.png";
import Logo from "../assets/image/logo.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ForgotPassword = () => {
  let navigate = useNavigate();
  return (
    <div className="register-page">
      <div className="register-image-wrapper">
        <Link to="/">
          <img className="logo reg-logo" src={Logo} alt="" />
        </Link>
        <img className="img-fluid" src={attach} alt=" " />
      </div>
      <div className="register-form-wrapper">
        <div className="reg-form-wrapper">
          <div className="d-flex align-items-start gap-5">
            <button onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon className="text-white" />
            </button>
            <h3 className="text-white">Forgot Password</h3>
          </div>

          <p>Please enter your email that you use to sign up to Bitscard</p>

          <form action="">
            <div className="">
              <label>Email</label>
              <input
                className="reg-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="d-grid mt-5">
              <Link to="/verfication">
                <button type="submit" className="pri-btn">
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
