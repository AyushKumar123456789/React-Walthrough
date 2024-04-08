import React from 'react'
import  {useContext, useState} from 'react'
import UserContext from '../context/UserContext'



function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('');
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className='flex flex-wrap space-x-2 justify-center' >
      
      
      <input type="text" placeholder='userName' value = {username} onChange={(e) => {setusername(e.target.value)}} className='rounded-xl p-2 ' />
      <input type="text" placeholder='password'  value={password} onChange={(e) => {setpassword(e.target.value)}} className='rounded-xl p-2 '/>
      <button onClick={handleSubmit} className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl p-1'>Submit</button>
       
    </div>
  )
}

export default Login
