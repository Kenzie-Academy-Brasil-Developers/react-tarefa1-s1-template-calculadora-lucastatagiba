import Botoes from "../Botoes";
import { NumberKeyboard } from "../../styles/styles";
// import { useState } from "react";

const TecladoNumerico = ({ handleClick }) => {
  return (
    <NumberKeyboard>
      <Botoes handleClick={handleClick}>1</Botoes>
      <Botoes handleClick={handleClick}>2</Botoes>
      <Botoes handleClick={handleClick}>3</Botoes>
      <Botoes handleClick={handleClick}>4</Botoes>
      <Botoes handleClick={handleClick}>5</Botoes>
      <Botoes handleClick={handleClick}>6</Botoes>
      <Botoes handleClick={handleClick}>7</Botoes>
      <Botoes handleClick={handleClick}>8</Botoes>
      <Botoes handleClick={handleClick}>9</Botoes>
      <Botoes handleClick={handleClick}>0</Botoes>
      <Botoes handleClick={handleClick}>,</Botoes>
    </NumberKeyboard>
  );
};

export default TecladoNumerico;
