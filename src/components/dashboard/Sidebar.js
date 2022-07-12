import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import Logo from "../../assets/image/logo.svg";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import styles from "../../assets/css/sidebar.module.css";


const NavIcon = styled(Link)`
  margin-left: .3em;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #21242d;
  width: 300px;
  height: 100vh;
  // display: flex;
  // justify-content: center;
  position: sticky;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
}
`;

const SidebarWrap = styled.div`
  width: 100%;
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const uploadedImage = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        uploadedImage.current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
     
        <SidebarNav sidebar={sidebar}>
      
          <SidebarWrap>
            <NavIcon to="#">
              <img src={Logo} alt="logo" width="250px" height="250px" />
            </NavIcon>
            <div className={styles.profilePic}>
              <div>
                <div className="upload-profile-pic-circle">
                  <label className="upload-label" htmlFor="file-input">
                    <UploadFileIcon
                      style={{ color: "#000", margin: "40px 0px 0px 40px" }}
                    />
                    <input
                      id="file-input"
                      className="upload-pic-input d-none"
                      type="file"
                      accept="image/*"
                      multiple={false}
                      onChange={handleImageUpload}
                    />
                    <img ref={uploadedImage} className="uploaded-pic" />
                  </label>
                  
                </div>
              </div>
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <div className="container">
            <div className={styles.supportContainer}>
              <p>Need some help?</p>
            <p>Contact our support agents</p>
            <div className="d-flex justify-content-center">
            <button className="pri-btn ">Get Started</button>
            </div>
            
           
          </div>
            </div>
            
          </SidebarWrap>
          
        </SidebarNav>
      
    </>
  );
};

export default Sidebar;
