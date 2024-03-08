import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

return (
    <>
      <h1 className='bg-green-400 text-black p-14 '>Tailwind</h1>     
      <Card username = "Lisa" photo = "/wallpaperbetter.jpg" />  
      <Card/>
    </>
  )
}

export default App
