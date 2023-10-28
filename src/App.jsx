import './App.css'
import AddToCart from './AddToCart'
import HomePage from './HomePage'
import ProductDetails from './ProductDetails'
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
          <Route exact path='/checkout' element={<AddToCart/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
