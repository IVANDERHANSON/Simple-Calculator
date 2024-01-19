import React, { useState } from 'react';
import './SimpleCalculator.css';

function SimpleCalculator() {
  const [input, setInput] = useState<string>('0');
  const [result, setResult] = useState<string[]>([]);

  const handleButtonClick = (value: string) => {
    if (value === 'C' || (value === 'DEL' && input === 'Err')) {
      setInput('0');
    }
    else if(value === 'DEL') {
      setInput((prevInput) => prevInput.slice(0, -1) || '0');
    }
    else if(value === '=') {
      try {
        const resultValue = eval(input);
        if(!isNaN(resultValue) && isFinite(resultValue)) {
          setResult((prevResults) => [...prevResults, resultValue.toString()]);
          setInput(resultValue.toString());
        }
        else {
          setInput('Err');
        }
      }
      catch(error) {
        setInput('Err');
      }
    }
    else if(/[+*/-]/.test(value)) {
      const lastCharIsOperator = /[-+*/]$/.test(input);
      setInput((prevInput) =>
        lastCharIsOperator ? prevInput.slice(0, -1) + value : prevInput + value
      );
    }
    else {
      setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
    }
  };

  const history = () => {
    return result.map((resultItem: string, index: number) => (
      <p key={index} onClick={() => handleHistoryClick(resultItem)}>{`${resultItem}`}</p>
    ));
  };

  const handleHistoryClick = (historyValue: string) => {
    setInput(historyValue);
  };

  return (
    <div className='wrapper'>
      <div className='simple-calculator'>
        <div className="field">
          <div id="history">
            <div id='historyScroll'>{history()}</div>
          </div>
          <div id="result">{input}</div>
        </div>

        <div className="button">
          <div className='row1'>
            <p onClick={() => handleButtonClick('C')}>C</p>
            <p onClick={() => handleButtonClick('DEL')}>DEL</p>
            <a href="/support">?</a>
            <p id='divide' onClick={() => handleButtonClick('/')}>/</p>
          </div>

          <div>
            <p onClick={() => handleButtonClick('1')}>1</p>
            <p onClick={() => handleButtonClick('2')}>2</p>
            <p onClick={() => handleButtonClick('3')}>3</p>
            <p id='times' onClick={() => handleButtonClick('*')}>X</p>
          </div>

          <div>
            <p onClick={() => handleButtonClick('4')}>4</p>
            <p onClick={() => handleButtonClick('5')}>5</p>
            <p onClick={() => handleButtonClick('6')}>6</p>
            <p id='minus' onClick={() => handleButtonClick('-')}>-</p>
          </div>

          <div>
            <p onClick={() => handleButtonClick('7')}>7</p>
            <p onClick={() => handleButtonClick('8')}>8</p>
            <p onClick={() => handleButtonClick('9')}>9</p>
            <p id='plus' onClick={() => handleButtonClick('+')}>+</p>
          </div>

          <div className='row5'>
            <p onClick={() => handleButtonClick('0')}>0</p>
            <p id='equal' onClick={() => handleButtonClick('=')}>=</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCalculator;
