import React, { useState } from "react";
import { TextContainer, TextDiv, ImageDiv, TopText } from "./style";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import styled from 'styled-components'



const InputDiv = styled.div`
  display:flex;
  justify-content:space-between;
  background: transparent;
  padding: 10px;
  width: 100%;
  outline: none;
  border: 3px solid #21242d;
  border-radius: 12px;
  margin-bottom: 20px;

`

const Input = styled.input`
  background: transparent;
  padding: 10px;
  width: 100%;
  border: 1px solid #16171d;
  outline: none;
  color: #a7aebf;
`

const ModalContent = () => {
  const [show, setShow] = useState(false);

  const closeShowModal = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="text-center">
        <p>YOU ARE BUYING</p>
        <h3>0.4443555 BTC</h3>
        <p>$20,444.00/BTC</p>
      </div>

      <Divider />
      <div className="d-flex justify-content-between mt-3">
        <p>Fee</p>
        <p>5.01(USD)</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Total</p>
        <p>15.01(USD)</p>
      </div>

      
        <label for="pwd">Paasword *</label><br />

        <Input type="password" id="pwd" name="pwd"/>

      
      <div className="d-flex justify-content-end mt-3">
      <button className="pri-btn w-50">Buy</button>
      </div>

    </div>
  );
};

export default ModalContent;
