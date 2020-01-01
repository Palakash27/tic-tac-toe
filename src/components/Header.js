import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1> Tic Tac Toe</h1>
      <Link style={{ color: "inherit" }} to="/tic-tac-toe/">
        Home
      </Link>
    </header>
  );
}
