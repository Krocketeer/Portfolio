import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Header"
import Header from "./components/Header";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
