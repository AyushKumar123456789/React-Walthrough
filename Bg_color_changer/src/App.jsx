import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("#212121")
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-end" style={{ backgroundColor: color }}>
      <div className="bg-white p-2 rounded-3xl space-x-4 border-black border-2">
        <button
          className="bg-blue-300 text-white px-4 py-2 rounded-3xl "
          onClick={() => setColor("skyblue")}
          
        >  Blue
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-3xl"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl"
          onClick={() => setColor("orange")}
        >
          orange
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-3xl"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded-3xl"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-3xl"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
      </div>
    </div>
  )
}

export default App
