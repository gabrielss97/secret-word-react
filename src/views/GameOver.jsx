import "./style.css";

const GameOver = ({ retry, score }) => {
  return (
    <>
      <div className="title">Game Over</div>
      <h2 className="initial-screen-subtitle">A sua pontuação foi {score}</h2>
      <button onClick={retry} className="initital-screen-btn">
        Jogar Novamente
      </button>
    </>
  );
};

export default GameOver;
