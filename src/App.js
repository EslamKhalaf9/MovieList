import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ToWatch from "./components/ToWatch";
import Watched from "./components/Watched";
import MoviesContextProvider from "./Contexts/MoviesContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <MoviesContextProvider>
            <Navbar />
            <Route path="/" exact>
              <ToWatch />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
          </MoviesContextProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
