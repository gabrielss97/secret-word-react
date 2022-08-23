import './style.css'

const Index = ({startGame}) => {
  return (
    <div className="initial-screen">
        <h1 className="title">Palavra Secreta</h1>
        <h2 className="initial-screen-subtitle">Clique no botão abaixo para começar a jogar</h2>
        <button className='initital-screen-btn' onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default Index