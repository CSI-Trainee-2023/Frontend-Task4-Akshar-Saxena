import React from 'react'
import shoppingLinks from '../constants/shoppingFooter.json'
import moreLinks from '../constants/moreLinks.json'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footerCard">
        <h2>BRAND NAME</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur iure facilis amet unde ipsum qui modi vel, odit necessitatibus.</p>
        <p id="add">121 King Street, Melbourne 3000</p>
        <p id="num">+12 3 0000 0000</p>
        <p id="mail">contact@brandemail.com</p>
        <div className="links">
          <img src="../src/assets/icons/facebook.png" alt="" />
          <img src="../src/assets/icons/twitter.png" alt="" />
          <img src="../src/assets/icons/insta.png" alt="" />
          <img src="../src/assets/icons/ytbe.png" alt="" />
        </div>
      </div>
      <div className="footerCard">
        <h2>SHOPPING</h2>
        <ul>
          {shoppingLinks.map((element) => (
            <li>{element.link}</li>
          ))}
        </ul>
      </div>
      <div className="footerCard">
        <h2>MORE LINKS</h2>
        <ul>
          {moreLinks.map((element) => (
            <li>{element.link}</li>
          ))}
        </ul>
      </div>
      <div className="footerCard">
        <h2>PROMO UPDATE</h2>
        <div className="update">
          <h2>14 <span>MAY</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <h3>3 comments</h3>
        </div>
        <hr/>
        <div className="update">
        <h2>15 <span>JULY</span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <h3>3 comments</h3>
        </div>
      </div>
    </div>
  )
}
