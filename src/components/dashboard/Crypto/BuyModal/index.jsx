import React, { useState } from "react";
import { TextContainer, TextDiv, ImageDiv, TopText } from "./style";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';



const InputDiv = styled.div`
  
  background: transparent;
  padding: 10px;
  width: 100%;
  outline: none;
  border: 3px solid #21242d;
  border-radius: 12px;
  margin-bottom: 20px;

`

const Input = styled.input`
  background: transparent !important;
  padding: 10px;
  width: 100%;
  border: 1px solid #16171d;
  outline: none;
  color: #a7aebf;
`

const ModalContent = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = React.useState({
    
    password: '',
   
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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

      
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(e) => handleChange(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
      
      <div className="d-flex justify-content-end mt-3">
      <button className="pri-btn w-50">Buy</button>
      </div>

    </div>
  );
};

export default ModalContent;
