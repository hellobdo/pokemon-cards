import './App.css'
import { getPokemonArray } from "./components/pokemon-api";
import { useState, useEffect} from "react";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [playedCards, setPlayedCards] = useState([]);

  useEffect(() => {
  }, [playedCards])

  useEffect(() => {
    getPokemonArray().then(result => {
      setPokemonArray(result);
    }).catch(error => {
      console.error("error fetching pokemon data:", error);
    });
  }, []);

  useEffect(() => {
    setMaxScore(scoreHistory.length === 0 ? 0 : Math.max(...scoreHistory));
  }, [scoreHistory])
  
  const handleClick = (play) => {
    setPlayedCards(prevPlayedCards => [...prevPlayedCards, play]);
    const shuffled = randomiseCards(pokemonArray);
    setPokemonArray(shuffled);

    if(!playedCards.includes(play)) {
      setCurrentScore(prevScore => prevScore + 1)
    } else {
      setScoreHistory(prevHistory => [...prevHistory, currentScore]);
      setPlayedCards([]);
      setCurrentScore(0);
    }
  }

  const randomiseCards = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray;
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="currentScore">current score: {currentScore} </div>
          <div className="maxScore">best score: {maxScore}</div>
        </div>
        <div className="cards">
          {randomiseCards(pokemonArray).map((pictureUrl, index) => (
            <div className="card" key={index} onClick={() => handleClick(pictureUrl)}>
              <img src={pictureUrl} alt={`Pokemon ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App