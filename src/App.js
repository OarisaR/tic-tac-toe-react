import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Header} from "./MyComponents/Header.jsx";
import {Board} from "./MyComponents/Board.jsx";
function App() {
  

  return (
    <div className="main">
     <Header/>
     <Board/>
    </div>
  );
}

export default App;
