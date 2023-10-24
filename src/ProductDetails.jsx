import React from 'react'
import './ProductDetails.css'
import NavBar from './MyComponents/NavBar'
import { useLocation } from 'react-router-dom'

export default function ProductDetails(props) {
  const location = useLocation()
  return (
    <>
    <NavBar/>
    <div className="containerProduct">
    <div className="left">
        <img src={location.state.image} alt="" />
        <img src={location.state.image} alt="" />
        <img src={location.state.image} alt="" />
    </div>
    <div className="right">
        <h1>{location.state.productName}</h1>
        <h3>{location.state.price}</h3>
    </div>
    </div>
    </>
  )
}
