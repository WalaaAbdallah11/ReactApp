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




function App() {
  

  return (
    <>
     <Navbar/>
     <Header/>
     <Portfolio/>
     <About/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
