import React from 'react'
import ViewButton from './ViewButton'

export default function VerticalCard(props) {
  return (
    <div className="verticalCardMain">
    <div className="verticalCard">
        <img src={props.image} alt="" />
        <h2>{props.title1}</h2>
        <img src="../src/assets/rating.png" alt="" />
        <h3>{props.title2}</h3>
    </div>
    <div className="hoverBox">
        <img src={props.image} alt="" />
        <div className="hoverContent">
        <h1>DECOR</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sint officia voluptatibus quos odio doloremque aut vel, magni sapiente expedita.</p>
        <ViewButton title="VIEW ALL" image={props.image} proName={props.title1} price={props.title2} details={props.details} list={props.list}/>
        </div>
    </div>
    </div>
  )
}
