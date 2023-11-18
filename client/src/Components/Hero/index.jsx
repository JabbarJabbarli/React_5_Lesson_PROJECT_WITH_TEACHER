import React from 'react'
import location from "../../assets/img/icons/location.svg"
import heroBg from "../../assets/img/pictures/heroBg/heroBg.svg"
import heroImg from "../../assets/img/pictures/heroBg/heroImg.svg"
import "./style.scss"

const Hero = () => {
    return (
        <div className='card-c' style={{ backgroundImage: `url(${heroBg})` }}>

            <div className="container">
                <div className="text-c">

                    <h1>Do not miss our daily <br /> amazing deals</h1>
                    <p>Save up to 60% off on your first order</p>
                    <div className="input-wrapper">
                        <div className="input-c">

                            <img src={location} alt="" />
                            <input type="text" placeholder='Enter your email address' />
                        </div>

                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="heroImg">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero