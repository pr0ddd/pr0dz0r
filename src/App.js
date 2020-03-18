import React from 'react';
import DateCountdown from 'react-date-countdown-timer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       <DateCountdown dateTo='June 13, 2020 00:00:01' callback={()=>alert('Happy birthday')}/>
        </p>
      </header>
    </div>
  );
}

export default App;
