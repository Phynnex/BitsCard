import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/image/logo-alt.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <img src={FooterLogo} alt="footer-logo" />
          <div className="d-flex gap-5">
            <Link to="#">Twitter</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">Discord</Link>
            <Link to="#">Facebook</Link>
            <Link to="#">Twitter</Link>
            <Link to="#">Twitter</Link>
          </div>
        </div>
        <div className="text-center">
          bitscard &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
