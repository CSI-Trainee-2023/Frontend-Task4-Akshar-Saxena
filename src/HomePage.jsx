import React from 'react'
import NavBar from './MyComponents/NavBar'
import Footer from './MyComponents/Footer'
import SearchBar from './MyComponents/SearchBar'
import ViewButton from './MyComponents/ViewButton'
import VerticalCard from './MyComponents/VerticalCard'
import HorizontalCard from './MyComponents/HorizontalCard'
import TopRatingCard from './MyComponents/TopRatingCard'
import refund from './assets/refund.png'
import freeShipping from './assets/freeShipping.png'
import support from './assets/support.png'
import verticalImages from './constants/verticalImages.json'
import topRating from './constants/topRatingImages.json'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <SearchBar />

            {/* Banner Image */}
            <div className="banner">
                <div className="iconText">
                    <img src={freeShipping} alt="" />
                    <h3>Free Shipping</h3>
                </div>
                <div className="iconText">
                    <img src={refund} alt="" />
                    <h3>100% Refund</h3>
                </div>
                <div className="iconText">
                    <img src={support} alt="" />
                    <h3>Support 24/7</h3>
                </div>
            </div>

            {/* Main Image */}
            <div className="main">
                <img src='../assets/mainImage.png' alt="" />
                <div className="content">
                    <h3>HOT DEALS THIS WEEK</h3>
                    <h1>SALE 50% OFF MODERN FURNITURE</h1>
                    <ViewButton title="VIEW NOW" key="disable"/>
                </div>
            </div>

            {/* Horizontal Card Holder */}
            <div className="horizontalCardHolder">
                <HorizontalCard image="assets/vintageChair.png" title="INY VINTAGE CHAIR" />
                <HorizontalCard image="assets/vase.png" title="LARGE TERRACOTA VASE" />
            </div>

            {/* Vertical Card Holder */}
            <div className="verticalCardHolder" id='store'>
                {verticalImages.map((element,id) => (
                    <VerticalCard image={`assets/${element.id}`} title1={element.desc} title2={element.price} details={element.details} list={verticalImages} key={id}/>
                ))}
            </div>

            {/* BedSheet Image */}
            <div className="bedSheetSection">
                <img src="assets/bedSheet.png" alt="" />
                <div className="overImageContent">
                    <h2>BEDSHEET SETS</h2>
                    <h3>$50.0 <span>$220.0</span></h3>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste est exercitationem</h4>
                </div>
            </div>

            {/* Top Rating Section */}
            <div className="topRating">
                <h2>Top Rating</h2>
                <div className="topRatingHolder">
                    {topRating.map((element,id) => (
                        <TopRatingCard image={`assets/${element.id}`} title1={element.desc} title2={element.price} key={id}/>
                    ))}
                </div>
            </div>

            {/* SubscribeLetter */}
            <div className="subscribePromotion">
                <div className="headingLeft">
                    <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                    <h3>Subscribe for the latest deals and promotions</h3>
                </div>
                <div className="emailInputField">
                    <input type="email" id="emailInput" />
                    <a href="#"><img src="assets/email.png" alt="" /></a>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            <div className="brandFooter">
                <h3>Brand Registered Name &copy; - All rights reserved</h3>
            </div>
        </>
    )
}