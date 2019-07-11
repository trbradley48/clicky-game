import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="row">
        <p className="navbar-brand gameName">
          Clicky-Game
      </p>
        <p className="guessText">
          {props.yourGuessText}
        </p>
        <p className="currentScoreText">
          Score: {props.yourScore}
        </p>
        <p className="highScoreText">
          | Top Score: {props.yourHighScore}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
