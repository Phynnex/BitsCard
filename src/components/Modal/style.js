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
  height: 60%;
  top: 15%;
  left: 63%;
  right: 12%;
  bottom: 50%;
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
  overflow-y: scroll;


`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const TextDiv = styled.div`
  margin-left: 20px;
  margin-top: 15px;
  color: #a7aebf;
  cursor: pointer;


  p: first-child {
    line-height: 0;
    font-size: 12px;
  }
  p{
    line-height: 0;
    font-size: 8px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  padding: 2px 12px;
  outline: none;
  border: none;
  background: #ffc107;
  color: #000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  // margin-top: 8px;
  margin-bottom: 20px;
`
