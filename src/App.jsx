import './App.css'
import NavBar from './MyComponents/NavBar'
import SearchBar from './MyComponents/SearchBar'
import ViewButton from './MyComponents/ViewButton'
import VerticalCard from './MyComponents/VerticalCard'
import HorizontalCard from './MyComponents/HorizontalCard'
import freeShipping from '../src/assets/icons/freeShipping.png'
import refund from '../src/assets/icons/refund.png'
import support from '../src/assets/icons/support.png'

function App() {
  return (
    <>
      <NavBar/>
      <SearchBar/>
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
      <div className="main">
        <img src='../src/assets/chairs/mainImage.png' alt="" />
        <div className="content">
          <h3>HOT DEALS THIS WEEK</h3>
          <h1>SALE 50% OFF MODERN FURNITURE</h1>
          <ViewButton title="VIEW NOW"/>
        </div>
      </div>
      <div className="horizontalCardHolder">
        <HorizontalCard image="../src/assets/chairs/vintageChair.png" title="INY VINTAGE CHAIR"/>
        <HorizontalCard image="../src/assets/items/vase.png" title="LARGE TERRACOTA VASE"/>
      </div>
      <div className="verticalCardHolder">
      <VerticalCard image = "../src/assets/items/towel.png" title1 = "Linen Beach Towel" title2 = "9.99$"/>
      <VerticalCard image = "../src/assets/items/plates.png" title1 = "4-pack Small Ceramic Plates" title2 = "29.01$"/>
      <VerticalCard image = "../src/assets/items/glassBox.png" title1 = "Square Clear Glass Box" title2 = "99.9$"/>
      <VerticalCard image = "../src/assets/items/basket.png" title1 = "Metal Wire Basket" title2 = "199.9$"/>
      <VerticalCard image = "../src/assets/items/largeBox.png" title1 = "Large Clear Glass Box" title2 = "149.9$"/>
      <VerticalCard image = "../src/assets/items/mat.png" title1 = "Round Jute Placemat" title2 = "49.9$"/>
      <VerticalCard image = "../src/assets/items/towel.png" title1 = "Linean Beach Towel" title2 = "30$"/>
      <VerticalCard image = "../src/assets/items/towel.png" title1 = "Linean Beach Towel" title2 = "30$"/>
      </div>
      <div className="bedSheetSection">
        <img src="../src/assets/items/bedSheet.png" alt="" />
        <div className="overImageContent">
          <h2>BEDSHEET SETS</h2>
          <h3>$50.0 <span>$220.0</span></h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste est exercitationem</h4>
        </div>
      </div>
    </>
  )
}

export default App
