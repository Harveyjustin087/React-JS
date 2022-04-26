import React from "react";
import logo from "./logo.svg";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Home/>
      </div>
  );  
}

export default App;
