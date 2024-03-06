import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  let [temp,settemp] = useState(0);
  const addValue = () => {
   settemp(temp + 1);
   console.log(temp)
  }
  const decrValue = () => {
   settemp(temp - 1);
   console.log(temp)
  }
  return (
    <>
      <h1>Counter value : {temp} </h1>
      <button onClick={addValue}>Increment{temp}</button>
      <button onClick={decrValue}>Decrement{temp}</button>
    </>
  )
}

export default App
