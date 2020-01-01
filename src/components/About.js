import React from "react";

export default function About() {
  return (
    <div
      style={{
        marginLeft: "7%",
        marginRight: "15%",
        textAlign: "left",
        fontSize: "30px",
        padding: 25
      }}
    >
      <h3>About:</h3>
      <img src={require("../tic-tac-toe.png")} alt="Tic Tac Toe" />
      <p>
        <b>Description:</b> Tic-tac-toe, noughts and crosses, or Xs and Os is a
        paper-and-pencil game for two players, X and O, who take turns marking
        the spaces in a 3×3 grid. The player who succeeds in placing three of
        their marks in a horizontal, vertical, or diagonal row is the winner.
      </p>
      <p>
        <b>Players:</b> 2 Skill(s) required: Strategy, tactics, observation
      </p>
      <p>
        <b>Genres:</b> Paper-and-pencil game, Board game, Strategy game
      </p>
    </div>
  );
}
