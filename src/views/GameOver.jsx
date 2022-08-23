import "./style.css";

const GameOver = ({ retry }) => {
  return (
    <>
      <div>GameOver</div>
      <button onClick={retry}>Jogar Novamente</button>
    </>
  );
};

export default GameOver;
