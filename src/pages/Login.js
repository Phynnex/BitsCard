import React from "react";
import { Link } from "react-router-dom";
import attach from "../assets/image/regandlogin/login.png";
import Logo from "../assets/image/logo.png";

const Login = () => {
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
          Don't have an account <Link to="/register">Sign up!</Link>
        </div>

        <div className="reg-form-wrapper">
          <h1 className="text-white mb-5">Log In</h1>

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
              <label>Password</label>
              <input
                className="reg-input"
                type="password"
                placeholder="Enter your password"
              />
              <Link to="/forgot-password">Forgot password ?</Link>
            </div>

            <div className="d-grid mt-5">
              <button type="submit" className="pri-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
