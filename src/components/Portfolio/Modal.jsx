import React from 'react';
import style from "./portfolio.module.css"

export default function Modal({ image, onClose }) {
    const { title, description, image: imgSrc } = image;

    return (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
            <div className="modal-dialog modal-dialog-centered mx-auto position-relative ">
                <div className="modal-content p-4">
                        <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close position-absolute end-0 pe-5"  onClick={onClose}></button>
                    <div className="modal-body text-center">
                        <img src={imgSrc} alt={title} className="img-fluid mb-3" />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
