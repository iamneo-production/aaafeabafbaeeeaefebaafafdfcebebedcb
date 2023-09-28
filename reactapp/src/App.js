import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const options = ['stone', 'paper', 'scissors'];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [roundResult, setRoundResult] = useState([]);
  const [roundCounter, setRoundCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'It\'s a tie!';
    if (
      (user === 'stone' && computer === 'scissors') ||
      (user === 'paper' && computer === 'stone') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    }
    return 'Computer wins!';
  };

  const playGame = (userChoice) => {
    if (roundCounter >= 10) {
      setGameOver(true);
      calculateFinalResult();
      return;
    }

    const computerChoice = generateComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Add the result to the roundResult array
    setRoundResult([...roundResult, result]);

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    setRoundCounter(roundCounter + 1);
  };

  const resetGame = () => {
    setGameOver(false);
    setFinalResult(null);
    setRoundResult([]);
    setRoundCounter(0);
    setUserChoice(null);
    setComputerChoice(null);
  };

  const calculateFinalResult = () => {
    const userWins = roundResult.filter((result) => result === 'You win!').length;
    const computerWins = roundResult.filter((result) => result === 'Computer wins!').length;
    const ties = roundResult.filter((result) => result === 'It\'s a tie!').length;

    const resultText = `User Wins: ${userWins}, Computer Wins: ${computerWins}, Ties: ${ties}`;

    setFinalResult(resultText);
  };

  return (
    <div className="App">
      <h1>Lets Play the game</h1>
      {gameOver ? (
        <div className="final-result">
          <h2>Game Over!</h2>
          <p>{finalResult}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <div className="game-container">
          <div className="choices">
            {options.map((option) => (
              <button key={option} onClick={() => playGame(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className="result">
            {userChoice && (
              <>
                <p>Your choice: {userChoice}</p>
                <p>Computer's choice: {computerChoice}</p>
                <p>Round Result: {roundResult[roundCounter - 1]}</p>
                <p>Round {roundCounter}/10</p>
              </>
            )}
          </div>
          <div className="round-details">
            <h2>Round Details</h2>
            <ul>
              {roundResult.map((result, index) => (
                <li key={index}>Round {index + 1}: {result}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
