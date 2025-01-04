import React from 'react'
import style from './footer.module.css'

export default function () {
    return (
        <>
            <div className={`${style.bg} text-white`}>
                <div className="container  mx-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className={`${style.title} text-uppercase pb-3`}>Location</h3>
                            <p className={`${style.subTitle}`}>2215 John Daniel Drive</p>
                            <p className={`${style.subTitle}`}>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className={`${style.title} text-uppercase pb-3`}>Around the web</h3>
                            <div className={`${style.icons} pt-4`}>
                                <span className={`${style.icon}`}><i class="fa-brands fa-facebook-f"></i></span>
                                <span className={`${style.icon}`}><i class="fa-brands fa-twitter"></i></span>
                                <span className={`${style.icon}`}><i class="fa-brands fa-linkedin-in"></i></span>
                                <span className={`${style.icon}`}><i class="fa-brands fa-youtube"></i></span>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h3 className={`${style.title} text-uppercase pb-3`}>About freelancer</h3>
                            <p className={`${style.content}`}>Freelance is a free to use, MIT licensed Bootstrap theme created by Walaa Abdallah</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={`${style.footerbg}`}>
                    <p className='p-4 text-white '>Copyright © Walaa Abdallah 2022</p>
            </div>
        </>
    )
}
