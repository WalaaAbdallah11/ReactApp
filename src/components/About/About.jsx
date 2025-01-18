import React from 'react'
import style from "./about.module.css"

export default function About() {
  return (
   
        <div className="bg    py-5   max-vw-100   d-flex justify-content-center align-items-center flex-column  ">
            <h1 className={`${style.title} text-white fw-bold title pt-4`}>ABOUT</h1>
            <span className={`${style.icon}`}><i class="fa-solid fa-star fs-3 py-4 text-white "></i></span>
            <div className="container w-75 text-white mt-4 text-start fs-5 mx-auto">
                 <div className="row w-75 mx-auto pb-5">
                    <div className='col-md-6'>
                        <p className={`${style.content}`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className={`${style.content} `}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                 </div>
            </div>
         
        
        </div>
  )
}
