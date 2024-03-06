import Person from './chai.jsx'

const variable = '  I am a variable to show how variable is injected in react'

function App() {

  return (
    <>
    <h1>Hello, world with vite! |{variable }|</h1>
    <Person />
    </>
  )
}

export default App
