import React from 'react';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

const BuyCrypto = () => {
    return (
        <div>
            <TextField
          id="outlined-number"
          label="Price"
          type="number"
          InputLabelProps={{
            shrink: true,
            
          }}
          InputProps={{
            
            endAdornment: (
              <InputAdornment position="end" style={{color:"#ffc107"}}>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        >
          </TextField>
            <button className='pri-btn w-100'>Confirm</button>
        </div>
    );
}



export default BuyCrypto;