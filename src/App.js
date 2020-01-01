import React from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Start from "./components/Start";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tic-tac-toe/start">
          <Start />
        </Route>
        <Route path="/tic-tac-toe/about">
          <About />
        </Route>
        <Route exact path="/tic-tac-toe/">
          <MainMenu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
