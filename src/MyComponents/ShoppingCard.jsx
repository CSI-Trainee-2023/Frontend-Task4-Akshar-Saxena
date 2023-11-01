import React from 'react'

export default function ShoppingCard(props) {
    return (
        <div className='shoppingCard'>
            <img src={props.image} alt="" />
            <div className="shoppingContent">
                <h2><span>Product Name :</span> {props.proname}</h2>
                <h3><span>Price : </span>{props.proprice}</h3>
                <h3><span>Quantity :</span> {props.qty}</h3>
            </div>
        </div>
    )
}
