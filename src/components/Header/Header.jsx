import React from 'react'
import avatar from '../../assets/avatar.svg'
import style from "./header.module.css"

export default function Header() {
  return (
    <>

      <div className='bg mt-5 py-5 container-fluid max-vw-100 min-vh-100 d-flex justify-content-center align-items-center flex-column'>

        <div className=''><img src={avatar} className='w-100 ' /></div>
        <div className='text-white py-4 '>
          <h1 className={`${style.title} `}>START REACT</h1>
          <span className={`${style.icon}`}><i class="fa-solid fa-star fs-3 py-4 "></i></span>
          <p className='fs-6 fw-bolder'>Graphic Artist - Web Designer - Illustrator</p>
          
        </div>
      </div>
    </>
  )
}
