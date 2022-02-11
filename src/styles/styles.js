import styled from "styled-components";

export const NumberButtons = styled.button`
  width: 60px;
  height: 50px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(145, 145, 145);
  cursor: pointer;
  box-shadow: black 2px 1px 1px 1px;

  :nth-child(10) {
    width: 125px;
  }
`;

export const NumberKeyboard = styled.div`
  display: flex;
  width: 190px;
  gap: 5px;
  flex-wrap: wrap;
  height: 205px;
`;

export const OperatorButtons = styled(NumberButtons)`
  :nth-child(7) {
    height: 105px;
    background: blue;
  }
  :nth-child(1) {
    background: red;
  }
  :nth-child(5) {
    background: red;
  }
  :nth-child(4) {
    background: green;
  }
  :nth-child(2) {
    background: blue;
  }
  :nth-child(3) {
    background: blue;
  }
  :nth-child(6) {
    background: blue;
  }
`;

export const OperatorKeyboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  height: 215px;
`;
