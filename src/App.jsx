import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'




function App() {
  
  let router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
      // {index:true ,element:<Header/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"portfolio",element:<Portfolio/>}
    ]}
   
  ],{ basename: "/ReactApp" })
  
  return (
    <>
    <RouterProvider router={router}></RouterProvider>

     {/* <Navbar/>
     <Header/>
     <Portfolio/>
     <About/>
     <Contact/>
     <Footer/> */}
    </>
  )
}

export default App
