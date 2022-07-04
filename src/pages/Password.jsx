import React from 'react';
import { Link } from "react-router-dom";
import attach from "../assets/image/regandlogin/reg.png";
import Logo from "../assets/image/logo.png";

const Password = () => {
    return (
        <div className="register-page">
          <div className="register-image-wrapper">
            <Link to="/">
              <img className="logo reg-logo" src={Logo} alt="" />
            </Link>
    
            <img className="img-fluid" src={attach} alt=" " />
          </div>
          <div className="register-form-wrapper">
            <div className="top-end-info">
              Aleady Have An Account <Link to="/login">Log in!</Link>
            </div>
    
            <div className="reg-form-wrapper">
              <h1 className="text-white mb-5">Password</h1>
    
              <form action="">
                <div className="mb-5">
                  <label className="text-white">Password</label>
                  <input
                    className="reg-input text-white"
                    type="password"
                    placeholder="Create a Password"
                  />
                </div>
                <div className="">
                  <label className="text-white">Confirm Password</label>
                  <input
                    className="reg-input text-white"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="d-grid mt-5">
                  <button className="pri-btn">
                    
                    Submit
    
                    
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}



export default Password;