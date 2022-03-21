import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo-alt.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="d-flex justify-content-between nav-menu">
          <div className="d-flex align-items-center gap-5">
            <img className="logo" src={Logo} alt="bitscard logo" />
            <Link to="#">Buy Crypto</Link>
            <Link to="#">Market</Link>
          </div>
          <div className="d-flex align-items-center gap-5">
            <Link to="#">Login</Link>
            <Link to="#">Register</Link>
            <Link to="#">Download</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
