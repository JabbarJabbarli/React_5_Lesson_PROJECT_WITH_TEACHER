import React from 'react'
import "./style.scss"
import shopPerson from "../../assets/img/pictures/shopDelivery/shopImg.svg"


export const ShoppingCard = () => {
    return (
        <div className='delivery-wrapper'>
            <div className='shop-c'>
                <div className='shop-txt'>
                    <p>Free Delivery</p>
                    <h1>Free delivery over $50</h1>
                    <button>Shop Now <img src="" alt="" /></button>
                </div>
                <div className="shop-img">
                    <img src={shopPerson} alt="" />
                </div>
            </div>
        </div>
    )
}
