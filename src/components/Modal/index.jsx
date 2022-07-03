import React, { useState } from "react";
import { Modaldata } from "./data";
import { TextContainer, TextDiv, ImageDiv, TopText } from "./style";
import { Link } from "react-router-dom";

const ModalContent = () => {
  const [show, setShow] = useState(false);

  const closeShowModal = () => {
    setShow(!show);
  };
  return (
    <div>
        <Link to='/notification'>
        <TopText className="d-flex justify-content-end">See all</TopText>

        </Link>

      {Modaldata.map((info) => (
        <div>
          <TextContainer key={info}>
            <ImageDiv>
              <img src={info.icon} alt="icon" width="12" height="12" />
            </ImageDiv>
            <Link to={info.link}>
            <TextDiv>
              <p className='text-white'>{info.tittle}</p>
              <div>
              <p>{info.text}</p>
              <p>{info.date}</p>
              </div>
             
            </TextDiv>
            </Link>
            
            
          </TextContainer>
          <div style={{ border: "0.5px solid #16171d" }}></div>

        </div>
      ))}
    </div>
  );
};

export default ModalContent;
