import React from 'react'
import ratingImage from "../constants/ratingImages.json"

export default function TopRatingCard(props) {
  const randIdx = Math.floor(Math.random() * ratingImage.length)
  return (
    <div className='topRatingCard'>
      <img src={props.image} alt="image" />
      <div className="priceTopRating">
        <h3>{props.title1}</h3>
        <img src={ratingImage[randIdx].src} alt="" />
        <h2>{props.title2}</h2>
      </div>
    </div>
  )
}
