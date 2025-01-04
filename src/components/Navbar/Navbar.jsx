import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <>
    <div className={`${style.bgNav} fixed-top `}>
    <nav className="navbar navbar-expand-lg ">
    <div className="container mx-auto ">
    <a className="navbar-brand text-white fs-2 fw-bold " href="#">START REACT</a>
    <button  className={`${style.navbarToggler} navbar-toggler text-white fw-bold border-none`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu 
      <i className="fa-solid fa-bars ms-2"></i>
      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ms-5">
          <a className={`${style.active} nav-link text-white active fw-bold fs-6 `} aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item  ms-5">
          <a className="nav-link text-white  fw-bold fs-6 " aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="nav-item  ms-5 ">
          <a className="nav-link text-white fw-bold fs-6" aria-current="page" href="#">CONTACT</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
