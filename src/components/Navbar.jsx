import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between nav-menu">
          <div className="d-flex align-items-center gap-5">
            <Link to="/">
              <img className="logo" src={Logo} alt="bitscard logo" />
            </Link>
            <Link to="#">Buy Crypto</Link>
            <Link to="/market">Market</Link>
          </div>
          <div className="d-flex align-items-center gap-5">
            <Link to="/login">Login</Link>
            <Link to="/register" className="nav-btn">
              Sign up
            </Link>
            <Link to="#">Download</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
