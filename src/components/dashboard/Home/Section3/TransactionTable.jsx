import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "../../../../assets/css/dashboardhome.module.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#a7aebf',
    fontSize: 18,
    fontWeight: 'bold',

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: '#a7aebf',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(coin, value, amount, date) {
  return { coin, value, amount, date};
}

const rows = [
  createData('BTC', 0.6, 21600, 210622),
  createData('ETH', 0.6, 21600, 210622),
  createData('USDT', 0.6, 21600, 210622),
  createData('BNB', 0.6, 21600, 210622),
  createData('BTC', 0.6, 21600, 210622),
  createData('ETH', 0.6, 21600, 210622),
  createData('USDT', 0.6, 21600, 210622),
  createData('BNB', 0.6, 21600, 210622),
  
];

export default function TransactionTable() {
  return (
    <TableContainer component={Paper} className={styles.cryptoTable}>
        <h3 style={{color:'#a7aebf',  marginTop:'10px'}}>Recent Crypto Tansactions</h3>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Coin</StyledTableCell>
            <StyledTableCell align="center">Value</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.coin}>
              <StyledTableCell component="th" scope="row">
                {row.coin}
              </StyledTableCell>
              <StyledTableCell align="center">{row.value}</StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
