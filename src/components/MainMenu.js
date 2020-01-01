import React from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div style={{ textAlign: "center", fontSize: "30px", padding: 25 }}>
      <Link to="/tic-tac-toe/start">
        <button style={{ margin: 25, padding: 10, fontSize: "18px" }}>
          Start
        </button>
      </Link>
      <Link to="/tic-tac-toe/about">
        <button style={{ margin: 25, padding: 10, fontSize: "18px" }}>
          About
        </button>
      </Link>
    </div>
  );
}
