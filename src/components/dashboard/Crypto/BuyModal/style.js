import styled, { keyframes } from "styled-components/macro";

export const SlideInPopUp = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`;

export const TopText = styled.p`
    color: #ffc107;
    display: flex;
    justify-content: flex-end;
    font-size:12px;

`

export const FormsModal = styled.div`
  height: 65%;
  top: 10%;
  left: 35%;
  right: 35%;
  // bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ show }) => (show ? "rgba(33,36,45,1)" : "#f90")};
  position: fixed;
  transition: all 0.5s ease-out;
  transform: ${({ show }) => (show ? "translateY(0%)" : "translateY(-100%)")};
  animation-name: ${SlideInPopUp};
  animation-duration: 0.5s;
  z-index: 105;
  border-radius: 10px;
  overflow-y: auto;

`;


