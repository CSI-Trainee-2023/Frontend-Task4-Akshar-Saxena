import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ViewButton(props) {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate("/productdetails", {state: {image: props.image, productName: props.proName, price: props.price, details: props.details, list: props.list}})} className='view'>{props.title}</button>
  )
}
