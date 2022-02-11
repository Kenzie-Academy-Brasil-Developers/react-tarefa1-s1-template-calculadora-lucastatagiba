import { NumberButtons } from "../../styles/styles";

const Botoes = ({ children, handleClick }) => {
  return (
    <NumberButtons onClick={handleClick} value={children}>
      {children}
    </NumberButtons>
  );
};

export default Botoes;
