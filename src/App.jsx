import './App.css'
import { gameFunctions } from "./components/game-functions";

const { scoreHistory, currentScore, maxScore, randomiseCards } = gameFunctions();

function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="currentScore">current score: {currentScore} </div>
          <div className="bestScore">best score: {maxScore(scoreHistory)}</div>
        </div>
        <div className="cards">
        </div>
      </div>
    </>
  )
}

export default App