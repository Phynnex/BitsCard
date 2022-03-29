import React, { useState } from "react";
import { Link } from "react-router-dom";
import attach from "../assets/image/regandlogin/reg.png";
import Logo from "../assets/image/logo.png";
import AuthCode from "react-auth-code-input";

const VerificationPage = () => {
  const [result, setResult] = useState();
  const handleOnChange = (res: string) => {
    setResult(res);
  };
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
          <h1 className="text-white mb-5">Verification</h1>

          <p>
            Code have been sent to your email
            <br />
            <span className="text-white">johny@gmail.com</span>
          </p>

          <div className="verfication-input-wrapper">
            <AuthCode length={4} onChange={handleOnChange} />
          </div>

          <div className="text-center mt-3">
            <button className="pri-color">Resend Code</button>
          </div>

          <div className="d-grid mt-3">
            <button type="submit" className="pri-btn">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
