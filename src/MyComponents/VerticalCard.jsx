import React from 'react'

export default function VerticalCard(props) {
  return (
    <div className="verticalCard">
        <img src={props.image} alt="" />
        <h2>{props.title1}</h2>
        <img src="../src/assets/rating.png" alt="" />
        <h3>{props.title2}</h3>
    </div>
  )
}
