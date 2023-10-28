import React from 'react'
import brandLogo from '../assets/icons/brandLogo.png'
import profileIcon from '../assets/icons/profile.png'
import cartIcon from '../assets/icons/cart.png'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='nav'>
      <div className="upper">
        <img src={brandLogo} alt="" />
        <div className="icons">
          <img src={profileIcon} alt="" />
          <Link to="/checkout"><img src={cartIcon} alt="" /></Link>
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
