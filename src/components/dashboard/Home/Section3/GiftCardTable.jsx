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
    width:'80%',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, amount, status) {
  return { name,  amount, status};
}

const rows = [
  createData('Apple', 21600, 'Successful'),
  createData('Steam', 21600, 'Pending'),
  createData('Amozon', 21600, 'Cancelled'),
  createData('Apple', 21600, 'Successful'),
  createData('Steam', 21600, 'Pending'),
  createData('Amozon', 21600, 'Cancelled'),
  
];

export default function TransactionTable() {
  return (
    <TableContainer component={Paper} className={styles.cryptoTable}>
        <h3 style={{color:'#a7aebf', marginTop:'10px'}}>Recent GiftCard Tansactions</h3>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              <StyledTableCell align="center" >
                    <button 
                        className={styles.tableBtn}
                        style={{ 
                            backgroundColor: (row.status === "Successful" && "#44BBA5") || (row.status === "Pending" && "#FF7900") || (row.status === "Cancelled" && "#E94F37")
                        }}>
                            {row.status}
                    </button>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



















// // import "../../assets/css/earning.css"

// const Transactions = [
// 	{
// 		name: "Elite Admin",
//         amount: "$200",
// 		status: "Successful",
		
// 	},
//     {
// 		name: "Elite Admin",
//         amount: "$200",
// 		status: "Pending",
		
// 	}, 
//     {
// 		name: "Elite Admin",
//         amount: "$200",
// 		status: "Cancelled",
		
// 	}
	
// ]

// const GiftCardTable = () => {
// 	return (
// 		<>
// 			{/* <h4>Transaction Table</h4> */}
// 			<table className='container w-50' >
// 				<thead>
// 					<tr>
// 						<th scope="col">Name</th>
// 						<th scope="col">Amount</th>
// 						<th scope="col">Status</th>
// 					</tr>
// 				</thead>
// 				<tbody >
// 					{Transactions.map(row => (
// 						<tr >
// 							<td data-label="Name">{row.name}</td>
// 							<td data-label="amount">{row.amount}</td>

// 							<td
// 								data-label="status"
// 								className="status"
// 								style={{
// 									backgroundColor: (row.status === "Successful" && "#44BBA5") || (row.status === "Pending" && "#FF7900") || (row.status === "Cancelled" && "#E94F37"),
//                                     borderRadius:'10px',
// 								}}
// 							>
// 								{row.status}
// 							</td>

							
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</>
// 	)
// }

// export default GiftCardTable;
