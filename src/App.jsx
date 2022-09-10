// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import wordList from "./mock";

// Views
import Home from "./views";
import Game from "./views/Game";
import GameOver from "./views/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  let [guesses, setGuesses] = useState(3);
  let [score, setScore] = useState(0);

  const pickedWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };
  // starts the secret word game
  const startGame = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    // pick word and category
    const { word, category } = pickedWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letter) => letter.toLowerCase());
    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toString();

    // check if letter has already been used
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      if (guessedLetters.length === normalizedLetter.length) {
        // logica aqui?
      }
      if (letter) {
        setScore((score += 100));
        setGuessedLetters((actualGuessedLetters) => [
          ...actualGuessedLetters,
          normalizedLetter,
        ]);
      }
    } else {
      if (letter) {
        setGuesses((guesses -= 1));
        setWrongLetters((actualWrongLetters) => {
          return [...actualWrongLetters, normalizedLetter];
        });
      }
    }

    if (guesses === 0) {
      setGameStage(stages[2].name);
    }
  };

  // restarts the game
  const retry = () => {
    setGuesses(3);
    setScore(0);
    setGuessedLetters([]);
    setWrongLetters([]);

    setGameStage(stages[0].name);
  };

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((score) => (score += 1000));

      startGame();
    }

    console.log(uniqueLetters);
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === "start" && <Home startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
