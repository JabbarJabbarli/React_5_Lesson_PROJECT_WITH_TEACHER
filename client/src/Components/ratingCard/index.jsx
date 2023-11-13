import React from 'react'
import yellowStar from "../../assets/img/icons/yellowStar.svg"
import greyStar from "../../assets/img/icons/greyStar.svg"

import "./style.scss"
const RatingCard = (props) => {
    return (
        <div className='ratingCard'>
            <div className="img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <span className="category">{props.title}</span>
            <h1>{props.name}</h1>
            <div className="rating-stars">
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={greyStar} alt="" />
                <img src={greyStar} alt="" />
            </div>
            <div className="soldBy">
                <p>By<span>{props.producer}</span></p>
            </div>
            <div className="purchase-wrapper">
                <p><span>$ {props.discountPrice}</span>
                    $ {props.price}
                </p>
                <button>
                    <img src={props.btnImg} alt="" />
                    Add
                </button>
            </div>

        </div>
    );
}

export default RatingCard