import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  //const [ num1, setNum1 ] = useState(0);
  //const [ num2, setNum2 ] = useState(0);
  //const [ op, setOp ] = useState('')
      

  let fullNum = '';
  let opToDo = '';
  let numberOne = ''
  let numberTwo = '';
  let result = 0;


  // Recibe el numero, lo almacena y lo muestra en la pantalla
  const handleNumber = (event) => {
    const digKey = event.target.value;
    // decide si el digKeyo es un numerso u otra cosa
    if (isNaN(digKey)) {
      operation(digKey)
    } else {
      theNumber(digKey);
      showOnScreen(fullNum);
    }
  }

  const operation = (digKey) => {
    switch (digKey) {
      case 'AC':
        fullNum = '';
        opToDo = '';
        showOnScreen(fullNum)
        break;
      case 'equal':
        numberTwo = parseInt(fullNum);
        fullNum = '';
        const resultado = resultOperation(numberOne, numberTwo, opToDo)
        opToDo = '';
        showOnScreen(resultado);
        numberTwo = '';
        numberOne = '';
        setCount(resultado)
        console.log({count})
        break;
      case 'sign':s
        console.log(digKey);
        break;
      case 'dot':
        fullNum = fullNum.concat('.');
        break;
      default:
        opToDo = digKey;
        numberOne = parseInt(fullNum);
        fullNum = '';
        showOnScreen(fullNum)
        break;
    }
  }


  // va creando el numero
  const theNumber = (digKey) => {
    console.log(parseInt(digKey))
    fullNum = fullNum.concat(digKey);
    console.log(fullNum);
  }


  // muestra el valor en pantalla
  const showOnScreen = (fullNum) => {
    const showNum = document.getElementById('numValue');
    showNum.value = fullNum;
  }



  // captura los eventos de click en los botones y ejecuta las funciones para almacenarlos
  useEffect( () => { 
    console.log('ha cambiado el resultado')   
    const calcButtons = document.getElementById('calculator');
    calcButtons.addEventListener("click", handleNumber);
    /* return () => {
    calcButtons.removeEventListener('click', handleNumber);
    }; */ 
  }, [result]
  )

  const resultOperation = (nOne, nTwo, opp) => {
    switch (opp) {
      case 'add':
        result = nOne + nTwo;
        break;
      case 'sub':
        result = nOne - nTwo;
        break;
      case 'div':
        result = nOne / nTwo;
        break;
      case 'mult':
        result = nOne * nTwo;
        break;
      case 'perc':
        result = (nOne * nTwo) / 100;
        break;
      default:
        result = 0;
        break;
    }
    /* setCount(result);
    console.log(count) */
    return result;
  }

  

  return (
    <>
    <div className = 'grid justify-center h-screen content-center'>
      <h3 className = 'bg-gray-700 text-white'>Mi calculadora</h3>
      <div className = 'bg-gray-600'>
        <input 
        className = 'h-16 border-slate-400 bg-black text-white text-right text-xl pr-8' 
        type="text" 
        readOnly 
        id = 'numValue'
        placeholder = '0' />
        <div className = 'w-full' id = 'calculator'>
          <div className = 'w-full flex justify-between'>
            <button className = 'h-12 w-1/4 border-white-400 border bg-red-400'
            value = { 'AC' }>AC</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'sign' }>+-</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'perc' }>%</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'div' }>/</button>
          </div>
          <div className = 'w-full flex justify-between'>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 7 }>7</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 8 }>8</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 9 }>9</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'mult' }>*</button>
          </div>
          <div className = 'w-full flex justify-between'>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 4 }>4</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 5 }>5</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 6 }>6</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'sub' }>-</button>
          </div>
          <div className = 'w-full flex justify-between'>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 1 } >1</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 2 }>2</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 3 }>3</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'add' }>+</button>
          </div>
          <div className = 'w-full flex justify-between'>
            <button className = 'h-12 w-1/4 border-white-400 border bg-gray-400'
            value = { 0 }>0</button>
            <button className = 'h-12 w-1/2 border-white-400 border bg-gray-400'
            value = { 'dot' }>.</button>
            <button className = 'h-12 w-1/4 border-white-400 border bg-blue-600'
            value = { 'equal' }>(=)</button>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App;