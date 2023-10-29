import React from 'react'
import ViewButton from './ViewButton'

export default function HorizontalCard(props) {
  return (
    <div className='horizontalCard'>
      <img src={props.image} alt="" />
      <div className="cardContent">
        <h2>{props.title}</h2>
        <ViewButton title="VIEW DETAILS" key="disable"/>
      </div>
    </div>
  )
}
