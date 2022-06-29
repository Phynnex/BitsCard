import styled, { css } from "styled-components/macro";


export const TableScrollDiv = styled.div`
  width: 90%;
  margin: 60px auto;

`



export const TransTableBody = styled.table`
  width: 100% !important;
//   background: #21242d;
  border-collapse: collapse !important;

  
  td {
    text-align: center;
    font-size: 14px;
    width: 150px;
    padding-bottom: 40px;
  }
  td:first-child {
    text-align:left;
    // padding-left: 40px;
  }
  th {
    padding: 20px 10px 40px;
    text-align: center;
    text-transform: capitalize;
    // background-color:#21242d;
    font-size: 14px;
    width: 150px;
  }
  th:first-child {
    text-align:left;
    padding-left: 70px;
  }
  
`;


export const TransTableContainer = styled.div`
  width: 95%;

`;
export const TransTableContent = styled.div`
  width: 100%;
  box-sizing: border-box;
`;