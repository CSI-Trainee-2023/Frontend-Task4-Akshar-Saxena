import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ViewButton(props) {
  const navigate = useNavigate()
  function Navigator(){
    if(props.key == "enable"){
      navigate("/productdetails", {state: {image: props.image, productName: props.proName, price: props.price, details: props.details, list: props.list}})
    }
  }
  return (
    <button onClick={Navigator} className='view'>{props.title}</button>
  )
}

ViewButton.defaultProps = {
  key: "enable"
}