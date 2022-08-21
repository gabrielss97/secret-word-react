import './style.css';
import { useState } from "react";

const Play = () => {
  const [usedWords, setUsedWords] = useState("");
  const [letter, setLetter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLetter(e.target[0].value);
  }

  return (
    <div className="play-container">
      <h2 className='play-title'>Tente advinhar uma letra da palavra:</h2>
      <form className="play-wrapper" onSubmit={handleSubmit}>
        <input type="text" className="play-input" maxLength="1" />
        <button className="play-btn" type="submit">
          Jogar
        </button>
      </form>
      <h2 className="play-used">Letras já utilizadas: {usedWords}</h2>
    </div>
  );
};

export default Play;
