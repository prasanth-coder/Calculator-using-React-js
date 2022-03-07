import './style.css';
import React, { useState } from 'react';

export default function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calulateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult('Error');
    }
  };
  return (
    <div>
      <h1 style={{ textTransform: 'capitalize', color: ' #56cbdb' }}>
        Simple Calculator using React JS
      </h1>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={handleClear} className="highlight" id="clear">
            Clear
          </button>
          <button onClick={backSpace} className="highlight" id="backspace">
            C
          </button>
          <button name="/" className="highlight" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" className="highlight" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" className="highlight" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" className="highlight" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button onClick={calulateResult} className="highlight" id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
