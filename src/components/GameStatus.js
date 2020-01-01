import React from "react";
import { GAME_STATUS } from "./Container";

export default function GameStatus(props) {
  console.log(props.gameStatus);
  return (
    <div>
      {props.gameStatus === GAME_STATUS.WIN && (
        <div>{props.PlayerWon} won the match!</div>
      )}
      {props.gameStatus === GAME_STATUS.DRAW && <div>Opps, It's a draw!</div>}
    </div>
  );
}
