import React, { useState } from "react";
import Buttons from "./Buttons";
import CurrentPlayer from "./CurrentPlayer";
import GameStatus from "./GameStatus";
import { Link } from "react-router-dom";

export const GAME_STATUS = {
  STARTED: "0",
  WIN: "1",
  DRAW: "2"
};

export default function Container() {
  const [WhoWon, setWhoWon] = useState("");
  const [StatusGame, setStatusGame] = useState(GAME_STATUS.STARTED);
  const [CurrPlayer, setCurrPlayer] = useState("O");
  const [BoxFilledCount, setBoxFilledCount] = useState(1);
  const [BoxArray, setBoxArray] = useState(new Array(9));

  const fillBoxArrayWithIndex = (index, player) => {
    let newBoxArray = [...BoxArray];
    newBoxArray[index - 1] = player;
    setBoxArray(newBoxArray);
    console.log(newBoxArray);
    if (anyoneWon(newBoxArray)) {
      console.log(StatusGame);
      setStatusGame(GAME_STATUS.WIN);
    } else {
      changePlayer(player);
    }
  };

  const changePlayer = player => {
    setBoxFilledCount(BoxFilledCount + 1);
    if (player === "X") {
      setCurrPlayer("O");
    } else {
      setCurrPlayer("X");
    }
    if (BoxFilledCount === 9) {
      setStatusGame(GAME_STATUS.DRAW);
    }
  };

  const anyoneWon = newBoxArray => {
    console.log("I'm checking if anyone won");

    if (
      newBoxArray[0] &&
      newBoxArray[0] === newBoxArray[1] &&
      newBoxArray[1] === newBoxArray[2]
    ) {
      setWhoWon(newBoxArray[0]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[3] &&
      newBoxArray[3] === newBoxArray[4] &&
      newBoxArray[4] === newBoxArray[5]
    ) {
      setWhoWon(newBoxArray[3]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[6] &&
      newBoxArray[6] === newBoxArray[7] &&
      newBoxArray[7] === newBoxArray[8]
    ) {
      setWhoWon(newBoxArray[6]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[0] &&
      newBoxArray[0] === newBoxArray[3] &&
      newBoxArray[3] === newBoxArray[6]
    ) {
      setWhoWon(newBoxArray[0]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[1] &&
      newBoxArray[1] === newBoxArray[4] &&
      newBoxArray[4] === newBoxArray[7]
    ) {
      setWhoWon(newBoxArray[1]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[2] &&
      newBoxArray[2] === newBoxArray[5] &&
      newBoxArray[5] === newBoxArray[8]
    ) {
      setWhoWon(newBoxArray[2]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[0] &&
      newBoxArray[0] === newBoxArray[4] &&
      newBoxArray[4] === newBoxArray[8]
    ) {
      setWhoWon(newBoxArray[0]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    if (
      newBoxArray[2] &&
      newBoxArray[2] === newBoxArray[4] &&
      newBoxArray[4] === newBoxArray[6]
    ) {
      setWhoWon(newBoxArray[2]);
      setStatusGame(GAME_STATUS.WIN);
      console.log("Bro it worked!");
      return true;
    }
    return false;
  };

  return (
    <div style={{ textAlign: "center", fontSize: "30px", padding: 25 }}>
      {(StatusGame === GAME_STATUS.WIN || StatusGame === GAME_STATUS.DRAW) && (
        <>
          <GameStatus PlayerWon={WhoWon} gameStatus={StatusGame} />
          <Link
            to="/tic-tac-toe/start"
            onClick={() => window.location.reload(false)}
          >
            <button style={{ margin: 25, padding: 10, fontSize: "18px" }}>
              Retry
            </button>
          </Link>
          <Link to="/tic-tac-toe">
            <button style={{ margin: 25, padding: 10, fontSize: "18px" }}>
              Main Menu
            </button>
          </Link>
        </>
      )}
      {StatusGame === GAME_STATUS.STARTED && (
        <CurrentPlayer player={CurrPlayer} changePlayer={changePlayer} />
      )}
      <Buttons
        player={CurrPlayer}
        changePlayer={changePlayer}
        fillBoxArrayWithIndex={fillBoxArrayWithIndex}
        disabled={
          StatusGame === GAME_STATUS.WIN || StatusGame === GAME_STATUS.DRAW
        }
      />
    </div>
  );
}
