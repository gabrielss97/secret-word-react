import { useEffect, useState } from "react";
import Letter from "../Letter";
import "./style.css";

const Word = ({ wordsData }) => {
  const [indexWord, setIndexWord] = useState(0);
  const [actualWord, setActualWord] = useState("");
  
  useEffect(() => {
    setActualWord(wordsData[indexWord].split(""));
  },[]);

  return (
    <div className="word-container" id="word">
      {actualWord && actualWord.map((letter, index) => 
        <Letter letter={letter} key={index}/>
      )}
    </div>
  );
};

export default Word;
