import React from "react";

export default function CurrentPlayer(props) {
  return (
    <div style={{ textAlign: "center", fontSize: "30px", padding: 25 }}>
      Current Player is : {props.player}
    </div>
  );
}
