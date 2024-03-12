import { useCallback, useEffect, useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [password, setPassword] = useState('')
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  //UseRef hook
  const passwordRef = useRef(null)
  
  function passwordGenerator(length, number, specialChar) {
    console.log("passwordGenerator called");
    password = ""
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuzwxyz'
    
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+'
    
    if(number) 
    {
      upper += numbers
    }
    if(specialChar) upper += special
    
    for(let i = 0; i <= length; i++) {
      const index = Math.floor(Math.random() * upper.length + 1)
      password += upper[index]
    }
    setPassword(password)
  }
  
  useCallback(() => {
    passwordGenerator(length, number, specialChar)
  }
  , [length, number, specialChar, password])

  useEffect(() => {
    passwordGenerator(length, number, specialChar)
  }
  , [length, number, specialChar])
  
  const copyClipBoard =  useCallback(()=>{
   passwordRef.current?.select()
   passwordRef.current?.setSelectionRange(0, 99)//In JavaScript, the ?. is called the Optional Chaining operator. It's used to access properties of an object when it's uncertain whether the object or any of its nested properties are null or undefined. If the object or any of its nested properties is null or undefined, the expression will short-circuit and return undefined, without throwing an error.
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    
      <div className="bg-slate-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8">
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className='w-full py-1 px-3'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button
            className='bg-slate-400 text-white px-3 hover:bg-slate-300 active:bg-slate-500'
            onClick = {copyClipBoard}
          >Copy</button>
        </div>
        <div className='flex space-x-2 items-center'>
          <input
            type="range"
            id='length'
            min={6}
            max={20}
            value={length}
            onChange={e => {setLength(e.target.value) ;}}
            className='w-1/3'
          />
          <label htmlFor="length" className='text-white'>Length : {length}</label>
          <input type="checkbox" id="number" value={number}
           onChange={() => { setNumber(!number); }}/>
          <label htmlFor="number" className='text-white' >Number</label>
          <input type="checkbox" id="character" className='text-yellow-50' onChange={() => {setSpecialChar(!specialChar); }} />
          <label htmlFor="character" className='text-white'>character </label>
        </div>
      </div>
   
  )
}

export default App
