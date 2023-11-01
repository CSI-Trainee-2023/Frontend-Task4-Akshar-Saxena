import React from 'react'
import './ProductDetails.css'
import NavBar from './MyComponents/NavBar'
import { useLocation } from 'react-router-dom'
import Footer from './MyComponents/Footer'
import { useEffect } from 'react'

export default function ProductDetails() {
  const location = useLocation()
  let data = []

  try{
    let temp = localStorage.getItem("data")
    data.push(temp)
  }
  catch(e){
    console.log(e)
  }

  var posImage = 0

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function addToCart() {
    data.push(`${location.state.productName}^${location.state.image}^${location.state.price}|`)
    localStorage.setItem("data", data)
  }

  function goToNext() {
    var slides = document.querySelectorAll('.slides')
    if (slides[slides.length - 1].getBoundingClientRect().left >= window.outerWidth){
      posImage += 100
    }
    slides.forEach(element => {
      element.style.transform = `translateX(-${posImage}%)`
      element.style.transition = '1s'
      element.style.margin = "10px 20px"
    });
  }

  function goToPrev() {
    var slides = document.querySelectorAll('.slides')
    if (posImage > 0) {
      posImage -= 100
    }
    slides.forEach(element => {
      element.style.transform = `translateX(-${posImage}%)`
      element.style.transition = '1s'
    });
  }

  return (
    <>
      <NavBar />
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
          <span><img src="assets/location.png" alt="" /> Not available in stores</span>
          <select id="qty">Select Quantity
            <option value="0">Select Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={addToCart} id="addToCart">ADD TO CART</button>
        </div>
      </div>
      <div className="detailsContainer">
        <h2>Details</h2>
        <h4>{location.state.details}</h4>
        <h4 id="composition">Composition - Cotton 50%, Lyocell 50%</h4>
        <h4 id="tag">Art. No. - 0643448004</h4>
      </div>

      <h2 id='headingYMAL'>Also You May Like</h2>
      <div className="sliderProductPage">
        <button id="prev" onClick={goToPrev}>&lt;</button>
        <button id="next" onClick={goToNext}>&gt;</button>
        {location.state.list.map((element, id) => (
          <img className='slides' key={id} src={`assets/${element.id}`} alt="" />
        ))}
      </div>
      <Footer />
    </>
  )
}
