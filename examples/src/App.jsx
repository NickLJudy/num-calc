import React, { useEffect, useState } from 'react'
import { calc } from './../../src/index'
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  function handleChange(e) {
    const { value, dataset } = e.currentTarget;
    const { sign } = dataset;

    if (sign === '1') setNum1(value);
    if (sign === '2') setNum2(value);
  }

  useEffect(() => {
    if (num1 === '' || num2 === '') return;

    const _result = calc(num1, num2, operator);

    setResult(_result);
  }, [num1, num2, operator])

  function handleSelect({ target }) {
    setOperator(target.value);
  }

  return (
    <article className="App">
      <span>
        NUM1: <input type="number" defaultValue={num1} data-sign="1" onChange={handleChange} />
      </span>

      <select onChange={handleSelect}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <span>
        NUM2: <input type="number" defaultValue={num2} data-sign="2" onChange={handleChange} />
      </span>

      =
      <span>{result}</span>
    </article>
  )
}

export default App
