import React from 'react'

export default function ShoppingCard(props) {
    return (
        <div className='shoppingCard'>
            <img src={props.image} alt="" />
            <div className="shoppingContent">
                <h2>{props.proname}</h2>
                <h3>{props.proprice}</h3>
            </div>
        </div>
    )
}
