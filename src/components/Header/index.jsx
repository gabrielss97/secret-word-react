import "./style.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [score, setScore] = useState(0);
  const [trys, setTrys] = useState(3);

  return (
    <div className="header-container">
      <h1 className="title">Adivinhe a Palavra</h1>
      <h2 className="score">
        Pontuação: <span className="red">{score}</span>
      </h2>
      <h2 className="hint">
        Dica: <span className="red">Animal</span>
      </h2>
      <h2 className="trys">
        Você ainda tem <span className="red">{trys}</span> tentativa(s).
      </h2>
    </div>
  );
};

export default Header;
