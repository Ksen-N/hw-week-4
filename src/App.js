import React, { useSate } from "react";
import axios from "axios";

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
          <a href="starlit-bombolone-6e48f9" target="_blank">
            Open-source code
          </a>
          , by Kseniia Noskova, 2023{" "}
        </p>
      </div>
    </div>
  );
}

