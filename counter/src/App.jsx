import { useState } from 'react';
import './App.css'

function App() {
  //let counter = 5;
let [counter,setCounter] =useState(0)
  function addValue(){
    //return counter++;
    setCounter(counter++)
  }

  function remoValue(){
    //return counter--;
    setCounter(counter--)
  }
  return (
    <>
      <h1>Mujeeb learning React!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={remoValue}>Remove value</button>
        
    </>
  )
}

export default App
