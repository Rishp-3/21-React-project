import "./App.css";
const App = () => {
  return (
    <div className="container">
      <div className="ansQue">
        <div className="ans"></div>
        <div className="que"></div>
      </div>
      <div className="button">
        <button className="c1" value="C">C</button>
        <button className="c1" value="⌫">⌫</button>
        <button className="c1" value="%">%</button>
        <button className="c2" value="/">/</button>
        <button value="7">7</button>
        <button value="8">8</button>
        <button value="9">9</button>
        <button className="c2" value="X">X</button>
        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button className="c2" value="-">-</button>
        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button className="c2" value="+">+</button>
        <button className="ze" value="0">0</button>
        <button value=".">.</button>
        <button className="c3" value="=">=</button>
      </div>
    </div>
  );
};

export default App;
