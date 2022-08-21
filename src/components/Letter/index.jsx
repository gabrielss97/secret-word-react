import { useEffect } from "react";
import "./style.css";

const Letter = ({ letter }) => {
//   useEffect(() => {}, []);

  return <div className="letter-container">{letter}</div>;
};

export default Letter;
