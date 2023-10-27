import React from 'react'
import './ProductDetails.css'
import NavBar from './MyComponents/NavBar'
import { useLocation } from 'react-router-dom'
import Footer from './MyComponents/Footer'
import ViewButton from './MyComponents/ViewButton'
import { useEffect } from 'react'

export default function ProductDetails(props) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
        <h4>{location.state.productName}</h4>
        <div id="itemPicture">
          <img src={location.state.image} alt="" />
        </div>
        <span><img src="../src/assets/icons/location.png" alt="" /> Not available in stores</span>
        <select id="qty">Select Quantity
          <option value="0">Select Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button id="addToCart">ADD TO CART</button>
    </div>
    </div>
    <div className="detailsContainer">
      <h2>Details</h2>
      <h4>{location.state.details}</h4>
      <h4 id="composition">Composition - Cotton 50%, Lyocell 50%</h4>
      <h4 id="tag">Art. No. - 0643448004</h4>
    </div>

    <h2 id='headingYMAL'>Also You May Like</h2>

    <Footer/>
    </>
  )
}
