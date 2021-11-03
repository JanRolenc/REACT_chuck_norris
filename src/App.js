import React, { useState } from 'react';
import './App.css';

function App() {

  const [joke, setJoke] = useState("");

  async function getJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
  }
  return (

    <div className="mainPage">
      <div className="heroDiv">
        <div className="heroText">
          <h1>I am Chuck Norris</h1>
          <h3>And I'm a HERO!</h3>
        </div>
      </div>
      <div className="jokeDiv">
        <p><button onClick={getJoke}>Click for new joke</button>{joke}</p>
      </div>
    </div>

  );
}
export default App;
