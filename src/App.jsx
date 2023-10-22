import './App.css'
import NavBar from './MyComponents/NavBar'
import SearchBar from './MyComponents/SearchBar'
import ViewButton from './MyComponents/ViewButton'
import freeShipping from '../src/assets/icons/freeShipping.png'
import refund from '../src/assets/icons/refund.png'
import support from '../src/assets/icons/support.png'
import mainImage from '../src/assets/chairs/mainImage.png'

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
        <img src={mainImage} alt="" />
        <div className="content">
          <h3>HOT DEALS THIS WEEK</h3>
          <h1>SALE 50% OFF MODERN FURNITURE</h1>
          <ViewButton title="VIEW NOW"/>
        </div>
      </div>
      <h2>...</h2>
    </>
  )
}

export default App
