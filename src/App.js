import './App.css';
import Header from './components/Header';
import Play from './components/Play';
import Word from './components/Word';
import wordsData from './mock';

function App() {
  return (
    <div className="App">
     <Header/>
     <Word wordsData={wordsData}/>
     <Play/>
    </div>
  );
}

export default App;
