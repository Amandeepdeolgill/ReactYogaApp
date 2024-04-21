import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Exercises from './pages/Exercises.jsx';
import Trainers from './pages/Trainers.jsx';
import HomePage from './pages/HomePage.jsx';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children: [
    {
    path:'/',
    element: <HomePage/>,
  },
  {
    path:'/exercises',
    element: <Exercises/>,
  },
  {
    path:'/trainers',
    element: <Trainers/>,
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
