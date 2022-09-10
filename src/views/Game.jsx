import { useState, useRef } from "react";
import "./style.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    // e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <>
      <div className="header-container">
        <h1 className="title">Adivinhe a Palavra</h1>
        <h2 className="score">
          Pontuação: <span className="red">{score}</span>
        </h2>
        <h2 className="hint">
          Dica: <span className="red">{pickedCategory}</span>
        </h2>
        <h2 className="trys">
          Você ainda tem <span className="red">{guesses}</span> tentativa(s).
        </h2>
      </div>
      <div className="word-container" id="word">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare">
              {letter}
            </span>
          )
        )}
      </div>
      <div className="play-container">
        <h2 className="play-title">Tente advinhar uma letra da palavra:</h2>
        <div className="play-wrapper">
          <input
            type="text"
            className="play-input"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            ref={letterInputRef}
            value={letter}
          />
          <button className="play-btn" type="submit" onClick={handleSubmit}>
            Jogar
          </button>
        </div>
        <h2>Letras já utilizadas: </h2>
        <h2 className="play-used">
          {wrongLetters.map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </h2>
      </div>
    </>
  );
};

export default Game;
