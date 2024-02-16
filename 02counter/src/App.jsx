import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let  counter = 15;


  const addValue = () => {


    //counter = counter + 1;
    setCounter(counter + 1)   //its not important to take setCounter as variable instead of it we can take anything.
    setCounter(counter + 1)   //its not important to take setCounter as variable instead of it we can take anything.
    setCounter(counter + 1)   //its not important to take setCounter as variable instead of it we can take anything.
    setCounter(counter + 1)   //its not important to take setCounter as variable instead of it we can take anything.
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>cpunter value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
