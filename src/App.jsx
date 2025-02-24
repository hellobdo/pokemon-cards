import './App.css'
import { gameFunctions } from "./components/game-functions";
import { useState, useEffect} from "react";
import { getPokemonArray } from "./components/pokemon-api"

const { scoreHistory, currentScore, maxScore, randomiseCards } = gameFunctions();

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    getPokemonArray().then(result => {
      setPokemonArray(result);
    }).catch(error => {
      console.error("error fetching pokemon data:", error);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="currentScore">current score: {currentScore} </div>
          <div className="bestScore">best score: {maxScore(scoreHistory)}</div>
        </div>
        <div className="cards">
          {randomiseCards(pokemonArray).map((pictureUrl, index) => (
            <img key={index} src={pictureUrl} alt={`Pokemon ${index + 1}`}/>  
          ))}
        </div>
      </div>
    </>
  )
}

export default App