import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout() {
  return (
    <>
     <Navbar/>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}
