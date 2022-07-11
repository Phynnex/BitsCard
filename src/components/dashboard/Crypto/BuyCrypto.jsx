import React, { useState } from "react";

import styled from 'styled-components'
import { HiCurrencyDollar } from "react-icons/hi";
import { SiBitcoinsv } from "react-icons/si";
import { BsArrowDownUp } from "react-icons/bs";
import Divider from '@mui/material/Divider';

import ModalContent from "./BuyModal/index";
import { FormsModal } from "./BuyModal/style";


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
  width: 90%;
  border: 1px solid #16171d;
  outline: none;
  color: #a7aebf;
`
const ArrowContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:#ffc107;
  display:flex;
  align-items: center;
  justify-content:center;
`

const ExchangeDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
`


const BuyCrypto = () => {

  const [show, setShow] = useState(false);

  const handleShowDetails = (doc) => {
    // setDetails(doc);
    setShow(!show);
  };

  const closeShowModal = () => {
    setShow(!show);
  };
  return (
    <div>
      <div>
        <label for="fname">Price *</label><br />
        <InputDiv>
          <Input type="number" id="price" name="price" />
          <HiCurrencyDollar size='40px' color='#ffc107' />
        </InputDiv>
      </div>
      <ExchangeDiv>
        <ArrowContainer>
          <BsArrowDownUp size='30px' color='#16171d' />
        </ArrowContainer>
      </ExchangeDiv>
      <div>
        <label for="fname">Value *</label><br />
        <InputDiv>
          <Input type="number" id="price" name="price" />
          <SiBitcoinsv size='40px' color='#ffc107' />
        </InputDiv>
      </div>

      {show && (
        <FormsModal onClick={closeShowModal} show={show}>
          <ModalContent />
        </FormsModal>
      )}
      <button className='pri-btn w-100' onClick={handleShowDetails}>Confirm</button>
    </div>
  );
}



export default BuyCrypto;