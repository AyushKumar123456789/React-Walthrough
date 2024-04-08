
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <div className='h-screen bg-slate-700 text-center flex-col space-y-10  '>
        <h1 className='text-3xl text-cyan-100'>React App</h1>
        <div >
          <Login />
        </div>
          <div className='text-slate-300 text-xl'>
            <Profile />
          </div>
      </div>
    </UserContextProvider>
  )
}

export default App
