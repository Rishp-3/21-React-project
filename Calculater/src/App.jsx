import React, { useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="container">
      <div className="ansQue">
        <div className="ans"></div>
        <div className="que"></div>
      </div>
      <div className="button">
        <button className="c1">C</button>
        <button className="c1">⌫</button>
        <button className="c1">%</button>
        <button className="c2">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="c2">X</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="c2">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="c2">+</button>
        <button className="ze">0</button>
        <button>.</button>
        <button className="c3">=</button>
      </div>
    </div>
  );
}

export default App;
