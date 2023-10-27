import React from 'react'
import NavBar from './MyComponents/NavBar'
import Footer from './MyComponents/Footer'
import SearchBar from './MyComponents/SearchBar'
import ViewButton from './MyComponents/ViewButton'
import VerticalCard from './MyComponents/VerticalCard'
import HorizontalCard from './MyComponents/HorizontalCard'
import TopRatingCard from './MyComponents/TopRatingCard'
import freeShipping from '../src/assets/icons/freeShipping.png'
import refund from '../src/assets/icons/refund.png'
import support from '../src/assets/icons/support.png'

// Vertical Images
const verticalImages = [
    {
        id: "towel.png",
        desc: "Linen Beach Towel",
        price: "9.99$",
        details: "Twin duvet cover set in soft, woven fabric made from a Tencel Iyocell and cotton blend with a printed pattern. One pillowcase. Thread count 144."
    },
    {
        id: "plates.png",
        desc: "4-pack Small Ceramic Plates",
        price: "29.01$",
        details: "Glazed ceramic plates with a small rim. Height approx. 2 cm, diameter at the top 14 cm."
    },
    {
        id: "glassBox.png",
        desc: "Square Clear Glass",
        price: "99.9$",
        details: "A square clear box is a transparent, four-sided container with see-through walls, often made of glass, allowing easy visibility of its contents."
    },
    {
        id: "basket.png",
        desc: "Metal Wire Basket",
        price: "199.9$",
        details: "A metal wire basket is a sturdy container constructed from interwoven metal wires, forming an open, breathable structure ideal for storage and organization."
    },
    {
        id: "largeBox.png",
        desc: "Large Clear Glass Box",
        price: "149.9$",
        details: "A large clear glass box is a spacious, transparent container made of glass, with four see-through sides, typically used for displaying or storing items while providing a clear view of its contents."
    },
    {
        id: "mat.png",
        desc: "Round Jute Placemat",
        price: "49.9$",
        details: "A round jute placemat is a circular dining accessory made from natural jute fibers, adding a rustic and eco-friendly touch to table settings while protecting surfaces."
    },
    {
        id: "basket.png",
        desc: "Metal Wire Basket",
        price: "199.9$",
        details: "A metal wire basket is a sturdy container constructed from interwoven metal wires, forming an open, breathable structure ideal for storage and organization."
    },
    {
        id: "basket.png",
        desc: "Metal Wire Basket",
        price: "199.9$",
        details: "A metal wire basket is a sturdy container constructed from interwoven metal wires, forming an open, breathable structure ideal for storage and organization."
    },

]

// Top Rating Images
const topRating = [
    {
        id: "Tray.png",
        desc: "Tray with Foot",
        price: "19.9$"
    },
    {
        id: "cushion.png",
        desc: "Twill Seat Cushion",
        price: "29.9$"
    },
    {
        id: "beverageGlass.png",
        desc: "Fluted Beverage Glass",
        price: "49.9$"
    },
    {
        id: "eggCup.png",
        desc: "Ceramic Egg Cup",
        price: "49.9$"
    },
    {
        id: "bambooBox.png",
        desc: "Small Bamboo Box",
        price: "9.99$",
    },
    {
        id: "cutleryBasket.png",
        desc: "Metal Cutlery Basket",
        price: "29.9$"
    },
    {
        id: "ceramicCups.png",
        desc: "4-pack Ceramic Cups",
        price: "49.9$"
    },
    {
        id: "Napkins.png",
        desc: "2-pack Linen Napkins",
        price: "9.99$"
    },
    {
        id: "stonewarePlate.png",
        desc: "Glazed Stoneware Plate",
        price: "99.9$"
    }
]


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
                <img src='../src/assets/chairs/mainImage.png' alt="" />
                <div className="content">
                    <h3>HOT DEALS THIS WEEK</h3>
                    <h1>SALE 50% OFF MODERN FURNITURE</h1>
                    <ViewButton title="VIEW NOW" />
                </div>
            </div>

            {/* Horizontal Card Holder */}
            <div className="horizontalCardHolder">
                <HorizontalCard image="../src/assets/chairs/vintageChair.png" title="INY VINTAGE CHAIR" />
                <HorizontalCard image="../src/assets/items/vase.png" title="LARGE TERRACOTA VASE" />
            </div>

            {/* Vertical Card Holder */}
            <div className="verticalCardHolder" id='store'>
                {verticalImages.map((element) => (
                    <VerticalCard image={`../src/assets/items/${element.id}`} title1={element.desc} title2={element.price} details={element.details}/>
                ))}
            </div>

            {/* BedSheet Image */}
            <div className="bedSheetSection">
                <img src="../src/assets/items/bedSheet.png" alt="" />
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
                    {topRating.map((element) => (
                        <TopRatingCard image={`../src/assets/items/${element.id}`} title1={element.desc} title2={element.price} />
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
                    <a href="#"><img src="../src/assets/icons/email.png" alt="" /></a>
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
