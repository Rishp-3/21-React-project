import React, { useState } from "react";
import "./App.css";
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [display, update] = useState({ ans: "", que: "" });
  const output = (val) => {
    update((prev) => ({
      ...prev,
      que: prev.que + val,
    }));
  };
  const task = (tas) => {
    setOperation(tas);
    output(tas);
  };
  const storeData = (num) => {
    if (operation == "") {
      setNum1(num1 + num);
    } else {
      setNum2(num2 + num);
    }
    output(num);
  };
  // clear
  const clear = () => {
    update({ ans: "", que: "" });
    setNum1("");
    setNum2("");
    setOperation("");
  };
  //solve
  const solve = () => {
    if (operation == "-") {
      update({
        ans: Number(num1) - Number(num2),
        que: "",
      });
    } else if (operation == "+") {
      update({
        ans: Number(num1) + Number(num2),
        que: "",
      });
    } else if (operation == "X") {
      update({
        ans: Number(num1) * Number(num2),
        que: "",
      });
    } else if (operation == "/") {
      update({
        ans: Number(num2) == 0 ? "error" : Number(num1) / Number(num2),
        que: "",
      });
    }
    setNum1("");
    setNum2("");
    setOperation("");
  };
  return (
    <div className="container">
      <div className="ansQue">
        <div className="ans">{display.ans}</div>
        <div className="que">{display.que}</div>
      </div>
      <div className="button">
        <button className="c1" onClick={clear}>
          C
        </button>
        <button className="c1">⌫</button>
        <button className="c1">%</button>
        <button
          className="c2"
          onClick={() => {
            task("/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            storeData("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            storeData("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            storeData("9");
          }}
        >
          9
        </button>
        <button
          className="c2"
          onClick={() => {
            task("X");
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            storeData("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            storeData("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            storeData("6");
          }}
        >
          6
        </button>
        <button
          className="c2"
          onClick={() => {
            task("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            storeData("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            storeData("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            storeData("3");
          }}
        >
          3
        </button>
        <button
          className="c2"
          onClick={() => {
            task("+");
          }}
        >
          +
        </button>
        <button
          className="ze"
          onClick={() => {
            storeData("0");
          }}
        >
          0
        </button>
        <button>.</button>
        <button className="c3" onClick={solve}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
