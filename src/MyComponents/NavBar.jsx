import React from 'react'
import brandLogo from '../assets/brandLogo.png'
import profileIcon from '../assets/profile.png'
import cartIcon from '../assets/cart.png'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='nav'>
      <div className="upper">
        <Link to="/"><img src={brandLogo} alt=""/></Link>
        <div className="icons">
          <img src={profileIcon} alt="" />
          <img src={cartIcon} alt="" />
        </div>
      </div>
      <div className="lower">
        <ul>
          {/* <li><Link to="/">HOME</Link></li> */}
          <Link to="/" style={{textDecoration: "none"}}><li>HOME</li></Link>
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
