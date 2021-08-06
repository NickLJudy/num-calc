import React, { useState } from 'react'
import {calc} from './../../../dist/num-calc'
import './App.css';

console.log(calc);
function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [operator,setOperator] = useState('+');
  const [result,setResult] = useState('');
  
  function handleChange(e){
    const {sign,value} = e.currentTarget.dataset;

    if(sign === '1') setNum1(value);
    if(sign === '2') setNum2(value);

    handleCalc();
  }

  function handleCalc(){
    if(num1 === '' || num2 === '') return;

    const _result = calc(num1,num2,operator);
    
    setResult(_result);
  }

  function handleSelect({target}){
    setOperator(target.value);
  }

  return (
    <article className="App">
      <span>
        NUM1: <input type="number" defaultValue={num1} data-sign="1" onChange={handleChange}/>
      </span> 

      <select onChange={handleSelect}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select> 

      <span>
        NUM2: <input type="number" defaultValue={num2} data-sign="2" onChange={handleChange}/>
      </span>

      = 
      <span>{result}</span>
    </article>
  )
}

export default App
