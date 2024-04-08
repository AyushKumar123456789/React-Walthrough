import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./components/Root/Root.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import { githubInfoLoader } from "./components/Github/Github.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact />},
      { path: "/Home", element: <Home />},
      { path: "/User/:userid", element: <User />},
      { path: "/Github", element: <Github /> ,loader: githubInfoLoader},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
