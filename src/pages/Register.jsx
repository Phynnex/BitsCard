import React from "react";
import { Link } from "react-router-dom";
import attach from "../assets/image/regandlogin/reg.png";
import Logo from "../assets/image/logo.png";

const Register = () => {
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
          <h1 className="text-white mb-5">Sign Up</h1>

          <form action="">
            <div className="">
              <label>Email</label>
              <input
                className="reg-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-4">
              <label>Phone Number</label>
              <input
                className="reg-input"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mt-4">
              <label>Password</label>
              <input
                className="reg-input"
                type="password"
                placeholder="Enter your password"
              />
              <label>
                At least 8 characters with uppercase letters and numbers
              </label>
            </div>

            <div>
              <input
                className="checkbox-input"
                type="checkbox"
                name="terms and condition"
                id=""
              />{" "}
              <label>
                Accept <Link to="#">Terms of Use & Privacy Policy</Link>
              </label>
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="pri-btn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
