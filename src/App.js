import { useState } from "react";
import "./App.css";
import TecladoNumerico from "./components/TecladoNumerico";
import TecladoOperadores from "./components/TecladoOperadores";

function App() {
  const [visor, setVisor] = useState([]);

  const calcula = () => {
    const valorTratado = visor.join("").replace(/x|÷/g, (a) => {
      return a === "x" ? "*" : "/";
    });
    console.log(valorTratado);
    setVisor([eval(valorTratado)]);
  };

  const handleClick = (event) => {
    if (!isNaN(Number(event.target.value))) {
      setVisor([...visor, Number(event.target.value)]);
    } else if (event.target.value !== "=") {
      setVisor([...visor, event.target.value]);
    }

    if (typeof visor.slice(-1)[0] === "number") {
      event.target.value === "=" && calcula();
    }

    event.target.value === "AC" && setVisor([]);
    event.target.value === "C" &&
      setVisor((prevState) => {
        console.log(prevState);
        const visorCopied = [...prevState];
        visorCopied.pop();
        visorCopied.pop();
        return visorCopied;
      });
  };

  return (
    <div className="App">
      <div className="corpoCalculadora">
        <div className="visor">
          <h1> {visor.join(" ")} </h1>
        </div>
        <div className="teclado">
          <TecladoNumerico
            setVisor={setVisor}
            visor={visor}
            handleClick={handleClick}
          />
          <TecladoOperadores
            setVisor={setVisor}
            visor={visor}
            handleClick={handleClick}
          />
        </div>
        <div className="footer">
          <div className="separadorFooter"></div>
          <div className="separadorFooter"></div>
          <div className="separadorFooter"></div>
          <div className="separadorFooter"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
