import React from 'react'
import style from "./Portfolio.module.css"

export default function PortfolioCard({img,onClick}) {
    let {id,image,title,description} =img;
  return (
    <>
     <div className=" col-sm-6 col-md-6 col-xl-4 p-4" onClick={onClick}>
                        <div className="position-relative">
                            <div><img src={image} className='w-100 rounded' /></div>
                            <div className={`${style.layer} layer position-absolute d-flex justify-content-center align-items-center `}>
                                <span className={`${style.plusIcon} `}>
                                <i className="fa-solid fa-plus "></i>
                                </span>
                            </div>

                        </div>

                    </div></>
  )
}
