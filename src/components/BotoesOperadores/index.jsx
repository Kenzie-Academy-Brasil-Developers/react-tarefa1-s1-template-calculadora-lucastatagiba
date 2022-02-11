import { OperatorButtons } from "../../styles/styles";

const BotoesOperadores = ({ children, handleClick }) => {
  return (
    <OperatorButtons onClick={handleClick} value={children}>
      {children}
    </OperatorButtons>
  );
};

export default BotoesOperadores;
