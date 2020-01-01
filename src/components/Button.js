import React, { useState } from "react";

function Button(props) {
  const [Player, setPlayer] = useState("-");

  const playerClick = e => {
    if (!props.disabled) {
      setPlayer(props.player);
      props.fillBoxArrayWithIndex(e.target.id, props.player);
      e.target.disabled = true;
    }
  };

  return (
    <button
      style={{ width: 80, height: 80, color: " black", fontSize: "40px" }}
      onClick={playerClick}
      id={props.id}
    >
      {Player}
    </button>
  );
}
export default Button;
