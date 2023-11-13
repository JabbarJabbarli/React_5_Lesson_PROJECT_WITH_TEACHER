import React from 'react'
import "./style.scss"
export const MiniCard = (props) => {
  return (

        <div className={`minicard-wrapper ${props.bgColor}`}>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <span>{props.stockCount} items</span>
        </div>
   
  )
}
