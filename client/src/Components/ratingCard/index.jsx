import React from 'react'
import yellowStar from "../../assets/img/icons/yellowStar.svg"
import greyStar from "../../assets/img/icons/greyStar.svg"

import "./style.scss"
const RatingCard = ({ item }) => {
    return (

        <div className='ratingCard'>
            <div className="img-wrapper">
                <img src={item.img} alt="" />
            </div>
            <span className="category">{item.title}</span>
            <h1>{item.name}</h1>
            <div className="rating-stars">

                {[...Array(item.ratingBy5)].map((x, index) => (
                    <img key={index} src={yellowStar} alt="" />
                ))}

                {[...Array(5 - item.ratingBy5)].map((x, index) => (
                    <img key={index + item.ratingBy5} src={greyStar} alt="" />
                ))}


            </div>
            <div className="soldBy">
                <p>By
                    <span>{item.producer}</span>
                </p>
            </div>
            <div className="purchase-wrapper">

                <p>
                    <span id='currentPrice'>${item.currentPrice}</span>
                    {
                        item.hasDiscount && (
                            <span id='discountLine'>${item.beforePrice}</span>
                        )
                    }
                </p>
                <button>
                    <img src={item.btnImg} alt="" />
                    Add
                </button>
            </div>

        </div>
    );
}

export default RatingCard