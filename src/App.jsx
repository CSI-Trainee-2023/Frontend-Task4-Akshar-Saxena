import './App.css'
import HomePage from './HomePage'
import ProductDetails from './ProductDetails'
import AddToCart from './AddToCart'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


// Main App
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/productdetails' element={<ProductDetails/>}/>
          <Route exact path='/cart' element={<AddToCart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
