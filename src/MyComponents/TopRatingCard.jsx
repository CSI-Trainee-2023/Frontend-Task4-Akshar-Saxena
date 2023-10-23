import React from 'react'

export default function TopRatingCard(props) {
  return (
    <div className='topRatingCard'>
      <img src={props.image} alt="image" />
      <div className="priceTopRating">
        <h3>{props.title1}</h3>
        <img src="../src/assets/rating.png" alt="" />
        <h2>{props.title2}</h2>
      </div>
    </div>
  )
}
