import { OperatorKeyboard } from "../../styles/styles";
import BotoesOperadores from "../BotoesOperadores";

const TecladoOperadores = ({ handleClick }) => {
  return (
    <OperatorKeyboard>
      <BotoesOperadores handleClick={handleClick}>AC</BotoesOperadores>
      <BotoesOperadores handleClick={handleClick}>÷</BotoesOperadores>
      <BotoesOperadores handleClick={handleClick}>-</BotoesOperadores>
      <BotoesOperadores handleClick={handleClick}>=</BotoesOperadores>
      <BotoesOperadores handleClick={handleClick}>C</BotoesOperadores>
      <BotoesOperadores handleClick={handleClick}>x</BotoesOperadores>
      <BotoesOperadores handleClick={handleClick}>+</BotoesOperadores>
    </OperatorKeyboard>
  );
};

export default TecladoOperadores;
