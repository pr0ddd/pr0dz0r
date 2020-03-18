import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Context, SnakeGame } from "react-game-snake";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <SnakeGame
            colors={{
              field: "#282C34",
              food: "#9b59b6",
              snake: "#3498db",
            }}
            countOfHorizontalFields={20}
            countOfVerticalFields={20}
            fieldSize={20}
            loopTime={200}
            pauseAllowed={true}
            restartAllowed={true}
            onLoose={(context: Context) => alert(`You loosed with ${context.game.points} points.`)}
            onPause={(context: Context) => alert("paused")}
            onRestart={(context: Context) => alert("restarted")}
            onResume={(context: Context) => alert("onResume")}
            onWin={(context: Context) => alert(`You won with ${context.game.points} points.`)}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
