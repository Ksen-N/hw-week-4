import React from "react";

import Form from "./Form.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>What's the weather like today?</h1>
      </header>
      <div className="container">
        <div className="weather-app">
          <Form />
        </div>
      </div>
      <div className="contact">
        <p>
          {" "}
          <a href="https://github.com/Ksen-N/hw-week-4" rel="noreferrer" target="_blank">
            Open-source code
          </a>
          , by Kseniia Noskova, 2023{" "}
        </p>
      </div>
    </div>
  );
}

