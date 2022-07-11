import React, { useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";
import Notification_icon from "../assets/image/home/notification_icon.svg";
import ModalContent from "./Modal";
import { FormsModal } from "./Modal/style";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShowDetails = (doc) => {
    // setDetails(doc);
    setShow(!show);
  };

  const closeShowModal = () => {
    setShow(!show);
  };

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
            {/* {show && (
              <FormsModal onClick={closeShowModal} show={show}>
                <ModalContent />
              </FormsModal>
            )}
            <button onClick={handleShowDetails}>
              <img src={Notification_icon} alt="bell" />
            </button> */}
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
