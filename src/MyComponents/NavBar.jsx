import React from 'react'
import brandLogo from '../assets/icons/brandLogo.png'
import profileIcon from '../assets/icons/profile.png'
import cartIcon from '../assets/icons/cart.png'

export default function NavBar() {
  return (
    <div className='nav'>
      <div className="upper">
        <img src={brandLogo} alt="" />
        <div className="icons">
          <img src={profileIcon} alt="" />
          <img src={cartIcon} alt="" />
        </div>
      </div>
      <div className="lower">
        <ul>
          <li>HOME</li>
          <li>STORE</li>
          <li>ACCESSORIES</li>
          <li>BRAND</li>
          <li>PAGES</li>
          <li>ABOUT US</li>
          <li>NEWS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}
