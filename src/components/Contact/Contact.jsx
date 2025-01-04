import React from 'react'
import style from './contact.module.css'

export default function Contact() {
    return (
        <>
            <div className="  py-4 max-vw-100 ">
                <h1 className={`${style.title} fw-bold title `}>CONTACT ME</h1>
                <span className={`${style.icon}`}><i class="fa-solid fa-star fs-3 py-4  "></i></span>
                <div className="container w-75 text-white mt-4 text-start fs-5 mx-auto">
                    <div className="row w-75 mx-auto pb-5">
                        <div class="mb-3 send"> 
                            <input type="text" class="form-control p-2 fs-5 border-none"  placeholder="Name" />
                        </div>
                        <div class="mb-3 send"> 
                            <input type="email" class="form-control p-2 fs-5 border-none"  placeholder="Email Address" />
                        </div>
                        <div class="mb-3 send"> 
                            <input type="tel" class="form-control p-2 fs-5 border-none"  placeholder="Phone Number" />
                        </div>
                        <div class="mb-3 send"> 
                        <textarea class="form-control p-2 fs-5 border-none" rows="3" placeholder='Message'></textarea>
                        </div>
                        <div class="mb-3 mt-4 send"> 
                        <input
                      type="submit"  className="btn btn-success p-3 ms-2  fs-4" value={"send"}
                    />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
