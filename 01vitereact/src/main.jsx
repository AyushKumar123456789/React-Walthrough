import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return (
    <div>
      <h1>My App</h1>
      <p>My first React App</p>
    </div>    
  )
}

const variable = '  I am a variable to show how variable is injected in react'

const element = React.createElement('a',
  {href: 'https://www.google.com' , target : '_blank'},
  'Click to visit google.com  ',
   variable
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {element}
    <App />
    <MyApp />    
  </React.StrictMode>,
)
