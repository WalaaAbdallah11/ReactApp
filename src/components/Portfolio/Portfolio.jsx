import React,{useState} from 'react'
import style from "./portfolio.module.css"
import portfolio1 from "../../assets/portfolio6.png"
import portfolio2 from "../../assets/portfolio1.png"
import portfolio3 from "../../assets/portfolio2.png"
import portfolio4 from "../../assets/portfolio3.png"
import portfolio5 from "../../assets/portfolio4.png"
import portfolio6 from "../../assets/portfolio5.png"
import PortfolioCard from './PortfolioCard'
import Modal from './modal'



export default function Portfolio() {
    const [image , setImage] =useState([
        {id:1, title:"LOG CABIN",image:portfolio1,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."},
        {id:2,title:"TASTY CAKE",image:portfolio2,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."},
        {id:3,title:"CIRCUS TENT",image:portfolio3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."},
        {id:4,title:"CONTROLER",image:portfolio4,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."},
        {id:5,title:"LOCKED SAFE",image:portfolio5,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."},
        {id:6,title:"SUBMARINE",image:portfolio6,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."},
       
    ])

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageData) => {
        setSelectedImage(imageData);
     };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="portfolio pt-5 my-3">
                <h1 className={`${style.title} fw-bold title text-uppercase `}>Portfolio</h1>
                <span className={`${style.icon}`}><i class="fa-solid fa-star fs-3 py-4  "></i></span>
            </div>
            <div className="container mx-auto ">
                <div className="row">
                  {image.map((currentImg,i)=>{
                        return  <PortfolioCard index={i} key={i} img={currentImg} onClick={() => openModal(currentImg)} />
           })}
                </div>
            </div>
            {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
        </>
    )
}
