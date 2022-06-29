import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/image/logo.png";
// import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row ">
          <div className="col-4">
            <img className="logo" src={FooterLogo} alt="logo" />
            <p>True choice for your Investation plan</p>
          </div>
          <div className="col">
            <div className="footer-header">About Us</div>
            <Link to="#">
              <p>About</p>
            </Link>

            <Link to="#">
              <p>Term Of Use</p>
            </Link>

            <Link to="#">
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className="col">
            <div className="footer-header">Product</div>
            <Link to="#">
              <p>Mobile App</p>
            </Link>
          </div>
          <div className="col">
            <div className="footer-header">Support</div>
            <Link to="#">
              <p>Help Center</p>
            </Link>

            <Link to="#">
              <p>Submit A Request</p>
            </Link>

            <Link to="#">
              <p>FAQ</p>
            </Link>
          </div>
        </div>
        {/* <div className="text-center copyright-text">
          bitscard &copy; {new Date().getFullYear()}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
