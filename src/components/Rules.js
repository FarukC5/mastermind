import React, { useState } from "react";
//import "./components.css";

function Rules() {
  const [show, setShow] = useState(true);
  const rulesTitle = show ? "Show Rules" : "Hide Rules";
  const style = { display: show ? "none" : "block" };
  const link = "https://en.wikipedia.org/wiki/Mastermind_(board_game)";

  const toogleRules = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="rules">
      <h3
        onClick={toogleRules}
        style={{ cursor: "pointer"}}
      >
        {rulesTitle}{" "}
      </h3>

      <p style={style}>
        Try to guess the pattern, in both order and color, withn ten turns.
        After submitting a row, a small green square is shown for each circle in
        a correct position and color. A yellow square indicates the existence of
        a correct color in an incorrect position. More info on {""}
        <a href={link} target="_blank" rel="noreferrer">
          Wikipedia
        </a>
        .
      </p>
    </div>
  );
}

export default Rules;

