import "./style.css";

import { useState } from "react";

const Game = ({ verifyLetter }) => {
  const [score, setScore] = useState(0);
  const [trys, setTrys] = useState(3);

  const [usedLetters, setusedLetters] = useState([]);
  const [letter, setLetter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setusedLetters([...usedLetters, `${letter}, `]);
    e.target[0].value = "";
  }

  return (
    <>
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
      <div className="word-container" id="word">
        
      </div>
      <div className="play-container">
        <h2 className="play-title">Tente advinhar uma letra da palavra:</h2>
        <form className="play-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            className="play-input"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
          />
          <button className="play-btn" type="submit" onClick={verifyLetter}>
            Jogar
          </button>
        </form>
        <h2>Letras já utilizadas: </h2>
        <h2 className="play-used">{usedLetters}</h2>
      </div>
    </>
  );
};

export default Game;
